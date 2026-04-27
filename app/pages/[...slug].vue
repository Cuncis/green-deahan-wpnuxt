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
    <article v-if="node">
        <h1>{{ node.title }}</h1>

        <p v-if="'date' in node" class="date">
            Published: {{ new Date(node.date).toLocaleDateString() }}
        </p>

        <div v-sanitize-html="node.content" class="content" />

        <NuxtLink to="/">← Back to home</NuxtLink>
    </article>
</template>

<style scoped>
.date {
    color: #666;
    margin-bottom: 2rem;
}

.content {
    line-height: 1.7;
}

.content :deep(img) {
    max-width: 100%;
    height: auto;
}
</style>
