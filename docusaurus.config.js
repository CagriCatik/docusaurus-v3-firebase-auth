// docusaurus.config.js
import dotenv from 'dotenv';
import { themes as prismThemes } from 'prism-react-renderer';

// Load environment variables from .env file
dotenv.config();

// Assign Prism themes for code highlighting
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  // Set the URL to your GitHub Pages domain and baseUrl to your repo name
  url: 'https://CagriCatik.github.io',
  baseUrl: '/docusaurus-v3-firebase-auth/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Set your GitHub username and repository name
  organizationName: 'CagriCatik', // GitHub username
  projectName: 'docusaurus-v3-firebase-auth', // Repository name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Include the custom plugin to inject environment variables via DefinePlugin
  plugins: [
    require.resolve('./src/plugins/define-env-plugin'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Adjust the editUrl to point to your GitHub repository's edit page
          editUrl:
            'https://github.com/CagriCatik/docusaurus-v3-firebase-auth/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Adjust the editUrl to point to your GitHub repository's edit page
          editUrl:
            'https://github.com/CagriCatik/docusaurus-v3-firebase-auth/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/CagriCatik/docusaurus-v3-firebase-auth',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

export default config;
