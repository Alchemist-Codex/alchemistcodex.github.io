import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import { createAppAuth } from '@octokit/auth-app';
import { Octokit } from '@octokit/rest';
import styles from '../styles/GithubPage.module.css';

const GithubPage = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = createAppAuth({
          appId: import.meta.env.VITE_GITHUB_APP_ID,
          privateKey: import.meta.env.VITE_GITHUB_PRIVATE_KEY.replace(/\\n/g, '\n'),
          installationId: import.meta.env.VITE_GITHUB_INSTALLATION_ID,
        });

        const { token } = await auth({ type: 'installation' });
        
        const octokit = new Octokit({
          auth: token,
        });

        // Fetch organization data
        const { data: orgData } = await octokit.rest.orgs.get({
          org: import.meta.env.VITE_GITHUB_ORG_NAME,
        });
        setUser(orgData);

        // Fetch repositories
        const { data: repoData } = await octokit.rest.repos.listForOrg({
          org: import.meta.env.VITE_GITHUB_ORG_NAME,
          per_page: 100,
          sort: 'updated',
        });

        const sortedRepos = repoData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(sortedRepos);
        setError(null);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={import.meta.env.VITE_GITHUB_ORG_NAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export default GithubPage;
