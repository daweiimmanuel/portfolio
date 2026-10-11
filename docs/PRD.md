# PRD: Upwork Portfolio Site v2 (AI Automation Pivot)

- **Owner:** David Immanuel
- **Version:** 2.0 (supersedes v1 `portfolio-build-prompt.md`, May 2026, which targeted job search and founder positioning)
- **Executor:** Claude Code
- **Status:** Ready to build

---

## 0. Instructions for Claude Code

1. Read this whole document before touching any code.
2. Run **Phase 0 (audit)** from §10 and output the plan it describes. **Do not modify files until David approves the plan.**
3. Then execute Phases 1–5 in order on branch `feat/ai-ops-pivot`, one commit per phase. Stop at the end of each phase with a short summary of what changed and anything blocked. David will reply "Continue" to proceed.
4. All copy in this document is final unless marked `[TODO: ...]`. Do not rewrite it, add adjectives, or write copy for sections this PRD doesn't specify.
5. Never invent metrics, clients, testimonials, or capabilities. If a value is missing, keep the `[TODO: ...]` token in the content file. The placeholder gate (§9.4) blocks production builds until every token is resolved.
6. If the repo already has a site, keep its stack and migrate. If the repo is empty, scaffold per §9.1.
7. Save this file in the repo as `docs/PRD.md`. If the v1 brief exists in the repo, move it to `docs/archive/`.

---

## 1. Summary

Reposition the portfolio site from "data and financial analyst, job seeker, founder" to **"AI automation engineer for operations teams"**, matching the updated Upwork profile.

The site has one job. A client clicks through from an Upwork proposal or profile, understands in 30 seconds what David automates, sees proof that it works, and goes back to Upwork to hire him.

---

## 2. Goals and success metrics

| ID | Goal | How we know |
|---|---|---|
| G1 | Positioning matches the Upwork profile | Site title and hero use "AI Automation Engineer for Operations"; services match the Upwork Project Catalog |
| G2 | Proof over claims | Every service links to at least one build that demonstrates it |
| G3 | Conversion back to Upwork | Primary CTA everywhere is "Hire me on Upwork"; click rate tracked per session (§9.7) |
| G4 | Reusable in proposals | Each case study has its own URL so a proposal can link the single most relevant build |
| G5 | Quality floor | Lighthouse mobile ≥ 95 on Performance, Accessibility, Best Practices, SEO |

Review the Upwork CTA click rate after 30 days of traffic and set a target then.

---

## 3. Audience

**Primary:** Upwork clients hiring for AI automation: SMB owners, operations managers, agency leads. Non-technical to semi-technical. They arrive from a proposal link, usually on desktop, and spend under a minute unless something earns more.

**Secondary:** technical reviewers and hiring managers checking depth. They're served by the case-study pages and the Background section. There is no job-search framing anywhere on the site.

What a visitor needs to learn, in order:

1. What do you automate? (hero)
2. Does it work? (hero demo, builds)
3. Can you do mine? (services, how a project runs)
4. How do I hire you? (Upwork CTA)

---

## 4. Positioning and voice

**Positioning line:** AI automation engineer for operations teams. I've run the processes I automate.

**Voice rules**

- First person, plain verbs, sentence case for all headings and buttons.
- Specific over impressive: name the input, the output and the tool.
- Banned words: passionate, results-driven, synergy, leverage (as a verb), seamless, cutting-edge, unlock, empower, revolutionize, game-changer, "solutions" as a standalone noun.
- No exclamation marks.
- No testimonials until real Upwork reviews exist. (P2: add 1–2 verbatim review quotes once David has AI-category reviews.)
- The CTA label is always "Hire me on Upwork". The same action keeps the same name everywhere.

---

## 5. Scope changes from v1

**Remove**

- All financial-modeling positioning, skills and copy.
- The hero metric ticker (export portfolio size, 10 regions, 98%, founder credential).
- The capabilities matrix and the "Strategy & Analysis" framing.
- Pintas fundraising and partnership details: accelerator pitches, infrastructure partners, industrial park and JV references. Pintas stays as one build entry.
- The Pintas settlement-flow hero interaction. It becomes a static diagram on the Pintas case-study page.
- The writing/thinking section.
- Any job-search references or role-targeting language.

**Keep, reframed**

- APP, PermataBank and IBM experience become a compact Background section.
- The PermataBank 98% switching-cost reduction becomes one line in Background.
- Power BI and SAP work moves to a compact "Data and reporting" section below the builds.
- The boarding-house system is promoted to the featured build.

**Add**

- Hero extraction demo, the site's signature interaction (§7.1).
- Services section mapped to the Upwork Project Catalog (§7.4).
- One case-study page per build, each with its own URL (§7.3).
- "How a project runs" four-step process (§7.5).
- Placeholder check script and CI gate (§9.4).

---

## 6. Information architecture

**Routes**

