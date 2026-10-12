// content.js
// Single source of truth for all copy, metrics, and project data.
// Non-developers can edit this file directly. Keep the shape; change the values.

window.PORTFOLIO_CONTENT = {
  person: {
    name: "David Immanuel",
    location: "Jakarta, Indonesia",
    initials: "DI",
    headline: "Operator and builder. RevOps, product, and fintech across nine-figure books.",
    sub:
      "Demand Planner & Business Specialist at Asia Pulp & Paper's Specialty Paper BU. Building Pintas — a stablecoin settlement rail for Indonesian exporters.",
    email: "david.immanuel@example.com",
    linkedin: "https://www.linkedin.com/in/david-im-manuel/",
    github: "https://github.com/",
    resumeUrl: "#",
  },

  // Hero ticker — strictly metrics from the brief. No invented numbers.
  metrics: [
    { value: "9-figure", unit: "USD", label: "export book under plan" },
    { value: "10", unit: "regions", label: "global market coverage" },
    { value: "98%", unit: "reduction", label: "switching-cost framework, PermataBank" },
    { value: "1", unit: "rail", label: "founder-track: Pintas settlement" },
  ],

  about: [
    "I run demand planning for a nine-figure USD export book across ten regions at Asia Pulp & Paper's Specialty Paper business unit, reporting to the Sales Director. Day to day I sit between commercial, supply, and finance — translating market signal into commitments the mill can ship against.",
    "Before APP I was at PermataBank inside the Digital Business division, where I designed a switching-cost elimination framework for mobile banking that drove a 98% cost reduction and double-digit billion IDR in OPEX savings. Earlier I implemented enterprise software at IBM Indonesia. CS undergrad at Bina Nusantara, MBA at Prasetiya Mulya (Top 5, GPA 3.74) — the dual training is the edge I keep leaning on.",
    "On the side I'm building Pintas: a B2B cross-border settlement rail using stablecoin infrastructure to replace the SWIFT leg between USD endpoints for Indonesian exporters. Born in Semarang, based in Jakarta.",
  ],

  experience: [
    {
      id: "app",
      company: "Asia Pulp & Paper (Sinarmas Group)",
      role: "Demand Planner & Business Specialist — Specialty Paper BU",
      period: "Present",
      location: "Jakarta",
      scope: "Nine-figure USD export book across 10 global regions. Reports to Sales Director.",
      outcomes: [
        "Designed and shipped a React + Recharts Global Market Intelligence Dashboard tracking Order Confirmed vs Target vs Market Size across 10 regions — replaced a multi-tab spreadsheet workflow the commercial team had used for years.",
        "Built an SAP-integrated Weekly Sales Projection Tracker (BPC vs OT vs Actuals) so the BU could see variance the same day, not at month-close.",
        "Stood up a Croston/SBA intermittent-demand forecasting workbook with FVA analysis for products where conventional methods produce noise.",
      ],
      stack: ["React", "Recharts", "SAP BPC", "Python", "Croston / SBA", "FVA"],
    },
    {
      id: "permata",
      company: "PermataBank",
      role: "Digital Business Division",
      period: "Prior",
      location: "Jakarta",
      scope: "Analytics and product economics for the mobile banking franchise.",
      outcomes: [
        "Authored a mobile banking switching-cost elimination framework that drove a 98% reduction in switching cost.",
        "Translated the framework into a roadmap that captured double-digit billion IDR in OPEX savings.",
        "Built the analytical case the leadership team carried into prioritization.",
      ],
      stack: ["SQL", "Python", "Product economics", "Strategy"],
    },
    {
      id: "ibm",
      company: "IBM Indonesia",
      role: "Software Implementation",
      period: "Earlier",
      location: "Jakarta",
      scope: "Enterprise software delivery for Indonesian institutions.",
      outcomes: [
        "Implemented enterprise software for institutional clients end-to-end — requirements through cutover.",
        "First exposure to the operational anatomy of large Indonesian businesses, which still shapes how I scope today.",
      ],
      stack: ["Enterprise SW", "Implementation", "Client delivery"],
    },
  ],

  projects: [
    {
      id: "pintas",
      title: "Pintas",
      kicker: "Founder — settlement infrastructure",
      summary:
        "B2B cross-border settlement rail using stablecoin infrastructure (USDC/USDT) as the invisible leg between USD endpoints. Replaces the SWIFT layer, not the bank.",
      problem:
        "Indonesian exporters routinely wait 3–5 days for USD wires to settle. The delay is a working-capital tax, and the cost is opaque — buried in correspondent-bank fees and FX spread. The receiver doesn't want to think about crypto; they want USD in their account, faster and cheaper.",
      approach:
        "USD on-ramp → stablecoin settlement → USD off-ramp. Primary infrastructure partner: TransFi for the Indonesia–Singapore corridor. Zero Hash layered for US regulatory coverage. Distribution anchor through family JV connection to Indonesia Morowali Industrial Park (Tsingshan Group). Pitched Antler, Iterative, YC.",
      outcome:
        "Pre-revenue. In-corridor pilots scoped with two large exporters. Architecture and partner stack locked.",
      stack: ["USDC / USDT", "TransFi", "Zero Hash", "Indonesia–Singapore corridor", "B2B onboarding"],
      accentLabel: "Founder",
    },
    {
      id: "dashboard",
      title: "APP Market Intelligence Dashboard",
      kicker: "0→1 production tool — Specialty Paper BU",
      summary:
        "React + Recharts dashboard tracking Order Confirmed vs Target vs Market Size across 10 global regions, replacing a spreadsheet workflow the commercial team had used for years.",
      problem:
        "Commercial reviews were running on stitched-together spreadsheets. Variance between target, confirmed orders, and external market signal was hard to see in one view, and impossible to drill into during a meeting.",
      approach:
        "Designed a regional-grid view with three-series comparison per region, drill-down on click, and a delta column tied to commercial owners. Built in React with Recharts on a normalized data layer fed from the existing SAP pipeline.",
      outcome:
        "Adopted into the BU's weekly commercial review. Variance is now visible during the meeting rather than reconstructed afterward.",
      stack: ["React", "Recharts", "Tailwind", "SAP data layer", "10 regions"],
      accentLabel: "Built",
    },
    {
      id: "permata",
      title: "Switching-Cost Elimination Framework",
      kicker: "Analytical credential — PermataBank",
      summary:
        "Framework that quantified, then eliminated, switching cost for the mobile banking franchise. 98% reduction in switching cost, double-digit billion IDR in OPEX savings.",
      problem:
        "Customers churned at the point of friction, not at the point of dissatisfaction. The org could see the churn but not the friction, and traditional NPS work hadn't moved the number.",
      approach:
        "Decomposed the switching event into a sequence of costs — informational, procedural, financial — and built a unit-economic model that priced each one. Used the model to identify the smallest set of interventions with the largest delta.",
      outcome:
        "98% reduction in measured switching cost. Double-digit billion IDR in OPEX savings unlocked through the roadmap derived from the framework.",
      stack: ["Switching-cost theory", "Unit economics", "SQL", "Product strategy"],
      accentLabel: "Strategy",
    },
    {
      id: "kos",
      title: "Boarding House Management System",
      kicker: "AI-native proof — family kos",
      summary:
        "Internal tool for the family boarding house: Google Sheets backend, WhatsApp integration, and a Claude-powered conversational agent that manages rooms and payments in natural language.",
      problem:
        "Running a small kos is paperwork plus WhatsApp. Tenants ask the same questions on a loop; rent tracking lives in a notebook; the operator has no time to build a real system.",
      approach:
        "Sheets as the system of record (zero hosting cost, anyone can edit), WhatsApp as the surface, Anthropic API in the middle. The agent reads bookings, payments, and tenant messages from Sheets, replies in natural Bahasa, and writes structured rows back. Built with Claude Code.",
      outcome:
        "In daily use. The agent handles room queries, payment reminders, and tenant onboarding without operator intervention.",
      stack: ["Claude (Anthropic API)", "Claude Code", "Google Sheets", "WhatsApp Business API", "Apps Script"],
      accentLabel: "AI-native",
    },
  ],

  capabilities: {
    strategy: {
      label: "Strategy & Analysis",
      items: [
        "Switching-cost frameworks",
        "Unit economics",
        "Market sizing & segmentation",
        "Croston / SBA forecasting",
        "FVA (Forecast Value Add)",
        "Commercial review design",
        "Pricing & margin analysis",
      ],
    },
    build: {
      label: "Build & Tooling",
      items: [
        "React + Recharts",
        "Python (pandas, statsmodels)",
        "SQL",
        "SAP BPC integration",
        "Google Sheets / Apps Script",
        "Anthropic API",
        "Claude Code (production use)",
      ],
    },
    operating: {
      label: "Operating",
      items: [
        "Demand planning at 9-figure scale",
        "10-region S&OP cadence",
        "Cross-functional with sales / supply / finance",
        "Founder-track fundraising (Antler, Iterative, YC)",
        "Stablecoin settlement architecture",
        "B2B partner onboarding",
      ],
    },
  },

  // For the Pintas signature interaction
  pintas: {
    swift: { days: "3–5", fee: "~$45", lift: "1.2–2.5%" },
    pintasRail: { hours: "minutes", fee: "~$8", lift: "0.4–0.7%" },
    legs: [
      { id: "ramp", label: "USD on-ramp", detail: "Local USD account, KYB-cleared exporter" },
      { id: "stable", label: "Stablecoin leg", detail: "USDC / USDT — Indonesia → Singapore corridor" },
      { id: "off", label: "USD off-ramp", detail: "Counterparty bank, USD received" },
    ],
  },
};
