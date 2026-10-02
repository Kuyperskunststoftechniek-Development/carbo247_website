<script setup>
import { Globe, Mail, MapPin } from '@lucide/vue'
import Wordmark from './Wordmark.vue'
import { contact } from '../data/slides.js'
</script>

<template>
  <footer id="contact" class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <Wordmark class="footer__logo" />
        <span>Sustainable CO<sub>2</sub> Capture</span>
      </div>

      <div class="footer__col">
        <MapPin class="footer__icon" :size="28" :stroke-width="1.75" />
        <address>
          {{ contact.company }}<br />
          <template v-for="line in contact.address" :key="line">{{ line }}<br /></template>
        </address>
      </div>

      <div class="footer__col footer__col--stack">
        <a :href="`mailto:${contact.email}`"><Mail class="footer__icon" :size="26" :stroke-width="1.75" />{{ contact.email }}</a>
        <a :href="`https://${contact.website}`"><Globe class="footer__icon" :size="26" :stroke-width="1.75" />{{ contact.website }}</a>
      </div>

      <div class="footer__social">
        <a :href="contact.linkedin" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" />
          </svg>
        </a>
        <a :href="contact.youtube" aria-label="YouTube" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" aria-hidden="true">
            <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
          </svg>
        </a>
      </div>
    </div>
    <p class="footer__legal">© {{ new Date().getFullYear() }} CARBO247 BV</p>
  </footer>
</template>

<style scoped>
.footer {
  --accent: #1cc6d6;
  background: #0a2a2e;
  border-top: 2px solid #17565b;
  color: #fff;
}
.footer__inner {
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  align-items: center;
  max-width: 1720px;
  margin: 0 auto;
  padding: 2.2rem var(--gutter);
}
.footer__inner > * {
  padding-inline: clamp(1.5rem, 4vw, 4.5rem);
  border-left: 1px solid rgba(255, 255, 255, 0.18);
}
.footer__inner > :first-child {
  padding-left: 0;
  border-left: 0;
}
.footer__inner > :last-child {
  border-left: 0;
}
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 1rem;
}
.footer__logo {
  font-size: 2rem;
}
.footer__col {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  font-size: 1rem;
  line-height: 1.6;
}
.footer__col--stack {
  flex-direction: column;
  gap: 0.6rem;
}
.footer__col address {
  font-style: normal;
}
.footer__col a {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  color: #fff;
  text-decoration: none;
}
.footer__col a:hover {
  color: var(--accent);
}
.footer__icon {
  flex: none;
}
.footer__social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.8rem;
}
.footer__social a {
  color: #fff;
  display: inline-flex;
  transition: color 0.2s ease;
}
.footer__social a:hover {
  color: var(--accent);
}
.footer__legal {
  margin: 0;
  padding: 1rem var(--gutter);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
sub {
  font-size: 0.6em;
}

@media (max-width: 980px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
  .footer__inner > * {
    padding: 0;
    border-left: 0;
  }
  .footer__social {
    justify-content: flex-start;
  }
}
</style>
