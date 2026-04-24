import type { TextContent } from './en';

export const pt: TextContent = {
  header: {
    name: 'Igor Andrade',
    navigation: {
      about: 'Sobre',
      projects: 'Projetos',
      courses: 'Cursos',
      certifications: 'Certificações',
      contact: 'Contato',
      resume: 'Currículo'
    }
  },

  hero: {
    availability: 'Disponível para Trabalho Remoto',
    title: 'Desenvolvedor Full-Stack',
    subtitle:
      'Construindo soluções web escaláveis com tecnologias modernas. Apaixonado por criar experiências de usuário excepcionais e sistemas backend robustos.',
    buttons: {
      viewWork: 'Ver Meu Trabalho',
      contactMe: 'Entre em Contato'
    }
  },

  about: {
    title: 'Sobre Mim',
    subtitle:
      'Sou um desenvolvedor full-stack dedicado com mais de 3 anos de experiência criando aplicações web. Prospero na resolução de desafios complexos e na transformação de ideias em soluções escaláveis e eficientes através de código limpo e moderno.',
    background: {
      title: 'Trajetória',
      content:
        'Minha jornada começou na Engenharia Elétrica, onde desenvolvi pensamento analítico e habilidades de resolução de problemas. Fiz a transição para o desenvolvimento de software, trabalhando com empresas no Brasil e internacionalmente. Desde aprimoramento de UIs e implementação de APIs até construção de pipelines de dados e implantação de web scrapers, contribuí para projetos em escala em startups e ambientes corporativos.'
    },
    approach: {
      title: 'Abordagem',
      content:
        'Acredito em escrever código limpo e manutenível seguindo boas práticas. Estou sempre aprendendo novas tecnologias e me mantendo atualizado com as tendências do setor para entregar as melhores soluções.'
    },
    skillsTitle: 'Habilidades & Tecnologias',
    skillsSubtitle: 'Tecnologias e ferramentas com as quais trabalho para dar vida às ideias',
    coursesTitle: 'Desenvolvimento Profissional',
    coursesSubtitle:
      'Aprendendo e dominando continuamente novas tecnologias através de cursos e especializações abrangentes.',
    certificatesTitle: 'Certificações Profissionais',
    certificatesSubtitle:
      'Expandindo continuamente minha expertise através de certificações reconhecidas pela indústria de empresas de tecnologia líderes.',
    buttons: {
      viewAllSkills: 'Ver Todas as Habilidades',
      viewAllCourses: 'Ver Todos os Cursos',
      viewAllCertifications: 'Ver Todas as Certificações'
    },
    timeline: {
      workTitle: 'Experiência Profissional',
      workSubtitle: 'Minha jornada na indústria de desenvolvimento de software',
      educationTitle: 'Educação',
      educationSubtitle: 'Formação acadêmica e certificações',
      present: 'Presente'
    }
  },

  projects: {
    title: 'Projetos em Destaque',
    subtitle:
      'Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e experiência na construção de aplicações web modernas.',
    buttons: {
      liveDemo: 'Demo ao Vivo',
      code: 'Código',
      viewAll: 'Ver Todos os Projetos'
    }
  },

  contact: {
    title: 'Entre em Contato',
    subtitle:
      'Estou sempre interessado em novas oportunidades e projetos empolgantes. Vamos discutir como podemos trabalhar juntos!',
    form: {
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'E-mail',
      emailPlaceholder: 'seu.email@exemplo.com',
      subject: 'Assunto',
      subjectPlaceholder: 'Consulta sobre projeto',
      message: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou oportunidade...',
      sendButton: 'Enviar Mensagem',
      recaptchaRequired: 'Por favor, complete a verificação reCAPTCHA.',
      recaptchaFailed:
        'Algo deu errado. Por favor, atualize a página e tente novamente.',
      sending: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Responderei em breve.',
      errorMessage: 'Erro ao enviar mensagem. Por favor, tente novamente.',
      success: {
        title: 'Mensagem Enviada com Sucesso!',
        thankYou: 'Obrigado,',
        received:
          'foi recebida. Vou analisá-la cuidadosamente e responderei em breve.',
        messageAbout: 'Sua mensagem sobre',
        responseTime: {
          title: 'Tempo de Resposta Esperado',
          duration: 'Dentro de 24-48 horas'
        },
        security: {
          privacy: 'Suas informações estão seguras e não serão compartilhadas',
          urgentContact:
            'Sinta-se à vontade para entrar em contato nas redes sociais para assuntos urgentes'
        }
      }
    },
    directContact: 'Pronto para discutir seu projeto?',
    buttons: {
      email: 'E-mail',
      linkedin: 'LinkedIn',
      appointment: 'Agendar uma Chamada'
    }
  },

  footer: {
    description:
      'Desenvolvedor full-stack movido por curiosidade e impacto, construindo soluções web escaláveis com tecnologias modernas. Comprometido com o aprendizado contínuo e a criação de experiências digitais significativas.',
    quickLinks: {
      title: 'Links Rápidos',
      about: 'Sobre',
      projects: 'Projetos',
      courses: 'Cursos',
      certifications: 'Certificações',
      contact: 'Contato',
      resume: 'Currículo'
    },
    contactInfo: {
      title: 'Entre em Contato',
      email: 'igorhsandrade@gmail.com',
      location: 'Remoto / Mundial'
    },
    legal: {
      copyright: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      builtWith: 'Desenvolvido com Next.js & Tailwind CSS'
    }
  },

  skills: {
    searchPlaceholder: 'Buscar habilidades...',
    year: 'ano',
    years: 'anos',
    categories: {
      Languages: 'Linguagens',
      Technologies: 'Tecnologias',
      Data: 'Dados',
      Tools: 'Ferramentas'
    },
    levels: {
      Expert: 'Especialista',
      Advanced: 'Avançado',
      Intermediate: 'Intermediário',
      Beginner: 'Iniciante'
    },
    found: 'Encontrado',
    skill: 'habilidade',
    skillsPlural: 'habilidades',
    matching: 'correspondente a',
    showingIn: 'Mostrando resultados em',
    categoryWord: 'categoria',
    categoriesWord: 'categorias',
    noResultsFor: 'Nenhuma habilidade encontrada para',
    inCategory: 'em',
    tryDifferent: 'Tente um termo diferente ou navegue por outras categorias',
    noSkills: 'Nenhuma habilidade nesta categoria ainda',
    willBeAdded: 'Habilidades serão adicionadas conforme aprendo novas tecnologias'
  },

  common: {
    imageAlt: 'Igor Andrade - Desenvolvedor Full-Stack',
    ariaLabels: {
      mainNavigation: 'Navegação principal',
      githubProfile: 'Perfil do GitHub',
      linkedinProfile: 'Perfil do LinkedIn',
      sendEmail: 'Enviar E-mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail'
    },
    screenReaderOnly: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail'
    }
  }
};
