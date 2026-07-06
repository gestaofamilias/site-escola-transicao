import { Camera } from "lucide-react";
import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  aspect?: string;
  tone?: "sky" | "deep" | "green" | "yellow";
};

const tones: Record<NonNullable<PlaceholderImageProps["tone"]>, string> = {
  sky: "from-brand-sky via-brand-mist to-brand-sky/60",
  deep: "from-brand-blue/25 via-brand-mist to-brand-sky",
  green: "from-accent-green-soft via-brand-sky to-accent-green-soft/70",
  yellow: "from-accent-yellow-soft via-brand-sky to-accent-yellow-soft/70",
};

export function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/3]",
  tone = "sky",
}: PlaceholderImageProps) {
  const style: CSSProperties = {
    backgroundImage:
      "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.6) 0, transparent 45%), radial-gradient(circle at 82% 78%, rgba(255,255,255,0.4) 0, transparent 40%)",
  };

  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-3xl border border-brand-deep/10 bg-gradient-to-br shadow-[0_8px_30px_-20px_rgba(10,63,209,0.45)] ${tones[tone]} ${className}`}
      style={style}
    >
      <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-white/40 blur-xl" />
      <div className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-brand-blue/10 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-brand-blue shadow-sm">
          <Camera className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-[11px] leading-snug text-brand-deep/70">{label}</span>
      </div>
    </div>
  );
}
