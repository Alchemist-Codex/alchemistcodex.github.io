import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Titlebar from '../components/Titlebar'
import Sidebar from '../components/Sidebar'
import Explorer from '../components/Explorer'
import Bottombar from '../components/Bottombar'
import Tabsbar from './Tabsbar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const location = useLocation()
  
  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [location.pathname])

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
