/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        face: "hsl(208, 92%, 53%)",
        twiiter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        DarkBG: "hsl(230, 17%, 14%)",
        TopBG: "hsl(232, 19%, 15%)",
        cardBG: "hsl(228, 28%, 20%)",
        TextCard: "hsl(228, 34%, 66%)",
        TextColor: "hsl(0, 0%, 100%)",
        countUp: "hsl(163, 72%, 41%)",
        countDown: "hsl(356, 69%, 56%)",
      }
    },
  },
  plugins: [],
}

