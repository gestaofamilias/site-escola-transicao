import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PillarCard } from "@/components/ui/PillarCard";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { propostaContent } from "@/data/propostaPedagogica";

export const metadata: Metadata = {
  title: "Proposta Pedagógica | Escola Transição",
  description:
    "Conheça o método de ensino da Escola Transição, baseado no desenvolvimento motor, cognitivo, social, afetivo e sensorial.",
};

export default function PropostaPedagogicaPage() {
  const { hero, proposta, integral, pilares, significado, diaADia, finalPhrase } = propostaContent;

  return (
    <>
      <HeroPage eyebrow="Método de ensino" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionTitle align="left" title={proposta.title} description={proposta.text} />
          <SectionTitle align="left" title={integral.title} description={integral.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle eyebrow="Desenvolvimento integral" title="Os cinco pilares" />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((pilar) => (
              <PillarCard key={pilar.title} icon={pilar.icon} title={pilar.title} description={pilar.description} large />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex justify-center">
          <SectionTitle title={significado.title} description={significado.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title={diaADia.title} />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {diaADia.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-5 text-center shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
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