| Route | Content |
|---|---|
| `/` | Hero (with demo) → Builds → What I build → How a project runs → Data and reporting → Background → Footer |
| `/builds/ai-boarding-house-assistant` | Case study |
| `/builds/po-email-extraction` | Case study |
| `/builds/security-questionnaire-engine` | Case study |
| `/builds/sales-projection-pipeline` | Case study |
| `/builds/pintas-mvp` | Case study |
| `/404` | Short message and a link home |

Builds with `published: false` in content are excluded from routes, lists and the sitemap. This is how future builds (for example an n8n workflow) get staged.

**Nav:** David Immanuel (home link), Builds, Services, How I work, Background, and a "Hire me on Upwork" button.

**Home wireframe (desktop)**

```
+--------------------------------------------------------------------------+
| David Immanuel     Builds  Services  How I work  Background  [Hire me on Upwork] |
+=========================== navy hero band ===============================+
| I automate the operations work   | [Order email] [Tenant update] [Security questionnaire] |
| your team still does by hand.    | +-- input ----------+  +-- output ---------------+ |
|                                  | | Hi Rina,          |  | PO number  JD-2291  0.98 | |
| Subline                          | | Please book 3 x   |  | Quantity   3 x 40HC 0.96 | |
| [Hire me on Upwork] See the builds | | 40HC of MG kraft..|  | ETD   1-15 Dec  Needs review | |
| Based in Jakarta (GMT+7)...      | +-------------------+  +-------------------------+ |
|                                  | How this works          Illustrative data       |
+--------------------------------------------------------------------------+
| Builds                                                                   |
| +-- featured: AI assistant for a boarding house -----+ [chat visual]    |
| +------------------------------------------------------------------------+
| Internal tool  Order email extraction...   one-line outcome   stack  [thumb] |
| -------------------------------------------------------------------------|
| Reference build  Security questionnaire engine ...                 [thumb] |
| -------------------------------------------------------------------------|
| ...                                                                      |
+--------------------------------------------------------------------------+
| What I build        5 rows: name | what it is | you send | you get | from $ |
| How a project runs  1 Map   2 Prototype   3 Review loop   4 Handover     |
| Data and reporting  2 items + link to Power BI/SAP Upwork profile         |
| Background          3 short paragraphs + tools by group                  |
+============================ navy footer =================================+
| [Hire me on Upwork]   Email  LinkedIn  GitHub     Jakarta (GMT+7) note   |
+--------------------------------------------------------------------------+
```

**Case-study wireframe (desktop)**

```
+--------------------------------------------------------------+
| <- All builds                                                |
| Live system                                                  |
| AI assistant for a boarding house                            |
| One-line summary                                             |
+---------------------------------------+----------------------+
| The problem                           | At a glance (sticky) |
| What I built                          | Role                 |
| How it works (numbered steps)         | Status               |
| [inline SVG diagram]                  | Built for            |
| Result                                | Stack                |
| What this looks like for your team    | Result               |
| Downloads (if any)                    | [Hire me on Upwork]  |
+---------------------------------------+----------------------+
| Want this for your team?   [Hire me on Upwork]  [Catalog link] |
| <- Previous build                              Next build -> |
+--------------------------------------------------------------+
```

On mobile, "At a glance" moves directly under the summary.

---

## 7. Section specs and copy

### 7.1 Hero

**Copy**

- H1: I automate the operations work your team still does by hand.
- Subline: AI assistants, email and document extraction, and internal tools, built by someone who has run the process, from SAP order desks to a 15-room boarding house.
- Primary button: Hire me on Upwork → `links.upworkProfile`
- Secondary link: See the builds → `#builds`
- Small line under the buttons: Based in Jakarta (GMT+7). Fixed-scope milestones through Upwork.

**Signature interaction: extraction demo**

This is where the site spends its boldness. Everything else stays quiet.

- Panel sits in the right column on desktop (≥ 1024px) and below the copy on mobile.
- Three tabs: "Order email", "Tenant update", "Security questionnaire". Implemented as an ARIA tablist.
- Left pane shows the raw input. Right pane shows the structured output: field, value, confidence (where given) and a status chip ("Auto-filled" or "Needs review").
- **On first load it plays once** (about 2.5 seconds total). The input appears, then each output field fills in sequence while its source phrase highlights in the input.
- Switching tabs replays the sequence for that scenario (user-triggered motion).
- Hovering or focusing an output row highlights its source phrase in the input. Hovering a highlighted phrase highlights its row. Works with keyboard focus.
- `prefers-reduced-motion: reduce` → show the final state immediately, no animation.
- Under the panel: a "How this works" link to the scenario's case study, and the note "Illustrative data. Fictional company and people."
- **No network calls, no live model, no API keys.** All data comes from `content/demos.ts`.

**Demo data (use exactly)**

*Scenario 1: Order email* → case study `po-email-extraction`

Input:

```
Hi Rina,

Please book 3 x 40HC of MG kraft 30 gsm, 1,040 mm reels, for Jeddah.
Customer wants ETD in the first half of December. Same price as last order.
PO JD-2291 attached.

Thanks,
Omar
```

Output record "Order line":

