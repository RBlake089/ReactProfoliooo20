import "../App.css"


const projects = [
  {
    image: "image1", //example
    title: 'Project 1',
    repoLink: 'https://github.com/user/project1'
  },
  {
    image: 'project2.jpg',
    title: 'Project 2',
    repoLink: 'https://github.com/user/project2'
  },
  // Add more project objects as needed
];
export default function Projects() {
  return (
    <div className="projectRapper">
      <h1>Cool</h1>
      <div className="project-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
