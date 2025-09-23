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
    "restart": "Reiniciar"
  }
}
