"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MarkdownContent from "@/components/content/MarkdownContent";
import LuckySpinEntryForm from "@/components/sections/register/LuckySpinEntryForm";
import LuckySpinWheel from "@/components/sections/register/LuckySpinWheel";
import { getLuckySpinSettings, submitLuckySpin } from "@/lib/lucky-spin";
import type {
  LuckySpinEntryPayload,
  LuckySpinOutcomeType,
  LuckySpinSettings,
} from "@/types/lucky-spin";

type SpinResponse = {
  result?: {
    Label?: string;
    ResultLabel?: string;
    OutcomeType?: LuckySpinOutcomeType;
    RewardValue?: string | null;
    RewardDescription?: string | null;
  };
  message?: string;
};

type SpinResult = {
  outcome: LuckySpinOutcomeType;
  label: string;
  description?: string | null;
  rewardValue?: string | null;
};

const SPIN_ANIMATION_MS = 4000;

function formatCampaignDate(value?: string | null) {
  if (!value) return null;

  const date = new Date(`${value.slice(0, 10)}T00:00:00`);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function replaceRewardPlaceholder(content: string, rewardName: string) {
  return content.replace(/\{\{\s*rewardName\s*\}\}/gi, rewardName);
}

export default function LuckySpinSection() {
  const [settings, setSettings] = useState<LuckySpinSettings | null>(null);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [settingsError, setSettingsError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<
    number | null
  >(null);
  const [notice, setNotice] = useState("");
  const [spinResult, setSpinResult] = useState<SpinResult | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const portalRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setPortalTarget(node);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadSettings() {
      try {
        const result = await getLuckySpinSettings();

        if (!cancelled) {
          setSettings(result);
          setSettingsError("");
        }
      } catch (error) {
        if (!cancelled) {
          setSettingsError(
            error instanceof Error
              ? error.message
              : "Unable to load the Lucky Spin campaign.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingSettings(false);
        }
      }
    }

    void loadSettings();

    return () => {
      cancelled = true;
    };
  }, []);

  const isBusy = submitting || spinning;

  const closeModal = useCallback(() => {
    if (isBusy) return;
    setModalOpen(false);
  }, [isBusy]);

  useEffect(() => {
    if (!modalOpen) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !isBusy) {
        setModalOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [modalOpen, isBusy]);

  function openModal() {
    setAvailabilityMessage("");

    if (loadingSettings || settingsError || !settings) {
      setAvailabilityMessage(
        settingsError || "Campaign details are currently unavailable. Please try again later.",
      );
      return;
    }

    if (!settings.Active) {
      setAvailabilityMessage(
        "The wheel is not active yet. Please contact the admin.",
      );
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const campaignStart = settings.StartDate
      ? new Date(`${settings.StartDate.slice(0, 10)}T00:00:00`)
      : null;

    const campaignEnd = settings.EndDate
      ? new Date(`${settings.EndDate.slice(0, 10)}T00:00:00`)
      : null;

    if (campaignStart && !Number.isNaN(campaignStart.getTime()) && today < campaignStart) {
      setAvailabilityMessage(
        "The wheel has not started yet. Please check back during the campaign period.",
      );
      return;
    }

    if (campaignEnd && !Number.isNaN(campaignEnd.getTime()) && today > campaignEnd) {
      setAvailabilityMessage(
        "The wheel is expired now. Try again and look for other active promotions on the site.",
      );
      return;
    }

    setNotice("");
    setSpinResult(null);
    setSelectedSegmentIndex(null);
    setModalOpen(true);
  }

  async function handleSpinSubmit(payload: LuckySpinEntryPayload) {
    if (isBusy) return;

    setSubmitting(true);
    setNotice("");
    setSpinResult(null);
    setSelectedSegmentIndex(null);

    try {
      const response = await submitLuckySpin(payload);
      const spinData = response.data as SpinResponse | null;
      const result = spinData?.result;

      if (!result) {
        throw new Error("The server did not return a Lucky Spin result.");
      }

      const resultLabel = result.Label ?? result.ResultLabel;

      if (!resultLabel) {
        throw new Error("The server returned an invalid Lucky Spin result.");
      }

      if (result.OutcomeType !== "prize" && result.OutcomeType !== "no_prize") {
        throw new Error("The server returned an invalid prize outcome.");
      }

      const orderedSegments = [...(settings?.Segments ?? [])].sort(
        (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0),
      );

      const resultIndex = orderedSegments.findIndex(
        (segment) =>
          segment.Label === resultLabel &&
          segment.OutcomeType === result.OutcomeType,
      );

      setSpinResult({
        outcome: result.OutcomeType,
        label: resultLabel,
        description: result.RewardDescription,
        rewardValue: result.RewardValue,
      });

      setSelectedSegmentIndex(resultIndex >= 0 ? resultIndex : null);
      setSpinning(true);

      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, SPIN_ANIMATION_MS);
      });
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "The spin request could not be completed. Please try again.",
      );
    } finally {
      setSpinning(false);
      setSubmitting(false);
    }
  }

  const segments = settings?.Segments ?? [];
  const startDate = formatCampaignDate(settings?.StartDate);
  const endDate = formatCampaignDate(settings?.EndDate);
  const adminContact = settings?.AdminContact?.trim();

  const winnersMessage = settings?.WinnersMessage?.trim()
    ? replaceRewardPlaceholder(settings.WinnersMessage, spinResult?.label ?? "")
    : "";

  const modal =
    modalOpen && settings ? (
      <div
        className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/85 p-2 backdrop-blur-md sm:p-4 lg:p-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="lucky-spin-modal-title"
          className="relative my-auto flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#08080c] shadow-[0_0_70px_rgba(255,20,115,0.13)] sm:rounded-3xl"
        >
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#0b0a0f] px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff1473] sm:text-xs">
                Nexa Poker Rewards
              </p>

              <h2
                id="lucky-spin-modal-title"
                className="mt-1 text-lg font-black text-white sm:text-xl"
              >
                {spinResult ? "Your Lucky Spin Result" : "Join Lucky Spin"}
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              disabled={isBusy}
              aria-label="Close Lucky Spin"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:border-[#ff1473]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1473] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ×
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="grid items-start gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="min-w-0 p-3 sm:p-5 lg:p-6">
                {!spinResult && (
                  <>
                    <div className="mb-5">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff6da5]">
                        Existing Player
                      </p>

                      <h3 className="mt-1 text-xl font-black text-white">
                        Enter your details
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Enter your player UID and username to participate. Each
                        eligible UID can spin only once.
                      </p>
                    </div>

                    <LuckySpinEntryForm
                      onSubmit={handleSpinSubmit}
                      loading={isBusy}
                      termsAndConditions={settings.TermsAndConditions}
                      disabled={isBusy}
                    />

                    {notice && (
                      <p
                        role="alert"
                        aria-live="polite"
                        className="mt-3 whitespace-pre-wrap rounded-xl border border-[#ff1473]/20 bg-[#190710] p-3 text-sm leading-5 text-slate-200"
                      >
                        {notice}
                      </p>
                    )}
                  </>
                )}

                {spinResult && !spinning && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-2xl border p-4 sm:p-6 ${
                      spinResult.outcome === "prize"
                        ? "border-[#ff1473]/30 bg-[#ff1473]/6"
                        : "border-white/15 bg-white/2.5"
                    }`}
                  >
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] ${
                        spinResult.outcome === "prize"
                          ? "border-[#ff1473]/35 text-[#ff6da5]"
                          : "border-white/20 text-slate-300"
                      }`}
                    >
                      {spinResult.outcome === "prize"
                        ? "Winning result"
                        : "Spin completed"}
                    </span>

                    {spinResult.outcome === "prize" ? (
                      <>
                        {winnersMessage && (
                          <div className="mt-4 text-sm leading-6 text-slate-300 [&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-black [&_h1]:leading-tight [&_h1]:text-white [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-bold [&_strong]:text-white [&_p]:my-3 [&_a]:text-[#ff6da5] [&_a]:underline">
                            <MarkdownContent content={winnersMessage} />
                          </div>
                        )}

                        {adminContact && (
                          <a
                            href={adminContact}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-[#ff1473] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#d90b62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            Contact Admin
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                          {spinResult.label}
                        </h3>

                        {settings.NoPrizeMessage?.trim() && (
                          <div className="mt-3 text-sm leading-6 text-slate-300 [&_h1]:mb-2 [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-white [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-bold [&_strong]:text-white [&_p]:my-3 [&_a]:text-[#ff6da5] [&_a]:underline">
                            <MarkdownContent
                              content={settings.NoPrizeMessage}
                            />
                          </div>
                        )}
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="mt-5 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-[#ff1473]/40 hover:bg-white/8"
                    >
                      Close
                    </button>
                  </div>
                )}

                {spinning && (
                  <div
                    className="rounded-xl border border-[#ff1473]/20 bg-[#ff1473]/5 p-5 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="mx-auto block size-6 animate-spin rounded-full border-2 border-[#ff1473]/30 border-t-[#ff1473]" />

                    <p className="mt-3 font-bold text-white">
                      Your wheel is spinning
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Revealing your result...
                    </p>
                  </div>
                )}
              </div>

              <aside className="min-w-0 border-t border-white/10 bg-linear-to-br from-[#100810] to-[#07080c] p-3 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
                <div className="mb-4 text-center">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff1473]">
                    One UID. One spin.
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Lucky Spin
                  </h3>
                </div>

                <div className="mx-auto w-full max-w-115">
                  <LuckySpinWheel
                    segments={segments}
                    spinning={spinning}
                    selectedSegmentIndex={selectedSegmentIndex}
                    disabled={isBusy || !!spinResult}
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    ) : null;

  return (
    <>
      <section
        id="lucky-spin"
        className="relative isolate overflow-hidden bg-[#050609] px-4 py-8 text-white sm:px-6 sm:py-12"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_50%,rgba(255,20,115,0.09),transparent_42%),radial-gradient(ellipse_at_90%_50%,rgba(255,20,115,0.05),transparent_42%)]" />

        <div className="mx-auto max-w-330">
          {loadingSettings ? (
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#09090d]/90 px-5 py-8">
              <span className="size-5 animate-spin rounded-full border-2 border-[#ff1473]/30 border-t-[#ff1473]" />

              <p className="text-sm text-slate-300">
                Loading Lucky Spin campaign...
              </p>
            </div>
          ) : !settings ? (
            <div className="rounded-2xl border border-white/10 bg-[#09090d]/90 p-5 sm:p-7">
              <h2 className="text-xl font-black text-white">
                Nexa Poker Lucky Spin
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {settingsError ||
                  (!settings
                    ? "Campaign details are currently unavailable."
                    : "The campaign is currently inactive. Please check back later.")}
              </p>
            </div>
          ) : (
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-r from-[#140811] via-[#0b090d] to-[#10070b] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.32)] transition duration-300 hover:border-[#ff1473]/25 sm:rounded-3xl sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-linear-to-b from-[#ff1473] via-[#d90b62] to-transparent" />

              <div className="pointer-events-none absolute -right-16 -top-24 size-56 rounded-full bg-[#ff1473]/6 blur-3xl transition group-hover:bg-[#ff1473]/10" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-[#ff1473]/30 bg-[#ff1473]/8 text-4xl shadow-[0_0_24px_rgba(255,20,115,0.08)] sm:size-20 sm:text-5xl">
                    🎡
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
                        Nexa Poker Lucky Spin
                      </h2>

                      <span className="rounded-full border border-[#ff1473]/25 bg-[#ff1473]/6 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ff6da5]">
                        One spin per UID
                      </span>
                    </div>

                    {(startDate || endDate) && (
                      <p className="mt-2 text-xs text-slate-500">
                        Campaign period: {startDate ?? "—"} – {endDate ?? "—"}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-[#ff1473]/70 bg-linear-to-r from-[#ff1473] to-[#d90b62] px-7 py-3 text-sm font-extrabold text-white shadow-[0_6px_22px_rgba(255,20,115,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,20,115,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1473] disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-48"
                >
                  Join Lucky Spin
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <div ref={portalRef} />

      {portalTarget && modal && createPortal(modal, portalTarget)}

      {availabilityMessage && (
        <div
          className="fixed inset-0 z-110 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setAvailabilityMessage("");
            }
          }}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="lucky-spin-availability-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0a0f] p-6 shadow-2xl"
          >
            <h2
              id="lucky-spin-availability-title"
              className="text-xl font-black text-white"
            >
              Nexa Poker Lucky Spin
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {availabilityMessage}
            </p>

            <button
              type="button"
              autoFocus
              onClick={() => setAvailabilityMessage("")}
              className="mt-6 w-full rounded-full bg-[#ff1473] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d90b62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Close
            </button>
          </section>
        </div>
      )}
    </>
  );
}
