class QuizApp {
  constructor() {
    // Estado
    this.questions = [];
    this.translations = {};
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.modoVozActivo = false;
    this.isRecognizing = false;
    this.timer = null;
    this.timeLeft = 2400; // 40 minutos en segundos
    this.recognition = null;
    this.hasRequestedMicPermission = false;

    // DOM Elements
    this.quizForm = document.getElementById('quiz-form');
    this.questionsContainer = document.getElementById('questions-container');
    this.nextBtn = document.getElementById('next-btn');
    this.timerEl = document.getElementById('timer');
    this.resultModal = document.getElementById('result-modal');
    this.resultMessage = document.getElementById('result-message');
    this.restartBtn = document.getElementById('restart-btn');
    this.closeModalBtn = document.getElementById('close-modal');
    this.languageSelector = document.getElementById('language');

    // Elementos dinámicos
    this.feedbackEl = null;
    this.btnActivarVoz = null;
  }

  init() {
    this.createDynamicElements();
    this.setupSpeechRecognition();
    this.addEventListeners();
    this.loadLanguageData(this.languageSelector.value);
    this.startTimer();
  }

  createDynamicElements() {
    // Crear feedbackEl
    this.feedbackEl = document.createElement('div');
    this.feedbackEl.style.fontStyle = 'italic';
    this.feedbackEl.style.marginTop = '10px';
    this.questionsContainer.parentNode.insertBefore(this.feedbackEl, this.questionsContainer.nextSibling);

    // Crear botón activar voz
    this.btnActivarVoz = document.createElement('button');
    this.btnActivarVoz.type = 'button';
    this.btnActivarVoz.id = 'btn-activar-voz';
    this.btnActivarVoz.textContent = 'Contestar por voz';
    this.btnActivarVoz.style.marginLeft = '10px';
    this.nextBtn.parentNode.appendChild(this.btnActivarVoz);
  }

  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta reconocimiento de voz.');
      this.nextBtn.disabled = true;
      this.btnActivarVoz.disabled = true;
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US'; // Se actualizará dinámicamente
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.continuous = true;

    this.recognition.addEventListener('start', () => {
      this.isRecognizing = true;
      this.setFeedback(this.translations.listeningFeedback || 'Escuchando...');
    });

    this.recognition.addEventListener('end', () => {
      this.isRecognizing = false;
      if (this.modoVozActivo && this.currentQuestionIndex < this.questions.length) {
        // Reiniciar automáticamente para mejor UX
        this.recognition.start();
        this.setFeedback(this.translations.listeningFeedback || 'Escuchando...');
      }
    });

    this.recognition.addEventListener('result', (event) => this.handleSpeechResult(event));

