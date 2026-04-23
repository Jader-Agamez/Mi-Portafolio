import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Projects.module.css'
import imgFrontend from '../../assets/img/IMGFrontend.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'App E-commerce',
      description: 'Una aplicación web de comercio electrónico desarrollada con React y Node.js.',
      tech: ['React', 'CSS', 'JavaScript','MySQL'],
      github: 'https://github.com/Jader-Agamez/Backend-E-commerce',
      demo: 'https://github.com/Jader-Agamez?tab=repositories',
      icono: "🛒"
    },
    
    {
      id: 2,
      title: 'App Interactiva de salud',
      description: 'Una aplicación web interactiva que permite a los usuarios encontrar hospitales según la EPS, especialista y nivel de complejidad del usuario.',
      tech: ['React', 'CSS', 'JavaScript','HTML', 'MySQL'],
      github: 'https://github.com/Jader-Agamez/Backend-App-salud',
      demo: 'https://github.com/Jader-Agamez?tab=repositories',
      image: imgFrontend
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <span className={styles.badge}>Portfolio</span>
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>

        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.projectContent}>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectLinks}>
                  <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
