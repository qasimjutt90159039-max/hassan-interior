/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          white: '#FFFFFF',
          offwhite: '#F7F6F3',
          warmbeige: '#E8E1D9',
          lightgray: '#E5E5E2',
          charcoal: '#222222',
          black: '#111111',
          muted: '#777777',
          accent: '#B39A82',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        architectural: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        architect: '0.25em',
        widest: '0.18em',
      }
    },
  },
  plugins: [],
}
