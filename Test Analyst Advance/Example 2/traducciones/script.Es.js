const data_es = {
  questions: [
    {
      "question": "¿Por qué un analista de pruebas lleva a cabo las mismas actividades en cada incremento de un modelo de desarrollo incremental?",
      options: [
        "Porque el desarrollo también se realiza en ciclos que consisten en las mismas actividades en cada incremento",
        "Porque las actividades del analista de pruebas en cada incremento se limitan al análisis de pruebas y diseño de pruebas",
        "Porque en cada incremento, el analista de pruebas está involucrado tan pronto como comienza el desarrollo",
        "Porque cada incremento desarrolla una nueva parte del software, que necesita ser probada"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Durante el análisis de pruebas, el analista de pruebas decide utilizar la técnica de análisis de valores límite de 2 valores para un dominio 'edad' que representa la edad de un cliente, que se utiliza para determinar el descuento del cliente. ¿Cuál de las siguientes tareas debería realizar el analista de pruebas durante el diseño de pruebas?",
      options: [
        "Definir la condición de prueba: 'El sistema asigna un descuento para un niño menor de 18 y un anciano mayor de 64.'",
        "Determinar si los casos de prueba deben documentar o no la cantidad específica de los descuentos esperados",
        "Almacenar los valores límite identificados para las edades de los clientes en un repositorio de datos de prueba para apoyar la ejecución de pruebas automatizadas",
        "Escribir un script de prueba automatizado utilizando pruebas basadas en palabras clave: 'SetAge(18); VerifyDiscountIsNotAssigned().'"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Basado en el siguiente caso de prueba (simplificado):\nEntrada: edad menor de 18\nSalida esperada: El sistema asigna un descuento para niños.\nUn analista de pruebas crea el siguiente script de prueba (simplificado) utilizando pruebas basadas en palabras clave:\nEnterAge(17)\nVerifyChildrenDiscountApplied(yes)\nEnterAge(18)\nVerifyChildrenDiscountApplied(no)\n¿En qué actividad de prueba tiene lugar esta acción?",
      options: [
        "Análisis de pruebas",
        "Diseño de pruebas",
        "Implementación de pruebas",
        "Ejecución de pruebas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Una aplicación médica tiene una interfaz para un lector de tarjetas de salud. Como analista de pruebas, necesitas un simulador para el lector de tarjetas de salud que reemplace los dispositivos de hardware en el entorno de prueba del sistema. Indicas los siguientes requisitos para el simulador:\n• El simulador deberá implementar la especificación exacta de la interfaz al sistema de información médica como los dispositivos reales.\n• Los testers con acceso al entorno de prueba del sistema deberán poder editar y gestionar las tarjetas de salud virtuales.\n• El simulador deberá estar disponible durante la implementación de pruebas del sistema y la ejecución de todos los incrementos.\n¿Cuál de la siguiente información falta y debería ser añadida?",
      options: [
        "Una copia de la especificación de la interfaz del lector de tarjetas de salud",
        "El período específico de tiempo durante el cual se necesita el simulador",
        "Un procedimiento específico de respaldo y restauración para las tarjetas de salud virtuales",
        "La unidad organizativa que deberá proporcionar y mantener el simulador"
      ],
      correctAnswer: 3, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "El sistema de calificación y facturación existente de un operador de red móvil será reemplazado por un nuevo software. Dado que las reglas de calificación y facturación son muy complejas, la estrategia de prueba del proyecto planea probar la corrección funcional con varios días de tráfico de red en vivo. Como analista de pruebas, deseas resolver el problema del oráculo de prueba generando los detalles de las facturas esperadas para una gran cantidad de tráfico con un pseudo-oráculo. ¿Cuál de las siguientes soluciones puede servir como un pseudo-oráculo?",
      options: [
        "Ejecutar el sistema de calificación y facturación existente en el entorno de prueba para generar los resultados esperados",
        "Usar scripts de prueba para generar resultados esperados en casos de prueba simples y aceptar todos los demás resultados reales",
        "Ejecutar scripts automatizados para verificar los conteos de llamadas, duraciones y tipos en las facturas basadas en los datos de tráfico",
        "Cambiar selectivamente las duraciones de las llamadas en el tráfico de red en vivo y verificar que las facturas cambien en consecuencia"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre los datos de prueba anonimizados es MÁS probable que sea cierta?",
      options: [
        "Los datos de prueba pueden carecer de la variabilidad requerida para pruebas exhaustivas",
        "Los datos de prueba estarán restringidos solo a datos de entrada",
        "Los datos de prueba estarán desactualizados ya que son sensibles al tiempo",
        "Los datos de prueba servirán principalmente como palabras clave para pruebas basadas en palabras clave"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás probando un sistema de colas utilizando pruebas basadas en palabras clave. Las siguientes palabras clave están disponibles:\n• Start()– crea una cola vacía\n• Enqueue(e)- inserta el elemento e al final de la cola\n• Dequeue()- elimina un elemento del principio de la cola\n• CreateQueue(e1, e2, ..., en)– una palabra clave compuesta equivalente a la secuencia de palabras clave: Enqueue(e1), Enqueue(e2), ..., Enqueue(en)\n• AssertFirstElement(e)- verifica si hay un elemento e al principio de la cola; si no, el sistema devuelve un mensaje de error\n• AssertEmpty()- verifica si la cola está vacía; si no, el sistema devuelve un mensaje de error\nHas diseñado los siguientes scripts de prueba:\n i) Start(); Enqueue(A); Enqueue(B); Dequeue(); AssertFirstElement(A)\n ii) Start(); Enqueue(A); Enqueue(B); Dequeue(); AssertNonempty()\n iii) Start(); Enqueue(A); Dequeue(); Enqueue(B); AssertFirstElement(B)\n iv) Start(); CreateQueue(A, B); Dequeue(); Dequeue(); AssertEmpty()\n v) Start(); CreateQueue(A, B); Dequeue(); AssertFirstElement(B)\n¿Cuáles de estos scripts de prueba verifican el siguiente criterio de aceptación utilizando las palabras clave disponibles: 'Si se agregaron más elementos a la cola de los que se eliminaron, la cola no está vacía'?",
      options: [
        "i), ii) y iii)",
        "ii), iv) y v)",
        "iii) y v)",
        "ii) y iv)"
      ],
      correctAnswer: 2, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Como analista de pruebas en un proceso de desarrollo incremental-iterativo, ¿cómo puedes MEJOR apoyar la gestión de testware en la herramienta de gestión de pruebas?",
      options: [
        "Definiendo una clasificación estándar de severidad para fallos en la ejecución de pruebas",
        "Especificando el procedimiento de seudonimización para los datos de prueba extraídos del sistema en vivo",
        "Gestionando la configuración de los entornos de prueba",
        "Seleccionando el conjunto más adecuado de casos de prueba para pruebas de regresión"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuáles de los siguientes son ejemplos de cómo un analista de pruebas puede contribuir al análisis de riesgos del producto?",
      options: [
        "Entrevistar a analistas de negocio sobre lo que puede salir mal con la aplicación",
        "Determinar el alcance de las pruebas de regresión realizando un análisis de impacto",
        "Identificar y evaluar nuevos riesgos del producto que ocurren durante la ejecución de pruebas",
        "Estimar el daño que cada riesgo del producto puede causar cuando ocurre",
        "Aplicar las técnicas de prueba más adecuadas para cada riesgo del producto"
      ],
      correctAnswer: [0, 3], // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Se te proporciona información de trazabilidad sobre las funciones implementadas (F1-F5), riesgos identificados (R1-R5) y casos de prueba de regresión (TC1-TC6) en forma de las siguientes matrices de trazabilidad. También tienes la siguiente información sobre los niveles de riesgo para todos los riesgos identificados. Todos los seis casos de prueba se ejecutaron en el último ciclo de pruebas. Luego, se te informa que la implementación de F3 ha cambiado. Sigues las pruebas basadas en riesgos y aplicas un análisis de impacto, lo que permite ejecutar solo los casos de prueba afectados por los cambios en el código desde la última ejecución de pruebas. Durante la próxima ejecución del conjunto de pruebas de regresión, ¿qué caso de prueba debería ejecutarse ÚLTIMO?",
      options: [
        "TC4",
        "TC5",
        "TC1",
        "TC3"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImages: ["./imagenes/matriz trazabilidad preg10.png", "./imagenes/matriz riesgo preg10.png"]
    },
    {
      "question": "Estás realizando pruebas de sistema en una aplicación de banca móvil. El desarrollo está dividido entre un equipo de backend que diseña la lógica de negocio en los servidores y un equipo de frontend que diseña la interfaz gráfica de usuario (GUI) y la aplicación en los dispositivos móviles. El equipo de backend es experimentado y puede depurar y resolver defectos de manera rápida y confiable. El equipo de frontend ha tenido mucha rotación de personal. Recientemente, ocurrieron fallos críticos en producción que se resolvieron en la versión anterior:\n• Pagos rechazados por los bancos de destino debido a números de cuenta bancaria inválidos. La causa raíz fue la validación insuficiente de cuentas bancarias en los dispositivos móviles.\n• Elementos de GUI mostrados incorrectamente en algunos tamaños y resoluciones de pantalla que obstruían a los usuarios al ingresar pagos.\nLa próxima versión contendrá los siguientes cambios:\n• Se agregó una nueva función que permite a los usuarios realizar pagos tomando una foto de una factura con su dispositivo móvil.\n• Se corrigió un defecto importante en el cálculo del saldo de la cuenta.\n• La barra de navegación en la GUI fue rediseñada para cumplir con los estándares de accesibilidad.\nTienes un conjunto de pruebas de regresión integral con pruebas categorizadas por el impacto de fallos potenciales. Debido a recursos limitados para pruebas, no puedes ejecutarlas todas, así que elegiste la estrategia de pruebas de regresión basada en el historial. ¿Cuál de los siguientes objetivos de prueba se adapta MEJOR a este escenario?",
      options: [
        "Ejecutar todas las pruebas de regresión para la validación de cuentas bancarias utilizando pagos basados en fotos y pagos ingresados manualmente",
        "Ejecutar todas las pruebas de regresión para la liquidación de pagos y otras funciones relacionadas con los cálculos de saldo",
        "Ejecutar todas las pruebas de regresión con un impacto de riesgo crítico o mayor de fallos potenciales",
        "Ejecutar las pruebas de regresión de la GUI que contienen la barra de navegación en dispositivos móviles con varias pantallas, priorizadas por las estadísticas de distribución de dispositivos",
        "Ejecutar al menos una prueba de regresión para cada requisito, priorizando los escenarios más utilizados"
      ],
      correctAnswer: [0, 3], // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Un sistema de evaluación de complejidad de código toma dos enteros como entrada, representando la complejidad ciclomática (CC) y el número de variables en el código (VAR). El sistema verifica si el código es complejo basado en el siguiente modelo:\nIF (CC ≥ 10) AND (VAR ≥8) THEN RETURN 'el código es complejo'.\nEl dominio determinado por la intersección de los dos límites anteriores es un conjunto de puntos en un espacio bidimensional con coordenadas enteras (CC, VAR).\nQuieres probar la corrección funcional de la implementación de este dominio utilizando pruebas de dominio. ¿Qué conjunto de puntos de prueba podría resultar del uso de la cobertura de dominio SIMPLIFICADA para probar la corrección de esta implementación de dominio?",
      options: [
        "(12, 7), (12, 8), (9, 10), (10, 10)",
        "(6, 5), (10, 8), (13, 10)",
        "(11, 8), (11, 9), (9, 11), (10, 11)",
        "(10, 10), (12, 8), (15, 11)"
      ],
      correctAnswer: 0, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Los requisitos para preparar espresso son:\n• La presión debe ser al menos 9 bares para una extracción ideal.\n• La temperatura debe ser al menos 90°C y como máximo 96°C para evitar la sub-extracción o quemar el café.\nPruebas el controlador de software que abre la válvula de agua caliente cuando la presión (P) y la temperatura (T) están en el rango correcto (es decir, P≥9 Y T≥90 Y T≤96) y la cierra de lo contrario (es decir, P<9 O T<90 O T>96). El barómetro mide la presión con una precisión de 0.1 bar; el termómetro funciona con una precisión de 0.5°C. Tu suite de pruebas ejecuta el controlador con las siguientes entradas (P, T) de presión en bares y temperatura en grados Celsius:\nA =(9, 90)\nB =(9, 96)\nC=(8.9, 93)\nD=(10, 96.5)\nE =(10, 93)\nF =(8, 89)\nG=(10, 98)\n¿Cuál de las siguientes entradas falta para una cobertura de dominio 100% confiable?",
      options: [
        "(8, 93)",
        "(9.7, 90.5)",
        "(10.9, 89.5)",
        "(10, 90)"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás probando la corrección funcional de una aplicación particular en varios entornos, descritos por los siguientes parámetros y sus posibles valores:\n• sistema operativo (valores posibles: Windows, Linux, iOS)\n• RAM (valores posibles: 16GB, 32GB, 64GB)\n• si hay un puerto USB-C (valores posibles: sí, no)\nBasado en la investigación de mercado, la configuración más común es Windows OS con 16GB de memoria y un puerto USB-C. Ya has preparado las pruebas para las siguientes configuraciones:\n• Windows, 16GB, USB-C\n• iOS, 16GB, USB-C\n• Windows, 32GB, USB-C\n• Windows, 64GB, USB-C\n• Linux, 16GB, sin USB-C\nConsidera las siguientes nuevas configuraciones que se pueden probar:\n i) Windows, 16GB, sin USB-C\n ii) Linux, 16GB, USB-C\n iii) Linux, 64GB, sin USB-C\n iv) iOS, 32GB, sin USB-C\n v) iOS, 64GB, USB-C\n¿Cuál de ellas debería añadirse al conjunto existente para lograr completamente el criterio de cobertura BASE CHOICE?",
      options: [
        "i) y ii)",
        "iii) y iv)",
        "ii), iv), y v)",
        "i), iii), y v)"
      ],
      correctAnswer: 2, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Una compañía que ofrece pólizas de seguro de hogar tiene varias opciones de póliza. Estas dependen de los siguientes factores:\n• Tipo de construcción: casa, adosada, edificio de apartamentos, cabaña\n• Material: madera, concreto, ladrillo, mixto\n• Ubicación: ciudad, suburbio, campo\nUsando pruebas por pares, ¿cuántos casos de prueba se requieren para lograr una cobertura par 100%?",
      options: [
        "16",
        "12",
        "64",
        "4"
      ],
      correctAnswer: 0, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Qué dificultad de las pruebas aleatorias puede ser abordada utilizando pruebas aleatorias GUIADAS?",
      options: [
        "Falta de criterios de cobertura bien definidos",
        "Dependencia de un oráculo de prueba automatizado",
        "Redundancia de los datos de prueba seleccionados",
        "Negligencia de la semántica de los datos"
      ],
      correctAnswer: 2, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es un ejemplo de pruebas CRUD?",
      options: [
        "Verificar que un usuario, después de crear una cuenta y definir una contraseña, puede modificar la contraseña de la cuenta",
        "Verificar que un sistema acepta, como contraseña, cualquiera de 1,000 cadenas generadas aleatoriamente de varias longitudes",
        "Verificar que el tiempo desde que se solicita un cambio de contraseña hasta verificar ese cambio es menor a 10 milisegundos",
        "Comprobar si un nuevo usuario puede usar una contraseña que otro usuario ya ha utilizado"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás probando un sistema que implementa un patrón de cortacircuito. El sistema está modelado con el diagrama de transición de estados mostrado a continuación. Todos los posibles viajes de ida y vuelta son factibles. Ya has diseñado el caso de prueba que ejerce la siguiente secuencia de estados:\nCerrado, Abierto, MedioAbierto, Cerrado, Abierto, MedioAbierto, Abierto, Fin\n¿Cuál es la cobertura de viajes de ida y vuelta lograda por este caso de prueba?",
      options: [
        "100%",
        "50%",
        "60%",
        "80%"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: "./imagenes/diagram preg18.png"
    },
    {
      "question": "Eres responsable de diseñar pruebas basadas en estados para un componente del sistema que gestiona el ciclo de vida de las reclamaciones para una compañía de seguros. Tienes la siguiente especificación: La variable x contiene el tipo de resolución de la reclamación con valores 'acc' para aceptada y 'act' para activa. ¿Cuántos 1-switches diferentes deben ser ejercitados por el conjunto de pruebas resultante para lograr una cobertura del 100% de 1-switch?",
      options: [
        "16",
        "14",
        "8",
        "15"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: "./imagenes/diagram preg19.png"
    },
    {
      "question": "Estás probando un escenario de pedido de comida basado en el siguiente caso de uso:\n1. El cliente abre la aplicación e inicia sesión.\n2. El cliente navega por el menú y selecciona artículos para pedir.\n3. El cliente agrega los artículos seleccionados al carrito.\n4. El cliente procede a la caja.\n5. La aplicación muestra el resumen del pedido, incluyendo artículos, cantidades y precio total.\n6. El cliente confirma el pedido.\n7. La aplicación pregunta si se debe usar el método de pago guardado.\n8. El cliente confirma el método de pago guardado.\n9. La aplicación procesa el pago.\n10. La aplicación envía una notificación de confirmación al cliente.\n11. La aplicación reenvía el pedido al restaurante.\n12. La aplicación actualiza el estado del pedido a 'Confirmado'.\nEscenarios alternativos:\n4A. El cliente vuelve a navegar por el menú. El escenario regresa al paso 2.\n6A. El cliente vuelve a navegar por el menú. El escenario regresa al paso 2.\n7A. No hay método de pago guardado. El sistema pide los detalles de la tarjeta de crédito. El cliente completa los datos. El escenario va al paso 9.\n7B. Hay más de un método de pago guardado. El sistema pide al cliente que seleccione uno de los métodos de pago. El escenario va al paso 9.\nExcepciones:\n9A. El proceso de pago falla. El sistema informa al cliente sobre el error. El caso de uso termina.\nLa estrategia de prueba adoptada requiere probar el escenario principal y todas las alternativas y excepciones. La estrategia de prueba permite que se prueben más de una alternativa dentro de un solo caso de prueba. Sin embargo, está prohibido crear casos de prueba en los que ocurran tanto una alternativa como una excepción (es decir, si ocurre una excepción en un caso de prueba, no puede ocurrir ninguna alternativa en él).\n¿Cuál es el NÚMERO MÍNIMO de casos de prueba que cubrirán todos los escenarios para este caso de uso?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Considera el siguiente diagrama de actividad. ¿Cuál es el NÚMERO MÍNIMO de casos de prueba para ejercitar todos los escenarios definidos por este diagrama?",
      options: [
        "2",
        "3",
        "6",
        "4"
      ],
      correctAnswer: 0, // La opción correcta es la d)
      urlImage: "./imagenes/diagram actividad preg21.png"
    },
    {
      "question": "Estás probando un sistema de pago a través de un cajero automático. El pago se puede realizar con tarjeta de débito (D) o en efectivo (C), y su aceptabilidad depende de varios factores, incluyendo el PIN, el monto solicitado y la ubicación del cajero automático. Las reglas de negocio se describen en una tabla de decisiones mostrada a continuación. ¿Cuál es el NÚMERO MÍNIMO de columnas que puede tener esta tabla de decisiones después de la minimización?",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      correctAnswer: 3, // La opción correcta es la b)
      urlImage: "./imagenes/tabla preg22.png"
    },
    {
      "question": "Considera la siguiente tabla de decisiones minimizada. Asocia las reglas (1-4) con sus características (A-D):\n1. Regla R2\n2. Regla R3\n3. Regla R4\n4. Regla R5\nA. Su suma de verificación es 1\nB. Su suma de verificación es 2 y es consistente con las otras reglas\nC. Su suma de verificación es 8\nD. Es inconsistente con la regla R1\n",
      options: [
        "1D, 2A, 3C, 4B",
        "1B, 2D, 3A, 4C",
        "1B, 2C, 3A, 4D",
        "1D, 2B, 3C, 4A"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: "./imagenes/tabla preg23.png"
    },
    {
      "question": "Estás probando una función que busca hoteles según un criterio dado. En la entrada, el usuario selecciona el área de búsqueda (A), y el precio mínimo (Min) y máximo (Max) permitido por noche. La función devuelve una lista (L) de hoteles que cumplen con los criterios.\nDeja que A1, Min1 y Max1 sean la entrada, y L1 sea la salida esperada del caso de prueba fuente. Deja que A2, Min2 y Max2 sean la entrada, y L2 sea la salida esperada del caso de prueba de seguimiento.\n¿Cuál de las siguientes describe una relación metamórfica correcta entre el caso de prueba fuente y el caso de prueba de seguimiento para la función de búsqueda?",
      options: [
        "Si A1 = A2 y Max1 - Min1 > Max2 - Min2, entonces L2 contiene todos los hoteles de L1",
        "Si Min2 < Min1 y Max2 > Max1, entonces L2 tiene al menos tantos elementos como L1",
        "Si A1 y A2 son disjuntos, entonces L1 y L2 son disjuntos",
        "Si A2 está contenido en A1, entonces L1 contiene todos los hoteles de L2"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Un sistema de planificación de rutas calcula la ruta óptima para un viaje en coche. Pruebas el sistema, utilizando una función API que tiene tres parámetros de entrada: coordenadas del punto de partida X, coordenadas del punto de destino Y, y criterio de optimización O. El criterio O puede tomar uno de dos valores: S (buscar la ruta más corta) o T (buscar la ruta con el tiempo de viaje más rápido). La función devuelve la longitud de la ruta óptima en kilómetros.\nPruebas la corrección del sistema utilizando pruebas metamórficas con las siguientes relaciones metamórficas:\n• MR1: Si el criterio cambia de S a T, y X e Y permanecen sin cambios, la distancia calculada no puede disminuir.\n• MR2: Para el criterio S, la suma de las longitudes de las rutas de X a Y y de Y a Z no puede ser menor que la longitud de la ruta de X a Z.\nSupón que Roma, Pisa y Milán son las coordenadas de tres puntos en el mapa. Los dos casos de prueba fuente son los siguientes:\n• TC1. Entrada: X = Roma, Y = Pisa, O = S. Salida: 335 km.\n• TC2. Entrada: X = Pisa, Y = Milán, O = S. Salida: 282 km.\n¿Cuál de los siguientes casos de prueba de seguimiento causa un fallo al violar al menos una de las relaciones metamórficas MR1 o MR2?",
      options: [
        "Entrada: X = Roma, Y = Roma, O = S. Salida: 335 km",
        "Entrada: X = Pisa, Y = Milán, O = T. Salida: 282 km",
        "Entrada: X = Milán, Y = Pisa, O = S. Salida: 283 km",
        "Entrada: X = Roma, Y = Milán, O = S. Salida: 630 km"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Eres el analista de pruebas para una empresa que desarrolla una nueva plataforma de comercio electrónico. La plataforma tiene como objetivo revolucionar las compras en línea integrando características de realidad aumentada que permiten a los usuarios probarse ropa y accesorios de forma virtual. La discusión entre el equipo de desarrollo y los propietarios del producto reveló varios factores importantes que deben tenerse en cuenta al probar la plataforma en la próxima iteración:\n• La interfaz de usuario debe ser intuitiva y receptiva en varios navegadores web. Se debe prestar especial atención a las características de realidad aumentada y su integración con la experiencia general del usuario.\n• La plataforma debe ser compatible con los auriculares más populares del mercado.\n• Las funcionalidades principales de la plataforma de compras en línea (por ejemplo, navegación de productos, características del carrito de compras, proceso de pedido y pago) se implementarán utilizando los mecanismos existentes de la plataforma anterior creada por la empresa.\nSe te encarga preparar cartas de prueba para pruebas exploratorias en esta plataforma durante la iteración actual. Los testers exploratorios son usuarios experimentados de plataformas de compras en línea que tienen un profundo conocimiento del producto que se está desarrollando. ¿Cuál de las siguientes cartas de prueba para una sesión de prueba exploratoria ABORDA MEJOR los problemas del escenario anterior?",
      options: [
        "Carta de prueba 1: Explorar el proceso de pago con varios métodos de pago para descubrir vulnerabilidades de seguridad",
        "Carta de prueba 2: Explorar la característica de realidad aumentada 'Visualización de Productos' con el navegador web Firefox para descubrir problemas de experiencia del usuario",
        "Carta de prueba 3: Explorar el proceso de pago con varios dispositivos y tamaños de pantalla para descubrir problemas de compatibilidad con varios tipos de auriculares",
        "Carta de prueba 4: Explorar la característica de realidad aumentada 'Cámara de Pruebas' con varios navegadores web para descubrir problemas de usabilidad"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "La empresa de comercio electrónico está a punto de lanzar su nueva aplicación web, y su éxito depende en gran medida del funcionamiento impecable de su sistema de pagos. Tu tarea es verificar que el sistema de pagos tenga el nivel requerido de corrección funcional y usabilidad.\nEl equipo de desarrollo completó recientemente las características principales del sistema de pagos y las implementó en un entorno de pruebas, que es una réplica del entorno de producción pero aislada para fines de prueba.\nEl sistema de pagos está diseñado para manejar una variedad de métodos de pago, incluidos pagos con tarjeta de crédito, pagos móviles simplificados y transferencias bancarias directas. El equipo de desarrollo ya ha implementado un conjunto integral de datos de prueba sintéticos, incluidos números de tarjetas de crédito ficticios, cuentas bancarias y varias transacciones.\n¿Cuál de las siguientes es la carta de prueba MÁS apropiada para verificar la corrección funcional y la usabilidad del sistema de pagos?",
      options: [
        "Explorar el sistema de pagos en una red externa con pruebas de penetración simulando ataques para descubrir si tiene alguna vulnerabilidad potencial del sistema",
        "Explorar la aplicación web de comercio electrónico en el servidor de producción con varios personajes y escenarios de uso para descubrir problemas funcionales y de rendimiento en todo el sistema",
        "Explorar el sistema de pagos en el servidor de pruebas con datos de prueba sintéticos para evaluar la usabilidad del procedimiento de pago, la precisión de los resultados y detectar áreas de mejora",
        "Explorar la interfaz gráfica de usuario del sistema de pagos con pautas de diseño de experiencia de usuario para descubrir la intuitividad y estética de la interfaz de usuario"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Tu organización está desarrollando una aplicación de cuestionario de astronomía. La especificación indica que se seleccionan aleatoriamente 24 preguntas de astronomía de un grupo y se presentan una por una al jugador. Cada pregunta tiene cuatro posibles respuestas. Una de ellas es correcta; las otras no. Cuando el jugador selecciona una respuesta, el cuestionario indica si la selección es correcta o incorrecta. Posteriormente, el jugador puede proceder a la siguiente pregunta. El cuestionario muestra la puntuación cuando el jugador ha completado las 24 preguntas.\nComo analista de pruebas, diseñaste una lista de verificación para guiar las pruebas funcionales del sistema basadas en la experiencia. ¿Cuál de los siguientes elementos de la lista de verificación es el MÁS apropiado para verificar el flujo correcto de las interacciones del usuario?",
      options: [
        "Cuando la aplicación muestra una pregunta, ¿se muestran y son seleccionables cuatro respuestas diferentes?",
        "Para cada pregunta, ¿indica la aplicación cuál respuesta es correcta y cuáles respuestas son incorrectas?",
        "Cuando el jugador selecciona una respuesta incorrecta a una pregunta, ¿marca la aplicación la respuesta incorrecta en rojo y la respuesta correcta (no seleccionada) en verde?",
        "¿Cuánto tiempo requiere, en promedio, un aficionado a la astronomía para responder las 24 preguntas?"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Eres responsable de las pruebas del sistema de un videojuego de un solo jugador basado en la web. Has realizado pruebas basadas en la experiencia para versiones anteriores del juego utilizando una lista de verificación. Entre otras cosas, has probado interrumpir el juego con los siguientes elementos de la lista de verificación: El siguiente incremento se centra en la accesibilidad del videojuego para jugadores con diversas discapacidades, sin cambiar la funcionalidad. ¿Cuál de los siguientes elementos de la lista de verificación deberías agregar a tu lista para abordar las nuevas características?",
      options: [
        "Dada la advertencia de interrupción, si el jugador hace clic en el botón 'Continuar juego', ¿la aplicación reanuda el juego donde se dejó?",
        "¿Es el juego vulnerable a ataques de seguridad cuando los jugadores con discapacidades lo interrumpen intencionada o involuntariamente?",
        "¿Es la legibilidad del texto de advertencia de interrupción y los subtítulos de los botones de un nivel máximo de inglés de 5to grado?",
        "¿Son los colores de los botones en la advertencia de interrupción claramente distinguibles para jugadores con deficiencia de color rojo-verde?",
        "¿Cuál es el grado más alto de daltonismo con el que los jugadores aún pueden diferenciar los colores de los botones de la advertencia de interrupción?"
      ],
      correctAnswer: [2, 3], // Las opciones correctas son la d) y la e)
      urlImage: "./imagenes/tabla preg29.png"
    },
    {
      "question": "¿Cuál de los siguientes UTILIZA MEJOR las ventajas de las pruebas en masa?",
      options: [
        "Diseñar casos de prueba con un analista de pruebas",
        "Realizar pruebas beta con usuarios diversos",
        "Ejecutar los mismos scripts de prueba repetidamente",
        "Revisar el diseño de la interfaz gráfica con muchos revisores"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Eres un analista de pruebas en un proyecto para una aplicación de búsqueda de rutas para conductores. El proyecto se lleva a cabo utilizando Scrum, que combina elementos de modelos de desarrollo iterativos y modelos de desarrollo incremental. En la iteración actual del proyecto, se desarrollaron tres características que actualmente están en prueba:\n• una interfaz de mapa interactivo que permite a los usuarios visualizar rutas\n• instrucciones de navegación giro a giro para guiar a los usuarios a lo largo de su ruta elegida con actualizaciones en tiempo real sobre giros, salidas y maniobras próximas\n• guía de voz que proporciona instrucciones manos libres a los conductores, mejorando la seguridad y la conveniencia durante el viaje\nLa aplicación se está desarrollando para smartphones y se espera que funcione en sistemas iOS y Android. Los analistas de pruebas en cada iteración son responsables de las pruebas del sistema en la aplicación completamente integrada. El análisis de pruebas ha revelado que puede ser difícil o incluso imposible evaluar si la ruta encontrada por el algoritmo es óptima. El análisis de riesgos identificó el siguiente riesgo de muy alto nivel: “La aplicación no funciona correctamente en todas las configuraciones potenciales de dispositivos móviles, incluidos elementos como configuraciones de red, tipo de teléfono, sistema operativo, configuraciones de pantalla y configuraciones de fecha y hora.”\nConsiderando solo la información descrita en el escenario anterior, ¿cuáles de las siguientes técnicas de prueba serán más útiles para diseñar casos de prueba para el sistema en prueba?",
      options: [
        "Análisis de dominio",
        "Pruebas metamórficas",
        "Pruebas CRUD",
        "Pruebas de tabla de decisiones",
        "Pruebas por pares"
      ],
      correctAnswer: [1, 4], // Las opciones correctas son la a) y la e)
      urlImage: " "
    },
    {
      "question": "Se está desarrollando un nuevo sistema basado en IA. La dirección afirma que mejora la precisión de las predicciones de tormentas eléctricas en un orden de magnitud. Un desafío que identificaste rápidamente es que el número de parámetros de entrada y sus valores es potencialmente muy alto. Además, el sistema basado en IA no estaba suficientemente especificado, es decir, la base de prueba es incompleta y ambigua. Sin embargo, hay un conjunto adecuado de casos de prueba creado por un experto en la materia que, desafortunadamente, dejó el proyecto. Hay presión por parte de la dirección para entregar el sistema pronto.\n¿Cuáles de las siguientes técnicas de prueba deberían aplicarse en este contexto?",
      options: [
        "Pruebas basadas en estados",
        "Pruebas metamórficas",
        "Pruebas basadas en escenarios",
        "Pruebas combinatorias",
        "Pruebas CRUD"
      ],
      correctAnswer: [1, 3], // Las opciones correctas son la c) y la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una ventaja de la automatización del diseño de pruebas y por qué?",
      options: [
        "Prevención de defectos mejorada debido a la modelización temprana de las condiciones de prueba",
        "Detección efectiva de defectos debido a scripts de prueba automatizados y repetibles",
        "Mantenimiento eficiente de scripts de prueba debido a la gestión de configuraciones",
        "Análisis más rápido de anomalías debido al reconocimiento automatizado de fallos"
      ],
      correctAnswer: 0, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás probando la siguiente historia de usuario para una aplicación de e-shop:\nComo cliente registrado\nQuiero filtrar por una categoría específica de artículos\nPara no tener que navegar por todo el surtido de la tienda\n¿Cuál de los siguientes es un ejemplo de prueba de corrección funcional para esta historia de usuario?",
      options: [
        "Verificar que el mecanismo de filtrado lista aquellas categorías para las que la tienda ofrece artículos",
        "Verificar que filtrar por una categoría particular muestra artículos que pertenecen a esta y solo a esta categoría",
        "Verificar que el árbol de categorías se carga correctamente desde un sistema de gestión de relaciones con clientes",
        "Verificar que la función de filtrado es fácil de aprender y su interfaz gráfica es simple y estéticamente agradable"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Una organización está desarrollando una nueva aplicación interna diseñada para apoyar a todo el personal. El propietario del producto contrató a consultores externos de experiencia del usuario para realizar sesiones de prueba de usabilidad. ¿Cuál de las siguientes es la MEJOR contribución que puede hacer el analista de pruebas de la organización?",
      options: [
        "Seleccionar a los participantes del grupo de usuarios con más experiencia en el proceso de negocio",
        "Participar en las sesiones de prueba de usabilidad para evaluar la eficiencia de trabajar con la aplicación",
        "Ayudar a los participantes durante las sesiones de prueba a ingresar los datos correctos y encontrar los botones correctos",
        "Describir los patrones de uso más probables de la aplicación por varias personas dentro de la organización"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes actividades puede utilizar un analista de pruebas para contribuir mejor a las pruebas de adaptabilidad de una aplicación web basada en la nube?",
      options: [
        "Evaluar hasta qué punto los usuarios con discapacidades pueden adaptarse a los escenarios de uso de la aplicación",
        "Diseñar pruebas que cubran el intercambio de datos entre el cliente web y los componentes del servidor en la nube",
        "Analizar perfiles operativos y describir el número esperado de usuarios concurrentes de la aplicación",
        "Diseñar pruebas que evalúen si los componentes del servidor pueden ser transferidos a varias plataformas de servicios en la nube"
      ],
      correctAnswer: 3, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es el mejor ejemplo de la contribución de un analista de pruebas a las pruebas de interoperabilidad de una tienda en línea?",
      options: [
        "Verificar que el usuario pueda acceder y utilizar la tienda en línea sin problemas en varios dispositivos y navegadores web",
        "Verificar que la tienda en línea pueda integrarse con pasarelas de pago de terceros y intercambiar datos de pago correctamente",
        "Validar que los usuarios con diversos antecedentes culturales puedan utilizar la tienda en línea de manera efectiva y eficiente",
        "Verificar que el sistema de descuentos siga estrictamente las reglas especificadas y devuelva resultados precisos"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes actividades es MENOS efectiva en la prevención de defectos?",
      options: [
        "Pruebas dinámicas",
        "Análisis de riesgos",
        "Revisión de un diseño arquitectónico",
        "Análisis de causa raíz"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Para un sistema que asigna descuentos en compras, se aplican las siguientes dos reglas de negocio:\n• Los clientes con una tarjeta de lealtad o cuya última compra fue de al menos $1,000 recibirán un 10% de descuento. De lo contrario, recibirán un 5% de descuento si se suscriben al boletín.\n• Si un cliente no se ha suscrito al boletín, no recibirá ningún descuento.\nLos requisitos se modelan utilizando la siguiente tabla de decisiones: ¿Qué problema (si lo hay) con los requisitos puedes descubrir al analizar esta tabla de decisiones?",
      options: [
        "Inconsistencia: hay al menos una combinación factible de condiciones para la cual la especificación describe dos acciones contradictorias",
        "Incompletitud: hay al menos una combinación factible de condiciones para la cual la especificación no predice ningún comportamiento",
        "Reglas superpuestas: hay al menos dos columnas equivalentes en acción que coinciden con la misma combinación de condiciones",
        "No hay problema: la tabla de decisiones modela correctamente los requisitos y no hay anomalías en los requisitos"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/tabla preg39.png"
    },
    {
      "question": "Estás revisando la especificación de requisitos de una máquina expendedora de bebidas. Te estás enfocando en el controlador de monedas que recoge, valida y cuenta las monedas insertadas. Notas los siguientes requisitos relacionados con el comportamiento del controlador de monedas:\n• Req201: Para cada transacción de pedido, el controlador de monedas distingue las situaciones entre modos vacío, parcialmente insertado y suficiente para identificar si el usuario ha pagado lo suficiente para iniciar la entrega de la bebida.\n• Req215: Si el usuario ha pagado lo suficiente, el controlador devolverá inmediatamente cualquier moneda insertada adicional.\n• Req235: El controlador de monedas validará las monedas insertadas y devolverá inmediatamente las monedas no válidas con un mensaje de error apropiado.\n• Req236: El controlador de monedas cambiará su modo a suficiente tan pronto como el usuario inserte suficientes monedas.\n• Req237: El usuario podrá cancelar la transacción antes de la entrega de la bebida y recuperar las monedas insertadas. El controlador de monedas estará vacío después de que se seleccione cancelar.\n• Req243: El controlador de monedas mostrará un mensaje apropiado cuando el usuario haya insertado suficientes monedas para el pago y sumará cualquier moneda adicional insertada.\n• Req253: Cuando el usuario inserte una moneda con la que no se alcanza el monto requerido, el controlador de monedas permanecerá en el modo parcialmente insertado y sumará el valor de la moneda insertada al valor intermedio pagado.\n• Req267: Si el controlador de monedas está en modo suficiente y el usuario activa la entrega, entregará la bebida al usuario.\nDecidiste modelar el comportamiento del controlador de monedas con un diagrama de máquina de estados. ¿Cuál de las siguientes anomalías será MÁS PROBABLE que se detecte mediante el modelado?",
      options: [
        "No está claro qué evento activará al controlador de monedas para cambiar del modo parcialmente insertado al modo suficiente",
        "La especificación es ambigua cuando el controlador de monedas está en el modo parcialmente insertado. El mismo evento activa la devolución de las monedas y la entrega de la bebida",
        "La especificación es incompleta porque no hay un evento definido para devolver una moneda no válida",
        "La especificación es ambigua en el modo suficiente. El mismo evento se supone que activa dos resultados en competencia, es decir, sumar las monedas y devolver las monedas inmediatamente"
      ],
      correctAnswer: 3, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Una empresa ha desarrollado un sitio web de compras en línea. Este año, para servir mejor a los nuevos clientes, la empresa decidió desarrollar una nueva función para guiar a los nuevos clientes en el uso del sitio web. El equipo de ingeniería de requisitos desarrolló los siguientes requisitos para esta nueva función:\nCaso de uso: Familiarizar al cliente con el sitio web de compras en línea y la compra.\nEres el analista de pruebas para este producto y revisas el caso de uso anterior utilizando una técnica de revisión basada en escenarios.\n¿Cuál de los siguientes defectos presentados durante tu revisión es un resultado falso positivo?",
      options: [
        "El sistema debería ofrecer a los usuarios experimentados una opción para descartar la guía permanentemente",
        "En el paso 4: Una vez que el usuario ha respondido a la promoción, el sistema debería ocultar el banner de promoción",
        "El sistema debería proporcionar una opción para que el usuario reabra la guía siempre que esté interesado",
        "Después del paso 5, el sistema debería cerrar automáticamente la guía, asumiendo que ya no es necesaria"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: "./imagenes/tabla preg41.png"
    },
    {
      "question": "Empareja las descripciones de las técnicas de revisión (1-4) con los nombres de técnicas correctos (A-D).\nDescripciones:\n1. Los revisores simulan procesos utilizando casos de uso o diagramas de actividad y pueden explorar más allá de los escenarios documentados.\n2. Los revisores utilizan personajes ficticios (por ejemplo, administradores o usuarios finales) para centrarse en roles de usuario específicos.\n3. Revisión no estructurada sin orientación, arriesgando informes de defectos duplicados.\n4. Utiliza listas de verificación predefinidas para guiar a los revisores, pero fomenta la exploración más allá de los elementos listados.\nTécnicas:\nA. Revisión ad hoc\nB. Revisión basada en listas de verificación\nC. Revisión basada en escenarios\nD. Revisión basada en roles",
      options: [
        "1-C, 2-D, 3-B, 4-A",
        "1-D, 2-C, 3-A, 4-B",
        "1-C, 2-D, 3-A, 4-B",
        "1-A, 2-B, 3-C, 4-D"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Trabajas como analista de pruebas en un proyecto que sigue un modelo de desarrollo incremental. Cada incremento consiste en cuatro fases secuenciales: requisitos, diseño, implementación y pruebas. Cada fase termina con una actividad de prueba apropiada, y cada incremento termina con una entrega al cliente. Después del último incremento, el cliente no reportó ningún defecto durante la operación. Recoges datos sobre el número de defectos introducidos y detectados en diferentes fases del último incremento. Los resultados se presentan en la tabla a continuación.\nPor ejemplo, la fase de requisitos introdujo 80 defectos, y la implementación detectó 40 de ellos; el análisis estático y las pruebas de componentes detectaron 140 defectos en total. Tu gestión quiere mejorar la detección de defectos, pero debido a recursos limitados, te pidieron que seleccionaras solo una fase para la cual deberías llevar a cabo las acciones de mejora. Basas tu elección en el cálculo del porcentaje de detección de defectos como medida de efectividad de la prueba para cada fase.\n¿Qué fase y actividad de prueba deberías seleccionar para las acciones de mejora?",
      options: [
        "Requisitos – modelado y revisión",
        "Diseño – modelado y revisión",
        "Implementación – análisis estático y pruebas de componentes",
        "Pruebas – pruebas del sistema y pruebas de aceptación"
      ],
      correctAnswer: 1, // La opción correcta es la c)
      urlImage: "./imagenes/tabla preg43.png"
    },
    {
      "question": "La arquitectura de un sistema de seguridad para el hogar comprende cuatro componentes: un panel de control, una interfaz de usuario, un sistema backend basado en la nube y un motor de procesamiento de eventos.\nEn proyectos similares dentro de tu organización, se observó una fuerte correlación entre el tamaño de los componentes y el número de defectos encontrados en las pruebas de componentes. En promedio, se encontró un defecto por cada 50 líneas de código. Utilizas este modelo para predecir el número de defectos en cada componente.\nLos resultados de las pruebas para los componentes individuales del sistema, que contienen el número real de defectos, son los siguientes: Utilizas el análisis de clúster de defectos para identificar áreas propensas a defectos. ¿Qué componente, al ser probado más rigurosamente, probablemente revelará más defectos?",
      options: [
        "Panel de control",
        "Interfaz de usuario",
        "Sistema backend",
        "Motor de procesamiento de eventos"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: "./imagenes/tabla preg44.png"
    },
    {
      "question": "¿Cómo apoya la clasificación de defectos el análisis de causa raíz (RCA)?",
      options: [
        "Permite que el RCA se realice temprano, antes de las pruebas estáticas y dinámicas, porque el RCA puede basarse en categorías abstractas de defectos en lugar de en defectos individuales específicos",
        "Permite que el RCA se combine con técnicas de prueba porque la clasificación de defectos utiliza los mismos modelos de ciclo de vida del desarrollo de software que las técnicas de prueba",
        "Hace que el RCA sea más eficiente porque el análisis se centra no en defectos individuales, sino en grupos de defectos con características similares",
        "Hace que el RCA sea más efectivo porque la clasificación de defectos permite un análisis más profundo de los defectos y el descubrimiento de más causas raíz"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Apéndice A – Preguntas Adicionales\nPregunta #A1 (1 Punto) Las tareas del TA en el análisis de pruebas incluyen:\nA) Definir las condiciones de prueba para cada ítem de prueba\nB) Involucrar a las partes interesadas en la revisión de las condiciones de prueba\nC) Revisar la base de prueba para la testabilidad\nD) Verificar que los objetivos de prueba y el enfoque de prueba sean claros\nOrdena las tareas de A a D en la secuencia cronológica correcta:",
      options: [
        "A, B, C, D",
        "B, A, D, C",
        "C, D, A, B",
        "D, C, B, A"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: "./imagenes/tabla pregA1.png"
    },
    {
      "question": "¿Cuál de las siguientes es típicamente la responsabilidad del analista de pruebas durante la ejecución de un conjunto de pruebas de regresión automatizadas?",
      options: [
        "Reejecutar manualmente los casos de prueba que han fallado durante la ejecución de pruebas automatizadas",
        "Corregir los scripts de prueba automatizados que causaron anomalías en la ejecución de pruebas",
        "Reportar un defecto por cada anomalía que ocurra durante la ejecución de pruebas",
        "Comparar los resultados reales con los resultados esperados para determinar el resultado de la prueba"
      ],
      correctAnswer: 0, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Considera el siguiente caso de prueba:\nCaso de prueba: TC 02.001 - cálculo correcto del precio del pedido con descuento\nPrecondiciones: el usuario ha iniciado sesión\nEntradas: el carrito de compras contiene productos por un monto que da derecho al descuento\nAcciones: el usuario procede al pago\nResultados esperados: el precio total mostrado se reduce por el monto del descuento correspondiente\n¿Cómo se puede clasificar este caso de prueba en términos de nivel de abstracción?",
      options: [
        "Este es un caso de prueba de alto nivel porque cubre un requisito comercial en lugar de una especificación técnica.",
        "Este es un caso de prueba de alto nivel porque no contiene datos de prueba específicos.",
        "Este es un caso de prueba de bajo nivel porque la acción es un paso individual de un proceso comercial.",
        "Este es un caso de prueba de bajo nivel porque puede ser la base para crear scripts de prueba que implementen este caso de prueba con varias entradas."
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes describe un criterio de calidad de caso de prueba válido y tiene una justificación válida?",
      options: [
        "Los casos de prueba que cubren características importantes en el backlog del producto pero que aún no se han incluido en la versión actual del objeto de prueba deben definirse para apoyar el mantenimiento futuro.",
        "Los casos de prueba deben contener los valores concretos de los datos de prueba requeridos para precondiciones, entradas y salidas para habilitar la ejecución de pruebas.",
        "Si la base de prueba utiliza un glosario de términos funcionales, los casos de prueba también deben utilizar esa terminología para hacerlos consistentes y comprensibles.",
        "Los casos de prueba basados en escenarios de extremo a extremo deben limitarse a unos pocos pasos de los escenarios para facilitar su combinación en procedimientos de prueba y un análisis de la causa de fallos."
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "En el sistema de gestión de ítems IMS1, cada ítem puede tener múltiples versiones. La última versión está activa, todas las versiones anteriores son históricas y están congeladas.\nEstás especificando palabras clave de capa de dominio para el siguiente caso de prueba de alto nivel:\n• Precondiciones: Un ítem tiene múltiples versiones; la última versión está activa; las otras son antiguas y congeladas.\nHas especificado las siguientes palabras clave:\n1. Buscar en la base de datos un ítem con múltiples versiones (ID del ítem)\n2. Seleccionar ítem (ID del ítem)\n3. Seleccionar versión del ítem (Número)\n4. Afirmar que los detalles mostrados son correctos (Pantalla, ID del ítem, Número)\n5. Afirmar que los detalles son editables (Pantalla)\n6. Afirmar que los detalles no son editables (Pantalla)\nQuieres usar palabras clave en uno de los siguientes grupos de elementos de los casos de prueba de alto nivel:\nA) Solo precondición\nB) Solo paso 1\nC) Solo paso 2\nD) Tanto el paso 1 como el paso 2\nAsigna cada palabra clave especificada (1-6) a UN grupo de elementos del caso de prueba (A-D) sin dejar ningún grupo vacío.",
      options: [
        "1: A, 2: B, 3: C, 4: D, 5: D, 6: D",
        "1: A, 2: D, 3: C, 4: B, 5: D, 6: D",
        "1: A, 2: B, 3: D, 4: C, 5: D, 6: D",
        "1: A, 2: B, 3: C, 4: D, 5: D, 6: D"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/tabla pregA5.png"
    },
    {
      "question": "Las cartas estándar transportadas por un servicio postal tienen una longitud máxima de 235 mm y un peso máximo de 20 g. Estás probando un sistema automático de escaneo de cartas que puede medir con una precisión de 1 mm y 1 g respectivamente.\nRealizas pruebas de dominio para tamaños válidos de cartas estándar con las siguientes entradas. Las entradas pueden tener uno de los siguientes tipos de ítems de cobertura:\n1. Punto ON para longitud y peso\n2. Punto IN para longitud y peso\n3. Punto OFF solo para longitud\n4. Punto OFF solo para peso\n5. Punto OUT solo para longitud\n6. Punto OUT solo para peso\nAsigna cada entrada (X1-X6) a EXACTAMENTE UN tipo de ítem de cobertura (1-6).",
      options: [
        "X1: 1, X2: 2, X3: 3, X4: 4, X5: 5, X6: 6",
        "X1: 1, X2: 2, X3: 4, X4: 3, X5: 5, X6: 6",
        "X1: 1, X2: 2, X3: 3, X4: 5, X5: 4, X6: 6",
        "X1: 1, X2: 2, X3: 3, X4: 4, X5: 6, X6: 5"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/tabla pregA6.png"
    },
    {
      "question": "La especificación de un componente crítico para la seguridad establece sobre los valores enteros de un parámetro de entrada lo siguiente:\n• Los valores menores que 10 serán rechazados;\n• Los valores entre 10 y 21 serán aceptados;\n• Los valores mayores o iguales a 22 serán rechazados.\n¿Cuál de los siguientes conjuntos de datos de entrada proporciona una cobertura de dominio 100% confiable utilizando un número MÍNIMO de valores?",
      options: [
        "9, 10, 21, 22",
        "0, 9, 10, 21, 22, 50",
        "9, 10, 11, 20, 21, 22",
        "8, 9, 10, 11, 20, 21, 22, 23"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Una aerolínea tiene restricciones específicas respecto al equipaje facturado:\n• Las dimensiones totales (longitud + ancho + altura) D de una pieza de equipaje deben ser al menos 80 cm y no pueden exceder 158 cm.\n• El peso W no debe exceder 23 kg.\n• Las medidas en centímetros y kilogramos siempre se redondean al número entero más cercano.\n¿Cuál es el conjunto MÍNIMO de pares (D,W) de dimensiones y peso para lograr una cobertura de dominio simplificada del 100%?",
      options: [
        "(80,10), (79,10), (125,23), (125,24), (158,20), (159,20)",
        "(80,23), (79,24), (158,23), (159,24)",
        "(80,23), (79,23), (80,24), (158,23), (158,24), (159,23)",
        "(80,23), (79,23), (80,24), (158,20), (159,20)"
      ],
      correctAnswer: 3, // La opción correcta es la b)
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
