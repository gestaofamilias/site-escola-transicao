// Dados institucionais centralizados. Substitua os placeholders [INSERIR_...]
// pelos dados reais da escola quando estiverem disponíveis.

// URL pública do site em produção. Defina a variável de ambiente
// NEXT_PUBLIC_SITE_URL (ex: https://escolatransicao.com.br) quando o
// domínio definitivo estiver disponível; até lá, fica um placeholder.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://INSERIR-DOMINIO-DO-SITE.com.br";

export const siteConfig = {
  name: "Escola Transição",
  tagline: "Acolhimento, neurociência e desenvolvimento integral na educação infantil.",
  // Assumindo que o WhatsApp usa o mesmo número de telefone do Google Maps
  // (41 3586-0107) — confirme se a escola usa outro número para o WhatsApp.
  whatsappNumber: "554135860107", // apenas dígitos, com DDI. Ex: 5511999999999
  whatsappDisplay: "+55 (41) 3586-0107", // versão formatada, só para exibição
  whatsappDefaultMessage:
    "Olá! Vim pelo site da Escola Transição e gostaria de conhecer melhor a escola.",
  phone: "(41) 3586-0107",
  email: "[INSERIR_EMAIL]",
  instagram: "@escola_transicao",
  address: "R. João Zarpelon, 124 - Costeira, São José dos Pinhais - PR, 83015-210",
  hours: "[INSERIR_HORARIO]", // confirmado apenas: fecha às 18h. Falta horário de abertura e dias da semana.
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Zarpelon%2C+124+-+Costeira%2C+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR%2C+83015-210",
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
