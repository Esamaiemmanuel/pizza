module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_33: "#ffffff33", A700: "#ffffff" },
        yellow: { 600: "#ffd233" },
        black: { 900: "#000000", "900_33": "#00000033", "900_3f": "#0000003f" },
        teal: {
          900: "#134056",
          "900_0c": "#1340560c",
          "900_5e": "#1340565e",
          "900_87": "#13405687",
        },
        light_blue: { 600: "#019dd6", "600_01": "#01a0d9" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 3px  20px 0px #00000033",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(47deg ,#134056,#01a0d9,#01a0d9,#134056,#01a0d9,#01a0d9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
