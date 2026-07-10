import {
  Activity,
  BookOpen,
  Brain,
  Heart,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Music,
  Palette,
  Puzzle,
  ShieldCheck,
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
  diferenciais: [
    { icon: HeartHandshake, title: "Acompanhamento individual", description: "Cada criança é observada e acompanhada no seu próprio ritmo de desenvolvimento." },
    { icon: Brain, title: "Neurociência aplicada", description: "A rotina e as atividades são pensadas com base em como o cérebro infantil aprende." },
    { icon: ShieldCheck, title: "Ambientes seguros", description: "Espaços organizados para acolher, proteger e estimular a autonomia das crianças." },
    { icon: Users, title: "Parceria com as famílias", description: "Comunicação próxima para acompanhar de perto o desenvolvimento de cada criança." },
  ],
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
      { image: "[INSERIR_FOTO_PATIO]", photo: "/images/estrutura-quintal.webp", label: "Espaços de convivência" },
      { image: "[INSERIR_FOTO_AMBIENTE_SENSORIAL]", photo: "/images/estrutura-entrada.webp", label: "Ambientes seguros" },
      { image: "[INSERIR_FOTO_ATIVIDADE]", photo: "/images/estrutura-parquinho.webp", label: "Espaços para experiências" },
    ],
  },
  projects: {
    title: "Experiências que tornam a aprendizagem mais viva",
    items: [
      { icon: BookOpen, title: "Leitura", description: "Histórias que despertam imaginação e linguagem.", image: "[INSERIR_FOTO_LEITURA]", photo: "/images/projeto-leitura.webp" },
      { icon: Music, title: "Musicalização", description: "Ritmo, sons e expressão musical.", image: "[INSERIR_FOTO_MUSICALIZACAO]", photo: "/images/projeto-musicalizacao.webp" },
      { icon: Activity, title: "Atividades motoras", description: "Movimento, equilíbrio e coordenação.", image: "[INSERIR_FOTO_ATIVIDADES_MOTORAS]", photo: "/images/projeto-atividades-motoras.webp" },
      { icon: Wind, title: "Experiências sensoriais", description: "Texturas, cheiros e descobertas.", image: "[INSERIR_FOTO_EXPERIENCIA_SENSORIAL]", photo: "/images/projeto-experiencias-sensoriais.webp" },
      { icon: Palette, title: "Arte e criatividade", description: "Expressão livre e criação.", image: "[INSERIR_FOTO_ARTE_CRIATIVIDADE]", photo: "/images/projeto-arte-criatividade.webp" },
      { icon: HeartHandshake, title: "Educação socioemocional", description: "Emoções, escuta e convivência.", image: "[INSERIR_FOTO_SOCIOEMOCIONAL]", photo: "/images/projeto-educacao-socioemocional.webp" },
    ],
  },
  impactPhrase: {
    title: "Cada experiência cria conexões. Cada conexão transforma o futuro.",
    text: "Na Escola Transição, cada dia é uma oportunidade de aprender, se desenvolver e construir novas descobertas.",
  },
  // Respostas baseadas apenas no que já está confirmado e publicado nas
  // outras páginas do site (Neuro-Escola, Proposta Pedagógica, Rotina,
  // Contato) — nenhum dado novo (horário, faixa etária, valores) inventado.
  faq: [
    {
      icon: Brain,
      question: "O que é a Neuro-Escola?",
      answer:
        "É a forma como aplicamos a neurociência na prática pedagógica: entendemos que o cérebro da criança aprende por meio de experiências, emoções, movimento e relações, e planejamos a rotina considerando isso.",
    },
    {
      icon: HeartHandshake,
      question: "Como funciona o acompanhamento individual das crianças?",
      answer:
        "Cada criança é observada e acompanhada de forma próxima, respeitando seu próprio ritmo nas áreas motora, cognitiva, social, afetiva e sensorial.",
    },
    {
      icon: Sparkles,
      question: "Como é a rotina na escola?",
      answer:
        "A rotina é pensada com intencionalidade, alternando acolhida, atividades pedagógicas, brincadeiras, alimentação e descanso, sempre respeitando o ritmo de cada criança.",
    },
    {
      icon: MessageCircle,
      question: "Como faço para conhecer a escola pessoalmente?",
      answer:
        "Você pode agendar uma visita diretamente pelo WhatsApp ou pelo formulário na página de Contato — teremos prazer em te receber.",
    },
    {
      icon: MapPin,
      question: "Onde fica a Escola Transição?",
      answer: "Estamos no bairro Costeira, em São José dos Pinhais (PR).",
    },
  ],
  finalCta: {
    title: "Conheça a Escola Transição de perto",
    text: "Será um prazer receber sua família e apresentar nossa proposta, estrutura e rotina pessoalmente.",
  },
};
