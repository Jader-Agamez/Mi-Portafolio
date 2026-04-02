import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Soy un Desarrollador Fullstack Junior con un año de experiencia enfocado en el ecosistema de JavaScript. 
              Actualmente, dedico mi energía a perfeccionar el uso de React y herramientas modernas de frontend para construir interfaces rápidas y escalables.
            </p>
            <p>
             Mi enfoque va más allá de escribir código; 
             busco entender el problema del negocio para ofrecer soluciones técnicas sólidas. 
             Me motiva trabajar en entornos colaborativos donde pueda aportar mi capacidad analítica y seguir creciendo profesionalmente.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <FaCode className={styles.icon} />
              <h3>Código Limpio</h3>
              <p>Escribo código organizado y fácil de mantener</p>
            </div>

            <div className={styles.feature}>
              <FaLaptopCode className={styles.icon} />
              <h3>Responsive Design</h3>
              <p>Diseños que se adaptan a cualquier dispositivo</p>
            </div>

            <div className={styles.feature}>
              <FaRocket className={styles.icon} />
              <h3>Aprendizaje Continuo</h3>
              <p>Siempre aprendiendo nuevas tecnologías</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
