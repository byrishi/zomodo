# Zomòda Marketing Website

This is a production-quality marketing website for **Zomòda**, a multi-brand fair-price physical-retail concept launching in India. Built with Next.js 15, React 19, Tailwind CSS v4, Motion, GSAP, and shadcn/ui.

Designed and developed by **Rishi Shah**.

## Features
- **GSAP Scroll Assembly:** Signature hero animation on the home page.
- **Motion Animations:** Fluid entrances, staggers, and micro-interactions throughout.
- **Lenis Smooth Scroll:** Flawless scrolling experience.
- **Theming:** Full Light/Dark mode support via `next-themes` and Tailwind v4 CSS variables.
- **Server Actions:** Lead capture and newsletter subscription handling.
- **A11y & Performance:** Respects `prefers-reduced-motion`, highly responsive, and optimized.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables. Copy `.env.example` to `.env.local` and fill in the values:
```bash
cp .env.example .env.local
```
Specifically, you will need to add:
`GOOGLE_SHEETS_WEBHOOK_URL="YOUR_WEBHOOK_URL"`

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. In the Vercel dashboard, go to **Settings > Environment Variables** and add `GOOGLE_SHEETS_WEBHOOK_URL` with your Google Apps Script URL.
4. Click **Deploy**. Vercel will automatically detect Next.js and build the project perfectly.

## Data Architecture

All content is managed through typed data files in the `lib/` directory:
- `lib/categories.ts`: Edit the 10 retail categories and their associated brands.
- `lib/personas.ts`: Edit the target customer personas.
- `lib/pillars.ts`: Edit the brand pillars.
- `lib/roadmap.ts`: Edit the expansion roadmap.
- `lib/stats.ts`: Edit the MarcoWagon statistics.
- `lib/site.ts`: Edit site configuration (emails, navigation links, etc).

To swap images or logos, replace the placeholder URLs with local assets in the `public/images/` or `public/logos/` directories and update the references in the `lib` files.

## Form Endpoints

The website uses a Next.js Server Action to capture newsletter signups and contact inquiries. It forwards the payload to a Google Apps Script Webhook.

To deploy the Webhook:
1. Open the included `/scripts/apps-script.gs` file.
2. Follow the instructions in the comments to set up the Google Sheet and App Script.
3. Paste the resulting Web App URL as the `GOOGLE_SHEETS_WEBHOOK_URL` in your `.env.local` file (and Vercel environment variables).

---
*Created by Rishi Shah.*
