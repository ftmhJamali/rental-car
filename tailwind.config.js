const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'carblue':'#3563E9',
      'heartred':'#ED3F3F',
      'bg-gray':'#F6F7F9',
      'white':'#FFFFFF',
      gray:colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      'inputscolor':'#9ca3af',
      'grayslate':'#52525b',
      'bordergray':'#e2e8f0',
      'grayText':'#90A3BF',
      'catText':'#596780'
    },
    fontFamily: {
      Jakarta: ['"Plus Jakarta Sans"', ]
    }
  },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   // ...
  // ],
}

