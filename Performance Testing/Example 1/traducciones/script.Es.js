const data_es = {
  questions: [
    {
      "question": "¿Cuál de los siguientes es un principio importante de las pruebas de rendimiento respecto a los resultados?",
      options: [
        "Los resultados deben ser idénticos a los que se devuelven cuando se ejecutan las mismas pruebas en el entorno de producción",
        "Los resultados deben demostrar que el sistema cumple o supera las expectativas del usuario",
        "Los resultados deben estar en una forma que permita la comparación con las expectativas de los usuarios",
        "Los resultados deben ser reportados a través de un panel para uso de la alta dirección"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿En qué se diferencia la prueba de carga de la prueba de estrés?",
      options: [
        "La prueba de carga se concentra en la carga más alta esperada, mientras que la prueba de estrés se concentra en mantener una carga alta durante un período de tiempo",
        "La prueba de carga se concentra en aumentos y disminuciones rápidas de carga, mientras que la prueba de estrés se concentra en mantener una carga alta durante un período de tiempo",
        "La prueba de carga y la prueba de estrés son en realidad lo mismo",
        "La prueba de carga se concentra en niveles crecientes de carga realista, mientras que la prueba de estrés se enfoca en cargas que están en o más allá de la carga máxima esperada"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Si se están realizando pruebas de rendimiento para determinar que un sistema bajo carga puede aumentar su capacidad a medida que se le asigna más memoria, ¿qué tipo de prueba se está realizando?",
      options: [
        "Prueba de carga",
        "Prueba de estrés",
        "Prueba de escalabilidad",
        "Prueba de picos"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una actividad estática importante en las pruebas de rendimiento?",
      options: [
        "Revisar los informes de defectos de usabilidad pendientes",
        "Revisar la arquitectura del sistema",
        "Revisar los requisitos de seguridad para el sistema",
        "Revisar los requisitos funcionales"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Por qué es importante una interfaz de usuario estable cuando la carga se generará desde esa interfaz?",
      options: [
        "Porque los cambios en la interfaz pueden requerir cambios en los scripts de rendimiento",
        "Porque los defectos en la interfaz causarán degradación del rendimiento",
        "Porque las API utilizadas por la interfaz tendrán que ser cambiadas",
        "Porque la experiencia completa del usuario no se puede determinar hasta que la interfaz esté estable"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es una causa probable de que un sistema responda lentamente solo bajo una carga pesada?",
      options: [
        "Un problema de latencia de red que debería haber sido visible durante las pruebas funcionales",
        "Una fuga de memoria lenta",
        "Falta de indexación en una tabla de base de datos",
        "Una saturación o agotamiento de un recurso del sistema"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Si estás midiendo el tiempo que tarda un sistema en restaurarse desde una copia de seguridad, ¿qué tipo de entorno estás considerando?",
      options: [
        "Técnico",
        "Negocios",
        "Operacional",
        "Virtual"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una ventaja de agregar resultados de pruebas?",
      options: [
        "Es más fácil ver el rendimiento general de un sistema",
        "Es más fácil ver el rendimiento específico de una prueba específica",
        "Es más fácil entender la duración y frecuencia de cualquier período lento",
        "Es más fácil capturar las anomalías de tiempo de aumento y disminución"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Durante o después de una prueba de rendimiento, ¿qué tipo de información deberías verificar en los registros del servidor?",
      options: [
        "Número de usuarios concurrentes en el sistema en un momento particular",
        "Un gráfico del rendimiento del sistema durante la prueba",
        "Defectos que fueron reportados durante la prueba",
        "Errores de memoria y errores de base de datos que ocurrieron durante la prueba"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Si estás probando para entender cuántos usuarios pueden usar un sitio al mismo tiempo, ¿qué resultado de prueba es particularmente interesante para ti?",
      options: [
        "Rendimiento de datos",
        "Eficiencia del proceso de negocio",
        "Concurrencia de uso",
        "Tiempo de uso"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Por qué son tan importantes las buenas medidas de monitoreo y control de pruebas en las pruebas de rendimiento?",
      options: [
        "Porque las pruebas pueden retrasarse y se pueden requerir más testers para completar el trabajo",
        "Porque los cambios en el entorno pueden invalidar los resultados de las pruebas, por lo que estar al tanto de estos cambios es crítico",
        "Porque es difícil definir los requisitos de rendimiento de manera medible",
        "Porque el diseño de pruebas a menudo requiere construir pruebas modulares que luego pueden combinarse en suites más grandes para su ejecución"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Con qué frecuencia se deben realizar pruebas de rendimiento?",
      options: [
        "Una vez, después de que se haya completado la prueba del sistema",
        "Múltiples veces, después de que se haya completado la prueba del sistema",
        "Dos veces para cada nivel de prueba",
        "Múltiples veces, en todos los niveles de prueba"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es el riesgo de rendimiento más probable para un sistema distribuido?",
      options: [
        "Problemas con flujos de trabajo críticos o flujos de datos hacia o desde servidores remotos",
        "Problemas con carga excesiva en el hardware debido a una configuración inadecuada de la máquina virtual anfitriona",
        "Problemas con la conexión de red en el punto de conexión del cliente",
        "Problemas con nuevo tráfico a través de APIs que sobrecargan aplicaciones establecidas"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es el riesgo de rendimiento más probable para un sistema cliente-servidor?",
      options: [
        "Problemas con flujos de trabajo críticos o flujos de datos hacia o desde servidores remotos",
        "Problemas con carga excesiva en el hardware debido a una configuración inadecuada de la máquina virtual anfitriona",
        "Problemas con la conexión de red en el punto de conexión del cliente",
        "Problemas con nuevo tráfico a través de APIs que sobrecargan aplicaciones establecidas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de los siguientes es el riesgo de rendimiento más probable para un sistema virtualizado?",
      options: [
        "Problemas con flujos de trabajo críticos o flujos de datos hacia o desde servidores remotos",
        "Problemas con carga excesiva en el hardware debido a una configuración inadecuada de la máquina virtual anfitriona",
        "Problemas con la conexión de red en el punto de conexión del cliente",
        "Problemas con nuevo tráfico a través de APIs que sobrecargan aplicaciones establecidas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Estás trabajando para una empresa que ha desarrollado un software que se utilizará en los eventos de esquí olímpico para rastrear y publicar tiempos. Este software tomará datos de varios sensores para determinar los tiempos de inicio y finalización de cada corredor individual mientras compiten uno a la vez. También permitirá a los jueces ingresar un estado de descalificación para un esquiador individual en cualquier momento durante su carrera y dentro de los 5 minutos posteriores al final de su carrera. La información se enviará a través de una API al software que controlará el tablero de visualización en el evento y a la interfaz utilizada por las comunidades de transmisión. Tu empresa también ha desarrollado una aplicación móvil que estará disponible para descarga gratuita para cualquier persona en el mundo que desee recibir resultados “en tiempo real” de los eventos. Las pruebas para la aplicación móvil se realizarán en la nube utilizando simuladores de dispositivos. Los interesados técnicos en el proyecto están disponibles para una sesión de análisis de riesgos de rendimiento de un día. De los riesgos en este producto, ¿cuál es el mejor analizado por estos interesados?",
      options: [
        "El tiempo que se requerirá para obtener la información de los sensores en la aplicación",
        "El tiempo que se requerirá para comunicarse a través de la API al tablero de visualización",
        "El tiempo que se requerirá para que un juez ingrese un estado de descalificación",
        "El tiempo que se requerirá para que los datos estén disponibles en las aplicaciones móviles"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Has determinado que probar la aplicación móvil requerirá un recurso en la nube costoso que suministrará dispositivos simulados y reales. Configurar esto no será un gran esfuerzo, pero se te cobrará por cada minuto de uso, así como por cada dispositivo (simulado o real) que se utilice. Tu metodología de ciclo de vida de desarrollo es ágil. Dada esta información, ¿cuál es el mejor momento para realizar la prueba de rendimiento completa para la aplicación móvil?",
      options: [
        "Como parte de CI/CD, para cada compilación",
        "Como parte de cada iteración, hacia el final de la iteración",
        "Como parte de una iteración separada que ocurrirá cuando el software esté funcionalmente estable",
        "Como parte de las pruebas finales de lanzamiento, después de que las pruebas de regresión se hayan completado con éxito"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Los datos esperados que se verán en los dispositivos móviles son:\n • Resultados que se muestran automáticamente cuando cada corredor completa su carrera\n  • Resultados finales que se muestran automáticamente cuando se completa la carrera\n  • Resumen de todos los corredores que fueron descalificados\n  • Tablero de clasificación que muestra a los cinco mejores corredores – actualizado cuando cada corredor completa su carrera.\n  El tiempo aceptable (90% de las transacciones) para que se reciban los resultados automáticos es de 3 segundos. Para la información que se consulta (resumen y tablero de clasificación), el tiempo de respuesta aceptable (para el 90% de las transacciones) es de 5 segundos. ¿Qué información adicional necesitas para derivar los objetivos de la prueba de rendimiento?",
      options: [
        "Una descripción de los dispositivos que se utilizarán",
        "Una descripción del manejo que ocurrirá cuando se pierda la conectividad",
        "Una lista de los recursos del sistema que deben ser rastreados y el uso esperado de esos recursos",
        "Una lista de todas las demás aplicaciones que se espera que estén en ejecución en los dispositivos de destino durante las pruebas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Te han pedido que prepares un plan de prueba de rendimiento. Dada la información del proyecto que se ha suministrado, ¿qué tipo de prueba de rendimiento será la más importante para este proyecto?",
      options: [
        "Prueba de picos",
        "Prueba de estrés",
        "Prueba de resistencia",
        "Prueba de escalabilidad"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Escenario Base:  Has ejecutado un ciclo de pruebas de rendimiento. Has acumulado las siguientes métricas:\n  Usuarios virtuales = 100,000;\n  Usuarios virtuales que completan con éxito todas las transacciones = 97%;\n  Tiempo de transacción para resultados que se muestran automáticamente cuando cada corredor completa su carrera:\n  Promedio = 2 segundos, 90% = 3 segundos, 95% = 5 segundos;\n  Tiempo de transacción para resultados finales que se muestran automáticamente cuando se completa la carrera:\n  Promedio = 1 segundo, 90% = 3 segundos, 95% = 4 segundos;\n  Tiempo de transacción para el resumen de todos los corredores que fueron descalificados:\n  Promedio = 6 segundos, 90% = 7 segundos, 95% = 8 segundos;\n  Tiempo de transacción para el tablero de clasificación que muestra a los cinco mejores corredores:\n  Promedio = 4 segundos, 90% = 5 segundos, 95% = 9 segundos.\n  El tiempo aceptable (90% de las transacciones) para que se reciban los resultados automáticos es de 3 segundos. Para la información que se consulta (resumen y tablero de clasificación), el tiempo de respuesta aceptable (para el 90% de las transacciones) es de 5 segundos.\n  Para esta información, has creado el siguiente informe: ¿Para qué grupo de interesados sería más apropiado este informe?",
      options: [
        "Interesados con un enfoque empresarial",
        "Interesados con un enfoque tecnológico",
        "Futuros usuarios del producto",
        "Competidores"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: "./imagenes/tabla preg20.png"
    },
    {
      "question": "Considerando el escenario anterior y desestimando los tiempos de rendimiento, ¿qué información sería más interesante para los interesados técnicos?",
      options: [
        "Cómo se crearon los usuarios virtuales",
        "Los tiempos de aumento y disminución necesarios para todos los usuarios",
        "Qué causó que el 3% de las transacciones no se completaran",
        "Qué entorno se utilizó para las pruebas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "En las capas del modelo OSI, ¿cuáles son las capas más comúnmente accedidas para pruebas de rendimiento?",
      options: [
        "Capas 1 – 3",
        "Capas 3 – 5",
        "Capas 5 – 7",
        "Capas 7 – 9"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Si estás realizando pruebas de rendimiento con un énfasis particular en el acceso a la base de datos, ¿qué protocolo es probable que estés utilizando para las pruebas?",
      options: [
        "HTTP",
        "ODBC",
        "REST",
        "HTML"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Escenario Base: ¿Cuál de los siguientes es un ejemplo de una transacción?",
      options: [
        "Solicitar una lista de clasificación actual",
        "Recibir y ver los resultados de un esquiador individual",
        "Ingresar una solicitud de descalificación",
        "Imprimir la clasificación final de una carrera en particular"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Por qué es importante incluir el tiempo de reflexión al crear scripts de prueba de rendimiento?",
      options: [
        "Porque el sistema necesita tiempo para aumentar y disminuir",
        "Porque los usuarios tienden a pausar durante las transacciones para leer pantallas, absorber información o navegar",
        "Porque los testers de rendimiento deben incluir cuidadosamente cada paso que un usuario seguirá, lo que requiere que 'piensen' mientras scriptan",
        "Porque los sistemas no pueden mantenerse al día con las transacciones que se reciben de múltiples scripts"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Has identificado tres perfiles operativos para el producto:\n  1. El usuario móvil que verifica los resultados de cada carrera en su teléfono\n  2. El juez que ingresa información sobre el estado de descalificación durante y inmediatamente después de una carrera\n  3. Las empresas de transmisión que acceden a los datos a través de la API.\n  ¿Qué perfil operativo te falta?",
      options: [
        "El esquiador",
        "La audiencia que está viendo el tablero de visualización con las puntuaciones",
        "El tablero de visualización en sí",
        "Usuarios móviles que están en la carrera y están verificando los resultados de cada carrera en su teléfono"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Has identificado que esperas tener una carga de 100,000 usuarios para una carrera de alto interés y 20,000 usuarios para una carrera de bajo interés. Hay 5,000 usuarios que parecen estar siempre conectados, incluso cuando no está sucediendo nada. Las carreras de alto interés son las semifinales y finales de cualquier concurso particular. Una carrera normalmente dura 5 minutos y generalmente hay 8 corredores en las semifinales y 4 corredores en las finales. Una carrera de bajo interés es cualquiera de las primeras 30 carreras que determinan quién estará en las semifinales. ¿Cuál de los siguientes es un diagrama correcto del perfil de carga adecuado para un concurso (el eje x muestra hh:mm y el eje y muestra el número de usuarios)?",
      options: [
        "Gráfico 1",
        "Gráfico 2",
        "Gráfico 3",
        "Gráfico 4"
      ],
      correctAnswer: 0, // La opción correcta es la a
      urlImage: ["./imagenes/grafic1 preg27.png", "./imagenes/grafic2 preg27.png"]
    },
    {
      "question": "En el escenario anterior, para un concurso dado con 30 corredores, ¿cuál es el rendimiento esperado para la visualización de resultados automáticos para un teléfono?",
      options: [
        "30",
        "43",
        "20,000",
        "100,000"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Por qué es importante tener una sección de limpieza en un script de prueba de rendimiento?",
      options: [
        "Para asegurar que se recopilen datos para el informe de tiempo de respuesta",
        "Para asegurar que se registren errores y se resuelvan problemas de datos",
        "Para asegurar que el sistema se restablezca a un punto en el que el script pueda ejecutarse nuevamente",
        "Para asegurar que el operador sea informado de que la prueba ha sido completada"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una buena práctica al agregar lógica de verificación a un script?",
      options: [
        "Intentar agregar datos que ya han sido añadidos",
        "Intentar eliminar datos que ya han sido eliminados",
        "Verificar que las transacciones se han completado consultando la base de datos para ver si los datos se cambiaron correctamente",
        "Verificar que no se han registrado errores por el script y que no se han registrado errores en los registros del sistema"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Has identificado que esperas tener una carga de 100,000 usuarios para una carrera de alto interés y 20,000 usuarios para una carrera de bajo interés. Hay 5,000 usuarios que parecen estar siempre conectados, incluso cuando no está sucediendo nada. Has estado considerando la compra de una herramienta de prueba de carga, pero has encontrado que las licencias para usuarios virtuales son muy caras. ¿Cuál es el número mínimo de usuarios virtuales que necesitarás para realizar una prueba de carga para esta aplicación?",
      options: [
        "5,000 ya que esa es la carga base",
        "10,000 y extrapolar los resultados a 100,000",
        "20,000 con todo el tiempo de reflexión eliminado",
        "100,000 cada uno creando el rendimiento esperado"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Los jueces deben iniciar sesión con un nombre de usuario y una contraseña antes de que se les permita ingresar cualquier descalificación. Un juez normalmente inicia sesión una vez por carrera y puede ingresar varias descalificaciones durante esa carrera. ¿Cómo será necesaria la correlación al crear los scripts de rendimiento para las interacciones de los jueces?",
      options: [
        "Será necesaria para asegurar que la información de sesión del juez se registre con sus entradas de descalificación",
        "Será necesaria para asegurar que la descalificación se registre contra el esquiador correcto",
        "Será necesaria para cronometrar una descalificación correctamente durante la carrera para asegurar que esté dentro del límite de tiempo de 5 minutos",
        "Será necesaria para asegurar que los resultados registren correctamente la información del juez"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el mejor entorno para usar en pruebas de rendimiento?",
      options: [
        "El entorno de producción",
        "Una réplica completa del entorno de producción",
        "El entorno de sandbox",
        "El entorno de desarrollo"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuándo sería apropiado usar la virtualización de servicios?",
      options: [
        "Cuando un servicio web reside en una máquina virtual",
        "Cuando se utiliza la nube para pruebas",
        "Cuando la herramienta de prueba de rendimiento es un SaaS",
        "Cuando el servicio que se va a utilizar no está disponible"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Qué se debe hacer inmediatamente después de que se complete el aumento de carga para una prueba de rendimiento?",
      options: [
        "Iniciar el aumento de carga de usuarios virtuales",
        "Iniciar la disminución de carga",
        "Esperar hasta que el sistema haya alcanzado un estado estable, luego iniciar el aumento",
        "Traer la carga completa de usuarios virtuales"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Deben realizarse pruebas manuales durante las pruebas de rendimiento?",
      options: [
        "Sí, esto ayudará a verificar que el rendimiento registrado por la herramienta es preciso",
        "Sí, esto ayudará a verificar que no hay problemas funcionales ocurriendo",
        "No, esto probablemente interferirá con las métricas que están siendo recopiladas por las herramientas de prueba de rendimiento",
        "No, esto puede dar una falsa impresión a los usuarios sobre el rendimiento que experimentarán con el producto lanzado"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Escenario Base: Has ejecutado un ciclo de pruebas de rendimiento. Has acumulado las siguientes métricas:\n  Usuarios virtuales = 100,000;\n  Usuarios virtuales que completan con éxito todas las transacciones = 97%;\n  Tiempo de transacción para resultados que se muestran automáticamente cuando cada corredor completa su carrera:\n  Promedio = 2 segundos, 90% = 3 segundos, 95% = 5 segundos;\n  Tiempo de transacción para resultados que se muestran automáticamente cuando se completa la carrera:\n  Promedio = 1 segundo, 90% = 3 segundos, 95% = 4 segundos;\n  Tiempo de transacción para el resumen de todos los corredores que fueron descalificados:\n  Promedio = 6 segundos, 90% = 7 segundos, 95% = 8 segundos;\n  Tiempo de transacción para el tablero de clasificación que muestra a los cinco mejores corredores:\n  Promedio = 4 segundos, 90% = 5 segundos, 95% = 9 segundos.\n  El tiempo aceptable (para el 90% de las transacciones) para que se reciban los resultados automáticos es de 3 segundos. Para la información que se consulta (resumen y tablero de clasificación), el tiempo de respuesta aceptable (para el 90% de las transacciones) es de 5 segundos. Dada esta información, ¿qué escenarios requerirán ajuste del sistema y pruebas adicionales?",
      options: [
        "Todos ellos porque estos resultados son solo para una ejecución",
        "Las visualizaciones automáticas porque sus números del 95% son demasiado lentos",
        "El resumen de descalificaciones porque todos los tiempos son demasiado lentos",
        "El tablero de clasificación porque esta es una parte crítica del sistema y los números del 95% son demasiado lentos"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál es la base para los scripts ejecutados por un generador de carga para simular el comportamiento del usuario?",
      options: [
        "El número esperado de usuarios virtuales",
        "Los perfiles operativos definidos",
        "Los perfiles de carga definidos",
        "El tiempo de respuesta del sistema esperado"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál es una función de la consola de gestión de carga de una herramienta de prueba de rendimiento?",
      options: [
        "Gestionar las actividades de los usuarios virtuales",
        "Proporcionar datos en bruto para la alta dirección",
        "Iniciar y detener las pruebas",
        "Manejar la recuperación de errores para un script de prueba"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Escenario Base: ¿Es adecuado usar simuladores en la nube para todas las pruebas de rendimiento?",
      options: [
        "Sí, los simuladores serán rentables y lo suficientemente precisos para estas pruebas",
        "No, se necesitarán emuladores para todas las transacciones para asegurar que la información se muestre correctamente",
        "No, los simuladores en la nube se pueden usar para las pruebas de teléfonos, pero se necesitarán emuladores o el dispositivo real para probar la comunicación con el tablero de visualización",
        "No, las pruebas deben realizarse en dispositivos reales para verificar la usabilidad así como el rendimiento"
      ],
      correctAnswer: 2, // La opción correcta es la c)
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
    "errorLoading": "Error al cargar el cuestionario. Por favor, intenta de nuevo más tarde.",
    "nameQuiz": "Performance Testing - Example 1"
  }
}
window.data_es = data_es;
