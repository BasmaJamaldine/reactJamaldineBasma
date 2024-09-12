
/** @type {import(tailwindcss).Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'tran': 'transform transition duration-600 ease-in-out ',
      }
    },
  },
  plugins: [],
}


