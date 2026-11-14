# صالون علوشا — website

Static site, no build step. Entry: `index.html` → `templates/landing-page/LandingPage.dc.html`.

## Deploy (GitHub Pages / Cloudflare Pages / Netlify)
Publish this folder's root. On GitHub Pages: Settings → Pages → Deploy from branch → `/ (root)`.

## Live availability
Set the Apps Script web-app URL in `templates/landing-page/api.js` (`const URL = ""`). Empty = demo slots. Backend code and setup steps are in the design project (`backend/`, `docs/admin-setup.md`).

## Notes
- Fonts load from Google Fonts.
- Keep the folder structure; pages use relative paths.
