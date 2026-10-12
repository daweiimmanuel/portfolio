import type { Service } from './types';

export const links = {
  upworkProfile: 'https://www.upwork.com/freelancers/~0193b0b901c6888ca7',
  email: 'david.immanuel.168@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-im-manuel/',
  github: 'https://github.com/daweiimmanuel',
  powerBiProfile: '[TODO: specialized profile URL]',
};

const services: Service[] = [
  {
    id: 'assistant',
    name: 'AI assistant on your data',
    what: 'A chat interface that reads and updates your Google Sheet or database in plain language, in English or Indonesian.',
    send: 'Your sheet and the 5–10 updates people make most often',
    get: 'A working assistant, checks before every write, handover doc',
    price: { label: '$500', catalogUrl: '[TODO: Catalog URL]' },
    proofBuilds: ['ai-boarding-house-assistant'],
  },
  {
    id: 'extraction',
    name: 'Email and document extraction',
    what: 'Free-text emails, POs, invoices or PDFs turned into clean rows in Excel, Google Sheets or SharePoint.',
    send: '20–50 sample documents',
    get: 'Extraction flow, review queue for uncertain fields, handover doc',
    price: { label: '$350', catalogUrl: '[TODO: Catalog URL]' },
    proofBuilds: ['po-email-extraction'],
  },
  {
    id: 'rag',
    name: 'Answers from your own documents',
    what: 'Draft answers to repetitive questions (questionnaires, RFPs, policy questions) with sources cited and sensitive topics routed to a person.',
    send: 'Your source documents and a sample question set',
    get: 'Retrieval pipeline, review workflow, run guide',
    price: { label: 'Custom quote' },
    proofBuilds: ['security-questionnaire-engine'],
  },
  {
    id: 'workflow',
    name: 'Workflow automation',
    what: 'One manual process mapped, automated and handed over: forms, approvals, file moves, notifications, data syncs. Power Automate, Apps Script or Python.',
    send: 'A walkthrough of the process as it runs today',
    get: 'The automation, a process map, handover doc',
    price: { label: '$600', catalogUrl: '[TODO: Catalog URL]' },
    proofBuilds: ['sales-projection-pipeline'],
  },
  {
    id: 'tools',
    name: 'Internal tools and reporting',
    what: 'Small web apps and dashboards on top of your data: Next.js front-ends, Power BI reports on SAP and ERP data.',
    send: 'What decisions the tool needs to support',
    get: 'A working app or report and handover doc',
    price: { label: 'Custom quote' },
    proofBuilds: ['pintas-mvp'],
    proofSection: { label: 'Data and reporting', href: '/#data' },
  },
];

