const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'CSS Generator',
    description:
      'Generate CSS (+ HTML) code with simple UI, created by Gatsby React framework.',
    keywords: 'css, css-generator, react, gatsby, bulma',
    author: 'Zinglecode',
    siteUrl: 'https://css-generator.netlify.app',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CSS Generator',
        short_name: 'CSS Gen',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          'z': path.resolve(__dirname, 'src')
        },
        extensions: []
      }
    }
  ],
};
