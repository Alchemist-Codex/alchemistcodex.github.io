import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getArticles } from '../data/articles';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) return <div>Loading articles...</div>;

  return (
    <>
      <h3>Markdown Files</h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard 
            key={article.path} 
            article={article} 
          />
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