    this.recognition.addEventListener('error', (event) => this.handleRecognitionError(event));
  }

  setFeedback(message) {
    this.feedbackEl.textContent = message;
  }

  normalizeText(text) {
    return text.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // elimina tildes
      .replace(/[.,!?¡¿]$/g, '') // elimina puntuación final
      .trim();
  }

  parseSpeechToOptions(speechText, options, mapNumeros) {
    const delimiters = /,| y también | y |opciones |opcion |option | and also | and | options |/;
    const parts = speechText.split(delimiters)
      .map(s => this.normalizeText(s))
      .filter(Boolean);

    const selectedIndices = [];

    parts.forEach(part => {
      if (mapNumeros.hasOwnProperty(part)) {
        const idx = mapNumeros[part];
        if (!selectedIndices.includes(idx)) selectedIndices.push(idx);
      } else {
        options.forEach((opt, i) => {
          if (opt.toLowerCase().startsWith(part) && !selectedIndices.includes(i)) {
            selectedIndices.push(i);
          }
        });
      }
    });

    return selectedIndices;
  }

  handleSpeechResult(event) {
    let speechResult = event.results[event.results.length - 1][0].transcript;
    speechResult = this.normalizeText(speechResult);
    console.log('Reconocido:', speechResult);

    const opciones = this.questions[this.currentQuestionIndex].options;
    const isMultiple = Array.isArray(this.questions[this.currentQuestionIndex].correctAnswer);

      const mapNumeros = {
      'uno': 0, '1': 0 , 'one':0,
      'dos': 1, '2': 1, 'two': 1,
      'tres': 2, '3': 2, 'three' : 2,
      'cuatro': 3, '4': 3, 'four' : 3
    };

    if (isMultiple) {
      const seleccionadas = this.parseSpeechToOptions(speechResult, opciones, mapNumeros);

      if (seleccionadas.length > 0) {
        this.markOptions(seleccionadas);
        this.userAnswers[this.currentQuestionIndex] = seleccionadas;
        this.setFeedback(`Opciones seleccionadas: ${seleccionadas.map(i => opciones[i]).join(', ')}. Di "listo" para continuar.`);
      } else if (speechResult.includes('listo') || speechResult.includes('termine') || speechResult.includes('terminé')) {
        this.setFeedback('Respuesta registrada. Avanzando...');
        setTimeout(() => this.avanzarPregunta(), 1000);
      } else {
        this.setFeedback('No se reconocieron opciones válidas. Por favor intenta de nuevo.');
      }
    } else {
      // Respuesta única
      let opcionSeleccionada = -1;

      for (const key in mapNumeros) {
        if (speechResult.includes(key)) {
          opcionSeleccionada = mapNumeros[key];
          break;
        }
      }

      if (opcionSeleccionada === -1) {
        for (let i = 0; i < opciones.length; i++) {
          if (speechResult.includes(opciones[i].toLowerCase().slice(0, 10))) {
            opcionSeleccionada = i;
            break;
          }
        }
      }

      if (opcionSeleccionada >= 0) {
        this.markOptions([opcionSeleccionada]);
        this.userAnswers[this.currentQuestionIndex] = opcionSeleccionada;
        this.setFeedback(this.translations.answerRegistered || 'Respuesta registrada. Avanzando...');
        setTimeout(() => this.avanzarPregunta(), 1000);
      } else {
        this.setFeedback(this.translations.recognitionFailed || 'No se pudo reconocer la opción. Por favor intenta de nuevo.');
      }
    }
  }

  markOptions(indices) {
    // Marca las opciones en el DOM
    indices.forEach(i => {
      const input = this.quizForm.querySelector(`input[name="option"][value="${i}"]`);
      if (input) input.checked = true;
    });
  }

  handleRecognitionError(event) {
    let mensajeError;

    switch (event.error) {
      case 'no-speech':
        setTimeout(() => {
          if (this.modoVozActivo) this.recognition.start();
        }, 1000);
        mensajeError = 'No se detectó voz. Intenta hablar más claramente.';
        break;
      case 'audio-capture':
        mensajeError = 'No se detectó micrófono. Verifica tu dispositivo.';
        break;
      case 'not-allowed':
      case 'permission-denied':
        mensajeError = 'Permiso de micrófono denegado.';
        this.modoVozActivo = false;
        this.nextBtn.style.display = 'inline-block';
        this.btnActivarVoz.style.display = 'inline-block';
        this.btnActivarVoz.disabled = true;
        if (this.recognition) this.recognition.stop();
        break;
      default:
        mensajeError = 'Ocurrió un error en el reconocimiento de voz.';
    }

    console.error(mensajeError);
    this.setFeedback(mensajeError);
    this.isRecognizing = false;
  }

  loadLanguageData(lang) {
    let data;
    switch (lang) {
      case 'es':
        data = data_es;
        if (this.recognition) this.recognition.lang = 'es-ES';
        break;
      case 'en':
        data = data_en;
        if (this.recognition) this.recognition.lang = 'en-US';
        break;
      case 'pt':
        data = data_pt;
        if (this.recognition) this.recognition.lang = 'pt-PT';
        break;
      default:
        data = data_en;
        if (this.recognition) this.recognition.lang = 'en-US';
    }
    this.questions = data.questions;
    this.translations = data.texts;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.currentQuestionIndex = 0;
    this.timeLeft = 2400;
    this.updateTimerDisplay();
    this.renderQuestion();
    this.updateNextButtonText();
    this.setFeedback('');
    this.modoVozActivo = false;
    this.nextBtn.style.display = 'inline-block';
    this.btnActivarVoz.style.display = 'inline-block';
    if (this.recognition) this.recognition.stop();
  }

  renderQuestion() {
    const q = this.questions[this.currentQuestionIndex];
    this.questionsContainer.innerHTML = '';

    // Título
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${this.currentQuestionIndex + 1}. ${q.question}`;
    this.questionsContainer.appendChild(questionTitle);

    // Imágenes
    const questionDiv = document.createElement('div');
    if (Array.isArray(q.urlImages) && q.urlImages.length > 0) {
      q.urlImages.forEach(imgSrc => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');
        imgContainer.style.margin = '1em 0';
        imgContainer.style.width = '100%';
        imgContainer.style.height = '200px';
        imgContainer.style.backgroundImage = `url('${imgSrc}')`;
        imgContainer.style.backgroundSize = 'contain';
        imgContainer.style.backgroundRepeat = 'no-repeat';
        imgContainer.style.backgroundPosition = 'center';
        questionDiv.appendChild(imgContainer);
      });
    } else if (typeof q.urlImage === 'string' && q.urlImage.trim() !== '') {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');
      imgContainer.style.margin = '1em 0';
      imgContainer.style.width = '100%';
      imgContainer.style.height = '200px';
      imgContainer.style.backgroundImage = `url('${q.urlImage}')`;
      imgContainer.style.backgroundSize = 'contain';
      imgContainer.style.backgroundRepeat = 'no-repeat';
      imgContainer.style.backgroundPosition = 'center';
      questionDiv.appendChild(imgContainer);
    }
    this.questionsContainer.appendChild(questionDiv);

    // Opciones
    const isMultiple = Array.isArray(q.correctAnswer);
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    q.options.forEach((option, i) => {
      const optionElement = this.createOption(
        isMultiple ? 'checkbox' : 'radio',
        'option', // nombre consistente para inputs
        i,
        option,
        this.isOptionSelected(i, isMultiple),
        () => this.handleOptionChange(i, isMultiple, optionsDiv)
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

  isOptionSelected(index, isMultiple) {
    if (isMultiple) {
      const selected = this.userAnswers[this.currentQuestionIndex] || [];
      return selected.includes(index);
    } else {
      return this.userAnswers[this.currentQuestionIndex] === index;
    }
  }

  handleOptionChange(index, isMultiple, optionsDiv) {
    if (isMultiple) {
      const selectedOptions = Array.from(optionsDiv.querySelectorAll('input[name="option"]:checked'))
        .map(cb => parseInt(cb.value));
      this.userAnswers[this.currentQuestionIndex] = selectedOptions;
    } else {
      this.userAnswers[this.currentQuestionIndex] = index;
    }
  }

  updateNextButtonText() {
    this.nextBtn.textContent = (this.currentQuestionIndex === this.questions.length - 1)
      ? this.translations.finish
      : this.translations.next;
  }

  avanzarPregunta() {
    const q = this.questions[this.currentQuestionIndex];
    const isMultiple = Array.isArray(q.correctAnswer);

    if (isMultiple) {
      const selectedOptions = this.userAnswers[this.currentQuestionIndex] || [];
      if (selectedOptions.length === 0) {
        this.setFeedback(this.translations.selectAnswer || 'Por favor, selecciona al menos una respuesta.');
        return;
      }
    } else {
      const selected = this.userAnswers[this.currentQuestionIndex];
      if (selected === null || selected === undefined) {
        this.setFeedback(this.translations.selectAnswer || 'Por favor, selecciona una respuesta.');
        return;
      }
    }

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.renderQuestion();
      this.updateNextButtonText();
      this.setFeedback(this.modoVozActivo ? (this.translations.listeningFeedback || 'Escuchando... por favor responde con el número o texto de la opción.') : '');
    } else {
      clearInterval(this.timer);
      this.setFeedback('');
      this.mostrarResultados();
      if (this.recognition) this.recognition.stop();
    }
  }

  mostrarResultados() {
    let totalPoints = 0;
    let userPoints = 0;

    this.questions.forEach((q, index) => {
      const correctAnswer = q.correctAnswer;
      const userAnswer = this.userAnswers[index];

      if (Array.isArray(correctAnswer)) {
        totalPoints += correctAnswer.length;
        if (Array.isArray(userAnswer)) {
          userAnswer.forEach(ans => {
            if (correctAnswer.includes(ans)) userPoints++;
          });
        }
      } else {
        totalPoints++;
        if (userAnswer === correctAnswer) userPoints++;
      }
    });

    const scorePercent = (userPoints / totalPoints) * 100;

    let mensaje = '';
    if (scorePercent >= 70) {
      mensaje = `<h2>${this.translations.congratulations}</h2>
      <p>${this.translations.scoreMessage.replace('{{score}}', scorePercent.toFixed(2))}</p>
      <p>${this.translations.certificateInfo}</p>`;
      this.restartBtn.style.display = 'none';
    } else {
      mensaje = `<h2>${this.translations.insufficientScore}</h2>
      <p>${this.translations.scoreMessage.replace('{{score}}', scorePercent.toFixed(2))}</p>
      <p>${this.translations.tryAgain}</p>`;
      this.restartBtn.style.display = 'inline-block';
    }

    this.resultMessage.innerHTML = mensaje;
    this.resultModal.style.display = 'flex';
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  startTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.setFeedback(this.translations.timeUp || '¡Tiempo agotado!');
        this.mostrarResultados();
        if (this.recognition) this.recognition.stop();
      } else {
        this.timeLeft--;
        this.updateTimerDisplay();
      }
    }, 1000);
  }

  reiniciarQuiz() {
    this.resultModal.style.display = 'none';
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.currentQuestionIndex = 0;
    this.timeLeft = 2400;
    this.updateTimerDisplay();
    this.renderQuestion();
    this.updateNextButtonText();
    this.startTimer();
    this.modoVozActivo = false;
    this.nextBtn.style.display = 'inline-block';
    this.btnActivarVoz.style.display = 'inline-block';
    this.setFeedback('');
    if (this.recognition) this.recognition.stop();
  }

  async requestMicPermission() {
    if (this.hasRequestedMicPermission) return true;
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      this.hasRequestedMicPermission = true;
      this.setFeedback(this.translations.micPermissionGranted || 'Permiso de micrófono concedido.');
      return true;
    } catch (err) {
      console.error('Permiso de micrófono denegado:', err);
      this.setFeedback(this.translations.micPermissionDenied || 'Permiso de micrófono denegado. El modo de voz no puede activarse.');
      this.btnActivarVoz.disabled = true;
      return false;
    }
  }

  addEventListeners() {
    this.nextBtn.addEventListener('click', () => {
      if (!this.modoVozActivo) this.avanzarPregunta();
    });

    this.btnActivarVoz.addEventListener('click', async () => {
      if (!this.recognition) {
        alert('Reconocimiento de voz no soportado en este navegador.');
        return;
      }
      const permissionGranted = await this.requestMicPermission();
            if (!permissionGranted) return;

      this.modoVozActivo = true;
      this.nextBtn.style.display = 'none';
      this.btnActivarVoz.style.display = 'none';
      this.setFeedback(this.translations.voiceModeActivated || 'Modo voz activado. Por favor responde con el número o texto de la opción.');

      if (!this.isRecognizing) {
        this.recognition.start();
      }
    });

    this.restartBtn.addEventListener('click', () => {
      this.reiniciarQuiz();
    });

    this.closeModalBtn.addEventListener('click', () => {
      if (this.currentQuestionIndex < this.questions.length) {
        this.resultModal.style.display = 'none';
        if (this.recognition) this.recognition.stop();
      } else {
        this.reiniciarQuiz();
      }
    });

    this.languageSelector.addEventListener('change', (e) => {
      this.loadLanguageData(e.target.value);
    });
  }
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  const quizApp = new QuizApp();
  quizApp.init();
});
