import { FadeIn } from "./FadeIn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  light = false,
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <FadeIn className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${
            light ? "bg-white/15 text-white" : "bg-brand-sky text-brand-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-deep-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${
            light ? "text-white/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
