# SKILL: Headless WordPress + Nuxt 4 + WPGraphQL (WPNuxt v2)

> **Stack:** WordPress (CMS backend) · WPGraphQL · WPNuxt v2 (`@wpnuxt/core`, `@wpnuxt/blocks`, `@wpnuxt/auth`) · Nuxt 4 · TypeScript · Tailwind CSS / Nuxt UI · Vercel (deployment target)
> **Skill level:** Senior fullstack — production-grade patterns, no shortcuts.

---

## 0. Prerequisites & Environment

| Requirement | Minimum Version |
|---|---|
| Node.js | 20+ (LTS) |
| pnpm | 9+ (preferred over npm/yarn for monorepos) |
| Nuxt | 4.0+ |
| WordPress | 6.4+ |
| PHP | 8.1+ |
| nuxt-graphql-middleware | 5.x |

**WordPress plugins required (install in this order):**
1. **WPGraphQL** — exposes the `/graphql` endpoint
2. **WPGraphQL for ACF** — if using Advanced Custom Fields
3. **WPGraphQL SEO** (`add-wpgraphql-seo`) — Yoast SEO data in GraphQL
4. **Headless Login for WPGraphQL** — JWT auth (password + OAuth flows)
5. **WPGraphQL CORS** — configure allowed origins (set frontend URL)
6. **Classic Editor** *(optional)* — if not using Gutenberg blocks

**WordPress `wp-config.php` additions:**
```php
// Allow GraphQL introspection (disable in production if schema is private)
define('GRAPHQL_DEBUG', false);

// Required for JWT auth
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-long-random-secret-here');

// Set WordPress to headless (optional: redirect frontend requests)
define('WP_HOME', 'https://cms.yourdomain.com');
define('WP_SITEURL', 'https://cms.yourdomain.com');
```

---

## 1. Project Scaffolding

### 1a. Create project with CLI (recommended)
```bash
pnpm create wpnuxt@latest my-site
cd my-site
npx wpnuxi doctor   # validates env, WP connection, GraphQL reachability
```

### 1b. Manual setup (add to existing Nuxt 4 project)
```bash
pnpm add @wpnuxt/core @wpnuxt/blocks @wpnuxt/auth
```

### Directory structure (canonical)
```
my-site/
├── app/
│   ├── components/
│   │   ├── blocks/          # Custom block overrides (CoreParagraph.vue, etc.)
│   │   ├── layout/          # Header, Footer, Nav
│   │   └── ui/              # Project-specific UI components
│   ├── composables/         # Local composables (auto-imported)
│   ├── layouts/
│   │   ├── default.vue
│   │   └── blank.vue
│   ├── middleware/          # Route middleware (auth guards, etc.)
│   ├── pages/
│   │   ├── index.vue
│   │   ├── blog/
│   │   │   ├── index.vue
│   │   │   └── [...slug].vue
│   │   └── [...slug].vue    # Catch-all for WP pages/URIs
│   └── plugins/
├── extend/
│   └── queries/             # Custom .gql files — auto-generates composables
│       ├── CustomPosts.gql
│       └── SiteSettings.gql
├── server/
│   ├── api/                 # Nitro API routes
│   ├── graphqlMiddleware.serverOptions.ts  # DO NOT DELETE — auto-created
│   └── plugins/
├── .env
├── .env.example
├── .mcp.json                # AI assistant (Claude Code) integration
└── nuxt.config.ts
```

---

## 2. Configuration

