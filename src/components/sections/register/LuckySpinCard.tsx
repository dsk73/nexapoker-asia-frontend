"use client";

type LuckySpinCardProps = {
  onJoin: () => void;
  loading?: boolean;
  startDate?: string | null;
  endDate?: string | null;
  error?: string;
};

function formatDate(value?: string | null) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function LuckySpinCard({
  onJoin,
  loading = false,
  startDate,
  endDate,
  error,
}: LuckySpinCardProps) {
  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);

  return (
    <section
      id="lucky-spin"
      className="relative isolate overflow-hidden bg-[#050609] px-4 py-8 text-white sm:px-6 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_50%,rgba(255,20,115,0.10),transparent_42%),radial-gradient(ellipse_at_90%_50%,rgba(34,158,217,0.09),transparent_42%)]" />

      <div className="mx-auto max-w-330">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(115deg,#1b0b19_0%,#100d16_48%,#08121b_100%)] p-5 shadow-[0_20px_65px_rgba(0,0,0,0.38)] transition duration-300 hover:border-[#ff1473]/35 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-linear-to-b from-[#ff1473] via-[#d90b62] to-[#229ed9]" />
          <div className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full bg-[#ff1473]/10 blur-3xl transition duration-500 group-hover:bg-[#ff1473]/15" />
          <div className="pointer-events-none absolute -bottom-28 right-1/4 size-56 rounded-full bg-[#229ed9]/8 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-[#ff1473]/30 bg-black/25 text-4xl shadow-[0_0_28px_rgba(255,20,115,0.10)] sm:size-20 sm:text-5xl">
                🎡
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6da5] sm:text-xs">
                  Nexa Poker Rewards
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
                    Nexa Poker Lucky Spin
                  </h2>

                  <span className="rounded-full border border-[#ff1473]/25 bg-[#ff1473]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#ff9cbe]">
                    One spin per UID
                  </span>
                </div>

                {(formattedStart || formattedEnd) && (
                  <p className="mt-2 text-xs text-slate-400">
                    Campaign period: {formattedStart ?? "—"} –{" "}
                    {formattedEnd ?? "—"}
                  </p>
                )}

                {error && <p className="mt-2 text-sm text-rose-300">{error}</p>}
              </div>
            </div>

            <button
              type="button"
              onClick={onJoin}
              disabled={loading}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-[#ff1473]/70 bg-linear-to-r from-[#ff1473] to-[#d90b62] px-7 py-3 text-sm font-extrabold text-white shadow-[0_7px_25px_rgba(255,20,115,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(255,20,115,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1473] disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-48"
            >
              {loading ? "Loading..." : "Join Lucky Spin"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
