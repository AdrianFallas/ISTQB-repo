class QuizApp {
  constructor() {
    // Estado
    this.questions = [];
    this.translations = {};
    this.currentQuestionIndex = 0;

    // DOM Elements
    this.questionsNameEl = document.getElementById('questions-name');
    this.quizForm = document.getElementById('quiz-form');
    this.questionsContainer = document.getElementById('questions-container');
    this.nextBtn = document.getElementById('next-btn');
    const params = new URLSearchParams(window.location.search);
    this.quizType = params.get('name') || 'Preguntas Frecuentes';  // Tipo de quiz (ej. 'Instructions' o 'performance/example1')
    const idioma = params.get('lang') || localStorage.getItem('idioma') || 'es'; // Prioriza URL, luego localStorage, luego 'es'
    this.languageSelector = idioma;
    this.homeSpan = document.getElementById('home');
    this.btnHome = document.getElementById('btn-home');
  }

  async init() {
    await this.loadUniversalTranslations();  // Carga traducciones universales para botnes y mensajes generales
    await this.loadTranslationScript();  // Carga dinámica del script de traducciones
    this.createDynamicElements();
    this.addEventListeners();
    this.loadLanguageData();
    this.asignarTraducciones();
    this.questionsNameEl.textContent = this.translations.instructions || 'Preguntas Frecuentes';
  }

  asignarTraducciones() {

    this.homeSpan.textContent = this.translations.goToHome || 'Ir al inicio';
  }

  // Método para cargar traducciones universales (igual patrón que loadTranslationScript)
  async loadUniversalTranslations() {
    const scriptPath = `../Utility/Traducciones/script.${this.languageSelector}.js`;  // Ruta al archivo universal
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');  // Crea elemento <script> dinámicamente
      script.src = scriptPath;  // Asigna la ruta del archivo
      script.onload = () => {
        // Verifica que el script haya definido la variable global (ej. window.esTranslations)
        const globalVarName = `${this.languageSelector}Translations`;  // ej. 'esTranslations'
        if (window[globalVarName] && window[globalVarName].texts) {
          this.translations = window[globalVarName].texts;  // Asigna los textos
          resolve();  // Resuelve la Promise si todo está bien
        } else {
          reject(new Error(`Traducciones universales no encontradas o mal definidas en ${scriptPath}. Verifica que ${globalVarName}.texts exista.`));
        }
      };
      script.onerror = () => {
        reject(new Error(`Error al cargar el archivo de traducciones universales desde ${scriptPath}.`));
      };
      document.head.appendChild(script);  // Agrega el script al DOM para que se cargue
    });
  }

  // Carga dinámica del archivo de traducciones
  async loadTranslationScript() {
    const scriptPath = `./traducciones/script.${this.languageSelector}.js`;  // Ej. '../traducciones/script.es.js'
    //const scriptPath = `../${this.quizType}/traducciones/script.${this.languageSelector}.js`;  // Ej. './acceptance/traducciones/es.js'
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptPath;
      script.onload = () => {
        // Verifica y mapea la variable global existente (ej. data_es) a window.quizData
        const globalVarName = `data_${this.languageSelector}`;  // ej. 'data_es'
        if (window[globalVarName]) {
          window.quizData = window[globalVarName];  // Asigna data_es a window.quizData
          resolve();
        } else {
          reject(new Error(`Datos de traducción no encontrados en el script cargado. Verifica que ${globalVarName} esté definido en ${scriptPath}.`));
        }
      };
      script.onerror = () => reject(new Error(`Error al cargar ${scriptPath}`));
      document.head.appendChild(script);
    });
  }


  createDynamicElements() {
    // Crear feedbackEl
    this.feedbackEl = document.createElement('div');
    this.feedbackEl.style.fontStyle = 'italic';
    this.feedbackEl.style.marginTop = '10px';
    this.questionsContainer.parentNode.insertBefore(this.feedbackEl, this.questionsContainer.nextSibling);
  }


  normalizeText(text) {
    return text.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // elimina tildes
      .replace(/[.,!?¡¿]$/g, '') // elimina puntuación final
      .trim();
  }

  // ✅ CAMBIO PRINCIPAL: Renderiza TODAS las preguntas
  loadLanguageData() {
    if (!window.quizData) {
      console.error('Datos de traducción no disponibles.');
      return;
    }
    this.questions = window.quizData.questions;

    // ✅ RENDERIZA TODAS las preguntas en lugar de una sola
    this.renderAllQuestions();

    this.updateNextButtonText();
    this.nextBtn.style.display = 'inline-block';
  }

  // ✅ MÉTODO NUEVO: Renderiza todas las preguntas como dropdowns
  renderAllQuestions() {
    this.questionsContainer.innerHTML = ''; // Limpia contenedor

    // ✅ Crea un dropdown para CADA pregunta
    this.questions.forEach((question, index) => {
      const dropdownCard = this.createQuestionDropdown(question, index);
      this.questionsContainer.appendChild(dropdownCard);
    });
  }

  // ✅ Método actualizado: Agrega índice para referencia
  createQuestionDropdown(question, index) {
    const dropdownCard = document.createElement('div');
    dropdownCard.className = 'dropdown-card';
    dropdownCard.tabIndex = 0;
    dropdownCard.setAttribute('aria-expanded', 'false');
    dropdownCard.setAttribute('aria-label', `Pregunta ${index + 1}: ${question.question}`);
    console.log('Pregunta:', question.answer);
    // ✅ DESPUÉS (funciona con null/undefined)
    const formattedAnswer = (question.answer || 'Respuesta no disponible')
      .toString()  // Convierte a string PRIMERO
      .replace(/\n/g, '<br>');
    console.log('Pregunta:', question.question);
    console.log('Respuesta formateada:', formattedAnswer);

    dropdownCard.innerHTML = `
      <div class="card card-header" onclick="quizApp.toggleDropdown(this.parentElement)">
        <div>
          <h3>${question.question}</h3>
        </div>
        <span class="arrow">▸</span>
      </div>
      <div class="dropdown-content">
        <div class="dropdown-item">
          <p class="answer">${formattedAnswer}</p>
        </div>
      </div>
    `;

    return dropdownCard;
  }

  //Toggle del dropdown (ahora es método de la clase)
  toggleDropdown(dropdownElem) {
    const isOpen = dropdownElem.classList.contains('open');

    // Cierra otros dropdowns
    document.querySelectorAll('.dropdown-card.open').forEach(openDropdown => {
      if (openDropdown !== dropdownElem) {
        openDropdown.classList.remove('open');
        openDropdown.setAttribute('aria-expanded', 'false');
        openDropdown.querySelector('.arrow').innerText = '▸';
      }
    });

    // Toggle actual
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



  updateNextButtonText() {
    this.nextBtn.textContent = this.translations.home
  }

  nextFrecuencyQuestion() {
 
      this.irAInicio();

  }



  addEventListeners() {
    this.nextBtn.addEventListener('click', () => {
      if (!this.modoVozActivo) this.nextFrecuencyQuestion();
    });

    this.btnHome.addEventListener('click', () => {
      this.irAInicio();
    });


  }

  irAInicio() {
    window.location.href = '../index.html?lang=' + this.languageSelector + '&theme=' + (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  }

}

// Event Listeners globales (fuera de la clase)
window.addEventListener('click', (event) => {
  document.querySelectorAll('.dropdown-card.open').forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      dropdown.setAttribute('aria-expanded', 'false');
      dropdown.querySelector('.arrow').innerText = '▸';
    }
  });
});

// Accesibilidad (Enter/Space)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const dropdown = e.target.closest('.dropdown-card');
    if (dropdown) {
      e.preventDefault();
      quizApp.toggleDropdown(dropdown);
    }
  }
});


// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new QuizApp();
  quizApp.init();
});

 function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const theme = element.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem('theme', theme);
}