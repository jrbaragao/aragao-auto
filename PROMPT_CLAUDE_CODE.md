# Prompt para o Claude Code

Copie a pasta `fotografo-carros/` para `D:\Dados\Sites\Cursor\fotografo-carros`
(seu diretorio usual de projetos). Abra o Claude Code dentro dessa pasta e
cole o bloco abaixo. Ajuste os pontos marcados com `[...]` antes de enviar.

---

Contexto: este e um prototipo Astro ja criado para um site de fotografia
automotiva profissional (clientes: concessionarias, colecionadores, marcas).
A pasta atual ja contem:

- `src/layouts/Layout.astro` — casco HTML, tema visual (cores, tipografia)
- `src/components/Header.astro`, `Footer.astro`, `Gallery.astro`
- `src/pages/index.astro`, `portfolio.astro`, `servicos.astro`
- `src/data/portfolio.json` — mock de imagens/servicos (placeholder, sera
  substituido por um CMS depois)
- `.github/workflows/deploy.yml` — workflow de build (deploy real ainda
  nao configurado)
- `README.md` — explica a arquitetura completa e o racional das escolhas

Decisoes de arquitetura ja tomadas (nao mudar sem checar comigo antes):
- Front-end estatico com Astro (SSG), zero JS por padrao — prioridade e
  velocidade/SEO num site com muitas fotos pesadas.
- Design 100% autoral, sem tema pronto — o visual precisa transmitir
  identidade propria do fotografo, nao "cara de template".
- Imagens devem ser servidas via CDN de imagem (Cloudinary, imgix ou
  Cloudflare Images) com resize/formato automatico — ainda usando URLs de
  exemplo do Cloudinary no mock.
- Admin de conteudo sera um CMS headless (Payload CMS ou Sanity) — ainda
  nao integrado. `portfolio.json` e o ponto exato que sera substituido por
  uma chamada ao CMS em build-time.

O que preciso que voce faca agora, nesta ordem:

1. Rodar `npm install` e `npm run build` para confirmar que o projeto builda
   sem erros no meu ambiente.
2. Inicializar o repositorio git nesta pasta (`git init`, branch `main`),
   fazer o commit inicial com todos os arquivos.
3. Criar o repositorio no GitHub (via `gh repo create`) chamado
   `[NOME-DO-REPO]`, visibilidade `[private ou public]`, e dar push do
   commit inicial. Se o `gh` nao estiver autenticado, me avise em vez de
   travar silenciosamente.
4. Confirmar comigo antes de conectar qualquer servico de deploy
   (Vercel/Netlify/Cloudflare Pages) ou de criar secrets no repo — so
   quero o repo e o codigo publicados por enquanto.
5. Depois disso, me dar um resumo curto do que foi feito e quais
   comandos usar para eu continuar localmente (`npm run dev`, etc).

Nao prossiga para a integracao do CMS, escolha de CDN de imagem ou
configuracao de deploy nesta etapa — isso sera um proximo passo separado,
depois que eu decidir entre Payload e Sanity.

---

## Depois que o repo estiver no ar (proxima etapa, nao fazer agora)

Quando eu pedir para continuar, os passos seguintes sao:

1. Escolher e integrar o CMS headless (Payload self-hosted ou Sanity
   hospedado) substituindo `src/data/portfolio.json` por fetch em
   build-time.
2. Configurar conta no CDN de imagem e apontar os uploads do CMS para la.
3. Conectar o repo a Vercel/Netlify/Cloudflare Pages para deploy automatico
   a cada push, e configurar o webhook de publicacao do CMS para disparar
   o `repository_dispatch` (`cms-publish`) ja previsto em
   `.github/workflows/deploy.yml`.
4. Adicionar `@astrojs/sitemap` e `robots.txt` antes de publicar.
