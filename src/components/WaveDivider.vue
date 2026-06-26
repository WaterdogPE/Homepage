<script setup>
// Animated layered water waves. Color follows the parent's text color
// (use text-* utilities) so it can flow into whatever section sits below.
// Set `flip` to mirror it (waves hanging from the top of a section).
defineProps({
  flip: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="pointer-events-none relative h-12 w-full overflow-hidden sm:h-20"
    :class="flip ? 'rotate-180' : ''"
    aria-hidden="true"
  >
    <!-- back wave (slower, translucent) -->
    <div class="absolute inset-0 flex w-[200%] motion-safe:animate-wave-slow">
      <svg class="h-full w-1/2 shrink-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill="currentColor"
          fill-opacity="0.45"
          d="M0,45 C300,85 600,5 900,45 C1140,77 1320,20 1440,45 L1440,100 L0,100 Z"
        />
      </svg>
      <svg class="h-full w-1/2 shrink-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill="currentColor"
          fill-opacity="0.45"
          d="M0,45 C300,85 600,5 900,45 C1140,77 1320,20 1440,45 L1440,100 L0,100 Z"
        />
      </svg>
    </div>

    <!-- front wave (faster, solid) -->
    <div class="absolute inset-0 flex w-[200%] motion-safe:animate-wave-fast">
      <svg class="h-full w-1/2 shrink-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,55 C240,90 480,15 720,55 C960,95 1200,15 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
      <svg class="h-full w-1/2 shrink-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,55 C240,90 480,15 720,55 C960,95 1200,15 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  </div>
</template>
