const siteMetadata = {
  name: 'Gatsby Strict ',
  description:
    'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
  email: 'balint.kiraly@protonmail.com',
  githubUsername: 'balintkiraly',
};

module.exports = {
  pathPrefix: '',
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `educations`,
        path: `${__dirname}/src/content/educations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiences`,
        path: `${__dirname}/src/content/experiences`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: '#663399',
        background_color: 'white',
        icon: 'src/assets/favicon.png',
        lang: 'en-US',
        start_url: '/',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
