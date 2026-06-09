# PROGRESS.md — Status do Projeto

> Atualize este arquivo ao final de cada sessão de trabalho ou ao concluir tarefas significativas.

---

## Estado Atual

**Fase:** Implementação em andamento — visual refinado, algumas pendências antes do deploy  
**Data da última atualização:** 2026-06-09  
**Agente responsável pela última sessão:** Claude Sonnet 4.6

### Resumo
Site Next.js 16 com design system roxo pastel + sálvia, Cormorant Garamond + DM Sans. Hero redesenhado como full-bleed image (desk.png/mob.png). Seção "Sobre" com foto real da Jacqueline. Seção 2 com boneco ilustrativo. Responsividade mobile da Hero corrigida. Rodando em `http://localhost:3000`.

---

## Para Publicar

### Bloqueadores (sem isso não publica)
- [ ] **Integrar posts reais do Instagram** no bloco §9 (Reflexões) — atualmente seção está com placeholder; precisa do Feed ID do Behold.so
- [ ] **Formulário de contato funcional** — atualmente visual only; definir destino (email, serviço externo)
- [ ] **Deploy na Vercel** — `npx vercel deploy` após resolver os itens acima
- [ ] **Domínio customizado** — apontar DNS se houver domínio

### Não bloqueadores (podem ir ao ar depois)
- [ ] Foto pessoal/acolhedora na seção "Sobre" mais próxima/íntima (atual: foto profissional do estúdio)
- [ ] Endereço exato do consultório presencial (campo opcional no mapa/rodapé)

---

## Concluído

- [x] Estrutura de docs e CLAUDE.md configurados
- [x] Design system definido — paleta roxo pastel + sálvia, tipografia Cormorant + DM Sans
- [x] Todos os 13 blocos de copy implementados
- [x] **Hero redesenhado** — full-bleed `desk.png` no desktop, `mob.png` mobile com card sobreposto
- [x] **Responsividade mobile do Hero** — imagem 52vh, card de texto sobe sobre a foto, scroll indicator escondido no mobile
- [x] **Seção "Sobre mim"** — foto da Jacqueline (`imagem-jacqueline.png`) posicionada com blob orgânico e parallax
- [x] **Seção 2 (Identification)** — placeholder substituído pelo boneco ilustrativo roxo (`imagem-boneco-segunda-sec.png`)
- [x] BorderBeam corrigido (cross-browser, sem blob de gradiente)
- [x] HowItWorks — cards de altura fixa, pills sempre alinhados ao fundo
- [x] Navbar flutuante com fade ao scroll
- [x] Ícones das seções trocados para temática psicologia/saúde mental
- [x] Biografia real da Jacqueline na seção Sobre (IFEN, orientadora educacional, congressos)
- [x] Rotating card na Identification (3 tensões com fade + indicadores)

---

## Specs Ativas

*Nenhuma spec criada ainda.*

---

## Bloqueios

- Instagram feed (Behold.so) — aguardando Feed ID da cliente

---

## Decisões Recentes

| Data | Decisão | Referência |
|---|---|---|
| 2026-06-09 | Hero virou full-bleed image (sem overlay); imagem separada desk/mob | Hero.tsx |
| 2026-06-09 | Imagem da Jacqueline movida para seção "Sobre"; boneco na seção 2 | About.tsx, Identification.tsx |
| 2026-06-07 | BorderBeam refeito com conic-gradient + mask-composite: intersect | BorderBeam.tsx, globals.css |
| 2026-06-06 | Paleta: roxo pastel + sálvia confirmada | ADR-0001 |
| 2026-06-06 | Stack: Next.js 16 | ADR-0002 |

---

## Log de Sessões

### 2026-06-09 — Sessão atual
- Hero redesenhado: full-bleed background no desktop, imagem top no mobile
- Responsividade mobile da Hero corrigida (altura 52vh, card sobreposto, scroll indicator oculto)
- About: substituído placeholder pelo `imagem-jacqueline.png` com blob orgânico
- Identification: boneco roxo no lugar do placeholder, centralização mobile corrigida
- HowItWorks: altura fixa, pills com space-between

### 2026-06-07 — Sessão 3
- BorderBeam corrigido (cross-browser)
- HowItWorks implementado como feature-carousel com SVG inline
- Rotating card na Identification
- Biografia real da Jacqueline

### 2026-06-06 — Sessões 1–2
- Projeto inicializado, estrutura de docs, design system, copy completa implementada
