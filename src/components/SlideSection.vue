<script setup>
import { computed } from 'vue'
import {
  ArrowRight, Atom, Bubbles, Cloud, Droplet, Earth, Factory, FlaskConical, Heater,
  Layers, Leaf, PawPrint, RefreshCw, Settings, Sun, TreeDeciduous, Wind, Zap,
} from '@lucide/vue'

// Icon names used in data/slides.js
const icons = {
  Atom, Bubbles, Cloud, Droplet, Earth, Factory, FlaskConical, Heater,
  Layers, Leaf, PawPrint, RefreshCw, Settings, Sun, TreeDeciduous, Wind, Zap,
}

const props = defineProps({
  slide: { type: Object, required: true },
  index: { type: Number, required: true },
})

const s = computed(() => props.slide)
const isHero = computed(() => s.value.variant === 'hero')
const pins = computed(() => (s.value.labels || []).filter((l) => l.type === 'pin'))
const floats = computed(() => (s.value.labels || []).filter((l) => l.type === 'float'))
const steps = computed(() => (s.value.labels || []).filter((l) => l.type === 'step'))

const style = computed(() => ({
  '--accent': s.value.accent,
  '--closing-accent': s.value.closingAccent || s.value.accent,
  '--shade': s.value.shade || 'rgba(3, 20, 14, 0.82)',
  '--fx': s.value.focusX ?? 0.5,
}))

const lineParts = (line) => line.parts || [{ text: line.text, accent: line.accent }]
const closingLine = (line) => (typeof line === 'string' ? { text: line } : line)
const pos = (l) => ({ left: `${l.x}%`, top: `${l.y}%` })
</script>

<template>
  <section :id="s.id" class="slide" :class="[`slide--${s.id}`, { 'slide--hero': isHero }]" :style="style">
    <div class="slide__bg" aria-hidden="true">
      <div class="slide__stage">
        <img
          :src="s.bg"
          alt=""
          width="1672"
          height="941"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          decoding="async"
        />

        <div v-for="pin in pins" :key="pin.text" class="pin" :style="pos(pin)">
          <span class="pin__dot" /><span class="pin__line" /><span class="pin__pill">{{ pin.text }}</span>
        </div>

        <span
          v-for="(f, i) in floats"
          :key="`f${i}`"
          class="float"
          :class="{ 'float--small': f.small }"
          :style="{ ...pos(f), '--d': `${i * -1.3}s` }"
          v-html="f.text"
        />

        <div v-for="step in steps" :key="step.title" class="step" :class="`step--${step.anchor}`" :style="pos(step)">
          <strong>{{ step.title }}</strong>
          <span>{{ step.text }}</span>
        </div>
      </div>
    </div>
    <div class="slide__shade" aria-hidden="true" />

    <div v-reveal class="slide__content" :class="{ 'is-mixed': s.titleCase === 'mixed' }">
      <span v-if="s.topRule" class="rule" />
      <p v-if="s.eyebrow" class="eyebrow" v-html="s.eyebrow" />

      <component :is="isHero ? 'h1' : 'h2'" class="title">
        <span v-for="(line, i) in s.title" :key="i" class="title__line">
          <span v-for="(part, j) in lineParts(line)" :key="j" :class="{ accent: part.accent }" v-html="part.text" />
        </span>
      </component>

      <span v-if="s.titleRule" class="rule" />

      <p v-if="s.intro" class="intro" v-html="s.intro" />
      <h3 v-if="s.subheading" class="subheading">{{ s.subheading }}</h3>

      <ul v-if="s.features" class="features">
        <li v-for="(f, i) in s.features" :key="i" class="feature">
          <span class="feature__icon" :style="f.iconColor ? { color: f.iconColor } : null">
            <component :is="icons[f.icon]" :stroke-width="1.6" />
          </span>
          <span class="feature__text" v-html="f.text" />
        </li>
      </ul>

      <p v-for="(p, i) in s.paragraphs" :key="`p${i}`" class="paragraph" v-html="p" />

      <ol v-if="steps.length" class="steps-list">
        <li v-for="step in steps" :key="step.title">
          <strong>{{ step.title }}</strong> — {{ step.text }}
        </li>
      </ol>

      <template v-if="isHero">
        <span class="rule rule--hero" />
        <p class="tagline">{{ s.tagline }}</p>
        <div class="buttons">
          <a
            v-for="b in s.buttons"
            :key="b.href"
            :href="b.href"
            class="button"
            :class="b.primary ? 'button--primary' : 'button--ghost'"
          >
            {{ b.label }} <ArrowRight :size="22" :stroke-width="2.25" />
          </a>
        </div>
      </template>

      <template v-if="s.closing">
        <span class="rule" />
        <p class="closing" :class="{ 'closing--lg': s.closingSize === 'lg' }">
          <span
            v-for="(line, i) in s.closing.map(closingLine)"
            :key="i"
            class="closing__line"
            :class="{ accent: line.accent }"
            v-html="line.text"
          />
        </p>
      </template>

      <span v-if="s.endRule" class="rule" />
    </div>
  </section>
