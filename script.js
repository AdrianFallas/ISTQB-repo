let idiomaSeleccionado = localStorage.getItem('idioma') || 'es'; // idioma por defecto 'es' si no hay nada en localStorage
if (!localStorage.getItem('idioma')) {
    localStorage.setItem('idioma', 'es');
}

const theme = localStorage.getItem('theme') || 'light';
if (theme === 'dark') {
  document.body.classList.add('dark-mode');
}

function navigateTo(urlDestino) {
  redirigir(urlDestino); 
}

function selectLanguaje(idioma) {
  idiomaSeleccionado = idioma; 
  localStorage.setItem('idioma', idiomaSeleccionado); // Guarda para siempre
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const theme = element.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem('theme', theme);
}

function redirigir(urlDestino) {
  const urlFinal = `${urlDestino}?lang=${idiomaSeleccionado}`; // Directo, sin 'this'
  window.location.href = urlFinal;
}