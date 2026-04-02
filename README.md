# 🚀 Mi Portafolio - Desarrollador Web

Portafolio profesional creado con React para mostrar mis proyectos y habilidades como desarrollador web junior.

## 📋 Características

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (móvil y desktop)
- ✅ Navegación suave entre secciones
- ✅ Componentes reutilizables
- ✅ CSS Modules para estilos organizados
- ✅ Animaciones y transiciones fluidas
- ✅ Formulario de contacto funcional
- ✅ Integración con redes sociales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces
- **Vite** - Build tool rápido y moderno
- **CSS Modules** - Estilos con scope local
- **React Icons** - Iconos profesionales

## 📁 Estructura del Proyecto

```
Mi-Portafolio/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm (viene con Node.js)

### Paso 1: Instalar Node.js

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (recomendada)
3. Instala siguiendo el asistente
4. Verifica la instalación abriendo la terminal:
   ```bash
   node --version
   npm --version
   ```

### Paso 2: Instalar Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias (React, Vite, React Icons, etc.)

### Paso 3: Ejecutar en Modo Desarrollo

```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

### Paso 4: Construir para Producción

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos optimizados para producción.

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para agregar tu información:

**Hero.jsx** - Cambia tu nombre y descripción:
```jsx
<h1>¡Hola! Soy [Tu Nombre]</h1>
<h2>Desarrollador Web Junior</h2>
```

**About.jsx** - Actualiza tu biografía

**Contact.jsx** - Agrega tu email, teléfono y ubicación

### 2. Proyectos

En `Projects.jsx`, modifica el array `projects`:
```jsx
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tuusuario/proyecto',
    demo: 'https://tuproyecto.com',
    icon: '🌐'
  }
]
```

### 3. Habilidades

En `Skills.jsx`, ajusta tus niveles de habilidad:
```jsx
const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' }
]
```

### 4. Colores y Estilos

Edita las variables CSS en `index.css`:
```css
:root {
  --primary-color: #2563eb;  /* Color principal */
  --secondary-color: #1e40af; /* Color secundario */
}
```

## 🌐 Desplegar en Internet (GRATIS)

### Opción 1: Netlify (Recomendado)

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://www.netlify.com/)
   - Regístrate con GitHub

2. **Subir tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Mi portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/tuusuario/mi-portafolio.git
   git push -u origin main
   ```

3. **Conectar con Netlify**
   - En Netlify, haz clic en "New site from Git"
   - Selecciona tu repositorio
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Haz clic en "Deploy site"

4. **¡Listo!** Tu sitio estará en: `https://tu-sitio.netlify.app`

### Opción 2: Vercel

1. Ve a [vercel.com](https://vercel.com/)
2. Regístrate con GitHub
3. Importa tu repositorio
4. Vercel detectará automáticamente la configuración
5. Haz clic en "Deploy"

### Opción 3: GitHub Pages

1. Instala gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Agrega en `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/mi-portafolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Actualiza `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/mi-portafolio/'
   })
   ```

4. Despliega:
   ```bash
   npm run deploy
   ```

## 📝 Consejos para Principiantes

### Entendiendo la Estructura

- **Components**: Cada sección es un componente independiente
- **CSS Modules**: Los estilos están aislados por componente
- **Props**: Puedes pasar datos entre componentes
- **State**: Usa useState para datos que cambian (ej: formulario)

### Próximos Pasos

1. ✅ Personaliza todo el contenido con tu información
2. ✅ Agrega tus proyectos reales
3. ✅ Conecta el formulario con un servicio de email (EmailJS, Formspree)
4. ✅ Agrega más animaciones
5. ✅ Implementa modo oscuro
6. ✅ Agrega un blog (opcional)

### Recursos de Aprendizaje

- [Documentación de React](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🐛 Solución de Problemas

### Error: "npm no se reconoce"
- Reinstala Node.js y asegúrate de marcar "Add to PATH"

### Error al instalar dependencias
```bash
npm cache clean --force
npm install
```

### El sitio no se ve bien en móvil
- Verifica que tengas el meta viewport en index.html
- Usa las DevTools de Chrome para probar responsive

## 📧 Contacto

Si tienes preguntas, no dudes en contactarme:
- Email: tuemail@ejemplo.com
- GitHub: [@tuusuario](https://github.com/tuusuario)
- LinkedIn: [Tu Nombre](https://linkedin.com/in/tuusuario)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

⭐ Si este proyecto te ayudó, dale una estrella en GitHub!

**¡Mucha suerte en tu búsqueda de empleo como desarrollador web!** 🚀
