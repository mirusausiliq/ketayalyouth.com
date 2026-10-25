# Website

Vite + React + TanStack Router + Chakra UI v3 website. The two published routes
read and validate [`content/pages/home.json`](../../content/pages/home.json) and
[`content/pages/about.json`](../../content/pages/about.json) with Zod at startup.
The content pages [`events.json`](../../content/pages/events.json),
[`members.json`](../../content/pages/members.json), and
[`projects.json`](../../content/pages/projects.json) are also validated and
rendered at `/events`, `/members`, and `/projects` (`/people` is a compatibility
alias for `/members`).

## Content and CMS

Decap CMS is available at `/admin/`. Its GitHub backend is configured for this
repository, but production authentication still requires a separately hosted
OAuth proxy; GitHub Pages alone cannot provide the OAuth callback securely.
For local editing, run `pnpm cms` from the repository root in a second
terminal, then run `pnpm --filter website dev`. The CMS proxy must run from the
repository root because the JSON files are in `content/`, outside the Vite app.
Open `http://localhost:5173/admin/` after both processes are running. If the
admin was already open, reload it after starting the proxy.

The website is currently a client-rendered SPA. The Pages workflow copies
`index.html` to `404.html` so client-side routes work on GitHub Pages, but this
is not HTML prerendering and therefore does not provide per-route SEO markup.
Before relying on search previews, add a Vite-compatible prerender step that
renders `/` and `/about` into route-specific HTML files and emits route-specific
title/description metadata.
