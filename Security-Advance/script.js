const questions = [
  {
    question: "¿Cuál de los siguientes es un propósito de una auditoría de seguridad?",
    options: [
      "Evitar que los usuarios usen contraseñas simples",
      "Revelar actualizaciones de parches insuficientes proporcionadas por el proveedor",
      "Detener intrusos no autorizados para que no accedan al sistema",
      "Solicitar a los usuarios cambiar su contraseña después de un número determinado de días"
    ],
    correctAnswer: 1, // El propósito es revelar debilidades en parches o configuraciones de seguridad
    urlImage: ""
  },
  {
    question: "Eres responsable de asegurar que los nuevos proveedores externos cumplan con las directrices gubernamentales como parte de la evaluación de riesgos. ¿Sobre qué partes interesadas debes enfocarte principalmente para garantizar el cumplimiento de los proveedores externos?",
    options: [
      "Clientes, usuarios y proveedores para asegurar una buena comunicación entre ellos",
      "Usuarios públicos y proveedores que seguirán la ley según la fuente de información",
      "Agencias federales y locales que comunican las directrices a seguir",
      "Fuentes internas y externas que usarán la información para analizar riesgos"
    ],
    correctAnswer: 2, // Las agencias gubernamentales son el foco para asegurar cumplimiento normativo
    urlImage: ""
  },
  {
    question: "¿Cuál de las siguientes es una consecuencia de una política que minimiza el acceso a un sistema o dispositivo a niveles aceptables?",
    options: [
      "Se agregan más dispositivos para mitigar el impacto",
      "Se prohíben los controles adecuados de dispositivos autoprovisionados como routers",
      "Se eliminan los dispositivos que no cumplen de la red inalámbrica",
      "El acceso a la VPN se restringe severamente"
    ],
    correctAnswer: 2, // Eliminar dispositivos no conformes es una acción común en controles de acceso
    urlImage: ""
  },
  {
    question: "Como Administrador de Seguridad, debes ayudar a tu organización a entender la efectividad de las políticas y procedimientos de seguridad. Vas a reportar tus hallazgos a la Alta Dirección una vez completado el análisis. ¿Cuál es la mejor estrategia para lograrlo?",
    options: [
      "Implementar una evaluación de análisis estático de manera independiente para políticas y procedimientos",
      "Analizar los resultados de una prueba de seguridad para validar la efectividad",
      "Evaluar resultados de pruebas de seguridad que se centren en amenazas y ataques actuales",
      "Evaluar los resultados de pruebas estáticas para amenazas emergentes de software"
    ],
    correctAnswer: 1, // Validar con pruebas prácticas es más efectivo y preciso para informar resultados
    urlImage: ""
  },
  {
        question: "Si una organización experimenta una violación de seguridad y resulta en acciones legales, ¿cómo ayuda a la organización haber realizado pruebas de seguridad?",
        options: [
              "Puede demostrar que la organización ha hecho la debida diligencia para intentar prevenir tal incidente.",
            "La documentación de las pruebas de seguridad puede ser utilizada para rastrear al perpetrador.",
            "Dado que cualquier información importante habría sido respaldada antes de las pruebas de seguridad, esta copia de seguridad puede ser utilizada para restaurar cualquier información comprometida.",
            "Al rastrear a través de las pruebas documentadas, el equipo de pruebas de seguridad puede descubrir cómo fue posible la violación."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
    {
        question: "¿Cuál de las siguientes es una afirmación correcta?",
        options: [
            "La garantía de información es parte de las pruebas de seguridad.",
            "La garantía de información y las pruebas de seguridad son dos términos para lo mismo.",
            "Las pruebas de seguridad son parte de la garantía de información.",
            "Los dos términos se refieren a diferentes áreas de la seguridad."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: `Estás trabajando en un banco como parte del equipo de pruebas de seguridad. Durante una auditoría de seguridad reciente se observó que las contraseñas de los usuarios no eran lo suficientemente fuertes. Desde ese momento, se ha emitido un nuevo conjunto de requisitos para garantizar la fortaleza de las contraseñas. Dada esta información, ¿cuál sería un conjunto razonable de objetivos de seguridad para las pruebas de reglas de contraseñas generales?"\n
        
            1. Verificar que las contraseñas cumplan con los requisitos de longitud.\n
            2. Verificar que las contraseñas cumplan con los requisitos de uso de caracteres, números, letras y capitalización.\n
            3. Verificar que las contraseñas se puedan intentar tres veces.\n
            4. Verificar que las contraseñas no se puedan reutilizar dentro de un período de un año.\n
            5. Verificar que las contraseñas deben ser restablecidas cada tres meses.\n
            6. Verificar que el usuario puede solicitar que su contraseña sea enviada por correo electrónico.\n
            7. Verificar que el administrador del sistema puede restablecer una contraseña bloqueada`,
        options: [
          "1, 2, 3, 4",
          "1, 2, 4, 5",
          "3, 4, 6, 7",
          "4, 5, 6, 7"

        ],
        correctAnswer: 1,
        urlImage: ""
    },
     {
        question: "Tu empresa recientemente hizo titulares después de que una violación de seguridad resultara en el robo de información confidencial de clientes. La dirección ha reaccionado con un edicto que el alcance de los objetivos de pruebas de seguridad necesita ser ampliado de inmediato. Aunque estás de acuerdo en que se necesita hacer algo, te preocupa que este enfoque pueda ser demasiado reactivo y no resultar en las pruebas que se necesitan. Según el plan de estudios, ¿cuál es una preocupación razonable si se implementan estas iniciativas?",
        options: [
            "Las pruebas aún perderán problemas porque no estarán bien enfocadas.",
            "Las pruebas serán subcontratadas para que se puedan realizar de manera más eficiente.",
            "El alcance de las pruebas puede ser demasiado grande y puede que no haya recursos adecuados para completarlo.",
            "Los objetivos de las pruebas no están claramente definidos y pueden perder los mismos problemas que anteriormente escaparon a producción."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Acabas de aceptar un trabajo para crear un equipo de pruebas de seguridad para una empresa que maneja información médica sensible que se comparte entre médicos y hospitales. Has notado que la seguridad alrededor de esta información no es suficiente para protegerla de hackers o incluso de exposiciones accidentales. La persona que tuvo tu trabajo anteriormente trajo a varios consultores para hacer pruebas, pero los hallazgos no fueron documentados y no se implementaron cambios. De hecho, ni siquiera sabes cuál fue la cobertura de las pruebas. Has presentado tus hallazgos al equipo de gestión ejecutiva. Aunque han acordado en principio que necesitan pruebas de seguridad, no han asignado el presupuesto o tiempo necesario para el proyecto. Parece que, aunque piensan que la seguridad es una buena idea, realmente no tienen comprensión de lo que se debe hacer o cómo se debe hacer. ¿Cuál debería ser tu primer paso para alinear a los ejecutivos con el trabajo que necesita hacerse?",
        options: [
            "Crear una lista detallada de todos los posibles agujeros de seguridad y presentarlos a los ejecutivos.",
            "Proporcionar un resumen del enfoque de pruebas que propones y dar ejemplos de cómo se llevarán a cabo las pruebas.",
            "Involucrar al equipo legal para explicar lo que podría costar a la organización una violación de seguridad.",
            "Crear una política de seguridad y una política de pruebas de seguridad y demostrar cómo se alinean con tu enfoque de pruebas propuesto."
        ],
        correctAnswer: 3,
        urlImage: ""
    },
    {
        question: "Acabas de salir de una reunión donde hubo mucha discusión sobre el enfoque de seguridad de la organización. Uno de los puntos de énfasis fue la importancia de las pruebas para asegurar que los datos estén protegidos contra accesos fraudulentos, particularmente la información de tarjetas de crédito. Te han pedido que prepares un conjunto de objetivos de pruebas que ayudarán a abordar esta área de riesgo. Una de tus tareas es asegurarte de que estás cubriendo todas las preocupaciones de los interesados. ¿Cuál grupo de interesados es más probable que vea los beneficios de tus esfuerzos?",
        options: [
            "Gestión ejecutiva.",
            "Oficiales de cumplimiento.",
            "Clientes comerciales.",
            "Oficiales regulatorios."
        ],
         correctAnswer: 2,
        urlImage: ""
    },
        {
        question: "Como Administrador de Seguridad, eres responsable de todos los aspectos del proceso de seguridad, incluyendo las pruebas. Para este proceso en particular, debes usar pruebas conceptuales como base para pruebas manuales y ejecutarlas desde la perspectiva de un proveedor externo. ¿Qué proceso de prueba de seguridad se asemeja más a esto?",
        options: [
            "Creación de condiciones y objetivos de prueba de seguridad.",
            "Implementación de pruebas de seguridad.",
            "Evaluación general e informes de pruebas de seguridad.",
            "Análisis y diseño de pruebas de seguridad."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "Has estado desarrollando un plan de pruebas de seguridad para un sistema que almacenará información médica de pacientes y transferirá esos datos a médicos especialistas. Has cubierto las siguientes áreas en tu plan: \n• Alcance (lo que está dentro y fuera del alcance) \n• Roles y asignaciones \n• Responsabilidades (proveedores vs. internos) \n• Cronograma de alto nivel \n• Requisitos y configuración del entorno \n• Lista de autorizaciones y aprobaciones necesarias \n¿Qué información aún necesitas proporcionar en este plan de pruebas para cumplir con los requisitos mínimos según lo indicado en el plan de estudios?",
        options: [
            "Una lista de las credenciales y capacitación necesarias para el personal que realizará las pruebas.",
            "Un cronograma que muestre el tiempo que se requerirá para diseñar, ejecutar y evaluar las pruebas de seguridad.",
            "Una copia de los estándares regulatorios que debe cumplir este sistema.",
            "Una lista de las personas que realizarán las pruebas y su información de contacto en caso de una violación de seguridad."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿Cuál de los siguientes casos de prueba probaría mejor el procedimiento de seguridad de un sistema?",
        options: [
            "Tres intentos de inicio de sesión fallidos generarán un mensaje de bloqueo. Contacta a tu gerente o al Administrador del Sistema para que te den una contraseña temporal por teléfono. Debes cambiar la contraseña temporal al iniciar sesión. Te desconectas y luego vuelves a iniciar sesión usando tu nueva contraseña creada.",
            "Recibes un mensaje de bloqueo después de varios intentos de iniciar sesión. Llamas al soporte técnico para obtener una nueva contraseña. Inicias sesión con la contraseña temporal, te desconectas, luego vuelves a iniciar sesión e ingresas una nueva contraseña.",
            "Después de varios intentos, estás bloqueado del sistema. Usas una contraseña que funcionó anteriormente. Sin embargo, ya no funciona. Intentas crear una nueva contraseña, pero ahora estás bloqueado. Un reinicio completo de la máquina es el siguiente paso para llevarte al aviso de volver a ingresar la contraseña.",
            "Después del primer intento de usar una contraseña inválida, inmediatamente abres una lista de contraseñas en tu bloc de notas en tu PC para asegurarte de que estás usando la correcta. Pruebas otra contraseña de la lista y funciona."
        ],
           correctAnswer: 0,
        urlImage: ""
    },
     {
        question: "¿Cuáles de las siguientes son las principales características de un entorno de prueba de seguridad efectivo?",
        options: [
            "Estrechamente vinculado a los sistemas de producción para mejorar la seguridad en todos los puntos.",
            "Aísla diferentes versiones antiguas de los sistemas operativos para su uso en el entorno.",
            "Imita el entorno de producción en términos de derechos de acceso.",
            "Incluye todos los complementos del entorno de producción, así como otros complementos que no están en el entorno de producción para asegurar la configuración más completa."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "¿Cuál es una preocupación significativa al buscar la aprobación para las herramientas de pruebas de seguridad?",
        options: [
            "Algunos países prohíben el uso de ciertas herramientas de pruebas de seguridad.",
            "Asegurarse de que el proceso de aprobación para las herramientas de pruebas de seguridad pueda ser eludido en base a excepciones en casos donde un evento malicioso esté en progreso.",
            "Los riesgos de la herramienta rara vez se conocen antes de que se adquiera y son mejor descubiertos cuando la herramienta está en uso.",
            "Debido a que los riesgos de las herramientas de pruebas de seguridad generalmente se conocen, no hay necesidad de una estrategia de mitigación."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
    {
        question: "Estás revisando un conjunto de resultados de pruebas de seguridad realizadas en un producto que está pasando por pruebas finales antes de su lanzamiento a producción. Esta es una actualización de una versión que actualmente está en producción. La aplicación que se acaba de probar fue tu sitio de comercio electrónico, y tiene un defecto que permite la inyección de scripts entre sitios (XSS). ¿Cuál de los siguientes es el conjunto adecuado de pasos que debes seguir?",
        options: [
            "Reportar el problema al desarrollador, agregarlo al informe de interesados y continuar probando otros tipos de defectos.",
            "Probar si el problema existe en la versión actual de producción, documentar el defecto en un sistema seguro, notificar al desarrollador y continuar probando otros defectos XSS.",
            "Investigar la extensión del problema realizando más pruebas en la versión planificada con particular concentración en otros problemas XSS, realizar un análisis estático del código.",
            "Informar a la dirección, documentar el defecto e incluirlo en tu informe de estado semanal a los interesados, continuar probando otros defectos de seguridad para determinar la extensión de los problemas de seguridad."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿En qué punto del SDLC (Ciclo de Vida de Desarrollo de Software) debería haber una verificación para asegurar que se han seguido las prácticas adecuadas de codificación segura?",
        options: [
            "Pruebas de componentes.",
            "Pruebas de integración.",
            "Pruebas del sistema.",
            "Pruebas de aceptación de seguridad."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
   {
        question: "Se te ha pedido por el analista de negocios que ayudes a definir los requisitos para los aspectos de seguridad de un sistema. Este es un sistema crítico para la seguridad que almacena información médica de pacientes y suministra esta información a profesionales de la salud en hospitales, consultorios médicos y ambulancias. ¿En qué punto del ciclo de vida deben documentarse los requisitos de seguridad y a qué nivel de detalle?",
        options: [
            "No deben documentarse formalmente debido a la necesidad de proteger la implementación de seguridad dentro del código de los externos.",
            "Deben documentarse de manera detallada y sin ambigüedades en los documentos de requisitos durante la fase de requisitos.",
            "Deben documentarse durante la fase de diseño cuando se conoce el enfoque del código, en lugar de en la fase de requisitos cuando el enfoque no se conoce.",
            "Deben restringirse a los requisitos funcionales de acceso y disponibilidad desde la perspectiva del usuario y deben documentarse durante la fase de requisitos."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "Se ha descubierto una deficiencia en producción. Si un usuario no autorizado copia una URL de una sesión de un usuario autorizado, el usuario no autorizado puede pegar la URL en su sesión y continuar procesando con los derechos del usuario autorizado. En el caso que se reportó, el usuario no autorizado pudo usar la URL del usuario autorizado para cambiar la contraseña de administración del sistema. Para cerrar esta brecha, los desarrolladores verificarán el ID de sesión y el ID de usuario cada vez que se use una URL. ¿Cuál es una preocupación realista para esta solución?",
        options: [
            "No solucionará el problema y el secuestro de sesión seguirá siendo posible.",
            "Solucionará el problema, pero la usabilidad puede verse afectada negativamente.",
            "Solucionará el problema, pero el rendimiento puede verse afectado negativamente.",
            "No solucionará el problema y expondrá una nueva vulnerabilidad con los IDs de sesión."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Durante las pruebas a nivel de componentes, ¿por qué debería el probador de seguridad revisar las advertencias del compilador?",
        options: [
            "Porque estas indican problemas de seguridad que deben ser solucionados.",
            "Porque estas indican problemas potenciales que deben ser investigados.",
            "Porque estas indican problemas de codificación que causarán defectos funcionales.",
            "Porque estas indican malas prácticas de programación que aumentarán la mantenibilidad."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "Has estado probando un sistema que tiene 20 componentes definidos. Has realizado pruebas de seguridad extensivas en cada uno de los componentes. El sistema ahora está listo para pasar a las pruebas de seguridad de integración de componentes. ¿Cómo deberías abordar esta prueba?",
        options: [
            "Dado que las pruebas de integración de componentes se preocupan por la suma de las vulnerabilidades de los componentes individuales, realizar las mismas pruebas en los componentes integrados es el mejor enfoque.",
            "El principal riesgo ahora está en la integración de los componentes en sí, por lo que las pruebas deben cubrir cada interfaz y verificar que no haya vulnerabilidades en las interfaces y los componentes también deben ser reprobados.",
            "Es probable que haya nuevas vulnerabilidades presentes con los componentes integrados, así como con el sistema y la infraestructura más grandes que ahora son probables, por lo que las pruebas deben expandirse para incluir estas nuevas áreas.",
            "Dado que los componentes ahora están integrados, los riesgos de seguridad se reducirán porque las posibles interacciones ahora están limitadas, por lo que solo se deben probar los puntos de integración y no se necesita volver a probar los componentes."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Estás creando casos de prueba de seguridad para verificar la inyección de SQL en un campo de entrada que permite hasta 5 caracteres alfanuméricos. Estás planeando aplicar la partición de equivalencia para reducir el número de casos de prueba que necesitarás ejecutar. Dada esta información, ¿cuál de los siguientes es el conjunto mínimo de entradas que necesitarías usar para probar este campo?",
        options: [
            "bbbbb, 12345, ‘",
            "%, ‘, @, ab123",
            "‘, ab123",
            "‘"
        ],
        correctAnswer: 2,
       urlImage: ""
    },
    {
        question: "Se te ha dado el siguiente requisito para las pruebas de seguridad. Un usuario podrá solicitar su contraseña. Si hace esta solicitud, debe responder correctamente dos de sus tres preguntas de seguridad. Si responde correctamente, se enviará un enlace a su correo electrónico. El enlace lo llevará a una página donde podrá restablecer su contraseña. Una vez restablecida, podrá iniciar sesión con la nueva contraseña. El enlace debe desactivarse 1 hora después de ser enviado. El usuario solo puede hacer dos solicitudes de contraseña sin un restablecimiento, después de lo cual deberá llamar al servicio de asistencia. Para cualquier otro error, el ID de usuario se bloquea y debe ser desbloqueado por el servicio de asistencia. ¿Cuál de las siguientes es la lista mínima de condiciones de prueba para probar adecuadamente la seguridad funcional cubierta por este requisito?",
        options: [
            "Usuario inválido; usuario válido; 2 respuestas correctas; 2 respuestas incorrectas; buen correo; mal correo; restablecer con buena contraseña; restablecer con mala contraseña; enlace válido; enlace expirado; dos solicitudes sin restablecimiento; tres solicitudes sin restablecimiento.",
            "Usuario válido; 2 respuestas correctas; buen correo; restablecer con buena contraseña; enlace válido; dos solicitudes sin restablecimiento.",
            "Usuario inválido; 2 respuestas incorrectas; mal correo; restablecer con mala contraseña; enlace expirado; tres solicitudes sin restablecimiento.",
            "Desbordamiento de búfer en cada campo de entrada; inyección de SQL en cada campo de entrada; XXS en la página de inicio de sesión y en la página de restablecimiento de contraseña; usuario inválido; usuario válido; 2 respuestas correctas; 2 respuestas incorrectas; buen correo; mal correo; restablecer con buena contraseña; restablecer con mala contraseña; enlace válido; enlace expirado; dos solicitudes sin restablecimiento; tres solicitudes sin restablecimiento."
        ],
        correctAnswer: 0,
       urlImage: ""
    },
    {
        question: `Un usuario podrá solicitar su contraseña. Si hace esta solicitud, debe responder correctamente dos de sus tres preguntas de seguridad. Si responde correctamente, se enviará un enlace a su dirección de correo electrónico. El enlace lo llevará a una página donde podrá restablecer su contraseña. Una vez restablecida, podrá iniciar sesión con la nueva contraseña. El enlace debe desactivarse una hora después de ser enviado. El usuario solo puede hacer dos solicitudes de contraseña sin un restablecimiento, después de lo cual deberá llamar al servicio de asistencia. Para cualquier otro error, el ID de usuario se bloquea y debe ser desbloqueado por el servicio de asistencia. ¿Cuál de las siguientes es un conjunto válido de criterios de aceptación para este requisito?\n
        
            1. El usuario puede restablecer la contraseña si se han realizado menos de tres solicitudes desde el último restablecimiento, y se responden correctamente dos preguntas de seguridad, y se utiliza el enlace para restablecer y se ingresa una contraseña válida en el aviso de restablecimiento.\n
            2. Más de dos solicitudes resultan en el ID de usuario bloqueado.\n
            3. Más de dos solicitudes sin un restablecimiento resultan en el ID de usuario bloqueado.\n
            4. Más de dos preguntas de seguridad fallidas resultan en un error.\n
            5. Más de dos preguntas de seguridad fallidas, el ID de usuario se bloquea.\n
            6. Si se recibe un error de correo electrónico por parte del sistema, el ID de usuario se bloquea.\n
            7. Si se ingresa una contraseña inválida en el restablecimiento, se le solicita al usuario las reglas adecuadas.\n
            8. La contraseña restablecida se puede usar para iniciar sesión en el sistema.`,
        options: [
          "1, 2, 4, 6, 7, 8",
          "1, 2, 3, 4, 5, 6, 7, 8 ",
          "3, 5, 6, 7, 8",
          "1, 3, 5, 6, 8"
        ],
        correctAnswer: 3,
        urlImage: ""
    },
        {
        question: "Estás implementando procedimientos para evaluar el endurecimiento del sistema en un esfuerzo por probar la efectividad de la seguridad del sistema. ¿Qué procedimiento podrías seguir para asegurar que los mecanismos de endurecimiento implementados están funcionando como se espera?",
        options: [
            "Monitorear de cerca varios informes de rendimiento de seguridad y métricas para determinar si se logra el nivel correcto de acceso y autenticación.",
            "Auditar frecuentemente la autenticación fuerte para asegurar que se mantenga un alto nivel de protección contra intrusiones en todo momento.",
            "Evaluar los componentes de hardware que han sido endurecidos y compararlos con otros componentes de software endurecidos para asegurar que se está logrando un equilibrio.",
            "Contratar a un hacker conocido para realizar una evaluación independiente de la efectividad del endurecimiento."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
    {
        question: "¿Cuáles son los atributos clave de la autenticación de seguridad de un sistema informático de complejidad media?",
        options: [
            "Verifica que el usuario tenga el perfil correcto y los derechos correspondientes para acceder a partes limitadas del sistema.",
            "Es clave para identificar la cantidad de recursos del sistema que el usuario puede utilizar.",
            "Verifica que el usuario que ingresa al sistema es legítimo.",
            "Utiliza credenciales comunes entre los usuarios para acceder al sistema."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Los mecanismos de cifrado típicos son vulnerables a amenazas, lo que hace importante entender su efectividad en cualquier momento dado. Identifica cuál de los siguientes deberías implementar para ganar confianza en tus mecanismos de cifrado.",
        options: [
            "Evaluar las claves criptográficas para asegurar que tengan al menos 256 bits de tamaño.",
            "Asegurarte de que estás aplicando algoritmos aleatorios para generar números aleatorios donde sea posible.",
            "Desarrollar pruebas que aseguren que el cifrado simétrico se utiliza en los modos correctos.",
            "Eliminar todos los protocolos WEP para ver cómo se desempeña el sistema."
        ],
               correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "¿Cuál es la verdad sobre la relación entre un firewall y una zona de red?",
        options: [
            "Tanto una zona de red como un firewall se centran en el tamaño de los datos que se están transmitiendo.",
            "Una zona de red se comunica a través de opciones de protocolo seguro, mientras que un firewall asegura que esos protocolos sean seguros.",
            "Una subred puede considerarse una zona de red y un firewall puede ser un software de monitoreo de tráfico.",
            "Una zona de red bloquea el tráfico malicioso de una zona no confiable, que el firewall no filtra."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
        {
        question: "¿Cuál de las siguientes aplicarías para probar de manera más efectiva las capacidades de una herramienta de detección de intrusiones?",
        options: [
            "Desarrollar una serie de escenarios basados en experiencias pasadas.",
            "Usar pruebas que generen tráfico malicioso para agregar nuevas especificaciones intrusivas.",
            "Aplicarla a situaciones de tráfico malicioso conocido.",
            "Usarla en conjunto con otros productos IDS cuando sea posible."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿Cuál de las siguientes es una desventaja principal de las herramientas de escaneo de malware?",
        options: [
            "Solo detectan ciertos niveles de malware.",
            "Solo pueden detectar malware que es conocido por la herramienta.",
            "Tienden a ser excesivamente complejas de ejecutar.",
            "No proporcionan capacidades de actualización e informes."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "Necesitas eliminar números de identificación personal de un sistema legado para reducir el riesgo durante las pruebas. Parte de tu plan de ofuscación de datos incluye verificar cuán efectivamente se enmascara la información. ¿Cuál de las siguientes es la forma más efectiva de hacerlo?",
        options: [
            "Verificar manualmente en la base de datos que los datos destinados a la ofuscación ya no son comprensibles para la interpretación lógica humana.",
            "Diseñar un ataque de fuerza bruta en los datos ofuscados.",
            "Sustituir los datos sensibles con datos aleatorios de longitudes de cadena variables.",
            "Involucrar a los equipos de desarrollo para generar un programa que someta la base de datos a estrés para detectar vulnerabilidades."
        ],
                correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿Cuál se considera a menudo el eslabón más débil en la seguridad del software?",
        options: [
            "La falta de un plan de capacitación en seguridad consistente y completo.",
            "El esfuerzo necesario para mantener actualizados documentos y procedimientos para hacer frente a las amenazas de seguridad continuas.",
            "El comportamiento de los humanos.",
            "El avance constante en técnicas maliciosas."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "¿Cuál de las siguientes es un riesgo de seguridad potencial?",
        options: [
            "Publicar el organigrama del departamento de contabilidad en el sitio web de la empresa.",
            "Publicar deseos de cumpleaños para un compañero de trabajo en Facebook.",
            "Publicar el directorio telefónico de la empresa en la Intranet de la empresa.",
            "Publicar experiencia profesional en un perfil de LinkedIn."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
    {
        question: "Eres responsable de las pruebas de seguridad de la aplicación financiera de tu empresa. Recientemente has recibido un correo electrónico de una persona que afirma haber hackeado el sistema utilizando Shodan y ha descubierto que estás ejecutando un sistema operativo desactualizado y vulnerable en uno de tus servidores. Has verificado y el hacker tiene razón. Te has asegurado de que el servidor se haya actualizado. Tu verificación preliminar no ha mostrado rastro de cómo el hacker entró en tu sistema. ¿Deberías estar preocupado?",
        options: [
            "No, este es un hacker 'white hat' y no significa ningún daño para tu empresa.",
            "No, has solucionado la vulnerabilidad, por lo que el sistema ahora es seguro.",
            "Sí, tus pruebas de seguridad no son suficientes y necesitas volver a ejecutar tus pruebas para ver qué se pasó por alto.",
            "Sí, dado que el hacker no admitió cómo entró en el sistema, aún puede acceder y puede decidir explotar la vulnerabilidad la próxima vez."
        ],
        correctAnswer: 3,
        urlImage: ""
    },
    {
        question: "¿Por qué es particularmente preocupante un ataque desde dentro de la organización?",
        options: [
            "El atacante probablemente está impulsado por la curiosidad y no se detendrá.",
            "El atacante probablemente está aburrido en el trabajo y continuará hackeando el sistema por entretenimiento.",
            "El atacante ya está dentro del firewall y es un usuario autorizado del sistema.",
            "El atacante probablemente lanzará un ataque DOS que paralizará los servidores."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Estás trabajando en una organización donde el acceso de administración del sistema a los servidores está altamente restringido. Solo tres empleados de confianza a largo plazo conocen las contraseñas de root. Sin embargo, recientemente ha habido varias ocurrencias extrañas. Se encontró un programa desconocido, llamado 'IKnowYourBirthday', que estaba ejecutándose y enviando saludos de cumpleaños a los miembros del personal. Las fechas de nacimiento eran correctas y los saludos estaban todos firmados 'De tu servidor favorito'. Este programa fue detenido y nadie pudo averiguar de dónde vino. Un segundo problema ocurrió cuando la lista telefónica corporativa fue hackeada y todos los números de teléfono fueron cambiados a 867-5309 (aparentemente tomado de la canción del mismo nombre). La lista correcta fue restaurada y nuevamente nadie pudo averiguar cómo se había hecho, aunque el nuevo archivo había sido creado por 'root'. Acabas de recibir una llamada telefónica del administrador del sistema principal diciéndote que la contraseña de root ha sido cambiada. Se ha determinado que la contraseña se estableció con el nombre del perro del administrador del sistema principal. Una investigación adicional ha descubierto que los problemas comenzaron poco después de que se detectaron una serie de correos electrónicos infectados con virus. Cuando se encontró el primero, se implementaron inmediatamente salvaguardias para detener cualquier propagación adicional del virus, pero ahora te preguntas si alguien logró entrar en el sistema a través del código que fue introducido en el sistema por el virus. ¿Cuál debería ser tu siguiente paso de investigación?",
        options: [
            "Verificar si la información de la fecha de nacimiento de RRHH fue accedida desde fuera del sistema, y si es así, rastrear la dirección IP.",
            "Verificar si el nombre del perro del administrador del sistema principal está publicado en alguna red social.",
            "Revisar el correo electrónico sospechoso que se envió y tratar de rastrear la dirección IP.",
            "Revisar los archivos de personal de los otros dos administradores del sistema para ver si hay alguna indicación de que están descontentos."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Durante las pruebas de una actualización, has descubierto que es posible crear un ataque de hombre en el medio que puede cambiar el monto cobrado a los clientes en tu sitio web de comercio electrónico. Tu probador logró cambiar el monto para que todos los clientes recibieran un 10% de descuento. ¿Qué deberías hacer primero?",
        options: [
            "El probador debería ser desalentado de crear este tipo de ataques, ya que no son realistas en el entorno de producción.",
            "Informar inmediatamente a la gerencia que el ataque fue creado por el equipo de pruebas como parte de las pruebas, en caso de que sea detectado.",
            "Trabajar con los desarrolladores para implementar verificaciones como SSL-trip para asegurar que los certificados sean válidos y no auto-firmados.",
            "Verificar en producción si la vulnerabilidad también está en el código de producción."
        ],
        correctAnswer: 3,
        urlImage: ""
    },
    {
        question: "¿Por qué es importante reevaluar las expectativas de riesgo de seguridad con frecuencia?",
        options: [
            "Los interesados deben ser educados sobre todos los riesgos de seguridad en todo momento.",
            "Los interesados tomarán decisiones comerciales basadas en los niveles de riesgo de seguridad asociados.",
            "Los usuarios deben desarrollar un plan de mitigación de riesgos basado en manuales.",
            "Tanto las expectativas de los usuarios como de los interesados respecto a la seguridad deben mantenerse sin cambios."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿Cuál de los siguientes es un aspecto importante de los resultados de las pruebas de seguridad?",
        options: [
            "Se publican para que los usuarios y los interesados accedan a ellos y así ayudarles a comprender mejor el riesgo.",
            "Deben compartirse con los desarrolladores en toda la empresa para mitigar el riesgo en futuros proyectos de desarrollo.",
            "Cuantas menos personas lo sepan, mejor.",
            "Los resultados siempre deben clasificarse por criticidad."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "Estás finalizando tu informe de estado de pruebas de seguridad para un proyecto que está listo para su implementación en producción. Hay un alto grado de riesgo para este proyecto debido a la naturaleza del sistema. Como resultado, deseas poner un énfasis particular en el riesgo. Basado en esto, ¿cuál es la mejor manera de articular el riesgo en tu informe?",
        options: [
            "Una evaluación de riesgo descriptiva incluida en el resumen.",
            "Riesgo general incluido en la última sección del informe.",
            "Impacto del riesgo descrito en el resumen y luego detallado en términos de vulnerabilidades específicas.",
            "El impacto del riesgo no es parte del resumen del informe."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "¿De qué manera son diferentes las herramientas de análisis de seguridad dinámico de las herramientas de análisis dinámico generales?",
        options: [
            "Las herramientas de seguridad son las que examinan el sistema en lugar de solo la aplicación en prueba.",
            "Las herramientas de seguridad funcionan igual en modo dinámico o estático.",
            "Las herramientas de seguridad son más adecuadas para detectar problemas como fugas de memoria.",
            "Las herramientas de seguridad deben adaptarse al lenguaje en el que se implementa la aplicación."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
    {
        question: "Te han asignado la tarea de probar el firewall de la organización. Has revisado el plan de implementación y los pasos, verificado que la configuración se haya establecido según las instrucciones del proveedor del firewall y has realizado un escaneo de puertos. Tu organización está particularmente preocupada por los ataques de denegación de servicio (DOS), especialmente desde que tuvieron uno cuando el viejo firewall estaba en funcionamiento. ¿Qué tipo de pruebas deberías realizar para ayudar a detectar comportamientos inesperados que podrían ser explotados por un ataque DOS?",
        options: [
            "Crear pruebas que envíen paquetes de red malformados o datos fuzzed y ver si son detectados y rechazados por el firewall.",
            "Implementar pruebas automatizadas para realizar pruebas de estrés en los servidores y probar las capacidades de conmutación por error.",
            "Probar los algoritmos de cifrado y descifrado para determinar si son lo suficientemente rápidos para manejar la carga de un ataque DOS.",
            "Realizar un endurecimiento de componentes de software para asegurar que la superficie de ataque se reduzca tanto como sea posible."
        ],
        correctAnswer: 0,
       urlImage: ""
    },
    {
        question: "Si has adquirido una herramienta que se utiliza bajo la Licencia Pública General de GNU, ¿cuál de las siguientes es una consideración importante para el mantenimiento de la herramienta?",
        options: [
            "Confiabilidad del proveedor y capacidad para proporcionar soporte.",
            "Frecuencia y disponibilidad de actualizaciones del proveedor.",
            "Capacidades técnicas de tu equipo para soportar y personalizar la herramienta para tu entorno.",
            "Costo de la licencia y costo del contrato de soporte."
        ],
        correctAnswer: 2,
        urlImage: ""
    },
    {
        question: "¿Cuál de las siguientes es un beneficio de conformarse a los estándares de pruebas de seguridad?",
        options: [
            "Son consistentes y fáciles de seguir ya que son independientes de los objetivos y metas del proyecto.",
            "Son los bloques de construcción para futuras pruebas de seguridad, eliminando la necesidad de empezar desde cero.",
            "Describen una ofensiva efectiva para enfrentar amenazas antes de que ingresen al sistema.",
            "Permiten cierta flexibilidad en las prácticas de seguridad ya que las amenazas siempre están cambiando dinámicamente."
        ],
        correctAnswer: 1,
        urlImage: ""
    },
    {
        question: "¿Cuáles son las ventajas de imponer estándares de seguridad en los contratos?",
        options: [
            "Proporcionan a cada parte una salida legal cuando un problema de seguridad imprevisto afecta negativamente al producto.",
            "Proporcionan un punto de partida para que ambas partes comiencen sus negociaciones.",
            "Son una forma conveniente de hacer público el acuerdo entre las partes.",
            "Pueden cambiar a medida que cambian los estándares, incluso cuando el contrato está finalizado."
        ],
        correctAnswer: 1,
        urlImage: ""
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