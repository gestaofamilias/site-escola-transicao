import { StaggerItem } from "./FadeIn";
import type { IconComponent } from "./icon-types";

type PillarCardProps = {
  icon: IconComponent;
  title: string;
  description: string;
  large?: boolean;
  className?: string;
};

export function PillarCard({ icon: Icon, title, description, large = false, className = "" }: PillarCardProps) {
  return (
    <StaggerItem className={className}>
      <div
        className={`group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep to-brand-blue text-white shadow-[0_18px_40px_-22px_rgba(6,33,92,0.6)] transition-transform duration-300 hover:-translate-y-1.5 ${
          large ? "p-8" : "p-6"
        }`}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/5" />
        <span
          className={`relative inline-flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ${
            large ? "h-14 w-14" : "h-12 w-12"
          }`}
        >
          <Icon className={large ? "h-7 w-7" : "h-6 w-6"} strokeWidth={1.6} />
        </span>
        <h3 className={`relative mt-4 font-heading font-semibold ${large ? "text-xl" : "text-lg"}`}>{title}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-white/85">{description}</p>
      </div>
    </StaggerItem>
  );
}
