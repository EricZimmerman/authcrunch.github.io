// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Caddy Security',
  tagline: 'Auth Portal and Authorize Plugins for Caddy v2',
  url: 'https://docs.authcrunch.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'authcrunch',
  projectName: 'authcrunch.github.io',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'G-MVS6492XVX',
        },
        gtag: {
          trackingID: 'G-MVS6492XVX',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/authcrunch/authcrunch.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/authcrunch/authcrunch.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Caddy Security',
        logo: {
          alt: 'Auth Portal Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'authenticate/intro',
            position: 'left',
            label: 'Authenticate',
          },
          {
            type: 'doc',
            docId: 'authorize/intro',
            position: 'left',
            label: 'Authorize',
          },
          {
            type: 'doc',
            docId: 'credentials/intro',
            position: 'left',
            label: 'Credentials',
          },
          {
            type: 'doc',
            docId: 'messaging/intro',
            position: 'left',
            label: 'Messaging',
          },
          {
            type: 'doc',
            docId: 'apps/intro',
            position: 'left',
            label: 'Apps',
          },
          {
            href: 'https://github.com/greenpau/caddy-security/issues/new/choose',
            label: '💡 Ask Questions',
            position: 'right',
            className: 'button button--secondary',
          },
          {
            href: 'https://github.com/greenpau/caddy-security/issues/14#issue-1111599735',
            label: '🚀 Show Support',
            position: 'right',
            className: 'button button--secondary',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Authenticate',
                to: 'docs/authenticate/intro',
              },
              {
                label: 'Authorize',
                to: 'docs/authorize/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Caddy Community',
                href: 'https://caddy.community',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/GreenbergTech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/authcrunch/authcrunch.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Paul Greenberg @greenpau.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'BH4D9OD16A',
        apiKey: '1245fb17ae1ec196b3cbd810e20cf9f0',
        indexName: 'authcrunch',
      },
    }),
};

module.exports = config;
