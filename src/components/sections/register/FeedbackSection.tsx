"use client";

import type { FormEvent } from "react";

type FeedbackSectionProps = {
  open: boolean;
  uid: string;
  username: string;
  message: string;
  submitting: boolean;
  onUidChange: (uid: string) => void;
  onUsernameChange: (username: string) => void;
  onMessageChange: (message: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};

export default function FeedbackSection({
  open,
  uid,
  username,
  message,
  submitting,
  onUidChange,
  onUsernameChange,
  onMessageChange,
  onSubmit,
  onClose,
}: FeedbackSectionProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-120 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !submitting) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0b0a10] shadow-[0_0_70px_rgba(255,20,115,0.16)]"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#ff1473]/10 blur-3xl" />

        <div className="relative border-b border-white/10 px-5 py-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6da5]">
                Your voice matters
              </p>
              <h2
                id="feedback-title"
                className="mt-2 text-2xl font-black text-white"
              >
                Share your feedback
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Help us improve your Nexa Poker experience.
              </p>
            </div>

            <button
              type="button"
              aria-label="Close feedback"
              disabled={submitting}
              onClick={onClose}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:border-[#ff1473]/40 hover:text-white disabled:opacity-40"
            >
              ×
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="relative space-y-5 p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="feedback-uid"
                className="mb-2 block text-xs font-bold text-slate-300"
              >
                Player UID
              </label>
              <input
                id="feedback-uid"
                value={uid}
                onChange={(event) => onUidChange(event.target.value)}
                maxLength={100}
                required
                disabled={submitting}
                placeholder="Enter your UID"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#ff1473]/70 focus:ring-2 focus:ring-[#ff1473]/10 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="feedback-username"
                className="mb-2 block text-xs font-bold text-slate-300"
              >
                Username
              </label>
              <input
                id="feedback-username"
                value={username}
                onChange={(event) => onUsernameChange(event.target.value)}
                maxLength={100}
                required
                disabled={submitting}
                placeholder="Enter your username"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#ff1473]/70 focus:ring-2 focus:ring-[#ff1473]/10 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="feedback-message"
              className="mb-2 block text-xs font-bold text-slate-300"
            >
              Your feedback
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(event) => onMessageChange(event.target.value)}
              rows={5}
              maxLength={2000}
              required
              disabled={submitting}
              placeholder="Tell us what went well or what we could improve..."
              className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-[#ff1473]/70 focus:ring-2 focus:ring-[#ff1473]/10 disabled:opacity-50"
            />
            <p className="mt-1 text-right text-xs text-slate-500">
              {message.length}/2000
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-linear-to-r from-[#ff1473] to-[#d90b62] px-5 py-3 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(255,20,115,0.16)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Submitting feedback..." : "Submit feedback"}
          </button>

          <p className="text-center text-xs leading-5 text-slate-500">
            Thank you for helping us make Nexa Poker better.
          </p>
        </form>
      </section>
    </div>
  );
}
