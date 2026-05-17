# David Immanuel — Portfolio

Personal portfolio site for David Immanuel — operator (APP Specialty Paper), founder (Pintas), and AI-native builder.

This repository ships in **two parallel forms**:

1. **`Portfolio.html`** — a fully interactive, single-file HTML prototype (this is the live design artifact)
2. **`handoff/`** — the production stack the brief calls for (Next.js 14 / App Router / TypeScript / Tailwind / Framer Motion)

The prototype is the source of truth for design, copy, and interaction. The handoff package mirrors its structure so the Next.js translation is mechanical.

---

## Prototype (HTML)

### Run

Open `Portfolio.html` in a browser. No build step. Loads React + Babel from unpkg and three Google Font families.

### Architecture

```
Portfolio.html          ← entry; loads scripts in order
styles.css              ← all tokens + components
content.js              ← single source of truth for copy & data
app.jsx                 ← composition + theming + tweaks
tweaks-panel.jsx        ← in-design tweaks shell (Theme / Type / Pintas variant)
components/
  Nav.jsx               ← sticky top nav with section tracking
  Hero.jsx              ← name, headline, CTAs, animated metric ticker
  About.jsx             ← operator-voice prose + at-a-glance card
  Experience.jsx        ← vertical timeline, click-to-expand cards
  Projects.jsx          ← four flagship project cards + abstract visuals
  ProjectModal.jsx      ← problem / approach / outcome / stack overlay
  Pintas.jsx            ← signature interaction (three variants)
  Capabilities.jsx      ← Strategy / Build / Operating columns + Contact
```

### Design system at a glance

| Token | Value |
|---|---|
| Default mode | dark (`#0a0a0a` bg, `#ededed` text) |
| Accent | deep teal `#1f7a6b` — reserved for numerals & emphasis only |
| Display | Inter (Söhne-equivalent grotesk) — toggleable to Geist / IBM Plex |
| Monospace | JetBrains Mono — used for ALL numerals, by design |
| Density | three-step: `compact` / `regular` / `comfy` |

### Tweaks panel

Toggle the **Tweaks** control in the toolbar to live-tune:

- Dark / light mode
- Accent color (4 curated swatches)
- Type pairing (Inter / Geist / IBM Plex)
- Density
- **Pintas signature interaction variant** — `pipeline` (animated flow), `compare` (vs SWIFT), or `ticker` (live transfer simulation). The brief called this out as the one signature interaction; we built all three so the user can pick.

Changes are persisted to disk in the `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` block in `app.jsx`.

---

## Editing copy (non-developer)

**All copy, metrics, and project data live in `content.js`.** You do not need to touch components.

Open `content.js` in any text editor. The file is a single JavaScript object with these top-level keys:

```js
window.PORTFOLIO_CONTENT = {
  person:       { name, location, headline, sub, email, linkedin, github, resumeUrl, … },
  metrics:      [ { value, unit, label }, … ],     // hero ticker
  about:        [ "paragraph 1", "paragraph 2", "paragraph 3" ],
  experience:   [ { id, company, role, period, scope, outcomes[], stack[] }, … ],
  projects:     [ { id, title, kicker, summary, problem, approach, outcome, stack[] }, … ],
  capabilities: { strategy: {label, items[]}, build: {…}, operating: {…} },
  pintas:       { swift, pintasRail, legs[] },     // signature interaction
};
```

### Common edits

**Change a metric in the hero ticker:**
Edit `metrics[]` — each entry is `{ value, unit, label }`. Keep arrays the same length (4 looks best).

**Add a new project:**
Add an object to `projects[]`. The `id` must be unique. If it's one of `pintas | dashboard | permata | kos`, the abstract visual is wired up; otherwise the card visual will be blank — extend `ProjectVisual` in `components/Projects.jsx`.

**Update an experience card:**
Edit the matching object in `experience[]`. `outcomes` is an array of 2–3 numbered bullets — keep them in operator voice (specific numbers > adjectives).

**Replace an essay / add Writing section:**
Not currently rendered. Add a `writing: []` key and wire up a section in `app.jsx` if/when content exists. Brief says omit until real.

### Tone of voice (from brief — keep)

- Specific over impressive. *"Nine-figure USD export book across 10 regions"* beats *"managed large global business."*
- Numbers and artifacts over adjectives.
- First person, present tense for current work, past for completed.
- Banned: *passionate, results-driven, synergy, leverage* (as verb), *ecosystem* (without context).

---

## Handoff to production Next.js (planned)

The HTML prototype is intentionally structured to map 1:1 onto the Next.js stack the brief specifies. Path forward:

```
src/
  app/
    layout.tsx                ← theme provider + fonts + metadata
    page.tsx                  ← composes the same section components
    globals.css               ← port styles.css token system
  components/
    nav.tsx                   ← from components/Nav.jsx
    hero.tsx                  ← from components/Hero.jsx (+ Framer Motion for ticker)
    about.tsx
    experience.tsx
    projects.tsx
    project-modal.tsx
    pintas.tsx                ← three variants live as discriminated union
    capabilities.tsx
    contact.tsx
  content/
    site.ts                   ← typed port of content.js (see CONTENT_TYPES below)
  lib/
    metadata.ts               ← OG + Person JSON-LD
```

### Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS — keep the token names from `styles.css` as Tailwind theme extensions
- Framer Motion — only for: hero ticker fade, modal slide-in, Pintas pipeline dot animation
- Lucide icons — replace inline SVG icons
- Vercel Analytics — light footprint, no GA

### Performance budget

- Lighthouse > 95 on all metrics
- Lazy-load everything below the fold (Experience down)
- Optimize OG image as a static asset

### SEO checklist

- `<title>` + `<meta description>` on layout
- `og:image` (1200×630) — generate from a simplified hero crop
- Person schema in `lib/metadata.ts`:
  ```ts
  { "@type": "Person", name, jobTitle, worksFor, alumniOf, sameAs: [linkedin, github] }
  ```

### Typed content shape

```ts
// content/site.ts
export type Project = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  accentLabel: "Founder" | "Built" | "Strategy" | "AI-native";
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  scope: string;
  outcomes: string[];
  stack: string[];
};

export type SiteContent = {
  person: { /* … */ };
  metrics: { value: string; unit: string; label: string }[];
  about: string[];
  experience: Experience[];
  projects: Project[];
  capabilities: { strategy: Capability; build: Capability; operating: Capability };
  pintas: { swift: …; pintasRail: …; legs: { id: string; label: string; detail: string }[] };
};
```

### Deploy

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint
# port files per the structure above
git init && git remote add origin <repo>
npx vercel link
npx vercel deploy --prod
```

---

## Hard constraints (from brief — preserved)

- No invented metrics. Only what's in the brief.
- No salary detail, no internal APP processes beyond what's listed.
- No family business detail beyond the boarding house line.
- No references to ongoing job applications.
- No carousels. No "Hire me" banners. No testimonials block unless real quotes exist.
- No parallax. No page transitions that delay content. No animated cursors.

---

## License

Personal portfolio. All content © David Immanuel.
