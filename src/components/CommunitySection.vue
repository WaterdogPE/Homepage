<script setup>
import { MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <section id="community" class="bg-white py-24 transition-colors dark:bg-slate-950">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div v-reveal class="order-2 flex justify-center lg:order-1">
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/30 to-cyan-400/20 blur-2xl"></div>
          <img
            class="relative max-h-[34rem] w-auto rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
            src="/img/Discord.png"
            alt="WaterdogPE Discord community"
          />
        </div>
      </div>

      <div v-reveal:120 class="order-1 lg:order-2">
        <h2 class="text-base font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          Join the community
        </h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          On Discord &amp; GitHub Discussions
        </p>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
          WaterdogPE is a community project, completely open-source. Our community is primarily
          based on Discord and we're happy to answer any questions and provide support through the
          discord server.
        </p>
        <div class="mt-8">
          <a
            href="https://discord.gg/QcRRzXX"
            target="_blank"
            rel="noreferrer"
            class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <MessageCircle class="h-5 w-5" />
            Join the Community
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
