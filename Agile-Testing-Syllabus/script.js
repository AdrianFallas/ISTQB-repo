const questions = [
  {
    question: "¿Cuál de los siguientes valores del manifiesto ágil es correcto?",
    options: [
      "Personas e interacciones por encima del software funcionando",
      "Personas e interacciones por encima de la negociación contractual",
      "Personas e interacciones por encima de procesos y herramientas",
      "Personas e interacciones por encima de la colaboración con el cliente"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "La afirmación 'El software funcionando es la principal medida de progreso' se encuentra en...",
    options: [
      "Uno de los valores fundamentales",
      "Uno de los doce principios",
      "Una descripción de una metodología ágil",
      "Parte de la metodología XP"
    ],
    correctAnswer: 1,
    urlImage:" "
  },
   {
    question: "¿Quién es responsable de la calidad en un equipo ágil?",
    options: [
      "Los desarrolladores",
      "Los testers",
      "El Product Owner",
      "Todo el equipo"
    ],
    correctAnswer: 3,
    urlImage:" "
  },
  {
    question: "¿Cuál es el propósito de la reunión diaria en pie?",
    options: [
      "Fomentar el trabajo en equipo mediante una breve sesión de ejercicio en grupo",
      "Permitir que cada miembro comunique avances y problemas",
      "Obligar al equipo a trabajar en el mismo lugar",
      "Determinar si se requerirá tiempo extra para cumplir el cronograma"
    ],
    correctAnswer: 1,
    urlImage:" "
  },
  {
    question: "¿Cuál de las siguientes prácticas proporciona retroalimentación temprana a los desarrolladores?",
    options: [
      "Pruebas de aceptación por parte del usuario",
      "Integración continua",
      "Reuniones en pie (stand-up)",
      "Requisitos cambiantes"
    ],
    correctAnswer: 1,
    urlImage:" "
  },
  {
    question: "Cuando el cliente indica que una funcionalidad no fue implementada correctamente, ¿qué debe hacer el equipo ágil?",
    options: [
      "Registrar el problema y agregarlo al backlog para que lo considere el equipo",
      "Detener todo el desarrollo planeado y realizar el cambio solicitado",
      "Redactar un informe de defectos y abordarlo cuando el backlog esté despejado",
      "Actualizar el documento de requisitos y pedir aprobación del cliente antes de cambiar algo"
    ],
    correctAnswer: 0,
    urlImage:" "
  },
  {
    question: "¿En qué enfoque ágil la simplicidad se considera un valor que guía el desarrollo?",
    options: ["XP", "Kanban", "Scrum", "TDD"],
    correctAnswer: 0,
    urlImage:" "
  },
  {
    question: "Si estás usando un tablero para mostrar las estaciones de actividad como desarrollo y prueba, ¿qué enfoque ágil estás usando?",
    options: ["Tablero de tareas", "Kanban", "Scrum", "XP"],
    correctAnswer: 1,
    urlImage:" "
  },
  {
    question: `Estás revisando la siguiente historia con los responsables de negocio y producto:
    “Como dueño de un perro, quiero registrar a mi perro en línea para poder completar rápidamente este requisito legal de tenencia de mascotas.”
    Quieres aplicar la técnica INVEST durante esta revisión. ¿Qué elemento de INVEST falta en esta historia y requiere mayor elaboración?`,
    options: [
      "Seguridad",
      "Valor",
      "Testabilidad",
      "Concepto de las 3C"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Por qué es importante que un equipo implemente solo unas pocas mejoras por iteración?",
    options: [
      "Porque si intentan muchas, pueden sentirse derrotados y perder motivación",
      "Porque puede afectar su ritmo sostenido de trabajo",
      "Porque puede generar expectativas de cambios drásticos en cada iteración",
      "Porque pueden perder de vista la definición de 'terminado'"
    ],
    correctAnswer: 1,
    urlImage:" "
  },
  {
    question: "En una reunión de retrospectiva, ¿quién debe aportar sobre las actividades de prueba?",
    options: [
      "Solo los desarrolladores",
      "Solo los testers",
      "Todos excepto los testers",
      "Todo el equipo"
    ],
    correctAnswer: 3,
    urlImage:" "
  },
  {
    question: "¿Qué tipo de pruebas automatizadas se incluyen en integración continua?",
    options: [
      "Solo pruebas unitarias",
      "Pruebas unitarias y de regresión",
      "Pruebas unitarias y de integración",
      "Pruebas unitarias, de integración y de sistema"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "¿Cuál es el orden correcto de planificación?",
    options: [
      "Primero versión, luego iteración",
      "Primero iteración, luego versión",
      "Ambas ocurren al mismo tiempo",
      "En la mayoría de los proyectos ágiles solo se planifica versión o iteración"
    ],
    correctAnswer: 0,
    urlImage:" "
  },
  {
    question: "¿Qué se suele registrar en un sistema de gestión de configuración en un proyecto ágil?",
    options: ["Épicas", "Historias", "Iteraciones", "Código"],
    correctAnswer: 3,
    urlImage:" "
  },
  {
    question: "¿Cuándo se espera que el software proporcione valor por primera vez al cliente en un proyecto ágil?",
    options: [
      "Al final del proyecto",
      "Al final de una versión",
      "Al final de una iteración",
      "Al final de una épica"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "¿Qué significa que una funcionalidad esté 'terminada'?",
    options: [
      "Ha sido desarrollada",
      "Desarrollada e integrada",
      "Desarrollada, integrada y probada",
      "Desarrollada, integrada, probada y puesta en producción"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "Si tu equipo ágil necesita testers especializados en pruebas de rendimiento, ¿cuál es la estructura más eficaz?",
    options: [
      "El equipo ágil tiene personas designadas como testers en uno o más sprints",
      "El equipo ágil incorpora testers independientes al final del sprint",
      "Un equipo independiente proporciona testers según las habilidades requeridas",
      "Se subcontratan pruebas a una empresa externa experta en rendimiento"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "¿Cuál es una ventaja de la independencia del tester en un proyecto ágil?",
    options: [
      "Puede ofrecer una evaluación objetiva de la calidad del producto",
      "Puede confiar en las pruebas realizadas por los desarrolladores",
      "Puede tener problemas de relación con el equipo ágil",
      "Puede ofrecer habilidades de gestión de proyectos además de pruebas"
    ],
    correctAnswer: 0,
    urlImage:" "
  },
  {
    question: "¿Qué mide un gráfico de burndown?",
    options: [
      "Tiempo del cronograma frente al presupuesto esperado",
      "Retorno de inversión",
      "Velocidad de movimiento entre estaciones",
      "Cantidad de trabajo restante frente al tiempo asignado"
    ],
    correctAnswer: 3,
    urlImage:" "
  },
  {
    question: "¿Qué muestra un tablero de tareas?",
    options: [
      "Tareas completadas frente al presupuesto gastado",
      "Retorno de inversión",
      "El avance de tareas seleccionadas para la iteración",
      "El número de tareas pendientes frente al tiempo disponible"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "¿Cuál es una expectativa razonable para un caso de prueba durante su vida útil?",
    options: [
      "No cambiará",
      "Se automatizará y requerirá mantenimiento mínimo",
      "Evolucionará junto con el software",
      "Será propiedad del desarrollador que escribe el código relacionado"
    ],
    correctAnswer: 2,
    urlImage:" "
  },
  {
    question: "¿Cuándo deben ejecutarse las pruebas automatizadas de aceptación?",
    options: [
      "Antes de hacer commit del código en el build",
      "Tan seguido como se cree la compilación completa del sistema",
      "Durante UAT como reemplazo de pruebas hechas por usuarios del negocio",
      "Solo cuando se completa la versión final"
    ],
    correctAnswer: 1,
    urlImage:" "
  },
  {
    question: "¿Cuál de las siguientes habilidades de tester es más importante en un entorno ágil que en uno secuencial?",
    options: [
      "Colaboración",
      "Pruebas manuales",
      "Pruebas de rendimiento",
      "Preparación de casos de prueba"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "¿Cuál es un trabajo importante del tester ágil durante las sesiones de planificación de la versión e iteración?",
    options: [
      "Reportar defectos",
      "Asegurar que se programen las tareas de prueba adecuadas",
      "Seleccionar las herramientas de prueba",
      "Sugerir mejoras al proceso"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "Si un equipo ágil está usando herramientas de prueba como una herramienta de gestión de pruebas, ¿quién es responsable de asegurar su uso adecuado?",
    options: [
      "El Scrum Master",
      "El gerente de desarrollo",
      "El tester",
      "El administrador de configuración"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "Si el desarrollador crea una prueba que representa la funcionalidad deseada y luego escribe el código para aprobarla, ¿qué tipo de desarrollo se está realizando?",
    options: [
      "Desarrollo guiado por pruebas (TDD)",
      "Desarrollo guiado por pruebas de aceptación (ATDD)",
      "Desarrollo guiado por comportamiento (BDD)",
      "Desarrollo guiado por el desarrollador"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "Si es especialmente importante que los usuarios de negocio comprendan las pruebas que verifican el código, ¿qué marco de desarrollo debe utilizarse?",
    options: [
      "Guiado por pruebas",
      "Guiado por pruebas de integración",
      "Guiado por comportamiento (BDD)",
      "Guiado por negocio"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "En la pirámide de pruebas, ¿qué nivel tiene el mayor número de pruebas?",
    options: [
      "Aceptación",
      "Sistema",
      "Integración",
      "Unidad"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Qué cuadrante de prueba está asociado con pruebas de aceptación de usuario?",
    options: ["Q1", "Q2", "Q3", "Q4"],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Qué cuadrante está principalmente asociado con el soporte a los desarrolladores?",
    options: ["Q1", "Q2", "Q3", "Q4"],
    correctAnswer: 0,
    urlImage: ""
  },
   {
    question: `Eres tester en un equipo Scrum. Has estado probando el producto durante varias iteraciones y estás notando que el formato y el contenido de los mensajes de error son inconsistentes. 
    Por ejemplo, cuando el usuario ingresa una dirección inválida en una parte de la aplicación, se muestra el mensaje “Entrada inválida” en fuente roja, mientras que al ingresar un número telefónico 
    inválido se muestra el mensaje “El número de teléfono que has ingresado no tiene un formato válido. Por favor ingresa el número en el formato (xxx) xxx-xxxx” en fuente azul. Las historias de usuario no especifican cómo deben verse los mensajes de error. ¿Qué deberías hacer?`,
    options: [
      "No hacer nada. Dado que las historias no especifican el texto ni el formato del mensaje de error, la implementación queda a discreción del desarrollador.",
      "Redactar un informe de defecto sobre el primer caso, ya que ese mensaje debería proporcionar más información al usuario.",
      "Solicitar una reunión con los desarrolladores para discutir los problemas de consistencia y ayudar a establecer estándares de mensajes de error para el proyecto.",
      "Apelar al Scrum Master para que intervenga e instruya a los desarrolladores a usar una plantilla de mensajes de error estandarizada que mantenga un formato y color consistente para todos los mensajes de este tipo."
    ],
    correctAnswer: 2,
    urlImage: ""
  }
,
  {
    question: "Has identificado un riesgo de usabilidad en la aplicación móvil que estás probando actualmente. Cuando la aplicación pierde conexión con el servidor web, el usuario no es informado del problema y toda la información ingresada desde ese momento se pierde. ¿Cuál sería una evaluación razonable de este riesgo?",
    options: [
      "El impacto es alto porque el usuario perderá sus datos. La probabilidad depende de cuán frecuente sea la pérdida de conectividad.",
      "El impacto es bajo porque el usuario puede volver a escribir la información. La probabilidad es alta porque los datos originales se pierden.",
      "El impacto es medio porque el usuario debería esperar este tipo de comportamiento. La probabilidad es media porque el problema será intermitente.",
      "El impacto es alto porque el usuario no entenderá qué está ocurriendo y probablemente llamará al soporte técnico. La probabilidad es baja porque la conectividad de red es confiable y poco probable que falle."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: `Se te ha pedido que estimes los puntos de historia para una historia utilizando la secuencia de Fibonacci. Has revisado la historia, pero parece indicar una cantidad significativa de trabajo y varios elementos desconocidos, especialmente relacionados con la creación de datos de prueba. En este momento, no sabes si podrás usar datos existentes o tendrás que crear los tuyos. Tampoco sabes cómo probarás las interfaces entre esta historia y el código existente.
    Dado esta información, ¿qué valor deberías asignar en puntos de historia?`,
    options: ["1", "5", "13", "18"],
    correctAnswer: 2,
    urlImage: ""
  },
 {
    question: "Estás probando una historia para una aplicación bancaria móvil y has notado que el tiempo de respuesta parece lento. Has revisado los criterios de aceptación para la historia y no se menciona nada respecto a los requisitos de rendimiento. ¿Qué deberías hacer ahora?",
    options: [
      "Redactar un informe de defecto y dejar que los desarrolladores averigüen cómo hacerlo más rápido.",
      "Detener las pruebas y exigir que los responsables de negocio definan requisitos específicos de rendimiento en los criterios de aceptación.",
      "Continuar con las pruebas asumiendo que los responsables del producto identificarán el problema, si realmente lo es, cuando hagan las pruebas de aceptación de usuario.",
      "Revisar productos similares, documentación existente sobre rendimiento aceptable y hablar con los usuarios de negocio para definir los requisitos de rendimiento."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Por qué el conocimiento de procedimientos y restricciones del negocio es importante al definir criterios de aceptación?",
    options: [
      "Porque ayuda a definir la seguridad del producto",
      "Porque define las reglas del negocio que debe soportar el producto",
      "Porque garantiza la eficiencia del código",
      "Porque permite comprender las interfaces externas"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
   {
    question: "Estás revisando los criterios de aceptación para una historia. Uno de ellos establece: “Todas las ventanas deben ajustarse a la paleta de colores aprobada por la corporación”. ¿De qué manera esta afirmación ayuda a mejorar la posibilidad de realizar pruebas sobre la historia?",
    options: [
      "Explica el comportamiento funcional que debe proporcionar el software.",
      "Proporciona un caso de uso realista para el software.",
      "Define las reglas de negocio que deben ser implementadas.",
      "Establece una restricción para la solución."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: `Se te ha dado la siguiente historia:
     “Como amante de las plantas que viaja con frecuencia, quiero tener un sistema de riego automatizado para que mis plantas no mueran.”
     También se te han dado los siguientes criterios de aceptación:
     1. El agua debe activarse cuando la temperatura sea > 85 grados y el contenido de humedad del suelo cambie de 'normal' a 'seco'.
     2. El agua debe dispensarse durante 5 minutos a una tasa de 0.5 onzas por minuto.
     ¿Cuál de los siguientes es el primer caso de prueba que debe escribirse para la implementación basada en pruebas de aceptación?`,
    options: [
      "Establecer el nivel de humedad del suelo en 'húmedo', luego aumentar el calor y verificar que el nivel de humedad cambie a 'normal' y luego a 'seco' y luego a 'reseco'.",
      "Establecer la temperatura > 85 grados y verificar que la temperatura aumente correctamente.",
      "Establecer la temperatura < 85 grados y la humedad en 'seco' y verificar que no se disperse agua.",
      "Establecer la temperatura > 85 grados y la humedad en 'seco' y verificar que se disperse agua."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: `Se te ha dado la siguiente historia:
    “Como amante de las plantas que viaja con frecuencia, quiero tener un sistema de riego automatizado para que mis plantas no mueran.”
    También se te han proporcionado los siguientes criterios de aceptación:
    1. El agua debe encenderse cuando la temperatura sea > 85 grados y el contenido de humedad del suelo cambie de 'normal' a 'seco'.
    2. El agua debe dispersarse durante 5 minutos a una velocidad de 0.5 onzas por minuto.
    ¿Cuál de las siguientes opciones proporciona los valores correctos para lograr una cobertura del 100% en el análisis de límites de dos valores con el número mínimo de casos de prueba?`,
    options: [
      "Temperatura en 85 y 86, humedad en 'seca' y 'normal'",
      "Temperatura en 85 y 86, humedad en 'seca' y 'normal', riego por 5 minutos y 5 minutos 1 segundo, velocidad en 0.5 y 0.4",
      "Temperatura en 85 y 86, humedad en 'seca' y 'normal', riego por 5 minutos y 4 minutos 59 segundos, velocidad en 0.5 y 0.6",
      "Temperatura en 85 y 84, humedad en 'seca' y 'normal'"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: `Se te ha dado la siguiente historia:
    “Como amante de las plantas que viaja con frecuencia, quiero tener un sistema de riego automatizado para que mis plantas no mueran.”
    También se te han proporcionado los siguientes criterios de aceptación:
    1. El agua debe encenderse cuando la temperatura sea > 85 grados y el contenido de humedad del suelo cambie de 'normal' a 'seco'.
    2. El agua debe dispensarse durante 5 minutos a una velocidad de 0.5 onzas por minuto.
    ¿Cuál de las siguientes preguntas sería la más adecuada al prepararse para realizar pruebas exploratorias?`,
    options: [
      "¿Cuántos de estos sistemas se ejecutarán simultáneamente obteniendo datos del mismo controlador de temperatura?",
      "¿Qué particiones de equivalencia y valores límite deben probarse?",
      "¿Cómo realiza la transición el software del estado 'normal' al estado 'seco'?",
      "¿Qué se puede hacer con el software que podría provocar una falla o un comportamiento inesperado?"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Cuál es el propósito principal de las herramientas de integración continua?",
    options: [
      "Soportar pruebas de caja negra",
      "Servir de base para revisiones estructuradas de requisitos",
      "Apoyar la compilación y despliegue diario del software",
      "Rastrear tareas del equipo"
    ],
    correctAnswer: 2,
    urlImage: ""
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