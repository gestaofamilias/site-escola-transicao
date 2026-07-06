"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav, buildWhatsAppLink } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-mist/60 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-3.5">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active ? "bg-brand-sky text-brand-deep-dark" : "text-ink-soft hover:bg-brand-sky/70 hover:text-brand-deep-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-brand-blue/30 px-4 py-2 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:bg-brand-sky"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
            Fale com a escola
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-brand-deep-dark lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-mist/60 bg-white lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`focus-ring block rounded-2xl px-4 py-3 text-sm font-medium ${
                      pathname === item.href
                        ? "bg-brand-sky text-brand-deep-dark"
                        : "text-ink-soft hover:bg-brand-sky/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
                Fale com a escola
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
