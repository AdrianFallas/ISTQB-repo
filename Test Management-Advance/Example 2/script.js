//Test Management Advance example 2

const questions = [
    {
        question: "Eres el gerente de pruebas en un gran proyecto de implementación de CRM. Se te requiere establecer un plan de pruebas antes de que comience el desarrollo. ¿Cuál de las siguientes actividades es más esencial para desarrollar y establecer el plan de pruebas?",
        options: [
            "Alcanzar un consenso entre todas las partes interesadas.",
            "Definir los objetivos de prueba basados en estándares regulatorios.",
            "Establecer la preparación para comenzar las pruebas.",
            "Hacer que todas las partes interesadas identifiquen su estrategia de mitigación de riesgos."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Durante el curso de tu proyecto de implementación de software, el monitoreo de pruebas se convierte en una actividad importante para ti como gerente de pruebas. ¿Cuál de las siguientes define el objetivo principal del monitoreo de pruebas?",
        options: [
            "El monitoreo de pruebas compara el progreso real de las pruebas con el progreso planificado.",
            "El monitoreo de pruebas compara los resultados reales con los resultados esperados.",
            "El monitoreo de pruebas compara los cambios con riesgos desconocidos.",
            "El monitoreo de pruebas compara los criterios de aprobación con los criterios de salida."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Al comparar a los interesados en un proyecto dado, el Gerente de Proyecto quiere asegurarse de que se realicen discusiones detalladas con los interesados de alto nivel, mientras que, al mismo tiempo, involucra a los interesados de bajo nivel en un taller de planificación específicamente para el cronograma del proyecto. ¿Cuál es el MEJOR grupo de interesados que el Gerente de Proyecto debería incluir en las discusiones detalladas?",
        options: [
            "Líderes de desarrollo, testers de automatización, personal de finanzas.",
            "Arquitectos de seguridad, equipo de operaciones.",
            "Gerentes de proyecto de otros proyectos, propietarios de aplicaciones.",
            "Gerentes de proyecto de otros proyectos, capacitadores, proveedor de herramientas de gestión de pruebas."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como Gerente de Pruebas responsable de realizar pruebas de aceptación, debes comprar una herramienta de gestión de pruebas comercial independiente que cumpla con los requisitos y estándares de tu organización. La herramienta debe permitirte planificar, ejecutar, monitorear e informar sobre las actividades y resultados de las pruebas de aceptación. Has identificado y analizado a los interesados que tienen un alto interés y alta influencia en la herramienta de gestión de pruebas. ¿Cuál de los siguientes sería el grupo de interesados que se vería más impactado por la decisión sobre la herramienta?",
        options: [
            "Testers.",
            "Desarrolladores de productos.",
            "Gerente de producto.",
            "Gerente de proyecto."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Un proyecto acaba de comenzar a utilizar prácticas de desarrollo ágil. El equipo de pruebas no está capacitado para realizar pruebas continuas en plazos más cortos utilizando múltiples ciclos de prueba. ¿Cuál de las siguientes actividades de gestión de pruebas es la más importante en un rol de gestión de pruebas?",
        options: [
            "Entrenar y asesorar al equipo de pruebas sobre automatización, integración continua, pruebas y entrega.",
            "Dar al equipo tiempo para aprender negociando plazos y reconocer las pequeñas victorias del equipo para mantener su moral alta.",
            "Convencer a la dirección de que introducir prácticas ágiles no funcionará, porque el equipo y los recursos no están listos para ello.",
            "Contratar a algunos nuevos miembros del equipo que estén familiarizados con las pruebas continuas."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Una nueva gerente de pruebas se une a una organización y se le asigna inicialmente la tarea de identificar qué modelos de ciclo de vida de desarrollo de software se están utilizando actualmente. Cuatro cosas que observó fueron:\n• Las iteraciones de prueba ocurrían cada 3 semanas.\n• Se implementó automatización para ayudar a cumplir con los plazos.\n• Los productos y tareas se completaban antes de pasar a la siguiente iteración.\n• Las pruebas no comenzaban hasta que se completaran los requisitos.\n\n¿Qué modelo de ciclo de vida de desarrollo de software se describe arriba?",
        options: [
            "Secuencial.",
            "Iterativo.",
            "Híbrido.",
            "DevOps."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que trabajas para una ambiciosa startup que está desarrollando un sistema que proporciona programas de lealtad y recompensas personalizados para pequeñas y medianas empresas que venden a clientes basados en la web. Las empresas que utilizan el sistema pueden inscribirse por sí mismas en la tienda web del sistema y luego pueden crear botones personalizados para sus sitios web. Estos botones pueden ser utilizados para permitir que sus clientes se inscriban en el programa de lealtad y recompensas de las empresas. Cada compra subsiguiente gana puntos, y tanto las empresas como sus clientes pueden gestionar el programa; por ejemplo, para determinar el número de puntos requeridos para recibir un producto o servicio gratuito. Tu empleador tiene la intención de lanzar nuevas características, mejoras y correcciones de errores a través de múltiples lanzamientos cada mes. ¿Cuál de las siguientes actividades de gestión de pruebas se aplica?",
        options: [
            "Implementar herramientas de desarrollo DevOps.",
            "Enviar los informes de estado de pruebas manualmente.",
            "Gestionar la ejecución de pruebas de regresión manual.",
            "Habilitar al equipo de pruebas y facilitar la comunicación."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que estás en un proyecto que desarrolla software crítico para la seguridad de un dispositivo médico. El software debe cumplir con estándares como la norma ISO 62304 y las regulaciones de la FDA. El proyecto sigue una metodología ágil con sprints de dos semanas. El equipo de pruebas consiste en cuatro testers en el sitio y seis testers fuera del sitio. La organización utiliza una cadena de herramientas DevOps basada en la nube como la principal herramienta para CI/CD y automatización de pruebas. El proyecto está en la fase de mantenimiento y, a partir de ahora, requerirá pruebas de regresión frecuentes debido a correcciones de defectos y mejoras de características. El proyecto tiene un proceso continuo de gestión de riesgos en marcha, que implica identificar, evaluar y mitigar cualquier riesgo nuevo o existente asociado con los cambios en el software.\n\n¿Cuál de las siguientes actividades de gestión de pruebas enfatiza mejor el enfoque específico de este proyecto?",
        options: [
            "Desarrollar un plan de gestión de riesgos para identificar, evaluar, priorizar y mitigar riesgos.",
            "Desarrollar un plan de gestión de configuración para que el equipo de pruebas defina los roles y responsabilidades de los equipos en el sitio y fuera del sitio.",
            "Desarrollar un plan de automatización de pruebas para definir el alcance de la automatización y seleccionar las herramientas y marcos de automatización.",
            "Desarrollar un plan de pruebas de regresión para identificar el alcance de las pruebas de regresión y seleccionar las herramientas de pruebas de regresión."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Un proyecto involucró la migración de una aplicación web a la nube. El proveedor del sistema en la nube estimó que una interrupción del sistema era muy poco probable. Basado en esta afirmación, los testers decidieron no realizar pruebas de confiabilidad para este ítem porque, aunque el impacto del riesgo sería alto, el nivel de riesgo general moderado no justificaba el esfuerzo y tiempo adicionales necesarios para este tipo de prueba. Poco después de salir en vivo, el sitio web se volvió inaccesible durante dos días, causando una pérdida sustancial de ingresos y reputación para la empresa.\n\n¿Cómo podría el equipo de pruebas mejorar su uso de pruebas basadas en riesgos para evitar tales problemas en el futuro?",
        options: [
            "Involucrar a interesados adicionales en el análisis de riesgos para mejorar la evaluación de la probabilidad de riesgo.",
            "Realizar pruebas de confiabilidad intensivas incluso si el nivel de riesgo es moderado.",
            "Involucrar a testers experimentados en la evaluación de riesgos para evaluar correctamente el nivel de riesgo.",
            "Utilizar una estrategia de pruebas basadas en riesgos para evitar tales fallas importantes."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como gerente de pruebas, creas una hoja de cálculo con filas para los componentes del sistema y columnas para sus modos de falla, su probabilidad de riesgo y su impacto de riesgo. Invitas a los arquitectos del sistema y a los representantes de operaciones a completar conjuntamente los componentes del sistema y los modos de falla basados en su experiencia.\n\n¿Qué técnica de identificación de riesgos estás aplicando con este procedimiento?",
        options: [
            "Entrevistas a expertos.",
            "Listas de verificación.",
            "Taller de riesgos.",
            "Lluvia de ideas."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Se han identificado riesgos para un proyecto y se han analizado utilizando un método cuantitativo, con los siguientes resultados para la probabilidad de riesgo y el impacto de riesgo. ¿Qué conjunto de actividades de prueba sería el mejor para mitigar estos riesgos?",
        options: [
            "Abordar el riesgo A como alta prioridad probando un prototipo temprano con las partes interesadas del negocio, luego abordar el riesgo C introduciendo revisiones. No se planea ninguna prueba para mitigar los riesgos B y D.",
            "Ejecutar pruebas que aborden el riesgo A mediante revisión de documentación, y el riesgo C con pruebas de caja negra. Luego, abordar los riesgos B y D con pruebas de caja blanca.",
            "Mitigar los riesgos probando primero los riesgos B y C con pruebas exploratorias, luego probar el riesgo A con pruebas de confirmación. Probar el riesgo D según el tiempo disponible.",
            "Mitigar los riesgos probando el riesgo A y el riesgo B con las partes interesadas del negocio utilizando un prototipo temprano y el riesgo D con pruebas no funcionales. Aceptar el riesgo C sin pruebas explícitas."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: "./tabla preg11.png"
    },
    {
        question: "Supón que estás en un proyecto que desarrolla una aplicación web para la banca en línea. El proyecto sigue un ciclo de vida de desarrollo ágil y tiene sprints de dos semanas cada uno. La aplicación tiene varias características, como gestión de cuentas, transferencia de fondos, pago de facturas y solicitud de préstamos. Cada característica tiene diferentes niveles de riesgos de seguridad, usabilidad y rendimiento.\n\nTienes un equipo de pruebas de seis miembros con diferentes habilidades y experiencia. Basado en esta situación, ¿cómo seleccionarías las actividades de prueba apropiadas para mitigar los riesgos según su nivel de riesgo?",
        options: [
            "Usar pruebas estáticas y dinámicas para todas las características, pero asignar más esfuerzo de prueba y usar técnicas de prueba más exhaustivas para las características con niveles de riesgo más altos. Asignar a los testers más calificados a las características con los niveles de riesgo más altos. Usar revisiones y pruebas de regresión para asegurar la calidad.",
            "Usar pruebas estáticas para las características con niveles de riesgo más bajos y pruebas dinámicas para las características con niveles de riesgo más altos. Asignar a los testers aleatoriamente a las características sin importar sus habilidades y experiencia. Usar revisiones y pruebas de regresión para asegurar la calidad.",
            "Usar pruebas dinámicas solo para las características con niveles de riesgo más altos y omitir las pruebas para las características con niveles de riesgo más bajos. Asignar a los testers según su disponibilidad y preferencia. Usar revisiones y pruebas de regresión para asegurar la calidad.",
            "Usar pruebas estáticas solo para las características con niveles de riesgo más altos y omitir las pruebas para las características con niveles de riesgo más bajos. Asignar a los testers según su antigüedad y rango. Usar revisiones y pruebas de regresión para asegurar la calidad."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Tu equipo está desarrollando una nueva versión importante de una aplicación móvil que muestra gráficamente el horario de varias organizaciones de transporte público en una interfaz de usuario común. Tu equipo sigue un modelo de ciclo de vida ágil con iteraciones y lanzamientos rápidos. Los requisitos son bastante informales, a menudo recopilados a partir de comentarios de usuarios y desarrollo. La estrategia de prueba organizacional requiere pruebas basadas en riesgos. Para hacer que el análisis de riesgos avance rápidamente, deseas involucrar a los miembros del equipo ágil que están familiarizados con las principales áreas de riesgo de usabilidad, compatibilidad, portabilidad y rendimiento.\n\n¿Qué técnica recomendarías usar en esta situación?",
        options: [
            "Análisis de peligros.",
            "Análisis y gestión de riesgos pragmáticos.",
            "Pruebas de software sistemáticas.",
            "Análisis de árbol de fallos."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como gerente de pruebas, se te ha pedido por el gerente de proyecto que establezcas la estrategia de pruebas para un proyecto de implementación de software.\n\n¿Cuáles de los siguientes son los factores más importantes a considerar para asegurar una estrategia de pruebas eficiente y efectiva?",
        options: [
            "Tipos de prueba, técnicas de prueba y métricas de prueba.",
            "Niveles de prueba, criterios de entrada/salida y técnicas de prueba.",
            "Niveles de prueba, tipos de prueba y técnicas de prueba.",
            "Niveles de prueba, técnicas de prueba y entregables de prueba."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que eres miembro de un proyecto que desarrolla un producto de software para el sector bancario. Eres responsable de analizar la estrategia de pruebas organizacional y el contexto del proyecto para elegir el enfoque de prueba apropiado. Consideras los siguientes factores:\n• El proyecto tiene un presupuesto ajustado y una fecha límite fija, lo que significa que debes optimizar el esfuerzo de prueba y evitar costos y retrasos innecesarios.\n• El cliente ha proporcionado requisitos detallados y espera alta calidad y fiabilidad del producto, lo que significa que debes asegurarte de que el producto cumpla con las expectativas del cliente y con las especificaciones.\n• El proyecto utiliza un modelo de ciclo de vida de desarrollo ágil con lanzamientos frecuentes y ciclos de retroalimentación, lo que significa que debes adaptarte a los requisitos cambiantes y entregar resultados de prueba en iteraciones cortas.\n• El equipo de pruebas consta de cuatro testers con diferentes niveles de experiencia y habilidades, lo que significa que debes asignar las tareas de prueba de acuerdo con las capacidades de los testers y proporcionar orientación y apoyo cuando sea necesario.\n• La infraestructura de pruebas es limitada y requiere configuración y mantenimiento manual, lo que significa que debes planificar y gestionar el entorno de prueba y los recursos de manera cuidadosa y eficiente.\n• El producto tiene varias interfaces con otros sistemas que necesitan ser probadas, lo que significa que debes coordinar e integrar las actividades de prueba con los otros interesados y asegurar la compatibilidad e interoperabilidad de los productos.\n\n¿Cuál de los siguientes enfoques de prueba sería el más apropiado para este proyecto?",
        options: [
            "Pruebas basadas en riesgos para priorizar las características y escenarios más críticos y complejos, y asignar los recursos de prueba en consecuencia.",
            "Pruebas basadas en modelos para generar casos de prueba y datos de prueba automáticamente a partir de los requisitos, y medir la cobertura y calidad de las pruebas.",
            "Pruebas basadas en la experiencia para aprovechar la experiencia e intuición de los testers, y realizar pruebas exploratorias en un contexto ágil.",
            "Pruebas basadas en los criterios de aceptación para verificar el cumplimiento del producto con las especificaciones del cliente y habilitar las pruebas de aceptación."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que estás en un proyecto que desarrolla una aplicación web para la banca en línea. El proyecto es específico para el cliente y tiene requisitos estrictos sobre seguridad, rendimiento y fiabilidad. El proyecto utiliza un modelo de ciclo de vida de desarrollo ágil con sprints de dos semanas y lanzamientos frecuentes.\nEl equipo de pruebas consta de cuatro testers con diferentes niveles de experiencia y habilidades. La infraestructura de pruebas es basada en la nube y soporta varios navegadores y dispositivos. Los datos de prueba son proporcionados por el cliente y necesitan ser anonimizados antes de su uso.\n\nBasado en el escenario, ¿cuál de los siguientes enfoques de prueba sería el más apropiado para tu proyecto?",
        options: [
            "Las pruebas serán realizadas por todo el equipo utilizando tres niveles de prueba: pruebas unitarias y de integración, donde los casos de prueba son creados y ejecutados conjuntamente por los desarrolladores y los testers agrupados en pares, y pruebas de sistema donde los casos de prueba serán creados y ejecutados por los cuatro testers. En el nivel de pruebas unitarias y de integración, se utiliza pruebas de caja blanca con el objetivo de 100% de automatización. En todos los niveles de prueba se utilizará pruebas basadas en riesgos para crear y priorizar los casos de prueba. Para las pruebas de sistema, los testers utilizarán todas las técnicas de prueba apropiadas para cubrir los criterios de aceptación.",
            "Las pruebas serán realizadas por todo el equipo utilizando cuatro niveles de prueba: pruebas unitarias, pruebas de integración, pruebas de sistema y pruebas de aceptación. En las pruebas unitarias y de integración, así como en el nivel de pruebas de sistema, se utilizará pruebas basadas en modelos de manera exhaustiva con un enfoque en pruebas basadas en estados. La cobertura de código se mide mientras se ejecutan las pruebas y se busca una cobertura de ramas del 90%. Para las pruebas de aceptación, la demostración del sprint es suficiente.",
            "Como el proyecto utiliza un modelo de ciclo de vida de desarrollo ágil, no se definen niveles de prueba explícitos, y las pruebas serán realizadas por los desarrolladores automatizando sus pruebas unitarias y por los cuatro testers utilizando pruebas exploratorias. Para esto, se crearán varias cartas de prueba que dan orientación sobre el uso de la infraestructura de prueba para que se cubran todos los navegadores y dispositivos disponibles. Además, se realizarán pruebas de usabilidad utilizando pruebas basadas en listas de verificación.",
            "Se definirán dos niveles de prueba. El primer nivel de prueba es un nivel combinado de pruebas unitarias/integración donde los cuatro testers crearán casos de prueba basados en los requisitos funcionales utilizando particionamiento de equivalencia, análisis de valores límite, tablas de decisión y pruebas de transición de estado. Estos casos de prueba serán automatizados por los desarrolladores y utilizados en las pruebas unitarias/integración. En las pruebas de sistema, los testers utilizarán pruebas exploratorias para cada ítem que esté marcado como 'hecho' por los desarrolladores."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Eres parte de un equipo responsable de probar un complejo sitio web de comercio electrónico. Al equipo se le ha dado el siguiente objetivo por parte de la dirección: \"El sistema debe estar libre de defectos\". De acuerdo con los criterios S.M.A.R.T., y teniendo en cuenta la complejidad y los recursos limitados de tu proyecto, ¿cuál de las siguientes revisiones a este objetivo de prueba sería la más apropiada?",
        options: [
            "Nuestro sitio web debe ser capaz de realizar todas las funciones planificadas sin defectos graves que afecten la experiencia del usuario.",
            "Para el final de la fase de desarrollo actual, menos del 1% de las funciones del sitio deben tener defectos, medido por el número total de casos de prueba funcionales incluidos en la suite de pruebas.",
            "Nuestro objetivo es asegurar que nuestro sistema de comercio electrónico no experimente interrupciones críticas que puedan llevar a interrupciones comerciales dentro del próximo año.",
            "Nuestro objetivo es reducir el número de defectos aceptados encontrados en las pruebas beta en un 50% en comparación con la versión anterior."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas de un proyecto que desarrolla una aplicación móvil para compras en línea. El proyecto está en desarrollo y hay altas expectativas sobre usabilidad, funcionalidad y compatibilidad. El proyecto utiliza un modelo de ciclo de vida de desarrollo híbrido con lanzamientos cada cuatro meses e iteraciones mensuales. El equipo de pruebas consta de seis testers con diversas habilidades y experiencia. La infraestructura de pruebas es basada en la nube y soporta varios dispositivos y sistemas operativos. Los datos de prueba son generados por una herramienta de gestión de datos de prueba y necesitan ser validados antes de su uso.\n\n¿Cuál de los siguientes objetivos de prueba del proyecto es S.M.A.R.T. de acuerdo con el texto del syllabus?",
        options: [
            "Comprobar la usabilidad de la aplicación midiendo el tiempo que toma completar una compra con el objetivo de que el 90% de los usuarios puedan completar su compra en menos de 3 minutos dentro de los próximos dos meses.",
            "Aumentar el nivel de pruebas automatizadas en un 50% dentro de las próximas dos semanas con el objetivo de acelerar significativamente las pruebas de regresión.",
            "Cumplir con las normas y regulaciones de la industria del comercio electrónico que han sido publicadas recientemente y que pronto se convertirán en el estándar regulatorio en una regulación de la UE, y por lo tanto vinculantes para todas las partes interesadas.",
            "Probar la funcionalidad y compatibilidad de la aplicación probando todas las características en la mayoría de los dispositivos reales, así como a través de un proveedor de servicios externo, los emuladores se proporcionan dentro de las siguientes dos sprints, ya que ha habido comentarios negativos en las tiendas."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que eres un gerente de pruebas y estás trabajando para hacer que tus procesos de prueba sean más efectivos y eficientes. Ya tienes un presupuesto inicial aprobado por la dirección para estas mejoras de proceso. La semana pasada, un consultor externo completó su evaluación sobre el proceso de prueba y entregó sus hallazgos.\n\n¿Cuál de los siguientes es el siguiente paso para este esfuerzo de mejora de procesos, asumiendo que sigues el modelo IDEAL para la mejora de procesos?",
        options: [
            "Crear un plan para seleccionar e implementar las recomendaciones de la evaluación.",
            "Implementar las recomendaciones de la evaluación, incluyendo cualquier capacitación y piloto necesario.",
            "Iniciar el proceso de mejora en toda la organización de pruebas.",
            "Diagnosticar la situación actual evaluando las fuentes de ineficiencia."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Tú, como consultor de pruebas, ahora eres responsable de las mejoras de prueba en un proyecto crítico en un pequeño banco regional. El proyecto trata sobre la transformación digital y continuará durante dos años más utilizando un enfoque ágil. Dado que el modelo de madurez de pruebas (TMMi) es popular en el dominio financiero, el banco te ha pedido que utilices TMMi durante tus actividades de mejora de pruebas del proyecto.\n\n¿Cómo procederías a utilizar TMMi en el contexto descrito?",
        options: [
            "Dejar claro que la mejora basada en el modelo utilizando TMMi no es posible a nivel de proyecto.",
            "Recomendar que se utilicen todas las áreas de proceso de TMMi de nivel 2 y nivel 3 para estas actividades de mejora.",
            "Centrarse en las áreas de proceso de TMMi que se relacionan especialmente con las actividades a nivel de proyecto, y además utilizar la guía específica 'TMMi y Ágil'.",
            "Dado que el proyecto está utilizando un enfoque ágil, proponer utilizar la guía scrum para las actividades de mejora de pruebas."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Supón que trabajas para una ambiciosa start-up que está desarrollando un sistema que proporciona programas de lealtad y recompensas personalizados para pequeñas y medianas empresas que venden a clientes en línea. Las empresas que utilizan el sistema pueden inscribirse por sí mismas en la tienda web del sistema y luego pueden crear botones personalizados para sus sitios web. Estos botones pueden ser utilizados para permitir que sus clientes se inscriban en el programa de lealtad y recompensas de las empresas. Cada compra posterior gana puntos, y tanto las empresas como sus clientes pueden gestionar el programa; por ejemplo, para determinar el número de puntos requeridos para recibir un producto o servicio gratuito.\n\nEl personal de marketing de tu empleador está promocionando fuertemente el sistema ofreciendo descuentos agresivos en las tarifas del primer año para inscribir a las empresas inaugurales. Los materiales de marketing afirman que el servicio será altamente confiable y extremadamente rápido para las empresas y sus clientes.\n\nHace cuatro meses, se completaron los requisitos y se inició el desarrollo del software. Al analizar los riesgos de calidad, la adaptación de los botones se clasificó como el riesgo más bajo, mientras que la inscripción se clasificó como el riesgo más alto. Como estaba planeado en el cronograma, se lanzó la primera versión hace un mes y las empresas y sus clientes pudieron comenzar a registrarse. El sistema ha estado en uso por empresas y sus clientes durante un mes. Tu equipo ha utilizado una mezcla de pruebas basadas en riesgos, pruebas basadas en requisitos y pruebas reactivas. Ahora estás realizando una retrospectiva del trabajo de pruebas.\n\n¿Cuáles de las siguientes ÁREAS deberían considerarse más probablemente en esta retrospectiva?",
        options: [
            "Evaluar si se han reportado problemas significativos por parte de los usuarios en la personalización de botones.",
            "Decidir si el plan del proyecto incluía todos los riesgos relevantes del proyecto que afectaron la entrega a las empresas adoptantes tempranas.",
            "Determinar el nivel de detalle requerido para la inscripción, personalización y gestión de los casos de prueba.",
            "Medir la cobertura de los requisitos de inscripción y reportar los resultados a los interesados del proyecto y del negocio.",
            "Investigar qué pruebas en qué nivel de prueba podrían haber cubierto los problemas reportados por los clientes."
        ],
        correctAnswer: [0, 3], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        question: "Eres un tester en un equipo de desarrollo de software ágil que acaba de completar una iteración. Te estás preparando para la reunión de retrospectiva con el resto del equipo.\n\n¿Cuál de las siguientes actividades NO es parte de una retrospectiva típica?",
        options: [
            "Revisar el progreso de las pruebas, la detección de defectos y las métricas de efectividad de las pruebas.",
            "Identificar las causas raíz de los problemas de prueba y generar ideas de mejora.",
            "Asignar responsabilidades y definir objetivos y métricas para las acciones de mejora.",
            "Evaluar los procesos y herramientas de prueba en comparación con las mejores prácticas de la industria."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas y el jefe del equipo de pruebas para una nueva línea de productos con múltiples variantes para varios clientes. Una de las primeras tareas que se te asigna es seleccionar e introducir una herramienta adecuada para la gestión de pruebas, ya que la herramienta actual de tu empresa no se ajusta a las necesidades de la próxima línea de productos.\n\n¿Cuál NO es una buena práctica para la selección de la nueva herramienta de gestión de pruebas?",
        options: [
            "Elegir el sucesor de la herramienta de gestión de pruebas actualmente utilizada.",
            "Enumerar los criterios necesarios para la línea de productos que no son cumplidos por la herramienta de gestión de pruebas.",
            "Evaluar qué modelo de licencia se ajustará mejor a la gestión de pruebas de una línea de productos con múltiples variantes.",
            "Evaluar la herramienta en función de requisitos claros y criterios objetivos."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Trabajas para una empresa internacional que produce hardware y software para redes de telecomunicaciones. El desarrollo de hardware y software se lleva a cabo en unidades de negocio separadas. Eres el gerente de pruebas de una línea de productos de software de enrutadores de red.\n\nEn tu línea de productos, hay una larga tradición de crear productos estrechamente integrados utilizando un ciclo de vida de producto incremental. La unidad de negocio de hardware produce una nueva versión cada seis meses. Tu línea de productos de software tiene como objetivo tener una nueva versión del software lista para cada nueva versión de hardware. El software se desarrolla en incrementos de dos meses. Los cronogramas de las unidades de negocio están sincronizados durante el diseño.\n\nTu equipo consta de 15 testers, que han estado en la empresa durante al menos dos años, pero la mayoría mucho más tiempo. Nuevas pruebas son desarrolladas por los analistas de pruebas más experimentados. Las variaciones de pruebas y los conjuntos de pruebas de regresión son ejecutados por el resto del equipo.\n\nLa dirección de la empresa requiere informes de progreso mensuales que enumeren el número de defectos severos encontrados, así como el estado de la ejecución de pruebas. También ha habido esfuerzos para medir la eficiencia del personal en todas las unidades de negocio. Ha habido problemas para mantener el ritmo con el cronograma de desarrollo de hardware.\n\nHas oído que otra línea de productos de software similar dentro de tu empresa está utilizando una herramienta de código abierto para su automatización de pruebas. La utilizan para automatizar aproximadamente el 50% de las pruebas y ejecutar el resto manualmente a través de la interfaz de usuario del software.\n\nSe te solicita investigar si sería posible utilizar esta herramienta para tu línea de productos también. ¿Cuál debería ser tu principal preocupación?",
        options: [
            "¿Qué tan bueno es el soporte para la herramienta de código abierto?",
            "¿Es la nueva herramienta fácil de usar?",
            "¿Es mi unidad de negocio lo suficientemente madura para la automatización de pruebas utilizando esta herramienta?",
            "¿Se pueden mantener fácilmente todos los artefactos creados por la herramienta?"
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Estás trabajando en un proyecto de desarrollo de software que utiliza una metodología de desarrollo ágil. Estás considerando introducir una herramienta de automatización de pruebas para mejorar la calidad y eficiencia de las pruebas. Has identificado tres herramientas potenciales: Herramienta A, Herramienta B y Herramienta C. Cada herramienta tiene diferentes características, costos y beneficios. Los costos anuales recurrentes para las tres herramientas son iguales al 20% de los costos de adquisición. Antes de la implementación de la herramienta, el esfuerzo anual de pruebas manuales era de $60,000. Has realizado un análisis de costo-beneficio y calculado el ROI para cada herramienta basado en la siguiente información:\n\n- Herramienta A cuesta $10,000 para comprar y $2,000 por año para mantener. Tiene un alto nivel de usabilidad y mantenibilidad, pero solo soporta pruebas funcionales. Puede reducir el esfuerzo de pruebas manuales en un 20% y el tiempo del ciclo de pruebas en un 10%. También puede aumentar la cobertura de pruebas en un 15%.\n- Herramienta B cuesta $15,000 para comprar y $3,000 por año para mantener. Tiene un nivel moderado de usabilidad y mantenibilidad, pero soporta tanto pruebas funcionales como de rendimiento. Puede reducir el esfuerzo de pruebas manuales en un 30% y el tiempo del ciclo de pruebas en un 20%. También puede aumentar la cobertura de pruebas en un 25%.\n- Herramienta C cuesta $20,000 para comprar y $4,000 por año para mantener. Tiene un bajo nivel de usabilidad y mantenibilidad, pero soporta pruebas funcionales, de rendimiento y de seguridad. Puede reducir el esfuerzo de pruebas manuales en un 40% y el tiempo del ciclo de pruebas en un 30%. También puede aumentar la cobertura de pruebas en un 35%.\n\nSuponiendo que se puede calcular el ROI para la situación dada, ¿qué herramienta elegirías y por qué?",
        options: [
            "Herramienta A, porque tiene los costos iniciales y recurrentes más bajos.",
            "Herramienta B, porque tiene el mejor equilibrio entre costos y beneficios.",
            "Herramienta C, porque tiene la mayor reducción en esfuerzo y tiempo y el mayor aumento en cobertura.",
            "Ninguna de las herramientas, porque no proporcionan un ROI positivo."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Para tu proyecto actual, la herramienta personalizada disponible no cumple con los requisitos de tu esfuerzo de automatización de pruebas. Dentro de tu empresa, hay una herramienta de automatización de pruebas de código abierto que se está utilizando con éxito para requisitos idénticos.\n\nSi eliges la misma herramienta de código abierto, ¿cuál de las siguientes actividades debería ocurrir como primer paso al retirar la herramienta personalizada actual para mostrar el valor de la nueva herramienta lo más rápido posible?",
        options: [
            "La herramienta personalizada debe ser mantenida y convertida al nuevo entorno.",
            "Los scripts de prueba de regresión de la herramienta personalizada deben ser convertidos a la nueva herramienta.",
            "Las funcionalidades de respaldo y restauración de la herramienta personalizada deben ser mantenidas.",
            "Todos los scripts de prueba de la herramienta personalizada deben ser convertidos a la nueva herramienta."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como gerente de pruebas, se te requiere informar sobre diferentes métricas durante las diferentes actividades de prueba. ¿Cuál de las siguientes métricas recomendarías para las diferentes actividades de gestión de pruebas?\n\nMétricas:\n1. Porcentaje de cobertura de riesgo del producto\n2. Número de defectos resueltos en comparación con defectos no resueltos\n3. Porcentaje de casos de prueba planificados vs. automatizados\n4. La relación entre el número estimado de horas requeridas para las actividades de prueba vs. el número total de horas del proyecto\n\nActividades de gestión de pruebas:\nA) Planificación de pruebas\nB) Monitoreo de pruebas y control de pruebas\nC) Finalización de pruebas\nD) Ninguna de las anteriores\n\nPor favor, empareja las actividades de gestión de pruebas con las métricas correspondientes.",
        options: [
            "A. 3B, 4B, 1C, 2C.",
            "B. 2B, 3B, 1C, 4C.",
            "C. 1B, 2B, 4B, 3C.",
            "D. 1B, 2C, 3C, 4C."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Tu junta directiva es nueva en métricas de prueba y te pide que expliques el objetivo principal de usar métricas de prueba. ¿Cuál de las siguientes afirmaciones usarías para explicar el beneficio de las métricas de prueba a tu dirección?",
        options: [
            "A. Las métricas de prueba son indicadores del progreso de las pruebas y ayudan a evaluar si se han cumplido los criterios de salida de prueba o los objetivos de prueba.",
            "B. Las métricas de prueba recomiendan acciones correctivas para lograr pruebas efectivas y eficientes.",
            "C. Las métricas de prueba se utilizan para recopilar datos de actividades de prueba completadas para consolidar lecciones aprendidas, pruebas y otra información relevante.",
            "D. Las métricas de prueba se utilizan para re-priorizar pruebas cuando un riesgo identificado se convierte en un problema."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Trabajas para una empresa internacional que produce hardware y software para redes de telecomunicaciones. El desarrollo de hardware y software se lleva a cabo en unidades de negocio separadas. Eres el gerente de pruebas de una línea de productos de software de enrutadores de red.\n\nEn tu línea de productos, hay una larga tradición de crear productos estrechamente integrados utilizando un ciclo de vida de producto incremental. La unidad de negocio de hardware produce una nueva versión cada seis meses. Tu línea de productos de software tiene como objetivo tener una nueva versión del software lista para cada nueva versión de hardware. El software se desarrolla en incrementos de dos meses. Los cronogramas de las unidades de negocio están sincronizados durante el diseño.\n\nTu equipo consta de 15 testers, que han estado en la empresa durante al menos dos años, pero la mayoría mucho más tiempo. Nuevas pruebas son desarrolladas por los analistas de pruebas más experimentados como scripts de prueba personalizados internos. Las variaciones de pruebas y los conjuntos de pruebas de regresión son ejecutados por el resto del equipo.\n\nLa dirección de la empresa requiere informes de progreso mensuales que enumeren el número de defectos severos encontrados, así como el estado de la ejecución de pruebas. También ha habido esfuerzos para medir la eficiencia del personal en todas las unidades de negocio. Ha habido problemas para mantener el ritmo con el cronograma de desarrollo de hardware.\n\nEl gerente de la unidad de negocio te ha pedido que propongas cómo mejorar las pruebas del proyecto introduciendo mejores herramientas o métricas medibles (por ejemplo, al menos un 100% de cobertura de declaraciones).\nEl gerente ha recopilado rápidamente una lista de riesgos del producto de representantes de usuarios y piensa que las pruebas no cubren todos los riesgos.\n\n¿Cuál de las siguientes opciones recomendarías?",
        options: [
            "A. Agregar más pruebas para cubrir mejor la funcionalidad.",
            "B. Derivar el estado de riesgo y confianza de las opiniones de los testers sobre las capacidades de los desarrolladores.",
            "C. Analizar los riesgos residuales basados en la confianza de los testers para ver si se alcanza suficiente cobertura de declaraciones.",
            "D. Incluir la evaluación de confianza como parte de las mediciones del proyecto."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas de un proyecto de software que utiliza un modelo de desarrollo secuencial centrado en documentos e involucra el desarrollo de una aplicación de escritorio para un sistema bancario. El proyecto tiene un equipo grande y jerárquico que trabaja con múltiples partes interesadas. El proyecto tiene un bajo nivel de incertidumbre y complejidad debido a los requisitos y la tecnología estables y bien definidos. El proyecto también tiene estrictos estándares de calidad y seguridad para cumplir con las regulaciones legales de la industria bancaria.\n\n¿Cuáles son las métricas más adecuadas que utilizarías para analizar los resultados de las pruebas y crear informes de pruebas que empoderen a las partes interesadas para tomar decisiones? Elige la mejor respuesta.",
        options: [
            "A. Métricas relacionadas con riesgos del producto, defectos, progreso de pruebas, cobertura y costos y esfuerzo de prueba.",
            "B. Métricas relacionadas con defectos, progreso de pruebas, cobertura y cobertura de código.",
            "C. Métricas relacionadas con riesgos del producto, defectos, progreso de pruebas, cobertura y cobertura de entorno/configuración.",
            "D. Métricas relacionadas con defectos, progreso de pruebas, cobertura y costos residuales para componentes no probados."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como gerente de pruebas, debes considerar muchos factores para estimar los esfuerzos de prueba. Esta estimación puede ser revisada a medida que avanza la prueba. ¿Cuál de los siguientes factores NO es relevante para la estimación de pruebas durante la PLANIFICACIÓN INICIAL DE PRUEBAS?",
        options: [
            "A. La complejidad y el tamaño del software bajo prueba.",
            "B. La disponibilidad y habilidades de los miembros del equipo de pruebas.",
            "C. La calidad y fiabilidad de las herramientas y el entorno de prueba.",
            "D. El número y la gravedad de los defectos encontrados durante las pruebas."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Estás trabajando en un proyecto ágil que tiene lugar en múltiples ubicaciones, y eres responsable del esfuerzo de prueba en tu ubicación. La estrategia de pruebas es una mezcla de pruebas basadas en riesgos, estrategia de pruebas conforme a procesos y pruebas reactivas. Los desarrolladores están siguiendo las mejores prácticas ágil conocidas, incluyendo pruebas automatizadas de componentes e integración continua.\n\nTu tarea es estimar el esfuerzo de prueba del sistema requerido para una iteración particular por parte de tu equipo de pruebas. ¿Cuáles de las siguientes DOS afirmaciones describen mejor qué técnicas de prueba o enfoques deberías usar y cómo deberías llevar a cabo la estimación en esta situación?",
        options: [
            "A. Considerar el esfuerzo promedio requerido por riesgo identificado en iteraciones pasadas.",
            "B. Asignar sesiones de prueba con tiempo limitado para cada carta de prueba identificada.",
            "C. Estimar que la mayoría de los defectos se encontrarán durante la ejecución de pruebas del sistema.",
            "D. Incluir el esfuerzo para crear documentación de prueba detallada.",
            "E. Suponer que las pruebas del sistema pueden reutilizar datos y entornos de pruebas unitarias."
        ],
        correctAnswer: [0, 1], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas de un proyecto de software que sigue el modelo secuencial. Hay datos históricos sobre esfuerzos basados en requisitos de proyectos similares disponibles. Los requisitos del proyecto y el alcance están fijos y bien definidos.\n\nNecesitas estimar el esfuerzo de prueba para todo el proyecto basado en el documento de especificación de requisitos. ¿Cuál de las siguientes técnicas o enfoques sería más adecuado para tu contexto?",
        options: [
            "A. Estimación basada en ratios.",
            "B. Planning Poker.",
            "C. Estimación de tres puntos.",
            "D. Método Delphi."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como tester, generalmente se te requiere crear un informe de defectos cada vez que observas un defecto durante las pruebas. Sin embargo, puede haber situaciones en las que no crees un informe de defectos. ¿Cuál de las siguientes es una razón por la que NO se puede crear un informe de defectos después de que se detecta una falla por una prueba?",
        options: [
            "A. La falla es causada por un defecto que fue introducido en la misma fase que la prueba.",
            "B. La falla es causada por un defecto que no se debe rastrear dentro del flujo de trabajo de defectos.",
            "C. La falla es causada por una prueba inválida que no coincide con la especificación de requisitos.",
            "D. La falla es causada por una anomalía que no es observada por el tester."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "El diagrama muestra un flujo de trabajo de defectos incompleto, donde dos estados (estados X e Y) aún no han sido nombrados apropiadamente. ¿Cuál de las siguientes opciones completaría correctamente el flujo de trabajo?",
        options: [
            "A. STATE X – RETESTED\t  STATE Y – RE-OPENED",
            "B. STATE X – REJECTED\t  STATE Y – CLARIFICATION",
            "C. STATE X – DUPLICATE\t STATE Y – TERMINATED",
            "D. STATE X – FIXED STATE Y – REJECTED "
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: "./diagram preg35.png"
    },
    {
        question: "¿Cuál de las siguientes representa una secuencia completa de estados para un informe de defectos que conduce a un estado terminal? Suponga que EN PROGRESO significa uno o más estados donde los desarrolladores u otros interesados del proyecto están abordando el defecto.",
        options: [
            "A. ABIERTO, EN PROGRESO, RESUELTO, CERRADO, DIFERIDO.",
            "B. ABIERTO, EN PROGRESO, DEVUELTO, EN PROGRESO, RESUELTO.",
            "C. ABIERTO, EN PROGRESO, RESUELTO, CERRADO.",
            "D. EN PROGRESO, ABIERTO, RESUELTO, CERRADO."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres un tester en un equipo ágil que trabaja en un nuevo producto. Durante el tercer sprint, mientras realizabas pruebas exploratorias, experimentaste una falla en la funcionalidad de inicio de sesión que fue desarrollada durante el primer sprint en cooperación con el equipo responsable del Proveedor de Identidad (IDP). ¿Cuál es una razón por la que elegirías NO crear un informe de defectos en este caso?",
        options: [
            "A. El desarrollador no tendrá tiempo para trabajar en la solución hasta la semana siguiente.",
            "B. Necesitas aclarar la falla con un desarrollador de tu equipo primero.",
            "C. Esta falla requerirá cooperación con el equipo del IDP.",
            "D. Según el Product Owner, esta falla tiene baja gravedad y debería ser corregida en la siguiente iteración."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Hoy en día se utilizan múltiples metodologías de desarrollo de software. Diferentes metodologías en el SDLC requieren un enfoque de prueba adaptado. Eres un gerente de pruebas en un proyecto de desarrollo de software que opera en un entorno híbrido. ¿Cuál de las siguientes es la más relevante en cuanto a la gestión de defectos en este contexto?",
        options: [
            "A. Todos los equipos utilizan la misma herramienta de gestión de defectos, independientemente de su metodología.",
            "B. La frecuencia de las reuniones del comité de gestión de defectos debe ser determinada por el equipo más grande.",
            "C. Los equipos ágiles deben programar sus prioridades de corrección de defectos para alinearse con el plan general del proyecto.",
            "D. Todos los miembros del equipo acuerdan la priorización de los defectos."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "ID de defecto: [Inserte el ID de defecto aquí]\nEstado: 24.06.2024\nEditado por [Max Mustermann]\nComponente: [Inserte el componente específico aquí]\nSubsistema: [Inserte el subsistema específico aquí]\n¿Cuál de los siguientes elementos de datos NO es obligatorio para gestionar informes de defectos en la mayoría de los entornos?",
        options: [
            "A. Un título de defecto con un breve resumen de la anomalía.",
            "B. El subsistema o componente en el que se encuentra el defecto.",
            "C. Severidad del impacto en el sistema bajo prueba y/o en los interesados del producto.",
            "D. Prioridad para corregir la anomalía."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas en un proyecto donde se están realizando pruebas del sistema en software proporcionado por un tercero. Has recibido una queja del tercero de que la completitud de los datos de defectos de tus pruebas del sistema es inaceptable.\n¿Cuál de las siguientes opciones podría haberse identificado como faltante en los informes de defectos enviados al tercero?",
        options: [
            "A. La actividad del proyecto que ocurría cuando se detectó el problema.",
            "B. Pasos para reproducir la falla, junto con los resultados reales y esperados.",
            "C. La prioridad para corregir el problema.",
            "D. El tipo técnico del defecto.",
            "E. La fase del ciclo de vida del software en la que se detectó el defecto."
        ],
        correctAnswer: [1, 2], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        question: "Tu organización ha decidido que su objetivo es mejorar su proceso de pruebas y desarrollo reduciendo el número de defectos introducidos durante el desarrollo, basado en informes de defectos ya existentes.\n¿Cuál de la siguiente información del informe de defectos será MÁS útil para cumplir con este objetivo?",
        options: [
            "A. Las fases del ciclo de vida del software de detección y eliminación del defecto.",
            "B. La información sobre la causa raíz del defecto.",
            "C. El número de defectos por componente.",
            "D. La eficiencia de la eliminación de defectos."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Como gerente de pruebas, estás buscando nuevos miembros para el equipo. Debes redactar una oferta de trabajo. En esta oferta incluyes las competencias requeridas de los nuevos miembros del equipo. ¿Cuál de las siguientes habilidades es un ejemplo de competencia metodológica para un miembro del equipo de pruebas?",
        options: [
            "A. Capacidad para aplicar técnicas de prueba para diseñar casos de prueba.",
            "B. Capacidad para comunicar los resultados de las pruebas a los interesados.",
            "C. Capacidad para recibir críticas.",
            "D. Capacidad para aprender nuevas tecnologías y herramientas."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres responsable de dotar de personal a un equipo de pruebas en una empresa que desarrolla sistemas de frenos para un fabricante de vehículos de motor nacional. Mientras el desarrollo de los componentes de software individuales es llevado a cabo por varios equipos ÁGILES, el desarrollo del sistema (que consiste en software y hardware) se realiza de acuerdo con el modelo V en estrecha cooperación con los equipos ÁGILES.\n\nEl sistema de frenos se clasifica como crítico para la seguridad. Las pruebas deben ser de última generación en diseño y documentación.\n\nEl analista de pruebas para las pruebas del sistema deja tu empresa mientras el proyecto está en la fase final de la prueba del sistema, y la posición debe ser cubierta rápidamente. La tarea principal del analista de pruebas era el diseño de pruebas de integración en cooperación con los equipos ÁGILES y el diseño de pruebas basado en requisitos para las pruebas del sistema.\n\nBasado en la información anterior, ¿cuál es la combinación MÍNIMA de habilidades y calificaciones requeridas para esta posición?",
        options: [
            "A. Técnicas de prueba de caja negra; habilidades de comunicación; resiliencia; documentación de pruebas según ISO 29119.",
            "B. Técnicas de prueba de caja negra; habilidades de programación; resiliencia; certificación ÁGIL.",
            "C. Habilidades de comunicación; capacidad para delegar trabajo; competencia intercultural; documentación de pruebas según ISO 29119.",
            "D. Competencia intercultural; habilidades de comunicación; técnicas de prueba de caja negra; capacidad para delegar."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Estás en un rol de gestión de pruebas de un proyecto de software que utiliza un ciclo de vida de desarrollo de software ágil (SDLC) e involucra el desarrollo de una aplicación web para una plataforma de apuestas en línea. El proyecto tiene un pequeño equipo multifuncional que trabaja en estrecha colaboración con el cliente. El proyecto tiene un alto nivel de incertidumbre y complejidad debido a los cambios frecuentes en los requisitos y la tecnología. El proyecto también tiene estrictos estándares de calidad y seguridad para cumplir con las regulaciones legales de la industria del juego.\n\nBasado en el contexto del proyecto dado, ¿cuáles son las habilidades MÁS importantes que buscarías al seleccionar miembros del equipo de pruebas para este proyecto?",
        options: [
            "A. Experiencia en negocios en la industria del juego, experiencia técnica en tecnologías web y vulnerabilidades de seguridad, experiencia técnica para automatizar la ejecución de pruebas, habilidades de comunicación y cooperación, habilidades de autogestión y disciplina.",
            "B. Conocimiento conceptual para desarrollar una estrategia de pruebas, habilidades de gestión de proyectos para gestionar todas las tareas de prueba, habilidades analíticas para analizar la base de pruebas y los riesgos del producto, habilidades de juicio para la selección de pruebas.",
            "C. Habilidades en técnicas de prueba y conocimiento conceptual para diseñar los entornos de prueba, experiencia técnica para la programación de scripts de prueba y configuración de entornos de prueba, experiencia técnica para automatizar la ejecución de pruebas, habilidades de comunicación y cooperación.",
            "D. Experiencia en negocios en la industria del juego, experiencia técnica en lenguajes de programación y tecnología de interfaces, conocimiento sobre niveles de prueba, roles de prueba y técnicas de prueba específicas, habilidades de resolución de conflictos."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Para determinar la competencia de un nuevo colega, le has dado la tarea de analizar un conjunto de requisitos y diseñar casos de prueba para la prueba del sistema.\n¿Cuáles áreas de habilidad se pueden evaluar en función del rendimiento del colega en esta tarea?",
        options: [
            "A. Evaluación de la competencia técnica basada en los casos de prueba creados y competencia metodológica basada en las consultas.",
            "B. Evaluación de la competencia metodológica sobre la base de los hallazgos sobre los requisitos y competencia técnica sobre la base de las técnicas de prueba seleccionadas.",
            "C. Evaluación de la competencia profesional sobre la base de los hallazgos sobre los requisitos y competencia metodológica sobre la base de las técnicas de prueba seleccionadas.",
            "D. Evaluación de la competencia profesional sobre la base de las preguntas y competencia social sobre la base de los casos de prueba creados."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Desarrollar las habilidades y competencias de los miembros de tu equipo es importante para establecer y mantener un equipo de pruebas de alto rendimiento. Como gerente de pruebas, debes establecer planes de desarrollo personal para tu equipo de proyecto. ¿Cuál de las siguientes afirmaciones sobre enfoques para el desarrollo de habilidades de los miembros del equipo de pruebas es correcta?",
        options: [
            "A. La formación y el coaching implican contenido predefinido entregado a múltiples participantes simultáneamente.",
            "B. El autoestudio es un enfoque recomendado para desarrollar habilidades sociales.",
            "C. En el aprendizaje entre pares, un miembro experimentado del equipo proporciona orientación continua a un nuevo miembro del equipo.",
            "D. El coaching proporciona orientación individual a una persona nueva en un rol, ayudándole a encontrar soluciones para mejorar sus competencias."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Liderar un equipo requiere habilidades específicas. ¿Cuál de las siguientes afirmaciones sobre liderar un equipo de pruebas es correcta?",
        options: [
            "A. En un equipo de pruebas, la disposición a ayudar es más importante que la capacidad de delegar.",
            "B. Cuando se forma un nuevo equipo de pruebas, la capacidad de actuar con aprecio es la competencia más importante.",
            "C. A lo largo del ciclo de vida del equipo de pruebas, todas las habilidades son igualmente importantes.",
            "D. La capacidad de resolver conflictos ayuda a alcanzar un consenso sobre reglas y roles en las primeras etapas del desarrollo del grupo."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Considera estas categorías de costos de calidad:\n1. Costos de prevención\n2. Costos de evaluación\n3. Costos de fallos internos\n4. Costos de fallos externos\nY estos ejemplos de actividades relacionadas con la calidad:\nA. Pruebas de aceptación tempranas para obtener retroalimentación rápida\nB. Realización de un análisis de riesgos del producto\nC. Quejas de los clientes sobre un rendimiento deficiente\nD. Largo tiempo de espera desde el informe de defectos hasta la resolución durante las pruebas, lo que causa una mayor ineficiencia en la gestión de defectos.\n\n¿Cuál de las siguientes ASIGNACIONES CORRECTAS empareja las categorías de costos de calidad con sus ejemplos en el desarrollo de software?",
        options: [
            "A. 1 – A 2 – B 3 – C 4 – D",
            "B. 1 – B 2 – A 3 – D 4 – C",
            "C. 1 – A 2 – B 3 – D 4 – C",
            "D. 1 – B 2 – A 3 – C 4 – D"
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Estás gestionando las pruebas de una aplicación de servicio de citas en línea madura. La aplicación permite a los usuarios crear perfiles, emparejarse con personas compatibles, organizar eventos sociales y bloquear contactos no deseados. Necesitas calcular el costo-beneficio de las pruebas para esta aplicación.\n\nHas calculado los siguientes costos de calidad por defecto:\n• Costos de evaluación: $150\n• Costos de fallos internos: $250\n• Costos de fallos externos: $5,000\n\nEl costo promedio de detección y fallo interno se calcula utilizando el número de defectos encontrados antes del lanzamiento, mientras que el costo promedio de fallos externos se calcula utilizando el número de defectos encontrados después del lanzamiento.\n\nBasado en la información anterior, ¿cuál de las siguientes afirmaciones es correcta respecto al análisis de costo-beneficio de las pruebas para esta aplicación?",
        options: [
            "A. El costo total de calidad para esta aplicación de citas es probablemente alrededor de $5,000, excluyendo los costos de prevención.",
            "B. Cada defecto encontrado por las pruebas ofrece a la organización un promedio de $4,600 en ahorros en costos de calidad.",
            "C. Si bien el costo de calidad es útil en muchas industrias, tiene una aplicabilidad limitada al calcular el valor de las pruebas para aplicaciones de software.",
            "D. Las pruebas proporcionan un ahorro potencial de $5,400 por defecto al identificar problemas antes de que lleguen al cliente."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Eres el gerente de pruebas de un proyecto de software con un presupuesto de €100,000 y un plazo de seis meses. Has estimado que el costo promedio de prevención de defectos por defecto es de €150, el costo promedio de evaluación es de €400, el costo promedio de defecto interno por defecto es de €250, y el costo promedio de defecto externo por defecto es de €3,000.\n\nTambién has determinado las siguientes características para tu proyecto:\n• Los requisitos son poco claros y pueden cambiar con frecuencia.\n• La tecnología utilizada es nueva y desconocida para el equipo de desarrollo.\n• El cliente tiene altas expectativas en términos de calidad y fiabilidad.\n• El proyecto tiene un cronograma y un alcance ajustados.\n\nBasado en la información dada, ¿cuál de los siguientes escenarios NO incluye una conclusión correcta?",
        options: [
            "A. Debido a la ambigüedad de los requisitos, el costo promedio de fallo interno por defecto se duplica a lo largo del proyecto, resultando en un ahorro promedio de solo €2100 por defecto.",
            "B. Familiarizarse con la tecnología en uso triplica el costo de prevención de defectos, pero las acciones no afectan el ahorro promedio por defecto.",
            "C. Para cumplir con el apretado plazo del cliente, se omiten las medidas reactivas de repetir las pruebas antes de la entrega. Esto reduce los costos de defectos externos a €2000. Sin embargo, el ahorro promedio por defecto también se reduce a €1350.",
            "D. Para cumplir con el apretado plazo del cliente, el equipo de pruebas se expande a corto plazo, causando que los costos de evaluación aumenten a €500. Como resultado, el ahorro promedio por defecto prevenido aumenta en €100 cada uno."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Apéndice: Preguntas Adicionales\nSección: Proceso de Pruebas\nPregunta #A1 (1 Punto)\nComo gerente de pruebas, debes establecer listas de verificación en muchas fases diferentes de tu proyecto de pruebas. ¿Cuál de las siguientes es la descripción más precisa de un “chequeo de finalización de pruebas”?",
        options: [
            "A. Un chequeo de finalización de pruebas asegura que todo el material de prueba esté completado según lo planeado.",
            "B. Un chequeo de finalización de pruebas asegura que todas las lecciones importantes aprendidas estén documentadas.",
            "C. Un chequeo de finalización de pruebas asegura que todo el material de prueba esté almacenado en el sistema de gestión de configuración.",
            "D. Un chequeo de finalización de pruebas asegura que los planes de prueba se desarrollen para garantizar que las buenas prácticas sean repetibles."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Sección: Contexto de las Pruebas\nPregunta #A2 (1 Punto)\nComo gerente de pruebas, debes realizar diferentes actividades en diferentes niveles de prueba. ¿Cuál de las siguientes NO es una actividad de gestión de pruebas en el nivel de pruebas del sistema?",
        options: [
            "A. Definir el alcance de la prueba.",
            "B. Seleccionar las herramientas y técnicas de prueba.",
            "C. Decidir qué partes necesitan ser integradas y probadas.",
            "D. Gestionar defectos a lo largo del proceso de prueba."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A3 (1 Punto)\nComo gerente de pruebas, debes alinear tus actividades de gestión de pruebas con los tipos de prueba. ¿Cuál de las siguientes es una actividad de gestión de pruebas para pruebas de caja blanca, pero no para pruebas funcionales o no funcionales?",
        options: [
            "A. Definir el alcance.",
            "B. Determinar las herramientas de prueba y los entornos de prueba.",
            "C. Medir la cobertura de las declaraciones.",
            "D. Monitorear la ejecución de pruebas basada en la priorización de los casos de prueba."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A4 (1 Punto)\nUn equipo ágil está desarrollando una nueva aplicación basada en la web. ¿Cuál de los siguientes factores probablemente NO influirá en el nivel de riesgos de calidad?",
        options: [
            "A. El equipo de pruebas de aceptación del usuario (UAT) está asignado a varios proyectos de alta prioridad.",
            "B. Un nuevo analista de negocios se unió al equipo ágil con un sólido conocimiento del dominio, pero poca experiencia en automatización de pruebas.",
            "C. La mayor parte del equipo de desarrollo está en India, pero el propietario del producto se encuentra en EE. UU.",
            "D. Se ha introducido un nuevo proceso de gestión de defectos dentro de la empresa que es desconocido para los desarrolladores."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A5 (1 Punto)\nComo gerente de pruebas, deseas asignar los esfuerzos de prueba de manera efectiva y decides utilizar un enfoque de pruebas basado en riesgos. ¿Cuál de los siguientes es el MÁS problemático al usar pruebas basadas en riesgos?",
        options: [
            "A. El proyecto tiene diez interesados diferentes que todos quieren contribuir al análisis de riesgos.",
            "B. El equipo de pruebas comienza con la planificación de pruebas basada en riesgos, pero descuida el control de riesgos debido a la presión del proyecto.",
            "C. Los elementos de riesgo y los niveles de riesgo de un proyecto no se reutilizan en otros proyectos.",
            "D. Los interesados entienden el nivel del riesgo residual y pueden decidir poner en producción antes de que se ejecuten todas las pruebas."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Sección: Mejora del Proceso de Pruebas\nPregunta #A6 (1 Punto)\nTe unes a un proyecto existente como gerente de pruebas. El equipo de desarrollo es responsable de la mejora y mantenimiento de un producto importante del producto insignia de la empresa. Se lanzan nuevas versiones de forma regular. Sin embargo, el producto tiene una reputación de mala calidad y los clientes se quejan frecuentemente sobre la cantidad de defectos. Ahora se te pide que busques mejoras en las pruebas del proyecto.\n\n¿Cuáles de las siguientes DOS acciones siguen una estrategia de mejora de pruebas basada en análisis que aborda el problema discutido en el escenario?",
        options: [
            "A. Implementar un esquema de clasificación de defectos para el origen y tipo de defectos y clasificar los defectos reportados por los clientes de acuerdo con este esquema.",
            "B. Comparar las prácticas que tu equipo de pruebas aplica para el diseño y la implementación de pruebas con las prácticas definidas por el Modelo TMMi.",
            "C. Determinar el número de defectos reportados por tu equipo de pruebas durante la prueba del sistema de la última versión, así como el número de defectos reportados por tus clientes para esa versión y calcular el porcentaje de detección de defectos.",
            "D. Iniciar un programa de medición basado en el modelo de Objetivo Pregunta Métrica (GQM) a nivel de empresa que evalúe la precisión de las estimaciones de prueba en todos los proyectos.",
            "E. Introducir una nueva herramienta de automatización de pruebas para reducir el esfuerzo de ejecución de pruebas."
        ],
        correctAnswer: [0, 2], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        question: "Pregunta #A7 (1 Punto)\nTu empresa actualmente utiliza una herramienta de gestión de pruebas de 15 años de antigüedad. El cambio de un enfoque de desarrollo en cascada a un enfoque de desarrollo ágil demanda características que no proporciona tu herramienta de gestión de pruebas actual. Para cambiar con éxito el enfoque de desarrollo, tu empresa decide introducir una nueva herramienta de gestión de pruebas.\n¿Cuál de los siguientes ejemplos es una consideración válida para la selección de una herramienta de prueba?",
        options: [
            "A. Preferencias del proveedor del jefe del departamento de desarrollo.",
            "B. Los requisitos de todos los interesados para evaluar e identificar la herramienta más apropiada.",
            "C. La herramienta de prueba debe coincidir con los estándares de diseño corporativo de tu empresa.",
            "D. La herramienta debe ser menos costosa que la herramienta actual para ser eficiente."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A8 (1 Punto)\nEres responsable de la gestión de pruebas de un motor de informes para un sistema bancario. El proyecto comenzó hace un mes. La gestión del proyecto te pide que proporciones una visión general del progreso que se ha realizado al menos una vez a la semana.\nComo actualmente no has establecido métricas, ¿qué necesitas hacer para satisfacer las necesidades de la gestión del proyecto?",
        options: [
            "A. Asegurarte de que la trazabilidad esté incluida en tus métricas.",
            "B. Recopilar las necesidades de información del equipo de pruebas y de la gestión del proyecto.",
            "C. Activar todas las métricas posibles para dar a la gestión del proyecto la libre elección de información.",
            "D. Comenzar con la gestión de defectos, ya que hay criterios de aceptación para defectos con prioridad y severidad 'alta'."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Sección: Estimación de Pruebas\nPregunta #A9 (1 Punto)\nDebes estimar el esfuerzo de prueba en un proyecto de desarrollo de software ágil. ¿Cuál de las siguientes afirmaciones es VERDADERA sobre la estimación de pruebas en este contexto?",
        options: [
            "A. La estimación de pruebas se realiza por separado de la estimación de desarrollo y se basa en los niveles y actividades de prueba.",
            "B. La estimación de pruebas se realiza como parte de la estimación de desarrollo y se basa en las historias de usuario y los criterios de aceptación.",
            "C. La estimación de pruebas no se realiza en absoluto en proyectos ágiles y las pruebas se realizan de manera ad-hoc.",
            "D. La estimación de pruebas la realiza el cliente o el propietario del producto y se basa en el valor comercial y el riesgo de las características."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A10a2 (1 Punto)\nComo gerente de pruebas, debes controlar el tiempo, el esfuerzo y la calidad de tu proyecto de pruebas. ¿Cuál de los siguientes factores influirá más probablemente en la duración, pero NO en el esfuerzo de las actividades de prueba?",
        options: [
            "A. Tiempo para reparar defectos encontrados durante las pruebas.",
            "B. Madurez del proceso de prueba.",
            "C. Nivel de detalle requerido de las condiciones de prueba.",
            "D. Calidad requerida del sistema."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Pregunta #A10b (1 Punto)\nComo gerente de pruebas, debes considerar muchos factores diferentes para estimar el esfuerzo de tu proyecto de pruebas. ¿Cuál de los siguientes NO debería ser tomado en consideración para la estimación de pruebas en un proyecto de pruebas?",
        options: [
            "A. Las calificaciones de los miembros del equipo de desarrollo.",
            "B. Habilidades y experiencias humanas de los desarrolladores.",
            "C. Esfuerzo estimado en otros proyectos en curso.",
            "D. Las horas determinadas de la estimación del esfuerzo de prueba."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Sección: Equipo de Pruebas\nPregunta #A11 (1 Punto)\nUn factor clave en el rendimiento de un equipo de pruebas es su motivación. ¿Cuál de los siguientes es el mejor ejemplo de un factor motivador para un equipo de pruebas?",
        options: [
            "A. Introducción de un acuerdo salarial para todos los empleados.",
            "B. Actividades de prueba y productos de trabajo planificados hasta el último detalle.",
            "C. Un entorno de prueba que funcione bien.",
            "D. Reconocimiento y aprecio por el trabajo realizado."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
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