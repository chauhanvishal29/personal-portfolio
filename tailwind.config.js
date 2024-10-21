/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      space: ['"Space Grotesk"', 'sans-serif'],
    },
    colors: {
      'chinese-black' : '#141414',
      'white' : '#ffffff',
      'raisin-black':'#242424',
      'philippine-gray':'#929292',
      'light-silver':'#D9D9D9',
      'eucalyptus':'#4CE1A0'
    },
    fontWeight: {
      'extra-bold': 800,
    },
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [],
}

