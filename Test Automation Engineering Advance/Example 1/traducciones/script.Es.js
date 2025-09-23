const data_es = {
  questions: [
    {
      "question": "¿Cuál de las siguientes es una desventaja de la automatización de pruebas?",
      options: [
        "a. Son menos susceptibles a errores humanos durante la ejecución",
        "b. Se ejecutan más rápido que las pruebas manuales",
        "c. Siempre verifican exactamente lo que fueron programadas para verificar",
        "d. Pueden ejecutar pruebas más complejas de manera más confiable"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes características del desarrollo de software Agile permite al equipo cubrir todos los niveles de prueba con la cantidad y profundidad adecuadas de automatización?",
      options: [
        "a. Las herramientas adecuadas",
        "b. La capacitación adecuada para los ingenieros de automatización de pruebas",
        "c. La eliminación de silos dentro del equipo",
        "d. La publicación temprana de requisitos completados"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Tienes un equipo de automatización de pruebas altamente técnico, con todos los ingenieros siendo hábiles en codificación en un amplio conjunto de lenguajes. ¿Cuál de las siguientes sería la mejor herramienta para usar en la implementación de la automatización de pruebas para el SUT?",
      options: [
        "a. Código completo",
        "b. Comercial fuera de la estantería (COTS)",
        "c. Código abierto",
        "d. Una herramienta basada en el mismo código que el SUT"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cómo ayuda la observabilidad en el SUT al desarrollo de la automatización de pruebas?",
      options: [
        "a. El TAE puede observar el código mientras se ejecuta",
        "b. El software de automatización puede acceder a interfaces que le permitirán determinar si se han alcanzado los resultados esperados",
        "c. El software de automatización puede acceder a controles como llamadas a funciones, para impulsar el software y verificar resultados",
        "d. Hace que los componentes y sus interfaces sean más claros y fáciles de entender"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Qué entorno debería usarse para ejecutar pruebas de rendimiento para obtener los resultados más precisos?",
      options: [
        "a. Desarrollo local",
        "b. Construcción",
        "c. Integración",
        "d. Preproducción"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el entorno más adecuado para ejecutar pruebas automatizadas de API?",
      options: [
        "a. Desarrollo local",
        "b. Construcción",
        "c. Integración",
        "d. Preproducción"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    }, {
      "question": "Estás trabajando en un nuevo proyecto de automatización de pruebas. Los desarrolladores han implementado una pipeline de CI/CD con generación automática de entornos según sea necesario. Todos están de acuerdo en que lo mejor sería que el código de automatización de pruebas se ejecutara automáticamente a medida que el código pasa por la pipeline. ¿Cómo afecta esto tu enfoque para la implementación de la automatización?",
      options: [
        "a. La generación de informes automatizados será crítica",
        "b. Necesitarás una herramienta que se integre fácilmente y use tecnología similar a la del SUT",
        "c. Las configuraciones de entorno deberán ser probadas antes de la ejecución de cualquier automatización de pruebas, ya que se están generando a partir del código",
        "d. No será necesario un arquitecto de pruebas ya que los desarrolladores ya han implementado CI/CD y el código de automatización solo necesita cumplir con las reglas de la pipeline"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    }, {
      "question": `Has realizado la siguiente comparación de herramientas: Has asignado la siguiente importancia a estas áreas:
  
    Grabación/Reproducción – agradable de tener
    Se integra con CI/CD – agradable de tener
    Automatización de API – imprescindible
    Móvil – agradable de tener
    Fuente – preferiblemente de código abierto\n
    El equipo que usará esta herramienta tiene habilidades sólidas en programación.\n Dada esta información, ¿cuál es la mejor herramienta para su organización?`,
      options: [
        "a. Herramienta A",
        "b. Herramienta B",
        "c. Herramienta C",
        "d. Herramienta D"

      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: "./imagenes/tabla preg8.png "
    },
    {
      "question": "¿En qué parte del diseño de automatización de pruebas deberías encontrar la interfaz con el software de gestión de pruebas?",
      options: [
        "a. En el gTAA",
        "b. En el TAA",
        "c. En el TAS",
        "d. En el SUT"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el ecosistema correcto en el que se ejecuta la automatización de pruebas?",
      options: [
        "a. TAF",
        "b. TAS",
        "c. TAA",
        "d. gTAA"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes elementos del TAA apoya la conexión con el SUT a través de APIs?",
      options: [
        "a. Generación de pruebas",
        "b. Definición de pruebas",
        "c. Adaptación de pruebas",
        "d. Ejecución de pruebas"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Has heredado un conjunto de automatización de pruebas que fue desarrollado a lo largo de varios años por múltiples ingenieros de automatización de pruebas. Has encontrado que el marco es muy complicado, con los mismos modelos de página y flujo incorporados en múltiples scripts. Los scripts que acceden a los modelos de página para diferentes SUT están todos mezclados en un solo directorio. También parece que las acciones de usuario genéricas se han implementado en múltiples scripts. ¿Cuál es la correcta asociación entre estos elementos y las capas del TAF?",
      options: [
        "a. Modelos de Página y Flujo a la Capa de Lógica de Negocio, acciones de usuario genéricas a la Capa de Bibliotecas Centrales, el resto del código de script a la Capa de Scripts de Prueba",
        "b. Modelos de Página y acciones de usuario genéricas a la Capa de Bibliotecas Centrales, Modelos de Flujo a la Capa de Lógica de Negocio",
        "c. Scripts de Prueba a la Capa de Scripts de Prueba, código específico del SUT a la Capa de Adaptación de Pruebas, cualquier cosa llamada múltiples veces a la Capa de Bibliotecas Centrales",
        "d. Registro e Informes a la Capa de Lógica de Negocio, pruebas de API y Base de Datos a las Bibliotecas Centrales, llamadas a Bibliotecas Centrales a la Capa de Scripts de Prueba"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Acabas de comenzar un nuevo trabajo en una empresa que desarrolla software de aplicaciones. Tu gerente no sabe nada sobre automatización de pruebas, pero le gusta la idea. Ha solicitado una demostración de alguna automatización de pruebas en una de sus aplicaciones en producción. Le gustaría tener la demostración al final de esta semana. Le has explicado que puedes preparar una demostración rápida, pero que desarrollar una automatización de pruebas real y mantenible tomará más tiempo. Dada esta información, ¿qué enfoque sería el más rentable y expedito para crear la demostración?",
      options: [
        "a. Captura/reproducción",
        "b. Scripting estructurado",
        "c. Pruebas basadas en datos",
        "d. Desarrollo guiado por comportamiento"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Has estado manteniendo una Solución de Automatización de Pruebas (TAS) y te das cuenta de que frecuentemente necesitas cambiar los casos de prueba cuando uno de los objetos en una página de la interfaz de usuario cambia. Dado que los objetos son utilizados por múltiples pruebas, un objeto cambiado puede resultar en la necesidad de modificar múltiples pruebas. Esto está tomando una cantidad considerable de tiempo cada vez que el equipo recibe una nueva entrega de código de los desarrolladores. ¿Qué principio de diseño deberías aplicar al refactorizar el código para hacerlo más mantenible?",
      options: [
        "a. Los principios SOLID",
        "b. Patrones de diseño",
        "c. Patrón de objeto de página",
        "d. Patrón de modelo de flujo"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Has sido asignado a un nuevo proyecto de automatización de pruebas. Los desarrolladores están utilizando Java con Spring Boot en su pipeline de despliegue. Les gustaría ver la automatización utilizando las mismas herramientas, particularmente para el despliegue y la ejecución de las pruebas. Dada esta información, ¿cuál es una consideración principal que debes tener al formar el equipo?",
      options: [
        "a. Cuántas personas necesitarás",
        "b. ¿Puedes encontrar a las personas que necesitas con las habilidades de programación específicas?",
        "c. ¿Qué niveles de prueba serán objetivo de la automatización?",
        "d. ¿Dónde deberían estar ubicados los miembros del equipo?"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Has desarrollado un conjunto completo de automatización de pruebas para una nueva aplicación móvil. Esto implica el uso de dispositivos físicos para las pruebas. Esto ha funcionado bien, pero te preocupa los requisitos de mantenimiento futuros. ¿Cuál de las siguientes es un área que debería considerarse con este enfoque?",
      options: [
        "a. Costo de licencia de los dispositivos",
        "b. Responsabilidad de instalación del simulador",
        "c. Actualizaciones del sistema operativo para los dispositivos físicos y retesting/actualizaciones de pruebas según sea necesario",
        "d. Pruebas de aceptación utilizando los dispositivos físicos frente a utilizar dispositivos simulados para obtener la aprobación del usuario"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es un problema de mantenibilidad con algunas herramientas de captura/reproducción?",
      options: [
        "a. La interfaz de usuario es difícil de usar",
        "b. El registro es engorroso",
        "c. La cobertura suele ser inapropiada",
        "d. Los datos están codificados"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito de utilizar analizadores estáticos en el código de automatización de pruebas?",
      options: [
        "a. No deberían ser utilizados para el código de automatización de pruebas",
        "b. Para asegurar una mayor calidad del código al verificar los estándares de codificación",
        "c. Para optimizar el código para una ejecución más rápida",
        "d. Para encontrar y eliminar cualquier variable global"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Tu organización está utilizando un sistema moderno de integración continua que diferencia entre las fases de construcción y despliegue de las pipelines de entrega continua. Los desarrolladores han implementado algunas pruebas en la pipeline de construcción y eso parece estar funcionando, pero estás viendo problemas frecuentes con los flujos de trabajo de transacciones que están ausentes o no implementados correctamente. Ahora has desarrollado pruebas para cubrir los escenarios problemáticos. ¿Cómo debería implementarse esta prueba en la pipeline?",
      options: [
        "a. Debería implementarse como pruebas de integración en la pipeline de integración continua",
        "b. Debería implementarse como pruebas de integración de componentes en la pipeline de despliegue continuo",
        "c. Debería implementarse como pruebas de sistema en la pipeline de despliegue continuo",
        "d. Debería implementarse como pruebas de componentes en la pipeline de integración continua"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Estás desarrollando pruebas de eficiencia de rendimiento para combatir problemas de producción con un rendimiento lento, particularmente con cualquier transacción de informes. ¿Dónde deberían implementarse en un entorno CI/CD para proporcionar la puerta de calidad más temprana?",
      options: [
        "a. En la pipeline de integración continua",
        "b. En la pipeline de despliegue continuo",
        "c. Después del despliegue, en el entorno de pruebas",
        "d. Después del despliegue, en el entorno de producción"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Cómo se ven influenciados los entornos de prueba por la gestión de configuraciones?",
      options: [
        "a. Los entornos solo se acceden a través del software de gestión de configuraciones",
        "b. Los entornos están asegurados y se prueban de seguridad cuando se añaden a la gestión de configuraciones",
        "c. La configuración del entorno y la información de acceso pueden almacenarse en la gestión de configuraciones",
        "d. El acceso al entorno está controlado por el sistema y software de gestión de configuraciones"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito principal de usar un interruptor de características en el software de prueba?",
      options: [
        "a. Para reducir el costo de mantenimiento de los casos de prueba",
        "b. Para permitir la ejecución de ciertas pruebas dependiendo de la configuración del interruptor",
        "c. Para poder omitir pruebas que están fallando debido a un defecto",
        "d. Para proporcionar información de informes de prueba más explícita basada en la configuración del interruptor"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Por qué es importante entender las conexiones de las APIs?",
      options: [
        "a. Los desarrolladores codificarán de acuerdo a estos requisitos",
        "b. Las pruebas de rendimiento dependen de entender cada conexión de API",
        "c. Aquí es donde el tester encontrará la documentación sobre los parámetros requeridos",
        "d. La lógica de negocio se controla a través de las conexiones de API y sus relaciones"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito de un contrato entre servicios?",
      options: [
        "a. Define cómo el proveedor suministrará servicios al consumidor",
        "b. Define quién tiene acceso a qué datos por razones de seguridad",
        "c. Define cómo un servicio se conecta y desconecta del sistema",
        "d. Define la velocidad esperada de las transacciones y permite ajustarla según sea necesario"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Has creado un conjunto de automatización de pruebas que está probando funcionalidades críticas en un nuevo sistema. Está encontrando un número significativo de defectos. Has mostrado repetidamente tus registros de salida a tu gerente, pero él no entiende que la mayoría de los casos de prueba están fallando. ¿Qué deberías hacer para mejorar tus registros y hacerlos más comprensibles?",
      options: [
        "a. Nada. Consigue un nuevo gerente.",
        "b. Asegúrate de que el inicio y el final de cada prueba estén registrados y presentados en negrita",
        "c. Agrega color a los resultados mostrando rojo para fallos y verde para aprobados",
        "d. Agrega capturas de pantalla para todos los fallos"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Tienes un conjunto de automatización de pruebas que está encontrando un fallo. Has investigado los registros, pero no puedes ver dónde está fallando. Has intentado ejecutar las pruebas manualmente y funcionan sin problemas. ¿Qué otra información deberías capturar en tus scripts para ayudar a depurar el problema?",
      options: [
        "a. Capturas de pantalla en el punto del fallo",
        "b. Líneas de código ejecutadas",
        "c. Horas de prueba manual equivalentes ahorradas",
        "d. Número de ejecuciones con información de aprobación/fallo"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un sistema de Gestión de Relaciones con Clientes (CRM) que utiliza una búsqueda de direcciones de terceros para ayudar al usuario cuando ingresa una dirección. Esto también asegura que solo se ingresen direcciones válidas en el sistema. Desafortunadamente, estás encontrando que las direcciones en un estado siempre están fallando: Kansas. No puedes ver ningún problema en el código de automatización de pruebas, y has determinado que no hay errores de datos o formato en las direcciones que fallan. Has intentado la misma prueba manualmente y obtienes la misma falla. Dada esta información, ¿qué deberías hacer a continuación?",
      options: [
        "a. Deberías ejecutar el código bajo el depurador para asegurarte de que no ocurren errores",
        "b. Deberías contactar al proveedor de terceros y registrar un incidente con información sobre las direcciones fallidas",
        "c. Deberías capturar capturas de pantalla de la falla",
        "d. Deberías asegurarte de que las direcciones que se están ingresando son direcciones válidas"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "¿Quién debería recibir una copia de un informe de progreso de pruebas?",
      options: [
        "a. Solo los testers hasta que el software esté listo para ser lanzado",
        "b. La gerencia, pero solo si hay un problema que necesitan resolver",
        "c. Todos los interesados que tengan una necesidad y/o interés en las pruebas",
        "d. Nadie; esta información solo debería ser rastreada en un panel de control accesible a los miembros del equipo técnico"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Has encontrado que el TAS requiere diferentes componentes dependiendo del entorno de despliegue. Esto incluye elementos como URLs diferentes, diferentes datos de prueba y el uso de mocks y stubs. ¿Qué deberías hacer para que el TAS se instale fácilmente en los diferentes entornos?",
      options: [
        "a. Asegurarte de que todos los componentes estén bajo gestión de configuraciones con un versionado claro y requisitos de entorno",
        "b. Crear un TAS diferente para cada entorno único y mantener cada uno de ellos como entidades separadas para evitar problemas de despliegue",
        "c. Proporcionar a los desarrolladores enlaces a los diferentes entornos para que puedan desplegar el TAS por ti en los varios entornos haciendo los cambios necesarios durante el esfuerzo de despliegue",
        "d. Reducir el uso de diferentes entornos de prueba y en su lugar usar diferentes versiones del TAS para simular diferentes entornos"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un nuevo TAF y estás obteniendo algunos resultados interesantes. Cuando las pruebas se ejecutan bajo el TAF, son notablemente más lentas que cuando se ejecutan manualmente. Esto sucede desde el principio de la ejecución y se mantiene lento durante todo el proceso. ¿Cuál es una posible causa de este problema?",
      options: [
        "a. No hay suficiente registro, se debería agregar más para una mejor solución de problemas",
        "b. El SUT no está adecuadamente provisionado para el nivel de rendimiento adecuado",
        "c. Los datos utilizados por la automatización de pruebas están haciendo que las pruebas tarden demasiado y deberían reducirse en tamaño",
        "d. El TAF está afectando el rendimiento por alguna razón, puede que se necesite más información de tiempo, pero puede que ya haya demasiado registro ocurriendo"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "Has estado ejecutando un conjunto de 10 pruebas, pero estás obteniendo resultados inconsistentes de las pruebas. ¿Qué tipo de comportamiento 'correcto' está faltando?",
      options: [
        "a. Repetibilidad",
        "b. Intrusión",
        "c. Composición",
        "d. Visibilidad"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "¿Qué verificas cuando estás comprobando la completitud de un conjunto de automatización de pruebas?",
      options: [
        "a. Todas las pruebas pasan",
        "b. Aproximadamente el 10% de las pruebas fallan consistentemente",
        "c. Los datos de prueba son correctos y están disponibles",
        "d. Las pruebas son repetibles a través de diferentes versiones del SUT"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes opciones sería suficiente para determinar que una acción ha ocurrido realmente?",
      options: [
        "a. Agregar un usuario y verificar que el usuario ya no puede iniciar sesión",
        "b. Agregar un usuario y luego eliminar ese usuario",
        "c. Agregar un usuario, eliminar al usuario, agregar al usuario nuevamente",
        "d. Agregar un usuario y verificar en la base de datos que el usuario existe"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una ventaja de usar una herramienta de análisis estático?",
      options: [
        "a. El código se ejecutará más rápido",
        "b. El código tendrá un registro extenso",
        "c. Se le darán sugerencias al desarrollador para solucionar problemas",
        "d. La herramienta generará automáticamente informes de defectos para cualquier problema encontrado"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Estás teniendo fallos repetidos con la automatización cada vez que se lanza una nueva versión del SUT. Has realizado un análisis y descubierto que la mayoría de los problemas se deben a cambios en los elementos de respuesta de la API. ¿Cuál es un enfoque rentable y que ahorra tiempo que puedes implementar para abordar este problema?",
      options: [
        "a. Implementar mocks y stubs para los servicios que se llaman a través de las APIs y usarlos en tu automatización de pruebas",
        "b. Desarrollar tus propias APIs para llamar a los servicios y codificar tu automatización para usar tus propias APIs controladas",
        "c. Implementar contratos para las APIs y probar a través de los contratos",
        "d. Obtener una herramienta de validación de esquemas que verifique que las APIs cumplan con los requisitos"
      ],
      correctAnswer: 3, // La opción correcta es d)
      urlImage: " "
    },
    {
      "question": "Has estado revisando el conjunto de automatización de pruebas y has encontrado que al menos el 40% del código se reutiliza más de dos veces. ¿Qué deberías hacer para mejorar la mantenibilidad del conjunto de pruebas?",
      options: [
        "a. Eliminar el código duplicado",
        "b. Crear una biblioteca en el marco y almacenar el código común allí, luego actualizar los scripts individuales para llamar a los módulos de código de la biblioteca según sea necesario",
        "c. Ejecutar una validación de esquema para asegurar que el código sea preciso y que los datos se manejen correctamente",
        "d. Usar análisis estático para asegurar que el código reutilizado sea limpio y eficiente"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Tienes un conjunto de automatización de pruebas para una aplicación de atención médica. Esta aplicación se comunica con varios sistemas externos a través de APIs. Has encontrado que las APIs no necesariamente devuelven los códigos correctos cuando una solicitud se agota y estás descubriendo que tu automatización se queda atascada mientras verificas valores específicos. Además de reportar esto como un defecto, ¿qué deberías hacer para hacer tu automatización más robusta?",
      options: [
        "a. Asegurarte de que haya esperas y tiempos de espera codificados en tu automatización para evitar una espera eterna",
        "b. Dejar de probar ya que este es un defecto fundamental e invalida cualquier prueba adicional",
        "c. Terminar tu prueba cuando la espera exceda los cinco segundos, ya que este es un tiempo adecuado para una respuesta",
        "d. Esperar hasta que obtengas una respuesta porque continuar no tendría sentido para la prueba"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Tienes la necesidad de que tus scripts de automatización de pruebas revisen los registros del sistema SUT en busca de valores específicos. Actualmente, esa verificación está codificada en cada script porque cada script busca información diferente. ¿Cómo debería implementarse esto para reducir el mantenimiento?",
      options: [
        "a. Los registros deberían ser revisados manualmente porque eso será más flexible y no requerirá mantenimiento",
        "b. Los valores verificados deberían compilarse juntos para que la búsqueda siempre sea para todos los valores",
        "c. Se debería desarrollar una nueva función reutilizable que pueda aceptar valores de datos pasados desde el script de prueba, la cual buscará en el registro esos valores específicos",
        "d. Se debería desarrollar una función única para cada valor para que la función precisa pueda ser llamada por el script de prueba apropiado"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Uno de los ingenieros de automatización de pruebas ha construido una función para manejar componentes de la interfaz gráfica de usuario (GUI). Esta función toma el ID de control, el tipo de control y la acción como parámetros de entrada y luego ejecuta la acción en el control especificado. El TAE dice que todos los controles comunes (botones, casillas de verificación, cuadros de texto, listas desplegables, etc.) ya han sido añadidos, pero se pueden agregar más controles fácilmente a esta función. También señaló que estará disponible para cualquier script de automatización de pruebas que necesite acceder a un control particular. ¿Es este un buen enfoque?",
      options: [
        "a. No, es mejor que una función trate solo con un tipo de control a la vez, como una para botones y otra para listas desplegables",
        "b. No, esta función requerirá un mantenimiento considerable a medida que la GUI agregue más páginas",
        "c. Sí, este es un ejemplo de una buena práctica que pondrá código común en una función que puede ser mantenida en un solo lugar pero utilizada por muchos scripts de automatización de pruebas",
        "d. Sí, esta función será fácil de extender a medida que se agreguen más botones individuales, listas desplegables y cuadros de texto a la GUI, asumiendo que todos se comportarán de manera esperada para su tipo de control"
      ],
      correctAnswer: 2, // La opción correcta es c)
      urlImage: " "
    },
    {
      "question": "Se te ha pedido que desarrolles automatización de pruebas para un sistema que no tiene requisitos documentados ni casos de prueba existentes. Tienes acceso a los usuarios del negocio del sistema. ¿Cómo podría usarse la automatización de pruebas para ayudarte a determinar qué necesitas automatizar?",
      options: [
        "a. Los usuarios del negocio podrían usar la capacidad de grabar/reproducir para registrar lo que hacen, y luego podrías usar esas grabaciones como ejemplos para desarrollar código de automatización de pruebas mantenible.",
        "b. Podrías usar las herramientas para preparar datos de prueba para los usuarios.",
        "c. Se podría usar un script de automatización de pruebas para configurar el entorno de prueba.",
        "d. Los desarrolladores podrían usar el TAS para definir su solución y podrían implementar su código en el TAF, lo que te permitiría desarrollar la solución de automatización de pruebas a partir del código fuente del SUT."
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
    },
    {
      "question": "Estás reescribiendo un TAS para adaptarlo a los cambios realizados en el SUT. Has descubierto que el ingeniero de automatización de pruebas que escribió la mayoría de los scripts de prueba utilizó una herramienta de grabación/reproducción para encontrar todos los componentes de la interfaz de usuario en cada página que se iba a probar. Los objetos se referenciaron directamente desde los scripts que utilizaban los componentes. Notaste este problema cuando necesitaste actualizar los scripts de automatización de pruebas porque los botones de radio de `género` tenían que cambiarse a una lista desplegable. Esto requirió cambios en múltiples páginas para esta aplicación web. ¿Qué enfoque de diseño debería haber utilizado el ingeniero de automatización de pruebas anterior para hacer que este código sea más mantenible?",
      options: [
        "a. Patrón de modelo de flujo",
        "b. Patrón de objeto de página",
        "c. Principios SOLID",
        "d. Principios de programación orientada a objetos"
      ],
      correctAnswer: 1, // La opción correcta es b)
      urlImage: " "
    },
    {
      "question": "Actualmente estás utilizando un enfoque de modelo de objeto de página para la automatización de pruebas de una aplicación de banca móvil. Esto ha ayudado significativamente al esfuerzo de mantenimiento, pero todavía estás dedicando tiempo a arreglar scripts que cubren transacciones de usuario comunes como inicio de sesión y ver saldo de cuenta. ¿Cuál sería el mejor enfoque de diseño para reducir el tiempo que estás dedicando a codificar flujos de trabajo transaccionales?",
      options: [
        "a. Patrón de modelo de flujo",
        "b. Patrón de objeto de página",
        "c. Principios SOLID",
        "d. Principios de programación orientada a objetos"
      ],
      correctAnswer: 0, // La opción correcta es a)
      urlImage: " "
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
