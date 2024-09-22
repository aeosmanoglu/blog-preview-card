/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                'yellow-500': '#F4D04E',
                'gray-500': '#6B6B6B',
                'gray-950': '#111',
            },
            fontFamily: {
                'figtree': ['Figtree', 'sans-serif'],
            },
            boxShadow: {
                'card': '8px 8px 0 0 rgba(0, 0, 0, 1)',
            },
        },
    },
    plugins: [],
}

