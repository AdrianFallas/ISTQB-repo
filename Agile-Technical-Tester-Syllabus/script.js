const questions = [
  {
     question: "Dado el épico:\n“Como líder del departamento de marketing, quiero tener un sistema de gestión de contenido para que mis empleados puedan editar y proporcionar contenido de calidad a los lectores.”\n\n¿Cuáles de las siguientes técnicas de ingeniería de requisitos serían las MÁS efectivas para identificar y priorizar historias de usuario para el épico dado?\nSelecciona DOS opciones.",
    options: [
      "a) Diagramación de historias (Storyboarding)",
      "b) Mapeo de historias (Story mapping)",
      "c) Definición de personas (Personas)",
      "d) Diagramas de clases",
      "e) Casos de uso"
    ],
    correctAnswer: [0, 1],
    urlImage: " "
  },
  {
    question: "Debes revisar la siguiente historia de usuario que se desarrollará y probará en el próximo sprint:\n“Como posible asistente a una conferencia, quiero poder registrarme en línea, para que el registro sea sencillo y sin papeleo.”\n\nLos siguientes criterios de aceptación también están mencionados:\ni. El pago puede realizarse vía PayPal, tarjeta de débito o crédito\nii. Se envía un correo electrónico de confirmación al asistente tras enviar el formulario\niii. La protección contra spam funciona según lo esperado\niv. La información del formulario se almacena en la base de datos de registros\nv. Todas las entradas incorrectas del usuario son marcadas por el sistema\n\n¿Cuál de las siguientes opciones muestra correctamente qué criterios de aceptación son comprobables?\nSelecciona UNA opción.",
    options: [
      "a) ii, iv, v son comprobables",
      "b) i, iii, v son comprobables",
      "c) i, ii, iv son comprobables",
      "d) iii, iv, v son comprobables"
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes describe correctamente una característica positiva de las pruebas unitarias?",
    options: [
      "a) Las pruebas unitarias deben ser independientes de los componentes del sistema que no se estén probando",
      "b) Las pruebas unitarias pueden derivarse de los épicos dados y el código existente del objeto bajo prueba",
      "c) Durante la refactorización, rediseñar la prueba unitaria para adaptarse al código cambiado es crucial",
      "d) Una prueba unitaria debe escribirse para estructuras de código grandes y complejas para obtener retroalimentación rápida sobre la calidad"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Un desarrollador ha implementado una clase que calcula si una fecha determinada es un año bisiesto. La definición es:\nTodo año divisible exactamente por 4 es bisiesto, excepto los años divisibles por 100, pero esos años centenarios sí son bisiestos si son divisibles por 400.\n\nYa has comenzado con la primera clase de prueba; luce así (pseudocódigo JavaScript):\n// LeapYear.spec.js\ndescribe('Calculadora de año bisiesto', () => {\n  it('debería considerar 1996 como bisiesto', () => {\n    expect(LeapYear.isLeap(1996)).toBe(true);\n  });\n});\n\n¿Cuál sería tu siguiente paso para validar la clase de forma eficiente?",
    options: [
      "a) Escribir primero clases de prueba adicionales para otros aspectos relevantes del cálculo",
      "b) Escribir primero código que cubra otros aspectos relevantes del cálculo",
      "c) Escribir primero código que haga fallar este caso de prueba",
      "d) Escribir primero código que haga que este caso de prueba pase"
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "Eres responsable de definir el enfoque de pruebas para un sistema de control de crucero automotriz crítico para la seguridad.\nNotación: ++ (muy recomendable), + (recomendado), o (neutral), - (no recomendado), -- (no usar).\n\n¿Cuál de las siguientes tablas define MEJOR el enfoque de prueba?",
    options: [
      "Tabla A",
      "Tabla B",
      "Tabla C",
      "Tabla D"
    ],
    correctAnswer: 1,
    urlImage: "tabla1.png"
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre la ejecución de pruebas exploratorias usando charters (guías) es correcta?",
    options: [
      "a) A diferencia de la prueba de caja negra, el resultado esperado se documenta después de encontrar el defecto y no como parte del diseño",
      "b) Los charters son útiles cuando hay una especificación detallada del sistema a probar",
      "c) El resultado de ejecutar pruebas exploratorias con charters es encontrar defectos y problemas en la especificación",
      "d) Las pruebas exploratorias y las de caja negra usan las mismas métricas de cobertura"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "En proyectos ágiles, se necesita refactorización de casos de prueba por muchas razones.\n¿Cuál de las siguientes afirmaciones sobre la refactorización de casos de prueba es correcta?",
    options: [
      "a) Se realiza para adaptar los casos de prueba a cambios en la funcionalidad, mejorando regresiones y manteniendo la alineación con el producto",
      "b) Se necesita porque no podemos escribir casos detallados durante iteraciones cortas; beneficia al ritmo de desarrollo y permite generar nuevas pruebas rápidamente",
      "c) En entornos ágiles, la refactorización se usa para acortar casos de prueba; permite escribir y automatizar pruebas más rápidamente",
      "d) Se realiza como un proceso con pasos: Identificación, Refactorización, Reejecución e Identificación; mejora pruebas de regresión y alineación con el código"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Resume las características de la automatización de pruebas en relación con proyectos de desarrollo.",
    options: [
      "La automatización puede desempeñar un papel importante en la configuración del entorno de pruebas y adquisición de entregas.",
      "En proyectos grandes, normalmente hay una única solución que se adapta a todas las necesidades, por lo tanto, las estrategias dedicadas de automatización son lo mejor.",
      "La automatización de pruebas apoya directamente los objetivos de una iteración, por ejemplo, al reducir el riesgo de regresión relacionado con la estabilidad del sistema.",
      "El esfuerzo de automatización debe ser realizado directamente por los equipos de iteración."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Una proporción creciente de cobertura de pruebas automatizadas suele conducir a un mayor grado de pruebas manuales que siguen estrategias reactivas, porque:",
    options: [
      "Muchas de las pruebas que pueden prepararse con anticipación se automatizan, lo que permite que los testers dediquen más tiempo a ejecutar pruebas manuales.",
      "Un aumento en la proporción de pruebas automatizadas incrementa la cobertura, y las áreas no cubiertas deben probarse de forma reactiva.",
      "Si aumenta la proporción de pruebas automatizadas, las pruebas manuales se centran en las áreas de mayor riesgo, identificadas de forma reactiva.",
      "Las estrategias reactivas consideran el contexto y el estado actual del proyecto y del sistema bajo prueba. Para adaptarse con mayor flexibilidad, se necesita un mayor grado de pruebas manuales."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de los siguientes desafíos de la automatización de pruebas en entornos ágiles está correctamente descrito?",
    options: [
      "La disponibilidad de recursos es un desafío, ya que se necesitan para crear, mantener y ejecutar el conjunto de pruebas.",
      "La automatización de pruebas unitarias es la más crítica en entornos ágiles y cubre la mayoría de los desafíos relacionados con la calidad y cobertura.",
      "El tiempo de despliegue de pruebas es un desafío, ya que un despliegue lento no es posible en iteraciones cortas.",
      "El tiempo de ejecución no es crítico en ágil porque hay menos pruebas escritas y están diseñadas como listas de verificación de alto nivel."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Tu proyecto ha alcanzado un estado estable y se ha desplegado en diferentes configuraciones de hardware en toda Europa. Se usó como prueba piloto para adoptar CI y fue exitoso en una configuración. ¿Cuál sería el siguiente paso más adecuado?",
    options: [
      "Habilitar diferentes configuraciones de prueba en CI para evaluar las versiones desplegadas en el mercado.",
      "Acelerar la ejecución de pruebas reduciendo la cantidad de pruebas de interfaz de usuario.",
      "Reducir el número de pruebas en la suite CI para mejorar el enfoque.",
      "Implementar código que seleccione dinámicamente las pruebas CI, ejecutando sólo los casos afectados por los cambios."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Un sistema bancario suizo utiliza servicios de terceros para ejecutar ciertas transacciones. ¿Es adecuado utilizar virtualización de servicios al probar este sistema?",
    options: [
      "No, ya que el servicio de terceros es externo al sistema.",
      "Sí, ya que permite realizar pruebas no funcionales controladas por tiempo.",
      "Sí, ya que simplifica el entorno de prueba del componente externo.",
      "No, ya que este tipo de configuración no puede simular el tiempo de viaje de los mensajes en la red."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes es una descripción correcta de la técnica de cuestionario cualitativo?",
    options: [
      "Usa preguntas abiertas para añadir profundidad a la investigación cuantitativa. Es más intensivo en tiempo, por lo que conviene en grupos pequeños.",
      "Utiliza datos de preguntas cerradas para hacer comparaciones entre puntos de datos. Sirve como base para criterios de aceptación.",
      "Utiliza preguntas tipo Sí/No como complemento a preguntas clave. Puede generar información adicional que lleva a nuevas historias de usuario.",
      "Utiliza entrevistas para obtener información sobre contexto y causas. Permite derivar criterios de aceptación desde la perspectiva del usuario."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es correcta respecto al Story Mapping?",
    options: [
      "Visualiza el orden de prioridad de historias, que determina el esfuerzo de desarrollo de casos de prueba.",
      "Proporciona una vista detallada de cada historia que ayuda a definir niveles de prueba.",
      "Ofrece una visión holística del sistema que ayuda a definir la estrategia de pruebas.",
      "Visualiza la complejidad de las historias, lo que determina la prioridad de ejecución de pruebas."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "Estás desarrollando automatización para una estrategia orientada a evitar regresiones. ¿Qué atributo aplica especialmente?",
    options: [
      "El conjunto de pruebas de regresión crece junto con las funcionalidades.",
      "Las pruebas automatizadas se mejoran y refactorizan continuamente.",
      "Las pruebas se implementan para facilitar la mantenibilidad.",
      "La cantidad de pruebas está limitada por la pirámide de pruebas del proyecto."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Eres QA Manager en un proyecto donde cada funcionalidad requiere probar muchas combinaciones de entrada. Quieres validar si el enfoque de pruebas orientadas por datos (DDT) ayudaría. ¿Cuál opción sería mejor para una prueba de concepto?",
    options: [
      "Pedir al equipo que cree varios casos de prueba que lean los datos desde un archivo y los ejecuten.",
      "Pedir que adapten casos de prueba existentes para funcionar con ciertos datos.",
      "Pedir que preparen un caso de prueba para una funcionalidad, leer una muestra de datos y ejecutarlo.",
      "Pedir que preparen un caso general que lea desde un archivo y ejecute todas las pruebas."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuáles de las siguientes afirmaciones sobre pruebas continuas y entrega continua son correctas?\nSelecciona DOS opciones.",
    options: [
      "El tester ejecuta pruebas diarias en horarios preestablecidos como parte de la entrega continua.",
      "Las pruebas se ejecutan cada vez que un desarrollador sube nueva versión del código.",
      "Los desarrolladores actualizan el repositorio de código a intervalos fijos cada día.",
      "El despliegue automatizado se programa para realizarse al menos una vez al día.",
      "El despliegue de la aplicación se activa cada vez que las pruebas continuas se ejecutan correctamente."
    ],
    correctAnswer: [1, 4],
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes frases describe mejor un servicio virtualizado?",
    options: [
      "Una máquina virtual configurada para ofrecer varios servicios a múltiples usuarios.",
      "Un proceso que simula el comportamiento relevante de un servicio real. Puede ser accedido por varios usuarios simultáneamente.",
      "Un sistema físico que simula el comportamiento de un servicio real. Puede ser accedido por varios usuarios.",
      "Una instalación de múltiples máquinas virtuales configuradas para ofrecer un servicio a múltiples usuarios simultáneamente."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes describe el uso de 'Personas' para especificación de requisitos?",
    options: [
      "Analizar cómo Laura, una mercadóloga digital, interactúa con el sistema para definir criterios de aceptación.",
      "Visualizar el grupo de historias de usuario con el que trabaja Laura.",
      "Seleccionar el enfoque de prueba adecuado para mercadólogos según aspectos visuales del sistema.",
      "Describir la secuencia de operaciones del sistema cuando Laura lo usa."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "Escenario:\nTú, como tester en un entorno BDD, sabes que la siguiente historia de usuario debe implementarse y probarse:\n“Como dueño de una tienda, quiero llevar el control de mi inventario cuando se devuelven o intercambian artículos, para poder rastrear el inventario.”\nSuponiendo que tienes los siguientes artículos en stock: 12 camisetas, 10 suéteres, 2 gorras, 7 faldas.\n¿Cuál de los siguientes escenarios NO debe usarse como base para generar casos de prueba?",
    options: [
      "a) Dado que un cliente compró previamente 2 camisetas,\ncuando devuelve las camisetas para un reembolso,\nentonces debería tener 14 camisetas en el inventario.",
      "b) Dado que un cliente compró previamente 1 gorra,\ncuando la intercambia por una falda,\nentonces debería tener 3 gorras y 6 faldas en el inventario.",
      "c) Dado que un cliente compró previamente 2 suéteres,\ncuando los intercambia por una gorra,\nentonces debería tener 12 suéteres y 1 gorra en el inventario.",
      "d) Dado que un cliente compró previamente 3 faldas,\ncuando devuelve estas faldas para un reembolso,\nentonces debería tener 4 faldas en el inventario."
    ],
    correctAnswer: 3,
    urlImage: " "
  }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 2400; // 40 minutos en segundos
const userAnswers = new Array(questions.length).fill(null);

// Función para renderizar la pregunta actual
function renderQuestion(index) {
  const container = document.getElementById("questions-container");
  container.innerHTML = ""; // Limpiar el contenedor

  const q = questions[index];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  const formattedText = q.question.replace(/\n/g, "<br>");

  const esMultiple = Array.isArray(q.correctAnswer); // Detecta si hay más de una respuesta correcta

  questionDiv.innerHTML = `
  <h2 style="white-space: normal;">${index + 1}. ${formattedText}</h2>
  ${
  Array.isArray(q.urlImages) && q.urlImages.length > 0
    ? q.urlImages.map(
        (imgSrc) => `
          <div class="image-container" style="margin: 1em 0;">
            <div style="
              width: 100%;
              height: 200px;
              background-image: url('${imgSrc}');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
            "></div>
          </div>
        `
      ).join("")
    : (typeof q.urlImage === "string" && q.urlImage.trim() !== ""
        ? `
          <div class="image-container" style="margin: 1em 0;">
            <div style="
              width: 100%;
              height: 200px;
              background-image: url('${q.urlImage}');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
            "></div>
          </div>
        `
        : "")
}
`;

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  q.options.forEach((option, i) => {
    const input = document.createElement("input");
    input.type = esMultiple ? "checkbox" : "radio";
    input.name = `question-${index}`;
    input.value = i;
    input.id = `q${index}_opt${i}`;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.innerHTML = option;

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex"; // Usar flexbox para alinear el input y el label
    wrapper.style.alignItems = "center"; // Alinear verticalmente al centro
    wrapper.style.gap = "8px"; // Espacio entre input y label
    // Añadir estilos específicos al input para mejorar el alineamiento
    input.style.margin = "0";
    input.style.alignSelf = "center"; // Asegurar que el input esté centrado verticalmente
    // Añadir estilos al label para mejor disposición
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.margin = "0";

     // Añadir espacio hacia abajo entre este wrapper y el siguiente
    wrapper.style.marginBottom = "16px"; // Espacio hacia abajo



    wrapper.appendChild(input);
    wrapper.appendChild(label);
    optionsDiv.appendChild(wrapper);

    // Restaurar respuestas seleccionadas previamente
    if (esMultiple) {
      const selected = userAnswers[index] || [];
      if (selected.includes(i)) input.checked = true;
      input.addEventListener("change", () => {
        const seleccionados = Array.from(optionsDiv.querySelectorAll(`input[name="question-${index}"]`))
          .filter(cb => cb.checked)
          .map(cb => parseInt(cb.value));
        userAnswers[index] = seleccionados;
      });
    } else {
      if (userAnswers[index] === i) input.checked = true;
      input.addEventListener("change", () => {
        userAnswers[index] = parseInt(input.value);
      });
    }
  });

  questionDiv.appendChild(optionsDiv);
  container.appendChild(questionDiv);

  // Botones de navegación
  document.getElementById("next-btn").textContent = index === questions.length - 1 ? "Finalizar" : "Siguiente";
 
 // document.getElementById("submit-btn").style.display = index === questions.length - 1 ? "block" : "none";
  //document.getElementById("prev-btn").disabled = index === 0;
}

function startTimer() {
  timer = setInterval(() => {
    console.log("Tiempo restante:", timeLeft); // Para depuración
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("¡El tiempo se ha agotado!");
      evaluateQuiz();
    } else {
      timeLeft--;
      updateTimerDisplay();
    }
  }, 1000);
}

// Función para actualizar la visualización del temporizador
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Función para evaluar el cuestionario
function arraysEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) &&
    a.length === b.length &&
    a.every(val => b.includes(val));
}

function evaluateQuiz() {
  const results = [];
  questions.forEach((q, index) => {
    const userResponse = userAnswers[index];
    const correct = Array.isArray(q.correctAnswer)
      ? arraysEqual(userResponse, q.correctAnswer)
      : userResponse === q.correctAnswer;
    results.push({ isCorrect: correct });
  });

  const score = results.filter(r => r.isCorrect).length;
  const total = questions.length;
  const percentage = (score / total) * 100;

  displayResults(percentage);
}

// Función para mostrar los resultados
function displayResults(percentage) {
  const modal = document.getElementById("result-modal");
  const message = document.getElementById("result-message");
  const restartBtn = document.getElementById("restart-btn");

  // Mostrar u ocultar el contenido del cuestionario según la calificación
  if (percentage >= 70) {
    const scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = `<h2>Resultado: ${score} / ${total} (${percentage.toFixed(2)}%)</h2>`;
    container.appendChild(scoreDiv);

    message.innerHTML = `
      <h2>¡Felicidades!</h2>
      <p>Has obtenido una calificación de ${percentage.toFixed(2)}%.</p>
      <p>Puedes obtener tu certificado enviando un comprobante de pago de <strong>10 USD</strong> a educacion@frecuenciagamer.com.</p>
    `;
    restartBtn.style.display = "none";
  } else {
    // Mostrar solo el mensaje del modal
    container.innerHTML = "";
    message.innerHTML = `
      <h2>Resultado insuficiente</h2>
      <p>Obtuviste ${percentage.toFixed(2)}%. Necesitas al menos 70 % para obtener el certificado.</p>
      <p>¡Te animamos a intentarlo nuevamente!</p>
    `;
    restartBtn.style.display = "inline-block";
    restartBtn.onclick = () => location.reload();
  }

  // Mostrar el modal
  modal.style.display = "block";
}

// Iniciar el cronómetro y renderizar la primera pregunta al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion(currentQuestionIndex);
  startTimer(); // Iniciar el cronómetro al cargar el cuestionario
  updateTimerDisplay(); // Mostrar el tiempo inicial

  // Controlar la visibilidad de la pestaña
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
      alert("¡Cuidado! Si cambias de pestaña, puedes perder la prueba.");
    }
  });
});

// Evento para el botón "Siguiente"
document.getElementById("next-btn").addEventListener("click", () => {
  const selected = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
  if (!selected) {
    alert("Por favor, selecciona una respuesta antes de continuar.");
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  } else {
    clearInterval(timer);
    const results = evaluateQuiz();
    displayResults(percentage);
  }
});

// Evento para el botón "Anterior"
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
});

// Evento para el botón "Enviar"
document.getElementById("submit-btn").addEventListener("click", () => {
  clearInterval(timer); // Detener el cronómetro al enviar
  evaluateQuiz(); // Evaluar el cuestionario
});

// Evento para cerrar el modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("result-modal").style.display = "none";
});

// Evento para reiniciar el cuestionario
document.getElementById("restart-btn").addEventListener("click", () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".next-btn").addEventListener("click", onNextClick);
});

function onNextClick() {
  const selected = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
  if (!selected) {
    alert("Por favor, selecciona una respuesta antes de continuar.");
    return;
  }

  userAnswers[currentQuestionIndex] = parseInt(selected.value);

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  } else {
    clearInterval(timer);
    evaluateQuiz();
    displayResults();
  }
}

function displayResults() {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  const total = questions.length;
  const percentage = (score / total) * 100;

  const scoreDiv = document.createElement("div");
  /*scoreDiv.innerHTML = `<h2>Resultado: ${score} / ${total} (${percentage.toFixed(2)}%)</h2>`;
  container.appendChild(scoreDiv);*/

  const message = document.getElementById("result-message");
  const restartBtn = document.getElementById("restart-btn");

  if (percentage >= 70) {

    /*   message.innerHTML = `
         <h2>¡Felicidades!</h2>
         <p>Has obtenido una calificación de ${percentage.toFixed(2)}%.</p>
         <p>Puedes obtener tu certificado enviando una captura de pantalla de la nota obtenida y un comprobante de pago de <strong>10 USD</strong> a <strong>educacion@frecuenciagamer.com </strong>.</p>
       `;
       restartBtn.style.display = "none";*/

    scoreDiv.innerHTML = `
      <h2>¡Felicidades!</h2>
      <p>Has obtenido una calificación de ${percentage.toFixed(2)}%.</p>
      <p>Puedes obtener tu certificado enviando una captura de pantalla de la nota obtenida y un comprobante de pago de <strong>10 USD</strong> a <strong>educacion@frecuenciagamer.com </strong>.</p>
    `;
    container.appendChild(scoreDiv);

  } else {
    /*  message.innerHTML = `
        <h2>Resultado</h2>
        <p>Obtuviste ${percentage.toFixed(2)}%. Necesitas al menos 70 % para obtener el certificado.</p>
        <p>¡Te animamos a intentarlo nuevamente!</p>
      `;*/

    scoreDiv.innerHTML = `
      <h2>Resultado</h2>
      <p>Obtuviste ${percentage.toFixed(2)}%. Necesitas al menos 70 % para obtener el certificado.</p>
      <p>¡Te animamos a intentarlo nuevamente!</p>
    `;
    container.appendChild(scoreDiv);

    restartBtn.style.display = "inline-block";
    restartBtn.onclick = () => location.reload();
  }

  const modal = document.getElementById("result-modal");
  modal.style.display = "block";

  document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";

  });
}