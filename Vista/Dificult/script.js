class QuizApp {
  constructor() {
    // Estado
    this.questions = [];
    this.translations = {};
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.difficultyLevel = null;

    // Elementos dinámicos
    this.feedbackEl = null;

    // DOM Elements
    this.questionsNameEl = document.getElementById('questions-name');
    this.quizForm = document.getElementById('quiz-form');
    this.questionsContainer = document.getElementById('questions-container');
    this.nextBtn = document.getElementById('next-btn');
    const params = new URLSearchParams(window.location.search);
    this.quizType = params.get('name') || 'Dificultad';  // Tipo de quiz (ej. 'Instructions' o 'performance/example1')
    const idioma = params.get('lang') || 'es';
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
    this.questionsNameEl.textContent = this.translations.instructions || 'Dificultad';
  }

    setFeedback(message) {
    this.feedbackEl.textContent = message;
  }

  asignarTraducciones() {

    this.homeSpan.textContent = this.translations.goToHome || 'Ir al inicio';
  }

    createDynamicElements() {
    // Crear feedbackEl
    this.feedbackEl = document.createElement('div');
    this.feedbackEl.style.fontStyle = 'italic';
    this.feedbackEl.style.marginTop = '10px';
    this.questionsContainer.parentNode.insertBefore(this.feedbackEl, this.questionsContainer.nextSibling);
  }

  // Método para cargar traducciones universales (igual patrón que loadTranslationScript)
  async loadUniversalTranslations() {
    const scriptPath = `../../Utility/Traducciones/script.${this.languageSelector}.js`;  // Ruta al archivo universal
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
    const scriptPath ='./traducciones/script.es.js';  // Ej. '../acceptance/traducciones/script.es.js'
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


  normalizeText(text) {
    return text.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // elimina tildes
      .replace(/[.,!?¡¿]$/g, '') // elimina puntuación final
      .trim();
  }

  loadLanguageData() {
    if (!window.quizData) {
      console.error('Datos de traducción no disponibles.');
      return;
    }
    this.questions = window.quizData.questions;
    this.renderQuestion();
    this.updateNextButtonText();
    this.nextBtn.style.display = 'inline-block';
  }

  renderQuestion() {
    const q = this.questions[this.currentQuestionIndex];
    this.questionsContainer.innerHTML = '';

    // Título
    const questionTitle = document.createElement('h2');
    const questionDiv = document.createElement('div');
    questionTitle.textContent = q.question;
    this.questionsContainer.appendChild(questionTitle);
    this.questionsContainer.appendChild(questionDiv);
    
    // Opciones
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    q.options.forEach((option, i) => {
      const optionElement = this.createOption(
        'radio',
        'option', // nombre consistente para inputs
        i,
        option,
        this.isOptionSelected(i),
        () => this.handleOptionChange(i)
      );
      optionsDiv.appendChild(optionElement);
    });

    this.questionsContainer.appendChild(optionsDiv);
  }

  createOption(type, name, value, labelText, checked, onChange) {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '8px';
    wrapper.style.marginBottom = '16px';

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.value = value;
    input.id = `${name}_opt${value}`;
    input.checked = checked;
    input.style.margin = '0';
    input.style.alignSelf = 'center';
    input.addEventListener('change', onChange);

    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = labelText;
    label.style.margin = '0';
    label.style.display = 'flex';
    label.style.alignItems = 'center';

    wrapper.appendChild(input);
    wrapper.appendChild(label);

    return wrapper;
  }

  isOptionSelected(index) {
      return this.userAnswers[this.currentQuestionIndex] === index;
  }

  handleOptionChange(index) {
      this.userAnswers[this.currentQuestionIndex] = index;
  }

  updateNextButtonText() {
    this.nextBtn.textContent = this.translations.next;
  }

  avanzarAQuiz() {
    const selected = this.userAnswers[this.currentQuestionIndex];
      if (selected === null || selected === undefined) {
        this.setFeedback(this.translations.selectDifficultLevel|| 'Por favor, selecciona un nivel de dificultad.');
        return;
      }
      switch (selected) {
        case 0:
          this.difficultyLevel = 'easy';
          break;
        case 1:
          this.difficultyLevel = 'medium';
          break;
        case 2:
          this.difficultyLevel = 'hard';
          break;
        default:
          this.difficultyLevel = 'easy'; // Valor por defecto
      }
    const nextPage = `../Quiz/index.html?name=${this.quizType}&lang=${this.languageSelector}&difficulty=${this.difficultyLevel}`;
    window.location.href = nextPage;
  }

  addEventListeners() {
    this.nextBtn.addEventListener('click', () => {
      if (!this.modoVozActivo) this.avanzarAQuiz();
    });

    this.btnHome.addEventListener('click', () => {
      this.irAInicio();
    });


  }

  irAInicio() {
    window.location.href = '../../index.html';
  }

}


// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  const quizApp = new QuizApp();
  quizApp.init();
});
