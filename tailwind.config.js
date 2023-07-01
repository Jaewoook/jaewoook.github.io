/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/templates/*.{js,jsx,ts,tsx}",
        "./src/pages/*.{js,jsx,ts,tsx}",
        "./content/**/*.mdx"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
