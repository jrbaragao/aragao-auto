// Prefixa caminhos internos com o base path do deploy (ex.: /aragao-auto
// no GitHub Pages). `path` deve comecar com '/'.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
