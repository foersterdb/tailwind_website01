module.exports = {
    purge: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.html',
    ],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          'assistant': ['Assistant', 'Helvetica', 'Arial', 'sans-serif'],
          'lora': ['Lora', 'Georgia', 'serif']
        }
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  