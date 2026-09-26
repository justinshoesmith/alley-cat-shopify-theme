# Draft theme settings restoration — 26 September 2026

The GitHub-connected unpublished theme was missing its global `settings_data.json`. Saving the page-transition switch in Shopify created a file with only two current settings, leaving the colour-scheme group undefined. The editor warned about colour schemes, and the cart and flyout surfaces could render transparently.

The draft now contains 103 original current settings, including 12 colour schemes and three app-embed configurations. `page_transition` remains disabled. The original `gm_api` and `instagram_token` values were excluded, as was the old `custom_css` that conflicts with the brand refresh. The original downloaded settings file is retained in a private local backup outside the repository.

Shopify's GitHub integration now tracks `config/settings_data.json`; the existing `.gitignore` and `.shopifyignore` entries do not prevent editor changes from syncing. Do not enter credentials or private API tokens into theme settings while this integration is active.

The Foxkit cart-goal app still calculates free shipping against $150. Its goal display is hidden in this draft's cart page and drawer; the store-wide Foxkit configuration and live theme were not changed. The announcement bar continues to state free shipping over $79.

QA: unpublished theme confirmed; editor warning cleared; page transition absent; menu and cart backgrounds opaque; Foxkit goal hidden on cart page and drawer; Gorgias chat embed still present.
