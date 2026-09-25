# Alley Cat Trading Shopify theme

This repository is a duplicate of the Minimog theme used as the unpublished redesign workspace. The published theme remains separate and untouched.

## Git history

- `baseline/minimog-2026-09-25` preserves the original downloaded theme.
- `redesign/brand-refresh` contains the Alley Cat Trading redesign work.

## Local settings and credentials

`config/settings_data.json` is intentionally ignored. It can contain store-specific settings and third-party integration values. Keep the local copy when developing or pushing to the same store; do not commit it or send it to a Git remote.

## Shopify preview workflow

1. Create or duplicate an unpublished theme in the Alley Cat Trading Shopify admin.
2. Authenticate Shopify CLI for the store, then pull the unpublished theme settings into this local folder if required.
3. Push the `redesign/brand-refresh` branch to that unpublished theme and review its preview URL on desktop and mobile.
4. Complete the QA checklist before publishing. The live theme is the rollback option.

## Brand refresh

The theme includes the approved logo, colour system, editorial typography treatment, homepage and About copy, and standardised Australian shipping message: `$9.95` flat-rate shipping and free shipping over `$79`.
