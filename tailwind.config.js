/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#b4945c',   /* Gold */
                'secondary': '#064e3b', /* Dark Green */
                'accent': '#d32f2f',    /* Emergency Red */
                'gold': '#b4945c',
                'background': '#fdfcf9',
            },
            fontFamily: {
                sans: ['Inter', '"Noto Sans TC"', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                serif: ['"Noto Serif TC"', 'serif'],
                thai: ['"Prompt"', 'sans-serif'],
                vietnamese: ['"Be Vietnam Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'batik-pattern': "url('https://www.transparenttextures.com/patterns/batik.png')",
            },
            animation: {
                'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.95', transform: 'scale(1.02)' },
                },
            },
        },
    },
    plugins: [],
}
