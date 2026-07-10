import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PillarCard } from "@/components/ui/PillarCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ScrollSnapRow } from "@/components/ui/ScrollSnapRow";
import { FadeIn, StaggerGroup } from "@/components/ui/FadeIn";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { buildWhatsAppLink } from "@/lib/site-config";
import { homeContent } from "@/data/home";

// Sem export de `metadata` aqui: a home usa o título, descrição, canonical
// e Open Graph padrão já definidos em app/layout.tsx (que já são
// específicos para "/"), evitando duplicar "Escola Transição" no título.

export default function HomePage() {
  const { diferenciais, intro, neuroHighlight, pillars, pillarsText, structure, projects, faq, impactPhrase, finalCta } =
    homeContent;

  return (
    <>
      <HomeHero />

      {/* Sem StaggerGroup/StaggerItem aqui de propósito: é uma faixa simples
          de apoio visual, não precisa de reveal-on-scroll individual por
          card — menos instâncias de Framer Motion na página = hidratação
          mais leve. */}
      <section className="section bg-cream py-10 sm:py-12">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div key={item.title} className="flex h-full flex-col gap-3 rounded-2xl bg-white/60 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="font-heading font-semibold text-brand-deep-dark">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

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
                src="/images/secao-2.webp"
                alt="Professora e crianças da Escola Transição brincando com jogos pedagógicos em sala de aula com decoração de neurociência"
                fill
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
                src="/images/secao-3.webp"
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

      <section className="section bg-mist-gray">
        <div className="container-page">
          <SectionTitle
            eyebrow="Desenvolvimento integral"
            title="Cinco pilares do desenvolvimento"
            description={pillarsText}
          />
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:grid-rows-2">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                large={index === 3}
                className={index === 3 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section bg-cream-deep overflow-hidden">
        <div className="container-page">
          <SectionTitle title={structure.title} />
        </div>
        <div className="container-page mt-12">
          <ScrollSnapRow label="Ambientes da escola">
            {structure.items.map((item) => (
              <div key={item.label} data-scroll-item className="flex w-[220px] shrink-0 snap-start flex-col gap-3 sm:w-[260px]">
                {item.photo ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-brand-deep/10 shadow-[0_8px_30px_-20px_rgba(10,63,209,0.45)]">
                    <Image src={item.photo} alt={item.label} fill sizes="260px" className="object-cover" />
                  </div>
                ) : (
                  <PlaceholderImage label={item.image} aspect="aspect-[4/5]" />
                )}
                <p className="text-center font-heading text-sm font-semibold text-brand-deep-dark">{item.label}</p>
              </div>
            ))}
          </ScrollSnapRow>
        </div>
        <div className="container-page">
          <FadeIn className="mt-8 flex justify-center">
            <Button href="/estrutura" variant="secondary" showArrow>
              Ver estrutura completa
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title={projects.title} />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((item, index) => (
              <ProjectCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                image={item.image}
                photo={item.photo}
                className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
              />
            ))}
          </StaggerGroup>
          <FadeIn className="mt-10 flex justify-center">
            <Button href="/projetos" showArrow>
              Conheça nossos projetos
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page max-w-3xl">
          <SectionTitle eyebrow="Dúvidas frequentes" title="Perguntas que recebemos com frequência" />
          <div className="mt-10 flex flex-col gap-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-white p-5 shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)] open:shadow-[0_12px_30px_-18px_rgba(10,63,209,0.45)]"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center gap-4 font-heading font-semibold text-brand-deep-dark marker:content-none">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-blue">
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="flex-1">{item.question}</span>
                  <span aria-hidden="true" className="text-xl text-brand-blue transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-[3.25rem] leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
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
            <Button
              href={buildWhatsAppLink()}
              external
              variant="whatsapp"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Agende uma visita
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
