import { Mail } from "lucide-react";
import { HeroPage } from "@/components/ui/HeroPage";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  privacidadeContent,
  privacyContactEmail,
  privacyDpoName,
  privacyLastUpdated,
} from "@/data/privacidade";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como a Escola Transição coleta, usa e protege dados pessoais e imagens de crianças, em conformidade com a LGPD.",
  path: "/privacidade",
});

export default function PrivacidadePage() {
  const { hero, intro, sections, contactTitle, contactText } = privacidadeContent;

  return (
    <>
      <HeroPage eyebrow="LGPD" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <p className="text-balance text-lg leading-relaxed text-ink-soft">{intro}</p>
          </FadeIn>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section) => (
              <FadeIn key={section.id}>
                <h2 className="font-heading text-xl font-semibold text-brand-deep-dark sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-1 flex flex-col gap-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-2 leading-relaxed text-ink-soft">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10">
            <div className="rounded-3xl border border-brand-mist bg-brand-sky/40 p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-brand-deep-dark sm:text-2xl">
                {contactTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{contactText}</p>
              <a
                href={`mailto:${privacyContactEmail}`}
                className="focus-ring mt-4 inline-flex items-center gap-2 font-semibold text-brand-blue hover:text-brand-deep"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                {privacyContactEmail}
              </a>
              <p className="mt-1 text-sm text-ink-soft">Encarregado(a) de Dados (DPO): {privacyDpoName}</p>
            </div>
          </FadeIn>

          <p className="mt-8 text-sm text-ink-soft/70">Última atualização: {privacyLastUpdated}</p>
        </div>
      </section>
    </>
  );
}
