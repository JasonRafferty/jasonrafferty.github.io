# Jason Rafferty Tutoring Website — Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. Build in order;
> each task ends with a viewable, self-contained deliverable.

**Goal:** Build a 4-page static tutoring website, mobile-friendly, ready to push to GitHub Pages.

**Architecture:** Plain HTML pages sharing one stylesheet (`css/styles.css`) and one script
(`js/main.js`). No build step — files open directly in a browser and deploy as-is to GitHub Pages.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox/grid, media queries), vanilla
JavaScript, Google Fonts (Fraunces + Figtree).

## Global Constraints

- Plain HTML/CSS/JS only — no frameworks, no build tooling, no backend/database.
- Palette, fonts, and motifs exactly as `docs/DESIGN.md`.
- Booking is WhatsApp only; all WhatsApp links driven by one `WHATSAPP_NUMBER` constant.
- No fake content — placeholders clearly marked.
- Accessible: skip-link, visible focus, semantic landmarks, reduced-motion respected.

## File Structure

```
jason-rafferty-tutoring/
├── index.html            # Home
├── about.html            # About & Subjects
├── pricing.html          # Pricing & Availability
├── resources.html        # Resources
├── css/styles.css        # All styling (design tokens + components)
├── js/main.js            # Nav toggle, WhatsApp links, scroll reveal, footer year
├── assets/               # Images/icons (favicon, logo) — added as needed
├── docs/DESIGN.md        # Design spec
├── docs/PLAN.md          # This plan
├── PROGRESS.md           # Live status tracker
├── README.md             # How to edit, run, and deploy
└── .nojekyll             # Tell GitHub Pages to serve files as-is
```

---

### Task 1: Stylesheet — design tokens & shared components

**Files:** Create `css/styles.css`

**Deliverable:** All CSS for tokens, layout, nav, hero, cards, buttons, tables, footer,
reveal animation, and responsive/accessibility rules. Single source of truth for the look.

- [ ] Define `:root` tokens (colours, fonts, spacing, radius, shadow) from DESIGN.md
- [ ] Base reset + typography (Fraunces headings / Figtree body)
- [ ] Components: `.nav`, `.hero`, `.btn` variants, `.card`, `.grid`, `.ticks`,
      `.availability` table, `.quote`, `.resource`, `.cta-band`, `.notice`, `.footer`
- [ ] Signature motifs: `.eyebrow` tick + `.ruled` margin rule
- [ ] Responsive breakpoints (≤900, ≤860 hamburger, ≤600 single column)
- [ ] Accessibility: `:focus-visible`, `.skip-link`, `prefers-reduced-motion`

### Task 2: Shared JavaScript

**Files:** Create `js/main.js`

**Interfaces / Produces:**
- `WHATSAPP_NUMBER` constant (international format, no `+`/spaces) — Jason edits this.
- Sets `href` on every `.js-whatsapp` element to
  `https://wa.me/<number>?text=<encoded data-wa-message>`.
- Mobile nav toggle (`.nav__toggle` flips `data-open` on `.nav`).
- Scroll reveal via `IntersectionObserver` adding `.is-visible` to `.reveal`.
- Sets current year in `.js-year`.

- [ ] Write `main.js` with the four behaviours above, guarded for missing elements
- [ ] Confirm it no-ops gracefully on pages lacking any given element

### Task 3: Home page (`index.html`)

**Files:** Create `index.html`

**Deliverable:** Full home page — head/meta, shared nav, hero with WhatsApp CTA + quick
facts, "what I offer" cards, subjects teaser, placeholder testimonials, contact band, footer.
Links `css/styles.css` and `js/main.js`.

- [ ] Head: meta viewport, description, Google Fonts, favicon, title
- [ ] Nav partial (brand + 4 links + WhatsApp button + hamburger)
- [ ] Hero, offer cards, subjects teaser, testimonials (placeholder), CTA band, footer
- [ ] Open in browser; check mobile width and WhatsApp link resolves

### Task 4: About & Subjects (`about.html`)

**Files:** Create `about.html`

**Deliverable:** Bio/experience/approach (placeholder copy), subjects grid (Maths, Science,
English, Coding basics), location info (Manchester / online / in person). Same nav + footer.

- [ ] Bio + teaching-approach section with clearly-marked placeholder text
- [ ] Subjects grid (4 cards with real subject detail)
- [ ] Location section
- [ ] `aria-current="page"` on the About nav link

### Task 5: Pricing & Availability (`pricing.html`)

**Files:** Create `pricing.html`

**Deliverable:** Two price cards (Online £25, In person £30), weekly availability grid with
editable example slots, cancellation-policy notice. Same nav + footer.

- [ ] Pricing cards with WhatsApp CTA
- [ ] Availability table (days × time-of-day, example "open" slots)
- [ ] Cancellation policy notice block
- [ ] `aria-current="page"` on the Pricing nav link

### Task 6: Resources (`resources.html`)

**Files:** Create `resources.html`

**Deliverable:** Intro + resource cards with editable placeholder links (GitHub URLs etc.),
clearly marked for Jason to replace. Same nav + footer.

- [ ] Intro line + resource card grid (placeholder links)
- [ ] `aria-current="page"` on the Resources nav link

### Task 7: Deploy support & docs

**Files:** Create `.nojekyll`, `README.md`, update `PROGRESS.md`

**Deliverable:** GitHub Pages helpers and a plain-English guide so Jason can edit the number,
add testimonials/resources, and deploy.

- [ ] `.nojekyll` (empty file)
- [ ] `README.md`: how to edit WhatsApp number, add content, preview locally, deploy to Pages
- [ ] Update `PROGRESS.md` to reflect completed build

---

## Self-Review

- **Spec coverage:** Home/About/Pricing/Resources ✓, WhatsApp wiring ✓, testimonials
  placeholder ✓, cancellation policy ✓, location ✓, availability ✓, prices ✓, subjects ✓,
  resources ✓, mobile + a11y ✓, GitHub Pages ✓.
- **Placeholders:** Only in *content* Jason must supply (number, bio, testimonials, links,
  slots) — all clearly marked in-page. No placeholders in code/structure.
- **Consistency:** `WHATSAPP_NUMBER`, `.js-whatsapp`, `.reveal/.is-visible`,
  `.nav[data-open]` names match across Task 2 and Tasks 3–6.
