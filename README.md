# Site institucional — Escola Transição

Next.js 16 (App Router) + Tailwind CSS 4. Site estático, sem backend.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Obrigatória em produção | Descrição |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sim | URL pública do site (ex: `https://escolatransicao.com.br`), usada em canonical, sitemap, robots, Open Graph e JSON-LD. Em produção, o build **falha** se essa variável não estiver definida ou ainda apontar para um domínio fictício/localhost — isso é intencional, para impedir publicar com dados de SEO incorretos. |
| `ALLOW_PLACEHOLDER_SITE_URL` | Não (só CI/local) | Escape hatch para gerar um build de verificação sem domínio real definido. Nunca usar em um deploy real — o build avisa no log quando ativado. |

## Segurança

- Cabeçalhos de segurança (CSP, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, HSTS em produção) são definidos em `next.config.ts`.
- O formulário de contato (`components/contact/ContactForm.tsx`) **não envia e-mail** — não há serviço de e-mail configurado. Ele monta a mensagem localmente e abre o WhatsApp da escola com o texto pronto. Tem honeypot antibot. Ao integrar um backend de e-mail (Resend, Formspree, etc.), isso deve rodar em uma Route Handler/Server Action, com validação server-side, honeypot/captcha, rate limiting por IP, e nunca expor chave de API no client.
- O mapa (`components/contact/MapEmbed.tsx`) só carrega o iframe do Google Maps sob clique do usuário, para reduzir rastreamento/carregamento de terceiros por padrão.

### `npm audit` — vulnerabilidade conhecida (aceita, não corrigida)

`npm audit` reporta 2 vulnerabilidades moderadas de `postcss` (GHSA-qx2v-qp2m-jg93, XSS via `</style>` não escapado). Essa cópia do `postcss` está **vendorizada dentro do próprio pacote `next`** (`node_modules/next/node_modules/postcss@8.4.31`), não é uma dependência direta do projeto — nossa dependência direta (`@tailwindcss/postcss`) já usa uma versão corrigida (`8.5.16`).

A única correção que `npm audit fix --force` oferece é fazer downgrade do `next` para uma versão canary de 2020 (`9.3.3`), o que quebraria o projeto inteiro. Como não há dependência direta vulnerável e a única "correção" é uma regressão inaceitável, a vulnerabilidade foi **aceita conscientemente** e não corrigida. Reavaliar quando o Next.js atualizar sua cópia interna do PostCSS em uma versão futura.

## Dados institucionais pendentes

Vários campos em `lib/site-config.ts`, `data/privacidade.ts` e `data/galeria.ts` ainda são placeholders `[INSERIR_...]` — ver a seção "Dados pendentes" entregue junto com a última revisão do site para a lista completa. Nenhum dado real foi inventado: nomes, horários, faixa etária, número de alunos, depoimentos ou certificações só devem ser adicionados quando confirmados pela escola.
