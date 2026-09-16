// src/components/ui/SectionHeading.tsx

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  align = "center",
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      className={`mx-auto flex max-w-3xl flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff1764]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