### `nuxt.config.ts` — Production-grade
```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    '@wpnuxt/core',
    '@wpnuxt/blocks',
    '@wpnuxt/auth',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
  ],

  wpNuxt: {
    // Required
    wordpressUrl: process.env.WPNUXT_WORDPRESS_URL!,

    // GraphQL
    graphqlEndpoint: '/graphql',          // default
    downloadSchema: true,                 // downloads schema at build time

    // Query extension folders
    queries: {
      extendFolder: 'extend/queries/',    // your custom .gql files
      mergedOutputFolder: '.queries/',    // merged output (gitignore this)
    },

    // Three-layer caching
    cache: {
      enabled: true,
      maxAge: 300,     // 5 minutes; tune per content freshness requirements
      swr: true,       // stale-while-revalidate
    },

    // Private schema: send auth token during schema download only
    schemaAuthToken: process.env.WPNUXT_SCHEMA_AUTH_TOKEN,

    debug: process.env.NODE_ENV === 'development',
  },

  // Image optimization
  image: {
    domains: [process.env.WPNUXT_WORDPRESS_URL?.replace('https://', '') ?? ''],
    provider: 'ipx',
  },

  // SSR (default) — switch to 'static' for full SSG
  ssr: true,

  // Route rules: fine-tune rendering per route
  routeRules: {
    '/':         { isr: 300 },         // ISR every 5 min
    '/blog/**':  { isr: 60 },          // ISR every 1 min for blog posts
    '/about':    { prerender: true },  // Full static
    '/dashboard/**': { ssr: false },   // Client-only for authenticated areas
  },

  runtimeConfig: {
    // Server-only secrets
    wpSecretKey: process.env.WP_SECRET_KEY,

    // Public (exposed to client)
    public: {
      wordpressUrl: process.env.WPNUXT_WORDPRESS_URL,
      siteName: process.env.SITE_NAME ?? 'My Site',
    },
  },
})
```

### `.env`
```bash
# WordPress
WPNUXT_WORDPRESS_URL=https://cms.yourdomain.com
WPNUXT_GRAPHQL_ENDPOINT=/graphql
WPNUXT_DOWNLOAD_SCHEMA=true
WPNUXT_DEBUG=false

# Auth (if using @wpnuxt/auth)
WPNUXT_SCHEMA_AUTH_TOKEN=          # only if introspection is auth-gated

# Site
SITE_NAME="My Headless WordPress Site"
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 3. GraphQL Queries — Patterns & Best Practices

### 3a. Built-in composables (auto-imported, fully typed)
```typescript
// Pages
const { data: page }  = await usePageByUri({ uri: '/about' })
const { data: pages } = await usePages()

// Posts
const { data: posts }   = await usePosts()
const { data: post }    = await usePostByUri({ uri: route.params.slug })
const { data: postById } = await usePostById({ id: '123' })

// Navigation
const { data: menu } = await useMenu({ location: 'PRIMARY' })

// URI-agnostic routing (page OR post OR CPT)
const { data: node } = await useNodeByUri({ uri: route.path })

// Prev/next navigation
const { prev, next } = await usePrevNextPost({ id: post.value?.id })
```

### 3b. Options: caching, retry, timeout
```typescript
const { data: post } = await usePostByUri({ uri }, {
  retry: 3,
  retryDelay: 1000,        // ms, uses exponential backoff
  timeout: 5000,            // ms
  clientCache: false,       // disable for preview/authenticated content
  lazy: true,               // non-blocking (useAsyncData equivalent)
})
```

### 3c. Custom queries — extend/queries/CustomPosts.gql
```graphql
# extend/queries/CustomPosts.gql
# Generates: useCustomPosts() — auto-imported, typed, cached