export const site = {
  person: { name: 'David Immanuel', jobTitle: 'AI Automation Engineer', locality: 'Jakarta' },

  seo: {
    title: 'David Immanuel | AI Automation Engineer for Operations',
    description:
      'I build AI assistants, email and document extraction, and internal tools for operations teams. Based in Jakarta, working through Upwork.',
    siteUrl: 'https://david-portfolio-orcin-five.vercel.app',
    ogImage: '/og.png',
    caseStudyTitleSuffix: 'David Immanuel',
  },

  cta: { label: 'Hire me on Upwork' },

  nav: {
    home: 'David Immanuel',
    items: [
      { label: 'Builds', href: '/#builds' },
      { label: 'Services', href: '/#services' },
      { label: 'How I work', href: '/#how-i-work' },
      { label: 'Background', href: '/#background' },
    ],
  },

  hero: {
    h1: 'I automate the operations work your team still does by hand.',
    subline:
      'AI assistants, email and document extraction, and internal tools, built by someone who has run the process, from SAP order desks to a 15-room boarding house.',
    secondaryLink: { label: 'See the builds', href: '#builds' },
    note: 'Based in Jakarta (GMT+7). Fixed-scope milestones through Upwork.',
  },

  buildsSection: {
    heading: 'Builds',
    intro:
      "Systems I've built and run. Employer work is anonymized, and reference builds are labeled as such.",
    readCaseStudy: 'Read the case study',
    statusLabels: {
      live: 'Live system',
      internal: 'Internal tool (anonymized)',
      reference: 'Reference build',
      mvp: 'Founder MVP',
    },
  },

  servicesSection: {
    heading: 'What I build',
    intro: 'Fixed-scope work through Upwork. Prices match my Upwork Project Catalog.',
    columns: {
      send: 'You send me',
      get: 'You get',
      startingAt: 'Starting at',
      proof: 'Proof',
    },
    services,
  },

  process: {
    heading: 'How a project runs',
    steps: [
      {
        title: 'Map',
        body: 'I document how the work happens today, step by step, and we agree which step to automate first. You see the map before I write code.',
      },
      {
        title: 'Prototype',
        body: 'In the first milestone you get a working version on your real data, or a safe copy of it.',
      },
      {
        title: 'Build with a review loop',
        body: "Confidence thresholds, review queues and logs go in from the start, so a person checks anything the system isn't sure about.",
      },
      {
        title: 'Handover',
        body: 'Documentation and a walkthrough recording so your team can run and adjust it without me. The support window is agreed up front.',
      },
    ],
  },

  dataReporting: {
    heading: 'Data and reporting',
    intro: 'Automation runs on clean data. I also build Power BI and SAP reporting.',
    items: [
      {
        title: 'PPV and productivity dashboard (reference build)',
        body: 'Purchase price variance and productivity for a fictional four-plant manufacturer, with GR/IR variance breakdown and metals exposure.',
        download: {
          label: 'Download (PDF)',
          href: '/builds/data/PPV_Dashboard_Reference_Build.pdf',
        },
      },
      {
        title: 'Weekly sales projection tracker',
        href: '/builds/sales-projection-pipeline',
      },
    ],
    profileLink: { label: 'My Power BI and SAP profile on Upwork', href: links.powerBiProfile },
  },

  background: {
    heading: 'Background',
    paragraphs: [
      "I work in commercial excellence at Asia Pulp & Paper (Sinarmas Group) in the Specialty Paper business. I've run demand planning and export sales operations across 10 regions on SAP, QlikView and Power BI, and built the internal tools shown above.",
      "Before that I ran special projects in PermataBank's Digital Business Division, including a redesign of mobile banking switching costs that cut them by 98%. I started out implementing enterprise software at IBM.",
      'BSc Computer Science, Bina Nusantara University. MBA, Prasetiya Mulya University (Top 5 graduate).',
    ],
    toolGroups: [
      {
        label: 'AI',
        items: ['Claude and the Anthropic API', 'Microsoft AI Builder', 'retrieval with LanceDB'],
      },
      { label: 'Automation', items: ['Power Automate', 'Google Apps Script', 'Python'] },
      { label: 'Apps', items: ['Next.js', 'React', 'Recharts'] },
      { label: 'Data', items: ['SAP', 'Power BI', 'Power Query', 'QlikView', 'Excel'] },
    ],
    // [TODO: supply /public/david.jpg, or remove the image slot]
    headshot: null as { src: string; alt: string } | null,
  },

  footer: {
    location:
      'Based in Jakarta (GMT+7). Working hours overlap with APAC, European mornings and US Eastern mornings.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },

  notFound: { message: 'Page not found', homeLink: 'Back to home' },

  ui: {
    demo: {
      tabsLabel: 'Demo examples',
      input: 'Input',
      output: 'Output',
      columns: { field: 'Field', value: 'Value', confidence: 'Confidence', status: 'Status' },
      autoFilled: 'Auto-filled',
      needsReview: 'Needs review',
      howThisWorks: 'How this works',
    },
    caseStudy: {
      allBuilds: 'All builds',
      atAGlance: 'At a glance',
      glance: {
        role: 'Role',
        status: 'Status',
        builtFor: 'Built for',
        stack: 'Stack',
        result: 'Result',
      },
      sections: {
        problem: 'The problem',
        whatIBuilt: 'What I built',
        howItWorks: 'How it works',
        result: 'Result',
        forYourTeam: 'What this looks like for your team',
        downloads: 'Downloads',
      },
      bottomCta: 'Want this for your team?',
      catalogLink: 'Project Catalog',
      previousBuild: 'Previous build',
      nextBuild: 'Next build',
    },
  },
} as const;
