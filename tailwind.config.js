/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html",
    "./main.ts",
    "./src/**/*.{ts,tsx,js,jsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

