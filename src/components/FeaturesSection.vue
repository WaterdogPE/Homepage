<script setup>
import { features } from '../content.js'
</script>

<template>
  <section id="features" class="bg-white py-24 transition-colors dark:bg-slate-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          Why WaterdogPE
        </h2>
        <p class="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Why use WaterdogPE?
        </p>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
          There are many reasons why you should use WaterdogPE. Here are a few:
        </p>
      </div>

      <div class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(feature, i) in features"
          :key="feature.name"
          v-reveal="i * 90"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
        >
          <div
            class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
          ></div>
          <div
            class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-deep-500 text-white shadow-lg shadow-brand-500/30"
          >
            <component :is="feature.icon" class="h-6 w-6" />
          </div>
          <h3 class="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{{ feature.name }}</h3>
          <p class="mt-2 text-base text-slate-500 dark:text-slate-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
