"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MarkdownContent from "@/components/content/MarkdownContent";
import LuckySpinCard from "@/components/sections/register/LuckySpinCard";
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
    DisplayOrder?: number | null;
    RewardValue?: string | null;
  };
  message?: string;
};

type SpinResult = {
  outcome: LuckySpinOutcomeType;
  label: string;
  rewardValue: string;
};

type PlayerDetails = {
  UID: string;
  Username: string;
};

const SPIN_ANIMATION_MS = 4000;

function isCampaignAvailable(settings: LuckySpinSettings) {
  const now = Date.now();

  if (!settings.Active) return false;

  if (settings.StartDate) {
    const start = Date.parse(settings.StartDate);
    if (!Number.isNaN(start) && now < start) return false;
  }

  if (settings.EndDate) {
    const end = Date.parse(settings.EndDate);
    if (!Number.isNaN(end) && now > end) return false;
  }

  return true;
}

function replacePlaceholders(
  content: string,
  player: PlayerDetails,
  rewardValue: string,
) {
  return content
    .replace(/\{\{\s*rewardName\s*\}\}/gi, rewardValue)
    .replace(/\{\{\s*playerUID\s*\}\}/gi, player.UID)
    .replace(/\{\{\s*playerUsername\s*\}\}/gi, player.Username);
}

function normalizeExternalUrl(value?: string | null) {
  const trimmed = value?.trim();
  if (!trimmed) return "";

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);

    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return "";
    }

    return parsed.toString();
  } catch {
    return "";
  }
}

