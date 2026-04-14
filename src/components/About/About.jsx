import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>

          <div className={styles.leftCol}>
            <span className={styles.badge}>Trayectoria</span>
            <h2>Comprometido con la excelencia técnica.</h2>
            <p>
              Mi enfoque se centra en la intersección entre la funcionalidad
              robusta y la estética minimalista. Creo que el gran software no
              solo debe funcionar, sino también sentirse intuitivo y fluido.
            </p>
            <p>
              Como desarrollador junior, dedico mi tiempo a perfeccionar el uso
              de Clean Code y arquitecturas modernas que permitan la
              escalabilidad y mantenibilidad de cada proyecto.
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.featureCard}>
              <FaCode className={styles.featureIcon} />
              <h3>Código Limpio</h3>
              <p>Escritura de código semántico e intuitivo siguiendo las mejores prácticas de la industria.</p>
            </div>

            <div className={styles.featureCard}>
              <FaLaptopCode className={styles.featureIcon} />
              <h3>Diseño Responsive</h3>
              <p>Interfaces fluidas que se adaptan perfectamente a cualquier tamaño de pantalla.</p>
            </div>

            <div className={styles.featureCard}>
              <FaRocket className={styles.featureIcon} />
              <h3>Aprendizaje Continuo</h3>
              <p>Explorando constantemente nuevas tecnologías para ofrecer soluciones innovadoras.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
