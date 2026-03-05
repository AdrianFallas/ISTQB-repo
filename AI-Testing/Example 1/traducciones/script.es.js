const data_es = {
  questions: [
    {
      "question": "¿Cuál de los siguientes es una técnica de aprendizaje automático? (1 punto)",
      options: [
        "Motor de reglas",
        "Algoritmo de agrupamiento (clustering)",
        "Razonamiento basado en casos",
        "Algoritmo de búsqueda"
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es un tipo de sistema de IA con capacidades similares a las habilidades cognitivas humanas? (1 punto)",
      options: [
        "IA estrecha",
        "IA general",
        "IA superinteligente",
        "IA sobrehumana"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes es un beneficio de entrenar un modelo usando computación en la nube? (1 punto)",
      options: [
        "Será más rápido que uno entrenado en servidores locales.",
        "Una vez entrenado puede ser desplegado en dispositivos con mucho menos poder computacional.",
        "Continuará aprendiendo mientras esté desplegado.",
        "Una vez desplegado en un dispositivo, puede seguir aprendiendo desde la nube."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Un modelo preentrenado puede carecer de transparencia comparado con uno generado internamente. ¿Qué riesgo resulta de esta falta de transparencia? (1 punto)",
      options: [
        "Puede ser muy lento.",
        "Tendrá más vulnerabilidades que un modelo entrenado internamente.",
        "Puede haber heredado sesgos.",
        "No se puede modificar para usarse en una red neuronal profunda."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre los sistemas basados en IA y autonomía? (1 punto)",
      options: [
        "Ningún sistema basado en IA es autónomo, todos requieren algún nivel de intervención humana.",
        "Algunos sistemas basados en IA son autónomos, pero otros requieren intervención humana.",
        "Todos los sistemas de IA son autónomos por defecto.",
        "La verdadera autonomía solo puede ser alcanzada por humanos, no por IA."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Estás probando un sistema basado en IA que recomienda la mejor carrera universitaria para graduados de secundaria. En tu conjunto de prueba, creaste 10 personas con expedientes académicos idénticos: cinco mujeres y cinco hombres. Todos los hombres recibieron recomendación para Ciencias de la Computación, mientras que todas las mujeres fueron recomendadas para Contabilidad Financiera. Al repetir la prueba con ocho hombres y dos mujeres, se obtuvieron los mismos resultados. ¿Qué tipo de comportamiento está mostrando el sistema? (1 punto)",
      options: [
        "a. Sesgo",
        "b. Autonomía",
        "c. Evolución",
        "d. Adaptabilidad"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Estás trabajando con un sistema basado en IA que debe adivinar una palabra en cinco intentos o menos. La palabra cambia cada vez, pero el sistema siempre la acierta en el primer intento. Al observar más de cerca, notas que el sistema no registra sus intentos hasta que adivina correctamente. ¿Qué tipo de comportamiento está mostrando? (1 punto)",
      options: [
        "a. Efecto secundario",
        "b. Transparencia",
        "c. Sesgo",
        "d. Manipulación de recompensa (reward hacking)"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Un sistema basado en IA está siendo utilizado para recomendar los mejores medicamentos para un paciente según sus datos médicos. Aunque al inicio funcionó de manera fiable, ahora está seleccionando fármacos experimentales además de los aprobados. ¿Qué característica está mostrando este comportamiento? (1 punto)",
      options: [
        "a. Autoaprendizaje",
        "b. Falta de robustez",
        "c. Autonomía",
        "d. Transparencia"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Qué tipo de aprendizaje está usando un agente inteligente recompensado por decisiones correctas y penalizado por las incorrectas? (1 punto)",
      options: [
        "Clasificación",
        "Agrupamiento",
        "Aprendizaje por refuerzo",
        "Iterativo"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Qué paso sigue inmediatamente después del entrenamiento del modelo en un flujo de trabajo de ML? (1 punto)",
      options: [
        "Evaluar el modelo",
        "Ajustar el modelo",
        "Desplegar el modelo",
        "Comprender los objetivos"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Tu modelo funciona bien con datos de entrenamiento pero falla con datos nuevos. ¿Qué problema ha ocurrido? (1 punto)",
      options: [
        "Subajuste (underfitting)",
        "Ajuste",
        "Aprendizaje no supervisado",
        "Sobreajuste (overfitting)"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Estás desarrollando un sistema basado en IA que será utilizado por tiendas de mascotas. Este sistema tomará información sobre el comportamiento de compra, registrada a través del programa de fidelidad, así como la frecuencia de compras. Estos datos se utilizarán para determinar qué artículos en oferta serán más atractivos para cada cliente. Has decidido usar aprendizaje no supervisado para construir tu modelo de ML.\n\n¿Qué tipo de problema estarás resolviendo con este enfoque? (2 pts)",
      options: [
        "a. Agrupamiento (Clustering)",
        "b. Clasificación",
        "c. Asociación",
        "d. Aprendizaje por refuerzo"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál contiene los tres componentes principales de la preparación de datos en el flujo de ML? (1 punto)",
      options: [
        "Identificación, recopilación, etiquetado",
        "Identificación, limpieza, muestreo",
        "Recopilación, transformación, extracción de características",
        "Adquisición, preprocesamiento, ingeniería de características"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Cuándo debe usarse el conjunto de datos de prueba para entrenar un modelo de ML? (1 punto)",
      options: [
        "Nunca",
        "Solo si contiene datos que no están en otros conjuntos",
        "Siempre",
        "Solo si el conjunto de entrenamiento no es suficientemente grande"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál es un riesgo con datos no balanceados? (1 punto)",
      options: [
        "Podrían tender a ser negativos más que positivos.",
        "Habrá demasiados datos para que el modelo los asimile.",
        "Podría haber sesgo inapropiado.",
        "Es probable que gran parte de los datos esté obsoleta."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Estás trabajando en un proyecto que utiliza etiquetadores de datos externos. Se les requiere hacer algunos juicios subjetivos sobre el etiquetado correcto. ¿Cuál es un error de etiquetado que probablemente ocurra en este escenario cuando se utilizan diferentes anotadores para el mismo conjunto de datos? (1 pt)",
      options: [
        "a. Errores deliberados",
        "b. Problemas con las herramientas",
        "c. Etiquetas de datos conflictivas",
        "d. Categorización compleja de clasificación"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": `Estás trabajando con un modelo de aprendizaje automático que predice los hábitos de compra de los clientes. En concreto, el modelo estima cuántos compradores específicos adquirirán un producto que ha sido estratégicamente exhibido en una tienda de comestibles. Para evaluar el modelo, estás especialmente interesado en su precisión y exactitud, y has recopilado la siguiente información para construir la matriz de confusión. (1 punto)`,
      options: [
        "Exactitud = 60%, Precisión = 90%",
        "Exactitud = 70%, Precisión = 80%",
        "Exactitud = 80%, Precisión = 70%",
        "Exactitud = 90%, Precisión = 60%"
      ],
      correctAnswer: 1,
      urlImage: "./imagenes/tabla preg17.png"
    },
    {
      "question": "Estás utilizando métricas de regresión supervisada para evaluar la eficiencia de tu modelo de aprendizaje automático. Al calcular el Error Cuadrático Medio (MSE), descubres que el valor es cercano a cero. ¿Qué significa esto? (1 punto)",
      options: [
        "a. Los datos de la métrica no son válidos porque deberían ser negativos.",
        "b. El modelo de regresión es bueno.",
        "c. Hay una gran similitud entre los puntos de datos dentro de un grupo.",
        "d. El modelo distingue bien entre clases."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Estás trabajando con un modelo de ML que utilizará reconocimiento facial para identificar infractores conocidos en una cadena de supermercados. Este modelo será entrenado con fotografías de personas que hayan cometido alguna de las siguientes infracciones en cualquiera de las tiendas de la cadena: robo, comportamiento amenazante hacia el personal, o comportamiento antisocial hacia otros clientes.\n\nHa habido mucha prensa negativa sobre la implementación de este sistema, pero las tiendas consideran que es fundamental para mantener un entorno seguro para el personal y los clientes. Es muy importante que el sistema no identifique erróneamente a personas inocentes, ya que se les negaría la entrada y serían interrogadas por la policía.\n\nDado esta información, ¿qué métrica de rendimiento sería la más importante para este sistema? (2 pts)",
      options: [
        "a. Exactitud (Accuracy)",
        "b. Precisión (Precision)",
        "c. Exhaustividad (Recall)",
        "d. Puntaje F1 (F1-score)"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "En una red neuronal, ¿de dónde obtiene un nodo sus entradas para calcular su valor de activación? (1 punto)",
      options: [
        "De los valores de activación de todas las neuronas de la capa anterior.",
        "De las activaciones de todas las neuronas del grupo de clasificación.",
        "Del valor de sesgo preestablecido.",
        "De los datos de entrenamiento."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Te han asignado el diseño de pruebas para determinar la cobertura de una red neuronal. Has determinado que realmente deseas asegurarte de que cada neurona reciba tanto valores de activación positivos como negativos.\n¿Qué tipo de cobertura deberías verificar? (1 punto)",
      options: [
        "Threshold",
        "Cambio de Valor (Value-Change)",
        "Signo-Signo (Sign-Sign)",
        "Cambio de Signo (Sign-Change)"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Cuál es un problema de que los testers usen el mismo enfoque de adquisición y preprocesamiento de datos que usaron los científicos de datos? (1 punto)",
      options: [
        "Puede que no sea posible obtener suficiente cantidad de datos.",
        "Los datos podrían estar desactualizados.",
        "Se pueden ocultar defectos en los métodos de adquisición y procesamiento de datos.",
        "Los datos contendrán muchos duplicados que invalidarán las métricas."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cómo se diferencia la prueba de integración de componentes cuando la IA se proporciona como servicio? (1 punto)",
      options: [
        "La IA solo debe probarse a nivel de sistema cuando todos los componentes están integrados.",
        "El servicio de IA debe probarse como componente por separado.",
        "La IA no puede probarse por sí sola, solo desde el nivel de prueba de aceptación.",
        "Las APIs del servicio de IA deben probarse como parte de la integración de componentes."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Estás utilizando tu teléfono móvil para enviar un mensaje de texto a un colega del trabajo. Tu intención era escribir: 'Hoy no iré porque tengo gripe estomacal'. Sin embargo, el autocorrector lo cambió por: 'Hoy no iré porque tengo una fluctuación de estómago' y además añadió 'estaré lamiendo'. No notaste esta 'corrección' y lo enviaste, lo que causó diversión en tu colega.\n¿Qué demuestra esta situación? (1 punto)",
      options: [
        "Tienes un sesgo de automatización o complacencia y no verificaste el mensaje antes de enviarlo.",
        "No puedes escribir lo suficientemente rápido.",
        "Tienes un sesgo de automatización o complacencia porque no monitoreaste adecuadamente el sistema que estabas usando.",
        "Deberías haber probado el autocompletado antes de usarlo para enviar un mensaje laboral."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Estás probando un sistema de detección de cáncer basado en inteligencia artificial. Es imperativo evitar los falsos negativos y minimizar los falsos positivos. Has estado calculando las métricas de rendimiento y el F1-score está cerca de cero.\n¿Qué deberías hacer? (1 punto)",
      options: [
        "No hacer nada, ya que un F1-score cercano a cero es el objetivo para este sistema.",
        "Utilizar la métrica de Precisión en lugar de F1-score, ya que podría estar dando un resultado sesgado.",
        "Hacer que un experto revise los datos de entrenamiento para asegurarse de que sean correctos.",
        "Revisar el flujo operativo para verificar que la integración esté funcionando correctamente."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Qué técnica de pruebas se recomienda para validar la capacidad de pedir intervención humana? (1 punto)",
      options: [
        "Partición de equivalencia",
        "Análisis de valores límite",
        "Tablas de decisión",
        "Exploratoria"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál es un desafío cuando un sistema de IA es no determinista? (1 punto)",
      options: [
        "Puede ser difícil reproducir los resultados.",
        "Las pruebas exploratorias no se pueden usar.",
        "La automatización debe ser guiada por palabras clave.",
        "Incluir capturas de pantalla en los resultados de prueba puede ser difícil."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Al probar transparencia en un sistema de IA, ¿qué se compara? (1 punto)",
      options: [
        "Entradas contra salidas.",
        "Datos de entrenamiento contra datos de prueba.",
        "Resultados esperados contra reales usando LIME.",
        "Documentación del algoritmo contra implementación real."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Estás probando un cortacésped autónomo. Se espera que el cortacésped solicite intervención humana si detecta que no se encuentra sobre césped, tierra o una superficie dura (como concreto). Esta funcionalidad está diseñada para detenerlo y pedir ayuda si se adentra en un jardín de flores u otra zona de vegetación inusual.\nHas preparado los siguientes casos de prueba:\n1. Colocar el cortacésped sobre concreto frente a un jardín de flores y ordenarle avanzar.\n2. Colocar el cortacésped sobre césped y programarlo para cruzar concreto hacia otro tramo de césped.\n3. Apagar el cortacésped, colocarlo sobre tierra, encenderlo y observar si avanza.\n4. Apagar el cortacésped, colocarlo en un jardín de flores y ver si avanza.\n5. Colocar el cortacésped sobre césped y verificar si avanza.\n6. Colocar el cortacésped sobre tierra frente a un jardín de flores y ordenarle avanzar.\n7. Colocar el cortacésped al borde de un jardín de flores y ordenarle avanzar hacia el césped.\n8. Colocar el cortacésped sobre concreto y ordenarle retroceder hacia el césped.\n9. Colocar el cortacésped frente a una pared y ordenarle avanzar.\n10. Colocar el cortacésped sobre césped frente a un jardín de flores y ordenarle retroceder.\nDe los siguientes conjuntos de casos de prueba, ¿cuál debería usarse para probar el escenario descrito en la pregunta? (1 punto)",
      options: [
        "1, 3, 6, 8",
        "2, 6, 8, 9",
        "4, 6, 7, 10",
        "1, 4, 6, 10"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Por qué las pruebas por pares (pairwise) son efectivas en sistemas de IA? (1 punto)",
      options: [
        "Porque prueban todas las entradas posibles eficientemente.",
        "Porque replican las interacciones de usuario.",
        "Porque garantizan que se pruebe buena y mala información.",
        "Porque prueban combinaciones de múltiples parámetros eficientemente."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Qué tipo de prueba es efectiva contra envenenamiento de datos en ML operacional? (1 punto)",
      options: [
        "EDA",
        "A/B",
        "ML-check",
        "Pairwise"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál es el propósito del pseudo-oracle en pruebas back-to-back? (1 punto)",
      options: [
        "Probar características no funcionales.",
        "Comparar sus resultados con los del sistema bajo prueba.",
        "Generar datos para entrenamiento continuo.",
        "Crear casos de prueba desde uno previamente aprobado."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál es el proposito de un'tour' en pruebas exploratorias? (1 punto)",
      options: [
        "Un conjunto de estrategias y objetivos para guiar pruebas exploratorias.",
        "Simulación para autos autónomos.",
        "Conjunto de datos de prueba inyectables.",
        "Método de visualización de datos."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Estás probando un sistema de inteligencia artificial que predice el crecimiento anual de una especie particular de árbol. Los datos indican que hay una correlación directa entre la cantidad de lluvia que recibe el árbol y el crecimiento que logra en un año determinado.\n¿Cómo puedes aplicar pruebas metamórficas para este sistema? (1 punto)",
      options: [
        "A partir de un caso de prueba inicial, mantener todas las demás variables constantes, aumentar la cantidad de lluvia y verificar que el crecimiento del árbol sea proporcional.",
        "Para un conjunto de casos de prueba, alterar secuencialmente la proporción de nitrógeno en el suelo y verificar que el árbol reaccione adecuadamente.",
        "Para un conjunto de datos, proporcionar medidas de lluvia válidas e inválidas y verificar si el sistema detecta y rechaza los datos inválidos.",
        "A partir de un conjunto de casos de prueba, determinar los valores absolutos para los factores de crecimiento y lluvia y aplicarlos en las pruebas."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Estás probando un sistema autoaprendizaje utilizado por compañías de seguros para predecir la expectativa de vida en base a un conjunto de variables. Debido a que el sistema está en constante evolución, ha sido muy difícil diseñar pruebas que sean confiables o incluso válidas. El equipo de desarrollo se prepara para lanzar una nueva versión que contiene correcciones de defectos y nuevas funcionalidades. Tienes un conjunto completo de pruebas de regresión que usaste en una versión anterior y deseas aprovecharlo si es posible.\n¿Qué tipo de prueba sería más adecuada para realizar la prueba de regresión en esta nueva versión y por qué funcionaría este enfoque? (1 punto)",
      options: [
        "Pruebas metamórficas; puedes usar las pruebas de regresión existentes para generar un nuevo conjunto. Esto te permitirá evitar analizar los resultados para verificar si son válidos.",
        "Pruebas back-to-back; tienes casos de prueba disponibles y la versión anterior del sistema puede actuar como pseudo-oráculo, aunque aún deberás comparar los resultados para determinar si las variaciones son válidas.",
        "Pruebas A/B; puedes usar entradas válidas e inválidas para determinar cómo responde el sistema y luego comparar esas respuestas con la documentación de requisitos para ver si son correctas.",
        "Pruebas basadas en experiencia; puedes aplicar conjeturas de errores para centrarte en las áreas que probablemente fallen en esta nueva versión. Puedes ampliar las pruebas a áreas menos riesgosas conforme lo permita el tiempo de regresión."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Estás probando un sistema basado en inteligencia artificial que involucra múltiples agencias. ¿Cuál de los siguientes representa un desafío que podrías enfrentar al establecer el entorno de pruebas? (1 punto)",
      options: [
        "Debido a que operará en un entorno peligroso, podría ser potencialmente riesgoso configurar y mantener el entorno.",
        "Necesitarás llevar el sistema a extremos para garantizar que la intervención humana sea posible, pero simular esto será muy costoso y podría destruir partes del entorno durante las pruebas.",
        "El volumen de datos requerido para probar y monitorear el sistema será difícil, si no imposible, de generar.",
        "Para imitar efectivamente la no determinación de los sistemas que se conectan, el entorno debe tener su propio nivel de no determinismo."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Cómo pueden ayudar los modelos de ML a procesar reportes de defectos? (1 punto)",
      options: [
        "Asignar el defecto al desarrollador correcto.",
        "Escribir los pasos para reproducir el defecto.",
        "Detectar errores ortográficos en el reporte.",
        "Adjuntar y verificar capturas de pantalla."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál es uno de los problemas al usar herramientas basadas en IA para generar casos de prueba? (1 punto)",
      options: [
        "No pueden leer los requisitos.",
        "No pueden leer el código.",
        "No pueden determinar el resultado esperado.",
        "No pueden determinar los pasos necesarios para ejecutar la prueba."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Cuando se utiliza una técnica basada en IA para predecir defectos, ¿cuál de las siguientes medidas ha demostrado ser más efectiva? (1 punto)",
      options: [
        "Líneas de código.",
        "Complejidad ciclomática.",
        "Historial del desarrollador.",
        "Análisis por puntos de función."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cómo puede una herramienta basada en IA mejorar la automatización de pruebas de una GUI? (1 punto)",
      options: [
        "No puede. Las herramientas de IA no son adecuadas para probar interfaces gráficas.",
        "Reduciendo la fragilidad del código de automatización.",
        "Ampliando el alcance de las pruebas.",
        "Proporcionando un oráculo de prueba más válido."
      ],
      correctAnswer: 1,
      urlImage: ""
    },

    // inicia examen 2
        {
      "question": "¿Cuál de las siguientes afirmaciones proporciona el MEJOR ejemplo del ‘Efecto IA’?",
      options: [
        "a) Las personas pierden sus empleos ya que los sistemas basados en IA realizan sus funciones más barato y mejor.",
        "b) Los juegos competitivos pierden popularidad porque los sistemas de IA siempre ganan.",
        "c) Los sistemas expertos basados en reglas para diagnóstico médico ya no se consideran IA.",
        "d) La gente cree que la IA dominará el mundo, como se muestra en las películas."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones NO es una tecnología utilizada para implementar IA?",
      options: [
        "a) Máquina de vectores de soporte (SVM)",
        "b) Árbol de decisión",
        "c) Razonamiento evolutivo",
        "d) Optimización bayesiana"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre el hardware para sistemas basados en IA es MÁS probable que sea CORRECTA?",
      options: [
        "a) Los procesadores usados para entrenar un sistema de recomendación móvil deben ser los mismos que los del teléfono.",
        "b) Las unidades de procesamiento gráfico (GPU) son una opción razonable para implementar visión por computadora basada en IA.",
        "c) Los sistemas de aprendizaje profundo deben entrenarse, evaluarse y probarse usando chips específicos para IA.",
        "d) Siempre es mejor elegir procesadores con más bits para lograr precisión suficiente en sistemas de IA."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Hay modelos preentrenados de buena calidad disponibles en el mercado y deseas utilizar uno de ellos para crear un clasificador basado en imágenes. Has decidido preguntar al proveedor del modelo sobre los datos utilizados para entrenarlo y su formato.\n¿Cuál de las siguientes afirmaciones representa MEJOR el riesgo que estás tratando de mitigar al hacer estas preguntas?",
      options: [
        "Precisión deficiente en la clasificación de los modelos preentrenados.",
        "Diferencias entre los datos utilizados para entrenar el modelo y los datos operativos.",
        "Problemas de eficiencia de rendimiento del modelo preentrenado.",
        "Falta de capacidad de explicación del modelo preentrenado en comparación con uno entrenado por ti."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones especifica más probablemente un requisito de autonomía en un sistema basado en IA?",
      options: [
        "a) El sistema mantendrá una distancia segura respecto a otros vehículos hasta que el conductor presione el freno o el acelerador.",
        "b) El sistema aprenderá el estilo preferido de respuesta a correos electrónicos al monitorear remotamente el tráfico de emails.",
        "c) El sistema comparará sus predicciones de precios de casas con los precios reales para determinar si necesita reentrenarse.",
        "d) Será posible modificar el comportamiento del sistema para trabajar con distintos tipos de usuarios en menos de un día."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones sobre sesgo en sistemas basados en IA NO es correcta?",
      options: [
        "a) El sesgo puede surgir si los usuarios de un sistema de recomendaciones de libros hacen elecciones que provocan malas sugerencias.",
        "b) El sesgo puede surgir en un sistema de predicción de edad de fallecimiento si los datos de entrenamiento provienen solo de jubilados.",
        "c) El sesgo puede surgir en un sistema de evaluación crediticia si los datos de entrenamiento provienen solo de personas con tarjeta de crédito.",
        "d) El sesgo puede surgir en un sistema de navegación si el algoritmo de rutas es demasiado complejo para ser explicado a usuarios comunes."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones es MÁS probable que sea un ejemplo de manipulación de recompensa (‘reward hacking’)?",
      options: [
        "a) Una herramienta de asistencia al programador optimiza el código para reducir tiempos de respuesta mientras cumple requisitos funcionales.",
        "b) Un dispositivo de suministro anestésico con el objetivo de mantener estable al paciente durante la cirugía suministra demasiadas dosis y retrasa el despertar.",
        "c) Una organización externa paga a sus programadores de IA según la cantidad de líneas de código que escriben.",
        "d) Una IA diseñada para jugar juegos competitivos contra humanos se enfoca en obtener la puntuación más alta."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Dado los siguientes atributos para un sistema basado en IA:\nI. Probabilístico\nII. Explicable\nIII. Injusto\nIV. No determinista\nV. Determinista\n¿Cuál de las siguientes listas de atributos probablemente causará MÁS dificultades si el sistema se utiliza como parte de un sistema relacionado con la seguridad?",
      options: [
        "a) I, IV",
        "b) II, IV",
        "c) II, III, V",
        "d) I, III, V"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe MEJOR la clasificación y regresión como parte del aprendizaje supervisado?",
      options: [
        "a) La regresión consiste en verificar que los resultados del modelo ML no cambien con los mismos datos de prueba.",
        "b) La clasificación es agrupar datos no etiquetados en clases separadas.",
        "c) La clasificación consiste en etiquetar los datos para entrenar el modelo ML.",
        "d) La regresión consiste en predecir el número de clases que genera el modelo ML."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe MEJOR un ejemplo de aprendizaje por refuerzo?",
      options: [
        "a) Una app de juegos móviles ajusta su retroalimentación y tiempos de respuesta según cuánto gastan los jugadores.",
        "b) Una app de traducción busca texto multilingüe en Internet para mejorar su función de traducción.",
        "c) Un sistema de control de calidad en fábrica identifica objetos defectuosos mediante vídeo y audio basado en observaciones humanas.",
        "d) Un sistema que predice defectos en componentes usa métricas de calidad para identificar los más propensos a fallar."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Te han pedido tu opinión sobre el enfoque de ML que se debe utilizar para un nuevo sistema que forma parte de la gestión del tráfico en una ciudad inteligente (SMART city). La idea es que el nuevo sistema controle los semáforos de la ciudad para asegurar que el tráfico fluya fácilmente dentro y alrededor de la ciudad.\n\n¿Cuál de los siguientes enfoques esperas que tenga MÁS probabilidades de éxito?",
      options: [
        "a. Aprendizaje no supervisado basado en la identificación de agrupamientos en la ciudad donde la densidad de tráfico es superior al promedio.",
        "b. Solución de regresión con aprendizaje supervisado basada en miles de trayectos etiquetados con longitud y duración.",
        "c. Aprendizaje por refuerzo basado en una función de recompensa que penaliza soluciones que generan mayores niveles de congestión.",
        "d. Solución de clasificación con aprendizaje supervisado basada en rutas favoritas enviadas por conductores y pasajeros."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Un ingeniero de ML nota que el modelo es muy preciso con datos de validación pero falla con datos de prueba independientes.\n¿Cuál es la causa MÁS probable?",
      options: [
        "a) Subajuste (underfitting)",
        "b) Deriva de concepto (concept drift)",
        "c) Sobreajuste (overfitting)",
        "d) Criterios de aceptación deficientes"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes es un desafío común al desarrollar y probar soluciones de ML?",
      options: [
        "a) La anonimización de datos requiere conocer varios algoritmos de ML.",
        "b) Los datos pueden estar en formato no estructurado.",
        "c) Gran parte del presupuesto se gasta solo en la preparación de datos.",
        "d) Escalar la canalización de datos es un reto durante el entrenamiento."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "El científico de datos informa que el modelo no se puede entrenar con cierto algoritmo, aunque otros funcionan con los mismos datos.\n¿Cuál es la razón MÁS probable?",
      options: [
        "a) Datos incorrectos",
        "b) Datos faltantes",
        "c) Etiquetado incorrecto",
        "d) Datos insuficientes"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "DataSure es una startup que mejora modelos ML verificando si los datos están etiquetados correctamente.\n¿Qué defecto se previene MÁS probablemente con este producto?",
      options: [
        "a) Vulnerabilidades de seguridad en el modelo",
        "b) Baja precisión",
        "c) El modelo no cumple su función prevista",
        "d) El modelo produce resultados sesgados"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Un ingeniero de ML, ante la falta de datos, rota imágenes etiquetadas para generar más datos de entrenamiento.\n¿Qué enfoque de etiquetado se está utilizando?",
      options: [
        "a) Crowdsourcing",
        "b) Aumento de datos (augmentation)",
        "c) Etiquetado basado en IA",
        "d) Tercerización (outsourcing)"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "La matriz de confusión para un clasificador de imágenes se muestra a continuación:\n¿Cuál opción representa la precisión del clasificador?",
      options: [
        "a) 20/120 * 100",
        "b) 78/120 * 100",
        "c) 78/100 * 100",
        "d) 22/100 * 100"
      ],
      correctAnswer: 2,
      urlImage: "../Example 2/imagenes/matrix preg17.jpeg"
    },
    {
      "question": "ThermalSpace es un proveedor de soluciones que ayuda a las plantas termoeléctricas a optimizar su producción de energía. Su solución se basa en un modelo de aprendizaje automático (ML) creado a partir de datos históricos con salidas claramente etiquetadas. El modelo ayuda a determinar la cantidad de electricidad que debe generarse en un momento determinado del día.\nPara determinar la calidad del modelo utilizando métricas funcionales de rendimiento en ML, ¿cuál de las siguientes métricas es la MÁS probable que se utilice?",
      options: [
        "a) R-cuadrado",
        "b) Precisión",
        "c) Recall",
        "d) Falsos positivos"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "KnowYourPet es una app que determina si una mascota tiene hambre. Según el conjunto de entrenamiento, un perro normalmente no tiene hambre. Diagnosticarlo incorrectamente como hambriento puede provocar sobrealimentación y podría generar problemas serios de salud. ¿Qué métrica deberías usar para evaluar la idoneidad del modelo?",
      options: [
        "a) Exactitud",
        "b) Precisión",
        "c) Exhaustividad (recall)",
        "d) F1-score"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe MEJOR una red neuronal profunda?",
      options: [
        "Está compuesta por una estructura jerárquica de neuronas, donde las neuronas más profundas toman la mayoría de las decisiones.",
        "Está compuesta por neuronas conectadas, donde cada neurona tiene un sesgo asociado y cada conexión tiene un peso asociado.",
        "Está formada por varias capas, donde cada capa (excepto las capas de entrada y salida) está conectada a todas las demás capas y los errores se propagan hacia atrás por la red.",
        "Está compuesta por capas de neuronas, cada una de las cuales genera un valor de activación basado en otras neuronas de la misma capa."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe CORRECTAMENTE una medida de cobertura de prueba para redes neuronales?",
      options: [
        "La cobertura de cambio de valor se basa en que se observe que neuronas individuales afectan la salida general de la red neuronal.",
        "La cobertura de umbral se basa en que las neuronas emitan un valor de activación superior a un valor preestablecido entre cero y uno.",
        "La cobertura de neuronas es una medida de la proporción de neuronas que se activan en algún momento durante las pruebas.",
        "La cobertura de cambio de signo mide la cobertura de neuronas que emiten valores de activación positivos, negativos y cero."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál requisito de un sistema basado en IA causaría MÁS desafíos en pruebas?",
      options: [
        "a) El sistema deberá ser más preciso que el que reemplaza.",
        "b) El componente de IA deberá tener una precisión del 100%.",
        "c) Un operador humano podrá anular el sistema en 1 segundo.",
        "d) El sistema deberá imitar las emociones humanas típicas de un jugador."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "¿Cuál factor relacionado con los datos de prueba puede dificultar las pruebas de sistemas basados en IA?",
      options: [
        "a) Obtener big data con alta velocidad.",
        "b) Obtener datos desde una sola fuente.",
        "c) Obtener datos por separado de los científicos de datos.",
        "d) Obtener datos de sitios web públicos."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Por qué se debe considerar la precisión de las decisiones humanas junto con la precisión de los sistemas de IA?",
      options: [
        "a) Las decisiones humanas intuitivas pueden ser más rápidas en algunas situaciones.",
        "b) Tanto humanos como IA pueden tomar decisiones poco éticas.",
        "c) La precisión humana no es relevante para probar sistemas de IA.",
        "d) Las decisiones humanas pueden ser de menor calidad si fueron recomendadas por IA."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Una solución de cobro de peajes basada en aprendizaje automático (ML) determina el tipo de vehículo entrante a partir de imágenes capturadas por una cámara. Existen diferentes tipos de cámaras disponibles y el proveedor de la solución afirma poder utilizar cámaras con distintas resoluciones. Las imágenes deben estar en formato JPEG con un tamaño de 320x480 píxeles tanto para el entrenamiento como para la predicción. El modelo debe ser capaz de clasificar los tipos de vehículos con un alto nivel de precisión deseado y debe ser probado contra vulnerabilidades. Cada plaza de peaje tendrá su propio sistema completo, sin conexión con otros sistemas.\n¿Cuáles son las opciones de prueba MÁS apropiadas para elegir durante la prueba del sistema?",
      options: [
        "a) Pruebas de deriva de concepto",
        "b) Pruebas adversariales",
        "c) Pruebas de escalabilidad",
        "d) Pruebas de equidad (fairness)",
        "e) Pruebas de canal de datos (pipeline)"
      ],
      correctAnswer: [1, 4],
      urlImage: ""
    },
    {
      "question": "¿Cuál afirmación describe MEJOR un reto específico al probar sistemas autoaprendientes?",
      options: [
        "a) Requiere reentrenamiento regular y, por ende, pruebas regulares.",
        "b) Se lanza regularmente, por lo que se necesita regresión.",
        "c) Cambia de forma que pruebas previamente exitosas pueden fallar.",
        "d) Requiere un operador humano que también debe participar en pruebas."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de los siguientes NO suele ser necesario para probar sesgo en un sistema?",
      options: [
        "a) Incluir usuarios conocidos por tener sesgos.",
        "b) Medir cómo los cambios en los inputs modifican los outputs.",
        "c) Observar correlaciones entre entradas y salidas en producción.",
        "d) Obtener datos adicionales de otras fuentes."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe MEJOR cómo la complejidad del sistema puede crear desafíos al probar un sistema basado en inteligencia artificial?",
      options: [
        "Probar sesgos puede requerir datos que el equipo no tenga disponibles.",
        "La generación manual de pruebas de caja blanca puede ser difícil.",
        "Determinar si un sistema es ético puede ser subjetivo.",
        "Puede ser difícil encontrar datos representativos para entrenar un modelo."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Un sistema basado en inteligencia artificial está siendo utilizado por el Ministerio de Salud para identificar grupos vulnerables de pacientes, quienes recibirán apoyo y asesoramiento para prevenir enfermedades futuras a las que podrían ser susceptibles. Los resultados también se compartirán con otras agencias gubernamentales y compañías de seguros médicos. El sistema se está entrenando inicialmente con un conjunto amplio de datos recopilados por el Ministerio de Salud a partir de dos encuestas: una con 5,000 hombres mayores de 50 años y otra con 25,000 mujeres mayores de 30 años. El sistema seguirá identificando pacientes vulnerables recopilando información de redes sociales públicas.\n¿Cuáles de los siguientes atributos deberían considerarse MÁS cuidadosamente al especificar los objetivos y criterios de aceptación del sistema?",
      options: [
        "Adaptabilidad",
        "Sesgo",
        "Explicabilidad",
        "Flexibilidad",
        "Autonomía"
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Un ingeniero de aprendizaje automático (ML) está intentando encontrar entradas explotables y luego usar esas mismas entradas para volver a entrenar los modelos, haciéndolos inmunes a dichas entradas.\n¿Cuál de las siguientes opciones describe MEJOR el enfoque que está utilizando el ingeniero?",
      options: [
        "Validación",
        "Pruebas adversarias (Adversarial testing)",
        "Pruebas del pipeline de datos",
        "Pruebas de escalabilidad"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Un gerente de pruebas debe seleccionar técnicas para probar software de vehículos autónomos, considerando más de 50 condiciones ambientales y 7 funciones del vehículo.\n¿Cuál técnica de prueba es MÁS probable que se use para probar esta variedad de funciones del vehiculo in diferentes condiciones ambientales?",
      options: [
        "a) Pruebas A/B basadas en parámetros de funciones de vehículo (VF) y condiciones ambientales (EC)",
        "b) Pruebas de combinación de todos los parámetros de VF y EC",
        "c) Pruebas por pares (pairwise) de valores relevantes de VF y EC",
        "d) Pruebas back-to-back con valores relevantes de VF y EC"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Un gerente de pruebas decide construir un sistema no basado en IA con funcionalidad similar al sistema bajo prueba para apoyar las pruebas del sistema.\n¿Cuál afirmación es MÁS probable que sea CORRECTA?",
      options: [
        "a) Ha elegido pruebas back-to-back porque ayudan a resolver el problema del oráculo usando un pseudo-oráculo",
        "b) Ha elegido pruebas A/B porque ayudan a resolver el problema del oráculo usando un pseudo-oráculo",
        "c) Ha elegido pruebas back-to-back porque los requisitos no funcionales pueden verificarse contra el pseudo-oráculo",
        "d) Ha elegido pruebas A/B porque los requisitos no funcionales pueden verificarse contra el pseudo-oráculo"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": `Un sistema de búsqueda de teléfonos móviles basado en inteligencia artificial proporciona una lista de dispositivos que considera más adecuados para el usuario, en función de su conocimiento sobre el uso previo del teléfono por parte del usuario y de las preferencias especificadas.\n
                Dado que se está utilizando pruebas metamórficas con el siguiente caso de prueba base (Tabla 1), y los siguientes datos de prueba para dos casos de seguimiento correspondientes(Tabla 2):`,
      options: [
        "a) T1: SnapHappy_X1, SnapHappy_M2 | T2: ClickNow_1000x, ClickNow_1000xs",
        "b) T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000xs | T2: SnapHappy_X1, ClickNow_1000x",
        "c) T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs | T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3",
        "d) T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs | T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs"
      ],
      correctAnswer: 1,
      urlImages: ["../Example 2/imagenes/tabla preg33.png", "../Example 2/imagenes/tabla preg33-2.png"]
    },
    {
      "question": "Se está planificando la prueba del sistema de IA. Se sugiere usar pruebas exploratorias además de técnicas con guion. ¿Cuál escenario es el MÁS probable que represente pruebas exploratorias?",
      options: [
        "a) Los datos de entrenamiento se visualizan con herramientas para inspección",
        "b) Se ejecutan pruebas escritas con partición de equivalencia del ciclo anterior",
        "c) Se utiliza la lista de verificación ML de Google",
        "d) Se calculan métricas de rendimiento funcional del ML"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "LAIgal Systems tiene un producto basado en IA que extrae sentencias favorables relevantes similares a un caso legal dado. Este producto es utilizado por jueces en los tribunales. Se proporcionan los detalles del caso actual, y el sistema produce sentencias relevantes. El sistema debe estar protegido contra entradas maliciosas. Existe un producto de código abierto similar y disponible. La ausencia de un oráculo de prueba adecuado representa un desafío durante las pruebas del sistema.\n\n¿Cuáles de las siguientes técnicas de prueba deberían seleccionarse para evaluar la nueva versión durante las pruebas del sistema?",
      options: [
        "a) Pruebas A/B",
        "b) Pruebas back-to-back",
        "c) Pruebas adversariales",
        "d) Pruebas de transición de estados",
        "e) Cálculo de métricas de rendimiento funcional ML"
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones representa una diferencia entre un entorno de prueba para sistemas basados en IA y uno para sistemas convencionales?",
      options: [
        "a) Los entornos de prueba de IA pueden requerir mecanismos para entender decisiones específicas",
        "b) Los entornos de prueba de IA necesitan simuladores y entornos virtuales, los convencionales no",
        "c) Los entornos de prueba de IA requieren grandes volúmenes de datos, los convencionales no",
        "d) Los entornos de prueba de IA necesitan GPUs, los convencionales no"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "¿En cuál de las siguientes situaciones sería MÁS útil la IA para categorizar nuevos defectos?",
      options: [
        "a) Se requiere categorizar una pequeña cantidad de defectos en una nueva aplicación.",
        "b) Se reporta una gran cantidad de defectos en una aplicación pequeña.",
        "c) Los informes de defectos suelen contener datos mínimos.",
        "d) Un nuevo equipo de desarrollo necesita saber qué desarrollador es el más apropiado para corregir el defecto."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones es MÁS probable que una herramienta basada en IA utilice como base para generar casos de prueba funcionales?",
      options: [
        "a) Un esquema de prueba (test charter).",
        "b) Una imagen del sistema representada en un diagrama de flujo.",
        "c) Registros del servidor web.",
        "d) Informes de fallos (crash reports)."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe CORRECTAMENTE cómo una herramienta basada en IA puede optimizar suites de pruebas de regresión?",
      options: [
        "a) Analizando resultados de falsos positivos.",
        "b) Analizando información de actividades de prueba anteriores.",
        "c) Usando algoritmos genéticos para crear nuevos casos de prueba.",
        "d) Actualizando los resultados esperados para contrarrestar la deriva de concepto."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "¿Cuál de las siguientes opciones describe CORRECTAMENTE cómo una herramienta basada en IA puede realizar predicción de defectos?",
      options: [
        "a) Usando lenguaje natural para preguntar a los desarrolladores dónde creen que ocurrirán los defectos.",
        "b) Analizando las causas de los defectos reportados en una base de código similar.",
        "c) Analizando defectos que resultaron ser falsos positivos.",
        "d) Escaneando el código para identificar defectos mediante reglas."
      ],
      correctAnswer: 1,
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
    "nameQuiz": "AI Testing Example 1"
  }
}
window.data_es = data_es;
