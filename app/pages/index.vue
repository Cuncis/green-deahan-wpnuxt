<script setup lang="ts">
useHead({
    title: 'Green Deahan Sport | Jasa Pembuatan Lapangan Futsal, Mini Soccer, Padel & Badminton Se-Indonesia',
})

// FAQ
const faqs = [
    {
        q: 'Apakah GreenDeahan mengerjakan proyek dari nol?',
        a: 'Ya, kami mengerjakan proyek dari nol sampai selesai. Mulai dari konsultasi awal, survey lokasi, desain, perizinan, pengadaan material, konstruksi, hingga lapangan siap beroperasi. Anda tidak perlu koordinasi dengan banyak pihak, cukup hubungi kami saja.',
    },
    {
        q: 'Lantai apa saja yang tersedia dan apa bedanya?',
        a: 'Kami menyediakan: <strong>Lantai Interlock</strong>: awet, mudah diperbaiki jika rusak sebagian, cocok indoor, harga lebih terjangkau. <strong>Rumput Sintetis</strong>: estetik, nyaman untuk outdoor, tahan cuaca. <strong>Interlock</strong>: khusus badminton/indoor, non-slip dan ramah lutut. <strong>Artificial Grass Padel</strong>: khusus lapangan padel standar internasional.',
    },
    {
        q: 'Berapa lama waktu pengerjaan konstruksi lapangan?',
        a: 'Tergantung jenis dan skala proyek: <strong>Futsal 1 lapangan</strong> sekitar 14–21 hari. <strong>Mini Soccer</strong> sekitar 21–30 hari. <strong>Padel</strong> sekitar 14–21 hari. <strong>Badminton multi-court</strong> sekitar 21–35 hari. Jadwal tepat ditentukan saat survey dan tercantum dalam kontrak resmi.',
    },
    {
        q: 'Apakah ada garansi setelah lapangan selesai?',
        a: 'Ya, semua proyek dilengkapi garansi resmi untuk konstruksi dan material. Jika ada kerusakan atau masalah akibat pengerjaan, tim kami akan datang dan memperbaiki tanpa biaya tambahan. Detail garansi tertulis jelas di kontrak perjanjian.',
    },
    {
        q: 'Bagaimana sistem pembayarannya?',
        a: 'Sistem pembayaran kami aman dan transparan: <strong>(1)</strong> Bayar uang muka (DP) setelah sepakat di kontrak. <strong>(2)</strong> Progress payment sesuai milestone pengerjaan (opsional untuk proyek besar). <strong>(3)</strong> <strong>Pelunasan dilakukan SETELAH lapangan selesai 100% dan Anda puas.</strong> Tidak ada biaya tersembunyi.',
    },
    {
        q: 'Apakah melayani daerah luar Jawa?',
        a: 'Kami melayani seluruh Indonesia, meliputi Jabodetabek, Jawa Tengah & Timur, Sumatera, Kalimantan, Sulawesi, Bali, NTB, dan wilayah lainnya. Tim lapangan kami akan bergerak ke lokasi Anda. Konsultasikan dulu kebutuhan dan lokasi Anda via WhatsApp.',
    },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => {
    openFaq.value = openFaq.value === i ? null : i
}

onMounted(() => {
    // Reveal on scroll
    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target) }
        })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))

    // Counter animation
    const counterObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return
            const el = e.target as HTMLElement
            const target = parseInt(el.dataset.count ?? '0')
            let cur = 0
            const step = Math.ceil(target / 50)
            const timer = setInterval(() => {
                cur = Math.min(cur + step, target)
                el.textContent = cur >= target ? `${target}+` : String(cur)
                if (cur >= target) clearInterval(timer)
            }, 28)
            counterObs.unobserve(el)
        })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el))

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = (a as HTMLAnchorElement).getAttribute('href')
            if (!href) return
            const t = document.querySelector(href)
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }) }
        })
    })
})
</script>

