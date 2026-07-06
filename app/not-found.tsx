import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { NeuralBackground } from "@/components/ui/NeuralBackground";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-blob-gradient">
      <NeuralBackground className="absolute inset-x-0 top-0 h-full w-full opacity-40" />
      <div className="container-page relative flex flex-col items-center gap-6 py-24 text-center">
        <FadeIn>
          <span className="font-heading text-7xl font-bold text-brand-blue/30 sm:text-8xl">404</span>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="text-balance font-heading text-3xl font-bold text-brand-deep-dark sm:text-4xl">
            Página não encontrada
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="max-w-md text-balance leading-relaxed text-ink-soft">
            A página que você procura não está disponível, mas você pode continuar conhecendo a Escola Transição.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <Button href="/" icon={<Home className="h-4 w-4" />}>
            Voltar para o início
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
