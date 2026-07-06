import { StaggerItem } from "./FadeIn";
import { Card } from "./Card";
import { PlaceholderImage } from "./PlaceholderImage";
import type { IconComponent } from "./icon-types";

type ProjectCardProps = {
  icon: IconComponent;
  title: string;
  description: string;
  image?: string;
  className?: string;
};

export function ProjectCard({ icon: Icon, title, description, image, className = "" }: ProjectCardProps) {
  return (
    <StaggerItem className={className}>
      <Card className="flex h-full flex-col overflow-hidden !p-0">
        {image && (
          <div className="p-3 pb-0">
            <PlaceholderImage label={image} tone="green" aspect="aspect-[16/10]" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="mt-4 font-heading text-lg font-semibold text-brand-deep-dark">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
        </div>
      </Card>
    </StaggerItem>
  );
}
