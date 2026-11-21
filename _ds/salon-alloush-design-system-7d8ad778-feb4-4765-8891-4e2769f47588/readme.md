# Salon Alloush Design System — صالون الكوافير علوش

## Context
**Business:** صالون علوش (Alosh Beauty Salon) — a women’s beauty salon in Baghdad: hair, nails, brows, makeup and bridal. The supplied photo shows the stylist علوش fixing a bride’s tiara.
**Address (from the brief, supersedes the earlier one):** بغداد، اليرموك، شارع الزيتون، نهاية مندي الجزيرة، طابق ٢. Phone 07777939043 · hours من 10 الصبح للـ 8 بالليل · Instagram @coiffure_alosh_1.
**Address (verbatim from the brief):** البنوك، شارع بانزين خانه، مقابيل بيت المدلل، مجاور الكوخ، بنايه مندي الجزيرة، طابق ثاني — Baghdad, Iraq.

**Sources provided:** the one-line company description, one photo (`assets/hero.jpg`, from `uploads/pasted-1794345156127-0.png`), and the instruction “colour palette black and white”. No logo file, no fonts, no Figma, no codebase, no existing site. Everything here is an original, from-scratch direction chosen for the brand, not a recreation. Replace with real material as soon as it exists.

**Products represented (from the build brief, Nov 2026):**
1. Customer booking website — `templates/landing-page/` (landing + 5-step booking sheet, black/white + warm photo accents). An earlier simpler variant lives in `ui_kits/booking-site/`.
2. Receptionist dashboard — `ui_kits/receptionist/` (admin, mobile-first, dark warm theme).
3. Employee dashboard — `ui_kits/employee/` (login code, اليوم / مواعيدي / دوامي).
System design, schema, backend scaffold and handoff: `docs/`, `backend/`, `HANDOFF.md`.

## Logo
Calligraphic "A" monogram supplied 14 Nov 2026 (`uploads/pasted-1794695468994-0.png`). Transparent cutouts: `assets/logo-light.png` (cream, for dark grounds) and `assets/logo-dark.png` (charcoal, for light grounds). Headers show the mark beside the **علوش** wordmark; the `Wordmark` component remains for type-only contexts.

## Direction (from the “Premium Arabic-First Salon Website” brief)
Matte black foundation; warm orange, pink, burgundy, brown and beige for personality; frosted glass for the interface; cinematic photography for desire. Oversized editorial Alexandria headlines, IBM Plex Sans Arabic body, rounded translucent cards, pill buttons, soft motion. No gold, no metallic gradients, no salon illustrations.

---

## CONTENT FUNDAMENTALS
- **Language:** simple, natural **Iraqi Arabic**, feminine address (كاف المؤنث written ج): «احجزي موعدج», «جمالج، على ذوقج», «شوفي شغلنا», «تواصلي ويّانا». No formal corporate Arabic, no exaggerated claims.
- **Voice:** the salon is «إحنا» (نساعدج، ننتظرج); the customer is «إنتِ».
- **Headlines:** short, 2–5 words, often ending with a period: «جمالج، على ذوقج.», «شغلنا يحچي عنّا.», «تعالي نلتقي.», «موعدج الجاي صار أسهل.».
- **Body:** one conversational sentence: «اختاري الخدمة، حددي الوقت المناسب إلج، وثبتي حجزج خلال دقايق.».
- **Buttons:** feminine imperative: «احجزي موعدج», «احجزي هسه», «شوفي شغلنا», «اكتشفي خدمات الشعر», «ادفعي العربون وثبتي الحجز».
- **Booking step headings (verbatim):** شنو الخدمة اللي تحتاجيها؟ / شوكت يناسبج الموعد؟ / باقي بس معلوماتج. / ثبتي حجزج. / تم حجز موعدج!
- **Numbers:** phone and hours as in the brief (Western digits: 07777939043, من 10 الصبح للـ 8 بالليل); money in Eastern Arabic digits with د.ع after (٥٠٬٠٠٠ د.ع). **Never invent prices** — show «السعر عند الحجز» / «يُحدد بالصالون».
- **Punctuation:** Arabic comma «،», middle dot «·» between meta items. No emoji.

## TWO THEMES
- **Customer (default tokens):** black & white, photos as the only warmth.
- **Staff (`tokens/staff.css`, `.theme-staff`):** deep black/charcoal, frosted glass (`--glass` + `--blur`), beige / dusty pink / orange / terracotta accents, 12–28px radii, pill buttons, 48px tap targets, bottom nav. Status colours `--st-*` (مؤكّد green, بانتظار التوزيع amber, قيد الخدمة blue, مكتمل purple, ملغي red, بانتظار الدفع grey) are separate from employee identity colours `--emp-*`; both always carry a text label.

