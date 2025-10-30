const translations = {
  en: {
    languageName: 'English',
    languageLabel: 'Language',
    nav: {
      brand: 'WhoisAutomations',
      items: [
        { label: 'Product', href: '#product' },
        { label: 'Automations', href: '#automations' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Templates', href: '#templates' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Resources', href: '#resources' }
      ],
      secondary: { label: 'Log in', href: '#cta' },
      primary: { label: 'Start for free', href: '#cta' }
    },
    hero: {
      badge: 'New · AI copilots for every scenario',
      eyebrow: 'AI workflow platform',
      title: 'Build, run, and scale automations with glassmorphism flair',
      description:
        'Design sophisticated scenarios with real-time collaboration, AI assistance, and an iOS-inspired interface that feels instantly familiar.',
      primaryCta: { label: 'Start building', href: '#product' },
      secondaryCta: { label: 'Watch product tour', href: '#resources' }
    },
    metrics: {
      label: 'Trusted by automation teams worldwide',
      stats: [
        { value: '500K+', label: 'makers orchestrate work with WhoisAutomations' },
        { value: '1,400+', label: 'ready-to-use integrations across every stack' },
        { value: '99.99%', label: 'global uptime keeping automations always on' }
      ]
    },
    logos: {
      title: 'Automation leaders building with us',
      items: ['Spotify', 'HubSpot', 'Typeform', 'Zendesk', 'Miro', 'Wise']
    },
    product: {
      id: 'product',
      eyebrow: 'Product',
      title: 'Design complex workflows without the complexity',
      description:
        'Visually map every data point with a drag-and-drop canvas, monitor executions live, and roll back with version history designed for scale.',
      features: [
        {
          title: 'Canvas builder',
          description: 'Snap together apps, routers, and data stores with pixel-perfect control and instant validation.'
        },
        {
          title: 'AI co-pilot',
          description: 'Generate steps, transformations, and error handling suggestions from natural language prompts.'
        },
        {
          title: 'Observability',
          description: 'Inspect executions, replay runs, and compare scenario versions with rich timelines.'
        }
      ],
      highlight: {
        title: 'Realtime execution timeline',
        description: 'Follow payloads across every node, debug faster, and share insights with teammates in one pane.',
        points: ['Graph view across nodes', 'Live payload diffing', 'Shareable debug snapshots']
      }
    },
    automations: {
      id: 'automations',
      eyebrow: 'Automations',
      title: 'Launch automations in minutes, not months',
      flows: [
        {
          title: 'Marketing nurture',
          steps: ['Capture leads from web forms', 'Score prospects with AI enrichment', 'Trigger personalised email and Slack updates']
        },
        {
          title: 'Revenue operations',
          steps: ['Sync deals across CRM and billing', 'Alert teams on forecast changes', 'Automate handoffs with smart approvals']
        },
        {
          title: 'Support escalation',
          steps: ['Prioritise tickets with sentiment analysis', 'Escalate issues to the right squad', 'Keep customers informed automatically']
        }
      ],
      caption: 'Every scenario can be triggered by schedules, webhooks, or 1,400+ app events.'
    },
    solutions: {
      id: 'solutions',
      eyebrow: 'Solutions for teams',
      title: 'Orchestrate every department from one platform',
      cards: [
        {
          title: 'Operations',
          description: 'Unify finance, HR, and IT processes with shared governance and reusable modules.',
          points: ['Automated onboarding journeys', 'Change management with approvals', 'Data hygiene and enrichment']
        },
        {
          title: 'Marketing',
          description: 'Launch multi-channel campaigns with hyper-personalised journeys powered by AI.',
          points: ['Segment audiences in real time', 'Optimise spend with performance loops', 'Coordinate content publishing']
        },
        {
          title: 'Product & Engineering',
          description: 'Connect release pipelines, incident response, and customer feedback into one command centre.',
          points: ['Sync roadmaps to delivery tools', 'Broadcast release notes automatically', 'Automate post-incident workflows']
        }
      ],
      cta: { label: 'See all solutions', href: '#cta' }
    },
    templates: {
      id: 'templates',
      eyebrow: 'Template library',
      title: 'Kick-start automations with curated blueprints',
      categories: [
        {
          name: 'Ecommerce growth',
          description: 'Recover abandoned carts, sync orders to finance, and surprise VIPs with loyalty moments.'
        },
        {
          name: 'Customer success',
          description: 'Keep CRM, helpdesk, and product usage in sync to surface expansion opportunities.'
        },
        {
          name: 'People ops',
          description: 'Automate onboarding, equipment requests, and performance review reminders across tools.'
        },
        {
          name: 'IT & security',
          description: 'Orchestrate access reviews, incident escalations, and automated provisioning safely.'
        }
      ],
      cta: { label: 'Browse template gallery', href: '#resources' }
    },
    integrations: {
      id: 'integrations',
      eyebrow: 'Integrations',
      title: 'Connect the tools your teams already use',
      description: '1,400+ connectors with OAuth, custom webhooks, and universal modules for any REST or GraphQL API.',
      categories: [
        { name: 'Marketing & CRM', apps: ['HubSpot', 'Salesforce', 'Mailchimp', 'Pipedrive'] },
        { name: 'Productivity', apps: ['Notion', 'Slack', 'Asana', 'ClickUp'] },
        { name: 'Data & Analytics', apps: ['BigQuery', 'Snowflake', 'Looker Studio', 'PostgreSQL'] },
        { name: 'Finance & Ops', apps: ['Stripe', 'NetSuite', 'Xero', 'QuickBooks'] }
      ],
      cta: { label: 'View all integrations', href: '#cta' }
    },
    testimonials: {
      id: 'customers',
      eyebrow: 'Customer stories',
      title: 'Teams ship faster with WhoisAutomations',
      quotes: [
        {
          quote:
            '“WhoisAutomations lets us prototype, launch, and iterate on automations in days instead of quarters. The visual timeline and AI suggestions are game changers for our distributed team.”',
          author: 'Lena F., Director of Automation, Aurora Labs'
        },
        {
          quote:
            '“We replaced six bespoke scripts with one governed platform. Compliance loves the audit trails and our ops team finally shares the same workspace.”',
          author: 'Martin S., Head of RevOps, Cloudsync'
        }
      ]
    },
    pricing: {
      id: 'pricing',
      eyebrow: 'Pricing',
      title: 'Plans that scale with your ambition',
      plans: [
        {
          name: 'Free',
          price: '€0',
          cadence: '/month',
          description: 'Build personal or proof-of-concept automations with community support.',
          features: ['2 active scenarios', '1,000 operations / month', 'AI prompts up to 20 / month'],
          cta: { label: 'Get started', href: '#cta' }
        },
        {
          name: 'Pro',
          price: '€49',
          cadence: '/month',
          description: 'Collaborate with your team, unlock premium apps, and run automations at scale.',
          features: ['Unlimited scenarios', 'Advanced scheduling & routers', 'Priority ticket support'],
          highlighted: true,
          cta: { label: 'Start trial', href: '#cta' }
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          cadence: '',
          description: 'Enterprise-grade security, governance, and dedicated enablement services.',
          features: ['SSO & SCIM provisioning', 'Dedicated success architect', 'Custom data residency'],
          cta: { label: 'Talk to sales', href: '#cta' }
        }
      ],
      footnote: 'All plans include unlimited viewers, audit logs, and access to 1,400+ integrations.'
    },
    resources: {
      id: 'resources',
      eyebrow: 'Resources',
      title: 'Grow your automation practice',
      items: [
        {
          eyebrow: 'Webinar',
          title: 'Automate customer onboarding with AI',
          description: 'Join our specialists to build a personalised onboarding journey from scratch.',
          cta: { label: 'Save your seat', href: '#cta' }
        },
        {
          eyebrow: 'Guide',
          title: 'Automation playbook for scaling teams',
          description: 'A 40-page strategy guide covering governance, measurement, and adoption.',
          cta: { label: 'Download guide', href: '#cta' }
        },
        {
          eyebrow: 'Community',
          title: 'Makers forum',
          description: 'Swap best practices, share scenario templates, and get feedback from peers.',
          cta: { label: 'Join the forum', href: '#cta' }
        }
      ]
    },
    cta: {
      id: 'cta',
      title: 'Automate every workflow your way',
      description: 'Start building with the visual editor, invite teammates, and let AI orchestrate the heavy lifting.',
      primaryCta: { label: 'Create free account', href: '#cta' },
      secondaryCta: { label: 'Contact sales', href: '#cta' }
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Overview', href: '#product' },
            { label: 'Automations', href: '#automations' },
            { label: 'Integrations', href: '#integrations' },
            { label: 'Pricing', href: '#pricing' }
          ]
        },
        {
          title: 'Solutions',
          links: [
            { label: 'Operations', href: '#solutions' },
            { label: 'Marketing', href: '#solutions' },
            { label: 'Product & Engineering', href: '#solutions' }
          ]
        },
        {
          title: 'Resources',
          links: [
            { label: 'Template gallery', href: '#templates' },
            { label: 'Webinars', href: '#resources' },
            { label: 'Community', href: '#resources' }
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '#cta' },
            { label: 'Careers', href: '#cta' },
            { label: 'Contact', href: '#cta' }
          ]
        }
      ],
      bottom: '© 2025 WhoisAutomations — Built with 💙 by whoisnrb'
    }
  },
  hu: {
    languageName: 'Magyar',
    languageLabel: 'Nyelv',
    nav: {
      brand: 'WhoisAutomations',
      items: [
        { label: 'Termék', href: '#product' },
        { label: 'Automatizálások', href: '#automations' },
        { label: 'Megoldások', href: '#solutions' },
        { label: 'Sablonok', href: '#templates' },
        { label: 'Integrációk', href: '#integrations' },
        { label: 'Árazás', href: '#pricing' },
        { label: 'Erőforrások', href: '#resources' }
      ],
      secondary: { label: 'Bejelentkezés', href: '#cta' },
      primary: { label: 'Indítás ingyen', href: '#cta' }
    },
    hero: {
      badge: 'Új · AI társ minden forgatókönyvhöz',
      eyebrow: 'AI munkafolyamat platform',
      title: 'Építs, futtass és skálázz automatizálásokat iOS stílusban',
      description:
        'Tervezd meg a legösszetettebb folyamatokat is valós idejű együttműködéssel, AI támogatással és ismerős, üveghatású felülettel.',
      primaryCta: { label: 'Építés indítása', href: '#product' },
      secondaryCta: { label: 'Termékbemutató', href: '#resources' }
    },
    metrics: {
      label: 'Világszerte megbíznak bennünk az automatizációs csapatok',
      stats: [
        { value: '500K+', label: 'készítő használja a WhoisAutomations platformot' },
        { value: '1 400+', label: 'azonnal elérhető integráció minden stackhez' },
        { value: '99,99%', label: 'rendelkezésre állás, hogy a folyamatok ne álljanak le' }
      ]
    },
    logos: {
      title: 'Automatizációs vezetők, akik velünk építenek',
      items: ['Spotify', 'HubSpot', 'Typeform', 'Zendesk', 'Miro', 'Wise']
    },
    product: {
      id: 'product',
      eyebrow: 'Termék',
      title: 'Komplex munkafolyamatok egyszerűen',
      description:
        'Vizualizáld az adatokat drag & drop felületen, kövesd az éles futásokat és állítsd vissza a korábbi verziókat pillanatok alatt.',
      features: [
        {
          title: 'Vászon alapú szerkesztő',
          description: 'Csatlakoztass alkalmazásokat, routereket és adattárakat precíz vezérléssel és azonnali validációval.'
        },
        {
          title: 'AI társ',
          description: 'Generálj lépéseket, transzformációkat és hibakezelést természetes nyelvű utasításokból.'
        },
        {
          title: 'Megfigyelhetőség',
          description: 'Vizsgáld a futásokat, játszd újra a folyamatokat és hasonlítsd össze a verziókat gazdag idővonalon.'
        }
      ],
      highlight: {
        title: 'Valós idejű végrehajtási idővonal',
        description: 'Kövesd a payloadokat minden csomóponton, hibakeress gyorsabban és oszd meg az insightokat a csapattal.',
        points: ['Csomópontok közötti grafikus nézet', 'Élő payload összehasonlítás', 'Megosztható hibakeresési pillanatképek']
      }
    },
    automations: {
      id: 'automations',
      eyebrow: 'Automatizálások',
      title: 'Percek alatt indítható automatizmusok',
      flows: [
        {
          title: 'Marketing nurturing',
          steps: ['Űrlapból érkező leadek rögzítése', 'Prospektus pontozása AI gazdagítással', 'Személyre szabott e-mail és Slack értesítések']
        },
        {
          title: 'Bevételi műveletek',
          steps: ['CRM és számlázás szinkronizálása', 'Értesítés az előrejelzések változásáról', 'Átadás automatizálása jóváhagyási folyamatokkal']
        },
        {
          title: 'Támogatási eszkaláció',
          steps: ['Jegyek priorizálása érzelemelemzéssel', 'Megfelelő csapat értesítése', 'Ügyfelek automatikus tájékoztatása']
        }
      ],
      caption: 'Minden forgatókönyv indítható ütemezéssel, webhookkal vagy 1 400+ alkalmazás eseményeivel.'
    },
    solutions: {
      id: 'solutions',
      eyebrow: 'Csapatmegoldások',
      title: 'Minden részleg egy platformon irányítható',
      cards: [
        {
          title: 'Operáció',
          description: 'Egyesítsd a pénzügy, HR és IT folyamatait megosztott irányítással és újrahasznosítható modulokkal.',
          points: ['Automatizált beléptetés', 'Változáskezelés jóváhagyásokkal', 'Adattisztítás és gazdagítás']
        },
        {
          title: 'Marketing',
          description: 'Indíts többcsatornás kampányokat hiper-személyre szabott utazásokkal és AI támogatással.',
          points: ['Valós idejű szegmentálás', 'Teljesítmény optimalizálás visszacsatolással', 'Tartalom publikálás összehangolása']
        },
        {
          title: 'Termék & Mérnökség',
          description: 'Kösd össze a release folyamatokat, incidenskezelést és ügyfél-visszajelzéseket egy vezérlőpultba.',
          points: ['Útiterv szinkronizálása delivery eszközökkel', 'Release jegyzetek automatikus kiküldése', 'Incidens utókövetések automatizálása']
        }
      ],
      cta: { label: 'Összes megoldás', href: '#cta' }
    },
    templates: {
      id: 'templates',
      eyebrow: 'Sablon könyvtár',
      title: 'Kezdj előre elkészített folyamatokkal',
      categories: [
        {
          name: 'E-kereskedelmi növekedés',
          description: 'Elhagyott kosarak visszanyerése, rendelések szinkronizálása és VIP ügyfelek meglepetése.'
        },
        {
          name: 'Ügyfél siker',
          description: 'Tartsd szinkronban a CRM-et, helpdesket és használati adatokat a bővülési lehetőségekhez.'
        },
        {
          name: 'People ops',
          description: 'Automatizáld a beléptetést, eszközigényeket és teljesítményértékelési emlékeztetőket.'
        },
        {
          name: 'IT & biztonság',
          description: 'Jogosultság ellenőrzések, incidens eszkaláció és jogosultság kiosztás biztonságosan.'
        }
      ],
      cta: { label: 'Sablonok böngészése', href: '#resources' }
    },
    integrations: {
      id: 'integrations',
      eyebrow: 'Integrációk',
      title: 'Kapcsold össze a már használt eszközöket',
      description: '1 400+ csatlakozó OAuth-tal, egyedi webhookkal és univerzális modulokkal bármely REST vagy GraphQL API-hoz.',
      categories: [
        { name: 'Marketing & CRM', apps: ['HubSpot', 'Salesforce', 'Mailchimp', 'Pipedrive'] },
        { name: 'Produktivitás', apps: ['Notion', 'Slack', 'Asana', 'ClickUp'] },
        { name: 'Adat & Analitika', apps: ['BigQuery', 'Snowflake', 'Looker Studio', 'PostgreSQL'] },
        { name: 'Pénzügy & Operáció', apps: ['Stripe', 'NetSuite', 'Xero', 'QuickBooks'] }
      ],
      cta: { label: 'Összes integráció', href: '#cta' }
    },
    testimonials: {
      id: 'customers',
      eyebrow: 'Ügyféltörténetek',
      title: 'Csapatok gyorsabban szállítanak a WhoisAutomations-szal',
      quotes: [
        {
          quote:
            '„A WhoisAutomations-szal napok alatt prototípust készítünk és iterálunk, nem negyedévek alatt. A vizuális idővonal és az AI javaslatok óriási előnyt jelentenek a távoli csapatunknak.”',
          author: 'Lena F., Automatizációs igazgató, Aurora Labs'
        },
        {
          quote:
            '„Hat egyedi scriptet váltottunk le egy szabályozott platformra. A megfelelőségi csapat imádja az audit naplókat, az operáció pedig végre közös munkateret használ.”',
          author: 'Martin S., RevOps vezető, Cloudsync'
        }
      ]
    },
    pricing: {
      id: 'pricing',
      eyebrow: 'Árazás',
      title: 'Csomagok, amelyekkel együtt nőhetsz',
      plans: [
        {
          name: 'Ingyenes',
          price: '0 €',
          cadence: '/hó',
          description: 'Egyéni vagy kísérleti automatizálások közösségi támogatással.',
          features: ['2 aktív forgatókönyv', '1 000 művelet / hó', '20 AI prompt havonta'],
          cta: { label: 'Kezdés', href: '#cta' }
        },
        {
          name: 'Pro',
          price: '49 €',
          cadence: '/hó',
          description: 'Csapatmunka, prémium alkalmazások és skálázható futtatás.',
          features: ['Korlátlan forgatókönyv', 'Fejlett ütemezés és routerek', 'Prioritásos támogatás'],
          highlighted: true,
          cta: { label: 'Próba indítása', href: '#cta' }
        },
        {
          name: 'Vállalati',
          price: 'Egyedi',
          cadence: '',
          description: 'Vállalati szintű biztonság, irányítás és dedikált támogatás.',
          features: ['SSO és SCIM', 'Dedikált sikermenedszer', 'Egyedi adatlokalizáció'],
          cta: { label: 'Kapcsolat értékesítéssel', href: '#cta' }
        }
      ],
      footnote: 'Minden csomag korlátlan megtekintőt, naplókat és 1 400+ integrációt tartalmaz.'
    },
    resources: {
      id: 'resources',
      eyebrow: 'Erőforrások',
      title: 'Fejleszd az automatizációs tudásod',
      items: [
        {
          eyebrow: 'Webinár',
          title: 'Ügyfél onboarding automatizálása AI-val',
          description: 'Csatlakozz szakértőinkhez és építs személyre szabott onboarding folyamatot nulláról.',
          cta: { label: 'Hely foglalása', href: '#cta' }
        },
        {
          eyebrow: 'Útmutató',
          title: 'Automatizációs playbook növekvő csapatoknak',
          description: '40 oldalas stratégiai anyag irányításról, mérésről és bevezetésről.',
          cta: { label: 'Útmutató letöltése', href: '#cta' }
        },
        {
          eyebrow: 'Közösség',
          title: 'Makers fórum',
          description: 'Oszd meg bevált módszereidet, sablonjaidat és kérj visszajelzést a közösségtől.',
          cta: { label: 'Csatlakozás a fórumhoz', href: '#cta' }
        }
      ]
    },
    cta: {
      id: 'cta',
      title: 'Automatizálj mindent a saját ritmusodban',
      description: 'Kezdj a vizuális szerkesztővel, hívd meg a csapatot és hagyd, hogy az AI végezze a nehéz munkát.',
      primaryCta: { label: 'Ingyenes fiók létrehozása', href: '#cta' },
      secondaryCta: { label: 'Kapcsolat értékesítéssel', href: '#cta' }
    },
    footer: {
      columns: [
        {
          title: 'Termék',
          links: [
            { label: 'Áttekintés', href: '#product' },
            { label: 'Automatizálások', href: '#automations' },
            { label: 'Integrációk', href: '#integrations' },
            { label: 'Árazás', href: '#pricing' }
          ]
        },
        {
          title: 'Megoldások',
          links: [
            { label: 'Operáció', href: '#solutions' },
            { label: 'Marketing', href: '#solutions' },
            { label: 'Termék & Mérnökség', href: '#solutions' }
          ]
        },
        {
          title: 'Erőforrások',
          links: [
            { label: 'Sablon könyvtár', href: '#templates' },
            { label: 'Webinárok', href: '#resources' },
            { label: 'Közösség', href: '#resources' }
          ]
        },
        {
          title: 'Cég',
          links: [
            { label: 'Rólunk', href: '#cta' },
            { label: 'Karrier', href: '#cta' },
            { label: 'Kapcsolat', href: '#cta' }
          ]
        }
      ],
      bottom: '© 2025 WhoisAutomations — Készítette 💙 whoisnrb'
    }
  },
  de: {
    languageName: 'Deutsch',
    languageLabel: 'Sprache',
    nav: {
      brand: 'WhoisAutomations',
      items: [
        { label: 'Produkt', href: '#product' },
        { label: 'Automationen', href: '#automations' },
        { label: 'Lösungen', href: '#solutions' },
        { label: 'Vorlagen', href: '#templates' },
        { label: 'Integrationen', href: '#integrations' },
        { label: 'Preise', href: '#pricing' },
        { label: 'Ressourcen', href: '#resources' }
      ],
      secondary: { label: 'Anmelden', href: '#cta' },
      primary: { label: 'Kostenlos starten', href: '#cta' }
    },
    hero: {
      badge: 'Neu · KI-Copilots für jedes Szenario',
      eyebrow: 'KI-Workflow-Plattform',
      title: 'Automationen im iOS-Look planen, ausführen und skalieren',
      description:
        'Entwirf anspruchsvolle Abläufe mit Echtzeit-Zusammenarbeit, KI-Unterstützung und einem vertrauten Glassmorphism-Interface.',
      primaryCta: { label: 'Jetzt bauen', href: '#product' },
      secondaryCta: { label: 'Produktdemo ansehen', href: '#resources' }
    },
    metrics: {
      label: 'Automationsteams weltweit vertrauen uns',
      stats: [
        { value: '500K+', label: 'Maker automatisieren mit WhoisAutomations' },
        { value: '1.400+', label: 'sofort nutzbare Integrationen für jeden Stack' },
        { value: '99,99%', label: 'Verfügbarkeit für unterbrechungsfreie Abläufe' }
      ]
    },
    logos: {
      title: 'Automation Leader, die mit uns bauen',
      items: ['Spotify', 'HubSpot', 'Typeform', 'Zendesk', 'Miro', 'Wise']
    },
    product: {
      id: 'product',
      eyebrow: 'Produkt',
      title: 'Komplexe Workflows ohne Komplexität gestalten',
      description:
        'Visualisiere jeden Datenpunkt per Drag-and-drop, überwache Ausführungen live und setze Versionen bei Bedarf zurück.',
      features: [
        {
          title: 'Canvas-Builder',
          description: 'Verbinde Apps, Router und Datenspeicher mit präziser Steuerung und sofortiger Validierung.'
        },
        {
          title: 'KI-Copilot',
          description: 'Erzeuge Schritte, Transformationen und Fehlerbehandlung aus natürlicher Sprache.'
        },
        {
          title: 'Observability',
          description: 'Analysiere Ausführungen, spiele Runs erneut ab und vergleiche Versionen auf einer detaillierten Zeitleiste.'
        }
      ],
      highlight: {
        title: 'Echtzeit-Ausführungszeitleiste',
        description: 'Verfolge Payloads durch jeden Knoten, debugge schneller und teile Erkenntnisse mit deinem Team.',
        points: ['Graph-Ansicht über alle Knoten', 'Live-Payload-Vergleich', 'Teilbare Debug-Snapshots']
      }
    },
    automations: {
      id: 'automations',
      eyebrow: 'Automationen',
      title: 'Automationen in Minuten statt Monaten starten',
      flows: [
        {
          title: 'Marketing Nurture',
          steps: ['Leads aus Formularen erfassen', 'Prospects mit KI anreichern', 'Personalisierte E-Mails und Slack-Updates versenden']
        },
        {
          title: 'Revenue Operations',
          steps: ['Deals zwischen CRM und Abrechnung synchronisieren', 'Teams bei Forecast-Änderungen informieren', 'Übergaben mit Freigaben automatisieren']
        },
        {
          title: 'Support-Eskalation',
          steps: ['Tickets mit Sentiment-Analyse priorisieren', 'An die richtige Squad eskalieren', 'Kunden automatisch informieren']
        }
      ],
      caption: 'Jedes Szenario kann per Zeitplan, Webhook oder 1.400+ App-Ereignissen ausgelöst werden.'
    },
    solutions: {
      id: 'solutions',
      eyebrow: 'Teamlösungen',
      title: 'Alle Abteilungen auf einer Plattform orchestrieren',
      cards: [
        {
          title: 'Operations',
          description: 'Vereine Finanz-, HR- und IT-Prozesse mit Governance und wiederverwendbaren Modulen.',
          points: ['Automatisiertes Onboarding', 'Change-Management mit Freigaben', 'Datenpflege und Anreicherung']
        },
        {
          title: 'Marketing',
          description: 'Starte Multichannel-Kampagnen mit hyperspezifischen Journeys und KI-Unterstützung.',
          points: ['Zielgruppen in Echtzeit segmentieren', 'Budget mit Feedback-Schleifen optimieren', 'Content-Publishing koordinieren']
        },
        {
          title: 'Produkt & Engineering',
          description: 'Verbinde Release-Pipelines, Incident Response und Kundenfeedback in einem Command Center.',
          points: ['Roadmaps mit Delivery-Tools synchronisieren', 'Release Notes automatisch ausspielen', 'Post-Incident-Workflows automatisieren']
        }
      ],
      cta: { label: 'Alle Lösungen ansehen', href: '#cta' }
    },
    templates: {
      id: 'templates',
      eyebrow: 'Vorlagenbibliothek',
      title: 'Starte mit kuratierten Blaupausen',
      categories: [
        {
          name: 'E-Commerce-Wachstum',
          description: 'Verlassene Warenkörbe zurückholen, Bestellungen synchronisieren und VIPs begeistern.'
        },
        {
          name: 'Customer Success',
          description: 'CRM, Helpdesk und Produktnutzung synchron halten, um Upsell-Chancen zu erkennen.'
        },
        {
          name: 'People Ops',
          description: 'Onboarding, Equipment-Anfragen und Review-Reminder automatisieren.'
        },
        {
          name: 'IT & Sicherheit',
          description: 'Zugriffsprüfungen, Incident-Eskalationen und Bereitstellungen sicher steuern.'
        }
      ],
      cta: { label: 'Vorlagen durchsuchen', href: '#resources' }
    },
    integrations: {
      id: 'integrations',
      eyebrow: 'Integrationen',
      title: 'Verbinde die Tools deiner Teams',
      description: '1.400+ Konnektoren mit OAuth, individuellen Webhooks und universellen Modulen für jede REST- oder GraphQL-API.',
      categories: [
        { name: 'Marketing & CRM', apps: ['HubSpot', 'Salesforce', 'Mailchimp', 'Pipedrive'] },
        { name: 'Produktivität', apps: ['Notion', 'Slack', 'Asana', 'ClickUp'] },
        { name: 'Daten & Analytics', apps: ['BigQuery', 'Snowflake', 'Looker Studio', 'PostgreSQL'] },
        { name: 'Finanzen & Betrieb', apps: ['Stripe', 'NetSuite', 'Xero', 'QuickBooks'] }
      ],
      cta: { label: 'Alle Integrationen', href: '#cta' }
    },
    testimonials: {
      id: 'customers',
      eyebrow: 'Kundengeschichten',
      title: 'Teams liefern schneller mit WhoisAutomations',
      quotes: [
        {
          quote:
            '„Mit WhoisAutomations erstellen und iterieren wir Automationen in wenigen Tagen statt in Quartalen. Die visuelle Zeitleiste und KI-Vorschläge sind ein Gamechanger für unser verteiltes Team.“',
          author: 'Lena F., Director of Automation, Aurora Labs'
        },
        {
          quote:
            '„Wir haben sechs individuelle Skripte durch eine Plattform ersetzt. Compliance liebt die Audit-Trails und unser Ops-Team teilt endlich denselben Workspace.“',
          author: 'Martin S., Head of RevOps, Cloudsync'
        }
      ]
    },
    pricing: {
      id: 'pricing',
      eyebrow: 'Preise',
      title: 'Pläne, die mit deinen Zielen wachsen',
      plans: [
        {
          name: 'Free',
          price: '0 €',
          cadence: '/Monat',
          description: 'Automationen für Einzelpersonen oder Proof-of-Concepts mit Community-Support.',
          features: ['2 aktive Szenarien', '1.000 Operationen / Monat', '20 KI-Prompts pro Monat'],
          cta: { label: 'Jetzt starten', href: '#cta' }
        },
        {
          name: 'Pro',
          price: '49 €',
          cadence: '/Monat',
          description: 'Im Team zusammenarbeiten, Premium-Apps nutzen und Automationen skalieren.',
          features: ['Unbegrenzte Szenarien', 'Erweiterte Zeitpläne & Router', 'Priorisierter Support'],
          highlighted: true,
          cta: { label: 'Test starten', href: '#cta' }
        },
        {
          name: 'Enterprise',
          price: 'Individuell',
          cadence: '',
          description: 'Enterprise-Sicherheit, Governance und dedizierte Betreuung.',
          features: ['SSO & SCIM', 'Dedizierter Success Architect', 'Individuelle Datenresidenz'],
          cta: { label: 'Vertrieb kontaktieren', href: '#cta' }
        }
      ],
      footnote: 'Alle Pläne enthalten unbegrenzte Viewer, Audit-Logs und Zugriff auf 1.400+ Integrationen.'
    },
    resources: {
      id: 'resources',
      eyebrow: 'Ressourcen',
      title: 'Baue deine Automationskompetenz aus',
      items: [
        {
          eyebrow: 'Webinar',
          title: 'Kunden-Onboarding mit KI automatisieren',
          description: 'Lerne von unseren Spezialisten, wie du einen personalisierten Onboarding-Flow aufsetzt.',
          cta: { label: 'Platz sichern', href: '#cta' }
        },
        {
          eyebrow: 'Guide',
          title: 'Automations-Playbook für wachsende Teams',
          description: '40-seitiger Strategieleitfaden zu Governance, Messung und Adoption.',
          cta: { label: 'Guide herunterladen', href: '#cta' }
        },
        {
          eyebrow: 'Community',
          title: 'Makers Forum',
          description: 'Tausche Best Practices aus, teile Szenarien und erhalte Feedback von Peers.',
          cta: { label: 'Dem Forum beitreten', href: '#cta' }
        }
      ]
    },
    cta: {
      id: 'cta',
      title: 'Automatisiere jeden Workflow auf deine Weise',
      description: 'Starte mit dem visuellen Editor, lade dein Team ein und lass die KI die Schwerarbeit erledigen.',
      primaryCta: { label: 'Kostenloses Konto erstellen', href: '#cta' },
      secondaryCta: { label: 'Vertrieb kontaktieren', href: '#cta' }
    },
    footer: {
      columns: [
        {
          title: 'Produkt',
          links: [
            { label: 'Überblick', href: '#product' },
            { label: 'Automationen', href: '#automations' },
            { label: 'Integrationen', href: '#integrations' },
            { label: 'Preise', href: '#pricing' }
          ]
        },
        {
          title: 'Lösungen',
          links: [
            { label: 'Operations', href: '#solutions' },
            { label: 'Marketing', href: '#solutions' },
            { label: 'Produkt & Engineering', href: '#solutions' }
          ]
        },
        {
          title: 'Ressourcen',
          links: [
            { label: 'Vorlagenbibliothek', href: '#templates' },
            { label: 'Webinare', href: '#resources' },
            { label: 'Community', href: '#resources' }
          ]
        },
        {
          title: 'Unternehmen',
          links: [
            { label: 'Über uns', href: '#cta' },
            { label: 'Karriere', href: '#cta' },
            { label: 'Kontakt', href: '#cta' }
          ]
        }
      ],
      bottom: '© 2025 WhoisAutomations — Entwickelt mit 💙 von whoisnrb'
    }
  },
  es: {
    languageName: 'Español',
    languageLabel: 'Idioma',
    nav: {
      brand: 'WhoisAutomations',
      items: [
        { label: 'Producto', href: '#product' },
        { label: 'Automatizaciones', href: '#automations' },
        { label: 'Soluciones', href: '#solutions' },
        { label: 'Plantillas', href: '#templates' },
        { label: 'Integraciones', href: '#integrations' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Recursos', href: '#resources' }
      ],
      secondary: { label: 'Iniciar sesión', href: '#cta' },
      primary: { label: 'Comenzar gratis', href: '#cta' }
    },
    hero: {
      badge: 'Nuevo · Copilotos de IA para cada escenario',
      eyebrow: 'Plataforma de flujos con IA',
      title: 'Crea, ejecuta y escala automatizaciones con estilo iOS',
      description:
        'Diseña procesos sofisticados con colaboración en tiempo real, asistencia de IA y una interfaz de glassmorphism familiar.',
      primaryCta: { label: 'Empieza a crear', href: '#product' },
      secondaryCta: { label: 'Ver tour del producto', href: '#resources' }
    },
    metrics: {
      label: 'Equipos de automatización en todo el mundo confían en nosotros',
      stats: [
        { value: '500K+', label: 'makers orquestan trabajo con WhoisAutomations' },
        { value: '1.400+', label: 'integraciones listas para usar en cada stack' },
        { value: '99,99%', label: 'disponibilidad global para automatizaciones siempre activas' }
      ]
    },
    logos: {
      title: 'Líderes en automatización que trabajan con nosotros',
      items: ['Spotify', 'HubSpot', 'Typeform', 'Zendesk', 'Miro', 'Wise']
    },
    product: {
      id: 'product',
      eyebrow: 'Producto',
      title: 'Diseña flujos complejos sin complicaciones',
      description:
        'Mapea cada dato visualmente, supervisa las ejecuciones en vivo y vuelve a versiones anteriores cuando lo necesites.',
      features: [
        {
          title: 'Constructor en lienzo',
          description: 'Conecta aplicaciones, routers y almacenes de datos con control preciso y validación instantánea.'
        },
        {
          title: 'Copiloto de IA',
          description: 'Genera pasos, transformaciones y manejo de errores a partir de instrucciones en lenguaje natural.'
        },
        {
          title: 'Observabilidad',
          description: 'Inspecciona ejecuciones, repite escenarios y compara versiones con líneas de tiempo ricas.'
        }
      ],
      highlight: {
        title: 'Cronología de ejecución en tiempo real',
        description: 'Sigue las cargas útiles en cada nodo, depura más rápido y comparte insights con tu equipo en un solo panel.',
        points: ['Vista gráfica entre nodos', 'Comparación de cargas en vivo', 'Instantáneas de depuración compartibles']
      }
    },
    automations: {
      id: 'automations',
      eyebrow: 'Automatizaciones',
      title: 'Lanza automatizaciones en minutos, no en meses',
      flows: [
        {
          title: 'Nutrición de marketing',
          steps: ['Captura leads de formularios web', 'Califica prospectos con enriquecimiento de IA', 'Activa campañas personalizadas y alertas en Slack']
        },
        {
          title: 'Operaciones de ingresos',
          steps: ['Sincroniza deals entre CRM y facturación', 'Alerta a los equipos ante cambios de forecast', 'Automatiza entregas con aprobaciones inteligentes']
        },
        {
          title: 'Escalamiento de soporte',
          steps: ['Prioriza tickets con análisis de sentimiento', 'Escala incidencias al escuadrón correcto', 'Mantén informados a los clientes automáticamente']
        }
      ],
      caption: 'Cada escenario puede iniciarse con horarios, webhooks o más de 1.400 eventos de apps.'
    },
    solutions: {
      id: 'solutions',
      eyebrow: 'Soluciones por equipo',
      title: 'Orquesta cada departamento desde una sola plataforma',
      cards: [
        {
          title: 'Operaciones',
          description: 'Unifica finanzas, RRHH e IT con gobernanza compartida y módulos reutilizables.',
          points: ['Onboarding automatizado', 'Gestión de cambios con aprobaciones', 'Higiene y enriquecimiento de datos']
        },
        {
          title: 'Marketing',
          description: 'Lanza campañas multicanal con recorridos hiperpersonalizados impulsados por IA.',
          points: ['Segmentación en tiempo real', 'Optimiza la inversión con bucles de rendimiento', 'Coordina la publicación de contenido']
        },
        {
          title: 'Producto e Ingeniería',
          description: 'Conecta lanzamientos, respuesta a incidentes y feedback de clientes en un centro de mando.',
          points: ['Sincroniza roadmaps con herramientas de entrega', 'Publica notas de versión automáticamente', 'Automatiza flujos post-incidente']
        }
      ],
      cta: { label: 'Ver todas las soluciones', href: '#cta' }
    },
    templates: {
      id: 'templates',
      eyebrow: 'Biblioteca de plantillas',
      title: 'Comienza con planos curados',
      categories: [
        {
          name: 'Crecimiento ecommerce',
          description: 'Recupera carritos abandonados, sincroniza pedidos y sorprende a tus VIPs.'
        },
        {
          name: 'Éxito del cliente',
          description: 'Mantén CRM, soporte y uso del producto alineados para detectar oportunidades.'
        },
        {
          name: 'People ops',
          description: 'Automatiza onboarding, solicitudes de equipos y recordatorios de evaluaciones.'
        },
        {
          name: 'IT y seguridad',
          description: 'Orquesta revisiones de acceso, escalamiento de incidentes y aprovisionamiento de forma segura.'
        }
      ],
      cta: { label: 'Explorar galería', href: '#resources' }
    },
    integrations: {
      id: 'integrations',
      eyebrow: 'Integraciones',
      title: 'Conecta las herramientas que ya usas',
      description: 'Más de 1.400 conectores con OAuth, webhooks personalizados y módulos universales para cualquier API REST o GraphQL.',
      categories: [
        { name: 'Marketing y CRM', apps: ['HubSpot', 'Salesforce', 'Mailchimp', 'Pipedrive'] },
        { name: 'Productividad', apps: ['Notion', 'Slack', 'Asana', 'ClickUp'] },
        { name: 'Datos y analítica', apps: ['BigQuery', 'Snowflake', 'Looker Studio', 'PostgreSQL'] },
        { name: 'Finanzas y operaciones', apps: ['Stripe', 'NetSuite', 'Xero', 'QuickBooks'] }
      ],
      cta: { label: 'Ver todas las integraciones', href: '#cta' }
    },
    testimonials: {
      id: 'customers',
      eyebrow: 'Historias de clientes',
      title: 'Los equipos entregan más rápido con WhoisAutomations',
      quotes: [
        {
          quote:
            '“Con WhoisAutomations prototipamos, lanzamos e iteramos automatizaciones en días, no en trimestres. La línea de tiempo visual y las sugerencias de IA cambiaron el juego para nuestro equipo distribuido.”',
          author: 'Lena F., Directora de Automatización, Aurora Labs'
        },
        {
          quote:
            '“Reemplazamos seis scripts a medida por una única plataforma gobernada. Cumplimiento adora las auditorías y operaciones comparte por fin el mismo espacio de trabajo.”',
          author: 'Martin S., Líder de RevOps, Cloudsync'
        }
      ]
    },
    pricing: {
      id: 'pricing',
      eyebrow: 'Precios',
      title: 'Planes que crecen con tus objetivos',
      plans: [
        {
          name: 'Gratis',
          price: '0 €',
          cadence: '/mes',
          description: 'Automatizaciones personales o pruebas de concepto con soporte comunitario.',
          features: ['2 escenarios activos', '1.000 operaciones / mes', '20 prompts de IA al mes'],
          cta: { label: 'Comenzar', href: '#cta' }
        },
        {
          name: 'Pro',
          price: '49 €',
          cadence: '/mes',
          description: 'Colabora con tu equipo, desbloquea apps premium y escala la ejecución.',
          features: ['Escenarios ilimitados', 'Enrutadores y programación avanzada', 'Soporte prioritario'],
          highlighted: true,
          cta: { label: 'Iniciar prueba', href: '#cta' }
        },
        {
          name: 'Enterprise',
          price: 'A medida',
          cadence: '',
          description: 'Seguridad, gobernanza y acompañamiento dedicados a nivel empresarial.',
          features: ['SSO y SCIM', 'Especialista dedicado', 'Residencia de datos personalizada'],
          cta: { label: 'Hablar con ventas', href: '#cta' }
        }
      ],
      footnote: 'Todos los planes incluyen espectadores ilimitados, registros de auditoría y acceso a más de 1.400 integraciones.'
    },
    resources: {
      id: 'resources',
      eyebrow: 'Recursos',
      title: 'Impulsa tu práctica de automatización',
      items: [
        {
          eyebrow: 'Webinar',
          title: 'Onboarding de clientes con IA',
          description: 'Únete a nuestros especialistas y crea un viaje de onboarding personalizado desde cero.',
          cta: { label: 'Reserva tu lugar', href: '#cta' }
        },
        {
          eyebrow: 'Guía',
          title: 'Playbook de automatización para escalar equipos',
          description: 'Guía estratégica de 40 páginas sobre gobierno, medición y adopción.',
          cta: { label: 'Descargar guía', href: '#cta' }
        },
        {
          eyebrow: 'Comunidad',
          title: 'Foro de makers',
          description: 'Comparte buenas prácticas, plantillas de escenarios y recibe feedback de pares.',
          cta: { label: 'Unirse al foro', href: '#cta' }
        }
      ]
    },
    cta: {
      id: 'cta',
      title: 'Automatiza cada flujo a tu manera',
      description: 'Comienza con el editor visual, invita a tu equipo y deja que la IA haga el trabajo pesado.',
      primaryCta: { label: 'Crear cuenta gratuita', href: '#cta' },
      secondaryCta: { label: 'Contactar ventas', href: '#cta' }
    },
    footer: {
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Resumen', href: '#product' },
            { label: 'Automatizaciones', href: '#automations' },
            { label: 'Integraciones', href: '#integrations' },
            { label: 'Precios', href: '#pricing' }
          ]
        },
        {
          title: 'Soluciones',
          links: [
            { label: 'Operaciones', href: '#solutions' },
            { label: 'Marketing', href: '#solutions' },
            { label: 'Producto e Ingeniería', href: '#solutions' }
          ]
        },
        {
          title: 'Recursos',
          links: [
            { label: 'Galería de plantillas', href: '#templates' },
            { label: 'Webinars', href: '#resources' },
            { label: 'Comunidad', href: '#resources' }
          ]
        },
        {
          title: 'Compañía',
          links: [
            { label: 'Sobre nosotros', href: '#cta' },
            { label: 'Carreras', href: '#cta' },
            { label: 'Contacto', href: '#cta' }
          ]
        }
      ],
      bottom: '© 2025 WhoisAutomations — Construido con 💙 por whoisnrb'
    }
  }
};

export default translations;
