const data_es = {
  questions: [
    {
      "question": "¿Qué tipos de pruebas son particularmente importantes para aplicaciones IoT o móviles basadas en las expectativas del usuario?",
      options: [
        "Adecuación y Precisión",
        "Usabilidad y Rendimiento",
        "Portabilidad y Usabilidad",
        "Rendimiento y Seguridad"
      ],
      correctAnswer: 1, // Usabilidad y rendimiento son clave para experiencia del usuario
      urlImage: ""
    },
    {
      "question": "Si una aplicación reside en el dispositivo móvil y fue escrita específicamente para ese dispositivo, ¿qué tipo de aplicación es?",
      options: [
        "Basada en web",
        "Híbrida",
        "Nativa",
        "Específica del dispositivo"
      ],
      correctAnswer: 2, // Aplicación nativa
      urlImage: ""
    },
    {
      "question": "Estás probando una aplicación para un teléfono inteligente. Has determinado que solo necesitas probar un dispositivo de la familia objetivo porque el comportamiento será el mismo en todos. ¿Esto es un ejemplo de qué técnica de diseño de pruebas?",
      options: [
        "Análisis de valores límite",
        "Combinatoria",
        "Tablas de decisión",
        "Partición de equivalencia"
      ],
      correctAnswer: 3, // Partición de equivalencia
      urlImage: ""
    },
    {
      "question": "Si estás probando una aplicación móvil que no es crítica para la seguridad, ¿cuál modelo de ciclo de vida es el más probable que se utilice?",
      options: [
        "Modelo V",
        "Modelo en cascada (Waterfall)",
        "Modelo móvil",
        "Modelo iterativo"
      ],
      correctAnswer: 3, // Modelo iterativo: adecuado para desarrollo ágil y rápido
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes documentos de requisitos sería la mejor fuente para determinar escenarios de uso normales?",
      options: [
        "Especificación de requisitos",
        "Casos de uso",
        "Historias de usuario",
        "Requisitos de usabilidad"
      ],
      correctAnswer: 1, // Casos de uso: definen escenarios normales de interacción
      urlImage: ""
    },
    {
      "question": "En un proyecto con muchas funcionalidades pero poco tiempo, ¿cuál es el enfoque más razonable para el análisis de riesgos?",
      options: [
        "Realizar un análisis de riesgos completo, incluyendo probabilidades y niveles de impacto para cada ítem",
        "Usar un enfoque liviano y asignar importancia relativa a cada ítem identificado",
        "Omitir el análisis de riesgos y proceder con las pruebas basadas en la experiencia",
        "Concentrarse en las capacidades funcionales y descartar las capacidades físicas del dispositivo ya que estas deberían ser probadas por el fabricante"
      ],
      correctAnswer: 1, // Enfoque liviano: adecuado para proyectos con recursos limitados
      urlImage: ""
    },
    {
      "question": "Estás probando una aplicación de banca móvil. ¿Es importante probar la interacción entre el software y el dispositivo?",
      options: [
        "No, no es necesario extender las pruebas funcionales para cubrir la interacción con el dispositivo.",
        "Sí, porque el usuario interactúa con la app a través del dispositivo físico y la app interactúa con Internet.",
        "No, si la aplicación es nativa, no se necesita probar la interacción porque es portátil entre distintos dispositivos.",
        "Sí, cada funcionalidad del dispositivo debe probarse para verificar su interacción con la app."
      ],
      correctAnswer: 1, // opción b: interacción real entre usuario y app ocurre vía dispositivo físico
      urlImage: ""
    },
    {
      "question": "Estás probando una aplicación nativa para smartphone que permite al usuario crear hasta tres listas de compras, cada una con un máximo de 50 elementos.\n¿Cuál de los siguientes conjuntos de condiciones de prueba representa la cobertura MÍNIMA para lograr 100% usando la técnica de análisis de valores límite?",
      options: [
        "Lista con 47 elementos",
        "Lista con 0 elementos, lista con 1 elemento, lista con 50 elementos, lista con 51 elementos, 0 listas guardadas, 1 lista guardada, 3 listas guardadas, 4 listas guardadas",
        "Lista con 0 elementos, lista con 25 elementos, lista con 51 elementos, 3 listas guardadas",
        "Lista con 0 elementos, lista con 12 elementos, lista con 58 elementos, 0 listas guardadas, 3 listas guardadas, 7 listas guardadas"
      ],
      correctAnswer: 1, // opción b: cubre los valores límite inferiores, válidos y fuera de rango para ítems y listas
      urlImage: ""
    },
    {
      "question": "¿La 'corrección' puede definirse como la combinación de cuáles dos características de calidad?",
      options: [
        "Adecuación y precisión",
        "Usabilidad y rendimiento",
        "Portabilidad e interoperabilidad",
        "Seguridad y usabilidad"
      ],
      correctAnswer: 0, // Adecuación y precisión = definición estándar de 'correctness'
      urlImage: ""
    },
    {
      "question": "Al realizar pruebas de seguridad en una aplicación IoT o móvil, ¿cuáles son las áreas básicas correctas que deben cubrirse?",
      options: [
        "Acceso, protección de datos, documentación",
        "Código, funcionalidad, documentación, política de seguridad",
        "Creación de datos, almacenamiento de datos, transferencia de datos",
        "Acceso, almacenamiento de datos, transferencia de datos, política de seguridad"
      ],
      correctAnswer: 3, // Áreas clave: acceso, almacenamiento, transferencia, política
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes tipos de pruebas podría considerar la edad del usuario?",
      options: [
        "Pruebas basadas en escenarios",
        "Pruebas de casos de uso",
        "Pruebas basadas en historias de usuario",
        "Pruebas basadas en personas (personas-based)"
      ],
      correctAnswer: 3, // Persona-based testing ajusta pruebas al perfil demográfico
      urlImage: ""
    },
    {
      "question": "Si tu aplicación solo puede usarse dentro de un país específico, ¿qué característica del dispositivo puede proporcionar la información necesaria para que la app determine esto?",
      options: [
        "Geolocalización",
        "Telefonía",
        "Magnetómetro",
        "Altímetro"
      ],
      correctAnswer: 0, // Geolocalización = opción correcta para determinar ubicación nacional
      urlImage: ""
    },
    {
      "question": "Tu empresa ha creado una aplicación para resolver crucigramas. Los usuarios objetivo son mayores de 65 años. Ya se ha trabajado en crear pantallas fáciles de navegar e intuitivas. La visualización se ha implementado con una función de aumento revolucionaria usando una lupa sobre la pantalla. Sin embargo, los testers beta siguen teniendo problemas al ingresar las letras en los cuadros.\n¿Dado esto, qué área deberías priorizar para hacer pruebas más completas?",
      options: [
        "Simplicidad",
        "Diseño (Layout)",
        "Intuitividad",
        "Navegación"
      ],
      correctAnswer: 1, // Layout: distribución visual puede dificultar la entrada de datos
      urlImage: ""
    },
    {
      "question": "Estás planificando pruebas de rendimiento para una nueva aplicación. Te han proporcionado un conjunto de 'personas' para utilizar durante estas pruebas.\n¿Cómo deberías aplicar las personas en el enfoque de pruebas de rendimiento?",
      options: [
        "Las personas deben ser duplicadas por herramientas automatizadas para crear usuarios virtuales que generen una carga realista en el sistema.",
        "Las personas deben ser revisadas para entender las tareas individuales que realizan. Estas tareas pueden ser luego escritas como scripts y ejecutadas en conjuntos.",
        "Las personas se utilizan principalmente para pruebas de usabilidad y no deben emplearse como guía para pruebas de rendimiento.",
        "Las personas deben usarse para derivar casos de uso que luego puedan descomponerse en historias de usuario y convertirse en scripts de pruebas de rendimiento."
      ],
      correctAnswer: 0, // Los usuarios virtuales simulan comportamientos reales derivados de personas
      urlImage: ""
    },
    {
      "question": "Si estás probando cuánta batería consume tu aplicación, ¿qué estás probando?",
      options: [
        "Finalización de tareas",
        "Retrasos",
        "Retrasos en la interfaz de usuario",
        "Uso de recursos"
      ],
      correctAnswer: 3, // Consumo de batería = medición de uso de recursos
      urlImage: ""
    },
    {
      "question": "Has estado realizando pruebas de rendimiento de tu aplicación móvil usando un simulador. ¿Por qué necesitarías hacer algunas pruebas en un dispositivo real?",
      options: [
        "Porque un simulador no es una réplica exacta del dispositivo real y puede arrojar resultados de rendimiento distintos.",
        "Porque no es posible probar completamente un simulador para asegurarse de que funcione correctamente.",
        "Porque los simuladores no pueden clonarse para generar suficientes dispositivos que creen una carga realista.",
        "Porque los simuladores no pueden ejecutar aplicaciones concurrentes."
      ],
      correctAnswer: 0, // El simulador puede diferir del rendimiento real
      urlImage: ""
    },
    {
      "question": "Si una herramienta puede simular cómo respondería un dispositivo específico a una aplicación, ¿qué tipo de simulador se considera?",
      options: [
        "Simulador híbrido",
        "Simulador de dispositivo nativo",
        "Simulador de aplicación basada en la web",
        "Simulador de aplicación basada en navegador"
      ],
      correctAnswer: 1, // Simulador de dispositivo nativo = comportamiento específico del hardware
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes es una herramienta genérica útil para un proyecto de pruebas de aplicaciones IoT o móviles?",
      options: [
        "Un simulador",
        "Un emulador",
        "Un sistema de seguimiento de defectos",
        "Una herramienta de pruebas de rendimiento"
      ],
      correctAnswer: 2, // Herramienta de pruebas de rendimiento = análisis transversal de carga y respuesta
      urlImage: ""
    },
    {
      "question": "¿De qué manera un dispositivo móvil puede proporcionar datos directamente a una aplicación móvil?",
      options: [
        "Proporcionando información de ubicación mediante su capacidad de geolocalización.",
        "Recopilando entradas del usuario.",
        "Comunicándose con un sistema backend.",
        "Conectándose a otro dispositivo."
      ],
      correctAnswer: 0, // Geolocalización como fuente directa de datos desde el dispositivo
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre una aplicación basada en navegador?",
      options: [
        "Está diseñada para ejercer capacidades específicas de un dispositivo.",
        "Se ejecuta en el dispositivo.",
        "Es portátil para cualquier dispositivo que pueda ejecutar el navegador compatible.",
        "Generalmente es más rápida que una aplicación nativa."
      ],
      correctAnswer: 2, // Portabilidad con navegadores compatibles
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes es una razón válida para usar simuladores en pruebas?",
      options: [
        "Los simuladores ofrecen un rendimiento más preciso que los dispositivos reales.",
        "Los dispositivos reales pueden ser difíciles y costosos de adquirir en grandes cantidades.",
        "Los simuladores pueden interactuar con los usuarios para ofrecer retroalimentación sobre usabilidad.",
        "Los dispositivos reales pueden configurarse rápidamente para ofrecer nuevos escenarios de prueba."
      ],
      correctAnswer: 1, // Costo y logística hacen del simulador una opción viable para pruebas masivas
      urlImage: ""
    },
    {
      "question": "Eres responsable de las pruebas de rendimiento para una nueva aplicación móvil híbrida que se ejecutará en teléfonos inteligentes. La aplicación utilizará la capacidad GPS del teléfono para determinar la altitud del mismo. La información de altitud se envía a la aplicación, que luego contacta a un servidor web para calcular el 'límite seguro' para el consumo de alcohol. El 'límite seguro' se muestra al usuario. El dispositivo ya ha sido probado para su uso a gran altitud, por lo que eso no es una preocupación para esta prueba. Se espera que el mayor uso del sistema sea en la víspera de Año Nuevo, cuando muchas personas están esquiando a gran altitud y necesitarán verificar su límite seguro. Para el primer año de uso, se espera que 5,000 usuarios concurrentes utilicen la aplicación en esa única noche. Dada esta información, ¿cuál es el mejor enfoque para realizar la prueba de rendimiento?",
      options: [
        "Clonar simuladores para crear 5,000 usuarios y realizar la prueba con ellos.",
        "Clonar emuladores para crear 5,000 usuarios y realizar la prueba usando los emuladores.",
        "Usar una combinación de simuladores y emuladores para obtener resultados más realistas.",
        "Usar crowd-sourcing y usuarios reales para obtener resultados precisos desde dispositivos reales."
      ],
      correctAnswer: 0, // Mezcla de simuladores y emuladores: balance de eficiencia y realismo
      urlImage: ""
    },
    {
      "question": "¿Qué capacidad de la nube es MÁS beneficiosa para las pruebas de rendimiento?",
      options: [
        "Soportar una variedad de tipos de red",
        "Soportar una variedad de protocolos",
        "Soportar una variedad de tipos de dispositivos",
        "Soportar una variedad de cantidades de dispositivos y usos"
      ],
      correctAnswer: 3, // Variedad en cantidad y patrones de uso: clave en pruebas de carga
      urlImage: ""
    },
    {
      "question": "Estás probando una aplicación que permitirá a los usuarios escanear el código de barras de una etiqueta de envío de paquete y luego recibir correos electrónicos del remitente del paquete a medida que este avanza a través de las diversas etapas de su entrega (por ejemplo, recogida, recepción en el procesamiento central, enrutamiento, entrega). Si se solicita, el usuario también puede recibir una imagen de la firma del destinatario del paquete. Esta es una aplicación basada en navegador web. Se espera que esta aplicación tenga un amplio uso en un gran conjunto de dispositivos y redes con velocidades y fiabilidad variables. Tu empresa tiene varios competidores que están trabajando en productos similares, aunque el producto de tu empresa tiene algunas innovaciones nuevas y una interfaz de usuario muy atractiva. Como resultado, una vez que se lance, tu empresa espera captar la mayor parte del mercado. Dada esta información, ¿cuál sería el mejor enfoque para realizar tus pruebas para asegurar que se evalúen las capacidades del producto así como la variedad de entornos y redes?",
      options: [
        "Usar un laboratorio de dispositivos remoto proporcionado por un fabricante de dispositivos para asegurar que tu aplicación funcione en toda la familia de dispositivos.",
        "Usar crowdsourcing para obtener la distribución más amplia de ubicaciones y tipos de dispositivos con un costo mínimo.",
        "Usar un conjunto de simuladores que puedan simular las diversas capacidades de una amplia variedad de dispositivos.",
        "Usar un entorno de prueba virtual basado en la nube para simular varios dispositivos y redes."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "¿De qué manera puede un refrigerador formar parte del Internet de las Cosas (IoT)?",
      options: [
        "Permitiendo el ajuste manual de la temperatura",
        "Proporcionando una función de encendido y apagado controlada por un interruptor físico",
        "Subiendo y descargando información desde y hacia Internet",
        "Proporcionando una función requerida para los humanos"
      ],
      correctAnswer: 2, // Subida y descarga de datos con la nube
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes escenarios tiene mayor probabilidad de representar un riesgo de seguridad?",
      options: [
        "Un refrigerador que depende de WiFi dentro del hogar",
        "Una aplicación de smartphone usada en una oficina empresarial",
        "Una aplicación en tablet que se usa para cargar y descargar información de pacientes mientras enfermeros móviles visitan sus casas",
        "Una aplicación en tablet usada por enfermeros en un hospital para manejar información de pacientes"
      ],
      correctAnswer: 2, // Riesgo de exposición fuera de entornos controlados
      urlImage: ""
    },
    {
      "question": "Recibes un mensaje en tu teléfono desde una app que recibe datos de sensores de tu refrigerador. El mensaje indica que la temperatura está elevada y podría haber una falla en el sistema de enfriamiento.\n¿Esto es un ejemplo de qué?",
      options: [
        "Es un ejemplo de un beneficio del IoT",
        "Es un ejemplo de un riesgo del IoT",
        "Es un ejemplo de un riesgo de seguridad en la aplicación",
        "Es un ejemplo de un riesgo de fiabilidad en la aplicación"
      ],
      correctAnswer: 0, // Notificación proactiva: ventaja del IoT
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes es un ejemplo de un electrodoméstico inteligente?",
      options: [
        "Un refrigerador que detecta que el suministro de leche es bajo y muestra un mensaje en el panel frontal de la puerta.",
        "Un auto que enciende un indicador cuando la temperatura es demasiado alta.",
        "Un sistema de seguridad en el hogar que activa una alarma cuando se detecta una intrusión.",
        "Un sensor en el collar de un perro que puede detectar y reportar a una aplicación cuando el perro cruza una valla invisible."
      ],
      correctAnswer: 3, // Refrigerador con lógica de monitoreo y respuesta localizada
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes es un ejemplo de un dispositivo 'wearable' (vestible)?",
      options: [
        "Un anillo que detecta cuándo se enciende un cigarrillo y lo reporta a una aplicación en línea.",
        "Un par de gafas que cambian automáticamente el tono de acuerdo a la luz.",
        "Una rodilla protésica.",
        "Un par de guantes que son impermeables y aislantes."
      ],
      correctAnswer: 0, // Wearables con recolección de datos y comunicación digital
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes es un ejemplo de un sistema conectado?",
      options: [
        "Un sistema con sensores que detectan impactos y pueden contactar autoridades de emergencia si ocurre un accidente.",
        "El sistema de frenos antibloqueo (ABS) que detecta derrapes y ajusta el frenado.",
        "Un sistema de estacionamiento asistido que controla el coche para realizar la maniobra.",
        "Un sistema de sensores que determina si un coche está siguiendo demasiado cerca y reduce la velocidad para mantener la distancia segura."
      ],
      correctAnswer: 0, // Capacidad de conectarse con servicios externos: definición de sistema conectado
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes debería considerarse parte del Internet Industrial de las Cosas (IIoT)?",
      options: [
        "Una aplicación de medición inteligente para una empresa de energía",
        "Un auto autónomo",
        "Un sistema de seguridad para el hogar",
        "Un teléfono inteligente"
      ],
      correctAnswer: 0, // Soluciones industriales conectadas como medidores inteligentes = IIoT
      urlImage: ""
    },
    {
      "question": "¿Qué está impulsando la tendencia de mantener los datos en dispositivos locales o redes locales?",
      options: [
        "Los datos están creciendo demasiado como para transmitirse de manera eficiente",
        "El flujo de datos es demasiado rápido para que lo manejen la mayoría de las redes",
        "Los requisitos de tiempo de respuesta son cada vez más difíciles de cumplir en redes públicas",
        "Los datos tienen una necesidad más alta de seguridad, como imágenes de retina para acceder a sitios seguros"
      ],
      correctAnswer: 3, // Requisitos de respuesta ultra rápida = impulso hacia el procesamiento local
      urlImage: ""
    },
    {
      "question": "Para un protocolo IoT como MQTT, ¿cuál es la expectativa sobre el tipo de red compatible?",
      options: [
        "Solo Wi-Fi",
        "Solo red celular",
        "Solo 4G o 5G",
        "Cualquier tipo de red"
      ],
      correctAnswer: 3, // MQTT debe ser agnóstico de red para entornos IoT diversos
      urlImage: ""
    },
    {
      "question": "Para dispositivos IoT, ¿cuál de las siguientes opciones ayuda a reducir la necesidad de transmitir grandes cantidades de datos a la nube antes de procesarlos?",
      options: [
        "Procesamiento positivo",
        "Computación en el borde (Edge computing)",
        "Salto de rana",
        "Servicio en la nube"
      ],
      correctAnswer: 1, // Edge computing permite procesar datos localmente antes de enviarlos
      urlImage: ""
    },
    {
      "question": "Estás colaborando con una empresa que desarrolla un monitor de ritmo cardíaco vestible. Este monitor se usará para rastrear el ritmo cardíaco de corredores olímpicos durante el día, incluidas sus sesiones de entrenamiento. La información recolectada será subida a un servicio web que procesará los datos y generará informes. La carga de datos se realizará por la noche usando la red celular mientras el corredor duerme. Eres responsable de probar el monitor y su capacidad para subir datos al servicio web.\n¿Debería usarse pruebas sin interfaz (headless testing) para este monitor?",
      options: [
        "Sí, debería combinarse con pruebas de usabilidad para tener mejor cobertura sobre la interfaz",
        "Sí, debería utilizarse como base para las pruebas ya que no hay UI disponible para las pruebas",
        "No, no es necesario porque se puede verificar la precisión de los datos mediante la aplicación que los recibe",
        "No, las pruebas sin UI no permiten medir el rendimiento y eso es crítico para este dispositivo"
      ],
      correctAnswer: 1, // Headless testing: ideal cuando no hay interfaz visible en el dispositivo
      urlImage: ""
    },
    {
      "question": "Estás probando un dispositivo IoT que se comunica vía APIs con un servicio web a través de Internet. Te preocupa probar la capacidad de recuperación de errores de las APIs, especialmente cuando se pierden las conexiones.\n¿Cuál de las siguientes herramientas es la MÁS adecuada para este tipo de pruebas?",
      options: [
        "Wireshark",
        "Grasshopper",
        "Locust",
        "SoapUI"
      ],
      correctAnswer: 3, // SoapUI permite simular errores y evaluar recuperación de APIs
      urlImage: ""
    },
    {
      "question": "¿Cuál es la expectativa para las capacidades de los dispositivos en el futuro?",
      options: [
        "Disminuirán a medida que los dispositivos se hagan más pequeños",
        "Aumentarán conforme aumente la demanda",
        "Se mantendrán igual",
        "Permanecerán casi iguales pero se expandirán a una mayor variedad de dispositivos"
      ],
      correctAnswer: 1, // La demanda impulsa mejoras en capacidades
      urlImage: ""
    },
    {
      "question": "Al construir un framework de pruebas flexible, ¿cómo afecta el ciclo de vida corto del producto al enfoque de pruebas y decisiones sobre herramientas?",
      options: [
        "El framework debe soportar mantenimiento a largo plazo",
        "El framework debe utilizar herramientas estables y confiables de proveedores reconocidos",
        "El framework debe ofrecer buen retorno de inversión (ROI)",
        "El framework debe basarse en un análisis de riesgos formal"
      ],
      correctAnswer: 2, // ROI es clave cuando el producto tiene ciclo de vida corto
      urlImage: ""
    },
    {
      "question": "Tu organización ha contratado recientemente a un arquitecto de automatización de pruebas que trabajaba en software médico con requerimientos regulatorios estrictos. Su framework de automatización es muy sólido y permite construir casos de prueba mantenibles y basados en datos. Sin embargo, su elección de herramienta es muy costosa y puede no ser suficientemente flexible para tu entorno, especialmente considerando que las apps móviles o IoT que desarrolla tu empresa tienen ciclos de vida de solo seis meses antes de ser modificadas. El ciclo de desarrollo es iterativo y el equipo usa integración continua para entregar software testeable con mayor rapidez.\nDado esta información, ¿qué enfoque de pruebas deberías recomendar?",
      options: [
        "Buscar otras herramientas más adecuadas para el entorno móvil o IoT, y considerar automatización con pruebas basadas en palabras clave en lugar de pruebas basadas en datos.",
        "Usar el framework comprobado y buscar una alta cobertura para garantizar buena reutilización.",
        "Omitir la automatización y optar por crowd-sourcing para obtener muchas pruebas en poco tiempo. La repetibilidad de pruebas no es un problema con este software.",
        "Usar automatización para pruebas de rendimiento y realizar las pruebas funcionales de forma manual, considerando que el producto tiene una vida útil corta."
      ],
      correctAnswer: 0, // La opción más estratégica y flexible para apps de ciclo corto
      urlImage: ""
    },
    {
      "question": "¿Qué tipo de metodologías de prueba deberían buscar los testers de aplicaciones móviles o de IoT?",
      options: [
        "Más ágiles y eficientes",
        "Más rápidas y confiables",
        "Seguras y más utilizables",
        "Más documentadas y repetibles"
      ],
      correctAnswer: 0, // Más ágiles y eficientes = clave para entornos de desarrollo iterativo
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
     "nameQuiz": "IoT and Mobile Application Testing"
  }
}
window.data_es = data_es;
