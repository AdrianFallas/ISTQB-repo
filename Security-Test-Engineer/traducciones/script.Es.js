const data_es = {
  questions: [
    {
      "question": "¿Cuál de las siguientes opciones describe MEJOR el nivel de seguridad de los activos en cuanto a integridad?",
      options: [
        "Solo los usuarios autenticados deben tener acceso para modificar archivos y aplicaciones.",
        "Solo los propietarios de archivos pueden modificar datos para establecer una integridad adecuada.",
        "El historial de intentos no autorizados debe conservarse durante dos años.",
        "Establecer un proceso que permita a los usuarios acceder a datos sin modificar cuando lo necesiten."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes es una alternativa adecuada para describir cómo las pruebas de seguridad pueden confirmar que la confidencialidad de la información sensible está protegida?",
      options: [
        "Verifica que existen controles adecuados que impiden el acceso no autorizado a información confidencial.",
        "Verifica que existen controles adecuados que aseguran que solo se realicen actualizaciones autorizadas y que todos los datos sigan siendo fiables.",
        "Verifica mecanismos de recuperación rápida para restaurar servicios tras un incidente.",
        "Verifica que la respuesta de la organización ante incidentes es efectiva, minimizando daños y tiempos de inactividad."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe MEJOR una auditoría de seguridad?",
      options: [
        "Evaluación sistemática de las pruebas de seguridad y la estrategia de seguridad general en toda la organización.",
        "Evaluación sistemática de la seguridad del sistema de información midiendo cómo se ajusta a un conjunto de criterios establecidos.",
        "Evaluación sistemática para detener intrusos no autorizados en el sistema.",
        "Evaluación sistemática para reducir riesgos identificando hardware y software vulnerables."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe el concepto de Zero Trust?",
      options: [
        "Cualquier usuario requiere verificación continua de su identidad sin importar su ubicación.",
        "Cualquier dispositivo y usuario con acceso al sistema se considera confiable por defecto.",
        "Solo los dispositivos dentro de la red confiable tienen acceso a los sistemas.",
        "Todos los usuarios reciben el nivel de acceso que necesitan."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuáles de las siguientes acciones verificarían que el concepto de Zero Trust se ha implementado correctamente?\nSelecciona DOS opciones.",
      options: [
        "Implementar controles que verifiquen cada solicitud de acceso a recursos sensibles.",
        "Confiar siempre en solicitudes de acceso iniciadas por cuentas de servicio no humanas.",
        "Verificar que los registros de acceso tengan marca de tiempo permanente de todas las actividades.",
        "Implementar conjuntos de permisos estándar basados en roles y responsabilidades de los usuarios.",
        "Centrarse en controles de acceso a la red externa en lugar de a aplicaciones, recursos y datos específicos."
      ],
      correctAnswer: [0, 2],
      urlImage: ""
    },
    {
      "question": "Al utilizar software de código abierto, ¿cuál de las siguientes NO es un factor crítico para abordar preocupaciones de seguridad?",
      options: [
        "Alineación con OWASP y auditorías de seguridad activas por los contribuidores.",
        "Frecuencia y disponibilidad de parches y actualizaciones de seguridad.",
        "Capacidad del equipo para gestionar y personalizar la herramienta para su entorno.",
        "Requisitos de licencia y cumplimiento de directrices de seguridad de código abierto."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Has sido llamado por un banco para realizar pruebas de seguridad en un entorno de preproducción antes del despliegue. ¿Cuál sería el mejor enfoque?\nSelecciona DOS opciones.",
      options: [
        "Ejecutar pruebas de caja blanca para cubrir todo el código fuente y garantizar que no queden defectos.",
        "Ejecutar escaneo de vulnerabilidades de caja gris para identificar posibles vulnerabilidades explotables.",
        "Ejecutar pruebas de inyección de fallos de caja negra para encontrar puntos de entrada vulnerables.",
        "Verificar que se hayan aplicado las reglas de codificación segura mediante herramientas de análisis estático.",
        "Comprobar si las vulnerabilidades detectadas en caja blanca pueden ser explotadas."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Como ingeniero de pruebas de seguridad, ¿qué enfoque seguirías para aplicar técnicas de prueba estática?",
      options: [
        "Verificar que se aplicaron reglas de codificación segura, que el diseño siguió buenas prácticas de seguridad por diseño, y que los requisitos de seguridad están completos.",
        "Verificar reglas de codificación, compilar la aplicación y ejecutar inyecciones SQL.",
        "Verificar los requisitos de seguridad, luego seguridad en diseño, y después reglas de codificación segura.",
        "Verificar que el conjunto de requisitos de seguridad sea pertinente y ejecutar pruebas de valor límite en la aplicación construida para evitar desbordamientos de búfer."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Se te ha dado un requerimiento de seguridad para probar el restablecimiento de contraseña. ¿Cuál es la lista mínima de condiciones que debes probar?",
      options: [
        "Usuario inválido; usuario válido; 2 respuestas correctas; 2 incorrectas; restablecimiento completo; enlace válido; enlace expirado; dos solicitudes sin restablecer; tres solicitudes sin restablecer.",
        "Usuario válido; 2 respuestas correctas; 3 respuestas correctas; restablecimiento completo; enlace válido; dos solicitudes sin restablecer.",
        "Usuario inválido; 2 respuestas incorrectas; enlace expirado; tres solicitudes sin restablecer; caracteres inválidos.",
        "Usuario válido e inválido múltiples veces; 2 respuestas correctas; 2 incorrectas; desbordamientos en cada campo; inyecciones SQL."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Eres responsable de la gestión de identidades y accesos. ¿Qué técnicas de prueba de seguridad deberías planear?\nSelecciona DOS opciones.",
      options: [
        "No se requiere prueba porque las cuentas y derechos se gestionaron.",
        "Revisar permisos de rol del empleado que cambió de departamento.",
        "Probar roles y privilegios asignados a los nuevos empleados.",
        "No se requiere prueba porque los nuevos empleados tienen privilegios básicos.",
        "Verificar si el acceso a nuevas aplicaciones funciona correctamente."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "¿Cuál describe CORRECTAMENTE técnicas de prueba de seguridad para mecanismos de autenticación?",
      options: [
        "Examinar si los usuarios pueden gestionar recursos según sus roles.",
        "Verificar credenciales predeterminadas y evaluar requisitos de fortaleza de contraseñas.",
        "Verificar niveles de permiso mediante análisis de perfiles.",
        "Monitorear registros de actividad de usuario durante el proceso de inicio de sesión."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál describe MEJOR cómo probar los controles de protección de datos?",
      options: [
        "Evaluar cumplimiento de cifrado, controles de acceso y enmascaramiento de datos.",
        "Medir exclusivamente rapidez y eficiencia de las medidas de protección.",
        "Examinar cómo los usuarios interactúan con funciones de seguridad en pantalla.",
        "Analizar el rendimiento de almacenamiento de datos cuando las funciones de seguridad están activas."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cómo podrías evaluar si los mecanismos de endurecimiento de sistema están funcionando como se espera?",
      options: [
        "Monitorear informes de rendimiento de seguridad para verificar si los niveles de acceso y autenticación son adecuados.",
        "Auditar frecuentemente la autenticación robusta para asegurar un alto nivel de protección contra intrusos.",
        "Evaluar los componentes de hardware endurecidos y compararlos con componentes de software para asegurar un equilibrio.",
        "Contratar a un hacker conocido para realizar una evaluación independiente de la efectividad del endurecimiento."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Debes usar pruebas de alto nivel como base para pruebas manuales desde la perspectiva de un proveedor externo. ¿Qué tarea de pruebas de seguridad puede realizarse en paralelo?",
      options: [
        "Creación de condiciones de prueba y objetivos.",
        "Implementación de pruebas de seguridad.",
        "Evaluación general y reporte de las pruebas de seguridad.",
        "Análisis y diseño de pruebas de seguridad."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál es una característica principal de un entorno de prueba de seguridad efectivo?",
      options: [
        "Vinculado estrechamente con sistemas de producción para mejorar la seguridad.",
        "Aísla versiones antiguas del sistema operativo para su uso en el entorno.",
        "Imita el entorno de producción en cuanto a derechos de acceso.",
        "Incluye todos los complementos de producción y otros complementos adicionales para una configuración más completa."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Durante pruebas de componentes, ¿qué tipo de advertencia del compilador alertaría más al tester de seguridad?",
      options: [
        "Advertencias que indican problemas de seguridad que deben ser corregidos.",
        "Advertencias que indican problemas potenciales que deben investigarse.",
        "Advertencias que indican problemas de codificación que causarán defectos funcionales.",
        "Advertencias sobre malas prácticas que aumentarán la dificultad de mantenimiento."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Componentes A y B se comunican mediante una API REST. ¿Cuál es un ejemplo de prueba de seguridad en nivel de integración?",
      options: [
        "Probar el cifrado de datos durante llamadas API entre A y B.",
        "Probar si A puede llamar a la API de B.",
        "Probar si los componentes externos provienen de proveedores confiables.",
        "Probar el tiempo de respuesta entre A y B."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál procedimiento describe MEJOR las pruebas de extremo a extremo sobre intentos fallidos de inicio de sesión?",
      options: [
        "Antes de ejecutar, usar un generador de contraseñas para cambiarla. Iniciar sesión, cerrar, volver a iniciar y recibir mensaje de bloqueo tras 3 intentos fallidos.",
        "Tras varios intentos fallidos, recibir mensaje de bloqueo y obtener contraseña temporal por correo. Iniciar sesión con ella, cerrar sesión y luego establecer una nueva contraseña.",
        "Tras varios intentos fallidos, solicitar un enlace para cambiar la contraseña. Usar la antigua y que el sistema la acepte.",
        "Intentar una contraseña inválida, buscar en el bloc de notas otra contraseña y que funcione."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": `Estás trabajando como gerente de pruebas en un banco que está desarrollando una nueva aplicación de banca en línea. La aplicación manejará datos sensibles de clientes y transacciones financieras. Se te ha pedido realizar pruebas de seguridad para esa nueva aplicación. No hay requisitos explícitos, así que seleccionas tus propios casos de prueba basados en normas y buenas prácticas.\n¿Cuáles TRES de las siguientes afirmaciones te guían mejor para seleccionar casos de prueba?\n"
     "Las normas son un insumo válido ya que están aprobadas por un cuerpo de conocimiento reconocido.\n"
    "Los estándares pueden clasificarse en estándares de la industria, estándares de facto y estándares específicos de fabricantes. Los estándares de la industria y los de facto son válidos; los específicos de fabricantes podrían no ajustarse al contexto.\n"
    "Como los estándares son obligatorios, son un insumo válido ya que deben aplicarse en todos los entornos.\n"
    "Las buenas prácticas no son un insumo válido ya que suelen estar en un nivel muy alto.\n"
    "Los estándares de facto son un buen insumo ya que a menudo tienen su origen en estándares de la industria."`,
      options: [
        "i, ii, y V",
        "i, ii, y iii",
        "ii, iii, y v",
        "iii, iv, y v"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Un banco solicita un pentest de caja negra sobre su nueva app. ¿Cómo puedes aprovechar los estándares?\nSelecciona DOS opciones.",
      options: [
        "Seleccionar debilidades relevantes del estándar CWE y ejecutar los casos listados.",
        "Seleccionar debilidades del CWE, elegir exploits disponibles y aplicarlos.",
        "Priorizar CWE mediante CWSS y seleccionar CVEs que los cubren.",
        "Priorizar CWE mediante CVSS y derivar casos relacionados.",
        "Derivar casos desde CVE para la app y ejecutarlos."
      ],
      correctAnswer: [2, 4],
      urlImage: ""
    },
    {
      "question": "Al usar oráculos de prueba provenientes de estándares y buenas prácticas, ¿qué debes considerar?",
      options: [
        "Son válidos independientemente de los parámetros de la aplicación.",
        "Solo pueden usarse como pistas difusas en pruebas de seguridad.",
        "No pueden usarse en pruebas de seguridad.",
        "Cuanto menos específico sea el contexto, más eficiente es reutilizar estos oráculos."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Relaciona artefactos con actividades:\n1. Nomenclatura consistente\n2. Conocimiento experto\n3. Benchmarking\n4. Visión holística de seguridad\nActividades:\nA. Comunicación más sencilla\nB. Reutilizar conocimiento experto\nC. Verificar la cobertura completa\nD. Demostrar efectividad de pruebas",
      options: [
        "1-A, 2-B, 3-D, 4-C",
        "1-A, 2-B, 3-C, 4-D",
        "1-D, 2-A, 3-B, 4-C",
        "1-B, 2-D, 3-A, 4-C"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cómo aprovecharías el contexto organizacional para atacar un entorno industrial?\nSelecciona DOS opciones.",
      options: [
        "Infiltrar uno de los proveedores más usados.",
        "Simular ser proveedor existente o potencial para obtener información.",
        "Enviar facturas falsas con contenido malicioso al departamento contable.",
        "Distribuir USBs infectados alrededor del edificio.",
        "Realizar fuerza bruta sobre SSH del servidor web."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Tu empresa lanza un nuevo dispositivo de comunicación para la industria aeronáutica. ¿Qué debe considerarse prioritariamente?",
      options: [
        "Es un sector regulado, por lo tanto el producto y proceso deben cumplir normativas.",
        "Debe funcionar en cualquier país, aunque algunas frecuencias puedan interferir.",
        "Las pruebas deben ejecutarse rápido para lanzar el producto pronto.",
        "El equipo debe tener certificación personal en radiocomunicación."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Encuentras archivos sospechosos durante pruebas que no fueron creados por el equipo ni utilizados por la app. ¿Cómo proceder?",
      options: [
        "Continuar la prueba y reportar al final.",
        "Pausar la prueba y enviar correo informativo a colegas con acceso.",
        "Detener la prueba y apagar el sistema inmediatamente.",
        "Detener la prueba y seguir el protocolo de incidentes de la empresa. Si no hay, reportar al responsable (Ej: Oficial de seguridad, CISO...).",
        "Detener la prueba y comenzar una investigación según la política interna."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Cada ataque es diferente. Sin embargo, ciertos pasos son comunes para casi todos. ¿Cómo se definen?",
      options: [
        "Recopilación de información, luego explotación/obtención de acceso y por último persistencia/mantenimiento de acceso.",
        "Ingeniería social, seguida de ataque de fuerza bruta y luego persistencia.",
        "Explotación/obtención de acceso seguida de ingeniería social y luego limpieza de rastros.",
        "Recopilación de información, seguida de limpieza de rastros y luego ingeniería social para establecer una línea base."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál describe MEJOR cómo se debe implementar la prueba de seguridad en el ciclo de desarrollo?",
      options: [
        "Cada actividad de desarrollo debe tener una prueba de seguridad correspondiente.",
        "Un buen análisis de amenazas y diseño de seguridad puede encontrar la mayoría de vulnerabilidades.",
        "SAST y DAST deben ejecutarse en todas las fases del ciclo de vida del desarrollo.",
        "Las pruebas de seguridad deben realizarse en todas las fases del ciclo de vida para mantenerse en sincronía con las pruebas funcionales manuales."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuáles afirmaciones describen mejor el impacto del modelo de desarrollo en las pruebas de seguridad?",
      options: [
        "El equipo puede incluir un equipo especializado para realizar pruebas de seguridad en cualquier modelo.",
        "El modelo en cascada es el que mejor apoya las pruebas de seguridad durante el desarrollo.",
        "DevOps ofrece mejor apoyo para realizar pruebas de seguridad durante operaciones.",
        "Es más fácil hacer pruebas de seguridad usando Kanban que usando Scrum.",
        "Las pruebas de seguridad se pueden planificar mejor usando modelos ágiles que con el modelo en cascada."
      ],
      correctAnswer: [3, 4],
      urlImage: ""
    },
    {
      "question": "¿Qué afirmación es verdadera respecto a las pruebas de seguridad en el contexto de mantenimiento?",
      options: [
        "Confirmar la satisfacción de todos los requisitos de seguridad después del cambio.",
        "Ejecutar el conjunto de regresión actual sobre funciones individuales para verificar el cambio.",
        "Buscar nuevas vulnerabilidades introducidas por el cambio.",
        "Ejecutar pruebas de regresión y confirmación tras el cambio."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Por qué deberías analizar los resultados de las pruebas de seguridad?",
      options: [
        "Para comprender amenazas y riesgos específicos basados en evaluaciones, auditorías y fuentes estándar.",
        "Para traducir pruebas conceptuales a pruebas ejecutables.",
        "Para definir un alcance adecuado de pruebas según los riesgos.",
        "Para cerrar actividades de prueba y mantener pruebas periódicas que soporten nuevos requisitos y amenazas."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Se realizó una prueba de penetración interna basada en OWASP Top-10. ¿Qué razonamiento sobre aceptar o rechazar el reporte es correcto?\nSelecciona DOS opciones.",
      options: [
        "Aceptar, ya que lo realizó un colega interno familiarizado con las guías de seguridad.",
        "Rechazar, ya que los criterios de aceptación no fueron comunicados ni considerados en el informe.",
        "Aceptar, OWASP define una lista general de criterios de aceptación.",
        "Rechazar, ya que las guías de estilo de seguridad deberían probarse con pruebas de caja blanca.",
        "Aceptar, ya que OWASP refleja la guía de estilo de seguridad del sistema."
      ],
      correctAnswer: [1, 3],
      urlImage: ""
    },
    {
      "question": "Para maximizar la eficiencia y efectividad de las pruebas de seguridad, deben:\nSelecciona DOS opciones.",
      options: [
        "Integrarse en un proceso general de seguridad que minimice riesgos y asegure continuidad.",
        "Aplicarse anualmente a todos los sistemas TI usados.",
        "Usarse proactivamente para limitar el impacto de una brecha de seguridad.",
        "Considerar las vulnerabilidades comunicadas diariamente.",
        "Garantizar que todas las vulnerabilidades se solucionen en menos de 6 meses."
      ],
      correctAnswer: [0, 2],
      urlImage: ""
    },
    {
      "question": "Dimensiones que un ingeniero puede usar para mejorar el alcance del ISMS:\n1) Añadir objetos de prueba\n2) Añadir técnicas de prueba\n3) Mejorar cobertura de pruebas usando objetos y enfoques dados\n4) Aumentar automatización de ejecución de pruebas\n¿Cuál combinación de acciones y objetivos es correcta?",
      options: [
        "1-C, 2-A, 3-B",
        "1-B, 2-D, 3-B",
        "1-C, 2-A, 4-B",
        "2-D, 2-C, 4-A"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cómo puede mejorar la medición de ISMS con pruebas de seguridad?",
      options: [
        "Las pruebas pueden utilizarse como análisis objetivo en el paso Check del ciclo PDCA.",
        "Todas las pruebas generan métricas cuantificables que miden la efectividad del ISMS.",
        "Cuantas más pruebas de seguridad pasan, más efectivo es el ISMS.",
        "El ISMS es más efectivo si se usan más técnicas de prueba de seguridad."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Los informes de pruebas de seguridad deben manejarse con alta confidencialidad. ¿Qué tipo de datos motiva esta clasificación?",
      options: [
        "Nombre del tester, período de ejecución, resultados (casos aprobados y fallidos).",
        "Entorno usado, condiciones preestablecidas, datos usados, procedimiento de ejecución, comportamiento detectado.",
        "Lista de vulnerabilidades CVE probadas, nombres de desarrolladores, método y herramientas de desarrollo identificadas.",
        "Convenciones de codificación segura, cobertura funcional identificada, escaneos de vulnerabilidades aplicados."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Identificas una posible vulnerabilidad durante una prueba de penetración de un sistema crítico. ¿Qué debes hacer antes de pedir su mitigación?\nSelecciona DOS opciones.",
      options: [
        "Delimitar la vulnerabilidad ejecutando casos similares.",
        "Estimar el esfuerzo de mitigación mediante una estructura detallada.",
        "Diseñar la solución que mitigue la vulnerabilidad.",
        "Ajustar el riesgo comprobando si puede ser explotado en producción.",
        "Iniciar inmediatamente la mitigación de la vulnerabilidad."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "Has identificado una vulnerabilidad con CVSS 9.8 que puede explotarse en producción. La app es crítica. ¿Cuál es tu recomendación?\nSelecciona DOS opciones.",
      options: [
        "Analizar si puede desactivarse la funcionalidad específica afectada.",
        "Bloquear el tráfico vulnerable en la capa de red mediante firewall.",
        "Usar un firewall moderno que mitigue automáticamente la vulnerabilidad.",
        "Agregar controles adicionales como filtrado IP o MFA para reducir la probabilidad.",
        "Reparar directamente la vulnerabilidad como acción rápida y económica."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "En un entorno CI/CD, ¿cuál paso debería activarse primero en la nueva pipeline?",
      options: [
        "SCA",
        "SAST",
        "DAST",
        "IAST"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuáles métodos escanean la aplicación durante su tiempo de ejecución?",
      options: [
        "DAST",
        "Análisis estático",
        "SCA",
        "SAST"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Qué objetos pueden ser escaneados por herramientas de pruebas estáticas?",
      options: [
        "Archivos de configuración",
        "Diseño de seguridad",
        "Endpoints de API",
        "Procesos en RAM"
      ],
      correctAnswer: 0,
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
    "nameQuiz": "Security Test Engineer"
  }
}
window.data_es = data_es;