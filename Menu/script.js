
const modalIdioma = document.getElementById('modalIdioma');
let urlDestino = ''; // Variable para guardar la URL temporalmente

function toggleDropdown(element) {
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', !isExpanded);
    element.querySelector('.dropdown-content').style.display = isExpanded ? 'none' : 'block';
    element.querySelector('.arrow').innerText = isExpanded ? '▸' : '▾';
}

function navigateTo(url) {
    urlDestino = url; // Guarda la URL de destino
    modalIdioma.showModal(); // Muestra el modal
}

function redirigir(idioma) {
    modalIdioma.close(); // Cierra el modal
    const urlFinal = `${urlDestino}?lang=${idioma}`; // Concatena el idioma a la URL guardada
    window.location.href = urlFinal; // Redirige
}

// Escuchador de eventos para los botones dentro del modal
document.querySelector('.opciones-idioma').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const idiomaSeleccionado = event.target.dataset.lang;
        redirigir(idiomaSeleccionado);
    }
});

// Toggles dropdown open/close
function toggleDropdown(dropdownElem) {
    const isOpen = dropdownElem.classList.contains('open');
    if (isOpen) {
        dropdownElem.classList.remove('open');
        dropdownElem.setAttribute('aria-expanded', 'false');
    } else {
        dropdownElem.classList.add('open');
        dropdownElem.setAttribute('aria-expanded', 'true');
    }
}

// Hacer accesible con teclado (Enter o space abre/cierra dropdown)
document.querySelectorAll('.dropdown-card').forEach(dropdown => {
    dropdown.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown(dropdown);
        }
    });
});

// Cerrar el dropdown al hacer clic fuera de él
window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-card').forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.setAttribute('aria-expanded', 'false');
            dropdown.querySelector('.dropdown-content').style.display = 'none';
            dropdown.querySelector('.arrow').innerText = '▸';
        }
    });
});