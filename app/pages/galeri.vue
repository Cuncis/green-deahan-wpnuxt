<script setup lang="ts">
useHead({ title: 'Galeri Proyek | Green Deahan Sport' })

interface GaleriItem {
    id: number
    cat: string
    tall: boolean
    title: string
    kota: string
    material: string
    desc: string
    badge: string
    badgeColor: string
    ph: string
    src: string
}

const galeriData: GaleriItem[] = [
    // ── FUTSAL 45% → 9 items ────────────────────────────────────────────────
    { id: 1, cat: 'futsal', tall: true, title: 'Futsal Indoor Jakarta Selatan', kota: 'Jakarta Selatan', material: 'Lantai Interlock', desc: 'Lapangan futsal indoor standar internasional. Lantai interlock premium, LED 1000 lux, pagar galvanis.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 1 · Jakarta Selatan\nInterior Lapangan — View Lebar\n700 × 500 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2024/07/photo_6_2024-07-23_10-52-44.jpg' },
    { id: 2, cat: 'futsal', tall: false, title: 'Futsal Outdoor Bekasi', kota: 'Bekasi, Jawa Barat', material: 'Rumput Sintetis', desc: 'Lapangan futsal outdoor rumput sintetis 40mm tahan cuaca. Sistem drainase profesional.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 2 · Bekasi\nEksterior Outdoor — Rumput Sintetis\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/05/futsal2-outdoor.png' },
    { id: 3, cat: 'futsal', tall: false, title: 'Futsal Arena Complex Bandung', kota: 'Bandung, Jawa Barat', material: 'Lantai Interlock & Rumput Sintetis', desc: 'Kompleks futsal 2 lapangan: ruang ganti, tribun, kantin. Proyek turnkey selesai 28 hari.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 3 · Bandung\nTampak Depan Gedung / Kompleks\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2024/08/photo_24_2024-07-23_10-52-44.jpg' },
    { id: 4, cat: 'futsal', tall: true, title: 'Futsal Indoor Makassar', kota: 'Makassar, Sulawesi Selatan', material: 'Rumput Sintetis', desc: 'Lapangan futsal indoor LED anti-silau. Kapasitas penonton 150 orang.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 4 · Makassar\nPencahayaan Malam Hari\n700 × 500 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2024/07/photo_11_2024-07-23_10-52-44.jpg' },
    { id: 5, cat: 'futsal', tall: false, title: 'Futsal Outdoor Medan', kota: 'Medan, Sumatera Utara', material: 'Rumput Sintetis', desc: 'Lapangan futsal outdoor lantai Rumput Sintetis. Finishing line cat epoxy berkualitas.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 5 · Medan\nMarking & Close-Up Lantai\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/05/futsal4-outdoor-1.png' },
    { id: 6, cat: 'futsal', tall: false, title: 'Futsal Indoor Surabaya', kota: 'Surabaya, Jawa Timur', material: 'Rumput Sintetis', desc: 'Lapangan futsal indoor ventilasi optimal. Dilengkapi papan skor digital disamping.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 6 · Surabaya\nView dari Tribun / Papan Skor\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/hero-img2.jpg' },
    { id: 7, cat: 'futsal', tall: false, title: 'Futsal Indoor Yogyakarta', kota: 'Yogyakarta', material: 'Lantai Interlock', desc: 'Lapangan futsal indoor pusat kota Yogyakarta. LED anti-silau, tribun 80 orang.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 7 · Yogyakarta\nInterior View Lebar\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/05/futsal4-indoor.png' },
    { id: 8, cat: 'futsal', tall: true, title: 'Futsal Outdoor Malang', kota: 'Malang, Jawa Timur', material: 'Rumput Sintetis', desc: 'Futsal outdoor tahan cuaca tropis. Rumput sintetis 40mm, drainase cepat, pencahayaan malam.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 8 · Malang\nOutdoor Malam Hari\n700 × 500 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/05/futsal5-outdoor-1.png' },
    { id: 9, cat: 'futsal', tall: false, title: 'Futsal Complex Bali', kota: 'Denpasar, Bali', material: 'Lantai Interlock', desc: 'Kompleks futsal 3 lapangan: lounge, kantin, parkir luas. Selesai 35 hari.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FUTSAL 9 · Bali\nTampak Luar Kompleks\n700 × 440 px', src: 'https://gdlogin.greendeahan.com/wp-content/uploads/2026/05/futsal6-indoor-1.png' },
    // ── MINI SOCCER 30% → 6 items ───────────────────────────────────────────
    { id: 10, cat: 'minisoccer', tall: true, title: 'Mini Soccer Outdoor Surabaya', kota: 'Surabaya, Jawa Timur', material: 'Rumput Sintetis Grade A', desc: 'Mini soccer outdoor premium. Rumput sintetis grade A 50mm, tribun 200 orang, pencahayaan malam.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 1 · Surabaya\nAerial / Tampak Atas Lapangan\n700 × 500 px', src: '' },
    { id: 11, cat: 'minisoccer', tall: false, title: 'Mini Soccer Indoor Semarang', kota: 'Semarang, Jawa Tengah', material: 'Rumput Sintetis', desc: 'Mini soccer indoor atap baja ringan. Beroperasi malam dan hujan tanpa gangguan.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 2 · Semarang\nInterior Indoor — Full Lapangan\n700 × 440 px', src: '' },
    { id: 12, cat: 'minisoccer', tall: false, title: 'Mini Soccer Outdoor Bali', kota: 'Denpasar, Bali', material: 'Rumput Sintetis Grade A', desc: 'Mini soccer outdoor view pantai. Material tahan garam & kelembapan tinggi. Drainase cepat.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 3 · Bali\nOutdoor Suasana Sore Hari\n700 × 440 px', src: '' },
    { id: 13, cat: 'minisoccer', tall: false, title: 'Mini Soccer Outdoor Palembang', kota: 'Palembang, Sumatera Selatan', material: 'Rumput Sintetis', desc: 'Mini soccer dengan tribun baja ringan & atap polycarbonate. Kapasitas 100 penonton.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 4 · Palembang\nTribun & Atap Polycarbonate\n700 × 440 px', src: '' },
    { id: 14, cat: 'minisoccer', tall: true, title: 'Mini Soccer Indoor Balikpapan', kota: 'Balikpapan, Kalimantan Timur', material: 'Rumput Sintetis Grade B', desc: 'Mini soccer indoor desain modern. Ruang ganti 2 tim, pantry, parkir luas.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 5 · Balikpapan\nView dari Gawang\n700 × 500 px', src: '' },
    { id: 15, cat: 'minisoccer', tall: false, title: 'Mini Soccer Indoor Bandung', kota: 'Bandung, Jawa Barat', material: 'Rumput Sintetis Grade A', desc: 'Mini soccer indoor 2 lapangan. LED 800 lux, tribun 120 orang, AC industrial.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 MINI SOCCER 6 · Bandung\nDua Lapangan Indoor\n700 × 440 px', src: '' },
    // ── PADEL 15% → 3 items ─────────────────────────────────────────────────
    { id: 16, cat: 'padel', tall: true, title: 'Padel Premium Medan', kota: 'Medan, Sumatera Utara', material: 'Kaca Tempered + Artificial Grass', desc: 'Lapangan padel standar IFF. Rangka baja galvanis, kaca tempered 12mm, artificial grass 10mm.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 PADEL 1 · Medan\nStruktur Kaca Full View\n700 × 500 px', src: '' },
    { id: 17, cat: 'padel', tall: false, title: 'Padel Indoor Jakarta Pusat', kota: 'Jakarta Pusat', material: 'Kaca Tempered + Artificial Grass', desc: '2 lapangan padel indoor. LED 400 lux standar FIP, flooring padel premium import.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 PADEL 2 · Jakarta Pusat\n2 Court Interior\n700 × 440 px', src: '' },
    { id: 18, cat: 'padel', tall: false, title: 'Padel Outdoor Bali', kota: 'Kuta, Bali', material: 'Kaca + Artificial Grass', desc: 'Padel outdoor view alam tropis. Struktur tahan angin & hujan. Drainase cepat.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 PADEL 3 · Bali\nOutdoor Suasana Tropis\n700 × 440 px', src: '' },
    // ── BADMINTON 10% → 2 items ─────────────────────────────────────────────
    { id: 19, cat: 'badminton', tall: true, title: 'Badminton 4 Court Bandung', kota: 'Bandung, Jawa Barat', material: 'Vinyl Sport', desc: '4 lapangan badminton indoor. Lantai vinyl sport premium, LED 500 lux anti-silau. Selesai 30 hari.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 BADMINTON 1 · Bandung\n4 Court View dari Tribun\n700 × 500 px', src: '' },
    { id: 20, cat: 'badminton', tall: false, title: 'Badminton 2 Court Semarang', kota: 'Semarang, Jawa Tengah', material: 'Kayu Keras', desc: '2 lapangan badminton lantai kayu keras jati. Akustik ruangan baik, non-slip, ramah lutut.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 BADMINTON 2 · Semarang\nLantai Kayu / Net BWF\n700 × 440 px', src: '' },
    // ── PROSES KONSTRUKSI ────────────────────────────────────────────────────
    { id: 21, cat: 'proses', tall: false, title: 'Survey Lokasi: Sebelum Mulai', kota: 'Berbagai Kota', material: 'Survey & Pengukuran', desc: 'Tim kami survey lokasi, ukur lahan, dan analisis tanah sebelum konstruksi dimulai.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 1 · Survey\nTim + Alat Ukur di Lokasi\n700 × 440 px', src: '' },
    { id: 22, cat: 'proses', tall: true, title: 'Pengerjaan Struktur Dasar', kota: 'On Progress', material: 'Konstruksi', desc: 'Pengerjaan pondasi dan struktur dasar lapangan. Material berkualitas, pengawasan ketat setiap tahap.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 2 · Struktur\nBesi / Pengecoran Pondasi\n700 × 500 px', src: '' },
    { id: 23, cat: 'proses', tall: false, title: 'Pemasangan Lantai Interlock', kota: 'On Progress', material: 'Lantai Interlock', desc: 'Pemasangan lantai interlock presisi. Setiap tile dipasang cermat untuk hasil rata dan rapi.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 3 · Lantai\nPemasangan Tile Interlock\n700 × 440 px', src: '' },
    { id: 24, cat: 'proses', tall: false, title: 'Pengiriman Material Lapangan', kota: 'Logistik', material: 'Material & Logistik', desc: 'Pengiriman material ke seluruh Indonesia. Kami handle logistik sepenuhnya untuk Anda.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 4 · Logistik\nTruk Pengiriman / Unloading\n700 × 440 px', src: '' },
    { id: 25, cat: 'proses', tall: false, title: 'Pemasangan Rumput Sintetis', kota: 'On Progress', material: 'Rumput Sintetis', desc: 'Pemasangan rumput sintetis tahap demi tahap. Jahitan presisi, permukaan rata, hasil rapi.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 5 · Rumput\nRoll Rumput / Proses Pemasangan\n700 × 440 px', src: '' },
    { id: 26, cat: 'proses', tall: true, title: 'Before vs After Konstruksi', kota: 'Dokumentasi', material: 'Before After', desc: 'Transformasi lahan kosong menjadi lapangan profesional siap pakai. Bukti nyata kemampuan tim kami.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 PROSES 6 · Transformasi\nBefore – After Split\n700 × 500 px', src: '' },
]

