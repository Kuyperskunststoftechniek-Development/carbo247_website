<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SlideSection from './components/SlideSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { slides } from './data/slides.js'

// The header logo picks up the accent colour of the section in view.
const activeAccent = ref(slides[0].accent)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const slide = slides.find((s) => s.id === entry.target.id)
        if (slide) activeAccent.value = slide.accent
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  for (const s of slides) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <SiteHeader :accent="activeAccent" />
  <main>
    <SlideSection v-for="(slide, i) in slides" :key="slide.id" :slide="slide" :index="i" />
  </main>
  <SiteFooter />
</template>
