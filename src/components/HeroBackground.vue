<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Underwater ambiance: a field of bubbles rising and gently wobbling.
// Pure canvas, no deps.
const canvas = ref(null)
let ctx = null
let rafId = 0
let bubbles = []
let width = 0
let height = 0
let dpr = 1
let running = false

let seed = 7
function rnd() {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}

function makeBubble(initial) {
  const depth = rnd()
  return {
    x: rnd() * width,
    y: initial ? rnd() * height : height + 20,
    r: 1.5 + depth * 5,
    speed: 25 + depth * 55, // px per second, rising
    drift: (rnd() - 0.5) * 0.8,
    phase: rnd() * Math.PI * 2,
    spin: 0.8 + rnd() * 1.2,
    opacity: 0.12 + depth * 0.28,
  }
}

function resize() {
  if (!canvas.value) return
  const rect = canvas.value.getBoundingClientRect()
  width = rect.width
  height = rect.height
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const target = Math.min(46, Math.max(16, Math.round((width * height) / 20000)))
  if (bubbles.length < target) {
    for (let i = bubbles.length; i < target; i++) bubbles.push(makeBubble(true))
  } else {
    bubbles.length = target
  }
}

function drawBubble(cx, cy, r, opacity) {
  ctx.globalAlpha = opacity
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(220, 245, 255, 0.35)'
  ctx.fill()
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(190, 235, 255, 0.7)'
  ctx.stroke()
  // little highlight
  ctx.beginPath()
  ctx.arc(cx - r * 0.3, cy - r * 0.3, Math.max(0.6, r * 0.28), 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
  ctx.fill()
  ctx.globalAlpha = 1
}

let lastTs = 0
function step(ts) {
  if (!running) return
  const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016
  lastTs = ts

  ctx.clearRect(0, 0, width, height)

  for (const bub of bubbles) {
    bub.y -= bub.speed * dt
    bub.phase += bub.spin * dt
    if (bub.y + bub.r * 2 < -20) Object.assign(bub, makeBubble(false))
    const sway = Math.sin(bub.phase) * bub.drift * 14
    drawBubble(bub.x + sway, bub.y, bub.r, bub.opacity)
  }

  rafId = requestAnimationFrame(step)
}

function start() {
  if (running) return
  running = true
  lastTs = 0
  rafId = requestAnimationFrame(step)
}

function stop() {
  running = false
  cancelAnimationFrame(rafId)
}

function drawStatic() {
  ctx.clearRect(0, 0, width, height)
  for (const bub of bubbles) drawBubble(bub.x, bub.y, bub.r, bub.opacity)
}

let onResize = null
let onVisibility = null

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    drawStatic()
    return
  }

  start()
  onResize = () => resize()
  window.addEventListener('resize', onResize, { passive: true })
  onVisibility = () => (document.hidden ? stop() : start())
  document.addEventListener('visibilitychange', onVisibility)
})

onBeforeUnmount(() => {
  stop()
  if (onResize) window.removeEventListener('resize', onResize)
  if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <canvas ref="canvas" class="absolute inset-0 h-full w-full" aria-hidden="true"></canvas>
</template>
