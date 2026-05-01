import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>

          <div className={styles.leftCol}>
            <span className={styles.badge}>Trayectoria</span>
            <h2>Descripción general.</h2>
            <p>
              Desarrollador junior full stack enfocado en crear experiencias digitales donde la eficiencia técnica y el diseño minimalista convergen. 
              Mi práctica diaria se centra en el dominio de JavaScript y la gestión de datos con MySQL,
              bajo una mentalidad de arquitecturas modernas y mantenibles.
            </p>
            <p>
              Me apasiona la escalabilidad, 
              por lo que actualmente exploro servicios de Cloud Computing (AWS) para asegurar que mis proyectos no solo se vean bien, 
              sino que respondan con potencia y fluidez en el mundo real.
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
