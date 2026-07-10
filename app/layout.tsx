import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { isPlaceholder, siteConfig, siteUrl } from "@/lib/site-config";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultTitle = "Escola Transição | Educação Infantil com Acolhimento e Neurociência";
const defaultDescription =
  "Escola de educação infantil em São José dos Pinhais (Costeira) que une acolhimento, neurociência, experiências significativas e desenvolvimento integral.";
const socialImage = {
  url: "/images/og-cover.png",
  width: 1200,
  height: 630,
  alt: "Escola Transição — educação infantil com acolhimento e neurociência",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Escola Transição",
  },
  description: defaultDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage.url],
  },
};

// Dados estruturados Schema.org (EducationalOrganization). Campos que ainda
// não foram confirmados pela escola (e-mail, horário de funcionamento,
// geolocalização) ficam de fora em vez de expor um placeholder [INSERIR_...]
// em dados públicos indexáveis pelo Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}${socialImage.url}`,
  telephone: siteConfig.phoneE164,
  ...(isPlaceholder(siteConfig.email) ? {} : { email: siteConfig.email }),
  address: {
    "@type": "PostalAddress",
    ...siteConfig.addressStructured,
  },
  sameAs: [siteConfig.instagramUrl],
};

// JSON.stringify sozinho não escapa "<", então uma string maliciosa como
// "</script><script>..." dentro dos dados poderia fechar a tag e injetar
// script. Nossos campos vêm todos de config estático confiável, mas
// escapamos mesmo assim como prática segura padrão.
const jsonLdSafe = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${nunito.variable} h-full antialiased`}>
      {/* suppressHydrationWarning: extensões de navegador (ex: ColorZilla)
          injetam atributos como cz-shortcut-listen no <body> antes da
          hidratação do React, gerando um falso positivo de mismatch. */}
      {/* overflow-x-hidden: as animações FadeIn/StaggerItem (Framer Motion)
          partem de um translateX antes de assentar em x:0; em seções sem
          overflow-hidden próprio, isso vazava alguns pixels de rolagem
          horizontal. Isto é uma rede de segurança em toda a página. */}
      <body className="flex min-h-full flex-col overflow-x-hidden" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdSafe }}
        />
        {/* Se o JavaScript falhar ou estiver desabilitado, o Framer Motion
            nunca roda para animar [data-motion-reveal] de opacity:0 para 1.
            <noscript> só é aplicado pelo navegador quando JS está
            desligado, então isto garante que o conteúdo nunca fique preso
            invisível. */}
        <noscript>
          <style>{`[data-motion-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionConfig>
      </body>
    </html>
  );
}
