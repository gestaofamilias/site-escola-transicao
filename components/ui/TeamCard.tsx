import { StaggerItem } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  className?: string;
};

export function TeamCard({ name, role, description, image, className = "" }: TeamCardProps) {
  return (
    <StaggerItem className={className}>
      <div className="group h-full overflow-hidden rounded-3xl border border-brand-mist/70 bg-white shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,63,209,0.45)]">
        <div className="p-3 pb-0">
          <PlaceholderImage label={image} aspect="aspect-square" tone="deep" />
        </div>
        <div className="p-6 text-center">
          <h3 className="font-heading text-lg font-semibold text-brand-deep-dark">{name}</h3>
          <p className="mt-0.5 text-sm font-semibold text-brand-blue">{role}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
        </div>
      </div>
    </StaggerItem>
  );
}
