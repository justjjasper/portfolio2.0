/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bg-scroll': 'bg-scroll 30s linear infinite',
      },
      boxShadow: {
        'project-shadows': '9px 9px 0px 0px #808080',
      },
      keyframes: {
        'bg-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-white': '#F5F5F5',
      },
      fontFamily: {
        proxima: ['Proxima Nova Light', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        xsm: '560px',
        //=> @media (min-width: 560px) aka smallest browser screen
      },
    },
  },
  plugins: [],
};
