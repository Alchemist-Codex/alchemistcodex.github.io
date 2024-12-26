export const getArticles = async () => {
  try {
    const response = await fetch('/articles.json');
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
}; 