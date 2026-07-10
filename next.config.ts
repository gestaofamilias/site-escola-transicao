import type { NextConfig } from "next";

// Next.js/React dev mode requires eval() for hot-reload and debugging
// features (never used in production builds), so 'unsafe-eval' is only
// added to script-src outside of production.
const isDev = process.env.NODE_ENV !== "production";

// next/font self-hospeda Quicksand/Nunito no build (sem requisição a
// fonts.googleapis.com/fonts.gstatic.com em runtime), então essas origens
// não entram na CSP. style-src ainda precisa de 'unsafe-inline' porque
// alguns componentes usam a prop `style` (ex: gradientes de PlaceholderImage)
// — removê-lo exigiria migrar esses estilos para CSS/nonce, fora do escopo
// desta revisão de segurança.
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data:;
  frame-src https://www.google.com;
  object-src 'none';
  connect-src 'self'${isDev ? " ws:" : ""};
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`
  .replace(/\n/g, " ")
  .trim();

const securityHeaders = [
  // O site nunca precisa ser incorporado em outro site via <iframe>.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // HSTS só em produção com HTTPS. Sem `includeSubDomains`/`preload` até
  // confirmar que TODO subdomínio real da escola também serve HTTPS —
  // adicionar isso cedo demais pode quebrar um subdomínio esquecido.
  ...(isDev ? [] : [{ key: "Strict-Transport-Security", value: "max-age=31536000" }]),
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
