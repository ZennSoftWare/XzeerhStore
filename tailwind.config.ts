import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #000000',
        brutalLg: '10px 10px 0 0 #000000',
        brutalSm: '4px 4px 0 0 #000000',
      },
      borderRadius: {
        brutal: '16px',
      },
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        lemon: '#ffd84d',
        sky: '#61a5ff',
        leaf: '#55d67d',
        coral: '#ff5f5f',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.45s ease-out',
        slideIn: 'slideIn 0.35s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
