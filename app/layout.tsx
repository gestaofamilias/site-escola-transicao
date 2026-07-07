import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig, siteUrl } from "@/lib/site-config";

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
  "Conheça a Escola Transição, uma escola de educação infantil que une acolhimento, neurociência, experiências significativas e desenvolvimento integral.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Escola Transição",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Escola Transição",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/hero.png",
        width: 1164,
        height: 1351,
        alt: "Professora e crianças da Escola Transição em atividade pedagógica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/hero.png"],
  },
};

// Dados estruturados Schema.org. Os campos de contato ainda vêm de
// siteConfig como placeholders [INSERIR_...] até serem preenchidos.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
  },
  openingHours: siteConfig.hours,
  sameAs: [siteConfig.instagram],
};

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
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
