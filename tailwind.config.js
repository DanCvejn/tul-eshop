/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
      "golos": ["Golos", "sans-serif"],
    },
    colors: {
      "white": {
        DEFAULT: '#ffffff',
      },
      "black": {
        DEFAULT: '#000000',
      },
      'red': {
        DEFAULT: '#ed254e',
        100: '#33040d',
        200: '#66081b',
        300: '#990c28',
        400: '#cc1136',
        500: '#ed254e',
        600: '#f15171',
        700: '#f47d95',
        800: '#f8a8b8',
        900: '#fbd4dc'
      },
      'fluorescent_cyan': {
        DEFAULT: '#00e5e8',
        100: '#002d2e',
        200: '#005a5c',
        300: '#00878a',
        400: '#00b5b8',
        500: '#00e5e8',
        600: '#1ffbff',
        700: '#57fcff',
        800: '#8ffdff',
        900: '#c7feff'
      },
      'orange_(web)': {
        DEFAULT: '#f6aa1c',
        100: '#352302',
        200: '#6a4604',
        300: '#9f6907',
        400: '#d48d09',
        500: '#f6aa1c',
        600: '#f7bb4b',
        700: '#f9cc78',
        800: '#fbdda5',
        900: '#fdeed2'
      },
      'oxford_blue': {
        DEFAULT: '#011936',
        100: '#00050b',
        200: '#000a16',
        300: '#010f21',
        400: '#01142c',
        500: '#011936',
        600: '#034290',
        700: '#056be9',
        800: '#4d9cfb',
        900: '#a6cdfd'
      },
      'charcoal': {
        DEFAULT: '#2f4858',
        100: '#090e11',
        200: '#131c22',
        300: '#1c2b34',
        400: '#253945',
        500: '#2f4858',
        600: '#496f87',
        700: '#6c96b0',
        800: '#9db9ca',
        900: '#cedce5'
      }
    },
  },
plugins: [],
}
