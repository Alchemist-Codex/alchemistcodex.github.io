export const getProjects = () => {
    return [
      {
        id: 1,
        name: "Project One",
        description: "Description of project one",
        image: "/project1.png",
        tags: ["React", "Node.js", "MongoDB"],
        source_code: "https://github.com/yourusername/project1",
        demo: "https://project1.demo.com"
      },
      {
        id: 2,
        name: "Project Two",
        description: "Description of project two",
        image: "/project2.png",
        tags: ["React", "Firebase", "Tailwind CSS"],
        source_code: "https://github.com/yourusername/project2",
        demo: "https://project2.demo.com"
      },
      // Add more projects as needed
    ];
  }; 