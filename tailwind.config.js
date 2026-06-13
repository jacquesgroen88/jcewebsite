/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './constants.tsx',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#1A1A1A',
        border: '#333333',
        accent: '#3B82F6',
        'accent-green': '#10B981',
        'text-secondary': '#A3A3A3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      // Keyframes are defined globally in index.css so both the `animate-*`
      // utilities below and the hand-written component classes (.mesh-ball,
      // .gradient-shimmer, etc.) resolve to the same @keyframes.
      animation: {
        'mesh-slow': 'mesh 60s infinite linear',
        'beam': 'beam 4s infinite linear',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
        'pop-in-up': 'pop-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scroll': 'infinite-scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
}
