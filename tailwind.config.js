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
                primary: '#800020', // Burgundy for main actions/focus
                secondary: '#D4AF37', // Royal Gold for accents/borders
                accent: '#D4AF37', // Keeping accent as Gold
                background: '#F9F7F2', // Ivory base
                ivory: '#F9F7F2',
                burgundy: '#800020',
                gold: '#D4AF37',
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', '"Source Han Sans TC"', '"Microsoft JhengHei"', 'sans-serif'], // Neutral Chinese Sans
                serif: ['"Noto Serif TC"', 'serif'],
                thai: ['"Prompt"', 'sans-serif'],
                vietnamese: ['"Be Vietnam Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'ivory-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Fallback/Placeholder texture
                'batik-pattern': "url('https://www.transparenttextures.com/patterns/batik.png')", // Placeholder for ghost pattern
                'bronze-drum': "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')", // Placeholder for subtle texture
            },
        },
    },
    plugins: [],
}
