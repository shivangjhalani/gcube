/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'rotate': 'rotate linear infinite',
        'rotate-reverse': 'rotate-reverse linear infinite',
        'counter-rotate': 'counter-rotate linear infinite',
        'counter-rotate-reverse': 'counter-rotate-reverse linear infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'counter-rotate': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
        },
        'counter-rotate-reverse': {
          '0%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        },
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addBase, theme }) {
      const colors = theme('colors')
      const colorVariables = {}
      
      // Recursively flatten the colors object
      const flattenColors = (obj, prefix = '') => {
        Object.entries(obj).forEach(([key, value]) => {
          if (typeof value === 'string') {
            colorVariables[`--${prefix}${key}`] = value
          } else if (typeof value === 'object') {
            flattenColors(value, `${prefix}${key}-`)
          }
        })
      }
      
      flattenColors(colors)
      
      addBase({
        ':root': colorVariables,
      })
    })
  ],
}

