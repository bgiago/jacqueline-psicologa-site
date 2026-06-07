# ADR-0002: Stack de Implementação — Next.js

**Status:** Aceito  
**Data:** 2026-06-06  
**Decidido por:** Usuário (confirmação direta)

---

## Contexto

O site é uma landing page de psicóloga com foco em conversão via WhatsApp. O `docs/preview-site.html` foi desenvolvido em HTML/CSS/JS vanilla, mas a implementação definitiva requer uma stack que ofereça melhor DX, SEO otimizado e escalabilidade para possíveis fases futuras (blog, área de conteúdo).

---

## Opções Consideradas

### Opção 1: HTML/CSS/JS Vanilla (como o preview)
- **Prós:** zero dependências, deploy simples, performance máxima out-of-the-box
- **Contras:** sem SSG/SSR para SEO, sem roteamento, difícil de escalar

### Opção 2: Astro
- **Prós:** ideal para sites estáticos com conteúdo, excelente performance, suporte a componentes React
- **Contras:** menos familiar, ecossistema menor

### Opção 3: Next.js ← ESCOLHIDA
- **Prós:** SSG/SSR para SEO; App Router para estrutura limpa; ecossistema maduro; Vercel (deploy trivial); suporte a futuras funcionalidades dinâmicas
- **Contras:** ligeiramente mais pesado que HTML puro; requer Node.js

---

## Decisão

**Next.js** com App Router. Deploy preferencial na **Vercel** (integração nativa, SSL automático, preview deploys).

### Estrutura de projeto esperada

```
jacquelinepsicologa-site/
├── app/
│   ├── layout.tsx        # metadata, fonts, globals
│   ├── page.tsx          # landing page (todos os 13 blocos)
│   └── globals.css       # CSS variables (design tokens)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── sections/         # um componente por bloco
│   └── ui/               # botões, cards, etc.
├── public/
│   └── imagem-jacqueline.png   # foto confirmada para o hero
├── docs/                 # documentação (não vai para produção)
└── .claude/              # skills e configurações
```

### Dependências mínimas esperadas
- `next` + `react` + `react-dom`
- Fontes via `next/font` (Cormorant Garamond + DM Sans do Google Fonts)
- CSS Modules ou Tailwind CSS (a definir em ADR-0003)

---

## Consequências

- Positivo: SEO server-side rendering para ranqueamento no Google
- Positivo: Vercel oferece preview deploys por branch — facilita revisão pelo cliente
- Positivo: estrutura de componentes facilita manutenção futura
- Requer ação: inicializar o projeto Next.js (`npx create-next-app@latest`)
- Requer decisão: CSS Modules vs. Tailwind (criar ADR-0003)
