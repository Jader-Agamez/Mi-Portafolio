# 🎯 GUÍA RÁPIDA DE INICIO

## Para Principiantes - Paso a Paso

### 1️⃣ Instalar Node.js (SOLO LA PRIMERA VEZ)

1. Ve a https://nodejs.org/
2. Descarga la versión LTS (la recomendada)
3. Instala haciendo doble clic
4. Abre la terminal (CMD en Windows) y verifica:
   ```
   node --version
   ```
   Deberías ver algo como: v18.17.0

### 2️⃣ Instalar las Dependencias del Proyecto

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

⏳ Esto tomará unos minutos. Descargará todas las librerías necesarias.

### 3️⃣ Ejecutar el Proyecto

```bash
npm run dev
```

✅ Verás un mensaje como:
```
Local: http://localhost:5173
```

Abre tu navegador y ve a esa dirección.

### 4️⃣ Personalizar el Portafolio

Edita estos archivos con tu información:

📝 **src/components/Hero/Hero.jsx**
- Cambia "[Tu Nombre]" por tu nombre real

📝 **src/components/About/About.jsx**
- Escribe tu biografía

📝 **src/components/Projects/Projects.jsx**
- Agrega tus proyectos reales

📝 **src/components/Contact/Contact.jsx**
- Pon tu email, teléfono y ubicación

### 5️⃣ Ver los Cambios

Cada vez que guardes un archivo, el navegador se actualizará automáticamente. ¡No necesitas recargar!

### 6️⃣ Construir para Producción

Cuando estés listo para subir tu portafolio:

```bash
npm run build
```

Esto crea una carpeta `dist/` con tu sitio optimizado.

## 🆘 ¿Problemas?

### "npm no se reconoce como comando"
→ Reinstala Node.js y reinicia la terminal

### "Cannot find module"
→ Ejecuta: `npm install`

### El sitio no carga
→ Asegúrate de que el puerto 5173 no esté ocupado

### Errores de sintaxis
→ Revisa que no falten llaves {} o paréntesis ()

## 📚 Comandos Útiles

```bash
npm install          # Instalar dependencias
npm run dev          # Ejecutar en desarrollo
npm run build        # Construir para producción
npm run preview      # Ver la versión de producción localmente
```

## 🎨 Cambiar Colores

Edita `src/index.css` y cambia estas variables:

```css
--primary-color: #2563eb;    /* Color principal */
--secondary-color: #1e40af;  /* Color secundario */
```

Prueba con:
- Azul: #2563eb
- Verde: #10b981
- Morado: #8b5cf6
- Rojo: #ef4444

## 🚀 Subir a Internet GRATIS

### Opción más fácil: Netlify

1. Crea cuenta en https://netlify.com (usa tu GitHub)
2. Arrastra la carpeta `dist/` a Netlify
3. ¡Listo! Tendrás una URL como: `tu-sitio.netlify.app`

### Con GitHub (más profesional):

```bash
# 1. Inicializar Git
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit
git commit -m "Mi portafolio inicial"

# 4. Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tuusuario/mi-portafolio.git

# 5. Subir código
git push -u origin main
```

Luego conecta GitHub con Netlify o Vercel.

## 💡 Consejos

✅ Guarda tus cambios frecuentemente (Ctrl + S)
✅ Prueba en móvil (F12 → Toggle device toolbar)
✅ Usa nombres descriptivos en tus proyectos
✅ Agrega capturas de pantalla de tus proyectos
✅ Mantén el código limpio y comentado

## 🎓 Aprende Más

- React: https://react.dev/learn
- CSS: https://web.dev/learn/css/
- JavaScript: https://javascript.info/

---

¡Éxito con tu portafolio! 🚀
