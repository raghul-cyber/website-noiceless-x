/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          void: '#08100c',
          DEFAULT: '#0d1511',
          dim: '#09110d',
          surface: '#121a15',
          low: '#161d19',
          high: '#242c28',
          highest: '#2f3732',
        },
        tactical: {
          mint: '#00e599',
          mintBright: '#4dffb2',
          mintDim: '#006c46',
          slate: '#849589',
          outline: '#3b4a41',
          seam: '#143526',
          amber: '#e5c100',
          red: '#ff3b5c',
          cyan: '#00e5ff',
          violet: '#8a7fff',
          text: '#dce5de',
          textMuted: '#849589',
          textCrisp: '#f0fdf4',
          olive: '#1c281e',
          oliveDark: '#111b13',
          graphite: '#1f2722',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'recessed': 'inset 0 1px 3px rgba(0,0,0,0.8), inset 0 0 1px rgba(0,229,153,0.1)',
        'mint-glow': '0 0 12px rgba(0, 229, 153, 0.35)',
        'amber-glow': '0 0 12px rgba(229, 193, 0, 0.4)',
        'card-tactical': '0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(59, 74, 65, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
