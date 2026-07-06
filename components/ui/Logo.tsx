import Link from "next/link";

// Placeholder de marca — substituir por [INSERIR_LOGO_ESCOLA] (arquivo de logo real) quando disponível.
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={`focus-ring group flex items-center gap-2.5 rounded-full ${className}`}
      aria-label="Escola Transição — página inicial"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-transform duration-300 group-hover:-rotate-6 ${
          light ? "bg-white text-brand-deep" : "bg-brand-blue text-white"
        }`}
      >
        ET
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-base font-bold ${light ? "text-white" : "text-brand-deep-dark"}`}>
          Escola Transição
        </span>
        <span className={`text-[11px] font-medium ${light ? "text-white/75" : "text-ink-soft"}`}>
          Educação Infantil
        </span>
      </span>
    </Link>
  );
}
