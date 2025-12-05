🚀 PROMPT DEFINITIVO PARA CLAUDE CODE
Necesito crear una landing page profesional y moderna para PompinHouse, un alojamiento turístico en Ushuaia, Argentina. La página debe ser rápida, mobile-first y optimizada para conversión.

═══════════════════════════════════════════════════════════════

STACK TÉCNICO:
- HTML5 semántico
- Tailwind CSS v3 (vía CDN)
- JavaScript vanilla (mínimo necesario)
- Google Maps embedded
- Mobile-first responsive (320px, 768px, 1024px)
- Performance optimizado (Lighthouse >90)

═══════════════════════════════════════════════════════════════

ESTRUCTURA COMPLETA DE LA PÁGINA:

═══════════════════════════════════════════════════════════════
SECCIÓN 1: HERO (Full viewport height)
═══════════════════════════════════════════════════════════════

Diseño:
- Background: Imagen de Ushuaia con overlay gradiente oscuro (rgba(0,0,0,0.5))
- Posición: center center
- Efecto parallax sutil en scroll

Contenido centrado verticalmente:
┌─────────────────────────────────────┐
│                                     │
│         🏡 (ícono grande)          │
│                                     │
│      Bienvenido a PompinHouse      │
│    (h1, texto blanco, 48px bold)   │
│                                     │
│   Tu refugio en el Fin del Mundo   │
│  (p, texto blanco/80%, 24px light) │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  📍 Ver ubicación            │  │
│  └──────────────────────────────┘  │
│   (botón primary, animated pulse)  │
│                                     │
│           ⌄ ⌄ ⌄                    │
│    (scroll indicator animado)      │
│                                     │
└─────────────────────────────────────┘

Animación: Fade in elements con delay escalonado
Interacción: Botón scroll suave a sección ubicación

═══════════════════════════════════════════════════════════════
SECCIÓN 2: UBICACIÓN
═══════════════════════════════════════════════════════════════

Header:
┌─────────────────────────────────────┐
│  📍 ¿Dónde estamos?                │
│  (h2, 36px bold, color primary)    │
│                                     │
│  Gobernador Cornejo 325            │
│  Ushuaia, Tierra del Fuego         │
│  (p, 18px, color texto secundario) │
└─────────────────────────────────────┘

MAPA 1 - Ubicación general (Google Maps Embed):
- Width: 100%
- Height: 450px mobile, 600px desktop
- Border-radius: 16px
- Box-shadow: suave
- Centrado en: -54.807, -68.305 (Gobernador Cornejo 325)
- Zoom: 14
- Marcador: PompinHouse

Código del iframe:
<iframe
  width="100%"
  height="450"
  style="border:0; border-radius:16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
  loading="lazy"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.9!2d-68.305!3d-54.807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDQ4JzI1LjIiUyA2OMKwMTgnMTguMCJX!5e0!3m2!1ses!2sar!4v1234567890!5m2!1ses!2sar">
</iframe>

GRID DE DISTANCIAS (4 cards en desktop, 2 en mobile):

Card estructura:
┌─────────────────────┐
│   🏙️ (ícono)       │
│                     │
│   Centro Ushuaia    │
│   (nombre, bold)    │
│                     │
│   ──────            │
│   10 minutos        │
│   (distancia, XL)   │
│   ──────            │
│                     │
│   🚶 Caminando      │
│   (modo, small)     │
│                     │
│  [Ver ruta →]       │
│  (link con flecha)  │
└─────────────────────┘

Cards completas:
1. 🏙️ Centro Ushuaia - 10 min 🚶
2. ✈️ Aeropuerto - 15 min 🚗
3. 🏛️ Museo Marítimo - 12 min 🚶
4. 🛒 Supermercado - 3 min 🚶

Cada card:
- Link "Ver ruta" que abre Google Maps Directions:
  https://www.google.com/maps/dir/?api=1&origin=Gobernador+Cornejo+325,Ushuaia&destination=[DESTINO]&travelmode=[walking|driving]
- Target="_blank"
- Hover: elevation aumenta
- Transición suave

Botón al final:
┌─────────────────────────────────┐
│  📱 Abrir en Google Maps        │
│  (botón secundario, full width  │
│   en mobile)                    │
└─────────────────────────────────┘
Link: https://goo.gl/maps/[SHORT_LINK]
═══════════════════════════════════════════════════════════════
SECCIÓN 3: INFO DE ESTADÍA
═══════════════════════════════════════════════════════════════

