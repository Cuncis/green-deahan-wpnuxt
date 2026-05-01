# Agent Instructions — green-deahan-wpnuxt

Nuxt 4 headless WordPress frontend for a sports field construction company (Green Deahan). Uses **@wpnuxt/core** for WordPress GraphQL integration.

## Commands

```bash
pnpm dev        # Dev server on http://localhost:3000
pnpm build      # Production build (SSR)
pnpm generate   # Static generation
pnpm preview    # Preview production build
```

## Environment

Requires a `.env` file with:

```
WPNUXT_WORDPRESS_URL=https://your-wordpress-site.com
```

## Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 4, Vue 3 Composition API |
| CMS | WordPress (headless) via WPGraphQL plugin |
| Data Layer | `@wpnuxt/core` composables (auto-imported) |
| Styling | Tailwind CSS (CDN) + global CSS in `app/app.vue` |
| Language | TypeScript — always use `<script setup lang="ts">` |
| Fonts | Google Fonts: Inter (body), DM Mono (display) |

## Project Structure

```
app/
  app.vue              # Root: global CSS, design tokens, animation utilities
  components/
    SiteNav.vue        # Fixed nav with mobile hamburger
    SiteFooter.vue     # Multi-column footer
  extend/
    queries/           # Custom GraphQL query overrides for @wpnuxt/core
  pages/
    index.vue          # Homepage (8 sections: hero, services, portfolio…)
    blog.vue           # Blog listing with search + category filters
    galeri.vue         # Gallery with lightbox + category tabs
    kontak.vue         # Contact form → WhatsApp redirect
    [...slug].vue      # Catch-all: renders WordPress posts/pages by URI
```

## Data Fetching

Use **@wpnuxt/core composables**, not `useFetch`/`$fetch` directly:

```typescript
// Blog listing
const { data: postsData, status } = await usePosts({ first: 20 })

// Single post or page by route path
const { data: node } = await useNodeByUri({ uri: route.path })
```

- All composables are **auto-imported** — no explicit import needed.
- Call with `await` in `<script setup>` for SSR-ready data.
- Custom GraphQL queries go in `app/extend/queries/` (files there override @wpnuxt/core defaults).

## Key Conventions

- **Routing**: File-based Nuxt routing. `[...slug].vue` catches all WordPress URIs.
- **Images**: Missing images use `.img-ph` class (dashed border placeholder). No image CDN configured yet.
- **Forms**: Contact form builds a `wa.me` WhatsApp URL and redirects — no server endpoint.
- **Scroll animations**: `IntersectionObserver` + `.reveal` / `.visible` CSS classes (defined in `app.vue`).
- **Counters**: `setInterval`-based animation, triggered once by IntersectionObserver.
- **FAQ accordion**: Single `openFaq` ref tracks open index; CSS height transition on `.open` class.
- **Lightbox/modal**: Uses `<Teleport to="body">`, keyboard nav (Esc, arrows).
- **Locale**: Indonesian (`id-ID`) — use `toLocaleDateString('id-ID', ...)` for dates.
- **Colors**: Green design system — `#006400` (primary), `#004d00` (dark), `#e8f5e9` (light bg). Defined as CSS vars in `app.vue`.
- **Navigation links**: Beranda (`/`), Galeri (`/galeri`), Blog (`/blog`), Kontak (`/kontak`).

## Pitfalls

- Tailwind is loaded via CDN in `nuxt.config.ts` head — no PostCSS config, no purge. Do not add a `tailwind.config.js`.
- `app/extend/queries/` is currently empty. To override a WPNuxt query, add a `.gql` file matching the composable's query name.
- Gallery items in `galeri.vue` are **hardcoded** (no CMS fetch). Add new items manually to the `galleryItems` array.
- `schema.graphql` at root is a local copy of the WPGraphQL schema — for reference only, not used at runtime.
