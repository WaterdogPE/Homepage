<script setup>
import { faqs } from '../content.js'
</script>

<template>
  <section class="relative overflow-hidden bg-slate-900 py-24 dark:bg-slate-900">
    <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <dl class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.id"
          v-reveal="i * 80"
          class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/40"
        >
          <dt class="text-lg font-semibold text-white">{{ faq.question }}</dt>
          <dd class="mt-3 text-slate-400">{{ faq.answer }}</dd>
        </div>
      </dl>

      <div v-reveal class="mt-14 flex justify-center">
        <a
          href="https://docs.waterdog.dev"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Documentation
        </a>
      </div>
    </div>
  </section>
</template>
