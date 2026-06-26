<script setup>
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <section id="patreon" class="bg-slate-50 py-20 transition-colors dark:bg-slate-900">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div
        v-reveal
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-deep-700 px-6 py-16 text-center shadow-2xl shadow-brand-600/30 sm:px-12"
      >
        <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
        <div class="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-cyan-300/20 blur-2xl"></div>

        <h2 class="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Want to supercharge development?</span>
          <span class="block">Become a patreon today</span>
        </h2>
        <p class="relative mx-auto mt-4 max-w-2xl text-lg text-brand-100">
          Patreon Sponsors enjoy a fancy role on our discord server. Only through our patreon sponsors
          is it possible to keep the CI and Web infrastructure of the Waterdog Project running.
        </p>
        <a
          href="https://www.patreon.com/waterdog"
          target="_blank"
          rel="noreferrer"
          class="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
        >
          <Heart class="h-5 w-5" />
          Become a patreon
        </a>
      </div>
    </div>
  </section>
</template>
