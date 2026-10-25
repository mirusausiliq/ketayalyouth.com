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

## GitHub Pages

Deployment is handled by
[`deploy-website.yml`](../../.github/workflows/deploy-website.yml). The
repository's default branch is `master`, so pushes to `master` trigger the
workflow. In GitHub, configure **Settings → Pages → Build and deployment →
Source** as **GitHub Actions**. The workflow builds `apps/website`, uploads the
`dist` artifact, and deploys it with the official Pages actions.

The expected project URL is:

```text
https://mirusausiliq.github.io/ketayalyouth.com/
```

The Vite base path is already set to `/ketayalyouth.com/` in Actions, and the
workflow copies `index.html` to `404.html` so TanStack Router fallback URLs
continue to work on GitHub Pages.

To build and trigger the Pages deployment from the repository root:

```bash
git add .
git commit -m "Describe your changes"
pnpm run deploy
```

`pnpm run deploy` runs the full monorepo build, requires the current branch to
be `master`, requires a clean worktree, and pushes `master` to GitHub. The push
then triggers the GitHub Actions Pages workflow. It does not use the
`gh-pages` npm package or deploy a separate `gh-pages` branch.

The website is currently a client-rendered SPA. The Pages workflow copies
`index.html` to `404.html` so client-side routes work on GitHub Pages, but this
is not HTML prerendering and therefore does not provide per-route SEO markup.
Before relying on search previews, add a Vite-compatible prerender step that
renders `/` and `/about` into route-specific HTML files and emits route-specific
title/description metadata.
