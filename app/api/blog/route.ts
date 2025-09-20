import { NextRequest, NextResponse } from 'next/server';
import blogPosts from '../../../data/blog_posts.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const type = searchParams.get('type');
    const author = searchParams.get('author');
    const tag = searchParams.get('tag');
    
    // Filter posts
    let filteredPosts = blogPosts.filter(post => post.status === 'published');
    
    if (type) {
      filteredPosts = filteredPosts.filter(post => post.type === type);
    }
    
    if (author) {
      filteredPosts = filteredPosts.filter(post => 
        post.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    
    if (tag) {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );
    }
    
    // Sort by published date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
    
    // Paginate
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    // Remove full body content from list view
    const postsForList = paginatedPosts.map(post => {
      const { body_md, ...postWithoutBody } = post;
      return {
        ...postWithoutBody,
        excerpt: post.ai_excerpt || post.summary
      };
    });
    
    return NextResponse.json({
      posts: postsForList,
      pagination: {
        current_page: page,
        total_pages: Math.ceil(filteredPosts.length / limit),
        total_posts: filteredPosts.length,
        per_page: limit,
        has_next_page: endIndex < filteredPosts.length,
        has_prev_page: page > 1
      },
      filters: {
        type,
        author,
        tag
      }
    });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}