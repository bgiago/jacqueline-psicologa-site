# Restrições do Projeto

---

## Restrições Éticas (CFP — Resolução nº 11/2018)

Estas restrições são **não negociáveis** e afetam toda copy e conteúdo do site:

| Permitido | Proibido |
|---|---|
| Nome, CRP, formação, abordagem, áreas de atuação | Depoimentos de pacientes |
| Endereço, contatos, conteúdo educativo próprio | Promessa/garantia de resultado ou "cura" |
| Informar valor numa conversa | Sensacionalismo; urgência artificial |
| — | Preço como principal chamariz / "promoção" |
| — | Técnicas "milagrosas" ou não reconhecidas |

**Vocabulário vetado:** cura · transformação · jornada · destravar · "sua melhor versão" · alta performance · empoderamento (clichê) · "saia da zona de conforto" · qualquer promessa de resultado.

---

## Restrições de Copy / Tom de Voz (Anti-IA)

- Frases curtas e inteiras — nunca fragmentar ("Você. Não está. Sozinha.")
- Não abrir com "Imagine...", "E se eu te dissesse...", "No mundo de hoje..."
- Sem fórmula "Não é X. É Y." e sem pergunta retórica forçada
- Sem adjetivo vazio (incrível, transformador, poderoso)
- Máximo 1 exclamação a cada ~6 frases

---

## Restrições de Design

- Paleta: terra/vinho (definida em `ESTRUTURA-E-COPY_SITE_V1.md §4.1`) — **sem roxo vibrante**, sem gradiente saturado
- Fontes: Cormorant (títulos) + Raleway ou DM Sans (corpo) — **sem Inter, Montserrat, Poppins**
- Fotos: **exclusivamente fotos reais** da Jaqueline — zero banco de imagens
- Ícones: SVG linha fina (Lucide/Heroicons) — **zero emoji como ícone**
- Sem glassmorphism, ilustração 3D/IA, ícone de foguete/lâmpada

---

## Restrições de Acessibilidade (WCAG 2.1 AA)

- Contraste ≥ 4.5:1 no texto (paleta validada no documento de estratégia)
- `alt` descritivo em imagens significativas; `alt=""` nas decorativas
- Todo input com `<label>` associado (não só placeholder)
- Foco visível em todos os elementos navegáveis por teclado
- `prefers-reduced-motion` obrigatório — transições instantâneas para quem pediu menos movimento
- Cor nunca como único indicador de estado
- Alvos de toque ≥ 44×44px

---

## Restrições de Performance

- Lighthouse 90+ em mobile
- Imagens em WebP com `srcset` e `loading="lazy"` (exceto hero)
- JS mínimo — sem frameworks pesados se desnecessário
- Fontes com `display=swap` e `preconnect`

---

## Restrições de LGPD

- Checkbox de consentimento nos formulários (não pré-marcado)
- Link de Política de Privacidade
- Guardar data/hora do consentimento
- Anti-spam: honeypot ou captcha invisível

---

## Restrições Técnicas de Responsividade

Testar obrigatoriamente em: **375 / 768 / 1024 / 1440px**
- Sem rolagem horizontal em nenhuma breakpoint
- Corpo de texto ≥ 16px no mobile