</template>

<style scoped>
.slide {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
  background: #06140f;
}

/* Background "stage": covers the section like background-size: cover, but
   keeps its own 16:9 box so overlay labels stay locked to the photo. */
.slide__bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  container-type: size;
}
.slide__stage {
  --sw: max(100cqw, 177.7cqh);
  --sh: max(100cqh, 56.28cqw);
  position: absolute;
  width: var(--sw);
  height: var(--sh);
  left: calc((100cqw - var(--sw)) * var(--fx));
  top: calc((100cqh - var(--sh)) * 0.5);
  container-type: inline-size;
}
.slide__stage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide__shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, var(--shade) 0%, color-mix(in srgb, var(--shade) 70%, transparent) 26%, transparent 46%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, transparent 18%);
}

/* ---------- overlay labels ---------- */
.pin {
  position: absolute;
  display: flex;
  align-items: center;
  transform: translate(-0.35cqw, -50%);
}
.pin__dot {
  width: 0.7cqw;
  height: 0.7cqw;
  border-radius: 50%;
  background: #fff;
}
.pin__line {
  width: 4.4cqw;
  height: max(1px, 0.1cqw);
  background: #fff;
}
.pin__pill {
  min-width: 6.4cqw;
  text-align: center;
  padding: 0.55cqw 1.4cqw;
  border: max(1.5px, 0.12cqw) solid #fff;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.3cqw;
  font-weight: 500;
  letter-spacing: 0.04em;
}
.float {
  position: absolute;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.75cqw;
  font-weight: 500;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  animation: bob 6s ease-in-out infinite;
  animation-delay: var(--d);
}
.float--small {
  font-size: 1.2cqw;
  opacity: 0.85;
}
@keyframes bob {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -0.8cqw;
  }
}
.step {
  position: absolute;
  max-width: 13cqw;
  color: #fff;
  font-size: 1.02cqw;
  line-height: 1.3;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
}
.step strong {
  display: block;
  font-size: 1.2cqw;
  font-weight: 600;
}
.step--bottom {
  transform: translate(-50%, -100%);
  text-align: center;
}
.step--top {
  transform: translateX(-50%);
  text-align: center;
  max-width: 17cqw;
}

/* ---------- text column ---------- */
.slide__content {
  position: relative;
  width: min(100%, calc(var(--gutter) + clamp(30rem, 36vw, 44rem)));
  padding: clamp(6.5rem, 13vh, 9rem) 0 clamp(2rem, 6vh, 5rem) var(--gutter);
  color: #fff;
}
.slide--hero .slide__content {
  width: min(100%, calc(var(--gutter) + clamp(34rem, 50vw, 58rem)));
}

.rule {
  display: block;
  width: 4.5rem;
  height: 3px;
  border-radius: 2px;
  background: var(--closing-accent);
  margin-block: clamp(0.9rem, 2.2vh, 1.8rem);
}
.rule:first-child {
  margin-top: 0;
}
.rule:last-child {
  margin-bottom: 0;
}

