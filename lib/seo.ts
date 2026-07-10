import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site-config";

// Imagem social dedicada (1200x630): fundo em degradê da marca + logo,
// gerada uma vez a partir do logo real (ver scripts/generate-og-image.mjs).
// Não é a foto vertical do hero — essa proporção fica ruim em cards sociais.
const SOCIAL_IMAGE = {
  url: "/images/og-cover.png",
  width: 1200,
  height: 630,
  alt: "Escola Transição — educação infantil com acolhimento e neurociência",
};

type PageMetadataInput = {
  /** Título específico da página, SEM o nome da escola (o template do
   * layout raiz já adiciona " | Escola Transição" uma única vez). */
  title: string;
  description: string;
  /** Caminho absoluto da rota, começando com "/". Use "" para a home. */
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
};

export function pageMetadata({ title, description, path, image = SOCIAL_IMAGE }: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  // Open Graph/Twitter não passam pelo template de <title> do layout raiz
  // (isso só vale para o <title> do documento), então incluímos o nome da
  // escola aqui manualmente para o card ficar completo quando compartilhado.
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
