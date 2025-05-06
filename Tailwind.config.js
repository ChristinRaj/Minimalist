/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          primary: {
            DEFAULT: '#333333',
            light: '#666666',
          },
          secondary: {
            DEFAULT: '#F5F5F5',
            dark: '#E0E0E0',
          },
          accent: '#D4A373',
        },
        spacing: {
          '128': '32rem',
        },
        gridTemplateColumns: {
          'product-detail': '1fr 1fr',
          'product-gallery': '100px 1fr',
        },
        height: {
          'hero': '85vh',
          'half': '50vh',
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
      },
    },
    plugins: [],
  }