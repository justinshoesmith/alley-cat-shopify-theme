# Collection availability — 26 September 2026

These Shopify Admin collection-rule changes are **storewide**. They affect the live storefront as well as the unpublished Minimog draft; no theme publish was required.

## Result

- Audited all 211 collections: 208 smart and 3 manual.
- Added `Inventory stock is greater than 0` to 148 smart collections, preserving their category, tag, and metafield conditions. This covers the nine main departments, 82 ordinary subcategories, and 57 legacy tag-based collections.
- Replaced the `Current` eligibility rule with the stock rule in those 57 legacy collections. Removed `Current` from both New Arrivals collections, which already had the stock rule. No smart collection now depends on `Current`.
- Final audit: 203 of 208 smart collections have the stock rule. The 3 manual collections were not changed.
- No product status, inventory quantity, visibility, URL, or theme publication was changed. Sold product detail pages remain available by direct URL.

The first storefront page of [Home & Living](home-living-stock-preview.png), the legacy Gifts collection, and both New Arrivals collections displayed 20 cards each without sold-out items in the product grid. The Home & Living preview screenshot includes the Shopify draft-theme bar. Recently Viewed modules can still display a sold-out item, because they are not collection membership.

## Baseline and exceptions

The initial New Arrivals changes were made earlier the same day:

| Collection | Stock condition added | Admin item count before → after |
| --- | --- | --- |
| New Arrivals | `Inventory stock > 0`, `Match all` | 327 → 135 |
| New Arrivals - Preloved | `Inventory stock > 0`, `Match all` | 1,836 → 796 |

Their [New Arrivals](01-new-arrivals-in-stock.png) and [Preloved Finds](02-preloved-arrivals-in-stock.png) preview captures were saved before `Current` was subsequently removed from the rules. The Preloved collection's manually included **ABBA Special Illustrated Booklet** was previously checked as Active and inventory tracked, with 1 available; its inclusion was not changed.

The five smart collections intentionally left without a stock rule are:

| Collection | Reason for leaving it unchanged |
| --- | --- |
| All Products - Excluding Kit-Cat Clocks | Broad utility collection; changing it could alter catalogue-wide uses. |
| Drinks | Café/retail-era collection; review its future role separately. |
| Cafe | Café/retail-era collection; review its future role separately. |
| Cold Drinks | Uses `Match any`; requires separate review of its rule logic and café content. |
| Non-Consignment | Vendor-based utility collection using `Match any`; changing to `Match all` would destroy its OR logic. |

All 3,012 Active products were checked for inventory tracking. Eighteen are untracked: the digital gift card and café products. They do not appear in the main home, gift, garden, jewellery, or hardware categories; one untracked café item remains in Food & Drink after the stock-rule change. The Shopify product-search `tracks_inventory:false` filter returned inconsistent results on this store, so the audit paginated actual product records instead.

Before retiring `Current` from the legacy collection rules, the active catalogue was checked against their other tag conditions. Only four distinct in-stock products lacked `Current` and could be newly admitted: **Daschound Dog Bookends**, **Soft Seagull Key Chain**, **Polka Dot Socks - Black & White**, and **Marutomoware Majolica Asparagus Serving Dish - 12.5cm**. No in-stock product with the `New Arrivals` tag lacked `Current`.

Shopify collection counts can lag behind a rule update while membership reindexes. We verified final rules through a fresh Admin read and checked actual storefront cards, rather than relying on immediate mutation counts. This change does not remove sold items from storefront search, Recently Viewed, direct product pages, or external search engines.
