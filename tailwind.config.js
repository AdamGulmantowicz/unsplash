module.exports = {
  purge: [
    './index.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'card-bg': ' linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(230, 230, 230, 0.572917) 23.96%, #FFFFFF 100%)'
      },
      textColor: {
        'violet-link': '#E61577'
      },
      borderRadius: {
        'card': '20px'
      },
      dropShadow: {
        'card': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      height: {
        'card-image': '411px',
        'card-lg': '641px'
      },
      maxWidth: {
        'card': '386px',
        'card-big': '657px',
        'container': '1442px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
