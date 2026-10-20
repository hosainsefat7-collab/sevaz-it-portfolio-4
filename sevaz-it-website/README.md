# SevaZ IT Website

Static, dependency-free website (HTML, CSS, JavaScript). No build step. Upload the folder to any web host.

## Structure
```
index.html              Page content and SEO metadata
404.html                Not-found page
assets/css/styles.css   All styling and design tokens (colors are CSS variables in :root)
assets/js/config.js     Site settings: form endpoint, contact email
assets/js/projects.js   Portfolio projects (edit this to add real work)
assets/js/main.js       Animations, navigation, filters, form logic
assets/img/             Images, favicon, social share image
robots.txt, sitemap.xml, site.webmanifest
_headers, vercel.json   Security and caching headers (Netlify/Cloudflare, Vercel)
set-domain.py           Sets your domain in index.html, sitemap.xml, robots.txt
```

## Preview locally
```
python3 -m http.server 8000
```
Open http://localhost:8000

## Before you launch (checklist)
1. **Set your domain:** `python3 set-domain.py https://www.yourdomain.com`
2. **Connect the contact form** (below). Until then it only opens the visitor's email app.
3. **Replace portfolio images.** The six sample images appear to be stock or third-party graphics. Use your own work or properly licensed images, then edit `assets/js/projects.js`. Set `label` to `""` for real projects.
4. **Founder photo:** replace `assets/img/founder-sefat-hosain.webp` if needed (keep a similar size, under about 150 KB).
5. **Social links:** add real profile URLs in the footer of `index.html`, and as a `"sameAs": [ ... ]` list in the JSON-LD block in the page head.
6. **Social share image:** replace `assets/img/og-image.png` (1200x630) with a branded design. Test with the Facebook Sharing Debugger.
7. **Logo/favicon:** `assets/img/favicon.svg` and the PNG icons are simple placeholders; swap in your final logo.
8. Submit `sitemap.xml` in Google Search Console and run Lighthouse on the live URL.

## Connect the contact form
The form sends JSON `{name, email, phone, service, budget, details}` via POST to `formEndpoint` in `assets/js/config.js`.

**Formspree (easiest):** create a form at formspree.io, copy its URL (`https://formspree.io/f/xxxx`) into `formEndpoint`. Submissions are emailed to you. The included security headers already allow formspree.io.

**Other services or your own API:** put any endpoint that accepts a JSON POST and returns HTTP 2xx. If it is on another domain, add that domain to `connect-src` in `_headers` and `vercel.json`. For your own server, validate and sanitise input again server-side and add rate limiting or CAPTCHA.

The hidden "honeypot" field blocks simple bots. Add a CAPTCHA (hCaptcha, Cloudflare Turnstile) if spam appears.

## Deploy
- **Netlify:** drag the folder onto app.netlify.com/drop, then add your custom domain.
- **Cloudflare Pages:** create a project, upload the folder (build command empty, output directory `/`).
- **Vercel:** `vercel` from this folder, or import from Git.
- **GitHub Pages:** push to a repo, enable Pages. (`_headers` and `vercel.json` are ignored there.)
- **Shared hosting/cPanel:** upload all files to `public_html`. Force HTTPS in your host settings.

## Edit content
- Text: `index.html`. Services, capabilities and process are in `assets/js/main.js` (`SV`, `FL` arrays) or the HTML.
- Colors/fonts: variables at the top of `assets/css/styles.css`.
- Phone/email: search `hosainsefat7@gmail.com` and `+880 1626-980530`.

## Notes
- Motion respects the visitor's reduced-motion setting.
- Services and capability sections are rendered by JavaScript; the site needs JavaScript enabled for those.
- Content rule used: no invented clients, testimonials, awards or statistics. Keep it that way.
