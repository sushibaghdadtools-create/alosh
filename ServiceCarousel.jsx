const { useState, useRef, useEffect, useCallback } = React;
const CARDS = [
  { id: "hair", title: "الشعر", desc: "قص، صبغ، تسريحات وعناية بالشعر.", cta: "اكتشفي خدمات الشعر", accent: "#C65A32", icon: "scissors", photo: "شعر", img: "./assets/work/hair-ponytail.jpg", bg: "radial-gradient(70% 60% at 70% 30%,rgba(198,90,50,.8),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(103,67,56,.85),transparent 70%),#211B1B" },
  { id: "nails", title: "الأظافر", desc: "مانيكير، بديكير وتركيب أظافر.", cta: "اكتشفي خدمات الأظافر", accent: "#D58B91", icon: "hand", photo: "أظافر", img: "./assets/work/nails-french.jpg", bg: "radial-gradient(70% 60% at 70% 30%,rgba(213,139,145,.8),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(132,45,57,.75),transparent 70%),#211B1B" },
  { id: "brows", title: "الحواجب", desc: "ترتيب وتحديد الحواجب.", cta: "اكتشفي خدمات الحواجب", accent: "#E8C8AD", icon: "eye", photo: "حواجب", img: "./assets/work/brows-tattoo.jpg", bg: "radial-gradient(70% 60% at 70% 30%,rgba(232,200,173,.6),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(103,67,56,.85),transparent 70%),#211B1B" },
  { id: "bridal", title: "العرايس", desc: "مكياج وتسريحات ليومج المميز.", cta: "اكتشفي خدمات العرايس", accent: "#842D39", icon: "crown", photo: "عروس", img: "./assets/work/bride-tiara.jpg", bg: "radial-gradient(70% 60% at 70% 30%,rgba(132,45,57,.85),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(245,239,233,.3),transparent 70%),#211B1B" }
];
// Repeat the deck so the ring always has at least 8 slots — keeps 5 cards in view with 4 services.
const REP = Math.max(1, Math.ceil(8 / CARDS.length));
const RING = Array.from({ length: CARDS.length * REP }, (_, i) => CARDS[i % CARDS.length]);
const N = RING.length;
const wrap = d => { d = ((d % N) + N) % N; return d > N / 2 ? d - N : d; };

