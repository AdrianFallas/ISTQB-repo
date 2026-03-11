const data_es = {
    questions : [
        {
            "question": "¿Cuál de las siguientes afirmaciones describe un objetivo de prueba válido?",
            "options": [
                "Demostrar que no hay defectos sin corregir en el sistema bajo prueba",
                "Demostrar que no habrá fallos después de la implementación del sistema en producción",
                "Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad",
                "Verificar que no existan combinaciones de entradas no probadas"
            ],
            "correctAnswer": 2, // Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes opciones muestra un ejemplo de actividades de prueba que contribuyen al éxito?",
            "options": [
                "Involucrar a los testers durante varias actividades del ciclo de vida del desarrollo de software (SDLC) ayudará a detectar defectos en los productos de trabajo",
                "Los testers intentan no molestar a los desarrolladores mientras codifican, para que los desarrolladores escriban mejor código",
                "La colaboración de los testers con los usuarios finales ayuda a mejorar la calidad de los informes de defectos durante la integración de componentes y las pruebas del sistema",
                "Los testers certificados diseñarán casos de prueba mucho mejores que los no certificados"
            ],
            "correctAnswer": 0, // Involucrar a los testers durante varias actividades del SDLC ayudará a detectar defectos en los productos de trabajo
            "urlImage": ""
        },
        {
            "question": "Te asignaron como tester en un equipo que produce un nuevo sistema incrementalmente. Has notado que no se han hecho cambios a los casos de prueba de regresión existentes durante varias iteraciones y no se identificaron nuevos defectos de regresión. Tu gerente está contento, pero tú no. ¿Qué principio de pruebas explica tu escepticismo?",
            "options": [
                "Las pruebas se desgastan",
                "Falacia de ausencia de defectos",
                "Los defectos se agrupan",
                "Las pruebas exhaustivas son imposibles"
            ],
            "correctAnswer": 0, // Las pruebas se desgastan
            "urlImage": ""
        },
        {
            "question": "Trabajas en un equipo que desarrolla una aplicación móvil para pedir comida. En la iteración actual el equipo decidió implementar la funcionalidad de pago. ¿Cuál de las siguientes actividades forma parte del análisis de pruebas?",
            "options": [
                "Estimar que probar la integración con el servicio de pagos tomará 8 días-persona",
                "Decidir que el equipo debe probar si es posible compartir correctamente el pago entre varios usuarios",
                "Usar análisis de valores límite (BVA) para derivar los datos de prueba para los casos de prueba que verifican el procesamiento correcto del pago para la cantidad mínima permitida",
                "Analizar la discrepancia entre el resultado real y el esperado tras ejecutar un caso de prueba que verifica el pago con tarjeta y reportar un defecto"
            ],
            "correctAnswer": 1, // Decidir que el equipo debe probar si es posible compartir correctamente el pago entre varios usuarios
            "urlImage": ""
        },
        {
            "question": "¿Qué factores tienen una influencia SIGNIFICATIVA en el enfoque de pruebas?\ni. El SDLC\nii. El número de defectos detectados en proyectos anteriores\niii. Los riesgos del producto identificados\niv. Nuevos requisitos regulatorios que obligan a pruebas blancas formales\nv. La configuración del entorno de pruebas",
            "options": [
                "i, ii tienen influencia significativa",
                "i, iii, iv tienen influencia significativa",
                "ii, iv, v tienen influencia significativa",
                "iii, v tienen influencia significativa"
            ],
            "correctAnswer": 1, // i, iii, iv tienen influencia significativa
            "urlImage": ""
        },
        {
            "question": "¿CUÁLES DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de pruebas?",
            "options": [
                "Configurar entornos de prueba",
                "Mantener el backlog del producto",
                "Diseñar soluciones para nuevos requisitos",
                "Crear el plan de pruebas",
                "Analizar la base de pruebas"
            ],
            "correctAnswer": [0, 4], // Configurar entornos de prueba, Analizar la base de pruebas
            "urlImage": ""
        },
        {
            "question": "¿Cuáles de las siguientes habilidades (i-v) son las MÁS importantes para un tester?\ni. Tener conocimiento del dominio\nii. Crear una visión del producto\niii. Ser un buen jugador de equipo\niv. Planificar y organizar el trabajo del equipo\nv. Pensamiento crítico",
            "options": [
                "ii y iv son importantes",
                "i, iii y v son importantes",
                "i, ii y v son importantes",
                "iii y iv son importantes"
            ],
            "correctAnswer": 1, // i, iii y v son importantes
            "urlImage": ""
        },
        {
            "question": "¿Cómo se manifiesta el enfoque de equipo completo en las interacciones entre testers y representantes del negocio?",
            "options": [
                "Los representantes del negocio deciden sobre los enfoques de automatización de pruebas",
                "Los testers ayudan a los representantes del negocio a definir una estrategia de pruebas",
                "Los representantes del negocio no forman parte del enfoque de equipo completo",
                "Los testers ayudan a los representantes del negocio a crear pruebas de aceptación adecuadas"
            ],
            "correctAnswer": 3, // Los testers ayudan a los representantes del negocio a crear pruebas de aceptación adecuadas
            "urlImage": ""
        },
        {
            "question": "Considera la siguiente regla: “para cada actividad del SDLC hay una actividad de prueba correspondiente”. ¿En qué modelos del SDLC se cumple esta regla?",
            "options": [
                "Solo en modelos de desarrollo secuenciales",
                "Solo en modelos de desarrollo iterativos",
                "Solo en modelos de desarrollo iterativos e incrementales",
                "En modelos de desarrollo secuenciales, incrementales e iterativos"
            ],
            "correctAnswer": 3, // En modelos de desarrollo secuenciales, incrementales e iterativos
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes afirmaciones describe MEJOR el enfoque de acceptance test-driven development (ATDD)?",
            "options": [
                "En ATDD, los criterios de aceptación se crean típicamente usando el formato given/when/then",
                "En ATDD, los casos de prueba se crean principalmente en pruebas de componentes y son orientados al código",
                "En ATDD, las pruebas se crean basadas en criterios de aceptación para impulsar el desarrollo del software relacionado",
                "En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita que los miembros del equipo las entiendan"
            ],
            "correctAnswer": 2, // En ATDD, las pruebas se crean basadas en criterios de aceptación para impulsar el desarrollo del software relacionado
            "urlImage": ""
        },
        {
            "question": "¿Cuál de los siguientes NO es un ejemplo del enfoque shift-left?",
            "options": [
                "Revisar los requisitos de usuario antes de que sean aceptados formalmente por los interesados",
                "Escribir una prueba de componente antes de que se escriba el código correspondiente",
                "Ejecutar una prueba de eficiencia de rendimiento para un componente durante las pruebas de componente",
                "Escribir un script de prueba antes de configurar el proceso de gestión de la configuración"
            ],
            "correctAnswer": 3, // Escribir un script de prueba antes de configurar el proceso de gestión de la configuración
            "urlImage": ""
        },
        {
            "question": "¿Cuál de los argumentos usarías para convencer a tu gerente de organizar retrospectivas al final de cada ciclo de release?",
            "options": [
                "Las retrospectivas están muy de moda hoy en día y a los clientes les agradaría que las añadamos a nuestros procesos",
                "Organizar retrospectivas ahorrará dinero a la organización porque sin ellas los representantes de usuarios no proporcionan retroalimentación inmediata sobre el producto",
                "Las debilidades de proceso identificadas durante la retrospectiva pueden analizarse y servir como lista de tareas para el programa de mejora continua de procesos de la organización",
                "Las retrospectivas abarcan cinco valores incluyendo coraje y respeto, que son cruciales para mantener la mejora continua en la organización"
            ],
            "correctAnswer": 2, // Las debilidades de proceso identificadas durante la retrospectiva pueden analizarse y servir como lista de tareas para el programa de mejora continua
            "urlImage": ""
        },
        {
            "question": "¿Qué tipos de fallos (1-4) encajan MEJOR con qué niveles de prueba (A-D)?\n1. Fallos en el comportamiento del sistema al desviarse de las necesidades de negocio del usuario\n2. Fallos en la comunicación entre componentes\n3. Fallos en la lógica del código\n4. Fallos en reglas de negocio implementadas incorrectamente\nA. Prueba de componente\nB. Prueba de integración de componentes\nC. Prueba de sistema\nD. Prueba de aceptación",
            "options": [
                "1D, 2B, 3A, 4C",
                "1D, 2B, 3C, 4A",
                "1B, 2A, 3D, 4C",
                "1C, 2B, 3A, 4D"
            ],
            "correctAnswer": 0, // 1D, 2B, 3A, 4C
            "urlImage": ""
        },
        {
            "question": "Estás probando una historia de usuario con tres criterios de aceptación: AC1, AC2 y AC3. AC1 está cubierto por el caso de prueba TC1, AC2 por TC2, y AC3 por TC3. El historial de ejecución de pruebas tuvo tres ejecuciones en tres versiones consecutivas del software como sigue:\nLas pruebas se repiten una vez que se informa que todos los defectos encontrados en la ejecución de pruebas han sido corregidos y hay una nueva versión disponible.\n¿Cuáles de las pruebas anteriores se ejecutan como pruebas de regresión?",
            "options": [
                "Solo 4, 7, 8, 9",
                "Solo 5, 7",
                "Solo 4, 6, 8, 9",
                "Solo 5, 6"
            ],
            "correctAnswer": 1, // Solo 5, 7
            "urlImage": "./imagenes/tabla preg14.png"
        },
        {
            "question": "¿Cuál de los siguientes NO es un beneficio de las pruebas estáticas?",
            "options": [
                "Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC",
                "Corregir defectos encontrados durante las pruebas estáticas suele ser mucho menos costoso que corregir defectos encontrados durante las pruebas dinámicas",
                "Encontrar defectos de codificación que podrían no haberse encontrado solo realizando pruebas dinámicas",
                "Detectar lagunas e inconsistencias en los requisitos"
            ],
            "correctAnswer": 0, // Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC
            "urlImage": ""
        },
        {
            "question": "¿Cuál de los siguientes es un beneficio de la retroalimentación temprana y frecuente?",
            "options": [
                "Mejora el proceso de pruebas para proyectos futuros",
                "Obliga a los clientes a priorizar sus requisitos según los riesgos acordados",
                "Proporciona una medida para la calidad de los cambios",
                "Ayuda a evitar malentendidos sobre los requisitos"
            ],
            "correctAnswer": 3, // Ayuda a evitar malentendidos sobre los requisitos
            "urlImage": ""
        },
        {
            "question": "Las revisiones usadas en tu organización tienen los siguientes atributos:\n• Existe el rol de un secretario\n• El propósito principal es evaluar calidad\n• La reunión es liderada por el autor del producto de trabajo\n• Existe preparación individual\n• Se produce un informe de revisión\n¿Qué tipo de revisión es MÁS probable que se esté usando?",
            "options": [
                "Revisión informal",
                "Walkthrough",
                "Revisión técnica",
                "Inspección"
            ],
            "correctAnswer": 1, // Walkthrough
            "urlImage": ""
        },
        {
            "question": "¿Cuál de estas afirmaciones NO es un factor que contribuye a revisiones exitosas?",
            "options": [
                "Los participantes deben dedicar tiempo adecuado para la revisión",
                "Dividir productos de trabajo grandes en partes pequeñas para hacer el esfuerzo requerido menos intenso",
                "Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación o hostilidad hacia otros participantes",
                "Los fallos encontrados deben reconocerse, apreciarse y manejarse objetivamente"
            ],
            "correctAnswer": 3, // Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación o hostilidad
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes es una característica de las técnicas de prueba basadas en la experiencia?",
            "options": [
                "Los casos de prueba se crean basándose en información de diseño detallada",
                "Los ítems probados dentro de la sección de código de interfaz se usan para medir cobertura",
                "Las técnicas de prueba dependen en gran medida del conocimiento del tester sobre el software y el dominio de negocio",
                "Los casos de prueba se usan para identificar desviaciones de los requisitos"
            ],
            "correctAnswer": 2, // Las técnicas de prueba dependen en gran medida del conocimiento del tester sobre el software y el dominio de negocio
            "urlImage": ""
        },
        {
            "question": "Estás probando un formulario de búsqueda de apartamentos simplificado que tiene solo dos criterios de búsqueda:\n• planta (con tres opciones posibles: planta baja; primer piso; segundo o superior)\n• tipo de jardín (con tres opciones posibles: sin jardín; jardín pequeño; jardín grande)\nCada apartamento en planta baja tiene jardín, los apartamentos en pisos superiores no. El formulario tiene una validación integrada que no permite usar criterios de búsqueda que violen esta regla.\nCada prueba tiene dos valores de entrada: planta y tipo de jardín. Quieres aplicar particionamiento por equivalencia (EP) para cubrir cada planta y cada tipo de jardín en tus pruebas.\n¿Cuál es el número mínimo de casos de prueba para lograr 100% de cobertura EP para particiones válidas?",
            "options": [
                "3",
                "4",
                "5",
                "6"
            ],
            "correctAnswer": 1, // 4
            "urlImage": ""
        },
        {
            "question": "Estás probando un sistema que calcula la nota final del curso para un estudiante.\nLa nota final se asigna según el resultado final, de acuerdo con las reglas:\n• 0 – 50 puntos: suspenso\n• 51 – 60 puntos: suficiente\n• 61 – 70 puntos: aprobado\n• 71 – 80 puntos: bien\n• 81 – 90 puntos: muy bien\n• 91 – 100 puntos: sobresaliente\nHas preparado el siguiente conjunto de casos de prueba:\n¿Cuál es la cobertura BVA (análisis de valores límite) de 2 valores para el resultado final que se logra con los casos de prueba existentes?",
            "options": [
                "50%",
                "60%",
                "33.3%",
                "100%"
            ],
            "correctAnswer": 0, // 50% (asumiendo que los casos de prueba cubren todos los límites)
            "urlImage": "./imagenes/tabla preg21.png"
        },
        {
            "question": "Tu tienda favorita de alquiler diario de bicicletas ha introducido un nuevo sistema CRM y te pidió, como uno de sus miembros más leales, que lo pruebes.\nLas funcionalidades implementadas son:\n• Cualquiera puede alquilar una bicicleta, pero los miembros reciben un 20% de descuento\n• Sin embargo, si se pierde la fecha de devolución, el descuento ya no está disponible\n• Después de 15 alquileres, los miembros reciben un regalo: una camiseta\nLa tabla de decisiones que describe las características implementadas es la siguiente:\nBasándote SOLO en la descripción de la funcionalidad del sistema CRM, ¿cuál de las reglas anteriores describe una situación imposible?",
            "options": [
                "R4",
                "R2",
                "R6",
                "R8"
            ],
            "correctAnswer": 3, // R8
            "urlImage": "./imagenes/tabla preg22.png"
        },
        {
            "question": "Pruebas un sistema cuyo ciclo de vida está modelado por el diagrama de transición de estados mostrado abajo. El sistema empieza en el estado INIT y termina su operación en el estado OFF.\n¿Cuál es el número MÍNIMO de casos de prueba para lograr cobertura de transiciones válidas?",
            "options": [
                "4",
                "2",
                "7",
                "3"
            ],
            "correctAnswer": 3, // 3 (asumiendo un diagrama simple con 3 transiciones)
            "urlImage": "./imagenes/diagram preg23.png"
        },
        {
            "question": "Tu suite de pruebas alcanzó 100% de cobertura de sentencias. ¿Cuál es la consecuencia de este hecho?",
            "options": [
                "Cada instrucción en el código que contiene un defecto ha sido ejecutada al menos una vez",
                "Cualquier suite de pruebas que contenga más casos de prueba que la tuya también logrará 100% de cobertura de sentencias",
                "Cada camino en el código ha sido ejecutado al menos una vez",
                "Cada combinación de valores de entrada ha sido probada al menos una vez"
            ],
            "correctAnswer": 0, // Cada instrucción en el código que contiene un defecto ha sido ejecutada al menos una vez
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes NO es cierta para las pruebas white-box?",
            "options": [
                "Durante las pruebas white-box se considera toda la implementación del software",
                "Las métricas de cobertura white-box pueden ayudar a identificar pruebas adicionales para aumentar la cobertura de código",
                "Las técnicas de prueba white-box pueden usarse en pruebas estáticas",
                "Las pruebas white-box pueden ayudar a identificar lagunas en la implementación de los requisitos"
            ],
            "correctAnswer": 3, // Las pruebas white-box pueden ayudar a identificar lagunas en la implementación de los requisitos
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes describe MEJOR el concepto detrás de error guessing?",
            "options": [
                "Error guessing implica usar tu conocimiento y experiencia de defectos encontrados en el pasado y errores típicos cometidos por desarrolladores",
                "Error guessing implica usar tu experiencia personal de desarrollo y los errores que cometiste como desarrollador",
                "Error guessing requiere que imagines que eres el usuario del objeto de prueba y adivines errores que el usuario podría cometer al interactuar con él",
                "Error guessing requiere duplicar rápidamente la tarea de desarrollo para identificar el tipo de errores que un desarrollador podría cometer"
            ],
            "correctAnswer": 0, // Error guessing implica usar tu conocimiento y experiencia de defectos encontrados en el pasado y errores típicos cometidos por desarrolladores
            "urlImage": ""
        },
        {
            "question": "En tu proyecto hubo un retraso en el lanzamiento de una aplicación nueva y la ejecución de pruebas comenzó tarde, pero tienes un conocimiento de dominio muy detallado y buenas habilidades analíticas. La lista completa de requisitos aún no ha sido compartida con el equipo, pero la gerencia pide presentar algunos resultados de pruebas.\n¿Qué técnica de prueba encaja MEJOR en esta situación?",
            "options": [
                "Pruebas basadas en listas de verificación",
                "Error guessing",
                "Pruebas exploratorias",
                "Pruebas de cobertura de ramas"
            ],
            "correctAnswer": 2, // Pruebas exploratorias
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes describe MEJOR la forma en que se pueden documentar los criterios de aceptación?",
            "options": [
                "Realizar retrospectivas para determinar las necesidades reales de los interesados respecto a una historia de usuario",
                "Usar el formato given/when/then para describir una condición de prueba ejemplo relacionada con una historia de usuario",
                "Usar comunicación verbal para reducir el riesgo de malentendidos sobre los criterios de aceptación",
                "Documentar los riesgos relacionados con una historia de usuario en un plan de pruebas para facilitar las pruebas basadas en riesgos"
            ],
            "correctAnswer": 1, // Usar el formato given/when/then para describir una condición de prueba ejemplo relacionada con una historia de usuario
            "urlImage": ""
        },
        {
            "question": "Considera la siguiente historia de usuario:\nComo Editor\nQuiero revisar contenido antes de publicarlo\npara asegurar que la gramática sea correcta\ny sus criterios de aceptación:\n• El usuario puede iniciar sesión en el sistema de gestión de contenido con el rol \"Editor\"\n• El editor puede ver páginas de contenido existentes\n• El editor puede editar el contenido de la página\n• El editor puede añadir comentarios de marcado\n• El editor puede guardar cambios\n• El editor puede reasignar al rol \"propietario de contenido\" para realizar actualizaciones\n¿Cuál de los siguientes es el MEJOR ejemplo de una prueba ATDD para esta historia de usuario?",
            "options": [
                "Probar si el editor puede guardar el documento después de editar el contenido de la página",
                "Probar si el propietario de contenido puede iniciar sesión y realizar actualizaciones",
                "Probar si el editor puede programar el contenido editado para publicación",
                "Probar si el editor puede reasignar a otro editor para realizar actualizaciones"
            ],
            "correctAnswer": 0, // Probar si el editor puede guardar el documento después de editar el contenido de la página
            "urlImage": ""
        },
        {
            "question": "¿Cómo agregan valor los testers a la planificación de iteración y release?",
            "options": [
                "Los testers determinan la prioridad de las historias de usuario a desarrollar",
                "Los testers se enfocan solo en los aspectos funcionales del sistema a probar",
                "Los testers participan en la identificación detallada de riesgos y en la evaluación de riesgos de las historias de usuario",
                "Los testers garantizan el lanzamiento de software de alta calidad mediante el diseño temprano de pruebas durante la planificación del release"
            ],
            "correctAnswer": 2, // Los testers participan en la identificación detallada de riesgos y en la evaluación de riesgos de las historias de usuario
            "urlImage": ""
        },
        {
            "question": "¿CUÁLES DOS de las siguientes opciones son criterios de salida para probar un sistema?",
            "options": [
                "Disponibilidad del entorno de pruebas",
                "La capacidad de iniciar sesión en el objeto de prueba por parte del tester",
                "Se alcanza la densidad de defectos estimada",
                "Los requisitos se traducen al formato given/when/then",
                "Las pruebas de regresión están automatizadas"
            ],
            "correctAnswer": [2, 4], // Se alcanza la densidad de defectos estimada, Las pruebas de regresión están automatizadas
            "urlImage": ""
        },
        {
            "question": "Tu equipo usa la técnica de estimación de tres puntos para estimar el esfuerzo de prueba de una nueva funcionalidad de alto riesgo. Las siguientes estimaciones fueron hechas:\n• Estimación más optimista: 2 horas-persona\n• Estimación más probable: 11 horas-persona\n• Estimación más pesimista: 14 horas-persona\n¿Cuál es la estimación final?",
            "options": [
                "9 horas-persona",
                "14 horas-persona",
                "11 horas-persona",
                "10 horas-persona"
            ],
            "correctAnswer": 3, // 10 horas-persona
            "urlImage": ""
        },
        {
            "question": "Estás probando una aplicación móvil que permite a los usuarios encontrar un restaurante cercano según el tipo de comida. Considera la siguiente lista de casos de prueba, prioridades (un número menor significa mayor prioridad) y dependencias:\n¿Cuál de los siguientes casos de prueba debe ejecutarse como el tercero?",
            "options": [
                "TC 003",
                "TC 005",
                "TC 002",
                "TC 001"
            ],
            "correctAnswer": 0, // TC 003 (asumiendo basado en prioridad y dependencias, texto original truncado)
            "urlImage": "./imagenes/tabla preg33.png"
        },
        {
            "question": "Considera las siguientes categorías de prueba (1-4) y los cuadrantes de pruebas ágiles (A-D):\n1. Pruebas de usabilidad\n2. Pruebas de componente\n3. Pruebas funcionales\n4. Pruebas de fiabilidad\nA. Cuadrante Q1: orientado a la tecnología, apoyando al equipo de desarrollo\nB. Cuadrante Q2: orientado al negocio, apoyando al equipo de desarrollo\nC. Cuadrante Q3: orientado al negocio, crítica al producto\nD. Cuadrante Q4: orientado a la tecnología, crítica al producto\n¿Cómo mapean las siguientes categorías de prueba a los cuadrantes ágiles?",
            "options": [
                "1C, 2A, 3B, 4D",
                "1D, 2A, 3C, 4B",
                "1C, 2B, 3D, 4A",
                "1D, 2B, 3C, 4A"
            ],
            "correctAnswer": 0, // 1C, 2A, 3B, 4D
            "urlImage": ""
        },
        {
            "question": "Durante un análisis de riesgos se identificó y evaluó el siguiente riesgo:\n• Riesgo: El tiempo de respuesta es demasiado largo para generar un informe\n• Probabilidad del riesgo: media; impacto: alto\n• Respuesta al riesgo:\no Un equipo de pruebas independiente realiza pruebas de eficiencia de rendimiento durante las pruebas de sistema\no Una muestra seleccionada de usuarios finales realiza pruebas alfa y beta antes del lanzamiento\n¿Qué medida se propone tomar en respuesta a este riesgo analizado?",
            "options": [
                "Aceptación del riesgo",
                "Plan de contingencia",
                "Mitigación del riesgo",
                "Transferencia del riesgo"
            ],
            "correctAnswer": 2, // Mitigación del riesgo
            "urlImage": ""
        },
        {
            "question": "¿Qué producto de trabajo puede usar un equipo ágil para mostrar la cantidad de trabajo completado y la cantidad total de trabajo restante para una iteración dada?",
            "options": [
                "Criterios de aceptación",
                "Informe de defectos",
                "Informe de finalización de pruebas",
                "Gráfico de burndown"
            ],
            "correctAnswer": 3, // Gráfico de burndown
            "urlImage": ""
        },
        {
            "question": "Necesitas actualizar uno de los scripts de prueba automatizados para alinearlo con un nuevo requisito. ¿Qué proceso indica que creas una nueva versión del script de prueba en el repositorio de pruebas?",
            "options": [
                "Gestión de trazabilidad",
                "Pruebas de mantenimiento",
                "Gestión de la configuración",
                "Ingeniería de requisitos"
            ],
            "correctAnswer": 2, // Gestión de la configuración
            "urlImage": ""
        },
        {
            "question": "Recibiste el siguiente informe de defecto de los desarrolladores indicando que la anomalía descrita en este informe de prueba no es reproducible.\n¿Qué información crítica FALTA en este informe de prueba que hubiera sido útil para los desarrolladores?",
            "options": [
                "Resultado esperado y resultado actual",
                "Referencias y estado del defecto",
                "Entorno de prueba y elemento de prueba",
                "Prioridad y severidad"
            ],
            "correctAnswer": 2, // Resultado esperado y resultado actual
            "urlImage": "./imagenes/text preg38.png"
        },
        {
            "question": "¿Qué actividad de prueba apoya una herramienta de preparación de datos?",
            "options": [
                "Monitoreo y control de pruebas",
                "Análisis de pruebas",
                "Diseño e implementación de pruebas",
                "Finalización de pruebas"
            ],
            "correctAnswer": 2, // Diseño e implementación de pruebas
            "urlImage": ""
        },
        {
            "question": "¿Qué elemento identifica correctamente un riesgo potencial de realizar automatización de pruebas?",
            "options": [
                "Puede introducir regresiones desconocidas en producción",
                "No puede asignarse adecuadamente el esfuerzo suficiente para mantener el testware",
                "Las herramientas de prueba y el testware asociado pueden no ser suficientemente fiables",
                "Puede reducir el tiempo asignado para las pruebas manuales"
            ],
            "correctAnswer": 1, // No puede asignarse adecuadamente el esfuerzo suficiente para mantener el testware
            "urlImage": ""
        },
        {
            "question": "Te dieron la tarea de analizar y corregir las causas de fallos en un nuevo sistema que será lanzado.\n¿Qué actividad estás realizando?",
            "options": [
                "Depuración (debugging)",
                "Pruebas de software",
                "Obtención de requisitos",
                "Gestión de defectos"
            ],
            "correctAnswer": 0, // Depuración (debugging)
            "urlImage": ""
        },
        {
            "question": "En muchas organizaciones de software el departamento de pruebas se llama departamento de Aseguramiento de Calidad (QA).\n¿Es correcta esta afirmación y por qué?",
            "options": [
                "Es correcta. Pruebas y QA significan exactamente lo mismo",
                "Es correcta. Estos nombres pueden usarse indistintamente porque ambos se enfocan en los mismos temas de calidad",
                "No es correcta. Las pruebas son algo más; las pruebas incluyen todas las actividades relacionadas con la calidad. QA se enfoca en los procesos relacionados con la calidad",
                "No es correcta. QA se centra en procesos relacionados con la calidad mientras que las pruebas se concentran en demostrar que un componente o sistema es apto para su propósito y detectar defectos"
            ],
            "correctAnswer": 3, // No es correcta. QA se centra en procesos relacionados con la calidad mientras que las pruebas se concentran en demostrar que un componente o sistema es apto y detectar defectos
            "urlImage": ""
        },
        {
            "question": "Un teléfono sonando en un cubículo vecino distrae a un programador causándole programar incorrectamente la lógica que comprueba el límite superior de una variable de entrada. Más tarde, durante las pruebas del sistema, un tester nota que este campo acepta valores de entrada inválidos.\n¿Cuál de las siguientes describe correctamente un límite superior codificado incorrectamente?",
            "options": [
                "La causa raíz",
                "Un fallo",
                "Un error",
                "Un defecto"
            ],
            "correctAnswer": 3, // Un defecto
            "urlImage": ""
        },
        {
            "question": "Considera el siguiente testware.\nTest Charter #04.018 Tiempo de sesión: 1h\nExplorar: Página de registro\nCon: Diferentes conjuntos de datos de entrada incorrectos\nPara descubrir: Defectos relacionados con aceptar el registro con datos de entrada incorrectos\n¿Qué actividad de prueba produce este testware como salida?",
            "options": [
                "Planificación de pruebas",
                "Monitoreo y control de pruebas",
                "Análisis de pruebas",
                "Diseño de pruebas"
            ],
            "correctAnswer": 3, // Diseño de pruebas
            "urlImage": "tabla pregApex4.png"
        },
        {
            "question": "¿Cuál de los siguientes es el MEJOR ejemplo de cómo la trazabilidad apoya las pruebas?",
            "options": [
                "Realizar el análisis de impacto de un cambio dará información sobre la finalización de las pruebas",
                "Analizar la trazabilidad entre casos de prueba y resultados de prueba dará información sobre el nivel estimado de riesgo residual",
                "Realizar el análisis de impacto de un cambio ayudará a seleccionar los casos de prueba correctos para pruebas de regresión",
                "Analizar la trazabilidad entre la base de pruebas, los objetos de prueba y los casos de prueba ayudará a seleccionar datos de prueba para alcanzar la cobertura asumida del objeto de prueba"
            ],
            "correctAnswer": 2, // Realizar el análisis de impacto de un cambio ayudará a seleccionar los casos de prueba correctos para regresión
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes EXPLICA MEJOR un beneficio de la independencia en las pruebas?",
            "options": [
                "El uso de un equipo de pruebas independiente permite a la dirección del proyecto asignar la responsabilidad de la calidad del entregable final al equipo de pruebas",
                "Si se puede contratar un equipo de pruebas externo a la organización, existen beneficios distintos en que dicho equipo no se ve tan influenciado por las preocupaciones de entrega de la dirección del proyecto y la necesidad de cumplir plazos",
                "Un equipo de pruebas independiente puede trabajar separado de los desarrolladores, no distraerse con cambios de requisitos del proyecto y restringir la comunicación con los desarrolladores al reporte de defectos",
                "Cuando las especificaciones contienen ambigüedades e inconsistencias, se hacen suposiciones en su interpretación, y un tester independiente puede ser útil para cuestionar esas suposiciones y la interpretación hecha por el desarrollador"
            ],
            "correctAnswer": 3, // Cuando las especificaciones contienen ambigüedades e inconsistencias... un tester independiente puede cuestionar esas suposiciones
            "urlImage": ""
        },
        {
            "question": "Trabajas como tester en un equipo que sigue el modelo V. ¿Cuál de las siguientes actividades SE PUEDE realizar en las fases iniciales del SDLC?",
            "options": [
                "Ejecución dinámica de pruebas",
                "Pruebas estáticas",
                "Planificación de pruebas",
                "Ejecución de pruebas de aceptación",
                "Pruebas de mantenimiento"
            ],
            "correctAnswer": [1, 2], // Pruebas estáticas, Planificación de pruebas
            "urlImage": ""
        },
        {
            "question": "¿Cuáles de las siguientes son ventajas de DevOps?\ni. Lanzamiento de producto más rápido y menor time-to-market\nii. Aumenta la necesidad de pruebas manuales repetitivas\niii. Disponibilidad constante de software ejecutable\niv. Reducción en el número de pruebas de regresión asociadas con refactorizaciones de código\nv. Montar el framework de automatización es barato ya que todo está automatizado",
            "options": [
                "i, ii, iv son ventajas",
                "iii, v son ventajas",
                "i, iii son ventajas",
                "ii, iv, v son ventajas"
            ],
            "correctAnswer": 2, // i, iii son ventajas
            "urlImage": ""
        },
        {
            "question": "Trabajas como tester en un proyecto de una app móvil para pedir comida. El cliente te envió una lista de requisitos. Uno de ellos, de alta prioridad, dice:\n“El pedido debe procesarse en menos de 10 segundos en el 95% de los casos”.\nCreaste un conjunto de casos de prueba donde se hicieron pedidos aleatorios, se midió el tiempo de procesamiento y se compararon los resultados con el requisito.\n¿Qué tipo de prueba realizaste?",
            "options": [
                "Funcional, porque los casos de prueba cubren un requisito de negocio del usuario",
                "No funcional, porque miden el rendimiento del sistema",
                "Funcional, porque los casos de prueba interactúan con la interfaz de usuario",
                "White-box, porque necesitamos conocer la estructura interna del programa para medir el tiempo de procesamiento"
            ],
            "correctAnswer": 1, // No funcional, porque miden el rendimiento del sistema
            "urlImage": ""
        },
        {
            "question": "La estrategia de pruebas de tu organización sugiere que una vez que un sistema va a ser retirado, se debe probar la migración de datos. ¿Como parte de qué tipo de prueba se realizará esto CON MAYOR PROBABILIDAD?",
            "options": [
                "Pruebas de mantenimiento",
                "Pruebas de regresión",
                "Pruebas de fiabilidad",
                "Pruebas de integración"
            ],
            "correctAnswer": 0, // Pruebas de mantenimiento
            "urlImage": ""
        },
        {
            "question": "La siguiente es una lista de productos de trabajo producidos en el SDLC.\ni. Requisitos de negocio\nii. Cronograma\niii. Presupuesto de pruebas\niv. Código ejecutable de terceros\nv. Historias de usuario y sus criterios de aceptación\n¿Cuáles de ellos pueden revisarse?",
            "options": [
                "i y iv pueden revisarse",
                "i, ii, iii y iv pueden revisarse",
                "i, ii, iii y v pueden revisarse",
                "iii, iv, v pueden revisarse"
            ],
            "correctAnswer": 2, // i, ii, iii y v pueden revisarse
            "urlImage": ""
        },
        {
            "question": "Decide cuáles de las siguientes afirmaciones (i-v) son verdaderas para las pruebas estáticas.\ni. Los comportamientos externos anormales son más fáciles de identificar con estas pruebas\nii. Las discrepancias con un estándar de codificación son más fáciles de encontrar con estas pruebas\niii. Identifica fallos causados por defectos cuando el software se ejecuta\niv. Su objetivo es identificar defectos lo antes posible\nv. La falta de cobertura para requisitos críticos de seguridad es más fácil de encontrar y corregir",
            "options": [
                "i, iv, v son verdaderas para pruebas estáticas",
                "i, iii, iv son verdaderas para pruebas estáticas",
                "ii, iii son verdaderas para pruebas estáticas",
                "ii, iv, v son verdaderas para pruebas estáticas"
            ],
            "correctAnswer": 3, // ii, iv, v son verdaderas para pruebas estáticas
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes afirmaciones sobre revisiones formales es VERDADERA?",
            "options": [
                "Algunas revisiones no requieren más de un rol",
                "El proceso de revisión tiene varias actividades",
                "La documentación a revisar no se distribuye antes de la reunión de revisión, excepto para productos de trabajo específicos",
                "Los defectos encontrados durante la revisión no se reportan ya que no fueron encontrados por pruebas dinámicas"
            ],
            "correctAnswer": 1, // El proceso de revisión tiene varias actividades
            "urlImage": ""
        },
        {
            "question": "¿Qué tarea puede asumir la gerencia durante una revisión formal?",
            "options": [
                "Asumir la responsabilidad general de la revisión",
                "Decidir qué se va a revisar",
                "Asegurar el buen desarrollo de las reuniones de revisión y moderar si es necesario",
                "Registrar información de la revisión como decisiones de revisión"
            ],
            "correctAnswer": 1, // Decidir qué se va a revisar
            "urlImage": ""
        },
        {
            "question": "Un sistema de almacenamiento de vino usa un dispositivo de control que mide la temperatura T (en °C, redondeada al grado más cercano) y avisa si se desvía del valor óptimo de 12, según las reglas:\n• si T = 12, el sistema dice “temperatura óptima”\n• si T < 12, el sistema dice “¡temperatura demasiado baja!”\n• si T > 12, el sistema dice “¡temperatura demasiado alta!”\nQuieres usar el análisis de valores límite de 3 puntos (BVA) para verificar el comportamiento del dispositivo. Una entrada de prueba es una temperatura en °C proporcionada por el dispositivo.\n¿Cuál es el conjunto MÍNIMO de entradas de prueba que logra 100% de la cobertura deseada?",
            "options": [
                "11, 12, 13",
                "10, 12, 14",
                "10, 11, 12, 13, 14",
                "10, 11, 13, 14"
            ],
            "correctAnswer": 2, // 10, 11, 12, 13, 14
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes afirmaciones sobre pruebas de ramas es CORRECTA?",
            "options": [
                "Si un programa incluye solo ramas incondicionales, entonces se puede lograr 100% de cobertura de ramas sin ejecutar ningún caso de prueba",
                "Si los casos de prueba ejercitan todas las ramas incondicionales en el código, entonces se logra 100% de cobertura de ramas",
                "Si se logra 100% de cobertura de sentencias, entonces también se logra 100% de cobertura de ramas",
                "Si se logra 100% de cobertura de ramas, entonces se ejercitan todos los resultados de decisión en cada instrucción de decisión del código"
            ],
            "correctAnswer": 3, // Si se logra 100% de cobertura de ramas, entonces se ejercitan todos los resultados de decisión
            "urlImage": ""
        },
        {
            "question": "Estás probando una aplicación móvil que permite a los clientes acceder y gestionar sus cuentas bancarias. Ejecutas una suite de pruebas que implica evaluar cada pantalla y cada campo en cada pantalla contra una lista general de buenas prácticas de interfaz de usuario derivada de un libro popular sobre el tema que maximiza la usabilidad para tales aplicaciones. ¿Cuál de las siguientes opciones CATEGORIZA MEJOR la técnica de prueba que estás usando?",
            "options": [
                "Caja negra",
                "Exploratoria",
                "Basada en listas de verificación",
                "Error guessing"
            ],
            "correctAnswer": 2, // Basada en listas de verificación
            "urlImage": ""
        },
        {
            "question": "¿Cuál de las siguientes describe MEJOR el enfoque colaborativo para redactar historias de usuario?",
            "options": [
                "Las historias de usuario son creadas por testers y desarrolladores y luego aceptadas por los representantes del negocio",
                "Las historias de usuario son creadas por representantes del negocio, desarrolladores y testers juntos",
                "Las historias de usuario son creadas por representantes del negocio y verificadas por desarrolladores y testers",
                "Las historias de usuario se crean de manera que sean independientes, negociables, valiosas, estimables, pequeñas y verificables"
            ],
            "correctAnswer": 1, // Las historias son creadas por representantes del negocio, desarrolladores y testers juntos
            "urlImage": ""
        },
        {
            "question": "Considera esta parte de un plan de pruebas.\nLas pruebas se realizarán usando pruebas de componente y pruebas de integración de componentes.\nLas regulaciones requieren demostrar que se alcanza 100% de cobertura de ramas para cada componente clasificado como crítico.\n¿A qué parte del plan de pruebas pertenece esto?",
            "options": [
                "Comunicación",
                "Registro de riesgos",
                "Contexto de las pruebas",
                "Enfoque de pruebas"
            ],
            "correctAnswer": 3, // Enfoque de pruebas
            "urlImage": ""
        },
        {
            "question": "Tu equipo usa planning poker para estimar el esfuerzo de prueba de una nueva funcionalidad requerida. Hay una regla en el equipo que si no hay tiempo para alcanzar un acuerdo total y la variación en los resultados es pequeña, se pueden aplicar reglas como “aceptar el número con más votos”.\nDespués de dos rondas no se alcanzó consenso, así que se inició la tercera ronda. Puedes ver los resultados de estimación en la tabla.\n¿Cuál es el MEJOR ejemplo del siguiente paso?",
            "options": [
                "El product owner debe intervenir y tomar la decisión final",
                "Aceptar 13 como la estimación final de prueba ya que tiene la mayoría de votos",
                "No se requiere más acción. Se alcanzó consenso",
                "Eliminar la nueva funcionalidad del release actual porque no se alcanzó consenso"
            ],
            "correctAnswer": 1, // Aceptar 13 como la estimación final ya que tiene la mayoría de votos
            "urlImage": "./imagenes/tabla pregApex20.png"
        },
        {
            "question": "¿Qué es VERDADERO respecto a la pirámide de pruebas?",
            "options": [
                "Enfatiza tener muchas más pruebas en los niveles de prueba inferiores",
                "Sugiere que cada prueba de bajo nivel verifica gran parte de la funcionalidad",
                "Describe la distribución de tipos de prueba a lo largo del SDLC",
                "No tiene impacto en la construcción de pruebas automatizadas"
            ],
            "correctAnswer": 0, // Enfatiza tener muchas más pruebas en los niveles inferiores
            "urlImage": ""
        },
        {
            "question": "Durante el análisis de riesgos el equipo consideró el siguiente riesgo: “El sistema permite un descuento demasiado alto para un cliente”. El equipo estimó el impacto del riesgo como muy alto.\n¿Qué se puede decir sobre la probabilidad del riesgo?",
            "options": [
                "También es muy alta. Alto impacto siempre implica alta probabilidad",
                "Es muy baja. Alto impacto siempre implica baja probabilidad",
                "No se puede decir nada sobre la probabilidad. Impacto y probabilidad son independientes",
                "La probabilidad no es importante con un impacto tan alto. No es necesario definirla"
            ],
            "correctAnswer": 2, // No se puede decir nada sobre la probabilidad. Impacto y probabilidad son independientes
            "urlImage": ""
        },
        {
            "question": "La siguiente lista contiene riesgos identificados para un nuevo producto de software:\ni. La dirección mueve a dos testers experimentados a otro proyecto\nii. El sistema no cumple con estándares de seguridad\niii. El tiempo de respuesta del sistema excede los requisitos de los usuarios\niv. Los interesados tienen expectativas inexactas\nv. Personas con discapacidad tienen problemas al usar el sistema\n¿Cuáles de ellos son riesgos de proyecto?",
            "options": [
                "i, iv son riesgos de proyecto",
                "iv, v son riesgos de proyecto",
                "i, iii son riesgos de proyecto",
                "ii, v son riesgos de proyecto"
            ],
            "correctAnswer": 0, // i, iv son riesgos de proyecto
            "urlImage": ""
        },
        {
            "question": "¿Cuál de los siguientes es un ejemplo de cómo el análisis de riesgos del producto influye en la exhaustividad y el alcance de las pruebas?",
            "options": [
                "El gerente de pruebas monitorea y reporta el nivel de todos los riesgos conocidos diariamente para que los interesados decidan la fecha de release",
                "Uno de los riesgos identificados fue \"Falta de soporte de bases de datos open-source\", por lo que el equipo decidió integrar el sistema con una base de datos open-source",
                "Durante el análisis cuantitativo de riesgos, el equipo estimó el nivel total de todos los riesgos identificados y lo reportó como riesgo residual antes de las pruebas",
                "La evaluación de riesgos reveló un nivel muy alto de riesgos de rendimiento, por lo que se decidió realizar pruebas detalladas de eficiencia de rendimiento temprano en el SDLC"
            ],
            "correctAnswer": 3, // Se decidió realizar pruebas detalladas de rendimiento temprano en el SDLC
            "urlImage": ""
        },
        {
            "question": "¿CUÁLES DOS de las siguientes opciones son métricas comunes usadas para reportar el nivel de calidad del objeto de prueba?",
            "options": [
                "Número de defectos encontrados durante las pruebas del sistema",
                "Esfuerzo total en diseño de pruebas dividido por el número de casos de prueba diseñados",
                "Número de procedimientos de prueba ejecutados",
                "Número de defectos encontrados dividido por el tamaño de un producto de trabajo",
                "Tiempo necesario para reparar un defecto"
            ],
            "correctAnswer": [0,3], // Número de defectos encontrados durante pruebas del sistema, Número de defectos encontrados dividido por el tamaño del producto
            "urlImage": ""
        },
        {
            "question": "¿Cuál de la información contenida en un informe de progreso de pruebas es LA MENOS útil para los representantes del negocio?",
            "options": [
                "Impedimentos para las pruebas",
                "Cobertura de ramas alcanzada",
                "Progreso de las pruebas",
                "Nuevos riesgos dentro del ciclo de pruebas"
            ],
            "correctAnswer": 1, // Cobertura de ramas alcanzada
            "urlImage": ""
        }

]};
window.data_es = data_es;