// Live availability client for the public site.
// 1. In Apps Script: Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone). Copy the /exec URL.
// 2. Paste it below. Leave empty to keep the demo slots.
// Slots come from the Google Sheet (Shifts, Bookings, Services, Settings tabs) via Availability.gs, so editing the Sheet updates the site immediately (20s server cache).
window.ALOUSH_API = (() => {
  const URL = ""; // e.g. "https://script.google.com/macros/s/AKfycb.../exec"
  const TTL = 30000; // client cache per (date, services)
  const cache = new Map();
  const toIso = d => { const p = n => String(n).padStart(2, "0"); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
  const to12 = t => { const [h, m] = t.split(":").map(Number); const hh = h > 12 ? h - 12 : h; return `${hh}:${String(m).padStart(2, "0")}`; };
  async function call(params) {
    const qs = new URLSearchParams(params).toString();
    const r = await fetch(`${URL}?${qs}`, { method: "GET", redirect: "follow" });
    const j = await r.json(); if (!j.ok) throw new Error(j.error || "API_ERROR"); return j.data;
  }
  async function getAvailability(date, serviceIds) {
    const key = toIso(date) + "|" + serviceIds.join(","); const hit = cache.get(key);
    if (hit && Date.now() - hit.t < TTL) return hit.v;
    const data = await call({ action: "getAvailability", date: toIso(date), serviceIds: serviceIds.join(",") });
    const v = { durationMin: data.durationMin, slots: (data.slots || []).map(t => ({ raw: t, label: to12(t) })) };
    cache.set(key, { t: Date.now(), v }); return v;
  }
  return { enabled: !!URL, url: URL, getAvailability, toIso };
})();
