import { StaggerGroup, StaggerItem } from "./FadeIn";
import type { IconComponent } from "./icon-types";

export type TimelineStep = {
  icon: IconComponent;
  title: string;
  description: string;
};

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <StaggerGroup className="relative">
      <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-brand-mist sm:block" aria-hidden="true" />
      <ol className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <li className="relative flex gap-5 rounded-3xl bg-white p-5 pl-5 shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)] sm:pl-6">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-md">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold text-brand-deep-dark">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </li>
          </StaggerItem>
        ))}
      </ol>
    </StaggerGroup>
  );
}
