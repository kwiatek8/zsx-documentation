import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ZSX Documentation',
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,

			},
			social: {
				github: 'https://github.com/it-zeusx',
				discord: 'https://discord.gg/kEWG9fVVgh'
			},
			lastUpdated: true,
			pagination: true,
			titleDelimiter: "|",
			credits: true,
			customCss: [
				// Path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			  },

			defaultLocale: 'root', // Set the default locale to 'root'
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
				},
				pl: {
					label: 'Polski',
				},
			},
			
			sidebar: [

				{label: 'Home', link: '/'},

				{
					label: 'ZSX Multicharacter',
					autogenerate: { directory: 'multicharacter' },
					collapsed: true,
				},

				{
					label: 'User Interface (UI) V1',
					autogenerate: { directory: 'ui-v1' },
					collapsed: true,
				},
				{
					label: 'User Interface (UI) V2',
					autogenerate: { directory: 'ui-v2' },
					collapsed: true,
				},
				{
					label: 'Dealership',
					autogenerate: { directory: 'dealership' },
					collapsed: true,
				},
			],
		}),
	],
});
