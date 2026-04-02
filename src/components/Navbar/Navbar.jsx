import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          Mi Portafolio
        </a>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          <li>
            <button className={styles.themeBtn} onClick={toggleTheme}>
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
