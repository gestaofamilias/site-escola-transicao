// Dados institucionais centralizados. Substitua os placeholders [INSERIR_...]
// pelos dados reais da escola quando estiverem disponíveis.

// URL pública do site em produção. Defina a variável de ambiente
// NEXT_PUBLIC_SITE_URL (ex: https://escolatransicao.com.br) quando o
// domínio definitivo estiver disponível; até lá, fica um placeholder.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://[INSERIR_DOMINIO_DO_SITE]";

export const siteConfig = {
  name: "Escola Transição",
  tagline: "Acolhimento, neurociência e desenvolvimento integral na educação infantil.",
  whatsappNumber: "[INSERIR_NUMERO_WHATSAPP]", // apenas dígitos, com DDI. Ex: 5511999999999
  whatsappDefaultMessage:
    "Olá! Vim pelo site da Escola Transição e gostaria de conhecer melhor a escola.",
  phone: "[INSERIR_TELEFONE]",
  email: "[INSERIR_EMAIL]",
  instagram: "[INSERIR_INSTAGRAM]",
  address: "[INSERIR_ENDERECO]",
  hours: "[INSERIR_HORARIO]",
  googleMapsLink: "[INSERIR_LINK_GOOGLE_MAPS]",
  googleMapsEmbedSrc: "[INSERIR_IFRAME_GOOGLE_MAPS]",
} as const;

export function buildWhatsAppLink(message?: string) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Neuro-Escola", href: "/neuro-escola" },
  { label: "Proposta Pedagógica", href: "/proposta-pedagogica" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Projetos", href: "/projetos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: NavItem[] = [
  ...mainNav.filter((item) => item.href !== "/"),
  { label: "Rotina Escolar", href: "/rotina" },
  { label: "Equipe", href: "/equipe" },
  { label: "Política de Privacidade", href: "/privacidade" },
];
