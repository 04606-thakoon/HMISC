/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'burgundy': '#5D0016',
                'ivory': '#F9F7F2',
                'gold': '#E6D2AA',
                'background': '#F9F7F2',
                'primary': '#5D0016',
                'secondary': '#E6D2AA',
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', '"Source Han Sans TC"', '"Microsoft JhengHei"', 'sans-serif'],
                serif: ['"Noto Serif TC"', 'serif'],
                thai: ['"Prompt"', 'sans-serif'],
                vietnamese: ['"Be Vietnam Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'batik-pattern': "url('https://www.transparenttextures.com/patterns/batik.png')",
                'bronze-drum': "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
            },
        },
    },
    plugins: [],
}
