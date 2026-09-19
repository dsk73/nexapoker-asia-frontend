// src/components/sections/ActivitiesSection.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Activity } from "@/types/content";

import ActivityCard from "@/components/cards/ActivityCard";

interface ActivitiesSectionProps {
  activities: Activity[];
}

export default function ActivitiesSection({
  activities,
}: ActivitiesSectionProps) {
  if (!activities.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-28">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div className="absolute right-[-20%] top-[10%] h-72 w-72 rounded-full bg-[#1877ff]/6 blur-[110px] sm:right-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Pink glow */}

        <div className="absolute bottom-[5%] left-[-20%] h-72 w-72 rounded-full bg-[#ff1764]/6 blur-[110px] sm:left-[-10%] sm:h-105 sm:w-105 sm:blur-[140px]" />

        {/* Subtle center glow */}

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877ff]/3 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="container-nexa relative z-10">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col gap-5 sm:mb-12 sm:gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Heading content */}

          <div className="min-w-0 max-w-2xl">
            {/* Eyebrow */}

            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff1764] sm:mb-3 sm:text-sm">
              Nexa Poker
            </p>

            {/* Heading */}

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Latest Activities
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:mt-5 sm:text-lg sm:leading-7">
              Stay updated with the latest poker activities, events, insights
              and community highlights from Nexa Poker.
            </p>
          </div>

          {/* View all */}

          <Link
            href="/activities"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#1877ff]/30 hover:bg-[#1877ff]/10 sm:px-5 sm:py-3"
          >
            <span>View All Activities</span>

            <ArrowRight
              size={17}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =================================================
            ACTIVITY CARDS
            ================================================= */}

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.24),
              }}
              className="h-full min-w-0"
            >
              <ActivityCard activity={activity} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
