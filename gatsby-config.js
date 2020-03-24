module.exports = {
  siteMetadata: {
    siteUrl: `https://wangfan.site`,
    title: `清白之年`,
    description: `此时的庸忙 诺诺慌张<br/> 可否已成你的日常`,
    keywords: [`清白之年`, `Zi莱卷`, `博客`, `blog`, `iwfan`],
    author: {
      name: `Zi莱卷`,
      bio: ``,
      email: `i.wangfancn@gmail.com`,
    },
    social: {
      twitter: ``,
      github: `iwfan`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-115797852-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
