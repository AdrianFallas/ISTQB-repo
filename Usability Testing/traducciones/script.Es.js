// usability testing
const data_es = {
    questions: [
        {
            "question": "¿Cuál de las siguientes afirmaciones es verdadera?",
            options: [
                "La usabilidad se ocupa de que los usuarios especificados logren objetivos especificados en un contexto de uso específico con un producto de software; la experiencia del usuario se ocupa de las percepciones y respuestas de una persona resultantes del uso del producto de software.",
                "La usabilidad se mide en términos de efectividad, eficiencia y satisfacción; la accesibilidad se ocupa de las percepciones y respuestas de una persona resultantes del uso del producto de software.",
                "La experiencia del usuario se ocupa de que los usuarios especificados logren objetivos especificados en un contexto de uso específico con un producto de software; la usabilidad se ocupa de las percepciones y respuestas de una persona resultantes del uso del producto de software.",
                "La experiencia del usuario se ocupa de las percepciones y respuestas de una persona resultantes del uso del producto de software; la accesibilidad se ocupa de las emociones, creencias y percepciones de una persona."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es un objetivo razonable de la evaluación de accesibilidad?",
            options: [
                "Asegurarse de que, dentro de un contexto de uso específico, cualquier persona pueda usar el software.",
                "Verificar que los factores externos que influyen, como la presentación, estén funcionando de manera efectiva para la experiencia general del usuario.",
                "Asegurar la facilidad de aprendizaje del software.",
                "Verificar que el software sea utilizable por personas con discapacidades específicas."
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Cuando la evaluación incluye los servicios recibidos antes y después del uso del producto de software, ¿qué tipo de evaluación se está llevando a cabo?",
            options: [
                "Usabilidad",
                "Experiencia del usuario",
                "Accesibilidad",
                "Usabilidad y experiencia del usuario"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Te han pedido que evalúes la usabilidad de una aplicación de software médico especializada. Debido a limitaciones de tiempo y presupuesto, no es posible incluir a los usuarios en el proceso de evaluación. ¿Cuál de las siguientes es un enfoque válido para evaluar la usabilidad en este caso?",
            options: [
                "Evaluación de accesibilidad",
                "Pruebas de usabilidad",
                "Encuestas a usuarios",
                "Revisión de usabilidad"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "En un proyecto que está empleando prácticas de evaluación de usabilidad, ¿cuál de las siguientes debería venir primero?",
            options: [
                "Pruebas formativas",
                "Pruebas sumativas",
                "Formativas y sumativas deberían ocurrir al mismo tiempo durante la recopilación de requisitos",
                "Formativas y sumativas deberían ocurrir al mismo tiempo durante el diseño"
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes opciones describe actividades encontradas en los elementos clave del diseño centrado en el ser humano?",
            options: [
                "Observar a los usuarios en el trabajo, desarrollar el software, refinar prototipos",
                "Entrevistar a los usuarios, evaluar un prototipo observando a las personas usarlo, refinar prototipos",
                "Desarrollar prototipos, realizar revisiones de usabilidad por expertos, mostrar el diseño a los usuarios",
                "Entrevistar a los usuarios, automatizar pruebas de usabilidad, refinar prototipos"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "¿Cuál es el propósito de la etapa de evaluación en el proceso de diseño centrado en el ser humano?",
            options: [
                "Reducir la necesidad de análisis de requisitos",
                "Simplificar el proceso de diseño",
                "Permitir que el usuario vea y use versiones del software a medida que evoluciona",
                "Implementar retroalimentación y mejorar el producto hasta que se logren los requisitos de usabilidad"
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "¿Cuáles son los mejores enfoques de evaluación de usabilidad para un ciclo de vida de desarrollo de software ágil?",
            options: [
                "RITE, descuento, pruebas semanales",
                "RAD, informal y rápido, pruebas de ciclo mensual",
                "RUP, revisiones de usabilidad, criterios de aceptación de usabilidad",
                "REST, formativa, laboratorios de usabilidad diarios"
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Qué es la prueba de usabilidad 'think aloud'?",
            options: [
                "Es una prueba realizada por un par de evaluadores de usabilidad que discuten las pruebas mientras las ejecutan",
                "Es una forma de revisión posterior a la sesión donde el evaluador de usabilidad discute lo que estaba pensando mientras realizaba las pruebas",
                "Es un método utilizado durante la evaluación formativa para 'hablar sobre' la interfaz de usuario propuesta",
                "Es un método utilizado para alentar al usuario a expresar sus pensamientos mientras realiza sus pruebas"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "¿Qué es la accesibilidad?",
            options: [
                "Usabilidad de un producto de software por todos, independientemente de sus capacidades o discapacidades",
                "Usabilidad de un producto de software por personas con visión, audición, destreza, cognición o movilidad física limitadas",
                "Usabilidad de un producto de software por personas de diferentes nacionalidades e idiomas",
                "Usabilidad del producto de software centrada en la interacción directa del software con el usuario"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Si estás evaluando los servicios que un usuario recibe antes de usar el software, ¿qué tipo de evaluación estás realizando?",
            options: [
                "Usabilidad",
                "Experiencia del usuario",
                "Accesibilidad",
                "Servicios al usuario"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes es la descripción correcta de la interfaz de usuario?",
            options: [
                "La interfaz de usuario consiste en todos los componentes de un producto de software que proporcionan información y controles para que el usuario logre tareas específicas con el producto de software",
                "La interfaz de usuario es un defecto de software que resulta en dificultad para el usuario al usar el producto de software",
                "La interfaz de usuario describe las percepciones y respuestas de una persona que resultan del uso y/o uso anticipado de un producto, sistema o servicio",
                "La interfaz de usuario es un proceso a través del cual se recopila información sobre la usabilidad de un producto de software para mejorar el producto de software o evaluar el valor de la usabilidad del producto de software."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Si los usuarios se sienten incómodos al usar el software, ¿qué tipo de problema es este?",
            options: [
                "Eficiencia",
                "Funcional",
                "Efectividad",
                "Satisfacción"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Acabas de comprar una nueva herramienta de seguimiento de defectos, pero estás teniendo algunos problemas con la instalación. Has llamado al número de soporte al cliente y te ayudaron a instalar el software, pero también te dijeron que deberías haber podido resolverlo tú mismo y te recomendaron leer el manual antes de volver a llamarlos. Dada tu experiencia, ¿qué tipo de riesgo asociarías con esta situación?",
            options: [
                "Riesgo de accesibilidad",
                "Riesgo de experiencia del usuario",
                "Riesgo de usabilidad",
                "Riesgo de soporte"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Tu empresa ha desarrollado una nueva impresora que se supone que se configura automáticamente al ser instalada. Las versiones anteriores de la impresora han tenido problemas de instalación que resultaron en que la impresora no se instalara o se instalara incorrectamente, deshabilitando la capacidad de impresión en color. Cuando esto ocurrió, la mayoría de las personas devolvieron la impresora y exigieron un reembolso, a pesar de que la impresora en sí funcionaba correctamente. Dada esta experiencia, ¿cuál es un riesgo de usabilidad razonable que debería ser rastreado para el nuevo lanzamiento de la impresora?",
            options: [
                "Los usuarios no pueden resolver los problemas de instalación y, como resultado, informan su insatisfacción a sus amigos en las redes sociales, creando una imagen negativa de la empresa.",
                "La documentación del usuario no es suficiente para ayudar con los problemas de instalación y el equipo de soporte es lento en responder el teléfono.",
                "La falta de capacidad de impresión en color causa un problema de accesibilidad para las personas que necesitan impresión en color para poder leer ciertos formularios médicos.",
                "La falta de tiempo disponible para el equipo de diseño está causando un mal diseño y análisis de usabilidad."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es un ejemplo válido de una directriz de interfaz de usuario?",
            options: [
                "El logotipo de la empresa debe aparecer en la esquina superior izquierda de cada página. Su posición debe ser exactamente la misma que en la página de inicio. Hacer clic en el logotipo debe mostrar la página de inicio.",
                "Los mensajes de error deben ser constructivos, precisos, comprensibles y educados.",
                "Los errores deben ser manejados de manera educada y tolerante, nunca culpando al usuario por un error.",
                "La interfaz de usuario debe ser adecuada para la tarea."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "La directriz AWCAG 1.1.1 dice: “Alternativas de texto: Proporcionar alternativas de texto para cualquier contenido no textual para que pueda ser cambiado a otras formas que las personas necesiten, como impresión en grande, braille, habla, símbolos o lenguaje más simple.” ¿Cuál de las siguientes sugerencias ilustra mejor la directriz WCAG?",
            options: [
                "Los usuarios deberían poder aumentar fácilmente el texto hasta un 300%.",
                "Las imágenes deberían incluir texto alternativo equivalente en el marcado/código.",
                "Deberían estar disponibles equivalentes en braille (texto en relieve para personas ciegas) para todo el texto.",
                "Para todo texto que sea difícil de entender, se debería ofrecer una alternativa de texto simplificada."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes leyes requiere específicamente que los sitios web privados sean accesibles para los usuarios ciegos o con discapacidad visual en Internet?",
            options: [
                "La Ley de Igualdad",
                "La Ley de Estadounidenses con Discapacidades",
                "La Ley de Rehabilitación",
                "Sección 508"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "¿Cuál es una entrada importante para una revisión de usabilidad efectiva?",
            options: [
                "Una descripción detallada de la arquitectura del sistema.",
                "Plantillas de cuestionarios para la encuesta de usuarios.",
                "Una interfaz de usuario visible, ya sea real o simulada.",
                "Una lista de problemas de usabilidad conocidos."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Si se está llevando a cabo una revisión de usabilidad planificada y la persona más experimentada en la revisión tiene seis meses de experiencia en pruebas de usabilidad, ¿qué tipo de revisión es esta?",
            options: [
                "Una revisión de usabilidad formal.",
                "Una revisión de usabilidad informal.",
                "Una revisión de usabilidad por expertos.",
                "Una revisión de usabilidad ad hoc."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Estás realizando pruebas de usabilidad en un software que es utilizado por personas para registrarse para obtener una licencia de conducir. Este software recopila la información del usuario y asigna un número de licencia de conducir. Luego, el usuario es llevado a otra página donde se le pregunta sobre la información del seguro del automóvil. En esa página, se le requiere ingresar su nuevo número de licencia de conducir. Dada esta información. Dada esta información, ¿qué elemento de la lista de verificación heurística identificaría un problema de usabilidad con este software?",
            options: [
                "Control y libertad del usuario",
                "Prevención de errores",
                "Visibilidad del estado del sistema",
                "Reconocimiento en lugar de recuerdo"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Recopilar comentarios de los usuarios es parte de qué paso principal en las pruebas de usabilidad?",
            options: [
                "Preparar la prueba de usabilidad",
                "Realizar la sesión de prueba de usabilidad",
                "Comunicar los hallazgos de la sesión de prueba",
                "Realizar la retrospectiva después de que se haya completado la prueba"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes acciones debe tomarse como parte de la planificación de la prueba de usabilidad?",
            options: [
                "Seleccionar al moderador para las pruebas",
                "Determinar cómo analizar los resultados de pruebas de usabilidad anteriores",
                "Decidir dónde documentar los defectos conocidos en el software",
                "Presentar las instrucciones de briefing a los usuarios"
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Las preguntas que se hacen al usuario al concluir la sesión de usabilidad se incluyen en qué documentación de pruebas de usabilidad?",
            options: [
                "El plan de prueba de usabilidad",
                "El registro de riesgos de usabilidad",
                "La lista de verificación de usabilidad",
                "El guion de la prueba de usabilidad"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Estás creando tareas que deben completarse durante una prueba de usabilidad. El software se utiliza para que las personas se registren para obtener una licencia de conducir. Este software recopila la información del usuario y asigna un número de licencia de conducir. Una vez que la persona tiene su número, se le hacen una serie de preguntas sobre su información de seguro. Dada esta información, ¿qué sugerirías como una buena primera tarea para los participantes de usabilidad?",
            options: [
                "Realizar pruebas exploratorias detalladas",
                "Escribir sus impresiones sobre la página de inicio",
                "Intentar ingresar su nombre y dirección en la aplicación",
                "Tomar el camino más simple a través de la aplicación"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Al considerar un lugar para una prueba de usabilidad, ¿qué requisitos tienen los observadores?",
            options: [
                "Deben poder entrar y salir según sea necesario",
                "Deben estar restringidos y concentrados en los usuarios durante toda la prueba",
                "No deben tener acceso a refrigerios en la sala de observación",
                "Deben poder interactuar con el usuario durante la prueba"
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Cuál de las siguientes es una desventaja de usar un laboratorio de usabilidad?",
            options: [
                "Los observadores están restringidos a un área específica",
                "La sala puede parecer artificial para el usuario",
                "Cada prueba se llevará a cabo en un entorno similar",
                "Los observadores pueden entrar y salir durante la sesión"
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Si un usuario se ha confundido y frustrado durante una sesión de prueba, ¿qué acciones debe tomar el moderador?",
            options: [
                "El moderador debe ayudar al usuario y proporcionar instrucciones según sea necesario para volver a encaminarlo",
                "El moderador debe señalar al usuario la documentación, pero no debe ayudar",
                "El moderador debe esperar hasta que el usuario esté bloqueado antes de ayudarlo a pasar a la siguiente tarea de prueba",
                "El moderador no debe tener interacción con el usuario, independientemente de cuán confundido o frustrado esté el usuario"
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es un ejemplo de un hallazgo positivo de usabilidad?",
            options: [
                "Un usuario encontró un defecto que necesitará ser corregido antes del lanzamiento.",
                "Un usuario mencionó que una función no debería ser cambiada.",
                "Un usuario pudo seguir los pasos del escenario.",
                "El usuario le dijo al moderador que le gustaba la sensación de privacidad que proporcionaba el laboratorio de pruebas de usabilidad."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Has escrito un informe de prueba de usabilidad e incluido los hallazgos y recomendaciones detalladas, los objetivos de la prueba, el propósito de la prueba y una descripción del método de evaluación que se utilizó durante la prueba. Has incluido un resumen ejecutivo de una página. Tu lista de hallazgos incluye 80 defectos encontrados, incluyendo para cada defecto una breve descripción y una resolución propuesta. El informe incluye una lista anonimizada de los participantes de la prueba. ¿Qué deberías cambiar para alinear el informe con las mejores prácticas para este tipo de informe?",
            options: [
                "Hacer las descripciones de los problemas más extensas para que los interesados puedan entender los problemas más fácilmente.",
                "Proporcionar direcciones de correo electrónico de los participantes de la prueba para asegurar que puedan ser contactados si hay preguntas de seguimiento.",
                "Eliminar los defectos menos importantes de la lista para mantenerla a un tamaño más adecuado.",
                "Eliminar el resumen ejecutivo porque eso debería ser escrito como un documento separado."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "¿De qué manera ayuda la metodología de desarrollo de software ágil a reducir la resistencia interna a los hallazgos de usabilidad?",
            options: [
                "Porque el software está evolucionando todo el tiempo, los hallazgos de usabilidad se plantean con más frecuencia y, por lo tanto, son más fáciles de aceptar.",
                "Porque se utiliza un enfoque de equipo completo, el equipo está acostumbrado a intercambiar libremente opiniones sobre usabilidad.",
                "Porque los proyectos ágiles otorgan más importancia a los problemas de usabilidad, la resistencia a los hallazgos de usabilidad es menor.",
                "Porque a menudo no hay documentación formal, hay más aceptación para las decisiones de diseño y usabilidad."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Has realizado varias sesiones de laboratorio de usabilidad y se está volviendo claro que el software es bastante difícil de usar. Los usuarios no pueden averiguar qué hacer y terminan frustrados con el software al intentar completar tareas bastante simples. Has compartido estos resultados con los desarrolladores, pero no creen que haya un problema. ¿Qué enfoque deberías tomar para convencer a los desarrolladores de que existe un problema?",
            options: [
                "Escribir informes de defectos para cada problema y darles a cada uno una alta calificación de severidad.",
                "Explicar al desarrollador que el problema probablemente está relacionado con el diseño.",
                "Hacer que los desarrolladores se sienten con los usuarios y los guíen a través del software para que los usuarios no se frustren.",
                "Hacer que los desarrolladores observen una sesión de usabilidad para entender mejor dónde se confunden los usuarios."
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Al realizar actividades de control de calidad para una prueba de usabilidad, ¿por qué deberías observar las dos o tres primeras sesiones de prueba?",
            options: [
                "Para asegurar que las sesiones se realicen de acuerdo con el guion de la prueba de usabilidad.",
                "Para asegurar que las sesiones se realicen de acuerdo con el plan de prueba de usabilidad.",
                "Para asegurar que las sesiones sean conducidas por un gerente de prueba.",
                "Para asegurar que las sesiones estén documentadas correctamente en el sistema de gestión de pruebas."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "¿Cuál de los siguientes es el problema más común que ocurre cuando las pruebas de usabilidad se programan demasiado tarde?",
            options: [
                "El equipo de prueba no tiene tiempo para apoyar el esfuerzo de prueba ya que están ocupados con las pruebas finales de lanzamiento.",
                "La dirección no está interesada en los resultados de la prueba porque no entienden los objetivos de las pruebas de usabilidad.",
                "Los resultados pueden recibirse cuando el equipo de desarrollo no tiene tiempo para hacer los cambios necesarios.",
                "El cronograma de pruebas del sistema se retrasará esperando la finalización de las pruebas de usabilidad."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Si una empresa acaba de lanzar una nueva aplicación móvil, ¿qué información esperarían obtener de una encuesta a usuarios?",
            options: [
                "Una comprensión de la satisfacción de los usuarios con el software.",
                "Una comprensión de cualquier problema de aprendibilidad con el software.",
                "Una evaluación de la eficiencia y efectividad del software.",
                "Una evaluación de la recepción en el mercado del software y la información predictiva de ventas."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Tu empresa ha lanzado recientemente un software que soporta un dispositivo médico de ultrasonido y está interesada en cómo se percibe la usabilidad por parte de los usuarios finales. Marketing quiere usar un cuestionario corto que permita al usuario responder subjetivamente a un pequeño conjunto de afirmaciones. ¿Qué cuestionario sería el más apropiado para usar para recopilar esta información?",
            options: [
                "SUMI",
                "WAMMI",
                "SUS",
                "RITE"
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Se te ha pedido que desarrolles un enfoque para verificar la usabilidad de un nuevo producto de software que controlará sistemas de riego para granjas. La organización de desarrollo contrató a un grupo externo para diseñar la interfaz de usuario, pero luego decidió que no les gustaba el diseño y lo rehizo. Al hacer el rediseño, pidieron a varios representantes de usuarios comentarios tempranos. Sin embargo, los comentarios fueron inconsistentes. Cuando implementaron el código, los desarrolladores ignoraron algunos de los comentarios. Dada esta información, ¿cuál es el mejor enfoque para verificar la usabilidad?",
            options: [
                "Se debe utilizar una revisión de usabilidad para asegurar que el diseño sea óptimo.",
                "Se debe realizar una prueba de usabilidad para asegurar que los comentarios no sean desestimados como opiniones.",
                "Se debe realizar una evaluación de madurez de usabilidad para asegurar que el equipo esté utilizando las mejores prácticas.",
                "Se debe realizar un análisis de usabilidad formativa para asegurar que el diseño contenga características importantes de usabilidad."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Estás en un café y tienes de 10 a 15 minutos disponibles con posibles usuarios de aplicaciones móviles. ¿Cuál es tu mejor opción respecto a la prueba de usabilidad?",
            options: [
                "Realizar una sesión de prueba informal donde los usuarios potenciales intenten usar el producto.",
                "Realizar una prueba basada en encuestas.",
                "Realizar una prueba basada en cuestionarios.",
                "Realizar pruebas formativas durante 15 minutos."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Tu organización necesita realizar una encuesta de usabilidad. ¿Quién es responsable de seleccionar un cuestionario apropiado?",
            options: [
                "El moderador de la prueba de usabilidad.",
                "El evaluador de usabilidad.",
                "El gerente de pruebas.",
                "El gerente de proyecto."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Al final de la sesión de usabilidad, se entrevistará a los usuarios para recopilar sus opiniones sobre lo que funcionó y lo que no, lo que les gustó y lo que encontraron difícil de usar. ¿Quién debería llevar a cabo esta entrevista?",
            options: [
                "El moderador de la prueba de usabilidad.",
                "El evaluador de usabilidad.",
                "El gerente de pruebas.",
                "El gerente de proyecto."
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
        "restart": "Reiniciar"
    }
}
