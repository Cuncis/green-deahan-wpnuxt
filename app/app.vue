<template>
  <div>
    <SiteNav />
    <NuxtPage />
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
</style>