| Field | Value | Source phrase | Confidence | Status | Reason |
|---|---|---|---|---|---|
| PO number | JD-2291 | `JD-2291` | 0.98 | auto | |
| Product | MG kraft | `MG kraft` | 0.96 | auto | |
| Grammage | 30 gsm | `30 gsm` | 0.97 | auto | |
| Reel width | 1,040 mm | `1,040 mm` | 0.94 | auto | |
| Quantity | 3 × 40HC | `3 x 40HC` | 0.96 | auto | |
| Destination | Jeddah | `Jeddah` | 0.97 | auto | |
| Requested ETD | 1–15 Dec 2026 | `first half of December` | 0.78 | review | Date range, not a date. Confirm with the customer. |
| Price | (blank) | `Same price as last order` | (none) | review | Needs a lookup of the last order price. |

Summary line under the table: 6 fields filled, 2 sent for review.

*Scenario 2: Tenant update* → case study `ai-boarding-house-assistant`

Input:

```
Kamar 3 ada penghuni baru, namanya Sari, mulai 1 November. Kamar 8 kosong mulai akhir bulan ini.
```

Translation note shown under the input: Room 3 has a new tenant named Sari, starting 1 November. Room 8 is vacant from the end of this month.

Output records (no confidence column for this scenario):

| Record | Field | Value | Source phrase | Status |
|---|---|---|---|---|
| Room 3 | Tenant | Sari | `Sari` | auto |
| Room 3 | Status | Occupied | `penghuni baru` | auto |
| Room 3 | Move-in date | 1 Nov 2026 | `mulai 1 November` | auto |
| Room 8 | Status | Vacant | `kosong` | auto |
| Room 8 | Vacant from | 31 Oct 2026 | `akhir bulan ini` | auto |

Assistant reply bubble shown after the records: Siap, sudah dicatat. Kamar 3: Sari, mulai 1 Nov. Kamar 8: kosong mulai 31 Okt.

*Scenario 3: Security questionnaire* → case study `security-questionnaire-engine`

Input:

```
Q14. Is customer data encrypted at rest? If yes, state the standard used and how keys are managed.

Q31. Has your organization experienced a data breach in the last 24 months?
```

Output record "Q14":

| Field | Value | Source phrase | Confidence | Status |
|---|---|---|---|---|
| Answer | Yes. Customer data is encrypted at rest with AES-256. Keys are held in the cloud provider's key management service and rotated every 12 months. | `encrypted at rest` | 0.92 | auto |
| Standard | AES-256 | `standard used` | 0.92 | auto |
| Key management | Cloud KMS, rotated every 12 months | `how keys are managed` | 0.92 | auto |
| Sources | Information Security Policy v3.2, section 4.1; Cloud Architecture Overview, page 6 | (none) | | auto |

Output record "Q31":

| Field | Value | Source phrase | Status | Reason |
|---|---|---|---|---|
| Answer | (not drafted) | `data breach` | review | Sensitive topic: incident history. Always answered by a person. |

Note under this scenario: Fictional company (Northbridge Manufacturing). Policies and answers are illustrative.

### 7.2 Builds (home section)

- Heading: Builds
- Intro: Systems I've built and run. Employer work is anonymized, and reference builds are labeled as such.
- Layout: the first build is a featured row (visual on one side, text on the other). The rest are list rows separated by 1px rules. Hierarchy comes from size and position, not identical cards.
- Each row shows: status label, title, one-line summary, 3–5 stack items, thumbnail, and a "Read the case study" link.
- Order: (1) AI assistant for a boarding house (featured), (2) Order email extraction, (3) Security questionnaire engine, (4) Weekly sales projection pipeline, (5) Pintas MVP.

**Status labels**

| Enum | Label |
|---|---|
| `live` | Live system |
| `internal` | Internal tool (anonymized) |
| `reference` | Reference build |
| `mvp` | Founder MVP |

### 7.3 Case-study pages

**Template (every page)**

1. "All builds" back link, status label, title, one-line summary
2. "At a glance" panel (sticky on desktop): Role, Status, Built for, Stack, Result, and a "Hire me on Upwork" button
3. The problem
4. What I built
5. How it works: numbered steps (a real sequence) plus an inline SVG diagram
6. Result: confirmed metrics if present; otherwise the `resultText` line
7. What this looks like for your team: 1–2 sentences linking to the matching service
8. Downloads, if any
9. Bottom CTA: "Want this for your team?" with "Hire me on Upwork" and the matching Project Catalog link, if one exists
10. Previous / next build links

**Visual rule:** never show real employer data, customer names, volumes or screenshots. Use the SVG diagram, the matching demo scenario rendered statically, or images David supplies in `/public/builds/<slug>/`. If an expected image is missing, render the diagram instead. Never break the layout.

---

#### Build 1: AI assistant for a boarding house

