// content/site.ts
export const siteInfo = {
  name: 'Eliane Peres',
  firstName: 'Eliane',
  profession: 'Psicóloga Clínica',
  professionalRegistry: 'CRP 06/188803',
  city: 'São Paulo',
  whatsapp: '5511970360060',
  whatsappLabel: '(11) 97063-0060',
  email: 'psicologa.elianeperes@gmail.com',
  socials: [
    {
      icon: 'i-simple-icons-instagram',
      link: 'https://instagram.com/',
      label: 'Instagram'
    },
    {
      icon: 'i-simple-icons-whatsapp',
      link: 'https://wa.me/5511999999999',
      label: 'WhatsApp'
    },
    {
      icon: 'i-simple-icons-linkedin',
      link: '#',
      label: 'LinkedIn'
    }
  ],
  creditsText: 'Site criado por André Barbieri, de psico para psico.',
  creditsLink: 'https://wa.me/5511993971098',
  serviceLocation: 'Atendimento online e presencial (Pinheiros)'
}

export const sections = {
  hero: {
    title: 'Psicoterapia com escuta ética e acolhedora em São Paulo',
    label:
      'Atendimento online e presencial em Pinheiros. Um espaço seguro para você falar, sentir e se compreender.'
  },
  problem: {
    title: 'Você não precisa lidar com tudo sozinho(a)',
    label:
      'Ansiedade, dificuldades emocionais, conflitos familiares, inseguranças ou momentos de transição podem gerar sofrimento. A psicoterapia é um espaço de cuidado e construção de sentido.'
  },
  services: {
    title: 'Atendimentos oferecidos',
    label:
      'Atendimentos humanizados e feitos com ética e com base nas melhores evidências disponíveis',
    services: [
      {
        title: 'Psicoterapia Infantil',
        description:
          'Atendimento presencial em Pinheiros com abordagem comportamental, auxiliando no desenvolvimento emocional e comportamental da criança.',
        image: '/images/terapiaInfantil.jpg'
      },
      {
        title: 'Adolescentes',
        description:
          'Espaço seguro para desenvolvimento emocional, construção de autonomia e manejo de ansiedade e conflitos.',
        image: '/images/terapiaOnline.jpg'
      },
      {
        title: 'Adultos',
        description:
          'Atendimento online e presencial para questões emocionais, relacionamentos, ansiedade e autoconhecimento.',
        image: '/images/salaTerapia.jpg'
      },
      {
        title: 'Abordagens Terapêuticas',
        description:
          'Atendimento baseado na Análise do Comportamento, DBT e ACT, com foco em evidências científicas.',
        image: '/images/hero.jpg'
      }
    ]
  },
  about: {
    title: siteInfo.name,
    subTitle: `${siteInfo.profession} - ${siteInfo.professionalRegistry}`,
    label: [
      'Psicóloga clínica comportamental com atuação online e presencial em São Paulo. Trabalho guiado pelo respeito, ética profissional e compromisso com o cuidado em saúde mental.',
      'Acredito na psicoterapia como espaço de acolhimento, reflexão e transformação, respeitando o tempo e a singularidade de cada pessoa.'
    ]
  },
  cta: {
    title: 'Cuidar da sua saúde mental é um ato de responsabilidade consigo mesmo',
    label: 'Entre em contato e agende sua sessão.'
  },
  process: {
    title: 'Como funciona o atendimento',
    subTitle: 'Um processo simples e pensado para o seu conforto.',
    steps: [
      {
        title: 'Primeiro contato',
        description: 'Entre em contato para tirar dúvidas e receber as primeiras orientações.'
      },
      {
        title: 'Agendamento',
        description: 'Definimos o melhor horário para o atendimento online ou presencial.'
      },
      {
        title: 'Início do atendimento',
        description: 'O processo acontece de forma acolhedora e respeitando o seu momento.'
      }
    ]
  },
  faq: {
    title: 'Perguntas frequentes',
    subTitle: 'Algumas dúvidas comuns antes de iniciar o atendimento.',
    items: [
      {
        question: 'Como funciona o atendimento online?',
        answer:
          'O atendimento é realizado por videochamada em ambiente seguro, com a mesma ética e sigilo do atendimento presencial.'
      },
      {
        question: 'Qual a duração das sessões?',
        answer: 'As sessões têm duração média de 50 minutos.'
      },
      {
        question: 'Atende convênios?',
        answer:
          'Os atendimentos são particulares, com possibilidade de recibo para reembolso conforme o plano de saúde.'
      }
    ]
  }
}

export const navBar = {
  title: siteInfo.name,
  logo: undefined,
  items: [
    { label: 'Início', to: '#inicio' },
    { label: 'Serviços', to: '#servicos' },
    { label: 'Sobre', to: '#sobre' },
    { label: 'Atendimento', to: '#atendimento' },
    { label: 'Contato', to: '#contato' },
    { label: 'Dúvidas Frequentes', to: '#duvida' }
  ]
}

export const site = {
  ...siteInfo,
  sections,
  navBar
}
