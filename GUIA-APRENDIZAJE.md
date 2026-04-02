# 📚 GUÍA DE APRENDIZAJE - Entendiendo tu Portafolio React

## 🎯 Conceptos Fundamentales

### ¿Qué es React?

React es una biblioteca de JavaScript que te permite crear interfaces de usuario dividiendo tu aplicación en **componentes reutilizables**.

**Analogía**: Piensa en React como LEGO. Cada pieza (componente) es independiente, pero juntas forman algo increíble.

---

## 🧩 Estructura de un Componente React

### Ejemplo básico:

```jsx
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>¡Hola! Soy un componente</h1>
    </section>
  )
}

export default Hero
```

**Explicación línea por línea:**

1. `import styles from './Hero.module.css'`
   - Importa los estilos CSS específicos de este componente
   - Los estilos están aislados (no afectan otros componentes)

2. `const Hero = () => { ... }`
   - Define un componente funcional llamado "Hero"
   - Es una función que retorna HTML (JSX)

3. `return ( ... )`
   - Retorna el código HTML que se mostrará en pantalla

4. `export default Hero`
   - Exporta el componente para usarlo en otros archivos

---

## 🎨 CSS Modules

### ¿Por qué CSS Modules?

En lugar de CSS normal, usamos CSS Modules para evitar conflictos de nombres.

**CSS Normal (problemático):**
```css
.button { color: red; }
```
Este estilo afectaría TODOS los botones.

**CSS Modules (mejor):**
```css
/* Hero.module.css */
.button { color: red; }
```
```jsx
/* Hero.jsx */
import styles from './Hero.module.css'
<button className={styles.button}>Click</button>
```
Este estilo SOLO afecta al botón del componente Hero.

---

## 🔄 Estado (State) en React

### ¿Qué es el State?

El state es la "memoria" de un componente. Cuando cambia, el componente se actualiza automáticamente.

### Ejemplo del Navbar:

```jsx
import { useState } from 'react'

const Navbar = () => {
  // Declarar state
  const [isOpen, setIsOpen] = useState(false)
  
  // Función para cambiar el state
  const toggleMenu = () => setIsOpen(!isOpen)
  
  return (
    <button onClick={toggleMenu}>
      {isOpen ? 'Cerrar' : 'Abrir'}
    </button>
  )
}
```

**Explicación:**

1. `useState(false)` - Crea una variable de estado con valor inicial `false`
2. `isOpen` - Variable que contiene el valor actual
3. `setIsOpen` - Función para cambiar el valor
4. `toggleMenu` - Cambia entre true/false
5. `{isOpen ? 'Cerrar' : 'Abrir'}` - Operador ternario (if corto)

---

## 📦 Props - Pasar Datos entre Componentes

### ¿Qué son las Props?

Props son como "argumentos" que pasas a un componente.

### Ejemplo: Componente Reutilizable

```jsx
// Componente Button
const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}

// Uso del componente
<Button text="Enviar" color="blue" />
<Button text="Cancelar" color="red" />
```

**Ventaja**: Un solo componente, múltiples usos con diferentes datos.

---

## 🗂️ Estructura del Proyecto Explicada

```
Mi-Portafolio/
│
├── index.html              # Página HTML principal
│   └── <div id="root">     # Aquí React monta la app
│
├── src/
│   ├── main.jsx            # Punto de entrada de React
│   │   └── Monta App en el DOM
│   │
│   ├── App.jsx             # Componente principal
│   │   └── Importa y organiza todos los componentes
│   │
│   ├── index.css           # Estilos globales y variables CSS
│   │
│   └── components/         # Carpeta de componentes
│       ├── Navbar/
│       │   ├── Navbar.jsx          # Lógica del componente
│       │   └── Navbar.module.css   # Estilos del componente
│       │
│       ├── Hero/
│       ├── About/
│       ├── Projects/
│       ├── Skills/
│       ├── Contact/
│       └── Footer/
│
├── package.json            # Dependencias del proyecto
├── vite.config.js          # Configuración de Vite
└── README.md               # Documentación
```

