const questions = [
  {
    question: "¿Cuál de los siguientes es una técnica de aprendizaje automático? (1 punto)",
    options: [
      "Motor de reglas",
      "Algoritmo de agrupamiento (clustering)",
      "Razonamiento basado en casos",
      "Algoritmo de búsqueda"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Cuál de los siguientes es un tipo de sistema de IA con capacidades similares a las habilidades cognitivas humanas? (1 punto)",
    options: [
      "IA estrecha",
      "IA general",
      "IA superinteligente",
      "IA sobrehumana"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Cuál de los siguientes es un beneficio de entrenar un modelo usando computación en la nube? (1 punto)",
    options: [
      "Será más rápido que uno entrenado en servidores locales.",
      "Una vez entrenado puede ser desplegado en dispositivos con mucho menos poder computacional.",
      "Continuará aprendiendo mientras esté desplegado.",
      "Una vez desplegado en un dispositivo, puede seguir aprendiendo desde la nube."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "Un modelo preentrenado puede carecer de transparencia comparado con uno generado internamente. ¿Qué riesgo resulta de esta falta de transparencia? (1 punto)",
    options: [
      "Puede ser muy lento.",
      "Tendrá más vulnerabilidades que un modelo entrenado internamente.",
      "Puede haber heredado sesgos.",
      "No se puede modificar para usarse en una red neuronal profunda."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es verdadera sobre los sistemas basados en IA y autonomía? (1 punto)",
    options: [
      "Ningún sistema basado en IA es autónomo, todos requieren algún nivel de intervención humana.",
      "Algunos sistemas basados en IA son autónomos, pero otros requieren intervención humana.",
      "Todos los sistemas de IA son autónomos por defecto.",
      "La verdadera autonomía solo puede ser alcanzada por humanos, no por IA."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
 {
    question: "Estás probando un sistema basado en IA que recomienda la mejor carrera universitaria para graduados de secundaria. En tu conjunto de prueba, creaste 10 personas con expedientes académicos idénticos: cinco mujeres y cinco hombres. Todos los hombres recibieron recomendación para Ciencias de la Computación, mientras que todas las mujeres fueron recomendadas para Contabilidad Financiera. Al repetir la prueba con ocho hombres y dos mujeres, se obtuvieron los mismos resultados. ¿Qué tipo de comportamiento está mostrando el sistema? (1 punto)",
    options: [
      "a. Sesgo",
      "b. Autonomía",
      "c. Evolución",
      "d. Adaptabilidad"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "Estás trabajando con un sistema basado en IA que debe adivinar una palabra en cinco intentos o menos. La palabra cambia cada vez, pero el sistema siempre la acierta en el primer intento. Al observar más de cerca, notas que el sistema no registra sus intentos hasta que adivina correctamente. ¿Qué tipo de comportamiento está mostrando? (1 punto)",
    options: [
      "a. Efecto secundario",
      "b. Transparencia",
      "c. Sesgo",
      "d. Manipulación de recompensa (reward hacking)"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "Un sistema basado en IA está siendo utilizado para recomendar los mejores medicamentos para un paciente según sus datos médicos. Aunque al inicio funcionó de manera fiable, ahora está seleccionando fármacos experimentales además de los aprobados. ¿Qué característica está mostrando este comportamiento? (1 punto)",
    options: [
      "a. Autoaprendizaje",
      "b. Falta de robustez",
      "c. Autonomía",
      "d. Transparencia"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Qué tipo de aprendizaje está usando un agente inteligente recompensado por decisiones correctas y penalizado por las incorrectas? (1 punto)",
    options: [
      "Clasificación",
      "Agrupamiento",
      "Aprendizaje por refuerzo",
      "Iterativo"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Qué paso sigue inmediatamente después del entrenamiento del modelo en un flujo de trabajo de ML? (1 punto)",
    options: [
      "Evaluar el modelo",
      "Ajustar el modelo",
      "Desplegar el modelo",
      "Comprender los objetivos"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "Tu modelo funciona bien con datos de entrenamiento pero falla con datos nuevos. ¿Qué problema ha ocurrido? (1 punto)",
    options: [
      "Subajuste (underfitting)",
      "Ajuste",
      "Aprendizaje no supervisado",
      "Sobreajuste (overfitting)"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "Estás desarrollando un sistema basado en IA que será utilizado por tiendas de mascotas. Este sistema tomará información sobre el comportamiento de compra, registrada a través del programa de fidelidad, así como la frecuencia de compras. Estos datos se utilizarán para determinar qué artículos en oferta serán más atractivos para cada cliente. Has decidido usar aprendizaje no supervisado para construir tu modelo de ML.\n\n¿Qué tipo de problema estarás resolviendo con este enfoque? (2 pts)",
    options: [
      "a. Agrupamiento (Clustering)",
      "b. Clasificación",
      "c. Asociación",
      "d. Aprendizaje por refuerzo"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Cuál contiene los tres componentes principales de la preparación de datos en el flujo de ML? (1 punto)",
    options: [
      "Identificación, recopilación, etiquetado",
      "Identificación, limpieza, muestreo",
      "Recopilación, transformación, extracción de características",
      "Adquisición, preprocesamiento, ingeniería de características"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Cuándo debe usarse el conjunto de datos de prueba para entrenar un modelo de ML? (1 punto)",
    options: [
      "Nunca",
      "Solo si contiene datos que no están en otros conjuntos",
      "Siempre",
      "Solo si el conjunto de entrenamiento no es suficientemente grande"
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "¿Cuál es un riesgo con datos no balanceados? (1 punto)",
    options: [
      "Podrían tender a ser negativos más que positivos.",
      "Habrá demasiados datos para que el modelo los asimile.",
      "Podría haber sesgo inapropiado.",
      "Es probable que gran parte de los datos esté obsoleta."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "Estás trabajando en un proyecto que utiliza etiquetadores de datos externos. Se les requiere hacer algunos juicios subjetivos sobre el etiquetado correcto. ¿Cuál es un error de etiquetado que probablemente ocurra en este escenario cuando se utilizan diferentes anotadores para el mismo conjunto de datos? (1 pt)",
    options: [
      "a. Errores deliberados",
      "b. Problemas con las herramientas",
      "c. Etiquetas de datos conflictivas",
      "d. Categorización compleja de clasificación"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: `Estás trabajando con un modelo de aprendizaje automático que predice los hábitos de compra de los clientes. En concreto, el modelo estima cuántos compradores específicos adquirirán un producto que ha sido estratégicamente exhibido en una tienda de comestibles. Para evaluar el modelo, estás especialmente interesado en su precisión y exactitud, y has recopilado la siguiente información para construir la matriz de confusión. (1 punto)`,
    options: [
      "Exactitud = 60%, Precisión = 90%",
      "Exactitud = 70%, Precisión = 80%",
      "Exactitud = 80%, Precisión = 70%",
      "Exactitud = 90%, Precisión = 60%"
    ],
    correctAnswer: 1,
    urlImage: "./tabla preg17.png"
  },
    {
    question: "Estás utilizando métricas de regresión supervisada para evaluar la eficiencia de tu modelo de aprendizaje automático. Al calcular el Error Cuadrático Medio (MSE), descubres que el valor es cercano a cero. ¿Qué significa esto? (1 punto)",
    options: [
      "a. Los datos de la métrica no son válidos porque deberían ser negativos.",
      "b. El modelo de regresión es bueno.",
      "c. Hay una gran similitud entre los puntos de datos dentro de un grupo.",
      "d. El modelo distingue bien entre clases."
    ],
    correctAnswer: 1,
    urlImage: ""
    },
  {
    question: "Estás trabajando con un modelo de ML que utilizará reconocimiento facial para identificar infractores conocidos en una cadena de supermercados. Este modelo será entrenado con fotografías de personas que hayan cometido alguna de las siguientes infracciones en cualquiera de las tiendas de la cadena: robo, comportamiento amenazante hacia el personal, o comportamiento antisocial hacia otros clientes.\n\nHa habido mucha prensa negativa sobre la implementación de este sistema, pero las tiendas consideran que es fundamental para mantener un entorno seguro para el personal y los clientes. Es muy importante que el sistema no identifique erróneamente a personas inocentes, ya que se les negaría la entrada y serían interrogadas por la policía.\n\nDado esta información, ¿qué métrica de rendimiento sería la más importante para este sistema? (2 pts)",
    options: [
      "a. Exactitud (Accuracy)",
      "b. Precisión (Precision)",
      "c. Exhaustividad (Recall)",
      "d. Puntaje F1 (F1-score)"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "En una red neuronal, ¿de dónde obtiene un nodo sus entradas para calcular su valor de activación? (1 punto)",
    options: [
      "De los valores de activación de todas las neuronas de la capa anterior.",
      "De las activaciones de todas las neuronas del grupo de clasificación.",
      "Del valor de sesgo preestablecido.",
      "De los datos de entrenamiento."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
  question: "Te han asignado el diseño de pruebas para determinar la cobertura de una red neuronal. Has determinado que realmente deseas asegurarte de que cada neurona reciba tanto valores de activación positivos como negativos.\n¿Qué tipo de cobertura deberías verificar? (1 punto)",
  options: [
    "Threshold",
    "Cambio de Valor (Value-Change)",
    "Signo-Signo (Sign-Sign)",
    "Cambio de Signo (Sign-Change)"
  ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Cuál es un problema de que los testers usen el mismo enfoque de adquisición y preprocesamiento de datos que usaron los científicos de datos? (1 punto)",
    options: [
      "Puede que no sea posible obtener suficiente cantidad de datos.",
      "Los datos podrían estar desactualizados.",
      "Se pueden ocultar defectos en los métodos de adquisición y procesamiento de datos.",
      "Los datos contendrán muchos duplicados que invalidarán las métricas."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Cómo se diferencia la prueba de integración de componentes cuando la IA se proporciona como servicio? (1 punto)",
    options: [
      "La IA solo debe probarse a nivel de sistema cuando todos los componentes están integrados.",
      "El servicio de IA debe probarse como componente por separado.",
      "La IA no puede probarse por sí sola, solo desde el nivel de prueba de aceptación.",
      "Las APIs del servicio de IA deben probarse como parte de la integración de componentes."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
  question: "Estás utilizando tu teléfono móvil para enviar un mensaje de texto a un colega del trabajo. Tu intención era escribir: 'Hoy no iré porque tengo gripe estomacal'. Sin embargo, el autocorrector lo cambió por: 'Hoy no iré porque tengo una fluctuación de estómago' y además añadió 'estaré lamiendo'. No notaste esta 'corrección' y lo enviaste, lo que causó diversión en tu colega.\n¿Qué demuestra esta situación? (1 punto)",
  options: [
    "Tienes un sesgo de automatización o complacencia y no verificaste el mensaje antes de enviarlo.",
    "No puedes escribir lo suficientemente rápido.",
    "Tienes un sesgo de automatización o complacencia porque no monitoreaste adecuadamente el sistema que estabas usando.",
    "Deberías haber probado el autocompletado antes de usarlo para enviar un mensaje laboral."
  ],
    correctAnswer: 0,
    urlImage: ""
  },
   {question: "Estás probando un sistema de detección de cáncer basado en inteligencia artificial. Es imperativo evitar los falsos negativos y minimizar los falsos positivos. Has estado calculando las métricas de rendimiento y el F1-score está cerca de cero.\n¿Qué deberías hacer? (1 punto)",
  options: [
    "No hacer nada, ya que un F1-score cercano a cero es el objetivo para este sistema.",
    "Utilizar la métrica de Precisión en lugar de F1-score, ya que podría estar dando un resultado sesgado.",
    "Hacer que un experto revise los datos de entrenamiento para asegurarse de que sean correctos.",
    "Revisar el flujo operativo para verificar que la integración esté funcionando correctamente."
  ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Qué técnica de pruebas se recomienda para validar la capacidad de pedir intervención humana? (1 punto)",
    options: [
      "Partición de equivalencia",
      "Análisis de valores límite",
      "Tablas de decisión",
      "Exploratoria"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Cuál es un desafío cuando un sistema de IA es no determinista? (1 punto)",
    options: [
      "Puede ser difícil reproducir los resultados.",
      "Las pruebas exploratorias no se pueden usar.",
      "La automatización debe ser guiada por palabras clave.",
      "Incluir capturas de pantalla en los resultados de prueba puede ser difícil."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "Al probar transparencia en un sistema de IA, ¿qué se compara? (1 punto)",
    options: [
      "Entradas contra salidas.",
      "Datos de entrenamiento contra datos de prueba.",
      "Resultados esperados contra reales usando LIME.",
      "Documentación del algoritmo contra implementación real."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
  question: "Estás probando un cortacésped autónomo. Se espera que el cortacésped solicite intervención humana si detecta que no se encuentra sobre césped, tierra o una superficie dura (como concreto). Esta funcionalidad está diseñada para detenerlo y pedir ayuda si se adentra en un jardín de flores u otra zona de vegetación inusual.\nHas preparado los siguientes casos de prueba:\n1. Colocar el cortacésped sobre concreto frente a un jardín de flores y ordenarle avanzar.\n2. Colocar el cortacésped sobre césped y programarlo para cruzar concreto hacia otro tramo de césped.\n3. Apagar el cortacésped, colocarlo sobre tierra, encenderlo y observar si avanza.\n4. Apagar el cortacésped, colocarlo en un jardín de flores y ver si avanza.\n5. Colocar el cortacésped sobre césped y verificar si avanza.\n6. Colocar el cortacésped sobre tierra frente a un jardín de flores y ordenarle avanzar.\n7. Colocar el cortacésped al borde de un jardín de flores y ordenarle avanzar hacia el césped.\n8. Colocar el cortacésped sobre concreto y ordenarle retroceder hacia el césped.\n9. Colocar el cortacésped frente a una pared y ordenarle avanzar.\n10. Colocar el cortacésped sobre césped frente a un jardín de flores y ordenarle retroceder.\nDe los siguientes conjuntos de casos de prueba, ¿cuál debería usarse para probar el escenario descrito en la pregunta? (1 punto)",
  options: [
    "1, 3, 6, 8",
    "2, 6, 8, 9",
    "4, 6, 7, 10",
    "1, 4, 6, 10"
  ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Por qué las pruebas por pares (pairwise) son efectivas en sistemas de IA? (1 punto)",
    options: [
      "Porque prueban todas las entradas posibles eficientemente.",
      "Porque replican las interacciones de usuario.",
      "Porque garantizan que se pruebe buena y mala información.",
      "Porque prueban combinaciones de múltiples parámetros eficientemente."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Qué tipo de prueba es efectiva contra envenenamiento de datos en ML operacional? (1 punto)",
    options: [
      "EDA",
      "A/B",
      "ML-check",
      "Pairwise"
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Cuál es el propósito del pseudo-oracle en pruebas back-to-back? (1 punto)",
    options: [
      "Probar características no funcionales.",
      "Comparar sus resultados con los del sistema bajo prueba.",
      "Generar datos para entrenamiento continuo.",
      "Crear casos de prueba desde uno previamente aprobado."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    question: "¿Cuál es el proposito de un'tour' en pruebas exploratorias? (1 punto)",
    options: [
      "Un conjunto de estrategias y objetivos para guiar pruebas exploratorias.",
      "Simulación para autos autónomos.",
      "Conjunto de datos de prueba inyectables.",
      "Método de visualización de datos."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
  question: "Estás probando un sistema de inteligencia artificial que predice el crecimiento anual de una especie particular de árbol. Los datos indican que hay una correlación directa entre la cantidad de lluvia que recibe el árbol y el crecimiento que logra en un año determinado.\n¿Cómo puedes aplicar pruebas metamórficas para este sistema? (1 punto)",
  options: [
    "A partir de un caso de prueba inicial, mantener todas las demás variables constantes, aumentar la cantidad de lluvia y verificar que el crecimiento del árbol sea proporcional.",
    "Para un conjunto de casos de prueba, alterar secuencialmente la proporción de nitrógeno en el suelo y verificar que el árbol reaccione adecuadamente.",
    "Para un conjunto de datos, proporcionar medidas de lluvia válidas e inválidas y verificar si el sistema detecta y rechaza los datos inválidos.",
    "A partir de un conjunto de casos de prueba, determinar los valores absolutos para los factores de crecimiento y lluvia y aplicarlos en las pruebas."
  ],
    correctAnswer: 0,
    urlImage: ""
  },
 {
  question: "Estás probando un sistema autoaprendizaje utilizado por compañías de seguros para predecir la expectativa de vida en base a un conjunto de variables. Debido a que el sistema está en constante evolución, ha sido muy difícil diseñar pruebas que sean confiables o incluso válidas. El equipo de desarrollo se prepara para lanzar una nueva versión que contiene correcciones de defectos y nuevas funcionalidades. Tienes un conjunto completo de pruebas de regresión que usaste en una versión anterior y deseas aprovecharlo si es posible.\n¿Qué tipo de prueba sería más adecuada para realizar la prueba de regresión en esta nueva versión y por qué funcionaría este enfoque? (1 punto)",
  options: [
    "Pruebas metamórficas; puedes usar las pruebas de regresión existentes para generar un nuevo conjunto. Esto te permitirá evitar analizar los resultados para verificar si son válidos.",
    "Pruebas back-to-back; tienes casos de prueba disponibles y la versión anterior del sistema puede actuar como pseudo-oráculo, aunque aún deberás comparar los resultados para determinar si las variaciones son válidas.",
    "Pruebas A/B; puedes usar entradas válidas e inválidas para determinar cómo responde el sistema y luego comparar esas respuestas con la documentación de requisitos para ver si son correctas.",
    "Pruebas basadas en experiencia; puedes aplicar conjeturas de errores para centrarte en las áreas que probablemente fallen en esta nueva versión. Puedes ampliar las pruebas a áreas menos riesgosas conforme lo permita el tiempo de regresión."
  ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
  question: "Estás probando un sistema basado en inteligencia artificial que involucra múltiples agencias. ¿Cuál de los siguientes representa un desafío que podrías enfrentar al establecer el entorno de pruebas? (1 punto)",
  options: [
    "Debido a que operará en un entorno peligroso, podría ser potencialmente riesgoso configurar y mantener el entorno.",
    "Necesitarás llevar el sistema a extremos para garantizar que la intervención humana sea posible, pero simular esto será muy costoso y podría destruir partes del entorno durante las pruebas.",
    "El volumen de datos requerido para probar y monitorear el sistema será difícil, si no imposible, de generar.",
    "Para imitar efectivamente la no determinación de los sistemas que se conectan, el entorno debe tener su propio nivel de no determinismo."
  ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    question: "¿Cómo pueden ayudar los modelos de ML a procesar reportes de defectos? (1 punto)",
    options: [
      "Asignar el defecto al desarrollador correcto.",
      "Escribir los pasos para reproducir el defecto.",
      "Detectar errores ortográficos en el reporte.",
      "Adjuntar y verificar capturas de pantalla."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    question: "¿Cuál es uno de los problemas al usar herramientas basadas en IA para generar casos de prueba? (1 punto)",
    options: [
      "No pueden leer los requisitos.",
      "No pueden leer el código.",
      "No pueden determinar el resultado esperado.",
      "No pueden determinar los pasos necesarios para ejecutar la prueba."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "Cuando se utiliza una técnica basada en IA para predecir defectos, ¿cuál de las siguientes medidas ha demostrado ser más efectiva? (1 punto)",
    options: [
      "Líneas de código.",
      "Complejidad ciclomática.",
      "Historial del desarrollador.",
      "Análisis por puntos de función."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    question: "¿Cómo puede una herramienta basada en IA mejorar la automatización de pruebas de una GUI? (1 punto)",
    options: [
      "No puede. Las herramientas de IA no son adecuadas para probar interfaces gráficas.",
      "Reduciendo la fragilidad del código de automatización.",
      "Ampliando el alcance de las pruebas.",
      "Proporcionando un oráculo de prueba más válido."
    ],
    correctAnswer: 1,
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