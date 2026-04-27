<template>
  <div>
    <SiteNav />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<style>
:root {
  --green: #006400;
  --green-dark: #004d00;
  --green-light: #e8f5e9;
}

body {
  font-family: 'Inter', sans-serif;
  background: #f7f5f2;
  color: #1a1a1a;
}

.font-display {
  font-family: 'DM Mono', monospace;
}

.img-ph {
  background: #d4e6d4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.img-ph::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(45deg, rgba(0, 100, 0, .04) 0px, rgba(0, 100, 0, .04) 1px, transparent 1px, transparent 12px);
}

.img-ph-text {
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #006400;
  line-height: 1.5;
  border: 2px dashed rgba(0, 100, 0, .35);
  padding: .75rem 1.2rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, .6);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .65s ease, transform .65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.ticker-wrap {
  overflow: hidden;
}

.ticker-inner {
  display: flex;
  gap: 3.5rem;
  animation: ticker 28s linear infinite;
  white-space: nowrap;
}

@keyframes ticker {
  0% {
    transform: translateX(0)
  }

  100% {
    transform: translateX(-50%)
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease, padding .3s ease;
}

.faq-answer.open {
  max-height: 300px;
}

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

/* gallery grid */
.gal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  gap: 14px;
}

@media (max-width: 768px) {
  .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
  .tall { grid-row: span 1; }
}

@media (max-width: 480px) {
  .gal-grid { grid-template-columns: 1fr; grid-auto-rows: 200px; }
}

.gal-item {
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: transform .25s, box-shadow .25s, border-color .25s;
  background: #d4e6d4;
}

.gal-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(0, 0, 0, .13);
  border-color: #006400;
}

.gal-item .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 100, 0, .75);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .25s;
  flex-direction: column;
  gap: .5rem;
}

.gal-item:hover .overlay { opacity: 1; }
.tall { grid-row: span 2; }
</style>
