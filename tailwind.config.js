module.exports = {
   content: ["./*.html", "./src/**/*.html"],
   theme: {
     extend: {
       colors: {
         brand: "#1e40af",
         goldss: "#E3CA9D",
         darkgold: "#947133"
       },
     },
   },
   plugins: [require("@tailwindcss/typography")],
 };
