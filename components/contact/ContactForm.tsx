"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Envio ainda não integrado a um backend real (ex: Resend, Formspree).
    // Ao integrar, é obrigatório: validação server-side dos campos, honeypot
    // ou captcha antibot, rate limiting por IP, e nunca expor chave de API
    // no client — a chamada deve partir de uma Route Handler/Server Action.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-mist bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        <h3 className="font-heading text-xl font-semibold text-brand-deep-dark">Mensagem enviada</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Obrigado pelo contato. Em breve a equipe da Escola Transição responderá com carinho.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-mist bg-white p-6 shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark">
          Nome
          <input
            required
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark">
          Telefone
          <input
            required
            type="tel"
            name="telefone"
            placeholder="(00) 00000-0000"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark sm:col-span-2">
          E-mail
          <input
            required
            type="email"
            name="email"
            placeholder="seuemail@exemplo.com"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark sm:col-span-2">
          Assunto
          <input
            type="text"
            name="assunto"
            placeholder="Sobre o que gostaria de falar?"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark sm:col-span-2">
          Mensagem
          <textarea
            required
            name="mensagem"
            rows={5}
            placeholder="Conte um pouco sobre o que gostaria de saber sobre a escola"
            className="focus-ring resize-none rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
      </div>

      <button
        type="submit"
        className="focus-ring group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep sm:w-auto"
      >
        Enviar mensagem
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
