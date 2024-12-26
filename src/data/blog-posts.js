export const blogStructure = {
  name: 'root',
  type: 'folder',
  children: [
    {
      name: 'JavaScript',
      type: 'folder',
      children: [
        {
          id: 1,
          name: 'async-await.md',
          type: 'file',
          title: "Understanding Async/Await",
          description: "Deep dive into async/await in JavaScript",
          date: "2024-01-20",
          tags: ["javascript", "async"],
          content: `# Understanding Async/Await...`
        }
      ]
    },
    {
      name: 'React',
      type: 'folder',
      children: [
        {
          id: 2,
          name: 'hooks-intro.md',
          type: 'file',
          title: "Introduction to React Hooks",
          description: "Learn the basics of React Hooks",
          date: "2024-01-21",
          tags: ["react", "hooks"],
          content: `# Introduction to React Hooks...`
        }
      ]
    }
  ]
};

export const getAllPosts = () => {
  const posts = [];
  
  const extractPosts = (structure) => {
    if (structure.type === 'file') {
      posts.push(structure);
    } else if (structure.children) {
      structure.children.forEach(extractPosts);
    }
  };
  
  extractPosts(blogStructure);
  return posts;
};

export const getPostById = (id) => {
  const posts = getAllPosts();
  return posts.find(post => post.id === id);
}; 