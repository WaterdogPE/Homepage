<script setup>
import { navigation } from '../content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white transition-colors dark:border-white/10 dark:bg-slate-950">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <img class="h-8 w-auto" src="/img/WDLogo.png" alt="WaterdogPE Logo" />
      </div>
      <nav class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer">
        <a
          v-for="item in navigation"
          :key="item.name + '-footer'"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
          class="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
        >
          {{ item.name }}
        </a>
      </nav>
      <p class="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
        &copy; {{ year }} WaterdogPE. All rights reserved.
      </p>
    </div>
  </footer>
</template>
