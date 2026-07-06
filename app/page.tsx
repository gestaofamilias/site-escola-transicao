import type { Metadata } from "next";
import Image from "next/image";
import { HomeHero } from "@/components/home/HomeHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PillarCard } from "@/components/ui/PillarCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { homeContent } from "@/data/home";

export const metadata: Metadata = {
  title: "Escola Transição | Educação Infantil com Acolhimento e Neurociência",
  description:
    "Conheça a Escola Transição, uma escola de educação infantil que une acolhimento, neurociência, experiências significativas e desenvolvimento integral.",
};

export default function HomePage() {
  const { intro, neuroHighlight, pillars, pillarsText, structure, projects, impactPhrase, finalCta } = homeContent;

  return (
    <>
      <HomeHero />

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionTitle align="left" title={intro.title} description={intro.text} />
            <div className="mt-6">
              <Button href="/sobre" variant="secondary" showArrow>
                Saiba mais sobre a escola
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-deep/10 shadow-[0_8px_30px_-20px_rgba(10,63,209,0.45)]">
              <Image
                src="/images/secao-2.png"
                alt="Professora e crianças da Escola Transição brincando com jogos pedagógicos em sala de aula com decoração de neurociência"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-gradient-to-br from-brand-deep-dark via-brand-deep to-brand-blue text-white">
        <NeuralBackground light className="absolute inset-x-0 top-0 h-full w-full opacity-50" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/20">
              <Image
                src="/images/secao-3.png"
                alt="Professora e crianças da Escola Transição sorrindo e brincando com blocos coloridos"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <div className="order-1 lg:order-2">
            <SectionTitle align="left" light title={neuroHighlight.title} description={neuroHighlight.text} />
            <div className="mt-6">
              <Button href="/neuro-escola" showArrow className="!bg-white !text-brand-deep-dark hover:!bg-brand-sky">
                Conheça o conceito Neuro-Escola
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle
            eyebrow="Desenvolvimento integral"
            title="Cinco pilares do desenvolvimento"
            description={pillarsText}
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title={structure.title} />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {structure.items.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex flex-col gap-3">
                  {item.photo ? (
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-brand-deep/10 shadow-[0_8px_30px_-20px_rgba(10,63,209,0.45)]">
                      <Image
                        src={item.photo}
                        alt={item.label}
                        fill
                        sizes="(min-width: 1024px) 280px, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderImage label={item.image} aspect="aspect-[4/5]" />
                  )}
                  <p className="text-center font-heading text-sm font-semibold text-brand-deep-dark">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeIn className="mt-10 flex justify-center">
            <Button href="/estrutura" variant="secondary" showArrow>
              Ver estrutura completa
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title={projects.title} />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((item) => (
              <ProjectCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </StaggerGroup>
          <FadeIn className="mt-10 flex justify-center">
            <Button href="/projetos" showArrow>
              Conheça nossos projetos
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-blob-gradient" />
        <div className="container-page relative flex flex-col items-center gap-5 text-center">
          <FadeIn>
            <h2 className="text-balance max-w-3xl font-heading text-3xl font-bold text-brand-deep-dark sm:text-4xl">
              {impactPhrase.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-2xl text-balance text-lg text-ink-soft">{impactPhrase.text}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-brand-deep-dark via-brand-deep to-brand-blue text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <SectionTitle light title={finalCta.title} description={finalCta.text} />
          <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3">
            <Button href="/proposta-pedagogica" className="!bg-white !text-brand-deep-dark hover:!bg-brand-sky">
              Ver proposta pedagógica
            </Button>
            <Button href="/contato" variant="secondary" className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10">
              Entrar em contato
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
