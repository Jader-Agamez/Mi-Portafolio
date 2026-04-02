# 🛠️ COMANDOS ÚTILES Y SOLUCIÓN DE PROBLEMAS

## 📋 Comandos Esenciales

### Instalación y Ejecución

```bash
# Instalar todas las dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Git - Control de Versiones

```bash
# Inicializar repositorio
git init

# Ver estado de archivos
git status

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Descripción de cambios"

# Ver historial
git log --oneline

# Crear rama nueva
git branch nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Subir a GitHub
git push origin main
```

### npm - Gestión de Paquetes

```bash
# Ver versión de npm
npm --version

# Ver versión de Node
node --version

# Limpiar caché de npm
npm cache clean --force

# Actualizar npm
npm install -g npm@latest

# Ver paquetes instalados
npm list --depth=0

# Desinstalar paquete
npm uninstall nombre-paquete
```

---

## 🐛 Solución de Problemas Comunes

### 1. "npm no se reconoce como comando"

**Problema**: Windows no encuentra npm

**Solución**:
1. Reinstala Node.js desde https://nodejs.org/
2. Durante la instalación, marca "Add to PATH"
3. Reinicia la terminal (cierra y abre de nuevo)
4. Verifica: `node --version`

---

### 2. Error al instalar dependencias

**Problema**: `npm install` falla

**Soluciones**:

```bash
# Opción 1: Limpiar caché
npm cache clean --force
npm install

# Opción 2: Eliminar node_modules y reinstalar
rmdir /s node_modules
del package-lock.json
npm install

# Opción 3: Usar npm con permisos
npm install --legacy-peer-deps
```

---

### 3. Puerto 5173 ya está en uso

**Problema**: "Port 5173 is already in use"

**Soluciones**:

```bash
# Opción 1: Usar otro puerto
npm run dev -- --port 3000

# Opción 2: Matar el proceso (Windows)
netstat -ano | findstr :5173
taskkill /PID [número_del_proceso] /F

# Opción 3: Reiniciar la computadora
```

---

### 4. Cambios no se reflejan en el navegador

**Problema**: Guardas el archivo pero no ves los cambios

**Soluciones**:
1. Verifica que el servidor esté corriendo (`npm run dev`)
2. Refresca el navegador (Ctrl + R)
3. Limpia caché del navegador (Ctrl + Shift + R)
4. Verifica que guardaste el archivo (Ctrl + S)
5. Revisa la consola por errores (F12)

---

### 5. Error: "Cannot find module"

**Problema**: `Error: Cannot find module 'react'`

**Solución**:
```bash
npm install
```

Si persiste:
```bash
npm install react react-dom react-icons
```

---

### 6. Página en blanco / Pantalla blanca

**Problema**: El sitio carga pero está en blanco

**Soluciones**:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que `index.html` tenga `<div id="root">`
4. Verifica que `main.jsx` esté montando correctamente:
   ```jsx
   ReactDOM.createRoot(document.getElementById('root')).render(...)
   ```

---

### 7. Errores de sintaxis en JSX

**Problema**: `Unexpected token '<'`

**Causas comunes**:
```jsx
// ❌ Mal - Falta return
const Component = () => {
  <div>Hola</div>
}

// ✅ Bien
const Component = () => {
  return <div>Hola</div>
}

// ❌ Mal - Múltiples elementos sin contenedor
return (
  <div>Uno</div>
  <div>Dos</div>
)

// ✅ Bien - Envueltos en un fragmento
return (
  <>
    <div>Uno</div>
    <div>Dos</div>
  </>
)
```

---

### 8. Estilos CSS no se aplican

**Problema**: Los estilos no funcionan

**Soluciones**:

```jsx
// ❌ Mal - class en lugar de className
<div class="hero">

// ✅ Bien
<div className="hero">

// ❌ Mal - Olvidaste importar los estilos
const Hero = () => { ... }

// ✅ Bien
import styles from './Hero.module.css'
const Hero = () => {
  return <div className={styles.hero}>
}
```

---

### 9. Imágenes no cargan

**Problema**: Las imágenes no se muestran

**Soluciones**:

```jsx
// ❌ Mal - Ruta incorrecta
<img src="./imagen.jpg" />

// ✅ Bien - Importar la imagen
import imagen from './assets/imagen.jpg'
<img src={imagen} alt="Descripción" />

