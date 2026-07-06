import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { buildWhatsAppLink, footerNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-mist/60 bg-brand-deep-dark text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Escola Transição — educação infantil com acolhimento, neurociência e
            desenvolvimento integral.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Links rápidos
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring rounded transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="focus-ring rounded hover:text-white">
                WhatsApp da escola
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <span className="break-all">{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <span>{siteConfig.instagram}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Endereço e horário
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-2 py-6 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} Escola Transição. Todos os direitos reservados.</p>
          <p>Educação infantil com acolhimento, neurociência e desenvolvimento integral.</p>
        </div>
      </div>
    </footer>
  );
}
