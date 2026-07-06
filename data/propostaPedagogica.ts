import {
  Activity,
  ClipboardList,
  Ear,
  Heart,
  MessageSquare,
  MousePointerClick,
  NotebookPen,
  PersonStanding,
  Puzzle,
  Users,
  Wind,
} from "lucide-react";

export const propostaContent = {
  hero: {
    title: "Proposta Pedagógica",
    subtitle: "Um método que desenvolve a criança por inteiro.",
  },
  proposta: {
    title: "Nossa proposta",
    text: "A proposta pedagógica da Escola Transição considera que o desenvolvimento infantil acontece de forma integrada. A criança aprende quando brinca, sente, se movimenta, convive, experimenta, observa, pergunta e cria.",
  },
  integral: {
    title: "Desenvolvimento integral",
    text: "Nosso método valoriza o desenvolvimento motor, cognitivo, social, afetivo e sensorial, entendendo que essas áreas se conectam no processo de aprendizagem.",
  },
  pilares: [
    {
      icon: Activity,
      title: "Desenvolvimento Motor",
      description: "Atividades que estimulam movimento, coordenação, equilíbrio, autonomia corporal e consciência do próprio corpo.",
    },
    {
      icon: Puzzle,
      title: "Desenvolvimento Cognitivo",
      description: "Experiências que favorecem atenção, memória, raciocínio, curiosidade, resolução de problemas e construção do conhecimento.",
    },
    {
      icon: Users,
      title: "Desenvolvimento Social",
      description: "Vivências que ajudam a criança a conviver, compartilhar, respeitar, dialogar e construir relações saudáveis.",
    },
    {
      icon: Heart,
      title: "Desenvolvimento Afetivo",
      description: "Um olhar cuidadoso para emoções, vínculos, segurança emocional, autoestima e acolhimento.",
    },
    {
      icon: Wind,
      title: "Desenvolvimento Sensorial",
      description: "Propostas que exploram sons, texturas, cores, movimentos, sabores, cheiros e percepções do ambiente.",
    },
  ],
  significado: {
    title: "Aprendizagem com significado",
    text: "Na Escola Transição, as atividades são planejadas com intencionalidade pedagógica. Cada proposta busca gerar descobertas, conexões e desenvolvimento.",
  },
  diaADia: {
    title: "Como trabalhamos no dia a dia",
    items: [
      { icon: Ear, title: "Observação da criança" },
      { icon: NotebookPen, title: "Planejamento pedagógico" },
      { icon: ClipboardList, title: "Atividades práticas" },
      { icon: MousePointerClick, title: "Brincadeiras intencionais" },
      { icon: Wind, title: "Experiências sensoriais" },
      { icon: PersonStanding, title: "Movimento e expressão corporal" },
      { icon: Users, title: "Socialização" },
      { icon: MessageSquare, title: "Comunicação com as famílias" },
    ],
  },
  finalPhrase: "Aprender também é sentir, brincar, conviver e descobrir.",
};
