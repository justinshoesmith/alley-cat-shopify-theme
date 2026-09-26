# Navigation and collections-index refresh — 26 September 2026

This is the before/after record for the **unpublished** Alley Cat Trading Minimog draft. The live theme, original menu, products, collection definitions, inventory rules, and Vector integration were not changed.

## Before

- Draft header used Shopify menu `new-menu-20251221` (ID `gid://shopify/Menu/306381881656`), titled “New Menu 20251221”.
- It had **136 menu nodes**: 120 collection links and 16 non-clickable `#` headings. Top level: Home & Living, Gifts, Collectibles, Garden, Pets, Pickup Only, Sale.
- Of the 120 collection links, **18 had no Online Store-published products** and another 21 had only 1–3 at the audit snapshot. Pets had 0 published products. These are audit counts, not collection-rule changes.
- The `/collections` template displayed **all** collections, including thin/empty ones, under “All collection” with unrelated wardrobe copy. It showed product counts that could include products not published to the Online Store.
- Full original menu hierarchy and published counts: [before.tsv](before.tsv).

## After

- Created a **separate** Shopify menu, `brand-refresh-menu-20260926` (ID `gid://shopify/Menu/320322797880`), titled “Alley Cat Brand Refresh Draft”. The original menu remains available for rollback.
- The draft header now references this new menu. The first version had 52 distinct collection links; after the pickup follow-up it has **51**, no `#` headings, and no link with fewer than five Online Store-published products at the audit snapshot.
- Top level is now **Shop All, Home & Living, Gifts, Collectibles, Sale**. Shop All uses the existing stock-filtered collection `most-sold-products`; the internal handle was not changed.
- Garden & Outdoor is now under Home & Living. Pets and thin/empty category links are omitted from navigation, **not deleted from Shopify**. The erroneous “Hand Tools” label pointing at `hooks-hangers` is corrected to “Hooks & Hangers”. Some nested paths were flattened to reduce clicks.
- After the merchant confirmed local pickup is no longer offered, **Pickup Only was removed from the draft navigation**. Its collection and 131 published products remain in Shopify while their future treatment is decided.
- The `/collections` page now displays **six selected pathways**: Home & Living, Kitchen & Table, Gifts & Stationery, Vintage & Collectibles, Garden & Outdoor, Sale. Kitchen & Table is included separately because its 303 published products are not a strict subset of the Home & Living collection's 266.
- The collections-index heading/copy is on brand, collection cards fall back to a product image if no collection image exists, and misleading product-count labels are hidden there.
- Full latest menu hierarchy and counts: [after-no-pickup.tsv](after-no-pickup.tsv). The interim 52-link version is recorded in [after.tsv](after.tsv). Links removed in the first cleanup, with their prior paths and counts: [removed-from-menu.tsv](removed-from-menu.tsv).

## Scope and rollback

This changes **only** the new Shopify menu and unpublished draft theme files `sections/header-group.json`, `templates/list-collections.json`, and `sections/collection-list-template.liquid`. No collection was deleted, unpublished, retagged, or given a new inventory rule. Existing collection URLs remain accessible to direct visitors and search engines. Product-card pickup badges and the cart's pickup-only notice remain in place so affected products are not silently presented as shippable.

To roll back this draft navigation, point `main_menu` in `sections/header-group.json` back to `new-menu-20251221` and revert the two collections-index files from the pre-change Git commit. The original Shopify menu is still intact. Publishing the draft is a separate merchant decision after QA.

## Preview checks

- The original GitHub-connected Shopify **Draft** preview rendered six top-level links and seven selected `/collections` cards on desktop and a 390-pixel mobile viewport; the follow-up below supersedes those counts.
- Confirmed the mobile navigation drawer opens and exposes the Home & Living subcategories. The desktop mega-menu surface has an opaque soft-ivory background.
- The JSON templates parse successfully, and the committed diff passes `git diff --check`. The packaged Liquid validator could not start because its `@shopify/theme-check-common` dependency is absent; the Liquid fallback was instead checked in the rendered draft.
- [Desktop preview](preview-desktop.png) · [Mobile preview](preview-mobile.png)

## Follow-up: pickup removal and hover contrast

| Surface | Before | After |
| --- | --- | --- |
| Draft Shopify menu | Six top-level items, including Pickup Only; 52 links total | Five top-level items; Pickup Only omitted; 51 links total |
| `/collections` index | Seven cards, including Pickup Only, in four desktop columns | Six cards, no Pickup Only, in a balanced three-column desktop grid |
| Top-level header hover | Hover inherited `--color-button: 255,255,255` (white) against ivory `#FAF9F5` | Hover and focused-parent text use eucalyptus `#394536`; keyboard focus has a visible outline |

The pickup-only collection `/collections/pickup-only` itself was **not** deleted, unpublished, or altered. This is only a discovery-surface change, not a shipping-policy or product-availability decision.

Shopify rejected the first header CSS revision because section-level custom CSS exceeded its 500-character limit. The revised section CSS is 481 characters; the separate focus-outline rule lives in `assets/alley-cat-brand.css`.
