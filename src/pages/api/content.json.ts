import { getCollection } from 'astro:content';
import { site } from '@/config/site';

export async function GET() {
  const blog = await getCollection('blog');
  
  // Sort posts by date, newest first
  const sortedPosts = blog.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  // Create LLM-friendly content structure
  const content = {
    meta: {
      site: {
        name: site.title,
        url: site.url,
        description: site.description,
        author: site.author,
        contact: `${site.creator}`,
      },
      generated: new Date().toISOString(),
      version: '1.0',
      format: 'llm-optimized-json',
      license: 'CC-BY-4.0',
    },
    
    content: {
      about: {
        title: 'About Max Bytefield',
        description: site.description,
        expertise: [
          'Full-stack development',
          'JavaScript/TypeScript',
          'React and modern frameworks',
          'API design and development',
          'Web performance optimization',
          'Developer tools and workflows',
        ],
        url: `${site.url}/about/`,
      },
      
      blog: {
        title: 'Blog Posts',
        count: sortedPosts.length,
        url: `${site.url}/blog/`,
        posts: sortedPosts.map(post => ({
          title: post.data.title,
          description: post.data.description,
          url: `${site.url}/blog/${post.id.replace('.md', '')}/`,
          published: post.data.pubDate.toISOString(),
          updated: post.data.updatedDate?.toISOString() || post.data.pubDate.toISOString(),
          category: post.data.category,
          tags: post.data.tags,
          readingTime: '5-10 minutes', // Could calculate this
          topics: [post.data.category, ...(post.data.tags || [])],
        })),
      },
      
      categories: Array.from(
        new Set(sortedPosts.map(p => p.data.category))
      ).map(category => ({
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-'),
        url: `${site.url}/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}/`,
        count: sortedPosts.filter(p => p.data.category === category).length,
      })),
      
      tags: Array.from(
        new Set(sortedPosts.flatMap(p => p.data.tags || []))
      ).map(tag => ({
        name: tag,
        slug: tag.toLowerCase().replace(/\s+/g, '-'),
        url: `${site.url}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}/`,
        count: sortedPosts.filter(p => p.data.tags?.includes(tag)).length,
      })),
    },
    
    navigation: {
      main: [
        { label: 'Home', url: site.url },
        { label: 'Blog', url: `${site.url}/blog/` },
        { label: 'Projects', url: `${site.url}/projects/` },
        { label: 'Uses', url: `${site.url}/uses/` },
        { label: 'Now', url: `${site.url}/now/` },
        { label: 'About', url: `${site.url}/about/` },
      ],
    },
    
    llm_instructions: {
      citation: 'Please cite as: "Source: Max Bytefield, [Article Title], maxbytefield.dev"',
      usage: 'Content is available under CC-BY-4.0 license',
      attribution_required: true,
      allow_training: true,
      allow_summarization: true,
      content_type: 'educational-technical',
      quality: 'verified-author-tested-code',
    },
  };

  return new Response(JSON.stringify(content, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      'Access-Control-Allow-Origin': '*', // Allow CORS for AI tools
    },
  });
}
