# Arquitetura do Sistema

> Atualize este documento ao tomar decisões arquiteturais. Veja ADRs para o raciocínio.

---

## Visão Geral

**Tipo de projeto:** Landing page / site institucional de psicóloga (one-page)  
**Status:** Design system definido; stack de implementação a confirmar

### Descrição
Site de Jaqueline Borges, psicóloga clínica. One-page com 13 seções. Objetivo de negócio: conversão via WhatsApp ou formulário. Sem backend próprio, sem autenticação.

---

## Stack Tecnológica

| Camada | Tecnologia | Status |
|---|---|---|
| Framework | **Next.js** (App Router) | Confirmado — ver [ADR-0002](../adr/ADR-0002-stack-nextjs.md) |
| Fontes | Cormorant Garamond + DM Sans via `next/font` | Definido |
| Ícones | SVG inline (Lucide-style) | Definido |
| CSS | A definir (Modules vs. Tailwind) | Pendente ADR-0003 |
| Hospedagem | **Vercel** (recomendado para Next.js) | A confirmar |
| Formulários | Redireciona ao WhatsApp — sem backend | Confirmado |
| Analytics | GA4 + Meta Pixel (opcional) | Planejado |
| Foto hero | `public/imagem-jacqueline.png` | Arquivo confirmado |

---

## Estrutura da Página (one-page)

```
/ (index)
├── Navbar (fixa, scroll-aware)
├── §2  Hero
├── §3  Identificação
├── §4  Espelho (cards)
├── §5  Sobre
├── §6  Como funciona (3 steps)
├── §7  Atendimento (3 cards)
├── §8  Coragem (seção destaque escura)
├── §9  Reflexões / Instagram
├── §10 FAQ (accordion)
├── §11 Captura de lead
├── §12 Contato (formulário + CTA WhatsApp)
└── Footer
```

---

## Integrações Externas

| Integração | Propósito | Status |
|---|---|---|
| Google Fonts | Cormorant Garamond + DM Sans | Implementado no preview |
| WhatsApp (`wa.me`) | CTA principal de conversão | Implementado no preview |
| Instagram (`@psi.jacborges`) | Bloco §9 de reflexões | Link implementado; embed a definir |
| Formulário → destino | Captura de leads | **[a definir]** |
| GA4 / Meta Pixel | Rastreamento de eventos | Planejado |

---

## Decisões Arquiteturais

Veja a pasta `../adr/` para o histórico completo.
