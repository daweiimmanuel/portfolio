// About.jsx — operator-voice paragraphs.

function About({ paragraphs }) {
  return (
    <section className="section about" id="about" data-screen-label="About">
      <SectionHeader number="01" label="About" />
      <div className="about-grid">
        <div className="about-side">
          <div className="about-card">
            <div className="about-card-kv">
              <span>Now</span>
              <b>Demand Planner & Business Specialist</b>
              <span className="muted">Asia Pulp & Paper · Specialty Paper BU</span>
            </div>
            <div className="about-card-kv">
              <span>Building</span>
              <b>Pintas</b>
              <span className="muted">Stablecoin settlement rail</span>
            </div>
            <div className="about-card-kv">
              <span>Trained</span>
              <b>CS + MBA</b>
              <span className="muted">Bina Nusantara · Prasetiya Mulya (Top 5)</span>
            </div>
          </div>
        </div>
        <div className="about-prose">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number, label, action }) {
  return (
    <div className="section-header">
      <div className="section-header-l">
        <span className="section-num">{number}</span>
        <span className="section-line" />
        <h2 className="section-label">{label}</h2>
      </div>
      {action ? <div className="section-header-r">{action}</div> : null}
    </div>
  );
}

Object.assign(window, { About, SectionHeader });