- **Slug:** `ai-boarding-house-assistant` · **Status:** `live` [TODO: confirm the system is in regular use; otherwise change status]
- **Summary:** Owners of a 15-room boarding house update tenant records by typing plain Indonesian into a chat.
- **Role:** Sole builder
- **Built for:** A family-run 15-room boarding house
- **Stack:** Claude API, Google Sheets, Google Apps Script, chat interface
- **Result:** [TODO: one metric, e.g. updates handled per month or time saved per week]

**The problem**
Tenant records lived in a spreadsheet. Keeping it current meant opening the sheet on a phone, finding the right row and editing cells by hand, so updates were slow and easy to skip. [TODO: confirm or rewrite in your own words]

**What I built**
A chat interface on top of the existing Google Sheet. The owners type what happened in everyday Indonesian, for example "Kamar 3 ada penghuni baru, namanya Sari, mulai 1 November", and the assistant updates the right rows, then confirms back in the chat. The sheet stays the source of truth, so nothing about how they view their data had to change.

**How it works**
1. The owner types a message in a WhatsApp-style chat interface. [TODO: confirm WhatsApp-style web UI vs real WhatsApp integration]
2. Apps Script sends the message and the sheet's structure to the Claude API.
3. Claude returns a structured update: which room, which field, what new value.
4. Apps Script checks the update against the sheet (the room exists, dates are valid) and writes it. [TODO: confirm this validation step matches the build]
5. The assistant replies with a plain-language confirmation. If a message is ambiguous, it asks a clarifying question instead of writing. [TODO: confirm]

**Diagram:** Chat → Apps Script → Claude API → structured update → validation → Google Sheet → confirmation back to chat.

**Visual:** chat mock using the Tenant update demo messages, or David's screenshots in `/public/builds/ai-boarding-house-assistant/` with tenant names blurred.

**What this looks like for your team**
Any team that runs on a spreadsheet can have the same thing: a chat front-end that reads and updates your sheet or database, with checks before every write. → Service: AI assistant on your data

---

#### Build 2: Order email extraction for an export sales team

- **Slug:** `po-email-extraction` · **Status:** `internal`
- **Summary:** Free-text customer order emails become structured order lines in Excel, with uncertain fields sent for review.
- **Role:** Designed and built
- **Built for:** The export sales team at a global pulp and paper manufacturer
- **Stack:** Power Automate, AI Builder, Outlook, Excel, SharePoint [TODO: confirm SharePoint]
- **Result:** [TODO: emails processed per week or hours saved per week]

**The problem**
Customer orders arrived as free-text emails in every format. Someone had to read each one and retype product, grammage, quantity, destination and dates into the order sheet.

**What I built**
A Power Automate flow that picks up order emails, uses AI Builder to extract the order fields, and writes clean rows to an Excel table. Fields that come back uncertain, or that need a lookup like "same price as last order", are flagged for a person instead of guessed. [TODO: confirm the flagging behavior]

**How it works**
1. A new order email arrives in the order mailbox. [TODO: confirm the trigger]
2. AI Builder extracts the order fields.
3. The flow checks them: known product, valid dates, recognized quantity units.
4. Clean rows are added to the Excel order table. Flagged rows go to a review tab.
5. The team reviews only the flagged rows.

**Visual:** the Order email demo scenario, rendered statically.

**What this looks like for your team**
If your team retypes emails, PDFs or invoices into a spreadsheet or ERP, this is the pattern: extract, check, write, and send exceptions to a person. → Service: Email and document extraction

---

#### Build 3: Security questionnaire engine

- **Slug:** `security-questionnaire-engine` · **Status:** `reference`
- **Summary:** Drafts answers to security questionnaires from a company's own policy documents, cites sources, and routes sensitive questions to a person.
- **Role:** Designed and built
- **Built for:** A demo with a fictional manufacturer, Northbridge Manufacturing
- **Stack:** Python, Anthropic API, LanceDB
- **Result (demo on synthetic data):** 47 questions processed in 38 minutes; 87% auto-approved. Always show the "demo on synthetic data" qualifier next to these numbers.

**The problem**
Vendor security questionnaires (SIG Lite, CAIQ, SOC 2 follow-ups) ask the same questions in different words. Answering them means hunting through policies and copying text, and a wrong answer is a compliance risk.

**What I built**
A retrieval pipeline that indexes a company's policies, drafts an answer to each question with citations to the exact source passage, scores its confidence, and applies rules that send sensitive topics, like incident history, to a person regardless of score.

**How it works**
1. Load the questionnaire and validate it against a schema.
2. Check each question against sensitive-topic rules.
3. Retrieve the most relevant policy passages from LanceDB.
4. Claude drafts an answer from those passages only, with citations.
5. Score confidence. High-confidence answers are auto-approved; the rest wait for review.
6. Export the completed questionnaire.

**Downloads**
- Download the reference build (PDF) → `/builds/security-questionnaire-engine/Questionnaire_Automation_Demo.pdf`
- View the code → [TODO: public repo URL, or remove this link]

**What this looks like for your team**
The same pipeline handles any repetitive question set answered from documents: RFPs, compliance forms, internal policy questions. → Service: Answers from your own documents

