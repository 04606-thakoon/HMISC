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
                background: '#F9F7F2', // Ivory Paper Texture Base
                ivory: '#F9F7F2',
                burgundy: '#800020',
                gold: '#D4AF37',
            },
            fontFamily: {
                sans: ['Inter', 'Montserrat', '"Be Vietnam Pro"', 'Prompt', '"Noto Sans TC"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                header: ['Montserrat', 'sans-serif'], // For functional headers
                title: ['"Playfair Display"', 'serif'], // For grand titles
                thai: ['Prompt', 'sans-serif'],
                vietnamese: ['"Be Vietnam Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'ivory-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Fallback/Placeholder texture
            },
        },
    },
    plugins: [],
}
