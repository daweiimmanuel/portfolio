// Hero.jsx — name, headline, CTAs, animated metric ticker.

function Hero({ person, metrics, density }) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % metrics.length), 2800);
    return () => clearInterval(id);
  }, [metrics.length]);

  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-grid">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          <span>Available for senior operator / founding roles · Q3 26</span>
        </div>
        <h1 className="hero-name">
          {person.name}<span className="hero-comma">,</span>
        </h1>
        <p className="hero-headline">
          {person.headline}
        </p>
        <p className="hero-sub">{person.sub}</p>

        <div className="hero-cta-row">
          <a className="btn btn-primary" href={person.resumeUrl}>
            Resume
            <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href={`mailto:${person.email}`}>
            Get in touch
          </a>
          <a className="btn btn-ghost" href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="hero-meta">
          <span>{person.location}</span>
          <span className="dotsep">·</span>
          <span>MBA, Prasetiya Mulya · CS, Bina Nusantara</span>
        </div>
      </div>

      <div className="hero-ticker">
        <div className="ticker-label">
          <span className="ticker-tag">LIVE</span>
          <span>Operator metrics</span>
        </div>
        <div className="ticker-rows">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`ticker-row ${i === tick ? "is-active" : ""}`}
              onMouseEnter={() => setTick(i)}
            >
              <div className="ticker-value">
                <span className="ticker-num">{m.value}</span>
                <span className="ticker-unit">{m.unit}</span>
              </div>
              <div className="ticker-label-sm">{m.label}</div>
              <div className="ticker-bar"><span /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M3 10L10 3M10 3H4.5M10 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

Object.assign(window, { Hero });
