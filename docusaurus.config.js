module.exports = {
  title: "Polygon Technology | Documentation",
  tagline: "Welcome to Polygon developer documentation",
  url: "https://docs.polygon.technology/",
  baseUrl: "/",
  favicon: "img/polygon/polygon-logo.svg",
  organizationName: "Polygon Technology",
  projectName: "matic-docs",
  customFields: {
    description: "Build your next blockchain app on Polygon.",
  },
  onBrokenLinks: 'log',
  themeConfig: {
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Develop',
              to: '/docs/develop/getting-started',
            },
            {
              label: 'Docs GitHub',
              href: 'https://github.com/maticnetwork/matic-docs',
            },
            {
              label: 'Support',
              href: 'https://forum.polygon.technology/',
            },
            {
              label: 'FAQs',
              to: '/docs/faq/technical-faqs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/polygon',
            },
            {
              href: "https://forum.polygon.technology/",
              label: "Forum",
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/0xPolygon',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/0xPolygon/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/polygonofficial',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maticnetwork',
            },
          ],
        },
        {
          title: "Developers",
          items: [
          {
              label: "Get Started",
              href: "https://polygon.technology/get-started/"
          },
          {
              label: "Hackathons",
              href: "https://www.polygongrantshackathon.com/"
          },
          {
              label: "Bug Bounty",
              href: "https://immunefi.com/bounty/polygon/"
          },
          {
            label: "DApps",
            href: "https://awesomepolygon.com/"
          },
          {
            label: "Use Polygon",
            href: "https://wallet.polygon.technology/"
          },
      ]
      },
      {
        title: "Company",
        items: [
        {
            label: "Polygon Technology",
            href: "https://polygon.technology/"
        },
        {
            label: "Blogs",
            href: "https://blog.polygon.technology/"
        },
        {
          label: "Brand Kit",
          href: "https://polygon.technology/brand-resources/"
      },
        {
            label: "Careers",
            href: "https://polygon.technology/careers/"
        },
        {
          label: "Contact",
          href: "hhttps://polygon.technology/contact-us/"
        },
        {
          label: "About Us",
          href: "https://polygon.technology/about/"
        },
    ]
    },
      ],
      logo: {
        alt: 'Polygon Logo',
        src: 'img/polygon/polygon-logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Polygon technology`, 
    },
    announcementBar: {
      id: "support_us",
      content:
        '🎉 Polygon Mainnet <a target="_blank" rel="noopener noreferrer" href="/docs/develop/network-details/network"/>is open for developers 🎉! ',
      backgroundColor: "#8247e5", // Defaults to `#fff`
      textColor: "#fff", // Defaults to `#000`
    },
    // googleAnalytics: {
    //   trackingID: "UA-141789564-1",
    //   anonymizeIP: true,
    // },
    image: "https://matic.network/banners/matic-network-16x9.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
    },
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: "c3ad4eabc5af314ea3ed331efbe0a5c4",
      indexName: "matic_developer",
      algoliaOptions: {},
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "/img/polygon/polygon-logo.webp",
        srcDark: "/img/polygon/polygon-logo-inverted.png",
        // href: 'https://docs.polygon.technology/', // default to siteConfig.baseUrl
        target: "_self", // by default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one)
      },
      items: [
        {
          to: "docs/faq/technical-faqs",
          label: "FAQ",
          position: "right",
          activeBasePath: "docs/faq",
        },
        {
          label: "Support",
          href: "https://forum.matic.network",
          position: "right",
        },
        {
          href: "https://github.com/maticnetwork",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/maticnetwork/matic-docs/tree/master/",
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      // "@docuaurus/plugin-content-pages",
      // {
      //   path: "src/pages",
      //   routeBasePath: "",
      //   include: ["**/*.{js,jsx}"],
      // },
      // "@docusaurus/plugin-google-analytics",
      // "@docusaurus/plugin-sitemap",
      // {
      //   cacheTime: 600 * 1000, // 600 sec - cache purge period
      //   changefreq: "weekly",
      //   priority: 0.5,
      // },
    ],
  ],
};
