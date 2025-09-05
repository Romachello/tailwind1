module.exports = {
   content: ["./src/**/*.html"],
   theme: {
     extend: {
       colors: {
         brand: "#1e40af" // фирменный цвет
       },
       fontFamily: {
         sans: ["Inter", "sans-serif"]
       }
     },
   },
   plugins: [require('@tailwindcss/typography')],
 };
 