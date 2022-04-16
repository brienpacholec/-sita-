module.exports = {
  siteMetadata: {
    title: "Southtowns Invitiational Track Association",
    author: "Brien Pacholec",
    description: "",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