---

## 🔄 Flujo de Datos en tu Portafolio

```
1. index.html
   ↓
2. main.jsx (monta React)
   ↓
3. App.jsx (componente raíz)
   ↓
4. Componentes individuales (Navbar, Hero, About, etc.)
```

---

## 🎯 Cómo Funciona cada Sección

### 1. Navbar (Navegación)

**Características:**
- Fijo en la parte superior (position: fixed)
- Menú hamburguesa en móvil
- Usa state para abrir/cerrar el menú
- Smooth scroll a las secciones

**Conceptos clave:**
```jsx
const [isOpen, setIsOpen] = useState(false)  // State
const toggleMenu = () => setIsOpen(!isOpen)  // Función
<button onClick={toggleMenu}>              // Evento
```

### 2. Hero (Presentación)

**Características:**
- Ocupa toda la pantalla (100vh)
- Gradiente de fondo
- Animaciones CSS (fadeInUp)
- Botones de llamada a la acción

**Conceptos clave:**
```css
animation: fadeInUp 0.8s ease;  /* Animación */
min-height: 100vh;              /* Altura completa */
```

### 3. Projects (Proyectos)

**Características:**
- Grid responsive
- Mapeo de array de proyectos
- Tarjetas con hover effects

**Conceptos clave:**
```jsx
const projects = [...]  // Array de datos

projects.map(project => (  // Iterar sobre el array
  <div key={project.id}>   // Key única para React
    {project.title}
  </div>
))
```

### 4. Contact (Formulario)

**Características:**
- Formulario controlado con state
- Validación HTML5
- Manejo de eventos

**Conceptos clave:**
```jsx
const [formData, setFormData] = useState({...})  // State del form

const handleChange = (e) => {
  setFormData({
    ...formData,                    // Spread operator
    [e.target.name]: e.target.value // Computed property
  })
}

const handleSubmit = (e) => {
  e.preventDefault()  // Prevenir recarga de página
  // Lógica de envío
}
```

---

## 🎨 Variables CSS Personalizadas

En `index.css` definimos variables reutilizables:

```css
:root {
  --primary-color: #2563eb;
  --spacing-md: 2rem;
}

/* Uso */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
}
```

**Ventaja**: Cambias un color en un lugar y se actualiza en todo el sitio.

---

## 📱 Diseño Responsive

### Mobile-First Approach

Diseñamos primero para móvil, luego adaptamos a desktop:

```css
/* Estilos base (móvil) */
.grid {
  grid-template-columns: 1fr;
}

/* Desktop */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Breakpoints Comunes:
- Móvil: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚀 Vite - Build Tool

### ¿Qué hace Vite?

1. **Servidor de desarrollo rápido** - Recarga instantánea
2. **Hot Module Replacement (HMR)** - Actualiza sin recargar
3. **Optimización** - Minifica y optimiza el código
4. **Transpilación** - Convierte JSX a JavaScript

### Comandos:

```bash
npm run dev      # Modo desarrollo (rápido, con HMR)
npm run build    # Modo producción (optimizado)
npm run preview  # Ver build de producción
```

---

## 🔍 Debugging - Encontrar Errores

### Errores Comunes:

1. **"Cannot find module"**
   - Solución: `npm install`

2. **"Unexpected token"**
   - Falta una llave `}` o paréntesis `)`

3. **"X is not defined"**
   - Olvidaste importar algo

4. **Componente no se muestra**
   - Verifica que lo hayas importado en App.jsx
   - Revisa que tenga `export default`

### Herramientas:

- **Console del navegador** (F12) - Ver errores
- **React DevTools** - Inspeccionar componentes
- **Network tab** - Ver peticiones

---

## 📈 Próximos Pasos de Aprendizaje

### Nivel 1 (Actual):
✅ Componentes funcionales
✅ Props y State
✅ CSS Modules
✅ Eventos básicos

### Nivel 2 (Siguiente):
- [ ] useEffect (efectos secundarios)
- [ ] Custom Hooks
- [ ] Context API (estado global)
- [ ] React Router (múltiples páginas)

### Nivel 3 (Avanzado):
- [ ] TypeScript
- [ ] Testing (Jest, React Testing Library)
- [ ] Optimización de rendimiento
- [ ] Server-Side Rendering (Next.js)

---

## 💡 Mejores Prácticas

### 1. Nombres de Componentes
✅ PascalCase: `MyComponent`
❌ camelCase: `myComponent`

### 2. Nombres de Archivos
✅ Igual al componente: `Hero.jsx`
❌ Diferente: `hero-component.jsx`

### 3. Estructura de Carpetas
✅ Un componente por carpeta con sus estilos
❌ Todos los componentes en una carpeta

### 4. Imports
✅ Organizar por tipo:
```jsx
// Librerías externas
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

