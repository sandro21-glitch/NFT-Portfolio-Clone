/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ['Orbitron', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        colorPrimary: '#6EC1E4',
        colorSecondary: '#54595F',
        mainGreen: '#78F701',
        colorText: '#7A7A7A',
        transparentBg: 'rgba(0, 0, 0, 0.95)',
        transparentBgTwo: 'rgba(0, 0, 0, 0.85)',
        transparentBgThree: 'rgba(0, 0, 0, 0.50)',
        homeAboutPageBg: 'rgb(17,17,17)',
        navBg: 'rgb(17,17,17)',
        navBottom: 'rgb(50,50,50)',
        whyUsBg: 'rgb(10,10,10)',
        whyUsBorder: '#666666',
        modalBg: 'rgba(45,47,56,0.8)'
      },
      backgroundImage: {
        bgHome: ['url(./images/bg.jpg)'],
      },
    },
  },
  plugins: [],
}
