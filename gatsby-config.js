const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'CSS Generator by AlphaCodeHub',
    description: 'Generate CSS (+ HTML) code with simple UI, by AlphaCode',
    keywords: 'css, css-generator, react, gatsby, bulma',
    author: 'Shahroz Shahid',
    siteUrl: 'https://css-generator.netlify.app',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CSS Generator by AlphaCode',
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
      resolve: 'gatsby-plugin-root-import',
      options: {
        z: path.join(__dirname, 'src'),
      },
    },
  ],
};
