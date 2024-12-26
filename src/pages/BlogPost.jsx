import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import styles from '../styles/BlogPost.module.css';

const BlogPost = () => {
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/content/blog/${category}/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        setPost(text);
      });
  }, [category, slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <MarkdownRenderer content={post} />
    </div>
  );
};

export default BlogPost; 