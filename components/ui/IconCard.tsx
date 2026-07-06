import { StaggerItem } from "./FadeIn";
import { Card } from "./Card";
import type { IconComponent } from "./icon-types";

type IconCardProps = {
  icon: IconComponent;
  title: string;
  description?: string;
  tone?: "blue" | "yellow" | "green";
  className?: string;
};

const tones = {
  blue: "bg-brand-sky text-brand-blue",
  yellow: "bg-accent-yellow-soft text-amber-600",
  green: "bg-accent-green-soft text-emerald-700",
};

export function IconCard({ icon: Icon, title, description, tone = "blue", className = "" }: IconCardProps) {
  return (
    <StaggerItem className={className}>
      <Card className="h-full">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${tones[tone]}`}>
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-4 font-heading text-lg font-semibold text-brand-deep-dark">{title}</h3>
        {description && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>}
      </Card>
    </StaggerItem>
  );
}
