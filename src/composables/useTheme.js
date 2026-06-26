import { ref, watch } from 'vue'

const STORAGE_KEY = 'wdpe-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Shared singleton state so every component sees the same theme.
const theme = ref(getInitialTheme())

function apply(value) {
  const root = document.documentElement
  root.classList.toggle('dark', value === 'dark')
}

watch(
  theme,
  (value) => {
    apply(value)
    localStorage.setItem(STORAGE_KEY, value)
  },
  { immediate: true },
)

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
