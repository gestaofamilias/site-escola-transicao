import { StaggerItem } from "./FadeIn";
import type { IconComponent } from "./icon-types";

type ContactCardProps = {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
  className?: string;
};

export function ContactCard({ icon: Icon, label, value, href, className = "" }: ContactCardProps) {
  const content = (
    <div className="flex h-full items-start gap-4 rounded-3xl border border-brand-mist/70 bg-white p-6 shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_18px_40px_-20px_rgba(10,63,209,0.45)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</p>
        <p className="mt-1 break-words font-medium text-brand-deep-dark">{value}</p>
      </div>
    </div>
  );

  return (
    <StaggerItem className={className}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="focus-ring block rounded-3xl">
          {content}
        </a>
      ) : (
        content
      )}
    </StaggerItem>
  );
}
