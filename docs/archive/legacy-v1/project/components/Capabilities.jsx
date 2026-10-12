// Capabilities.jsx + Contact.jsx — last sections.

function Capabilities({ data }) {
  const cols = [data.strategy, data.build, data.operating];
  return (
    <section className="section caps" id="capabilities" data-screen-label="Capabilities">
      <SectionHeader number="05" label="Capabilities" />
      <div className="caps-grid">
        {cols.map((c, i) => (
          <div key={i} className="caps-col">
            <div className="caps-col-head">
              <span className="caps-col-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="caps-col-label">{c.label}</span>
            </div>
            <ul className="caps-list">
              {c.items.map((it, j) => (
                <li key={j}>
                  <span className="caps-tick">/</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ person }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section className="section contact" id="contact" data-screen-label="Contact">
      <SectionHeader number="06" label="Contact" />
      <div className="contact-grid">
        <div className="contact-prose">
          <h3 className="contact-headline">Looking for senior operator, RevOps, product, or founder-track conversations.</h3>
          <p className="muted">Best reached over email. I read everything; I reply to most.</p>

          <div className="contact-actions">
            <button className="btn btn-primary" onClick={copy}>
              {copied ? "Copied" : person.email}
              {!copied && <ArrowIcon />}
            </button>
            <a className="btn btn-ghost" href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={person.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <ContactForm person={person} />
      </div>

      <footer className="site-foot">
        <div className="muted small">© {new Date().getFullYear()} {person.name} · {person.location}</div>
        <div className="muted small mono">last build · {new Date().toLocaleDateString("en-CA")}</div>
      </footer>
    </section>
  );
}

function ContactForm({ person }) {
  const [name, setName] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [msg, setMsg]   = React.useState("");
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${from}`);
    const subject = encodeURIComponent(`Hello from ${name || "your site"}`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-row">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </div>
      <div className="contact-form-row">
        <label>Email</label>
        <input type="email" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="you@company.com" />
      </div>
      <div className="contact-form-row">
        <label>Message</label>
        <textarea rows="4" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="What you're working on. Short is fine." />
      </div>
      <button className="btn btn-primary contact-send" type="submit">
        {sent ? "Opening mail…" : "Send"}
        <ArrowIcon />
      </button>
      <div className="muted small">Falls back to mailto. No tracking, no form backend.</div>
    </form>
  );
}

Object.assign(window, { Capabilities, Contact });
