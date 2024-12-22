/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d9d4ce', // Beige 
          darker: '#8A7D6A'
        },
        secondary: {
          DEFAULT: '#A31621' //
        }
      },
      
    },
    fontFamily: {
      'sans': ['Inter Tight', 'sans-serif',],
      'serif': ['Nyghtserif', 'serif']
    }
  },
  darkMode: false,
  plugins: [
    require('daisyui'),
  ],
}

