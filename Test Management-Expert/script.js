// Test Management-Expert 

const questions = [
    {
        question: "Escenario 1 – Evaluación y Reporte del Proyecto de Pruebas\nAsume que acabas de ser promovido a Gerente de Pruebas Senior, responsable de probar el proyecto más estratégico de tu empresa, un Grabador de Video Personal (PVR) capaz de grabar y reproducir TV en 3D. El modelo de desarrollo para este proyecto es el modelo V. El proyecto está programado para lanzarse en seis meses, y diferentes niveles de pruebas ya se están realizando en paralelo. Hay seis equipos de pruebas asignados para probar diferentes partes de este proyecto. Cuatro equipos están dedicados a probar diferentes componentes del PVR y realizar pruebas de integración entre componentes. Los gerentes de estos equipos te reportan como parte de una organización de gestión matricial. Para los otros dos equipos, un equipo es responsable de las pruebas del sistema y el otro equipo es responsable de las pruebas de aceptación del usuario. Los gerentes de estos dos equipos te reportan directamente. La alta dirección celebra una reunión semanal de estrategia y se espera que prepares una actualización de 15 minutos sobre el estado de las pruebas de este proyecto. Se te ha dado seis semanas para prepararte para la primera actualización.\nDurante tu primer día en el trabajo, te reúnes con los seis Gerentes de Pruebas. Inmediatamente notas que no hay un reporte estandarizado de los equipos de pruebas. Cada equipo está utilizando un conjunto diferente de métricas para determinar la calidad y los criterios de salida para su parte del proyecto y para analizar la eficiencia y efectividad de su proceso de prueba. A continuación, te reúnes con los gerentes de los cuatro grupos de desarrollo de componentes, el Gerente de Proyecto y el Vicepresidente de Investigación y Desarrollo, para entender qué información necesitan de los equipos de pruebas para tomar las decisiones correctas sobre el proyecto. Al final de la primera semana, te das cuenta de que necesitas definir un conjunto de métricas útiles que se utilizarán a lo largo del proyecto de pruebas, crear informes de pruebas que serán utilizados por los equipos de pruebas y crear un informe de pruebas de alto nivel y un panel de control para reportar a la gestión del proyecto y a la alta dirección.",
        options: [
            "Una tendencia del porcentaje de requisitos de componentes para los cuales se han creado casos de prueba.",
            "El número de defectos de requisitos de usuario actualmente no resueltos.",
            "Un gráfico del número de defectos encontrados por cada miembro del equipo de pruebas de componentes.",
            "Una tendencia de la relación entre defectos abiertos y cerrados, por componente.",
            "La relación entre el número de defectos encontrados durante las pruebas de componentes y aquellos que escaparon de las pruebas de componentes y fueron encontrados por las pruebas del sistema.",
            "Una tendencia del porcentaje de casos de prueba de integración que han pasado.",
            "Una tendencia de las pruebas de extremo a extremo que han pasado."
        ],
        correctAnswer: [0, 3, 5], // Selecciona tres opciones
        urlImage: ""
    },
    {
        question: "Escenario 1: Evaluación y Reporte del Proyecto de Pruebas proporciona el contexto para esta pregunta. Tu próxima tarea como Gerente de Pruebas es decidir qué métricas e indicadores deben ser medidos y analizados. Considera los siguientes indicadores:\n\n i. La tasa semanal a la que se están escribiendo los casos de prueba reales versus los planificados.\n ii. La cantidad de tiempo por día que los laboratorios de pruebas están inoperables cuando se requieren para las pruebas.\n iii. Resumen de riesgos no mitigados.\n iv. Informe diario de los defectos reabiertos.\n v. Tasa semanal de descubrimiento de defectos.\n vi. Informe diario del número de defectos críticos recién abiertos.\n\n Se deben utilizar los indicadores i, ii y v. ¿Cuál de las siguientes afirmaciones define correctamente los indicadores que deben ser medidos y analizados para el reporte interno de pruebas (es decir, reporte dentro de la organización de pruebas)?",
        options: [
            "Se deben utilizar los indicadores i, ii, iii y v.",
            "Todos estos indicadores deben ser utilizados.",
            "Se deben utilizar los indicadores i, ii, iv, v y vi."
        ],
        correctAnswer: 0,
        urlImage: ""
    },
     {
        question: "Escenario 1: Evaluación y Reporte del Proyecto de Pruebas proporciona el contexto para esta pregunta. Los equipos de desarrollo están considerando pasar a un proceso de desarrollo ágil. Considera lo siguiente:\n\n - Porcentaje de compilaciones que fallaron.\n - La tasa semanal a la que se están escribiendo los casos de prueba de regresión automatizados reales versus los planificados.\n - Número promedio de iteraciones ejecutadas hasta que los casos de prueba automatizados quedan obsoletos.\n - Tendencia del número de cambios en los requisitos.\n - Tendencia del tiempo transcurrido entre la detección y el cierre de defectos.\n - Tendencia del número de defectos abiertos.\n - Número de defectos encontrados durante el desarrollo.\n\n ¿Cuál de las siguientes afirmaciones resume mejor las métricas de reporte y control de pruebas que serán requeridas si los equipos pasan a un proceso ágil?",
        options: [
            "Se requerirán las métricas i, ii, iii, v y vi.",
            "Se requerirán todas estas métricas.",
            "Se requerirán las métricas ii, iii, iv, v y vi.",
            "Se requerirán las métricas i, iii, v, vi y vii."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Considera las siguientes opciones:\n\n i. El ciclo de Shewhart permite al Gerente de Pruebas implementar mejoras en todo el proceso de pruebas en un solo esfuerzo.\n ii. Usar el ciclo PDCA (planificar-hacer-verificar-actuar) permite al Gerente de Pruebas verificar si un cambio en el proceso mejora el proceso de pruebas antes de implementar el cambio en todo el proceso.\n iii. Los diagramas de espina de pescado ayudan al Gerente de Pruebas a determinar las causas raíz de un problema añadiendo causas cada vez más detalladas y luego mejorando el proceso trabajando en resolver las causas.\n iv. Los gráficos de Shewhart se utilizan para mostrar si un proceso está bajo control o no, buscando variaciones inusuales de indicadores (por ejemplo, una semana con un número inusualmente alto de nuevos defectos).\n v. Los diagramas de dispersión se utilizan para analizar las causas raíz trazando un gráfico de causas y efectos.\n\n ¿Cuál de las siguientes afirmaciones identifica correctamente las técnicas básicas de control de calidad que un Gerente de Pruebas debe entender y ser capaz de implementar para mejorar el proceso de pruebas?",
        options: [
            "Las opciones i, iii y iv son correctas.",
            "Las opciones ii, iii y iv son correctas.",
            "Todas las opciones son correctas.",
            "Las opciones ii, iv y v son correctas."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Refiérete al Escenario 1: Evaluación y Reporte del Proyecto de Pruebas anterior.\n\n 1. Dada la información en este escenario, describe un panel de estado de pruebas que proporcione información relevante a los gerentes de los equipos de pruebas y que ofrezca un estado de pruebas a lo largo de todo el proyecto de pruebas.\n\n 2. Dada la información en este escenario, diseña un panel de proyecto que proporcione información relevante a los siguientes interesados:\n a. Gerente de proyecto\n b. Gerente de desarrollo\n c. Vicepresidente de Investigación y Desarrollo (VP I+D)\n\n Tu respuesta debe demostrar una comprensión de las diferentes necesidades de información, nivel de detalle y medios de presentación para cada uno de los interesados.",
        options: [
          "A"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "¿Cuál de las siguientes es una característica normalmente asociada con proyectos ágiles?",
        options: [
            "Los testers están integrados en el proyecto desde la iniciación del proyecto.",
            "Las especificaciones de desarrollo correspondientes a la funcionalidad entregada son tan completas (es decir, no se agregarán más tarde) como lo serían en el modelo V.",
            "Los testers se enfocan principalmente en pruebas de integración.",
            "Cuando el cronograma se comprime, las pruebas planificadas para iteraciones posteriores se reducirán o eliminarán."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Acabas de asistir a un taller de evaluación de riesgos. Se han identificado los siguientes riesgos del proyecto:\n\n - El equipo de desarrollo utilizará un conjunto de bibliotecas desarrolladas por un tercero. Esa biblioteca puede no estar lista a tiempo, lo que puede resultar en un retraso en el inicio de la codificación.\n - El equipo de gestión de configuración ha decidido implementar un nuevo conjunto de herramientas.\n - En el pasado, los clientes beta han sido reacios a firmar el acuerdo de privacidad de datos. El equipo está preocupado de que el nuevo acuerdo de privacidad pueda ser aún más difícil de aceptar para los clientes.\n - Un producto que debe integrarse con este producto se planeó inicialmente para estar listo durante el desarrollo del código. Se ha retrasado desde allí hasta el nivel de integración y ahora se ha retrasado hasta el marco de tiempo de prueba del sistema.\n - No hay suficientes recursos de prueba capacitados disponibles para este proyecto.\n - Se ha declarado unas `vacaciones` forzadas que resultarán en que todo el personal de pruebas se tome dos semanas que no estaban planificadas en el cronograma.\n\n Con respecto a estos elementos de riesgo, ¿cuál de las siguientes acciones debería tomar el Gerente de Pruebas?",
        options: [
            "Ajustar las estimaciones de prueba existentes para i. Todos los demás deben ser monitoreados por la gestión del proyecto.",
            "Establecer disparadores para i, iii, iv, v. Iniciar medidas de control para vi. Monitorear ii.",
            "Monitorear i, ii, iii. Establecer una fecha de disparo para iv. Iniciar medidas de control para v.",
            "Ajustar las estimaciones de prueba existentes para vi.",
            "Ignorar i y ii ya que son problemas del equipo de desarrollo. Ajustar las estimaciones de prueba existentes para iv, v, vi. Transferir iii al equipo de negocios."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "¿Cuál de las siguientes afirmaciones es verdadera con respecto al rol del Gerente de Pruebas en la gestión de cambios? (elige dos)",
        options: [
            "El Gerente de Pruebas debe estar involucrado en el análisis de impacto incluso cuando se espera que el cambio propuesto no afecte el cronograma.",
            "El Gerente de Pruebas debe requerir documentación para cualquier cambio propuesto en un proyecto ágil.",
            "El Gerente de Pruebas no debe asistir a las sesiones de análisis de impacto, ya que tiende a desanimar a otros a hablar y participar.",
            "El rol del Gerente de Pruebas en la gestión de cambios no se limita a los aspectos de prueba del proyecto.",
            "El Gerente de Pruebas es responsable del proceso de gestión de cambios."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Se te ha pedido que crees una presentación sobre el rol de la gestión de calidad en tu organización. ¿Cuál de los siguientes puntos deberías incluir en tu presentación para asegurar que la audiencia entienda el alcance y la importancia de la gestión de calidad? (elige tres)",
        options: [
            "La gestión de calidad requiere que las actividades de aseguramiento de calidad del software estén integradas en el ciclo de vida del proyecto.",
            "El aseguramiento de calidad y las pruebas no deben fusionarse en un solo equipo para que el enfoque del aseguramiento de calidad no se confunda con los aspectos de programación de las pruebas.",
            "Las prácticas de gestión de calidad deben ser evaluadas por un equipo de auditoría externo para asegurar el cumplimiento.",
            "La documentación de pruebas unitarias es un entregable que forma parte de la gestión de calidad.",
            "La gestión de calidad excluye actividades para entregar proyectos dentro del presupuesto.",
            "El plan de pruebas es la base para formar políticas de calidad para una organización.",
            "El seguimiento de métricas es un aspecto importante de la gestión de calidad."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Escenario 2\nEres un Gerente de Pruebas que acaba de aceptar una nueva asignación para gestionar un proyecto de pruebas para el software que controla un nuevo sistema de frenos para automóviles. El nuevo sistema de frenos hace que las luces traseras del automóvil parpadeen automáticamente cuando se presionan los frenos de manera repentina y firme. El equipo de pruebas comenzó a recibir código hace dos meses. El proyecto está programado para ser lanzado a producción en tres meses más. Has determinado que ya se han tomado las siguientes decisiones respecto a este proyecto:\n\n 1. La estimación de pruebas se basó en proyectos históricos de tamaño similar con el mismo grupo de desarrolladores y testers utilizando una metodología en V.\n 2. El equipo de desarrollo afirma estar utilizando una metodología ágil para este proyecto.\n 3. Se esperaba que el conteo estimado de defectos en este punto del proyecto fuera de 500. Actualmente es de 1000.\n 4. El equipo de pruebas está frustrado con la calidad del código. En cada iteración de dos semanas están recibiendo nuevo código y correcciones de defectos, pero un tercio de las correcciones de defectos están rompiendo algo más.\n 5. No hay información del equipo de desarrollo al equipo de pruebas sobre qué nuevas características están incluidas en cada iteración.\n\n El anterior Gerente de Pruebas fue despedido debido a este proyecto. Se te ha encomendado la tarea de poner el proyecto de nuevo en marcha y proporcionar un nuevo cronograma alcanzable.",
        options: [
            "A"
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Dada la información en el Escenario 2, proporciona lo siguiente:\n\n 1. Se te ha pedido que proporciones un informe de estado del proyecto al equipo de gestión, incluyendo una explicación de por qué los conteos de defectos esperados y reales no coinciden. Necesitarás explicar por qué la estimación fue incorrecta y qué es lo que probablemente ocurrirá con el conteo de defectos a medida que el proyecto avance.\n\n 2. ¿Qué debería hacer el Gerente de Pruebas para abordar el problema de las características inesperadas y el problema con las regresiones?\n\n 3. Dada esta información, ¿qué presentarás a tu gestión como tu plan para poner este proyecto de nuevo en marcha?",
        options: [
            "A"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "¿Cuál de las siguientes es una métrica de eficiencia para el proceso de pruebas?",
        options: [
            "El número promedio de días desde el descubrimiento y reporte de un defecto hasta la resolución final del reporte de defecto.",
            "El número de defectos detectados por las pruebas dividido por la suma del número de defectos detectados por las pruebas y el número de defectos detectados posteriormente por los usuarios.",
            "Las horas-persona de esfuerzo en el diseño e implementación de pruebas dividido por el número de elementos de la base de pruebas cubiertos por los casos de prueba producidos.",
            "La cantidad total de esfuerzo gastado en un proyecto, incluyendo todas las actividades en el proceso fundamental de pruebas."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Estás trabajando como Director de Pruebas para una empresa que vende aplicaciones para teléfonos inteligentes para el mercado de consumo masivo. El CEO ha establecido los siguientes objetivos relacionados con la calidad para la organización:\n\n 1. Minimizar el número de quejas de los clientes sobre las aplicaciones, especialmente en redes sociales como Twitter, Facebook, Google+, etc.\n 2. Entregar nuevas aplicaciones y características para esas aplicaciones a los clientes lo más rápido posible, manteniendo al mismo tiempo el más alto nivel de satisfacción del cliente.\n\n Estás definiendo la misión del equipo de pruebas para la organización. Selecciona dos de las opciones que pertenecen al documento de política de pruebas como parte de la misión de las pruebas.",
        options: [
            "Detectar defectos que resultarían en insatisfacción del cliente.",
            "Trabajar con marketing y gestión de proyectos para planificar ciclos de ejecución de pruebas que minimicen el riesgo de calidad dentro de las limitaciones del cronograma.",
            "Asegurar que el 100% de los requisitos establecidos funcionen correctamente, sin fallos.",
            "Diseñar pruebas utilizando técnicas sofisticadas para pruebas de compatibilidad, incluyendo pruebas por pares.",
            "Asegurar una efectividad del 100% en la detección de defectos para todos los lanzamientos de aplicaciones y características.",
            "Eliminar todos los defectos que afectarían la satisfacción del cliente.",
            "Proporcionar a los equipos de desarrollo retroalimentación sobre la calidad de los productos de trabajo de los desarrolladores individuales."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Asume que estás trabajando como Gerente de Pruebas en un nuevo proyecto de desarrollo de productos para una empresa emergente. No se producirán requisitos escritos ni especificaciones de diseño, pero tienes acceso a los principales interesados del producto y del proyecto, incluidos algunos adoptantes tempranos que se han comprometido a comprar el producto cuando esté completo. Asume que la funcionalidad, la fiabilidad, el rendimiento y la seguridad son atributos de calidad clave para este producto. El proyecto sigue un modelo de ciclo de vida ágil, que ha sido adaptado para sus propios propósitos.\n\n Considera las siguientes estrategias de prueba:\n i. Pruebas basadas en riesgos\n ii. Pruebas basadas en requisitos\n iii. Pruebas reactivas\n iv. Pruebas basadas en modelos\n v. Pruebas basadas en procesos\n vi. Automatización de pruebas de regresión funcional\n\n ¿Cuál de las siguientes afirmaciones resume mejor qué estrategias de prueba se pueden utilizar para este proyecto?",
        options: [
            "Las estrategias i, iii, iv, v y vi se pueden utilizar.",
            "Todas estas estrategias se pueden utilizar.",
            "Las estrategias i, iv y vi se pueden utilizar.",
            "Las estrategias i, v y vi se pueden utilizar."
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Escenario 3\nAsume que estás trabajando como Director de Pruebas, a cargo del Grupo de Pruebas Empresariales. El Grupo de Pruebas Empresariales consta de cuatro equipos de pruebas. Cuatro Gerentes de Pruebas te reportan y cada Gerente de Pruebas lidera un equipo de pruebas. Para tres de los equipos de pruebas, cada equipo está dedicado a probar un solo producto. Estos tres equipos de pruebas son responsables del nivel de prueba del sistema y, si es aplicable, del nivel de prueba de integración del sistema. Los desarrolladores son responsables de las pruebas unitarias y de las pruebas de integración de componentes. Los analistas de negocio son responsables de las pruebas de aceptación. El marketing es responsable de las pruebas beta.\n\n El cuarto equipo de pruebas se especializa en proporcionar marcos de automatización de pruebas (por ejemplo, arneses de prueba basados en palabras clave) para los otros tres equipos de pruebas, especialmente pruebas de regresión funcional automatizadas.\n\n Considera el siguiente extracto de la política de pruebas de la empresa:\n El Grupo de Pruebas Empresariales tiene los siguientes objetivos:\n 1. Detectar defectos, especialmente defectos que afectarían la satisfacción del cliente.\n 2. Reducir los riesgos para la calidad del producto a un nivel aceptable antes del lanzamiento.\n 3. Generar confianza en que nuestros productos funcionan correctamente y satisfacen a nuestros clientes.\n 4. Proporcionar información sobre la calidad del producto y el proceso de software para que podamos tomar decisiones inteligentes sobre el lanzamiento del producto y la mejora del proceso.\n\n El Grupo de Pruebas Empresariales medirá la efectividad y eficiencia con la que logra estos objetivos, trabajará con la alta dirección para establecer metas de efectividad y eficiencia, y recibirá bonificaciones anuales basadas en el cumplimiento o superación de esas metas.\n\n Asume que uno de los equipos de pruebas está trabajando en un nuevo lanzamiento importante para su producto. Su producto es un dispositivo médico implantado que monitorea la salud del paciente a través de pruebas de sangre, monitoreo de presión arterial y monitoreo de temperatura. Las nuevas características incluyen el monitoreo de los niveles de azúcar en sangre y la función renal para pacientes diabéticos. El proyecto sigue un ciclo de vida en V. El tiempo planificado desde la concepción del proyecto hasta el lanzamiento es de seis meses.",
        options: [
            "A"
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Considera las siguientes métricas:\n\n - El porcentaje de casos de prueba para un producto dado que han sido automatizados.\n - El porcentaje de esfuerzo de prueba ahorrado para un producto dado debido a la automatización de pruebas.\n - El porcentaje de defectos detectados por un equipo de pruebas de producto durante las pruebas del sistema.\n - El número de personas que trabajan en el equipo de automatización de pruebas.\n - El total de años de experiencia de todas las personas que trabajan en el equipo de automatización de pruebas.\n - El costo promedio para desarrollar, ejecutar y mantener cada caso de prueba automatizado.\n\n Recuerda que buenas métricas se alinean con objetivos específicos y motivan el comportamiento correcto de las personas involucradas en el proceso que se está midiendo. ¿Cuál de las siguientes afirmaciones es verdadera?",
        options: [
            "Las métricas ii y iv son buenas métricas para mostrar la eficiencia con la que el equipo de automatización de pruebas ayuda al Grupo de Pruebas Empresariales a reducir riesgos.",
            "Las métricas iv y v son buenas métricas de la efectividad del equipo de automatización de pruebas dentro del Grupo de Pruebas Empresariales.",
            "La métrica iii es una buena métrica para la efectividad del equipo de automatización de pruebas en la producción de arneses de prueba que detectan defectos.",
            "La métrica i es una buena métrica para la capacidad del equipo de automatización de pruebas para proporcionar información útil a los interesados del Grupo de Pruebas Empresariales."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Refiérete al escenario definido anteriormente.\nComo Director de Pruebas, estás revisando una estrategia de prueba revisada propuesta por el Gerente de Pruebas para el producto del dispositivo médico implantado. El Gerente de Pruebas está proponiendo una estrategia de pruebas combinada que consiste en los siguientes elementos:\n - Pruebas basadas en riesgos\n - Pruebas basadas en requisitos\n - Pruebas de regresión y fiabilidad automatizadas\n - Pruebas reactivas\n\n Esta pregunta consta de dos partes: Primero, describe la relación entre cada elemento de la estrategia y los objetivos previamente definidos para el Grupo de Pruebas Empresariales. Segundo, evalúa la idoneidad para el proyecto, sugiriendo cualquier elemento estratégico adicional necesario para lograr buenos resultados a largo plazo.\n\n Un mes después del lanzamiento del dispositivo médico mencionado en el escenario anterior, el Gerente de Pruebas organizó una retrospectiva del proyecto. El Gerente de Pruebas, el Director de Pruebas y seis interesados del proyecto y del producto participaron en la retrospectiva. En esta retrospectiva, se revisaron los siguientes datos, hallazgos y conclusiones:\n - Las pruebas del sistema localizaron 129 defectos, con 8 defectos identificados posteriormente en pruebas de aceptación, pruebas beta y post-lanzamiento. Por lo tanto, la efectividad de detección de defectos fue del 94%.\n - Las pruebas del sistema localizaron 45 defectos de alta prioridad (es decir, aquellos que afectarían la satisfacción del cliente), con 1 defecto de alta prioridad identificado posteriormente en pruebas de aceptación y 0 defectos de alta prioridad identificados en pruebas beta y post-lanzamiento. Por lo tanto, la efectividad de detección de defectos para defectos con un impacto significativo en la satisfacción del cliente fue del 98%.\n - El defecto de alta prioridad localizado en las pruebas de aceptación era un defecto que habría afectado la seguridad del producto.\n - De los defectos localizados por las pruebas del sistema, 9 fueron defectos de regresión. No se detectaron defectos de regresión después de las pruebas del sistema (en pruebas de aceptación, pruebas beta y post-lanzamiento).\n - De los defectos localizados por las pruebas del sistema, 15 fueron defectos de fiabilidad. No se detectaron defectos de fiabilidad después de las pruebas del sistema (en pruebas de aceptación, pruebas beta y post-lanzamiento).\n - Las pruebas del sistema cubrieron el 100% de los riesgos identificados para la calidad del producto, y todas estas pruebas pasaron antes del lanzamiento del sistema.\n - Las pruebas del sistema cubrieron el 100% de los requisitos especificados, y todas estas pruebas pasaron antes del lanzamiento del sistema.\n - En la reunión de lanzamiento del proyecto, cuatro interesados expresaron una confianza muy alta para el lanzamiento. Un interesado expresó una alta confianza para el lanzamiento. Un interesado expresó una confianza media para el lanzamiento.\n - En la reunión retrospectiva, los seis interesados confirmaron que sentían que estos niveles de confianza estaban justificados por los resultados del lanzamiento.\n - Inmediatamente después del lanzamiento del producto, cinco interesados expresaron una satisfacción muy alta con la información proporcionada por el equipo de pruebas, mientras que un interesado expresó una satisfacción media con la información proporcionada por el equipo de pruebas. En la reunión retrospectiva, los seis interesados confirmaron que sentían que estos niveles de satisfacción estaban justificados por los resultados del lanzamiento.\n\n Esta pregunta consta de dos partes: Primero, evalúa si las pruebas del sistema pueden considerarse como el cumplimiento de objetivos realistas. Segundo, enumera las áreas de mejora de las pruebas del sistema, incluyendo la política de pruebas y la estrategia de pruebas, en lanzamientos posteriores de este producto.",
        options: [
            "A"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "Escenario 4\n\n Recientemente has sido contratado como Gerente de Pruebas en un proyecto que desarrolla una nueva aplicación de recursos humanos para un cliente externo con un estimado de 200 requisitos. El Gerente de Proyecto ya ha decidido que se debe utilizar un ciclo de vida en V, siendo las pruebas responsables de las revisiones de requisitos y especificaciones de diseño, y de dos fases de pruebas dinámicas (integración/sistema y aceptación). La organización ha desarrollado aplicaciones similares en el pasado (siguiendo un enfoque similar) y ha podido proporcionar los siguientes datos (promediados) para predecir/estimar este proyecto:",
        options: [
            "B"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: "./tabla preg 15"
    },
    {
        question: "El (nuevo) Gerente de Producto ha visto los costos generales de pruebas de algunos proyectos anteriores y no está convencido de que las pruebas proporcionen un buen retorno de inversión. Usando la información proporcionada en el escenario anterior, tu tarea es producir un breve informe resumen para este Gerente de Producto explicando los beneficios cuantitativos esperados de las pruebas para este proyecto. Indica cualquier suposición realizada e incluye cualquier cálculo en tu respuesta.",
        options: ["A"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "17. ¿Cuál de los siguientes es MENOS probable que esté involucrado en la revisión de las especificaciones de requisitos?",
        options: [
            "Analista de Negocios",
            "Cliente",
            "Usuario",
            "Gerente de Proyecto"
        ],
        correctAnswer: 2, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "18. ¿Cuáles de los siguientes son MENOS probables ejemplos de relaciones importantes creadas por un Gerente de Pruebas (TM)?",
        options: [
            "El TM del Proyecto establece una buena relación con el TM del Programa para asegurarse de que tiene claro sus responsabilidades y que el TM del Programa está informado sobre el progreso de su equipo.",
            "El TM desarrolla una amistad con la Gerente de Producto del cliente para persuadirla de reducir la calificación de severidad en los incidentes para permitir que se complete la prueba.",
            "El TM del Proyecto confía en el desarrollador de su organización que está integrado en el equipo offshore para construir una relación con el TM offshore.",
            "El TM de Seguridad crea un vínculo con el analista de seguridad que, aunque no es un gerente, es la persona a la que todos acuden para obtener información técnica en el área de seguridad.",
            "El TM del Proyecto forma relaciones exclusivas con los gerentes de los dos equipos de pruebas que gestiona, para evitar ser sobrecargado por la comunicación con miembros individuales del equipo.",
            "El TM construye una relación con el líder de pruebas offshore que es responsable de automatizar las pruebas de regresión para el próximo lanzamiento."
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: `Cuál de las siguientes opciones coincide MEJOR con los siguientes escenarios y el medio de comunicación más efectivo?",
        
            "i   Lluvia de ideas para identificar riesgos del proyecto de prueba y del ítem bajo prueba",
            "ii  Informar a los testers offshore sobre actualizaciones del estado de incidentes",
            "iii Informar el estado semanal de las pruebas a los interesados",
            "iv  Informar al Gerente de Proyecto sobre la suspensión de pruebas debido a fallos en el entorno de prueba",
            "v   Comunicar las fechas de las conferencias internas de pruebas para el próximo año",
            "vi  Reportar un incidente a un desarrollador específico"`,
        options: [
          "A",
          "B",
          "C",
          "D"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: "./tabla preg19.png"
    },
    {
        question: "Una herramienta de pruebas de uso múltiple, MULTI-TOOL, se utiliza dentro de tu organización para apoyar todos los proyectos de pruebas. Incluye gestión de pruebas, gestión de incidentes y herramientas de soporte para pruebas dinámicas. Sin embargo, los clientes de un nuevo proyecto importante utilizan la herramienta de gestión de incidentes INCITOOL y requieren que esta herramienta se use para este proyecto. Se ha sugerido que INCITOOL se integre en MULTI-TOOL y reemplace la funcionalidad actual de gestión de incidentes.\n\n¿Cuál de las siguientes actividades es MENOS probable que se realice en respuesta a este cambio sugerido?",
        options: [
            "Se firmará un contrato para hacer al cliente copartícipe en el mantenimiento de los datos y la funcionalidad integrados de INCITOOL.",
            "Se realizará un análisis de impacto para determinar qué usuarios se verán afectados por el cambio y en qué medida.",
            "Se llevará a cabo un análisis de la viabilidad técnica del cambio y de las capacidades disponibles del personal para realizar el cambio.",
            "Se estudiará la migración de la base de datos de incidentes de MULTI-TOOL a INCITOOL para determinar si esto es posible sin comprometer la calidad de los datos originales."
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Escenario 5: Pruebas para TransGlobe\n\n La empresa de TI EO-IS (ExtraOrdinary-ItServices) proporciona servicios de TI a una empresa de transporte global, TransGlobe. Los sistemas integrados, para los cuales EO-IS proporciona servicios, consisten principalmente en un sistema de clientes, un sistema de pedidos, un sistema de planificación de horarios de carga, un sistema de manejo de documentos de carga y un sistema de facturación, junto con interfaces a 15 otros sistemas.\n\n El equipo del proyecto de EO-IS está situado en una ubicación en un país europeo cerca de la sede de TransGlobe y consta de 108 desarrolladores, testers, analistas de negocios, especialistas y gerencia. Está organizado como un programa con cuatro proyectos que entregan lanzamientos importantes y un equipo de mantenimiento que entrega pequeñas versiones de correcciones de defectos y cambios urgentes.\n\n En la renegociación anual del contrato, TransGlobe ha exigido costos de TI más bajos y lanzamientos más frecuentes de cambios en el sistema y nueva funcionalidad de EO-IS. Para cumplir con estas demandas, EO-IS ha propuesto lo siguiente:\n - Una transición de 2/3 del proyecto de la ubicación actual en Europa a una ubicación offshore en Asia.\n - La integración de sistemas continuará siendo realizada por los equipos en la ubicación onsite europea.\n - La clarificación de requisitos realizada por analistas de negocios y representantes del cliente continuará siendo llevada a cabo por los equipos en la ubicación onsite europea.\n - El reemplazo del sistema de planificación de horarios de carga será desarrollado y probado por un proveedor externo, FS_Planner.\n\n Eres el Gerente de Pruebas y has estado involucrado, junto con el grupo de gestión del programa, en la planificación de los cambios. Los objetivos en relación con las pruebas son reducir el tamaño total del equipo de pruebas en un 20%, construir un equipo de pruebas offshore que consista en 10 testers, incluyendo un líder de equipo, y mantener un pequeño equipo de pruebas onsite que consista en seis testers. Has requerido que los testers en el nuevo equipo offshore tengan al menos un año de experiencia y sean testers certificados en el nivel de Fundación ISTQB.\n\n La estrategia de pruebas será basada en riesgos utilizando una mezcla de pruebas basadas en requisitos, pruebas de regresión y pruebas consultivas.\n\n El equipo de pruebas offshore seguirá una estrategia de pruebas consultivas durante el primer año, donde un analista de negocios senior y un tester senior del equipo onsite actúan como asesores. Durante el primer año, el equipo offshore realizará pruebas de regresión manual, mientras que los especialistas en automatización de pruebas onsite finalizarán un marco de automatización de pruebas basado en palabras clave y automatizarán un subconjunto seleccionado de las pruebas de regresión manuales, que el equipo offshore debe entregar al equipo onsite.",
        options: [
            "A"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "21. El Escenario 5 “Pruebas para TransGlobe” proporciona el contexto para esta pregunta. Como Gerente de Pruebas en IO-IS, has elaborado un borrador de un programa de capacitación de inducción para los nuevos testers en el equipo offshore.\n\nSelecciona las tres opciones que son MENOS probables de ser incluidas en tu borrador.",
        options: [
            "Capacitación en el uso de los sistemas de TransGlobe y familiarización con la documentación del proyecto",
            "Capacitación en el uso de herramientas de depuración para las aplicaciones web",
            "Capacitación en fundamentos estándar de pruebas",
            "Revisión del modelo de pruebas y procedimientos de pruebas utilizados por IO-IS",
            "Descripción general y revisión de muestras de las pruebas de regresión existentes",
            "Introducción a Java y revisión de módulos seleccionados de Java",
            "Capacitación en el uso de las herramientas de gestión de pruebas y gestión de defectos utilizadas por IO-IS"
        ],
        correctAnswer: 5, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: "Analiza el escenario para determinar el nivel apropiado de pruebas requerido del equipo de pruebas onsite en relación con el sistema de planificación de horarios de carga proporcionado por FS_Planner.\n\n¿Cuáles tres de las opciones serán elegidas con mayor probabilidad?",
        options: [
            "Pruebas de regresión a nivel de componente",
            "Pruebas de regresión a nivel de integración",
            "Pruebas de aceptación del usuario",
            "Pruebas de regresión manual a nivel de sistema",
            "Pruebas de integración del sistema",
            "Pruebas de regresión del sistema automatizadas",
            "Pruebas de integración de hardware y software"
        ],
        correctAnswer: 1, // Ajusta según la respuesta correcta
        urlImage: ""
    },
     {
        question: `El Escenario 5 “Pruebas para TransGlobe” proporciona el contexto para esta pregunta. Se han hecho planes para que el equipo de pruebas offshore visite al equipo onsite en la ubicación. Como Gerente de Pruebas, planificarás algunas actividades de construcción de equipo.\n\n¿Qué incluirás con mayor probabilidad en un plan de actividades de construcción de equipo que pueda ayudar a mejorar la comunicación y construir el espíritu de equipo entre los equipos offshore y onsite?",
       
            "Salir a cenar juntos en restaurantes con comida local y comida asiática",
            "Hacer juegos de roles para abordar situaciones de acoso sexual y comportamientos inapropiados que han ocurrido",
            "Organizar sesiones de lluvia de ideas en grupos sobre qué medios de comunicación son buenos para diferentes situaciones.",
            "Trabajo en grupo sobre diferencias culturales basado en listas de elementos creadas a partir de Internet o asistencia de consultoría externa",
            "Trabajo en grupo sobre diferencias religiosas basado en las creencias de cada miembro del equipo",
            "Configurar una página de intranet para el equipo combinado y obtener aportes del equipo sobre el contenido",
            "Realizar sesiones para familiarizar a todos con los diferentes horarios de trabajo, rangos salariales y días festivos"`,
         options: [
          "i, iii, iv,vi ",
          "i, ii, iii, vi ",
          "iii, iv, v, vii  ",
          "I, ii, iii, iv "
         ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "El Escenario 5 “Pruebas para TransGlobe” proporciona el contexto para esta pregunta. El gerente de entrega en el sitio offshore ha definido objetivos S.M.A.R.T para los desarrolladores y testers de los equipos offshore que trabajan para IO-IS en los sistemas de TransGlobe.\n\nTu tarea como Gerente de Pruebas es revisar y comentar sobre los objetivos relacionados con los testers offshore.\n\n¿Cuáles dos de los siguientes elementos consideras más apropiados como objetivos S.M.A.R.T en relación con la estrategia de pruebas definida para el primer año de transición?",
        options: [
            "Capaz de prevenir el 98% de todos los defectos de regresión que escapen a producción después de tres meses",
            "Capaz de diseñar casos de prueba sin consultar a los analistas de negocios senior onsite y al tester senior onsite después de cuatro meses",
            "Capaz de crear scripts de prueba de regresión automatizados después de seis meses",
            "Capaz de operar todas las funciones estándar de la herramienta de gestión de pruebas y gestión de defectos después de dos semanas",
            "Capaz de ejecutar el 90% de las pruebas de regresión manuales después de tres meses"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ""
    },
    {
        question: "El Escenario 5 “Pruebas para TransGlobe” proporciona el contexto para esta pregunta.\n\nInformación adicional:\nHan pasado nueve meses y tú, como Gerente de Pruebas, estás haciendo planes para el segundo año de transición de las pruebas del equipo onsite al equipo de pruebas offshore. Has decidido trasladar la responsabilidad de la automatización de las pruebas de regresión del sistema y el marco de automatización de pruebas al equipo offshore.\n\nDel equipo offshore de 10 testers, el líder de equipo ha sido transferido a otro proyecto y otro tester experimentado ha dejado la empresa debido a una reubicación tras su matrimonio. Has recibido los siguientes currículos tabulados del gerente de entrega offshore para evaluar las posiciones de trabajo abiertas: Para las vacantes, evalúa los currículos dados y el escenario y la información adicional y determina los mejores candidatos.\n\nProporciona lo siguiente:\n1. Da tu evaluación general de los currículos tabulados y argumenta hasta qué punto ofrecen una cobertura realista y confiable de habilidades y nivel de conocimiento.\n2. ¿Cuál de los candidatos evalúas como la mejor opción para líder de equipo, y cuál es la justificación para tu elección basada en los currículos?\n3. ¿Cuál de los candidatos consideras que es la mejor opción para la otra posición de trabajo abierta, y cuál es la justificación para tu elección basada en los currículos?\nDescribe la información adicional sobre los candidatos (no ya cubierta en los currículos) que necesita ser recopilada a través de una entrevista. Describe qué crees que son enfoques efectivos para usar en estas entrevistas.",
        options: [
            "d"
        ],
        correctAnswer: 0, // Ajusta según la respuesta correcta
        urlImage: ["./tabla1 preg25.png","./tabla2 preg25.png"]
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