Header:
┌─────────────────────────────────────┐
│  🔑 Información de tu estadía      │
│  (h2, 36px bold)                    │
└─────────────────────────────────────┘

GRID 2x2 (1 columna en mobile):

┌──────────────────┐  ┌──────────────────┐
│   🕐             │  │   📶            │
│   Check-in       │  │   WiFi          │
│   14:00 hs       │  │   Red: pompin.. │
│                  │  │   Pass: [pass]  │
│   Check-out      │  │                 │
│   10:00 hs       │  │   [Copiar]      │
└──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│   📞             │  │   🏠            │
│   Contacto       │  │   Servicios     │
│   Pablo          │  │   ✓ Calefacción │
│                  │  │   ✓ Cocina equip│
│  [WhatsApp 💬]   │  │   ✓ Ropa cama   │
│  [Llamar 📞]     │  │   ✓ WiFi alta v.│
└──────────────────┘  └──────────────────┘

Funcionalidad:
- Botón "Copiar" en WiFi → copia contraseña al clipboard + toast notification
- WhatsApp button → deep link con mensaje pre-cargado:
  https://wa.me/5429015XXXXXX?text=Hola%20Pablo,%20soy%20hu%C3%A9sped%20de%20PompinHouse...
- Llamar button → tel:+5429015XXXXXX

Cards con:
- Background blanco
- Border-radius: 12px
- Padding generoso
- Box-shadow sutil
- Hover: shadow aumenta

═══════════════════════════════════════════════════════════════
SECCIÓN 4: QUÉ HACER EN USHUAIA
═══════════════════════════════════════════════════════════════

Header:
┌─────────────────────────────────────┐
│  🗺️ Descubrí Ushuaia              │
│  (h2, 36px bold)                    │
│                                     │
│  Los mejores lugares a tu alcance  │
│  (subtítulo)                        │
└─────────────────────────────────────┘

MAPA 2 - Turístico completo (Google My Maps):
- Width: 100%
- Height: 600px mobile, 700px desktop
- Border-radius: 16px
- Box-shadow: media

Instrucciones para crear el mapa:
1. Ir a https://www.google.com/mymaps
2. Crear nuevo mapa: "Guía PompinHouse Ushuaia"
3. Agregar capas por categoría:

CAPA 1 - ALOJAMIENTO (Color Azul):
- 📍 PompinHouse (Gobernador Cornejo 325)
  * Marcador: Ícono casa azul
  * Descripción: "Tu alojamiento en Ushuaia"

CAPA 2 - GASTRONOMÍA (Color Rojo):
- 🍽️ Santos Bar (Av. Maipú 773)
  * 10 min caminando | Cervecería
- 🍽️ Bar Dublín (9 de Julio 168)
  * 12 min caminando | Pub irlandés
- 🍽️ Bodegón Fueguino (San Martín 859)
  * 8 min caminando | Cocina tradicional
- 🍽️ Isabel al Disco (Gob. P. Godoy 15)
  * 10 min caminando | Cordero patagónico
- ☕ Tante Sara (San Martín 701)
  * 9 min caminando | Café & Pastelería
- ☕ Ramos Generales (Maipú 749)
  * 7 min caminando | Café histórico

CAPA 3 - SENDEROS (Color Verde):
- 🥾 Laguna Esmeralda (RN3 km 3040)
  * 18 km del centro | 9km sendero | 4-5 hs | Dificultad Media | Desnivel 220m
- 🥾 Glaciar Martial (Camino al Glaciar)
  * 7 km del centro | 2.6km sendero | 1.5-2 hs | Dificultad Baja-Media | Desnivel 200m
- 🥾 Glaciar Vinciguerra (Valle Andorra)
  * 7 km del centro | 14km sendero | 8-9 hs | Dificultad Alta | Desnivel 650m
- 🌲 Parque Nacional Tierra del Fuego
  * 12 km del centro | Múltiples senderos | Variada dificultad

CAPA 4 - CULTURA (Color Amarillo):
- 🏛️ Museo Marítimo y Presidio (Yaganes y Gob. Paz)
  * 12 min caminando | Historia de Ushuaia

4. Compartir → Insertar en mi sitio → Copiar iframe

