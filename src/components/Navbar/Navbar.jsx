import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (!newTheme) {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>Jader Agamez</a>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Sobre mi</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          <li>
            <a
              href="/Currículum Jader Agamez Murillo.pdf"
              download="HojaDeVida-JaderAgamez.pdf"
              className={styles.resumeBtn}
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
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
