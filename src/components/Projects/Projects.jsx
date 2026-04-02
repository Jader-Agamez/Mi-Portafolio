import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto. un sistema integral de control de acceso y gestión de usuarios diseñado.',
      tech: ['Angular', 'TypeScript', 'PostgreSQL' ],
      github: 'https://github.com/Jader-Agamez/Autoriza',
      demo: 'https://tuproyecto1.com',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Aplicación web interactiva que demuestra tus habilidades en React y diseño responsive.',
      tech: ['React', 'CSS', 'JavaScript', 'PostgreSQL', ],
      github: 'https://github.com/Jader-Agamez/diversaseguros',
      demo: 'https://diversaseguros.com.co/',
      icon: '⚛️'
    },
   
  ]

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.icon}
              </div>
              
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Código
                  </a>
                  <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
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
