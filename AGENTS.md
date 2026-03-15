# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a personal blog/website (`vhfmag.dev`) built with **Astro 5 + React 18 + TypeScript**, using **npm** as the package manager. Content is authored in Markdown/MDX. Deployed to Netlify.

### Node version

The project requires **Node 20.18.0** (specified via Volta in `package.json`). Use `nvm` to switch: `source ~/.nvm/nvm.sh && nvm use 20.18.0`.

### Running the dev server

```
npm run dev
```

Starts Astro dev server on port **4321**.

### Lint / Format / Type-check

Standard commands in `package.json`:

- `npm run check:lint` — ESLint
- `npm run check:format` — Prettier
- `npm run check:astro` — Astro diagnostics (0 errors expected)
- `npm run check:types` — `tsc --noEmit` (**known pre-existing failure**: Astro 5's base tsconfig uses `${configDir}` which requires TypeScript 5.5+, but the project pins TS 5.2.2; use `npm run check:astro` as the authoritative type checker)
- `npm run check` — runs all four in sequence; will fail due to the `check:types` issue above

### External API keys

The homepage (`/`) and media pages (`/ouvido`, `/assistido`) require four environment variables: `LASTFM_API_KEY`, `TRACKT_CLIENT_ID`, `TMDB_API_KEY`, `FANART_API_KEY`. Without them, those pages return 500. Other pages (`/posts`, `/notes`, `/bookmarks`, `/blogroll`, `/apresentacoes`, individual post pages) work without any API keys.

### Build

`npm run build` requires all four API keys to succeed (Zod/assertion validation at build time). For local development without keys, use `npm run dev` and avoid the homepage and media pages.
