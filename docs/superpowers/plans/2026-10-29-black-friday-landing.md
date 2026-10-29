# Black Friday Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `/` with the responsive Black Friday landing for `linebyline.ru` and retain the existing landing at `/main`.

**Architecture:** Keep the existing design as a self-contained route at `src/app/main/page.tsx`. Implement the new Figma-inspired landing as a reusable `BlackFridayLanding` component plus a CSS module that owns the responsive desktop/mobile composition and decorative crimson-line background.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, CSS Modules, Next lint/build.

## Global Constraints

- `/` renders the Black Friday page; `/main` preserves the existing page.
- The CTA text is `Забрать linebyline.ru`.
- CTA URL is `https://www.reg.ru/domain/shop/lot/linebyline.ru`, opening in a new tab with `rel="noopener noreferrer"`.
- Prices are `666 тыс. ₽` and crossed-out `850 тыс. ₽`.
- Mobile header has a red `ТОЛЬКО 11.11` label and no hamburger control.

---

### Task 1: Preserve the current landing at `/main`

**Files:**
- Create: `src/app/main/page.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: current landing JSX, existing Tailwind theme tokens.
- Produces: independent `/main` route and an empty root route ready for the new landing.

- [ ] **Step 1: Create a route-preservation check**

Create `src/app/main/page.tsx` by copying the existing `Home` component unchanged. Keep `LOT_URL` and `OWNER_EMAIL` module constants in the new route.

- [ ] **Step 2: Run the type checker to verify the new route is discovered**

Run: `npx tsc --noEmit`

Expected: PASS; Next discovers `src/app/main/page.tsx` without TypeScript errors.

- [ ] **Step 3: Replace the root page with a minimal import boundary**

Replace `src/app/page.tsx` with:

```tsx
import { BlackFridayLanding } from "@/components/BlackFridayLanding/BlackFridayLanding";

export default function Home() {
  return <BlackFridayLanding />;
}
```

- [ ] **Step 4: Run the type checker**

Run: `npx tsc --noEmit`

Expected: FAIL because `BlackFridayLanding` has not yet been created.

### Task 2: Build the Black Friday landing component

**Files:**
- Create: `src/components/BlackFridayLanding/BlackFridayLanding.tsx`
- Create: `src/components/BlackFridayLanding/BlackFridayLanding.module.css`

**Interfaces:**
- Consumes: `LOT_URL` string inside the component and Inter supplied by the root layout.
- Produces: `BlackFridayLanding(): JSX.Element`, used by `src/app/page.tsx`.

- [ ] **Step 1: Write the component contract**

Create `src/components/BlackFridayLanding/BlackFridayLanding.tsx` with a named export:

```tsx
export function BlackFridayLanding() {
  return <main>linebyline.ru</main>;
}
```

Import it in `src/app/page.tsx`.

- [ ] **Step 2: Run the type checker**

Run: `npx tsc --noEmit`

Expected: PASS; the root route can import the component.

- [ ] **Step 3: Implement semantic page regions and copy**

Replace the placeholder with a semantic `<main>` containing:

```tsx
<header>
  <p>LINEBYLINE.RU</p>
  <p>ТОЛЬКО 11.11</p>
</header>
<section aria-labelledby="hero-title">
  <p>BLACK FRIDAY</p>
  <h1 id="hero-title">LINEBYLINE.RU</h1>
  <p>Премиальный домен для имени, которое запоминают.</p>
  <div aria-label="Срок действия предложения">ТОЛЬКО 11.11</div>
</section>
<section aria-label="Стоимость домена">
  <p>ЦЕНА BLACK FRIDAY</p>
  <p>666 тыс. ₽ <del>850 тыс. ₽</del></p>
  <a href={LOT_URL} target="_blank" rel="noopener noreferrer">
    Забрать linebyline.ru <span aria-hidden>→</span>
  </a>
</section>
```

- [ ] **Step 4: Implement responsive visual styling**

In `BlackFridayLanding.module.css`, create:

- a black full-page canvas;
- layered `radial-gradient` and `linear-gradient` decorations that simulate the Figma crimson light trails;
- desktop grid layout with dominant white domain heading and right-side circular deadline stamp;
- mobile breakpoint at `700px` with the Figma hierarchy: compact header, red text deadline (not a pill), image-led hero, lower deadline stamp, stacked price/CTA panel;
- focus-visible styling for the CTA and sufficient text contrast.

- [ ] **Step 5: Run lint and production build**

Run: `npm run lint && npm run build`

Expected: PASS; no lint failures and Next production build completes.

### Task 3: Verify route and responsive behavior

**Files:**
- Modify: `src/components/BlackFridayLanding/BlackFridayLanding.tsx` only if verification identifies semantic or responsive issues.

**Interfaces:**
- Consumes: final root and `/main` routes.
- Produces: a buildable responsive landing and preserved legacy route.

- [ ] **Step 1: Start the app and verify routes**

Run: `npm run dev`

Expected: development server starts and both `http://localhost:3000/` and `http://localhost:3000/main` return successful pages.

- [ ] **Step 2: Verify responsive rendering**

Check `/` at 1440px and 390px widths. Confirm:

- the domain is the largest visual element;
- desktop uses a crimson-on-black hero with a visible `ТОЛЬКО 11.11` deadline treatment;
- mobile has no hamburger and retains the red header deadline label;
- `850 тыс. ₽` is visibly struck through;
- CTA opens the REG.RU lot in a new tab.

- [ ] **Step 3: Run final checks**

Run: `npm run lint && npm run build`

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/main/page.tsx src/components/BlackFridayLanding docs/superpowers
git commit -m "feat: implement Black Friday domain landing"
```
