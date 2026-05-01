<script setup lang="ts">
const route = useRoute()

// Fetch post or page by URI
const { data: node } = await useNodeByUri({ uri: route.path })

// Handle 404
if (!node.value) {
    throw createError({
        statusCode: 404,
        message: 'Page not found'
    })
}

useSeoMeta({
    title: node.value.title,
    ogTitle: node.value.title,
    description: 'excerpt' in node.value ? node.value.excerpt : '',
    ogDescription: 'excerpt' in node.value ? node.value.excerpt : '',
    ogImage: 'featuredImage' in node.value
        ? node.value.featuredImage?.node?.sourceUrl
        : undefined,
})

// Set page title
useHead({
    title: node.value.title
})
</script>

<template>
    <div v-if="node">
        <!-- Featured Image Hero -->
        <div v-if="'featuredImage' in node && node.featuredImage?.node?.sourceUrl"
            class="w-full h-64 md:h-96 relative overflow-hidden">
            <img :src="node.featuredImage.node.sourceUrl" :alt="node.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <!-- Content Container -->
        <div class="max-w-3xl mx-auto px-6 py-12">

            <!-- Back Link -->
            <NuxtLink to="/blog"
                class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#006400] font-medium mb-8 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Blog
            </NuxtLink>

            <!-- Categories -->
            <div v-if="'categories' in node && node.categories?.nodes?.length" class="flex flex-wrap gap-2 mb-4">
                <span v-for="cat in node.categories.nodes" :key="cat.name"
                    class="text-xs font-bold bg-green-100 text-[#006400] px-3 py-1 rounded-full">
                    {{ cat.name }}
                </span>
            </div>

            <!-- Title -->
            <h1 class="font-display font-black text-3xl md:text-4xl text-stone-900 leading-tight mb-4">
                {{ node.title }}
            </h1>

            <!-- Meta -->
            <div v-if="'date' in node"
                class="flex items-center gap-3 text-sm text-stone-400 mb-10 pb-8 border-b border-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ new Date(node.date!).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
                }}
            </div>

            <!-- Content -->
            <div v-sanitize-html="node.content" class="prose" />

            <!-- Footer CTA -->
            <div
                class="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <NuxtLink to="/blog"
                    class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#006400] font-medium transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Artikel Lainnya
                </NuxtLink>
                <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20setelah%20baca%20artikel%20ini"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-[#006400] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#004d00] transition-colors text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L0 24l6.318-1.506A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.214-3.727.888.929-3.62-.235-.374A9.818 9.818 0 1112 21.818z" />
                    </svg>
                    Konsultasi Gratis
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.prose {
    line-height: 1.8;
    color: #292524;
    font-size: 1.0625rem;
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
    font-family: 'DM Mono', monospace;
    font-weight: 700;
    color: #1c1917;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
}

.prose :deep(h2) {
    font-size: 1.5rem;
}

.prose :deep(h3) {
    font-size: 1.25rem;
}

.prose :deep(p) {
    margin-bottom: 1.25rem;
}

.prose :deep(a) {
    color: #006400;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.prose :deep(a:hover) {
    color: #004d00;
}

.prose :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    margin: 1.5rem 0;
}

.prose :deep(ul),
.prose :deep(ol) {
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
}

.prose :deep(ul) {
    list-style-type: disc;
}

.prose :deep(ol) {
    list-style-type: decimal;
}

.prose :deep(li) {
    margin-bottom: 0.4rem;
}

.prose :deep(blockquote) {
    border-left: 4px solid #006400;
    padding: 0.75rem 1.25rem;
    margin: 1.5rem 0;
    background: #e8f5e9;
    border-radius: 0 0.5rem 0.5rem 0;
    color: #374151;
    font-style: italic;
}

.prose :deep(pre) {
    background: #1c1917;
    color: #e7e5e4;
    padding: 1.25rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    font-size: 0.875rem;
}

.prose :deep(code) {
    background: #f5f5f4;
    padding: 0.15em 0.4em;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #006400;
}

.prose :deep(pre code) {
    background: none;
    color: inherit;
    padding: 0;
}

.prose :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-size: 0.9rem;
}

.prose :deep(th),
.prose :deep(td) {
    border: 1px solid #e7e5e4;
    padding: 0.6rem 0.9rem;
    text-align: left;
}

.prose :deep(th) {
    background: #e8f5e9;
    font-weight: 700;
    color: #006400;
}

.prose :deep(hr) {
    border: none;
    border-top: 1px solid #e7e5e4;
    margin: 2rem 0;
}
</style>
