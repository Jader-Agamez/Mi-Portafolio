import styles from './Hero.module.css'
import foto from '../../assets/img/FotoJader.jpeg'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <span className={styles.badge}>Desarrollador de Software</span>
            <h1>¡Hola! Soy <span>Jader Agamez</span></h1>
            <p>
              Desarrollador Web Junior apasionado por construir
              experiencias digitales impecables a través de
              código limpio y diseño funcional.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#projects" className={styles.btnPrimary}>Ver Proyectos</a>
              <a href="#contact" className={styles.btnSecondary}>Contáctame</a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={foto} alt="Jader Agamez" className={styles.profilePhoto} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
