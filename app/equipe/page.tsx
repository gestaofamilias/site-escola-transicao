import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { TeamCard } from "@/components/ui/TeamCard";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { equipeContent } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Equipe | Escola Transição",
  description: "Conheça a equipe da Escola Transição, profissionais que cuidam, ensinam e acompanham cada criança.",
};

export default function EquipePage() {
  const { hero, intro, direcao, profissionais, olhar, finalPhrase } = equipeContent;

  return (
    <>
      <HeroPage eyebrow="Quem cuida da escola" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page flex justify-center">
          <SectionTitle title={intro.title} description={intro.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <FadeIn>
            <PlaceholderImage label={direcao.image} aspect="aspect-square" tone="deep" className="mx-auto max-w-xs lg:max-w-none" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">{direcao.role}</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-brand-deep-dark sm:text-3xl">
              {direcao.name}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{direcao.text}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title="Professoras e equipe pedagógica" />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profissionais.map((pessoa) => (
              <TeamCard
                key={pessoa.name}
                name={pessoa.name}
                role={pessoa.role}
                description={pessoa.description}
                image={pessoa.image}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title="Nosso olhar profissional" />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {olhar.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="font-semibold text-brand-deep-dark">{item.title}</p>
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
