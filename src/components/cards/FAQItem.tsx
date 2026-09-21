// src/components/cards/FAQItem.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import type { FAQ } from "@/types/content";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <article
      className={`min-w-0 overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
        isOpen
          ? "border-[#1877ff]/40 bg-[#0d111c]"
          : "border-white/10 bg-[#0a0d14] hover:border-white/20"
      }`}
    >
      {/* =====================================================
          QUESTION
          ===================================================== */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full min-w-0 items-start justify-between gap-3 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-6"
      >
        <span className="min-w-0 wrap-break-word pr-1 text-sm font-semibold leading-6 text-white sm:text-lg sm:leading-7">
          {faq.Question}
        </span>

        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
            isOpen
              ? "border-[#1877ff]/40 bg-[#1877ff]/10 text-[#46b9ff]"
              : "border-white/10 bg-white/3 text-white/60"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <ChevronDown size={17} className="sm:h-4.5 sm:w-4.5" />
          </motion.span>
        </span>
      </button>

      {/* =====================================================
          ANSWER
          ===================================================== */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.3,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
              },
            }}
          >
            <div className="min-w-0 border-t border-white/10 px-4 pb-4 pt-3.5 sm:px-6 sm:pb-6 sm:pt-4">
              <div className="max-w-3xl min-w-0 wrap-break-word text-sm leading-6 text-white/55 sm:text-base sm:leading-7 [&_a]:break-all [&_a]:font-medium [&_a]:text-[#46b9ff] [&_a]:underline [&_a]:decoration-[#46b9ff]/30 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-white [&_a:hover]:decoration-[#46b9ff] [&_code]:rounded [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[#46b9ff] [&_li]:ml-5 [&_li]:pl-1 [&_ol]:my-3 [&_ol]:list-decimal [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:my-3 [&_ul]:list-disc">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ href, children, ...props }) => {
                      const isExternal =
                        href?.startsWith("http://") ||
                        href?.startsWith("https://");

                      return (
                        <a
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          {...props}
                        >
                          {children}
                        </a>
                      );
                    },
                  }}
                >
                  {faq.Answer || ""}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
