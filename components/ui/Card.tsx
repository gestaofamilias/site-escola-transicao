import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-brand-mist/70 bg-white p-6 shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,63,209,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}
