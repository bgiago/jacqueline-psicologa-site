# PRD — Product Requirements Document

**Produto:** Site Profissional — Jaqueline Borges, Psicóloga Clínica  
**Versão:** 1.0  
**Última atualização:** 2026-06-06  
**Status:** Definido (aguarda confirmações marcadas com `[confirmar]`)  
**Fonte:** `docs/ESTRUTURA-E-COPY_SITE_V1.md`

---

## Objetivo

Levar a mulher certa a iniciar uma conversa no WhatsApp (triagem) e/ou deixar o contato por formulário.

**Big Idea / Eixo da marca:** *"Você não precisa dar conta de tudo sozinha."*

---

## Dados da Cliente

| Campo | Valor |
|---|---|
| Nome | **Jacqueline Borges** |
| Profissão | Psicóloga Clínica |
| Especialidade | Psicologia Fenomenológica Existencialista |
| CRP | 05/85378 |
| WhatsApp | (22) 99265-9191 |
| E-mail | jacborgespsi@gmail.com |
| Instagram | @psi.jacborges |
| Cidade | **Araruama** |
| Modalidade preferencial | **Online (a distância)** — também presencial |
| Duração da sessão | **50 minutos**, frequência semanal |
| Valor da sessão | **Não divulgado no site** |

---

## Público-Alvo (Avatar)

Mulher, 28–55 anos. Mãe, mãe solo, mulher sobrecarregada. Vive pros outros, se cobra demais, sente culpa quando pensa em si. Funciona por fora, está cansada por dentro.

**Nível de consciência:** Consciente do problema, ainda não da solução → o site nomeia a dor antes de falar de terapia.

---

## Escopo — Arquitetura da Página (13 blocos)

| # | Bloco | Status |
|---|---|---|
| 1 | Navbar | Copy definida |
| 2 | Hero | Copy definida |
| 3 | Identificação ("o nome da dor") | Copy definida |
| 4 | Espelho (cards de identificação) | Copy definida |
| 5 | Sobre a Jaqueline | Copy definida |
| 6 | Como funciona o acompanhamento | Copy definida |
| 7 | Atendimento (modalidades) | Copy definida, cidade **[confirmar]** |
| 8 | Seção-assinatura (Coragem) | Copy definida |
| 9 | Reflexões / Instagram | Copy definida, posts reais **[inserir]** |
| 10 | FAQ | Copy definida, duração sessão **[confirmar]** |
| 11 | Captura de lead leve | Copy definida |
| 12 | Contato (formulário) | Copy definida |
| 13 | Rodapé | Copy definida, endereço **[confirmar]** |

### Excluído do escopo
- Sistema de prontuário
- Pagamento online
- Área do paciente
- Depoimentos de pacientes (restrição ética CFP — ver constraints.md)

---

## Conversão

- **Primária:** WhatsApp `(22) 99265-9191` com mensagem pré-preenchida — **único destino de leads**
- **Formulário (se mantido):** deve redirecionar ao WhatsApp, não a CRM/planilha
- **Nutrição:** Captura de e-mail (form leve, bloco 11) — opcional

**Link padrão WhatsApp:**
```
https://wa.me/5522992659191?text=Oi%2C%20Jaqueline!%20Cheguei%20pelo%20seu%20site%20e%20gostaria%20de%20entender%20como%20funciona%20o%20atendimento.
```

---

## Requisitos Não-Funcionais

- Responsivo: testar em 375 / 768 / 1024 / 1440px
- Performance: Lighthouse 90+ mobile, carregamento < 3s
- Acessibilidade: WCAG 2.1 AA (contraste, foco, alt text, labels)
- SEO: meta title/description, Open Graph, Schema.org (LocalBusiness/Person)
- LGPD: checkbox de consentimento nos formulários, Política de Privacidade

---

## Critérios de Sucesso

- CTA de WhatsApp visível no hero, espelho, seção-coragem e contato
- Em 5 segundos, a mulher-alvo pensa "é sobre mim"
- Zero termo da blacklist (cura, transformação, jornada, destrave, melhor versão)
- Formulário enviando pro destino certo com consentimento LGPD

---

## Perguntas em Aberto

- [ ] Posts reais do Instagram para o bloco §9 (Reflexões)
- [ ] Endereço exato do consultório presencial (se quiser exibir)
- [ ] Hospedagem preferida para Next.js (Vercel recomendado)

## Confirmado

- [x] Nome: **Jacqueline Borges**
- [x] Cidade: **Araruama**
- [x] Modalidade: online (preferencial) + presencial
- [x] Especialidade: Psicologia Fenomenológica Existencialista
- [x] Sessões: 50 minutos, semanais
- [x] Valor: **não divulgar** no site
- [x] Destino dos leads: **WhatsApp direto**
- [x] Foto hero: arquivo `imagem-jacqueline.png`
- [x] Paleta: roxo pastel (dominante) + sálvia (acento)
- [x] Stack: **Next.js**
