import type { ReactNode } from "react";

type AutoScrollRowProps<T> = {
  items: T[];
  itemKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
};

// Faixa horizontal com rolagem automática e infinita (puro CSS). O conteúdo
// é duplicado uma vez e a animação translada -50%, criando um loop contínuo
// para a esquerda. Pausa no hover e respeita prefers-reduced-motion.
export function AutoScrollRow<T>({ items, itemKey, renderItem, className = "" }: AutoScrollRowProps<T>) {
  return (
    <div
      className={`group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ${className}`}
    >
      <div className="flex w-max motion-safe:animate-scroll-left motion-safe:group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy === 1 || undefined}>
            {items.map((item, index) => (
              <div key={itemKey(item, index)}>{renderItem(item, index)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
