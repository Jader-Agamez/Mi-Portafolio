import styles from './Hero.module.css'
import foto from '../../assets/img/FotoJader.jpeg'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>

          {/* Texto */}
          <div className={styles.heroText}>
            <h1>¡Hola! Soy Jader Agamez</h1>
            <h2>Desarrollador Web Junior</h2>
            <p>
              Apasionado por crear experiencias web increíbles. 
              Especializado en HTML, CSS, JavaScript y React.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#projects" className={styles.btnPrimary}>
                Ver Proyectos
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Contáctame
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className={styles.heroImage}>
            <img src={foto} alt="Jader Agamez" className={styles.profilePhoto} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
