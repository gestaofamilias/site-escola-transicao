import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MapEmbed() {
  const hasEmbed = siteConfig.googleMapsEmbedSrc && !siteConfig.googleMapsEmbedSrc.startsWith("[INSERIR");

  if (hasEmbed) {
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

  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-brand-sky via-brand-mist to-white p-8 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
        <MapPin className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <p className="max-w-xs font-mono text-xs leading-relaxed text-brand-deep/70">
        [INSERIR_IFRAME_GOOGLE_MAPS]
      </p>
    </div>
  );
}
