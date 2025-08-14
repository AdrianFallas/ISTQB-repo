const questions = [
  {
    question: "¿Cuál de los siguientes es un principio importante en las pruebas de rendimiento?",
    options: [
      "Las pruebas deben ser fáciles de crear y entender",
      "Los resultados de las pruebas deben ser reproducibles cuando el sistema bajo prueba no cambia",
      "Las pruebas deben ejecutarse en el entorno de producción para proporcionar los resultados más precisos",
      "Los resultados de las pruebas deben coincidir con las expectativas de los interesados sobre el rendimiento del sistema"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes es la mejor descripción de las pruebas de picos?",
    options: [
      "Se centra en la capacidad del sistema para manejar cargas que se incrementan gradualmente hasta alcanzar el máximo esperado",
      "Se centra en la capacidad del sistema para manejar cargas que están en o más allá de la carga máxima esperada",
      "Se centra en la capacidad del sistema para cumplir con los requisitos de eficiencia futuros",
      "Se centra en la capacidad del sistema para responder a cambios rápidos y extremos en la carga"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes es la mejor descripción de las pruebas de carga?",
    options: [
      "Se centra en la capacidad del sistema para manejar cargas que se incrementan gradualmente hasta alcanzar el máximo esperado",
      "Se centra en la capacidad del sistema para manejar cargas que están en o más allá de la carga máxima esperada",
      "Se centra en la capacidad del sistema para cumplir con los requisitos de eficiencia futuros",
      "Se centra en la capacidad del sistema para responder a cambios rápidos y extremos en la carga"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes actividades de pruebas de rendimiento debería ocurrir durante las pruebas unitarias?",
    options: [
      "Probar el comportamiento de extremo a extremo bajo varias condiciones de carga",
      "Probar los flujos de datos y los flujos de trabajo a través de las interfaces",
      "Probar los casos de uso clave y los flujos de trabajo utilizando un enfoque de arriba hacia abajo",
      "Probar para evaluar la utilización de recursos y los posibles cuellos de botella"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "¿Cuándo es apropiado generar carga a través de las API de la aplicación?",
    options: [
      "Cuando hay un gran número de testers disponibles que pueden representar a los usuarios reales",
      "Cuando las pruebas deben realizarse a nivel de protocolo de comunicación",
      "Cuando es probable que la interfaz de usuario cambie, pero las transacciones deben procesarse como si se hubieran creado a través de la interfaz de usuario",
      "Cuando solo hay disponibles pequeñas cantidades de instancias de prueba"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "Si tienes una aplicación que tiene una fuga de memoria, ¿cuál es el resultado probable que verás durante las pruebas de rendimiento?",
    options: [
      "El tiempo de respuesta será consistentemente lento",
      "El tiempo de respuesta se mantendrá aceptable, pero el manejo de errores se degradará",
      "El tiempo de respuesta será lento, pero solo bajo cargas pesadas",
      "El tiempo de respuesta se degradará con el tiempo"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes es una afirmación verdadera respecto al seguimiento de métricas para la latencia de red durante una prueba de rendimiento?",
    options: [
      "Una alta latencia podría indicar un problema de ancho de banda de red que podría impactar negativamente en el rendimiento",
      "Una baja latencia podría indicar un problema de ancho de banda de red que podría impactar negativamente en el rendimiento",
      "La latencia de red es difícil de rastrear y no debería incluirse en las métricas de rendimiento",
      "La latencia de red es demasiado variable para ser útil durante la optimización del rendimiento"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "¿Deben agregarse los resultados de las pruebas de rendimiento?",
    options: [
      "Sí, esto proporciona una mejor visión general del rendimiento del sistema y ayuda a identificar tendencias",
      "Sí, esta es la mejor manera de centrarse en los valores atípicos en las métricas de rendimiento",
      "No, los resultados deben analizarse individualmente para que se comprendan todas las variaciones",
      "No, los resultados de cada prueba deben informarse y rastrearse por separado"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "¿De qué manera son útiles las herramientas de análisis de registros para recopilar métricas?",
    options: [
      "Monitorean los sistemas mientras se realizan las pruebas de rendimiento e informan sobre el comportamiento durante las pruebas",
      "Crean la carga del sistema y monitorean el rendimiento del sistema",
      "Escanean los diversos registros del servidor y compilan métricas para las ocurrencias que se registraron durante la ejecución de la prueba",
      "Escriben los resultados de rendimiento en los registros del servidor para un análisis manual posterior"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "¿Cuál de las siguientes es una falla que típicamente se encontraría al realizar una prueba de picos?",
    options: [
      "El rendimiento del sistema se degrada gradualmente",
      "El sistema proporciona respuestas inconsistentes a los errores",
      "El sistema maneja un repentino aumento de actividad, pero no puede reanudar un estado estable",
      "El sistema funciona bien para la carga esperada, pero no puede escalar a una carga mayor"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "Al aplicar las actividades principales de pruebas de rendimiento, ¿cuándo debe ocurrir la identificación y análisis de riesgos?",
    options: [
      "Planificación de pruebas",
      "Análisis de pruebas y diseño de pruebas",
      "Implementación de pruebas y ejecución de pruebas",
      "Finalización de pruebas"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "Al aplicar las actividades principales de pruebas de rendimiento, ¿cuándo deben ordenarse los casos de prueba en procedimientos de prueba de rendimiento?",
    options: [
      "Planificación de pruebas",
      "Análisis de pruebas",
      "Implementación de pruebas",
      "Finalización de pruebas"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: `¿Cuál de estos es más probable que tenga un riesgo de rendimiento debido a problemas de conectividad?\n
    
      1. Sistemas de computadora únicos
      2. Sistemas de múltiples niveles
      3. Sistemas distribuidos
      4. Sistemas virtualizados
      5. Sistemas dinámicos/basados en la nube
      6. Sistemas cliente-servidor
      7. Aplicaciones móviles
      8. Sistemas embebidos en tiempo real
      9. Aplicaciones de mainframe`,
    options: [
      "2, 3 ",
      "6, 7, 8 ",
      "5, 6, 7, 9 ",
      "2, 4, 5, 8 "
    ],
    correctAnswer: 1, // La opción correcta es la b) (6, 7, 8)
    urlImage: " "
  },
  {
    question: `¿Cuál de estos es más probable que tenga un riesgo de rendimiento debido a fugas de memoria?\n
    
      Sistemas virtualizados
      Sistemas dinámicos/basados en la nube
      Sistemas cliente-servidor
      Aplicaciones móviles
      Sistemas embebidos en tiempo real
      Aplicaciones de mainframe`,
    options: [
      "1, 2, 3, 6 ",
      "2, 3, 4, 5 ",
      "1, 2, 4, 6 ",
      "1, 3, 4, 5 "
    ],
    correctAnswer: 3, // La opción correcta es la d) (1, 2, 4, 6)
    urlImage: " "
  },
  {
    question: "Si se están realizando pruebas de rendimiento para un software escrito en C++, ¿qué necesitas monitorear que no sería una preocupación si el software estuviera escrito en Python?",
    options: [
      "Uso de memoria",
      "Latencia de red",
      "Conectividad",
      "Procesamiento por lotes"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Dada esta información, ¿cuándo es el mejor momento en el proyecto para analizar y evaluar los riesgos de rendimiento?",
    options: [
      "Durante la fase de requisitos y nuevamente justo antes de ejecutar las pruebas de rendimiento",
      "Después del diseño pero antes de la codificación",
      "Durante las pruebas del sistema y nuevamente antes de las pruebas de rendimiento",
      "Repetidamente a lo largo de los requisitos, desarrollo y pruebas de rendimiento"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. ¿Cuál es la mejor manera de abordar las pruebas de rendimiento para el tiempo de respuesta?",
    options: [
      "Probar desde la interfaz de usuario con el conjunto de datos completo cargado para asegurar que el tiempo de respuesta será adecuado cuando la base de datos esté cargada",
      "Probar a través de los servicios web a nivel de API para asegurar que el acceso a los datos sea lo suficientemente rápido sin complicar la prueba con la interfaz de usuario",
      "Realizar una revisión técnica de la implementación de la base de datos y realizar una prueba de rendimiento desde la interfaz de usuario con la base de datos completa cargada",
      "Realizar una evaluación de la red para asegurar que no hay problemas de latencia entre el servidor de la base de datos y los servidores web, luego probar con un escáner de red para asegurar que no ocurren colisiones que puedan causar retrasos en el rendimiento"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. ¿Cuál de los siguientes es un objetivo técnico de rendimiento que podría ser aplicable a este proyecto?",
    options: [
      "El tiempo de respuesta debe estar dentro de tres segundos desde el momento en que se envía la solicitud cuando hay 100 usuarios concurrentes haciendo solicitudes similares",
      "El sistema debe ser capaz de escalar a 10 millones de registros de pacientes sin degradación en el rendimiento",
      "El sistema debe funcionar al mismo nivel o por encima del nivel del sistema legado al manejar una carga similar y responder a una solicitud similar",
      "El tiempo de respuesta debe permanecer igual cuando se utiliza el sistema de recuperación ante desastres en lugar del sistema primario y el cambio no debe causar tiempo de inactividad discernible"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que escribas un plan de prueba de rendimiento para este proyecto. Para abordar el objetivo de rendimiento más crítico, ¿qué información necesitas?",
    options: [
      "Quién puede acceder a qué datos y con qué frecuencia lo hará",
      "Cómo se autentica y autoriza el acceso del usuario",
      "Dónde se almacenarán los datos y cuánto almacenamiento está disponible",
      "Cuál es el uso esperado de los datos después de que se han presentado al usuario"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que prepares una presentación para los interesados del negocio sobre tu plan para las pruebas de rendimiento. ¿Cuál de los siguientes es un conjunto de información que debería compartirse con estos interesados?",
    options: [
      "Una vez configurado, el sistema de prueba de rendimiento requerirá carga de datos. Una vez cargados, procederemos a ejecutar un pequeño conjunto de scripts de muestra para verificar la salida. Cuando esos tengan éxito, procederemos con el script de prueba de rendimiento que aumentará los usuarios a una tasa de 10 por minuto hasta alcanzar el número objetivo de usuarios concurrentes. Esta carga se mantendrá durante 2 horas.",
      "El sistema de prueba de rendimiento costará $240,000, lo que incluirá el hardware y la configuración. Este sistema nos permitirá crear un sistema de prueba que sea representativo del sistema de producción y nos permitirá simular condiciones similares a la producción.",
      "Debido a que el costo de un sistema de prueba de rendimiento es prohibitivo, realizaremos las pruebas de rendimiento en el entorno de producción utilizando datos en vivo.",
      "Los riesgos del producto incluyen problemas de contención de datos, problemas de acceso a datos, problemas de bloqueo que rechazarán solicitudes concurrentes, limitaciones de ancho de banda de red, errores de búsqueda de datos, desaceleraciones o cuellos de botella en la búsqueda de datos, y dificultad para el usuario en procesar los datos devueltos."
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que prepares una presentación para los interesados técnicos sobre tu plan para las pruebas de rendimiento. ¿Cuál de los siguientes es un conjunto de información que debería compartirse con estos interesados?",
    options: [
      "Una vez configurado, el sistema de prueba de rendimiento requerirá carga de datos. Una vez cargados, procederemos a ejecutar un pequeño conjunto de scripts de muestra para verificar la salida. Cuando esos tengan éxito, procederemos con el script de prueba de rendimiento que aumentará los usuarios a una tasa de 10 por minuto hasta alcanzar el número objetivo de usuarios concurrentes. Esta carga se mantendrá durante 2 horas.",
      "El sistema de prueba de rendimiento costará $240,000, lo que incluirá el hardware y la configuración. Este sistema nos permitirá crear un sistema de prueba que sea representativo del sistema de producción y nos permitirá simular condiciones similares a la producción.",
      "Debido a que el costo de un sistema de prueba de rendimiento es prohibitivo, realizaremos las pruebas de rendimiento en el entorno de producción utilizando datos en vivo.",
      "Los riesgos del producto incluyen problemas de contención de datos, problemas de acceso a datos, problemas de bloqueo que rechazarán solicitudes concurrentes, limitaciones de ancho de banda de red, errores de búsqueda de datos, desaceleraciones o cuellos de botella en la búsqueda de datos, y dificultad para el usuario en procesar los datos devueltos."
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Si tu prueba de rendimiento está probando la velocidad de respuesta de un servicio web, ¿qué protocolo se está utilizando?",
    options: [
      "ODBC",
      "HTTP",
      "REST",
      "SMTP"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "Si tu prueba de rendimiento está probando la velocidad con la que se envían y reciben solicitudes a la base de datos, ¿qué protocolo se está utilizando?",
    options: [
      "ODBC",
      "HTTP",
      "REST",
      "SMTP"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Si estás probando desde la interfaz de usuario y necesitas simular la cantidad de tiempo que tomará a un usuario real leer un aviso e ingresar datos en un campo, ¿qué deberías implementar en tu script de prueba?",
    options: [
      "Tiempo de espera",
      "Tiempo de reflexión",
      "Tiempo de latencia",
      "Tiempo de lectura"
    ],
    correctAnswer: 1, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "¿Cuál es el valor de anidar transacciones para las pruebas de rendimiento?",
    options: [
      "Soporta el concepto de transacciones padre e hijo",
      "Permite al tester medir una serie de transacciones discretas",
      "Acelera el tiempo de reporte de los resultados de rendimiento",
      "Elimina el tiempo de comunicación de red al enviar la transacción directamente al servidor que la procesará"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente verá 6 registros de pacientes por cada acceso. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. También ingresará notas en la base de datos sobre el tratamiento del paciente. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Dada esta información, ¿qué falta para construir el perfil operativo para esta clase de usuario?",
    options: [
      "No se realizaron entrevistas para comprender mejor la clase de usuario",
      "No se conoce el número de usuarios en el sistema para este rol",
      "No se ha considerado el procesamiento por lotes de la información de carga de pacientes",
      "No se han considerado otros componentes del sistema que pueden ser requeridos (carga de rayos X, informes de resultados de laboratorio)"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
  question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente actualizará 6 registros de pacientes por cada acceso ingresando notas en la base de datos sobre el tratamiento del paciente. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Los turnos que estos médicos trabajan son: 7am – 5pm (turno de día), 2pm – medianoche (turno de tarde), 9pm a 7am (turno de noche). Hay 1000 médicos que trabajan en el turno de día, 1000 que trabajan en el turno de tarde y 500 que trabajan en el turno de noche. Suponiendo una distribución uniforme del acceso al sistema a lo largo de un turno, ¿cuál de las siguientes es la carga adecuada para estos médicos?",
  options: [
    "6250 transacciones por hora",
    "Aumento constante incrementando las transacciones en 15,000 por hora comenzando en 15,000 transacciones y terminando en 150,000 transacciones",
    "Aumento escalonado con 7 horas a 21,000 transacciones, 3 horas a 27,000 transacciones, 3 horas a 36,000 transacciones, 11 horas a 66,000 transacciones",
    "Pruebas separadas para 120,000 transacciones por hora y 30,000 transacciones por hora"
  ],
  correctAnswer: 2, // La opción correcta es la c)
  urlImage: " "
},
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente actualizará 6 registros de pacientes por cada acceso ingresando notas en la base de datos sobre el tratamiento del paciente. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Los turnos que estos médicos trabajan son: 7am – 5pm (turno de día), 2pm – medianoche (turno de tarde), 9pm a 7am (turno de noche). Hay 1000 médicos que trabajan en el turno de día, 1000 que trabajan en el turno de tarde y 500 que trabajan en el turno de noche. Suponiendo una distribución uniforme del acceso al sistema a lo largo de un turno, ¿cuál es el mayor número de accesos concurrentes en el sistema de estos médicos?",
    options: [
      "1,000",
      "2,000",
      "6,000",
      "12,000"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "¿Cuál es una de las ventajas de realizar pruebas de rendimiento a nivel de protocolo?",
    options: [
      "Es el método más fácil para la creación de scripts manuales",
      "Es la mejor manera de evaluar la experiencia total del usuario",
      "Es escalable porque se omite el cliente",
      "Es la mejor manera de manejar la correlación de datos"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "¿Cuál es el mejor método para verificar que un script de prueba de rendimiento agregó usuarios a un sistema?",
    options: [
      "Verificar la salida de errores del script para confirmar que no ocurrieron errores",
      "Verificar manualmente a través de una aplicación si los usuarios fueron creados",
      "Usar el script para verificar a través de la aplicación que los usuarios fueron creados",
      "Usar el script para verificar que los usuarios existen en la base de datos"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente verá 6 registros de pacientes por cada acceso. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. También ingresará notas en la base de datos sobre el tratamiento del paciente. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Has creado un script de rendimiento que inicia sesión como un médico (de una lista de médicos) y luego realiza las búsquedas de pacientes. Cuando ejecutas el script, el inicio de sesión funciona, pero luego no puedes realizar las búsquedas de pacientes. Estás recibiendo un error que indica que el usuario no es conocido por el sistema. ¿Cuál es probablemente tu problema?",
    options: [
      "El script no está capturando y reutilizando el identificador del sistema para el usuario",
      "No puedes usar el mismo usuario para iniciar sesión y hacer las búsquedas de pacientes porque el usuario ha expirado",
      "El script necesita pasar el nombre de usuario/contraseña de inicio de sesión para cada transacción",
      "La información de inicio de sesión del usuario anterior está en caché por el sistema y necesitas limpiar la caché antes de poder iniciar sesión como un nuevo usuario"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Estás probando una aplicación de ventas para un sistema de comercio electrónico. Estás particularmente interesado en el tiempo de respuesta cuando un usuario ingresa texto para buscar un artículo en la base de datos. Has notado que la primera vez que ejecutaste las pruebas tomó 5.00 segundos en responder, pero las consultas subsiguientes con los mismos datos están respondiendo en 0.01 segundos. ¿Qué deberías haber hecho durante tu scripting para prevenir este problema?",
    options: [
      "No hay problema, el sistema simplemente se está volviendo más rápido",
      "Necesitas iniciar sesión cada vez para asegurarte de que la transacción se realice nuevamente",
      "Necesitas asegurarte de que la caché esté limpia porque los resultados de la consulta probablemente están siendo almacenados en caché",
      "Necesitas usar un usuario diferente para cada prueba para evitar que la información del usuario sea reutilizada sin ser restaurada"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "¿Qué sucede cuando el sistema de prueba de rendimiento no es equivalente al entorno de producción?",
    options: [
      "Las proyecciones se vuelven menos confiables y el riesgo aumenta porque los resultados pueden no ser representativos",
      "Las pruebas tienden a ejecutarse más rápido porque no están cargadas con datos de producción",
      "Los resultados serán más fáciles de entender porque el sistema puede ser configurado para una prueba particular",
      "Los proyectos se vuelven más confiables debido al enfoque dirigido y esto resulta en una reducción del riesgo"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "¿Cuál es una preocupación al usar una herramienta de generación de carga correctamente configurada para construir la carga de fondo para las pruebas de rendimiento?",
    options: [
      "La carga generada contendrá datos inválidos",
      "El generador de carga puede experimentar problemas de rendimiento y no podrá mantener una carga constante",
      "La carga generada puede afectar el sistema de producción y los datos de producción",
      "Los informes de registro del generador de carga pueden ser difíciles de leer, lo que resulta en problemas para interpretar los resultados de rendimiento"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "¿Cuál es el propósito de tener un período de aumento al comienzo de las pruebas de rendimiento?",
    options: [
      "Aumentar el número de usuarios más allá de la carga deseada",
      "Permitir que el sistema logre un estado estable antes de tomar mediciones",
      "Permitir que el sistema logre un apagado ordenado después de las pruebas",
      "Asegurarse de que las herramientas de monitoreo de rendimiento estén funcionando"
    ],
    correctAnswer: 1, // La opción correcta es la b)
    urlImage: " "
  },
  {
    question: "¿Cuál es un método para probar estados transitorios?",
    options: [
      "Pruebas de carga constante",
      "Pruebas de picos y valles",
      "Pruebas de picos",
      "Pruebas de escalabilidad"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
  question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Has realizado tus pruebas y has determinado las siguientes métricas:\n < 2 segundos de tiempo de respuesta: 85% del tiempo\n < 3 segundos de tiempo de respuesta: 90% del tiempo:\n < 10 segundos de tiempo de respuesta: 95% del tiempo:\n < 60 segundos de tiempo de respuesta: 100% del tiempo.:\n Dada esta información, ¿cómo deberías presentar los resultados a los interesados?",
    options: [
      "La prueba falló, el sistema es demasiado lento. Los requisitos deben ser revisados para asegurar que < 3 segundos es requerido el 100% del tiempo.",
      "El 95% del tiempo se cumple el objetivo de rendimiento, por lo que el sistema debería ser aceptado según los estándares de la industria.",
      "El tiempo de respuesta para el 90% de las pruebas es probablemente aceptable según los estándares de la industria, pero se necesita más ajuste para reducir el tiempo de respuesta del 95%.",
      "El tiempo de respuesta para el 100% de las pruebas es inaceptable y se requerirá ajuste para reducirlo a < 3 segundos."
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
  },
  {
    question: "¿Cuál es el propósito de una herramienta generadora de carga?",
    options: [
      "Crea una carga en la red para permitir pruebas de colisiones",
      "Mantiene una carga en la interfaz de usuario para imitar con precisión el tiempo de respuesta del usuario",
      "Alimenta datos al panel de control mostrando cómo el sistema está respondiendo a la carga",
      "Simula el comportamiento del usuario de acuerdo con los perfiles operativos"
    ],
    correctAnswer: 3, // La opción correcta es la d)
    urlImage: " "
  },
  {
    question: "¿Qué es una herramienta de pago por uso?",
    options: [
      "Una herramienta con un acuerdo de licencia que requiere que pagues solo por el número de usuarios virtuales e instancias que realmente usas",
      "Una herramienta basada en servidor que te proporciona la propiedad total de la herramienta para tu uso",
      "Una herramienta de monitoreo que llena el panel de control con métricas pertinentes basadas en lo que has pagado para monitorear",
      "Una herramienta que proporciona la capacidad de probar desde múltiples puntos de presencia para la generación de carga"
    ],
    correctAnswer: 0, // La opción correcta es la a)
    urlImage: " "
  },
  {
    question: "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Tienes un equipo técnico que está realizando las pruebas de rendimiento y se siente cómodo programando los scripts de prueba de rendimiento para su reutilización y mantenibilidad. Ahora estás buscando una herramienta para usar en estas pruebas. Has encontrado una que es compatible con tu entorno y podrá generar carga a través de los protocolos en uso. El equipo la ha revisado y se siente cómodo con que pueden codificar en la herramienta y crear sus scripts con poca capacitación. Debido a que hay muchos interesados en estas pruebas, has verificado que la herramienta proporciona excelentes capacidades de monitoreo e informes. Has verificado con los diversos administradores del sistema que están cómodos con la herramienta y felices de usar sus capacidades de monitoreo además de sus propias herramientas durante las pruebas. ¿Qué necesitas verificar aún antes de seleccionar esta herramienta?",
    options: [
      "El cronograma del proyecto",
      "La disponibilidad de una capacidad de grabación/reproducción para que tus testers la usen",
      "La capacidad de la herramienta para cumplir con tus requisitos de usuarios virtuales concurrentes",
      "La facilidad con la que tu equipo puede codificar los scripts de rendimiento requeridos"
    ],
    correctAnswer: 2, // La opción correcta es la c)
    urlImage: " "
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