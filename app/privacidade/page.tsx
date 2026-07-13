import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Jacqueline Borges",
  description: "Política de privacidade e conformidade LGPD",
};

export default function Privacidade() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--color-bg)", paddingTop: "6rem" }}>
      <div className="wrap" style={{ paddingBottom: "4rem", maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}>Política de <em>Privacidade</em></h1>
        <p style={{ color: "var(--color-brand-muted)", marginBottom: "3rem" }}>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div style={{ lineHeight: 1.8, color: "var(--color-brand)" }}>
          {/* Introdução */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>1. Introdução</h2>
            <p>
              Jacqueline Borges ("nós", "nosso" ou "Jacqueline") opera o site jacquelineborges.com.br ("Serviço").
            </p>
            <p>
              Esta página informa você sobre nossas políticas de privacidade e como tratamos seus dados pessoais quando você visita nosso site e/ou nos contata.
            </p>
            <p>
              Estamos comprometidos em proteger sua privacidade e garantir que você tenha uma experiência positiva em nosso Serviço. Esta Política de Privacidade se aplica a todos os visitantes e clientes.
            </p>
          </section>

          {/* Definições */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>2. Definições</h2>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Serviço:</strong> Refere-se ao website jacquelineborges.com.br e todos os seus conteúdos, funcionalidades e serviços.</li>
              <li><strong>Dados Pessoais:</strong> Qualquer informação que identifique você diretamente, como nome, email, telefone, endereço IP, e dados de navegação.</li>
              <li><strong>Titular de Dados:</strong> Você, como visitante ou cliente do Serviço.</li>
              <li><strong>Controlador:</strong> Jacqueline Borges, responsável por decisões sobre o tratamento de dados pessoais.</li>
              <li><strong>Processador:</strong> Qualquer empresa que processa dados em nome de Jacqueline (ex: provedores de email, hospedagem).</li>
            </ul>
          </section>

          {/* Dados Coletados */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>3. Dados Pessoais Coletados</h2>
            <p>Coletamos os seguintes dados pessoais:</p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Formulário de Contato:</strong> Nome, email, telefone/WhatsApp, mensagem</li>
              <li><strong>Logs de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, horário de acesso (via servidor Next.js/Vercel)</li>
              <li><strong>Cookies e Tecnologias Similares:</strong> Identificadores de sessão para melhorar sua experiência</li>
            </ul>
          </section>

          {/* Base Legal */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>4. Base Legal para Processamento (LGPD)</h2>
            <p>Processamos seus dados pessoais com base nas seguintes bases legais sob a Lei Geral de Proteção de Dados (Lei nº 13.709/2018):</p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Consentimento:</strong> Você consentiu ao preencher o formulário de contato (checkbox de consentimento)</li>
              <li><strong>Interesse Legítimo:</strong> Para melhorar o Serviço, garantir segurança e cumprir obrigações legais</li>
              <li><strong>Obrigação Legal:</strong> Para cumprir requisitos regulatórios e legais aplicáveis</li>
            </ul>
          </section>

          {/* Finalidade */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>5. Finalidade do Tratamento</h2>
            <p>Seus dados pessoais são utilizados para:</p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li>Responder suas mensagens via email ou WhatsApp</li>
              <li>Agendar e confirmar consultas psicológicas</li>
              <li>Enviar informações sobre nossos serviços (apenas com consentimento)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar a segurança e funcionalidade do Serviço</li>
              <li>Analisar o uso do Serviço para melhorias contínuas</li>
            </ul>
          </section>

          {/* Compartilhamento */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>6. Compartilhamento de Dados</h2>
            <p>Seus dados pessoais <strong>não são compartilhados</strong> com terceiros, exceto:</p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Provedores de Serviço:</strong> Empresas que nos auxiliam (hospedagem, email, análise)</li>
              <li><strong>Obrigação Legal:</strong> Quando exigido por lei ou autoridades competentes</li>
              <li><strong>Transferência de Negócio:</strong> Em caso de fusão ou venda (com notificação prévia)</li>
            </ul>
          </section>

          {/* Retenção */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>7. Retenção de Dados</h2>
            <p>
              Retemos seus dados pessoais pelo tempo necessário para fornecer o Serviço e cumprir nossas obrigações legais. Especificamente:
            </p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Formulários de Contato:</strong> Retidos por 12 meses ou até término do atendimento</li>
              <li><strong>Registros de Consentimento:</strong> Retidos conforme obrigação LGPD (mínimo 3 anos)</li>
              <li><strong>Logs de Navegação:</strong> Retidos por 30 dias</li>
            </ul>
            <p>
              Você pode solicitar a exclusão de seus dados a qualquer momento, sujeito a obrigações legais.
            </p>
          </section>

          {/* Direitos */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>8. Seus Direitos (LGPD)</h2>
            <p>
              Sob a LGPD, você tem o direito de:
            </p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li><strong>Acessar</strong> seus dados pessoais</li>
              <li><strong>Corrigir</strong> dados incorretos ou incompletos</li>
              <li><strong>Deletar</strong> seus dados ("direito ao esquecimento")</li>
              <li><strong>Portabilidade:</strong> Receber dados em formato estruturado</li>
              <li><strong>Revogar Consentimento:</strong> A qualquer momento</li>
              <li><strong>Oposição:</strong> Ao processamento de dados para fins específicos</li>
              <li><strong>Solicitar informações</strong> sobre o tratamento de seus dados</li>
            </ul>
          </section>

          {/* Segurança */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>9. Segurança de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
            </p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li>Criptografia de dados em trânsito (HTTPS/SSL)</li>
              <li>Senhas criptografadas e autenticação segura</li>
              <li>Acesso restrito a dados por pessoal autorizado</li>
              <li>Monitoramento de segurança regular</li>
            </ul>
            <p>
              Embora nos esforcemos para proteger seus dados, nenhuma transmissão pela internet é 100% segura.
            </p>
          </section>

          {/* Cookies */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>10. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Nosso Serviço pode usar cookies e tecnologias similares (tokens de sessão, localStorage) para:
            </p>
            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
              <li>Manter sua sessão ativa</li>
              <li>Armazenar preferências de navegação</li>
              <li>Análise de uso (Google Analytics, Vercel Analytics)</li>
            </ul>
            <p>
              Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a experiência no Serviço.
            </p>
          </section>

          {/* Links Externos */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>11. Links para Terceiros</h2>
            <p>
              Nosso Serviço contém links para sites de terceiros (ex: Instagram, WhatsApp). Não somos responsáveis pela privacidade desses sites. Recomendamos ler suas políticas de privacidade antes de compartilhar dados.
            </p>
          </section>

          {/* Contato */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>12. Contato e Exercício de Direitos</h2>
            <p>
              Para exercer qualquer direito LGPD, acessar, corrigir ou deletar seus dados, entre em contato:
            </p>
            <div style={{ background: "rgba(150,120,90,.08)", padding: "1.5rem", borderRadius: "12px", marginTop: "1rem" }}>
              <p style={{ margin: "0.5rem 0" }}>
                <strong>Email:</strong> jacborgespsi@gmail.com
              </p>
              <p style={{ margin: "0.5rem 0" }}>
                <strong>WhatsApp:</strong> (22) 99265-9191
              </p>
              <p style={{ margin: "0.5rem 0" }}>
                <strong>Endereço:</strong> Araruama e Rio das Ostras, RJ
              </p>
            </div>
            <p style={{ marginTop: "1rem" }}>
              Responderemos dentro de 15 dias úteis (conforme LGPD).
            </p>
          </section>

          {/* Alterações */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>13. Alterações Nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página. Alterações significativas serão comunicadas por email ou aviso no Serviço.
            </p>
          </section>

          {/* Conformidade */}
          <section>
            <h2>14. Conformidade LGPD</h2>
            <p>
              Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), que regulamenta o tratamento de dados pessoais no Brasil.
            </p>
            <p>
              Para denúncias de violação de direitos relacionados aos dados pessoais, você pode contatar a Autoridade Nacional de Proteção de Dados (ANPD) através de seu <a href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-purple)" }}>site oficial</a>.
            </p>
          </section>
        </div>

        {/* Footer link */}
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--color-line)", textAlign: "center", color: "var(--color-brand-muted)", fontSize: "0.9rem" }}>
          <p>
            <a href="/" style={{ color: "var(--color-purple)" }}>← Voltar para homepage</a>
          </p>
        </div>
      </div>
    </main>
  );
}
