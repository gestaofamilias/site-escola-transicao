import Image from "next/image";
import Link from "next/link";

// Nota: só recebemos a versão azul do logo (fundo transparente). No footer
// (fundo azul escuro) aplicamos um filtro para deixá-la branca — se houver
// uma versão oficial em branco/reversa, substitua o filtro pela imagem real.
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={`focus-ring group inline-flex items-center rounded-2xl ${className}`}
      aria-label="Escola Transição — página inicial"
    >
      <Image
        src="/images/logo.png"
        alt="Escola Transição — Cada criança, um jeito único de aprender"
        width={612}
        height={408}
        priority
        className={`h-14 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-16 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
