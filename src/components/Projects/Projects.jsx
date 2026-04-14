import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      description: 'Un sistema integral de control de acceso y gestión de usuarios diseñado para entornos empresariales.',
      tech: ['Angular', 'TypeScript', 'SQL'],
      github: 'https://github.com/Jader-Agamez/Autoriza',
      demo: 'https://tuproyecto1.com',
      icon: '🏢'
    },
    {
      id: 2,
      title: 'App Interactiva de Tareas',
      description: 'Aplicación web interactiva enfocada en la productividad personal con sincronización en la nube.',
      tech: ['React', 'CSS', 'JavaScript', 'PostgreSQL'],
      github: 'https://github.com/Jader-Agamez/diversaseguros',
      demo: 'https://diversaseguros.com.co/',
      icon: '✅'
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
              <div className={styles.projectImage}>{project.icon}</div>

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
