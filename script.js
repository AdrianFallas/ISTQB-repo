//const modalIdioma = document.getElementById('modalIdioma');
let urlDestino = ''; // Variable para guardar la URL temporalmente
const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    console.log("tema actual:", theme);
  


function navigateTo(url) {
    urlDestino = url; // Guarda la URL de destino

    //ESTO ES SOLO PARA LA VERSION INICIAL, COMENTAR PARA QUE FUNCIONE EL MODAL COMO ANTES
    redirigir('es'); // Redirige directamente al español sin mostrar el modal


   // modalIdioma.showModal(); // Muestra el modal
}



 function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const theme = element.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem('theme', theme);
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
