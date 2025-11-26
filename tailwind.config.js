/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Futurism Palette
        'burnt-orange': '#C05621',
        'amber-glow': '#FF8C42',
        'deep-brown': '#1A120B',
        'warm-charcoal': '#2A1F1A',
        'cream': '#F5F5DC',
        'sand': '#E8DCC4',
        'gold': '#D4AF37',
        'amber-dark': '#CC7722',
      },
      fontFamily: {
        'headline': ['"Bebas Neue"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-vinyl': 'slideVinyl 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(192, 86, 33, 0.5), 0 0 10px rgba(192, 86, 33, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(192, 86, 33, 0.8), 0 0 30px rgba(192, 86, 33, 0.5)',
          },
        },
        slideVinyl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(-20px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
