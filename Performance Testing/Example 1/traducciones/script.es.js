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
    },


    // inica examen 2
    {
      "question": "¿Cuál de los siguientes es un principio importante en las pruebas de rendimiento?",
      options: [
        "Las pruebas deben ser fáciles de crear y entender",
        "Los resultados de las pruebas deben ser reproducibles cuando el sistema bajo prueba no cambia",
        "Las pruebas deben ejecutarse en el entorno de producción para proporcionar los resultados más precisos",
        "Los resultados de las pruebas deben coincidir con las expectativas de los interesados sobre el rendimiento del sistema"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es la mejor descripción de las pruebas de picos?",
      options: [
        "Se centra en la capacidad del sistema para manejar cargas que se incrementan gradualmente hasta alcanzar el máximo esperado",
        "Se centra en la capacidad del sistema para manejar cargas que están en o más allá de la carga máxima esperada",
        "Se centra en la capacidad del sistema para cumplir con los requisitos de eficiencia futuros",
        "Se centra en la capacidad del sistema para responder a cambios rápidos y extremos en la carga"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es la mejor descripción de las pruebas de carga?",
      options: [
        "Se centra en la capacidad del sistema para manejar cargas que se incrementan gradualmente hasta alcanzar el máximo esperado",
        "Se centra en la capacidad del sistema para manejar cargas que están en o más allá de la carga máxima esperada",
        "Se centra en la capacidad del sistema para cumplir con los requisitos de eficiencia futuros",
        "Se centra en la capacidad del sistema para responder a cambios rápidos y extremos en la carga"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes actividades de pruebas de rendimiento debería ocurrir durante las pruebas unitarias?",
      options: [
        "Probar el comportamiento de extremo a extremo bajo varias condiciones de carga",
        "Probar los flujos de datos y los flujos de trabajo a través de las interfaces",
        "Probar los casos de uso clave y los flujos de trabajo utilizando un enfoque de arriba hacia abajo",
        "Probar para evaluar la utilización de recursos y los posibles cuellos de botella"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuándo es apropiado generar carga a través de las API de la aplicación?",
      options: [
        "Cuando hay un gran número de testers disponibles que pueden representar a los usuarios reales",
        "Cuando las pruebas deben realizarse a nivel de protocolo de comunicación",
        "Cuando es probable que la interfaz de usuario cambie, pero las transacciones deben procesarse como si se hubieran creado a través de la interfaz de usuario",
        "Cuando solo hay disponibles pequeñas cantidades de instancias de prueba"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Si tienes una aplicación que tiene una fuga de memoria, ¿cuál es el resultado probable que verás durante las pruebas de rendimiento?",
      options: [
        "El tiempo de respuesta será consistentemente lento",
        "El tiempo de respuesta se mantendrá aceptable, pero el manejo de errores se degradará",
        "El tiempo de respuesta será lento, pero solo bajo cargas pesadas",
        "El tiempo de respuesta se degradará con el tiempo"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una afirmación verdadera respecto al seguimiento de métricas para la latencia de red durante una prueba de rendimiento?",
      options: [
        "Una alta latencia podría indicar un problema de ancho de banda de red que podría impactar negativamente en el rendimiento",
        "Una baja latencia podría indicar un problema de ancho de banda de red que podría impactar negativamente en el rendimiento",
        "La latencia de red es difícil de rastrear y no debería incluirse en las métricas de rendimiento",
        "La latencia de red es demasiado variable para ser útil durante la optimización del rendimiento"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Deben agregarse los resultados de las pruebas de rendimiento?",
      options: [
        "Sí, esto proporciona una mejor visión general del rendimiento del sistema y ayuda a identificar tendencias",
        "Sí, esta es la mejor manera de centrarse en los valores atípicos en las métricas de rendimiento",
        "No, los resultados deben analizarse individualmente para que se comprendan todas las variaciones",
        "No, los resultados de cada prueba deben informarse y rastrearse por separado"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿De qué manera son útiles las herramientas de análisis de registros para recopilar métricas?",
      options: [
        "Monitorean los sistemas mientras se realizan las pruebas de rendimiento e informan sobre el comportamiento durante las pruebas",
        "Crean la carga del sistema y monitorean el rendimiento del sistema",
        "Escanean los diversos registros del servidor y compilan métricas para las ocurrencias que se registraron durante la ejecución de la prueba",
        "Escriben los resultados de rendimiento en los registros del servidor para un análisis manual posterior"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál de las siguientes es una falla que típicamente se encontraría al realizar una prueba de picos?",
      options: [
        "El rendimiento del sistema se degrada gradualmente",
        "El sistema proporciona respuestas inconsistentes a los errores",
        "El sistema maneja un repentino aumento de actividad, pero no puede reanudar un estado estable",
        "El sistema funciona bien para la carga esperada, pero no puede escalar a una carga mayor"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Al aplicar las actividades principales de pruebas de rendimiento, ¿cuándo debe ocurrir la identificación y análisis de riesgos?",
      options: [
        "Planificación de pruebas",
        "Análisis de pruebas y diseño de pruebas",
        "Implementación de pruebas y ejecución de pruebas",
        "Finalización de pruebas"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Al aplicar las actividades principales de pruebas de rendimiento, ¿cuándo deben ordenarse los casos de prueba en procedimientos de prueba de rendimiento?",
      options: [
        "Planificación de pruebas",
        "Análisis de pruebas",
        "Implementación de pruebas",
        "Finalización de pruebas"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": `¿Cuál de estos es más probable que tenga un riesgo de rendimiento debido a problemas de conectividad?\n
    
      1. Sistemas de computadora únicos
      2. Sistemas de múltiples niveles
      3. Sistemas distribuidos
      4. Sistemas virtualizados
      5. Sistemas dinámicos/basados en la nube
      6. Sistemas cliente-servidor
      7. Aplicaciones móviles
      8. Sistemas embebidos en tiempo real
      9. Aplicaciones de mainframe`,
      options: [
        "2, 3 ",
        "6, 7, 8 ",
        "5, 6, 7, 9 ",
        "2, 4, 5, 8 "
      ],
      correctAnswer: 1, // La opción correcta es la b) (6, 7, 8)
      urlImage: " "
    },
    {
      "question": `¿Cuál de estos es más probable que tenga un riesgo de rendimiento debido a fugas de memoria?\n
    
      Sistemas virtualizados
      Sistemas dinámicos/basados en la nube
      Sistemas cliente-servidor
      Aplicaciones móviles
      Sistemas embebidos en tiempo real
      Aplicaciones de mainframe`,
      options: [
        "1, 2, 3, 6 ",
        "2, 3, 4, 5 ",
        "1, 2, 4, 6 ",
        "1, 3, 4, 5 "
      ],
      correctAnswer: 3, // La opción correcta es la d) (1, 2, 4, 6)
      urlImage: " "
    },
    {
      "question": "Si se están realizando pruebas de rendimiento para un software escrito en C++, ¿qué necesitas monitorear que no sería una preocupación si el software estuviera escrito en Python?",
      options: [
        "Uso de memoria",
        "Latencia de red",
        "Conectividad",
        "Procesamiento por lotes"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Dada esta información, ¿cuándo es el mejor momento en el proyecto para analizar y evaluar los riesgos de rendimiento?",
      options: [
        "Durante la fase de requisitos y nuevamente justo antes de ejecutar las pruebas de rendimiento",
        "Después del diseño pero antes de la codificación",
        "Durante las pruebas del sistema y nuevamente antes de las pruebas de rendimiento",
        "Repetidamente a lo largo de los requisitos, desarrollo y pruebas de rendimiento"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. ¿Cuál es la mejor manera de abordar las pruebas de rendimiento para el tiempo de respuesta?",
      options: [
        "Probar desde la interfaz de usuario con el conjunto de datos completo cargado para asegurar que el tiempo de respuesta será adecuado cuando la base de datos esté cargada",
        "Probar a través de los servicios web a nivel de API para asegurar que el acceso a los datos sea lo suficientemente rápido sin complicar la prueba con la interfaz de usuario",
        "Realizar una revisión técnica de la implementación de la base de datos y realizar una prueba de rendimiento desde la interfaz de usuario con la base de datos completa cargada",
        "Realizar una evaluación de la red para asegurar que no hay problemas de latencia entre el servidor de la base de datos y los servidores web, luego probar con un escáner de red para asegurar que no ocurren colisiones que puedan causar retrasos en el rendimiento"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. ¿Cuál de los siguientes es un objetivo técnico de rendimiento que podría ser aplicable a este proyecto?",
      options: [
        "El tiempo de respuesta debe estar dentro de tres segundos desde el momento en que se envía la solicitud cuando hay 100 usuarios concurrentes haciendo solicitudes similares",
        "El sistema debe ser capaz de escalar a 10 millones de registros de pacientes sin degradación en el rendimiento",
        "El sistema debe funcionar al mismo nivel o por encima del nivel del sistema legado al manejar una carga similar y responder a una solicitud similar",
        "El tiempo de respuesta debe permanecer igual cuando se utiliza el sistema de recuperación ante desastres en lugar del sistema primario y el cambio no debe causar tiempo de inactividad discernible"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que escribas un plan de prueba de rendimiento para este proyecto. Para abordar el objetivo de rendimiento más crítico, ¿qué información necesitas?",
      options: [
        "Quién puede acceder a qué datos y con qué frecuencia lo hará",
        "Cómo se autentica y autoriza el acceso del usuario",
        "Dónde se almacenarán los datos y cuánto almacenamiento está disponible",
        "Cuál es el uso esperado de los datos después de que se han presentado al usuario"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que prepares una presentación para los interesados del negocio sobre tu plan para las pruebas de rendimiento. ¿Cuál de los siguientes es un conjunto de información que debería compartirse con estos interesados?",
      options: [
        "Una vez configurado, el sistema de prueba de rendimiento requerirá carga de datos. Una vez cargados, procederemos a ejecutar un pequeño conjunto de scripts de muestra para verificar la salida. Cuando esos tengan éxito, procederemos con el script de prueba de rendimiento que aumentará los usuarios a una tasa de 10 por minuto hasta alcanzar el número objetivo de usuarios concurrentes. Esta carga se mantendrá durante 2 horas.",
        "El sistema de prueba de rendimiento costará $240,000, lo que incluirá el hardware y la configuración. Este sistema nos permitirá crear un sistema de prueba que sea representativo del sistema de producción y nos permitirá simular condiciones similares a la producción.",
        "Debido a que el costo de un sistema de prueba de rendimiento es prohibitivo, realizaremos las pruebas de rendimiento en el entorno de producción utilizando datos en vivo.",
        "Los riesgos del producto incluyen problemas de contención de datos, problemas de acceso a datos, problemas de bloqueo que rechazarán solicitudes concurrentes, limitaciones de ancho de banda de red, errores de búsqueda de datos, desaceleraciones o cuellos de botella en la búsqueda de datos, y dificultad para el usuario en procesar los datos devueltos."
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Se te ha pedido que prepares una presentación para los interesados técnicos sobre tu plan para las pruebas de rendimiento. ¿Cuál de los siguientes es un conjunto de información que debería compartirse con estos interesados?",
      options: [
        "Una vez configurado, el sistema de prueba de rendimiento requerirá carga de datos. Una vez cargados, procederemos a ejecutar un pequeño conjunto de scripts de muestra para verificar la salida. Cuando esos tengan éxito, procederemos con el script de prueba de rendimiento que aumentará los usuarios a una tasa de 10 por minuto hasta alcanzar el número objetivo de usuarios concurrentes. Esta carga se mantendrá durante 2 horas.",
        "El sistema de prueba de rendimiento costará $240,000, lo que incluirá el hardware y la configuración. Este sistema nos permitirá crear un sistema de prueba que sea representativo del sistema de producción y nos permitirá simular condiciones similares a la producción.",
        "Debido a que el costo de un sistema de prueba de rendimiento es prohibitivo, realizaremos las pruebas de rendimiento en el entorno de producción utilizando datos en vivo.",
        "Los riesgos del producto incluyen problemas de contención de datos, problemas de acceso a datos, problemas de bloqueo que rechazarán solicitudes concurrentes, limitaciones de ancho de banda de red, errores de búsqueda de datos, desaceleraciones o cuellos de botella en la búsqueda de datos, y dificultad para el usuario en procesar los datos devueltos."
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Si tu prueba de rendimiento está probando la velocidad de respuesta de un servicio web, ¿qué protocolo se está utilizando?",
      options: [
        "ODBC",
        "HTTP",
        "REST",
        "SMTP"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Si tu prueba de rendimiento está probando la velocidad con la que se envían y reciben solicitudes a la base de datos, ¿qué protocolo se está utilizando?",
      options: [
        "ODBC",
        "HTTP",
        "REST",
        "SMTP"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Si estás probando desde la interfaz de usuario y necesitas simular la cantidad de tiempo que tomará a un usuario real leer un aviso e ingresar datos en un campo, ¿qué deberías implementar en tu script de prueba?",
      options: [
        "Tiempo de espera",
        "Tiempo de reflexión",
        "Tiempo de latencia",
        "Tiempo de lectura"
      ],
      correctAnswer: 1, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el valor de anidar transacciones para las pruebas de rendimiento?",
      options: [
        "Soporta el concepto de transacciones padre e hijo",
        "Permite al tester medir una serie de transacciones discretas",
        "Acelera el tiempo de reporte de los resultados de rendimiento",
        "Elimina el tiempo de comunicación de red al enviar la transacción directamente al servidor que la procesará"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente verá 6 registros de pacientes por cada acceso. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. También ingresará notas en la base de datos sobre el tratamiento del paciente. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Dada esta información, ¿qué falta para construir el perfil operativo para esta clase de usuario?",
      options: [
        "No se realizaron entrevistas para comprender mejor la clase de usuario",
        "No se conoce el número de usuarios en el sistema para este rol",
        "No se ha considerado el procesamiento por lotes de la información de carga de pacientes",
        "No se han considerado otros componentes del sistema que pueden ser requeridos (carga de rayos X, informes de resultados de laboratorio)"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente actualizará 6 registros de pacientes por cada acceso ingresando notas en la base de datos sobre el tratamiento del paciente. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Los turnos que estos médicos trabajan son: 7am – 5pm (turno de día), 2pm – medianoche (turno de tarde), 9pm a 7am (turno de noche). Hay 1000 médicos que trabajan en el turno de día, 1000 que trabajan en el turno de tarde y 500 que trabajan en el turno de noche. Suponiendo una distribución uniforme del acceso al sistema a lo largo de un turno, ¿cuál de las siguientes es la carga adecuada para estos médicos?",
      options: [
        "6250 transacciones por hora",
        "Aumento constante incrementando las transacciones en 15,000 por hora comenzando en 15,000 transacciones y terminando en 150,000 transacciones",
        "Aumento escalonado con 7 horas a 21,000 transacciones, 3 horas a 27,000 transacciones, 3 horas a 36,000 transacciones, 11 horas a 66,000 transacciones",
        "Pruebas separadas para 120,000 transacciones por hora y 30,000 transacciones por hora"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente actualizará 6 registros de pacientes por cada acceso ingresando notas en la base de datos sobre el tratamiento del paciente. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Los turnos que estos médicos trabajan son: 7am – 5pm (turno de día), 2pm – medianoche (turno de tarde), 9pm a 7am (turno de noche). Hay 1000 médicos que trabajan en el turno de día, 1000 que trabajan en el turno de tarde y 500 que trabajan en el turno de noche. Suponiendo una distribución uniforme del acceso al sistema a lo largo de un turno, ¿cuál es el mayor número de accesos concurrentes en el sistema de estos médicos?",
      options: [
        "1,000",
        "2,000",
        "6,000",
        "12,000"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál es una de las ventajas de realizar pruebas de rendimiento a nivel de protocolo?",
      options: [
        "Es el método más fácil para la creación de scripts manuales",
        "Es la mejor manera de evaluar la experiencia total del usuario",
        "Es escalable porque se omite el cliente",
        "Es la mejor manera de manejar la correlación de datos"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el mejor método para verificar que un script de prueba de rendimiento agregó usuarios a un sistema?",
      options: [
        "Verificar la salida de errores del script para confirmar que no ocurrieron errores",
        "Verificar manualmente a través de una aplicación si los usuarios fueron creados",
        "Usar el script para verificar a través de la aplicación que los usuarios fueron creados",
        "Usar el script para verificar que los usuarios existen en la base de datos"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Uno de los perfiles operativos que has identificado es un médico de sala de emergencias. Has determinado que esta persona accederá al sistema 10 veces por turno (un turno es de 10 horas) y que normalmente verá 6 registros de pacientes por cada acceso. Imprimirá esos registros de pacientes para ser retenidos en el archivo del paciente en el hospital. También ingresará notas en la base de datos sobre el tratamiento del paciente. Para los nuevos pacientes, otro usuario ingresará la información en el sistema. Has creado un script de rendimiento que inicia sesión como un médico (de una lista de médicos) y luego realiza las búsquedas de pacientes. Cuando ejecutas el script, el inicio de sesión funciona, pero luego no puedes realizar las búsquedas de pacientes. Estás recibiendo un error que indica que el usuario no es conocido por el sistema. ¿Cuál es probablemente tu problema?",
      options: [
        "El script no está capturando y reutilizando el identificador del sistema para el usuario",
        "No puedes usar el mismo usuario para iniciar sesión y hacer las búsquedas de pacientes porque el usuario ha expirado",
        "El script necesita pasar el nombre de usuario/contraseña de inicio de sesión para cada transacción",
        "La información de inicio de sesión del usuario anterior está en caché por el sistema y necesitas limpiar la caché antes de poder iniciar sesión como un nuevo usuario"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás probando una aplicación de ventas para un sistema de comercio electrónico. Estás particularmente interesado en el tiempo de respuesta cuando un usuario ingresa texto para buscar un artículo en la base de datos. Has notado que la primera vez que ejecutaste las pruebas tomó 5.00 segundos en responder, pero las consultas subsiguientes con los mismos datos están respondiendo en 0.01 segundos. ¿Qué deberías haber hecho durante tu scripting para prevenir este problema?",
      options: [
        "No hay problema, el sistema simplemente se está volviendo más rápido",
        "Necesitas iniciar sesión cada vez para asegurarte de que la transacción se realice nuevamente",
        "Necesitas asegurarte de que la caché esté limpia porque los resultados de la consulta probablemente están siendo almacenados en caché",
        "Necesitas usar un usuario diferente para cada prueba para evitar que la información del usuario sea reutilizada sin ser restaurada"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Qué sucede cuando el sistema de prueba de rendimiento no es equivalente al entorno de producción?",
      options: [
        "Las proyecciones se vuelven menos confiables y el riesgo aumenta porque los resultados pueden no ser representativos",
        "Las pruebas tienden a ejecutarse más rápido porque no están cargadas con datos de producción",
        "Los resultados serán más fáciles de entender porque el sistema puede ser configurado para una prueba particular",
        "Los proyectos se vuelven más confiables debido al enfoque dirigido y esto resulta en una reducción del riesgo"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "¿Cuál es una preocupación al usar una herramienta de generación de carga correctamente configurada para construir la carga de fondo para las pruebas de rendimiento?",
      options: [
        "La carga generada contendrá datos inválidos",
        "El generador de carga puede experimentar problemas de rendimiento y no podrá mantener una carga constante",
        "La carga generada puede afectar el sistema de producción y los datos de producción",
        "Los informes de registro del generador de carga pueden ser difíciles de leer, lo que resulta en problemas para interpretar los resultados de rendimiento"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito de tener un período de aumento al comienzo de las pruebas de rendimiento?",
      options: [
        "Aumentar el número de usuarios más allá de la carga deseada",
        "Permitir que el sistema logre un estado estable antes de tomar mediciones",
        "Permitir que el sistema logre un apagado ordenado después de las pruebas",
        "Asegurarse de que las herramientas de monitoreo de rendimiento estén funcionando"
      ],
      correctAnswer: 1, // La opción correcta es la b)
      urlImage: " "
    },
    {
      "question": "¿Cuál es un método para probar estados transitorios?",
      options: [
        "Pruebas de carga constante",
        "Pruebas de picos y valles",
        "Pruebas de picos",
        "Pruebas de escalabilidad"
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Has realizado tus pruebas y has determinado las siguientes métricas:\n < 2 segundos de tiempo de respuesta: 85% del tiempo\n < 3 segundos de tiempo de respuesta: 90% del tiempo:\n < 10 segundos de tiempo de respuesta: 95% del tiempo:\n < 60 segundos de tiempo de respuesta: 100% del tiempo.:\n Dada esta información, ¿cómo deberías presentar los resultados a los interesados?",
      options: [
        "La prueba falló, el sistema es demasiado lento. Los requisitos deben ser revisados para asegurar que < 3 segundos es requerido el 100% del tiempo.",
        "El 95% del tiempo se cumple el objetivo de rendimiento, por lo que el sistema debería ser aceptado según los estándares de la industria.",
        "El tiempo de respuesta para el 90% de las pruebas es probablemente aceptable según los estándares de la industria, pero se necesita más ajuste para reducir el tiempo de respuesta del 95%.",
        "El tiempo de respuesta para el 100% de las pruebas es inaceptable y se requerirá ajuste para reducirlo a < 3 segundos."
      ],
      correctAnswer: 2, // La opción correcta es la c)
      urlImage: " "
    },
    {
      "question": "¿Cuál es el propósito de una herramienta generadora de carga?",
      options: [
        "Crea una carga en la red para permitir pruebas de colisiones",
        "Mantiene una carga en la interfaz de usuario para imitar con precisión el tiempo de respuesta del usuario",
        "Alimenta datos al panel de control mostrando cómo el sistema está respondiendo a la carga",
        "Simula el comportamiento del usuario de acuerdo con los perfiles operativos"
      ],
      correctAnswer: 3, // La opción correcta es la d)
      urlImage: " "
    },
    {
      "question": "¿Qué es una herramienta de pago por uso?",
      options: [
        "Una herramienta con un acuerdo de licencia que requiere que pagues solo por el número de usuarios virtuales e instancias que realmente usas",
        "Una herramienta basada en servidor que te proporciona la propiedad total de la herramienta para tu uso",
        "Una herramienta de monitoreo que llena el panel de control con métricas pertinentes basadas en lo que has pagado para monitorear",
        "Una herramienta que proporciona la capacidad de probar desde múltiples puntos de presencia para la generación de carga"
      ],
      correctAnswer: 0, // La opción correcta es la a)
      urlImage: " "
    },
    {
      "question": "Estás trabajando en un proyecto que rastrea información sobre el historial de salud de pacientes en una región. El número de registros manejados por el sistema está en millones debido al gran número de pacientes en la región. La información del paciente debe ser accesible para los médicos en consultorios, hospitales y centros de atención urgente. La información debe presentarse al solicitante dentro de tres segundos de la solicitud, particularmente para pacientes con alergias críticas y condiciones preexistentes. Tienes un equipo técnico que está realizando las pruebas de rendimiento y se siente cómodo programando los scripts de prueba de rendimiento para su reutilización y mantenibilidad. Ahora estás buscando una herramienta para usar en estas pruebas. Has encontrado una que es compatible con tu entorno y podrá generar carga a través de los protocolos en uso. El equipo la ha revisado y se siente cómodo con que pueden codificar en la herramienta y crear sus scripts con poca capacitación. Debido a que hay muchos interesados en estas pruebas, has verificado que la herramienta proporciona excelentes capacidades de monitoreo e informes. Has verificado con los diversos administradores del sistema que están cómodos con la herramienta y felices de usar sus capacidades de monitoreo además de sus propias herramientas durante las pruebas. ¿Qué necesitas verificar aún antes de seleccionar esta herramienta?",
      options: [
        "El cronograma del proyecto",
        "La disponibilidad de una capacidad de grabación/reproducción para que tus testers la usen",
        "La capacidad de la herramienta para cumplir con tus requisitos de usuarios virtuales concurrentes",
        "La facilidad con la que tu equipo puede codificar los scripts de rendimiento requeridos"
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
