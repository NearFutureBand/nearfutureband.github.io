const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      sfp: ["SFPro"],
    },
    extend: {
      screens: {
        320: { max: "320px" },
        576: { min: "576px" },
        768: { min: "768px" },
        1024: { min: "1024px" },
        1280: { min: "1280px" },
        1920: { min: "1920px" },
      },
    },
  },
};