## VISUAL FOUNDATIONS
- **Colors:** Matte black `--black` #0B0A0A is the main background, charcoal `--charcoal` #211B1B for secondary surfaces and cards. Accents: burnt orange #C65A32 (hair, primary pay button), dusty pink #D58B91 (nails), burgundy #842D39 (bridal), chocolate brown #674338. Warm beige #E8C8AD for highlights/eyebrows/secondary text; ivory #F5EFE9 for all primary typography. Status colours are warm-muted and used only for booking states. Soft blurred radial washes of the accents sit behind glass; never hard gradients, never gold/metallic.
- **Glass:** `--glass-bg` rgba(33,27,27,.55) (strong .78), `backdrop-filter: blur(20px)`, 1px `--glass-border` rgba(245,239,233,.16), `--shadow-lg` plus an inset 1px ivory highlight. Used for nav, primary booking buttons, service-card panels, the booking sheet, confirmation, and the mobile bottom bar — not for plain text blocks.
- **Type:** **Alexandria** 500–700 for headlines (hero clamp(46px–112px), section h2 clamp(30–52px), line-height 1.08–1.15, `text-wrap: balance`); **IBM Plex Sans Arabic** 300–700 for body (16–17px / 1.8–1.9), labels 14/500, captions 12 with .12em tracking for eyebrows. Both from Google Fonts.
- **Spacing:** 4px scale; sections 96–112px apart; container 1180 with 24px side padding; card padding 20–36; controls 42–54px tall (touch targets ≥ 44).
- **Radius:** 10 / 16 / 24 / 32px (`--radius-sm…xl`); buttons and chips are pills.
- **Borders:** fine translucent ivory lines (.1–.2 alpha) instead of solid strokes; focused inputs brighten the border to beige.
- **Shadows:** deep, soft, black (`0 20–32px 60–80px -20px rgba(0,0,0,.7)`) only under floating glass.
- **Backgrounds & imagery:** black with blurred warm radial washes; cinematic beauty editorial photos on black, full-bleed, with a black bottom-up protection gradient under text. Service cards and portfolio tiles are labelled placeholders until real photos arrive.
- **Motion:** 150ms hover, 300ms toggles, 400–900ms reveals; ease-out cubic-bezier(.2,.7,.2,1). Hero wash drifts slowly (18s); content rises 24px on load. All animation is disabled under `prefers-reduced-motion`. No bounces.
- **Hover:** glass lightens and lifts 2–6px; links go dusty pink. **Press:** scale(.98). **Disabled:** 45% opacity.
- **Layout:** fixed pill nav 16px from the top; mobile gets a fixed glass bottom bar with the booking CTA; booking is a bottom sheet (max 600px wide) on every size; sections stack to one column below ~900px.

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) via CDN (`lucide-static@0.460.0`), 2px stroke, rendered through the `Icon` component, which fetches and inlines the SVG (cached per name, `currentColor` stroke) with a CSS-mask fallback while loading. This is a substitution; no brand icon set exists. Sizes 14/16/18/20/22.
- **Vocabulary:** sparkles, scissors, calendar, clock, map-pin, navigation, phone, star, check, x, chevron-left/right/down, menu, user, search, loader-circle, instagram, facebook, circle-check, triangle-alert, circle-x, info.
- **Rules:** icons always sit beside a text label except in `IconButton` (which requires `label`). Rating stars are orange filled / beige-dim empty. The landing page uses only «←» and «✓» glyphs inline. No icon font, no PNG icons, no emoji, no Unicode glyphs as icons (the middle dot «·» is punctuation, not an icon).
- **Assets:** `assets/hero.jpg` (supplied photo), `assets/logo-light.png` / `assets/logo-dark.png` (monogram cutouts), `assets/work/*.jpg` (25 portfolio crops from the salon's Instagram, Nov 2026).

## Intentional additions
- `Icon` — wrapper for the Lucide glyph set.
- `Field` — label/hint/error wrapper so Input and Select stay thin.
- `Wordmark` — type-only stand-in for a missing logo.
- `RadioGroup` (in `Radio.jsx`) — convenience over `Radio`.

## Components
`components/core/`: Button, IconButton, Icon, Badge, Tag, Wordmark
`components/forms/`: Field, Input, Select, Checkbox, Radio, RadioGroup, Switch
`components/surfaces/`: Card, Tabs, Dialog, Toast, Tooltip
Each has `.jsx`, `.d.ts`, `.prompt.md`; cards: `core.card.html`, `forms.card.html`, `surfaces.card.html`.

## Templates
- `templates/landing-page/LandingPage.dc.html` — the Alosh homepage + 5-step booking sheet (Tweaks: demoSlots, previewStep, stickyCta). Services are a curved 3D carousel (`ServiceCarousel.jsx`: perspective arc, drag/swipe/wheel with spring snap, RTL glass arrows, pagination, arc line; hand-rolled rAF spring instead of Framer Motion/GSAP so it has no dependencies). Payment step stops at “awaiting Wayl”; confirmation is reachable only via the previewStep tweak.

## Index
- `docs/architecture.md`, `docs/testing.md`, `docs/admin-setup.md`; `backend/*.gs`; `HANDOFF.md`.
- `ui_kits/receptionist/`, `ui_kits/employee/`, `ui_kits/shared/` (staff-ui.jsx, salon-data.js, ios-frame.jsx).
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `guidelines/` — 17 specimen cards (Colors ×6, Type ×4, Spacing ×4, Brand ×3).
- `components/` — see above.
- `ui_kits/booking-site/` — `index.html` + `Shell.jsx`, `Home.jsx`, `Services.jsx`, `Book.jsx`, `Location.jsx`, `data.js`, `README.md`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — agent skill entry point.
- `assets/hero.jpg` — the supplied salon photo.

## Caveats
- Fonts are Google Fonts (IBM Plex Sans Arabic, Alexandria) loaded by `@import`; no binaries shipped.
- `ui_kits/booking-site/` predates the brief: it inherits the new tokens but keeps MSA copy and the old (البنوك) address and invented prices — treat the landing-page template as the source of truth.
- The map is a placeholder.
- No payment or availability backend; the booking sheet never confirms a booking by itself.
