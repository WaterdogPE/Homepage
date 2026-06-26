<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Floating isometric voxel blocks — the unmistakable Minecraft cube.
// Grass / dirt / stone / oak / diamond / gold drift slowly upward and wrap.
// Pure canvas, no deps.
const canvas = ref(null)
let ctx = null
let rafId = 0
let blocks = []
let width = 0
let height = 0
let dpr = 1
let running = false

// top / left / right face shades per block type (Minecraft-ish palette)
const PALETTES = [
  { top: '#7bc043', left: '#9c6b43', right: '#7d5436' }, // grass
  { top: '#9c6b43', left: '#825736', right: '#69472f' }, // dirt
  { top: '#a8a8a8', left: '#8a8a8a', right: '#6f6f6f' }, // stone
  { top: '#c2954f', left: '#a87c3d', right: '#8a6530' }, // oak planks
  { top: '#5fd6cb', left: '#48b3ab', right: '#369089' }, // diamond
  { top: '#f2cb4d', left: '#d4ab33', right: '#b08c24' }, // gold
]

let seed = 7
function rnd() {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}

function makeBlock(initial) {
  const depth = 0.35 + rnd() * 0.65 // 0..1, drives size/speed/opacity (parallax)
  return {
    x: rnd() * width,
    y: initial ? rnd() * height : height + 60,
    size: 12 + depth * 30,
    speed: 8 + depth * 22, // px per second, upward
    drift: (rnd() - 0.5) * 0.6, // gentle horizontal sway amount
    phase: rnd() * Math.PI * 2,
    spin: 0.3 + rnd() * 0.5, // sway frequency
    opacity: 0.35 + depth * 0.45,
    palette: PALETTES[Math.floor(rnd() * PALETTES.length)],
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

  const target = Math.min(20, Math.max(10, Math.round((width * height) / 42000)))
  if (blocks.length < target) {
    for (let i = blocks.length; i < target; i++) blocks.push(makeBlock(true))
  } else {
    blocks.length = target
  }
  // keep painter's order: far (small) drawn first
  blocks.sort((a, b) => a.size - b.size)
}

function drawCube(cx, cy, s, pal, opacity) {
  const a = s // horizontal half-width
  const b = s / 2 // vertical half of top diamond
  const vh = s // vertical edge length

  ctx.globalAlpha = opacity
  ctx.lineJoin = 'round'
  ctx.strokeStyle = 'rgba(0,0,0,0.25)'
  ctx.lineWidth = 1

  // top face (diamond)
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + a, cy + b)
  ctx.lineTo(cx, cy + 2 * b)
  ctx.lineTo(cx - a, cy + b)
  ctx.closePath()
  ctx.fillStyle = pal.top
  ctx.fill()
  ctx.stroke()

  // left face
  ctx.beginPath()
  ctx.moveTo(cx - a, cy + b)
  ctx.lineTo(cx, cy + 2 * b)
  ctx.lineTo(cx, cy + 2 * b + vh)
  ctx.lineTo(cx - a, cy + b + vh)
  ctx.closePath()
  ctx.fillStyle = pal.left
  ctx.fill()
  ctx.stroke()

  // right face
  ctx.beginPath()
  ctx.moveTo(cx + a, cy + b)
  ctx.lineTo(cx, cy + 2 * b)
  ctx.lineTo(cx, cy + 2 * b + vh)
  ctx.lineTo(cx + a, cy + b + vh)
  ctx.closePath()
  ctx.fillStyle = pal.right
  ctx.fill()
  ctx.stroke()

  ctx.globalAlpha = 1
}

let lastTs = 0
function step(ts) {
  if (!running) return
  const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016
  lastTs = ts

  ctx.clearRect(0, 0, width, height)

  for (const blk of blocks) {
    blk.y -= blk.speed * dt
    blk.phase += blk.spin * dt
    const sway = Math.sin(blk.phase) * blk.drift * 20
    if (blk.y + blk.size * 2 < -20) {
      // recycle from the bottom
      Object.assign(blk, makeBlock(false))
    }
    drawCube(blk.x + sway, blk.y, blk.size, blk.palette, blk.opacity)
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
  for (const blk of blocks) drawCube(blk.x, blk.y, blk.size, blk.palette, blk.opacity)
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
