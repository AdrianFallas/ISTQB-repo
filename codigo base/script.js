const questions = [
    {
        question: "¿Cuál de las siguientes describe mejor la prueba de audio?",
        options: [
            "Prueba para determinar que la música y los efectos de sonido del juego interactúan con las funciones de la plataforma del sistema como se espera.",
            "Prueba para determinar que la música y los efectos de sonido del juego se reproducen sin tartamudeos o elementos faltantes en el juego y mejoran la jugabilidad.",
            "Prueba para determinar que la música y los efectos de sonido del juego funcionan cuando muchos jugadores interactúan simultáneamente con el juego de casino.",
            "Prueba para determinar que la música y los efectos de sonido del juego cumplen con los requisitos jurisdiccionales."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes es una habilidad específica para la prueba en la industria del juego, no requerida en otras áreas de prueba?",
        options: [
            "Prueba de cumplimiento con los estándares de la industria",
            "Prueba matemática, incluyendo generadores de números aleatorios",
            "Prueba de interoperabilidad entre sistemas externos",
            "Aplicar técnicas para probar la cobertura de la estructura del código"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes describe correctamente el juego de azar?",
        options: [
            "La apuesta de dinero en un evento donde el resultado es desconocido con la intención de ganar dinero o bienes materiales adicionales.",
            "La apuesta de dinero en un evento donde el resultado es conocido con la intención de ganar dinero o bienes materiales adicionales.",
            "Un evento donde el resultado es desconocido con la intención de ganar dinero o bienes materiales.",
            "La apuesta de dinero en un evento donde el resultado es desconocido con la intención de recuperar la apuesta original."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál de las siguientes explica mejor el papel de un laboratorio de pruebas independiente?",
        options: [
            "Cuando trabaja con un laboratorio de pruebas independiente, la comisión reguladora envía su producto jurisdiccional finalizado para pruebas para que los juegos puedan jugarse en casinos o en línea.",
            "Cuando trabaja con un laboratorio de pruebas independiente, los fabricantes de juegos envían su producto jurisdiccional finalizado para pruebas, para que los juegos puedan jugarse en casinos o en línea.",
            "Cuando trabaja con un laboratorio de pruebas independiente, los fabricantes de juegos buscan asistencia para finalizar el diseño del juego.",
            "Cuando trabaja con un laboratorio de pruebas independiente, los fabricantes de juegos hacen que el laboratorio de pruebas independiente realice pruebas funcionales para garantizar que el juego sea fiel a las especificaciones."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes explica mejor el papel de la comisión reguladora?",
        options: [
            "La comisión reguladora es responsable de probar un juego para garantizar que cumpla con todos los requisitos jurisdiccionales.",
            "La comisión reguladora es responsable de revocar un juego de los casinos si ocurre un problema menor en el campo.",
            "La comisión reguladora es responsable de probar un juego para garantizar que cumpla con todos los requisitos de especificación del juego.",
            "La comisión reguladora es responsable de revocar un juego de los casinos si ocurre un problema mayor en el campo."
        ],
        correctAnswer: 3
    },
    {
        question: "¿Cuál de las siguientes NO es cierta sobre los juegos de casino?",
        options: [
            "Juegos como las carreras simuladas basan su selección de números en un generador de números aleatorios computarizado.",
            "Todos los tipos de juegos de casino son típicamente probados.",
            "La principal diferencia entre los VLT y las máquinas tragamonedas es qué organización las opera.",
            "Las pruebas de EGM incluyen el sistema operativo y la plataforma en la que se basan."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es verdadera sobre el juego en línea y móvil?",
        options: [
            "Los juegos que se pueden jugar a través de canales inalámbricos en el lugar y de televisión interactiva.",
            "Los progresivos son legales en todas las jurisdicciones cuando se juegan en línea usando su computadora.",
            "El juego móvil en el lugar significa que un jugador puede financiar un EGM con sus dispositivos móviles.",
            "Un jugador en línea puede financiar su cuenta usando una billetera digital."
        ],
        correctAnswer: 3
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre los generadores de números aleatorios (RNG) NO es cierta?",
        options: [
            "El generador de números aleatorios puede ser un dispositivo computacional o físico.",
            "Para el juego basado en máquinas, los generadores de hardware son generalmente preferidos sobre los algoritmos pseudoaleatorios.",
            "Para el juego en línea, los algoritmos pseudoaleatorios son generalmente preferidos sobre los generadores de hardware.",
            "El generador de números aleatorios es certificado por un laboratorio de pruebas independiente (ITL) o por la junta reguladora de la jurisdicción."
        ],
        correctAnswer: 2
    },{
    question: "¿Cuál de las siguientes condiciones de prueba NO pertenecería a un conjunto de pruebas de geolocalización?",
    options: [
        "Verificar que las opciones/restricciones de juego responsable coincidan con la regulación esperada para una región o país en particular.",
        "Verificar que las recompensas de lealtad apropiadas se otorguen a los jugadores de una región o país en particular.",
        "Verificar que el generador de números aleatorios (RNG) correcto se asigne a un jugador según una región o país en particular.",
        "Verificar que el jugador solo pueda acceder a la oferta de juegos de su región o país."
    ],
    correctAnswer: 2
},
{
    question: "¿Cuál de las siguientes afirmaciones NO es verdadera sobre la importancia de obtener un primer pase en un producto de juego?",
    options: [
        "El costo de desarrollo aumenta, causando un impacto negativo en el proyecto.",
        "La reputación del fabricante entre los usuarios del producto disminuye, impactando negativamente los ingresos de la empresa.",
        "La fecha de lanzamiento se retrasa, causando un impacto negativo en el proyecto y los ingresos de la empresa.",
        "El costo de certificación aumenta, causando un impacto negativo en el proyecto."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes NO es verdadera sobre el jackpot progresivo?",
    options: [
        "El jackpot progresivo vinculado a un área local es un tipo de jackpot progresivo.",
        "Un pequeño porcentaje de cada apuesta realizada por un jugador en el juego contribuye al monto del premio del jackpot.",
        "Por cada controlador de jackpot existe un servidor de jackpot.",
        "La victoria del jackpot progresivo está asociada con la combinación ganadora más alta."
    ],
    correctAnswer: 2
},
{
    question: "¿En cuál de las siguientes fases del ciclo de vida del desarrollo de productos de juego está involucrado el equipo de pruebas?",
    options: [
        "Fase de concepto y diseño del juego.",
        "Fase de código completo.",
        "Fase de prueba de aceptación.",
        "Fase de construcción de lanzamiento."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes explica mejor la prueba de cumplimiento?",
    options: [
        "El fabricante del equipo realiza pruebas para determinar el RNG y que los porcentajes de pago están dentro del rango regulado en esa jurisdicción.",
        "El fabricante del equipo prueba contra las especificaciones jurisdiccionales y los estándares de especialistas independientes.",
        "El fabricante de juegos presenta lo que considera un producto finalizado a un laboratorio de pruebas independiente que prueba el producto frente a un conjunto de estándares jurisdiccionales.",
        "El fabricante de juegos presenta lo que considera un producto finalizado a un laboratorio de pruebas independiente que prueba el producto frente a los documentos de diseño del juego y otros requisitos funcionales."
    ],
    correctAnswer: 2
},
{
    question: "¿Cuál de las siguientes afirmaciones es verdadera si un juego ya desplegado presenta un defecto importante?",
    options: [
        "Los desarrolladores del juego corrigen el defecto y publican la nueva versión en los pisos de casino y plataformas en línea.",
        "Los fabricantes de máquinas prueban y certifican que el juego cumple con las reglas jurisdiccionales.",
        "Los laboratorios de pruebas independientes obligan a su eliminación de los pisos de casino y plataformas en línea.",
        "Las comisiones regulatorias de juegos aprueban la nueva versión del juego."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes explica mejor los VLT y su ecosistema?",
    options: [
        "Los VLT son los dispositivos en los que los jugadores eligen jugar un juego de los muchos disponibles. Las máquinas tragamonedas se comunican con un controlador de sitio y/o banco y uno o más servidores centrales a través de una placa de interfaz de comunicación.",
        "El ecosistema de los VLT está compuesto por una máquina tragamonedas o EGM, una placa de interfaz de máquina tragamonedas (SMIB), una unidad de recopilación de datos o controlador de banco, y servidores centrales como servidores progresivos o servidores de contabilidad de tragamonedas.",
        "El ecosistema de los VLT está compuesto por una máquina tragamonedas o EGM, placas de interfaz de máquina tragamonedas (SMIB), conmutadores de red, un servidor de bingo, otros servidores centrales como el sistema de contabilidad del casino y servidores de informes.",
        "En el ecosistema de los VLT, la máquina tragamonedas no obtiene sus resultados de un generador de números aleatorios local a la máquina, en su lugar, el tirón del bandido de un brazo o la presión del botón decide mecánicamente qué resultado obtienes."
    ],
    correctAnswer: 0
},
{
    question: "¿Cuál de las siguientes explica mejor las tragamonedas y su ecosistema?",
    options: [
        "Las tragamonedas son los dispositivos en los que los jugadores eligen jugar un juego de los muchos disponibles. Las máquinas tragamonedas se comunican con un controlador de sitio y/o banco y uno o más servidores centrales a través de una placa de interfaz de comunicación.",
        "El ecosistema de las tragamonedas está compuesto por una máquina tragamonedas o EGM, una placa de interfaz de máquina tragamonedas (SMIB), una unidad de recopilación de datos o controlador de banco, y servidores centrales como servidores progresivos o servidores de contabilidad de tragamonedas.",
        "El ecosistema de las tragamonedas está compuesto por una máquina tragamonedas o EGM, placas de interfaz de máquina tragamonedas (SMIB), conmutadores de red, un servidor de bingo, otros servidores centrales como el sistema de contabilidad del casino y servidores de informes.",
        "En el ecosistema de las tragamonedas, la máquina tragamonedas no obtiene sus resultados de un generador de números aleatorios local a la máquina, en su lugar, el tirón del bandido de un brazo o la presión del botón decide mecánicamente qué resultado obtienes."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes sería un uso efectivo de la prueba exploratoria durante la prueba funcional del juego?",
    options: [
        "Usar una lista de verificación para ver si el juego es legal en las regiones soportadas.",
        "Probar el juego en una variedad de velocidades de red.",
        "Verificar si los juegos de bonificación funcionan correctamente.",
        "Verificar que el juego sea 'divertido de jugar' en lugar de funcionalmente correcto."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes áreas de prueba no se dirigiría específicamente al realizar una prueba funcional de juegos de casino?",
    options: [
        "Las tablas de pagos son específicas para la apuesta.",
        "Capacidad para recordar el historial del juego.",
        "El rendimiento del juego no se degrada en momentos de máxima demanda.",
        "Las páginas de ayuda están disponibles mostrando cómo se espera que se comporte el juego."
    ],
    correctAnswer: 2
},
{
    question: "¿Cuál de las siguientes áreas de prueba es específica para la prueba de cumplimiento de juegos de casino?",
    options: [
        "Fugas de memoria y asignación por parte de los juegos.",
        "Adherencia a las especificaciones jurisdiccionales.",
        "Adherencia de la secuencia gráfica al diseño del juego.",
        "Funcionamiento del juego con parámetros de configuración especificados."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes opciones no se relaciona con la prueba matemática dentro de la industria del juego?",
    options: [
        "Verificar que el juego funcione al porcentaje designado.",
        "Verificar que el juego informe todas las transacciones de ingresos.",
        "Verificar que los números aleatorios sean realmente aleatorios.",
        "Verificar que el juego funcione según las apuestas designadas."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes NO sería parte de la prueba funcional de la plataforma?",
    options: [
        "Determinar que el jugador cumple con los requisitos de edad.",
        "Pago eficiente de grandes cantidades de monedas después de una gran victoria.",
        "Integración del sistema de casino con sistemas de inteligencia empresarial.",
        "Verificar que el juego devuelva el porcentaje especificado."
    ],
    correctAnswer: 3
},
{
    question: "Un cliente se queja a un operador de que un bote progresivo independiente que debería aumentar hasta ser ganado aparentemente se está reiniciando a diario sin entregar una victoria. ¿Cuál de las siguientes áreas de la plataforma es la causa más probable de este fallo?",
    options: [
        "Contadores de contabilidad.",
        "Condiciones de inclinación.",
        "Funcionalidad de encendido y apagado.",
        "Configuración y configuración."
    ],
    correctAnswer: 2
},
{
    question: "¿Cuál es el objetivo final principal de la prueba de cumplimiento de la plataforma?",
    options: [
        "La abstracción de la plataforma cumple con las especificaciones jurisdiccionales.",
        "Las plataformas están disponibles en países jurisdiccionales.",
        "El juego es legal en los países jurisdiccionales.",
        "La plataforma admite una arquitectura abierta."
    ],
    correctAnswer: 0
},
{
    question: "¿Cuál de las siguientes pruebas se incluiría en una prueba de cumplimiento de la plataforma?",
    options: [
        "Modo operador: validar el rol del operador del casino contra las especificaciones funcionales del juego.",
        "Probar contadores de seguridad y contadores de contabilidad utilizando la lista de verificación y planes del equipo de pruebas.",
        "Probar secuencias gráficas y mensajes del juego contra los documentos de diseño del sistema.",
        "Probar el encendido y apagado contra los requisitos jurisdiccionales."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes pruebas se incluiría en una prueba funcional del sistema de casino?",
    options: [
        "Probar la luz de torre ubicada en la parte superior del EGM.",
        "Probar que el sistema de casino informe todos los ingresos al gobierno y a las partes interesadas.",
        "Probar que el juego funcione como se indica en la especificación del juego.",
        "Probar que todos los periféricos se integren según la especificación del juego."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes identifica mejor lo que se entiende por prueba de cumplimiento del sistema de casino?",
    options: [
        "Utiliza planes de prueba de cumplimiento y listas de verificación para determinar que cada área principal del sistema y del sistema integrado cumple con los requisitos jurisdiccionales.",
        "Utiliza planes de prueba de cumplimiento y listas de verificación para determinar que cada área principal del sistema y del sistema integrado cumple con la especificación de diseño del juego.",
        "Utiliza planes de prueba de cumplimiento y listas de verificación para determinar que cada área principal del sistema y del sistema integrado cumple con los requisitos técnicos.",
        "Utiliza planes de prueba de cumplimiento y listas de verificación para determinar que cada área principal del sistema y del sistema integrado cumple con la especificación de diseño matemática."
    ],
    correctAnswer: 0
},
{
    question: "¿Cuál de las siguientes identifica un área que está cubierta por la prueba de cumplimiento del sistema de casino?",
    options: [
        "Asegurar que los registros de diagnóstico cumplan con las especificaciones jurisdiccionales.",
        "Asegurar que las transacciones se registren y sean accesibles según las especificaciones jurisdiccionales.",
        "Asegurar que los periféricos se integren según las especificaciones del juego.",
        "Asegurar que las reglas de juego cumplan con las especificaciones jurisdiccionales."
    ],
    correctAnswer: 1
},
{
    question: "Su organización está desarrollando un nuevo juego de casino llamado Hot Pink y se le ha encargado realizar una prueba funcional de protocolo. ¿Cuál de las siguientes pruebas realizaría?",
    options: [
        "Asegurarse de que el informe del medidor de la máquina tragamonedas y el registro de eventos funcionen correctamente.",
        "Asegurarse de que las transacciones se registren y sean accesibles.",
        "Asegurarse de que el juego de casino informe los ingresos al gobierno y a las partes interesadas correctamente.",
        "Asegurarse de que el historial del jugador, lo que el jugador introdujo en la máquina y sus resultados sean precisos."
    ],
    correctAnswer: 0
},
{
    question: "¿Cuál de las siguientes identifica mejor qué áreas están cubiertas por la prueba funcional de protocolo del casino?",
    options: [
        "Durante la prueba funcional de protocolo del casino, el probador asegura que se cumplan las especificaciones jurisdiccionales para el enlace de comunicación con el EGM y el Host.",
        "Durante la prueba funcional de protocolo del casino, el probador asegura que se cumplan las especificaciones jurisdiccionales y del juego para el enlace de comunicación con el EGM y el Host.",
        "Durante la prueba funcional de protocolo del casino, el probador asegura que se cumplan las especificaciones del juego para el enlace de comunicación con el EGM y el Host.",
        "Durante la prueba funcional de protocolo del casino, el probador asegura que se cumplan las especificaciones de seguridad y del juego para el enlace de comunicación con el EGM y el Host."
    ],
    correctAnswer: 2
},
{
    question: "¿Cuál de las siguientes explica mejor los conceptos de la prueba de cumplimiento de protocolo?",
    options: [
        "Prueba el protocolo de comunicación para los EGMs no conectados contra las especificaciones jurisdiccionales.",
        "Prueba los protocolos de juego que se utilizan solo con el juego en línea.",
        "Prueba el cumplimiento del hardware en los EGMs contra las especificaciones jurisdiccionales.",
        "Prueba los protocolos de juego que conectan las máquinas tragamonedas a los sistemas host para la descarga de software, configuración remota y verificación remota de software contra las especificaciones jurisdiccionales."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes identifica mejor qué áreas están cubiertas por la prueba de cumplimiento de protocolo?",
    options: [
        "Prueba que la información crítica relacionada con los ingresos, la integridad y la seguridad se preserve en caso de pérdida de comunicación, de acuerdo con las especificaciones jurisdiccionales.",
        "Prueba el informe del host sobre los contadores de contabilidad y la pérdida de comunicación para sistemas en línea de acuerdo con la especificación de diseño de red.",
        "Prueba que los datos o señales erróneas no afecten negativamente el funcionamiento de un EGM de acuerdo con la especificación de diseño del protocolo de comunicación.",
        "Prueba que el sistema del casino informe los ingresos al gobierno y a las partes interesadas correctamente de acuerdo con las especificaciones jurisdiccionales."
    ],
    correctAnswer: 0
},
{
    question: "Una máquina tragamonedas ha sido rigurosamente probada por el fabricante de la máquina. Se plantearon los siguientes defectos durante las pruebas, pero la herramienta de gestión de defectos carece de información sobre los tipos de pruebas de las que resultó cada defecto, información que apoyaría el análisis de clúster de defectos y la causa raíz. ¿Cuál de los siguientes informes de defectos debería marcarse como resultado de la prueba de hardware?",
    options: [
        "Después de una entrada forzada a la caja de efectivo de la máquina, la máquina no pudo identificar y registrar el evento.",
        "Durante la pérdida de comunicación entre el EGM y los servidores externos, el jugador continuó realizando apuestas, las transacciones del jugador se mostraron en el historial del juego del EGM, pero no se transmitieron a los servidores cuando se reanudó la comunicación.",
        "Cuando el EGM se coloca en Modo Operador, el operador puede establecer límites de juego por encima de 10,000.",
        "Cuando el jugador realiza una apuesta máxima, el jugador gana una cantidad incorrecta."
    ],
    correctAnswer: 0
},
{
    question: "Su organización es responsable de la prueba de cumplimiento de hardware en un nuevo EGM para Nueva York. ¿Cuál de las siguientes pruebas realizaría?",
    options: [
        "Validar que el aceptador de billetes acepte fondos de EE. UU. y vales de tragamonedas.",
        "Validar que el dispositivo de identificación del jugador solo acepte tarjetas de identificación de jugador configuradas para Nueva York.",
        "Validar que los límites de apuesta del jugador estén dentro de los límites del RNG (límite máximo de $500) para Nueva York.",
        "Validar que el carrete mecánico gire a la velocidad según la especificación del juego."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de las siguientes explica mejor los conceptos de la prueba de integración de hardware?",
    options: [
        "La prueba de integración de hardware intenta identificar fallas en la interfaz entre componentes de hardware, generalmente para una sola plataforma de casino.",
        "La prueba de integración de hardware es la prueba de la integración entre el EGM, los sistemas operativos, las bibliotecas de tiempo de ejecución y los servidores.",
        "La prueba de integración de hardware es la prueba de los componentes de integración de la plataforma, protocolo y sistema del casino.",
        "La prueba de integración de hardware se limita a la prueba del EGM y cómo las tarjetas SMIB se integran con él."
    ],
    correctAnswer: 0
},
{
    question: "¿Cuál de los siguientes es un ejemplo de un defecto de integración de hardware?",
    options: [
        "El volumen del EGM no se puede aumentar o disminuir al ajustarlo en la máquina.",
        "Las apuestas de los jugadores no aparecen en los informes de fin de día.",
        "El EGM no puede entrar en modo operador.",
        "Los aceptadores de monedas no aceptan la moneda jurisdiccional diferente."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de las siguientes explica mejor los conceptos de prueba de sistema de juego remoto?",
    options: [
        "Prueba productos de juego en Internet como apuestas deportivas y juego social.",
        "Prueba las herramientas que gestionan el casino, incluyendo el monitoreo de la emisión de crédito y la redención para el jugador.",
        "Prueba las áreas de juego ofrecidas a través de móvil, inalámbrico en el lugar.",
        "Prueba productos de juego que permiten a los casinos en el lugar agregar tecnología móvil y contenido a sus ofertas existentes."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de los siguientes NO describe las pruebas de seguridad del sistema y la red en el mundo del juego?",
    options: [
        "Pruebas que determinan que la red realiza sus funciones críticas que se han implementado.",
        "Pruebas que determinan que se cumplen las especificaciones de seguridad de la red regulatoria.",
        "Pruebas que determinan que la red y sus servicios están asegurados contra modificaciones no autorizadas.",
        "Pruebas que determinan que las características de seguridad del sistema en línea, como la geolocalización y la verificación de edad, se han implementado."
    ],
    correctAnswer: 3
},
{
    question: "¿Cuál de los siguientes NO es un defecto común del controlador de jackpot?",
    options: [
        "El valor del bono no se resta del valor actual.",
        "El jugador realiza una apuesta mínima y gana el jackpot máximo del bono.",
        "El jugador entra en modo de bono, gana el jackpot y juega sus giros de bono restantes.",
        "El informe de ingresos del jackpot no muestra los valores correctos."
    ],
    correctAnswer: 3
},
{
    question: "¿Qué hace que el juego en línea sea diferente del juego en el lugar?",
    options: [
        "El juego en línea incluye tipos de juegos únicos, como apuestas deportivas.",
        "Los juegos se acceden a través de sitios web en línea.",
        "Los juegos deben cumplir con altas expectativas de los usuarios.",
        "Debe cumplir con una legislación rigurosa, incluida la geolocalización."
    ],
    correctAnswer: 1
},
{
    question: "¿Cuál de los siguientes tipos de prueba no se relaciona con el juego en línea?",
    options: [
        "Pruebas de portabilidad para asegurar que un juego pueda jugarse en múltiples tipos de dispositivos móviles.",
        "Pruebas de protocolo G2S utilizando una lista de verificación definida por la Asociación de Normas de Juego.",
        "Pruebas funcionales para asegurar que la jugabilidad corresponda a las reglas del juego.",
        "Pruebas de cumplimiento para asegurar que el juego cumpla con sus especificaciones jurisdiccionales."
    ],
    correctAnswer: 1
}
];

let timer; // Variable para el temporizador
let timeLeft = 3600; // 40 minutos en segundos
let isTabActive = true; // Variable para controlar la visibilidad de la pestaña

function renderQuestions() {
    const container = document.getElementById("questions-container");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <h2>${index + 1}. ${q.question}</h2>
            <div class="options">
                ${q.options
                    .map(
                        (option, i) =>
                            `<label>
                                <input type="radio" name="question-${index}" value="${i}">
                                ${option}
                            </label>`
                    )
                    .join("")}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("¡El tiempo se ha agotado!");
            evaluateQuiz(); // Evaluar el cuestionario cuando el tiempo se agote
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function evaluateQuiz() {
    const results = [];
    questions.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="question-${index}"]:checked`
        );
        if (selected) {
            const isCorrect = parseInt(selected.value) === q.correctAnswer;
            results.push({ isCorrect, correctAnswer: q.correctAnswer });
        } else {
            results.push({ isCorrect: false, correctAnswer: null });
        }
    });
    displayResults(results);
}

function displayResults(results) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    questions.forEach((q, index) => {
        const result = results[index];
        const resultClass = result.isCorrect ? "correct" : "incorrect";

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <h2>${index + 1}. ${q.question}</h2>
            <div class="options">
                ${q.options
                    .map(
                        (option, i) =>
                            `<label class="${i === q.correctAnswer ? "correct" : ""}">
                                ${option}
                            </label>`
                    )
                    .join("")}
            </div>
            <p class="${resultClass}">
                ${result.isCorrect ? "Correcto" : "Incorrecto"}
                ${!result.isCorrect ? `<br>Respuesta correcta: ${q.options[q.correctAnswer]}` : ""}
            </p>
        `;
        container.appendChild(questionDiv);
    });

    const score = results.filter((r) => r.isCorrect).length;
    const total = questions.length;
    const percentage = (score / total) *  100; // Calcular el porcentaje

    const scoreDiv = document.createElement("div");
    scoreDiv.innerHTML = `<h2>Resultado: ${score} / ${total} (${percentage.toFixed(2)}%)</h2>`;
    container.appendChild(scoreDiv);
}

// Iniciar el cronómetro y renderizar las preguntas al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderQuestions();
    startTimer(); // Iniciar el cronómetro al cargar el cuestionario
    updateTimerDisplay(); // Mostrar el tiempo inicial

    // Controlar la visibilidad de la pestaña
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') {
            isTabActive = false;
            alert("¡Cuidado! Si cambias de pestaña, puedes perder la prueba.");
        } else {
            isTabActive = true;
        }
    });
});

document.getElementById("submit-btn").addEventListener("click", () => {
    clearInterval(timer); // Detener el cronómetro al enviar
    evaluateQuiz(); // Evaluar el cuestionario
});