// Experience.jsx — vertical timeline with click-to-expand cards.

function Experience({ items }) {
  const [open, setOpen] = React.useState(items[0]?.id);

  return (
    <section className="section experience" id="experience" data-screen-label="Experience">
      <SectionHeader number="02" label="Experience" />
      <div className="exp-list">
        {items.map((it, i) => (
          <ExperienceCard
            key={it.id}
            item={it}
            isFirst={i === 0}
            isLast={i === items.length - 1}
            open={open === it.id}
            onToggle={() => setOpen(open === it.id ? null : it.id)}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ item, open, onToggle, isFirst, isLast }) {
  return (
    <div className={`exp-card ${open ? "is-open" : ""}`}>
      <div className="exp-rail">
        <span className={`exp-node ${isFirst ? "is-now" : ""}`} />
        <span className={`exp-line ${isLast ? "is-last" : ""}`} />
      </div>
      <button className="exp-head" onClick={onToggle} aria-expanded={open}>
        <div className="exp-head-l">
          <div className="exp-period">{item.period}{item.location ? ` · ${item.location}` : ""}</div>
          <div className="exp-company">{item.company}</div>
          <div className="exp-role">{item.role}</div>
        </div>
        <div className="exp-head-r">
          <ChevronIcon open={open} />
        </div>
      </button>
      <div className="exp-body" style={{ display: open ? "block" : "none" }}>
        <div className="exp-scope">{item.scope}</div>
        <ol className="exp-outcomes">
          {item.outcomes.map((o, i) => (
            <li key={i}>
              <span className="exp-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{o}</span>
            </li>
          ))}
        </ol>
        <div className="exp-stack">
          {item.stack.map((s, i) => <span key={i} className="chip">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
         style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }}>
      <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

Object.assign(window, { Experience });
