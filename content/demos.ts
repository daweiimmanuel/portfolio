import type { DemoScenario } from './types';

const illustrative = 'Illustrative data. Fictional company and people.';

export const demos: DemoScenario[] = [
  {
    id: 'order-email',
    tabLabel: 'Order email',
    input: `Hi Rina,

Please book 3 x 40HC of MG kraft 30 gsm, 1,040 mm reels, for Jeddah.
Customer wants ETD in the first half of December. Same price as last order.
PO JD-2291 attached.

Thanks,
Omar`,
    records: [
      {
        title: 'Order line',
        fields: [
          {
            label: 'PO number',
            value: 'JD-2291',
            source: 'JD-2291',
            confidence: 0.98,
            status: 'auto',
          },
          {
            label: 'Product',
            value: 'MG kraft',
            source: 'MG kraft',
            confidence: 0.96,
            status: 'auto',
          },
          {
            label: 'Grammage',
            value: '30 gsm',
            source: '30 gsm',
            confidence: 0.97,
            status: 'auto',
          },
          {
            label: 'Reel width',
            value: '1,040 mm',
            source: '1,040 mm',
            confidence: 0.94,
            status: 'auto',
          },
          {
            label: 'Quantity',
            value: '3 × 40HC',
            source: '3 x 40HC',
            confidence: 0.96,
            status: 'auto',
          },
          {
            label: 'Destination',
            value: 'Jeddah',
            source: 'Jeddah',
            confidence: 0.97,
            status: 'auto',
          },
          {
            label: 'Requested ETD',
            value: '1–15 Dec 2026',
            source: 'first half of December',
            confidence: 0.78,
            status: 'review',
            reason: 'Date range, not a date. Confirm with the customer.',
          },
          {
            label: 'Price',
            value: '(blank)',
            source: 'Same price as last order',
            status: 'review',
            reason: 'Needs a lookup of the last order price.',
          },
        ],
      },
    ],
    summaryLine: '6 fields filled, 2 sent for review',
    footnote: illustrative,
    caseStudySlug: 'po-email-extraction',
  },
  {
    id: 'tenant-update',
    tabLabel: 'Tenant update',
    input:
      'Kamar 3 ada penghuni baru, namanya Sari, mulai 1 November. Kamar 8 kosong mulai akhir bulan ini.',
    inputNote:
      'Room 3 has a new tenant named Sari, starting 1 November. Room 8 is vacant from the end of this month.',
    records: [
      {
        title: 'Room 3',
        fields: [
          { label: 'Tenant', value: 'Sari', source: 'Sari', status: 'auto' },
          { label: 'Status', value: 'Occupied', source: 'penghuni baru', status: 'auto' },
          {
            label: 'Move-in date',
            value: '1 Nov 2026',
            source: 'mulai 1 November',
            status: 'auto',
          },
        ],
      },
      {
        title: 'Room 8',
        fields: [
          { label: 'Status', value: 'Vacant', source: 'kosong', status: 'auto' },
          { label: 'Vacant from', value: '31 Oct 2026', source: 'akhir bulan ini', status: 'auto' },
        ],
      },
    ],
    assistantReply:
      'Siap, sudah dicatat. Kamar 3: Sari, mulai 1 Nov. Kamar 8: kosong mulai 31 Okt.',
    footnote: illustrative,
    caseStudySlug: 'ai-boarding-house-assistant',
  },
  {
    id: 'security-questionnaire',
    tabLabel: 'Security questionnaire',
    input: `Q14. Is customer data encrypted at rest? If yes, state the standard used and how keys are managed.

Q31. Has your organization experienced a data breach in the last 24 months?`,
    records: [
      {
        title: 'Q14',
        fields: [
          {
            label: 'Answer',
            value:
              "Yes. Customer data is encrypted at rest with AES-256. Keys are held in the cloud provider's key management service and rotated every 12 months.",
            source: 'encrypted at rest',
            confidence: 0.92,
            status: 'auto',
          },
          {
            label: 'Standard',
            value: 'AES-256',
            source: 'standard used',
            confidence: 0.92,
            status: 'auto',
          },
          {
            label: 'Key management',
            value: 'Cloud KMS, rotated every 12 months',
            source: 'how keys are managed',
            confidence: 0.92,
            status: 'auto',
          },
          {
            label: 'Sources',
            value:
              'Information Security Policy v3.2, section 4.1; Cloud Architecture Overview, page 6',
            status: 'auto',
          },
        ],
      },
      {
        title: 'Q31',
        fields: [
          {
            label: 'Answer',
            value: '(not drafted)',
            source: 'data breach',
            status: 'review',
            reason: 'Sensitive topic: incident history. Always answered by a person.',
          },
        ],
      },
    ],
    footnote:
      'Fictional company (Northbridge Manufacturing). Policies and answers are illustrative.',
    caseStudySlug: 'security-questionnaire-engine',
  },
];