---

#### Build 4: Weekly sales projection pipeline

- **Slug:** `sales-projection-pipeline` · **Status:** `internal`
- **Summary:** Weekly sales projections flow from a form into a shared Excel model and a Power BI tracker connected to SAP order intake.
- **Role:** Designed and built
- **Built for:** Specialty paper export sales across 10 regions
- **Stack:** Microsoft Forms, Power Automate, SharePoint Excel, Power Query, Power BI, SAP data via QlikView
- **Result:** [TODO: one result, e.g. reps or regions covered, or reconciliation time saved]

**The problem**
Weekly projections came in through scattered spreadsheets and emails in different formats, and had to be reconciled by hand against confirmed orders in SAP. [TODO: confirm or rewrite in your own words]

**What I built**
A Microsoft Forms intake that feeds a SharePoint Excel table through Power Automate. The table is joined to SAP order intake data, normalized to containers, and shown in a weekly Power BI tracker comparing budget, order intake and actuals.

**How it works**
1. Sales reps submit weekly projections in Microsoft Forms.
2. Power Automate writes each submission to a SharePoint Excel table.
3. Power Query joins the projections with SAP order intake, normalized to containers.
4. Power BI shows budget, order intake and actuals by region and product group.

**What this looks like for your team**
Any team collecting numbers from many people every week can replace the email-and-spreadsheet chase with a structured intake and a live dashboard. → Service: Workflow automation

---

#### Build 5: Pintas cross-border settlement MVP

- **Slug:** `pintas-mvp` · **Status:** `mvp`
- **Summary:** A founder-built MVP for B2B cross-border payments that settles in stablecoins between USD endpoints, for Indonesian exporters.
- **Role:** Founder: product and build
- **Built for:** Pintas, a startup I founded
- **Stack:** Next.js, Solana (Devnet) [TODO: confirm full stack]
- **Result:** [TODO: shareable demo link, or remove this field]

**The problem**
Indonesian exporters wait 3–5 days for SWIFT settlement on USD payments, which ties up working capital.

**What I built**
An MVP of the settlement flow: USD in, stablecoin settlement, USD out. The stablecoin layer is invisible to both sides.

**How it works**
1. The buyer pays in USD through an on-ramp.
2. Value settles on-chain in stablecoins.
3. The exporter receives USD through an off-ramp.

**Diagram:** static settlement flow, USD on-ramp → stablecoin settlement → USD off-ramp. This replaces the v1 hero animation.

**What this looks like for your team**
I build product MVPs the same way I build internal tools: model the real flow first, then build the smallest version that proves it. → Service: Internal tools and reporting

**Do not include:** fundraising, accelerator applications, partners, or JV references.

---

### 7.4 What I build (services)

- Heading: What I build
- Intro: Fixed-scope work through Upwork. Prices match my Upwork Project Catalog.
- Layout: five rows, not a card grid. Each row: name, what it is, what you send me, what you get, starting price, and a proof link to the related build.
- Prices live in `content/site.ts` so David can keep them in sync with Upwork. Each "Starting at" price links to its Catalog item.

| ID | Name | What it is | You send me | You get | Starting at | Proof |
|---|---|---|---|---|---|---|
| `assistant` | AI assistant on your data | A chat interface that reads and updates your Google Sheet or database in plain language, in English or Indonesian. | Your sheet and the 5–10 updates people make most often | A working assistant, checks before every write, handover doc | $500 → [TODO: Catalog URL] | Build 1 |
| `extraction` | Email and document extraction | Free-text emails, POs, invoices or PDFs turned into clean rows in Excel, Google Sheets or SharePoint. | 20–50 sample documents | Extraction flow, review queue for uncertain fields, handover doc | $350 → [TODO: Catalog URL] | Build 2 |
| `rag` | Answers from your own documents | Draft answers to repetitive questions (questionnaires, RFPs, policy questions) with sources cited and sensitive topics routed to a person. | Your source documents and a sample question set | Retrieval pipeline, review workflow, run guide | Custom quote | Build 3 |
| `workflow` | Workflow automation | One manual process mapped, automated and handed over: forms, approvals, file moves, notifications, data syncs. Power Automate, Apps Script or Python. | A walkthrough of the process as it runs today | The automation, a process map, handover doc | $600 → [TODO: Catalog URL] | Build 4 |
| `tools` | Internal tools and reporting | Small web apps and dashboards on top of your data: Next.js front-ends, Power BI reports on SAP and ERP data. | What decisions the tool needs to support | A working app or report and handover doc | Custom quote | Build 5, Data and reporting |

### 7.5 How a project runs

Numbered markers are justified here because this is a real sequence.

- Heading: How a project runs

1. **Map.** I document how the work happens today, step by step, and we agree which step to automate first. You see the map before I write code.
2. **Prototype.** In the first milestone you get a working version on your real data, or a safe copy of it.
3. **Build with a review loop.** Confidence thresholds, review queues and logs go in from the start, so a person checks anything the system isn't sure about.
4. **Handover.** Documentation and a walkthrough recording so your team can run and adjust it without me. The support window is agreed up front.

