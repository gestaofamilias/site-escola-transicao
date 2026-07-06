import { Bath, ClipboardCheck, DoorOpen, Home, Salad, ShieldCheck, Sofa, Sparkles, SprayCan, Sun, Trees, Users } from "lucide-react";

export const estruturaContent = {
  hero: {
    title: "Estrutura da Escola",
    subtitle: "Ambientes preparados para acolher, cuidar, brincar e aprender.",
    image: "[INSERIR_FOTO_DA_ESTRUTURA]",
  },
  intro: {
    title: "Ambientes pensados para a infância",
    text: "Cada espaço da Escola Transição é planejado para favorecer segurança, autonomia, interação, movimento, criatividade e aprendizagem.",
  },
  spaces: [
    { icon: Home, image: "[INSERIR_FOTO_FACHADA]", title: "Fachada", description: "A porta de entrada que recebe cada família com cuidado." },
    { icon: DoorOpen, image: "[INSERIR_FOTO_RECEPCAO]", title: "Recepção", description: "Um espaço acolhedor para o primeiro contato do dia." },
    { icon: Sofa, image: "[INSERIR_FOTO_SALA_1]", title: "Salas de aula", description: "Ambientes organizados para estimular o aprendizado." },
    { icon: Sparkles, image: "[INSERIR_FOTO_ATIVIDADE]", title: "Espaço de brincadeiras", description: "Lugar de imaginação, movimento e descobertas." },
    { icon: Sun, image: "[INSERIR_FOTO_AMBIENTE_SENSORIAL]", title: "Ambiente sensorial", description: "Texturas, sons e estímulos para os sentidos." },
    { icon: Users, image: "[INSERIR_FOTO_PATIO]", title: "Área de movimento", description: "Espaço amplo para atividades motoras." },
    { icon: Salad, image: "[INSERIR_FOTO_REFEITORIO]", title: "Refeitório", description: "Momentos de alimentação com conforto e cuidado." },
    { icon: Bath, image: "[INSERIR_FOTO_BANHEIRO]", title: "Banheiros adaptados", description: "Estrutura pensada para a autonomia das crianças." },
    { icon: Trees, image: "[INSERIR_FOTO_AREA_EXTERNA]", title: "Área externa", description: "Contato com o ar livre e brincadeiras ao sol." },
    { icon: Users, image: "[INSERIR_FOTO_CONVIVENCIA]", title: "Espaços de convivência", description: "Lugares para socializar e criar vínculos." },
  ],
  seguranca: {
    title: "Segurança e organização",
    text: "A segurança faz parte do cuidado diário. Por isso, os ambientes são organizados para receber as crianças com atenção, conforto e responsabilidade.",
    items: [
      { icon: SprayCan, title: "Ambientes limpos e organizados" },
      { icon: ShieldCheck, title: "Espaços supervisionados" },
      { icon: ClipboardCheck, title: "Rotina segura" },
      { icon: Sparkles, title: "Materiais adequados" },
      { icon: Home, title: "Cuidado com cada detalhe" },
    ],
  },
  galeria: [
    "[INSERIR_FOTO_SALA_1]",
    "[INSERIR_FOTO_PATIO]",
    "[INSERIR_FOTO_REFEITORIO]",
    "[INSERIR_FOTO_AMBIENTE_SENSORIAL]",
    "[INSERIR_FOTO_ATIVIDADE]",
    "[INSERIR_FOTO_FACHADA]",
  ],
};
