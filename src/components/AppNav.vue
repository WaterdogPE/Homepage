<script setup>
import { ref } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme.js'
import { navigation } from '../content.js'

const { theme, toggleTheme } = useTheme()
const mobileOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Global">
      <a href="#top" class="flex items-center gap-2">
        <span class="sr-only">WaterdogPE</span>
        <img class="h-9 w-auto" src="/img/WDLogo.png" alt="WaterdogPE Logo" />
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="toggleTheme"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="theme === 'dark'" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
        </button>

        <button
          type="button"
          @click="mobileOpen = !mobileOpen"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 md:hidden dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          aria-label="Toggle menu"
        >
          <X v-if="mobileOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="border-t border-slate-200/70 md:hidden dark:border-white/10">
        <div class="space-y-1 px-4 py-3 sm:px-6">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
            @click="mobileOpen = false"
            class="block rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
