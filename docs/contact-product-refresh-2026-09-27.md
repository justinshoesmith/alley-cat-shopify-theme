# Draft theme: product and contact refresh (27 September 2026)

| Area | Before | After on unpublished draft |
| --- | --- | --- |
| Product information panels | Shipping panel square, trust badge rounded | Both square, matching the existing button/card system |
| Product accordions | Opening Shipping or Returns also closed Details, moving the page | Panels operate independently; height transition and reduced-motion handling refined |
| Product Read more links | Minimog animated underline through text | Conventional underline with visible hover/focus colour |
| Discover footer menu | Careers and Home & Style Journal shown | Hidden by draft-theme rendering; Shopify menu records retained, so live theme unchanged |
| Contact page | AI-generated Gorgias form, closed retail address/hours/directions, phone number, defunct returns app URL | Native Shopify contact form, PO Box 595, online care hours, no phone number, refund policy and current FAQs |

## Chatwoot launch follow-ups

- The product Shipping, contact-page FAQs, and footer support links now use Chatwoot in the draft theme. See `chatwoot-link-migration-2026-09-27.md` for the destination audit and remaining publication steps.
- Route Shopify contact-form notifications to the approved Chatwoot email inbox. Shopify sends native contact-form submissions to the store's **Sender email** (Settings → Notifications), so changing that address would affect more than this form. Prefer mailbox forwarding or an approved Chatwoot form integration if the current Sender email should remain unchanged. Confirm destination and test a real submission before launch.
- Recheck footer Discover menu if the underlying Shopify menu is later renamed; the two-link filter is scoped to `footer-menu-about-company`.
