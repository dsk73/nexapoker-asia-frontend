"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({
  items,
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-1.5 text-sm ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-1.5"
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-white/40 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-white/70" : "text-white/40"}>
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight
                size={14}
                className="shrink-0 text-white/20"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
