const data_es = {
  questions: [
    {
      "question": "Eres el especialista de calidad en un equipo de desarrollo de aplicaciones móviles. ¿Para cuál de las siguientes actividades se utilizarían los datos de analítica móvil dentro de la estrategia o el plan de pruebas?",
      options: [
        "Definir la base de usuarios esperada de la aplicación.",
        "Derivar niveles de prueba, casos de prueba y datos de prueba.",
        "Seleccionar el portafolio de dispositivos y priorización para la ejecución de pruebas.",
        "Seleccionar el tipo de aplicación y modelo de desarrollo a seguir."
      ],
      correctAnswer: 2, // Selección de dispositivos y prioridades de prueba
      urlImage: ""
    },
    {
      "question": "Tu equipo está desarrollando una aplicación gratuita que recopila noticias públicas de fuentes seleccionadas por el usuario, para que tenga un solo lugar donde leer toda su información favorita.\nSegún esta información, ¿cuál de los siguientes modelos de negocio es el MÁS apropiado?",
      options: [
        "Aplicación freemium.",
        "Aplicación basada en publicidad.",
        "Aplicación de pago.",
        "Aplicación basada en transacciones."
      ],
      correctAnswer: 1, // Modelo basado en publicidad
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es verdadera para los teléfonos básicos?",
      options: [
        "Los teléfonos básicos ofrecen un soporte limitado para la instalación de aplicaciones.",
        "Los teléfonos básicos son similares a los teléfonos inteligentes, pero más grandes.",
        "Los teléfonos básicos son la próxima generación de teléfonos inteligentes, con funcionalidad extendida.",
        "Los teléfonos básicos tienen cámaras, GPS y otros sensores integrados."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Tu equipo desarrolla un juego para Android que utiliza muchas funcionalidades del dispositivo, como cámara, GPS y orientación.\n¿Cuál de los siguientes tipos de aplicación es el MÁS adecuado si es esencial el uso preciso de funciones específicas del dispositivo?",
      options: [
        "Aplicación híbrida.",
        "Aplicación web móvil.",
        "Aplicación nativa.",
        "Aplicación de escritorio."
      ],
      correctAnswer: 2, // Aplicación nativa
      urlImage: ""
    },
    {
      "question": "Tu equipo desarrolla una aplicación para iOS que se utiliza para registrar usuarios, sus correos electrónicos y direcciones físicas. Los datos se transfieren a un servidor y los usuarios registrados reciben muestras de productos físicos enviadas por correo convencional.\n¿Cuáles de las siguientes decisiones arquitectónicas son las DOS MÁS apropiadas para esta app?",
      options: [
        "Siempre conectado (Always Connected)",
        "Aplicación nativa (Native app)",
        "Almacenar y reenviar (Store and forward)",
        "Datos celulares (Cellular data)",
        "Aplicación web (Web app)"
      ],
      correctAnswer: [1, 2], // Native app y Store and Forward
      urlImage: ""
    },
    {
      "question": "Tus datos de analítica indican que todos tus usuarios utilizan iPhone.\n¿Cuál de las siguientes decisiones es la MÁS adecuada para tu estrategia de pruebas si se trata de una aplicación de bajo riesgo?",
      options: [
        "Usar servicio de acceso remoto a dispositivos.",
        "Usar estrategia de plataforma única.",
        "Usar estrategia de cobertura máxima.",
        "Usar solo simuladores de iOS."
      ],
      correctAnswer: 1, // Plataforma única
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes NO es un desafío al probar aplicaciones móviles?",
      options: [
        "Parámetros de comando desconocidos al iniciar la aplicación que alteran su comportamiento.",
        "Usuarios y grupos de usuarios diversos.",
        "Múltiples tipos de red y proveedores de red.",
        "No disponibilidad de dispositivos recién lanzados que obliga al uso de emuladores/simuladores."
      ],
      correctAnswer: 0, // Parámetros desconocidos de inicio
      urlImage: ""
    },
    {
      "question": "Una empresa ha decidido usar pruebas mediante pruebas colaborativas.\n¿Cuál de los siguientes riesgos se mitiga con esta decisión?",
      options: [
        "No disponibilidad de actores clave durante el desarrollo.",
        "Costo de soporte para múltiples plataformas.",
        "No disponibilidad de dispositivos importantes durante las pruebas.",
        "Buenas reseñas en la tienda de aplicaciones del proveedor de la plataforma."
      ],
      correctAnswer: 2, // Acceso a dispositivos variados vía crowdtesting
      urlImage: ""
    },
    {
      "question": "Cuando se prueba una aplicación nativa que utiliza diferentes funciones del dispositivo, ¿cuál de los siguientes dispositivos de hardware es el MENOS necesario enfocar durante las pruebas?",
      options: [
        "Módulo WLAN",
        "Altavoces integrados",
        "Cámara integrada",
        "Acceso a auriculares"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes NO es un efecto potencial del sobrecalentamiento de un dispositivo móvil durante las pruebas?",
      options: [
        "La aplicación se vuelve lenta",
        "Las funcionalidades de la aplicación dejan de funcionar",
        "Desinstalación de la app",
        "Funcionamiento incorrecto de las aplicaciones"
      ],
      correctAnswer: 2, // La desinstalación no ocurre automáticamente
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones NO es un escenario válido para probar un dispositivo móvil en relación con sensores de entrada?",
      options: [
        "Verificar la calidad de la señal GPS recibida",
        "Probar la funcionalidad correcta del giroscopio",
        "Validar los datos proporcionados por el sensor de movimiento",
        "Tamaño correcto de pantalla en modos vertical y horizontal"
      ],
      correctAnswer: 3, // Pantalla no es sensor de entrada
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones contiene pruebas que SOLO están relacionadas con distintos métodos de entrada?",
      options: [
        "Deslizar para cambiar de pantalla, doble toque en un botón, escanear un código QR, grabar audio",
        "Tomar una foto con la cámara, usar un teclado virtual, imprimir el contenido de una pantalla, usar coordenadas GPS",
        "Arrastrar un objeto en la pantalla, abrir otra aplicación, capturar imágenes, enviar un SMS a un amigo",
        "Mostrar datos de geolocalización, realizar mediciones de distancia, usar una app de control remoto, capturar videos de internet"
      ],
      correctAnswer: 0, // Solo la opción A contiene métodos de entrada directos
      urlImage: ""
    },
    {
      "question": "Trabajas como tester móvil para una empresa que desarrolla una app de navegación. Uno de los requisitos es que la app funcione en modos vertical y horizontal manteniendo las mismas funciones de forma precisa.\n¿Cuáles de los siguientes aspectos son los MEJORES a considerar para verificar el funcionamiento correcto al cambiar la orientación de la pantalla?",
      options: [
        "Sensor de movimiento, problemas de seguridad, precisión de los datos de salida",
        "Problemas de usabilidad, retención de datos de entrada, mantenimiento del estado actual",
        "Varias transiciones en orientación de pantalla, problemas de rendimiento, funcionalidades de la interfaz de usuario",
        "Interrupciones de WLAN, problemas de renderizado en la interfaz gráfica, pérdida de datos ingresados"
      ],
      correctAnswer: 1, // Usabilidad, retención de estado y datos son clave al rotar pantalla
      urlImage: ""
    },
    {
      "question": `Trabajas como gestor de pruebas en un banco que está desarrollando una nueva versión de su software de banca en línea, el cual se realiza como una aplicación web. Durante la preparación de pruebas adecuadas, estás enfocándote en la tolerancia a fallos frente a interrupciones iniciadas por el usuario.\n¿Cuál de los siguientes escenarios de prueba elegirías como el MEJOR para este propósito?",
    
      "Mostrar advertencias de batería baja",
      "Configurar los dispositivos móviles en modo de espera",
      "Aceptar llamadas de voz entrantes",
      "Notificación de poca memoria",
      "Configurar el dispositivo en modo no molestar"`,
      options: [
        " i – ii – iii",
        "i – ii – iv",
        "ii – iii – iv",
        "ii – iii – v"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Una compañía de seguros de salud lanzó una versión actualizada de su app para clientes. La actualización incluye una función que escanea una factura de farmacia y la envía directamente a la aseguradora para el pago. Sin embargo, los clientes reportaron que al instalar la actualización, la cámara no podía activarse para escanear las facturas. El error fue reportado y corregido. Ahora se deben preparar nuevas pruebas y realizar re-pruebas.\n¿Cuál de las siguientes pruebas ejecutarías como la MÁS IMPORTANTE en este escenario?",
      options: [
        "Prueba de rendimiento",
        "Prueba de accesibilidad",
        "Prueba de permisos de acceso",
        "Prueba de instalación"
      ],
      correctAnswer: 2, // Prueba de permisos de acceso
      urlImage: ""
    },
    {
      "question": `Tu empresa ofrece una app de mensajería de noticias que incluye una función de notificación para mostrar noticias de última hora. Las notificaciones tienen enlaces profundos a las páginas relevantes de noticias. Algunos usuarios se quejaron recientemente de demoras en las notificaciones o que no se mostraban. El problema fue identificado y corregido. Como tester móvil, ¿qué pruebas funcionales realizarías para validar que la versión corregida funcione correctamente?",
    
      "Mostrar correctamente la notificación cuando la app está en segundo plano",
      "Ejecutar la aplicación con batería baja",
      "Probar el rendimiento de la app al mostrar la notificación",
      "Realizar pruebas de usabilidad relacionadas con la versión corregida",
      "Probar el enlace profundo a la página correcta de noticias"`,
      options: [
        "i – iv – v ",
        "i – ii – iv ",
        "i – ii – v ",
        "ii – iii – iv"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Tu empresa está desarrollando una nueva versión de una app híbrida para comparación de precios. Esta app contiene funcionalidades avanzadas en enlaces de acceso rápido. Como tester móvil, tu tarea es verificar que estos enlaces funcionen correctamente sin fallos.\n¿Cuál de los siguientes enfoques es el MEJOR?",
      options: [
        "Verificar el comportamiento correcto de la funcionalidad force-touch en una app iOS",
        "Asegurar la presencia de marcadores favoritos en Chrome móvil bajo Android",
        "Verificar que todas las teclas de hardware del dispositivo funcionen correctamente",
        "Utilizar una herramienta adecuada para identificar enlaces rotos en la app web móvil"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Estás probando una app nativa para iOS que utiliza varios sensores.\n¿Cuál de los siguientes tipos de prueba NO aplica?",
      options: [
        "Prueba de rendimiento",
        "Prueba de uso de funciones del dispositivo",
        "Prueba entre navegadores",
        "Prueba de compatibilidad entre dispositivos"
      ],
      correctAnswer: 2, // Cross-browser testing no aplica a apps nativas
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes es una prueba típica para evaluar la interoperabilidad con versiones del sistema operativo?",
      options: [
        "Pruebas de seguridad",
        "Pruebas de rendimiento",
        "Pruebas de estándares de accesibilidad",
        "Pruebas de compatibilidad con versiones anteriores"
      ],
      correctAnswer: 3, // Compatibilidad hacia atrás = interoperabilidad con versiones OS
      urlImage: ""
    },
    {
      "question": "¿Cuál es el objetivo PRINCIPAL al realizar pruebas de coexistencia de un sistema bajo prueba (SUT) con otras aplicaciones en el dispositivo?",
      options: [
        "Verificar que el SUT no dañe ningún dato del usuario",
        "Identificar problemas de seguridad existentes en el dispositivo",
        "Evaluar problemas de usabilidad en el SUT",
        "Comprobar si el SUT cumple con los estándares de accesibilidad"
      ],
      correctAnswer: 0, // Proteger datos del usuario es clave en coexistencia
      urlImage: ""
    },
    {
      "question": "Estás desarrollando un enfoque de pruebas de conectividad en distintos tipos de dispositivos móviles.\n¿Cuál de las siguientes opciones NO debería estar dentro del alcance de estas pruebas?",
      options: [
        "Cambiar de GSM a modo avión y volver a GSM",
        "Iniciar una transacción de pago mediante NFC",
        "Usar Bluetooth para emparejar con un dispositivo portátil",
        "Conectar un cable USB a una fuente de alimentación"
      ],
      correctAnswer: 3, // El suministro eléctrico no es parte de pruebas de conectividad
      urlImage: ""
    },
    {
      "question": "Se te ha asignado la tarea de realizar pruebas de instalación para una app Android.\n¿Cuál de las siguientes pruebas NO debería utilizarse?",
      options: [
        "Ejecutar App-Installer.exe",
        "Instalar conectando el dispositivo a una PC y ejecutando comandos",
        "Instalación desde el programa beta de Google Play",
        "Sideloading proporcionando el paquete de instalación en una tarjeta SD y ejecutando desde el sistema de archivos"
      ],
      correctAnswer: 0, // App-Installer.exe no es relevante para Android
      urlImage: ""
    },
    {
      "question": "¿Cuáles de las siguientes SON DOS problemas potenciales de seguridad en aplicaciones móviles?",
      options: [
        "Inyección de código a través de campos de entrada.",
        "Transferencia de datos sin cifrado.",
        "La app no responde después de una interrupción.",
        "Problemas de renderizado al cambiar la orientación del dispositivo.",
        "Superposición de elementos en pantalla en dispositivos pequeños."
      ],
      correctAnswer: [0, 1], // Inyección y datos sin cifrar son riesgos clave
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones se utilizaría más probablemente para realizar una prueba de rendimiento sobre el comportamiento temporal de una app?",
      options: [
        "Una versión instrumentada para obtener métricas cronométricas exactas.",
        "Un generador de carga para observar el comportamiento del servidor bajo carga intensa.",
        "Ejecutar la app en un emulador/simulador.",
        "Un dispositivo y un cronómetro para medir el rendimiento."
      ],
      correctAnswer: 0, // Instrumented build = análisis preciso del tiempo
      urlImage: ""
    },
    {
      "question": "Se te ha asignado realizar una prueba de usabilidad para una aplicación móvil. ¿Cuál de los siguientes pasos NO deberías realizar?",
      options: [
        "Pedir al gerente que ordene una sesión de laboratorio de usabilidad.",
        "Probar la app para verificar que cumple con las guías de interfaz de usuario de la plataforma.",
        "Activar la función de voz en el dispositivo.",
        "Conocer las expectativas de diseño y experiencia visual de la plataforma."
      ],
      correctAnswer: 2, // No se necesita pedir laboratorio como parte obligatoria
      urlImage: ""
    },
    {
      "question": "¿Qué significa el acrónimo \"CRUD\" en el contexto de pruebas de validación de datos?",
      options: [
        "Copiar, Renombrar, Actualizar, Eliminar.",
        "Crear, Leer, Deshacer, Eliminar.",
        "Crear, Leer, Actualizar, Eliminar.",
        "Crear, Leer, Deshacer, Desplegar."
      ],
      correctAnswer: 2, // Create, Read, Update, Delete: correcto en pruebas de datos
      urlImage: ""
    },
    {
      "question": "Estás realizando pruebas de internacionalización. Mientras ejecutas las pruebas, ves en parte cadenas pseudo y en parte cadenas en inglés. ¿Cuál de las siguientes es la causa más probable?",
      options: [
        "Faltan traducciones.",
        "Cadenas en inglés codificadas de forma rígida.",
        "Configuraciones de idioma incorrectas del dispositivo.",
        "Algo salió mal durante la construcción."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "¿Por qué deben realizarse pruebas de accesibilidad?",
      options: [
        "Para determinar si la app es usable por usuarios con diferentes necesidades.",
        "Porque lo requiere la W3C y los proveedores de plataformas.",
        "Para realizar pruebas completas de la aplicación.",
        "Porque existen casos de prueba genéricos que deben ejecutarse en todas las apps."
      ],
      correctAnswer: 0, // Usabilidad para diferentes perfiles de usuario es clave
      urlImage: ""
    },
    {
      "question": "Eres tester en un equipo que desarrolla una app móvil. El equipo ha terminado la versión actual y la ha lanzado a la tienda de aplicaciones. ¿Cuál es tu siguiente actividad?",
      options: [
        "Archivar artefactos de prueba.",
        "Realizar pruebas posteriores al lanzamiento.",
        "Pruebas de aprobación en tienda de apps.",
        "Cierre del ciclo de pruebas."
      ],
      correctAnswer: 1, // Post-release testing para validar comportamiento en producción
      urlImage: ""
    },
    {
      "question": "Eres nuevo en un equipo que realiza pruebas en apps móviles. Tu líder de equipo te pide que pruebes entradas por una hora, funciones por una hora, interrupciones por una hora, etc. ¿Qué está aplicando?",
      options: [
        "Gestión de pruebas basada en riesgos.",
        "Delegación de responsabilidades de su trabajo.",
        "Gestión de pruebas de rendimiento.",
        "Gestión de pruebas basada en sesiones."
      ],
      correctAnswer: 3, // Session-Based Test Management organiza pruebas por bloques temporales
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes es un método efectivo para pruebas de campo?",
      options: [
        "Usar recorridos como técnica de pruebas exploratorias.",
        "Usar un laboratorio interno de dispositivos para ejecutar pruebas en diferentes smartphones.",
        "Usar un enfoque basado en la nube.",
        "Usar una herramienta de prueba para ejecutar pruebas automatizadas en navegadores móviles."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Por qué es común que los proyectos de apps móviles inviertan la Pirámide de Pruebas?",
      options: [
        "Las pruebas unitarias son más complicadas en apps móviles. Por lo tanto, es conveniente tener pocas pruebas unitarias.",
        "Falta de herramientas para pruebas unitarias e integración en aplicaciones móviles.",
        "Las aplicaciones móviles son siempre monolíticas. Por lo tanto, todo se puede probar a nivel de sistema y no hay necesidad de pruebas en niveles inferiores.",
        "Las aplicaciones móviles requieren muchas pruebas manuales, como pruebas de usabilidad o pruebas de campo."
      ],
      correctAnswer: 3,
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es correcta sobre los entornos de desarrollo utilizados para desarrollar aplicaciones móviles?",
      options: [
        "Los desarrolladores de iOS usan Visual Studio IDE como su entorno de desarrollo.",
        "Los desarrolladores de Android usan Universal Studio IDE mientras que los de iOS usan Xcode como su entorno de desarrollo.",
        "Los desarrolladores de Android usan Xcode como su entorno de desarrollo.",
        "Los desarrolladores de iOS usan Xcode IDE como su entorno de desarrollo."
      ],
      correctAnswer: 3, // iOS = Xcode IDE
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes NO es una tarea que típicamente se pueda realizar usando un SDK (kit de desarrollo de software) para aplicaciones móviles?",
      options: [
        "Tomar capturas de pantalla.",
        "Diseñar casos de prueba.",
        "Enviar eventos aleatorios a la aplicación.",
        "Crear dispositivos virtuales."
      ],
      correctAnswer: 1, // El diseño de casos de prueba no es una función del SDK, sino del tester
      urlImage: ""
    },
    {
      "question": "Estás asignado como tester para una aplicación móvil con una arquitectura cliente-servidor. Para aprovechar mejor el equipo disponible, la empresa decide usar la PC del empleado sin que la aplicación esté conectada a un servidor real, con el fin de probar las características básicas en las primeras etapas de prueba. ¿Cuál de las siguientes arquitecturas recomendarías que el desarrollador de la aplicación Android debería usar en las primeras etapas de desarrollo para verificar la idoneidad funcional de las características básicas?",
      options: [
        "Tener el emulador del servidor instalado en la PC del desarrollador y el simulador de la aplicación móvil instalado en un dispositivo real.",
        "Tener el simulador de la aplicación móvil instalado en uno de los emuladores de Dispositivos Virtuales Android (AVD) y el emulador del servidor instalado en la PC del desarrollador.",
        "Tener el simulador del servidor instalado en la PC del desarrollador y la aplicación móvil instalada en uno de los emuladores de AVD.",
        "Tener el simulador del servidor y la aplicación móvil emulada instalados directamente en la PC del desarrollador."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Eres el gestor de pruebas en la división de banca digital de una empresa Fintech. Se está actualizando una app móvil Android que incorpora un nuevo mecanismo de seguridad con huella digital y reconocimiento facial.\n¿Cuál de los siguientes enfoques representa el MEJOR método para configurar tu laboratorio de pruebas para esta mejora?",
      options: [
        "Configurar un laboratorio remoto para probar la nueva app en la mayor cantidad posible de dispositivos.",
        "Configurar un laboratorio local para probar de forma efectiva las funciones específicas del dispositivo relacionadas con la seguridad.",
        "Configurar un laboratorio remoto para cubrir muchos dispositivos y uno local para maximizar la cobertura posible.",
        "Configurar un laboratorio remoto con diversos dispositivos Android de distintos fabricantes y ahorrar dinero."
      ],
      correctAnswer: 1, // opción b: laboratorio local necesario para pruebas biométricas reales
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones NO distingue correctamente entre los enfoques comunes de automatización en pruebas móviles?",
      options: [
        "El enfoque de pruebas basado en agentes es mejor para ejecutar apps web móviles, mientras que las pruebas en dispositivos son mejores para todo tipo de apps móviles.",
        "El enfoque basado en agentes utiliza una cadena enviada por el navegador para simular un navegador en particular, mientras que el enfoque de dispositivo debe ejecutarse en un dispositivo móvil específico.",
        "Las apps nativas se prueban mejor con herramientas generales de automatización para aplicaciones web, mientras que las apps móviles requieren herramientas específicas.",
        "El enfoque basado en agentes simula las características del navegador, mientras que el enfoque basado en dispositivos opera sobre el navegador real."
      ],
      correctAnswer: 2, // opción c: incorrecta, las apps nativas NO se prueban con herramientas web
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es VERDADERA respecto a los métodos de scripting utilizados en la automatización de pruebas móviles?",
      options: [
        "La creación de scripts mediante identificación de objetos es más rápida que la basada en reconocimiento visual (OCR/Texto), lo que reduce el tiempo total de ejecución de pruebas.",
        "El scripting basado en objetos es el método más confiable para generar código de automatización porque permite que el framework identifique objetos móviles sin depender del dispositivo en prueba.",
        "El método de scripting por identificación de objetos aumenta el esfuerzo de mantenimiento cuando hay cambios frecuentes en el código de la aplicación que afectan las imágenes base.",
        "Confiar en el reconocimiento de texto (OCR) y aprendizaje de objetos no implica riesgo para la fiabilidad o robustez de la automatización de pruebas."
      ],
      correctAnswer: 1, // El scripting basado en objetos ofrece mayor confiabilidad
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes NO es una consideración importante al evaluar herramientas de automatización para pruebas móviles?",
      options: [
        "El nivel de habilidad en automatización de los testers que utilizarán la herramienta.",
        "Requisitos y complejidades como el uso de FaceID, huellas dactilares y chatbots en la app.",
        "Es importante considerar los requisitos y complejidades de automatización.",
        "La capacidad del framework de pruebas para operar de forma independiente a otras herramientas existentes en la organización."
      ],
      correctAnswer: 3,
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones MENOS respalda el uso de un laboratorio de pruebas remoto?",
      options: [
        "Las pruebas en etapas finales del desarrollo que requieren ejecutar en el laboratorio completo de dispositivos se realizan mejor en un laboratorio remoto.",
        "Un laboratorio remoto probablemente cubra un conjunto reducido de configuraciones recientes de dispositivos/SO para validar rápidamente las fases de diseño inicial.",
        "Los laboratorios remotos aseguran una variedad suficiente de dispositivos y sistemas operativos para que los equipos tengan diversidad en las pruebas.",
        "Los laboratorios remotos son más adecuados para ejecuciones a gran escala porque están diseñados para minimizar problemas de estabilidad en el proceso."
      ],
      correctAnswer: 1, // Opción B indica cobertura limitada, lo cual es una limitación
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
    "nameQuiz": "Mobile Application Tester"
  }
}
window.data_es = data_es;
