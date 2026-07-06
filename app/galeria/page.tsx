import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { FadeIn } from "@/components/ui/FadeIn";
import { FilterableGallery } from "@/components/gallery/FilterableGallery";
import { galeriaContent } from "@/data/galeria";

export const metadata: Metadata = {
  title: "Galeria | Escola Transição",
  description: "Veja fotos dos ambientes, projetos, atividades e momentos da Escola Transição.",
};

export default function GaleriaPage() {
  const { hero, intro, filters, images } = galeriaContent;

  return (
    <>
      <HeroPage eyebrow="Nosso dia a dia" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page flex flex-col items-center gap-12">
          <FadeIn>
            <p className="max-w-2xl text-balance text-center text-lg leading-relaxed text-ink-soft">{intro}</p>
          </FadeIn>
          <div className="w-full">
            <FilterableGallery images={images} filters={filters} />
          </div>
        </div>
      </section>
    </>
  );
}
