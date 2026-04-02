import { FaHeart, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="X">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/jader-agamez-79ba94278/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jaderagamezm/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p>
            Hecho con <FaHeart className={styles.heart} /> por Jader Agamez
          </p>
          <p>&copy; {currentYear} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
