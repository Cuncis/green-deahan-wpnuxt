<script setup lang="ts">
useHead({ title: 'Blog & Tips Lapangan Olahraga | Green Deahan Sport' })

const searchQuery = ref('')
const activeCategory = ref('semua')

const { data: postsData, status } = await usePosts({ first: 20 })

const posts = computed(() => postsData.value ?? [])

const categories = computed(() => {
    const cats = new Set<string>()
    posts.value.forEach((p: any) => {
        p.categories?.nodes?.forEach((c: any) => cats.add(c.name))
    })
    return ['semua', ...Array.from(cats)]
})

const filteredPosts = computed(() => {
    let result = posts.value as any[]
    if (activeCategory.value !== 'semua') {
        result = result.filter((p: any) =>
            p.categories?.nodes?.some((c: any) => c.name === activeCategory.value)
        )
    }
    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase()
        result = result.filter((p: any) =>
            p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q)
        )
    }
    return result
})

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function stripHtml(html: string) {
    return html?.replace(/<[^>]*>/g, '') ?? ''
}

onMounted(() => {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<template>
    <!-- Page Hero -->
    <section class="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div class="reveal">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-3 tracking-wide">📝
                        Tips & Panduan</span>
                    <h1 class="font-display font-black text-4xl md:text-5xl text-stone-900 leading-tight">
                        Blog <span class="text-[#006400]">Green Deahan</span>
                    </h1>
                    <p class="text-stone-500 text-sm md:text-base mt-3 max-w-xl">
                        Tips membangun lapangan, panduan memilih material, estimasi biaya, dan insight bisnis lapangan
                        olahraga di Indonesia.
                    </p>
                </div>
                <!-- Search -->
                <div class="flex-shrink-0 w-full md:w-72">
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
                        <input v-model="searchQuery" type="text" placeholder="Cari artikel..."
                            class="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-stone-200 bg-white text-sm font-medium transition-all focus:outline-none focus:border-[#006400] focus:shadow-[0_0_0_3px_rgba(0,100,0,.1)]">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Category filter -->
    <section v-if="categories.length > 1" class="px-6 max-w-6xl mx-auto mb-8 reveal">
        <div class="flex flex-wrap gap-2">
            <button v-for="cat in categories" :key="cat" :class="[
                'text-xs font-bold px-4 py-2 rounded-full border-2 transition-all',
                activeCategory === cat
                    ? 'bg-[#006400] text-white border-[#006400]'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-[#006400] hover:text-[#006400]'
            ]" @click="activeCategory = cat">
                {{ cat === 'semua' ? '🏷 Semua' : cat }}
            </button>
        </div>
    </section>

    <!-- Loading state -->
    <section v-if="status === 'pending'" class="px-6 max-w-6xl mx-auto py-16 text-center">
        <div
            class="inline-block w-10 h-10 border-4 border-[#006400] border-t-transparent rounded-full animate-spin mb-4">
        </div>
        <p class="text-stone-500 text-sm font-medium">Memuat artikel dari WordPress...</p>
    </section>

    <!-- Error state -->
    <section v-else-if="status === 'error'" class="px-6 max-w-6xl mx-auto py-16 text-center">
        <div class="text-5xl mb-4">⚠️</div>
        <h3 class="font-display font-black text-xl text-stone-700 mb-2">Gagal memuat artikel</h3>
        <p class="text-stone-400 text-sm">Silakan coba lagi nanti.</p>
    </section>

    <!-- Blog grid -->
    <section v-else class="px-6 max-w-6xl mx-auto pb-16">
        <!-- Featured post (first post) -->
        <div v-if="filteredPosts.length > 0 && !searchQuery && activeCategory === 'semua'" class="mb-12 reveal">
            <NuxtLink :to="filteredPosts[0].uri ?? ('/' + filteredPosts[0].slug)"
                class="block bg-white border-2 border-stone-200 rounded-2xl overflow-hidden hover:border-[#006400] transition-colors group">
                <div class="grid md:grid-cols-2">
                    <!-- Featured image -->
                    <div class="relative overflow-hidden" style="min-height:280px">
                        <img v-if="filteredPosts[0].featuredImage?.node?.sourceUrl"
                            :src="filteredPosts[0].featuredImage.node.sourceUrl" :alt="filteredPosts[0].title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div v-else class="img-ph" style="min-height:280px">
                            <div class="img-ph-text">📸 FOTO ARTIKEL UNGGULAN<br>Ilustrasi Lapangan<br>(800×560px)</div>
                        </div>
                    </div>
                    <div class="p-8 flex flex-col justify-center">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="bg-[#006400] text-white text-xs font-bold px-3 py-1 rounded-full">⭐ Artikel
                                Pilihan</span>
                            <span v-if="filteredPosts[0].categories?.nodes?.[0]"
                                class="text-xs font-semibold bg-green-50 border border-green-200 text-[#006400] px-2.5 py-1 rounded-full">
                                {{ filteredPosts[0].categories.nodes[0].name }}
                            </span>
                        </div>
                        <h2
                            class="font-display font-black text-2xl md:text-3xl text-stone-900 group-hover:text-[#006400] transition-colors leading-tight mb-3">
                            {{ filteredPosts[0].title }}
                        </h2>
                        <p class="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-3">
                            {{ stripHtml(filteredPosts[0].excerpt ?? '') }}
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 text-xs text-stone-400">
                                <span v-if="filteredPosts[0].date">📅 {{ formatDate(filteredPosts[0].date) }}</span>
                            </div>
                            <span class="text-[#006400] font-bold text-sm group-hover:underline">Baca selengkapnya
                                →</span>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <!-- Posts grid -->
        <div v-if="filteredPosts.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
                v-for="(post, idx) in (searchQuery || activeCategory !== 'semua' ? filteredPosts : filteredPosts.slice(1))"
                :key="post.databaseId ?? idx" :to="post.uri ?? ('/' + post.slug)" :class="[
                    'blog-card bg-white border-2 border-stone-200 rounded-2xl overflow-hidden reveal',
                ]" :style="idx > 0 ? `transition-delay:${(idx % 3) * 0.08}s` : ''">
                <!-- Post image -->
                <div class="relative overflow-hidden aspect-[16/9]">
                    <img v-if="post.featuredImage?.node?.sourceUrl" :src="post.featuredImage.node.sourceUrl"
                        :alt="post.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div v-else class="img-ph" style="height:100%">
                        <div class="img-ph-text" style="font-size:.65rem">📸 FOTO ARTIKEL</div>
                    </div>
                </div>
                <!-- Post content -->
                <div class="p-5">
                    <div class="flex flex-wrap gap-1.5 mb-3">
                        <span v-for="cat in (post.categories?.nodes ?? [])" :key="cat.name"
                            class="text-xs font-bold text-[#006400] bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">
                            {{ cat.name }}
                        </span>
                    </div>
                    <h3
                        class="card-title font-display font-black text-base text-stone-900 leading-tight mb-2 line-clamp-2 transition-colors">
                        {{ post.title }}
                    </h3>
                    <p class="text-xs text-stone-500 leading-relaxed mb-4 line-clamp-3">
                        {{ stripHtml(post.excerpt ?? '') }}
                    </p>
                    <div class="flex items-center justify-between pt-3 border-t border-stone-100">
                        <span class="text-xs text-stone-400">{{ post.date ? formatDate(post.date) : '' }}</span>
                        <span class="read-more">Baca →</span>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <!-- Empty state -->
        <div v-else-if="status !== 'pending'" class="text-center py-20">
            <div class="text-5xl mb-4">📭</div>
            <h3 class="font-display font-black text-xl text-stone-700 mb-2">
                {{ searchQuery ? 'Artikel tidak ditemukan' : 'Belum ada artikel' }}
            </h3>
            <p class="text-stone-400 text-sm">
                {{ searchQuery ? 'Coba kata kunci lain.' : 'Artikel akan segera hadir.' }}
            </p>
        </div>
    </section>

    <!-- CTA strip -->
    <section class="py-16 px-6 bg-[#006400]">
        <div
            class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
                <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-2">Siap Membangun Lapangan Impian?
                </h2>
                <p class="text-green-200 text-sm">Konsultasi gratis dengan tim ahli kami, respons dalam 1 jam!</p>
            </div>
            <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20setelah%20baca%20blog"
                target="_blank" rel="noopener noreferrer"
                class="flex-shrink-0 bg-white text-[#006400] font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap shadow-lg">
                💬 Konsultasi Gratis Sekarang
            </a>
        </div>
    </section>
</template>

<style scoped>
.blog-card {
    transition: transform .25s, box-shadow .25s, border-color .25s;
}

.blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, .1);
    border-color: #006400;
}

.blog-card:hover .card-title {
    color: #006400;
}

.read-more {
    color: #006400;
    font-weight: 700;
    font-size: .8rem;
    display: inline-flex;
    align-items: center;
    gap: .3rem;
    transition: gap .2s;
}

.read-more:hover {
    gap: .6rem;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
