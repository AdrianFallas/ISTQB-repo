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
    },

    // inicio examen 2
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
    "errorLoading": "Error al cargar el cuestionario. Por favor, intenta de nuevo más tarde.",
    "nameQuiz": "Test Automation Engineering Advanced - Example 1"
  }
}
window.data_es = data_es;
