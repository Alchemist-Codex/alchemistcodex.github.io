import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path, isActive }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const active = currentPath === path || isActive;

  return (
    <Link
      to={path}
      className={`${styles.tab} ${active ? styles.active : ''}`}
    >
      <div className={styles.tabContent}>
        {icon && (
          <img
            src={icon}
            alt={filename}
            className={styles.icon}
            width={18}
            height={18}
          />
        )}
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
