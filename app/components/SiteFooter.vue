<template>
    <footer class="bg-stone-900 text-stone-400 pt-14 pb-8 px-6">
        <div class="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <!-- Brand -->
            <div class="md:col-span-2">
                <div class="flex items-center gap-2.5 mb-4">
                    <div class="w-9 h-9 bg-[#006400] rounded-lg flex items-center justify-center">
                        <span class="text-white font-display font-black text-sm">GD</span>
                    </div>
                    <div>
                        <div class="font-display font-black text-white text-base leading-none">Green Deahan Sport</div>
                        <div class="text-[10px] font-semibold text-stone-500 tracking-widest uppercase leading-none mt-0.5">Sejak 2010</div>
                    </div>
                </div>
                <p class="text-sm text-stone-500 leading-relaxed max-w-xs mb-5">
                    Jasa pembuatan lapangan futsal, mini soccer, padel, dan badminton profesional sejak 2010. Melayani seluruh Indonesia.
                </p>
                <div class="text-sm space-y-2">
                    <p>📞 <a href="tel:+6281357570064" class="hover:text-white transition-colors">+62 813-5757-0064</a></p>
                    <p>✉️ <a href="mailto:rumput1927@gmail.com" class="hover:text-white transition-colors">rumput1927@gmail.com</a></p>
                    <p>🕐 Senin – Sabtu, 06.00 – 23.00 WIB</p>
                </div>
            </div>

            <!-- Layanan -->
            <div>
                <h4 class="text-white font-bold text-sm mb-4 uppercase tracking-widest">Layanan</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20futsal" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Lapangan Futsal</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20mini%20soccer" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Mini Soccer</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20padel" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Lapangan Padel</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20badminton" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Lapangan Badminton</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20maintenance%20lapangan" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Maintenance & Servis</a></li>
                </ul>
            </div>

            <!-- Halaman -->
            <div>
                <h4 class="text-white font-bold text-sm mb-4 uppercase tracking-widest">Halaman</h4>
                <ul class="space-y-2 text-sm">
                    <li><NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink></li>
                    <li><NuxtLink to="/galeri" class="hover:text-white transition-colors">Galeri Proyek</NuxtLink></li>
                    <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog & Tips</NuxtLink></li>
                    <li><NuxtLink to="/kontak" class="hover:text-white transition-colors">Kontak Kami</NuxtLink></li>
                </ul>
            </div>
        </div>

        <div class="max-w-6xl mx-auto pt-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-600">
            <p>© {{ new Date().getFullYear() }} GreenDeahan.com — Jasa Pembuatan Lapangan Futsal, Mini Soccer, Padel & Badminton Se-Indonesia</p>
            <p>Dibuat dengan ❤️ untuk Indonesia</p>
        </div>
    </footer>
</template>