function ServiceCarousel({ onSelect, compact }) {
  const ICONS = {"scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M8.12 8.12 12 12\"/><path d=\"M20 4 8.12 15.88\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M14.8 14.8 20 20\"/>","hand":"<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/><path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\"/><path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\"/><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/>","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","crown":"<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\"/><path d=\"M5 21h14\"/>"};
  const Icon = ({ name, size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] || "" }} />;
  const wrapRef = useRef(null);
  const [w, setW] = useState(1100);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 800);
  const [pos, setPos] = useState(0);
  const [hover, setHover] = useState(null);
  const phys = useRef({ pos: 0, v: 0, target: 0, dragging: false, lastX: 0, lastT: 0, moved: 0, raf: 0 });
  const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => { const m = () => { wrapRef.current && setW(wrapRef.current.clientWidth); setVh(window.innerHeight); }; m(); window.addEventListener("resize", m); return () => window.removeEventListener("resize", m); }, []);

  const tick = useCallback(() => {
    const p = phys.current; let last = performance.now();
    const step = now => {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!p.dragging) {
        if (reduced) { p.pos = p.target; p.v = 0; }
        else { const k = 110, c = 2 * Math.sqrt(k) * .95; p.v += (p.target - p.pos) * k * dt - p.v * c * dt; p.pos += p.v * dt; }
      }
      setPos(p.pos);
      if (p.dragging || Math.abs(p.target - p.pos) > .0005 || Math.abs(p.v) > .0005) p.raf = requestAnimationFrame(step); else { p.pos = p.target; setPos(p.target); p.raf = 0; }
    };
    if (!p.raf) p.raf = requestAnimationFrame(step);
  }, [reduced]);

  const go = useCallback(t => { const p = phys.current; p.target = t; tick(); }, [tick]);
  const goTo = i => { const p = phys.current; go(Math.round(p.pos) + wrap(i - Math.round(p.pos))); };

  const mobile = w < 720;
  const ppc = mobile ? w * .62 : Math.min(360, w * .3);
  const onDown = e => { const p = phys.current; p.dragging = true; p.lastX = e.clientX; p.lastT = performance.now(); p.v = 0; p.moved = 0; e.currentTarget.setPointerCapture(e.pointerId); tick(); };
  const onMove = e => { const p = phys.current; if (!p.dragging) return; const dx = e.clientX - p.lastX, now = performance.now(), dt = Math.max(1, now - p.lastT) / 1000; p.pos -= dx / ppc; p.v = -(dx / ppc) / dt; p.lastX = e.clientX; p.lastT = now; p.moved += Math.abs(dx); };
  const onUp = () => { const p = phys.current; if (!p.dragging) return; p.dragging = false; const proj = p.pos + p.v * .18; p.v = Math.max(-6, Math.min(6, p.v)); go(Math.round(proj)); };
  const onWheel = e => { if (Math.abs(e.deltaX) < 4) return; const p = phys.current; p.target = Math.round(p.pos + Math.sign(e.deltaX)); tick(); };
  useEffect(() => () => cancelAnimationFrame(phys.current.raf), []);

  // Geometry derived from container width so the center card plus two neighbours per side (5) always fit.
  const ratio = compact ? 1.2 : 1.38;
  let cardW = mobile ? Math.min(compact ? 170 : 220, w * .42) : Math.min(compact ? 220 : 280, w * .2);
  if (compact) cardW = Math.min(cardW, (vh * .4) / ratio); // fit above the fold on short viewports
  const cardH = cardW * ratio;
  const stepX = (w - cardW) / 4; // horizontal distance between neighbouring slots
  const theta = mobile ? 22 : 16, R = stepX / Math.sin(theta * Math.PI / 180), lift = mobile ? .55 : .7;
  const active = ((Math.round(pos) % N) + N) % N % CARDS.length;
  const glass = { background: "rgba(33,27,27,.82)", border: "1px solid rgba(245,239,233,.16)" };
  const navBtn = { width: mobile || compact ? 44 : 52, height: mobile || compact ? 44 : 52, borderRadius: 999, ...glass, color: "#F5EFE9", fontSize: 20, cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "0 16px 40px -16px rgba(0,0,0,.8),inset 0 1px 0 rgba(245,239,233,.12)", transition: "background .2s,transform .2s" };

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%", userSelect: "none", touchAction: "pan-y" }}>
      <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onWheel={onWheel}
        style={{ position: "relative", height: cardH + (mobile ? (compact ? 16 : 50) : (compact ? 36 : 150)), perspective: 1400, perspectiveOrigin: "50% 30%", cursor: phys.current.dragging ? "grabbing" : "grab", overflow: "hidden" }}>
        {!compact && <svg aria-hidden="true" viewBox="0 0 1000 220" preserveAspectRatio="none" style={{ position: "absolute", left: "-6%", right: "-6%", width: "112%", bottom: mobile ? 6 : 14, height: mobile ? 90 : 150, opacity: .5, pointerEvents: "none" }}><path d="M0 0 Q 500 440 1000 0" fill="none" stroke="url(#alosh-arc)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /><defs><linearGradient id="alosh-arc" x1="0" x2="1"><stop offset="0" stopColor="#E8C8AD" stopOpacity="0" /><stop offset=".5" stopColor="#E8C8AD" /><stop offset="1" stopColor="#E8C8AD" stopOpacity="0" /></linearGradient></defs></svg>}
        {RING.map((c, i) => {
          const d = wrap(i - pos); if (Math.abs(d) > 3.2) return null; const a = d * theta * Math.PI / 180; const cos = Math.cos(a), sin = Math.sin(a);
          const x = R * sin, y = -R * (1 - cos) * lift, z = -R * (1 - cos) * 1.1;
          const depth = 1 - cos; const scale = Math.max(.6, 1 - depth * 2.4); const isHover = hover === i, center = Math.abs(d) < .5;
          const op = Math.max(0, Math.min(1, 1.15 - Math.abs(d) * .3));
          return (
            <div key={c.id + "-" + i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              onClick={() => { if (phys.current.moved > 6) return; center ? onSelect && onSelect(c.id) : goTo(i); }}
              style={{ position: "absolute", left: "50%", top: compact ? 8 : (mobile ? 10 : 30), width: cardW, height: cardH, marginLeft: -cardW / 2, transformStyle: "preserve-3d", transform: `translate3d(${x}px,${y}px,${z}px) rotateY(${-d * theta * .9}deg) rotateZ(${d * theta * .22}deg) scale(${scale * (isHover ? 1.04 : 1)})`, opacity: op, zIndex: Math.round(100 - depth * 100), willChange: "transform", pointerEvents: op < .15 ? "none" : "auto", cursor: center ? "pointer" : "grab" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 26, overflow: "hidden", border: `1px solid rgba(245,239,233,${isHover ? .34 : .16})`, boxShadow: `inset 0 1px 0 rgba(245,239,233,${isHover ? .28 : .14})`, background: "#211B1B", transition: "border-color .3s,box-shadow .3s" }}>
                <div style={{ position: "absolute", inset: 0, background: c.bg,  }} />
                {c.img && <img src={c.img} alt="" draggable="false" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", opacity: isHover ? .95 : .85, transition: "opacity .3s" }} />}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(11,10,10,.9) 0%,rgba(11,10,10,.25) 55%,rgba(11,10,10,0) 100%)" }} />
                <div style={{ position: "absolute", left: "-30%", top: "-40%", width: "80%", height: "70%", background: "linear-gradient(120deg,rgba(245,239,233,0) 30%,rgba(245,239,233,.16) 50%,rgba(245,239,233,0) 70%)", transform: `rotate(${12 + d * 10}deg)`, opacity: isHover ? 1 : .55, transition: "opacity .3s", pointerEvents: "none" }} />
                {!c.img && <span style={{ position: "absolute", top: 16, right: 16, padding: "5px 11px", borderRadius: 999, background: "rgba(11,10,10,.4)", border: "1px solid rgba(245,239,233,.12)", fontSize: 11, color: "#E8C8AD" }}>صورة {c.photo}</span>}
                <div style={{ position: "absolute", left: 8, right: 8, bottom: 8, padding: mobile || compact ? "10px 10px 8px" : "18px 18px 16px", borderRadius: mobile || compact ? 12 : 18, ...glass, boxShadow: "inset 0 1px 0 rgba(245,239,233,.12)", display: "grid", gap: 6, color: "#F5EFE9", direction: "rtl", textAlign: "right" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ width: mobile || compact ? 26 : 36, height: mobile || compact ? 26 : 36, borderRadius: 999, display: "grid", placeItems: "center", background: `${c.accent}26`, border: `1px solid ${c.accent}66`, color: c.accent }}>{Icon ? <Icon name={c.icon} size={mobile || compact ? 13 : 18} /> : null}</span>
                    <span style={{ fontFamily: "Alexandria,sans-serif", fontSize: 12, color: c.accent, fontWeight: 600 }}>{"0" + (i % CARDS.length + 1)}</span>
                  </div>
                  <h3 style={{ margin: "4px 0 0", fontFamily: "Alexandria,sans-serif", fontWeight: 600, fontSize: mobile || cardW < 170 ? 18 : cardW <= 220 ? 22 : 28, lineHeight: 1.15 }}>{c.title}</h3>
                  <p style={{ margin: 0, fontSize: mobile || cardW < 170 ? 12.5 : 13.5, lineHeight: 1.5, color: "#E8C8AD", display: compact && cardW < 150 ? "none" : "block" }}>{c.desc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: mobile ? 12.5 : 13, fontWeight: 500, marginTop: 4, whiteSpace: "nowrap", maxHeight: !mobile && (isHover || center) ? 24 : 0, opacity: !mobile && (isHover || center) ? 1 : 0, overflow: "hidden", transition: "opacity .3s,max-height .3s" }}>{cardW <= 220 ? "اكتشفي" : c.cta}<span style={{ color: c.accent }}>←</span></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: compact ? 14 : 22, marginTop: compact ? 12 : 8, direction: "rtl" }}>
        <button aria-label="السابق" onClick={() => go(phys.current.target - 1)} style={navBtn} onMouseEnter={e => e.currentTarget.style.background = "rgba(53,43,43,.75)"} onMouseLeave={e => e.currentTarget.style.background = glass.background}>→</button>
        <div style={{ display: "flex", gap: 4 }}>{CARDS.map((c, i) => <button key={c.id} aria-label={c.title} onClick={() => goTo(i)} style={{ height: 44, padding: "0 2px", border: 0, background: "transparent", cursor: "pointer", display: "grid", placeItems: "center" }}><span style={{ display: "block", width: i === active ? 26 : 8, height: 8, borderRadius: 999, background: i === active ? c.accent : "rgba(245,239,233,.25)", transition: "width .3s,background .3s" }} /></button>)}</div>
        <button aria-label="التالي" onClick={() => go(phys.current.target + 1)} style={navBtn} onMouseEnter={e => e.currentTarget.style.background = "rgba(53,43,43,.75)"} onMouseLeave={e => e.currentTarget.style.background = glass.background}>←</button>
      </div>
    </div>
  );
}
window.ServiceCarousel = ServiceCarousel;
if (typeof module !== "undefined") module.exports = { ServiceCarousel };
