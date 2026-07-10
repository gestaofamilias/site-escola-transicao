import { HeroPage } from "@/components/ui/HeroPage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { projetosContent } from "@/data/projetos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projetos e Vivências",
  description:
    "Conheça os projetos, atividades e vivências que tornam a aprendizagem mais significativa na Escola Transição.",
  path: "/projetos",
});

export default function ProjetosPage() {
  const { hero, aprenderVivendo, projects, beneficios, galeria } = projetosContent;

  return (
    <>
      <HeroPage eyebrow="Vivências pedagógicas" title={hero.title} subtitle={hero.subtitle} />

      <section className="section">
        <div className="container-page flex justify-center">
          <SectionTitle title={aprenderVivendo.title} description={aprenderVivendo.text} />
        </div>
      </section>

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle title="Projetos da escola" />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                image={project.image}
                photo={project.photo}
              />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle title={beneficios.title} description={beneficios.text} />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {beneficios.items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-mist bg-white p-5 text-center shadow-[0_8px_24px_-18px_rgba(10,63,209,0.35)]">
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

      <section className="section bg-brand-sky/40">
        <div className="container-page">
          <SectionTitle eyebrow="Registros" title="Fotos dos projetos" />
          <div className="mt-12">
            <ImageGrid images={galeria.map((label) => ({ label }))} />
          </div>
        </div>
      </section>
    </>
  );
}
