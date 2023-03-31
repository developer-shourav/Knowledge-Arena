/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e288e1",

          secondary: "#dd2abf",

          accent: "#075b93",

          neutral: "#2A2938",

          "base-100": "#FCFCFD",

          info: "#77B4DA",

          success: "#1E8F5A",

          warning: "#EBB447",

          error: "#FB635B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
