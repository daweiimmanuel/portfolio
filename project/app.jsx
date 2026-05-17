// app.jsx — main composition + theming.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1f7a6b",
  "type": "inter",
  "dark": true,
  "density": "regular",
  "pintasVariant": "pipeline",
  "showTicker": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = [
  "#1f7a6b", // deep teal (default)
  "#d97706", // warm amber
  "#b45309", // burnt amber
  "#8b6f3f", // muted ochre
];

const TYPE_PRESETS = {
  inter:    { sans: '"Inter", ui-sans-serif, system-ui, sans-serif', display: '"Inter", ui-sans-serif, system-ui, sans-serif' },
  geist:    { sans: '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif', display: '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif' },
  ibmplex:  { sans: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif', display: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const C = window.PORTFOLIO_CONTENT;
  const [openProject, setOpenProject] = React.useState(null);

  // Apply theme tokens to the root.
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.dataset.theme = t.dark ? "dark" : "light";
    root.dataset.density = t.density;
    const fonts = TYPE_PRESETS[t.type] || TYPE_PRESETS.inter;
    root.style.setProperty("--sans", fonts.sans);
    root.style.setProperty("--display", fonts.display);
  }, [t.accent, t.dark, t.density, t.type]);

  const project = C.projects.find((p) => p.id === openProject);

  return (
    <div className="root">
      <Nav person={C.person} />
      <main className="main">
        <Hero person={C.person} metrics={C.metrics} />
        <About paragraphs={C.about} />
        <Experience items={C.experience} />
        <Projects items={C.projects} onOpen={setOpenProject} />
        <Pintas data={C.pintas} variant={t.pintasVariant} />
        <Capabilities data={C.capabilities} />
        <Contact person={C.person} />
      </main>

      <ProjectModal project={project} onClose={() => setOpenProject(null)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)} />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENT_PRESETS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSection label="Typography" />
        <TweakRadio
          label="Family"
          value={t.type}
          options={["inter", "geist", "ibmplex"]}
          onChange={(v) => setTweak('type', v)}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSection label="Pintas — signature interaction" />
        <TweakRadio
          label="Variant"
          value={t.pintasVariant}
          options={["pipeline", "compare", "ticker"]}
          onChange={(v) => setTweak('pintasVariant', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