Placeholder iframe (reemplazar con el real):
<iframe
  src="https://www.google.com/maps/d/embed?mid=1ABCxyz..."
  width="100%"
  height="600"
  style="border:0; border-radius:16px;">
</iframe>

LEYENDA visual debajo del mapa:
┌────────────────────────────────────────┐
│  🟦 PompinHouse  🟥 Gastronomía       │
│  🟩 Senderos     🟨 Cultura            │
└────────────────────────────────────────┘

TABS NAVEGABLES (3 pestañas):

Tab 1 - 🥾 SENDEROS:
Grid de 3 cards:
Card ejemplo:
┌─────────────────────────────┐
│  [Foto placeholder]         │
│                             │
│  🥾 Laguna Esmeralda        │
│  (h3, bold)                 │
│                             │
│  📏 9 km (ida y vuelta)     │
│  ⏱️ 4-5 horas               │
│  📊 Dificultad: Media       │
│  📈 Desnivel: 220m          │
│  📍 18 km desde PompinHouse │
│                             │
│  Sendero icónico de Ushuaia │
│  con vistas espectaculares. │
│  (descripción breve)        │
│                             │
│  [Ver en mapa →]            │
└─────────────────────────────┘

Cards completas:
1. Laguna Esmeralda
2. Glaciar Martial  
3. Glaciar Vinciguerra
4. Parque Nacional TdF

Tab 2 - 🍽️ GASTRONOMÍA:
Grid de 6 cards más compactas:

Card ejemplo:
┌────────────────────┐
│  🍺 Santos Bar     │
│                    │
│  Cervecería craft  │
│  💰 $$ - $$$       │
│                    │
│  📍 10 min 🚶     │
│  Maipú 773         │
│                    │
│  [Ver ruta]        │
└────────────────────┘

Cards completas (las 6 mencionadas arriba)

Tab 3 - 🏛️ CULTURA:
Card del Museo Marítimo

Interactividad tabs:
- Underline animado al cambiar
- Smooth content transition
- Mobile: full width buttons
- Desktop: inline tabs

Botón final de sección:
┌─────────────────────────────────┐
│  📥 Descargar mapa completo PDF │
│  (botón secondary)              │
└─────────────────────────────────┘
Link: descarga el PDF del mapa turístico creado anteriormente

═══════════════════════════════════════════════════════════════
SECCIÓN 5: SERVICIOS RECOMENDADOS
═══════════════════════════════════════════════════════════════

Header:
┌─────────────────────────────────────┐
│  🤝 Servicios de Confianza         │
│  (h2, 36px bold)                    │
│                                     │
│  Contactos verificados con         │
│  descuento especial para           │
│  huéspedes de PompinHouse          │
│  (subtítulo, text-center)          │
└─────────────────────────────────────┘

GRID 2 CARDS (1 columna en mobile):

═══ CARD 1: GUÍA TURÍSTICO ═══
┌─────────────────────────────────────┐
│  ┌─────────┐                        │
│  │  🥾     │  Marcos Vargas         │
│  │ (ícono) │  Guía de Montaña       │
│  └─────────┘  Certificado           │
│               (nombre + título)     │
│  ─────────────────────────────────  │
│                                     │
│  Especialidades:                    │
│  ✓ Laguna Esmeralda (guiado)       │
│    Desde $25.000/persona            │
│  ✓ Glaciar Vinciguerra              │
│    Desde $35.000/persona            │
│  ✓ Trekking personalizado           │
│    Consultar                        │
│                                     │
│  Incluye: Transporte + Equipo +    │
│  Seguridad + Fotos profesionales   │
│  (texto small, italic)              │
│  ─────────────────────────────────  │
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │ 💬 WhatsApp  │ │ 📞 Llamar    │ │
│  └──────────────┘ └──────────────┘ │
│                                     │
│  ╔════════════════════════════════╗ │
│  ║ 🏷️ Descuento especial         ║ │
│  ║    mencionando PompinHouse    ║ │
│  ╚════════════════════════════════╝ │
│  (badge destacado, bg-green-100)   │
└─────────────────────────────────────┘

Datos de contacto:
- WhatsApp: https://wa.me/5429015XXXXXX?text=Hola%20Marcos,%20soy%20hu%C3%A9sped%20de%20PompinHouse...
- Tel: tel:+5429015XXXXXX

