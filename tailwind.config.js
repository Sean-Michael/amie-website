/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.hbs', // Include all Handlebars templates
    './public/js/**/*.js',  // Include JavaScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