.eyebrow {
  margin: 0 0 0.4rem;
  font-size: clamp(1.25rem, 2vw, 2.1rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
}
.is-mixed .eyebrow {
  font-weight: 600;
  font-size: clamp(1.1rem, 1.65vw, 1.8rem);
}

.title {
  margin: 0;
  font-weight: 800;
  font-size: clamp(2.2rem, min(4.6vw, 8.4vh), 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.015em;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.25);
}
.slide--hero .title {
  font-size: clamp(2.4rem, min(5vw, 9vh), 5.8rem);
}
.is-mixed .title {
  font-weight: 700;
  line-height: 1.04;
  font-size: clamp(2.2rem, min(3.9vw, 7vh), 4.6rem);
}
.slide--carboplate .title {
  font-weight: 800;
  font-size: clamp(3rem, min(5.6vw, 10vh), 6.4rem);
}
.title__line {
  display: block;
  white-space: nowrap;
}
.accent {
  color: var(--accent);
}
.closing .accent,
.closing :deep(.accent) {
  color: var(--closing-accent);
}
:deep(sub) {
  font-size: 0.55em;
  line-height: 0;
  vertical-align: -0.25em;
}

.intro,
.paragraph {
  margin: clamp(0.8rem, 2vh, 1.5rem) 0 0;
  font-size: clamp(1rem, min(1.42vw, 2.55vh), 1.6rem);
  font-weight: 400;
  line-height: 1.38;
  max-width: 34ch;
}
.slide--hero .intro {
  max-width: 38ch;
  margin-top: clamp(1.6rem, 4vh, 2.8rem);
}
.paragraph {
  font-size: clamp(0.98rem, min(1.3vw, 2.35vh), 1.45rem);
  max-width: 33ch;
}
.subheading {
  margin: clamp(0.9rem, 2.2vh, 1.6rem) 0 0;
  font-size: clamp(1.2rem, min(1.85vw, 3.3vh), 2rem);
  font-weight: 700;
}

.features {
  list-style: none;
  margin: clamp(0.9rem, 2.4vh, 1.8rem) 0 0;
  padding: 0;
  display: grid;
  gap: clamp(0.6rem, 1.6vh, 1.3rem);
}
.feature {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 1.6vw, 1.6rem);
}
.feature__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: clamp(3rem, min(4.2vw, 7.6vh), 4.9rem);
  aspect-ratio: 1;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
}
.feature__icon :deep(svg) {
  width: 52%;
  height: 52%;
}
.feature__text {
  font-size: clamp(0.95rem, min(1.2vw, 2.15vh), 1.35rem);
  line-height: 1.35;
  font-weight: 300;
  max-width: 26ch;
}
.feature__text :deep(.hl) {
  color: var(--accent);
  font-weight: 600;
}

.closing {
  margin: 0;
  font-size: clamp(1.25rem, min(1.9vw, 3.4vh), 2.2rem);
  font-weight: 700;
  line-height: 1.22;
  max-width: 24ch;
}
.closing--lg {
  font-size: clamp(2.2rem, min(3.6vw, 6.4vh), 4.2rem);
  line-height: 1.02;
}
.closing__line {
  display: block;
}

.steps-list {
  display: none;
}
.slide--circularity .paragraph {
  max-width: 27ch;
  font-size: clamp(0.95rem, min(1.2vw, 2.15vh), 1.35rem);
}

/* ---------- hero ---------- */
.rule--hero {
  background: var(--accent);
  margin-block: clamp(1.6rem, 4vh, 2.8rem) clamp(1.4rem, 3vh, 2rem);
}
.tagline {
  margin: 0;
  font-size: clamp(1.1rem, 1.75vw, 2rem);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.42em;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: clamp(2rem, 5vh, 3.2rem);
}
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.05rem 1.9rem;
  border-radius: 999px;
  font-size: clamp(1rem, 1.12vw, 1.25rem);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
}
.button--primary {
  background: var(--accent);
  box-shadow: 0 10px 30px color-mix(in srgb, var(--accent) 35%, transparent);
}
.button--ghost {
  border: 2px solid #fff;
  background: rgba(0, 0, 0, 0.15);
}
.button--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* ---------- reveal animation ---------- */
.slide__content > * {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.slide__content.is-visible > * {
  opacity: 1;
  transform: none;
}
.slide__content > :nth-child(2) { transition-delay: 0.08s; }
.slide__content > :nth-child(3) { transition-delay: 0.16s; }
.slide__content > :nth-child(4) { transition-delay: 0.24s; }
.slide__content > :nth-child(5) { transition-delay: 0.32s; }
.slide__content > :nth-child(6) { transition-delay: 0.4s; }
.slide__content > :nth-child(n + 7) { transition-delay: 0.48s; }

@media (prefers-reduced-motion: reduce) {
  .slide__content > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .float {
    animation: none;
  }
}

/* ---------- small screens ---------- */
@media (max-width: 860px) {
  .slide {
    align-items: flex-end;
  }
  .slide__shade {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      color-mix(in srgb, var(--shade) 75%, transparent) 30%,
      var(--shade) 100%
    );
  }
  .pin,
  .step {
    display: none;
  }
  .slide__content,
  .slide--hero .slide__content {
    width: 100%;
    padding: 7rem var(--gutter) 3.5rem;
  }
  .intro,
  .paragraph,
  .slide--circularity .paragraph,
  .feature__text,
  .closing {
    max-width: none;
  }
  .title__line {
    white-space: normal;
  }
  .steps-list {
    display: grid;
    gap: 0.6rem;
    margin: 1.4rem 0 0;
    padding-left: 0;
    list-style: none;
    font-size: 0.98rem;
    font-weight: 300;
  }
  .steps-list strong {
    font-weight: 600;
    color: var(--accent);
  }
  .tagline {
    letter-spacing: 0.25em;
  }
}
</style>