═══ CARD 2: TRANSPORTE ═══
┌─────────────────────────────────────┐
│  ┌─────────┐                        │
│  │  🚗     │  Xalpen Transportes    │
│  │ (ícono) │  Traslados y           │
│  └─────────┘  Excursiones           │
│               (nombre + título)     │
│  ─────────────────────────────────  │
│                                     │
│  Servicios:                         │
│  ✓ Aeropuerto ↔ PompinHouse        │
│    Consultar                        │
│  ✓ Parque Nacional TdF              │
│    Tour completo                    │
│  ✓ Lagos Fagnano y Escondido       │
│    Día completo                     │
│  ✓ Traslados personalizados        │
│    Por hora o por día               │
│                                     │
│  Vehículos: 4x4 + Van turística    │
│  (texto small, italic)              │
│  ─────────────────────────────────  │
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │ 💬 WhatsApp  │ │ 📞 Llamar    │ │
│  └──────────────┘ └──────────────┘ │
│                                     │
│  ╔════════════════════════════════╗ │
│  ║ 🏷️ 10% OFF                    ║ │
│  ║    mencionando PompinHouse    ║ │
│  ╚════════════════════════════════╝ │
│  (badge destacado, bg-green-100)   │
└─────────────────────────────────────┘

Datos de contacto:
- WhatsApp: https://wa.me/5429015XXXXXX?text=Hola,%20soy%20hu%C3%A9sped%20de%20PompinHouse...
- Tel: tel:+5429015XXXXXX

Estilo cards:
- Background: blanco
- Border-radius: 16px
- Padding: 32px
- Box-shadow: 0 4px 12px rgba(0,0,0,0.08)
- Border top: 4px solid [color categoría]
- Hover: shadow aumenta + translateY(-4px)
- Transición: 0.3s ease

Disclaimer al pie (pequeño):
┌─────────────────────────────────────┐
│  ⚠️ Nota: Servicios independientes │
│  recomendados. Precios orientativos │
│  actualizados a Diciembre 2024.    │
│  PompinHouse no cobra comisión.     │
│  (text-sm, text-gray-500, italic)  │
└─────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
SECCIÓN 6: TIPS LOCALES
═══════════════════════════════════════════════════════════════

Header:
┌─────────────────────────────────────┐
│  💡 Tips para tu estadía           │
│  (h2, 36px bold)                    │
└─────────────────────────────────────┘

ACORDEÓN (4 items expandibles):

Item 1: ❄️ CLIMA Y ROPA
┌─────────────────────────────────────┐
│  ❄️ Clima y qué traer         [+]  │
│  ─────────────────────────────────  │
│  (collapsed por defecto)            │
└─────────────────────────────────────┘

Cuando se expande:
┌─────────────────────────────────────┐
│  ❄️ Clima y qué traer         [-]  │
│  ─────────────────────────────────  │
│                                     │
│  🌡️ Temperatura actual: 5-12°C    │
│                                     │
│  El clima en Ushuaia es variable   │
│  incluso en verano. Vestite en     │
│  capas y siempre llevá:            │
│                                     │
│  ✓ Campera impermeable             │
│  ✓ Polar o buzo térmico            │
│  ✓ Remera manga larga              │
│  ✓ Pantalón largo (no jeans)       │
│  ✓ Calzado impermeable             │
│  ✓ Gorro y guantes                 │
│  ✓ Protector solar (sí, en serio!)│
│                                     │
│  🌧️ Lluvia posible todo el año    │
└─────────────────────────────────────┘

Item 2: 🥾 SENDEROS
┌─────────────────────────────────────┐
│  🥾 Consejos para senderos    [+]  │
└─────────────────────────────────────┘

Expandido:
┌─────────────────────────────────────┐
│  🥾 Consejos para senderos    [-]  │
│  ─────────────────────────────────  │
│                                     │
│  🕐 Salí temprano (8-9 AM)         │
│  El viento aumenta por la tarde    │
│                                     │
│  🎒 Llevá siempre:                 │
│  ✓ Agua (1.5L mínimo)              │
│  ✓ Snacks energéticos              │
│  ✓ Botiquín básico                 │
│  ✓ Celular cargado                 │
│  ✓ Bolsa para basura               │
│                                     │
│  📱 Descargá mapa offline          │
│  (Maps.me o similar)                │
│                                     │
│  ⚠️ Avisá a alguien tu ruta        │
└─────────────────────────────────────┘

