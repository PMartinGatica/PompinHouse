/* ═══════════════════════════════════════════════════════════════
   PompinHouse - JavaScript Functionality
   Todas las funcionalidades interactivas de la landing page
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// HEADER & MOBILE MENU
// ═══════════════════════════════════════════════════════════════

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        menu.classList.add('open');
        btn.classList.add('open');
        btn.innerHTML = '<i class="fas fa-times"></i>';
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    
    if (menu && menu.classList.contains('open')) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            toggleMobileMenu();
        }
    }
});

// Sticky Header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

window.addEventListener('load', function() {
  console.log('✅ Página cargada completamente');
});

// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ DOM cargado - Inicializando funcionalidades');

  // Smooth scroll para todos los links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        console.log('📍 Navegando a:', targetId);
      }
    });
  });

  // Inicializar todas las funcionalidades
  initScrollAnimations();
  initTabSystem();
  initAccordion();
  console.log('✅ Todas las funcionalidades inicializadas');
});

// ═══════════════════════════════════════════════════════════════
// ANIMACIONES AL HACER SCROLL
// ═══════════════════════════════════════════════════════════════

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        console.log('👁️ Elemento visible:', entry.target.id || entry.target.className);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clase animate-on-scroll
  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
  });

  console.log('✅ Scroll animations inicializadas');
}

// ═══════════════════════════════════════════════════════════════
// SISTEMA DE TABS (Qué hacer en Ushuaia)
// ═══════════════════════════════════════════════════════════════

let currentTab = 'senderos';

function switchTab(tabName) {
  console.log('🔄 Cambiando a tab:', tabName);

  // Ocultar todos los contenidos
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Desactivar todos los botones
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });

  // Mostrar contenido seleccionado
  const selectedContent = document.getElementById('content-' + tabName);
  if (selectedContent) {
    selectedContent.classList.remove('hidden');
  }

  // Activar botón seleccionado
  const selectedButton = document.getElementById('tab-' + tabName);
  if (selectedButton) {
    selectedButton.classList.add('active');
  }

  currentTab = tabName;
  console.log('✅ Tab activa:', currentTab);
}

function initTabSystem() {
  // Asegurar que la primera tab esté activa al cargar
  switchTab('senderos');
  console.log('✅ Sistema de tabs inicializado');
}

// ═══════════════════════════════════════════════════════════════
// ACORDEÓN (Tips locales)
// ═══════════════════════════════════════════════════════════════

let currentAccordion = null;

function toggleAccordion(id) {
  console.log('🔄 Toggle acordeón:', id);

  const content = document.getElementById('content-' + id);
  const icon = document.getElementById('icon-' + id);

  if (!content || !icon) {
    console.error('❌ Elemento de acordeón no encontrado:', id);
    return;
  }

  // Si clickeamos el mismo acordeón que está abierto, lo cerramos
  if (currentAccordion === id) {
    content.classList.remove('open');
    content.style.maxHeight = '0';
    icon.classList.remove('rotate');
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
    currentAccordion = null;
    console.log('✅ Acordeón cerrado:', id);
  } else {
    // Cerrar el acordeón anterior si existe
    if (currentAccordion) {
      const prevContent = document.getElementById('content-' + currentAccordion);
      const prevIcon = document.getElementById('icon-' + currentAccordion);
      if (prevContent && prevIcon) {
        prevContent.classList.remove('open');
        prevContent.style.maxHeight = '0';
        prevIcon.classList.remove('rotate');
        prevIcon.classList.remove('fa-minus');
        prevIcon.classList.add('fa-plus');
      }
    }

    // Abrir el nuevo acordeón
    content.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.classList.add('rotate');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
    currentAccordion = id;
    console.log('✅ Acordeón abierto:', id);
  }
}

function initAccordion() {
  // Asegurar que todos los acordeones empiecen cerrados
  const accordions = ['clima', 'senderos-tips', 'dinero', 'emergencias'];
  accordions.forEach(id => {
    const content = document.getElementById('content-' + id);
    if (content) {
      content.style.maxHeight = '0';
    }
  });
  console.log('✅ Sistema de acordeón inicializado');
}

// ═══════════════════════════════════════════════════════════════
// COPIAR CONTRASEÑA WIFI
// ═══════════════════════════════════════════════════════════════

function copyWifiPassword() {
  const password = document.getElementById('wifi-password').textContent;

  // Usar Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log('✅ Contraseña copiada:', password);
        showToast('Contraseña copiada al portapapeles!');
      })
      .catch(err => {
        console.error('❌ Error al copiar:', err);
        // Fallback a método antiguo
        copyToClipboardFallback(password);
      });
  } else {
    // Fallback para navegadores antiguos
    copyToClipboardFallback(password);
  }
}

// Método fallback para copiar al portapapeles
function copyToClipboardFallback(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('✅ Contraseña copiada (fallback):', text);
      showToast('Contraseña copiada al portapapeles!');
    } else {
      console.error('❌ No se pudo copiar (fallback)');
      showToast('Error al copiar. Copia manualmente: ' + text, 'error');
    }
  } catch (err) {
    console.error('❌ Error en fallback:', err);
    showToast('Error al copiar. Copia manualmente: ' + text, 'error');
  }

  document.body.removeChild(textArea);
}

// ═══════════════════════════════════════════════════════════════
// TOAST NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════

function showToast(message, type = 'success') {
  console.log('📢 Toast:', message);

  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!toast || !toastMessage) {
    console.error('❌ Elemento toast no encontrado');
    return;
  }

  // Configurar mensaje y estilo
  toastMessage.textContent = message;

  if (type === 'success') {
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 z-[10000]';
  } else if (type === 'error') {
    toast.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 z-[10000]';
  }

  // Mostrar toast
  toast.classList.add('show');

  // Ocultar después de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    console.log('✅ Toast ocultado');
  }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// WHATSAPP FLOATING BUTTON ANIMATION
// ═══════════════════════════════════════════════════════════════

// El botón ya tiene animación CSS, pero podemos añadir lógica adicional si es necesario
document.addEventListener('DOMContentLoaded', function() {
  const whatsappBtn = document.getElementById('whatsapp-float');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      console.log('📱 Botón WhatsApp clickeado');
    });
  }
});

// ═══════════════════════════════════════════════════════════════
// LAZY LOADING DE IFRAMES
// ═══════════════════════════════════════════════════════════════

// Los iframes ya tienen loading="lazy" en HTML
// Esta función es para navegadores que no lo soportan nativamente
function initLazyLoading() {
  if ('loading' in HTMLIFrameElement.prototype) {
    console.log('✅ Navegador soporta lazy loading nativo');
    return;
  }

  console.log('⚠️ Lazy loading no soportado, usando fallback');

  const iframes = document.querySelectorAll('iframe[loading="lazy"]');

  const iframeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframeObserver.unobserve(iframe);
          console.log('✅ Iframe cargado:', iframe.src);
        }
      }
    });
  });

  iframes.forEach(iframe => {
    iframeObserver.observe(iframe);
  });
}

// ═══════════════════════════════════════════════════════════════
// DETECCIÓN DE SCROLL PARA EFECTOS ADICIONALES
// ═══════════════════════════════════════════════════════════════

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Detectar dirección del scroll
  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo
    // console.log('↓ Scroll down');
  } else {
    // Scroll hacia arriba
    // console.log('↑ Scroll up');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// ═══════════════════════════════════════════════════════════════
// ANALYTICS Y TRACKING (OPCIONAL)
// ═══════════════════════════════════════════════════════════════

// Función para trackear clicks en links externos
function trackExternalLink(url, category) {
  console.log('📊 Track:', category, url);

  // Aquí puedes integrar Google Analytics, Mixpanel, etc.
  // Ejemplo con Google Analytics (descomentar si está instalado):
  /*
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      'event_category': category,
      'event_label': url
    });
  }
  */
}

