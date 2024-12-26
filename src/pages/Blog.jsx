import { useState, useEffect } from 'react';
import { getBlogPosts } from '../utils/mdParser';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = getBlogPosts();
    setPosts(allPosts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{post.frontmatter.title}</h2>
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-600 px-2 py-1 rounded text-sm">
                {post.category}
              </span>
              {post.frontmatter.tags.map(tag => (
                <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-4">{post.frontmatter.excerpt}</p>
            <MarkdownRenderer content={post.content} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 