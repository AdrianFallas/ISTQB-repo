const modalIdioma = document.getElementById('modalIdioma');
let urlDestino = ''; // Variable para guardar la URL temporalmente


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
