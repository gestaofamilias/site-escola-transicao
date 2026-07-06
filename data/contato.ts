import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/lib/site-config";

export const contatoContent = {
  hero: {
    title: "Entre em contato com a Escola Transição",
    subtitle: "Estamos à disposição para apresentar nossa escola, proposta e rotina.",
  },
  cards: [
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsappNumber },
    { icon: Phone, label: "Telefone", value: siteConfig.phone },
    { icon: InstagramIcon, label: "Instagram", value: siteConfig.instagram },
    { icon: Mail, label: "E-mail", value: siteConfig.email },
    { icon: MapPin, label: "Endereço", value: siteConfig.address },
    { icon: Clock, label: "Horário de atendimento", value: siteConfig.hours },
  ],
  finalPhrase: "Será um prazer receber sua família e apresentar de perto a proposta da Escola Transição.",
};
