const siteMetadata = {
  name: 'Gatsby Strict ',
  description:
    'Demo for a Gatsby starter with strict linting and auto-formatting rules.',
  contact: {
    email: 'balint.kiraly@protonmail.com',
    github: 'balintkiraly',
    linkedin: 'kiralybalint',
    facebook: 'balintkiralyfb',
    location: 'Budapest, Hungary',
  },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `repositories`,
        path: `${__dirname}/src/content/repositories`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: '912595224',
        enableOnDevMode: true,
      },
    },
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
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
        portalZIndex: 40,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
