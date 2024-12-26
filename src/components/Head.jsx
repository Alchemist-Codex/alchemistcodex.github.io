import { Helmet } from 'react-helmet-async';

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Alchemist Codex's Blog" />
      <meta name="keywords" content="portfolio, javascript, developer" />
    </Helmet>
  );
};

export default Head;
