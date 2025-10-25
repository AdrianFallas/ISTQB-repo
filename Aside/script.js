class QuizApp {
  constructor() {
    const params = new URLSearchParams(window.location.search);
    const idioma = params.get('lang') || 'es';
    this.languageSelector = idioma;
  }

  init() {
  }

}


function showSection(key, element) {
  const contentDiv = document.getElementById("content");
  
  const idioma = window.quizAppInstance?.languageSelector || 'es'; // por si fuera necesario fallback
  
  const variableName = `contentData_${idioma}`;
  const contentObj = window[variableName];
  
  console.log("Idioma seleccionado:", contentObj);
  if(contentObj && contentObj[key]){
    contentDiv.innerHTML = contentObj[key];
  } else {
    contentDiv.innerHTML = "<p>Contenido no disponible.</p>";
  }
  contentDiv.classList.add("fade-in");
  setTimeout(() => contentDiv.classList.remove("fade-in"), 500);
  document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
}



// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.quizAppInstance = new QuizApp();
  window.quizAppInstance.init();
});