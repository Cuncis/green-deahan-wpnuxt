<template>
    <footer class="bg-stone-900 text-stone-400 pt-14 pb-8 px-6">
        <div class="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <!-- Brand -->
            <div class="md:col-span-2">
                <div class="flex items-center gap-2.5 mb-4">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center bg-white p-0.5">
                        <img src="https://gdlogin.greendeahan.com/wp-content/uploads/2026/04/GD-logo-1.png"
                            alt="Green Deahan Sport Logo" class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <div class="font-display font-black text-white text-base leading-none">Green Deahan Sport</div>
                        <div
                            class="text-[10px] font-semibold text-stone-500 tracking-widest uppercase leading-none mt-0.5">
                            Sejak 2010</div>
                    </div>
                </div>
                <p class="text-sm text-stone-500 leading-relaxed max-w-xs mb-5">
                    Jasa pembuatan lapangan futsal, mini soccer, padel, dan badminton profesional sejak 2010. Melayani
                    seluruh Indonesia.
                </p>
                <div class="text-sm space-y-2">
                    <p>📞 <a href="tel:+6281357570064" class="hover:text-white transition-colors">+62 813-5757-0064</a>
                    </p>
                    <p>✉️ <a href="mailto:rumput1927@gmail.com"
                            class="hover:text-white transition-colors">rumput1927@gmail.com</a></p>
                    <p>🕐 Senin – Sabtu, 06.00 – 23.00 WIB</p>
                </div>
            </div>

            <!-- Layanan -->
            <div>
                <h4 class="text-white font-bold text-sm mb-4 uppercase tracking-widest">Layanan</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20futsal"
                            target="_blank" rel="noopener noreferrer"
                            class="hover:text-white transition-colors">Lapangan Futsal</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20mini%20soccer"
                            target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Mini
                            Soccer</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20padel"
                            target="_blank" rel="noopener noreferrer"
                            class="hover:text-white transition-colors">Lapangan Padel</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20lapangan%20badminton"
                            target="_blank" rel="noopener noreferrer"
                            class="hover:text-white transition-colors">Lapangan Badminton</a></li>
                    <li><a href="https://wa.me/6281357570064?text=Halo,%20saya%20ingin%20konsultasi%20maintenance%20lapangan"
                            target="_blank" rel="noopener noreferrer"
                            class="hover:text-white transition-colors">Maintenance & Servis</a></li>
                </ul>
            </div>

            <!-- Halaman -->
            <div>
                <h4 class="text-white font-bold text-sm mb-4 uppercase tracking-widest">Halaman</h4>
                <ul class="space-y-2 text-sm">
                    <li>
                        <NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/galeri" class="hover:text-white transition-colors">Galeri Proyek</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog" class="hover:text-white transition-colors">Blog & Tips</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/kontak" class="hover:text-white transition-colors">Kontak Kami</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="max-w-6xl mx-auto pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div class="text-center sm:text-left">
                &copy; {{ new Date().getFullYear() }} <strong class="text-stone-300 font-semibold">Green Deahan
                    Sport</strong>. All rights reserved.<br>
                Jasa Pembuatan Lapangan Futsal, Mini Soccer, Padel &amp; Badminton Se-Indonesia
            </div>
            <div class="flex items-center gap-3">
                <!-- Instagram -->
                <a href="https://www.instagram.com/green_deahan1927" target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram"
                    class="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-pink-600 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-stone-300">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <!-- Facebook -->
                <a href="https://www.facebook.com/greendeahan/" target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook"
                    class="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-[#1877f2] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-stone-300">
                        <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>
                <!-- TikTok -->
                <a href="https://www.tiktok.com/@green_deahan" target="_blank" rel="noopener noreferrer"
                    aria-label="TikTok"
                    class="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-stone-600 transition-colors">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" class="text-stone-300">
                        <path
                            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
                    </svg>
                </a>
                <!-- X / Twitter -->
                <a href="https://x.com/greendeahan1927" target="_blank" rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    class="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-stone-600 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-stone-300">
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                </a>
                <!-- YouTube -->
                <a href="https://www.youtube.com/@green_deahan" target="_blank" rel="noopener noreferrer"
                    aria-label="YouTube"
                    class="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-red-600 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-stone-300">
                        <path
                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>
