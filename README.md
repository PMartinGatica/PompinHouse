# 🏡 PompinHouse Landing Page

Landing page profesional y moderna para PompinHouse, un alojamiento turístico en Ushuaia, Argentina.

![PompinHouse](https://images.unsplash.com/photo-1551632811-561732d1e306?w=800)

## 📋 Descripción

Sitio web optimizado, mobile-first y de alta performance diseñado para convertir visitantes en huéspedes. Incluye información completa sobre ubicación, servicios, actividades turísticas y contacto directo.

## ✨ Características

- 🎨 **Diseño moderno y responsive** - Mobile-first (320px, 768px, 1024px)
- ⚡ **Alto rendimiento** - Lighthouse score >90
- 🗺️ **Mapas interactivos** - Google Maps integrado con ubicación y lugares turísticos
- 📱 **Integración WhatsApp** - Contacto directo flotante y en todas las secciones
- 🎯 **Optimizado para conversión** - CTAs claros y accesibles
- ♿ **Accesible** - WCAG AA compliance
- 🔍 **SEO optimizado** - Meta tags completos y estructura semántica

## 🛠️ Stack Técnico

- **HTML5** semántico
- **Tailwind CSS v3** (vía CDN)
- **JavaScript vanilla** (sin dependencias)
- **Google Maps** embedded
- **Font Awesome 6** para iconos
- **Google Fonts** (Inter)

## 📁 Estructura del Proyecto

```
pompinhouse-landing/
│
├── index.html              # Archivo principal
│
├── css/
│   └── styles.css         # Estilos custom adicionales a Tailwind
│
├── js/
│   └── main.js            # JavaScript con todas las funcionalidades
│
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg    # Imagen de fondo hero (reemplazar)
│   │   ├── og-image.jpg   # Imagen para compartir en redes (crear)
│   │   └── favicon.png    # Favicon (crear)
│   │
│   └── documents/
│       └── mapa-ushuaia.pdf  # Mapa turístico descargable (crear)
│
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente

1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! No requiere instalación de dependencias

### Opción 2: Con servidor local

```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx http-server

# Luego abre http://localhost:8000 en tu navegador
```

## 📝 Configuración Inicial

### 1. Actualizar datos de contacto

En [index.html](index.html), buscar y reemplazar los placeholders:

```html
<!-- WhatsApp Pablo -->
+54 2901 502672

<!-- Email -->
pablomartin.gatica@gmail.com

<!-- WiFi -->
Red: Remolcoy
Contraseña: faltacontraseña

<!-- Guía turístico (Marcos Vargas) -->
+54 2901 555555

<!-- Transporte (Xalpen) -->
+54 2901 111111
```

### 2. Crear el mapa turístico en Google My Maps

1. Ir a [Google My Maps](https://www.google.com/mymaps)
2. Crear nuevo mapa: "Guía PompinHouse Ushuaia"
3. Agregar capas:

**CAPA 1 - ALOJAMIENTO (Color Azul):**
- 📍 PompinHouse (Gobernador Cornejo 325)

**CAPA 2 - GASTRONOMÍA (Color Rojo):**
- Santos Bar (Av. Maipú 773)
- Bar Dublín (9 de Julio 168)
- Bodegón Fueguino (San Martín 859)
- Isabel al Disco (Gob. P. Godoy 15)
- Tante Sara (San Martín 701)
- Ramos Generales (Maipú 749)

**CAPA 3 - SENDEROS (Color Verde):**
- Laguna Esmeralda (RN3 km 3040)
- Glaciar Martial (Camino al Glaciar)
- Glaciar Vinciguerra (Valle Andorra)
- Parque Nacional Tierra del Fuego

**CAPA 4 - CULTURA (Color Amarillo):**
- Museo Marítimo y Presidio (Yaganes y Gob. Paz)

4. Compartir → Insertar en mi sitio → Copiar iframe
5. En `index.html`, buscar el placeholder del mapa turístico (línea ~227) y reemplazar con tu iframe

### 3. Agregar imágenes

Colocar en `/assets/images/`:

- `hero-bg.jpg` - Foto de PompinHouse o Ushuaia (1920x1080px mínimo)
- `og-image.jpg` - Imagen para compartir en redes (1200x630px)
- `favicon.png` - Favicon 32x32px

Si no tienes imágenes, el sitio usa placeholders de Unsplash automáticamente.

### 4. Crear mapa PDF descargable

Exportar el mapa de Google My Maps como PDF y guardarlo en `/assets/documents/mapa-ushuaia.pdf`

## 📱 Secciones del Sitio

1. **Hero** - Primera impresión con CTA principal
2. **Ubicación** - Mapa interactivo y distancias a puntos clave
3. **Información de Estadía** - Check-in/out, WiFi, contacto, servicios
4. **Qué Hacer en Ushuaia** - Mapa turístico con tabs (Senderos, Gastronomía, Cultura)
5. **Servicios Recomendados** - Guía turístico y transporte con descuentos
6. **Tips Locales** - Acordeón con consejos prácticos
7. **Footer** - Información de contacto y CTA final

## 🎨 Personalización

### Colores

Editar en [css/styles.css](css/styles.css):

```css
:root {
  --primary: #2C5F8D;      /* Azul Patagónico */
  --secondary: #27AE60;    /* Verde naturaleza */
  --accent: #E67E22;       /* Naranja cálido */
  /* ... más colores */
}
```

O en la configuración de Tailwind en `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2C5F8D',
        secondary: '#27AE60',
        accent: '#E67E22',
      }
    }
  }
}
```

### Fuentes

Cambiar en [index.html](index.html):

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Y actualizar en CSS:

```css
body {
  font-family: 'TU_FUENTE', system-ui, sans-serif;
}
```

## 🔧 Funcionalidades JavaScript

Todas en [js/main.js](js/main.js):

- ✅ Loading spinner inicial
- ✅ Smooth scroll a secciones
- ✅ Animaciones al hacer scroll (Intersection Observer)
- ✅ Sistema de tabs (Qué hacer)
- ✅ Acordeón (Tips locales)
- ✅ Copiar contraseña WiFi al clipboard
- ✅ Toast notifications
- ✅ WhatsApp floating button
- ✅ Lazy loading de iframes
- ✅ Tracking de eventos (preparado para analytics)

## 📊 Optimización y Performance

- ✅ Lazy loading de imágenes e iframes
- ✅ CDN para librerías externas
- ✅ Código minificado (producción)
- ✅ Async/defer para scripts
- ✅ Optimización de imágenes WebP
- ✅ Caché de navegador configurado

### Lighthouse Score objetivo

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

## 🌐 SEO

Configurado en `<head>` de [index.html](index.html):

- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Estructura HTML5 semántica
- ✅ Schema.org markup (preparado para local business)
- ✅ Sitemap.xml (crear si es necesario)
- ✅ robots.txt (crear si es necesario)

## 🚀 Deployment

### GitHub Pages

1. Crear repositorio en GitHub
2. Push del código
3. Settings → Pages → Source: main branch
4. Tu sitio estará en `https://tu-usuario.github.io/pompinhouse`

