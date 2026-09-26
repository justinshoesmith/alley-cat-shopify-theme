# New Arrivals availability — 26 September 2026

Shopify Admin collection rules were changed directly in the existing store. These are storewide collection-data changes, not unpublished-theme changes.

| Collection | Existing inclusion rules retained | Rule added | Admin item count before → after |
| --- | --- | --- | --- |
| New Arrivals | Existing conditions, `Match all` | `Inventory stock` is greater than `0` | 327 → 135 |
| New Arrivals - Preloved | Tag includes `New Arrivals` and `Current`; Condition is `Preloved`, `Match all` | `Inventory stock` is greater than `0` | 1,836 → 796 |

The first page of each collection in the unpublished theme preview showed 20 product cards and no sold-out cards after the collections rebuilt: [New Arrivals](01-new-arrivals-in-stock.png) · [New Arrivals - Preloved](02-preloved-arrivals-in-stock.png). The admin counts include multiple product statuses and are not public sales figures.

The Preloved collection has one manually included product, **ABBA Special Illustrated Booklet**. It was checked in Shopify Admin and is Active, inventory tracked, with 1 available; its manual inclusion was left in place.

No product status or visibility was changed. A previously sold-out product page, `thumbs-up-official-atari-3d-wall-art-game-cartridges`, remained directly accessible with a canonical product URL and no `noindex` robots meta tag in the preview. This does not guarantee future search indexing.

Other collections were not changed. Applying the same stock rule more broadly should be preceded by an audit of products that allow backorders or do not track inventory.
