# Fotografo de Carros — Prototipo de Arquitetura

Prototipo funcional (Astro) demonstrando a arquitetura recomendada para um site
de fotografia automotiva com area de administrador para gerenciar
portfolio/imagens da home.

## Estrutura

```
fotografo-carros/
├── src/
│   ├── layouts/Layout.astro      # casco HTML, CSS global, tema (cores, fontes)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Gallery.astro         # grid de imagens (lazy-load, aspect-ratio fixo)
│   ├── data/portfolio.json       # MOCK — em producao vem do CMS headless
│   └── pages/
│       ├── index.astro           # home
│       ├── portfolio.astro
│       └── servicos.astro
├── astro.config.mjs
├── package.json
└── .github/workflows/deploy.yml  # build automatico a cada push/publicacao
```

## Por que essa arquitetura

**Front-end estatico (Astro).** Gera HTML puro, zero JS por padrao. E o que
garante velocidade (Core Web Vitals) num site dominado por fotos pesadas — o
tipo de metrica que o Google usa para ranquear em SEO. O design e 100%
customizado (nao e tema pronto), entao a identidade visual do fotografo fica
livre.

**Imagens via CDN de imagem** (Cloudinary/imgix/Cloudflare Images — no mock
uso URLs de exemplo do Cloudinary). Cada `<img>` recebe a versao ja
redimensionada, no formato certo (AVIF/WebP) e com lazy loading. Isso importa
mais para a velocidade do que a escolha do framework.

**Admin = CMS headless**, ainda nao incluido neste prototipo (proximo passo).
Recomendo Payload CMS (open source, self-hosted, admin pronto e
customizavel) ou Sanity (hospedado, biblioteca de midia excelente). O
profissional loga no admin, sobe/reordena imagens; isso dispara um webhook
que aciona o workflow do GitHub Actions (`repository_dispatch`) e refaz o
build. O visitante nunca ve o CMS — so o site estatico e rapido.

**`src/data/portfolio.json`** e o unico ponto que muda quando o CMS entrar:
em vez de importar o JSON, as paginas passam a buscar os dados do CMS em
build-time (`Astro.glob`/`fetch` dentro do frontmatter).

## Fluxo com GitHub

1. `git init && git add . && git commit -m "prototipo inicial"`
2. Criar repositorio no GitHub e `git push`.
3. Conectar o repo a Vercel, Netlify ou Cloudflare Pages (deploy automatico a
   cada push na `main`) — ou usar o workflow em
   `.github/workflows/deploy.yml` como base e trocar o passo final pela
   action oficial da plataforma escolhida.
4. Quando o CMS for adicionado, configurar o webhook de publicacao para
   disparar o evento `repository_dispatch` (tipo `cms-publish`) definido no
   workflow — assim uma edicao no admin tambem reconstroi o site, sem precisar
   de commit manual.

## Rodando local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera /dist estatico
```

## Proximos passos sugeridos

1. Trocar `src/data/portfolio.json` por integracao real com Payload/Sanity.
2. Configurar conta no CDN de imagem e apontar os campos de upload do CMS
   para la.
3. Definir papeis no CMS (ex.: cada fotografo com seu login) se houver mais
   de um profissional usando o admin.
4. Adicionar `sitemap.xml` e `robots.txt` (plugin `@astrojs/sitemap`) antes
   de publicar, para reforcar o SEO.
