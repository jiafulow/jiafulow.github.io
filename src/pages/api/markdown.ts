import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/config/site';

export async function GET({ request }: APIContext) {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  
  if (!slug) {
    return new Response('Missing slug parameter', { status: 400 });
  }

  const blog = await getCollection('blog');
  const post = blog.find(p => p.id.replace('.md', '') === slug);

  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  // Create markdown-formatted content
  const markdown = `---
title: ${post.data.title}
author: ${site.author}
published: ${post.data.pubDate.toISOString()}
updated: ${post.data.updatedDate?.toISOString() || post.data.pubDate.toISOString()}
category: ${post.data.category}
tags: ${(post.data.tags || []).join(', ')}
url: ${site.url}/blog/${slug}/
license: CC-BY-4.0
---

# ${post.data.title}

${post.data.description}

**Category:** ${post.data.category}  
**Tags:** ${(post.data.tags || []).join(', ')}  
**Published:** ${post.data.pubDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

---

${post.body}

---

**Source:** Max Bytefield  
**URL:** ${site.url}/blog/${slug}/  
**License:** CC-BY-4.0 - Attribution Required
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
