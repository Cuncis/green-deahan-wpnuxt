<script setup lang="ts">
const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Galeri', to: '/galeri' },
    { label: 'Blog', to: '/blog' },
    { label: 'Kontak', to: '/kontak' },
]

const mobileOpen = ref(false)
const navShadow = ref(false)

const handleScroll = () => { navShadow.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <!-- Floating WhatsApp button -->
    <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer" class="wa-float">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.855L0 24l6.335-1.508A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.594-.48-5.112-1.32l-.366-.213-3.762.895.952-3.648-.239-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        Chat WhatsApp
    </a>

    <!-- Navigation bar -->
    <nav :class="[
        'fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2] border-b border-stone-200 transition-shadow duration-300',
        navShadow && 'shadow-md',
    ]">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center">
                <img src="https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/full-logo-02.png"
                    alt="Green Deahan Sport Full Logo" class="h-10 w-auto object-contain" />
            </NuxtLink>

            <!-- Desktop menu -->
            <div class="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-500">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="hover:text-[#006400] transition-colors" active-class="!text-[#006400] !font-bold">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <!-- Desktop CTA -->
            <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer"
                class="hidden md:flex bg-[#006400] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#004d00] transition-colors items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.855L0 24l6.335-1.508A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.594-.48-5.112-1.32l-.366-.213-3.762.895.952-3.648-.239-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Konsultasi Gratis
            </a>

            <!-- Mobile hamburger -->
            <button class="md:hidden flex flex-col gap-1.5 p-1" :aria-expanded="mobileOpen" aria-label="Toggle menu"
                @click="mobileOpen = !mobileOpen">
                <span class="w-6 h-0.5 bg-stone-700 block" />
                <span class="w-6 h-0.5 bg-stone-700 block" />
                <span class="w-6 h-0.5 bg-stone-700 block" />
            </button>
        </div>

        <!-- Mobile dropdown -->
        <div v-show="mobileOpen"
            class="md:hidden bg-[#f7f5f2] border-t border-stone-200 px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-stone-700">
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="hover:text-[#006400]"
                @click="mobileOpen = false">
                {{ link.label }}
            </NuxtLink>
            <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer"
                class="bg-[#006400] text-white text-center py-2.5 rounded-lg">
                Konsultasi Gratis
            </a>
        </div>
    </nav>
</template>

<style scoped>
.wa-float {
    position: fixed;
    bottom: 1.8rem;
    right: 1.8rem;
    z-index: 999;
    background: #25d366;
    color: #fff;
    border-radius: 50px;
    padding: .9rem 1.4rem;
    font-weight: 700;
    font-size: .9rem;
    box-shadow: 0 6px 24px rgba(37, 211, 102, .45);
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
    transition: transform .2s, box-shadow .2s;
}

.wa-float:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(37, 211, 102, .5);
}
</style>
