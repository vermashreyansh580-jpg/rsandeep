/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#07090e',
          darkCard: '#0e131f',
          darkHover: '#141b2c',
          gold: '#d4af37',
          goldHover: '#c29d27',
          goldLight: '#f3e5ab',
          ivory: '#faf9f5',
          muted: '#8e9bae',
          borderDark: 'rgba(212, 175, 55, 0.22)',
          borderGlow: 'rgba(212, 175, 55, 0.5)'
        }
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif']
      }
    },
  },
  plugins: [],
}
