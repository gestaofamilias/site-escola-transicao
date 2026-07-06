import {
  Activity,
  BookOpen,
  Brain,
  Heart,
  HeartHandshake,
  Music,
  Palette,
  Puzzle,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";

export const homeContent = {
  hero: {
    title: "Escola Transição: acolher, desenvolver e transformar a infância",
    subtitle:
      "Uma escola que une afeto, neurociência e experiências significativas para acompanhar cada criança em seu próprio jeito de aprender.",
    text: "Na Escola Transição, cada criança é vista de forma única. Nosso compromisso é oferecer um ambiente seguro, acolhedor e estimulante, onde o desenvolvimento motor, cognitivo, social, afetivo e sensorial acontece de forma integrada.",
    image: "[INSERIR_FOTO_PRINCIPAL_DA_ESCOLA]",
    floatingCards: [
      { icon: HeartHandshake, label: "Acolhimento" },
      { icon: Brain, label: "Neurociência" },
      { icon: Sparkles, label: "Desenvolvimento" },
      { icon: BookOpen, label: "Experiências" },
      { icon: Heart, label: "Cuidado individual" },
    ],
  },
  intro: {
    title: "Uma escola pensada para cada fase da infância",
    text: "A Escola Transição nasceu com o propósito de oferecer uma educação infantil mais humana, acolhedora e conectada ao desenvolvimento real de cada criança. Aqui, aprender envolve brincar, sentir, conviver, experimentar, se movimentar e criar vínculos.",
  },
  neuroHighlight: {
    title: "Neuro-Escola: a ciência que entende o cérebro, a escola que transforma vidas",
    text: "O conceito Neuro-Escola representa uma forma de olhar para a aprendizagem infantil com base na neurociência. Entendemos que o cérebro aprende por meio das experiências, das emoções, do movimento, da linguagem e das relações.",
  },
  pillars: [
    { icon: Activity, title: "Motor", description: "Movimento, coordenação e consciência corporal." },
    { icon: Puzzle, title: "Cognitivo", description: "Atenção, memória e resolução de desafios." },
    { icon: Users, title: "Social", description: "Convivência, escuta e construção de vínculos." },
    { icon: Heart, title: "Afetivo", description: "Emoções, segurança e autoestima." },
    { icon: Wind, title: "Sensorial", description: "Percepções, texturas, sons e sensações." },
  ],
  pillarsText:
    "Nosso trabalho considera a criança por inteiro, estimulando diferentes áreas do desenvolvimento de forma integrada.",
  structure: {
    title: "Ambientes preparados para acolher, brincar e aprender",
    items: [
      { image: "[INSERIR_FOTO_SALA_1]", label: "Salas acolhedoras" },
      { image: "[INSERIR_FOTO_PATIO]", photo: "/images/estrutura-quintal.png", label: "Espaços de convivência" },
      { image: "[INSERIR_FOTO_AMBIENTE_SENSORIAL]", photo: "/images/estrutura-entrada.png", label: "Ambientes seguros" },
      { image: "[INSERIR_FOTO_ATIVIDADE]", photo: "/images/estrutura-parquinho.png", label: "Espaços para experiências" },
    ],
  },
  projects: {
    title: "Experiências que tornam a aprendizagem mais viva",
    items: [
      { icon: BookOpen, title: "Leitura", description: "Histórias que despertam imaginação e linguagem." },
      { icon: Music, title: "Musicalização", description: "Ritmo, sons e expressão musical." },
      { icon: Activity, title: "Atividades motoras", description: "Movimento, equilíbrio e coordenação." },
      { icon: Wind, title: "Experiências sensoriais", description: "Texturas, cheiros e descobertas." },
      { icon: Palette, title: "Arte e criatividade", description: "Expressão livre e criação." },
      { icon: HeartHandshake, title: "Educação socioemocional", description: "Emoções, escuta e convivência." },
    ],
  },
  impactPhrase: {
    title: "Cada experiência cria conexões. Cada conexão transforma o futuro.",
    text: "Na Escola Transição, cada dia é uma oportunidade de aprender, se desenvolver e construir novas descobertas.",
  },
  finalCta: {
    title: "Conheça a Escola Transição",
    text: "Explore nosso site e conheça nossa história, proposta pedagógica, estrutura, projetos e forma de cuidar da infância.",
  },
};
