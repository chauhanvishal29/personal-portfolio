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
      'eucalyptus':'#4CE1A0',
      'gray-30':'#5B5B5C',
      'gray-25':'#A1A1A2',
      'white-opacity-5': 'rgba(255, 255, 255, 0.05)',
      'rob-roy':'#EABE7B'
    },
    fontWeight: {
      'bold':700,
      'normal':400,
      'normal':400,
      'medium':500,
      'extra-bold': 800,
    },
    container: {
      center: true, 
      padding: '1rem', 
      screens: { 
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(190deg, rgba(48, 45, 96, 0.73) 0%, rgb(20, 20, 20) 0%, rgba(0, 212, 255, 0.05) 100%)',
    },
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [],
}

