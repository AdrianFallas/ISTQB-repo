const data_es = {
  questions: [
    {
      "question": "¿En qué modelos de desarrollo es más importante la prueba de regresión?",
      options: [
        "Secuencial e incremental",
        "Secuencial y iterativo",
        "Incremental y iterativo",
        "Es igualmente importante en todos los modelos"
      ],
      correctAnswer: 2, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Durante qué actividad define un analista de pruebas los casos de prueba de bajo nivel?",
      options: [
        "Análisis de pruebas",
        "Diseño de pruebas",
        "Implementación de pruebas",
        "Ejecución de pruebas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Durante qué actividad suele ocurrir la prueba exploratoria?",
      options: [
        "Análisis de pruebas",
        "Diseño de pruebas",
        "Implementación de pruebas",
        "Ejecución de pruebas"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Qué se entiende por el criterio de calidad “Necesidad” para los casos de prueba?",
      options: [
        "El caso de prueba cubre condiciones límite",
        "El caso de prueba cubre condiciones negativas",
        "El caso de prueba cubre algo que necesita ser probado",
        "El caso de prueba es requerido como predecesor de otro caso de prueba"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una capacidad recomendada en un entorno de prueba?",
      options: [
        "Capacidad de respaldo y restauración regular",
        "Integración completa con todos los sistemas de interfaz sin simulaciones o sustituciones",
        "Capacidades de rendimiento que son representativas del entorno de producción",
        "Todos los roles de usuario tienen acceso de superusuario para evitar retrasos en las pruebas causados por permisos insuficientes"
      ],
      correctAnswer: 0, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás probando un sistema de nómina y necesitas datos de prueba. ¿Cuál es una preocupación que debes tener si vas a usar datos de producción para esta prueba?",
      options: [
        "Formato",
        "Confidencialidad",
        "Trazabilidad",
        "Disponibilidad"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Qué tipo de herramienta se utiliza para gestionar la matriz de trazabilidad?",
      options: [
        "Gestión de defectos",
        "Gestión de pruebas",
        "Gestión de datos de prueba",
        "Gestión de configuración"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás probando una aplicación de banca en línea. En particular, deseas probar la capacidad de un cliente para realizar un pago a un acreedor. Has compilado la siguiente lista de palabras clave para esta capacidad: \n1. Iniciar sesión \n2. Seleccionar cuenta \n3. Seleccionar acreedor \n4. Ingresar monto \n5. Presionar “Pagar” \n6. Cerrar sesión \n¿Qué actividad de prueba importante falta?",
      options: [
        "La mayoría de las personas verificarían su saldo antes de realizar un pago, por lo que se necesita Verificar saldo",
        "La palabra clave debería sugerir cómo se seleccionarán la cuenta y el acreedor, como “Seleccionar acreedor de la lista desplegable de acreedores predefinidos”",
        "No hay verificación de que la acción haya ocurrido, como “Confirmar pago” y “Verificar saldo”",
        "No hay palabras clave para pruebas negativas como “Inicio de sesión fallido” y “Pago fallido”"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una actividad que un Analista de Pruebas debería realizar como parte de la Evaluación de Riesgos?",
      options: [
        "Determinar la probabilidad de que ocurra un riesgo",
        "Determinar el impacto de un riesgo si se materializa",
        "Participar en sesiones de lluvia de ideas con los usuarios para identificar riesgos inesperados y casos límite",
        "Revisar el código para identificar las áreas de riesgo donde se debe concentrar la prueba"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Has estado trabajando en un modelo iterativo en un gran proyecto de software. Has desarrollado una matriz de trazabilidad que rastrea el riesgo de cada requisito y lo mapea al caso de prueba que prueba ese requisito. Acabas de recibir una nueva versión y los desarrolladores han asignado el riesgo de regresión basado en lo que saben que han cambiado. Considera la siguiente tabla de riesgos (1 = riesgo más alto): Dada esta información, ¿en qué orden deberían ejecutarse los casos de prueba para ayudar a mitigar el riesgo de regresión?",
      options: [
        "1, 2, 3, 4, 5",
        "1, 3, 4 y 2, 5 si hay tiempo",
        "5, 4, 3, 1 y no ejecutar 2",
        "1, 5, 4, 3 y 2 si hay tiempo"
      ],
      correctAnswer: 3, // La opción correcta es la b)
      urlImage: "./imagenes/tabla preg10.png"
    },
    {
      "question": "Tienes la siguiente tabla que indica qué áreas del software están cubiertas por los casos de prueba. Quieres usar perfiles operacionales para enfocar las pruebas. Tu investigación indica que las áreas A, C y D han sido impactadas por este cambio. Dada esta información, ¿qué casos de prueba deberían ejecutarse y en qué orden?",
      options: [
        "1, 3, 5 solo",
        "1, 3, 4, 5 solo",
        "2, 4 solo",
        "1, 2, 3, 4, 5"
      ],
      correctAnswer: 0, // La opción correcta es la b)
      urlImage: "./imagenes/tabla preg11.png"
    },
    {
      "question": "Estás utilizando cobertura simplificada para pruebas de dominio. El software está verificando las calificaciones de los exámenes de los estudiantes, particularmente buscando a aquellos que no obtuvieron una calificación de 100 (solo números enteros). ¿Cuál de los siguientes conjuntos de valores para x necesitan ser probados para lograr un 100% de cobertura simplificada?",
      options: [
        "100, 99, 98",
        "100, 101, 99",
        "100, 101, 120, 99, 72",
        "100, 0, 200"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás utilizando cobertura confiable para pruebas de dominio. La ecuación que se está probando es la siguiente:\n Si MoneyPaid >= 10.00 entonces\n\t Imprimir “10.00 más”;\n ¿Cuál de los siguientes conjuntos de valores para x necesitan ser probados para lograr un 100% de cobertura confiable?",
      options: [
        "10, 11, 9",
        "10.00, 9.99, 12.00, 7.00",
        "10.00, 10.01, 9.99",
        "10.00, 9.00"
      ],
      correctAnswer: 1, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás probando un sitio web que permite a las personas inscribirse en una lista de espera para un cachorro. Los siguientes parámetros están disponibles: La investigación ha demostrado que el cachorro más comúnmente seleccionado es un labrador negro macho. Dada esta información, ¿cuál es el mejor orden para los valores de los casos de prueba en el orden en que deben ejecutarse utilizando los criterios de cobertura de elección base?",
      options: [
        "1, 2, 3",
        "1, 4, 6",
        "1, 3, 6",
        "4, 5, 6"
      ],
      correctAnswer: 0, // La opción correcta es la c)
      urlImages: ["./imagenes/tabla1 preg14.png", "./imagenes/tabla2 preg14.png"]
    },
    {
      "question": "Estás trabajando para una empresa de ventas de automóviles. Las métricas han mostrado que la opción de automóvil más popular es la siguiente: \nColor = blanco \nTransmisión = automática \nMotor = híbrido \nUsando la cobertura por pares como criterio de cobertura combinatoria, ¿cuál de las siguientes es la combinación correcta a probar?",
      options: [
        "Rojo, Manual, Eléctrico",
        "Blanco, Automático, Híbrido",
        "Blanco, Manual, Híbrido",
        "Rojo, Automático, Eléctrico"
      ],
      correctAnswer: 2, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Al usar pruebas aleatorias con fines de validación, ¿qué distribución de datos es la mejor?",
      options: [
        "Una que se basa en perfiles operacionales",
        "Una que es independiente del uso",
        "Una que se basa en condiciones límite",
        "Una que se aplica para cumplir con las condiciones de cobertura especificadas"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Qué representa CRUD?",
      options: [
        "El ciclo de vida de las entidades de datos",
        "El enfoque de prueba que se centra en los sistemas operativos",
        "La capacidad de aleatorizar pruebas en un dominio",
        "Un enfoque de prueba estática para derechos de acceso"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás probando un software de inicio de sesión. Si el usuario ingresa una combinación válida de nombre de usuario/contraseña, es llevado a la página de bienvenida. Si ingresan una combinación inválida, son llevados a la página de Olvidé mi contraseña, donde pueden solicitar que se les envíe su nombre de usuario por correo electrónico o cambiar su contraseña. ¿Cuál de las siguientes tablas de estados muestra correctamente solo los cambios de estado desde el estado de Inicio de sesión?",
      options: [
        "Tabla A",
        "Tabla B",
        "Tabla C",
        "Tabla D"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: "./imagenes/tablas preg18.png"
    },
    {
      "question": "Considera el siguiente diagrama de estados para un cajero automático simple. ¿Cuántos casos de prueba se requieren para lograr una cobertura de 1-switch de todo el diagrama de estados?",
      options: [
        "8",
        "17",
        "18",
        "24"
      ],
      correctAnswer: 1, // La opción correcta es la c)
      urlImage: "./imagenes/diagram estado preg19.png"
    },
    {
      "question": "Has utilizado ChatGPT para crear un diagrama de actividad para el escenario de usuario de compra de un libro. Has recibido la siguiente salida: \nAcciones Clave para la Compra de un Libro: \n1. Comenzar \n2. Buscar Libro \n3. Seleccionar Libro \n4. Verificar Disponibilidad del Libro \n5. Elegir Método de Pago \n6. Proporcionar Información de Pago \n7. Confirmar Pago \n8. Recibir Confirmación de Pedido \n9. Finalizar.\n Aparte de un dibujo aproximado, ¿qué no ha incluido ChatGPT?",
      options: [
        "El camino feliz",
        "El escenario principal",
        "Rutas de excepción",
        "El escenario de negocio que se está capturando"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: "./imagenes/diagram actividad preg20.png"
    },
    {
      "question": "Estás probando una aplicación bancaria. En el pasado, los intentos de inicio de sesión inválidos estaban limitados a tres y luego la cuenta se bloqueaba. Esto ha causado muchas quejas de los clientes, por lo que el número de intentos se ha cambiado a 10. Necesitas probar esta capacidad. ¿Cuántas pruebas necesitas para probar el inicio de sesión inválido para lograr una cobertura de bucle simple?",
      options: [
        "3",
        "4",
        "10",
        "1122"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás probando una aplicación que controla la actualización del sistema operativo de un teléfono celular. Las siguientes condiciones deben ser probadas: \n1. Se requiere inicio de sesión \n2. Se requiere conexión a la corriente \n3. Se verifica si se necesita actualización solo si está conectada la corriente \n4. Se solicita al usuario que acepte la actualización. Se ha creado la siguiente tabla de decisiones completa para cubrir estas condiciones: Las condiciones se prueban en el orden especificado. El programa se detiene cuando se encuentra la primera condición negativa. Dada esta información, ¿cuál de las siguientes tablas muestra el uso correcto del operador “no importa”?",
      options: [
        "Tabla A",
        "Tabla B",
        "Tabla C",
        "Tabla D"
      ],
      correctAnswer: 2, // La opción correcta es la a)
      urlImages: ["./imagenes/tabla condiciones preg22.png", "./imagenes/tablas solucion preg22.png"]
    },
    {
      "question": "Dada la siguiente tabla de decisiones parcialmente minimizada, ¿cuál es el conjunto más pequeño de pruebas que se deben ejecutar?",
      options: [
        "1, 2, 3, 5, 9",
        "1, 2, 3, 4, 5, 6, 7, 8, 9",
        "1, 2, 4, 6",
        "Todas estas pruebas deben ser ejecutadas"
      ],
      correctAnswer: 0, // La opción correcta es la c)
      urlImage: "./imagenes/tabla decision preg23.png"
    },
    {
      "question": "Estás probando la configuración de contraseñas para un sistema de comercio electrónico. Se permite al usuario tener entre 8 y 16 caracteres de teclado para su contraseña y deben ingresar la misma contraseña dos veces para confirmarla. ¿Cuál es la relación metamórfica que podría aplicarse a este escenario?",
      options: [
        "Todas las contraseñas deben estar dentro de una cierta longitud",
        "La contraseña y el nombre de usuario deben ser únicos y estar dentro del conjunto de caracteres requeridos",
        "La contraseña y la contraseña de confirmación deben ser las mismas y estar dentro de la longitud y el conjunto de caracteres requeridos",
        "La contraseña y el nombre de usuario deben ser únicos y estar dentro de la longitud y el conjunto de caracteres requeridos"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en una aplicación médica que mide la cantidad de bebidas consumidas por día en relación con la incidencia de cirrosis hepática. La suposición es que cuanto mayor sea el número de bebidas, mayor será la incidencia de cirrosis. ¿Cómo se puede aplicar la prueba metamórfica para ayudar a generar entradas de prueba?",
      options: [
        "Puede determinar el número de bebidas necesarias para afectar la incidencia de la enfermedad",
        "Puede proporcionar un número variable de bebidas por persona",
        "Puede determinar los niveles de cirrosis en una amplia variedad de individuos",
        "Puede ser utilizado por los médicos para anticipar planes de tratamiento"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Eres un gerente de pruebas en un gran proyecto. El equipo realmente quiere hacer pruebas exploratorias, pero te preocupa que no dirijan sus pruebas adecuadamente y que puedan superponerse, resultando en una sobreprueba de algunas áreas y una subprueba de otras. ¿Cuál de las siguientes es una herramienta que se puede utilizar para ayudar a guiar las pruebas?",
      options: [
        "Un informe resumen de pruebas",
        "Una carta de prueba",
        "Una tabla de decisiones",
        "Una lista de técnicas de prueba apropiadas que se pueden aplicar"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Eres un tester que trabaja en la capacidad de pago de un sitio web de comercio electrónico. Te han dado una carta de prueba que describe los perfiles operacionales, los objetivos y el alcance de las pruebas, la descripción del entorno de prueba a utilizar y las limitaciones esperadas del producto. ¿Qué más necesitas para comenzar a probar?",
      options: [
        "Información sobre usuarios existentes",
        "Tarjetas de crédito de prueba que se pueden usar para el pago",
        "Una lista de direcciones válidas para el envío",
        "Los requisitos de rendimiento y seguridad para la función de inicio de sesión"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Has estado utilizando la siguiente lista de verificación para probar la capacidad de ver el saldo de la cuenta en un cajero automático: \n1. ¿Funciona el inicio de sesión válido y falla el inicio de sesión inválido? (pares de cuenta/contraseña válidos/inválidos) \n2. ¿Se muestran y son seleccionables todas las cuentas? \n3. ¿La pantalla cumple con los estándares de UI? \n4. ¿Puedes seleccionar una cuenta y ver el saldo? \n5. ¿Es el saldo consistente con la base de datos? \n6. ¿Tienes una variedad de formas de salir (cerrar sesión, alejarse, verificar tiempo de espera)? \n7. ¿Salir desconecta la sesión?\n Al seguir esta lista de verificación, has encontrado que se le pregunta al usuario si desea imprimir o ver el saldo. ¿Qué deberías hacer?",
      options: [
        "Crear otra lista de verificación ya que esta va a exceder el límite de 7 pasos",
        "Agregar otro paso para ver si el usuario puede seleccionar imprimir o ver y luego un paso para ver si la cantidad se muestra o imprime realmente",
        "Fallar la prueba ya que hay un paso en el flujo real que no coincide con un paso en la lista de verificación",
        "Escribir un defecto para el mantenimiento de la lista de verificación para que se pueda agregar al backlog y ser recogido más tarde como una tarea para actualizar la lista de verificación"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás desarrollando un conjunto de listas de verificación para un nuevo sitio web. Te preocupa especialmente la UI porque las versiones anteriores del producto han sido rechazadas por los usuarios como demasiado complicadas y engañosas. Quieres asegurarte de que esta UI sea mucho mejor y esté a la altura de los estándares de la industria. ¿Cuál de las siguientes sería un buen lugar para buscar información para tu lista de verificación?",
      options: [
        "Los desarrolladores",
        "El historial de pedidos de una muestra de los usuarios del sitio web",
        "Las bibliotecas de defectos y las taxonomías de defectos publicadas por expertos en pruebas de UI",
        "Los sitios web de competidores para ver si son más fáciles de usar y tienen funcionalidades diferentes a las tuyas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Tu organización acaba de crear una nueva aplicación diseñada para ser utilizada por el público en general para obtener información meteorológica actualizada. La aplicación utiliza geolocalización para determinar dónde se encuentra y proporcionar el pronóstico y actualización del clima local. Quieres usar pruebas de multitudes para obtener una visión más amplia de la funcionalidad a través de las geos, pero tu colega dice que la calidad de las pruebas será tan pobre que será inútil. ¿Será esto un problema?",
      options: [
        "Probablemente no, porque la aplicación está diseñada para el público en general, por lo que debería ser utilizable por todos",
        "Sí, y tendrás que volver a probar todo lo que se haga en cada geo",
        "Probablemente sí, porque habrá problemas de zona horaria que dificultarán la comunicación",
        "No, porque la seguridad asegurará que los testers no calificados no puedan acceder a la funcionalidad"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Has estado investigando los defectos que han escapado a producción para una aplicación particular que se utiliza para calcular distancias entre aeronaves en el aire. Hay una cantidad significativa de medidas de datos que se utilizan para estos cálculos, pero has encontrado que la mayoría de los defectos graves han sido causados por un manejo inadecuado de los datos en los bordes de las particiones de equivalencia. ¿Cuál de las siguientes técnicas de prueba sería la más adecuada para usar al probar esta parte de la aplicación?",
      options: [
        "Pruebas exploratorias",
        "Pruebas de dominio",
        "Pruebas CRUD",
        "Pruebas metamórficas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás probando una actualización de un sistema financiero existente. Los requisitos se limitan a 'igual por igual' y los requisitos para el sistema original no existen. Tienes mapas de procesos que se utilizan para capacitar a nuevos usuarios en el antiguo sistema, y crees que estos serán aplicables al nuevo sistema. Dada esta información, ¿qué tipo de prueba sería la más adecuada?",
      options: [
        "Pruebas basadas en datos",
        "Pruebas de tabla de decisiones",
        "Pruebas basadas en estados",
        "Pruebas basadas en escenarios"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una desventaja de usar un modelo de prueba para ayudar con el diseño de pruebas?",
      options: [
        "Es lento",
        "Solo puede ser desarrollado por los desarrolladores, y ellos pueden no tener tiempo para mantenerlo",
        "Puede volverse demasiado complejo de mantener sin IA",
        "Puede perder condiciones de prueba que no se muestran en el modelo"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Has estado probando una aplicación que está diseñada para ser utilizada por el público en general en sus teléfonos móviles. Desafortunadamente, has encontrado que es difícil de usar, y los usuarios están confundidos sobre cómo completar tareas. Este es un fallo en qué área?",
      options: [
        "Adecuación funcional",
        "Completitud funcional",
        "Corrección funcional",
        "Desasociación funcional"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Has visto un prototipo de una nueva aplicación web, pero te preocupa que la interfaz de usuario parezca incómoda y difícil de usar. ¿Qué deberías hacer?",
      options: [
        "Apoyar a un experto en usabilidad en la realización de una revisión de usabilidad",
        "Enviar la aplicación para una evaluación WCAG",
        "Comenzar a trabajar en la creación de mejor texto de ayuda",
        "Desarrollar un gráfico comparativo entre tu producto y un producto similar de un competidor"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Has estado realizando pruebas de instalabilidad. Has verificado que el procedimiento de instalación es claro y fácil de seguir. También has verificado que la instalación del software se completa sin errores. ¿Qué necesitas probar a continuación?",
      options: [
        "Nada, has terminado",
        "Desinstalar",
        "Verificar que el software recién instalado funcione correctamente",
        "Verificar que no haya problemas de coexistencia con ningún otro producto"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Acabas de instalar una nueva aplicación en tu teléfono que organizará tus contactos a través de múltiples aplicaciones. Has encontrado que ahora tu correo electrónico no funciona. ¿Qué tipo de prueba debería haberse realizado para detectar este problema?",
      options: [
        "Adaptabilidad",
        "Coexistencia",
        "Reemplazabilidad",
        "Interoperabilidad"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Qué medida se puede utilizar para determinar si se están encontrando defectos lo antes posible?",
      options: [
        "Eficiencia de eliminación de defectos (DRE)",
        "Efectividad de contención por fase (PCE)",
        "Análisis de causa raíz (RCA)",
        "Gráficos de convergencia de defectos (DCC)"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es un problema que es visible en esta tabla CRUD?",
      options: [
        "La aplicación de mantenimiento de cuentas no puede leer los datos existentes para verificar duplicados",
        "El DBA puede hacer todo",
        "El usuario general no podrá ver los datos",
        "La aplicación de mantenimiento de cuentas no puede hacer una actualización"
      ],
      correctAnswer: 3, // La opción correcta es la a)
      urlImage: "./imagenes/tabla preg39.png"
    },
    {
      "question": "Has estado desarrollando un caso de uso a partir de un documento de requisitos. Has podido determinar la ruta principal y varias rutas de extensión. Los requisitos no incluyen nada sobre posibles condiciones de error o cómo manejarlas. ¿Qué parte de tu caso de uso debería resaltar este problema?",
      options: [
        "Las rutas de excepción no se pueden construir con la información existente",
        "La ruta principal debería haber incluido los posibles errores",
        "Las rutas de extensión deberían haber incluido los posibles errores",
        "El dominio está demasiado mal definido para permitir la asignación de entidades de datos"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un nuevo Sistema de Gestión de Aprendizaje (LMS) para una universidad. La facultad ha estado muy involucrada en el desarrollo de los requisitos y están muy contentos con el resultado. ¿Qué técnica de revisión sería útil para ayudar a asegurar que el LMS sea usable por todos los usuarios objetivo?",
      options: [
        "Revisión basada en listas de verificación",
        "Revisión basada en escenarios",
        "Revisión basada en roles",
        "Revisión basada en perspectivas"
      ],
      correctAnswer: 2, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Has estado revisando documentos de requisitos como equipo. Hay varios casos de uso en los requisitos, pero estos parecen ser ignorados por la mayoría de los revisores. ¿Cómo puedes ayudar a hacer que los casos de uso sean más interesantes para revisar y más propensos a exponer defectos?",
      options: [
        "Revisión basada en listas de verificación",
        "Revisión basada en escenarios",
        "Revisión basada en roles",
        "Revisión basada en perspectivas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Has revisado los números de agrupación de defectos para la última versión de un sistema ERP. Has encontrado que los informes del sistema tenían muchos más defectos que cualquier otra área. También puedes ver que estos defectos tendían a tener una prioridad más alta que los defectos en otros grupos. ¿Qué deberías hacer en este punto?",
      options: [
        "Mejorar el rigor de las pruebas para esta área y aumentar las pruebas de regresión en la misma",
        "Distribuir las pruebas de manera uniforme en todas las áreas del software en lugar de concentrarse en áreas específicas con grupos de defectos",
        "Construir automatización de pruebas para las áreas con alta agrupación de defectos, ya que esto aliviará los problemas",
        "Aumentar el rigor de las pruebas para esta área y disminuir las pruebas de regresión, ya que ya no serán tan importantes"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Tu Porcentaje de Detección de Defectos (DDP) en el último proyecto fue del 62%. Aunque el proyecto fue considerado un éxito, hubo una discusión significativa sobre el costo de las pruebas, particularmente en las etapas posteriores del proyecto. ¿Cómo puedes usar el DDP para mejorar las pruebas en el próximo proyecto?",
      options: [
        "Establecer un objetivo de DDP más alto",
        "Examinar por qué hubo tantas fugas en el proyecto anterior y corregir el proceso según sea necesario",
        "Dejar de informar el DDP ya que ya has demostrado que las pruebas fueron efectivas con los pocos defectos en producción",
        "Concentrar más pruebas en las áreas propensas a defectos basándose en el análisis de agrupación"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cómo ayuda la clasificación de defectos con el análisis de causa raíz?",
      options: [
        "Agrupa los defectos para que puedan ser analizados juntos",
        "Ayuda a clasificar los defectos en orden de importancia",
        "Ahorra tiempo al informar un defecto, ya que parte de la información ya no es necesaria",
        "Proporciona a los testers la libertad de informar defectos de la manera más eficiente"
      ],
      correctAnswer: 0, // La opción correcta es la a)
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