### 7.6 Data and reporting (compact)

- Heading: Data and reporting
- Intro: Automation runs on clean data. I also build Power BI and SAP reporting.
- Items:
  - **PPV and productivity dashboard (reference build).** Purchase price variance and productivity for a fictional four-plant manufacturer, with GR/IR variance breakdown and metals exposure. Download (PDF) → `/builds/data/PPV_Dashboard_Reference_Build.pdf`
  - **Weekly sales projection tracker.** Link to `/builds/sales-projection-pipeline`.
- Link: My Power BI and SAP profile on Upwork → [TODO: specialized profile URL]

### 7.7 Background

- Heading: Background

Copy:

> I work in commercial excellence at Asia Pulp & Paper (Sinarmas Group) in the Specialty Paper business. I've run demand planning and export sales operations across 10 regions on SAP, QlikView and Power BI, and built the internal tools shown above.
>
> Before that I ran special projects in PermataBank's Digital Business Division, including a redesign of mobile banking switching costs that cut them by 98%. I started out implementing enterprise software at IBM.
>
> BSc Computer Science, Bina Nusantara University. MBA, Prasetiya Mulya University (Top 5 graduate).

Tools, as grouped lines (no skill bars, no logos wall):

- **AI:** Claude and the Anthropic API, Microsoft AI Builder, retrieval with LanceDB
- **Automation:** Power Automate, Google Apps Script, Python
- **Apps:** Next.js, React, Recharts
- **Data:** SAP, Power BI, Power Query, QlikView, Excel

Optional headshot: `/public/david.jpg` [TODO: supply, or remove the image slot].

### 7.8 Footer

- "Hire me on Upwork" button
- Email [TODO], LinkedIn [TODO], GitHub [TODO]
- Based in Jakarta (GMT+7). Working hours overlap with APAC, European mornings and US Eastern mornings.
- No contact form.
- **Compliance:** for clients who found David on Upwork, contracting and payment stay on Upwork. No copy on the site may invite off-platform payment.

---

## 8. Design spec

### 8.1 Direction

Carry the visual signature from David's PDF reference builds (navy cover, amber accents, white interior, Inter) so a client moving from a proposal PDF to the site sees one brand. The site uses a navy hero band and footer with a light interior.

Spend boldness in one place: the hero demo. Keep everything else quiet and disciplined.

### 8.2 Color tokens

Define these as CSS variables and expose them in the Tailwind theme.

| Token | Hex | Use |
|---|---|---|
| `navy-900` | `#0E1A2B` | Hero band, footer, text on amber |
| `navy-700` | `#1C2E48` | Demo panel surface |
| `paper` | `#F5F6F8` | Page background |
| `white` | `#FFFFFF` | Raised surfaces |
| `ink` | `#172231` | Body text on light backgrounds |
| `slate` | `#5B6B80` | Secondary text |
| `amber` | `#E8A33D` | Primary button fill, focus ring, highlighted source phrases |
| `ok` | `#27774A` | "Auto-filled" chip fill (white text) |
| `review` | `#B9542F` | "Needs review" chip fill (white text) |

**Contrast rules:** amber is never text on white or paper. Use it as a fill with `navy-900` text, or as text on navy. Status colors are used only as chip fills with white text. All pairs must pass WCAG AA; verify in Phase 5.

The hero band may use a subtle vertical gradient from `navy-900` to `#13233A` for continuity with the PDF covers. No gradients anywhere else.

### 8.3 Typography

- **One family: Inter (variable)**, self-hosted via `next/font` or `@fontsource-variable/inter`. Use Inter's display optical size for headings at 33px and above. Inter is chosen deliberately to match the PDF reference builds.
- **JetBrains Mono** only for structured values inside the demo output (field values, confidence numbers), because they're data. Nowhere else.
- Scale (ratio 1.25 from 17px body): 17 / 21 / 27 / 33 / 42 / 52. H1 is 52/56 on desktop and 36/40 on mobile.
- Body line-height 1.55. Prose max width 68ch.
- Heading weight 650, tracking -0.01em at 33px and above.

### 8.4 Layout

- Max content width 1120px. Left-aligned throughout.
- Hero: two columns at ≥ 1024px (copy 5/12, demo 7/12). Stacked on mobile, with the demo after the copy.
- Builds: featured row, then ruled list rows (§7.2).
- Case study: 8/12 narrative, 4/12 sticky "At a glance" on desktop.
- Border radius: 6px for chips and buttons, 10px for the demo panel, 0 for list rows. Radius reflects hierarchy; don't use one radius everywhere.

### 8.5 Motion

- One orchestrated moment: the hero demo plays once on load.
- User-triggered only beyond that: tab switch replays the demo; hover or focus highlights rows and phrases; "At a glance" stickiness.
- No scroll-triggered section fades, no number counters, no parallax, no page transitions.
- `prefers-reduced-motion` shows final states.

### 8.6 Don'ts

