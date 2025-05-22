/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Modern blue
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald green
          dark: '#059669',
          light: '#34D399',
        },
        accent: {
          DEFAULT: '#8B5CF6', // Purple
          dark: '#7C3AED',
          light: '#A78BFA',
        },
        dark: {
          DEFAULT: '#1F2937',
          lighter: '#374151',
          darker: '#111827',
        },
        light: {
          DEFAULT: '#F9FAFB',
          darker: '#F3F4F6',
          darker2: '#E5E7EB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ai-pattern': "url('/images/ai-pattern.svg')",
      },
      boxShadow: {
        'ai': '0 4px 6px -1px rgba(37, 99, 235, 0.1), 0 2px 4px -1px rgba(37, 99, 235, 0.06)',
        'ai-lg': '0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
    },
  },
  plugins: [],
} 