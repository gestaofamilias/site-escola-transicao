import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const routes = [
  "",
  "/sobre",
  "/neuro-escola",
  "/proposta-pedagogica",
  "/estrutura",
  "/projetos",
  "/rotina",
  "/equipe",
  "/galeria",
  "/contato",
  "/privacidade",
];

// Sem lastModified: não temos um CMS ou histórico real de alteração por
// página, e usar a data de cada build para todas as rotas é enganoso para
// os buscadores (parece que tudo mudou, mesmo quando nada mudou). Melhor
// omitir o campo do que inventar uma data.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
