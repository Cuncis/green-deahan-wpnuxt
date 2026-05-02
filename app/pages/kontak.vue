<script setup lang="ts">
useHead({ title: 'Kontak Kami | Green Deahan Sport' })

const name = ref('')
const lapanganType = ref('')
const city = ref('')
const budget = ref('')
const message = ref('')
const interests = ref<string[]>([])
const loading = ref(false)
const submitted = ref(false)
const error = ref('')

const interestOptions = [
    { value: 'konsultasi', label: 'Konsultasi Gratis' },
    { value: 'survey', label: 'Survey Lokasi' },
    { value: 'rab', label: 'Estimasi RAB' },
    { value: 'renovasi', label: 'Renovasi Lapangan' },
    { value: 'perawatan', label: 'Perawatan Berkala' },
]

const faqs = [
    { q: 'Apakah konsultasi benar-benar gratis?', a: 'Ya, 100% gratis tanpa syarat. Kami tidak memungut biaya apapun untuk konsultasi, survey lokasi, maupun pembuatan RAB estimasi.' },
    { q: 'Berapa lama proses dari konsultasi sampai mulai?', a: 'Setelah konsultasi awal, biasanya 3–7 hari untuk survey dan desain, lalu 3–5 hari untuk penawaran harga. Setelah deal, konstruksi bisa dimulai dalam 1–2 minggu.' },
    { q: 'Apakah bisa minta contoh portofolio dulu?', a: 'Tentu! Kunjungi halaman Galeri kami atau minta tim kami kirim foto dan video proyek yang sesuai kebutuhan Anda via WhatsApp.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }

async function handleSubmit() {
    error.value = ''
    if (!name.value.trim()) { error.value = 'Nama lengkap wajib diisi.'; return }
    if (!lapanganType.value) { error.value = 'Pilih jenis lapangan yang diminati.'; return }
    if (!city.value.trim()) { error.value = 'Kota / lokasi proyek wajib diisi.'; return }

    loading.value = true
    try {
        const interestList = interests.value.length ? interests.value.join(', ') : 'Belum ditentukan'
        const waText = encodeURIComponent(
            `Halo kak, saya ingin tanya-tanya soal pembuatan lapangan 🙏\n\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `👤 *INFORMASI PEMESAN*\n` +
            `Nama Saya  : ${name.value}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `🏟️ *DETAIL LAPANGAN*\n` +
            `Jenis Lapangan : ${lapanganType.value}\n` +
            `Kota / Lokasi  : ${city.value}\n` +
            `Estimasi Budget: ${budget.value || 'Belum tahu, minta estimasi'}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `✅ *SAYA BUTUH BANTUAN*\n` +
            `${interestList}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `💬 *KETERANGAN TAMBAHAN*\n` +
            `${message.value || 'Tidak ada keterangan tambahan'}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `Mohon info lebih lanjutnya ya kak, terima kasih! 😊`
        )
        // Open WhatsApp after short delay for UX
        await new Promise(resolve => setTimeout(resolve, 400))
        submitted.value = true
        setTimeout(() => {
            window.open(`https://wa.me/6281357570064?text=${waText}`, '_blank', 'noopener,noreferrer')
        }, 600)
    } finally {
        loading.value = false
    }
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
            <div class="text-center max-w-2xl mx-auto">
                <span
                    class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide">
                    <span
                        class="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5 align-middle animate-pulse"></span>
                    Tim Kami Online, Respon dalam 1 Jam
                </span>
                <h1 class="font-display font-black text-4xl md:text-5xl text-stone-900 leading-tight mb-4">
                    Hubungi <span class="text-[#006400]">Green Deahan</span><br>Kami Siap Membantu!
                </h1>
                <p class="text-stone-500 text-base leading-relaxed">
                    Punya pertanyaan soal lapangan? Ingin estimasi biaya? Atau siap mulai proyek? Pilih cara yang paling
                    nyaman untuk Anda.
                </p>
            </div>
        </div>
    </section>

    <!-- Quick contact cards -->
    <section class="px-6 max-w-6xl mx-auto mb-14">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- WhatsApp -->
            <a href="https://wa.me/6281357570064?text=Halo%20GreenDeahan,%20saya%20ingin%20konsultasi%20lapangan"
                target="_blank" rel="noopener noreferrer"
                class="social-card bg-white border-2 border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#25d366] reveal group">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[#25d366]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                        <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.855L0 24l6.335-1.508A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.594-.48-5.112-1.32l-.366-.213-3.762.895.952-3.648-.239-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                </div>
                <div
                    class="font-display font-black text-sm text-stone-900 mb-1 group-hover:text-[#25d366] transition-colors">
                    WhatsApp</div>
                <div class="font-bold text-[#006400] text-sm mb-1">+62 813-5757-0064</div>
                <div
                    class="mt-3 text-xs font-bold text-white bg-[#25d366] px-4 py-1.5 rounded-full w-full text-center group-hover:bg-[#1fbc5a] transition-colors">
                    Chat Sekarang →
                </div>
            </a>

            <!-- Telepon -->
            <a href="tel:+6281357570064"
                class="social-card bg-white border-2 border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#006400] reveal group">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-[#006400]">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path
                            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                </div>
                <div
                    class="font-display font-black text-sm text-stone-900 mb-1 group-hover:text-[#006400] transition-colors">
                    Telepon</div>
                <div class="font-bold text-[#006400] text-sm mb-1">+62 813-5757-0064</div>
                <div
                    class="mt-3 text-xs font-bold text-white bg-[#006400] px-4 py-1.5 rounded-full w-full text-center group-hover:bg-[#004d00] transition-colors">
                    Hubungi →
                </div>
            </a>

            <!-- Email -->
            <a href="mailto:rumput1927@gmail.com"
                class="social-card bg-white border-2 border-stone-200 rounded-2xl p-5 flex flex-col items-center text-center hover:border-red-400 reveal group">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-red-500">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path
                            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </div>
                <div
                    class="font-display font-black text-sm text-stone-900 mb-1 group-hover:text-red-500 transition-colors">
                    Email</div>
                <div class="font-bold text-[#006400] text-xs mb-1 break-all">rumput1927@gmail.com</div>
                <div
                    class="mt-3 text-xs font-bold text-white bg-red-500 px-4 py-1.5 rounded-full w-full text-center group-hover:bg-red-600 transition-colors">
                    Kirim Email →
                </div>
            </a>

            <!-- Jam operasional -->
            <div
                class="social-card bg-[#006400] border-2 border-[#006400] rounded-2xl p-5 flex flex-col items-center text-center reveal">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/20">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path
                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 10.8V7h-1.4v6.4l5 3 .7-1.2-4.3-2.4z" />
                    </svg>
                </div>
                <div class="font-display font-black text-sm text-white mb-3">Jam Operasional</div>
                <div class="space-y-1.5 w-full text-xs">
                    <div class="flex justify-between text-green-200"><span>Senin – Jumat</span><span
                            class="font-bold text-white">06.00 – 23.00</span></div>
                    <div class="flex justify-between text-green-200"><span>Sabtu</span><span
                            class="font-bold text-white">06.00 – 23.00</span></div>
                    <div class="flex justify-between text-green-200"><span>Minggu</span><span
                            class="font-bold text-yellow-300">Konsultasi Online</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Form + Info -->
    <section class="px-6 max-w-6xl mx-auto mb-16">
        <div class="grid lg:grid-cols-5 gap-8">

            <!-- Contact Form -->
            <div class="lg:col-span-3 reveal">
                <div class="bg-white border border-stone-200 rounded-2xl p-8">
                    <div class="mb-6">
                        <span
                            class="inline-block bg-green-100 text-[#006400] text-xs font-bold px-3 py-1.5 rounded-full mb-3 tracking-wide">📋
                            Formulir Kontak</span>
                        <h2 class="font-display font-black text-2xl text-stone-900">Kirim Pesan ke Kami</h2>
                    </div>

                    <!-- Success state -->
                    <div v-if="submitted" class="text-center py-8">
                        <div class="text-5xl mb-4">✅</div>
                        <h3 class="font-display font-black text-xl text-stone-900 mb-2">Pesan Terkirim!</h3>
                        <p class="text-stone-500 text-sm mb-6">Jendela WhatsApp akan segera terbuka. Tim kami siap
                            menghubungi Anda.</p>
                        <button @click="submitted = false"
                            class="bg-[#006400] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#004d00] transition-colors text-sm">
                            Kirim Pesan Lagi
                        </button>
                    </div>

                    <form v-else @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-1.5"
                                    for="f-name">Nama Lengkap *</label>
                                <input id="f-name" v-model="name" type="text" placeholder="Masukkan nama Anda"
                                    class="form-input w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm bg-[#f7f5f2] placeholder-stone-400" />
                            </div>
                            <div>
                                <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-1.5"
                                    for="f-type">Jenis Lapangan yang Diminati *</label>
                                <select id="f-type" v-model="lapanganType"
                                    class="form-input w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm bg-[#f7f5f2] text-stone-700">
                                    <option value="">-- Pilih jenis lapangan --</option>
                                    <option value="Lapangan Futsal">⚽ Lapangan Futsal</option>
                                    <option value="Mini Soccer">🟢 Mini Soccer</option>
                                    <option value="Lapangan Padel">🎾 Lapangan Padel</option>
                                    <option value="Lapangan Badminton">🏸 Lapangan Badminton</option>
                                    <option value="Lebih dari 1 jenis">🏟 Lainnya / Lebih dari 1 jenis</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-1.5"
                                    for="f-city">Kota / Lokasi Proyek *</label>
                                <input id="f-city" v-model="city" type="text" placeholder="Contoh: Jakarta Selatan"
                                    class="form-input w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm bg-[#f7f5f2] placeholder-stone-400" />
                            </div>
                            <div>
                                <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-1.5"
                                    for="f-budget">Estimasi Budget</label>
                                <select id="f-budget" v-model="budget"
                                    class="form-input w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm bg-[#f7f5f2] text-stone-700">
                                    <option value="">-- Pilih range budget --</option>
                                    <option value="Di bawah Rp 200 juta">Di bawah Rp 200 juta</option>
                                    <option value="Rp 200 – 500 juta">Rp 200 – 500 juta</option>
                                    <option value="Rp 500 juta – 1 miliar">Rp 500 juta – 1 miliar</option>
                                    <option value="Di atas Rp 1 miliar">Di atas Rp 1 miliar</option>
                                    <option value="Belum tahu, minta estimasi">Belum tahu, minta estimasi</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-1.5"
                                for="f-msg">Pesan / Detail Kebutuhan</label>
                            <textarea id="f-msg" v-model="message" rows="4"
                                placeholder="Ceritakan kebutuhan Anda: ukuran lahan, jumlah lapangan, fasilitas yang diinginkan, target waktu selesai, dll."
                                class="form-input w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm bg-[#f7f5f2] placeholder-stone-400 resize-none"></textarea>
                        </div>

                        <!-- Interests -->
                        <div>
                            <label class="text-xs font-bold text-stone-600 uppercase tracking-wide block mb-2">Saya
                                tertarik untuk: (boleh pilih lebih dari satu)</label>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="opt in interestOptions" :key="opt.value"
                                    class="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-[#f7f5f2] border border-stone-200 px-3 py-2 rounded-lg cursor-pointer hover:border-[#006400] transition-colors">
                                    <input v-model="interests" type="checkbox" :value="opt.value"
                                        class="accent-[#006400]" />
                                    {{ opt.label }}
                                </label>
                            </div>
                        </div>

                        <small v-if="error" class="block text-red-500 font-semibold text-xs">{{ error }}</small>

                        <button type="submit" :aria-busy="loading"
                            class="w-full bg-[#006400] text-white font-bold py-4 rounded-xl hover:bg-[#004d00] transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 disabled:opacity-70"
                            :disabled="loading">
                            <svg v-if="!loading" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2.5">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            {{ loading ? 'Mengirim...' : 'Kirim Pesan Sekarang' }}
                        </button>
                    </form>
                </div>
            </div>

            <!-- Sidebar Info -->
            <div class="lg:col-span-2 space-y-5 reveal">
                <!-- Contact info -->
                <div class="bg-white border border-stone-200 rounded-2xl p-6">
                    <h3 class="font-display font-black text-base text-stone-900 mb-5 pb-3 border-b border-stone-100">📍
                        Informasi Kontak</h3>
                    <div class="space-y-4">
                        <div class="flex gap-3.5">
                            <div
                                class="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                                📞</div>
                            <div>
                                <p class="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">Telepon /
                                    WhatsApp</p>
                                <a href="tel:+6281357570064"
                                    class="font-bold text-stone-900 text-sm hover:text-[#006400] transition-colors">+62
                                    813-5757-0064</a>
                            </div>
                        </div>
                        <div class="flex gap-3.5">
                            <div
                                class="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                                ✉️</div>
                            <div>
                                <p class="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">Email</p>
                                <a href="mailto:rumput1927@gmail.com"
                                    class="font-bold text-stone-900 text-sm hover:text-[#006400] transition-colors break-all">rumput1927@gmail.com</a>
                            </div>
                        </div>
                        <div class="flex gap-3.5">
                            <div
                                class="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                                🕐</div>
                            <div>
                                <p class="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">Jam Kerja</p>
                                <p class="font-semibold text-stone-900 text-sm">Senin - Sabtu: 06.00 - 23.00 WIB</p>
                            </div>
                        </div>
                        <div class="flex gap-3.5">
                            <div
                                class="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                                🗺</div>
                            <div>
                                <p class="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">Area Layanan
                                </p>
                                <p class="font-semibold text-stone-900 text-sm">Seluruh Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick FAQ -->
                <div class="bg-white border border-stone-200 rounded-2xl p-6">
                    <h3 class="font-display font-black text-base text-stone-900 mb-4 pb-3 border-b border-stone-100">❓
                        Pertanyaan Cepat</h3>
                    <div class="space-y-2">
                        <div v-for="(faq, i) in faqs" :key="i"
                            class="border border-stone-100 rounded-xl overflow-hidden">
                            <button @click="toggleFaq(i)"
                                class="w-full text-left px-4 py-3 text-xs font-bold text-stone-800 flex justify-between items-center">
                                {{ faq.q }}
                                <span class="text-[#006400] font-black text-base leading-none">{{ openFaq === i ? '−' :
                                    '+' }}</span>
                            </button>
                            <div
                                :class="['faq-answer px-4 text-xs text-stone-500 leading-relaxed', openFaq === i ? 'open' : '']">
                                <div class="pb-3">{{ faq.a }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.form-input:focus {
    outline: none;
    border-color: #006400;
    box-shadow: 0 0 0 3px rgba(0, 100, 0, .1);
}

.form-input {
    transition: border-color .2s, box-shadow .2s;
}

.social-card {
    transition: transform .22s, box-shadow .22s, border-color .22s;
}

.social-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, .12);
}
</style>
