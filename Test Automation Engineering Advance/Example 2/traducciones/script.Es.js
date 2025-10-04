// Advanced Level Test Automation Engineering  example 2  
const data_es = {
  questions: [
    {
    "question": "¿Cuál de las siguientes es una limitación de la automatización de pruebas?",
    options: [
      "Solo las pruebas de usabilidad pueden automatizarse eficazmente.",
      "La automatización de pruebas solo puede ejecutarse después de que se haya realizado la prueba del sistema.",
      "La automatización de pruebas solo puede verificar resultados que se validan visualmente.",
      "La automatización de pruebas solo puede verificar resultados que se validan mediante código."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la automatización de pruebas y el ciclo de vida del desarrollo de software (SDLC)?",
    options: [
      "En el desarrollo ágil, las pruebas automatizadas se enfocan más en pruebas de aceptación que en pruebas de componentes.",
      "En el desarrollo ágil, las pruebas automatizadas se enfocan más en pruebas de componentes que en pruebas de aceptación.",
      "En el modelo V, la ejecución de pruebas automatizadas debe realizarse después de las pruebas manuales.",
      "En el modelo V, la implementación de la automatización de pruebas se realiza durante todo el ciclo de desarrollo del software."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    "question": "¿Cuál de los siguientes factores NO es necesario considerar al seleccionar herramientas de prueba adecuadas?",
    options: [
      "Arquitectura del SUT.",
      "Composición real y experiencia del equipo de pruebas.",
      "Licenciamiento y soporte de la herramienta de prueba.",
      "Calidad de los requisitos del SUT."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "Cuando un sistema está diseñado para ser testeable, una de sus características es que el marco de automatización de pruebas (TAF) puede acceder a interfaces para realizar acciones sobre el sistema. ¿Cómo se llama esta característica?",
    options: [
      "Observabilidad.",
      "Controlabilidad.",
      "Mantenibilidad.",
      "Interoperabilidad."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    "question": "¿Qué tipo de automatización de pruebas se realiza principalmente en el entorno de preproducción?",
    options: [
      "Pruebas de componentes.",
      "Pruebas de eficiencia de rendimiento y pruebas de aceptación de usuario.",
      "Análisis estático.",
      "Pruebas de integración de componentes."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    "question": "¿En qué entorno se ejecuta típicamente por primera vez una suite de pruebas completamente automatizada contra un candidato de versión?",
    options: [
      "Entorno de preproducción/staging.",
      "Entorno de construcción.",
      "Entorno de producción/operacional.",
      "Entorno de integración/pruebas."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "Trabajas para una empresa de TI que desarrolla un sistema multimedia para automóviles basado en Android. El software contiene varios componentes que trabajan juntos. Los desarrolladores siguen el enfoque de desarrollo guiado por pruebas. Después del desarrollo, el software se entrega a otra empresa de TI que lo integra con los elementos de hardware y lo vende a fabricantes de automóviles.\n¿Cuáles de los siguientes aspectos deben considerarse al capturar los requisitos de automatización de pruebas por parte de la empresa de TI para la que trabajas?",
    options: [
      "¿Es importante que el enfoque de automatización de pruebas soporte pruebas de componentes?",
      "¿Debe el enfoque de automatización de pruebas soportar pruebas beta?",
      "¿Es importante que el enfoque de automatización de pruebas soporte pruebas del software en tantos tipos diferentes de automóviles como sea posible?",
      "¿Qué roles de tester deben ser soportados por el enfoque de automatización de pruebas?",
      "¿Es importante que el enfoque de automatización de pruebas soporte la aprobación en tiendas de aplicaciones móviles?"
    ],
    correctAnswer: [0, 3],
    urlImage: ""
  },
  {
    "question": "Estás evaluando herramientas de automatización de pruebas. A continuación se muestra una lista de hallazgos para una de las herramientas evaluadas según los requisitos de selección:\n• El panel de control de la herramienta es muy informativo y muestra toda la información relevante sobre el SUT.\n• Incluye un componente de registro de pruebas que guarda toda la información necesaria tras la ejecución para solucionar problemas encontrados.\n• Incluye un componente de informes personalizable.\n• Durante la prueba de concepto, la herramienta tuvo un rendimiento muy lento frente al SUT en comparación con otras herramientas evaluadas.\n• El entorno de prueba actual es válido según las notas de la versión, lo que significa que cumple con los requisitos de hardware y software.\n¿Cuál debería ser tu siguiente paso respecto a la selección de esta herramienta?",
    options: [
      "Adquirir más recursos de hardware para el SUT para reducir la degradación del rendimiento.",
      "Desactivar el registro de pruebas para mejorar el rendimiento de la herramienta.",
      "Recomendar no seleccionar esta herramienta.",
      "Planificar la migración del SUT a otro entorno de hardware/software donde sea posible eliminar la sobrecarga de la herramienta."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "Relaciona la lista de tareas en las capacidades de la arquitectura de automatización de pruebas con su nombre de rol correcto:\n1. Mapear los casos de prueba abstractos a casos concretos adecuados para su ejecución.\n2. Implementación de casos de prueba y/o suites de prueba.\n3. Registro de pruebas con información detallada sobre los pasos y acciones.\n4. Mecanismo para conectarse al SUT mediante protocolos y servicios.\nA. Definición del Test\nB. Adaptacón del Test\nC. Generación\nD. Ejecución del Test",
    options: [
      "1D, 2A, 3C, 4B",
      "1C, 2A, 3B, 4D",
      "1A, 2B, 3D, 4C",
      "1C, 2A, 3D, 4B"
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "Como ingeniero de automatización de pruebas, has encontrado un problema durante la implementación inicial de la solución de automatización de pruebas (TAS). La salida de las pruebas del sistema no pudo traducirse de nuevo a los casos de prueba automatizados para determinar los resultados.\n¿Cuál fue la causa MÁS PROBABLE del problema?",
    options: [
      "Las bibliotecas de herramientas de prueba NO fueron diseñadas para actualizarse con cada versión del SUT.",
      "La integración con el sistema bajo prueba (SUT) NO se configuró mediante APIs.",
      "Los adaptadores específicos del SUT para la herramienta seleccionada NO fueron implementados.",
      "El SUT y la herramienta de gestión de pruebas NO eran compatibles."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "Trabajas en un equipo de desarrollo Android y mantienes un framework de automatización de pruebas. Se ha formado un nuevo equipo de desarrollo para construir una nueva aplicación. Tu jefe de proyecto te pide construir un framework de automatización para este nuevo equipo. Primero identificas los componentes reutilizables y luego comienzas a implementar bibliotecas adicionales según la nueva aplicación.\n¿En qué capa configuras la conexión con la nueva app?",
    options: [
      "Capa de bibliotecas centrales.",
      "Capa de scripts de prueba.",
      "Capa de archivos de características.",
      "Capa de lógica de negocio."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "Estás trabajando en un proyecto de automatización de pruebas para automatizar pruebas GUI de un servicio de transporte público basado en web. El proyecto tiene un tiempo limitado. Hay casos de prueba manuales que pueden automatizarse primero. Uno de los objetivos es implementar los casos de prueba directamente en los scripts automatizados.\n¿Qué técnica o enfoque deberías usar para automatizar los casos de prueba y cumplir los objetivos?",
    options: [
      "Usar la técnica de pruebas basada en palabras clave (keyword-driven).",
      "Usar el enfoque de desarrollo guiado por comportamiento (BDD).",
      "Usar el enfoque de automatización de pruebas de captura/reproducción.",
      "Usar la técnica de automatización de pruebas basada en datos (data-driven)."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "Te unes a una empresa donde las pruebas manuales están maduras, pero la automatización de pruebas ha sido abandonada por un tiempo. Los testers han generado una gran cantidad de datos de prueba y suelen usar de 10 a 20 variaciones por escenario. Tras tu revisión inicial, ves que el framework de automatización de pruebas (TAF) puede repararse fácilmente, pero los casos de prueba necesitan ser completamente rediseñados.\n¿Qué enfoque de automatización de pruebas deberías elegir para obtener grandes resultados rápidamente?",
    options: [
      "Pruebas basadas en datos (data-driven testing).",
      "Desarrollo guiado por comportamiento (BDD).",
      "Captura/reproducción (capture/playback).",
      "Desarrollo guiado por pruebas de aceptación (ATDD)."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    "question": "Estás trabajando en un proyecto de automatización de pruebas para automatizar pruebas GUI de un sitio de comercio electrónico. El sitio contiene un asistente digital que ayuda a los usuarios a configurar sus cuentas, nombre, dirección de facturación, dirección de envío y credenciales de seguridad. Actualmente, el desarrollo del software está en una fase donde los testers de usabilidad revisan el asistente digital y dan recomendaciones sobre cambios necesarios. Esto se hace de forma iterativa: los desarrolladores modifican la interfaz gráfica (GUI), los testers revisan las modificaciones y vuelven a hacer pruebas de usabilidad.\n¿Qué patrón de diseño es el mejor implementado en este caso?",
    options: [
      "Implementar el patrón Page Object y almacenar todas las acciones del usuario asociadas a los elementos GUI en los modelos de página correspondientes.",
      "Implementar el patrón Flow Model, almacenar todos los elementos web en los modelos de página correspondientes y las acciones del usuario en los modelos de flujo.",
      "Implementar el patrón de diseño Facade y proporcionar interfaces para los elementos GUI que oculten el mecanismo interno de localización.",
      "Implementar el patrón Singleton y crear una única pieza de código para manejar la localización de elementos."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
    "question": "La alta dirección quiere implementar una solución de automatización de pruebas (TAS) en tu organización y te pide liderar esta iniciativa. Te han dado instrucciones para iniciar un proyecto piloto.\n¿Cuál de las siguientes afirmaciones describe mejor el objetivo de este proyecto piloto?\n\nObjetivos posibles:\n i) Documentar las partes del SUT que no fueron documentadas durante el desarrollo.\n ii) Identificar las métricas y los métodos de medición para monitorear el SUT en el entorno de producción.\n iii) Analizar los defectos encontrados durante las pruebas de la solución de automatización de pruebas (TAS).\n iv) Evaluar las opciones de licenciamiento y las reglas corporativas.\n v) Seleccionar la herramienta más adecuada, ya sea comercial lista para usar o de código abierto.\n",
    options: [
      "i, ii y iii son objetivos válidos del proyecto piloto.",
      "ii y iv son objetivos válidos del proyecto piloto.",
      "i, ii y v son objetivos válidos del proyecto piloto.",
      "iv y v son objetivos válidos del proyecto piloto."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "Se te ha asignado la implementación de una solución de automatización de pruebas (TAS) para pruebas de adecuación funcional que deben ejecutarse automáticamente después de cada compilación diaria. El TAS debe integrarse perfectamente con el pipeline CI/CD existente y proporcionar retroalimentación rápida sobre la calidad del software. Sin embargo, has identificado varios riesgos potenciales que podrían afectar el despliegue y operación exitosos del TAS.\nComo ingeniero de automatización de pruebas, necesitas analizar los riesgos de despliegue asociados con la implementación del TAS y determinar las mejores estrategias de mitigación para cada riesgo.Tu objetivo es asegurar una integración fluida del TAS en el proceso de desarrollo existente, manteniendo la calidad y la confiabilidad del proceso de prueba.\n¿Cuál de las siguientes opciones relaciona MEJOR los riesgos de despliegue con sus estrategias de mitigación?\n\n1. La ejecución de pruebas no se activa con la compilación\n2. Solo puede ejecutarse la suite completa de pruebas\n3. Los datos de prueba no están disponibles al iniciar la prueba\n4. Dificultad para diagnosticar pruebas fallidas\n\nA. Registrar información detallada durante la ejecución de pruebas\nB. Integrar la automatización de pruebas en el pipeline CI/CD\nC. Usar herramientas de terceros para generar datos de prueba\nD. Utilizar harnesses y fixtures de prueba\n",
    options: [
      "1-B, 2-A, 3-D, 4-C",
      "1-A, 2-B, 3-C, 4-D",
      "1-B, 2-D, 3-C, 4-A",
      "1-D, 2-B, 3-C, 4-A"
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "¿Cuál de los siguientes es un factor importante para mejorar la mantenibilidad del código?",
    options: [
      "Definir funciones genéricas con todos los parámetros necesarios.",
      "Permitir que los desarrolladores nombren las variables de forma única.",
      "Usar analizadores estáticos para mantener el código limpio.",
      "Codificar valores directamente para entender fácilmente su significado."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "¿Cuál es la forma más efectiva de reducir el tiempo de mantenimiento del código de automatización de pruebas?",
    options: [
      "Mantener el código fuera de un sistema de control de versiones.",
      "Insertar datos estáticos directamente en los scripts de prueba para facilitar el acceso.",
      "Aplicar patrones de diseño en tu framework de automatización de pruebas.",
      "Reescribir regularmente los scripts de prueba desde cero en lugar de reutilizar componentes existentes."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "Una empresa de TI desarrolla un software financiero que cambia con frecuencia, utilizando el modelo de desarrollo ágil. Los procesos de desarrollo, integración y despliegue están altamente automatizados, y ya existe un pipeline CI/CD establecido. Estás trabajando en una solución de automatización de pruebas (TAS) cuyo objetivo es cubrir la mayor cantidad de propósitos de automatización posibles.\n¿Cuáles de las siguientes opciones son propósitos válidos para la automatización de pruebas en este caso?",
    options: [
      "Ejecutar una suite de pruebas de regresión cada noche.",
      "Ejecutar una compilación de un componente.",
      "Ejecutar un análisis estático de código.",
      "Ejecutar una prueba automatizada de eficiencia de rendimiento en el pipeline CI/CD.",
      "Empaquetar y desplegar la aplicación como parte de la fase de despliegue."
    ],
    correctAnswer: [0, 3],
    urlImage: ""
  },
  {
    "question": "¿Cuál afirmación es correcta?",
    options: [
      "Las pruebas no se ejecutan como parte de la fase de despliegue.",
      "Las pruebas no se ejecutan como un pipeline separado, activado tras un despliegue exitoso.",
      "Los casos de prueba no actúan como filtro de calidad cuando se ejecutan diferentes suites automatizadas en cada despliegue.",
      "Los pipelines no se recomiendan para pruebas de regresión debido al alcance y tamaño extensivo de estas pruebas."
    ],
    correctAnswer: 2,
    urlImage: ""
  },
  {
    "question": "¿Cómo se utiliza la gestión de configuración en la automatización de pruebas?",
    options: [
      "Permite la gestión de los datos de prueba y las configuraciones del entorno de prueba.",
      "La configuración del SUT puede almacenarse y eliminarse fácilmente.",
      "Permite gestionar los derechos de usuario para acceder a la automatización de pruebas.",
      "Los resultados de la automatización de pruebas pueden analizarse fácilmente."
    ],
    correctAnswer: 0,
    urlImage: ""
  },
  {
    "question": "¿Cuál de los siguientes elementos NO forma parte de la configuración del entorno de prueba?",
    options: [
      "Localizadores uniformes de recursos (URLs).",
      "Credenciales.",
      "Datos de prueba.",
      "Biblioteca común central (Common core library)."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
    "question": "¿Cómo NO contribuye el testing de contratos a las dependencias de automatización de pruebas de API en una infraestructura?",
    options: [
      "Garantiza que las APIs cumplan con contratos de comunicación predefinidos.",
      "Puede utilizarse para probar la comunicación entre microservicios.",
      "Valida la compatibilidad entre dos sistemas separados.",
      "Verifica si un sistema cumple con sus requisitos contractuales."
    ],
    correctAnswer: 3,
    urlImage: ""
  },
  {
  "question": `Estás en un proyecto donde los equipos están descomponiendo un antiguo servicio web monolítico en varios microservicios.\n¿Cuáles de los siguientes documentos pueden ayudarte a identificar dependencias y desarrollar tu solución de automatización de pruebas (TAS) para pruebas de API?",
  
    i.   Especificación de la interfaz de programación de aplicaciones (API)
    ii.  Diagrama de arquitectura del sistema.
    iii. Estrategia de pruebas.
    iv.  Notas de la versión.`,
  options: [
      "i, ii y iv",
      "i y ii",
      "ii, iii y iv",
      "i"

  ],
  correctAnswer: 1,
  urlImage: ""
},
{
   "question": "Estás trabajando en un proyecto de automatización de pruebas que se utiliza para automatizar pruebas de GUI de una tienda web en línea. La tienda web contiene un asistente que ayuda a los usuarios a configurar sus cuentas, su nombre, dirección de facturación, dirección de envío y credenciales de seguridad. Durante la automatización de pruebas, los pasos del asistente se graban primero. Se toman capturas de pantalla y se almacenan durante estos pasos. Consideramos estas como la línea base. La línea base se volvió a ejecutar sin cambios en el SUT y todas las pruebas pasaron.\n Después de que los desarrolladores envían un cambio al asistente, los scripts de prueba grabados se reproducen y las capturas de pantalla de cada paso se comparan con las capturas de pantalla de la línea base. Durante la reproducción, todos los casos de prueba fallaron, a pesar de que el contenido visible parece inalterado. ¿Cuál podría ser la causa?",
     options: [
            "A) Un ID de sesión técnica utilizado internamente también se graba, el cual cambia durante la reproducción. Esto debería ser sustituido por variables para evitar fallos.",
            "B) Las capturas de pantalla no están correctamente asociadas con los pasos de prueba, lo que lleva a comparaciones en el orden incorrecto.",
            "C) El fallo ocurrió porque confiar únicamente en comparaciones de capturas de pantalla llevó a resultados inexactos.",
            "D) La fecha en el encabezado de la GUI es diferente de la fecha en que se grabó. Este campo de fecha debería ser excluido de la comparación.",
            "E) Las capturas de pantalla se capturaron en baja resolución, causando que los detalles se difuminaran, haciendo que la comparación no sea confiable."
        ],
    correctAnswer: [0, 3],
    urlImage: ""
  },
  {
    "question": "Estás trabajando en un proyecto donde eres responsable de extender el marco de automatización de pruebas (TAF) actual, utilizado para pruebas de servicios web, con capacidades adicionales de registro de pruebas. El TAF utiliza una herramienta de terceros para crear registros en archivos y un informe HTML para visualizar rápidamente los resultados. En la implementación de pruebas se usan varios valores dinámicos para generar los datos reales, y el SUT, un servicio web sin interfaz gráfica, se conecta a múltiples sistemas de prueba heredados. Desafortunadamente, las pruebas son muy inestables y necesitas agregar información significativa al registro para analizar mejor las causas de los fallos.\n¿Qué información adicional NO debe incluirse en el registro de pruebas para que sea más útil y por qué?",
    options: [
      "Se deben incluir marcas de tiempo en los registros para ver si el fallo está relacionado con una caída de un sistema heredado.",
      "Se deben incluir capturas de pantalla para ver los pares de solicitud-respuesta reales.",
      "Se deben registrar los valores generados aleatoriamente para permitir el análisis de los resultados reales obtenidos durante la ejecución.",
      "En caso de fallos de aserción, se debe registrar información significativa como resultados reales versus esperados en lugar de trazas de pila."
    ],
    correctAnswer: 1,
    urlImage: ""
  },
  {
        "question": "Durante la fase de diseño de un producto de software crítico para el rendimiento, la dirección decide crear un TAS para realizar pruebas de carga en el software y medir su rendimiento. El producto contiene diferentes componentes arquitectónicos, incluyendo un front end basado en navegador, microservicios implementados en el back end y una base de datos relacional. Es importante medir todas las transacciones individuales en toda la pila arquitectónica. ¿Cómo puedes proporcionar automáticamente esta información desde el software de automatización de pruebas?",
        options: [
            "A) No puedes. Esta información tiene que ser recopilada manualmente al final de cada transacción.",
            "B) El ingeniero de automatización de pruebas (TAE) puede registrar la información de tiempo durante la ejecución de todas las transacciones.",
            "C) Los IDs de seguimiento deben ser poblados a través de los componentes de software y los valores de tiempo medidos deben asociarse con estos IDs para correlacionar los datos de rendimiento.",
            "D) Se deben insertar herramientas de terceros en las diferentes capas de la arquitectura y estos agentes deben registrar los datos recopilados en una base de datos."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Como ingeniero de automatización de pruebas, se te encarga demostrar a la dirección si la tasa de éxito de las pruebas está mejorando a lo largo de una serie de ejecuciones de pruebas. ¿Cuál es el enfoque correcto para cumplir con este requisito?",
        options: [
            "A) Comparar los resultados de las pruebas con los resultados esperados.",
            "B) Usar indicadores de semáforo para mostrar el progreso de la ejecución de pruebas.",
            "C) Informes de prueba detallados con porcentajes de finalización de pruebas.",
            "D) Implementar una función de análisis que compare los resultados de pruebas anteriores y resalte tendencias."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Tu equipo ha desarrollado una Solución de Automatización de Pruebas (TAS) para un programa de software de diseño asistido por computadora (CAD). Este software tiene varias versiones diferentes en producción y ha sido portado a diferentes idiomas y plataformas. Los testers manuales han estado utilizando la TAS en sus computadoras locales con diferentes configuraciones de idioma, versiones y plataformas. Antes de proceder con más pruebas automatizadas, necesitas verificar el entorno de automatización de pruebas. ¿Cuál es una consideración importante al verificar el entorno para esta TAS?",
        options: [
            "A) Establecer un repositorio central para verificar que todos los testers estén utilizando la misma versión de la herramienta de captura/reproducción y puedan acceder a ella correctamente.",
            "B) Crear y documentar un procedimiento para verificar la instalación adecuada del software CAD en la máquina de cada tester.",
            "C) Configurar un entorno de prueba central donde el software CAD esté instalado y verificar que los scripts de automatización puedan interactuar con él desde cada computadora local.",
            "D) Utilizar la gestión de configuración para verificar la consistencia de los datos de prueba y scripts en diferentes entornos."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Trabajas en un equipo de desarrollo de software que requiere que las pruebas se realicen en muchos entornos de prueba diferentes. Tu gerente ha expresado que el equipo está gastando una cantidad significativa de tiempo superando resultados falsos positivos porque la solución de automatización de pruebas (TAS) no está configurada correctamente cuando se utiliza en un nuevo entorno de prueba. Además, parece haber diferencias de versión al comparar la TAS en cada entorno de prueba. Incluso los nuevos entornos de prueba a veces se configuran con componentes de TAS muy antiguos. ¿Cuáles DOS opciones ayudarían a abordar esta situación?",
        options: [
            "A) Crear un script de instalación automatizado para las herramientas y configuraciones que componen la TAS.",
            "B) Limitar la TAS para que solo se utilice en los entornos de prueba más importantes.",
            "C) Utilizar un repositorio para almacenar la TAS que sea accesible para todos los entornos de prueba.",
            "D) Aprovechar las pruebas manuales para verificar que la TAS se haya configurado correctamente en todos los entornos de prueba.",
            "E) Debido a las limitaciones de tiempo, omitir la implementación de pruebas de componentes para la TAS."
        ],
        correctAnswer: [0, 2], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        "question": "Estás a punto de verificar un conjunto de pruebas automatizadas. Durante el proceso de verificación, has encontrado que algunos scripts de prueba pasan una vez y fallan en otra, por lo tanto, no proporcionan resultados de prueba confiables. ¿Qué deberías hacer para verificar la validez de tus scripts de prueba?",
        options: [
            "A) Esto se debe a la ejecución paralela de los scripts de prueba; la sincronización resolvería el problema.",
            "B) Reejecutar el conjunto de pruebas automatizadas y analizar los resultados de las pruebas nuevamente.",
            "C) Eliminar los scripts de prueba del conjunto de pruebas automatizadas y analizarlos por separado.",
            "D) Esto sucede porque varios scripts de prueba están utilizando los mismos datos de prueba, por lo que la separación de los datos de prueba para cada script de prueba resolvería el problema."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Tienes un conjunto de pruebas que contiene 25 pruebas automatizadas que verifican la funcionalidad de inicio de sesión de la página de inicio de una aplicación. El conjunto de pruebas se ejecuta al final de cada ciclo de sprint de dos semanas con fines de prueba de regresión. Notas que dos casos de prueba de los 25 pueden a veces causar una condición de carrera en la aplicación o recibir un error aleatorio. ¿Qué acción deberías tomar para estos dos casos de prueba?",
        options: [
            "A) No tomar ninguna acción porque a veces se ejecutan con éxito.",
            "B) Reducir la cantidad de casos de prueba en el conjunto de pruebas de 25 a 15 y ver si el conjunto de pruebas pasa con la cantidad menor.",
            "C) Eliminar los dos casos de prueba del conjunto de pruebas activo y analizarlos por separado para encontrar la causa raíz.",
            "D) Reemplazar los dos casos de prueba por otros que pasen repetidamente para que el conjunto de pruebas aún tenga 25 casos de prueba automatizados."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Estás trabajando en un proyecto para automatizar un conjunto de pruebas de regresión. Cuando el conjunto de pruebas de regresión se ejecutó manualmente la última vez, todas las pruebas pasaron. Pero cuando las ejecutas a través de la solución de automatización de pruebas (TAS), encuentras que hay algunas pruebas fallidas. ¿Qué deberías hacer para manejar esta situación?",
        options: [
            "A) Analizar los archivos de registro para identificar la causa raíz del problema.",
            "B) Eliminar estos casos de prueba del conjunto de pruebas automatizadas, para que las pruebas restantes puedan pasar.",
            "C) Abrir un defecto para el SUT ya que las pruebas fallidas indican un problema del SUT.",
            "D) Esto es normal porque las pruebas automatizadas se comportan de manera diferente a las pruebas manuales."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Estás preparando para ejecutar un conjunto de pruebas de automatización para una aplicación crítica en seguridad que debe cumplir con los más altos requisitos de seguridad. ¿Qué enfoque deberías seguir para verificar el código de automatización de pruebas?",
        options: [
            "A) Buscar en los registros de prueba posibles datos de credenciales.",
            "B) Eliminar los casos de prueba que utilizan datos de prueba sensibles.",
            "C) Ejecutar el conjunto de pruebas lentamente y metódicamente para verificar si hay vulnerabilidades de seguridad.",
            "D) Utilizar una herramienta de análisis estático para identificar vulnerabilidades de seguridad."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Estás trabajando en un proyecto de automatización de pruebas que se utiliza para automatizar pruebas de interfaz gráfica de usuario (GUI) de una tienda web en línea. La tienda web contiene un asistente que ayuda a los usuarios a configurar sus cuentas: sus nombres, dirección de facturación, dirección de envío y credenciales de seguridad. Actualmente, el desarrollo del software está en una fase en la que los testers de usabilidad revisan el asistente y dan recomendaciones sobre los cambios necesarios. Esto se hace de manera iterativa; los desarrolladores modifican la GUI, los testers de usabilidad revisan las modificaciones y repiten las pruebas de usabilidad. La automatización de pruebas se centra principalmente en las pruebas de mantenimiento. En estos casos de prueba basados en la interfaz de usuario, los datos también incluyen valores de localización de la interfaz de usuario. Un problema existente es que los desarrolladores a menudo cambian los identificadores internos de los elementos de la interfaz de usuario, por lo que mantener las pruebas requiere mucho esfuerzo. ¿Cuál de las siguientes podría ser una oportunidad importante de mejora?",
        options: [
            "A) Aplicar validación de esquema, que verifica si los elementos de respuesta obligatorios están presentes en la GUI.",
            "B) Mejorar el registro de pruebas para incluir información sobre los elementos de la interfaz de usuario y sus localizadores para identificar fácilmente los casos de prueba rotos.",
            "C) Crear un histograma de pruebas, que permita a los TAEs identificar y seleccionar casos de prueba que son frágiles.",
            "D) Utilizar un algoritmo de inteligencia artificial (IA) - que se basa en aprendizaje automático y reconocimiento de imágenes - para identificar los nuevos selectores y utilizar auto-reparación para corregir los casos de prueba."
        ],
        correctAnswer: 3, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Tu organización mantiene un conjunto de pruebas de regresión de más de 1000 casos de prueba automatizados que ha sido extremadamente confiable a lo largo de los años. Recientemente, el equipo de desarrollo ha decidido modernizar su pila tecnológica y actualmente están refactorizando cómo opera su front end. Notas que la aplicación es mucho más impulsada por API que la versión anterior y esto tiene un impacto en cómo se renderizan los elementos de la interfaz de usuario. Anticipas que esto va a afectar la tasa de éxito del 75% de tus casos de prueba automatizados. ¿Qué enfoques de análisis de datos deberías utilizar para determinar cómo arreglar tus casos de prueba automatizados afectados?",
        options: [
            "A) Ejecutar los casos de prueba varias veces en un pipeline de CI/CD, realizar un análisis de informes visuales y sacar conclusiones de un histograma de pruebas.",
            "B) Usar algoritmos de IA y herramientas de validación de esquemas de API.",
            "C) Recrear casos de prueba automatizados para reemplazar los que no están funcionando correctamente y que se ejecutarán en la nueva aplicación.",
            "D) Evitar automatizar ciertos casos de prueba después de analizar registros de excepciones, capturas de pantalla y mensajes de error."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Estás trabajando en un conjunto de pruebas de regresión automatizadas que tardan demasiado tiempo en ejecutarse, y su ejecución no termina durante la noche. El entorno de prueba solo está disponible para pruebas de regresión durante la noche. Ejecutar múltiples suites en paralelo no es una opción, ya que el sistema objetivo es costoso y existe solo como una única instancia. ¿Cuáles deberían ser tus próximos pasos para asegurar que la ejecución del conjunto de pruebas termine durante la noche?",
        options: [
            "A) Dividir el conjunto de pruebas en múltiples partes, ejecutando las partes en diferentes noches de la semana.",
            "B) Aislar la verificación de resultados de prueba de la ejecución de pruebas y comenzar el proceso de verificación después de la ejecución de pruebas durante las horas de la mañana.",
            "C) Reescribir las pruebas utilizando la técnica impulsada por palabras clave, ya que se ejecutarán más rápido.",
            "D) Eliminar algunas pruebas del conjunto de pruebas para reducir el tiempo total de ejecución.",
            "E) Eliminar cualquier prueba duplicada del conjunto de pruebas."
        ],
        correctAnswer: [0, 4], // Ajusta según las respuestas correctas
        urlImage: ""
    },
    {
        "question": "Como TAE, estás evaluando nuevas versiones de bibliotecas centrales. ¿Cuál es el orden correcto que puede ayudarte a lograr estos resultados?",
        options: [
            "A) Crear un plan de adopción; determinar el impacto; actualizar dependencias; realizar un piloto.",
            "B) Realizar un piloto; determinar el impacto; crear un plan de adopción; actualizar dependencias.",
            "C) Actualizar dependencias; determinar el impacto; realizar un piloto; crear un plan de adopción.",
            "D) Determinar el impacto; actualizar dependencias; crear un plan de adopción; realizar un piloto."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        "question": "Has estado realizando una revisión de calidad de un TAS para optimizar la interacción de los controles dentro de la GUI. La GUI incluye varios tipos de controles (por ejemplo, lista desplegable, casilla de verificación, campo de texto). También hay funciones separadas en los scripts de prueba que actúan sobre los diferentes tipos de controles de la GUI para recopilar información y configurarlos (por ejemplo, visible/no visible, habilitado/no habilitado). ¿Cuál de los siguientes pasos deberías considerar para aumentar la eficiencia del TAS?",
        options: [
            "A) Separar la prueba de los controles según sus tipos en diferentes conjuntos de pruebas.",
            "B) Investigar si hay una herramienta de automatización de pruebas que pueda reemplazar la solución actual.",
            "C) Verificar si hay funciones que pueden trabajar con varios tipos de controles y consolidar los scripts de prueba utilizando estas funciones.",
            "D) Utilizar las nuevas funciones del sistema operativo en los scripts de prueba para manejar los controles de la GUI."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        "question": "Como ingeniero de automatización de pruebas, has automatizado la prueba de rendimiento de un sistema de gestión de clientes. Para probar efectivamente el rendimiento de este sistema, necesitas crear datos de prueba diversos que incluyan clientes con perfiles variados basados en diferentes criterios de entrada. ¿Cuál es la mejor manera de implementar tal solución?",
        options: [
            "A) Emplear una herramienta de automatización de pruebas para invocar una API de servicio web que cree nuevas cuentas de usuario y complete sus perfiles con los datos especificados.",
            "B) Registrar estos usuarios manualmente a través de la GUI, para que también se pueda probar la funcionalidad de la GUI.",
            "C) Utilizar la base de datos de producción durante la prueba, ya que tiene el volumen y tipo de datos reales.",
            "D) Implementar un script de automatización de pruebas para anonimizar los datos de los clientes antes de usarlos durante la prueba de rendimiento."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
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