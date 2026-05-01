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
}

const galeriData: GaleriItem[] = [
    // FUTSAL
    { id: 1, cat: 'futsal', tall: true, title: 'Futsal Indoor Jakarta Selatan', kota: 'Jakarta Selatan', material: 'Lantai Interlock', desc: 'Lapangan futsal indoor standar internasional. Lantai interlock premium, pencahayaan LED 1000 lux, pagar galvanis.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 1\nInterior Lapangan, View Lebar\n(700×500px)' },
    { id: 2, cat: 'futsal', tall: false, title: 'Futsal Outdoor Bekasi', kota: 'Bekasi, Jawa Barat', material: 'Rumput Sintetis', desc: 'Lapangan futsal outdoor dengan rumput sintetis 40mm tahan cuaca. Sistem drainase profesional.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 2\nEksterior Outdoor, Rumput Sintetis\n(700×440px)' },
    { id: 3, cat: 'futsal', tall: false, title: 'Futsal Arena Complex Bandung', kota: 'Bandung, Jawa Barat', material: 'Lantai Interlock', desc: 'Kompleks futsal 2 lapangan dengan ruang ganti, tribun, dan kantin. Proyek turnkey selesai 28 hari.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 3\nTampak Depan Gedung / Kompleks\n(700×440px)' },
    { id: 4, cat: 'futsal', tall: true, title: 'Futsal Indoor Makassar', kota: 'Makassar, Sulawesi Selatan', material: 'Rumput Sintetis', desc: 'Lapangan futsal indoor dengan pencahayaan LED anti-silau. Kapasitas penonton 150 orang.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 4\nPencahayaan Malam Hari\n(700×500px)' },
    { id: 5, cat: 'futsal', tall: false, title: 'Futsal Outdoor Medan', kota: 'Medan, Sumatera Utara', material: 'Lantai Interlock', desc: 'Lapangan futsal outdoor dengan lantai interlock anti-UV. Finishing line cat epoxy berkualitas.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 5\nMarking Lapangan / Close-Up Lantai\n(700×440px)' },
    { id: 6, cat: 'futsal', tall: false, title: 'Futsal Indoor Surabaya', kota: 'Surabaya, Jawa Timur', material: 'Lantai Interlock', desc: 'Lapangan futsal indoor dengan sistem ventilasi baik. Dilengkapi papan skor digital.', badge: '⚽ Futsal', badgeColor: 'text-green-700 bg-green-50 border-green-200', ph: '📸 FOTO FUTSAL 6\nView dari Tribun / Papan Skor\n(700×440px)' },
    // MINI SOCCER
    { id: 7, cat: 'minisoccer', tall: true, title: 'Mini Soccer Outdoor Surabaya', kota: 'Surabaya, Jawa Timur', material: 'Rumput Sintetis Grade A', desc: 'Lapangan mini soccer outdoor premium. Rumput sintetis grade A ketebalan 50mm, tribun 200 orang, pencahayaan malam.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 FOTO MINI SOCCER 1\nAerial / Tampak Atas Lapangan\n(700×500px)' },
    { id: 8, cat: 'minisoccer', tall: false, title: 'Mini Soccer Indoor Semarang', kota: 'Semarang, Jawa Tengah', material: 'Rumput Sintetis', desc: 'Mini soccer indoor dengan atap baja ringan. Bisa beroperasi malam dan hujan tanpa gangguan.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 FOTO MINI SOCCER 2\nInterior Indoor, Full Lapangan\n(700×440px)' },
    { id: 9, cat: 'minisoccer', tall: false, title: 'Mini Soccer Outdoor Bali', kota: 'Denpasar, Bali', material: 'Rumput Sintetis Grade A', desc: 'Mini soccer outdoor view pantai. Material tahan garam dan kelembapan tinggi. Drainase cepat.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 FOTO MINI SOCCER 3\nOutdoor, Suasana Sore Hari\n(700×440px)' },
    { id: 10, cat: 'minisoccer', tall: false, title: 'Mini Soccer Outdoor Palembang', kota: 'Palembang, Sumatera Selatan', material: 'Rumput Sintetis', desc: 'Lapangan mini soccer dengan tribun baja ringan dan atap polycarbonate. Kapasitas 100 penonton.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 FOTO MINI SOCCER 4\nTribun & Atap Polycarbonate\n(700×440px)' },
    { id: 11, cat: 'minisoccer', tall: true, title: 'Mini Soccer Indoor Balikpapan', kota: 'Balikpapan, Kalimantan Timur', material: 'Rumput Sintetis Grade B', desc: 'Mini soccer indoor dengan desain modern. Ruang ganti 2 tim, pantry, area parkir luas.', badge: '🟢 Mini Soccer', badgeColor: 'text-blue-700 bg-blue-50 border-blue-200', ph: '📸 FOTO MINI SOCCER 5\nView dari Gawang / Close Up Rumput\n(700×500px)' },
    // PADEL
    { id: 12, cat: 'padel', tall: true, title: 'Padel Premium Medan', kota: 'Medan, Sumatera Utara', material: 'Kaca Tempered + Artificial Grass', desc: 'Lapangan padel standar internasional IFF. Rangka baja galvanis, kaca tempered 12mm safety glass, artificial grass padel 10mm.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 FOTO PADEL 1\nStruktur Kaca Full View\n(700×500px)' },
    { id: 13, cat: 'padel', tall: false, title: 'Padel Indoor Jakarta Pusat', kota: 'Jakarta Pusat', material: 'Kaca Tempered + Artificial Grass', desc: '2 lapangan padel indoor. Pencahayaan LED 400 lux standar FIP, flooring padel premium import.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 FOTO PADEL 2\nInterior 2 Court, View dari Atas\n(700×440px)' },
    { id: 14, cat: 'padel', tall: false, title: 'Padel Outdoor Bali', kota: 'Kuta, Bali', material: 'Kaca + Artificial Grass', desc: 'Padel outdoor dengan view alam tropis. Struktur tahan angin dan hujan. Drainase cepat.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 FOTO PADEL 3\nOutdoor, Suasana Tropis / View Hijau\n(700×440px)' },
    { id: 15, cat: 'padel', tall: false, title: 'Padel Complex Surabaya', kota: 'Surabaya, Jawa Timur', material: 'Kaca Tempered', desc: 'Kompleks 3 lapangan padel dengan lounge, ruang ganti, dan pro shop. Proyek selesai 25 hari.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 FOTO PADEL 4\nKompleks 3 Lapangan, Tampak Luar\n(700×440px)' },
    { id: 16, cat: 'padel', tall: true, title: 'Padel Indoor Yogyakarta', kota: 'Yogyakarta', material: 'Kaca Tempered + Artificial Grass', desc: 'Lapangan padel indoor pertama di Yogyakarta. Desain estetik dengan lighting warna-warni.', badge: '🎾 Padel', badgeColor: 'text-orange-700 bg-orange-50 border-orange-200', ph: '📸 FOTO PADEL 5\nPencahayaan Malam / Aesthetic Shot\n(700×500px)' },
    // BADMINTON
    { id: 17, cat: 'badminton', tall: true, title: 'Badminton 4 Court Bandung', kota: 'Bandung, Jawa Barat', material: 'Vinyl Sport', desc: '4 lapangan badminton indoor dengan lantai vinyl sport premium. Pencahayaan LED 500 lux anti-silau. Selesai 30 hari.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 FOTO BADMINTON 1\n4 Court View dari Tribun\n(700×500px)' },
    { id: 18, cat: 'badminton', tall: false, title: 'Badminton 2 Court Semarang', kota: 'Semarang, Jawa Tengah', material: 'Kayu Keras', desc: '2 lapangan badminton dengan lantai kayu keras jati lokal. Akustik ruangan baik, non-slip, ramah lutut.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 FOTO BADMINTON 2\nClose-Up Lantai Kayu / Net BWF\n(700×440px)' },
    { id: 19, cat: 'badminton', tall: false, title: 'Badminton Indoor Makassar', kota: 'Makassar, Sulawesi Selatan', material: 'Vinyl Sport', desc: 'Lapangan badminton dengan ventilasi optimal. Tiang net standar BWF, marking garis cat epoxy.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 FOTO BADMINTON 3\nView Full Lapangan + Lampu LED\n(700×440px)' },
    { id: 20, cat: 'badminton', tall: false, title: 'Badminton 6 Court Jakarta Utara', kota: 'Jakarta Utara', material: 'Vinyl Sport Premium', desc: 'Kompleks badminton 6 court terbesar di kawasan Jakarta Utara. Dilengkapi ruang ganti, pantry, dan area parkir.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 FOTO BADMINTON 4\n6 Court Aerial / Tampak Atas\n(700×440px)' },
    { id: 21, cat: 'badminton', tall: true, title: 'Badminton Indoor Medan', kota: 'Medan, Sumatera Utara', material: 'Kayu Keras', desc: 'Lapangan badminton kayu keras dengan akustik ruangan premium. Tribun 100 kursi, papan skor digital.', badge: '🏸 Badminton', badgeColor: 'text-purple-700 bg-purple-50 border-purple-200', ph: '📸 FOTO BADMINTON 5\nSuasana Pertandingan / Tribun\n(700×500px)' },
    // PROSES
    { id: 22, cat: 'proses', tall: false, title: 'Survey Lokasi: Sebelum Mulai', kota: 'Berbagai Kota', material: 'Survey & Pengukuran', desc: 'Tim lapangan kami melakukan survey lokasi, pengukuran lahan, dan analisis tanah sebelum konstruksi dimulai.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 1\nTim Survey + Alat Ukur di Lokasi\n(700×440px)' },
    { id: 23, cat: 'proses', tall: true, title: 'Pengerjaan Struktur Dasar', kota: 'On Progress', material: 'Konstruksi', desc: 'Proses pengerjaan pondasi dan struktur dasar lapangan. Material berkualitas, pengawasan ketat di setiap tahap.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 2\nStruktur Besi / Pengecoran Pondasi\n(700×500px)' },
    { id: 24, cat: 'proses', tall: false, title: 'Pemasangan Lantai Interlock', kota: 'On Progress', material: 'Lantai Interlock', desc: 'Proses pemasangan lantai interlock yang presisi. Setiap tile dipasang dengan cermat untuk hasil rata dan rapi.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 3\nPemasangan Tile Interlock\n(700×440px)' },
    { id: 25, cat: 'proses', tall: false, title: 'Pengiriman Material Lapangan', kota: 'Logistik', material: 'Material & Logistik', desc: 'Pengiriman material ke lokasi proyek di seluruh Indonesia. Kami handle logistik sepenuhnya untuk Anda.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 4\nTruk Pengiriman / Unloading Material\n(700×440px)' },
    { id: 26, cat: 'proses', tall: false, title: 'Pemasangan Rumput Sintetis', kota: 'On Progress', material: 'Rumput Sintetis', desc: 'Proses pemasangan rumput sintetis tahap demi tahap. Jahitan presisi, permukaan rata, hasil rapi.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 5\nRoll Rumput / Proses Pemasangan\n(700×440px)' },
    { id: 27, cat: 'proses', tall: true, title: 'Before vs After Konstruksi', kota: 'Dokumentasi', material: 'Before After', desc: 'Transformasi lahan kosong menjadi lapangan profesional siap pakai. Bukti nyata kemampuan tim kami.', badge: '🏗 Proses', badgeColor: 'text-stone-700 bg-stone-50 border-stone-200', ph: '📸 FOTO PROSES 6\nBefore–After Split / Transformasi\n(700×500px)' },
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
                <!-- Image placeholder -->
                <div class="lb-ph">
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
                    <div class="text-center bg-white border border-stone-200 rounded-xl px-5 py-3">
                        <div class="font-display font-black text-2xl text-[#006400]">4</div>
                        <div class="text-xs text-stone-400 font-semibold mt-0.5">Jenis</div>
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
                    <span class="ml-1 text-xs opacity-70">({{ countFor(tab.key) }})</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Gallery grid -->
    <section class="py-10 px-6 max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-6 reveal">
            <p class="text-sm text-stone-500">
                <span class="font-bold text-stone-800">{{ filteredItems.length }}</span> foto ditampilkan
            </p>
            <p class="text-xs text-stone-400 italic">Klik foto untuk lihat detail</p>
        </div>

        <div v-if="filteredItems.length > 0" class="gal-grid">
            <div v-for="(item, idx) in filteredItems" :key="item.id"
                :class="['gal-item relative', item.tall ? 'tall' : '']" @click="openLightbox(idx)">
                <div class="img-ph" style="height:100%">
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
                    class="bg-white text-[#006400] font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap">
                    💬 Konsultasi Gratis
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
