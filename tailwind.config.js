const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
        colors: {
            popupsbg: colors.white,
            neutral: colors.yellow,
            primary: colors.indigo,
            primarytxt: colors.white,
            warning: colors.yellow,
            warningtxt: colors.black,
            error: colors.red,
            errortxt: colors.white,
        }
    },
    variants: {},
    plugins: [],
}