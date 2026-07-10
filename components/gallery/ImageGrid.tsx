"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";

export type GridImage = {
  label: string;
  caption?: string;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ImageGrid({ images, className = "" }: { images: GridImage[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setActiveIndex(null);
    lastTriggerRef.current?.focus();
  }, []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";

    // Foco inicial dentro do diálogo, para leitores de tela anunciarem o
    // conteúdo e o Tab não vazar para o fundo (que fica inerte por trás).
    dialogRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <StaggerGroup className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`} aria-hidden={active ? true : undefined}>
        {images.map((image, index) => (
          <StaggerItem key={`${image.label}-${index}`}>
            <button
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              className="focus-ring group block w-full overflow-hidden rounded-3xl text-left"
              aria-label={`Ampliar imagem: ${image.caption ?? "foto da Escola Transição"}`}
            >
              <div className="relative overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-[1.03]">
                <PlaceholderImage label={image.label} aspect="aspect-[4/3]" />
                <div className="absolute inset-0 bg-brand-deep-dark/0 transition-colors duration-300 group-hover:bg-brand-deep-dark/10" />
              </div>
              {image.caption && (
                <p className="mt-2 text-sm font-medium text-ink-soft">{image.caption}</p>
              )}
            </button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-deep-dark/85 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl focus:outline-none"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              tabIndex={-1}
            >
              <PlaceholderImage label={active.label} aspect="aspect-[4/3]" tone="deep" />
              <p id={titleId} className="mt-3 text-center text-sm font-medium text-white/90">
                {active.caption ?? "Foto da Escola Transição"}
              </p>

              <button
                type="button"
                onClick={close}
                aria-label="Fechar imagem ampliada"
                className="focus-ring absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-deep-dark shadow-md"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Imagem anterior"
                className="focus-ring absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-deep-dark shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima imagem"
                className="focus-ring absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-deep-dark shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
