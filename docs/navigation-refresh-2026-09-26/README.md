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
- The draft header now references this new menu. It has **52 distinct collection links**, no `#` headings, and no link with fewer than five Online Store-published products at the audit snapshot.
- Top level is now **Shop All, Home & Living, Gifts, Collectibles, Pickup Only, Sale**. Shop All uses the existing stock-filtered collection `most-sold-products`; the internal handle was not changed.
- Garden & Outdoor is now under Home & Living. Pets and thin/empty category links are omitted from navigation, **not deleted from Shopify**. The erroneous “Hand Tools” label pointing at `hooks-hangers` is corrected to “Hooks & Hangers”. Some nested paths were flattened to reduce clicks.
- Pickup Only is retained because it had 131 published products; whether local pickup is still offered needs merchant confirmation before removing or relabeling it.
- The `/collections` page now displays **seven selected pathways**: Home & Living, Kitchen & Table, Gifts & Stationery, Vintage & Collectibles, Garden & Outdoor, Pickup Only, Sale. Kitchen & Table is included separately because its 303 published products are not a strict subset of the Home & Living collection's 266.
- The collections-index heading/copy is on brand, collection cards fall back to a product image if no collection image exists, and misleading product-count labels are hidden there.
- Full new menu hierarchy and counts: [after.tsv](after.tsv). Links removed from the menu, with their prior paths and counts: [removed-from-menu.tsv](removed-from-menu.tsv).

## Scope and rollback

This changes **only** the new Shopify menu and unpublished draft theme files `sections/header-group.json`, `templates/list-collections.json`, and `sections/collection-list-template.liquid`. No collection was deleted, unpublished, retagged, or given a new inventory rule. Existing collection URLs remain accessible to direct visitors and search engines.

To roll back this draft navigation, point `main_menu` in `sections/header-group.json` back to `new-menu-20251221` and revert the two collections-index files from the pre-change Git commit. The original Shopify menu is still intact. Publishing the draft is a separate merchant decision after QA.