These read as generated templates. None of them may appear:

- ALL-CAPS eyebrow labels above headings
- Numbered markers anywhere except "How a project runs" and case-study steps
- "→" appended to every link or button
- Meta strings joined with middle dots
- Monospace for small labels
- Identical rounded cards with the same soft shadow
- Gradient washes as decoration
- One word in a headline accented in a different color or style
- A stat ticker in the hero

### 8.7 Accessibility

- WCAG 2.2 AA.
- Visible focus ring everywhere: 2px amber with 2px offset.
- Demo is fully keyboard-operable: tablist with arrow-key navigation, focusable output rows, highlights on focus.
- Alt text on every image. Headings in order. Links describe their destination.

---

## 9. Tech spec

### 9.1 Stack

- **Existing site:** keep its stack and migrate content and sections.
- **Fresh scaffold:** Next.js (current stable), App Router, TypeScript strict, Tailwind CSS, static export (`output: 'export'`) so it deploys to either Vercel or GitHub Pages.
- No animation library needed; use CSS transitions or the Web Animations API for the demo. Keep an existing motion library only if the repo already depends on it.
- **GitHub Pages deploy:** set `basePath` if served from `/<repo-name>`, add `.nojekyll`, add a GitHub Actions workflow that builds and deploys `out/`.
- **Vercel deploy:** default settings.

### 9.2 Content layer

All copy, links, prices, builds and demo data live in `content/`. Components contain no copy strings.

- `content/site.ts`: profile, nav, hero, services, process, data-and-reporting, background, tools, links, footer
- `content/builds.ts`: `Build[]`
- `content/demos.ts`: `DemoScenario[]`

Schema sketch:

```ts
type BuildStatus = 'live' | 'internal' | 'reference' | 'mvp';
type ServiceId = 'assistant' | 'extraction' | 'rag' | 'workflow' | 'tools';
type DemoId = 'order-email' | 'tenant-update' | 'security-questionnaire';

interface Metric { label: string; value: string; qualifier?: string } // qualifier e.g. "demo on synthetic data"

interface Build {
  slug: string;
  published: boolean;
  featured?: boolean;
  status: BuildStatus;
  title: string;
  summary: string;            // one line; also the meta description
  role: string;
  builtFor: string;
  stack: string[];
  problem: string;
  whatIBuilt: string;
  howItWorks: string[];       // ordered steps
  diagram: 'kos' | 'po' | 'rag' | 'sales' | 'pintas';
  metrics: Metric[];          // empty array -> render resultText
  resultText?: string;
  forYourTeam: string;
  serviceId: ServiceId;
  downloads?: { label: string; href: string }[];
  images?: { src: string; alt: string; width: number; height: number }[];
  demoId?: DemoId;
}

interface DemoField {
  label: string;
  value: string;
  source?: string;            // exact substring of input; drives highlighting
  confidence?: number;        // 0-1
  status: 'auto' | 'review';
  reason?: string;            // shown for review rows
}

interface DemoScenario {
  id: DemoId;
  tabLabel: string;
  input: string;
  inputNote?: string;         // e.g. English translation
  records: { title: string; fields: DemoField[] }[];
  summaryLine?: string;
  assistantReply?: string;
  footnote: string;
  caseStudySlug: string;
}
```

Highlighting finds `source` with an exact, case-sensitive substring match in `input`. Add a unit test that fails if any `source` isn't found in its scenario's input.

### 9.3 Case-study generation

Generate `/builds/[slug]` statically from `builds.ts` with `generateStaticParams`. Exclude `published: false` from routes, lists and the sitemap.

### 9.4 Placeholder gate

- `scripts/check-placeholders.ts` scans `content/**` for `[TODO:` and exits non-zero, printing `file:line` for each hit.
- Runs as `prebuild` when `CI=true` or `NODE_ENV=production`. Available locally as `npm run check:todo`.
- In dev, any rendered value containing `[TODO:` shows a dashed amber outline so it's easy to spot.

### 9.5 Assets

- Location: `/public/builds/<slug>/` for images and PDFs; `/public/builds/data/` for the PPV PDF.
- Expected PDFs: `Questionnaire_Automation_Demo.pdf`, `PPV_Dashboard_Reference_Build.pdf` (David supplies).
- Images: WebP or AVIF, ≤ 200 KB each, explicit width and height.
- Missing asset → render the SVG diagram fallback. A missing PDF hides its download link.

### 9.6 SEO

- Site title: David Immanuel | AI Automation Engineer for Operations
- Meta description: I build AI assistants, email and document extraction, and internal tools for operations teams. Based in Jakarta, working through Upwork.
- Per case study: title `<Build title> | David Immanuel`; description from `summary`.
- OG image: static 1200×630, navy background, name and title in Inter.
- Person JSON-LD: name, jobTitle "AI Automation Engineer", address locality Jakarta, `sameAs` with Upwork, LinkedIn and GitHub URLs.
- `sitemap.xml`, `robots.txt`, canonical URLs.

