<script setup>
import { partners } from '../content.js'
</script>

<template>
  <section class="bg-slate-50 transition-colors dark:bg-slate-900">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p
        v-reveal
        class="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
      >
        Powering some of the most popular Minecraft: Bedrock Edition servers
        <a
          href="https://forms.gle/HeTz6AZpmXc1QLZP9"
          target="_blank"
          rel="noreferrer"
          class="ml-1 font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          (Request Partner)
        </a>
      </p>

      <div v-reveal:100 class="mt-10 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3">
        <component
          :is="partner.href ? 'a' : 'div'"
          v-for="partner in partners"
          :key="partner.name"
          :href="partner.href || undefined"
          :target="partner.href ? '_blank' : undefined"
          :rel="partner.href ? 'noreferrer' : undefined"
          class="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <img
            class="h-16 w-auto opacity-90 transition-opacity hover:opacity-100"
            :src="partner.img"
            :alt="partner.name"
          />
        </component>
      </div>
    </div>
  </section>
</template>
