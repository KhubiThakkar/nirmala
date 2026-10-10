# Warm Atelier Redesign — Change Log

## Brand name change

Mid-project, `public/images/tsuco_logo_transparent.png` turned out to read **"tsuco. the surface company"**, not Nirmala. Confirmed with you: this is a full rebrand, "Tsuco" being short for "The Surface Company." All on-page copy, the header/footer logo, and `<title>`/metadata were updated from **Nirmala** → **Tsuco**. Left as-is (not part of the brand-name swap):
- The actual PDF filenames (`/pdf/Nirmala.pdf`, `/pdf/Relwood-Brochure.pdf`) and the `info@bynirmala.in` contact email — these are real operational assets/routes, not display copy. Flag if the domain/filenames should also move to `tsuco`.
- The "by Elements" sub-brand line in the footer, kept as-is under the new Tsuco mark.

## Foundation (§3–§5)

- `app/globals.css` and `tailwind.config.ts` rebuilt around the Warm Atelier token set (cream/teal palette, 9/15/25/32px radius scale, Cormorant Garamond + Ubuntu). The legacy shadcn `--background/--primary/--border/...` CSS variables are re-pointed into the same palette so every base primitive (`Button`, `Card`, `Dialog`, `Input`) inherits the new look without per-file edits.
- `cream`/`warmBrown`/`softPink` Tailwind colors are kept as aliases onto the new tokens so nothing silently breaks, but no new code should use them — use `surface`/`ink`/`teal` instead.
- Removed dead CSS: the unused Formspree `.fs-*` boilerplate and the old hero letter-animation keyframes (replaced by the new hero). Deleted `styles/globals.css`, an unused duplicate shadcn scaffold file that wasn't imported anywhere — keeping tokens in one place per the brief.

## Section mapping

| Current | → |
|---|---|
| Header | Two-tier header (§6), collapses to one row on scroll, full-screen overlay menu |
| Hero word-carousel (DESIGN/QUALITY/STYLE/LUXURY) | Split hero shell — no real "collections" data existed, so per §7's fallback it uses the same shell with the 4 brand pillars as slides (image + info panel), each pulling real copy from the old "Why Choose" / About sections |
| — | New black marquee strip (brand pillars + brochure categories, all real existing copy) |
| — | New "Our Product Range" card grid (sand bg) — only 2 real brochures exist, so it's a centered 2-up grid rather than a forced 4-up (per our discussion) |
| ClientBanner | Restyled as a light trust-logo marquee section (no exact §7 slot for this; inserted after the product grid as the nearest fit) |
| "Why Choose Nirmala" + "Art of Nirmala" | Centered statement + stats strip (beige bg), `id="about"` for the nav anchor |
| Contact + About | Dark feature bento, 3 tiles: Brochures download, Our Story, Consultation CTA |
| Contact form section | Rebuilt inner-page contact section (form spec: 48px inputs, 9px radius, teal focus ring) — Formspree integration untouched |
| Brochures page | Card grid using the restyled product-card component, chip-style category filters |
| Gallery page | Masonry restyled with new card chrome; **left unlinked in nav**, per your call (still placeholder imagery) |
| Footer | Extracted to a shared component and moved into the root layout — it now appears on every page (previously it only rendered on the homepage; brochures/gallery had no footer at all) |

## Content decisions (confirmed with you)

- **Stats strip**: "20+ Years in Business" is real; "500+ Projects," "50+ Clients," "15+ Finishes" are placeholders you asked me to invent for now — **replace with real figures before launch**.
- The four hero/word-mark SVGs (`Design.tsx`, `Quality.tsx`, `Style.tsx`, `Luxury.tsx`) are bold outlined display graphics that conflict with the new signature pairing (italic serif + light sans, never bold serif). They're retired from the hero in favor of plain italic-serif pillar labels; the files are untouched in the repo in case you want them elsewhere.
- `Logo.tsx` (the old NIRMALA wordmark SVG) is no longer imported now that the header/footer use the Tsuco PNG mark; left in the repo, unused.
- Google Maps embed in the footer uses a plain query-string embed (no API key) built from the existing real address — swap in a verified place/Plus Code if you have one.

## Known simplifications / not implemented

- Dark-mode toggle (marked optional in the spec) — not implemented, to keep scope bounded.
- Hero progress segments show filled/unfilled per slide, not an animated per-slide countdown bar — a static simplification of the spec's timed progress fill.
- No automated visual screenshot QA: this environment has no browser/screenshot tool available. I verified responsiveness by reviewing the Tailwind breakpoint classes directly against 390/768/1024/1343/1536px (mobile/tablet/lg/xl ranges) and confirmed `npx tsc --noEmit` and `npm run build` both pass cleanly with all 3 routes statically generating. **Please view it in an actual browser at those widths before shipping.**
