# Jason Rafferty Tutoring — Design Spec

**Date:** 2026-06-19
**Status:** Approved direction, pending build approval

---

## 1. Goal

A clean, modern, parent-friendly website for **Jason Rafferty Tutoring**, hosted free on
GitHub Pages. It introduces the service, makes booking effortless (WhatsApp), and presents
prices, subjects, availability and resources in a way that is easy for parents and students
to scan on any device.

## 2. Constraints (hard rules)

- **Plain HTML, CSS, and JavaScript only.** No React, Next.js, Vite, Tailwind, build step,
  backend, or database.
- Must work as static files on **GitHub Pages** (repo `jasonrafferty.github.io`,
  live at `https://jasonrafferty.github.io`).
- **Mobile-friendly** and accessible (keyboard focus, reduced-motion, good contrast).
- **Booking is WhatsApp only.** No contact forms, no email capture.
- **No fake content.** Testimonials, bio, resource links and the WhatsApp number are
  clearly-marked placeholders for Jason to fill in.

## 3. Visual direction — "The Exercise Book"

The look is grounded in the real material of learning — a good teacher's marked page —
without being childish.

| Token        | Value       | Use                                   |
|--------------|-------------|---------------------------------------|
| Navy         | `#0E1B30`   | Hero, dark sections, footer           |
| Navy panel   | `#13243F`   | Gradients on dark surfaces            |
| Ink          | `#16233B`   | Body text on light                    |
| Paper        | `#FBF9F3`   | Page background (warm off-white)      |
| Card         | `#FFFFFF`   | Cards / panels                        |
| Gold         | `#C2982E`   | Accent, ticks, primary buttons        |
| Gold deep    | `#A87C20`   | Hover, links                          |
| Gold soft    | `#F2E7C6`   | Tick backgrounds, tints               |
| WhatsApp     | `#1FA855`   | WhatsApp buttons only                 |

- **Display font:** Fraunces (warm, intelligent serif), used with restraint for headings.
- **Body/UI font:** Figtree (clean, friendly sans) for everything parents read.
- **Signature element:** a gold **exercise-book margin rule** down key sections, plus gold
  **✓ tick** markers on lists. This is the one memorable motif; everything else stays quiet.
- **Motion:** restrained — gentle scroll reveals, soft hover lift. Respects reduced-motion.

## 4. Site structure (4 pages)

Sticky top nav on every page: **Home · About · Pricing & Availability · Resources**, with a
persistent gold WhatsApp button.

1. **Home (`index.html`)**
   - Hero: one-line value proposition, WhatsApp CTA, quick facts (Manchester · Online & in
     person · From £25/hr).
   - "What I offer" snapshot (3–4 cards).
   - Subjects teaser linking to About.
   - Testimonials section — **placeholder cards**, clearly labelled.
   - Contact band: big WhatsApp button.

2. **About & Subjects (`about.html`)**
   - Bio / experience / teaching approach — **placeholder text** for Jason.
   - Subjects covered: Maths, Science, English, Coding basics (HTML, CSS, JavaScript).
   - Location info: Manchester, online, and in person depending on area.

3. **Pricing & Availability (`pricing.html`)**
   - Prices: **Online £25/hr**, **In person £30/hr** (depending on location).
   - Availability area: simple weekly grid (editable placeholder slots).
   - Cancellation policy: notice required before cancelling or rearranging.

4. **Resources (`resources.html`)**
   - Intro line + list of resource cards with editable links (e.g. GitHub URLs).
   - Clearly-marked placeholders for Jason to add his own.

## 5. WhatsApp wiring

All WhatsApp buttons share `class="js-whatsapp"`. A single constant `WHATSAPP_NUMBER` in
`js/main.js` builds every `https://wa.me/...` link, optionally with a per-button preset
message via `data-wa-message`. **Jason changes the number in one place.**

## 6. Content placeholders (Jason to supply later)

- WhatsApp number
- Bio / experience / "why me" copy
- Real testimonials (he has existing reviews to add)
- Resource links
- Availability slots (the grid ships with example times)

## 7. Quality floor

- Responsive to mobile (single-column ≤ 600px, hamburger nav ≤ 860px).
- Visible keyboard focus, skip-link, semantic landmarks (`<nav> <main> <footer>`).
- `prefers-reduced-motion` respected. Colour contrast AA on text.
