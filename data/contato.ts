import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { buildWhatsAppLink, isPlaceholder, siteConfig } from "@/lib/site-config";

const allCards = [
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsappDisplay, href: buildWhatsAppLink() },
  { icon: Phone, label: "Telefone", value: siteConfig.phone, href: `tel:${siteConfig.phoneE164}` },
  { icon: InstagramIcon, label: "Instagram", value: siteConfig.instagram, href: siteConfig.instagramUrl },
  { icon: Mail, label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Endereço", value: siteConfig.address, href: siteConfig.googleMapsLink },
  { icon: Clock, label: "Horário de atendimento", value: siteConfig.hours, href: undefined },
];

export const contatoContent = {
  hero: {
    title: "Entre em contato com a Escola Transição",
    subtitle: "Estamos à disposição para apresentar nossa escola, proposta e rotina.",
  },
  // Nunca mostrar um card cujo valor ainda seja um placeholder [INSERIR_...].
  cards: allCards.filter((card) => !isPlaceholder(card.value)),
  finalPhrase: "Será um prazer receber sua família e apresentar de perto a proposta da Escola Transição.",
};
