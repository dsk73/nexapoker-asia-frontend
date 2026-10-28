"use client";

import { useState, type FormEvent } from "react";
import MarkdownContent from "@/components/content/MarkdownContent";
import type { LuckySpinEntryPayload } from "@/types/lucky-spin";

interface LuckySpinEntryFormProps {
  onSubmit: (payload: LuckySpinEntryPayload) => void | Promise<void>;
  onError?: (message: string) => void;
  onPlayerChange?: (player: { UID: string; Username: string }) => void;
  loading?: boolean;
  termsAndConditions?: string | null;
  disabled?: boolean;
}

export default function LuckySpinEntryForm({
  onSubmit,
  onError,
  onPlayerChange,
  loading = false,
  termsAndConditions,
  disabled = false,
}: LuckySpinEntryFormProps) {
  const [uid, setUid] = useState("");
  const [username, setUsername] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isDisabled = disabled || loading;

  const inputClassName =
    "w-full min-w-0 rounded-xl border border-white/10 bg-[#050914] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-[#ff1473]/70 focus:ring-2 focus:ring-[#ff1473]/10 disabled:cursor-not-allowed disabled:opacity-50";

  function reportError(message: string) {
    onError?.(message);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanUid = uid.trim();
    const cleanUsername = username.trim();

    if (!cleanUid || !cleanUsername) {
      reportError("Please enter both your Player UID and username.");
      return;
    }

    if (cleanUid.length > 100 || cleanUsername.length > 100) {
      reportError(
        "Your Player UID and username must be 100 characters or fewer.",
      );
      return;
    }

    if (!termsAccepted) {
      reportError("Please accept the terms and conditions to continue.");
      return;
    }

    try {
      await onSubmit({
        UID: cleanUid,
        Username: cleanUsername,
        TermsAccepted: true,
      });
    } catch (submissionError) {
      reportError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your spin could not be submitted. Please try again.",
      );
    }
  }

  return (
    <form
      id="lucky-spin-entry-form"
      onSubmit={handleSubmit}
      noValidate
      className="relative w-full space-y-5 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#101019] via-[#0b0b11] to-[#08080c] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.25)] sm:p-5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ff1473]/70 to-transparent" />

      {/* Player UID */}
      <div className="space-y-2">
        <label
          htmlFor="lucky-spin-uid"
          className="block text-sm font-bold text-slate-200"
        >
          Player UID <span className="text-[#ff6da5]">*</span>
        </label>

        <input
          id="lucky-spin-uid"
          name="uid"
          type="text"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={100}
          value={uid}
          onChange={(event) => {
            const nextUid = event.target.value;
            setUid(nextUid);

            onPlayerChange?.({
              UID: nextUid.trim(),
              Username: username.trim(),
            });
          }}
          placeholder="Enter your player UID"
          disabled={isDisabled}
          className={inputClassName}
        />
      </div>

      {/* Username */}
      <div className="space-y-2">
        <label
          htmlFor="lucky-spin-username"
          className="block text-sm font-bold text-slate-200"
        >
          Username <span className="text-[#ff6da5]">*</span>
        </label>

        <input
          id="lucky-spin-username"
          name="username"
          type="text"
          autoComplete="username"
          maxLength={100}
          value={username}
          onChange={(event) => {
            const nextUsername = event.target.value;
            setUsername(nextUsername);

            onPlayerChange?.({
              UID: uid.trim(),
              Username: nextUsername.trim(),
            });
          }}
          placeholder="Enter your poker username"
          disabled={isDisabled}
          className={inputClassName}
        />
      </div>

      {/* Terms and conditions */}
      {termsAndConditions?.trim() && (
        <details className="group overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:text-white">
            <span>Read terms and conditions</span>

            <span
              aria-hidden="true"
              className="text-[#ff6da5] transition-transform group-open:rotate-180"
            >
              ↓
            </span>
          </summary>

          <div className="max-h-48 overflow-y-auto border-t border-white/10 px-4 py-3 text-sm leading-6 text-slate-300">
            <MarkdownContent content={termsAndConditions} />
          </div>
        </details>
      )}

      {/* Terms acceptance */}
      <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-300">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.target.checked)}
          disabled={isDisabled}
          className="mt-0.5 size-4 shrink-0 accent-[#ff1473]"
        />

        <span>
          I confirm that my details are correct and agree to the{" "}
          <span className="font-semibold text-white">terms and conditions</span>
          .
        </span>
      </label>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="group relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border border-[#ff1473]/70 bg-linear-to-r from-[#ff1473] to-[#d90b62] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_0_22px_rgba(255,20,115,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,20,115,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1473] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080c] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Processing...
          </span>
        ) : (
          "Continue to Lucky Spin"
        )}
      </button>
    </form>
  );
}
