import { Link, useLocation } from 'react-router-dom';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/articles',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                location.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link to={path}>
              <Icon
                fill={
                  location.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
