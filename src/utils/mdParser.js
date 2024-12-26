import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export const getBlogPosts = () => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const categories = fs.readdirSync(blogDir);
  
  const posts = categories.flatMap(category => {
    const categoryPath = path.join(blogDir, category);
    const files = fs.readdirSync(categoryPath);
    
    return files.map(filename => {
      const filePath = path.join(categoryPath, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);
      
      return {
        slug: filename.replace('.md', ''),
        category,
        frontmatter,
        content
      };
    });
  });
  
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}; 