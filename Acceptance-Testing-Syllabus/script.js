const questions = [
  {
    question: "¿Cuál de las siguientes afirmaciones describe MEJOR la relación entre los objetivos empresariales, las necesidades empresariales y los requisitos?",
    options: [
      "Los objetivos empresariales y las necesidades empresariales son sinónimos.",
      "Los objetivos empresariales, las necesidades empresariales y los requisitos describen en diferentes niveles de abstracción lo que se debe lograr.",
      "Las necesidades empresariales abordan la solución empresarial mientras que los requisitos definen el problema u oportunidad empresarial.",
      "Para derivar las necesidades empresariales, el analista de negocios primero debe comprender los objetivos empresariales y los requisitos."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre los criterios de aceptación es verdadera?",
    options: [
      "Los criterios de aceptación son específicos de los marcos ágiles donde corresponden a requisitos funcionales.",
      "Los testers no deben participar en la redacción de los criterios de aceptación para garantizar que la prueba sea independiente.",
      "En el desarrollo basado en pruebas de aceptación (ATDD), los criterios de aceptación reemplazan las pruebas de aceptación.",
      "Los criterios de aceptación especifican lo que debe probarse para verificar que un requisito o historia de usuario se ha implementado correctamente."
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre la calidad de los requisitos es MÁS correcta?",
    options: [
      "Los requisitos vagos o ambiguos pueden provocar malentendidos tanto durante la implementación como durante las pruebas.",
      "En los modelos ágiles de ciclo de vida del desarrollo, la ingeniería de requisitos se vuelve menos importante debido al rol del Product Owner.",
      "INVEST es una técnica que garantiza la calidad de las historias de usuario o requisitos, reemplazando las revisiones regulares.",
      "Los testers pueden completar requisitos poco claros mediante suposiciones, siempre que las discutan con al menos una parte interesada."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cómo se relacionan las actividades de prueba ISTQB CTFL con las actividades de análisis empresarial y de ingeniería de requisitos IQBBA FL?",
    options: [
      "Los analistas de negocios que siguen el proceso de ingeniería de requisitos de IQBBA no participarán en el diseño de casos de prueba.",
      "Los analistas de negocios y los testers deben decidir si siguen los procesos del ciclo de vida IQBBA o ISTQB, ya que se excluyen mutuamente.",
      "La fase de evaluación de soluciones de IQBBA precede a las actividades de implementación y ejecución de pruebas de ISTQB.",
      "Las actividades de análisis y diseño de pruebas pueden resultar en cambios en los criterios de aceptación."
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones describe MEJOR la colaboración entre analistas de negocios y testers?",
    options: [
      "Los analistas de negocios colaboran en la planificación de pruebas y el análisis de riesgos para asegurar que posteriormente se desarrollen y prioricen casos de prueba apropiados.",
      "Por lo general, los analistas de negocios no pueden revisar pruebas de aceptación porque no entienden los detalles técnicos.",
      "Los testers participan en la identificación de necesidades empresariales de los interesados para comprender mejor las necesidades y los requisitos relacionados.",
      "Una vez definidos los requisitos y criterios de aceptación, los analistas de negocios ya no participan en actividades de prueba."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre ATDD / BDD es verdadera?",
    options: [
      "El desarrollo guiado por comportamiento (BDD) considera el diseño de pruebas de aceptación como una actividad a cargo del equipo de pruebas después de finalizar los requisitos.",
      "En ATDD y BDD, los casos de prueba proporcionan ejemplos de uso del producto.",
      "En ATDD, los casos de prueba se escriben antes que los criterios de aceptación.",
      "En ATDD y BDD, los casos de aceptación se escriben como código automatizado por un ingeniero de automatización de pruebas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál sería el MEJOR ejemplo de un criterio de aceptación para el requisito REQ 3.28: El sistema automatizado registra datos críticos de la solicitud de crédito (CCAD) necesarios para apoyar la evaluación de solicitudes?",
    options: [
      "Los CCAD se almacenan en la base de datos relacional MySQL después de cada procedimiento exitoso de entrada de datos.",
      "Los CCAD no se registran si están incompletos y se muestra un mensaje.",
      "El proceso de registro de los CCAD es rápido y reversible.",
      "El proceso de recopilación de los CCAD cumple con las directrices de usabilidad corporativas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: `¿Cuáles de las siguientes propuestas se considerarían como criterios de aceptación bien redactados para la siguiente historia de usuario?

Historia de usuario:
Como jugador no registrado,
quiero poder registrarme definiendo mi correo electrónico, nombre de usuario y contraseña en un formulario de registro
para convertirme en un jugador registrado.

Propuestas de criterios de aceptación:
i. se muestra un formulario de registro en pantalla.
ii. el formulario está escrito en lenguaje Groovy; el cursor se ubica inicialmente en el campo ‘login’; al presionar TAB se mueve por ‘password’, ‘repeat password’, ‘mail’ y ‘repeat mail’.
iii. no puedo registrarme si el nombre de usuario elegido ya está en uso.
iv. tras completar el proceso de registro con éxito, se me notifica por correo electrónico.`,
    options: [
      "a) solo i) y iii)",
      "b) solo ii)",
      "c) solo ii) y iv)",
      "d) solo i), iii) y iv)"
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones describe correctamente cómo puede complementarse la prueba de aceptación con otras técnicas de prueba?",
    options: [
      "En un enfoque basado en modelos, las pruebas de aceptación se generan a partir de modelos gráficos o textuales.",
      "En un enfoque basado en prioridades, la priorización de pruebas de aceptación depende de los riesgos del producto.",
      "En un enfoque basado en riesgos, los criterios de aceptación se derivan de la experiencia e intuición del tester.",
      "En un enfoque de caja negra, los escenarios de prueba siguen la secuencia implementada de llamadas a funciones en el código."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes técnicas de diseño de pruebas se ajusta MEJOR al propósito de pruebas de aceptación?",
    options: [
      "análisis estático de código",
      "validación de entrada",
      "particionamiento en clases equivalentes",
      "diseño de pruebas basado en defectos"
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: `Supón que estás probando la funcionalidad de la interfaz de un ascensor. 
    Uno de los requisitos es que el ascensor solo funcione si el peso total de los pasajeros no excede los 200 kg. 
    Puede alcanzar los siguientes pisos: Planta Baja, 1er piso y 2do piso.
    Quieres crear una prueba de aceptación usando el lenguaje Gherkin. Puedes usar las siguientes frases:
    i- el peso total de los pasajeros es mayor a 200 kg
    ii- el ascensor está en Planta Baja
    iii- se presionó el botón '1er piso'
    iv- el ascensor sube al 1er piso
    v- un pasajero en el 2do piso llama al ascensor
    vi- se muestra un mensaje ‘demasiados pasajeros’

    ¿Cuál de las siguientes declaraciones asigna correctamente las construcciones DADO/CUANDO/ENTONCES con la frase correspondiente para crear un caso de prueba correcto?`,
    options: [
      "DADO ii) CUANDO i) ENTONCES vi)",
      "DADO ii) CUANDO iv) ENTONCES v)",
      "DADO iii) CUANDO ii) ENTONCES iv)",
      "DADO ii) CUANDO v) AND vi) ENTONCES i)"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de los siguientes ejemplos representa MEJOR una prueba Gherkin para una aplicación bancaria web?",
    options: [
      "DADO tengo $5000 en mi cuenta X Y tengo $200 en mi cuenta Y CUANDO transfiero $1000 de X a Y ENTONCES debería tener $4000 en X Y $1200 en Y",
      "DADO tengo $5000 en cuenta X Y $200 en cuenta Y CUANDO hago clic en 'Transferir', ingreso '3000' en 'Monto', selecciono X como origen y Y como destino, y confirmo ENTONCES debería tener $2000 en X Y $3200 en Y",
      "DADO tengo $5000 en cuenta X y $600 en cuenta Y CUANDO transfiero $500 de Y a X ENTONCES debería tener $4500 en X y $1100 en Y",
      "DADO tengo $5000 en cuenta X CUANDO tengo $600 en cuenta Y ENTONCES tengo $5600 en total entre las cuentas X y Y"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "En Agile se realiza una sesión de pruebas exploratorias. ¿Cuál de los siguientes conceptos aplica MEJOR?",
    options: [
      "programación en pareja",
      "refactorización",
      "planning poker",
      "bloque de tiempo (timeboxing)"
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones describe MEJOR una carta de prueba exploratoria?",
    options: [
      "Indicar que el tester debe asumir el rol de un usuario novato puede formar parte de una carta de prueba exploratoria.",
      "La carta de prueba se elabora durante la sesión de prueba según los resultados de ejecución.",
      "Cada carta de prueba exploratoria se basa en una lista predefinida de actividades que sería interesante probar.",
      "Los testers de aceptación usan la carta de prueba exploratoria durante la sesión de prueba para definir el oráculo de prueba."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cómo se relacionan las pruebas beta con las pruebas de aceptación?",
    options: [
      "Las pruebas beta son sinónimo de pruebas de aceptación utilizadas en dominios de aplicación específicos.",
      "Las pruebas beta deben incluir escenarios de aceptación predefinidos basados en criterios de aceptación.",
      "Las pruebas beta permiten probar el producto en configuraciones y contextos empresariales realistas.",
      "Las pruebas beta son un enfoque sistemático para pruebas de aceptación y proporcionan cobertura medible de las historias de usuario."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones define MEJOR las pruebas beta?",
    options: [
      "Las pruebas beta son realizadas por desarrolladores en las instalaciones del cliente.",
      "Las pruebas beta ocurren temprano en el proceso de desarrollo para obtener retroalimentación del mercado.",
      "Durante las pruebas beta, usuarios reales definen los criterios de aceptación para distintas configuraciones realistas.",
      "Los testers beta descubren defectos en el producto que se escaparon durante el desarrollo."
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál es el modelo correcto de DMN (Modelo de Decisión y Notación) para un sistema que devuelve beneficios según las calificaciones de dos exámenes?",
    options: [
      "Tabla de beneficios:\n0,0 → Ninguno\n0,1 → Parcial\n1,0 → Parcial\n1,1 → Completo",
      "Tabla de beneficios:\nResultado del examen → Beneficio\n0 → Ninguno\n1 → Parcial\n2 → Completo",
      "Matriz de beneficios con banderas SÍ/NO para cada nivel de beneficio por combinación de exámenes",
      "Tabla de reglas DMN:\nResultado = Examen #1 + Examen #2\n0 → Ninguno\n1 → Parcial\n2 → Completo"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: `Supón que deseas crear un modelo que describa el proceso de solicitud de préstamo en un banco.
El proceso comienza cuando el cliente presenta una solicitud. Luego el banco la revisa.
Independientemente de si se aprueba o no, se envía una carta al cliente con la decisión.
Si se aprueba, se crea el contrato del préstamo.
Has dibujado el siguiente modelo de proceso de negocio usando BPMN 2.0.

¿Cuál de las siguientes afirmaciones es verdadera respecto a este modelo BPMN?`,
    options: [
      "La verificación de empleo no se realiza cuando el estado del préstamo es rechazado.",
      "La creación del contrato del préstamo está definida como un subproceso.",
      "La búsqueda de título y la solicitud de informe crediticio son tareas secuenciales.",
      "Revisar el informe crediticio es opcional durante la revisión de la solicitud."
    ],
    correctAnswer: 1,
    urlImage: "./diagrama-preg18.png"
  },
  {
    question: "¿Cuál de los siguientes conjuntos mínimos de casos de prueba permite ejecutar todas las tareas posibles del proceso de retiro de $100 en el modelo BPMN?",
    options: [
      "Prueba 1, Prueba 3",
      "Prueba 1, Prueba 2, Prueba 3",
      "Prueba 2, Prueba 4",
      "Prueba 1, Prueba 2, Prueba 4"
    ],
    correctAnswer: 0,
    urlImage: "./diagrama-preg19.png"
  },
  {
    question: "¿Cuál de los siguientes conjuntos mínimos de casos de prueba permite lograr cobertura completa de decisiones en el modelo BPMN de retiro de $100?",
    options: [
      "Prueba 1, Prueba 2, Prueba 4",
      "Prueba 1, Prueba 2",
      "Prueba 2, Prueba 3",
      "Prueba 1, Prueba 2, Prueba 3"
    ],
    correctAnswer: 3,
    urlImage: "./diagrama-preg20.png"
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre la representación gráfica de procesos de negocio es verdadera?",
    options: [
      "Usar tablas de decisión en BPMN permite definir condiciones de prueba correspondientes a reglas de negocio.",
      "Las representaciones gráficas deben describir el flujo completo en detalle, incluyendo alternativas y errores.",
      "Para pruebas de aceptación, los modelos gráficos de procesos deben enfocarse en los flujos de usuario a evaluar.",
      "Los procesos de negocio deben representarse gráficamente usando DMN y completarse con tablas de decisión."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Qué se considera una buena práctica en el modelado de procesos de negocio?",
    options: [
      "Mantener todos los elementos del modelo en un solo diagrama mejora considerablemente la legibilidad.",
      "Los diagramas BPMN y las tablas DMN deben incluir trazabilidad a historias de usuario.",
      "Los enlaces a requisitos o riesgos deben separarse bien de la descripción del flujo.",
      "Los analistas de negocio deben finalizar sus modelos antes de mostrarlos a los testers de aceptación."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es el argumento MENOS significativo para usar el enfoque ATDD con modelos de procesos de negocio en una aplicación de RRHH?",
    options: [
      "Los modelos ayudarán a los testers a entender los casos de uso a probar.",
      "Los testers podrán mostrar cobertura directamente dentro de la representación gráfica del proceso.",
      "Los modelos facilitarán la detección de defectos en el código de la aplicación.",
      "Como los modelos se actualizarán para mantener las pruebas, serán documentación viva del producto."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuál explica MEJOR cómo pueden usarse los modelos de procesos y reglas de negocio en ATDD?",
    options: [
      "En ATDD, los modelos de proceso/regla deben crearse antes de iniciar el proyecto.",
      "En ATDD, los modelos de procesos reemplazan los criterios de aceptación.",
      "En ATDD, los testers usan los modelos para generar pruebas de aceptación.",
      "En ATDD, los modelos se crean para el diseño inicial de pruebas pero no se mantienen después."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Qué atributos de calidad son MÁS relevantes para pruebas de aceptación?",
    options: [
      "Idoneidad funcional, seguridad, capacidad cognitiva",
      "Idoneidad funcional, seguridad, mantenibilidad",
      "Comercialización, idoneidad funcional, capacidad cognitiva",
      "Viabilidad, confiabilidad, seguridad"
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuál de los siguientes es una característica de calidad en uso según ISO 25010?",
    options: [
      "Eficiencia",
      "Usabilidad",
      "Compatibilidad",
      "Portabilidad"
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones representa MEJOR una actividad de análisis de requisitos UX?",
    options: [
      "Las personas se usan para analizar productos o soluciones de la competencia.",
      "Los perfiles de usuario se usan para determinar distintos niveles de conocimiento del negocio.",
      "Los requisitos de seguridad se derivan de escenarios de uso.",
      "Las condiciones ambientales como la iluminación se obtienen de un análisis de tareas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de los siguientes escenarios caracteriza MEJOR el análisis de tareas UX?",
    options: [
      "Los usuarios son clasificados según sus características físicas e intelectuales.",
      "Los casos de uso se analizan y representan mediante modelos de procesos de negocio.",
      "Las condiciones externas se consideran como insumos para pasos de diseño posteriores.",
      "Se buscan inspiraciones en sectores similares para identificar soluciones exitosas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes técnicas de prueba de usabilidad se ajusta MEJOR al objetivo de la prueba?",
    options: [
      "Las revisiones de expertos ayudan a entender cómo los usuarios interactúan con el sistema y qué es más o menos visible.",
      "La evaluación basada en biometría ayuda a entender retrospectivamente cómo interactuaron los usuarios y a mejorar el sistema.",
      "El análisis de archivos de registro realizado por expertos en usabilidad identifica puntos fuertes de la interfaz que atraen la atención del usuario.",
      "Los métodos de recorrido (walkthrough) y pensar en voz alta pueden indicar las dificultades que experimentan los usuarios con ciertas tareas."
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre pruebas de rendimiento es MÁS correcta?",
    options: [
      "Dependiendo del modelo usado para simular la carga de trabajo, las pruebas de rendimiento se denominan de carga, estrés o resistencia/estabilidad.",
      "Las pruebas de rendimiento tienen como objetivo determinar la robustez del sistema ante ataques maliciosos.",
      "El rendimiento del sistema se mide en un contexto que refleje, tanto como sea posible, condiciones operativas representativas.",
      "Los resultados de las pruebas de rendimiento sirven para determinar los requisitos de hardware y software."
    ],
    correctAnswer: 2,
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes combinaciones de perspectiva y afirmación coincide MEJOR?",
    options: [
      "Desde una perspectiva empresarial, la potencia de cómputo y la arquitectura son parámetros clave para ajustar el sistema.",
      "Desde una perspectiva de usuario, la falta de retroalimentación del sistema al procesar una solicitud es un problema.",
      "Desde una perspectiva técnica, el número de usuarios concurrentes y el tipo de transacciones realizadas son elementos importantes.",
      "Desde una perspectiva empresarial, la elección de herramientas para pruebas de rendimiento depende fuertemente de las técnicas de prueba utilizadas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál de los siguientes criterios de aceptación se relaciona con requisitos de seguridad?",
    options: [
      "El tiempo de respuesta del sistema no debe superar los 3 segundos.",
      "El sistema debe ser basado en web.",
      "La interfaz gráfica de usuario debe cumplir con las guías de estilo corporativas.",
      "Los usuarios normales deben tener acceso restringido a datos privados."
    ],
    correctAnswer: 3,
    urlImage: " "
  },
  {
    question: "El equipo de proyecto enfrenta una sensación de estancamiento y dificultad para visualizar el futuro. ¿Qué taller es el MÁS adecuado para desbloquear la motivación?",
    options: [
      "Pide a dos voluntarios que representen puntos de vista opuestos sobre el proyecto y debátelos con el equipo.",
      "Dibuja una escalera con 11 peldaños, ubica el estado actual en el medio y luego discute los pasos hacia atrás y hacia adelante.",
      "Organiza una salida con retos en equipo seguida de una cena para elevar la moral.",
      "Visualiza los hitos restantes y pide al equipo que identifique acciones para avanzar hacia ellos."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "Estás liderando un nuevo equipo sin experiencia previa de colaboración. ¿Qué taller ayuda MEJOR a construir visión y espíritu de equipo?",
    options: [
      "Invita al equipo a diseñar su propio emblema y lema que represente valores y objetivos compartidos.",
      "Invita a cada miembro a compartir su experiencia y logros previos.",
      "Pide a los miembros que escriban tres cosas que les gustan y no les gustan de la organización y las discutan.",
      "Utiliza una escalera con 11 hitos colocando al equipo en la cima y discute los pasos hacia atrás."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Cuál afirmación sobre defectos es MÁS correcta?",
    options: [
      "Las reuniones periódicas entre analistas y testers son necesarias para informar discrepancias.",
      "Los testers deben proporcionar información precisa sobre las diferencias entre los resultados esperados y reales.",
      "Si un defecto resulta ser un error, el tester redacta un informe y lo envía al analista para investigar.",
      "Los testers deben analizar el impacto del defecto sobre el uso del sistema antes de comunicarlo."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Qué actividad es MÁS probable que realice un analista de negocios durante el análisis de defectos?",
    options: [
      "Identificar los requisitos o historias de usuario que no están satisfechos.",
      "Evaluar el impacto de las acciones correctivas sobre otras partes del sistema.",
      "Analizar paso a paso la función que falló para identificar la causa del defecto.",
      "Verificar si otras rutas en el modelo de procesos de negocio funcionan correctamente."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Qué información es MÁS probable que esté presente en un informe de resumen de pruebas de aceptación?",
    options: [
      "Información para evaluar el nivel de riesgo al liberar el producto.",
      "Detalles técnicos sobre correcciones de defectos.",
      "Estrategia de pruebas y métodos de diseño de prueba.",
      "Información sobre el procedimiento de prueba."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Qué técnica es MÁS probable que se use para garantizar la calidad de las actividades de pruebas de aceptación?",
    options: [
      "Revisar el código fuente para verificar la trazabilidad de las historias de usuario.",
      "Verificar la trazabilidad entre historias de usuario y casos de prueba.",
      "Utilizar una verificación basada en listas de comprobación para garantizar integridad y calidad de los requisitos.",
      "Aplicar seguimiento ocular para validar la viabilidad de pruebas de aceptación previamente definidas."
    ],
    correctAnswer: 1,
    urlImage: " "
  },
  {
    question: "¿Cuál es la MEJOR ventaja de revisar conjuntamente los criterios de aceptación entre analistas y testers?",
    options: [
      "Una visión compartida facilita el diseño de casos de prueba de aceptación.",
      "La revisión conjunta garantiza que se consideren criterios de calidad no funcionales.",
      "La revisión ayuda a verificar que las pruebas cubren procesos, reglas y riesgos.",
      "La revisión mejora la calidad de los informes de prueba."
    ],
    correctAnswer: 0,
    urlImage: " "
  },
  {
    question: "¿Qué herramienta se ajusta MEJOR a las actividades de pruebas de aceptación?",
    options: [
      "Herramientas de gestión de requisitos para administrar campañas de ejecución de pruebas.",
      "Herramientas de gestión y automatización de pruebas para generar pruebas de aceptación basadas en modelos.",
      "Herramientas de gestión de procesos de negocio para modelar procesos y reglas.",
      "Herramientas de prueba basadas en modelos para gestionar incidentes."
    ],
    correctAnswer: 2,
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
  ${Array.isArray(q.urlImages) && q.urlImages.length > 0
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