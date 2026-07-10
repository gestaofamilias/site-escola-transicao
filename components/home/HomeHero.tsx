import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/site-config";
import { homeContent } from "@/data/home";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-blob-gradient pb-8 pt-6 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-mist/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent-green-soft/70 blur-3xl" />

      <div className="container-page relative grid items-center gap-6 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col items-start gap-3 sm:gap-5">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue shadow-sm">
              Educação infantil
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-balance font-heading text-3xl font-bold leading-tight text-brand-deep-dark sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="text-balance text-base font-medium text-brand-blue sm:text-lg">{hero.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.22} className="hidden sm:block">
            <p className="max-w-xl text-balance leading-relaxed text-ink-soft">{hero.text}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-wrap gap-3">
            <Button href={buildWhatsAppLink()} external variant="whatsapp" icon={<MessageCircle className="h-4 w-4" />}>
              Agende uma visita
            </Button>
            <Button href="/proposta-pedagogica" variant="secondary">
              Nossa proposta pedagógica
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left" className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-deep/10 sm:aspect-[1164/1351]">
              <Image
                src="/images/hero.webp"
                alt="Professora e crianças brincando juntas em sala de aula acolhedora da Escola Transição"
                fill
                preload
                fetchPriority="high"
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -left-6 top-8 hidden animate-float rounded-2xl bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-2">
              {(() => {
                const Icon = hero.floatingCards[0].icon;
                return <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />;
              })()}
              <span className="text-sm font-semibold text-brand-deep-dark">{hero.floatingCards[0].label}</span>
            </div>

            <div
              className="absolute -right-4 top-1/3 hidden animate-float-slow rounded-2xl bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-2"
              style={{ animationDelay: "0.6s" }}
            >
              {(() => {
                const Icon = hero.floatingCards[1].icon;
                return <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />;
              })()}
              <span className="text-sm font-semibold text-brand-deep-dark">{hero.floatingCards[1].label}</span>
            </div>

            <div
              className="absolute -left-4 bottom-24 hidden animate-float rounded-2xl bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-2"
              style={{ animationDelay: "1.1s" }}
            >
              {(() => {
                const Icon = hero.floatingCards[2].icon;
                return <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />;
              })()}
              <span className="text-sm font-semibold text-brand-deep-dark">{hero.floatingCards[2].label}</span>
            </div>

            <div
              className="absolute -right-6 bottom-8 hidden animate-float-slow rounded-2xl bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-2"
              style={{ animationDelay: "0.3s" }}
            >
              {(() => {
                const Icon = hero.floatingCards[3].icon;
                return <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />;
              })()}
              <span className="text-sm font-semibold text-brand-deep-dark">{hero.floatingCards[3].label}</span>
            </div>

            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-brand-deep-dark px-4 py-3 shadow-lg">
              {(() => {
                const Icon = hero.floatingCards[4].icon;
                return <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />;
              })()}
              <span className="text-sm font-semibold text-white">{hero.floatingCards[4].label}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
