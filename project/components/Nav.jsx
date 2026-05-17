// Nav.jsx — fixed top nav with anchor links and theme/density tweak indicator.

function Nav({ person }) {
  const [active, setActive] = React.useState("top");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const ids = ["top", "about", "experience", "projects", "pintas", "capabilities", "contact"];
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Work"],
    ["pintas", "Pintas"],
    ["capabilities", "Capabilities"],
    ["contact", "Contact"],
  ];

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="nav-brand" href="#top">
        <span className="nav-mark">{person.initials}</span>
        <span className="nav-brand-name">{person.name}</span>
        <span className="nav-brand-divider" />
        <span className="nav-brand-role muted">Operator · Jakarta</span>
      </a>
      <div className="nav-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
            {label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href={`mailto:${person.email}`}>
        Get in touch
        <ArrowIcon />
      </a>
    </nav>
  );
}

Object.assign(window, { Nav });
