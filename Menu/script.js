// Variables globales y configuración
let urlDestino = ''; // Variable para guardar la URL temporalmente
const params = new URLSearchParams(window.location.search);
const idioma = params.get('lang') || 'es';
let universalTranslations = {}; // Para almacenar traducciones universales


// Función unificada para toggle de dropdowns
function toggleDropdown(dropdownElem) {
    const isOpen = dropdownElem.classList.contains('open');
    
    // Cierra todos los dropdowns abiertos antes de abrir el actual
    document.querySelectorAll('.dropdown-card.open').forEach(openDropdown => {
        if (openDropdown !== dropdownElem) {
            openDropdown.classList.remove('open');
            openDropdown.setAttribute('aria-expanded', 'false');
            openDropdown.querySelector('.arrow').innerText = '▸'; // Flecha cerrada
        }
    });
    
    // Toggle del dropdown actual
    if (isOpen) {
        dropdownElem.classList.remove('open');
        dropdownElem.setAttribute('aria-expanded', 'false');
        dropdownElem.querySelector('.arrow').innerText = '▸';
    } else {
        dropdownElem.classList.add('open');
        dropdownElem.setAttribute('aria-expanded', 'true');
        dropdownElem.querySelector('.arrow').innerText = '▾';
    }
}

// Función de navegación
function navigateTo(url) {
    urlDestino = url;
    const urlFinal= `../Vista/Instructions/Instructions.html?name=${urlDestino}&lang=${idioma}`;
    //const urlFinal = `../Vista/index.html?name=${urlDestino}&lang=${idioma}`;
    window.location.href = urlFinal;
}

// Event listeners para accesibilidad
document.querySelectorAll('.dropdown-card').forEach(dropdown => {
    dropdown.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown(dropdown);
        }
    });
});

// Cerrar dropdowns al hacer clic fuera de ellos
window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-card.open').forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
            dropdown.setAttribute('aria-expanded', 'false');
            dropdown.querySelector('.arrow').innerText = '▸';
        }
    });
});

 async function loadUniversalTranslations() {
       const scriptPath = `../Utility/Traducciones/script.${idioma}.js`; // Ruta al archivo
       return new Promise((resolve, reject) => {
           const script = document.createElement('script');
           script.src = scriptPath;
           script.onload = () => {
               const globalVarName = `${idioma}Translations`; // ej. 'esTranslations'
               if (window[globalVarName] && window[globalVarName].texts) {
                   universalTranslations = window[globalVarName].texts; // Asigna textos
                   console.log('Traducciones universales cargadas:', universalTranslations);
                   resolve();
               } else {
                   reject(new Error(`Traducciones universales no encontradas en ${scriptPath}.`));
               }
           };
           script.onerror = () => reject(new Error(`Error al cargar ${scriptPath}`));
           document.head.appendChild(script);
       });
   }

    // Función para actualizar textos de botones
   function updateButtonTexts() {
       // Selecciona todos los botones en cards y dropdowns
       const buttons = document.querySelectorAll('.card button, .dropdown-item button');
       buttons.forEach(button => {
           // Asume que todos los botones de navegación usan "goToCourse"
           if (universalTranslations.goToQuiz) {
               button.textContent = universalTranslations.goToQuiz || 'Go to course';
           }
       });
   }

     // Inicialización: Cargar traducciones y actualizar UI
   document.addEventListener('DOMContentLoaded', async () => {
       try {
           await loadUniversalTranslations(); // Carga traducciones
           updateButtonTexts(); // Actualiza textos de botones
       } catch (error) {
           console.error('Error cargando traducciones:', error);
           // Fallback: Mantén textos por defecto
       }
   });
