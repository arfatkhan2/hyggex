/** @type {import('tailwindcss').Config} */
const plugin =require('tailwindcss/plugin')

const Myclass = plugin(function({
  addUtilities
}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserver-3d":{
      transformStyle:"preserve-3d",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    }
  })
})
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        gray: "#28262c",
        dimgray: "#696671",
        darkslategray: {
          "100": "#3a3740",
          "200": "#202b37",
        },
        white: "#fff",
        silver: "#c4c4c4",
        darkslateblue: "#06286e",
      },
      spacing: {},
      fontFamily: {
        med: "Inter",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "23xl-5": "42.5px",
      },
    },
    fontSize: {
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      "smi-4": "12.4px",
      "5xl": "24px",
      lgi: "19px",
      "19xl-3": "38.3px",
      "4xl": "23px",
      "12xl": "31px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins:[Myclass]
};
