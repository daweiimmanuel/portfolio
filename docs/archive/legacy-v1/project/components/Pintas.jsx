// Pintas.jsx — signature interaction, 3 variants.
//   variant: 'pipeline' | 'compare' | 'ticker'

function Pintas({ data, variant }) {
  return (
    <section className="section pintas" id="pintas" data-screen-label="Pintas flow">
      <SectionHeader
        number="04"
        label="Pintas — settlement flow"
        action={<span className="section-aside">Signature interaction · hover the rail</span>}
      />
      <div className="pintas-frame">
        <div className="pintas-frame-head">
          <div className="pintas-frame-head-l">
            <span className="pintas-mark">PINTAS</span>
            <span className="muted">B2B cross-border settlement — Indonesia → counterparty</span>
          </div>
          <div className="pintas-frame-head-r">
            <span className="chip-mono">v0.4 · pilot</span>
          </div>
        </div>
        {variant === "compare" && <PintasCompare data={data} />}
        {variant === "ticker"  && <PintasTicker  data={data} />}
        {(!variant || variant === "pipeline") && <PintasPipeline data={data} />}
      </div>
    </section>
  );
}

/* ─── Variant 1: animated horizontal pipeline ─── */
function PintasPipeline({ data }) {
  const [hover, setHover] = React.useState(null);

  return (
    <div className="pntp">
      <div className="pntp-legs">
        {data.legs.map((leg, i) => (
          <React.Fragment key={leg.id}>
            <div
              className={`pntp-leg ${hover === leg.id ? "is-hover" : ""}`}
              onMouseEnter={() => setHover(leg.id)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="pntp-leg-idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="pntp-leg-label">{leg.label}</div>
              <div className="pntp-leg-detail">{leg.detail}</div>
              <div className="pntp-node">
                <span className="pntp-node-ring" />
                <span className="pntp-node-dot" />
              </div>
            </div>
            {i < data.legs.length - 1 && (
              <div className="pntp-link">
                <svg viewBox="0 0 200 24" preserveAspectRatio="none" className="pntp-link-svg">
                  <line x1="0" y1="12" x2="200" y2="12" stroke="var(--border-strong)" strokeWidth="1" />
                  <circle r="3" fill="var(--accent)">
                    <animate attributeName="cx" values="0;200" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="12;12" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="var(--accent)" opacity=".55">
                    <animate attributeName="cx" values="0;200" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="12;12" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="var(--accent)" opacity=".3">
                    <animate attributeName="cx" values="0;200" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="12;12" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="pntp-foot">
        <div className="pntp-foot-cell">
          <div className="muted">Settlement</div>
          <div className="pntp-foot-val accent">~ minutes</div>
        </div>
        <div className="pntp-foot-cell">
          <div className="muted">Fees</div>
          <div className="pntp-foot-val">≈ {data.pintasRail.fee}</div>
        </div>
        <div className="pntp-foot-cell">
          <div className="muted">FX uplift</div>
          <div className="pntp-foot-val">{data.pintasRail.lift}</div>
        </div>
        <div className="pntp-foot-cell">
          <div className="muted">Coverage</div>
          <div className="pntp-foot-val">TransFi · Zero Hash</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Variant 2: side-by-side compare vs SWIFT ─── */
function PintasCompare({ data }) {
  return (
    <div className="pntc">
      <div className="pntc-col">
        <div className="pntc-col-head">
          <span className="pntc-tag pntc-tag-old">Legacy</span>
          <span className="pntc-col-name">SWIFT correspondent</span>
        </div>
        <CompareBars label="Time to settle"   value="3–5 days"     pct={1.0}  tone="dim"  unit="days" />
        <CompareBars label="Fee per transfer" value={data.swift.fee} pct={0.85} tone="dim" />
        <CompareBars label="FX spread"        value={data.swift.lift} pct={0.95} tone="dim" />
        <div className="pntc-foot muted">Opaque routing through correspondent chain. Cost surfaces on reconciliation.</div>
      </div>
      <div className="pntc-arrow">
        <div className="pntc-arrow-line" />
        <div className="pntc-arrow-tip">→</div>
      </div>
      <div className="pntc-col pntc-col-new">
        <div className="pntc-col-head">
          <span className="pntc-tag pntc-tag-new">Pintas rail</span>
          <span className="pntc-col-name">Stablecoin settlement</span>
        </div>
        <CompareBars label="Time to settle"   value="minutes"           pct={0.04} tone="accent" />
        <CompareBars label="Fee per transfer" value={data.pintasRail.fee} pct={0.18} tone="accent" />
        <CompareBars label="FX spread"        value={data.pintasRail.lift} pct={0.30} tone="accent" />
        <div className="pntc-foot muted">USD on-ramp → USDC/USDT corridor → USD off-ramp. Receiver sees USD only.</div>
      </div>
    </div>
  );
}

function CompareBars({ label, value, pct, tone }) {
  return (
    <div className="cmpr">
      <div className="cmpr-l">{label}</div>
      <div className="cmpr-bar"><span className={`cmpr-fill cmpr-${tone}`} style={{ width: (pct * 100) + "%" }} /></div>
      <div className={`cmpr-v cmpr-v-${tone}`}>{value}</div>
    </div>
  );
}

/* ─── Variant 3: live-feeling counter ─── */
function PintasTicker({ data }) {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Simulate a Pintas transfer cycling through stages.
  const cycle = 12; // seconds
  const phase = t % cycle;
  const stage =
    phase < 2 ? 0 :
    phase < 8 ? 1 :
    phase < 11 ? 2 : 3;
  const stageNames = ["Initiated", "Stablecoin leg", "Off-ramp", "Settled"];
  const elapsed = (phase + 1).toFixed(0);
  const swiftEq = ((phase + 1) * 0.05).toFixed(2); // visual stand-in

  return (
    <div className="pntt">
      <div className="pntt-top">
        <div className="pntt-top-cell">
          <div className="muted">Reference</div>
          <div className="mono">PTX-{(10240 + Math.floor(t / cycle)).toString().padStart(6, "0")}</div>
        </div>
        <div className="pntt-top-cell">
          <div className="muted">Sender</div>
          <div>Indonesian exporter · USD</div>
        </div>
        <div className="pntt-top-cell">
          <div className="muted">Receiver</div>
          <div>Counterparty bank · USD</div>
        </div>
        <div className="pntt-top-cell">
          <div className="muted">Notional</div>
          <div className="mono">USD 248,500.00</div>
        </div>
      </div>

      <div className="pntt-stages">
        {stageNames.map((name, i) => (
          <div key={i} className={`pntt-stage ${i <= stage ? "is-done" : ""} ${i === stage ? "is-now" : ""}`}>
            <span className="pntt-stage-dot" />
            <span className="pntt-stage-name">{name}</span>
            <span className="pntt-stage-time mono">{i <= stage ? "00:0" + Math.min(9, i * 3) : "—"}</span>
          </div>
        ))}
      </div>

      <div className="pntt-bottom">
        <div className="pntt-bottom-cell">
          <div className="muted">Pintas — elapsed</div>
          <div className="pntt-big accent mono">00:{elapsed.padStart(2, "0")}</div>
        </div>
        <div className="pntt-bottom-cell">
          <div className="muted">SWIFT equivalent</div>
          <div className="pntt-big mono">{swiftEq}d <span className="muted small">/ ~3.5d typical</span></div>
        </div>
        <div className="pntt-bottom-cell">
          <div className="muted">Fee delta</div>
          <div className="pntt-big mono accent">−82%</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Pintas });
