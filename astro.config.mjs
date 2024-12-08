import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ZSX Documentation',
			logo: {
				src: './src/assets/zsx.webp',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/it-zeusx',
			},

			defaultLocale: 'en',

			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				de: {
					label: 'Deutsch',
				},
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'ZSX Multicharacter',
					autogenerate: { directory: 'multicharacter' },
				},

				{
					label: 'User Interface (UI) V1',
					autogenerate: { directory: 'ui-v1' },
				},
				{
					label: 'User Interface (UI) V2',
					autogenerate: { directory: 'ui-v2' },
				},
				{
					label: 'Dealership',
					autogenerate: { directory: 'dealership' },
				},
			],
		}),
	],
});
