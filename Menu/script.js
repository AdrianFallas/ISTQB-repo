// Variables globales (si necesitas más, agrégalas aquí)
let urlDestino = ''; // Variable para guardar la URL temporalmente
const params = new URLSearchParams(window.location.search);
const idioma = params.get('lang') || 'es';

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

// Función de navegación (sin cambios mayores)
function navigateTo(url) {
    urlDestino = url;
    const urlFinal = `../Vista/index.html?name=${urlDestino}&lang=${idioma}`;
    console.log('Redirigiendo a:', urlFinal);
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

// Cerrar dropdowns al hacer clic fuera (mejorado para no interferir)
window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-card.open').forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
            dropdown.setAttribute('aria-expanded', 'false');
            dropdown.querySelector('.arrow').innerText = '▸';
        }
    });
});