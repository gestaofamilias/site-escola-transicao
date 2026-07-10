"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { isPlaceholder, siteConfig } from "@/lib/site-config";

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const hasEmbed = !isPlaceholder(siteConfig.googleMapsEmbedSrc);

  if (hasEmbed && loaded) {
    return (
      <iframe
        src={siteConfig.googleMapsEmbedSrc}
        title="Localização da Escola Transição"
        className="h-full min-h-[320px] w-full rounded-3xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    );
  }

  // Sem embed configurado ainda, ou embed disponível mas não carregado:
  // mostramos um cartão neutro (nunca o placeholder [INSERIR_...] cru) com
  // um link direto para o Google Maps. Isso também evita carregar o
  // iframe do Google — e o rastreamento que vem com ele — até o clique.
  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-brand-sky via-brand-mist to-white p-8 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
        <MapPin className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <p className="max-w-xs text-sm leading-relaxed text-brand-deep/80">
        {hasEmbed
          ? "Clique para carregar o mapa interativo."
          : "Veja nossa localização diretamente no Google Maps."}
      </p>
      {hasEmbed ? (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          <MapPin className="h-4 w-4" />
          Carregar mapa
        </button>
      ) : (
        <a
          href={siteConfig.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          Abrir no Google Maps
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
