// Variable global para el idioma actual
let currentLang = 'es';

// Función para obtener texto anidado del objeto de traducciones
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

// Función principal para actualizar textos
function updateContent() {
    // Actualizar elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[currentLang], key);
        
        if (translation) {
            // Si el elemento es un input o textarea con placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                // Manejar HTML dentro de las traducciones (ej: <br>)
                element.innerHTML = translation;
            }
        }
    });

    // Actualizar atributos específicos (ej: alt en imágenes)
    const altElements = document.querySelectorAll('[data-i18n-alt]');
    altElements.forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        const translation = getNestedTranslation(translations[currentLang], key);
        if (translation) {
            element.alt = translation;
        }
    });

    // Actualizar el estado visual de los botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('scale-110', 'opacity-100', 'ring-2', 'ring-primary', 'ring-offset-2');
            btn.classList.remove('opacity-60', 'hover:opacity-80');
        } else {
            btn.classList.remove('scale-110', 'opacity-100', 'ring-2', 'ring-primary', 'ring-offset-2');
            btn.classList.add('opacity-60', 'hover:opacity-80');
        }
    });

    // Guardar preferencia
    localStorage.setItem('pompinHouseLang', currentLang);
    
    // Actualizar atributo lang del html
    document.documentElement.lang = currentLang;
}

// Función para cambiar idioma
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        updateContent();
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar idioma guardado o detectar navegador
    const savedLang = localStorage.getItem('pompinHouseLang');
    const browserLang = navigator.language.split('-')[0];
    
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else if (translations[browserLang]) {
        currentLang = browserLang;
    } else {
        currentLang = 'es'; // Default
    }

    updateContent();
});
