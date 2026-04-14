import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <span className={styles.footerLogo}>Jader Agamez</span>

          <p className={styles.footerCopy}>
            © {currentYear} Jader Agamez. Built with precision.
          </p>

          <div className={styles.socialLinks}>
            <a href="https://github.com/Jader-Agamez" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jader-agamez-79ba94278/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaXTwitter /> Twitter
            </a>
            <a href="https://www.instagram.com/jaderagamezm/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram /> INSTA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
