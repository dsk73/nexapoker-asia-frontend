// src/components/content/MarkdownContent.tsx

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content?: string | null;
  className?: string;
}

export default function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  if (!content?.trim()) {
    return null;
  }

  return (
    <div
      className={`markdown-content text-sm leading-7 text-white/60 sm:text-base ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          /* =================================================
             HEADINGS
          ================================================= */

          h1: ({ children }) => (
            <h1 className="mb-5 text-3xl font-black leading-tight tracking-tight text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-4 mt-8 text-2xl font-bold leading-tight tracking-tight text-white first:mt-0">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 text-xl font-bold leading-tight text-white first:mt-0">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="mb-3 mt-5 text-lg font-semibold text-white">
              {children}
            </h4>
          ),

          /* =================================================
             PARAGRAPHS
          ================================================= */

          p: ({ children }) => <p className="mb-5 last:mb-0">{children}</p>,

          /* =================================================
             STRONG / EMPHASIS
          ================================================= */

          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),

          em: ({ children }) => <em className="text-white/75">{children}</em>,

          /* =================================================
             LINKS
          ================================================= */

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#46b9ff] underline decoration-[#1877ff]/40 underline-offset-4 transition-colors hover:text-[#ff5b91] hover:decoration-[#ff1764]/50"
            >
              {children}
            </a>
          ),

          /* =================================================
             UNORDERED LIST
          ================================================= */

          ul: ({ children }) => (
            <ul className="mb-5 list-disc space-y-2 pl-6 last:mb-0">
              {children}
            </ul>
          ),

          /* =================================================
             ORDERED LIST
          ================================================= */

          ol: ({ children }) => (
            <ol className="mb-5 list-decimal space-y-2 pl-6 last:mb-0">
              {children}
            </ol>
          ),

          /* =================================================
             LIST ITEM
          ================================================= */

          li: ({ children }) => (
            <li className="pl-1 text-white/60 marker:text-[#46b9ff]">
              {children}
            </li>
          ),

          /* =================================================
             BLOCKQUOTE
          ================================================= */

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-[#1877ff] bg-[#1877ff]/5 px-5 py-4 text-white/65">
              {children}
            </blockquote>
          ),

          /* =================================================
             CODE
          ================================================= */

          code: ({ children }) => (
            <code className="rounded-md border border-white/10 bg-white/6 px-1.5 py-0.5 font-mono text-sm text-[#46b9ff]">
              {children}
            </code>
          ),

          /* =================================================
             HORIZONTAL RULE
          ================================================= */

          hr: () => <hr className="my-8 border-white/10" />,

          /* =================================================
             TABLE
          ================================================= */

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-125 border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-white/4 text-white">{children}</thead>
          ),

          tbody: ({ children }) => (
            <tbody className="divide-y divide-white/10">{children}</tbody>
          ),

          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-white/2">{children}</tr>
          ),

          th: ({ children }) => (
            <th className="border-r border-white/10 px-4 py-3 font-semibold text-white last:border-r-0">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border-r border-white/10 px-4 py-3 text-white/60 last:border-r-0">
              {children}
            </td>
          ),

          /* =================================================
             IMAGE
          ================================================= */

          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
              className="my-6 max-w-full rounded-2xl border border-white/10"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
