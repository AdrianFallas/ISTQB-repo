//const modalIdioma = document.getElementById('modalIdioma');
let urlDestino = ''; // Variable para guardar la URL temporalmente


function navigateTo(url) {
    urlDestino = url; // Guarda la URL de destino

    //ESTO ES SOLO PARA LA VERSION INICIAL, COMENTAR PARA QUE FUNCIONE EL MODAL COMO ANTES
    redirigir('es'); // Redirige directamente al español sin mostrar el modal


   // modalIdioma.showModal(); // Muestra el modal
}

function redirigir(idioma) {
    //modalIdioma.close(); // Cierra el modal
    const urlFinal = `${urlDestino}?lang=${idioma}`; // Concatena el idioma a la URL guardada
    window.location.href = urlFinal; // Redirige
}

//DESCOMENTAR CUANDO SE QUIERA USAR EL MODAL PARA LA SELECCION DE IDIOMA

// Escuchador de eventos para los botones dentro del modal
// document.querySelector('.opciones-idioma').addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         const idiomaSeleccionado = event.target.dataset.lang;
//         redirigir(idiomaSeleccionado);
//     }
// });
