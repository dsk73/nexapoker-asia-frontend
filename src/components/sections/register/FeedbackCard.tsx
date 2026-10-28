"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import FeedbackSection from "@/components/sections/register/FeedbackSection";
import { submitLuckySpinFeedback } from "@/lib/lucky-spin";

export default function FeedbackCard() {
  const [open, setOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const cleanUID = uid.trim();
    const cleanUsername = username.trim();
    const cleanMessage = message.trim();

    if (!cleanUID || !cleanUsername || !cleanMessage) {
      setNotice({
        type: "error",
        message: "Please complete all fields before submitting.",
      });
      return;
    }

    setSubmitting(true);
    setNotice(null);

    try {
      await submitLuckySpinFeedback({
        UID: cleanUID,
        Username: cleanUsername,
        Message: cleanMessage,
      });

      setUid("");
      setUsername("");
      setMessage("");
      setOpen(false);
      setNotice({
        type: "success",
        message: "Thank you! Your feedback has been submitted.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Feedback could not be submitted. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section
        id="player-feedback"
        className="relative isolate overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12"
      >
        <div className="mx-auto max-w-330">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#130b15] via-[#0b0a10] to-[#080a11] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] transition duration-300 hover:border-[#ff1473]/30 sm:rounded-3xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-[#ff1473]/10 blur-3xl transition group-hover:bg-[#ff1473]/15" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 size-48 rounded-full bg-purple-500/5 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#ff1473]/25 bg-[#ff1473]/10 text-3xl sm:size-16">
                  💬
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6da5]">
                    We’re listening
                  </p>
                  <h2 className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
                    Help us improve
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                    Have a suggestion or something to share? Send us your
                    feedback and help us make your Nexa Poker experience better.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setNotice(null);
                  setOpen(true);
                }}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-[#ff1473]/60 bg-linear-to-r from-[#ff1473] to-[#d90b62] px-7 py-3 text-sm font-extrabold text-white shadow-[0_6px_22px_rgba(255,20,115,0.16)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1473] sm:min-w-48"
              >
                Share Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeedbackSection
        open={open}
        uid={uid}
        username={username}
        message={message}
        submitting={submitting}
        onUidChange={setUid}
        onUsernameChange={setUsername}
        onMessageChange={setMessage}
        onSubmit={handleSubmit}
        onClose={() => {
          if (!submitting) setOpen(false);
        }}
      />

      {notice && (
        <div className="fixed inset-x-3 top-4 z-130 mx-auto max-w-md">
          <div
            role={notice.type === "error" ? "alert" : "status"}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111018] p-4 shadow-[0_12px_45px_rgba(0,0,0,0.55)]"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#ff1473]/40 bg-[#ff1473]/10 text-sm font-black text-[#ff6da5]">
              {notice.type === "success" ? "✓" : "!"}
            </span>
            <p className="min-w-0 flex-1 text-sm leading-6 text-slate-200">
              {notice.message}
            </p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setNotice(null)}
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
