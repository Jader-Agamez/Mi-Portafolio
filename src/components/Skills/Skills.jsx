import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa'
import styles from './Skills.module.css'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  ]

  const duplicatedSkills = [...skills, ...skills]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <span className={styles.badge}>Stack Tecnológico</span>
        <h2 className={styles.sectionTitle}>Herramientas que Domino</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
