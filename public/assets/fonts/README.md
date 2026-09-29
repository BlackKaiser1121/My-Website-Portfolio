# Font Strategy

Portfolio V2 does not bundle custom font files in this phase.

The design system uses a restrained local-first stack:

- Primary sans: `Aptos`, `Helvetica Neue`, `Noto Sans`, `sans-serif`
- Monospace: `Cascadia Mono`, `SFMono-Regular`, `Liberation Mono`, `monospace`

This avoids external font requests, keeps the Astro build static, and prevents layout shift from late-loading web fonts. Future local fonts can be added here after they are licensed, optimized, and tested.
