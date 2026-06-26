/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "brand" = Waterdog water blue (ocean cyan/azure ramp)
        brand: {
          50: '#ecfdff',
          100: '#cef6fd',
          200: '#a3ecfa',
          300: '#67ddf4',
          400: '#28c3e8',
          500: '#0ba6ce',
          600: '#0a85ad',
          700: '#0e6a8c',
          800: '#155874',
          900: '#164a63',
        },
        // deep-water companion used for gradient ends and depth
        deep: {
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
      },
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -8%) scale(1.15)' },
          '66%': { transform: 'translate(-6%, 6%) scale(0.9)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        'wave-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'aurora-slow': 'aurora 18s ease-in-out infinite',
        'aurora-slower': 'aurora 26s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        kenburns: 'kenburns 24s ease-out infinite alternate',
        'wave-slow': 'wave-x 18s linear infinite',
        'wave-fast': 'wave-x 11s linear infinite',
      },
    },
  },
  plugins: [],
}
