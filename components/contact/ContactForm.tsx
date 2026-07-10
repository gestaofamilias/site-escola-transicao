"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

// O site ainda não tem um serviço de e-mail configurado (ex: Resend,
// Formspree). Enquanto isso não existir, o formulário NÃO deve fingir que
// enviou algo: ele monta a mensagem localmente e abre o WhatsApp real da
// escola com o texto pronto, para o próprio usuário enviar. Nada é
// registrado, logado ou transmitido a nenhum servidor nosso.
//
// Quando um backend de e-mail for integrado, isso precisa rodar em uma
// Route Handler/Server Action com: validação server-side de todos os
// campos, honeypot/captcha antibot, rate limiting por IP, tratamento de
// erro e nunca expor chave de API no client.

const MAX_LENGTHS = { nome: 80, telefone: 20, email: 100, assunto: 100, mensagem: 600 } as const;

function buildMessage(fields: { nome: string; telefone: string; email: string; assunto: string; mensagem: string }) {
  const lines = [
    `Olá! Meu nome é ${fields.nome}.`,
    `Telefone: ${fields.telefone}`,
  ];
  if (fields.email) lines.push(`E-mail: ${fields.email}`);
  if (fields.assunto) lines.push(`Assunto: ${fields.assunto}`);
  lines.push("", fields.mensagem, "", "(Enviado pelo formulário de contato do site)");
  return lines.join("\n");
}

export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [whatsappHref, setWhatsappHref] = useState("#");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    // Honeypot: campo invisível para pessoas, mas que bots costumam
    // preencher automaticamente. Se vier preenchido, ignoramos o envio.
    if (honeypotRef.current?.value) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") ?? "").trim().slice(0, MAX_LENGTHS.nome);
    const telefone = String(data.get("telefone") ?? "").trim().slice(0, MAX_LENGTHS.telefone);
    const email = String(data.get("email") ?? "").trim().slice(0, MAX_LENGTHS.email);
    const assunto = String(data.get("assunto") ?? "").trim().slice(0, MAX_LENGTHS.assunto);
    const mensagem = String(data.get("mensagem") ?? "").trim().slice(0, MAX_LENGTHS.mensagem);

    if (!nome || !telefone || !mensagem) {
      setError("Preencha nome, telefone e mensagem para continuar.");
      return;
    }

    const href = buildWhatsAppLink(buildMessage({ nome, telefone, email, assunto, mensagem }));
    setWhatsappHref(href);
    setReady(true);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (ready) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-mist bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
          <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h3 className="font-heading text-xl font-semibold text-brand-deep-dark">Sua mensagem está pronta</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Abrimos o WhatsApp em outra aba com sua mensagem preenchida. É só conferir e enviar por lá para falar
          com a equipe da Escola Transição.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" />
          Abrir WhatsApp novamente
        </a>
        <button
          type="button"
          onClick={() => setReady(false)}
          className="focus-ring mt-1 text-xs font-medium text-ink-soft underline underline-offset-2 hover:text-brand-blue"
        >
          Preencher outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-brand-mist bg-white p-6 shadow-[0_8px_30px_-18px_rgba(10,63,209,0.35)] sm:p-8">
      {/* Honeypot antibot: mantido fora da tela e do fluxo de tab, nunca visível a pessoas reais. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
        <label>
          Não preencha este campo
          <input ref={honeypotRef} type="text" name="empresa" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark">
          Nome
          <input
            required
            type="text"
            name="nome"
            autoComplete="name"
            maxLength={MAX_LENGTHS.nome}
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
            autoComplete="tel"
            maxLength={MAX_LENGTHS.telefone}
            placeholder="(00) 00000-0000"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark sm:col-span-2">
          E-mail
          <input
            type="email"
            name="email"
            autoComplete="email"
            maxLength={MAX_LENGTHS.email}
            placeholder="seuemail@exemplo.com"
            className="focus-ring rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-deep-dark sm:col-span-2">
          Assunto
          <input
            type="text"
            name="assunto"
            autoComplete="off"
            maxLength={MAX_LENGTHS.assunto}
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
            maxLength={MAX_LENGTHS.mensagem}
            placeholder="Conte um pouco sobre o que gostaria de saber sobre a escola"
            className="focus-ring resize-none rounded-2xl border border-brand-mist bg-brand-sky/30 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60"
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="focus-ring group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep sm:w-auto"
      >
        Enviar pelo WhatsApp
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        Ao enviar, sua mensagem abre no WhatsApp da escola — nada é armazenado neste site. Veja nossa{" "}
        <Link href="/privacidade" className="focus-ring underline underline-offset-2 hover:text-brand-blue">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}
