/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        k2d: "var(--font-k2d)", 
        montserrat: "var(--font-montserrat)", 
        poppins: "var(--font-poppins)", 
        muli: "var(--font-muli)",  
      },
    },
  },
  plugins: [],
}