export default function LuckySpinSection() {
  const [settings, setSettings] = useState<LuckySpinSettings | null>(null);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [settingsError, setSettingsError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<
    number | null
  >(null);
  const [spinResult, setSpinResult] = useState<SpinResult | null>(null);
  const [player, setPlayer] = useState<PlayerDetails>({
    UID: "",
    Username: "",
  });
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
        if (!cancelled) setLoadingSettings(false);
      }
    }

    void loadSettings();

    return () => {
      cancelled = true;
    };
  }, []);

  const isBusy = submitting || spinning;

  const segments = useMemo(
    () =>
      (settings?.Segments ?? [])
        .map((segment, originalIndex) => ({ segment, originalIndex }))
        .sort(
          (a, b) =>
            (a.segment.DisplayOrder ?? a.originalIndex) -
              (b.segment.DisplayOrder ?? b.originalIndex) ||
            a.originalIndex - b.originalIndex,
        )
        .map(({ segment }) => segment),
    [settings?.Segments],
  );

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

  function showPopup(message: string) {
    setPopupMessage(message);
  }

  function openModal() {
    setAvailabilityMessage("");
    setPopupMessage("");

    if (loadingSettings || !settings) {
      setAvailabilityMessage(
        settingsError ||
          "Campaign details are currently unavailable. Please try again later.",
      );
      return;
    }

    if (!isCampaignAvailable(settings)) {
      const now = Date.now();
      const start = settings.StartDate ? Date.parse(settings.StartDate) : null;
      const end = settings.EndDate ? Date.parse(settings.EndDate) : null;

      if (!settings.Active) {
        setAvailabilityMessage(
          "The Lucky Spin campaign is currently inactive. Please explore our other promotions.",
        );
      } else if (start !== null && !Number.isNaN(start) && now < start) {
        setAvailabilityMessage(
          "The Lucky Spin campaign has not started yet. Please check back during the campaign period.",
        );
      } else if (end !== null && !Number.isNaN(end) && now > end) {
        setAvailabilityMessage(
          "The Lucky Spin campaign has ended. Visit our promotions page to explore other offers.",
        );
      } else {
        setAvailabilityMessage(
          "The Lucky Spin campaign is currently unavailable. Please try again later.",
        );
      }

      return;
    }

    setPopupMessage("");
    setSpinResult(null);
    setSelectedSegmentIndex(null);
    setPlayer({ UID: "", Username: "" });
    setModalOpen(true);
  }

  async function handleSpinSubmit(payload: LuckySpinEntryPayload) {
    if (isBusy) return;

    const currentPlayer = {
      UID: payload.UID.trim(),
      Username: payload.Username.trim(),
    };

    setPlayer(currentPlayer);
    setSubmitting(true);
    setPopupMessage("");
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

      const resultIndex =
        result.DisplayOrder != null
          ? segments.findIndex(
              (segment) => segment.DisplayOrder === result.DisplayOrder,
            )
          : segments.findIndex(
              (segment) =>
                segment.Label === resultLabel &&
                segment.OutcomeType === result.OutcomeType,
            );

      if (resultIndex < 0) {
        throw new Error(
          "The result was received, but its matching wheel segment could not be identified. Please contact support before trying again.",
        );
      }

      setSpinResult({
        outcome: result.OutcomeType,
        label: resultLabel,
        rewardValue: result.RewardValue?.trim() || resultLabel,
      });

      setSelectedSegmentIndex(resultIndex);
      setSubmitting(false);
      setSpinning(true);

      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, SPIN_ANIMATION_MS);
      });
    } catch (error) {
      showPopup(
        error instanceof Error
          ? error.message
          : "The spin request could not be completed. Please try again.",
      );
    } finally {
      setSpinning(false);
      setSubmitting(false);
    }
  }

  const promotionUrl = settings?.PromotionPageURL?.trim();

  const winnersMessage =
    settings?.WinnersMessage?.trim() && spinResult
      ? replacePlaceholders(
          settings.WinnersMessage,
          player,
          spinResult.rewardValue,
        )
      : "";

  const noPrizeMessage = settings?.NoPrizeMessage?.trim()
    ? settings.NoPrizeMessage
    : [
        "# Better luck next time!",
        "",
        "Thanks for playing!",
        "",
        "Your Lucky Spin has been completed, and this result does not include a prize.",
        "",
        "Each eligible UID is entitled to one spin during this campaign, so your spin has now been used.",
        "",
        "Stay connected with the Nexa Poker community for upcoming promotions, tournaments, and exciting rewards. We hope to see you at the tables!",
      ].join("\n");

  const communityUrl = normalizeExternalUrl(settings?.CommunityTelegramURL);
  const adminContactUrl = normalizeExternalUrl(settings?.AdminContact);

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
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#0b0a0f] px-4 py-3 sm:px-6">
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
                        Enter your Player UID and username to participate. Each
                        UID can spin only once.
                      </p>
                    </div>

                    <LuckySpinEntryForm
                      onSubmit={handleSpinSubmit}
                      onError={showPopup}
                      onPlayerChange={setPlayer}
                      loading={isBusy}
                      termsAndConditions={settings.TermsAndConditions}
                      disabled={isBusy}
                    />
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
                        {winnersMessage ? (
                          <div className="mt-3 text-sm leading-6 text-slate-300 [&_h1]:text-2xl [&_h1]:font-black [&_h1]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-bold [&_strong]:text-white [&_p]:my-3 [&_a]:text-[#ff6da5] [&_a]:underline">
                            <MarkdownContent content={winnersMessage} />
                          </div>
                        ) : (
                          <div className="mt-4">
                            <h3 className="text-2xl font-black text-white">
                              Congratulations! 🎉
                            </h3>
                            <p className="mt-3 text-slate-300">
                              You have won{" "}
                              <strong className="text-white">
                                {spinResult.rewardValue}
                              </strong>{" "}
                              in the Nexa Poker Lucky Spin!
                            </p>
                            <p className="mt-3 text-sm leading-6 text-slate-400">
                              Share a screenshot of this winning screen with
                              your UID and username to claim your prize.
                            </p>
                          </div>
                        )}

                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {communityUrl && (
                            <a
                              href={communityUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#229ED9] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#168ac0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                              Share Result
                            </a>
                          )}

                          {adminContactUrl && (
                            <a
                              href={adminContactUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white transition hover:border-[#ff1473]/50 hover:bg-white/10"
                            >
                              Contact Admin
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="mt-3 text-sm leading-6 text-slate-300 [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_h3]:font-bold [&_h3]:text-white [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-bold [&_strong]:text-white [&_p]:my-3 [&_p]:text-slate-300 [&_a]:text-[#ff6da5] [&_a]:underline">
                        <MarkdownContent content={noPrizeMessage} />
                      </div>
                    )}
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
      <LuckySpinCard
        onJoin={openModal}
        loading={loadingSettings}
        startDate={settings?.StartDate}
        endDate={settings?.EndDate}
        error={!settings && !loadingSettings ? settingsError : ""}
      />

      <div ref={portalRef} />

      {portalTarget && modal && createPortal(modal, portalTarget)}

      {popupMessage && (
        <div className="fixed inset-x-3 top-4 z-130 mx-auto max-w-md">
          <div
            role="alert"
            aria-live="assertive"
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111018] p-4 shadow-[0_12px_45px_rgba(0,0,0,0.55)]"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#ff1473]/40 bg-[#ff1473]/10 text-sm font-black text-[#ff6da5]">
              !
            </span>

            <p className="min-w-0 flex-1 whitespace-pre-wrap text-sm leading-6 text-slate-200">
              {popupMessage}
            </p>

            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setPopupMessage("")}
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}

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
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ff6da5]">
              Nexa Poker Promotions
            </p>

            <h2
              id="lucky-spin-availability-title"
              className="mt-2 text-xl font-black text-white"
            >
              Lucky Spin unavailable
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {availabilityMessage}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {promotionUrl && (
                <a
                  href={promotionUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ff1473] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d90b62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  View Promotions
                </a>
              )}

              <button
                type="button"
                onClick={() => setAvailabilityMessage("")}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
