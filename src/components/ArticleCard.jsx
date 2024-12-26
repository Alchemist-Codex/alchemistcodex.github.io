import { Link } from 'react-router-dom';
import EyeIcon from './icons/EyeIcon';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  // Check if it's a markdown file
  const isMarkdown = article.filename && article.filename.endsWith('.md');
  
  const CardWrapper = ({ children }) => {
    if (isMarkdown) {
      return (
        <Link 
          to={`/blog/${article.category}/${article.filename.replace('.md', '')}`} 
          className={styles.container}
        >
          {children}
        </Link>
      );
    }
    return (
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.container}
      >
        {children}
      </a>
    );
  };

  return (
    <CardWrapper>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {isMarkdown ? article.filename : article.title}
        </h3>
        <p>{article.description || 'Click to read more'}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} />
          {article.category || 'Blog'}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ArticleCard;
