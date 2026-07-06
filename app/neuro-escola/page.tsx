import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/ui/Timeline";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { neuroEscolaContent } from "@/data/neuroEscola";

export const metadata: Metadata = {
  title: "Neuro-Escola | Neurociência Aplicada à Educação Infantil",
  description:
    "Entenda como a Escola Transição aplica neurociência, afeto e experiências no desenvolvimento infantil.",
};

export default function NeuroEscolaPage() {
  const { hero, oQueE, comoAprende, comoAplicamos, conexoes, afeto, finalPhrase } = neuroEscolaContent;

  return (
    <>
      <HeroPage eyebrow="Neurociência e educação" title={hero.title} subtitle={hero.subtitle} neural />

      <section className="section">
        <div className="container-page">
          <SectionTitle title={oQueE.title} description={oQueE.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title={comoAprende.title} description={comoAprende.text} />
          <div className="mt-12 max-w-3xl">
            <Timeline steps={comoAprende.steps} />
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-gradient-to-br from-brand-deep-dark via-brand-deep to-brand-blue text-white">
        <NeuralBackground light className="absolute inset-x-0 top-0 h-full w-full opacity-40" />
        <div className="container-page relative">
          <SectionTitle light title={comoAplicamos.title} description={comoAplicamos.text} />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {comoAplicamos.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center gap-3 rounded-3xl bg-white/10 p-5 text-center backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <item.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title={conexoes.title} />
          <FadeIn className="mt-6 flex justify-center">
            <p className="max-w-2xl text-balance text-center font-heading text-xl font-semibold text-brand-blue">
              {conexoes.highlight}
            </p>
          </FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {conexoes.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-mist bg-white p-5 text-center shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-semibold text-brand-deep-dark">{item.title}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <FadeIn className="flex justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand-blue shadow-md">
              <afeto.icon className="h-9 w-9" strokeWidth={1.6} />
            </span>
          </FadeIn>
          <SectionTitle align="left" title={afeto.title} description={afeto.text} />
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-blob-gradient" />
        <div className="container-page relative flex justify-center">
          <FadeIn>
            <h2 className="text-balance max-w-3xl text-center font-heading text-3xl font-bold text-brand-deep-dark sm:text-4xl">
              {finalPhrase}
            </h2>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
