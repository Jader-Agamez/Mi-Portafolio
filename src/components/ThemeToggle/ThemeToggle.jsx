import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

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
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
