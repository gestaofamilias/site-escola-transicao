import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/ui/Timeline";
import { FadeIn } from "@/components/ui/FadeIn";
import { rotinaContent } from "@/data/rotina";

export const metadata: Metadata = {
  title: "Rotina Escolar | Escola Transição",
  description: "Veja como a rotina da Escola Transição acolhe, organiza e favorece o desenvolvimento infantil.",
};

export default function RotinaPage() {
  const { hero, importancia, momentos, intencionalidade, adaptacao, familias } = rotinaContent;

  return (
    <>
      <HeroPage eyebrow="Dia a dia na escola" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page flex justify-center">
          <SectionTitle title={importancia.title} description={importancia.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title="Momentos da rotina" />
          <div className="mx-auto mt-12 max-w-3xl">
            <Timeline steps={momentos} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionTitle align="left" title={intencionalidade.title} description={intencionalidade.text} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle align="left" title={adaptacao.title} description={adaptacao.text} />
          </FadeIn>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-brand-deep-dark via-brand-deep to-brand-blue text-white">
        <div className="container-page flex justify-center">
          <SectionTitle light title={familias.title} description={familias.text} />
        </div>
      </section>
    </>
  );
}
