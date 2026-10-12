import type { Build } from './types';

export const builds: Build[] = [
  {
    slug: 'ai-boarding-house-assistant',
    published: true,
    featured: true,
    // [TODO: confirm the system is in regular use; otherwise change status]
    status: 'live',
    title: 'AI assistant for a boarding house',
    summary:
      'Owners of a 15-room boarding house update tenant records by typing plain Indonesian into a chat.',
    role: 'Sole builder',
    builtFor: 'A family-run 15-room boarding house',
    stack: ['Claude API', 'Google Sheets', 'Google Apps Script', 'chat interface'],
    problem:
      'Tenant records lived in a spreadsheet. Keeping it current meant opening the sheet on a phone, finding the right row and editing cells by hand, so updates were slow and easy to skip. [TODO: confirm or rewrite in your own words]',
    whatIBuilt:
      'A chat interface on top of the existing Google Sheet. The owners type what happened in everyday Indonesian, for example "Kamar 3 ada penghuni baru, namanya Sari, mulai 1 November", and the assistant updates the right rows, then confirms back in the chat. The sheet stays the source of truth, so nothing about how they view their data had to change.',
    howItWorks: [
      'The owner types a message in a WhatsApp-style chat interface. [TODO: confirm WhatsApp-style web UI vs real WhatsApp integration]',
      "Apps Script sends the message and the sheet's structure to the Claude API.",
      'Claude returns a structured update: which room, which field, what new value.',
      'Apps Script checks the update against the sheet (the room exists, dates are valid) and writes it. [TODO: confirm this validation step matches the build]',
      'The assistant replies with a plain-language confirmation. If a message is ambiguous, it asks a clarifying question instead of writing. [TODO: confirm]',
    ],
    diagram: 'kos',
    metrics: [],
    resultText: '[TODO: one metric, e.g. updates handled per month or time saved per week]',
    forYourTeam:
      'Any team that runs on a spreadsheet can have the same thing: a chat front-end that reads and updates your sheet or database, with checks before every write.',
    serviceId: 'assistant',
    demoId: 'tenant-update',
  },
  {
    slug: 'po-email-extraction',
    published: true,
    status: 'internal',
    title: 'Order email extraction for an export sales team',
    summary:
      'Free-text customer order emails become structured order lines in Excel, with uncertain fields sent for review.',
    role: 'Designed and built',
    builtFor: 'The export sales team at a global pulp and paper manufacturer',
    stack: [
      'Power Automate',
      'AI Builder',
      'Outlook',
      'Excel',
      'SharePoint [TODO: confirm SharePoint]',
    ],
    problem:
      'Customer orders arrived as free-text emails in every format. Someone had to read each one and retype product, grammage, quantity, destination and dates into the order sheet.',
    whatIBuilt:
      'A Power Automate flow that picks up order emails, uses AI Builder to extract the order fields, and writes clean rows to an Excel table. Fields that come back uncertain, or that need a lookup like "same price as last order", are flagged for a person instead of guessed. [TODO: confirm the flagging behavior]',
    howItWorks: [
      'A new order email arrives in the order mailbox. [TODO: confirm the trigger]',
      'AI Builder extracts the order fields.',
      'The flow checks them: known product, valid dates, recognized quantity units.',
      'Clean rows are added to the Excel order table. Flagged rows go to a review tab.',
      'The team reviews only the flagged rows.',
    ],
    diagram: 'po',
    metrics: [],
    resultText: '[TODO: emails processed per week or hours saved per week]',
    forYourTeam:
      'If your team retypes emails, PDFs or invoices into a spreadsheet or ERP, this is the pattern: extract, check, write, and send exceptions to a person.',
    serviceId: 'extraction',
    demoId: 'order-email',
  },
  {
    slug: 'security-questionnaire-engine',
    published: true,
    status: 'reference',
    title: 'Security questionnaire engine',
    summary:
      "Drafts answers to security questionnaires from a company's own policy documents, cites sources, and routes sensitive questions to a person.",
    role: 'Designed and built',
    builtFor: 'A demo with a fictional manufacturer, Northbridge Manufacturing',
    stack: ['Python', 'Anthropic API', 'LanceDB'],
    problem:
      'Vendor security questionnaires (SIG Lite, CAIQ, SOC 2 follow-ups) ask the same questions in different words. Answering them means hunting through policies and copying text, and a wrong answer is a compliance risk.',
    whatIBuilt:
      "A retrieval pipeline that indexes a company's policies, drafts an answer to each question with citations to the exact source passage, scores its confidence, and applies rules that send sensitive topics, like incident history, to a person regardless of score.",
    howItWorks: [
      'Load the questionnaire and validate it against a schema.',
      'Check each question against sensitive-topic rules.',
      'Retrieve the most relevant policy passages from LanceDB.',
      'Claude drafts an answer from those passages only, with citations.',
      'Score confidence. High-confidence answers are auto-approved; the rest wait for review.',
      'Export the completed questionnaire.',
    ],
    diagram: 'rag',
    metrics: [
      {
        label: 'Processed',
        value: '47 questions in 38 minutes',
        qualifier: 'demo on synthetic data',
      },
      { label: 'Auto-approved', value: '87%', qualifier: 'demo on synthetic data' },
    ],
    forYourTeam:
      'The same pipeline handles any repetitive question set answered from documents: RFPs, compliance forms, internal policy questions.',
    serviceId: 'rag',
    downloads: [
      {
        label: 'Download the reference build (PDF)',
        href: '/builds/security-questionnaire-engine/Questionnaire_Automation_Demo.pdf',
      },
      { label: 'View the code', href: '[TODO: public repo URL, or remove this link]' },
    ],
    demoId: 'security-questionnaire',
  },
  {
    slug: 'sales-projection-pipeline',
    published: true,
    status: 'internal',
    title: 'Weekly sales projection pipeline',
    summary:
      'Weekly sales projections flow from a form into a shared Excel model and a Power BI tracker connected to SAP order intake.',
    role: 'Designed and built',
    builtFor: 'Specialty paper export sales across 10 regions',
    stack: [
      'Microsoft Forms',
      'Power Automate',
      'SharePoint Excel',
      'Power Query',
      'Power BI',
      'SAP data via QlikView',
    ],
    problem:
      'Weekly projections came in through scattered spreadsheets and emails in different formats, and had to be reconciled by hand against confirmed orders in SAP. [TODO: confirm or rewrite in your own words]',
    whatIBuilt:
      'A Microsoft Forms intake that feeds a SharePoint Excel table through Power Automate. The table is joined to SAP order intake data, normalized to containers, and shown in a weekly Power BI tracker comparing budget, order intake and actuals.',
    howItWorks: [
      'Sales reps submit weekly projections in Microsoft Forms.',
      'Power Automate writes each submission to a SharePoint Excel table.',
      'Power Query joins the projections with SAP order intake, normalized to containers.',
      'Power BI shows budget, order intake and actuals by region and product group.',
    ],
    diagram: 'sales',
    metrics: [],
    resultText: '[TODO: one result, e.g. reps or regions covered, or reconciliation time saved]',
    forYourTeam:
      'Any team collecting numbers from many people every week can replace the email-and-spreadsheet chase with a structured intake and a live dashboard.',
    serviceId: 'workflow',
  },
  {
    slug: 'pintas-mvp',
    published: true,
    status: 'mvp',
    title: 'Pintas cross-border settlement MVP',
    summary:
      'A founder-built MVP for B2B cross-border payments that settles in stablecoins between USD endpoints, for Indonesian exporters.',
    role: 'Founder: product and build',
    builtFor: 'Pintas, a startup I founded',
    stack: ['Next.js', 'Solana (Devnet)', '[TODO: confirm full stack]'],
    problem:
      'Indonesian exporters wait 3–5 days for SWIFT settlement on USD payments, which ties up working capital.',
    whatIBuilt:
      'An MVP of the settlement flow: USD in, stablecoin settlement, USD out. The stablecoin layer is invisible to both sides.',
    howItWorks: [
      'The buyer pays in USD through an on-ramp.',
      'Value settles on-chain in stablecoins.',
      'The exporter receives USD through an off-ramp.',
    ],
    diagram: 'pintas',
    metrics: [],
    resultText: '[TODO: shareable demo link, or remove this field]',
    forYourTeam:
      'I build product MVPs the same way I build internal tools: model the real flow first, then build the smallest version that proves it.',
    serviceId: 'tools',
  },
];