query CustomPosts($limit: Int = 10, $categoryId: Int) {
  posts(
    first: $limit
    where: { categoryId: $categoryId, status: PUBLISH }
  ) {
    nodes {
      ...Post
      # ACF fields (requires WPGraphQL for ACF)
      featuredVideo {
        url
        title
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

```typescript
// Usage — fully typed, auto-imported
const { data, loadMore, hasNextPage } = await useCustomPosts({
  limit: 6,
  categoryId: 3,
})
```

### 3d. Mutations — extend/queries/CreateComment.gql
```graphql
# extend/queries/CreateComment.gql
# Generates: useMutationCreateComment()

mutation CreateComment($postId: ID!, $content: String!, $author: String!) {
  createComment(input: {
    commentOn: $postId
    content: $content
    author: $author
    status: APPROVE
  }) {
    comment {
      id
      content
      date
      author {
        node { name }
      }
    }
    success
  }
}
```

```typescript
const { mutate, data, status } = useMutationCreateComment()

async function submitComment() {
  await mutate({
    postId: props.postId,
    content: commentText.value,
    author: user.value?.name ?? 'Anonymous',
  })
}
```

### 3e. Fragments — reusable field sets
```graphql
# extend/queries/fragments/MediaItem.gql
fragment MediaItemFields on MediaItem {
  id
  sourceUrl
  altText
  mediaDetails {
    width
    height
  }
}
```

---

## 4. Page & Component Patterns

### 4a. Catch-all URI routing (`app/pages/[...slug].vue`)
```vue
<script setup lang="ts">
const route = useRoute()
const uri = computed(() => '/' + (route.params.slug as string[]).join('/'))

const { data: node } = await useNodeByUri({ uri: uri.value })

// Type narrowing
if (!node.value) throw createError({ statusCode: 404, message: 'Not found' })

// isPage / isPost / isContentType guards (built-in)
const isPage = isPage(node.value)
const isPost = isPost(node.value)

useSeoMeta({
  title: node.value.seo?.title ?? node.value.title,
  description: node.value.seo?.metaDesc,
  ogImage: node.value.featuredImage?.node.sourceUrl,
})
</script>

<template>
  <article>
    <h1>{{ node.title }}</h1>
    <!-- WPContent auto-detects blocks vs HTML -->
    <WPContent :node="node" />
  </article>
</template>
```

### 4b. Blog listing with cursor pagination
```vue
<script setup lang="ts">
const { data: posts, loadMore, hasNextPage, pending } = await usePosts(
  { first: 9 },
  { lazy: false }
)
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>

  <button
    v-if="hasNextPage"
    :disabled="pending"
    @click="loadMore"
  >
    {{ pending ? 'Loading…' : 'Load more' }}
  </button>
</template>
```

### 4c. Custom block override (`app/components/blocks/CoreParagraph.vue`)
```vue
<!-- Takes precedence over @wpnuxt/blocks built-in -->
<script setup lang="ts">
defineProps<{
  attributes: {
    content: string
    textColor?: string
    fontSize?: string
    align?: string
  }
}>()
</script>

<template>
  <p
    class="my-4 leading-relaxed"
    :class="[
      attributes.fontSize ? `text-${attributes.fontSize}` : 'text-base',
      attributes.align ? `text-${attributes.align}` : '',
    ]"
    v-sanitize-html="attributes.content"
  />
</template>
```

### 4d. SEO — per-page meta via Yoast
```typescript
// In any page component
const { data: post } = await usePostByUri({ uri })

useSeoMeta({
  title:           post.value?.seo?.title,
  description:     post.value?.seo?.metaDesc,
  ogTitle:         post.value?.seo?.opengraphTitle,
  ogDescription:   post.value?.seo?.opengraphDescription,
  ogImage:         post.value?.seo?.opengraphImage?.sourceUrl,
  twitterCard:     'summary_large_image',
  robots:          post.value?.seo?.metaRobotsNoindex === 'noindex' ? 'noindex' : 'index,follow',
})

// Structured data (JSON-LD)
useSchemaOrg([
  defineArticle({
    headline:      post.value?.title,
    datePublished: post.value?.date,
    dateModified:  post.value?.modified,
    author:        { name: post.value?.author?.node?.name },
    image:         post.value?.featuredImage?.node?.sourceUrl,
  }),
])
```

---

## 5. Authentication

### 5a. Setup (`@wpnuxt/auth`)
```typescript
// nuxt.config.ts — already included in modules array above

// app/middleware/auth.ts — route guard
export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useWPAuth()
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})
```

### 5b. Login page
```vue
<script setup lang="ts">
const { login, isAuthenticated, error } = useWPAuth()
const { hasRole, isAdmin } = useWPUser()

const credentials = reactive({ username: '', password: '' })
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  await login(credentials)
  if (isAuthenticated.value) navigateTo('/dashboard')
  loading.value = false
}
</script>
```

### 5c. Role-based rendering
```vue
<template>
  <div>
    <AdminPanel v-if="isAdmin" />
    <EditorPanel v-else-if="hasRole('editor')" />
    <MemberContent v-else-if="isAuthenticated" />
    <PublicContent v-else />
  </div>
</template>
```

---

## 6. Image Handling

**Always use `<NuxtImg>` for WordPress images — never raw `<img>`.**

```vue
<NuxtImg
  :src="post.featuredImage?.node.sourceUrl"
  :alt="post.featuredImage?.node.altText"
  :width="post.featuredImage?.node.mediaDetails?.width"
  :height="post.featuredImage?.node.mediaDetails?.height"
  sizes="sm:100vw md:50vw lg:800px"
  format="webp"
  loading="lazy"
  placeholder
/>
```

The `/wp-content/uploads/**` proxy is auto-configured on Vercel — never hardcode the WordPress origin in image URLs.

---

## 7. Menus & Navigation

```graphql
# extend/queries/PrimaryMenu.gql
query PrimaryMenu {
  menu(id: "primary", idType: LOCATION) {
    menuItems {
      nodes {
        id
        label
        uri
        parentId
        cssClasses
        target
        childItems {
          nodes {
            id
            label
            uri
          }
        }
      }
    }
  }
}
```

```typescript
// Composable
const { data: menu } = await usePrimaryMenu()
const menuItems = computed(() =>
  menu.value?.menuItems?.nodes?.filter(item => !item.parentId) ?? []
)
```

---

## 8. Custom Post Types (CPT)

### Register CPT in WordPress (functions.php or plugin)
```php
register_post_type('project', [
  'public'            => true,
  'show_in_graphql'   => true,
  'graphql_single_name' => 'project',
  'graphql_plural_name' => 'projects',
  'supports'          => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
]);
```

### Query CPT
```graphql
# extend/queries/Projects.gql
query Projects($first: Int = 12) {
  projects(first: $first) {
    nodes {
      id
      title
      uri
      excerpt
      featuredImage { node { sourceUrl altText } }
      projectFields {         # ACF field group
        client
        year
        technologies
        liveUrl
      }
    }
  }
}
```

---

## 9. Performance Patterns

### ISR + SWR (production default)
```typescript
// routeRules in nuxt.config.ts
routeRules: {
  '/blog/**': { isr: 60 },          // Revalidate every 60s
  '/':        { isr: 300 },
  '/about':   { prerender: true },  // Pure static — never stale
}
```

### Prefetch on hover (NuxtLink)
```vue
<!-- Built into NuxtLink — nothing extra needed -->
<NuxtLink :to="post.uri" prefetch>{{ post.title }}</NuxtLink>
```

### Critical data on server, lazy secondary data
```typescript
// Fetch above-the-fold content blocking
const { data: post } = await usePostByUri({ uri })

// Fetch related posts lazily (non-blocking)
const { data: related } = usePosts({ first: 3 }, { lazy: true })
```

### Disable client cache for previews
```typescript
const preview = useRoute().query.preview === 'true'
const { data } = await usePostByUri({ uri }, {
  clientCache: !preview,
})
```

---

## 10. Error Handling

```typescript
// app/pages/[...slug].vue
const { data: node, error } = await useNodeByUri({ uri })

if (error.value || !node.value) {
  throw createError({
    statusCode: error.value?.statusCode ?? 404,
    statusMessage: 'Page not found',
    fatal: true,     // renders error.vue
  })
}
```

```vue
<!-- app/error.vue -->
<script setup lang="ts">
const error = useError()
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <NuxtLink to="/">Back to home</NuxtLink>
  </div>
</template>
```

---

## 11. Deployment — Vercel (auto-configured)

WPNuxt v2 auto-detects Vercel and applies correct ISR, SSR, image proxy, and routing settings with no manual `vercel.json` required.

```bash
# Build locally before deploying
pnpm build
pnpm preview   # verify SSR + ISR locally via Nitro

# Deploy
vercel --prod
```

**Environment variables to set in Vercel dashboard:**
```
WPNUXT_WORDPRESS_URL
WPNUXT_GRAPHQL_ENDPOINT
WPNUXT_DOWNLOAD_SCHEMA
NUXT_PUBLIC_SITE_URL
WP_SECRET_KEY           (if using auth)
WPNUXT_SCHEMA_AUTH_TOKEN (if introspection is gated)
```

**Never commit `.env` — always use `.env.example` for documentation.**

---

## 12. Developer Tooling

### MCP server for AI assistant (Claude Code)
```json
// .mcp.json
{
  "mcpServers": {
    "wpnuxt": {
      "type": "sse",
      "url": "https://wpnuxt.com/mcp"
    }
  }
}
```

Available MCP tools: `wpnuxt_init`, `wpnuxt_migrate` (v1→v2), `nuxt_docs`, `nuxt_ui_docs`, content fetching, block scaffolding.

### wpnuxi CLI
```bash
npx wpnuxi init my-site     # scaffold new project
npx wpnuxi doctor           # diagnose WP/GraphQL connectivity
npx wpnuxi info             # print environment info
```

### TypeScript — check generated types
```bash
pnpm nuxt prepare     # regenerates types from GQL schema
pnpm typecheck        # run vue-tsc
```

### Recommended VSCode extensions
- **Volar** (Vue 3 + TypeScript)
- **GraphQL** (syntax highlighting for .gql files)
- **Tailwind CSS IntelliSense**
- **ESLint** (`@nuxt/eslint`)

---

## 13. Common Pitfalls & Solutions

| Pitfall | Solution |
|---|---|
| Schema not updating after adding WP plugin | Run `pnpm nuxt prepare` to re-download schema |
| Images broken on Vercel | Ensure `WPNUXT_WORDPRESS_URL` is set; let auto-proxy handle `/wp-content/uploads` |
| Stale content after post publish | Lower `maxAge` or use WP webhook → Vercel revalidation endpoint |
| Preview drafts not showing | Pass `{ clientCache: false }` and add `?preview=true` logic |
| ISR route not triggering for catch-all | WPNuxt v2 forces SSR on Vercel catch-all routes — this is intentional |
| CORS errors from GraphQL | Configure **WPGraphQL CORS** plugin with frontend origin |
| ACF fields undefined | Install **WPGraphQL for ACF** and register field groups to show in GraphQL |
| JWT expiry causes 401 | `@wpnuxt/auth` handles refresh automatically; ensure `GRAPHQL_JWT_AUTH_SECRET_KEY` is set |
| `useAsyncWPPosts` not found | Migrated to `usePosts(undefined, { lazy: true })` in v2 |

---

## 14. Security Checklist

- [ ] `GRAPHQL_JWT_AUTH_SECRET_KEY` is a long random string (min 32 chars), never hardcoded
- [ ] WordPress REST API disabled if not needed (`remove_action('init', 'rest_api_init')`)
- [ ] WPGraphQL introspection disabled in production if schema is sensitive
- [ ] `schemaAuthToken` used for schema download (never exposed to client bundle)
- [ ] CORS restricted to known frontend origins only
- [ ] WordPress admin URL changed from default `/wp-admin`
- [ ] File editing disabled in WordPress (`DISALLOW_FILE_EDIT = true`)
- [ ] All sensitive env vars in Vercel dashboard — never in client-side `runtimeConfig.public`
- [ ] `v-sanitize-html` used for all WordPress HTML output (built into WPNuxt)

---

## 15. Quick Reference — Composable Cheat Sheet

```typescript
// Content
usePosts(vars?, opts?)             // list posts
usePostByUri({ uri }, opts?)       // single post by URI
usePostById({ id }, opts?)         // single post by ID
usePages(vars?, opts?)             // list pages
usePageByUri({ uri }, opts?)       // single page
useNodeByUri({ uri }, opts?)       // page OR post OR CPT (use for catch-all routing)
usePrevNextPost({ id })            // adjacent post navigation

// Navigation
useMenu({ location })              // nav menu by registered location

// Auth (@wpnuxt/auth)
useWPAuth()                        // { login, logout, isAuthenticated, user, error }
useWPUser()                        // { hasRole, isAdmin, isEditor }

// Viewer (authenticated user data)
useViewer(undefined, { clientCache: false })

// Mutations (auto-generated from your .gql files)
useMutation{Name}()                // { mutate, data, status, error }
```

---

*Generated from WPNuxt v2 documentation · wpnuxt.com · Last updated April 2026*