Item 3: 💳 DINERO Y PAGOS
┌─────────────────────────────────────┐
│  💳 Dinero y pagos            [+]  │
└─────────────────────────────────────┘
Expandido:
┌─────────────────────────────────────┐
│  💳 Dinero y pagos            [-]  │
│  ─────────────────────────────────  │
│                                     │
│  🏧 Cajeros: Av. San Martín        │
│  (zona centro)                      │
│                                     │
│  💳 La mayoría acepta tarjeta      │
│  Visa/Mastercard común              │
│                                     │
│  💵 Efectivo recomendado para:     │
│  • Propinas (10%)                  │
│  • Puestos callejeros              │
│  • Algunos remises                 │
│                                     │
│  💱 Cambio: casas de cambio en     │
│  San Martín                         │
└─────────────────────────────────────┘

Item 4: 🚨 EMERGENCIAS
┌─────────────────────────────────────┐
│  🚨 Contactos de emergencia   [+]  │
└─────────────────────────────────────┘

Expandido:
┌─────────────────────────────────────┐
│  🚨 Contactos de emergencia   [-]  │
│  ─────────────────────────────────  │
│                                     │
│  📞 Emergencias general: 911       │
│  🏥 Hospital: (02901) 442-900      │
│  👮 Policía: 101                    │
│  🚒 Bomberos: 100                   │
│                                     │
│  🏠 Pablo (PompinHouse):           │
│  +54 2901 5XX-XXXX                 │
│  [WhatsApp]                         │
│                                     │
│  🚕 Remis recomendado:             │
│  Ver sección Servicios ↑           │
└─────────────────────────────────────┘

Interacción acordeón:
- Solo 1 item abierto a la vez
- Animación suave (300ms)
- Ícono + rota al expandir
- Mobile: full width
- Desktop: max-width 800px centrado

═══════════════════════════════════════════════════════════════
SECCIÓN 7: FOOTER
═══════════════════════════════════════════════════════════════

Background: gris oscuro (#2C3E50)
Color texto: blanco
Padding: generoso

Layout:
┌─────────────────────────────────────┐
│                                     │
│          🏡 PompinHouse             │
│    (logo/nombre, texto grande)      │
│                                     │
│  Tu refugio en el Fin del Mundo    │
│  (tagline, texto pequeño)           │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  📞 Contacto                        │
│  WhatsApp: +54 2901 5XX-XXXX       │
│  Email: contacto@pompinhouse.com    │
│                                     │
│  📍 Dirección                       │
│  Gobernador Cornejo 325            │
│  Ushuaia, Tierra del Fuego         │
│  Argentina                          │
│                                     │
│  🔗 Síguenos                        │
│  [📷 Instagram] [✉️ Email]         │
│  (íconos con links)                 │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  ¿Alguna duda? Escribime           │
│  [💬 Abrir WhatsApp]                │
│  (botón verde WhatsApp, centrado)  │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  © 2024 PompinHouse                │
│  Hecho con ❤️ en Ushuaia           │
│  (texto pequeño, centrado)          │
│                                     │
└─────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
ELEMENTOS GLOBALES
═══════════════════════════════════════════════════════════════

WHATSAPP FLOATING BUTTON:
- Posición: fixed, bottom-right
- Mobile: bottom: 20px, right: 20px
- Desktop: bottom: 30px, right: 30px
- Z-index: 9999
- Tamaño: 60px x 60px
- Background: #25D366 (verde WhatsApp)
- Border-radius: 50%
- Box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4)
- Ícono: WhatsApp blanco (40px)
- Hover: scale(1.1) + shadow aumenta
- Animación: pulse sutil constante
- Link: https://wa.me/5429015XXXXXX?text=Hola%20Pablo,%20soy%20hu%C3%A9sped%20de%20PompinHouse,%20necesito%20ayuda
LOADING SPINNER (al cargar página):
- Centrado en viewport
- Spinner: border rotating
- Logo PompinHouse debajo
- Fade out después de 1s

SMOOTH SCROLL:
- Todos los links internos con scroll-behavior: smooth
- Offset para navbar si existiera

ANIMACIONES SCROLL:
- Fade in elements al entrar en viewport
- Usar Intersection Observer
- Delay escalonado en grids

═══════════════════════════════════════════════════════════════
DISEÑO Y ESTILOS
═══════════════════════════════════════════════════════════════

