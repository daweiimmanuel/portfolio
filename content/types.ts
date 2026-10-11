export type BuildStatus = 'live' | 'internal' | 'reference' | 'mvp';
export type ServiceId = 'assistant' | 'extraction' | 'rag' | 'workflow' | 'tools';
export type DemoId = 'order-email' | 'tenant-update' | 'security-questionnaire';

export interface Metric {
  label: string;
  value: string;
  qualifier?: string;
}

export interface Build {
  slug: string;
  published: boolean;
  featured?: boolean;
  status: BuildStatus;
  title: string;
  summary: string;
  role: string;
  builtFor: string;
  stack: string[];
  problem: string;
  whatIBuilt: string;
  howItWorks: string[];
  diagram: 'kos' | 'po' | 'rag' | 'sales' | 'pintas';
  metrics: Metric[];
  resultText?: string;
  forYourTeam: string;
  serviceId: ServiceId;
  downloads?: { label: string; href: string }[];
  images?: { src: string; alt: string; width: number; height: number }[];
  demoId?: DemoId;
}

export interface DemoField {
  label: string;
  value: string;
  source?: string;
  confidence?: number;
  status: 'auto' | 'review';
  reason?: string;
}

export interface DemoScenario {
  id: DemoId;
  tabLabel: string;
  input: string;
  inputNote?: string;
  records: { title: string; fields: DemoField[] }[];
  summaryLine?: string;
  assistantReply?: string;
  footnote: string;
  caseStudySlug: string;
}

export interface Service {
  id: ServiceId;
  name: string;
  what: string;
  send: string;
  get: string;
  price: { label: string; catalogUrl?: string };
  proofBuilds: string[];
  proofSection?: { label: string; href: string };
}
