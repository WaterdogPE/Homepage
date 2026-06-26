<script setup>
import { sponsors } from '../content.js'
</script>

<template>
  <section class="bg-slate-50 pb-20 transition-colors dark:bg-slate-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p
        v-reveal
        class="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
      >
        Our sponsors: Tools that make WaterdogPE even better
      </p>
      <div v-reveal:100 class="mt-10 flex flex-wrap items-center justify-center gap-12">
        <a
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          :href="sponsor.href"
          target="_blank"
          rel="noreferrer"
          class="transition-transform duration-300 hover:scale-105"
        >
          <img
            class="h-16 w-auto opacity-90 transition-opacity hover:opacity-100"
            :src="sponsor.img"
            :alt="sponsor.name"
          />
        </a>
      </div>
    </div>
  </section>
</template>
