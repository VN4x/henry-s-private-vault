# henryperfumes.eu — Dark Cinematic Noir prototype

A front-end only, high-fidelity demo of Henry's fragrance shop. No accounts, no payments, no database — every page is a visual and interactive proposal you can click through.

One note up front: this environment builds React apps, not SvelteKit. The prototype will be built here as a React app that looks and behaves exactly as specified; the visual system, copy, motion rules and page structure all translate one-to-one if you later rebuild it on SvelteKit.

## Design system

- Pure black void (#000000 base, #0B0B0D panels), bone #EDE7DB text, gold #C9A961 accents.
- Serif display for headlines (Cormorant/Playfair-class, closest free match to Canela/GT Sectra), geometric sans for UI.
- Generous negative space, hairline gold rules, no shadows except the radial spotlight glow.
- Fade-only transitions, thin gold border on card hover, custom soft gold cursor dot on interactive elements, full `prefers-reduced-motion` fallback.

## Pages

1. **Home / Viewing Room** (`/`) — matches the mockup: black field, radial gold spotlight from above, faceted crystal bottle centred with reflection pool, circular half-shadow portrait of Henry on the left, "Your curator tonight." headline, "BOUGHT DIRECT." label, retail price struck through beside Henry's price, minimal nav (`henry.` left, sparse links, cart), large `henry.` wordmark right with ACQUIRE / Add to list actions.
2. **The Vault** (`/vault`) — restrained grid of 8–9 VaultCards: bottle, house, name, honest price with retail struck through. Gold edge on hover only. Quiet filter row (house, note family, availability).
3. **Product Ceremony** (`/p/[slug]`) — five-act scroll: hero bottle → notes (top/heart/base as a slow vertical list) → Henry's note in first person → provenance (batch, house, where it was bought) → acquire panel. No reviews, no related products.
4. **Henry** (`/henry`) — portrait, short first-person bio, how he buys, why the price is what it is.
5. **Checkout** (`/checkout`) — full-screen, silent, minimal: list of chosen bottles, shipping fields, single ACQUIRE action, confirmation state "Confirmed. Shipping tomorrow. — H".

Empty states and microcopy exactly in the specified voice ("You haven't chosen anything yet.", "Gone. Next batch arrives March."). Banned-word list respected; first person throughout.

## Cart behaviour

A lightweight in-memory list (cart count in nav, items on checkout) so the click-through feels real. Nothing persists after refresh — it's a prototype.

## Imagery

Generated in the described style: several faceted crystal bottles on pure black with top light, and a realistic portrait of Henry — late twenties, black turtleneck, half-face in shadow, serious.

## Technical notes

- React + TanStack Router file routes, Tailwind v4 tokens defined in `src/styles.css` (noir palette, gold, bone, radius, motion durations).
- Static catalogue data in a single local module; no backend, no auth.
- Per-page titles and descriptions for search previews.
