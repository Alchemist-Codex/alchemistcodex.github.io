import React, { useEffect } from 'react';
import styles from '../styles/ThemeInfo.module.css';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const setTheme = (themeName) => {
    try {
      document.documentElement.setAttribute('data-theme', themeName);
      localStorage.setItem('theme', themeName);
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  };

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={() => setTheme(theme)}>Set Color Theme</button>
      </div>
    </div>
  );
};

export default ThemeInfo;
