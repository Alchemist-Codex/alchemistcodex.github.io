import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getArticles } from '../data/articles';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Load articles from local data
    const articlesData = getArticles();
    setArticles(articlesData);
  }, []);

  return (
    <>
      <h3>Recent Blog Posts</h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
