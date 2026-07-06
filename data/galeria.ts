export type GalleryCategory = "Estrutura" | "Atividades" | "Projetos" | "Equipe" | "Momentos especiais";

export type GalleryImage = {
  id: number;
  label: string;
  category: GalleryCategory;
  caption: string;
};

export const galeriaContent = {
  hero: {
    title: "Galeria",
    subtitle: "Momentos que contam a nossa história.",
  },
  intro:
    "Cada imagem revela um pouco do que vivemos todos os dias na Escola Transição: descobertas, vínculos, brincadeiras, cuidado, aprendizagem e alegria.",
  filters: ["Todos", "Estrutura", "Atividades", "Projetos", "Equipe", "Momentos especiais"] as const,
  images: [
    { id: 1, label: "[INSERIR_FOTO_GALERIA_1]", category: "Estrutura", caption: "Fachada da escola" },
    { id: 2, label: "[INSERIR_FOTO_GALERIA_2]", category: "Estrutura", caption: "Sala acolhedora" },
    { id: 3, label: "[INSERIR_FOTO_GALERIA_3]", category: "Atividades", caption: "Atividade motora" },
    { id: 4, label: "[INSERIR_FOTO_GALERIA_4]", category: "Atividades", caption: "Momento de leitura" },
    { id: 5, label: "[INSERIR_FOTO_GALERIA_5]", category: "Projetos", caption: "Projeto de musicalização" },
    { id: 6, label: "[INSERIR_FOTO_GALERIA_6]", category: "Projetos", caption: "Arte e criatividade" },
    { id: 7, label: "[INSERIR_FOTO_GALERIA_7]", category: "Equipe", caption: "Equipe pedagógica" },
    { id: 8, label: "[INSERIR_FOTO_GALERIA_8]", category: "Equipe", caption: "Professoras em ação" },
    { id: 9, label: "[INSERIR_FOTO_GALERIA_9]", category: "Momentos especiais", caption: "Data comemorativa" },
    { id: 10, label: "[INSERIR_FOTO_GALERIA_10]", category: "Momentos especiais", caption: "Encontro com as famílias" },
    { id: 11, label: "[INSERIR_FOTO_GALERIA_11]", category: "Estrutura", caption: "Área externa" },
    { id: 12, label: "[INSERIR_FOTO_GALERIA_12]", category: "Atividades", caption: "Experiência sensorial" },
  ] satisfies GalleryImage[],
};
