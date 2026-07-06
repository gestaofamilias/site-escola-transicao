import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { NeuralBackground } from "./NeuralBackground";

type HeroPageProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  neural?: boolean;
};

export function HeroPage({ eyebrow, title, subtitle, children, neural = false }: HeroPageProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep-dark via-brand-deep to-brand-blue py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5 animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-accent-yellow/10 animate-float" />
      {neural && (
        <NeuralBackground light className="absolute inset-x-0 top-0 h-full w-full opacity-60" />
      )}
      <div className="container-page relative flex flex-col items-center gap-5 text-center">
        {eyebrow && (
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              {eyebrow}
            </span>
          </FadeIn>
        )}
        <FadeIn delay={0.08}>
          <h1 className="text-balance max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        </FadeIn>
        {children && <FadeIn delay={0.24}>{children}</FadeIn>}
      </div>
    </section>
  );
}
