import { defineConfig } from 'astro/config';

// Config base do site estatico.
// Quando o CMS headless (Payload ou Sanity) for conectado, o rebuild
// sera disparado por webhook -> GitHub Actions / Vercel Deploy Hook,
// mantendo o output 100% estatico (sem servidor Node em producao).
export default defineConfig({
  site: 'https://www.seudominio.com.br',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
