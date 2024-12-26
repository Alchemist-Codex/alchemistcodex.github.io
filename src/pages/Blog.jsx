import FileExplorer from '../components/FileExplorer';
import { blogStructure, getAllPosts } from '../data/blog-posts';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <FileExplorer structure={blogStructure} />
      <div className={styles.content}>
        <h1>Blog Posts</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <article key={post.id} className={styles.post}>
              <Link to={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className={styles.metadata}>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <div className={styles.tags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 