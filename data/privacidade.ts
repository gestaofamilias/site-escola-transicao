// Conteúdo da Política de Privacidade (LGPD). Revisar com um responsável
// jurídico antes de publicar. O e-mail de contato do encarregado (DPO) e o
// nome do responsável ainda são placeholders — ver [INSERIR_...] abaixo.

export const privacyContactEmail = "privacidade@[DOMINIO_DA_ESCOLA]";
export const privacyDpoName = "[INSERIR_NOME_RESPONSAVEL_DPO]";
export const privacyLastUpdated = "[INSERIR_DATA_DE_PUBLICACAO]";

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export const privacidadeContent = {
  hero: {
    title: "Política de Privacidade",
    subtitle:
      "Como a Escola Transição coleta, usa e protege as informações de famílias e crianças.",
  },
  intro:
    "Esta política explica, de forma simples e transparente, quais dados a Escola Transição coleta através deste site, para que servem e quais direitos você tem sobre eles, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
  sections: [
    {
      id: "dados-coletados",
      title: "1. Quais dados coletamos",
      paragraphs: [
        "Coletamos dados apenas quando você opta por entrar em contato conosco, ou por meio de imagens institucionais da escola. Não usamos cookies não essenciais nem ferramentas de rastreamento/analytics neste site.",
      ],
      list: [
        "Formulário de contato: nome, telefone, e-mail, assunto e mensagem, informados voluntariamente por quem preenche o formulário.",
        "Botão de WhatsApp: ao clicar, você é direcionado ao aplicativo do WhatsApp com uma mensagem pré-preenchida; a conversa passa a ser tratada diretamente pelo WhatsApp/Meta, fora deste site.",
        "Galeria de fotos: imagens do ambiente escolar, atividades e, eventualmente, crianças matriculadas, publicadas somente mediante autorização de uso de imagem assinada pelos responsáveis (veja a seção 6).",
      ],
    },
    {
      id: "finalidade",
      title: "2. Para que usamos esses dados",
      list: [
        "Responder dúvidas e solicitações enviadas pelo formulário de contato.",
        "Apresentar a proposta pedagógica, a estrutura e a rotina da escola a famílias interessadas.",
        "Divulgar, de forma institucional, atividades e o ambiente escolar por meio de fotos autorizadas.",
      ],
    },
    {
      id: "base-legal",
      title: "3. Base legal para o tratamento",
      paragraphs: [
        "O envio do formulário de contato é tratado com base no consentimento (art. 7º, I, da LGPD), dado no momento em que você preenche e envia o formulário voluntariamente.",
        "A publicação de fotos de crianças na Galeria é tratada com base no consentimento específico dos pais ou responsáveis legais, obtido por meio de autorização de uso de imagem assinada, podendo ser revogado a qualquer momento (veja a seção 6).",
      ],
    },
    {
      id: "compartilhamento",
      title: "4. Compartilhamento com terceiros",
      paragraphs: [
        "Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Alguns serviços de terceiros são usados diretamente neste site ou a partir dele:",
      ],
      list: [
        "Google Maps: a página de Contato exibe um mapa incorporado (iframe) fornecido pelo Google, que pode registrar dados de acesso conforme a própria política de privacidade do Google.",
        "WhatsApp (Meta): mensagens iniciadas pelo botão de WhatsApp são processadas pelo WhatsApp/Meta, conforme a política de privacidade dessa plataforma.",
      ],
    },
    {
      id: "retencao",
      title: "5. Prazo de retenção",
      paragraphs: [
        "Mensagens recebidas pelo formulário de contato são mantidas apenas pelo tempo necessário para atendimento da solicitação e eventual acompanhamento, sendo descartadas após esse período.",
        "Fotos publicadas na Galeria permanecem no site enquanto a autorização de uso de imagem estiver vigente, sendo removidas mediante solicitação dos responsáveis ou revogação do consentimento.",
      ],
    },
    {
      id: "imagens-criancas",
      title: "6. Imagens de crianças na Galeria",
      paragraphs: [
        "Fotos de crianças matriculadas só são publicadas neste site mediante autorização de uso de imagem assinada pelos pais ou responsáveis legais, obtida previamente pela escola.",
        "As legendas das fotos não incluem o nome completo das crianças retratadas.",
        "Pais ou responsáveis podem solicitar, a qualquer momento e sem custo, a remoção de uma foto específica ou a revogação total do consentimento de uso de imagem, entrando em contato pelo e-mail informado na seção 8. O pedido será atendido em prazo razoável.",
      ],
    },
    {
      id: "direitos",
      title: "7. Seus direitos como titular de dados",
      paragraphs: [
        "Conforme o art. 18 da LGPD, você pode solicitar a qualquer momento:",
      ],
      list: [
        "Confirmação da existência de tratamento dos seus dados.",
        "Acesso aos dados que temos sobre você.",
        "Correção de dados incompletos, inexatos ou desatualizados.",
        "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.",
        "Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa.",
        "Eliminação dos dados tratados com base no seu consentimento.",
        "Informação sobre entidades públicas e privadas com as quais compartilhamos dados.",
        "Revogação do consentimento, a qualquer momento, sem afetar a legalidade do tratamento realizado antes da revogação.",
      ],
    },
    {
      id: "seguranca",
      title: "8. Segurança das informações",
      paragraphs: [
        "Adotamos medidas técnicas razoáveis para proteger os dados tratados por meio deste site contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.",
      ],
    },
    {
      id: "alteracoes",
      title: "9. Alterações desta política",
      paragraphs: [
        "Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A data da última atualização é indicada no final desta página.",
      ],
    },
  ] satisfies PolicySection[],
  contactTitle: "10. Fale com o nosso encarregado de dados (DPO)",
  contactText:
    "Para exercer seus direitos, tirar dúvidas sobre esta política ou solicitar a remoção de uma foto, entre em contato:",
};
