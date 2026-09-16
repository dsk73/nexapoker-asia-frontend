// src/components/ui/Badge.tsx

import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "pink" | "blue" | "default";
  className?: string;
}

const variantClasses = {
  pink: "border-[#ff1764]/20 bg-[#ff1764]/10 text-[#ff6b9d]",
  blue: "border-[#1877ff]/20 bg-[#1877ff]/10 text-[#46b9ff]",
  default: "border-white/10 bg-white/5 text-white/70",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
