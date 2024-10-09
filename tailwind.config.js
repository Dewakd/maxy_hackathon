/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          dark : '#1a1e18',
          light : '#ffffff',
          darkLight : '#f4f4f4',
        },
        fontFamily: {
          geo: ["CinaGEO", "sans-serif"],
          geoLight: ["CinaGEOLight", "sans-serif"]
        },
        backgroundImage: {
          herobanner : `url('/public/image/herobanner.png')`,
          heroTravel : `url('https://images.unsplash.com/photo-1566475955255-404134a79aeb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          seeAllHero : `url('https://images.unsplash.com/photo-1723581206776-869bd4e5e06c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHZpbGxhZ2VyfGVufDB8fDB8fHww')`
        }
    },
  },
  plugins: [],
}