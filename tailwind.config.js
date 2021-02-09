module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      // padding: (theme) => theme('spacing.6'),
      screens: {
        xl: "1440px"
      }
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary)',
          100: 'var(--color-primary)',
          200: 'var(--color-primary)',
          300: 'var(--color-primary)',
          400: 'var(--color-primary)',
          DEFAULT: 'var(--color-primary)',
          600: 'var(--color-primary)',
          700: 'var(--color-primary)',
          800: 'var(--color-primary)',
          900: 'var(--color-primary)',
        },
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        primary: [ 'Open Sans' ],
        secondary: [ 'Lora' ],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      margin: {
        '1/2': '50%',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        'fade-in-up': {
          'from': { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
          'to': {opacity: 1, transform: 'none' },
        },
        'fade-in-down': {
          'from': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
          'to': { opacity: 1, transform: 'none' },
        },
        'fade-out': {
          'from': { opacity: 1 },
          'to': { opacity: 0 },
        },
        'fade-out-up': {
          'from': { opacity: 1 },
          'to': { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
        },
        'fade-out-down': {
          'from': { opacity: 1 },
          'to': { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
        }
      },
       animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-in-down': 'fade-in-down 1s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'fade-out-up': 'fade-out-up 1s ease-in-out',
        'fade-out-down': 'fade-out-down 1s ease-in-out',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
