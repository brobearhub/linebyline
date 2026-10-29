# Black Friday landing implementation

## Goal

Replace the root landing page with the approved Black Friday design for `linebyline.ru`, matching the supplied Figma desktop and mobile frames. Preserve the current landing at `/main`.

## Routes

- `/` renders the new Black Friday landing.
- `/main` renders the existing landing unchanged.

## Visual requirements

- Desktop follows Figma node `3:3`: dark cinematic background, crimson line artwork, large `LINEBYLINE.RU` headline, Black Friday deadline treatment, discounted price, crossed-out old price, and white CTA.
- Mobile follows Figma node `11:2`: compact wordmark/header with red `ТОЛЬКО 11.11` text, no hamburger, image-led hero, deadline circle, price panel, and CTA.
- The background uses the approved crimson-on-black visual language and adapts without crop-induced loss of key content.

## Interaction and content

- CTA text: `Забрать linebyline.ru`.
- CTA opens `https://www.reg.ru/domain/shop/lot/linebyline.ru` in a new tab with safe external-link attributes.
- Display `666 тыс. ₽` as the current price and `850 тыс. ₽` as the crossed-out old price.

## Technical approach

- Extract the new page into a dedicated React component with a CSS module for design-specific responsive styling.
- Move the existing root-page implementation to `src/app/main/page.tsx`.
- Keep metadata and global font setup intact.
- Add route-level tests or static rendering tests where the project setup supports them; run lint and production build.