const tabs = [
    { key: 'semua', label: '🏟 Semua' },
    { key: 'futsal', label: '⚽ Futsal' },
    { key: 'minisoccer', label: '🟢 Mini Soccer' },
    { key: 'padel', label: '🎾 Padel' },
    { key: 'badminton', label: '🏸 Badminton' },
    { key: 'proses', label: '🏗 Proses Konstruksi' },
]

const activeFilter = ref('semua')
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const filteredItems = computed(() =>
    activeFilter.value === 'semua' ? galeriData : galeriData.filter(i => i.cat === activeFilter.value)
)

const countFor = (cat: string) =>
    cat === 'semua' ? galeriData.length : galeriData.filter(i => i.cat === cat).length

const lightboxItem = computed(() => filteredItems.value[lightboxIndex.value])

function openLightbox(idx: number) {
    lightboxIndex.value = idx
    lightboxOpen.value = true
    if (import.meta.client) document.body.style.overflow = 'hidden'
}

function closeLightbox() {
    lightboxOpen.value = false
    if (import.meta.client) document.body.style.overflow = ''
}

function navLightbox(dir: number) {
    lightboxIndex.value = (lightboxIndex.value + dir + filteredItems.value.length) % filteredItems.value.length
}

onMounted(() => {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (!lightboxOpen.value) return
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') navLightbox(-1)
        if (e.key === 'ArrowRight') navLightbox(1)
    })
})
</script>