<template>
    <div>

        <!-- ══════════════ HERO ══════════════ -->
        <section class="pt-28 pb-0 px-6 max-w-6xl mx-auto">
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-xs font-semibold text-stone-500">
                <span class="flex items-center gap-1.5"><span
                        class="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" /> Melayani 24/7</span>
                <span>⭐ 5.0 Rating dari 100+ Klien</span>
                <span>✅ Garansi Resmi Konstruksi</span>
                <span>🗺 Se-Indonesia Sejak 2010</span>
            </div>

            <div class="grid md:grid-cols-2 gap-10 items-center pb-16">
                <div>
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide">🏗
                        Jasa Pembuatan Lapangan #1 Se-Indonesia</span>
                    <h1
                        class="font-display text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-5">
                        Bangun Lapangan Olahraga dari<br>
                        <span class="text-[#006400]">Nol sampai Siap Beroperasi</span>
                    </h1>
                    <p class="text-stone-500 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                        Satu mitra, semua dikerjakan. <strong class="text-stone-800">Survey, desain, konstruksi, hingga
                            serah terima.</strong> Anda tinggal pantau hasilnya.
                    </p>
                    <div class="flex flex-wrap gap-3 mb-8">
                        <div
                            class="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-semibold text-stone-700">
                            <span class="text-lg">🏆</span> 16+ Tahun Pengalaman
                        </div>
                        <div
                            class="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-semibold text-stone-700">
                            <span class="text-lg">📍</span> 100+ Proyek Selesai
                        </div>
                        <div
                            class="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-semibold text-stone-700">
                            <span class="text-lg">🏙</span> 15+ Kota
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer"
                            class="bg-[#006400] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#004d00] transition-colors text-sm flex items-center gap-2 shadow-lg shadow-green-900/20">
                            💬 Konsultasi Gratis Sekarang
                        </a>
                        <NuxtLink to="/galeri"
                            class="border-2 border-[#006400] text-[#006400] font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm">
                            Lihat Portofolio →
                        </NuxtLink>
                    </div>
                    <p class="text-xs text-stone-400 mt-3">*Konsultasi gratis, tanpa kewajiban apapun. Respon dalam 1
                        jam!</p>
                </div>

                <div class="relative">
                    <div class="img-ph rounded-2xl w-full aspect-[4/3] shadow-xl border border-stone-200">
                        <div class="img-ph-text">📸 FOTO HERO UTAMA<br>Foto Lapangan Terbaik / Aerial
                            View<br>(Disarankan: 800×600px)</div>
                    </div>
                    <div
                        class="absolute -bottom-5 -left-5 bg-white border border-stone-200 rounded-2xl shadow-lg p-4 flex items-center gap-3">
                        <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">⚽</div>
                        <div>
                            <div class="font-display font-black text-xl text-[#006400]">100+</div>
                            <div class="text-xs text-stone-500 font-semibold">Proyek Berhasil</div>
                        </div>
                    </div>
                    <div class="absolute -top-4 -right-4 bg-[#006400] text-white rounded-2xl shadow-lg p-3 text-center">
                        <div class="font-display font-black text-2xl">16+</div>
                        <div class="text-[10px] font-bold tracking-wide uppercase">Tahun</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TICKER -->
        <div class="bg-[#006400] py-3 ticker-wrap border-y border-[#004d00]">
            <div class="ticker-inner">
                <span class="text-white text-sm font-bold tracking-widest">⚽ FUTSAL</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🟢 MINI SOCCER</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🎾 PADEL</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🏸 BADMINTON</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">✅ GARANSI RESMI</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🗺 SE-INDONESIA</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">💬 KONSULTASI GRATIS</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🏗 SEJAK 2010</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <!-- duplicate for seamless loop -->
                <span class="text-white text-sm font-bold tracking-widest">⚽ FUTSAL</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🟢 MINI SOCCER</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🎾 PADEL</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🏸 BADMINTON</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">✅ GARANSI RESMI</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🗺 SE-INDONESIA</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">💬 KONSULTASI GRATIS</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
                <span class="text-white text-sm font-bold tracking-widest">🏗 SEJAK 2010</span>
                <span class="text-green-300 text-sm font-bold tracking-widest">•</span>
            </div>
        </div>

        <!-- ══════════════ LAYANAN ══════════════ -->
        <section id="layanan" class="py-20 px-6 max-w-6xl mx-auto">
            <div class="text-center mb-14 reveal">
                <span
                    class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Layanan
                    Kami</span>
                <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-3">4 Jenis Lapangan yang Kami
                    Bangun</h2>
                <p class="text-stone-500 max-w-xl mx-auto text-sm md:text-base">Semua dikerjakan oleh tim profesional
                    berpengalaman dengan material berkualitas dan garansi resmi.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Futsal -->
                <div
                    class="reveal bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-[#006400] transition-all">
                    <img src="https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/futsal-img1.png"
                        alt="Lapangan Futsal Interior Eksterior Terbaik"
                        class="w-full h-52 object-cover m-0 p-0 border-0" />
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span
                                    class="text-xs font-bold text-[#006400] bg-green-50 px-2.5 py-1 rounded-full border border-green-200">⭐
                                    Paling Populer</span>
                                <h3 class="font-display text-2xl font-black text-stone-900 mt-2">Lapangan Futsal</h3>
                            </div>
                        </div>
                        <p class="text-stone-500 text-sm leading-relaxed mb-4">Konstruksi lapangan futsal standar
                            internasional. Pilih lantai <strong>interlock</strong> atau <strong>rumput
                                sintetis</strong>. Sudah termasuk pencahayaan, pagar, gawang, net, dan fasilitas
                            pendukung lengkap.</p>
                        <ul class="text-sm text-stone-600 space-y-1.5 mb-5">
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Lantai
                                interlock atau rumput sintetis</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Sistem
                                pencahayaan LED standar pertandingan</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Pagar,
                                gawang, net termasuk</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Ruang
                                ganti &amp; tribun (opsional)</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Garansi
                                konstruksi &amp; material</li>
                        </ul>
                        <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20lapangan%20futsal"
                            target="_blank" rel="noopener noreferrer"
                            class="block text-center bg-[#006400] text-white font-bold py-3 rounded-xl hover:bg-[#004d00] transition-colors text-sm">Tanya
                            Harga Futsal →</a>
                    </div>
                </div>

                <!-- Mini Soccer -->
                <div class="reveal bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-[#006400] transition-all"
                    style="transition-delay:.08s">
                    <div class="img-ph h-52">
                        <div class="img-ph-text">📸 FOTO LAPANGAN MINI SOCCER<br>Tampak Atas / Full
                            Lapangan<br>(700×420px)</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span
                                    class="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">🟢
                                    Outdoor &amp; Indoor</span>
                                <h3 class="font-display text-2xl font-black text-stone-900 mt-2">Mini Soccer</h3>
                            </div>
                        </div>
                        <p class="text-stone-500 text-sm leading-relaxed mb-4">Lapangan mini soccer dengan rumput
                            sintetis premium grade A. Sistem drainase profesional agar tidak tergenang saat hujan.
                            Material bisa disesuaikan dengan <strong>budget Anda</strong>.</p>
                        <ul class="text-sm text-stone-600 space-y-1.5 mb-5">
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Rumput
                                sintetis premium grade A/B</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Sistem
                                drainase profesional</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Tribun
                                penonton &amp; pagar keliling</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span>
                                Pencahayaan malam hari (opsional)</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Cocok
                                outdoor &amp; indoor</li>
                        </ul>
                        <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20lapangan%20mini%20soccer"
                            target="_blank" rel="noopener noreferrer"
                            class="block text-center bg-[#006400] text-white font-bold py-3 rounded-xl hover:bg-[#004d00] transition-colors text-sm">Tanya
                            Harga Mini Soccer →</a>
                    </div>
                </div>

                <!-- Padel -->
                <div class="reveal bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-[#006400] transition-all"
                    style="transition-delay:.16s">
                    <div class="img-ph h-52">
                        <div class="img-ph-text">📸 FOTO LAPANGAN PADEL<br>Struktur Kaca / Full View<br>(700×420px)
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span
                                    class="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">🎾
                                    Tren Terbaru 2024</span>
                                <h3 class="font-display text-2xl font-black text-stone-900 mt-2">Lapangan Padel</h3>
                            </div>
                        </div>
                        <p class="text-stone-500 text-sm leading-relaxed mb-4">Spesialis konstruksi lapangan padel
                            standar internasional (IFF). Dari struktur rangka baja, kaca tempered, hingga lantai
                            artificial grass padel, semua <strong>all-in-one service</strong>.</p>
                        <ul class="text-sm text-stone-600 space-y-1.5 mb-5">
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Rangka
                                baja galvanis anti karat</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Kaca
                                tempered safety glass</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span>
                                Artificial grass khusus padel</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Standar
                                internasional IFF</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Bisa
                                indoor &amp; outdoor</li>
                        </ul>
                        <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20lapangan%20padel"
                            target="_blank" rel="noopener noreferrer"
                            class="block text-center bg-[#006400] text-white font-bold py-3 rounded-xl hover:bg-[#004d00] transition-colors text-sm">Tanya
                            Harga Padel →</a>
                    </div>
                </div>

                <!-- Badminton -->
                <div class="reveal bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-[#006400] transition-all"
                    style="transition-delay:.24s">
                    <div class="img-ph h-52">
                        <div class="img-ph-text">📸 FOTO LAPANGAN BADMINTON<br>Tampak Dalam / Full Court<br>(700×420px)
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span
                                    class="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">🏸
                                    Indoor Specialist</span>
                                <h3 class="font-display text-2xl font-black text-stone-900 mt-2">Lapangan Badminton</h3>
                            </div>
                        </div>
                        <p class="text-stone-500 text-sm leading-relaxed mb-4">Konstruksi lapangan badminton dengan
                            lantai <strong>interlock</strong> atau <strong>kayu keras</strong> berkualitas. Non-slip,
                            ramah sendi lutut. Pencahayaan LED anti-silau.</p>
                        <ul class="text-sm text-stone-600 space-y-1.5 mb-5">
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Lantai
                                interlock atau kayu keras</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Non-slip
                                &amp; ramah lutut</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span>
                                Pencahayaan LED anti-silau</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> Tiang
                                net &amp; net standar BWF</li>
                            <li class="flex items-center gap-2"><span class="text-[#006400] font-bold">✓</span> 1 atau
                                multi-court tersedia</li>
                        </ul>
                        <a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20lapangan%20badminton"
                            target="_blank" rel="noopener noreferrer"
                            class="block text-center bg-[#006400] text-white font-bold py-3 rounded-xl hover:bg-[#004d00] transition-colors text-sm">Tanya
                            Harga Badminton →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ PROSES ══════════════ -->
        <section class="py-20 px-6 bg-white border-y border-stone-200">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-14 reveal">
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Cara
                        Kerja</span>
                    <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-3">Proses Mudah, Anda
                        Cukup Duduk Santai</h2>
                    <p class="text-stone-500 max-w-xl mx-auto text-sm">Kami handle semua proses dari awal sampai
                        lapangan siap beroperasi. Transparansi penuh di setiap tahap.</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div
                        class="reveal text-center bg-[#f7f5f2] rounded-2xl p-6 border border-stone-200 hover:border-[#006400] transition-colors">
                        <div
                            class="w-14 h-14 bg-[#006400] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="font-display font-black text-xl">01</span>
                        </div>
                        <h3 class="font-bold text-stone-900 mb-1 text-sm">Konsultasi Gratis</h3>
                        <p class="text-xs text-stone-500 leading-relaxed">Ceritakan kebutuhan, lokasi, dan budget. Tim
                            kami respon dalam 1 jam.</p>
                    </div>
                    <div class="reveal text-center bg-[#f7f5f2] rounded-2xl p-6 border border-stone-200 hover:border-[#006400] transition-colors"
                        style="transition-delay:.08s">
                        <div
                            class="w-14 h-14 bg-[#006400] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="font-display font-black text-xl">02</span>
                        </div>
                        <h3 class="font-bold text-stone-900 mb-1 text-sm">Survey &amp; Desain</h3>
                        <p class="text-xs text-stone-500 leading-relaxed">Tim kami datang ke lokasi, ukur lahan, dan
                            buat desain lapangan sesuai kebutuhan.</p>
                    </div>
                    <div class="reveal text-center bg-[#f7f5f2] rounded-2xl p-6 border border-stone-200 hover:border-[#006400] transition-colors"
                        style="transition-delay:.16s">
                        <div
                            class="w-14 h-14 bg-[#006400] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="font-display font-black text-xl">03</span>
                        </div>
                        <h3 class="font-bold text-stone-900 mb-1 text-sm">Penawaran Harga</h3>
                        <p class="text-xs text-stone-500 leading-relaxed">RAB &amp; penawaran harga detail dikirim.
                            Transparan, tanpa biaya tersembunyi.</p>
                    </div>
                    <div class="reveal text-center bg-[#f7f5f2] rounded-2xl p-6 border border-stone-200 hover:border-[#006400] transition-colors"
                        style="transition-delay:.24s">
                        <div
                            class="w-14 h-14 bg-[#006400] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="font-display font-black text-xl">04</span>
                        </div>
                        <h3 class="font-bold text-stone-900 mb-1 text-sm">Konstruksi</h3>
                        <p class="text-xs text-stone-500 leading-relaxed">Pengerjaan oleh tim ahli, tepat waktu. Anda
                            bisa pantau progress setiap hari.</p>
                    </div>
                    <div class="reveal text-center bg-[#006400] rounded-2xl p-6 text-white"
                        style="transition-delay:.32s">
                        <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="font-display font-black text-xl">05</span>
                        </div>
                        <h3 class="font-bold mb-1 text-sm">Lapangan Siap!</h3>
                        <p class="text-xs text-green-200 leading-relaxed">Serah terima lapangan siap pakai. Pelunasan
                            setelah 100% selesai. Garansi aktif!</p>
                    </div>
                </div>

                <div
                    class="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-4 reveal">
                    <div class="text-3xl">💡</div>
                    <p class="text-sm text-stone-700 leading-relaxed">
                        <strong>Sistem Pembayaran Aman:</strong> Bayar uang muka (DP) di awal, pelunasan dilakukan
                        <strong>setelah lapangan selesai 100%</strong>. Anda tidak perlu khawatir, kami yang menanggung
                        risiko pengerjaannya.
                    </p>
                    <a href="https://wa.me/6281357570064" target="_blank" rel="noopener noreferrer"
                        class="flex-shrink-0 bg-[#006400] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#004d00] transition-colors whitespace-nowrap">
                        Mulai Sekarang →
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════════ STATISTIK ══════════════ -->
        <section class="py-16 px-6 bg-[#006400]">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                    <div class="reveal">
                        <div class="font-display font-black text-5xl mb-1" data-count="16">0</div>
                        <div class="text-green-300 text-xs font-bold uppercase tracking-widest">+ Tahun Pengalaman</div>
                    </div>
                    <div class="reveal" style="transition-delay:.1s">
                        <div class="font-display font-black text-5xl mb-1" data-count="100">0</div>
                        <div class="text-green-300 text-xs font-bold uppercase tracking-widest">+ Proyek Selesai</div>
                    </div>
                    <div class="reveal" style="transition-delay:.2s">
                        <div class="font-display font-black text-5xl mb-1" data-count="15">0</div>
                        <div class="text-green-300 text-xs font-bold uppercase tracking-widest">+ Kota di Indonesia
                        </div>
                    </div>
                    <div class="reveal" style="transition-delay:.3s">
                        <div class="font-display font-black text-5xl mb-1">24/7</div>
                        <div class="text-green-300 text-xs font-bold uppercase tracking-widest">Support &amp; Konsultasi
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ PORTOFOLIO ══════════════ -->
        <section id="portofolio" class="py-20 px-6 max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal gap-4">
                <div>
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Portofolio</span>
                    <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900">Hasil Nyata dari Proyek Kami
                    </h2>
                    <p class="text-stone-500 text-sm mt-2">Sudah dikerjakan di berbagai kota seluruh Indonesia</p>
                </div>
                <NuxtLink to="/galeri"
                    class="flex-shrink-0 border-2 border-[#006400] text-[#006400] font-bold px-6 py-2.5 rounded-xl hover:bg-green-50 transition-colors text-sm">
                    Lihat Semua Galeri →
                </NuxtLink>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all">
                    <div class="img-ph h-52 group-hover:scale-105 transition-transform duration-500">
                        <div class="img-ph-text">📸 FOTO PROYEK 1<br>Futsal Indoor, Jakarta Selatan<br>(700×420px)
                        </div>
                    </div>
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-[#006400]">⚽ Futsal</span>
                        <h4 class="font-bold text-stone-900 mt-1">Futsal Arena Jakarta Selatan</h4>
                        <p class="text-xs text-stone-500 mt-1">Lantai interlock + pencahayaan LED. Selesai dalam 21 hari
                            kerja.</p>
                    </div>
                </div>
                <div class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all"
                    style="transition-delay:.08s">
                    <img src="https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/minisoccer-img1.png"
                        alt="Mini Soccer Outdoor Surabaya"
                        class="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500 m-0 p-0 border-0" />
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-blue-600">🟢 Mini Soccer</span>
                        <h4 class="font-bold text-stone-900 mt-1">Mini Soccer Outdoor Surabaya</h4>
                        <p class="text-xs text-stone-500 mt-1">Rumput sintetis premium + tribun penonton. Kapasitas 200
                            orang.</p>
                    </div>
                </div>
                <div class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all"
                    style="transition-delay:.16s">
                    <div class="img-ph h-52 group-hover:scale-105 transition-transform duration-500">
                        <div class="img-ph-text">📸 FOTO PROYEK 3<br>Lapangan Padel, Medan<br>(700×420px)</div>
                    </div>
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-orange-600">🎾 Padel</span>
                        <h4 class="font-bold text-stone-900 mt-1">Padel Premium Medan</h4>
                        <p class="text-xs text-stone-500 mt-1">Standar internasional IFF. Kaca tempered, rangka baja
                            galvanis.</p>
                    </div>
                </div>
                <div class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all"
                    style="transition-delay:.08s">
                    <div class="img-ph h-52 group-hover:scale-105 transition-transform duration-500">
                        <div class="img-ph-text">📸 FOTO PROYEK 4<br>Badminton Indoor, Bandung<br>(700×420px)</div>
                    </div>
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-purple-600">🏸 Badminton</span>
                        <h4 class="font-bold text-stone-900 mt-1">Badminton 4 Court Bandung</h4>
                        <p class="text-xs text-stone-500 mt-1">Lantai interlock, LED anti-silau. 4 court dalam 1
                            gedung.</p>
                    </div>
                </div>
                <div class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all"
                    style="transition-delay:.16s">
                    <div class="img-ph h-52 group-hover:scale-105 transition-transform duration-500">
                        <div class="img-ph-text">📸 FOTO PROYEK 5<br>Futsal Outdoor, Makassar<br>(700×420px)</div>
                    </div>
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-[#006400]">⚽ Futsal</span>
                        <h4 class="font-bold text-stone-900 mt-1">Futsal Outdoor Makassar</h4>
                        <p class="text-xs text-stone-500 mt-1">Rumput sintetis tahan cuaca, sistem drainase anti banjir.
                        </p>
                    </div>
                </div>
                <div class="reveal rounded-2xl overflow-hidden border border-stone-200 group hover:shadow-lg transition-all"
                    style="transition-delay:.24s">
                    <div class="img-ph h-52 group-hover:scale-105 transition-transform duration-500">
                        <div class="img-ph-text">📸 FOTO PROYEK 6<br>Mini Soccer Indoor, Semarang<br>(700×420px)</div>
                    </div>
                    <div class="bg-white p-4">
                        <span class="text-xs font-bold text-blue-600">🟢 Mini Soccer</span>
                        <h4 class="font-bold text-stone-900 mt-1">Mini Soccer Indoor Semarang</h4>
                        <p class="text-xs text-stone-500 mt-1">Full roof + pencahayaan. Bisa dipakai malam hari
                            non-stop.</p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-8 reveal">
                <NuxtLink to="/galeri"
                    class="inline-block border-2 border-[#006400] text-[#006400] font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
                    Lihat 50+ Proyek Lainnya →
                </NuxtLink>
            </div>
        </section>

        <!-- ══════════════ KEUNGGULAN ══════════════ -->
        <section class="py-20 px-6 bg-white border-y border-stone-200">
            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-2 gap-14 items-center">
                    <div class="reveal">
                        <span
                            class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Kenapa
                            Pilih Kami?</span>
                        <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-8">Dipercaya Ratusan
                            Pemilik<br>Bisnis Lapangan di Indonesia</h2>
                        <div class="space-y-4">
                            <div
                                class="flex gap-4 items-start p-4 border border-stone-100 rounded-xl hover:border-[#006400] hover:bg-green-50/50 transition-all">
                                <div
                                    class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    🏗</div>
                                <div>
                                    <h4 class="font-bold text-stone-900 mb-1">Dari Nol Sampai Jadi, Anda Santai Saja
                                    </h4>
                                    <p class="text-sm text-stone-500 leading-relaxed">Survey, desain, perizinan,
                                        konstruksi, finishing - Semua kami urus. Anda tidak perlu pusing koordinasi
                                        banyak kontraktor.</p>
                                </div>
                            </div>
                            <div
                                class="flex gap-4 items-start p-4 border border-stone-100 rounded-xl hover:border-[#006400] hover:bg-green-50/50 transition-all">
                                <div
                                    class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    🛡</div>
                                <div>
                                    <h4 class="font-bold text-stone-900 mb-1">Garansi Konstruksi &amp; Material Resmi
                                    </h4>
                                    <p class="text-sm text-stone-500 leading-relaxed">Setiap proyek dilindungi garansi
                                        resmi. Jika ada masalah setelah selesai, tim kami langsung turun tangan - tanpa
                                        biaya tambahan.</p>
                                </div>
                            </div>
                            <div
                                class="flex gap-4 items-start p-4 border border-stone-100 rounded-xl hover:border-[#006400] hover:bg-green-50/50 transition-all">
                                <div
                                    class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    💰</div>
                                <div>
                                    <h4 class="font-bold text-stone-900 mb-1">Harga Transparan, Sesuai Budget Anda</h4>
                                    <p class="text-sm text-stone-500 leading-relaxed">RAB detail dikirim sebelum mulai.
                                        Material bisa disesuaikan budget - interlock atau rumput sintetis, indoor atau
                                        outdoor.</p>
                                </div>
                            </div>
                            <div
                                class="flex gap-4 items-start p-4 border border-stone-100 rounded-xl hover:border-[#006400] hover:bg-green-50/50 transition-all">
                                <div
                                    class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    ⚡</div>
                                <div>
                                    <h4 class="font-bold text-stone-900 mb-1">Pengerjaan Cepat &amp; Tepat Waktu</h4>
                                    <p class="text-sm text-stone-500 leading-relaxed">Jadwal pengerjaan tertulis di
                                        kontrak. Kami komitmen selesai tepat waktu - keterlambatan adalah tanggung jawab
                                        kami.</p>
                                </div>
                            </div>
                            <div
                                class="flex gap-4 items-start p-4 border border-stone-100 rounded-xl hover:border-[#006400] hover:bg-green-50/50 transition-all">
                                <div
                                    class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                    🗺</div>
                                <div>
                                    <h4 class="font-bold text-stone-900 mb-1">Melayani Seluruh Indonesia</h4>
                                    <p class="text-sm text-stone-500 leading-relaxed">Tim kami siap bergerak ke mana pun
                                        Anda butuhkan - Jawa, Sumatera, Kalimantan, Sulawesi, dan seluruh wilayah
                                        Indonesia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="reveal space-y-5">
                        <div class="img-ph rounded-2xl w-full aspect-[4/3] border border-stone-200">
                            <div class="img-ph-text">📸 FOTO TIM / WORKSHOP<br>Tim Sedang Bekerja / Foto
                                Kantor<br>(600×450px)</div>
                        </div>
                        <div class="bg-[#f7f5f2] border border-stone-200 rounded-2xl p-5">
                            <p class="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Cakupan Wilayah
                                Layanan</p>
                            <div class="grid grid-cols-2 gap-2">
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Jabodetabek</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Jawa Tengah & Jawa Timur</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Seluruh wilayah Sumatera</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Seluruh wilayah Kalimantan</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Seluruh wilayah Sulawesi</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Bali & Nusa Tenggara (NTB & NTT)</div>
                                <div class="text-sm font-semibold text-stone-700 flex items-center gap-2"><span
                                        class="text-[#006400]">✓</span> Maluku & Papua</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ TESTIMONI ══════════════ -->
        <section class="py-20 px-6 max-w-6xl mx-auto">
            <div class="text-center mb-14 reveal">
                <span
                    class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Testimoni
                    Klien</span>
                <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-2">Apa Kata Klien Kami?</h2>
                <p class="text-stone-500 text-sm">Kepercayaan klien adalah prioritas utama kami</p>
                <div class="flex items-center justify-center gap-1 mt-3">
                    <span class="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    <span class="font-bold text-stone-800 ml-2">5.0</span>
                    <span class="text-stone-400 text-sm ml-1">dari 100+ ulasan</span>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="reveal bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div class="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                    <p class="text-stone-700 text-sm leading-relaxed mb-5 italic">"Awalnya ragu karena project dari nol,
                        tapi GreenDeahan handle semuanya dengan profesional. Lapangan futsal saya sudah balik modal
                        dalam 8 bulan."</p>
                    <div class="flex items-center gap-3 pt-4 border-t border-stone-100">
                        <div class="img-ph w-11 h-11 rounded-full flex-shrink-0">
                            <div class="img-ph-text"
                                style="font-size:.55rem;padding:.2rem;border:none;background:none;">📸</div>
                        </div>
                        <div>
                            <div class="font-bold text-stone-900 text-sm">Budi Santoso</div>
                            <div class="text-xs text-stone-400">Owner Futsal, Jakarta Selatan</div>
                        </div>
                    </div>
                </div>
                <div class="reveal bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                    style="transition-delay:.1s">
                    <div class="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                    <p class="text-stone-700 text-sm leading-relaxed mb-5 italic">"Tim yang sangat responsif! Konsultasi
                        gratisnya detail banget, bantu pilih material sesuai budget. Lapangan mini soccer saya jadi yang
                        paling ramai di daerah. Recommended 100%!"</p>
                    <div class="flex items-center gap-3 pt-4 border-t border-stone-100">
                        <div class="img-ph w-11 h-11 rounded-full flex-shrink-0">
                            <div class="img-ph-text"
                                style="font-size:.55rem;padding:.2rem;border:none;background:none;">📸</div>
                        </div>
                        <div>
                            <div class="font-bold text-stone-900 text-sm">Ahmad Wijaya</div>
                            <div class="text-xs text-stone-400">Pengusaha, Surabaya</div>
                        </div>
                    </div>
                </div>
                <div class="reveal bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                    style="transition-delay:.2s">
                    <div class="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                    <p class="text-stone-700 text-sm leading-relaxed mb-5 italic">"Proyek lapangan padel pertama di kota
                        kami dikerjakan GreenDeahan. Dari desain sampai konstruksi standar internasional. Garansi dan
                        after sales service-nya juga top!"</p>
                    <div class="flex items-center gap-3 pt-4 border-t border-stone-100">
                        <div class="img-ph w-11 h-11 rounded-full flex-shrink-0">
                            <div class="img-ph-text"
                                style="font-size:.55rem;padding:.2rem;border:none;background:none;">📸</div>
                        </div>
                        <div>
                            <div class="font-bold text-stone-900 text-sm">Ricky Pratama</div>
                            <div class="text-xs text-stone-400">Investor, Medan</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ FAQ ══════════════ -->
        <section class="py-20 px-6 bg-white border-y border-stone-200">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12 reveal">
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">FAQ</span>
                    <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-2">Pertanyaan yang Sering
                        Ditanyakan</h2>
                    <p class="text-stone-500 text-sm">
                        Tidak menemukan jawaban yang Anda cari?
                        <a href="https://wa.me/6281357570064" class="text-[#006400] font-semibold underline">Tanya
                            langsung via WhatsApp.</a>
                    </p>
                </div>

                <div class="space-y-3 reveal">
                    <div v-for="(faq, i) in faqs" :key="i"
                        class="bg-[#f7f5f2] border border-stone-200 rounded-xl overflow-hidden">
                        <button
                            class="w-full text-left p-5 font-semibold text-stone-900 flex justify-between items-center text-sm"
                            @click="toggleFaq(i)">
                            {{ faq.q }}
                            <span class="text-[#006400] text-lg font-black transition-transform flex-shrink-0 ml-4">
                                {{ openFaq === i ? '−' : '+' }}
                            </span>
                        </button>
                        <div
                            :class="['faq-answer px-5 text-sm text-stone-600 leading-relaxed', openFaq === i && 'open']">
                            <!-- eslint-disable-next-line vue/no-v-html -->
                            <div class="pb-5" v-html="faq.a" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ TENTANG ══════════════ -->
        <section class="py-20 px-6 max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-14 items-center">
                <div class="reveal">
                    <img src="https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/hero-img2.png"
                        alt="Kantor dan Workshop Green Deahan Sport"
                        class="rounded-2xl w-full aspect-[4/3] object-cover border border-stone-200" />
                </div>
                <div class="reveal">
                    <span
                        class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">Green
                        Deahan Sport</span>
                    <h2 class="font-display text-3xl md:text-4xl font-black text-stone-900 mb-4">
                        Spesialis Lapangan Olahraga Sejak 2010</h2>
                    <p class="text-stone-600 text-sm leading-relaxed mb-4">Green Deahan adalah jasa pembuatan lapangan
                        olahraga profesional yang melayani seluruh Indonesia sejak tahun 2010. Dengan pengalaman lebih
                        dari <strong>16 tahun</strong>, kami spesialis dalam konstruksi lapangan futsal, mini soccer,
                        padel, dan badminton.</p>
                    <p class="text-stone-600 text-sm leading-relaxed mb-6">Kami menawarkan layanan
                        <strong>turnkey</strong> dari konsultasi awal, desain, perizinan, konstruksi, hingga lapangan
                        siap beroperasi. Anda cukup duduk dan pantau progress, kami yang kerjakan semuanya.
                    </p>
                    <div class="flex flex-wrap gap-4 mb-6">
                        <div class="text-center bg-[#f7f5f2] border border-stone-200 rounded-xl px-5 py-3">
                            <div class="font-display font-black text-3xl text-[#006400]">16+</div>
                            <div class="text-xs text-stone-500 font-semibold">Tahun Pengalaman</div>
                        </div>
                        <div class="text-center bg-[#f7f5f2] border border-stone-200 rounded-xl px-5 py-3">
                            <div class="font-display font-black text-3xl text-[#006400]">100+</div>
                            <div class="text-xs text-stone-500 font-semibold">Proyek Selesai</div>
                        </div>
                        <div class="text-center bg-[#f7f5f2] border border-stone-200 rounded-xl px-5 py-3">
                            <div class="font-display font-black text-3xl text-[#006400]">15+</div>
                            <div class="text-xs text-stone-500 font-semibold">Kota di Indonesia</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════ CTA FINAL ══════════════ -->
        <section class="py-20 px-6 bg-[#006400]">
            <div class="max-w-3xl mx-auto text-center">
                <span
                    class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide">🎯
                    Siap Mulai Proyek Anda?</span>
                <h2 class="font-display text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                    Wujudkan Lapangan<br>Impian Anda Sekarang!
                </h2>
                <p class="text-green-200 text-base leading-relaxed mb-3 max-w-xl mx-auto">
                    Konsultasi <strong class="text-white">GRATIS</strong>, survey lokasi, desain profesional, konstruksi
                    berkualitas. Garansi resmi &amp; pelunasan setelah lapangan 100% selesai.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <a href="https://wa.me/6281357570064?text=Halo%20GreenDeahan,%20saya%20ingin%20konsultasi%20pembuatan%20lapangan"
                        target="_blank" rel="noopener noreferrer"
                        class="bg-white text-[#006400] font-black px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-sm flex items-center justify-center gap-2 shadow-xl">
                        💬 Chat WhatsApp Sekarang
                    </a>
                    <a href="tel:+6281357570064"
                        class="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2">
                        📞 +62 813-5757-0064
                    </a>
                </div>
                <p class="text-green-400 text-xs mt-5">*Konsultasi 100% gratis, tidak ada kewajiban apapun</p>
            </div>
        </section>

    </div>
</template>
