import type { Metadata } from "next";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ContactCard } from "@/components/ui/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { FadeIn, StaggerGroup } from "@/components/ui/FadeIn";
import { MessageCircle, MapIcon } from "lucide-react";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { contatoContent } from "@/data/contato";

export const metadata: Metadata = {
  title: "Contato | Escola Transição",
  description: "Entre em contato com a Escola Transição e conheça nossa proposta, estrutura e rotina.",
};

export default function ContatoPage() {
  const { hero, cards, finalPhrase } = contatoContent;

  return (
    <>
      <HeroPage eyebrow="Fale com a gente" title={hero.title} subtitle={hero.subtitle}>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={buildWhatsAppLink()} external icon={<MessageCircle className="h-4 w-4" />} className="!bg-white !text-brand-deep-dark hover:!bg-brand-sky">
            Falar pelo WhatsApp
          </Button>
          <Button
            href={siteConfig.googleMapsLink}
            external
            variant="secondary"
            icon={<MapIcon className="h-4 w-4" />}
            className="!border-white/40 !bg-transparent !text-white hover:!bg-white/10"
          >
            Abrir no Google Maps
          </Button>
        </div>
      </HeroPage>

      <section className="section">
        <div className="container-page">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <ContactCard key={card.label} icon={card.icon} label={card.label} value={card.value} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionTitle align="left" eyebrow="Envie uma mensagem" title="Formulário de contato" description="Preencha os dados abaixo e retornaremos o quanto antes." />
            <div className="mt-6">
              <ContactForm />
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="left">
            <SectionTitle align="left" eyebrow="Localização" title="Como chegar até nós" description="Confira nossa localização no mapa abaixo." />
            <div className="mt-6 overflow-hidden rounded-3xl shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)]">
              <MapEmbed />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-blob-gradient" />
        <div className="container-page relative flex justify-center">
          <FadeIn>
            <p className="max-w-2xl text-balance text-center font-heading text-2xl font-semibold text-brand-deep-dark sm:text-3xl">
              {finalPhrase}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
