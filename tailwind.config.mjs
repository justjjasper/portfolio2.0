/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        proxima: ['Proxima Nova Light', 'Helvetica', 'Arial', 'sans-serif' ]
      },
      screens: {
        'xsm': '560px',
        //=> @media (min-width: 560px) aka smallest browser screen
      }
    },
  },
  plugins: [],
};
