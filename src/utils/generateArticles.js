import fs from 'fs';
import path from 'path';

export const generateArticlesList = () => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const categories = fs.readdirSync(blogDir);
  
  const articles = categories.flatMap(category => {
    const categoryPath = path.join(blogDir, category);
    const files = fs.readdirSync(categoryPath);
    
    return files.map(filename => {
      return {
        filename,
        category,
        path: `/blog/${category}/${filename}`
      };
    });
  });

  // Write to articles.json
  fs.writeFileSync(
    path.join(process.cwd(), 'public/articles.json'),
    JSON.stringify(articles, null, 2)
  );

  return articles;
}; 