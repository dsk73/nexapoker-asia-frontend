// src/components/sections/promotion/PromotionContent.tsx

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface PromotionContentProps {
  content: string;
}

export default function PromotionContent({ content }: PromotionContentProps) {
  if (!content?.trim()) {
    return null;
  }

  return (
    <article className="w-full">
      <div className="w-full overflow-x-auto">
        <div
          className="
            text-base
            leading-8
            text-white/70
            sm:text-lg
            sm:leading-8

            /* =================================================
               HEADINGS
            ================================================= */

            [&>h1]:mb-8
            [&>h1]:mt-0
            [&>h1]:text-3xl
            [&>h1]:font-black
            [&>h1]:leading-tight
            [&>h1]:tracking-tight
            [&>h1]:text-white
            sm:[&>h1]:text-4xl

            [&>h2]:mb-5
            [&>h2]:mt-16
            [&>h2]:text-2xl
            [&>h2]:font-bold
            [&>h2]:leading-tight
            [&>h2]:tracking-tight
            [&>h2]:text-white
            sm:[&>h2]:mt-20
            sm:[&>h2]:text-3xl

            [&>h3]:mb-4
            [&>h3]:mt-12
            [&>h3]:text-xl
            [&>h3]:font-bold
            [&>h3]:leading-tight
            [&>h3]:tracking-tight
            [&>h3]:text-white
            sm:[&>h3]:text-2xl

            /* =================================================
               PARAGRAPHS
            ================================================= */

            [&>p]:mb-5
            [&>p]:text-white/70
            [&>p:last-child]:mb-0

            /* =================================================
               LISTS
            ================================================= */

            [&>ul]:mb-8
            [&>ul]:ml-6
            [&>ul]:list-disc
            [&>ul]:space-y-3

            [&>ol]:mb-8
            [&>ol]:ml-6
            [&>ol]:list-decimal
            [&>ol]:space-y-3

            [&>li]:pl-1
            [&>li]:text-white/70

            /* =================================================
               STRONG / EMPHASIS
            ================================================= */

            [&_strong]:font-bold
            [&_strong]:text-white

            [&_em]:italic
            [&_em]:text-white/80

            /* =================================================
               LINKS
            ================================================= */

            [&_a]:font-medium
            [&_a]:text-[#ff1764]
            [&_a]:underline
            [&_a]:underline-offset-4
            [&_a]:transition-colors
            [&_a]:duration-200
            [&_a:hover]:text-white

            /* =================================================
               BLOCKQUOTE
            ================================================= */

            [&>blockquote]:my-10
            [&>blockquote]:rounded-xl
            [&>blockquote]:border-l-4
            [&>blockquote]:border-[#ff1764]
            [&>blockquote]:bg-[#ff1764]/5
            [&>blockquote]:px-6
            [&>blockquote]:py-5
            [&>blockquote]:text-white/75

            /* =================================================
               HORIZONTAL RULE
               Hidden intentionally
            ================================================= */

            [&>hr]:my-8
            [&>hr]:h-0
            [&>hr]:border-0
            [&>hr]:bg-transparent

            /* =================================================
               CODE BLOCKS
            ================================================= */

            [&>pre]:my-8
            [&>pre]:overflow-x-auto
            [&>pre]:rounded-xl
            [&>pre]:border
            [&>pre]:border-white/10
            [&>pre]:bg-black/40
            [&>pre]:p-5

            [&_code]:rounded
            [&_code]:bg-white/5
            [&_code]:px-1.5
            [&_code]:py-0.5
            [&_code]:text-sm
            [&_code]:text-white/90

            [&>pre_code]:bg-transparent
            [&>pre_code]:p-0

            /* =================================================
               TABLE CONTAINER
            ================================================= */

            [&>table]:my-10
            [&>table]:w-full
            [&>table]:min-w-190
            [&>table]:border-separate
            [&>table]:border-spacing-x-0
            [&>table]:border-spacing-y-3

            /* =================================================
               TABLE HEADER
            ================================================= */

            [&_th]:border-0
            [&_th]:bg-white/5
            [&_th]:px-4
            [&_th]:py-4
            [&_th]:text-left
            [&_th]:font-bold
            [&_th]:text-white

            [&_th:first-child]:rounded-l-xl
            [&_th:last-child]:rounded-r-xl

            /* =================================================
               TABLE ROWS
            ================================================= */

            [&_tbody_tr]:bg-white/2.5
            [&_tbody_tr]:transition-colors
            [&_tbody_tr:hover]:bg-white/4.5

            /* =================================================
               TABLE CELLS
            ================================================= */

            [&_td]:border-0
            [&_td]:px-4
            [&_td]:py-4
            [&_td]:align-middle
            [&_td]:text-white/70

            [&_tbody_td:first-child]:rounded-l-xl
            [&_tbody_td:last-child]:rounded-r-xl

            /* =================================================
               TABLE CELL LINE BREAKS
            ================================================= */

            [&_td_br]:block
            [&_td_br]:h-2
            [&_td_br]:content-['']

            /* =================================================
               IMAGES
            ================================================= */

            [&>img]:my-8
            [&>img]:max-w-full
            [&>img]:rounded-xl

            /* =================================================
               MOBILE TABLE
            ================================================= */

            sm:[&_th]:px-5
            sm:[&_th]:py-4

            sm:[&_td]:px-5
            sm:[&_td]:py-4
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
