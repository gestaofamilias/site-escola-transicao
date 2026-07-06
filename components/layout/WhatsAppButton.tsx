"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Escola Transição pelo WhatsApp"
      className="focus-ring group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.9} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-brand-deep-dark px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
        Fale com a escola
      </span>
    </a>
  );
}
