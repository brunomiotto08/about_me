(function () {
  'use strict';

  const STORAGE_KEY = 'site-lang';
  const DEFAULT_LANG = 'pt-BR';
  const LANGS = ['pt-BR', 'en-US', 'es'];

  const strings = {
    'pt-BR': {
      'meta.title': 'Bruno Miotto',
      'meta.project.habilita.title': 'Habilita I.M.P. — Bruno Miotto',
      'meta.project.habilita.desc': 'Plataforma full-stack de monitoramento industrial (I.M.P.) para autoclaves — MQTT, Supabase, WebSocket e rastreabilidade de pneus por ciclo.',
      'meta.project.fleet.title': 'FleetOps — Bruno Miotto',
      'meta.project.fleet.desc': 'PWA de gestão financeira e operacional para empresas de transporte de passageiros — frota, KPIs, DRE e agenda diária automatizada.',
      'meta.project.website.title': 'Habilita Website — Bruno Miotto',
      'meta.project.website.desc': 'Site institucional one-page em React para empresa de automação industrial — serviços, projetos, trajetória e contato com animações e cursor customizado.',
      'aria.menu': 'Menu',
      'aria.lang': 'Idioma',
      'aria.lightbox.close': 'Fechar',
      'aria.lightbox.prev': 'Imagem anterior',
      'aria.lightbox.next': 'Próxima imagem',

      'nav.home': 'início',
      'nav.skills': 'habilidades',
      'nav.experience': 'experiência',
      'nav.portfolio': 'portfólio',
      'nav.journey': 'jornada',
      'nav.library': 'biblioteca',
      'nav.contact': 'contato',

      'hero.status': 'Disponível para projetos',
      'hero.role': 'Desenvolvedor & Estudante de Engenharia de Software',
      'hero.summary': '<strong>21 anos, de Caxias do Sul — RS.</strong>',
      'hero.meta.company': 'Empresa',
      'hero.meta.college': 'Faculdade',
      'hero.meta.contact': 'Contato',
      'hero.cta.skills': 'Ver habilidades',
      'hero.cta.talk': 'Fale comigo',

      'skills.title': 'Habilidades',
      'skills.sub': 'Ferramentas, linguagens e tecnologias que fazem parte do meu dia a dia.',
      'skills.work': 'Trabalho',
      'skills.languages': 'Linguagens',
      'skills.tools': 'Ferramentas & Integrações',
      'skills.ai': 'Ferramentas de IA',
      'skills.creation': 'Criação & Conteúdo',

      'skill.delphi.desc': 'Desenvolvimento e manutenção de sistemas',
      'skill.sourcetree.desc': 'Controle de versão e Git visual',
      'skill.firebird.desc': 'Banco de dados relacional',
      'skill.html.desc': 'Estrutura e marcação semântica',
      'skill.css.desc': 'Estilização e layouts responsivos',
      'skill.js.desc': 'Interatividade e lógica front-end',
      'skill.ts.desc': 'JavaScript tipado e escalável',
      'skill.python.desc': 'Scripts, automação e IA',
      'skill.c.desc': 'Programação de baixo nível',
      'skill.delphi2.desc': 'Linguagem orientada a objetos',
      'skill.n8n.desc': 'Automação de fluxos e workflows',
      'skill.supabase.desc': 'Backend as a service e banco de dados',
      'skill.rest.desc': 'Consumo e integração de APIs',
      'skill.webhooks.desc': 'Eventos e comunicação entre sistemas',
      'skill.claude.desc': 'IA da Anthropic, coding e análise',
      'skill.gemini.desc': 'IA do Google, pesquisa e geração',
      'skill.cursor.desc': 'Editor com IA integrada para código',
      'skill.lovable.desc': 'Geração de apps full-stack com IA',
      'skill.notebooklm.desc': 'Pesquisa e síntese de documentos',
      'skill.canva.desc': 'Design e conteúdo para redes sociais',
      'skill.imgedit.name': 'Edição de Imagens',
      'skill.imgedit.desc': 'Tratamento e ajuste de fotos',
      'skill.videoedit.name': 'Edição de Vídeos',
      'skill.videoedit.desc': 'Corte, montagem e pós-produção',

      'xp.title': 'Experiência & Formação',
      'xp.sub': 'Onde trabalho e estudo.',
      'xp.work': 'Trabalho',
      'xp.grad': 'Graduação',
      'xp.windel.role': 'Desenvolvedor Delphi',
      'xp.windel.desc': 'Otimização de sistemas e aplicação de correções estruturais em software de gestão ERP para micro e pequenas empresas. Caxias do Sul, RS.',
      'xp.ucs.role': 'Engenharia de Software',
      'xp.ucs.desc': 'Ingressando no 2º semestre. Formação técnica e teórica em desenvolvimento, arquitetura de software e engenharia de sistemas.',

      'portfolio.title': 'Portfólio',
      'portfolio.sub': 'Projetos que desenvolvi — do conceito à entrega.',
      'portfolio.habilita.desc': 'Plataforma full-stack de monitoramento industrial para autoclaves — ingestão MQTT, persistência no Supabase, API REST, dashboards em tempo real via WebSocket e rastreabilidade de pneus por ciclo.',
      'portfolio.fleet.desc': 'PWA de gestão financeira e operacional para transporte de passageiros — frota, motoristas, linhas, receitas, custos, DRE e KPIs em tempo real.',
      'portfolio.website.desc': 'Site institucional one-page para empresa de automação industrial — hero animado, serviços, portfólio, trajetória, processo e contato com cursor customizado.',
      'portfolio.cta': 'Ver projeto →',

      'journey.title': 'Jornada Acadêmica',
      'journey.sub': 'Engenharia de Software — UCS · cursando desde 2023/2',
      'journey.tab.done': 'Concluídas',
      'journey.tab.current': 'Cursando',
      'journey.tab.next': 'Próximas',

      'library.title': 'Biblioteca',
      'library.sub': 'Leituras que moldaram minha forma de pensar.',
      'library.book1.comment': 'Um guia direto sobre como pensar e trabalhar como desenvolvedor. Mudou minha forma de encarar código e qualidade de software.',
      'library.book2.comment': 'Didático e visual. A melhor introdução a algoritmos que já li. Essencial para qualquer programador.',

      'footer.title': 'Vamos conversar.',
      'footer.copy': '© 2026 Bruno Miotto — Caxias do Sul, RS',

      'project.back': '← Voltar ao portfólio',
      'project.habilita.type': 'Full-stack · IoT Industrial',
      'project.habilita.subtitle': '<strong>Industrial Monitoring Platform</strong> — solução completa para monitoramento de autoclaves e equipamentos de produção, com ingestão de dados via MQTT, persistência em PostgreSQL (Supabase), API REST autenticada, dashboards ao vivo via WebSocket e rastreabilidade de pneus por ciclo de produção.',
      'project.about': 'Sobre',
      'project.about.p1': 'O <strong>Habilita I.M.P.</strong> resolve um problema real do chão de fábrica: dados espalhados em PLCs sem visibilidade central, histórico confiável ou alertas em tempo real. A plataforma recebe telemetria de sensores e CLPs via broker MQTT, processa no backend Node.js, persiste no Supabase e entrega uma interface React moderna para operadores, supervisores e administradores.',
      'project.about.p2': 'O sistema é <strong>multi-tenant</strong> — cada fábrica/cliente opera de forma isolada com Row Level Security (RLS) — e evoluiu em quatro versões, da leitura básica de temperatura e vibração até a rastreabilidade completa de pneus vinculados a cada ciclo de autoclave.',
      'project.v20': 'Empresas, usuários e leituras básicas (temperatura, vibração, status)',
      'project.v21': 'Máquinas individuais, ciclos de produção, log de alarmes e API expandida',
      'project.v22': 'Pressões (envelope/saco de ar), motor, 6 válvulas e views SQL otimizadas',
      'project.v23': 'Rastreabilidade de pneus por ciclo com <code>numero_ciclo</code> sequencial por máquina',
      'project.features': 'Funcionalidades',
      'project.f01.title': 'Dashboard multi-máquina',
      'project.f01.desc': 'Visão geral com cards arrastáveis (drag-and-drop), ciclos ativos, métricas ao vivo e navegação para o painel detalhado de cada autoclave.',
      'project.f02.title': 'Ingestão MQTT',
      'project.f02.desc': 'Backend assina tópicos wildcard, valida máquina e empresa, processa 4 tipos de mensagem: telemetria, início/fim de ciclo e alarmes manuais.',
      'project.f03.title': 'Monitoramento de ciclos',
      'project.f03.desc': 'Ciclos sequenciais por máquina, KPIs em tempo real, gráficos ApexCharts, vínculo de códigos de pneu e histórico filtrável.',
      'project.f04.title': 'Alarmes inteligentes',
      'project.f04.desc': 'Detecção automática de limites de temperatura e vibração com cooldown anti-spam (30s), prioridades e reconhecimento individual ou em lote.',
      'project.f05.title': 'Registros e status',
      'project.f05.desc': 'Tabela histórica com 14+ colunas, filtros por período, status de motor e 6 válvulas, e cards com cores dinâmicas por limiar.',
      'project.f06.title': 'Multi-tenancy & auth',
      'project.f06.desc': 'Autenticação JWT via Supabase Auth, isolamento por empresa com RLS, roles (admin/user/viewer) e rooms WebSocket por tenant.',
      'project.arch': 'Arquitetura',
      'project.arch.p': 'O fluxo de leitura MQTT segue 9 etapas: o PLC publica JSON no tópico <code class="project-code" style="display:inline;padding:0.15rem 0.4rem;margin:0;font-size:0.8rem;">empresas/{empresa_id}/maquinas/{uuid}/{tipo}</code>, o backend valida, persiste em <code>leituras_maquina</code>, verifica limites, gera alarmes se necessário e emite eventos via Socket.IO para a sala <code>empresa_{id}</code>.',
      'project.flow.plc': 'PLC / Sensores',
      'project.flow.mqtt': 'Broker MQTT',
      'project.flow.node': 'Node.js + Express',
      'project.flow.db': 'Supabase (PG)',
      'project.flow.socket': 'Socket.IO',
      'project.flow.react': 'React Dashboard',
      'project.gallery': 'Galeria',
      'project.gallery.sub': 'Telas do sistema em operação — clique para ampliar.',
      'project.gallery.c1': 'Visão geral — máquinas em tempo real',
      'project.gallery.c2': 'Gerenciamento de máquinas e tópicos MQTT',
      'project.gallery.c3': 'Monitoramento de ciclo com telemetria',
      'project.gallery.c4': 'Gráfico de telemetria do ciclo',
      'project.gallery.c5': 'Registro de pneus e resumo do ciclo',
      'project.gallery.c6': 'Histórico de ciclos com filtros',
      'project.gallery.c7': 'Registros de leituras com status colorido',
      'project.gallery.c8': 'Painel de notificações e alertas',
      'project.gallery.c9': 'Medidor e histórico de temperatura',
      'project.gallery.c10': 'Vibração, produção e pressões',
      'project.stack': 'Stack',
      'project.stack.react': 'Frontend SPA com rotas e build otimizado',
      'project.stack.mui': 'Componentes e tema dark premium',
      'project.stack.apex': 'Gráficos, gauges e telemetria visual',
      'project.stack.express': 'API REST e servidor HTTP',
      'project.stack.socket': 'WebSocket bidirecional por empresa',
      'project.stack.mqtt': 'Ingestão de dados industriais',
      'project.stack.supabase': 'Auth, RLS, persistência e views SQL',
      'project.stack.motion': 'Animações e drag-and-drop no overview',
      'project.fleet.type': 'PWA · Gestão de Transporte',
      'project.fleet.subtitle': '<strong>Gestão financeira e operacional</strong> para empresas de transporte de passageiros — ônibus, vans, fretamento e linhas regulares. Centraliza frota, motoristas, clientes, receitas e custos com KPIs em tempo real, agenda diária automatizada e relatórios DRE.',
      'project.fleet.about.p1': 'O <strong>FleetOps</strong> nasceu para donos de pequenas e médias transportadoras que precisam saber, dia a dia, <strong>quanto entrou, quanto saiu, quanto sobrou e onde está o gargalo</strong> — sem depender de planilhas acumuladas.',
      'project.fleet.about.p2': 'É um PWA mobile-first que unifica cadastros, operação, automações e relatórios em um único painel, com alertas inteligentes de CPK, contratos vencendo e motoristas sem alocação.',
      'project.fleet.h1': 'Agenda diária que já vem preenchida — o usuário só desmarca o que não rodou',
      'project.fleet.h2': 'DRE simplificada com filtros e exportação para CSV e PDF',
      'project.fleet.h3': 'Automações de salários e faturamento recorrente via edge functions',
      'project.fleet.f01.title': 'Dashboard & KPIs',
      'project.fleet.f01.desc': 'Lucro líquido em destaque, margem, CPK (custo por km), ROI, ticket médio e ranking de lucratividade por veículo com filtros de período.',
      'project.fleet.f02.title': 'Agenda diária de linhas',
      'project.fleet.f02.desc': 'Linhas previstas calculadas por recorrência, feriados e dias úteis. Fechamento automático no fim do dia persiste receitas e atualiza hodômetro.',
      'project.fleet.f03.title': 'Operação — receitas e custos',
      'project.fleet.f03.desc': 'Lançamentos de viagens, diesel, manutenção, salários e taxas vinculados a veículo, motorista, linha e cliente.',
      'project.fleet.f04.title': 'Cadastros completos',
      'project.fleet.f04.desc': 'Frota, motoristas, clientes e linhas fixas com projeção mensal, contratos, CNH, meta de revisão e integração ViaCEP.',
      'project.fleet.f05.title': 'Relatórios & DRE',
      'project.fleet.f05.desc': 'Demonstrativo de resultados, evolução mensal, ranking por veículo/motorista/cliente, fluxo de caixa e heatmap de operação.',
      'project.fleet.f06.title': 'PWA & alertas inteligentes',
      'project.fleet.f06.desc': 'Instalável no celular, onboarding guiado, notificações de CPK elevado, contratos vencendo e custos atípicos.',
      'project.fleet.arch.p': 'O fluxo operacional conecta cadastros, agenda e lançamentos ao Supabase. Edge functions processam o fechamento diário das linhas; TanStack Query mantém os dashboards sincronizados; RLS garante isolamento dos dados por usuário.',
      'project.fleet.flow.cad': 'Cadastros',
      'project.fleet.flow.agenda': 'Agenda diária',
      'project.fleet.flow.op': 'Operação',
      'project.fleet.flow.db': 'Supabase',
      'project.fleet.flow.kpi': 'KPIs & Alertas',
      'project.fleet.flow.rep': 'Relatórios',
      'project.fleet.gallery.c1': 'Dashboard — lucro, CPK e margem',
      'project.fleet.gallery.c2': 'Agenda do dia com linhas previstas',
      'project.fleet.gallery.c3': 'Operação — receitas de viagens',
      'project.fleet.gallery.c4': 'Operação — lançamento de custos',
      'project.fleet.gallery.c5': 'Projeção financeira de linhas fixas',
      'project.fleet.gallery.c6': 'Cadastro de viagens avulsas',
      'project.fleet.gallery.c7': 'Gestão da frota com lucro por veículo',
      'project.fleet.gallery.c8': 'Linhas fixas com recorrência semanal',
      'project.fleet.gallery.c9': 'Cadastro de motoristas e custos',
      'project.fleet.gallery.c10': 'Clientes e contratos',
      'project.fleet.gallery.c11': 'Relatórios — DRE simplificada',
      'project.fleet.gallery.c12': 'Ranking de lucro e manutenções',
      'project.fleet.gallery.c13': 'Feriados e dias úteis configuráveis',
      'project.fleet.stack.react': 'UI tipada com rotas e build otimizado',
      'project.fleet.stack.tailwind': 'Design system utilitário e responsivo',
      'project.fleet.stack.shadcn': 'Componentes acessíveis com Radix UI',
      'project.fleet.stack.query': 'Cache e sincronização de dados',
      'project.fleet.stack.recharts': 'Gráficos, rankings e visualizações',
      'project.fleet.stack.supabase': 'Auth, PostgreSQL, RLS e edge functions',
      'project.fleet.stack.pwa': 'Instalável em dispositivos móveis',
      'project.website.type': 'SPA · Site Institucional',
      'project.website.subtitle': '<strong>Site one-page</strong> para a Habilita — empresa de automação industrial, painéis elétricos e conformidade NR10/NR12. Apresenta serviços, portfólio de projetos, trajetória, processo de trabalho, tecnologias parceiras e formulário de contato em uma experiência visual premium.',
      'project.website.about.p1': 'O <strong>Habilita Website</strong> foi desenvolvido como vitrine digital da empresa — traduzindo credibilidade técnica em uma interface moderna, com narrativa clara para decisores industriais que buscam automação, painéis elétricos e engenharia de precisão.',
      'project.website.about.p2': 'Construído como SPA estática com React e Vite, o site prioriza performance, animações suaves e componentes reutilizáveis — cursor customizado, contadores animados, text reveal e cards interativos — sem backend, ideal para hospedagem estática.',
      'project.website.h1': 'Hero com slider de produtos e CTAs para serviços e contato',
      'project.website.h2': 'Contadores animados (+6 anos, 150+ projetos, 100% conformidade)',
      'project.website.h3': 'Cursor customizado e microinterações em toda a navegação',
      'project.website.f01.title': 'Hero interativo',
      'project.website.f01.desc': 'Slides alternando painéis elétricos, CLPs e visão explodida de quadros — com badge de engenharia, headline em destaque e botões de conversão.',
      'project.website.f02.title': 'Serviços em bento grid',
      'project.website.f02.desc': 'Cards para automação industrial, painéis elétricos, NR10/NR12 e integração de chão de fábrica — com ícones, descrições e links de aprofundamento.',
      'project.website.f03.title': 'Portfólio de projetos',
      'project.website.f03.desc': 'Grid de cases reais (NR12, QGBT, EtherCAT, SCADA) com tags técnicas, destaque editorial e estatísticas da empresa.',
      'project.website.f04.title': 'Trajetória & processo',
      'project.website.f04.desc': 'Timeline vertical com marcos de 2020 a 2024 e fluxo horizontal em 5 etapas — do diagnóstico técnico ao suporte contínuo.',
      'project.website.f05.title': 'Tecnologia & parceiros',
      'project.website.f05.desc': 'Seção de equipamentos e plataformas — OMRON, EtherCAT, Siemens — reforçando credibilidade com fabricantes líderes do mercado.',
      'project.website.f06.title': 'Contato & UX premium',
      'project.website.f06.desc': 'Formulário institucional, navbar flutuante com glassmorphism, scroll suave entre seções e animações de entrada no viewport.',
      'project.website.arch.p': 'A arquitetura segue o padrão de componentes por seção: cada bloco da página (Hero, Serviços, Projetos, etc.) é um componente React independente, estilizado com Tailwind e animações customizadas, compilado pelo Vite em assets estáticos prontos para deploy.',
      'project.website.flow.hero': 'Hero',
      'project.website.flow.serv': 'Serviços',
      'project.website.flow.proj': 'Projetos',
      'project.website.flow.traj': 'Trajetória',
      'project.website.flow.proc': 'Processo',
      'project.website.flow.tech': 'Tecnologia',
      'project.website.flow.cta': 'Contato',
      'project.website.gallery.c1': 'Hero — automação industrial no mais alto nível',
      'project.website.gallery.c2': 'Hero — painel elétrico aberto com componentes',
      'project.website.gallery.c3': 'Hero — CLP Mitsubishi programável',
      'project.website.gallery.c4': 'Serviços — automação e painéis elétricos',
      'project.website.gallery.c5': 'Projetos — portfólio com estatísticas',
      'project.website.gallery.c6': 'Trajetória — timeline de experiência',
      'project.website.gallery.c7': 'Processo — fluxo em 5 etapas',
      'project.website.gallery.c8': 'Tecnologia — OMRON, EtherCAT e Siemens',
      'project.website.gallery.c9': 'Contato — formulário institucional',
      'project.website.stack.react': 'SPA tipada com hot reload e build otimizado',
      'project.website.stack.tailwind': 'Design system utilitário e responsivo',
      'project.website.stack.vite': 'Bundler rápido com tree-shaking de assets',
      'project.website.stack.anim': 'Text reveal, contadores e transições de scroll',
      'project.website.stack.cursor': 'Hook useMousePosition e cursor circular customizado',
      'project.website.stack.components': 'BentoCard, CountUp, SpotlightCard reutilizáveis',
      'project.links.live': 'Ver site ao vivo ↗',
      'project.links.github': 'GitHub ↗',
      'project.cta.text': 'Quer ver mais projetos?',
      'project.cta.btn': 'Voltar ao portfólio'
    },

    'en-US': {
      'meta.title': 'Bruno Miotto',
      'meta.project.habilita.title': 'Habilita I.M.P. — Bruno Miotto',
      'meta.project.habilita.desc': 'Full-stack industrial monitoring platform (I.M.P.) for autoclaves — MQTT, Supabase, WebSocket, and tire traceability per production cycle.',
      'meta.project.fleet.title': 'FleetOps — Bruno Miotto',
      'meta.project.fleet.desc': 'Financial and operational management PWA for passenger transport companies — fleet, KPIs, income statement, and automated daily schedule.',
      'meta.project.website.title': 'Habilita Website — Bruno Miotto',
      'meta.project.website.desc': 'Institutional one-page React site for an industrial automation company — services, projects, company history, and contact with animations and custom cursor.',
      'aria.menu': 'Menu',
      'aria.lang': 'Language',
      'aria.lightbox.close': 'Close',
      'aria.lightbox.prev': 'Previous image',
      'aria.lightbox.next': 'Next image',

      'nav.home': 'home',
      'nav.skills': 'skills',
      'nav.experience': 'experience',
      'nav.portfolio': 'portfolio',
      'nav.journey': 'journey',
      'nav.library': 'library',
      'nav.contact': 'contact',

      'hero.status': 'Available for projects',
      'hero.role': 'Developer & Software Engineering Student',
      'hero.summary': '<strong>21 years old, from Caxias do Sul — RS, Brazil.</strong>',
      'hero.meta.company': 'Company',
      'hero.meta.college': 'University',
      'hero.meta.contact': 'Contact',
      'hero.cta.skills': 'View skills',
      'hero.cta.talk': 'Get in touch',

      'skills.title': 'Skills',
      'skills.sub': 'Tools, languages, and technologies I use every day.',
      'skills.work': 'Work',
      'skills.languages': 'Languages',
      'skills.tools': 'Tools & Integrations',
      'skills.ai': 'AI Tools',
      'skills.creation': 'Creation & Content',

      'skill.delphi.desc': 'System development and maintenance',
      'skill.sourcetree.desc': 'Version control and visual Git',
      'skill.firebird.desc': 'Relational database',
      'skill.html.desc': 'Semantic structure and markup',
      'skill.css.desc': 'Styling and responsive layouts',
      'skill.js.desc': 'Interactivity and front-end logic',
      'skill.ts.desc': 'Typed and scalable JavaScript',
      'skill.python.desc': 'Scripts, automation, and AI',
      'skill.c.desc': 'Low-level programming',
      'skill.delphi2.desc': 'Object-oriented language',
      'skill.n8n.desc': 'Workflow and process automation',
      'skill.supabase.desc': 'Backend as a service and database',
      'skill.rest.desc': 'API consumption and integration',
      'skill.webhooks.desc': 'Events and inter-system communication',
      'skill.claude.desc': 'Anthropic AI for coding and analysis',
      'skill.gemini.desc': 'Google AI for research and generation',
      'skill.cursor.desc': 'AI-powered code editor',
      'skill.lovable.desc': 'Full-stack app generation with AI',
      'skill.notebooklm.desc': 'Document research and synthesis',
      'skill.canva.desc': 'Design and social media content',
      'skill.imgedit.name': 'Image Editing',
      'skill.imgedit.desc': 'Photo editing and retouching',
      'skill.videoedit.name': 'Video Editing',
      'skill.videoedit.desc': 'Cutting, editing, and post-production',

      'xp.title': 'Experience & Education',
      'xp.sub': 'Where I work and study.',
      'xp.work': 'Work',
      'xp.grad': 'Degree',
      'xp.windel.role': 'Delphi Developer',
      'xp.windel.desc': 'System optimization and structural fixes in ERP management software for micro and small businesses. Caxias do Sul, RS.',
      'xp.ucs.role': 'Software Engineering',
      'xp.ucs.desc': 'Starting 2nd semester. Technical and theoretical training in development, software architecture, and systems engineering.',

      'portfolio.title': 'Portfolio',
      'portfolio.sub': 'Projects I built — from concept to delivery.',
      'portfolio.habilita.desc': 'Full-stack industrial monitoring platform for autoclaves — MQTT ingestion, Supabase persistence, REST API, real-time dashboards via WebSocket, and tire traceability per cycle.',
      'portfolio.fleet.desc': 'Financial and operational management PWA for passenger transport — fleet, drivers, routes, revenue, costs, income statement, and real-time KPIs.',
      'portfolio.website.desc': 'Institutional one-page site for an industrial automation company — animated hero, services, portfolio, company history, process, and contact with custom cursor.',
      'portfolio.cta': 'View project →',

      'journey.title': 'Academic Journey',
      'journey.sub': 'Software Engineering — UCS · studying since 2023/2',
      'journey.tab.done': 'Completed',
      'journey.tab.current': 'In progress',
      'journey.tab.next': 'Upcoming',

      'library.title': 'Library',
      'library.sub': 'Readings that shaped how I think.',
      'library.book1.comment': 'A straightforward guide on how to think and work as a developer. Changed how I approach code and software quality.',
      'library.book2.comment': 'Clear and visual. The best introduction to algorithms I have read. Essential for any programmer.',

      'footer.title': "Let's talk.",
      'footer.copy': '© 2026 Bruno Miotto — Caxias do Sul, RS',

      'project.back': '← Back to portfolio',
      'project.habilita.type': 'Full-stack · Industrial IoT',
      'project.habilita.subtitle': '<strong>Industrial Monitoring Platform</strong> — complete solution for monitoring autoclaves and production equipment, with MQTT data ingestion, PostgreSQL (Supabase) persistence, authenticated REST API, live dashboards via WebSocket, and tire traceability per production cycle.',
      'project.about': 'About',
      'project.about.p1': '<strong>Habilita I.M.P.</strong> solves a real shop-floor problem: data scattered across PLCs with no central visibility, reliable history, or real-time alerts. The platform receives telemetry from sensors and PLCs via an MQTT broker, processes it on a Node.js backend, persists to Supabase, and delivers a modern React interface for operators, supervisors, and administrators.',
      'project.about.p2': 'The system is <strong>multi-tenant</strong> — each factory/client operates in isolation with Row Level Security (RLS) — and evolved through four versions, from basic temperature and vibration readings to full tire traceability linked to each autoclave cycle.',
      'project.v20': 'Companies, users, and basic readings (temperature, vibration, status)',
      'project.v21': 'Individual machines, production cycles, alarm log, and expanded API',
      'project.v22': 'Pressures (envelope/air bag), motor, 6 valves, and optimized SQL views',
      'project.v23': 'Tire traceability per cycle with sequential <code>numero_ciclo</code> per machine',
      'project.features': 'Features',
      'project.f01.title': 'Multi-machine dashboard',
      'project.f01.desc': 'Overview with draggable cards, active cycles, live metrics, and navigation to each autoclave detail panel.',
      'project.f02.title': 'MQTT ingestion',
      'project.f02.desc': 'Backend subscribes to wildcard topics, validates machine and company, processes 4 message types: telemetry, cycle start/end, and manual alarms.',
      'project.f03.title': 'Cycle monitoring',
      'project.f03.desc': 'Sequential cycles per machine, real-time KPIs, ApexCharts graphs, tire code linking, and filterable history.',
      'project.f04.title': 'Smart alarms',
      'project.f04.desc': 'Automatic temperature and vibration limit detection with anti-spam cooldown (30s), priorities, and individual or batch acknowledgment.',
      'project.f05.title': 'Records and status',
      'project.f05.desc': 'Historical table with 14+ columns, period filters, motor and 6 valve status, and cards with dynamic threshold colors.',
      'project.f06.title': 'Multi-tenancy & auth',
      'project.f06.desc': 'JWT authentication via Supabase Auth, company isolation with RLS, roles (admin/user/viewer), and WebSocket rooms per tenant.',
      'project.arch': 'Architecture',
      'project.arch.p': 'The MQTT read flow follows 9 steps: the PLC publishes JSON to topic <code class="project-code" style="display:inline;padding:0.15rem 0.4rem;margin:0;font-size:0.8rem;">empresas/{empresa_id}/maquinas/{uuid}/{tipo}</code>, the backend validates, persists to <code>leituras_maquina</code>, checks limits, generates alarms if needed, and emits events via Socket.IO to room <code>empresa_{id}</code>.',
      'project.flow.plc': 'PLC / Sensors',
      'project.flow.mqtt': 'MQTT Broker',
      'project.flow.node': 'Node.js + Express',
      'project.flow.db': 'Supabase (PG)',
      'project.flow.socket': 'Socket.IO',
      'project.flow.react': 'React Dashboard',
      'project.gallery': 'Gallery',
      'project.gallery.sub': 'System screens in operation — click to enlarge.',
      'project.gallery.c1': 'Overview — machines in real time',
      'project.gallery.c2': 'Machine management and MQTT topics',
      'project.gallery.c3': 'Cycle monitoring with telemetry',
      'project.gallery.c4': 'Cycle telemetry chart',
      'project.gallery.c5': 'Tire records and cycle summary',
      'project.gallery.c6': 'Cycle history with filters',
      'project.gallery.c7': 'Reading records with color-coded status',
      'project.gallery.c8': 'Notifications and alerts panel',
      'project.gallery.c9': 'Temperature gauge and history',
      'project.gallery.c10': 'Vibration, production, and pressures',
      'project.stack': 'Stack',
      'project.stack.react': 'SPA frontend with routes and optimized build',
      'project.stack.mui': 'Components and premium dark theme',
      'project.stack.apex': 'Charts, gauges, and visual telemetry',
      'project.stack.express': 'REST API and HTTP server',
      'project.stack.socket': 'Bidirectional WebSocket per company',
      'project.stack.mqtt': 'Industrial data ingestion',
      'project.stack.supabase': 'Auth, RLS, persistence, and SQL views',
      'project.stack.motion': 'Animations and drag-and-drop on overview',
      'project.fleet.type': 'PWA · Transport Management',
      'project.fleet.subtitle': '<strong>Financial and operational management</strong> for passenger transport companies — buses, vans, charter, and regular routes. Centralizes fleet, drivers, clients, revenue, and costs with real-time KPIs, automated daily schedule, and income statement reports.',
      'project.fleet.about.p1': '<strong>FleetOps</strong> was built for owners of small and mid-sized transport companies who need to know, day by day, <strong>how much came in, how much went out, how much was left, and where the bottleneck is</strong> — without relying on scattered spreadsheets.',
      'project.fleet.about.p2': 'It is a mobile-first PWA that unifies registrations, operations, automations, and reports in a single panel, with smart alerts for CPK, expiring contracts, and unallocated drivers.',
      'project.fleet.h1': 'Daily schedule pre-filled — users only uncheck lines that did not run',
      'project.fleet.h2': 'Simplified income statement with filters and CSV/PDF export',
      'project.fleet.h3': 'Payroll and recurring billing automations via edge functions',
      'project.fleet.f01.title': 'Dashboard & KPIs',
      'project.fleet.f01.desc': 'Net profit highlighted, margin, CPK (cost per km), ROI, average ticket, and profitability ranking per vehicle with period filters.',
      'project.fleet.f02.title': 'Daily route schedule',
      'project.fleet.f02.desc': 'Expected routes calculated by recurrence, holidays, and business days. Automatic end-of-day closing persists revenue and updates odometer.',
      'project.fleet.f03.title': 'Operations — revenue and costs',
      'project.fleet.f03.desc': 'Trip, diesel, maintenance, payroll, and fee entries linked to vehicle, driver, route, and client.',
      'project.fleet.f04.title': 'Complete registrations',
      'project.fleet.f04.desc': 'Fleet, drivers, clients, and fixed routes with monthly projection, contracts, license data, service intervals, and ViaCEP integration.',
      'project.fleet.f05.title': 'Reports & income statement',
      'project.fleet.f05.desc': 'P&L statement, monthly evolution, rankings by vehicle/driver/client, cash flow, and operation heatmap.',
      'project.fleet.f06.title': 'PWA & smart alerts',
      'project.fleet.f06.desc': 'Installable on mobile, guided onboarding, notifications for high CPK, expiring contracts, and atypical costs.',
      'project.fleet.arch.p': 'The operational flow connects registrations, schedule, and entries to Supabase. Edge functions process daily route closing; TanStack Query keeps dashboards in sync; RLS ensures per-user data isolation.',
      'project.fleet.flow.cad': 'Registrations',
      'project.fleet.flow.agenda': 'Daily schedule',
      'project.fleet.flow.op': 'Operations',
      'project.fleet.flow.db': 'Supabase',
      'project.fleet.flow.kpi': 'KPIs & Alerts',
      'project.fleet.flow.rep': 'Reports',
      'project.fleet.gallery.c1': 'Dashboard — profit, CPK, and margin',
      'project.fleet.gallery.c2': 'Daily schedule with expected routes',
      'project.fleet.gallery.c3': 'Operations — trip revenue',
      'project.fleet.gallery.c4': 'Operations — cost entries',
      'project.fleet.gallery.c5': 'Financial projection for fixed routes',
      'project.fleet.gallery.c6': 'One-off trip registration',
      'project.fleet.gallery.c7': 'Fleet management with profit per vehicle',
      'project.fleet.gallery.c8': 'Fixed routes with weekly recurrence',
      'project.fleet.gallery.c9': 'Driver registration and costs',
      'project.fleet.gallery.c10': 'Clients and contracts',
      'project.fleet.gallery.c11': 'Reports — simplified income statement',
      'project.fleet.gallery.c12': 'Profit ranking and maintenance',
      'project.fleet.gallery.c13': 'Configurable holidays and business days',
      'project.fleet.stack.react': 'Typed UI with routes and optimized build',
      'project.fleet.stack.tailwind': 'Utility-first responsive design system',
      'project.fleet.stack.shadcn': 'Accessible components with Radix UI',
      'project.fleet.stack.query': 'Data cache and synchronization',
      'project.fleet.stack.recharts': 'Charts, rankings, and visualizations',
      'project.fleet.stack.supabase': 'Auth, PostgreSQL, RLS, and edge functions',
      'project.fleet.stack.pwa': 'Installable on mobile devices',
      'project.website.type': 'SPA · Institutional Site',
      'project.website.subtitle': '<strong>One-page site</strong> for Habilita — industrial automation, electrical panels, and NR10/NR12 compliance. Presents services, project portfolio, company history, work process, partner technologies, and contact form in a premium visual experience.',
      'project.website.about.p1': '<strong>Habilita Website</strong> was built as the company\'s digital showcase — translating technical credibility into a modern interface with a clear narrative for industrial decision-makers seeking automation, electrical panels, and precision engineering.',
      'project.website.about.p2': 'Built as a static SPA with React and Vite, the site prioritizes performance, smooth animations, and reusable components — custom cursor, animated counters, text reveal, and interactive cards — with no backend, ideal for static hosting.',
      'project.website.h1': 'Hero with product slider and CTAs for services and contact',
      'project.website.h2': 'Animated counters (+6 years, 150+ projects, 100% compliance)',
      'project.website.h3': 'Custom cursor and micro-interactions throughout navigation',
      'project.website.f01.title': 'Interactive hero',
      'project.website.f01.desc': 'Slides alternating electrical panels, PLCs, and exploded view of control cabinets — with engineering badge, highlighted headline, and conversion buttons.',
      'project.website.f02.title': 'Services in bento grid',
      'project.website.f02.desc': 'Cards for industrial automation, electrical panels, NR10/NR12, and shop-floor integration — with icons, descriptions, and learn-more links.',
      'project.website.f03.title': 'Project portfolio',
      'project.website.f03.desc': 'Grid of real cases (NR12, QGBT, EtherCAT, SCADA) with technical tags, editorial highlight, and company statistics.',
      'project.website.f04.title': 'History & process',
      'project.website.f04.desc': 'Vertical timeline with milestones from 2020 to 2024 and horizontal 5-step flow — from technical diagnosis to ongoing support.',
      'project.website.f05.title': 'Technology & partners',
      'project.website.f05.desc': 'Equipment and platforms section — OMRON, EtherCAT, Siemens — reinforcing credibility with leading industrial manufacturers.',
      'project.website.f06.title': 'Contact & premium UX',
      'project.website.f06.desc': 'Institutional contact form, floating glassmorphism navbar, smooth scroll between sections, and viewport entrance animations.',
      'project.website.arch.p': 'The architecture follows a section-per-component pattern: each page block (Hero, Services, Projects, etc.) is an independent React component, styled with Tailwind and custom animations, compiled by Vite into static assets ready for deployment.',
      'project.website.flow.hero': 'Hero',
      'project.website.flow.serv': 'Services',
      'project.website.flow.proj': 'Projects',
      'project.website.flow.traj': 'History',
      'project.website.flow.proc': 'Process',
      'project.website.flow.tech': 'Technology',
      'project.website.flow.cta': 'Contact',
      'project.website.gallery.c1': 'Hero — industrial automation at the highest level',
      'project.website.gallery.c2': 'Hero — open electrical panel with components',
      'project.website.gallery.c3': 'Hero — Mitsubishi programmable PLC',
      'project.website.gallery.c4': 'Services — automation and electrical panels',
      'project.website.gallery.c5': 'Projects — portfolio with statistics',
      'project.website.gallery.c6': 'History — experience timeline',
      'project.website.gallery.c7': 'Process — 5-step workflow',
      'project.website.gallery.c8': 'Technology — OMRON, EtherCAT, and Siemens',
      'project.website.gallery.c9': 'Contact — institutional form',
      'project.website.stack.react': 'Typed SPA with hot reload and optimized build',
      'project.website.stack.tailwind': 'Utility-first responsive design system',
      'project.website.stack.vite': 'Fast bundler with asset tree-shaking',
      'project.website.stack.anim': 'Text reveal, counters, and scroll transitions',
      'project.website.stack.cursor': 'useMousePosition hook and custom circular cursor',
      'project.website.stack.components': 'Reusable BentoCard, CountUp, SpotlightCard',
      'project.links.live': 'View live site ↗',
      'project.links.github': 'GitHub ↗',
      'project.cta.text': 'Want to see more projects?',
      'project.cta.btn': 'Back to portfolio'
    },

    'es': {
      'meta.title': 'Bruno Miotto',
      'meta.project.habilita.title': 'Habilita I.M.P. — Bruno Miotto',
      'meta.project.habilita.desc': 'Plataforma full-stack de monitoreo industrial (I.M.P.) para autoclaves — MQTT, Supabase, WebSocket y trazabilidad de neumáticos por ciclo.',
      'meta.project.fleet.title': 'FleetOps — Bruno Miotto',
      'meta.project.fleet.desc': 'PWA de gestión financiera y operativa para empresas de transporte de pasajeros — flota, KPIs, estado de resultados y agenda diaria automatizada.',
      'meta.project.website.title': 'Habilita Website — Bruno Miotto',
      'meta.project.website.desc': 'Sitio institucional one-page en React para empresa de automatización industrial — servicios, proyectos, trayectoria y contacto con animaciones y cursor personalizado.',
      'aria.menu': 'Menú',
      'aria.lang': 'Idioma',
      'aria.lightbox.close': 'Cerrar',
      'aria.lightbox.prev': 'Imagen anterior',
      'aria.lightbox.next': 'Siguiente imagen',

      'nav.home': 'inicio',
      'nav.skills': 'habilidades',
      'nav.experience': 'experiencia',
      'nav.portfolio': 'portafolio',
      'nav.journey': 'trayectoria',
      'nav.library': 'biblioteca',
      'nav.contact': 'contacto',

      'hero.status': 'Disponible para proyectos',
      'hero.role': 'Desarrollador y Estudiante de Ingeniería de Software',
      'hero.summary': '<strong>21 años, de Caxias do Sul — RS, Brasil.</strong>',
      'hero.meta.company': 'Empresa',
      'hero.meta.college': 'Universidad',
      'hero.meta.contact': 'Contacto',
      'hero.cta.skills': 'Ver habilidades',
      'hero.cta.talk': 'Hablemos',

      'skills.title': 'Habilidades',
      'skills.sub': 'Herramientas, lenguajes y tecnologías que forman parte de mi día a día.',
      'skills.work': 'Trabajo',
      'skills.languages': 'Lenguajes',
      'skills.tools': 'Herramientas e Integraciones',
      'skills.ai': 'Herramientas de IA',
      'skills.creation': 'Creación y Contenido',

      'skill.delphi.desc': 'Desarrollo y mantenimiento de sistemas',
      'skill.sourcetree.desc': 'Control de versiones y Git visual',
      'skill.firebird.desc': 'Base de datos relacional',
      'skill.html.desc': 'Estructura y marcado semántico',
      'skill.css.desc': 'Estilos y diseños responsivos',
      'skill.js.desc': 'Interactividad y lógica front-end',
      'skill.ts.desc': 'JavaScript tipado y escalable',
      'skill.python.desc': 'Scripts, automatización e IA',
      'skill.c.desc': 'Programación de bajo nivel',
      'skill.delphi2.desc': 'Lenguaje orientado a objetos',
      'skill.n8n.desc': 'Automatización de flujos y workflows',
      'skill.supabase.desc': 'Backend as a service y base de datos',
      'skill.rest.desc': 'Consumo e integración de APIs',
      'skill.webhooks.desc': 'Eventos y comunicación entre sistemas',
      'skill.claude.desc': 'IA de Anthropic, código y análisis',
      'skill.gemini.desc': 'IA de Google, investigación y generación',
      'skill.cursor.desc': 'Editor con IA integrada para código',
      'skill.lovable.desc': 'Generación de apps full-stack con IA',
      'skill.notebooklm.desc': 'Investigación y síntesis de documentos',
      'skill.canva.desc': 'Diseño y contenido para redes sociales',
      'skill.imgedit.name': 'Edición de Imágenes',
      'skill.imgedit.desc': 'Edición y retoque de fotos',
      'skill.videoedit.name': 'Edición de Videos',
      'skill.videoedit.desc': 'Corte, montaje y postproducción',

      'xp.title': 'Experiencia y Formación',
      'xp.sub': 'Dónde trabajo y estudio.',
      'xp.work': 'Trabajo',
      'xp.grad': 'Grado',
      'xp.windel.role': 'Desarrollador Delphi',
      'xp.windel.desc': 'Optimización de sistemas y correcciones estructurales en software ERP de gestión para micro y pequeñas empresas. Caxias do Sul, RS.',
      'xp.ucs.role': 'Ingeniería de Software',
      'xp.ucs.desc': 'Ingresando al 2º semestre. Formación técnica y teórica en desarrollo, arquitectura de software e ingeniería de sistemas.',

      'portfolio.title': 'Portafolio',
      'portfolio.sub': 'Proyectos que desarrollé — del concepto a la entrega.',
      'portfolio.habilita.desc': 'Plataforma full-stack de monitoreo industrial para autoclaves — ingesta MQTT, persistencia en Supabase, API REST, dashboards en tiempo real vía WebSocket y trazabilidad de neumáticos por ciclo.',
      'portfolio.fleet.desc': 'PWA de gestión financiera y operativa para transporte de pasajeros — flota, conductores, líneas, ingresos, costos, estado de resultados y KPIs en tiempo real.',
      'portfolio.website.desc': 'Sitio institucional one-page para empresa de automatización industrial — hero animado, servicios, portafolio, trayectoria, proceso y contacto con cursor personalizado.',
      'portfolio.cta': 'Ver proyecto →',

      'journey.title': 'Trayectoria Académica',
      'journey.sub': 'Ingeniería de Software — UCS · cursando desde 2023/2',
      'journey.tab.done': 'Completadas',
      'journey.tab.current': 'Cursando',
      'journey.tab.next': 'Próximas',

      'library.title': 'Biblioteca',
      'library.sub': 'Lecturas que moldearon mi forma de pensar.',
      'library.book1.comment': 'Una guía directa sobre cómo pensar y trabajar como desarrollador. Cambió mi forma de abordar el código y la calidad del software.',
      'library.book2.comment': 'Didáctico y visual. La mejor introducción a algoritmos que he leído. Esencial para cualquier programador.',

      'footer.title': 'Hablemos.',
      'footer.copy': '© 2026 Bruno Miotto — Caxias do Sul, RS',

      'project.back': '← Volver al portafolio',
      'project.habilita.type': 'Full-stack · IoT Industrial',
      'project.habilita.subtitle': '<strong>Industrial Monitoring Platform</strong> — solución completa para monitoreo de autoclaves y equipos de producción, con ingesta de datos vía MQTT, persistencia en PostgreSQL (Supabase), API REST autenticada, dashboards en vivo vía WebSocket y trazabilidad de neumáticos por ciclo de producción.',
      'project.about': 'Sobre',
      'project.about.p1': '<strong>Habilita I.M.P.</strong> resuelve un problema real de planta: datos dispersos en PLCs sin visibilidad central, historial confiable o alertas en tiempo real. La plataforma recibe telemetría de sensores y PLCs vía broker MQTT, procesa en el backend Node.js, persiste en Supabase y entrega una interfaz React moderna para operadores, supervisores y administradores.',
      'project.about.p2': 'El sistema es <strong>multi-tenant</strong> — cada fábrica/cliente opera de forma aislada con Row Level Security (RLS) — y evolucionó en cuatro versiones, desde la lectura básica de temperatura y vibración hasta la trazabilidad completa de neumáticos vinculados a cada ciclo de autoclave.',
      'project.v20': 'Empresas, usuarios y lecturas básicas (temperatura, vibración, estado)',
      'project.v21': 'Máquinas individuales, ciclos de producción, log de alarmas y API expandida',
      'project.v22': 'Presiones (envolvente/bolsa de aire), motor, 6 válvulas y vistas SQL optimizadas',
      'project.v23': 'Trazabilidad de neumáticos por ciclo con <code>numero_ciclo</code> secuencial por máquina',
      'project.features': 'Funcionalidades',
      'project.f01.title': 'Dashboard multi-máquina',
      'project.f01.desc': 'Vista general con tarjetas arrastrables (drag-and-drop), ciclos activos, métricas en vivo y navegación al panel detallado de cada autoclave.',
      'project.f02.title': 'Ingesta MQTT',
      'project.f02.desc': 'El backend se suscribe a tópicos wildcard, valida máquina y empresa, procesa 4 tipos de mensaje: telemetría, inicio/fin de ciclo y alarmas manuales.',
      'project.f03.title': 'Monitoreo de ciclos',
      'project.f03.desc': 'Ciclos secuenciales por máquina, KPIs en tiempo real, gráficos ApexCharts, vinculación de códigos de neumático e historial filtrable.',
      'project.f04.title': 'Alarmas inteligentes',
      'project.f04.desc': 'Detección automática de límites de temperatura y vibración con cooldown anti-spam (30s), prioridades y reconocimiento individual o en lote.',
      'project.f05.title': 'Registros y estado',
      'project.f05.desc': 'Tabla histórica con 14+ columnas, filtros por período, estado de motor y 6 válvulas, y tarjetas con colores dinámicos por umbral.',
      'project.f06.title': 'Multi-tenancy y auth',
      'project.f06.desc': 'Autenticación JWT vía Supabase Auth, aislamiento por empresa con RLS, roles (admin/user/viewer) y rooms WebSocket por tenant.',
      'project.arch': 'Arquitectura',
      'project.arch.p': 'El flujo de lectura MQTT sigue 9 etapas: el PLC publica JSON en el tópico <code class="project-code" style="display:inline;padding:0.15rem 0.4rem;margin:0;font-size:0.8rem;">empresas/{empresa_id}/maquinas/{uuid}/{tipo}</code>, el backend valida, persiste en <code>leituras_maquina</code>, verifica límites, genera alarmas si es necesario y emite eventos vía Socket.IO a la sala <code>empresa_{id}</code>.',
      'project.flow.plc': 'PLC / Sensores',
      'project.flow.mqtt': 'Broker MQTT',
      'project.flow.node': 'Node.js + Express',
      'project.flow.db': 'Supabase (PG)',
      'project.flow.socket': 'Socket.IO',
      'project.flow.react': 'React Dashboard',
      'project.gallery': 'Galería',
      'project.gallery.sub': 'Pantallas del sistema en operación — clic para ampliar.',
      'project.gallery.c1': 'Vista general — máquinas en tiempo real',
      'project.gallery.c2': 'Gestión de máquinas y tópicos MQTT',
      'project.gallery.c3': 'Monitoreo de ciclo con telemetría',
      'project.gallery.c4': 'Gráfico de telemetría del ciclo',
      'project.gallery.c5': 'Registro de neumáticos y resumen del ciclo',
      'project.gallery.c6': 'Historial de ciclos con filtros',
      'project.gallery.c7': 'Registros de lecturas con estado coloreado',
      'project.gallery.c8': 'Panel de notificaciones y alertas',
      'project.gallery.c9': 'Medidor e historial de temperatura',
      'project.gallery.c10': 'Vibración, producción y presiones',
      'project.stack': 'Stack',
      'project.stack.react': 'Frontend SPA con rutas y build optimizado',
      'project.stack.mui': 'Componentes y tema dark premium',
      'project.stack.apex': 'Gráficos, gauges y telemetría visual',
      'project.stack.express': 'API REST y servidor HTTP',
      'project.stack.socket': 'WebSocket bidireccional por empresa',
      'project.stack.mqtt': 'Ingesta de datos industriales',
      'project.stack.supabase': 'Auth, RLS, persistencia y vistas SQL',
      'project.stack.motion': 'Animaciones y drag-and-drop en el overview',
      'project.fleet.type': 'PWA · Gestión de Transporte',
      'project.fleet.subtitle': '<strong>Gestión financiera y operativa</strong> para empresas de transporte de pasajeros — ómnibus, vans, fletamento y líneas regulares. Centraliza flota, conductores, clientes, ingresos y costos con KPIs en tiempo real, agenda diaria automatizada e informes de resultados.',
      'project.fleet.about.p1': '<strong>FleetOps</strong> nació para dueños de pequeñas y medianas transportadoras que necesitan saber, día a día, <strong>cuánto entró, cuánto salió, cuánto quedó y dónde está el cuello de botella</strong> — sin depender de hojas de cálculo acumuladas.',
      'project.fleet.about.p2': 'Es un PWA mobile-first que unifica registros, operación, automatizaciones e informes en un solo panel, con alertas inteligentes de CPK, contratos por vencer y conductores sin asignación.',
      'project.fleet.h1': 'Agenda diaria ya completada — el usuario solo desmarca lo que no corrió',
      'project.fleet.h2': 'Estado de resultados simplificado con filtros y exportación a CSV y PDF',
      'project.fleet.h3': 'Automatizaciones de salarios y facturación recurrente vía edge functions',
      'project.fleet.f01.title': 'Dashboard y KPIs',
      'project.fleet.f01.desc': 'Utilidad neta destacada, margen, CPK (costo por km), ROI, ticket promedio y ranking de rentabilidad por vehículo con filtros de período.',
      'project.fleet.f02.title': 'Agenda diaria de líneas',
      'project.fleet.f02.desc': 'Líneas previstas calculadas por recurrencia, feriados y días hábiles. Cierre automático al final del día persiste ingresos y actualiza odómetro.',
      'project.fleet.f03.title': 'Operación — ingresos y costos',
      'project.fleet.f03.desc': 'Registros de viajes, diésel, mantenimiento, salarios y tasas vinculados a vehículo, conductor, línea y cliente.',
      'project.fleet.f04.title': 'Registros completos',
      'project.fleet.f04.desc': 'Flota, conductores, clientes y líneas fijas con proyección mensual, contratos, licencia, meta de revisión e integración ViaCEP.',
      'project.fleet.f05.title': 'Informes y estado de resultados',
      'project.fleet.f05.desc': 'Estado de resultados, evolución mensual, rankings por vehículo/conductor/cliente, flujo de caja y mapa de calor de operación.',
      'project.fleet.f06.title': 'PWA y alertas inteligentes',
      'project.fleet.f06.desc': 'Instalable en el móvil, onboarding guiado, notificaciones de CPK elevado, contratos por vencer y costos atípicos.',
      'project.fleet.arch.p': 'El flujo operativo conecta registros, agenda y lanzamientos a Supabase. Las edge functions procesan el cierre diario de líneas; TanStack Query mantiene los dashboards sincronizados; RLS garantiza el aislamiento de datos por usuario.',
      'project.fleet.flow.cad': 'Registros',
      'project.fleet.flow.agenda': 'Agenda diaria',
      'project.fleet.flow.op': 'Operación',
      'project.fleet.flow.db': 'Supabase',
      'project.fleet.flow.kpi': 'KPIs y Alertas',
      'project.fleet.flow.rep': 'Informes',
      'project.fleet.gallery.c1': 'Dashboard — utilidad, CPK y margen',
      'project.fleet.gallery.c2': 'Agenda del día con líneas previstas',
      'project.fleet.gallery.c3': 'Operación — ingresos de viajes',
      'project.fleet.gallery.c4': 'Operación — registro de costos',
      'project.fleet.gallery.c5': 'Proyección financiera de líneas fijas',
      'project.fleet.gallery.c6': 'Registro de viajes sueltos',
      'project.fleet.gallery.c7': 'Gestión de flota con utilidad por vehículo',
      'project.fleet.gallery.c8': 'Líneas fijas con recurrencia semanal',
      'project.fleet.gallery.c9': 'Registro de conductores y costos',
      'project.fleet.gallery.c10': 'Clientes y contratos',
      'project.fleet.gallery.c11': 'Informes — estado de resultados simplificado',
      'project.fleet.gallery.c12': 'Ranking de utilidad y mantenimientos',
      'project.fleet.gallery.c13': 'Feriados y días hábiles configurables',
      'project.fleet.stack.react': 'UI tipada con rutas y build optimizado',
      'project.fleet.stack.tailwind': 'Sistema de diseño utilitario y responsivo',
      'project.fleet.stack.shadcn': 'Componentes accesibles con Radix UI',
      'project.fleet.stack.query': 'Caché y sincronización de datos',
      'project.fleet.stack.recharts': 'Gráficos, rankings y visualizaciones',
      'project.fleet.stack.supabase': 'Auth, PostgreSQL, RLS y edge functions',
      'project.fleet.stack.pwa': 'Instalable en dispositivos móviles',
      'project.website.type': 'SPA · Sitio Institucional',
      'project.website.subtitle': '<strong>Sitio one-page</strong> para Habilita — empresa de automatización industrial, paneles eléctricos y conformidad NR10/NR12. Presenta servicios, portafolio de proyectos, trayectoria, proceso de trabajo, tecnologías asociadas y formulario de contacto en una experiencia visual premium.',
      'project.website.about.p1': 'El <strong>Habilita Website</strong> fue desarrollado como vitrina digital de la empresa — traduciendo credibilidad técnica en una interfaz moderna, con narrativa clara para decisores industriales que buscan automatización, paneles eléctricos e ingeniería de precisión.',
      'project.website.about.p2': 'Construido como SPA estática con React y Vite, el sitio prioriza rendimiento, animaciones suaves y componentes reutilizables — cursor personalizado, contadores animados, text reveal y tarjetas interactivas — sin backend, ideal para hosting estático.',
      'project.website.h1': 'Hero con slider de productos y CTAs para servicios y contacto',
      'project.website.h2': 'Contadores animados (+6 años, 150+ proyectos, 100% conformidad)',
      'project.website.h3': 'Cursor personalizado y microinteracciones en toda la navegación',
      'project.website.f01.title': 'Hero interactivo',
      'project.website.f01.desc': 'Slides alternando paneles eléctricos, CLPs y vista explodida de cuadros — con badge de ingeniería, titular destacado y botones de conversión.',
      'project.website.f02.title': 'Servicios en bento grid',
      'project.website.f02.desc': 'Tarjetas para automatización industrial, paneles eléctricos, NR10/NR12 e integración de planta — con iconos, descripciones y enlaces de profundización.',
      'project.website.f03.title': 'Portafolio de proyectos',
      'project.website.f03.desc': 'Grid de casos reales (NR12, QGBT, EtherCAT, SCADA) con etiquetas técnicas, destacado editorial y estadísticas de la empresa.',
      'project.website.f04.title': 'Trayectoria y proceso',
      'project.website.f04.desc': 'Timeline vertical con hitos de 2020 a 2024 y flujo horizontal en 5 etapas — del diagnóstico técnico al soporte continuo.',
      'project.website.f05.title': 'Tecnología y socios',
      'project.website.f05.desc': 'Sección de equipos y plataformas — OMRON, EtherCAT, Siemens — reforzando credibilidad con fabricantes líderes del mercado.',
      'project.website.f06.title': 'Contacto y UX premium',
      'project.website.f06.desc': 'Formulario institucional, navbar flotante con glassmorphism, scroll suave entre secciones y animaciones de entrada en viewport.',
      'project.website.arch.p': 'La arquitectura sigue el patrón de componentes por sección: cada bloque de la página (Hero, Servicios, Proyectos, etc.) es un componente React independiente, estilizado con Tailwind y animaciones personalizadas, compilado por Vite en assets estáticos listos para deploy.',
      'project.website.flow.hero': 'Hero',
      'project.website.flow.serv': 'Servicios',
      'project.website.flow.proj': 'Proyectos',
      'project.website.flow.traj': 'Trayectoria',
      'project.website.flow.proc': 'Proceso',
      'project.website.flow.tech': 'Tecnología',
      'project.website.flow.cta': 'Contacto',
      'project.website.gallery.c1': 'Hero — automatización industrial al más alto nivel',
      'project.website.gallery.c2': 'Hero — panel eléctrico abierto con componentes',
      'project.website.gallery.c3': 'Hero — CLP Mitsubishi programable',
      'project.website.gallery.c4': 'Servicios — automatización y paneles eléctricos',
      'project.website.gallery.c5': 'Proyectos — portafolio con estadísticas',
      'project.website.gallery.c6': 'Trayectoria — timeline de experiencia',
      'project.website.gallery.c7': 'Proceso — flujo en 5 etapas',
      'project.website.gallery.c8': 'Tecnología — OMRON, EtherCAT y Siemens',
      'project.website.gallery.c9': 'Contacto — formulario institucional',
      'project.website.stack.react': 'SPA tipada con hot reload y build optimizado',
      'project.website.stack.tailwind': 'Sistema de diseño utilitario y responsivo',
      'project.website.stack.vite': 'Bundler rápido con tree-shaking de assets',
      'project.website.stack.anim': 'Text reveal, contadores y transiciones de scroll',
      'project.website.stack.cursor': 'Hook useMousePosition y cursor circular personalizado',
      'project.website.stack.components': 'BentoCard, CountUp, SpotlightCard reutilizables',
      'project.links.live': 'Ver sitio en vivo ↗',
      'project.links.github': 'GitHub ↗',
      'project.cta.text': '¿Quieres ver más proyectos?',
      'project.cta.btn': 'Volver al portafolio'
    }
  };

  function normalizeLang(lang) {
    if (!lang) return DEFAULT_LANG;
    if (LANGS.includes(lang)) return lang;
    const lower = lang.toLowerCase();
    if (lower.startsWith('pt')) return 'pt-BR';
    if (lower.startsWith('en')) return 'en-US';
    if (lower.startsWith('es')) return 'es';
    return DEFAULT_LANG;
  }

  function getLang() {
    return normalizeLang(localStorage.getItem(STORAGE_KEY) || navigator.language || DEFAULT_LANG);
  }

  function t(key, lang) {
    const l = lang || getLang();
    return (strings[l] && strings[l][key]) || (strings[DEFAULT_LANG][key]) || key;
  }

  let currentLang = null;
  const LANG_EXIT_MS = 220;

  function applyContent(lang) {
    const current = normalizeLang(lang);
    document.documentElement.lang = current;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n, current);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml, current);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key, current));
      });
    });

    document.querySelectorAll('[data-i18n-caption]').forEach(el => {
      el.dataset.caption = t(el.dataset.i18nCaption, current);
    });

    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey) document.title = t(titleKey, current);

    const descKey = document.body.dataset.i18nDesc;
    if (descKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t(descKey, current));
    }

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const active = btn.dataset.lang === current;
      btn.classList.toggle('lang-switch__btn--active', active);
      btn.setAttribute('aria-pressed', active);
    });

    currentLang = current;
    updateLangPills();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
  }

  function apply(lang, animate) {
    const next = normalizeLang(lang);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!animate || reduced || next === currentLang) {
      applyContent(next);
      return;
    }

    document.body.classList.add('is-lang-switching');
    setTimeout(() => {
      applyContent(next);
      document.body.classList.remove('is-lang-switching');
    }, LANG_EXIT_MS);
  }

  function setLang(lang) {
    const normalized = normalizeLang(lang);
    if (normalized === currentLang) return;
    localStorage.setItem(STORAGE_KEY, normalized);
    apply(normalized, true);
  }

  function updateLangPills() {
    document.querySelectorAll('.lang-switch').forEach(switcher => {
      const pill = switcher.querySelector('.lang-switch__pill');
      const active = switcher.querySelector('.lang-switch__btn--active');
      if (!pill || !active) return;
      pill.style.width = active.offsetWidth + 'px';
      pill.style.transform = 'translateX(' + active.offsetLeft + 'px)';
    });
  }

  function initLangPills() {
    document.querySelectorAll('.lang-switch').forEach(switcher => {
      if (switcher.querySelector('.lang-switch__pill')) return;
      const pill = document.createElement('span');
      pill.className = 'lang-switch__pill';
      pill.setAttribute('aria-hidden', 'true');
      switcher.insertBefore(pill, switcher.firstChild);
    });
    updateLangPills();
    window.addEventListener('resize', updateLangPills, { passive: true });
  }

  function initLangSwitch() {
    document.querySelectorAll('.lang-switch').forEach(switcher => {
      switcher.querySelectorAll('.lang-switch__btn').forEach(btn => {
        btn.addEventListener('click', () => {
          setLang(btn.dataset.lang);
          const mobileMenu = document.getElementById('mobileMenu');
          const hamburger = document.getElementById('hamburger');
          if (mobileMenu && mobileMenu.classList.contains('is-open')) {
            mobileMenu.classList.remove('is-open');
            if (hamburger) hamburger.classList.remove('is-open');
            document.body.style.overflow = '';
          }
        });
      });
    });
  }

  window.I18N = { LANGS, DEFAULT_LANG, getLang, setLang, t, apply, initLangSwitch };

  document.addEventListener('DOMContentLoaded', () => {
    initLangPills();
    initLangSwitch();
    apply(getLang(), false);
  });
})();
