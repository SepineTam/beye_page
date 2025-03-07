// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4361ee',
          secondary: '#3a86ff',
          accent: '#7209b7',
          dark: '#2b2d42',
          light: '#f8f9fa',
          text: '#2b2d42'
        }
      },
    },
    plugins: [],
  };