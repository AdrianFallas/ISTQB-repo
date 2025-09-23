const data_es = {
  questions: [
    {
      "question": "¿Cuáles de los siguientes son ejemplos de riesgos que deben ser considerados por el Analista de Pruebas Técnicas?",
      options: [
        "Un alto número de defectos de confiabilidad se encontraron en comparación con la versión anterior",
        "Las actualizaciones requeridas para la base de datos de la herramienta de pruebas de seguridad están mal configuradas",
        "Falta documentación del sistema legado para verificar la precisión de los cálculos",
        "El presupuesto asignado a las pruebas en el proyecto ha sido reducido",
        "La tasa de cambio de los casos de uso del negocio es mayor de lo esperado"
      ],
      correctAnswer: [0, 1], // Las opciones correctas son la a) y la b)
      urlImage: " "
    },
    {
      "question": "Al participar en un análisis de riesgos, se espera que el Analista de Pruebas Técnicas trabaje en estrecha colaboración con cuál de los siguientes grupos de personas?",
      options: [
        "Usuarios",
        "Analistas de negocio",
        "Patrocinadores del proyecto",
        "Desarrolladores"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Considera la lógica simplificada de una máquina para hacer té: ¿Cuál es el número mínimo de casos de prueba requeridos para lograr una cobertura del 100% de las declaraciones de la lógica de la máquina para hacer té?",
      options: [
        "3",
        "2",
        "5",
        "6"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/codigo preg3.png"
    },
    {
      "question": "La lógica simplificada de un programa es la siguiente: Supón que las decisiones B y C son independientes entre sí. ¿Cuál es el número mínimo de casos de prueba requeridos para lograr una cobertura del 100% de las decisiones?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: "./imagenes/codigo preg4.png"
    },
    {
      "question": "Estás probando código cuyo gráfico de flujo de control se presenta a continuación. El nodo 1 es el punto de entrada y el nodo 9 es el punto de salida. Suponiendo que todas las decisiones en este código son independientes, ¿cuál es el número mínimo de casos de prueba requeridos para lograr una cobertura del 100% de las decisiones?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/control flow preg5.png"
    },
    {
      "question": "Estás probando un sistema de foto-enforcement para el control del tráfico en una intersección. Los requisitos indican que se debe tomar una foto si la luz del semáforo está en rojo (RED), o el coche está excediendo el límite de velocidad (SPEED), y si las ruedas delanteras del coche están sobre la línea que marca el inicio de la intersección (WHEELS). La lógica en el código se ve como sigue:\n Considera estos valores de entrada de prueba:\n 1. RED + SPEED + WHEELS\n 2. RED + SPEED + not WHEELS\n 3. RED + not SPEED + WHEELS\n 4. RED + not SPEED + not WHEELS\n 5. not RED + SPEED + WHEELS\n 6. not RED + SPEED + not WHEELS\n 7. not RED + not SPEED + WHEELS\n 8. not RED + not SPEED + not WHEELS.\n Suponiendo que no hay cortocircuito, ¿qué conjunto de valores de entrada de prueba se requiere para lograr una cobertura completa de condición/decisión modificada?",
      options: [
        "1, 3, 8",
        "2, 6, 8",
        "3, 4, 5, 7",
        "1, 5, 7, 8"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: "./imagenes/codigo preg6.png"
    },
    {
      "question": "Estás probando un sistema de foto-enforcement para el control del tráfico en una intersección. Los requisitos indican que se debe tomar una foto si la luz del semáforo está en rojo (RED), o el coche está excediendo el límite de velocidad (SPEED), y si las ruedas delanteras del coche están sobre la línea que marca el inicio de la intersección (WHEELS). La lógica en el código se ve como sigue: Considera estos valores de entrada de prueba:\n 1. RED + SPEED + WHEELS\n 2. RED + SPEED + not WHEELS\n 3. RED + not SPEED + WHEELS\n 4. RED + not SPEED + not WHEELS\n 5. not RED + SPEED + WHEELS\n 6. not RED + SPEED + not WHEELS\n 7. not RED + not SPEED + WHEELS\n 8. not RED + not SPEED + not WHEELS.\n Suponiendo que no hay cortocircuito, ¿qué conjunto de valores de entrada de prueba se requiere para lograr un 50% de cobertura de múltiples condiciones?",
      options: [
        "3, 4, 5, 8",
        "1, 3, 5",
        "2, 4, 6, 7, 8",
        "2, 7"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/codigo preg7.png"
    },
    {
      "question": "¿Cuáles de los siguientes son ejemplos de defectos dirigidos por pruebas de API?",
      options: [
        "Problemas en el procesamiento de transacciones de solicitudes HTTP",
        "El código comprometido viola los estándares de codificación del proyecto",
        "El servicio web del sistema reacciona incorrectamente a diferentes datos en las solicitudes",
        "Errores de división por cero",
        "Errores funcionales que ocurren en la GUI"
      ],
      correctAnswer: [0, 2], // Las opciones correctas son la a) y la c)
      urlImage: " "
    },
    {
      "question": "Eres el Analista de Pruebas Técnicas trabajando en las pruebas de software que controlará el movimiento del techo de un nuevo estadio nacional que tiene capacidad para 100,000 espectadores. Un análisis de fallos ha mostrado que si el sistema de software falla, puede causar que el techo se desmorone y caiga sobre los espectadores. El gobierno ha solicitado que el nivel de pruebas para este software supere el requerido por el estándar IEC 61508. ¿Qué nivel de cobertura de prueba esperarías lograr en las pruebas del software de control para el techo del estadio?",
      options: [
        "Cobertura de decisiones + Cobertura de condición/decisión modificada",
        "Cobertura de decisiones + Cobertura de declaraciones",
        "Cobertura de condición/decisión modificada",
        "Cobertura de múltiples condiciones"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Trabajas para una casa de software que proporciona soluciones de software para sistemas médicos. Actualmente estás probando un componente de software que opera la máquina desfibriladora controlando la dosis de corriente eléctrica entregada al corazón. Durante la revisión del código, los revisores notaron que una decisión en el módulo bajo prueba consiste en 20 condiciones atómicas independientes. Estás obligado a realizar pruebas de caja blanca para este módulo y se espera que lo termines en un mes. ¿Qué técnica de prueba de caja blanca deberías elegir para este escenario?",
      options: [
        "Pruebas de múltiples condiciones",
        "Pruebas MC/DC",
        "Pruebas de decisiones",
        "Pruebas de API"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "A continuación se muestra el pseudo-código para un programa TRICKY: ¿Cuál de las siguientes afirmaciones sobre el programa TRICKY describe MÁS correctamente cualquier anomalía en el flujo de control en él?",
      options: [
        "El programa TRICKY no contiene anomalías en el flujo de control",
        "El programa TRICKY contiene código inalcanzable y un bucle infinito",
        "El programa TRICKY contiene código inalcanzable y no tiene bucle infinito",
        "El programa TRICKY contiene un bucle con múltiples puntos de entrada"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: "./imagenes/codigo preg11.png"
    },
    {
      "question": "Los programadores han diseñado tres versiones de una función que encuentra el número más grande entre tres enteros: findMax1, findMax2 y findMax3. Se debe elegir una de ellas para la próxima versión. Los códigos son los siguientes: Se te pidió seleccionar la que tenga la menor complejidad ciclomática. ¿Cuál DEBES elegir?",
      options: [
        "findMax1",
        "findMax2",
        "findMax3",
        "Puedes elegir cualquiera de ellas, porque las tres funciones tienen la misma complejidad ciclomática"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: "./imagenes/codigo preg12.png"
    },
    {
      "question": "A continuación se muestra el pseudo-código para un programa que calcula e imprime comisiones de ventas: El código contiene anomalías en el flujo de datos en las líneas 6 y 12 (texto resaltado). ¿Qué ejemplos de anomalías en el flujo de datos se pueden encontrar en estas líneas?",
      options: [
        "línea 6: la variable “total” no se le asigna un valor antes de usarla; línea 12: la variable “commission_lo” está definida pero no se usa posteriormente",
        "línea 6: se asigna un valor inválido a la variable “total”; línea 12: la variable “commission_lo” se redefine antes de ser utilizada",
        "línea 6: la variable “total” está fuera de alcance; línea 12: el valor “hard-coded” “0.15” no debería ser usado",
        "línea 6: la variable “number” está indefinida; línea 12: la variable “total” se redefine antes de ser utilizada"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/codigo preg13.png"
    },
    {
      "question": "Se te ha pedido analizar el siguiente programa que calcula una comisión de ventas: ¿Cuál par de líneas representa una anomalía en el flujo de datos?",
      options: [
        "8–9",
        "3–19",
        "2–18",
        "13–14"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: "./imagenes/codigo preg14.png"
    },
    {
      "question": "Se te han proporcionado las siguientes medidas promedio a nivel de sistema para los cuatro sistemas, W, X, Y y Z, utilizando análisis de código estático. Hay presupuesto disponible para mejorar la mantenibilidad del código en cada uno de los cuatro sistemas aplicando los resultados del análisis estático a los componentes individuales. ¿Cuál de las siguientes es la MEJOR manera de mejorar la mantenibilidad del código si puedes abordar solo dos métricas por sistema?",
      options: [
        "W – CO, RE; X – CC, CH; Y – CP, CO; Z – CC, RE",
        "W – CC, CP; X – CH, CO; Y – CC, CH; Z – CO, RE",
        "W – CC, RE; X – CP, CO; Y – CC, CH; Z – CO, RE",
        "W – CH, CO; X – CC, RE; Y – CP, RE; Z – CC, CH"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: "./imagenes/tabla preg15.png"
    },
    {
      "question": "A continuación se muestra el pseudo-código para un programa TRICKY: ¿Qué DOS correcciones para mejorar la mantenibilidad del código se PROBABLEMENTE propondrían después de realizar un análisis estático?",
      options: [
        "Reestructurar el código",
        "Mejorar la nomenclatura de las variables",
        "Reducir el acoplamiento del programa",
        "Mejorar la cantidad de comentarios",
        "Mejorar la indentación del código"
      ],
      correctAnswer: [1, 3], // Las opciones correctas son la b) y la d)
      urlImage: " "
    },
    {
      "question": "Eres el Analista de Pruebas Técnicas trabajando en un proyecto que desarrolla un nuevo Sistema de Despacho de Ambulancias (ADS). Este ADS ayuda a los operadores a recibir llamadas sobre incidentes, identificar ambulancias disponibles y movilizar ambulancias para manejar los incidentes. Sabes que el ADS fue diseñado utilizando un enfoque orientado a objetos e implementado utilizando un lenguaje con recolección de basura automatizada. Durante las pruebas del sistema y de aceptación, el sistema ha sido percibido como generalmente correcto, pero también algo lento, y ocasionalmente ha 'fallado'; las investigaciones posteriores (breves) fueron inconclusas. ¿Cuál de las siguientes afirmaciones justificaría MEJOR el uso de análisis dinámico en esta situación?",
      options: [
        "El análisis dinámico podría usarse para medir los tiempos de respuesta en las acciones del usuario para identificar cuellos de botella de eficiencia",
        "El análisis dinámico podría usarse para generar gráficos de flujo de control del sistema para permitir mejoras de rendimiento específicas",
        "El análisis dinámico podría identificar violaciones de acceso a la memoria causadas por un puntero salvaje que resultan en los ocasionales 'fallos'",
        "El análisis dinámico podría usarse para determinar si los programadores introdujeron defectos al no liberar adecuadamente la memoria asignada"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Supón que trabajas como Analista de Pruebas Técnicas en un proyecto donde se está desarrollando un nuevo sistema bancario. Este sistema almacenará datos financieros de los clientes, incluyendo información personal, números de cuenta, saldos e historiales de transacciones, pero no habrá datos reales de clientes disponibles hasta que el sistema se despliegue operativamente. Basado en esta información, ¿cuál de los siguientes temas es el que probablemente incluirías en el plan de pruebas del sistema?",
      options: [
        "Anonimización de datos de prueba",
        "Coordinación de componentes distribuidos",
        "Pruebas de cifrado de datos",
        "Pruebas en producción"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Supón que trabajas como Analista de Pruebas Técnicas en las pruebas de integración del sistema del sistema de manejo de equipaje para un importante aeropuerto. La mayoría de los componentes del sistema son desarrollados por un contratista principal, pero los componentes del sistema para la redirección de equipaje y para el manejo de artículos de gran tamaño están siendo desarrollados en el extranjero por organizaciones separadas. El operador del aeropuerto es el cliente del proyecto y ha indicado que el sistema debe funcionar rápido incluso bajo cargas máximas por la mañana y por la tarde. Se ha puesto a disposición un entorno de prueba completamente representativo para las pruebas de integración del sistema y se ha formado un equipo de herramientas especializadas para apoyar las pruebas funcionales y no funcionales. Algunas de las pruebas funcionales para la integración de sistemas ya se han implementado, pero el progreso es lento. Basado en esta información, ¿cuáles de los siguientes temas es más probable que identifiques como riesgos en el plan de pruebas de integración del sistema?",
      options: [
        "Requisitos de los interesados",
        "Adquisición y capacitación de herramientas requeridas",
        "Requisitos del entorno de prueba",
        "Consideraciones organizacionales",
        "Consideraciones de seguridad de datos"
      ],
      correctAnswer: [0, 3], // Las opciones correctas son la a) y la d)
      urlImage: " "
    },
    {
      "question": " Considera el siguiente riesgo del producto: Terminación anormal de la aplicación debido a una falla en la conexión de red. ¿Cuál de los siguientes es el tipo de prueba MÁS apropiado para abordar este riesgo?",
      options: [
        "Pruebas de confiabilidad",
        "Pruebas de rendimiento",
        "Pruebas de operabilidad",
        "Pruebas de portabilidad"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Considera el siguiente riesgo del producto: “La nueva base de datos no es adecuada para reemplazar la actual”. ¿Cuál de los siguientes es el tipo de prueba MÁS apropiado para abordar este riesgo?",
      options: [
        "Pruebas de adaptabilidad",
        "Pruebas de reemplazo",
        "Pruebas de capacidad",
        "Pruebas de coexistencia"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es CORRECTA?",
      options: [
        "Es deseable realizar pruebas de tiempo de respuesta de extremo a extremo tan pronto como sea posible, incluso si un entorno similar a producción aún no está disponible",
        "Las pruebas de disponibilidad utilizando perfiles operativos se realizan tanto antes como después de entrar en servicio operativo",
        "Las pruebas de seguridad deben comenzar con pruebas de componentes y continuar a través de pruebas de integración y de sistema, ya que los problemas de seguridad pueden introducirse en cualquier momento durante el desarrollo",
        "La mantenibilidad se puede evaluar temprano en el ciclo de vida sin tener que esperar a un sistema completo y en funcionamiento"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es CORRECTA?",
      options: [
        "Las pruebas de confiabilidad se realizan comúnmente como parte de las pruebas del sistema",
        "Las pruebas de coexistencia se realizan normalmente inmediatamente después de que se han completado las pruebas de componentes",
        "Las pruebas de adaptabilidad a menudo se realizan junto con pruebas de seguridad",
        "Las pruebas de reemplazo normalmente solo se realizan una vez que el sistema general y los componentes potencialmente reemplazables están disponibles"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Supón que trabajas para una empresa emergente con grandes ambiciones pero con financiamiento inicial limitado. Están creando un sistema que proporcionará programas de lealtad y recompensas personalizados para pequeñas y medianas empresas que venden a clientes en la web. Estas empresas se inscriben en la tienda web del sistema. Esto permite a las empresas crear botones personalizados, que se colocan en sus sitios web, que permiten a los clientes inscribirse en los programas de lealtad y recompensas de las empresas. Cada compra subsiguiente gana puntos, y tanto las empresas como sus clientes pueden gestionar el programa; por ejemplo, las empresas pueden determinar el número de puntos requeridos para que los clientes reciban un producto o servicio gratuito, y los clientes pueden monitorear sus puntos. El personal de marketing de tu empleador está promocionando fuertemente el sistema, ofreciendo descuentos agresivos en las tarifas del primer año para inscribir nuevas empresas. Los materiales de marketing afirman que el servicio será altamente confiable y extremadamente rápido para las empresas y sus clientes. En este momento, los requisitos están completos y el desarrollo del software ha comenzado. El cronograma actual permitirá que las empresas y sus clientes comiencen a inscribirse en tres meses. Tu empleador tiene la intención de utilizar recursos de computación en la nube para alojar este servicio y no tener recursos de hardware distintos a computadoras de oficina ordinarias para sus desarrolladores, testers y otros ingenieros y gerentes. Se utilizarán componentes de software de aplicación web estándar de la industria para construir el sistema. Supón que estás ejecutando pruebas de seguridad contra el sistema. ¿Cuál de los siguientes tipos de defectos esperarías encontrar durante estas pruebas?",
      options: [
        "El sistema borra la pantalla demasiado rápido después de iniciar sesión",
        "El sistema elimina archivos temporales de usuario después de cerrar sesión",
        "El sistema permite el acceso no autorizado a datos",
        "El sistema permite el acceso desde un navegador no soportado"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Se está planificando la prueba de integración del sistema para una nueva versión de un sistema de trading de acciones. Estás planificando las pruebas de eficiencia de rendimiento como parte de esta prueba. La nueva versión tiene funcionalidad aumentada, pero la arquitectura básica permanece igual. El sistema actual ha recibido hasta ahora una respuesta positiva y el número de usuarios ha aumentado constantemente. Permite a los usuarios comerciar acciones individuales con una transacción simple que consiste solo en la identidad del usuario, número de acción, cantidad y acción (comprar o vender). El tiempo de respuesta del sistema actual a las entradas del usuario se monitorea regularmente mediante pruebas de rendimiento apoyadas por una herramienta y utilizando un entorno de prueba completamente representativo. En la actualidad, el sistema funciona de manera confiable y los tiempos de respuesta a las transacciones comerciales de los usuarios están justo por debajo del máximo especificado. El departamento de marketing anticipa que con la nueva funcionalidad que se introducirá en la próxima versión, se espera que el número de usuarios se duplique en los próximos 12 meses. Has incluido pruebas de escalabilidad en tu estrategia de pruebas de rendimiento. Al planificar las pruebas de eficiencia de rendimiento, ¿cuál de los siguientes tipos de defectos apuntarías en el plan de pruebas de integración del sistema como los MÁS probables de ocurrir?",
      options: [
        "El aumento simulado en el número de usuarios resultará en volúmenes de datos que exceden el ancho de banda del entorno de prueba",
        "El sistema no cumple con los futuros requisitos de tiempo de respuesta para los números anticipados de usuarios",
        "Los requisitos de capacidad del disco excederán los recursos disponibles una vez que se agreguen más usuarios",
        "El tiempo de respuesta del sistema se degradará al ejecutar el sistema durante mucho tiempo bajo una carga nominal"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Al ingresar la siguiente frase en el campo de nombre de usuario del formulario de inicio de sesión:\n abcd OR 1=1,\n un tester realizó un ataque de inyección SQL y, como consecuencia, obtuvo una lista de todos los nombres de usuario válidos para el sistema. ¿Cuál de los siguientes aspectos de seguridad fue MÁS probablemente abordado por esta prueba?",
      options: [
        "Confidencialidad",
        "No repudio",
        "Responsabilidad",
        "Disponibilidad"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Trabajas como TTA en un proyecto ágil y se te ha pedido calcular el tiempo medio hasta el fallo (MTTF) para el sistema bajo prueba bajo una carga normal. ¿Cuál de las siguientes fuentes de información es MÁS probable que te proporcione la información necesaria sobre la carga que deberías generar en tus pruebas?",
      options: [
        "Propietario del producto",
        "Perfil operativo",
        "Scrum master",
        "Requisitos del entorno de prueba"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre las revisiones de código en el contexto de la planificación de pruebas de eficiencia de rendimiento es CORRECTA?",
      options: [
        "Las revisiones de código no son útiles en las pruebas de eficiencia de rendimiento, porque el rendimiento solo se puede medir con pruebas dinámicas en un sistema en funcionamiento",
        "Las revisiones de código son útiles en las pruebas de eficiencia de rendimiento, porque pueden detectar implementaciones de algoritmos ineficientes que pueden causar problemas de rendimiento",
        "Las revisiones de código no son útiles en las pruebas de eficiencia de rendimiento, porque las pruebas de eficiencia de rendimiento generalmente requieren que todo el sistema esté implementado, por lo que se realizan típicamente como parte de las pruebas del sistema, que requieren pruebas dinámicas, no estáticas",
        "Las revisiones de código son útiles en las pruebas de eficiencia de rendimiento, porque las pruebas estáticas no dependen del entorno de prueba, por lo que los testers no necesitan perder tiempo definiendo y construyendo el entorno de prueba"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones proporciona la MEJOR justificación para incluir pruebas de mantenibilidad en un enfoque de prueba?",
      options: [
        "La analizabilidad debe considerarse si esperas que se necesiten probar muchas combinaciones",
        "La modificabilidad debe considerarse si esperas que se identifiquen varios problemas dentro del sistema",
        "La modularidad debe considerarse si estás probando un sistema proporcionado como software comercial estándar (COTS)",
        "La reutilización debe considerarse si esperas que se desarrollen diferentes versiones del mismo producto"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Trabajas como tester en una empresa que desarrolla una aplicación financiera de escritorio para contadores. Los usuarios informaron problemas con el siguiente escenario, y se te ha encargado probar la solución. \n• Descargar la aplicación desde el sitio web del productor \n• Instalarla usando el asistente de instalación \n• Verificar si la aplicación está instalada correctamente \n• Desinstalar la aplicación \n• Verificar si todo se desinstaló correctamente.\n ¿Cuál es la razón para realizar esta prueba?",
      options: [
        "Para probar la mantenibilidad",
        "Para probar la confiabilidad",
        "Para probar la portabilidad",
        "Para probar la compatibilidad"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Un Analista de Pruebas Técnicas ha sido invitado a la revisión formal de una especificación de diseño arquitectónico. La revisión se ha convocado con poco tiempo de antelación para el día siguiente y, aunque no hay nada en la agenda del analista para ese momento, no hay tiempo para prepararse. ¿Cuál de las siguientes sería la respuesta más apropiada a la invitación?",
      options: [
        "Estoy libre en ese momento, así que no tengo problema en asistir",
        "No tengo tiempo para prepararme, pero asistiré en lugar de causar un retraso",
        "No tengo tiempo para prepararme, así que sugiero que se posponga la revisión",
        "No tengo tiempo para prepararme, pero aún podría contribuir con algunos aportes útiles"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás participando en una revisión arquitectónica de un nuevo diseño de producto. Este es un producto embebido que tiene severas restricciones de memoria. Considera las siguientes prácticas de programación y problemas que pueden resultar del uso de esas prácticas. \nPrácticas de Programación: \n1. Conexión en grupo \n2. Caché de datos \n3. Instanciación perezosa \n4. Concurrencia de transacciones \nProblemas: \nA. Impacto en el rendimiento cuando se necesita la instanciación \nB. Pérdida de transacciones debido a la indisponibilidad del procesador \nC. Errores en la lógica de multi-hilo \nD. Datos obsoletos.\n ¿Cuál de las prácticas de programación anteriores podría usarse para reducir el uso innecesario de memoria en este escenario y cuáles son los posibles problemas al usar esta práctica?",
      options: [
        "Práctica 2, Problema D",
        "Práctica 4, Problema C",
        "Práctica 3, Problema A",
        "Práctica 1, Problema B"
      ],
      correctAnswer: 2, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": " Estás participando en una revisión de diseño arquitectónico de un nuevo diseño de producto. Este es un producto de trading de divisas basado en la web que proporciona información en tiempo real sobre los precios de las divisas seleccionadas por el usuario. La siguiente lista de prácticas se menciona en el diseño como opciones para asegurar tiempos de respuesta de menos de 1 segundo y precisión de datos en tiempo real bajo las cargas máximas esperadas. ¿Cuál de las siguientes prácticas destacarías como la MÁS prometedora para lograr el requisito?",
      options: [
        "Balanceo de carga",
        "Caché de datos",
        "Orientación a objetos",
        "Replicación de datos"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás participando en una revisión de código y has notado un problema en la siguiente sección de pseudo-código (asume que *** indica un comentario). ¿Cuál de los siguientes problemas se demuestra en esta sección de código y por qué debería corregirse?",
      options: [
        "El comentario en el código es incorrecto, lo que resulta en un impacto en la mantenibilidad",
        "Se debería usar una biblioteca externa para validar la tarjeta de crédito; por lo tanto, el código es ineficiente porque no reutiliza componentes existentes",
        "El caso más probable no se prueba primero, lo que resulta en un posible impacto en el rendimiento",
        "No hay cláusula por defecto, lo que resulta en casos potenciales que no se manejan"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: "./imagenes/codigo preg34.png"
    },
    {
      "question": "Estás participando en una revisión de código y has notado un problema en la siguiente sección de pseudo-código (asume que *** indica un comentario). ¿Cuál de los siguientes problemas se demuestra en esta sección de código?",
      options: [
        "Los archivos no se verifican para comprobar su existencia antes de intentar acceder a ellos",
        "Los divisores no se prueban para ver si son cero",
        "Los comentarios son inconsistentes con el código",
        "Hay variables no utilizadas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: "./imagenes/codigo preg35.png"
    },
    {
      "question": "¿Cuáles de las siguientes son actividades típicas realizadas por un Analista de Pruebas Técnicas al configurar un proyecto de automatización de pruebas?",
      options: [
        "Diseñar los datos de prueba para los casos de prueba automatizados",
        "Reservar tiempo para trabajar en el proyecto de automatización de pruebas en acuerdo con el gerente de pruebas",
        "Escribir los scripts de prueba basados en palabras clave y datos proporcionados por los Analistas de Pruebas",
        "Determinar quién será responsable del análisis y diseño de los casos de prueba que se automatizarán",
        "Definir cómo se comunicará la herramienta de gestión de pruebas del proyecto con la nueva herramienta de automatización de pruebas"
      ],
      correctAnswer: [1, 4], // Las opciones correctas son la a) y la e)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones CAPTURA MEJOR la diferencia entre la automatización de pruebas impulsada por datos y la automatización de pruebas impulsada por palabras clave?",
      options: [
        "La automatización de pruebas impulsada por palabras clave puede extender la automatización impulsada por datos al definir palabras clave correspondientes a acciones en procesos de negocio",
        "La automatización de pruebas impulsada por datos extiende la automatización impulsada por palabras clave al almacenar datos de prueba en hojas de cálculo o bases de datos",
        "La automatización de pruebas impulsada por datos es más mantenible que la automatización de pruebas impulsada por palabras clave",
        "La automatización de pruebas impulsada por palabras clave requiere menos habilidades para desarrollarse que la automatización de pruebas impulsada por datos"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes describe un problema técnico común que causa que los proyectos de automatización de pruebas no logren el retorno de inversión planeado?",
      options: [
        "Eliminación de la duplicación de información entre herramientas",
        "Eliminación de la verificación manual de los intercambios de datos entre herramientas",
        "Uso de un entorno de desarrollo integrado para simplificar la integración entre herramientas",
        "Falta de incluir software que maneje automáticamente las fallas de prueba"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Supón que estás involucrado en la prueba de una aplicación madura. Esta aplicación es un servicio de citas en línea que permite a los usuarios: ingresar un perfil de sí mismos; conocer personas apropiadas según su orientación que serían una buena pareja; organizar eventos sociales con esas personas; y bloquear a las personas que no desean que se pongan en contacto con ellos. Los defectos y casos de prueba se gestionan en una herramienta de gestión de pruebas comercial existente, que está funcionando bien. El código fuente y otros productos de trabajo del proyecto se almacenan en un sistema de gestión de configuración de código abierto. Tu gerente te indica que la ayudes a seleccionar una herramienta de automatización de ejecución de pruebas para automatizar la mayor parte de las pruebas de regresión. Supón que estás utilizando un enfoque de automatización impulsado por palabras clave. ¿Cuáles de las opciones serían las palabras clave MÁS PROBABLES para esta aplicación?",
      options: [
        "Enter_Test_Data",
        "Remove_Test_Data",
        "Enter_Profile",
        "Find_Match",
        "Pay_Bill"
      ],
      correctAnswer: [2, 3], // Las opciones correctas son la c) y la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre las herramientas de siembra de fallos es correcta?",
      options: [
        "Estas herramientas insertan defectos en el código fuente para probar las capacidades de verificación de entrada del software",
        "Estas herramientas insertan defectos en el código fuente para verificar el nivel de tolerancia a fallos del software",
        "Estas herramientas insertan defectos en el código fuente para probar la efectividad del conjunto de pruebas",
        "Estas herramientas son generalmente utilizadas por el analista de pruebas para medir la cobertura lograda por pruebas específicas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre las herramientas de pruebas de rendimiento es CORRECTA?",
      options: [
        "Estas herramientas impulsan la aplicación a nivel de protocolo de comunicaciones en lugar de a través de su interfaz de usuario para medir los tiempos de respuesta con mayor precisión",
        "Estas herramientas generan una carga simulando muchos usuarios virtuales utilizando perfiles operativos para generar datos de prueba de entrada",
        "Estas herramientas capturan un script de una interacción individual del usuario y múltiples copias idénticas de este script se reproducen en paralelo para representar el rango completo de posibles usuarios",
        "Estas herramientas toman una amplia gama de mediciones después de la ejecución de la prueba para permitir el análisis de las características de rendimiento más significativas del objeto de prueba"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes describe CORRECTAMENTE los objetivos de las herramientas que apoyan las pruebas basadas en la web?",
      options: [
        "Generar casos de prueba ejecutando un modelo del comportamiento requerido del objeto de prueba",
        "Aislar fallos en la interfaz de usuario cambiando valores de variables durante la ejecución del código línea por línea",
        "Medir la calidad de un conjunto de pruebas inyectando defectos en el objeto de prueba",
        "Verificar violaciones de estándares de accesibilidad",
        "Verificar archivos huérfanos escaneando el servidor"
      ],
      correctAnswer: [3, 4], // Las opciones correctas son la a) y la e)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes describe MEJOR cómo las herramientas pueden apoyar la práctica de pruebas basadas en modelos (MBT)?",
      options: [
        "Las herramientas MBT se utilizan para generar casos de prueba que reflejan el comportamiento requerido presentado en un modelo del objeto de prueba",
        "Las herramientas MBT ejecutan el modelo del comportamiento del objeto de prueba para identificar defectos en lugar de ejecutar pruebas en el objeto de prueba",
        "Las herramientas MBT proporcionan una vista interna del objeto de prueba y se utilizan para generar automáticamente casos de prueba de caja blanca",
        "Las herramientas MBT generan automáticamente casos de prueba para lograr un nivel requerido de cobertura del código fuente del objeto de prueba"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre las herramientas de pruebas de componentes y las herramientas de automatización de compilaciones es VERDADERA?",
      options: [
        "Un marco xUnit se puede usar para automatizar las pruebas de componentes; las herramientas de automatización de compilaciones ejecutan pruebas de componentes automatizadas",
        "Un marco JUnit puede simplificar la automatización de pruebas de componentes en un entorno Java; las herramientas de automatización de compilaciones activan automáticamente las pruebas de componentes cada vez que un componente cambia en una compilación",
        "Los marcos de pruebas de componentes pueden simplificar la automatización de pruebas de componentes; las herramientas de automatización de compilaciones provocan que se active una nueva compilación cuando se cambia un componente",
        "Las herramientas de pruebas de componentes se pueden usar contra múltiples lenguajes de programación; las herramientas de automatización de compilaciones se activan cuando se prueba un componente"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones CAPTURA MEJOR el propósito de un emulador cuando se utiliza para apoyar las pruebas de aplicaciones móviles?",
      options: [
        "Un emulador móvil se utiliza para reemplazar dispositivos móviles reales en las pruebas, pero está limitado a pruebas funcionales iniciales",
        "Un emulador móvil se utiliza para reemplazar dispositivos móviles reales en las pruebas, pero no permite pruebas de usabilidad tempranas, como evaluar la estética de la interfaz de usuario",
        "Un emulador móvil se utiliza para probar diferentes características de una aplicación móvil desde el principio, utilizando versiones especialmente compiladas del software, que no funcionarían en un dispositivo real",
        "Un emulador móvil permite pruebas dinámicas de una aplicación móvil que ha sido compilada y empaquetada para una plataforma específica sin instalarla en un dispositivo real"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Pregunta #X1 TTA-4.3.1 (K2) Explica las razones para incluir pruebas de seguridad en un enfoque de prueba. Se va a desarrollar un nuevo sistema bancario personal para su uso en dispositivos móviles. ¿Cuál de las siguientes opciones es una razón válida para incluir pruebas de seguridad en el enfoque de prueba?",
      options: [
        "Asegurar que las actualizaciones automáticas de la aplicación móvil no bloqueen a los usuarios de acceder a sus cuentas",
        "Asegurar que no se deje información confidencial en archivos temporales en la memoria de la tarjeta SIM del teléfono",
        "Asegurar que la aplicación se instale correctamente en muchos modelos diferentes de teléfonos móviles y versiones de SO",
        "Asegurar que la aplicación proporcione la funcionalidad planificada sin sobrecargar la CPU del teléfono"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Pregunta #X2 TTA-4.4.1 (K2) Explica las razones para incluir pruebas de confiabilidad en un enfoque de prueba. ¿Cuál de los siguientes factores debe considerarse al planificar pruebas de confiabilidad?",
      options: [
        "Capacidad para simular defectos de hardware y del sistema operativo",
        "Monitoreo de recursos utilizados",
        "Identificación de vulnerabilidades que conducen a una denegación de servicio",
        "Determinación de las cargas máximas para el sistema"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Pregunta #X3 TTA-4.5.1 (K2) Explica las razones para incluir pruebas de rendimiento en un enfoque de prueba. Un sistema de reservas de vacaciones basado en la web espera manejar tres veces su número promedio de visitantes durante el mes pico del año. ¿Cuál de las siguientes razones justificaría incluir pruebas de rendimiento en el enfoque de prueba?",
      options: [
        "Los servidores web pueden no ser capaces de manejar el número máximo de transacciones",
        "La carga máxima esperada definida por los analistas de negocio puede ser demasiado alta",
        "Las pruebas funcionales se pueden reutilizar para pruebas de rendimiento",
        "El tiempo de respuesta a las consultas de vacaciones puede ser inaceptable para los usuarios",
        "Las habilidades en el uso de herramientas de pruebas de rendimiento están disponibles"
      ],
      correctAnswer: [0, 3], // Las opciones correctas son la a) y la d)
      urlImage: " "
    },
    {
      "question": "Pregunta #X4 TTA-4.8.1 (K2) Explica las razones para incluir pruebas de coexistencia en un enfoque de prueba. ¿Cuál de los siguientes es un ejemplo de pruebas de compatibilidad?",
      options: [
        "Verificar si hay un conflicto de recursos entre la aplicación que se está probando y otra aplicación",
        "Verificar si un componente externo al sistema puede ser un reemplazo para un componente existente",
        "Verificar si una cuota de préstamo se calcula en la misma moneda que los datos de entrada que describen el tamaño del préstamo",
        "Verificar si todos los módulos dentro de un sistema están escritos en el mismo lenguaje de programación"
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
    "restart": "Reiniciar"
  }
}
