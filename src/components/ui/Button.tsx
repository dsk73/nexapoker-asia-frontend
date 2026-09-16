// src/components/ui/Button.tsx

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  target?: "_self" | "_blank";
  onClick?: () => void;
}

const variantClasses = {
  primary:
    "bg-[#ff1764] text-white shadow-[0_10px_30px_rgba(255,23,100,0.18)] hover:bg-[#ff3378]",
  secondary:
    "bg-[#1877ff] text-white shadow-[0_10px_30px_rgba(24,119,255,0.18)] hover:bg-[#3489ff]",
  outline:
    "border border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/5",
  ghost: "bg-transparent text-white/70 hover:bg-white/5 hover:text-white",
};

const sizeClasses = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-6 text-base",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  target = "_self",
  onClick,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl",
    "font-semibold transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1764]/50",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (href && !disabled) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal || target === "_blank") {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}

          {variant === "primary" && <ChevronRight size={17} />}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}

        {variant === "primary" && <ChevronRight size={17} />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}

      {variant === "primary" && <ChevronRight size={17} />}
    </button>
  );
}