### 9.7 Analytics

- Plausible or Vercel Web Analytics; no Google Analytics and no cookie banner. Use whichever supports custom events on David's plan.
- Events: `upwork_cta_click` (prop `location`), `demo_tab_change` (prop `scenario`), `case_study_view` (prop `slug`), `pdf_download` (prop `file`).
- Preserve UTM parameters. Proposals link as `?utm_source=upwork&utm_medium=proposal&utm_campaign=<job-slug>`. Document this in the README.

### 9.8 Performance budget

- Lighthouse mobile ≥ 95 in all four categories.
- Home page JS ≤ 120 KB gzipped. LCP < 2.0s on simulated 4G. CLS < 0.05.

### 9.9 Code quality and tests

- ESLint and Prettier pass. `tsc --noEmit` clean.
- Unit test: every demo `source` exists in its input (§9.2).
- Playwright smoke tests: home renders; demo tabs switch; every published case-study route returns 200; every "Hire me on Upwork" href equals `links.upworkProfile`.

---

## 10. Phases and acceptance criteria

### Phase 0: Audit (no file changes)

Output a plan with:

- Current stack, versions and deploy target (Vercel, GitHub Pages or none)
- Current routes and sections, and where copy lives today
- Mapping of v1 content to v2: keep, rewrite or delete (per §5)
- Files to create, modify and delete
- Risks or conflicts with this PRD

Wait for David's approval.

### Phase 1: Content layer

- Create `content/site.ts`, `content/builds.ts`, `content/demos.ts` with all copy from §7 and the demo data from §7.1.
- Remove v1 content listed in §5.
- **Done when:** no copy strings remain in components; `npm run check:todo` lists only the items in §11.

### Phase 2: Home page and design system

- Tokens (§8.2), type (§8.3), layout (§8.4). Sections in the §6 order.
- **Done when:** responsive at 375, 768 and 1280px; nothing from §8.6 appears.

### Phase 3: Hero demo

- **Done when:** three tabs work; plays once on load; reduced motion shows final state; two-way highlighting works with mouse and keyboard; each tab links to its case study; the demo makes zero network requests.

### Phase 4: Case-study pages

- **Done when:** five published routes; the full template from §7.3 on each; sticky "At a glance" on desktop; previous and next links; missing-asset fallbacks work.

### Phase 5: QA, SEO, analytics, deploy

- **Done when:** Lighthouse targets met; contrast verified; JSON-LD validates; sitemap and robots exist; analytics events fire; the placeholder gate runs in CI; README covers how to edit content, run locally, deploy, and build proposal links with UTMs; PR opened against `main`.

### Git conventions

- Branch `feat/ai-ops-pivot`. One commit per phase with conventional messages, e.g. `feat(content): add v2 content layer`.
- PR description: phase summaries, the remaining `[TODO:]` list, and a "Later" list for anything out of scope that came up.

---

## 11. Facts and assets David supplies before launch

Each item maps to a `[TODO: ...]` token in `content/`. The production build fails until all are resolved.

| # | Item | Used in |
|---|---|---|
| 1 | Upwork profile URL | Nav, hero, footer, all CTAs |
| 2 | Project Catalog URLs (extraction, assistant, workflow sprint) | What I build, case-study CTAs |
| 3 | Power BI/SAP specialized profile URL | Data and reporting |
| 4 | Email, LinkedIn and GitHub URLs | Footer, JSON-LD |
| 5 | Boarding-house assistant: WhatsApp-style web UI or real WhatsApp integration; in regular use?; validation and clarifying-question behavior; problem in your words; one metric; 2–3 screenshots with tenant names blurred | Build 1 |
| 6 | Order email extraction: trigger, SharePoint destination, flagging behavior, one metric | Build 2 |
| 7 | Questionnaire engine: public code repo URL or remove; PDF file | Build 3 |
| 8 | Sales projection pipeline: problem in your words, one result | Build 4 |
| 9 | Pintas: full stack, demo link or remove | Build 5 |
| 10 | PDFs: `Questionnaire_Automation_Demo.pdf`, `PPV_Dashboard_Reference_Build.pdf` | Downloads |
| 11 | Headshot (optional) | Background |

---

## 12. Non-goals

- Blog or CMS
- Contact form backend
- Live LLM calls from the site
- Dark-mode toggle (P2)
- Indonesian-language version
- Testimonials (until real Upwork reviews exist)
- An n8n case study until the build exists (stage it with `published: false`)
- Any job-search content

## 13. Risks

| Risk | Mitigation |
|---|---|
| Upwork policy | All contracting stays on Upwork. David confirms Upwork's current rules on external links before adding the site URL to his profile or proposals. |
| Confidentiality | No employer data, customer names, volumes, screenshots or internal system names beyond what this PRD states. |
| Overclaiming | Status labels stay accurate; reference builds are always labeled; demo numbers carry their qualifier; placeholder gate blocks unconfirmed facts. |
| Scope creep | Anything not in this PRD goes to the PR's "Later" list, not into the build. |
