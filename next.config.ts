import type { NextConfig } from "next";

// Next.js/React dev mode requires eval() for hot-reload and debugging
// features (never used in production builds), so 'unsafe-eval' is only
// added to script-src outside of production.
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  frame-src https://www.google.com;
  connect-src 'self'${isDev ? " ws:" : ""};
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
`
  .replace(/\n/g, " ")
  .trim();

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
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
