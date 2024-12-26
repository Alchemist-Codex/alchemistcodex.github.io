import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // You can either fetch from an API or use local data
    const projectsData = [
      {
        id: 1,
        name: "Project One",
        description: "Description of project one",
        image: "/project1.png",
        tags: ["React", "Node.js", "MongoDB"],
        source_code: "https://github.com/yourusername/project1",
        demo: "https://project1.demo.com"
      },
      // Add more projects as needed
    ];

    setProjects(projectsData);
  }, []);

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
