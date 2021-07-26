module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'current',
        parratgreen: {
          100: '#d3f8d3',
          500: '#1aff1a',
          900: '#189a18',
        },
        gray77:{
          100: '#cccccc',
          500:'#C4C4C4',
          900:'#262626',
        },
        gray78:{
          100:'#ECECEC',
          500:'#a8b0b7',
          600:'#68737d',
          900:'#5d676f',
        },
        purple2:
        {
         100 :'#1c1643',
         500:'#1d1841',
         900:'#080713',
        }
      },
      backgroundImage: theme => ({
        'rect-img' :"url('../assets/images/rect.png')",
        'contact-img' :"url('../assets/images/contact.png')",
      }),
      // backgroundImage: theme => ({
      //   'contact-img' :"url('../assets/images/contact.png')",
      // }),
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.0)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: ' inset 0 2px 4px 0 #cc99ff',
        none: 'none',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