PALETA DE COLORES:
`css
:root {
  --primary: #2C5F8D;      /* Azul Patagónico */
  --secondary: #27AE60;    /* Verde naturaleza */
  --accent: #E67E22;       /* Naranja cálido */
  --dark: #2C3E50;         /* Texto principal */
  --gray: #7F8C8D;         /* Texto secundario */
  --light-bg: #F8F9FA;     /* Fondo secciones */
  --white: #FFFFFF;
  --success: #2ECC71;
  --warning: #F39C12;
  --danger: #E74C3C;
}
TIPOGRAFÍA:
Font family: 'Inter', system-ui, -apple-system, sans-serif
H1: 48px, bold (32px mobile)
H2: 36px, bold (28px mobile)
H3: 24px, semi-bold (20px mobile)
P: 16px, regular (14px mobile)
Small: 14px (12px mobile)
Line-height: 1.6
ESPACIADO:
Secciones: padding 80px 0 (60px mobile)
Container: max-width 1200px, padding 0 20px
Cards: padding 24px
Gaps en grids: 24px (16px mobile)
SOMBRAS:
Sutil: 0 2px 8px rgba(0,0,0,0.06)
Media: 0 4px 12px rgba(0,0,0,0.08)
Fuerte: 0 8px 24px rgba(0,0,0,0.12)
BORDER-RADIUS:
Pequeño: 8px
Medio: 12px
Grande: 16px
Botones: 8px
Cards: 12-16px
BOTONES:
Primary:
Background: var(--primary)
Color: white
Padding: 12px 32px
Border-radius: 8px
Font-weight: 600
Hover: bg más oscuro + translateY(-2px)
Active: translateY(0)
Secondary:
Background: transparent
Color: var(--primary)
Border: 2px solid var(--primary)
Padding: 12px 32px
Hover: bg var(--primary) + color white
WhatsApp:
Background: #25D366
Color: white
Ícono de WhatsApp
Hover: más brillante
TRANSICIONES:
Default: 0.3s ease
Hover effects: 0.2s ease
Scroll animations: 0.6s ease-out
═══════════════════════════════════════════════════════════════
RESPONSIVE BREAKPOINTS
═══════════════════════════════════════════════════════════════
Mobile: 320px - 767px
Layout: 1 columna
Padding reducido
Font-size reducido
Hero height: 100vh
Maps height: 400px
Cards: full width
Botones: full width
Tablet: 768px - 1023px
Layout: 2 columnas en grids
Hero height: 90vh
Maps height: 500px
Desktop: 1024px+
Layout: según diseño (3-4 cols)
Hero height: 100vh
Maps height: 600px
Container: max-width 1200px centrado
═══════════════════════════════════════════════════════════════
OPTIMIZACIONES
═══════════════════════════════════════════════════════════════
PERFORMANCE:
✓ Lazy loading de iframes (loading="lazy")
✓ Lazy loading de imágenes
✓ Async loading de Google Maps
✓ Minificar CSS/JS (comentar para desarrollo)
✓ Usar webp para imágenes si es posible
✓ Defer non-critical JS
SEO:
✓ Meta tags completos (title, description, keywords)
✓ Open Graph tags para compartir en redes
✓ Estructura semántica HTML5
✓ Headings jerárquicos (H1 único, H2, H3)
✓ Alt text en todas las imágenes
✓ Schema.org markup para local business
ACCESIBILIDAD:
✓ ARIA labels en botones/links
✓ Focus visible en elementos interactivos
✓ Contraste de color WCAG AA
✓ Tamaño de toque mínimo 44x44px
✓ Navegación por teclado funcional
═══════════════════════════════════════════════════════════════
META TAGS REQUERIDOS
═══════════════════════════════════════════════════════════════
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>PompinHouse - Tu refugio en Ushuaia | Alojamiento en el Fin del Mundo</title>
  <meta name="title" content="PompinHouse - Tu refugio en Ushuaia | Alojamiento en el Fin del Mundo">
  <meta name="description" content="Alojamiento acogedor en Ushuaia, Tierra del Fuego. Ubicación estratégica a 10 minutos del centro. WiFi, calefacción, guía turística incluida.">
<meta name="keywords" content="alojamiento ushuaia, hospedaje ushuaia, cabaña ushuaia, airbnb ushuaia, fin del mundo, patagonia, tierra del fuego">
  <meta name="author" content="PompinHouse">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://pompinhouse.com/">
  <meta property="og:title" content="PompinHouse - Tu refugio en Ushuaia">
  <meta property="og:description" content="Alojamiento acogedor en el Fin del Mundo. WiFi, calefacción, guía turística incluida.">
  <meta property="og:image" content="https://pompinhouse.com/images/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://pompinhouse.com/">
  <meta property="twitter:title" content="PompinHouse - Tu refugio en Ushuaia">
  <meta property="twitter:description" content="Alojamiento acogedor en el Fin del Mundo.">
  <meta property="twitter:image" content="https://pompinhouse.com/images/og-image.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
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
  </script>
  
  <!-- Font Awesome (para íconos) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts (opcional) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
═══════════════════════════════════════════════════════════════
FUNCIONALIDADES JAVASCRIPT
═══════════════════════════════════════════════════════════════
Smooth Scroll a secciones
Tabs interactivos (Qué hacer)
Acordeón (Tips locales)
Copiar WiFi password al clipboard
Animaciones scroll (Intersection Observer)
Loading spinner inicial
WhatsApp floating button con pulse animation
Toast notifications (para copy WiFi)
Lazy loading de iframes
Mobile menu (si hubiera navbar)
═══════════════════════════════════════════════════════════════
ESTRUCTURA DE ARCHIVOS
═══════════════════════════════════════════════════════════════
/pompinhouse-landing/
│
├── index.html                 (archivo principal)
│
├── css/
│   └── styles.css            (estilos custom adicionales)
│
├── js/
│   └── main.js               (JavaScript interactividad)
│
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg       (fondo hero)
│   │   ├── og-image.jpg      (para compartir redes)
│   │   └── favicon.png       (favicon)
│   │
│   └── documents/
│       └── mapa-ushuaia.pdf  (mapa turístico descargable)
│
└── README.md                  (documentación)
═══════════════════════════════════════════════════════════════
INSTRUCCIONES ESPECIALES
═══════════════════════════════════════════════════════════════
PRIORIDAD MOBILE: Diseñar primero para mobile, luego escalar
PERFORMANCE: Página debe cargar en <3 segundos en 3G
IMÁGENES: Usar placeholders de Unsplash con query "ushuaia patagonia mountains"
GOOGLE MAPS: Dejar comentarios claros para reemplazar iframes con los reales
CONTACTOS: Usar +54 2901 5XX-XXXX como placeholder (reemplazar después)
TESTING: Probar en Chrome, Safari, Firefox (mobile + desktop)
ACCESIBILIDAD: Navegable completamente por teclado
NO usar jQuery u otras librerías pesadas
Comentar código claramente en español
Incluir console.log para debugging donde corresponda
═══════════════════════════════════════════════════════════════
ENTREGABLES
═══════════════════════════════════════════════════════════════
Generar:
✅ index.html (completo y funcional)
✅ styles.css (estilos custom adicionales)
✅ main.js (todas las funcionalidades)
✅ README.md (instrucciones de uso y deployment)
El código debe estar:
Limpio y bien comentado
Optimizado para performance
Listo para producción
Fácil de mantener y actualizar
═══════════════════════════════════════════════════════════════
¿Alguna duda antes de empezar a generar el código?
---

## 📋 CHECKLIST PRE-CÓDIGO

Antes de que Claude Code genere el código, necesito que me confirmes estos datos REALES para reemplazar los placeholders:

### 📞 CONTACTOS:
[ ] WhatsApp Pablo: +54 2901 502672__
[ ] Email: pablomartin.gatica@gmail.com
[ ] Marcos Vargas (Guía)
WhatsApp: +54 2901555555
[ ] Xalpen Transportes:
WhatsApp: +54 2901111111
### 🔐 WIFI:
[ ] Red: Remolcoy
[ ] Contraseña: faltacontrseña
### 🗺️ GOOGLE MAPS:
[ ] Ya tenés creado el mapa en Google My Maps?
Sí [ ]  No [ X]
[ ] Link del mapa (si ya lo tenés):
https://www.google.com/maps/d/embed?mid=____
### 📸 IMÁGENES:
[ ] Tenés foto de PompinHouse para el hero?
Sí [ ]  No [X ] (usar placeholder Unsplash)
---

Una vez me pases estos datos, copiás el prompt completo en Claude Code y listo! 🚀

¿Tenés ya alguno de estos datos?
