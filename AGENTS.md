# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a personal blog/website (`vhfmag.dev`) built with **Astro 5 + React 18 + TypeScript**, using **npm** as the package manager. Content is authored in Markdown/MDX. Deployed to Netlify.

### Node version

The project requires **Node 20.18.0** (specified via Volta in `package.json`). Use `nvm` to switch: `source ~/.nvm/nvm.sh && nvm use 20.18.0`.

### Running the dev server

Use `npx netlify dev` instead of `npm run dev`. This injects environment variables from the linked Netlify site (requires `NETLIFY_AUTH_TOKEN` and `npx netlify link --id 20f0bcd0-22b2-49a8-87f5-b9ab0b078eb1` first).

- **Port 8888**: Netlify proxy (preferred — handles env vars and edge functions)
- **Port 4321**: Raw Astro dev server (used internally by Netlify dev)

A `.env` file in the repo root bridges the env var name mismatch: Netlify stores keys with `PUBLIC_` prefix (e.g. `PUBLIC_LASTFM_API_KEY`) but the code reads without it (e.g. `LASTFM_API_KEY`). The `.env` file is gitignored.

To create the `.env` file from Netlify env vars:
```
npx netlify env:list --json 2>/dev/null | python3 -c "
import sys, json
data = json.load(sys.stdin)
mapping = {'PUBLIC_LASTFM_API_KEY':'LASTFM_API_KEY','PUBLIC_TRACKT_CLIENT_ID':'TRACKT_CLIENT_ID','PUBLIC_TMDB_API_KEY':'TMDB_API_KEY','PUBLIC_FANART_API_KEY':'FANART_API_KEY'}
[print(f'{v}={data[k]}') for k,v in mapping.items() if k in data]
" > .env
```

### Lint / Format / Type-check

Standard commands in `package.json`:

- `npm run check:lint` — ESLint
- `npm run check:format` — Prettier
- `npm run check:astro` — Astro diagnostics (0 errors expected)
- `npm run check:types` — `tsc --noEmit` (**known pre-existing failure**: Astro 5's base tsconfig uses `${configDir}` which requires TypeScript 5.5+, but the project pins TS 5.2.2; use `npm run check:astro` as the authoritative type checker)
- `npm run check` — runs all four in sequence; will fail due to the `check:types` issue above

### External API keys

The homepage (`/`) and media pages (`/ouvido`, `/assistido`) require four environment variables: `LASTFM_API_KEY`, `TRACKT_CLIENT_ID`, `TMDB_API_KEY`, `FANART_API_KEY`. Without them, those pages return 500. Other pages (`/posts`, `/notes`, `/bookmarks`, `/blogroll`, `/apresentacoes`, individual post pages) work without any API keys.

### Cache directory gotcha

In dev mode, the `cacache` persistent cache path resolves to `/node_modules/.cache/cacache` (root filesystem, not the project `node_modules`). You may need to `sudo mkdir -p /node_modules/.cache/cacache && sudo chmod -R 777 /node_modules` to avoid `EACCES` errors.

### Trakt.tv API

As of March 2026, the `TRACKT_CLIENT_ID` stored on Netlify returns **403 Forbidden** from the Trakt API. This causes `/` (homepage) and `/assistido` to 500. The Last.fm API key works correctly.

### Build

`npm run build` requires all four API keys to succeed (Zod/assertion validation at build time). For local development without keys, use `npm run dev` and avoid the homepage and media pages.
