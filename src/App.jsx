import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Head from './components/Head';
import HomePage from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Articles from './pages/articles';
import Github from './pages/github';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Head title="Alchemist Codex - Visual Studio Code" />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/github" element={<Github />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;