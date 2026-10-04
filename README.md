# Zufra Mandi

React 19 + TypeScript restaurant website, using the Vinext framework and Vite.

## Local development

```sh
npm install
npm run dev
```

## Deploy to Vercel

This project is not Create React App. Its React components use the App Router layout and can be built with Next.js on Vercel. The existing Vinext/Sites build remains available separately.

1. Push these files, including `vercel.json` and the updated `package.json`, to your Git repository.
2. In Vercel, set Root Directory to the directory containing this `package.json`: `zufra-site` if your repository contains the parent folder, or `.` if this folder itself is the repository root.
3. Set Framework Preset to **Next.js**, not Create React App.
4. Build Command: `npm run build:vercel`. Output Directory: `.next`. Install Command: `npm ci`. The checked-in `vercel.json` sets these values.
5. Use Node.js **22.x** or a newer version compatible with the package engines, then redeploy.

No application environment variables are required for this restaurant page. Menu and contact details remain placeholders. The Vercel deployment does not use the Sites hosting access controls; configure Vercel Deployment Protection if a private preview is required.

To reproduce the Vercel build locally:

```sh
npm run build:vercel
npm run start:vercel
```

For local Next.js development: `npm run dev:vercel`.

## Sites production

```sh
npm run build
```

## Content to replace

- Sample dishes and descriptions: `app/page.tsx`, `dishes` array.
- Prices, serving sizes, ingredient and allergen information: dish cards and dialog.
- Restaurant history, address, opening hours, telephone and WhatsApp: story and visit sections.
- Generated illustrative food photo: `public/mandi.png`.
- Add actual booking/ordering integrations when contact information is confirmed. Current interface intentionally does not accept or claim to send bookings or orders.

## Interactions

Rotating and scroll-responsive food platter; floating embers; scrolling marquee; scroll reveals; navigation section tracking; reading progress; menu category tabs; keyboard-accessible dish details; mobile navigation; FAQ accordions; back-to-top; motion toggle and system reduced-motion support.

Visual inspiration: https://www.nahdimandi.com/ and https://www.tashco.in/. Original branding, copy, layout, and generated food image; reference-site assets and customer testimonials are not reused.
# zufra-mandi
