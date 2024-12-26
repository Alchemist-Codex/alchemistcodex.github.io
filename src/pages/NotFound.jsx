import { Link } from 'react-router-dom';
import styles from '../styles/404.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">
        <button className={styles.button}>Go Home</button>
      </Link>
    </div>
  );
} 