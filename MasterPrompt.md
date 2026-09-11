# Master Prompt: XENARIS STUDIO Portfolio Website

## Overview
Build a 2-page portfolio website (Home + Services) for a freelancer/agency offering two primary services:
1. Video Editing & Motion Design
2. Website Development

**Target Audience:** Brands, creators, startups, and local businesses looking for high-impact stories and high-converting websites.
**Goal:** A fast, responsive, and lead-generation focused static site.

---

## Tech Stack
- **Frontend Framework:** React + Tailwind CSS (or plain HTML/CSS/JS if simpler)
- **Design Style:** Maximalist UI design style — bold typography, layered visual elements, vibrant/clashing color palettes, big oversized text, decorative shapes, grain/texture overlays, asymmetric layouts, and dense visual richness.
- **Vibe:** Loud, expressive, creatively confident (think Awwwards-style maximalism). NO minimal/flat design.
- **Structure:** Clean component structure so placeholder content is easy to swap later. Fully mobile-responsive.

*Note: This is strictly a static portfolio site. Do not include any backend (Node.js/Express, MongoDB) or E-Commerce functionality (shopping carts, checkout flows, payment processing).*

---

## Pages & Structure

### Page 1 — Home (/)
- **Hero Section:** Full-screen hero with a huge, bold headline (e.g., "I EDIT STORIES & BUILD WEBSITES"). Use oversized type and layered graphic elements (shapes, gradients, marquee/ticker text, or grid patterns) behind/around it.
- **Marquee:** Animated or scrolling text strip listing skills/keywords (e.g., "VIDEO EDITING • WEB DEV • MOTION • BRANDING •").
- **About Us:** Bold pull-quote style text with an accent-colored background block highlighting the mission: "turn raw footage into scroll-stopping stories" and "build responsive, high-converting websites."
- **Stats/Highlights:** Styled as big chunky numbers with playful labels.
- **Call to Action (CTA):** Strong CTA button (oversized, high-contrast) linking to the Services page.
- **Navigation:** Sticky navbar, bold logo/wordmark, nav links styled distinctly (underline animation or color-shift on hover).
- **Footer:** Social links (Instagram: @xenaris.studio) and contact info (WhatsApp: +91 9833842643 / +91 7710879175), styled with the same maximalist energy.

### Page 2 — Services (/services)
This page should be split into two visually distinct sections.

#### 1. Video Editing Section
- **Layout:** Grid of 5 video preview cards with bold borders/frames, rotated or overlapping layout for visual interest (avoid a plain uniform grid).
- **Interactions:** Clicking a card plays the video inline (modal or expanding card); hovering shows a muted autoplay preview.
- **Card Content:** Bold title + short tag describing the edit style (e.g., "REEL 01 — FAST CUT BRAND PROMO").
- **Assets:** Use placeholder video sources for now.

#### 2. Website Development Section
- **Layout:** Visually distinct sub-section (different accent color/background) so it reads as a separate service.
- **Content:** 3-4 project cards with screenshots, bold captions, and hover effects (tilt, color overlay, or scale).
- **CTA:** Big CTA block at the end: "LET'S BUILD YOUR SITE" with a contact button/form.

---

## Interactive Elements
- Smooth scrolling.
- Hover animations (scale/tilt/color shifts).
- Lazy-loaded videos (do not autoplay all 5 at once for performance).
- Mobile-responsive maximalism (simplify layering slightly on small screens so it doesn't feel cluttered).

---

## Deliverables
1. Two main routes/pages: `/` (Home) and `/services`.
2. Shared Navbar and Footer components.
3. Placeholder assets clearly marked so real videos/screenshots can be swapped in easily.
4. Clean, production-ready static frontend code. No backend infrastructure required.