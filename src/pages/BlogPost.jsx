import { useParams, useNavigate } from 'react-router-dom';
import { getPostById } from '../data/blog-posts';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/BlogPost.module.css';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(parseInt(id));

  if (!post) {
    navigate('/404');
    return null;
  }

  return (
    <div className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <div className={styles.metadata}>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
} 