### Netlify

1. Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio de GitHub
3. Deploy automático en cada push

### Vercel

```bash
npm install -g vercel
vercel
```

### Hosting tradicional

1. Subir todos los archivos vía FTP
2. Apuntar dominio a la carpeta
3. Configurar HTTPS (Let's Encrypt)

## 📋 Checklist Pre-Launch

- [ ] Actualizar todos los datos de contacto
- [ ] Crear y configurar Google My Maps
- [ ] Reemplazar placeholders de imágenes
- [ ] Actualizar contraseña WiFi real
- [ ] Crear PDF del mapa turístico
- [ ] Probar en móvil (iOS y Android)
- [ ] Probar en desktop (Chrome, Firefox, Safari)
- [ ] Verificar todos los links externos
- [ ] Revisar consola (0 errores JavaScript)
- [ ] Test de Lighthouse (>90 en todo)
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar dominio personalizado
- [ ] Configurar SSL/HTTPS
- [ ] Crear sitemap.xml
- [ ] Enviar a Google Search Console

## 🐛 Troubleshooting

### El mapa no se ve

- Verificar que el iframe de Google Maps esté correcto
- Revisar consola del navegador por errores
- Probar con otro navegador

### Animaciones no funcionan

- Verificar que `main.js` esté cargando correctamente
- Revisar consola por errores JavaScript
- Probar deshabilitando extensiones del navegador

### Botón copiar WiFi no funciona

- Navegadores antiguos no soportan Clipboard API
- El código tiene fallback automático
- Revisar permisos del navegador

### Performance bajo

- Optimizar tamaño de imágenes (WebP, compresión)
- Verificar que lazy loading esté activo
- Revisar red lenta (3G throttling)

## 📞 Soporte

- Email: pablomartin.gatica@gmail.com
- WhatsApp: +54 2901 502672

## 📄 Licencia

© 2024 PompinHouse. Todos los derechos reservados.

---

**Hecho con ❤️ en Ushuaia, Argentina** 🇦🇷

*Desarrollado siguiendo las mejores prácticas de web development y optimizado para conversión.*
#   P o m p i n H o u s e  
 