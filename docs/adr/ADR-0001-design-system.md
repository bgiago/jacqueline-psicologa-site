# ADR-0001: Design System — Paleta, Tipografia e Estilo Visual

**Status:** Aceito — paleta roxo pastel + sálvia  
**Data:** 2026-06-06  
**Atualizado em:** 2026-06-06 (inconsistência resolvida pelo usuário)  
**Fonte:** `docs/ESTRUTURA-E-COPY_SITE_V1.md §4` + confirmação direta do usuário

---

## Contexto

O site precisa transmitir **calma, acolhimento, sofisticação e feminilidade madura** — e explicitamente NOT parecer coach, autoajuda, motivacional ou "consultório de currículo".

Duas referências visuais orientaram a decisão: *Sereniti* (wellness minimalista, muito espaço em branco, serifada elegante, tons neutros) e *Femine* (rosé queimado, bege, vinho suave).

---

## Opções Consideradas

### Opção A: Paleta roxo/lilás saturado
- **Prós:** Alinhado com o roxo do Instagram da psicóloga (`@psi.jacborges`)
- **Contras:** Padrão genérico "feminino wellness"; contraria estratégia (madura, não juvenil); viola protocolo Anti-IA que veta "gradiente roxo clichê" e "paleta monocromática"

### Opção B: Paleta terra/vinho (terrosa, quente e sóbria) ← ESCOLHIDA
- **Prós:** Diferencia do padrão de mercado; transmite sofisticação e maturidade; alinhada com refs. Sereniti + Femine; validada para contraste WCAG AA
- **Contras:** Não reflete o roxo do Instagram da psicóloga (decisão consciente — o site tem identidade própria)

---

## Decisão

Adotada a **Paleta C (roxo pastel + sálvia)** — confirmada diretamente pelo usuário. O `docs/preview-site.html` já reflete essa paleta corretamente.

### Tokens CSS (referência — `preview-site.html`)

```css
:root {
  --bg:           #F4F0FA; /* lilás muito claro (base) */
  --surface:      #EDE5F5; /* lavanda suave (seções alternadas) */
  --surface-soft: #FDFAFF; /* quase branco (cards) */
  --text:         #231A32; /* roxo profundo escuro (títulos e corpo) */
  --text-muted:   #4E4065; /* roxo médio (texto secundário) */
  --text-soft:    #9080AE; /* roxo claro (texto terciário) */
  --purple:       #9576C8; /* roxo pastel (cor dominante) */
  --purple-lt:    #C4AADF; /* roxo claro */
  --purple-pl:    #E8DEFC; /* roxo muito claro (backgrounds sutis) */
  --sage:         #7DAA8A; /* sálvia (acento) */
  --sage-lt:      #A8C8B2; /* sálvia claro */
  --sage-pl:      #DFF0E5; /* sálvia muito claro */
  --cta:          #9576C8; /* botão primário (roxo pastel) */
  --cta-hover:    #7358A8; /* botão hover */
  --cta-text:     #FDFAFF; /* texto do botão */
  --line:         rgba(149,118,200,.20); /* bordas */
  --dark:         #2A1F3D; /* fundo escuro (seção coragem, footer) */
}
```

**Regras de uso:**
- Roxo pastel (`--purple`) = cor dominante — CTAs, links, destaques, ícones
- Sálvia (`--sage`) = acento complementar — cards de atendimento, elementos secundários
- Nunca usar roxo saturado ou vibrante — sempre a versão pastel
- Botão primário = `--cta` (roxo pastel) + `--cta-text` (off-white)

### Tipografia

- **Títulos:** Cormorant Garamond (serifada editorial) — peso 400/500
- **Corpo:** DM Sans — peso 300/400, `line-height: 1.75`
- **Itálico** da serifada para palavra-chave de destaque (ex: "sozinha" no H1)
- **Vetadas:** Inter, Montserrat, Poppins (blacklist Anti-IA)

### Estilo

- Profundidade sutil, sombras suaves (`box-shadow` com `rgba(115,88,168,.10)`)
- Cantos arredondados: 14px em cards, 999px em botões (pill)
- Muito respiro — `clamp(4rem, 9vw, 7.5rem)` nas seções
- **Proibido:** gradientes vibrantes, glassmorphism, ilustração 3D/IA

---

## Resolução da Inconsistência Anterior

A inconsistência identificada anteriormente (terra/vinho vs. roxo) foi resolvida: o usuário confirmou **roxo pastel + sálvia** como paleta oficial. O `preview-site.html` estava correto. O documento de estratégia `ESTRUTURA-E-COPY_SITE_V1.md §4.1` descreve uma paleta terra que foi **descartada** em favor desta.

---

## Consequências

- Positivo: paleta alinhada com o preview existente — sem retrabalho de design
- Positivo: sálvia como acento cria variedade visual sem perder coesão
- Atenção: manter o roxo na versão **pastel/dessaturada** — roxo vibrante contradiz o tom acolhedor e maduro