// ✅ Bien - Usar carpeta public
// Coloca la imagen en: public/imagen.jpg
<img src="/imagen.jpg" alt="Descripción" />
```

---

### 10. Error al hacer build

**Problema**: `npm run build` falla

**Soluciones**:

1. Verifica que no haya errores en el código
2. Revisa imports no utilizados
3. Verifica que todas las variables estén definidas
4. Limpia y reconstruye:
   ```bash
   rmdir /s dist
   npm run build
   ```

---

## 🔧 Herramientas de Desarrollo

### Extensiones de VS Code Recomendadas

```
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense
- GitLens
```

### Atajos de Teclado Útiles

```
Ctrl + S          - Guardar archivo
Ctrl + P          - Buscar archivo
Ctrl + Shift + P  - Paleta de comandos
Ctrl + /          - Comentar línea
Ctrl + D          - Seleccionar siguiente ocurrencia
Alt + ↑/↓         - Mover línea arriba/abajo
Shift + Alt + ↓   - Duplicar línea
F2                - Renombrar símbolo
```

### DevTools del Navegador

```
F12               - Abrir DevTools
Ctrl + Shift + C  - Inspeccionar elemento
Ctrl + Shift + J  - Abrir consola
Ctrl + Shift + R  - Recargar sin caché
```

---

## 📊 Optimización y Performance

### Verificar tamaño del build

```bash
npm run build
# Revisa el tamaño en la carpeta dist/
```

### Analizar el bundle

```bash
# Instalar analizador
npm install --save-dev rollup-plugin-visualizer

# Agregar a vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [react(), visualizer()]
})

# Hacer build y ver stats.html
npm run build
```

---

## 🌐 Deploy - Comandos Específicos

### Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

---

## 🔍 Debugging Avanzado

### Console.log estratégico

```jsx
const MyComponent = () => {
  const [data, setData] = useState([])
  
  // Ver cuándo se renderiza el componente
  console.log('Component rendered')
  
  // Ver el valor de una variable
  console.log('Data:', data)
  
  // Ver múltiples valores
  console.log({ data, otherVar })
  
  return <div>...</div>
}
```

### React DevTools

1. Instala la extensión "React Developer Tools"
2. Abre DevTools (F12)
3. Ve a la pestaña "Components"
4. Inspecciona props y state de cada componente

---

## 📝 Checklist antes de Deploy

- [ ] Todos los links funcionan
- [ ] Imágenes cargan correctamente
- [ ] Formulario funciona
- [ ] Responsive en móvil (prueba con F12)
- [ ] No hay errores en consola
- [ ] Información personal actualizada
- [ ] Links a redes sociales correctos
- [ ] Proyectos con descripciones completas
- [ ] Build exitoso (`npm run build`)
- [ ] Preview funciona (`npm run preview`)
- [ ] README.md actualizado
- [ ] .gitignore configurado

---

## 🚨 Errores Críticos y Soluciones

### "React is not defined"

```jsx
// ❌ Falta import
const Component = () => <div>Hola</div>

// ✅ Agregar import (aunque en React 18+ no es necesario)
import React from 'react'
```

### "Objects are not valid as a React child"

```jsx
// ❌ Mal - Intentando renderizar un objeto
const user = { name: 'Juan' }
return <div>{user}</div>

// ✅ Bien - Renderizar una propiedad
return <div>{user.name}</div>
```

### "Maximum update depth exceeded"

```jsx
// ❌ Mal - Llamando la función en lugar de pasarla
<button onClick={handleClick()}>

// ✅ Bien - Pasar la referencia
<button onClick={handleClick}>
```

---

## 💾 Backup y Versionado

### Crear backup antes de cambios grandes

```bash
# Hacer commit antes de cambios
git add .
git commit -m "Backup antes de [cambio]"

# Crear rama para experimentar
git checkout -b experimental
```

### Revertir cambios

```bash
# Descartar cambios no guardados
git checkout -- .

# Volver al commit anterior
git reset --hard HEAD~1

# Ver diferencias
git diff
```

---

## 📞 Recursos de Ayuda

### Cuando estés atascado:

1. **Lee el error completo** - No solo la primera línea
2. **Google el error** - Copia el mensaje exacto
3. **Stack Overflow** - Busca problemas similares
4. **Documentación oficial** - react.dev
5. **ChatGPT / Claude** - Explica tu problema
6. **Comunidades**:
   - Discord de React
   - Reddit r/reactjs
   - Twitter #ReactJS

### Preguntas efectivas:

✅ "Tengo este error [código] cuando intento [acción]. Ya probé [soluciones]"
❌ "No funciona, ayuda"

---

## 🎯 Comandos de Mantenimiento

```bash
# Ver paquetes desactualizados
npm outdated

# Actualizar paquetes (cuidado!)
npm update

# Auditar seguridad
npm audit

# Arreglar vulnerabilidades
npm audit fix

# Ver tamaño de node_modules
du -sh node_modules  # Linux/Mac
dir node_modules     # Windows
```

---

## ✅ Verificación Final

Antes de considerar tu portafolio terminado:

```bash
# 1. Limpiar y reinstalar
rmdir /s node_modules
npm install

# 2. Verificar que funciona en dev
npm run dev

# 3. Hacer build exitoso
npm run build

# 4. Probar el build
npm run preview

# 5. Verificar en diferentes navegadores
# Chrome, Firefox, Safari, Edge

# 6. Probar en móvil real
# Usa tu teléfono para probar
```

---

¡Con esta guía deberías poder resolver el 95% de los problemas comunes! 🚀

**Recuerda**: Los errores son oportunidades de aprendizaje. 
Cada error que resuelves te hace un mejor desarrollador.
