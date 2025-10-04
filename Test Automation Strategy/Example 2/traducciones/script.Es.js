// Test Automation Strategy Sample 2
const data_es = {
  questions: [
    {
      "question": "Discutes la introducción de la automatización de pruebas con la gestión del proyecto. ¿Cuáles afirmaciones sobre las ventajas y limitaciones de la automatización de pruebas son correctas?",
      options: [
        "A) Los casos de prueba automatizados son consistentes y se pueden repetir cualquier número de veces en diferentes versiones del sistema bajo prueba (SUT) y/o entornos.",
        "B) Los recursos limitados en su asignación solo a la automatización de pruebas ya no están disponibles para pruebas manuales.",
        "C) Las herramientas de prueba automatizadas deben mantenerse continuamente actualizadas. Este esfuerzo de mantenimiento tiene un impacto negativo en los costos de las pruebas.",
        "D) Con la automatización de pruebas, se pueden realizar pruebas que no se pueden ejecutar manualmente o solo con un esfuerzo significativo.",
        "E) La retroalimentación sobre la calidad del software tarda mucho más porque los resultados de las pruebas generalmente deben ser evaluados por un tester."
      ],
      correctAnswer: [0, 3], // La opcion A y D son correctas
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe un factor técnico de éxito importante para cualquier gran proyecto de automatización de pruebas?",
      options: [
        "A) La estrategia de automatización de pruebas debe asegurar que diferentes áreas del SUT puedan ser probadas de la misma manera.",
        "B) En las pruebas automatizadas de GUI, los datos de prueba y los controles de interacción deben estar muy acoplados al diseño de la GUI.",
        "C) Asegurarse de que los scripts de prueba automatizados puedan ser aislados y retirados fácilmente cuando ya no sean útiles o necesarios en una ejecución de prueba actual.",
        "D) El proyecto de automatización de pruebas debe apoyar la automatización de todas las pruebas manuales para que la automatización de pruebas logre un valor a largo plazo."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes NO es un enfoque recomendado para establecer un marco de automatización de pruebas (TAF) fácil de usar y mantenible?",
      options: [
        "A) Definir e implementar instalaciones de informes de pruebas.",
        "B) Habilitar una fácil solución de problemas.",
        "C) Incluir automatización de pruebas que sea sensible a los cambios en la interfaz de usuario (UI).",
        "D) Mantener las pruebas automatizadas actualizadas."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál NO es un factor de éxito para un proyecto de automatización de pruebas?",
      options: [
        "A) Pruebas que apoyan la automatización de pruebas.",
        "B) Desacoplamiento de la interacción de la GUI y los datos de prueba.",
        "C) Los desafíos de automatización de pruebas del SUT deben ser abordados primero.",
        "D) Exponer APIs como públicas."
      ],
      correctAnswer: 2, // La opcion c es la correcta
      urlImage: ""
    },
    {
      "question": "Tu empresa está planeando introducir la automatización de pruebas y te ha pedido que lideres el proyecto de automatización de pruebas. Hay varios proyectos en la empresa, algunos de los cuales se beneficiarían de la automatización de la ejecución de pruebas. Para probar la efectividad de la automatización de pruebas, ¿qué proyecto deberías elegir para hacer una prueba piloto?",
      options: [
        "A) Proyecto Alpha, que es un proyecto muy pequeño y es una adición funcional mínima a otro proyecto. Esperan que la simplicidad del proyecto resulte en éxitos rápidos de automatización de pruebas.",
        "B) Proyecto Beta, que es la aplicación estándar madura de tu empresa. Con esta selección, esperas poder probar la solución de automatización de pruebas (TAS) en un escenario realista.",
        "C) Proyecto Gamma, que todavía está en prototipado. En esta etapa temprana, el proyecto aún es inestable y esperas encontrar muchos defectos con la automatización de pruebas.",
        "D) Proyecto Delta, que ya está retrasado. Al automatizar, esperas entregar a tiempo, demostrando un gran éxito en la automatización de pruebas."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "Tu junta directiva te da el requisito de ahorrar costos en tu proyecto de desarrollo. ¿Cuál de las siguientes NO es un buen argumento para externalizar tu automatización de pruebas?",
      options: [
        "A) Tu empresa tiene software muy especializado que no es fácil de entender, por lo que te gustaría externalizar la automatización de pruebas para que tu personal pueda concentrarse en otros proyectos.",
        "B) El proyecto es parte de un proyecto más grande, por lo que ese conocimiento ya está disponible en la empresa.",
        "C) Hay algunos ingenieros de automatización de pruebas (TAEs) en tu empresa con las habilidades requeridas que necesitan una nueva ocupación a largo plazo, pero que aún no están disponibles a corto plazo para tu organización.",
        "D) No es necesario comprar software o hardware adicional para la automatización de pruebas."
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál es la principal ventaja de una licencia flotante?",
      options: [
        "A) Aquellos que usan software bajo esta licencia solo serán facturados por el tiempo que usen el software.",
        "B) Hay muchos usuarios del software, lo que facilita la recopilación de información y obtener soporte.",
        "C) El software bajo esta licencia puede ser modificado fácilmente si es necesario.",
        "D) El software bajo esta licencia puede ser utilizado por muchos empleados en diferentes sistemas."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Qué factor de costo NO debería influir en tu decisión sobre una estrategia de implementación de automatización de pruebas y un TAS a utilizar?",
      options: [
        "A) Hardware y licencias.",
        "B) Restricciones de tiempo.",
        "C) Número de TASs.",
        "D) Mantenimiento."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "Eres líder de pruebas en un proyecto y estás buscando fortalecer tu equipo de pruebas. ¿En qué habilidades deberías enfocarte en tu búsqueda?",
      options: [
        "A) El solicitante tiene un sólido conocimiento técnico sobre diferentes ciclos de vida de desarrollo de software (SDLCs).",
        "B) El solicitante tiene conocimientos y es muy seguro de sí mismo.",
        "C) El solicitante es un buen programador pero prefiere trabajar solo en un desafío.",
        "D) El solicitante tiene buenas habilidades de trabajo en equipo y puede explicar bien los hechos.",
        "E) El solicitante ha liderado equipos de pruebas con frecuencia."
      ],
      correctAnswer: [0, 3], // La opcion A y D son correctas
    },
    {
      "question": "Asocia las afirmaciones con la forma correcta de la pirámide de automatización de pruebas.",
      options: [
        "A) 1A, 2B, 3C, 4D",
        "B) 1C, 2B, 3D, 4A",
        "C) 1B, 2D, 3C, 4A",
        "D) 1D, 2A, 3D, 4C"
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": `Defines una estrategia de prueba y desglosas las capas en tu enfoque como sigue: UI, API, integración y componente.\n
                   "1. Es tentador ignorar configuraciones raras en las pruebas de UI, pero aún pueden ser relevantes para los entornos de producción".\n
                   "2. Las pruebas de API incluyen probar APIs directamente en aislamiento con mocks y como parte de las transacciones de extremo a extremo realizadas durante las pruebas de integración".\n
                   "3. Los equipos Agile y DevOps que trabajan con iteraciones cortas y ciclos de retroalimentación rápidos están descubriendo que las pruebas de GUI requieren muy poco mantenimiento, mientras que las pruebas de API requieren más mantenimiento".\n
                   "4. Se recomienda la prueba de API para la gran mayoría de los esfuerzos de automatización de pruebas y tanto análisis de valores límite como sea posible".\n
                   "5. Las pruebas de componente están reservadas para validar casos de uso a nivel de sistema, pruebas móviles y pruebas de usabilidad".\n
                   "6. Una prueba de integración determina si la interacción y las interfaces entre los componentes funcionan como se espera".\n
                   "7. Con la ayuda de pruebas de componente, se pueden detectar errores en una etapa temprana y, bajo ciertas circunstancias, incluso se pueden reducir a la línea de código que los causó".\n
                   "8. Cuanto más complicada es la funcionalidad, menos importantes son las pruebas de componente"
                   ¿Cuáles afirmaciones son verdaderas?"`,
      options: [
        "A) 1, 2, 4, 6, 7",
        "B) 1, 2, 5, 6, 8",
        "C) 1, 3, 5, 7, 8",
        "D) 2, 4, 5, 6, 7"
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "Da DOS razones por las que deberías considerar el enfoque de cambio a la derecha 'shift right'.",
      options: [
        "A) Para ahorrar recursos de testers para más tarde.",
        "B) Para expandir el alcance de la automatización de pruebas y la cobertura.",
        "C) Para mover las pruebas hacia el principio del SDLC.",
        "D) Para identificar problemas en un sistema de producción en una etapa temprana.",
        "E) Para desplegar componentes que ya han sido probados exhaustivamente como lanzamientos canarios."
      ],
      correctAnswer: [1, 3], // La opcion B y D son correctas
      urlImage: ""
    },
    {
      "question": "Vas a liderar un proyecto de automatización de pruebas sobre software legado. ¿Cuáles son DOS aspectos importantes a considerar?",
      options: [
        "Convertir la arquitectura del software legado a microservicios antes de escribir nuevas pruebas.",
        "Reescribir todas las pruebas desde cero, ya que los TAS heredados suelen estar obsoletos.",
        "Aumentar la cobertura en pruebas de integración de sistema para detectar errores tempranos.",
        "Enfocarse en pruebas de sistema, ya que no vale la pena escribir pruebas de componentes nuevas.",
        "Introducir pruebas de componentes más significativas para facilitar refactorizaciones futuras."
      ],
      correctAnswer: [2, 4], // Las opciones c y e son correctas
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe mejor cómo los proyectos de automatización de pruebas se ajustan a las mejores prácticas de desarrollo de software ágil?",
      options: [
        "La automatización de pruebas es más técnica que las pruebas funcionales manuales, por lo tanto encaja mejor en Agile.",
        "Agile promueve el desarrollo sostenible, lo cual se logra con un balance adecuado de pruebas automatizadas en todos los niveles.",
        "Normalmente los equipos Agile no estiman el esfuerzo de pruebas, pero la automatización lo facilita.",
        "Uno de los principios Agile es 'atención continua a la excelencia técnica y buen diseño', y la automatización encaja con esto."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "Tu empresa tiene un enfoque maduro y disciplinado hacia la automatización de pruebas. Los equipos han implementado la automatización de pruebas en todos los niveles de prueba definidos en la organización: UI, API, integración y componente. Sin embargo, la tubería de construcción en algunos de los equipos tarda mucho tiempo en ejecutar todos los pasos. Como responsable de la arquitectura de automatización de pruebas (TAA), eres responsable de encontrar una solución que ayude a cada equipo, ¿qué opción NO deberías considerar al dar tu recomendación?",
      options: [
        "Reducir el alcance de las pruebas UI a un conjunto de pruebas de humo.",
        "Ejecutar el conjunto completo de regresión fuera del pipeline de construcción.",
        "Realizar análisis de valores límite manualmente.",
        "Reemplazar la herramienta de automatización actual."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál es una buena razón para preguntar: '¿El caso de prueba es altamente repetible?' al seleccionar y priorizar casos para automatización?",
      options: [
        "Un caso de prueba altamente repetible será más fácil de implementar.",
        "Un caso de prueba altamente repetible no debe automatizarse.",
        "Un caso de prueba altamente repetible tiene potencial para buen retorno de inversión (ROI).",
        "Un caso de prueba altamente repetible ya ha demostrado funcionar bien."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes desafíos solo puede abordarse mediante automatización de pruebas?",
      options: [
        "Es necesario integrar los resultados de prueba en el pipeline de desarrollo.",
        "Aún hay licencias disponibles para la herramienta de automatización.",
        "Se requiere intervención manual para ejecutar los casos de prueba.",
        "La especificación es poco clara, pero se debe comenzar a probar."
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes condiciones de prueba es difícil de automatizar?",
      options: [
        "Es posible tener muchas combinaciones de datos dentro del sistema.",
        "La interfaz debe ser consistente en diferentes plataformas.",
        "El sistema debe funcionar incluso si miles de usuarios están en línea.",
        "La idoneidad funcional del sistema debe probarse en distintos dispositivos."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cómo facilita la automatización de pruebas llevar un producto al mercado de forma oportuna?",
      options: [
        "Siguiendo un enfoque shift-left y permitiendo ejecución paralela de pruebas.",
        "Reduciendo el esfuerzo manual para desarrollar casos de prueba.",
        "Disminuyendo el tiempo de pruebas manuales al reducir el esfuerzo para cubrir el alcance.",
        "Cubriendo más combinaciones de datos en el mismo tiempo que las pruebas manuales."
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál es la mejor razón para automatizar pruebas de confirmación de un defecto?",
      options: [
        "Cerrar una brecha en la automatización existente.",
        "Asegurar que la corrección del defecto funciona y sigue funcionando.",
        "Justificar el tiempo invertido en encontrar el defecto según su severidad.",
        "Probar el proceso de gestión de configuración."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes enfoques es MÁS adecuado para probar el escenario operativo 'Actualización del software'?",
      options: [
        "Pruebas de conmutación por error (failover).",
        "Pruebas de respaldo y restauración.",
        "Pruebas de seguridad.",
        "Revisión de documentación operativa."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones incluye todos los elementos que deben considerarse en una buena estrategia de despliegue de automatización de pruebas?",
      options: [
        "Entorno de prueba; personas; acceso a la aplicación; almacenamiento de scripts; provisión de datos.",
        "Herramientas; datos de prueba; acceso a la aplicación; almacenamiento de scripts; licencias de software.",
        "Entorno de prueba; herramientas; requisitos; almacenamiento de scripts; provisión de datos.",
        "Entorno de prueba; herramientas; acceso a la aplicación; almacenamiento de scripts; provisión de datos."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes NO es una consideración que un TAE debe tener en cuenta al desarrollar y desplegar un TAS?",
      options: [
        "Configuración del entorno de prueba.",
        "Requisitos de licenciamiento de herramientas.",
        "Almacenamiento centralizado de scripts de prueba.",
        "Técnicas de diseño de pruebas manuales."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes problemas técnicos puede generar un riesgo para el proyecto o producto?",
      options: [
        "Retrasos en la introducción de la automatización de pruebas.",
        "Palabras clave mal definidas.",
        "Problemas de personal.",
        "Retrasos en la actualización del TAS."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes aspectos es importante al mitigar riesgos en el despliegue de automatización de pruebas?",
      options: [
        "Las personas adecuadas deben estar disponibles durante el despliegue.",
        "Debe seleccionarse el momento adecuado del día para el despliegue.",
        "El TAS debe estar bajo control de gestión de configuración.",
        "El SUT ya debe estar instalado."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes NO se considera un componente del entorno de automatización de pruebas?",
      options: [
        "Herramientas.",
        "Sistema bajo prueba (SUT).",
        "Suites de prueba.",
        "Arquitectura de automatización de pruebas (TAA)."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones contiene TODOS los componentes MAYORES correctos de infraestructura para automatización de pruebas?",
      options: [
        "Red, interfaz con el SUT, máquinas host.",
        "Plataforma, red, código.",
        "Máquinas host, plataforma, proxy.",
        "Código, máquinas host, red."
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "Un Ingeniero de Automatización de Pruebas (TAE) está diseñando pruebas automatizadas para una aplicación web que almacena registros en una base de datos. ¿Cuál de las siguientes afirmaciones NO es correcta respecto a la definición de datos de prueba e interfaces para este sistema?",
      options: [
        "El TAE puede usar automatización de navegador para pruebas de UI y una API para pruebas de interacción con la base de datos.",
        "La Arquitectura de Automatización de Pruebas (TAA) debe usarse para definir todas las condiciones de prueba.",
        "Se puede emplear pruebas de contrato para verificar la compatibilidad entre la aplicación web y el sistema de base de datos.",
        "Las pruebas de interfaz de usuario deben realizarse tanto en dispositivos de escritorio como móviles para asegurar compatibilidad multiplataforma."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "La siguiente tabla muestra el progreso y el retorno del desarrollo de casos de prueba automatizados. El equipo ha definido previamente 500 casos de prueba que se ejecutaron manualmente. El tiempo promedio de ejecución manual de un caso de prueba es de 10 minutos, mientras que con la automatización de pruebas se reduce a 1 minuto. Todos los cálculos de ahorros e inversiones se encuentran en la tabla. ¿En qué sprint se alcanza el punto de retorno de inversión (ROI) de los esfuerzos de desarrollo de pruebas automatizadas?",
      options: [
        "Sprint 6",
        "Sprint 7",
        "Sprint 8",
        "Sprint 9"
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: "./imagenes/tabla preg29.png"
    },
    {
      "question": "Has asumido recientemente el liderazgo de un equipo de pruebas responsable de la validación end-to-end de la interfaz de usuario de una tienda minorista. El equipo tiene un tester manual y un TAE. Las quejas constantes indican que tanto las pruebas manuales como automatizadas consumen mucho tiempo. No hay posibilidad de añadir más TAEs.\n El TAF no está integrado en el pipeline CI/CD y no se ha calculado el ROI. Se proporcionan los siguientes datos en minutos. El test de ejecución esta basado en cada sprint:\n1. Tiempo para ejecutar un caso de prueba manual\n2. Número de scripts automatizados implementados\n3. Tiempo promedio de mantenimiento por script automatizado\n4. Número total de casos de prueba\n5. Tiempo promedio para desarrollar scripts automatizados\n6. Tiempo para ejecutar un caso de prueba automatizado\n¿Cuáles DOS opciones cubren los insumos necesarios para calcular el retorno de inversión (ROI)?",
      options: [
        "1, 2, 5",
        "2, 3, 5",
        "4, 5, 6",
        "1, 4, 6",
        "3, 4, 6"
      ],
      correctAnswer: [1, 3], // Las opciones B y D son correctas
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes métricas es importante recolectar para rastrear el porcentaje de requisitos cubiertos por casos de prueba automatizados?",
      options: [
        "Número de casos de prueba automatizados.",
        "Cobertura funcional de la automatización.",
        "Relación de éxito/fallo.",
        "Cobertura de código."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "Te unes a un equipo de desarrollo de producto como nuevo integrante y único TAE. Al desarrollar los casos de prueba automatizados, notas que algunos no son confiables y no arrojan resultados consistentes debido a cambios en los datos de prueba. Otros testers están usando parte del mismo testware que tu TAS. ¿Qué consideración organizacional olvidaste identificar antes de comenzar el desarrollo del TAS?",
      options: [
        "Políticas y prácticas de desarrollo de software.",
        "Proyectos activos de automatización de pruebas y su estado.",
        "Herramientas de prueba y licencias.",
        "Disponibilidad de datos de prueba y entornos separados."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "El CIO de una empresa de salud te contrata como consultor para una evaluación de 6 semanas. Tu responsabilidad es entregar recomendaciones para mejorar las prácticas de automatización de pruebas en toda la organización.\n ¿Cuál de las siguientes características del proyecto te ayudará a definir objetivos de automatización de pruebas exitosos que te permitirán a ti y al CIO convencer a los TAE de seguir los cambios recomendados?",
      options: [
        "Apoyo de la gerencia y presupuesto.",
        "Madurez del proyecto.",
        "Conocimiento del equipo y experiencia relevante.",
        "Crear una nueva arquitectura."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "Te unes a una empresa como Arquitecto de Calidad. Tu primera tarea es evaluar el TAS de un subdepartamento enfocado en soluciones de pago. Actualmente, el TAS solo verifica el estado del API y su capacidad de conexión con servicios. ¿Cuál de las siguientes características de calidad deberías evaluar primero?",
      options: [
        "Portabilidad.",
        "Confiabilidad.",
        "Mantenibilidad.",
        "Completitud funcional."
      ],
      correctAnswer: 3, // La opcion D es la correcta
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes decisiones NO suele ser tomada por una persona estratégica en automatización de pruebas durante la consolidación de reportes?",
      options: [
        "Asesorar a representantes del negocio sobre nuevas funcionalidades para futuras versiones.",
        "Asesorar a desarrolladores sobre áreas del código que deben mejorar.",
        "Identificar tendencias y realizar análisis de causa raíz.",
        "Asesorar sobre procesos generales de desarrollo de software."
      ],
      correctAnswer: 0, // La opcion A es la correcta
      urlImage: ""
    },
    {
      "question": "¿Qué describe el análisis necesario para asegurar que los mismos pasos de automatización de pruebas no se repitan en múltiples scripts?",
      options: [
        "Transición de costos.",
        "Compartición de datos.",
        "Solapamiento funcional.",
        "Precondiciones de ejecución de prueba."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Qué factores deben considerarse desde la perspectiva de aseguramiento de calidad para facilitar una transición fluida de pruebas manuales a automatizadas?",
      options: [
        "Licencias de herramientas de prueba.",
        "Cobertura de pruebas de componentes.",
        "Cobertura.",
        "Disponibilidad del sistema CI/CD."
      ],
      correctAnswer: 2, // La opcion C es la correcta
      urlImage: ""
    },
    {
      "question": "¿Qué proceso de CI/CD se aprovecha para incluir un paso adicional de pruebas automatizadas de UI dentro del proceso de construcción de la aplicación?",
      options: [
        "Herramienta de orquestación de builds.",
        "Pipelines.",
        "Test harness.",
        "Repositorio de código."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": "Tu organización ha invertido en el desarrollo de un nuevo TAS. Se ha utilizado como herramienta independiente para el equipo de pruebas y también dentro del pipeline CI/CD. Eres responsable de evaluar su efectividad y sugerir áreas de mejora. Después de tres ciclos de sprint, observas lo siguiente:\n1. Aunque los casos de prueba están automatizados, se invierte mucho tiempo manual en crear cuentas de usuario iniciales y habilitar su acceso en la base de datos de la aplicación.\n2. El equipo dedica mucho tiempo a actualizar el código de automatización relacionado con la página de inicio en varios casos de prueba automatizados, debido a refactorizaciones y cambios en propiedades de objetos.\n3. A medida que se crean más casos automatizados, el proceso CI/CD parece perder velocidad.\n¿Cuál conjunto de cambios debería aplicarse para abordar estas observaciones?",
      options: [
        "Usar una sola cuenta de usuario para todos los casos de prueba, no automatizar la página de inicio ya que cambia constantemente, y añadir más recursos de hardware al entorno CI/CD.",
        "Crear scripts automatizados de precondiciones, identificar oportunidades para descomponer y modularizar los scripts de prueba, y reducir el alcance del pipeline a los tests integrados más críticos.",
        "Virtualizar la base de datos con datos por defecto, pedir a los desarrolladores que dejen de cambiar propiedades de objetos en la página de inicio, y usar un solo caso automatizado en el pipeline CI/CD.",
        "Solicitar al equipo de desarrollo un proceso batch para crear cuentas de usuario, pedir más TAEs para seguir el ritmo de los cambios, y excluir las pruebas de UI del pipeline CI/CD."
      ],
      correctAnswer: 1, // La opcion B es la correcta
      urlImage: ""
    },
    {
      "question": `Te unes a un proyecto en curso donde el TAS necesita refactorización y extensión funcional debido a nuevas solicitudes del negocio. Existe documentación del TAS que fue actualizada según la carga y capacidad del proyecto.\n¿Cuáles pasos deben considerarse al refactorizar la funcionalidad existente del TAS?",
    
       i.   Ignorar la documentación ya que está desactualizada.\n
       ii.  Deshabilitar los conjuntos de pruebas que fallan.\n
       iii. Hacer una lista de posibles mejoras.\n
       iv.  Actualizar la documentación del TAS según los cambios.,\n
       v.   Actualizar las dependencias del TAS sin investigar.`,
      options: [
        "i, ii, v ",
        "ii, iv",
        "i, iii, v ",
        "iii, iv "

      ],
      correctAnswer: 3, // La opcion d es la correcta
      urlImage: ""
    }
  ],
  "texts": {
    "next": "Siguiente",
    "finish": "Finalizar",
    "timeUp": "¡El tiempo se ha agotado!",
    "selectAnswer": "Por favor, selecciona una respuesta antes de continuar.",
    "congratulations": "¡Felicidades!",
    "scoreMessage": "Has obtenido una calificación de {{score}}%.",
    "certificateInfo": "Puedes obtener tu certificado enviando un comprobante de pago de <strong>10 USD</strong> a educacion@frecuenciagamer.com.",
    "insufficientScore": "Resultado insuficiente",
    "tryAgain": "¡Te animamos a intentarlo nuevamente!",
    "result": "Resultado",
    "restart": "Reiniciar",
    "listeningFeedback": "Escuchando...",
    "answerRegistered": "Respuesta registrada.",
    "reconigtionFailed": "No se pudo reconocer. Por favor, intenta de nuevo.",
    "selectAnswer": " Seleccione por favor la o las opciones correctas",
    "micPermissionDenied": "Permiso de micrófono denegado. Por favor, permite el acceso al micrófono y recarga la página.",
    "micPermissionGranted": "Permiso de micrófono concedido.",
    "voiceModeActivated": "Modo de voz activado.",
    "voiceModeDeactivated": "Modo voz activado. Por favor responde con el número o texto de la opción.",
    "loading": "Cargando...",
    "errorLoading": "Error al cargar el cuestionario. Por favor, intenta de nuevo más tarde."
  }
}
