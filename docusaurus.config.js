module.exports = {
  title: 'Diahook Docs',
  tagline: 'Webhooks as a service',
  url: 'https://www.diahook.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Diahook',
      logo: {
        alt: 'Diahook logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://www.diahook.com',
          label: 'Website',
          position: 'left',
        },
        {
          to: 'https://api.diahook.com/docs',
          label: 'API Specifications',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © Diahook Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};