import { useState, useEffect } from "react";
import "../formats/Projects.css";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  media: string;
}

function displayProject(project: Project) {
  return (
    <div key={project.id} className='projects__item'>
      <h2 className='projects__item-title'>
        {project.title || `Untitled Project ${project.id}`}
      </h2>
      <img src={project.media} alt={""} className='projects__item-media' />
      <p className='projects__item-description'>
        {project.description || "No description available."}
      </p>
      {(project.link && (
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='projects__item-link'
        >
          View Project
        </a>
      )) || <p>no link available</p>}
    </div>
  );
}
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hideProjects, setHideProjects] = useState(true);
  useEffect(() => {
    // Fetch projects data from an API or a local file
    fetch("/src/data/projects.csv")
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").slice(1); // Skip the header row
        const projectsData = rows.map((row) => {
          const [id, title, description, link, media] = row.split(",");
          return { id, title, description, link, media };
        });
        setProjects(projectsData);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <div className='projects' id='projects'>
        <h1 className='projects__title'>Projects</h1>
        <p className='projects__subtitle'>A showcase projects that I've work</p>
        <section className='projects__block'>
          {hideProjects &&
            projects
              .filter((project) => parseInt(project.id) < 5)
              .map((project) => displayProject(project))}
          {!hideProjects && projects.map((project) => displayProject(project))}
        </section>
        <button
          className='projects__toggle'
          onClick={() => setHideProjects(!hideProjects)}
        >
          {hideProjects ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
}
