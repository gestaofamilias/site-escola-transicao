"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollSnapRowProps = {
  children: ReactNode;
  className?: string;
  label: string;
};

// Mosaico com rolagem horizontal controlada pela própria pessoa (arraste,
// setas do teclado quando o item está focado, ou os botões de seta) — sem
// nenhum movimento automático. Cada cartão "encaixa" na tela com scroll-snap.
//
// Recebe `children` já renderizados (não uma função renderItem) porque este
// é um Client Component: funções passadas de um Server Component pai não
// são serializáveis, mas elementos JSX prontos (children) são.
export function ScrollSnapRow({ children, className = "", label }: ScrollSnapRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-scroll-item]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Ver anterior"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-brand-mist bg-white text-brand-deep-dark shadow-sm transition-colors hover:bg-brand-sky"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Ver próximo"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-brand-mist bg-white text-brand-deep-dark shadow-sm transition-colors hover:bg-brand-sky"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
