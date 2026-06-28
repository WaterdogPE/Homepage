<script setup>
import { ArrowRight, Github } from 'lucide-vue-next'
import HeroBackground from './HeroBackground.vue'
import WaveDivider from './WaveDivider.vue'
</script>

<template>
  <section id="top" class="relative isolate overflow-hidden bg-slate-950">
    <!-- Background image with slow Ken Burns zoom -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        class="h-full w-full origin-center object-cover motion-safe:animate-kenburns"
        src="/img/background-image.jpeg"
        alt="Minecraft Background"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-brand-900/85"></div>
      <div class="absolute inset-0 bg-slate-950/40"></div>
    </div>

    <!-- Rising bubbles -->
    <HeroBackground class="opacity-90" />

    <!-- Drifting aurora glows -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-24 top-4 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl motion-safe:animate-aurora-slow"
      ></div>
      <div
        class="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl motion-safe:animate-aurora-slower"
      ></div>
      <div
        class="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-deep-500/20 blur-3xl motion-safe:animate-aurora-slow"
      ></div>
    </div>

    <!-- Subtle grid texture -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.07]"
      style="background-image: linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%); -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
      <div class="mx-auto max-w-3xl text-center">
        <span
          v-reveal
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 backdrop-blur"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          Minecraft: Bedrock Edition Proxy
        </span>

        <h1 v-reveal:80 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span class="block drop-shadow-[0_2px_20px_rgba(15,23,42,0.6)]">Powerful, Efficient &amp; Extendable</span>
          <span
            class="block bg-gradient-to-r from-cyan-200 to-brand-300 bg-clip-text text-transparent"
          >
            Minecraft Bedrock Proxy
          </span>
        </h1>

        <p v-reveal:160 class="mx-auto mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
          Connect your servers, speed up transfer times and manage players using WaterdogPE.
        </p>

        <div v-reveal:240 class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://docs.waterdog.dev/overview"
            class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 sm:w-auto"
          >
            Get started
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/WaterdogPE/WaterdogPE"
            target="_blank"
            rel="noreferrer"
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5 sm:w-auto"
          >
            <Github class="h-5 w-5" />
            Source Code
          </a>
        </div>
      </div>
    </div>

    <!-- Animated water surface flowing into the next section -->
    <WaveDivider class="absolute inset-x-0 bottom-0 z-10 text-slate-50 dark:text-slate-900" />
  </section>
</template>
