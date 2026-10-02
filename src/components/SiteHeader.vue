<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import Wordmark from './Wordmark.vue'
import { navLinks } from '../data/slides.js'

defineProps({ accent: { type: String, default: '#2cc84a' } })

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-open': open }" :style="{ '--accent': accent }">
    <div class="header__inner">
      <a href="#home" class="header__logo" aria-label="CARBO247 home" @click="open = false">
        <Wordmark />
      </a>

      <nav class="header__nav" aria-label="Main">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="open = false">{{ link.label }}</a>
      </nav>

      <button
        class="header__toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <X v-if="open" :size="28" />
        <Menu v-else :size="28" />
      </button>
    </div>

    <nav id="mobile-nav" class="header__mobile" aria-label="Mobile" :hidden="!open">
      <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="open = false">{{ link.label }}</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  transition: background-color 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease;
}
.header.is-scrolled,
.header.is-open {
  background: rgba(4, 16, 20, 0.45);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1720px;
  margin: 0 auto;
  padding: 1.6rem var(--gutter);
  transition: padding 0.35s ease;
}
.is-scrolled .header__inner {
  padding-block: 0.9rem;
}
.header__logo {
  font-size: clamp(1.6rem, 2.4vw, 2.6rem);
  text-decoration: none;
  flex-shrink: 0;
}
.header__nav {
  display: flex;
  gap: clamp(1.5rem, 2.8vw, 3.2rem);
  margin-left: auto;
}
.header__nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 400;
  position: relative;
  padding-block: 0.35rem;
}
.header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.header__nav a:hover::after,
.header__nav a:focus-visible::after {
  transform: scaleX(1);
}
.header__toggle {
  display: none;
  margin-left: auto;
  background: none;
  border: 0;
  color: #fff;
  padding: 0.25rem;
  cursor: pointer;
}
.header__mobile {
  display: flex;
  flex-direction: column;
  padding: 0.5rem var(--gutter) 1.5rem;
}
.header__mobile[hidden] {
  display: none;
}
.header__mobile a {
  color: #fff;
  text-decoration: none;
  font-size: 1.15rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 1100px) {
  .header__nav {
    display: none;
  }
  .header__toggle {
    display: inline-flex;
  }
}
@media (min-width: 1101px) {
  .header__mobile {
    display: none !important;
  }
}
</style>
