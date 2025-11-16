import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@/config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const blog = await getCollection('blog');
	
	// Sort posts by date, newest first
	const sortedPosts = blog.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	return rss({
		title: site.title,
		description: site.description,
		site: context.site ?? 'http://localhost:3000',
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			link: `/blog/${post.id.replace('.md', '')}/`,
			pubDate: post.data.pubDate,
			...(post.data.updatedDate && {
				customData: `<updated>${post.data.updatedDate.toISOString()}</updated>`,
			}),
			...(post.data.category && {
				categories: [post.data.category, ...(post.data.tags || [])],
			}),
			author: `${site.creator} (${site.author})`,
		})),
		customData: `
			<language>en-us</language>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<atom:link href="${new URL('rss.xml', context.site)}" rel="self" type="application/rss+xml" />
			<generator>Astro v${context.generator}</generator>
		`,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
		}
	});
}
