// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "TechVerse",
	tagline:
		"TechVerse Development is an organisation dedicated to developing new, useful & exciting projects whilst also maintaining a secure workspace.",
	url: "https://www.techversedev.xyz",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "TechVerse-Development", // Usually your GitHub org/user name.
	projectName: "", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/TechVerse-Development/Documentation/tree/main",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/TechVerse-Development/Documentation/tree/main",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "TechVerse",
				logo: {
					alt: "TechVerse Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "API",
					},
					{
						href: "https://github.com/TechVerse-Development",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "API",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://techversedev.xyz/r/discord",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/TechVerse4/",
							},
						],
					},
					{
							title: "Other",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/TechVerse-Development",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} TechVerse.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
