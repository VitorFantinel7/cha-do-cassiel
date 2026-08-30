# Chá do Cassiel

Site estático do chá de bebê. Sem build: abra `index.html` no navegador ou publique a pasta em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel).

- `index.html` — capa com previews
- `fraldas.html`, `presentes.html`, `sobre.html` — páginas internas
- `assets/app.js` — dados dos itens e links externos (edite aqui)
- `assets/style.css` — estilo
- `assets/img/` — ilustrações recortadas de `referencia-visual.png`
- `INSPIRACAO.md` — briefing visual
- `cha-do-cassiel.jsx` — protótipo React original (referência, não usado pelo site)

As reservas ficam em `localStorage` (por navegador). Para lista compartilhada é preciso um backend — trocar `loadReservations`/`saveReservations` em `assets/app.js`.
