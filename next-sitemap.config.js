/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://hecomputersolutions.in", // Replace with your domain
    generateRobotsTxt: true, // Generate robots.txt file
    generateIndexSitemap: false, // Prevent indexing empty pages
    exclude: [], // Specify any paths you don’t want in the sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };
  
  module.exports = config;
  