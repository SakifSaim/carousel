/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        primaryColor: '#0067FF',
        yellowColor: '#FEB60D',
        PurpleColor: '#9771ff',
        irisBlueColor: '#246BCf',
        textColor: '#4E545F',
        headingColor: '#4C3957',
      },

      boxShadow: {
        panelShadow: 'rgba(17,12,46,0.15) 0px 48px 100px 0px',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
