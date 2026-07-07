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
      'project.cta.text': 'Quer ver mais projetos?',
      'project.cta.btn': 'Voltar ao portfólio'
    },

    'en-US': {
      'meta.title': 'Bruno Miotto',
      'meta.project.habilita.title': 'Habilita I.M.P. — Bruno Miotto',
      'meta.project.habilita.desc': 'Full-stack industrial monitoring platform (I.M.P.) for autoclaves — MQTT, Supabase, WebSocket, and tire traceability per production cycle.',
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
      'project.cta.text': 'Want to see more projects?',
      'project.cta.btn': 'Back to portfolio'
    },

    'es': {
      'meta.title': 'Bruno Miotto',
      'meta.project.habilita.title': 'Habilita I.M.P. — Bruno Miotto',
      'meta.project.habilita.desc': 'Plataforma full-stack de monitoreo industrial (I.M.P.) para autoclaves — MQTT, Supabase, WebSocket y trazabilidad de neumáticos por ciclo.',
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
