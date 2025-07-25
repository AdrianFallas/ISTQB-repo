const questions = [
{
    question: "What are the goals of game testing?",
    options: [
        "To test the contribution of interestness of the game to the final evaluation on the market",
        "To test all player’s action sequences in the game",
        "To verify that the game meets specified requirements",
        "To test performance of the game",
        "To discover all possible defects prior to end users"
    ],
    correctAnswer: 4
},
{
    question: "Which of the following options is a defect that is MOST specific for video games?",
    options: [
        "Application not starting",
        "Object is hovering another object",
        "Object not found in database",
        "User  cannot log in after updating application version"
    ],
    correctAnswer: 1
},
{
    question: "Which of the following statements related to game product risks is TRUE?",
    options: [
        "Cheating option may lead to unfair advantage and resentment of other users",
        "Multiplayer games require ad hoc testing",
        "Planning test schedule according to release plan helps to avoid overload of game testers",
        "To mitigate performance risks it is required to have as many control devices as possible"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following BEST describes the difference between 'Game testing' and 'Playing game'?",
    options: [
        "User  starts the game to pass it or have a good time, while tester verifies that the game meets requirements written in the specification",
        "Game testing is the same as playing the game several times to verify as much scenarios as possible",
        "User  may end the game at any time, while tester must pass the game to the end",
        "User  may save game state, while the tester should pass the game without saving its state"
    ],
    correctAnswer: 0
},
{
    question: "What type of mechanics is NOT used in games?",
    options: [
        "Gameplay mechanics",
        "Non-gameplay mechanics",
        "Client mechanics",
        "Player mechanics"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is relevant to testing core game mechanics?",
    options: [
        "Restarting the game after its crash",
        "The ability to save the game at a certain point",
        "The issuance of an increased reward for the best result in the race",
        "The ability to jump over an obstacle in a platformer game"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following statements are true?",
    options: [
        "I. Testing of client and server mechanics is usually carried out white box testing",
        "II. Client mechanics in multiplayer games can be tested without the participation of the server",
        "III. The possibility of modifying the game client by the player himself is not considered a serious defect in single-player games",
        "IV. Testers perform functional and non-functional testing when testing server mechanics",
        "V. A tester needs a user interface to test server mechanics"
    ],
    correctAnswer: 0
},
{
    question: "Which approach is the most effective for testing the interaction of game mechanics on the production stage?",
    options: [
        "Compatibility testing",
        "Performance testing",
        "Ad hoc testing",
        "Integration testing"
    ],
    correctAnswer: 3
},
{
    question: "What is NOT affected by defects in game mechanics?",
    options: [
        "The sales price of the game",
        "The possibility of passing the game",
        "The general perception of the game by the player",
        "The gameplay"
    ],
    correctAnswer: 0
},
{
    question: "Match test steps to game saving types.",
    options: [
        "1D, 2B, 3C, 4A",
        "1D, 2C, 3B, 4A",
        "1C, 2B, 3D, 4A",
        "1A, 2B, 3D, 4C"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following is NOT the graphic content of the game product?",
    options: [
        "Video game level",
        "3D editor",
        "Textures",
        "Collisions"
    ],
    correctAnswer: 1
},
{
    question: "Which of the following is NOT a graphic defect?",
    options: [
        "Lack of texture",
        "Low detail of the object next to the character",
        "Collision grid visibility",
        "Unexpected closure of a video game"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT an example of a historical validity defect?",
    options: [
        "Appearance of a national leader in a game does not match his/her real-life photos",
        "One of the weapon models in a game is used and operates differently than its real prototype",
        "Weaponry and ammunition in a game do not match a real armed conflict event shown in a game",
        "A game shows an alternative version of a historical event"
    ],
    correctAnswer: 3
},
{
    question: "Choose the incorrect statement from the following options:",
    options: [
        "Artists perform artistic testing when reviewing game objects",
        "Testers perform artistic testing after the final export of models to the engine",
        "Testers perform artistic testing before the export of models to the engine",
        "Players perform artistic testing when participating in playtests"
    ],
    correctAnswer: 1
},
{
    question: "Who performs Technical Testing on Graphics?",
    options: [
        "Testers, developers, and technical artists",
        "Testers, developers, technical writers, and technical artists",
        "Testers as well as technical artists",
        "Testers, technical writers, and technical artists"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following is NOT a graphics testing tool?",
    options: [
        "Save editor",
        "In-game video capture tools",
        "In-game content editors",
        "Graphics tablet"
    ],
    correctAnswer: 0
},
{
    question: "Match test steps to graphics production steps.",
    options: [
        "1B, 2F, 3E, 4D, 5C, 6G, 7A",
        "1E, 2F, 3G, 4D, 5C, 6B, 7A",
        "1G, 2F, 3E, 4A, 5C, 6B, 7D",
        "1G, 2F, 3E, 4D, 5C, 6B, 7A"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT a sound content of game product?",
    options: [
        "Music level",
        "Musical score",
        "Ambient sound",
        "Sound effects"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following is NOT a sound defect?",
    options: [
        "Missing sound effect",
        "Lack of sound of the object/environment",
        "Time delay of audio playback",
        "Missing binding between music and sound effect"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT a defect in the audio content?",
    options: [
        "The effect sound is too loud and does not match the volume level in the game settings",
        "Missing sound effect",
        "Playing the wrong sound",
        "Incorrect playback of correct sound"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following checks is NOT used in content-auditory testing?",
    options: [
        "Appropriation of the sound to the object and the setting",
        "The level (volume) of each sound file must be the same",
        "The tester reviews the available documentation for a specific sound object, examines the requirements for sound design",
        "If a location or scene is filled with various details, this is also emphasized by the voice acting"
    ],
    correctAnswer: 3
},
{
    question: "Choose the correct statement regarding sound testing tools from the following:",
    options: [
        "Map/location editor allows to test sound effects “zones” on the map",
        "Sound card allows to play the music",
        "Piano allows to compare music in the game with original sound theme",
        "Sound settings wizard allows to test volume changing"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following is NOT used in testing the mix of music and sounds?",
    options: [
        "Testing the timeliness of the sounds in relation to what is happening on the screen",
        "Testing the accuracy of the location of the sound source",
        "Testing the quality of sounds effects",
        "Testing the sense of presence and realism of what is happening on the screen"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is NOT validated when testing the mixed music of a game?",
    options: [
        "Combination of all audio components with each other",
        "The volume of individual sounds",
        "Ability to turn on and off music",
        "Timeliness of playing sounds relative to what is happening in the game"
    ],
    correctAnswer: 2
},
{
    question: "When checking sound objects, the tester must carry out the procedures and actions necessary to obtain complete information about how correctly the sound is configured in a particular version of the game. What does the tester's list of actions directly depend on?",
    options: [
        "The list of actions depends on the tasks assigned to the tester by the art director and technical artist",
        "The list of actions depends on the number of objects in the current video game release",
        "The list of actions directly depends on which objects you want to test",
        "The list of actions depends on the checklist obtained from the game console manufacturer"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is NOT a game level component?",
    options: [
        "Structural geometry",
        "Main menu",
        "Sound accompaniment",
        "Lighting"
    ],
    correctAnswer: 1
},
{
    question: "Which of the following is a game level defect?",
    options: [
        "Inability to save gameplay",
        "Inoperability of the game at a certain screen resolution",
        "The inability to enter the building by the game character due to the fact that he is stuck in road textures",
        "Graphics artifacts"
    ],
    correctAnswer: 2
},
{
    question: "At what stage of creating a game level is the playtest carried out?",
    options: [
        "Level prototyping",
        "Prototyping geometry",
        "Creation of the final version",
        "Creating a patch version"
    ],
    correctAnswer: 2
},
{
    question: "What is a level designers’ responsibility?",
    options: [
        "Correctness of textures, lighting and other visual effects",
        "Checking whether a player can play a given map without facing technical and artistic defects",
        "Checking the authenticity of the soundtrack",
        "Correctness of the geometry and shape of the level, the location of objects and trigger points, the size of the shelters"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT a game level testing tool?",
    options: [
        "Save editor",
        "Level editor",
        "3D editor",
        "Game engine"
    ],
    correctAnswer: 0
},
{
    question: "Which of the following BEST describes difference between physical and sensor based controllers?",
    options: [
        "Physical controllers contain only mechanical or membrane actuators",
        "Buttons of physical controllers have purposes those don't depend on the application under test",
        "Sensor based controllers can be equipped with sensors that read the position of the controller in space, respond to touch, voice",
        "Sensor based controllers designed to transmit various commands to a computer, phone or other electronic equipment"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is an example of the typical input devices (guaranteed to comply with gaming devices)?",
    options: [
        "Microphone",
        "Steering wheel",
        "Touch screen",
        "Joystick"
    ],
    correctAnswer: 1
},
{
    question: "What input device provides the most precise information for testing purposes about the player's position in space?",
    options: [
        "Webcam",
        "Dance platform",
        "Fishing rod controller",
        "Motion capture device"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT a defect in a game product related to the specifics of game controllers?",
    options: [
        "Incorrect localization of security requirements for the Nintendo Switch Joy Con controller imposed by the publisher",
        "Sony DualShock 4 controller is regarded as a full-fledged sound output device due to an outdated version of drivers",
        "Lack of replacement of a tooltip when switching controllers during the game",
        "Factory defect that leads to drifting of gamepad sticks without user intervention"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is NOT a task for UX specialists and testers?",
    options: [
        "Verifying the X, A and ⬜, X buttons are used as “agree” buttons",
        "Finding a controller that gives the player a significant advantage over others",
        "Measuring time required to achieve next level",
        "Examining compliance to generally accepted conventions"
    ],
    correctAnswer: 1
},
{
    question: "What are the main objectives of internationalization and localization?",
    options: [
        "To give the players an opportunity to choose a preferred language in the game language settings",
        "To ensure that all the game content is translated properly to be used in target region",
        "To support regional, linguistic or cultural references and adapt the game content to the culture of a country",
        "To ensure that the game content comply with the regional laws"
    ],
    correctAnswer: 1
},
{
    question: "The localization testing steps are performed to ensure...",
    options: [
        "An opportunity to translate the game to the target language after release",
        "A technical support to regional, linguistic or cultural references",
        "That no player will be offended by rude language and improper jokes",
        "Adaptation of a gaming software to the culture of a country"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following can be classified as a potential cause for a localization defect related to regional law violation?",
    options: [
        "Revealingly dressed characters and vulgar language is used",
        "Historical events are misinterpreted",
        "Images of religious origin are used",
        "All of the above"
    ],
    correctAnswer: 3
},
{
    question: "Which of the following is NOT a software to use during localization testing?",
    options: [
        "Translation memory software",
        "Visual string comparison tools",
        "Graphic editor",
        "Automatic string comparison tools"
    ],
    correctAnswer: 2
},
{
    question: "Match testing actions with localization testing types.",
    options: [
        "1A, 2B, 3C, 4D",
        "1B, 2C, 3A, 4D",
        "1C, 2A, 3C, 4B",
        "1D, 2B, 3C, 4A"
    ],
    correctAnswer: 0
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

  questionDiv.innerHTML = `
    <h2>${index + 1}. ${q.question}</h2>
    <div class="options">
      ${q.options
        .map(
          (option, i) => `
            <label>
              <input type="radio" name="question-${index}" value="${i}">
              ${option}
            </label>
          `
        )
        .join("")}
    </div>
  `;

  container.appendChild(questionDiv);

  // Restaurar la respuesta seleccionada previamente si existe
  const selectedAnswer = userAnswers[index];
  const radioInputs = container.querySelectorAll(`input[name="question-${index}"]`);
  radioInputs.forEach((radio) => {
    if (parseInt(radio.value) === selectedAnswer) {
      radio.checked = true;
    }

    // Guardar la selección del usuario cuando cambie
    radio.addEventListener("change", () => {
      userAnswers[index] = parseInt(radio.value);
    });
  });

  // Mostrar u ocultar botones según la posición
  document.getElementById("next-btn").textContent = index === questions.length - 1 ? "Finalizar" : "Siguiente";

  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.style.display = index === questions.length - 1 ? "block" : "none";
  }

  const prevBtn = document.getElementById("prev-btn");
  if (prevBtn) {
    prevBtn.disabled = index === 0;
  }
}

// Función para iniciar el temporizador
function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("¡El tiempo se ha agotado!");
      evaluateQuiz(); // Evaluar el cuestionario cuando el tiempo se agote
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
function evaluateQuiz() {
  const results = [];
  questions.forEach((q, index) => {
    const selectedValue = userAnswers[index];
    const isCorrect = selectedValue === q.correctAnswer;
    results.push({ isCorrect, correctAnswer: q.correctAnswer });
  });

  // Calcular la calificación
  const score = results.filter(r => r.isCorrect).length;
  const total = questions.length;
  const percentage = (score / total) * 100;

  // Mostrar resultado
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