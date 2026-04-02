import { FaEnvelope, FaGithub, FaWhatsapp, FaFileAlt } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Contáctame</h2>
        
        <div className={styles.contactGrid}>
          <a 
            href="https://wa.me/3205243841" 
            className={`${styles.contactCard} ${styles.whatsapp}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={styles.cardIcon} />
            <span className={styles.cardText}>Contactar</span>
          </a>

          <a 
            href="https://mail.google.com/mail/?view=cm&to=jaderandresagamezmurillo@gmail.com"
            className={`${styles.contactCard} ${styles.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className={styles.cardIcon} />
            <span className={styles.cardText}>Correo</span>
          </a>

          <a 
            href="/Currículum Vitae CV Jader Andres Agamez Murillo.pdf"
            download="HojaDeVida-JaderAgamez.pdf" 
            className={`${styles.contactCard} ${styles.cv}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFileAlt className={styles.cardIcon} />
            <span className={styles.cardText}>Hoja de Vida</span>
          </a>

          <a 
            href="https://github.com/Jader-Agamez" 
            className={`${styles.contactCard} ${styles.github}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.cardIcon} />
            <span className={styles.cardText}>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
