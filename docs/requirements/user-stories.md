# Histórias de Usuário

**Última atualização:** 2026-06-06  
**Status:** Rascunho inicial — preencher com o cliente

---

## Personas

### Visitante (Potencial Paciente)
Pessoa que encontrou o site buscando atendimento psicológico. Quer entender se a psicóloga é uma boa escolha para ela e como entrar em contato.

### Jacqueline (Psicóloga / Proprietária)
Profissional que precisa que o site transmita sua identidade, mostre sua credibilidade e gere contatos de novos pacientes.

---

## Histórias

### Visitante (Potencial Paciente)

| ID | História | Critérios de Aceite | Bloco |
|---|---|---|---|
| US-001 | Como mulher sobrecarregada, quero sentir em 5 segundos que "é sobre mim", para continuar lendo em vez de fechar | H1 "Você não precisa dar conta de tudo sozinha." visível acima da dobra; eyebrow com CRP; foto real da Jaqueline | Hero (§2) |
| US-002 | Como visitante que ainda não conhece terapia, quero que o site nomeie o que sinto antes de falar de serviço, para me sentir compreendida | Bloco de identificação com "Quando você cuida de todo mundo..." antes de qualquer pitch | Identificação (§3) |
| US-003 | Como visitante que se reconheceu nos cards, quero ser convidada a conversar de forma gentil, para dar o primeiro passo sem pressão | Fecho "Se você se reconheceu, conversar pode ser um bom primeiro passo." + botão WhatsApp | Espelho (§4) |
| US-004 | Como visitante, quero saber quem é a psicóloga como pessoa (não só currículo), para sentir conexão antes de marcar | Bloco "Oi, eu sou a Jaqueline" com voz vulnerável e humana; CRP discreto no fim | Sobre (§5) |
| US-005 | Como visitante com medo do desconhecido, quero entender como funciona o acompanhamento passo a passo, para me sentir segura | 3 etapas claras: Escuta → Compreensão → Construção | Como funciona (§6) |
| US-006 | Como visitante, quero saber as modalidades disponíveis, para escolher a que cabe na minha rotina | Cards: Psicoterapia individual / Online / Presencial; escopo "adolescentes, adultos e idosos" | Atendimento (§7) |
| US-007 | Como visitante hesitante, quero ver que pedir ajuda é coragem (não fraqueza), para superar a resistência | Seção-assinatura com "Coragem nem sempre tem cara de coragem." e CTA único | Coragem (§8) |
| US-008 | Como visitante, quero ver prova de que a psicóloga entende o que fala, sem precisar de depoimento de paciente | 3 posts reais do @psi.jacborges com temas de autocobrança/maternidade | Reflexões (§9) |
| US-009 | Como visitante com dúvidas, quero respostas rápidas às perguntas mais comuns, para não precisar entrar em contato só pra perguntar o básico | FAQ accordion com 6 perguntas respondidas | Dúvidas (§10) |
| US-010 | Como visitante que ainda não está pronta para marcar, quero deixar meu e-mail para receber conteúdo no meu tempo | Form leve (Nome + E-mail) + consentimento LGPD; confirmação "Prontinho. Obrigada por confiar." | Captura (§11) |
| US-011 | Como visitante que prefere não ligar na hora, quero enviar uma mensagem pelo site | Form principal com 3 campos obrigatórios (Nome, WhatsApp, E-mail) + campo opcional de mensagem | Contato (§12) |
| US-012 | Como visitante em mobile, quero acessar o WhatsApp a qualquer momento sem rolar até o contato | Botão flutuante do WhatsApp fixo na tela em mobile | Global |

### Jaqueline (Proprietária)

| ID | História | Critérios de Aceite | Bloco |
|---|---|---|---|
| US-013 | Como psicóloga, quero que o site transmita calma e acolhimento (não coach/motivacional), para atrair pacientes alinhadas com meu trabalho | Paleta terra/vinho, Cormorant serifada, sem gradiente vibrante, sem emoji como ícone | Design |
| US-014 | Como psicóloga, quero estar dentro das normas do CFP, para não ter problemas éticos | Zero depoimento de paciente; linguagem de processo, não de resultado; sem promessa de cura | Compliance |
| US-015 | Como psicóloga, quero receber os leads do formulário no e-mail ou planilha | Formulário integrado ao destino definido `[confirmar]` + evento `form_submit_contato` no GA4 | Técnico |

---

## Histórias Fora do Escopo Atual

- Blog com artigos (possível fase 2)
- Depoimentos de pacientes (vetado por ética CFP)
- Integração com agenda online (possível fase 2)
- Pagamento online (possível fase 2)
