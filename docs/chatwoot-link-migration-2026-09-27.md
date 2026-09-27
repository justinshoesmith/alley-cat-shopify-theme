# Draft theme: Chatwoot Help Centre migration (27 September 2026)

The unpublished `redesign/brand-refresh` theme now uses the Chatwoot Help Centre at `https://support.alleycattrading.com.au/hc/help/en`. The published theme was not modified.

| Surface | Before | After on draft |
| --- | --- | --- |
| Footer FAQs | `/pages/faqs` (Gorgias embed) | Chatwoot Help Centre home |
| Footer Shipping | `/pages/faqs` | Chatwoot Shipping & Tracking category |
| Footer Returns & Refunds | Shopify refund policy | Chatwoot Returns & Refunds category; refund policy remains in Discover |
| Product Shipping detail | Gorgias shipping article | Chatwoot “How much does shipping cost?” article |
| Product Returns detail | Shopify refund policy only | Chatwoot returns help plus Shopify refund policy |
| Contact-page FAQs quick link | `/pages/faqs` | Chatwoot Help Centre home |
| `/pages/faqs` | Gorgias embedded Help Centre | Branded link page to Chatwoot, preserving the old Shopify URL for visitors with bookmarks |
| `/pages/returns-and-refunds` | Empty page with old Reamaze embed | Branded link page to Chatwoot returns help and the refund policy |
| Theme settings | Disabled Gorgias app embed record | Removed from draft settings |
| Unused AI contact block | Legacy Gorgias form code | Removed from draft theme |
| Password layout | Stale Reamaze renders with missing snippets | Removed |

## Audit scope and remaining steps

- Reviewed all 12 indexed Shopify content pages and four indexed blog URLs via the public sitemap for Gorgias, Return Prime, and FAQ references in page content. The legacy contact and FAQ pages were the only active page-body hits; the draft contact page was already replaced.
- Kept `/pages/shipping` as a separate, useful page of written answers; it has no Gorgias links. Kept `/policies/refund-policy` as the authoritative policy destination.
- The footer's Shopify Navigation menu still stores the former destinations. This draft theme overrides them at render time so the published theme remains untouched. Update the underlying menu at publication, then consider removing the override.
- The currently published theme still loads the Gorgias app embed across pages. Publishing this draft will replace that theme-level embed. Check Shopify app/theme integration settings at launch and decide whether to uninstall Gorgias separately; do not assume removing a theme block uninstalls an app.
- Once the draft is published, evaluate redirects for old Gorgias article URLs and whether `/pages/faqs` or `/pages/returns-and-refunds` should remain as transition pages or become redirects.
