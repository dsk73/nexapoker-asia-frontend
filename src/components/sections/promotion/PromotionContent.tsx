// src/components/sections/promotion/PromotionContent.tsx

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PromotionContentProps {
  content: string;
}

export default function PromotionContent({ content }: PromotionContentProps) {
  if (!content?.trim()) {
    return null;
  }

  return (
    <article className="w-full">
      <div
        className="
          text-base
          leading-8
          text-white/70
          sm:text-lg
          sm:leading-8

          [&>h1]:mb-8
          [&>h1]:text-3xl
          [&>h1]:font-black
          [&>h1]:tracking-tight
          [&>h1]:text-white
          sm:[&>h1]:text-4xl

          [&>h2]:mb-5
          [&>h2]:mt-14
          [&>h2]:text-2xl
          [&>h2]:font-bold
          [&>h2]:tracking-tight
          [&>h2]:text-white
          sm:[&>h2]:text-3xl

          [&>h3]:mb-4
          [&>h3]:mt-10
          [&>h3]:text-xl
          [&>h3]:font-bold
          [&>h3]:tracking-tight
          [&>h3]:text-white
          sm:[&>h3]:text-2xl

          [&>p]:mb-6
          [&>p]:text-white/70

          [&>ul]:mb-7
          [&>ul]:ml-6
          [&>ul]:list-disc
          [&>ul]:space-y-3

          [&>ol]:mb-7
          [&>ol]:ml-6
          [&>ol]:list-decimal
          [&>ol]:space-y-3

          [&>li]:pl-1
          [&>li]:text-white/70

          [&_strong]:font-bold
          [&_strong]:text-white

          [&_em]:italic
          [&_em]:text-white/80

          [&_a]:font-medium
          [&_a]:text-[#ff1764]
          [&_a]:underline
          [&_a]:underline-offset-4
          [&_a]:transition-colors
          [&_a]:duration-200
          [&_a:hover]:text-white

          [&>blockquote]:my-8
          [&>blockquote]:rounded-xl
          [&>blockquote]:border-l-4
          [&>blockquote]:border-[#ff1764]
          [&>blockquote]:bg-[#ff1764]/5
          [&>blockquote]:px-6
          [&>blockquote]:py-5
          [&>blockquote]:text-white/75

          [&>hr]:my-12
          [&>hr]:border-white/10

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

          [&>table]:my-8
          [&>table]:w-full
          [&>table]:overflow-hidden
          [&>table]:rounded-xl
          [&>table]:border
          [&>table]:border-white/10

          [&_th]:border
          [&_th]:border-white/10
          [&_th]:bg-white/5
          [&_th]:px-4
          [&_th]:py-3
          [&_th]:text-left
          [&_th]:font-semibold
          [&_th]:text-white

          [&_td]:border
          [&_td]:border-white/10
          [&_td]:px-4
          [&_td]:py-3
          [&_td]:text-white/70

          [&>img]:my-8
          [&>img]:max-w-full
          [&>img]:rounded-xl
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
