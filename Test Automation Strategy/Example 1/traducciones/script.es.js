const data_es = {
  questions: [
    {
      "question": "Si deseas crear automatización de pruebas que interactúe con el software que el usuario ve e interactúa, ¿cuál debería ser tu objetivo?",
      options: [
        "a. Las APIs",
        "b. Las bibliotecas del SUT",
        "c. Los protocolos utilizados por el SUT",
        "d. La GUI"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es necesario para probar APIs?",
      options: [
        "a. Deben tener recuperación de errores completa",
        "b. Deben trabajar con una interfaz estándar y estar completamente documentadas",
        "c. Deben estar expuestas al público",
        "d. Deben ser capaces de manejar cualquier combinación de datos"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Por qué es importante tener un entorno de prueba estable y datos de prueba al ejecutar pruebas automatizadas?",
      options: [
        "a. Esto permite que el entorno y los datos se compartan con pruebas manuales",
        "b. Los resultados de las pruebas son confiables y repetibles",
        "c. Se minimizan los falsos positivos",
        "d. Es mejor tener inestabilidad en el entorno y los datos, ya que eso amplía la cobertura de pruebas"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Al crear una solución completa de automatización de pruebas para un SUT, ¿cuánto código de automatización de pruebas se espera que sea necesario?",
      options: [
        "a. Ninguno, ya que esto no es posible porque no existen soluciones de automatización completas",
        "b. Tanto como o más que el SUT",
        "c. Ligeramente menos que el SUT",
        "d. Normalmente entre el 20-35% de la cantidad de código del SUT"
      ],
      correctAnswer: 1, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es lo más importante que debe estar en su lugar antes de prepararse para comenzar un gran proyecto de automatización?",
      options: [
        "a. Implementar una herramienta para usar en la implementación de la automatización",
        "b. Un ROI aceptado",
        "c. Casos de prueba claramente definidos y precisos",
        "d. Un plan de pruebas"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Tu organización desea desarrollar automatización de pruebas para una aplicación móvil. No tienen el personal técnico para hacer el trabajo y son reacios a invertir en herramientas, pero reconocen la necesidad de automatización de pruebas para esta aplicación en particular. ¿Cuál de las siguientes es la mejor solución a seguir?",
      options: [
        "a. Basada en proveedores",
        "b. Externalizada",
        "c. Interna",
        "d. Basada en herramientas"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Tienes un equipo de 10 ingenieros de automatización de pruebas, pero solo cinco de ellos usarán la herramienta al mismo tiempo. Estás pagando por 10 licencias. ¿Qué tipo de modelo estás utilizando?",
      options: [
        "a. Código abierto",
        "b. Por máquina/usuario",
        "c. Flotante",
        "d. Tiempo de ejecución"
      ],
      correctAnswer: 1, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿De qué manera es el sistema de gestión de pruebas una consideración en el presupuesto de automatización de pruebas?",
      options: [
        "a. No es un factor",
        "b. Dado que el sistema de gestión de pruebas generará los informes de defectos para los defectos encontrados por la automatización de pruebas, los campos de defectos deben estar claramente definidos y eso tomará tiempo y esfuerzo",
        "c. Los paneles y reportes del sistema de gestión de pruebas tendrán que actualizarse para proporcionar un estado de mitigación de riesgos en tiempo real a la automatización de pruebas",
        "d. El sistema de gestión de pruebas tendrá una interfaz con las herramientas de automatización de pruebas para proporcionar actualizaciones sobre la ejecución de pruebas"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "En el equipo de automatización, ¿quién se espera que tenga conocimientos de programación y arquitectura técnica?",
      options: [
        "a. El SME",
        "b. El gerente de pruebas",
        "c. El analista de pruebas",
        "d. El ingeniero de automatización de pruebas"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "En el modelo de prueba de paraguas, ¿cuál es el enfoque principal de la automatización de pruebas?",
      options: [
        "a. Pruebas de UI",
        "b. Pruebas de servicios",
        "c. Pruebas unitarias",
        "d. Pruebas de integración"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Estás probando el nivel de UI de una aplicación bancaria. Encuentras que funciona bien en la mayoría de las transacciones, pero cada vez que se utiliza una dirección, hay errores respecto al formato esperado, a pesar de que el formato ingresado es correcto según los requisitos. ¿Qué nivel de prueba probablemente se pasó por alto, lo que ha resultado en estos errores?",
      options: [
        "a. Unidad",
        "b. API",
        "c. Contrato",
        "d. UI"
      ],
      correctAnswer: 2, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Si hay un enfoque principal en construir automatización de pruebas que pueda ejecutarse en los entornos de producción o pre-producción para proporcionar pruebas de extremo a extremo en el sistema completado, ¿qué enfoque se está utilizando?",
      options: [
        "a. Shift left",
        "b. Shift right",
        "c. Shift up",
        "d. Shift down"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una afirmación verdadera respecto a la automatización de pruebas en un proyecto V-model?",
      options: [
        "a. La automatización de pruebas comienza más tarde que en un proyecto Agile",
        "b. La automatización de pruebas comienza antes que en un proyecto Agile",
        "c. La automatización de pruebas no es posible debido a los largos ciclos de desarrollo",
        "d. La automatización de pruebas resultará en un ROI más alto que en un proyecto Agile"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "En el proyecto ideal de desarrollo de software Agile, ¿cuándo deberían integrarse los casos de prueba automatizados para un sprint en el pipeline de CI/CD?",
      options: [
        "a. Al comienzo del sprint",
        "b. Antes de que termine el sprint",
        "c. Inmediatamente antes de que comience SIT",
        "d. Inmediatamente después de UAT"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Tu equipo está desarrollando una nueva aplicación móvil. Esta será la primera vez que la organización intente implementar un enfoque DevOps. El producto está siendo desarrollado por tres equipos Agile, uno haciendo el front end, uno haciendo los servicios web y uno manejando las transacciones de la base de datos. Los desarrolladores de servicios web han desarrollado las pruebas unitarias automatizadas que están ejecutando en sus propias máquinas antes de la implementación. ¿Qué necesitan hacer para cumplir con las mejores prácticas?",
      options: [
        "a. Necesitan asegurarse de que otro desarrollador haya revisado y pueda ejecutar las pruebas",
        "b. Necesitan desplegar las pruebas en el pipeline de DevOps y asegurarse de que se ejecuten en el entorno de implementación cada vez que se despliega código",
        "c. Necesitan desplegar las pruebas en el pipeline de DevOps y asegurarse de que las pruebas se ejecuten en el entorno de prueba cada vez que se despliega y construye nuevo código",
        "d. Necesitan implementar infraestructura como código para crear el entorno de prueba, luego desplegar las pruebas en el pipeline de DevOps y asegurarse de que las pruebas se ejecuten en el nuevo entorno de prueba construido cada vez que se despliega y construye código nuevo o cambiado"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes pruebas es la mejor candidata para la automatización?",
      options: [
        "a. Prueba de recuperación de errores para una aplicación móvil que requiere reinicios frecuentes del teléfono",
        "b. Prueba de UI que valida que la navegación es adecuada para varias clases de usuarios",
        "c. Prueba de flujo de trabajo crítico que requiere que múltiples usuarios proporcionen aprobaciones durante el flujo de trabajo",
        "d. Prueba de cálculo de hipoteca que requiere entrada de múltiples tablas de datos para determinar la tasa adecuada"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "Tu equipo está trabajando con un pipeline de CI/CD. Hasta ahora, todas las pruebas se han realizado manualmente con el código integrado desplegado en un entorno de prueba. Si deseas implementar la automatización, ¿cómo podría cambiar esto para incorporar las mejores prácticas?",
      options: [
        "a. La automatización de pruebas podría incluirse en el pipeline y ejecutarse allí para las pruebas tempranas (unitarias, integración de componentes)",
        "b. La automatización de pruebas podría reemplazar las pruebas manuales de extremo a extremo y pueden llevarse a cabo en los entornos de prueba",
        "c. Automatizar algunas de las pruebas más fáciles, pero mantener las pruebas cruzadas de navegador para pruebas manuales",
        "d. Minimizar la ejecución de pruebas en el pipeline y concentrarse en ejecutar la automatización de pruebas en el entorno cercano a producción"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Estás automatizando una nueva aplicación web. Uno de los escenarios de prueba es probar la función de tiempo de espera que cierra la sesión si la aplicación ha estado inactiva durante más de una hora. ¿Se puede automatizar esta prueba?",
      options: [
        "a. No, requiere demasiado tiempo esperar por el tiempo de espera",
        "b. No, la automatización de pruebas no puede realizar pruebas relacionadas con el tiempo",
        "c. Sí, pero requerirá intervención manual para cronometrar el tiempo de espera y luego reiniciar la automatización para verificar el resultado",
        "d. Sí, pero debes verificar que otras pruebas puedan ejecutarse de manera eficiente mientras esta espera por el tiempo de espera"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "Si hay una necesidad urgente de que un producto llegue al mercado lo antes posible, ¿cómo puede ayudar la automatización de pruebas?",
      options: [
        "a. Al mover las pruebas hacia la izquierda",
        "b. Al mover las pruebas hacia la derecha",
        "c. Al minimizar el número de pruebas que se deben ejecutar",
        "d. Al limitar los datos de prueba que son ejercitados por las pruebas"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿Cómo se llama una prueba automatizada cuando se utiliza para verificar que un defecto ha sido corregido y permanece corregido?",
      options: [
        "a. Prueba de regresión",
        "b. Prueba de confirmación",
        "c. Prueba de defecto",
        "d. Prueba dirigida"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "DevOps asume la participación de los equipos de desarrollo y operaciones en la creación de un producto. ¿Cuál de las siguientes pruebas es de particular interés para el equipo de operaciones?",
      options: [
        "a. Pruebas unitarias",
        "b. Pruebas de confirmación",
        "c. Pruebas de instalación",
        "d. Pruebas del sistema"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Cómo afecta la licencia de herramientas de prueba a la selección estratégica de la herramienta de automatización de pruebas?",
      options: [
        "a. Costo",
        "b. ROI",
        "c. Acceso desde múltiples entornos de prueba",
        "d. Número de licencias que estarán disponibles para los desarrolladores"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Por qué es necesario rastrear las versiones del software de automatización de pruebas?",
      options: [
        "a. Porque diferentes versiones pueden ser necesarias para diferentes configuraciones del entorno de prueba",
        "b. Porque puede que necesites volver a una versión anterior cuando se descubra un defecto en el SUT",
        "c. Porque es más fácil rastrear la productividad de los ingenieros de automatización cuando todos los cambios están versionados",
        "d. Porque los desarrolladores podrán ver qué cambios se están realizando en la automatización y sabrán qué defectos serán detectados por una versión particular"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Has desarrollado automatización de pruebas para un gran sistema de Planificación de Recursos Empresariales (ERP). Este es un producto en la nube como Servicio (SaaS) que será actualizado por el proveedor a intervalos regulares. ¿Cuál de los siguientes es un riesgo con el software de automatización de pruebas para este sistema?",
      options: [
        "a. Puede que no migre de manera limpia a un nuevo entorno de prueba",
        "b. Los datos de prueba no pueden ser creados antes de la implementación",
        "c. Puede ser demasiado difícil descifrar los resultados de las pruebas porque es una implementación en la nube",
        "d. Puede ser difícil mantener a los ingenieros de prueba que conocen el sistema para hacer futuras actualizaciones"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito principal de ejecutar la suite de automatización de pruebas para realizar pruebas de regresión en una nueva versión del SUT?",
      options: [
        "a. Detectar si algo ha cambiado",
        "b. Detectar si algo que solía funcionar no está funcionando",
        "c. Verificar las correcciones de defectos y actualizar la TAS según sea necesario",
        "d. Practicar la ejecución de la suite de automatización de pruebas"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito de una suite de automatización de pruebas?",
      options: [
        "a. Es una forma de agrupar lógicamente casos de prueba relacionados",
        "b. Es un componente requerido del TAF",
        "c. Es una colección de archivos de salida creados por los scripts de automatización de pruebas",
        "d. Es una matriz de trazabilidad de riesgos utilizada específicamente para la automatización de pruebas"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una consideración cuando varias máquinas ejecutarán las pruebas de automatización en paralelo para simular escenarios de usuario realistas?",
      options: [
        "Los usuarios reales deberán iniciar sesión en cada máquina antes de la ejecución",
        "Reunir los resultados de las pruebas será difícil",
        "Las máquinas deberán estar en la misma red y pueden necesitar comunicarse entre sí",
        "Las máquinas deberán configurarse de manera idéntica para no sesgar los resultados de las pruebas debido a diferencias de memoria u otros recursos"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: ""
    },
    {
      "question": "Algunos scripts de automatización de pruebas verifican los datos accediendo directamente a la base de datos y comprobando los valores allí. ¿Es esto una buena práctica?",
      options: [
        "No, tenderá a introducir falsos negativos debido a errores de scripting",
        "No, es un acceso irreal de los datos",
        "Sí, permite verificar los cambios de datos esperados",
        "Sí, es una buena práctica que los ingenieros de automatización comprendan la estructura de la base de datos y conviertan ese entendimiento en un requisito"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: ""
    },
    {
      "question": "Has calculado los siguientes ahorros esperados de la automatización de pruebas: dados estos números, ¿cuál de los siguientes es el ahorro esperado correcto (en minutos)?",
      options: [
        "3.000.000 minutos",
        "300.000 minutos",
        "30.000 minutos",
        "30 minutos"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: "./imagenes/tabla preg29.png"
    },
    {
      "question": "Has calculado la inversión esperada para un proyecto de automatización de pruebas. Dados estos números, ¿cuál de los siguientes es el costo de inversión correcto (en minutos)?",
      options: [
        "3.240.000 minutos",
        "324.000 minutos",
        "32.400 minutos",
        "3.240 minutos"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: "./imagenes/tabla preg30.png"
    },
    {
      "question": "Si acabas de ejecutar tu suite de automatización de pruebas y reportó 50 fallos cuando normalmente informa 1 o 2, ¿qué deberías hacer?",
      options: [
        "Crear un informe de defecto por cada fallo para que el desarrollador lo resuelva",
        "Crear un informe de defecto por cada fallo para que el ingeniero de automatización lo corrija",
        "Buscar un defecto en cascada donde un solo problema haya causado múltiples fallos",
        "Verificar que las capturas de pantalla sean válidas y que no haya habido una falla interna de la automatización de pruebas"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: ""
    },
    {
      "question": "Estás trabajando en una organización que siempre prefiere usar herramientas comerciales de automatización de pruebas. El proyecto anterior implementó una herramienta muy cara, pero el equipo no pudo automatizar mucho debido a que la herramienta era inflexible. El proyecto fue abandonado y el equipo renunció. Ahora estás eligiendo una herramienta para tu proyecto. ¿Qué deberías hacer?",
      options: [
        "Evitar usar esa herramienta",
        "Investigar los problemas técnicos con la herramienta para ver si había alternativas de implementación factibles que el equipo no haya considerado",
        "Asegurar que tu proyecto tenga tiempo suficiente para un fallo de herramienta y tiempo para aprender una nueva en caso de que la primera no funcione",
        "Optar por una herramienta de código abierto que te brinde mejor flexibilidad y control sobre la implementación"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: ""
    },
    {
      "question": "Estás trabajando en un proyecto de automatización de pruebas para un sistema de inmigración. Ya existe un gran número de casos de prueba manuales que se han usado durante varios años. Se determinó que la cobertura de estos casos de prueba es muy buena y los casos están priorizados según la criticidad para el sistema y los usuarios. Dada solo esta información, ¿qué debería ser tu primera prioridad en la automatización de pruebas?",
      options: [
        "Automatizar los flujos de usuario de extremo a extremo",
        "Automatizar los casos de prueba manuales existentes en orden de prioridad",
        "Capacitar a tu equipo acerca de las prácticas y reglas de inmigración",
        "Capacitar a los usuarios de negocio en cómo generar código de automatización de pruebas a partir de los requisitos"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: ""
    },
    {
      "question": "Estás creando una estrategia de automatización de pruebas para un nuevo producto insignia de tu empresa. Sabes que la gerencia se muestra reticente a comprometerse con un esfuerzo de automatización. ¿Qué debes presentarles para convencerlos de respaldar un nuevo esfuerzo de automatización?",
      options: [
        "Los antecedentes y la experiencia del equipo propuesto de automatización de pruebas",
        "El valor de negocio de la automatización de pruebas",
        "El costo del esfuerzo de automatización en comparación con el esfuerzo de desarrollo, incluyendo herramientas",
        "La comparación del producto actual con los productos de la competencia"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: ""
    },
    {
      "question": "¿Cómo puede el reporte de automatización de pruebas indicar que hay necesidad de desplazar las pruebas más a la izquierda?",
      options: [
        "Encontrando problemas significativos que ocurren a nivel de componente funcional",
        "Encontrando problemas significativos que ocurren en la integración de componentes individuales",
        "Encontrando problemas significativos que ocurren al probar transacciones de usuario",
        "Encontrando problemas significativos que ocurren en flujos de trabajo de extremo a extremo"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: ""
    },
    {
      "question": "¿Cómo ayuda la creación de componentes reutilizables al esfuerzo de automatización de pruebas?",
      options: [
        "A. Lo ralentiza, permitiendo más tiempo para el análisis.",
        "B. Emplea arquitectos de automatización para definir la solución de automatización de pruebas.",
        "C. Permite que los componentes se creen y mantengan en un solo lugar, pero se utilicen en muchos.",
        "D. Soporta un entorno de ejecución distribuido que puede permitir que más agentes de automatización se ejecuten de manera concurrente."
      ],
      correctAnswer: 2, // La opción correcta es C
      urlImage: ""
    },
    {
      "question": "¿Qué les sucede a los testers manuales cuando una suite de automatización de pruebas ha automatizado la mayor parte de las pruebas que históricamente han realizado?",
      options: [
        "A. Necesitan encontrar nuevos trabajos.",
        "B. Necesitan convertirse en ingenieros de automatización de pruebas.",
        "C. Ahora tienen tiempo para ampliar la cobertura de pruebas.",
        "D. Ahora tienen tiempo para crear más datos de prueba."
      ],
      correctAnswer: 2, // La opción correcta es C
      urlImage: ""
    },
    {
      "question": "¿Qué se debe hacer antes de desplegar un nuevo conjunto de pruebas en el TAS en un entorno de pruebas continuas?",
      options: [
        "A. Las pruebas existentes deben ser probadas de regresión.",
        "B. Las nuevas pruebas deben ser probadas.",
        "C. Las nuevas pruebas deben someterse a pruebas de rendimiento y seguridad.",
        "D. La canalización debe extenderse para capturar métricas de prueba e información de defectos."
      ],
      correctAnswer: 1, // La opción correcta es B
      urlImage: ""
    },
    {
      "question": "Tu automatización de pruebas está fallando durante la ejecución. Has realizado un análisis de causa raíz y has determinado que los problemas se deben casi siempre a los datos. En particular, los datos no están disponibles o no están en el estado correcto. Por ejemplo, tienes una prueba que se supone que debe encontrar y eliminar cuentas de usuario no utilizadas, pero no hay cuentas no utilizadas disponibles para eliminar. ¿Qué necesitas hacer para solucionar este problema?",
      options: [
        "A. Crear programáticamente las precondiciones requeridas por las pruebas.",
        "B. Alterar manualmente los datos antes de ejecutar las pruebas.",
        "C. Pedir a las personas de la base de datos que busquen y te proporcionen una lista de datos de prueba válidos.",
        "D. Omitir esta prueba hasta que los datos estén disponibles."
      ],
      correctAnswer: 0, // La opción correcta es A
      urlImage: ""
    },
    {
      "question": "Tu equipo de automatización ha estado añadiendo pruebas automatizadas en la canalización de CI/CD a medida que se desarrollan nuevas características. Los desarrolladores ahora se quejan de que la canalización se está ralentizando por las pruebas. Ellos piensan que hay demasiadas pruebas en ejecución. ¿Qué deberías hacer?",
      options: [
        "A. Ignorar a los desarrolladores, las pruebas son necesarias.",
        "B. Realizar pruebas de rendimiento para las pruebas y ver si son lo más eficientes posible.",
        "C. Revisar las pruebas que se están ejecutando e incluir solo las críticas en la canalización y ejecutar el resto como una suite de pruebas de regresión durante la noche.",
        "D. Implementar ejecución por lotes donde todas las pruebas se dividan en tres conjuntos y solo se ejecute un conjunto a la vez para un despliegue."
      ],
      correctAnswer: 2, // La opción correcta es C
      urlImage: ""
    },

    // inicia examen 2
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
      urlImage: ""
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
      urlImage: "../Example 2/imagenes/tabla preg29.png"
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
    "errorLoading": "Error al cargar el cuestionario. Por favor, intenta de nuevo más tarde.",
    "nameQuiz": "Test Automation Strategy - Example 1"
  }
}
window.data_es = data_es;
