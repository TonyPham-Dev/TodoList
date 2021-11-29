module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('https://thuthuatnhanh.com/wp-content/uploads/2020/02/hinh-nen-vu-tru-tuyet-dep.jpg')",
       
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