// Componentes locales
import Navbar from './components/Navbar'

// Estilos
import styles from './App.module.css'
```

### 5. Comentarios
✅ Explica el "por qué", no el "qué"
```jsx
// Cerramos el menú al hacer click para mejor UX en móvil
const closeMenu = () => setIsOpen(false)
```

---

## 🎓 Recursos de Aprendizaje

### Documentación Oficial:
- React: https://react.dev/learn
- Vite: https://vitejs.dev/guide/

### Tutoriales:
- freeCodeCamp: https://www.freecodecamp.org/
- Scrimba React: https://scrimba.com/learn/learnreact
- React Tutorial: https://react-tutorial.app/

### Práctica:
- Frontend Mentor: https://www.frontendmentor.io/
- CodePen: https://codepen.io/
- Ejercicios React: https://react-exercises.com/

### Comunidad:
- Stack Overflow: https://stackoverflow.com/questions/tagged/reactjs
- Reddit r/reactjs: https://www.reddit.com/r/reactjs/
- Discord React: https://discord.gg/reactiflux

---

## ❓ Preguntas Frecuentes

### ¿Por qué usar React y no solo HTML/CSS/JS?

**Ventajas de React:**
- Componentes reutilizables
- Actualización eficiente del DOM
- Gran ecosistema y comunidad
- Muy demandado en el mercado laboral

### ¿Necesito saber JavaScript avanzado?

Para empezar, necesitas:
- Variables (let, const)
- Funciones (arrow functions)
- Arrays (map, filter)
- Objetos
- Destructuring
- Spread operator

### ¿Cuánto tiempo toma aprender React?

- **Básico**: 2-4 semanas
- **Intermedio**: 2-3 meses
- **Avanzado**: 6-12 meses

Lo importante es practicar constantemente.

### ¿Qué proyecto hago después de este?

1. Todo List con CRUD completo
2. App del clima con API
3. E-commerce básico
4. Blog con markdown
5. Dashboard con gráficos

---

## 🎯 Checklist de Dominio

Marca lo que ya dominas:

**Fundamentos:**
- [ ] Crear componentes funcionales
- [ ] Usar props
- [ ] Manejar state con useState
- [ ] Manejar eventos (onClick, onChange)
- [ ] Renderizado condicional
- [ ] Listas y keys

**Estilos:**
- [ ] CSS Modules
- [ ] Variables CSS
- [ ] Flexbox
- [ ] Grid
- [ ] Media queries
- [ ] Animaciones CSS

**Herramientas:**
- [ ] npm install
- [ ] npm run dev
- [ ] npm run build
- [ ] Git básico
- [ ] Deploy en Netlify/Vercel

---

¡Sigue practicando y nunca dejes de aprender! 🚀

**Recuerda**: Todos los desarrolladores senior fueron juniors alguna vez.
La diferencia está en la constancia y la práctica diaria.
