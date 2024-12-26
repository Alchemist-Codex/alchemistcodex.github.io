import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/FileExplorer.module.css';

export default function FileExplorer({ structure }) {
  const [expandedFolders, setExpandedFolders] = useState(new Set(['root']));
  const location = useLocation();

  const toggleFolder = (folderName) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const renderItem = (item, path = '') => {
    const currentPath = `${path}/${item.name}`;

    if (item.type === 'folder') {
      return (
        <div key={currentPath}>
          <div 
            className={`${styles.folder} ${expandedFolders.has(item.name) ? styles.expanded : ''}`}
            onClick={() => toggleFolder(item.name)}
          >
            <span className={styles.icon}>📁</span>
            {item.name}
          </div>
          {expandedFolders.has(item.name) && (
            <div className={styles.children}>
              {item.children.map(child => renderItem(child, currentPath))}
            </div>
          )}
        </div>
      );
    } else {
      const isActive = location.pathname === `/blog/${item.id}`;
      return (
        <Link 
          key={currentPath}
          to={`/blog/${item.id}`}
          className={`${styles.file} ${isActive ? styles.active : ''}`}
        >
          <span className={styles.icon}>📄</span>
          {item.name}
        </Link>
      );
    }
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.header}>EXPLORER</div>
      <div className={styles.content}>
        {renderItem(structure)}
      </div>
    </div>
  );
} 