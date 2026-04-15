import { FaEnvelope, FaGithub, FaWhatsapp, FaFileAlt, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className={styles.contact}>
        <div className={styles.contactGrid}>

          {/* Izquierda */}
          <div className={styles.leftCol}>
            <h2>¿Hablamos sobre tu próximo proyecto?</h2>
            <p>
              Estoy disponible para nuevas oportunidades y
              colaboraciones. ¡No dudes en contactarme por
              cualquiera de estos medios!
            </p>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <span>jaderandresagamezmurillo@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaWhatsapp className={styles.infoIcon} />
              <span>+57 320 524 3841</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <span>Colombia</span>
            </div>
          </div>

          {/* Derecha - tarjetas */}
          <div className={styles.rightCol}>
            <a href="/Currículum Jader Agamez Murillo.pdf" download="HojaDeVida-JaderAgamez.pdf" className={`${styles.contactCard} ${styles.cv}`}>
              <FaFileAlt className={styles.cardIcon} />
              <span className={styles.cardText}>Resume</span>
            </a>

            <a href="https://github.com/Jader-Agamez" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.github}`}>
              <FaGithub className={styles.cardIcon} />
              <span className={styles.cardText}>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/jader-agamez-79ba94278/" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.linkedin}`}>
              <FaLinkedin className={styles.cardIcon} />
              <span className={styles.cardText}>LinkedIn</span>
            </a>

            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.twitter}`}>
              <FaXTwitter className={styles.cardIcon} />
              <span className={styles.cardText}>X / Twitter</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
