// Dados institucionais centralizados. Substitua os placeholders [INSERIR_...]
// pelos dados reais da escola quando estiverem disponíveis.

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const isProduction = process.env.NODE_ENV === "production";
const looksFake = (url: string) => /INSERIR|localhost|example\.com/i.test(url);

function resolveSiteUrl(): string {
  if (!isProduction) {
    // Desenvolvimento: localhost é aceitável e esperado.
    return rawSiteUrl && !looksFake(rawSiteUrl) ? rawSiteUrl.replace(/\/$/, "") : "http://localhost:3000";
  }

  if (rawSiteUrl && !looksFake(rawSiteUrl)) {
    return rawSiteUrl.replace(/\/$/, "");
  }

  // Deploys na Vercel (preview ou produção sem domínio próprio ainda
  // configurado) recebem automaticamente essa variável com uma URL real e
  // funcional — não é um domínio fictício, então é um fallback legítimo.
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  // Este módulo é importado por Client Components (Header, Footer,
  // ContactForm...), então também é avaliado no bundle do navegador. Lá,
  // variáveis sem prefixo NEXT_PUBLIC_ (como ALLOW_PLACEHOLDER_SITE_URL)
  // não existem — reproduzir o throw ali quebraria a hidratação para
  // todo mundo. A validação rígida só roda no servidor (build/SSR); se o
  // build passou, o servidor já garantiu que está tudo certo.
  if (typeof window !== "undefined") {
    return "https://INSERIR-DOMINIO-DO-SITE.com.br";
  }

  if (process.env.ALLOW_PLACEHOLDER_SITE_URL) {
    // Escape hatch só para builds de verificação/CI locais — nunca usar em
    // um deploy real. Avisa alto no log em vez de falhar silenciosamente.
    console.warn(
      "[site-config] Build de produção rodando com domínio fictício porque ALLOW_PLACEHOLDER_SITE_URL " +
        "está definida. NÃO publique este build. Defina NEXT_PUBLIC_SITE_URL com o domínio real antes do deploy."
    );
    return "https://INSERIR-DOMINIO-DO-SITE.com.br";
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL não está definida (ou ainda aponta para um domínio fictício/localhost). " +
      "Defina essa variável de ambiente com o domínio real do site antes de publicar em produção. " +
      "Para gerar um build de verificação sem domínio real, rode com ALLOW_PLACEHOLDER_SITE_URL=1."
  );
}

export const siteUrl = resolveSiteUrl();

// Verdadeiro para qualquer valor que ainda seja um placeholder [INSERIR_...]
// pendente de preenchimento pela escola. Use isto para nunca renderizar o
// texto cru do placeholder para o público — ou esconda o bloco, ou mostre
// uma mensagem neutra.
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[INSERIR");
}

const instagramHandle = "@escola_transicao";

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
  phoneE164: "+554135860107", // formato internacional, para tel: e JSON-LD
  email: "[INSERIR_EMAIL]",
  instagram: instagramHandle,
  instagramUrl: `https://www.instagram.com/${instagramHandle.replace(/^@/, "")}/`,
  address: "R. João Zarpelon, 124 - Costeira, São José dos Pinhais - PR, 83015-210",
  // Campos estruturados do mesmo endereço acima, para JSON-LD (schema.org PostalAddress).
  addressStructured: {
    streetAddress: "R. João Zarpelon, 124 - Costeira",
    addressLocality: "São José dos Pinhais",
    addressRegion: "PR",
    postalCode: "83015-210",
    addressCountry: "BR",
  },
  city: "São José dos Pinhais",
  neighborhood: "Costeira",
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
