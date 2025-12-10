/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D4AF37', // Gold
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#006B3C', // Jade Green
                    foreground: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#800020', // Deep Burgundy/Red
                    foreground: '#FFFFFF',
                },
                background: '#FAF9F6', // Off-white
            },
            fontFamily: {
                sans: ['Inter', '"Noto Sans TC"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
