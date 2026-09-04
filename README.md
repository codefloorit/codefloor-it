# Codefloor It Tech LLP — Website

A premium, dark-themed, fully responsive corporate website for **Codefloor It Tech LLP Private Limited**, built with React 19, Vite, Tailwind CSS, Framer Motion, React Router, Swiper, and EmailJS.

## Getting Started

```bash
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
npm run preview   # preview the production build locally
```

## Before going live — 3 things to configure

1. **EmailJS (contact/quote/consultation/support forms)**
   Edit `src/utils/emailjsConfig.js` with your EmailJS Service ID, Public Key, and Template IDs from https://www.emailjs.com. Until configured, forms work in a demo mode (simulated success) so you can showcase the UI immediately.

2. **Google Map embed**
   Replace `mapEmbed` in `src/data/siteConfig.js` with your real Google Maps "Embed a map" iframe `src` URL for your exact office address.

3. **Company details**
   All contact info, social links, address, and business hours live in one place: `src/data/siteConfig.js`.

## Editing content

Almost all text content is centralized in `src/data/`:
- `itServices.js` — all 20 IT service pages (auto-generates routes like `/it-services/website-development`)
- `taxServices.js` — all 15 tax/financial service pages
- `teamData.js`, `testimonials.js`, `blogPosts.js`, `caseStudies.js`, `generalFaqs.js`, `navData.js`

Add a new IT/Tax service by adding one object to the relevant data file — a full detail page is generated automatically, no new component needed.

## Folder structure

```
src/
  components/   layout, common, cards, forms, sections
  pages/        Home, about/, services/, tax/, resources/, contact/, legal/
  data/         all site content (single source of truth)
```

## Design system

Colors, fonts, and effects are defined in `tailwind.config.js` and `src/index.css` — update the `colors` block there to re-theme the whole site.
