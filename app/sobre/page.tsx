import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { IconCard } from "@/components/ui/IconCard";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { sobreContent } from "@/data/sobre";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre Nossa História e Essência",
  description:
    "Conheça a história, missão, valores e essência da Escola Transição, escola de educação infantil no bairro Costeira, em São José dos Pinhais.",
  path: "/sobre",
});

export default function SobrePage() {
  const { hero, quemSomos, essencia, mvv, acreditamos, cuidar } = sobreContent;

  return (
    <>
      <HeroPage eyebrow="Sobre a escola" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <PlaceholderImage label={hero.image} tone="deep" />
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn>
              <SectionTitle align="left" title={quemSomos.title} description={quemSomos.text} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionTitle align="left" title={essencia.title} description={essencia.text} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle eyebrow="Nossos princípios" title="Missão, visão e valores" />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mvv.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title} description={item.text} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title="O que acreditamos" />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {acreditamos.map((frase) => (
              <StaggerItem key={frase}>
                <div className="flex h-full items-center rounded-3xl border border-brand-mist bg-white p-6 shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
                  <p className="font-heading text-lg font-semibold leading-snug text-brand-deep-dark">
                    &ldquo;{frase}&rdquo;
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title={cuidar.title} description={cuidar.text} />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {cuidar.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-5 text-center shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
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
    </>
  );
}
