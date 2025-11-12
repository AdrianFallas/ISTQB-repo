//Test Management advance example 1
const data_es = {
    questions: [
        {
            "question": "¿Cuál de las siguientes es la respuesta más completa sobre quién necesita aceptar el plan de pruebas?",
            options: [
                "Todos los ejecutivos de la empresa y el grupo directivo",
                "Todos los proveedores y sus desarrolladores",
                "Todos los usuarios finales",
                "Todos los interesados"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuándo ocurre la entrega del testware?",
            options: [
                "Durante la planificación de pruebas",
                "Durante el monitoreo de pruebas",
                "Durante la finalización de pruebas",
                "Durante el control de pruebas"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "En los cuadrantes de interesados, ¿cuál de los siguientes se clasifica como 'Baja Influencia, Alto Interés'?",
            options: [
                "Promotores",
                "Latentes",
                "Defensores",
                "Apatéticos"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál es la diferencia en el uso del dashboard entre un proyecto en V-model y un proyecto en Scrum?",
            options: [
                "El V-model lo requiere, el proyecto Scrum no lo usa",
                "El V-model puede usarlo, el proyecto Scrum debe usarlo",
                "El V-model debe usarlo, el proyecto Scrum puede usarlo",
                "El V-model no lo usa, el proyecto Scrum tampoco lo usa"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿En qué nivel de pruebas se comparten las responsabilidades de gestión de pruebas con el equipo de desarrollo?",
            options: [
                "Pruebas de integración de componentes",
                "Pruebas de sistema",
                "Pruebas de integración de sistema",
                "Pruebas de aceptación"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás investigando herramientas para determinar la mejor herramienta de pruebas de accesibilidad disponible. ¿Qué tipo de pruebas estás ayudando a facilitar?",
            options: [
                "Pruebas de caja negra",
                "Pruebas de caja blanca",
                "Pruebas funcionales",
                "Pruebas no funcionales"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu equipo está trabajando en la prueba del software para un emocionante nuevo dispositivo médico que mejorará drásticamente los resultados de la cirugía cardíaca. Las pruebas han seguido estrictamente los requisitos que fueron aprobados y firmados por los interesados apropiados. Has implementado estándares para la profundidad de los casos de prueba, así como planes para los diversos tipos de pruebas no funcionales que se requieren.\n\nDada esta información, ¿qué más necesitas investigar y revisar urgentemente para evaluar los impactos y riesgos en el proceso de pruebas?",
            options: [
                "El plan de implementación en producción para asegurar que habrá tiempo adecuado para las pruebas durante el despliegue",
                "El procedimiento de prueba de aceptación y los pasos requeridos por los usuarios para proporcionar su aceptación",
                "El plan de pruebas de seguridad y el contrato con la organización de pruebas de seguridad",
                "La mitigación de riesgos requerida para cumplir con las regulaciones y estándares aplicables para probar este tipo de software médico"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Has tomado el control de un proyecto que está desordenado. Las pruebas estaban siendo realizadas completamente por el equipo del lugar que trabajaba estrechamente con los desarrolladores y analistas de negocios. Alguien en la dirección decidió que era demasiado costoso hacer las pruebas de esa manera, por lo que han requerido que al menos la mitad de las pruebas se asignen al equipo offshore. Este equipo offshore acaba de ser formado y nadie ha trabajado con ellos antes. Hay buenas herramientas en su lugar para la gestión de pruebas y el seguimiento de defectos, por lo que el intercambio de información debería ser sencillo. Hay un gerente de proyecto para el equipo remoto que facilitará las comunicaciones. El equipo en el sitio no está seguro de qué hacer o cómo asignar trabajo al equipo remoto.\n\n¿Qué deberías hacer ahora para ayudar al proyecto a avanzar?",
            options: [
                "Eliminar el equipo remoto y volver al modelo totalmente en el sitio, que será menos costoso a largo plazo",
                "Desarrollar un plan de configuración del equipo de pruebas para que el equipo sepa quién es responsable de qué",
                "Desarrollar un plan de pruebas offshore para que el equipo offshore pueda seguir los mismos procesos que el equipo en el sitio",
                "Elegir un gerente del equipo de pruebas remoto que pueda ser tu contraparte"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes es una forma en que el análisis de riesgos impulsa la ejecución de pruebas?",
            options: [
                "Determina qué pruebas deben ejecutarse primero",
                "Guía la selección de condiciones de prueba que deben ser cubiertas por las pruebas",
                "Influye en el formato del informe resumen de pruebas que se escribirá al final de las pruebas",
                "Impulsa el análisis de causa raíz para cualquier defecto encontrado"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de estos es un factor que influye en la probabilidad de que ocurra un riesgo?",
            options: [
                "Equipo distribuido geográficamente",
                "Daño a la reputación",
                "Seguridad",
                "Sanciones legales"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás gestionando las pruebas para un proyecto de tarjeta bancaria. Las pruebas estaban programadas para durar 10 semanas, pero cuando se desarrolló el software, solo quedaban seis semanas disponibles para las pruebas. Sabiendo que había muchos riesgos con el software, tu equipo comenzó las actividades de prueba temprano supervisando las revisiones de código, definiendo los criterios de aceptación trabajando con los usuarios y creando todas las pruebas antes de que llegara el código.\n\nAhora estás a tres días de la fecha de lanzamiento. Tus pruebas han mitigado todos los elementos de alto y medio riesgo, dejando solo los elementos de bajo riesgo sin mitigar por pruebas. Estimas que tomará dos semanas probar manualmente los elementos de bajo riesgo. En este punto, ¿qué deberías hacer?",
            options: [
                "Automatizar las pruebas de los elementos no probados para asegurar que estén cubiertos",
                "Bloquear el lanzamiento y comenzar a probar los elementos de bajo riesgo de inmediato",
                "Realizar pruebas de amplitud para los elementos de bajo riesgo para evaluar el riesgo residual",
                "Seleccionar uno de los elementos de bajo riesgo y realizar pruebas de profundidad para evaluar el riesgo residual"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás gestionando el equipo de pruebas que está probando una nueva aplicación móvil que proporciona una guía de senderismo 'paso a paso'. Tu evaluación de riesgos resultó en la siguiente tabla: ¿Qué tipo de pruebas deben aplicarse a la precisión de los datos GPS?",
            options: [
                "Pruebas de amplitud en una amplia muestra de escenarios, pruebas de profundidad para la precisión de la información en cualquier conjunto particular de condiciones",
                "Usabilidad de los datos GPS",
                "Coordinación de la información en los datos GPS y el buscador de senderos",
                "Pruebas de expertos realizadas por un conjunto de usuarios con amplia experiencia en senderismo en áreas remotas, combinadas con experiencia en pruebas de usabilidad profunda"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: "./imagenes/tabla preg12.png"
        },
        {
            "question": "Acabas de completar un proyecto y lo has lanzado a producción. A pesar de que aplicaste un enfoque basado en riesgos, se encontraron problemas significativos en producción. Después de un análisis más profundo, has determinado que se pasaron por alto riesgos clave en el análisis de riesgos. ¿Qué se debe hacer para futuros proyectos para asegurar que esto no vuelva a suceder?",
            options: [
                "Asegurarse de que la mitigación de riesgos se monitoree de manera consistente durante las pruebas",
                "Verificar que las pruebas estén alineadas con los objetivos de mitigación de riesgos del proyecto",
                "Asegurarse de que las personas adecuadas estén involucradas en el análisis de riesgos, para que se utilice un conjunto más amplio de información para identificar y priorizar los riesgos",
                "Verificar que las técnicas de prueba utilizadas sean apropiadas para identificar los elementos de riesgo y comprobar que los informes sean precisos"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es necesario para aplicar un enfoque de pruebas de caja blanca?",
            options: [
                "Requisitos detallados",
                "Modelos de uso",
                "Acceso a la estructura interna del objeto de prueba",
                "Una evaluación de riesgos completa para apoyar la priorización de riesgos"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu equipo ha sido asignado para probar un programa de tarjetas de lealtad para una cadena de supermercados. Dado que este es un mercado altamente competitivo, se ha realizado una inversión significativa para determinar las deficiencias de los productos ofrecidos por los competidores. Se han identificado varias características como de alto impacto en la experiencia del usuario y el equipo del proyecto quiere priorizar las pruebas de estas características para asegurar que no haya fallos. El tiempo de prueba es bastante limitado, por lo que quieres asegurarte de usar el tiempo de manera eficiente.\n\nDada solo esta información, ¿qué enfoque de prueba sería el más apropiado?",
            options: [
                "Basado en modelos",
                "Basado en la experiencia",
                "Basado en riesgos",
                "Basado en requisitos"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu equipo ha sido asignado para probar un nuevo producto que procesa análisis de sangre y señala cualquier anomalía. Este software debe ser aprobado por la FDA antes de su lanzamiento a producción.\n\nDada esta información, ¿qué enfoque de prueba es el más apropiado?",
            options: [
                "Basado en riesgos",
                "Basado en riesgos más regulatorio",
                "Basado en modelos",
                "Basado en modelos más basado en la experiencia"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Una vez más, tu equipo ha lanzado un producto a producción que tiene una seguridad inadecuada. Solo los administradores del sistema deberían tener acceso a algunas funcionalidades, pero de hecho, todos pueden acceder a todo. Has establecido el siguiente objetivo para la próxima versión:\n\"Todos los derechos de acceso serán probados contra la funcionalidad permitida, de acuerdo con la matriz de acceso.\"\n\n¿Cuál de los siguientes es probablemente un problema con este objetivo definido como 'SMART'?",
            options: [
                "No está claro si esto es alcanzable en el tiempo permitido",
                "No es específico sobre lo que se necesita hacer",
                "No es relevante para los objetivos del proyecto",
                "No es medible en relación con los objetivos del proyecto"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Has decidido que tu equipo debe implementar mejores prácticas de calidad. Les has dicho que cada caso de prueba tendrá un estado de 'no revisado' hasta que haya sido revisado por pares y aprobado por al menos otro tester. Cuando la revisión esté completa, el estado se actualizará a 'revisado' y el caso de prueba podrá ser ejecutado. Tu equipo no está contento con esta regla y siente que están siendo castigados por un problema que no existe: en este caso, casos de prueba de baja calidad.\n\nSegún los objetivos SMART, según tu equipo, ¿qué falta en este objetivo que has establecido?",
            options: [
                "No es específico",
                "No es medible",
                "No es alcanzable",
                "No es relevante"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál es el propósito del modelo IDEAL?",
            options: [
                "Asegurar que los objetivos sean claros y alcanzables",
                "Apoyar iniciativas de mejora de procesos",
                "Clasificar y mitigar riesgos en las pruebas",
                "Proporcionar un estándar de evaluación de habilidades"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes es una característica de un modelo de mejora de procesos de prueba basado en análisis?",
            options: [
                "Se basa en la comparación con las mejores prácticas externas",
                "Define las mejores prácticas",
                "Utiliza solo datos cuantitativos",
                "Depende del análisis de datos"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu proyecto ha estado realizando retrospectivas durante los últimos dos meses. Cada reunión resulta en una lista de mejoras a realizar, pero al menos el 80% de las mejoras son las mismas de reunión a reunión. ¿Qué paso en el proceso falta?",
            options: [
                "Recopilar datos",
                "Identificar mejoras",
                "Determinar causas",
                "Decidir sobre acciones de mejora"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Te has estado preparando para asistir a una reunión de retrospectiva. Uno de los problemas que deseas plantear es que los desarrolladores están rechazando los informes de defectos diciendo que no hay suficiente información, a pesar de que la información se proporciona. ¿Qué datos podrías llevar a la reunión para respaldar tus preocupaciones?",
            options: [
                "El número de veces que un defecto es rechazado por los desarrolladores",
                "El número de defectos rechazados por los desarrolladores por falta de información",
                "El número de defectos cerrados por los testers",
                "El número de defectos que son corregidos por los desarrolladores"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Qué tipo de herramienta suele ser la menos costosa?",
            options: [
                "COTS (Commercial Off-The-Shelf)",
                "Código abierto",
                "Personalizada o desarrollada internamente",
                "Gestión de proyectos"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu gerente ha decidido que tu equipo de testers manuales debe convertirse en ingenieros de automatización de pruebas. Tu equipo es mucho más fuerte en análisis que en pruebas técnicas, por lo que te preocupa su capacidad para adaptarse. Al evaluar proveedores de herramientas, ¿Cuál de las siguientes opciones sería útil en esta situación?",
            options: [
                "Bajos costos de licencia",
                "Almacenamiento remoto de los scripts de automatización de pruebas",
                "Capacitación y soporte en línea gratuitos",
                "Herramientas que son basadas en Java"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tu equipo ha sido asignado para probar una aplicación móvil. La aplicación ha sido desarrollada por un proveedor que está realizando cambios continuamente. Hay una alta incidencia de regresiones. Tu equipo no tiene el tiempo ni la experiencia para implementar la automatización de pruebas, pero todos están de acuerdo en que es necesaria. Como resultado, has decidido que una organización de pruebas externa implemente la automatización de pruebas utilizando la herramienta que has seleccionado. Están en camino de completar la automatización dentro del presupuesto.\n\n¿Cuál debería ser tu principal preocupación ahora?",
            options: [
                "¿Quién mantendrá/actualizará el código de automatización?",
                "¿Se sentirán insultados tus testers ahora que hay automatización disponible?",
                "Con ciclos más rápidos para las pruebas de regresión, ¿habrá un impulso para eliminar los roles de pruebas manuales?",
                "¿Qué sucede si las pruebas automatizadas encuentran problemas que las pruebas manuales han pasado por alto?"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cómo puede ayudar la información de cobertura de código a las pruebas?",
            options: [
                "Indica las áreas importantes para probar",
                "Indica los segmentos de código más utilizados",
                "Indica qué partes del código aún necesitan ser probadas",
                "Indica cuántos defectos se han encontrado por línea de código"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Qué grupo de métricas se utiliza para medir el logro de los objetivos de prueba?",
            options: [
                "Métricas de planificación de pruebas",
                "Métricas de monitoreo de pruebas",
                "Métricas de control de pruebas",
                "Métricas de finalización de pruebas"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás a mitad de camino en la prueba de un proyecto y quieres saber si estás en el cronograma. ¿Cuál de las siguientes métricas puede ayudarte a determinar si tu progreso es adecuado?",
            options: [
                "Número de requisitos probados vs aún no probados",
                "Número de casos de prueba ejecutados vs no ejecutados",
                "Número de defectos encontrados vs los que se esperaba encontrar",
                "Número de dólares del presupuesto utilizados"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál es un problema de tener una métrica objetivo del 95% para casos de prueba aprobados para elementos de alto riesgo?",
            options: [
                "Es muy difícil de calcular con precisión",
                "No sabes si el 5% no probado podría ser crítico",
                "No considera el número total de fallos para todos los casos de prueba",
                "Los defectos pendientes no se incluyen en el cálculo"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Has estado rastreando algunas métricas de costo de calidad y estás viendo que los defectos se están introduciendo consistentemente en dos o tres niveles de prueba antes de ser encontrados. Por ejemplo, encontraste que el 40% de los defectos se introdujeron en el desarrollo, pero no se detectaron hasta las pruebas del sistema.\n\nIdealmente, si un defecto se introduce durante la codificación, ¿dónde debería ser encontrado?",
            options: [
                "En las revisiones de requisitos",
                "En las pruebas unitarias",
                "En las pruebas de integración",
                "En las pruebas del sistema"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Al hacer estimaciones de pruebas, ¿cuál de los siguientes es el recurso más necesario?",
            options: [
                "Entornos de prueba",
                "Datos de prueba",
                "Testers",
                "Resultados de pruebas"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás trabajando en un proyecto ágil y planeas usar una técnica basada en expertos para realizar la estimación de un conjunto de sprints. ¿Qué técnica te permite utilizar la experiencia del equipo para crear la estimación?",
            options: [
                "Gráfico de burndown",
                "Estimación de tres puntos",
                "Planning poker",
                "Estimación basada en ratios"
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Te han pedido que estimes un proyecto. Sabes que tu equipo normalmente hace 10 casos de prueba para un ítem de prueba de alto riesgo, 5 para un riesgo medio y 1 para un riesgo bajo. También sabes que a tu equipo, en promedio, le toma 1 hora crear un caso de prueba y 2 horas ejecutarlo (eso incluye el tiempo necesario para configurar las precondiciones). Has estimado que se encontrarán 530 defectos y, en promedio, sabes que tu equipo pasa 5 horas por defecto (encontrarlo, reproducirlo, documentarlo, volver a probar la solución). Sabes cuántos ítems de riesgo hay y conoces su clasificación.\n\nDada toda esta información, ¿qué método de estimación deberías usar?",
            options: [
                "Estimación basada en ratios",
                "Gráficos de burndown",
                "Wideband Delphi",
                "Estimación de tres puntos"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Has notado una tendencia preocupante en la que los defectos que no pueden ser corregidos con una versión están siendo cerrados. Esto significa que no se están revisando para futuras correcciones cuando se revisan los defectos abiertos. ¿Qué tipo de estado deberías usar, que te permita rastrear estos defectos de manera efectiva hasta que sean corregidos o se tome la decisión de nunca corregirlos?",
            options: [
                "Diferido",
                "Abierto",
                "Reabrir",
                "Rechazado"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tienes problemas con los desarrolladores que rechazan informes de defectos cuando tienen una pregunta sobre los pasos que se tomaron para que ocurriera la falla. Esto está resultando en frustración por parte de los testers y una cantidad significativa de re-aperturas de informes de defectos rechazados. ¿Qué ayudaría a aclarar el proceso y aliviar parte de la frustración?",
            options: [
                "No permitir que los desarrolladores rechacen informes de defectos",
                "Agregar un estado 'Información Necesaria' que pueda ser utilizado por los desarrolladores cuando tengan preguntas",
                "Agregar un estado 'Bloqueado' que pueda ser utilizado por los desarrolladores cuando tengan preguntas",
                "Implementar un paso de revisión para cada informe de defecto que debe seguirse antes de que se cree"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Por qué debería incluirse la gestión de proyectos en el comité de gestión de defectos?",
            options: [
                "Normalmente gestionan el cronograma y el presupuesto, y las correcciones de defectos pueden tener un impacto en el presupuesto y el cronograma.",
                "Son responsables del proceso de defectos y pueden controlar el flujo de defectos en el proceso.",
                "Son responsables de la calidad.",
                "Conocen el número de defectos que se permiten para un proyecto y pueden cortar el flujo según sea necesario."
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuándo se convierte un informe de defecto en un ítem de backlog en un proyecto ágil?",
            options: [
                "Cuando no puede ser corregido en el sprint actual.",
                "Cuando el desarrollador no quiere corregirlo.",
                "Cuando el defecto no puede ser corregido.",
                "Cuando el defecto fue escrito por error."
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál es la contribución del propietario del producto en las reuniones de gestión de defectos?",
            options: [
                "Aclarar la prioridad de la corrección desde la perspectiva del usuario.",
                "Establecer el cronograma para la corrección.",
                "Discutir opciones de solución técnica.",
                "Determinar la causa raíz."
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuándo se necesita el historial de cambios al considerar una gestión de defectos eficiente?",
            options: [
                "Se puede usar para determinar el tiempo entre cambios de estado, como de abierto a cerrado.",
                "Se puede usar para determinar cuántos defectos están abiertos para un área dada del software.",
                "Se puede usar para determinar qué tan rápido están convergiendo las tendencias de abiertos y cerrados.",
                "Se puede usar para determinar qué áreas no funcionales requieren pruebas adicionales."
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás revisando una base de datos de defectos y has encontrado una tendencia preocupante en los datos. A pesar de que hay muchas listas desplegables para que el tester las use al escribir el informe de defectos, los testers simplemente están tomando los valores predeterminados. Esto resulta en que todos los defectos se reporten como errores de lógica (el primer ítem en la lista de causas raíz) y encontrados durante las pruebas unitarias (el primer ítem en la lista de niveles de prueba) y están en el componente de datos (el primer ítem en la lista de componentes). ¿Qué deberías hacer al respecto para asegurar que los datos sean más precisos?",
            options: [
                "Eliminar los campos de la herramienta de gestión de defectos.",
                "Rellenar automáticamente los datos según las preferencias establecidas por el usuario.",
                "Revisar el número y tipo de campos requeridos al crear un defecto y eliminar aquellos que no son específicamente necesarios.",
                "Eliminar todas las listas desplegables y permitir que se ingrese texto libre por parte del creador del informe de defectos."
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes estadísticas de defectos proporcionará información que se utilizará para reducir el costo de calidad?",
            options: [
                "Número de informes de defectos reabiertos.",
                "Número de defectos en un área particular del código.",
                "Número de informes de defectos rechazados por los desarrolladores.",
                "Número de defectos encontrados en una fase posterior a la que fueron introducidos."
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Tienes un problema continuo con uno de los miembros de tu equipo. A él realmente le gusta hablar y no toma las pistas de que los demás están cansados de escuchar y necesitan volver al trabajo. Dada esta información, ¿En qué área de competencia necesita mejorar esta persona?",
            options: [
                "Competencia profesional.",
                "Competencia metódica.",
                "Competencia social.",
                "Competencia personal."
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás llevando a cabo un gran esfuerzo de UAT con aproximadamente 20 expertos en la materia (SMEs) del negocio. Tu equipo trabajará estrechamente con estas personas para entender qué necesita ser probado, documentar las pruebas en el sistema de gestión de pruebas, registrar cualquier defecto encontrado y capacitar a los usuarios en las pruebas.\n\nDada esta información, ¿cuáles son las tres áreas de competencia más importantes que debe poseer tu equipo?",
            options: [
                "Profesional, metódica, social",
                "Social, personal, metódica",
                "Personal, profesional, metódica",
                "Social, personal, profesional"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Estás gestionando un equipo técnico de testers de software. Has notado que algunos de ellos están dispuestos a aprender cualquier nueva herramienta o tecnología, mientras que otros son mucho menos propensos a dar un paso adelante para construir su conocimiento y habilidades. ¿Qué es lo que probablemente falta en aquellos que no quieren aprender?",
            options: [
                "Competencia profesional",
                "Competencia metódica",
                "Competencia social",
                "Competencia personal"
            ],
            correctAnswer: 3, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Quieres evaluar la competencia social de tu equipo. ¿Cuál de las siguientes sería la mejor actividad para proporcionarte la información que necesitas?",
            options: [
                "Desarrollar una tabla de transición de estado a partir de un conjunto de requisitos proporcionados.",
                "Hornear un pastel y compartirlo con el equipo.",
                "Construir un puente de fósforos trabajando en equipo.",
                "Escribir una breve introducción sobre sí mismos y leerla al equipo."
            ],
            correctAnswer: 2, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "El autoestudio se utiliza mejor para desarrollar ¿qué competencia?",
            options: [
                "Social",
                "Profesional",
                "Personal",
                "Biológica"
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es un factor de higiene para los equipos de prueba?",
            options: [
                "Baños regulares.",
                "Buenas condiciones de trabajo.",
                "Reconocimiento por el trabajo realizado.",
                "Autonomía en la finalización de tareas."
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es un ejemplo de un costo de falla externa?",
            options: [
                "Daño al medio ambiente.",
                "Contratar a contratistas para ayudar con la ejecución de pruebas.",
                "Redefinir el flujo de código en el entorno de prueba para reducir falsos positivos.",
                "Corregir defectos encontrados durante las pruebas."
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: ""
        },
        {
            "question": "Has reunido los siguientes números de costo de calidad. Se encontraron 1000 defectos antes del lanzamiento y 100 después. Dada esta información, ¿cuál es el costo total de calidad para este proyecto?",
            options: [
                "$1,000,000",
                "$500,000",
                "$300,000",
                "$0"
            ],
            correctAnswer: 0, // Ajusta según la respuesta correcta
            urlImage: "./imagenes/tabla preg49.png"
        },
        {
            "question": "Has reunido los siguientes números de costo de calidad. Se encontraron 1000 defectos antes del lanzamiento y 100 después. Dada esta información, ¿qué deberías concluir?",
            options: [
                "Las pruebas fueron altamente efectivas y el costo está completamente justificado por el bajo número de fallas externas de alto costo.",
                "Se necesitó más esfuerzo en las pruebas para reducir aún más el número de fallas externas.",
                "Menos pruebas serán aceptables para el próximo lanzamiento dado que solo el 1% de los defectos escaparon.",
                "Se necesitan más lanzamientos para que las correcciones puedan ser rápidamente liberadas a producción para resolver los 10 defectos."
            ],
            correctAnswer: 1, // Ajusta según la respuesta correcta
            urlImage: "./imagenes/tabla preg50.png"
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
        "nameQuiz": "Test Management-Advance Example 1"
  }
}
window.data_es = data_es;