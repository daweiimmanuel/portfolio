// ProjectModal.jsx — slide-in modal with problem / approach / outcome / stack.

function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <div className="modal-kicker">
            <span className="proj-tag">{project.accentLabel}</span>
            <span className="muted">{project.kicker}</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-summary">{project.summary}</p>

        <div className="modal-visual">
          <ProjectVisual id={project.id} />
        </div>

        <div className="modal-grid">
          <ModalField label="Problem"   value={project.problem} />
          <ModalField label="Approach"  value={project.approach} />
          <ModalField label="Outcome"   value={project.outcome} />
        </div>

        <div className="modal-stack">
          <div className="modal-stack-label">Stack</div>
          <div className="modal-stack-chips">
            {project.stack.map((s, i) => <span key={i} className="chip">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalField({ label, value }) {
  return (
    <div className="modal-field">
      <div className="modal-field-label">{label}</div>
      <div className="modal-field-value">{value}</div>
    </div>
  );
}

Object.assign(window, { ProjectModal });
