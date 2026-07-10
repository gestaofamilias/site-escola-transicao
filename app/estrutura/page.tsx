import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { estruturaContent } from "@/data/estrutura";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Estrutura",
  description: "Conheça os ambientes da Escola Transição, preparados para acolher, cuidar, brincar e aprender.",
  path: "/estrutura",
});

export default function EstruturaPage() {
  const { hero, intro, spaces, seguranca, galeria } = estruturaContent;

  return (
    <>
      <HeroPage eyebrow="Nossos ambientes" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <SectionTitle align="left" title={intro.title} description={intro.text} />
          <PlaceholderImage label={hero.image} tone="deep" />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title="Espaços da escola" />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space) => (
              <StaggerItem key={space.title}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-mist/70 bg-white shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)]">
                  <div className="p-3 pb-0">
                    <PlaceholderImage label={space.image} aspect="aspect-[16/10]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                      <space.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-brand-deep-dark">{space.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{space.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title={seguranca.title} description={seguranca.text} />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {seguranca.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl bg-brand-sky/50 p-5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm">
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
        <div className="container-page">
          <SectionTitle eyebrow="Galeria" title="Galeria da estrutura" description="Clique em uma imagem para ampliar." />
          <div className="mt-12">
            <ImageGrid images={galeria.map((label) => ({ label }))} />
          </div>
        </div>
      </section>
    </>
  );
}
