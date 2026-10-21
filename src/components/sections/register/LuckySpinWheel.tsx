"use client";

import { useMemo } from "react";
import Image from "next/image";
import type { LuckySpinSegment } from "@/types/lucky-spin";

interface LuckySpinWheelProps {
  segments: LuckySpinSegment[];
  spinning?: boolean;
  selectedSegmentIndex?: number | null;
  onSpin?: () => void;
  disabled?: boolean;
}

const SPIN_DURATION_MS = 4000;

const COLORS = [
  "#17101b",
  "#142a4b",
  "#3b0b27",
  "#123b58",
  "#21111f",
  "#520d31",
];

const DISPLAY_ICONS = ["×", "$", "×", "✦", "×", "♠"];

export default function LuckySpinWheel({
  segments,
  spinning = false,
  selectedSegmentIndex = null,
  onSpin,
  disabled = false,
}: LuckySpinWheelProps) {
  const orderedSegments = useMemo(
    () =>
      [...segments].sort(
        (a, b) => (a.DisplayOrder ?? 0) - (b.DisplayOrder ?? 0),
      ),
    [segments],
  );

  const segmentCount = orderedSegments.length;
  const sliceAngle = segmentCount > 0 ? 360 / segmentCount : 360;

  const wheelBackground = useMemo(() => {
    if (!segmentCount) return COLORS[0];

    const stops = orderedSegments.map((_, index) => {
      const start = index * sliceAngle;
      const end = (index + 1) * sliceAngle;

      return `${COLORS[index % COLORS.length]} ${start}deg ${end}deg`;
    });

    return `conic-gradient(from 0deg, ${stops.join(", ")})`;
  }, [orderedSegments, segmentCount, sliceAngle]);

  const safeSelectedIndex =
    selectedSegmentIndex !== null &&
    selectedSegmentIndex !== undefined &&
    Number.isInteger(selectedSegmentIndex) &&
    selectedSegmentIndex >= 0 &&
    selectedSegmentIndex < segmentCount
      ? selectedSegmentIndex
      : null;

  /*
   * Rotate the wheel so the selected segment's center
   * aligns with the fixed pointer at 12 o'clock.
   */
  const wheelRotation =
    safeSelectedIndex !== null
      ? 360 * 5 + ((360 - (safeSelectedIndex + 0.5) * sliceAngle) % 360)
      : 0;

  return (
    <div className="mx-auto flex w-full max-w-115 flex-col items-center gap-3 sm:gap-4">
      <div className="relative isolate aspect-square w-full">
        {/* Ambient glow */}
        <div className="absolute -inset-3 rounded-full bg-linear-to-br from-[#ff1473]/35 via-[#46b9ff]/20 to-[#ff1473]/30 opacity-80 blur-2xl" />

        {/* Outer neon rim */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#ff1473] via-[#46b9ff] to-[#ff1473] p-1 shadow-[0_0_28px_rgba(255,20,115,0.22),0_0_24px_rgba(70,185,255,0.12)] sm:p-1.5">
          {/* Inner metallic rim */}
          <div className="h-full w-full rounded-full bg-linear-to-br from-[#f5e5ef] via-[#5d647c] to-[#dceaff] p-0.75 sm:p-1">
            <div className="h-full w-full rounded-full bg-[#070911] p-0.75 sm:p-1">
              {/* Rotating wheel surface */}
              <div
                className="relative h-full w-full overflow-hidden rounded-full border border-white/20"
                style={{
                  background: wheelBackground,
                  transform: `rotate(${wheelRotation}deg)`,
                  transition: spinning
                    ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.12, 0.75, 0.12, 1)`
                    : "none",
                }}
              >
                {/* Subtle segment shading */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.06),transparent_65%)]" />

                {/* Segment dividers */}
                {Array.from({ length: segmentCount }).map((_, index) => (
                  <div
                    key={`divider-${index}`}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-1 h-1/2 w-px origin-top bg-linear-to-b from-white/45 via-white/20 to-white/3"
                    style={{
                      transform: `rotate(${index * sliceAngle}deg)`,
                    }}
                  />
                ))}

                {/* Labels come directly from Strapi */}
                {orderedSegments.map((segment, index) => {
                  const angle = (index + 0.5) * sliceAngle;
                  const radians = (angle * Math.PI) / 180;

                  const radius = 31;
                  const x = 50 + radius * Math.sin(radians);
                  const y = 50 - radius * Math.cos(radians);

                  const label = segment.Label || "Reward";
                  const icon = DISPLAY_ICONS[index % DISPLAY_ICONS.length];
                  const isPrize = segment.OutcomeType === "prize";

                  return (
                    <div
                      key={`${segment.Label ?? "segment"}-${index}`}
                      className="pointer-events-none absolute z-2 flex w-[29%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 text-center"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                    >
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-lg font-black leading-none shadow-[0_3px_10px_rgba(0,0,0,0.35)] sm:size-9 sm:text-xl ${
                          isPrize
                            ? "border-white/50 bg-[#ff1473] text-white"
                            : "border-white/30 bg-[#080a12] text-white"
                        }`}
                        aria-hidden="true"
                      >
                        {icon}
                      </span>

                      <span className="max-w-full wrap-break-word text-[10px] font-black leading-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,1)] sm:text-xs">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Fixed pointer */}
        <div className="absolute top-[-1%] left-1/2 z-30 -translate-x-1/2">
          <div className="h-0 w-0 border-x-12 border-t-23 border-x-transparent border-t-[#ff1473] drop-shadow-[0_0_8px_rgba(255,20,115,0.85)] sm:border-x-15 sm:border-t-28" />
        </div>

        {/* Center hub with Nexa Poker logo */}
        <div className="absolute left-1/2 top-1/2 z-20 flex h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-[#ff1473] via-[#46b9ff] to-[#c296a8] p-0.75 shadow-[0_0_24px_rgba(255,20,115,0.3)]">
          <div className="flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-[#06070b] p-1.25">
            <Image
              src="/images/nexapoker-icon.png"
              alt="Nexa Poker"
              width={80}
              height={80}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Alternating brand lights around the rim */}
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={`light-${index}`}
            className={`absolute z-10 size-2 rounded-full shadow-[0_0_9px_currentColor] sm:size-2.5 ${
              index % 2 === 0
                ? "bg-[#46b9ff] text-[#46b9ff]"
                : "bg-[#ff1473] text-[#ff1473]"
            }`}
            style={{
              left: `${50 + 47 * Math.sin((index * Math.PI) / 6)}%`,
              top: `${50 - 47 * Math.cos((index * Math.PI) / 6)}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {onSpin && (
        <button
          type="button"
          onClick={onSpin}
          disabled={disabled || spinning || !segmentCount}
          className="group relative w-full max-w-92.5 overflow-hidden rounded-full border border-[#ff1473]/70 bg-linear-to-r from-[#ff1473] to-[#d90b62] px-6 py-3.5 text-base font-black uppercase tracking-wide text-white shadow-[0_0_22px_rgba(255,20,115,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,20,115,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46b9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050609] disabled:cursor-not-allowed disabled:opacity-50 sm:py-4 sm:text-lg"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">
            {spinning ? "Spinning..." : "Spin Now"}
            {!spinning && <span className="ml-3 inline-block">›</span>}
          </span>
        </button>
      )}
    </div>
  );
}
