import fs from 'fs';
import path from 'path';

export const generateArticlesList = () => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const publicBlogDir = path.join(process.cwd(), 'public/content/blog');
  const categories = fs.readdirSync(blogDir);
  
  // Ensure public blog directory exists
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
  }

  const articles = categories.flatMap(category => {
    const categoryPath = path.join(blogDir, category);
    const publicCategoryPath = path.join(publicBlogDir, category);
    
    // Create category directory in public if it doesn't exist
    if (!fs.existsSync(publicCategoryPath)) {
      fs.mkdirSync(publicCategoryPath, { recursive: true });
    }

    const files = fs.readdirSync(categoryPath);
    
    // Copy markdown files to public directory
    files.forEach(filename => {
      const sourcePath = path.join(categoryPath, filename);
      const destPath = path.join(publicCategoryPath, filename);
      fs.copyFileSync(sourcePath, destPath);
    });

    return files.map(filename => {
      return {
        filename,
        category,
        path: `/content/blog/${category}/${filename}`
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