// Añadir tracking a links de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');

  whatsappLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackExternalLink(this.href, 'WhatsApp');
    });
  });

  console.log('✅ Tracking de WhatsApp configurado');
});

// ═══════════════════════════════════════════════════════════════
// MANEJO DE ERRORES GLOBAL
// ═══════════════════════════════════════════════════════════════

window.addEventListener('error', function(e) {
  console.error('❌ Error global:', e.message, e.filename, e.lineno);
  // Aquí puedes enviar el error a un servicio de logging
});

// ═══════════════════════════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════════════════════════

// Detectar dispositivo móvil
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Detectar si el usuario está online
window.addEventListener('online', function() {
  console.log('✅ Conectado a Internet');
});

window.addEventListener('offline', function() {
  console.warn('⚠️ Sin conexión a Internet');
  showToast('Sin conexión a Internet', 'error');
});

// ═══════════════════════════════════════════════════════════════
// LOG DE INICIALIZACIÓN
// ═══════════════════════════════════════════════════════════════

console.log(`
╔════════════════════════════════════════╗
║     🏡 PompinHouse Landing Page       ║
║        Tu refugio en Ushuaia          ║
║                                        ║
║  ✅ JavaScript cargado correctamente  ║
║  📱 Mobile: ${isMobile() ? 'Sí' : 'No'}                       ║
║  🌐 Online: ${navigator.onLine ? 'Sí' : 'No'}                       ║
╚════════════════════════════════════════╝
`);

// ═══════════════════════════════════════════════════════════════
// EXPORT (si se usa como módulo)
// ═══════════════════════════════════════════════════════════════

// Si usas módulos ES6, descomenta:
/*
export {
  switchTab,
  toggleAccordion,
  copyWifiPassword,
  showToast
};
*/
