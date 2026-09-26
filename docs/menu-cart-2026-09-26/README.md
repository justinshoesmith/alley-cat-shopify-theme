# Draft theme menu and cart follow-up — 26 September 2026

1. **Desktop nested navigation — healthy after fix.** The third-level Collectibles flyout inherited a transparent background from Minimog's late-loaded `header.css`. The draft now gives dropdown flyouts the brand's opaque soft-ivory surface, border, and subtle shadow. Verified with Transport & Travel open. [Before](01-nested-menu-before.png) · [After](06-nested-menu-after.png)
2. **Keyboard navigation — healthy after fix.** Focusing Collectibles now opens its dropdown; focusing Transport & Travel opens its nested panel, and Tab reaches Transport & Railway Memorabilia with a visible focus outline. [Keyboard view](07-keyboard-menu-after.png)
3. **Mobile cart summary — healthy after fix.** The bordered footer had zero horizontal padding. It now has a 20 px inset, spacing below the subtotal, and space above the shipping note. Zip, Afterpay, checkout, and accelerated payment controls remain intact. [Before](02-cart-mobile-before.png) · [After](05-cart-mobile-payment-after.png)

The current stacked logo works at mobile size and gives the desktop header a distinctive, balanced presence while navigation remains on one line. Retain it for this pass; a shorter desktop-only horizontal wordmark can be reviewed alongside the wider storewide logo rollout. No logo variant, navigation structure, Gorgias policy content, or live theme was changed in this follow-up.

Verification: connected unpublished Shopify draft, desktop 1536 px and mobile 390 px; `git diff --check`; Shopify CLI theme check (existing legacy findings remain). The bundled Liquid validator could not start because its `@shopify/theme-check-common` dependency is missing. Only theme CSS and these review files changed.
