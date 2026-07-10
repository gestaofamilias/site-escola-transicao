import {
  Activity,
  BookOpen,
  Brain,
  Calendar,
  Compass,
  HeartHandshake,
  MessageCircle,
  Music,
  Palette,
  Puzzle,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";

export const projetosContent = {
  hero: {
    title: "Projetos e Vivências",
    subtitle: "Experiências que tornam a aprendizagem mais viva, afetiva e significativa.",
  },
  aprenderVivendo: {
    title: "Aprender vivendo",
    text: "Na Escola Transição, os projetos e vivências aproximam a criança do conhecimento por meio da prática, da criatividade, do movimento, da imaginação e das relações.",
  },
  projects: [
    { icon: BookOpen, title: "Projeto de leitura", description: "Histórias que despertam a imaginação e ampliam a linguagem.", image: "[INSERIR_FOTO_PROJETO_1]", photo: "/images/projeto-leitura.webp" },
    { icon: Music, title: "Musicalização", description: "Ritmo, sons e expressão através da música.", image: "[INSERIR_FOTO_PROJETO_2]", photo: "/images/projeto-musicalizacao.webp" },
    { icon: Palette, title: "Arte e criatividade", description: "Expressão livre por meio de cores, formas e materiais.", image: "[INSERIR_FOTO_PROJETO_3]", photo: "/images/projeto-arte-criatividade.webp" },
    { icon: Activity, title: "Atividades motoras", description: "Movimento, equilíbrio e coordenação em brincadeiras dirigidas.", image: "[INSERIR_FOTO_PROJETO_4]", photo: "/images/projeto-atividades-motoras.webp" },
    { icon: Wind, title: "Experiências sensoriais", description: "Texturas, cheiros e sons que estimulam os sentidos.", photo: "/images/projeto-experiencias-sensoriais.webp" },
    { icon: HeartHandshake, title: "Educação socioemocional", description: "Espaço para nomear emoções e fortalecer vínculos.", photo: "/images/projeto-educacao-socioemocional.webp" },
    { icon: Calendar, title: "Datas comemorativas", description: "Celebrações que valorizam cultura, afeto e convivência." },
    { icon: Users, title: "Projetos com a família", description: "Momentos que aproximam escola e família no aprendizado." },
    { icon: Sparkles, title: "Brincadeiras pedagógicas", description: "O brincar como caminho para aprender e se desenvolver." },
    { icon: Brain, title: "Projetos especiais da Neuro-Escola", description: "Propostas baseadas na neurociência aplicada à infância." },
  ],
  beneficios: {
    title: "Vivências que desenvolvem",
    text: "Cada projeto é pensado para estimular diferentes habilidades, ampliar repertórios, fortalecer vínculos e tornar a aprendizagem mais significativa.",
    items: [
      { icon: Palette, title: "Criatividade" },
      { icon: MessageCircle, title: "Comunicação" },
      { icon: Compass, title: "Autonomia" },
      { icon: Activity, title: "Movimento" },
      { icon: Users, title: "Socialização" },
      { icon: HeartHandshake, title: "Emoções" },
      { icon: Sparkles, title: "Imaginação" },
      { icon: Puzzle, title: "Descobertas" },
    ],
  },
  galeria: ["[INSERIR_FOTO_PROJETO_1]", "[INSERIR_FOTO_PROJETO_2]", "[INSERIR_FOTO_PROJETO_3]", "[INSERIR_FOTO_PROJETO_4]"],
};
