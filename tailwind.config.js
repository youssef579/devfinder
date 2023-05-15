/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#141D2F",
                content: "#1E2A47",
                btn: "#0079ff",
            },
            fontFamily: {
                mono: ["var(--space-mono)", "monospace"],
            },
            boxShadow: {
                container: "0 35px 60px -15px rgba(0,0,0,0.3)",
            },
        },
        screens: {
            mobile: { max: "500px" },
        },
        keyframes: {
            loading: {
                from: { transform: "translateY(-50px)" },
                to: { transform: "translateY(50px)", opacity: "0.2" },
            },
        },
        animation: {
            loading: "loading 1s infinite alternate",
        },
    },
    plugins: [],
};
