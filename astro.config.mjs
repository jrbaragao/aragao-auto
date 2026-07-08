import { defineConfig } from 'astro/config';

// Config base do site estatico.
// Publicacao de teste no GitHub Pages (repo jrbaragao/aragao-auto):
// o site vive em https://jrbaragao.github.io/aragao-auto/ — por isso o
// `base`. Quando ganhar dominio proprio, troque `site` e remova `base`
// (os links internos usam withBase() de src/lib/url.ts e se ajustam sozinhos).
// Quando o CMS headless (Payload ou Sanity) for conectado, o rebuild
// sera disparado por webhook -> GitHub Actions, mantendo o output
// 100% estatico (sem servidor Node em producao).
export default defineConfig({
  site: 'https://jrbaragao.github.io',
  base: '/aragao-auto',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