<template>
    <!-- Lightbox -->
    <Teleport to="body">
        <div v-if="lightboxOpen" class="lb-overlay" @click.self="closeLightbox">
            <div class="lb-wrap">
                <!-- Image -->
                <div v-if="lightboxItem?.src" class="lb-img">
                    <img :src="lightboxItem.src" :alt="lightboxItem.title" class="w-full h-full object-cover">
                </div>
                <div v-else class="lb-ph" :style="{ aspectRatio: lightboxItem?.tall ? '7/5' : '35/22' }">
                    <div class="lb-ph-text" style="white-space: pre-line">{{ lightboxItem?.ph }}</div>
                </div>
                <!-- Info -->
                <div class="lb-info">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <span
                                :class="['text-xs font-bold px-2.5 py-1 rounded-full border inline-block mb-2', lightboxItem?.badgeColor]">
                                {{ lightboxItem?.badge }}
                            </span>
                            <h3 class="font-display font-black text-lg text-stone-900">{{ lightboxItem?.title }}</h3>
                            <p class="text-sm text-stone-500 mt-1">{{ lightboxItem?.desc }} | 📍 {{ lightboxItem?.kota
                            }} | 🧱 {{ lightboxItem?.material }}</p>
                        </div>
                        <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer"
                            class="flex-shrink-0 bg-[#006400] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#004d00] transition-colors whitespace-nowrap">
                            Konsultasi →
                        </a>
                    </div>
                </div>
                <!-- Close -->
                <button @click="closeLightbox"
                    class="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-stone-700 font-bold hover:bg-white text-lg leading-none">✕</button>
                <!-- Prev / Next -->
                <button @click.stop="navLightbox(-1)"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-stone-700 font-bold hover:bg-white text-lg">‹</button>
                <button @click.stop="navLightbox(1)"
                    class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-stone-700 font-bold hover:bg-white text-lg">›</button>
            </div>
        </div>
    </Teleport>

    <!-- Page Hero -->
    <section class="pt-28 pb-10 px-6 max-w-6xl mx-auto">
        <div class="reveal">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-3 tracking-wide">📸
                        Portofolio Nyata</span>
                    <h1 class="font-display font-black text-4xl md:text-5xl text-stone-900 leading-tight">
                        Galeri Proyek<br><span class="text-[#006400]">Green Deahan Sport</span>
                    </h1>
                    <p class="text-stone-500 text-sm md:text-base mt-3 max-w-xl">
                        Lihat hasil nyata konstruksi lapangan kami di berbagai kota Indonesia. Klik foto untuk melihat
                        detail proyek.
                    </p>
                </div>
                <!-- Quick stats -->
                <div class="flex gap-4 flex-shrink-0">
                    <div class="text-center bg-white border border-stone-200 rounded-xl px-5 py-3">
                        <div class="font-display font-black text-2xl text-[#006400]">100+</div>
                        <div class="text-xs text-stone-400 font-semibold mt-0.5">Proyek</div>
                    </div>
                    <div class="text-center bg-white border border-stone-200 rounded-xl px-5 py-3">
                        <div class="font-display font-black text-2xl text-[#006400]">15+</div>
                        <div class="text-xs text-stone-400 font-semibold mt-0.5">Kota</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tabs -->
    <section class="sticky top-[65px] z-40 bg-[#f7f5f2] border-b border-stone-200 px-6 py-3">
        <div class="max-w-6xl mx-auto">
            <div class="flex gap-2 overflow-x-auto pb-1">
                <button v-for="tab in tabs" :key="tab.key" :class="[
                    'flex-shrink-0 text-sm font-bold px-5 py-2.5 rounded-xl border-2 transition-all',
                    activeFilter === tab.key
                        ? 'bg-[#006400] text-white border-[#006400] shadow-md shadow-green-900/20'
                        : 'bg-white text-stone-600 border-stone-200 hover:border-[#006400] hover:text-[#006400]'
                ]" @click="activeFilter = tab.key">
                    {{ tab.label }}
                </button>
            </div>
        </div>
    </section>

    <!-- Gallery grid -->
    <section class="py-10 px-6 max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-6 reveal">
            <p class="text-xs text-stone-400 italic">Klik foto untuk lihat detail</p>
        </div>

        <div v-if="filteredItems.length > 0" class="gal-grid">
            <div v-for="(item, idx) in filteredItems" :key="item.id"
                :class="['gal-item relative', item.tall ? 'tall' : '']" @click="openLightbox(idx)">
                <img v-if="item.src" :src="item.src" :alt="item.title" class="w-full h-full object-cover">
                <div v-else class="img-ph" style="height:100%">
                    <div class="img-ph-text" style="font-size:.65rem; white-space:pre-line">{{ item.ph }}</div>
                </div>
                <div class="overlay">
                    <span class="text-white text-3xl">{{ item.badge.split(' ')[0] }}</span>
                    <p class="text-white font-bold text-sm px-4 text-center">{{ item.title }}</p>
                    <span class="text-green-200 text-xs">Klik untuk detail →</span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur px-3 py-2">
                    <span class="text-[10px] font-bold text-[#006400]">{{ item.badge }}</span>
                    <p class="text-xs font-semibold text-stone-800 leading-tight mt-0.5 truncate">{{ item.title }}</p>
                    <p class="text-[10px] text-stone-400 mt-0.5">📍 {{ item.kota }}</p>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20">
            <div class="text-5xl mb-4">🔍</div>
            <h3 class="font-display font-black text-xl text-stone-700 mb-2">Foto tidak ditemukan</h3>
            <p class="text-stone-400 text-sm">Coba pilih kategori lain</p>
        </div>
    </section>

    <!-- CTA strip -->
    <section class="py-16 px-6 bg-[#006400]">
        <div
            class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
                <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-2">Tertarik Punya Lapangan Seperti
                    Ini?</h2>
                <p class="text-green-200 text-sm">Konsultasi gratis dengan tim kami, respons dalam 1 jam!</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a href="https://wa.me/6281357570064?text=Halo,%20saya%20tertarik%20membangun%20lapangan%20setelah%20lihat%20galeri"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-white text-[#006400] font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L0 24l6.318-1.506A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.214-3.727.888.929-3.62-.235-.374A9.818 9.818 0 1112 21.818z" />
                    </svg>
                    Konsultasi Gratis
                </a>
                <NuxtLink to="/kontak"
                    class="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap">
                    Hubungi Kami
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.lb-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, .92);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.lb-wrap {
    position: relative;
    max-width: 800px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
}

.lb-img {
    width: 100%;
    aspect-ratio: 35/22;
    overflow: hidden;
}

.lb-ph {
    width: 100%;
    aspect-ratio: 4/3;
    background: #d4e6d4;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.lb-ph-text {
    font-size: .8rem;
    font-weight: 700;
    color: #006400;
    border: 2px dashed rgba(0, 100, 0, .4);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, .7);
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: .07em;
}

.lb-info {
    background: #fff;
    padding: 1.25rem 1.5rem;
}
</style>
