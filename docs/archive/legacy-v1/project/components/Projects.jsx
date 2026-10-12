// Projects.jsx — flagship grid + modal detail.

function Projects({ items, onOpen }) {
  return (
    <section className="section projects" id="projects" data-screen-label="Projects">
      <SectionHeader
        number="03"
        label="Selected work"
        action={<span className="section-aside">Four flagship items · click for detail</span>}
      />
      <div className="proj-grid">
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => onOpen(p.id)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <button className="proj-card" onClick={onOpen} data-id={project.id}>
      <div className="proj-card-top">
        <span className="proj-kicker">{project.kicker}</span>
        <span className="proj-tag">{project.accentLabel}</span>
      </div>
      <div className="proj-visual">
        <ProjectVisual id={project.id} />
      </div>
      <div className="proj-card-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-summary">{project.summary}</p>
      </div>
      <div className="proj-card-foot">
        <span>Open case</span>
        <ArrowIcon />
      </div>
    </button>
  );
}

// Stylized abstract visuals — clearly synthetic, communicate shape.
function ProjectVisual({ id }) {
  if (id === "pintas")    return <VizPintas />;
  if (id === "dashboard") return <VizDashboard />;
  if (id === "permata")   return <VizPermata />;
  if (id === "kos")       return <VizKos />;
  return null;
}

function VizPintas() {
  return (
    <svg viewBox="0 0 320 140" className="viz">
      <defs>
        <linearGradient id="p1" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".0" />
          <stop offset=".5" stopColor="var(--accent)" stopOpacity=".7" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity=".0" />
        </linearGradient>
      </defs>
      <g fontFamily="var(--mono)" fontSize="9" fill="var(--text-dim)">
        <text x="14" y="120">USD</text>
        <text x="148" y="120" textAnchor="middle">USDC / USDT</text>
        <text x="306" y="120" textAnchor="end">USD</text>
      </g>
      <circle cx="22" cy="70" r="14" fill="none" stroke="var(--border-strong)" />
      <circle cx="160" cy="70" r="14" fill="none" stroke="var(--accent)" />
      <circle cx="298" cy="70" r="14" fill="none" stroke="var(--border-strong)" />
      <line x1="36" y1="70" x2="146" y2="70" stroke="url(#p1)" strokeWidth="1.2" />
      <line x1="174" y1="70" x2="284" y2="70" stroke="url(#p1)" strokeWidth="1.2" />
      <circle cx="22" cy="70" r="3" fill="var(--text)" />
      <circle cx="160" cy="70" r="3" fill="var(--accent)" />
      <circle cx="298" cy="70" r="3" fill="var(--text)" />
      <g className="viz-flow">
        <circle r="2.4" fill="var(--accent)">
          <animate attributeName="cx" values="36;146" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;70" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle r="2.4" fill="var(--accent)">
          <animate attributeName="cx" values="174;284" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;70" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function VizDashboard() {
  const bars = [42, 68, 55, 81, 60, 44, 73, 88, 51, 65];
  const target = [55, 60, 60, 75, 65, 55, 70, 80, 60, 70];
  return (
    <svg viewBox="0 0 320 140" className="viz">
      <g stroke="var(--border-soft)" strokeWidth=".5">
        <line x1="14" x2="306" y1="30"  y2="30" />
        <line x1="14" x2="306" y1="60"  y2="60" />
        <line x1="14" x2="306" y1="90"  y2="90" />
        <line x1="14" x2="306" y1="120" y2="120" />
      </g>
      {bars.map((b, i) => {
        const x = 22 + i * 30;
        const h = b * 0.9;
        return (
          <g key={i}>
            <rect x={x} y={120 - h} width="14" height={h} fill="var(--accent)" opacity=".75" />
            <rect x={x + 16} y={120 - target[i] * 0.9} width="6" height={target[i] * 0.9} fill="var(--text-dim)" opacity=".4" />
          </g>
        );
      })}
      <text x="14" y="22" fontFamily="var(--mono)" fontSize="8" fill="var(--text-dim)">10 regions · OC vs target</text>
    </svg>
  );
}

function VizPermata() {
  return (
    <svg viewBox="0 0 320 140" className="viz">
      <text x="14" y="22" fontFamily="var(--mono)" fontSize="8" fill="var(--text-dim)">switching cost · indexed</text>
      <path d="M 14 35 L 70 38 L 120 60 L 170 85 L 230 110 L 306 119"
            fill="none" stroke="var(--text-dim)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M 14 35 L 70 38 L 120 60 L 170 85 L 230 110 L 306 119"
            fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="14"  cy="35"  r="2.6" fill="var(--accent)" />
      <circle cx="306" cy="119" r="2.6" fill="var(--accent)" />
      <text x="22" y="32" fontFamily="var(--mono)" fontSize="9" fill="var(--text)">100</text>
      <text x="280" y="116" fontFamily="var(--mono)" fontSize="9" fill="var(--accent)">2</text>
    </svg>
  );
}

function VizKos() {
  return (
    <svg viewBox="0 0 320 140" className="viz">
      <text x="14" y="22" fontFamily="var(--mono)" fontSize="8" fill="var(--text-dim)">agent · whatsapp · sheets</text>
      <rect x="14"  y="36" width="86" height="78" rx="4" fill="none" stroke="var(--border-strong)" />
      <rect x="118" y="36" width="86" height="78" rx="4" fill="none" stroke="var(--accent)" />
      <rect x="222" y="36" width="86" height="78" rx="4" fill="none" stroke="var(--border-strong)" />
      <line x1="100" y1="75" x2="118" y2="75" stroke="var(--accent)" />
      <line x1="204" y1="75" x2="222" y2="75" stroke="var(--accent)" />
      <text x="57"  y="80" fontFamily="var(--mono)" fontSize="9" fill="var(--text-dim)" textAnchor="middle">WhatsApp</text>
      <text x="161" y="80" fontFamily="var(--mono)" fontSize="9" fill="var(--accent)" textAnchor="middle">Claude</text>
      <text x="265" y="80" fontFamily="var(--mono)" fontSize="9" fill="var(--text-dim)" textAnchor="middle">Sheets</text>
    </svg>
  );
}

Object.assign(window, { Projects, ProjectVisual });
