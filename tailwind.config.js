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
        darkPurple: "#141124",
        lightPurple: "#2F2B43",
        palePurple: "#393351",
        purplle: "#524A7B",
        darkRose: "#A868A0",
        paleRose: {
          DEFAULT: "#D4CEE3",
          50: "rgba(212, 206, 227, 0.5)",
          75: "rgba(212, 206, 227, 0.75)",
          90: "rgba(212, 206, 227, 0.9)",
        },
        darkBlue: "#0B1E35", 
        lightBlue: "#1F3B5E", 
        paleBlue: "#2A4D7F", 
        blue: "#5078A3", 
        darkSky: "#78A6CE", 
        paleSky: {
          DEFAULT: "#C3D9ED", 
          50: "rgba(195, 217, 237, 0.5)",
          75: "rgba(195, 217, 237, 0.75)",
          90: "rgba(195, 217, 237, 0.9)",
        },
        colors: {
          darkRed: '#3D0B0B',   
          lightRed: '#6A1E1E', 
          paleRed: '#933434',  
          red: '#C35454',      
          darkRose: '#E68C8C', 
          paleRose: {
            DEFAULT: '#F2D4D4', 
            50: 'rgba(242, 212, 212, 0.5)', 
            75: 'rgba(242, 212, 212, 0.75)',
            90: 'rgba(242, 212, 212, 0.9)',
          },
        }
        
      },
    },
  },
  plugins: [],
};
