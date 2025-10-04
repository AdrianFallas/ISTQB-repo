const data_en = {
  questions: [
    {
      "question": "Which of the following statements provides the BEST example of the 'AI Effect'?",
      options: [
        "a) People lose their jobs as AI-based systems perform their functions cheaper and better.",
        "b) Competitive games lose popularity because AI systems always win.",
        "c) Rule-based expert systems for medical diagnosis are no longer considered AI.",
        "d) People believe that AI will dominate the world, as shown in movies."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a technology used to implement AI?",
      options: [
        "a) Support Vector Machine (SVM)",
        "b) Decision Tree",
        "c) Evolutionary Reasoning",
        "d) Bayesian Optimization"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following statements about hardware for AI-based systems is MOST likely to be CORRECT?",
      options: [
        "a) Processors used to train a mobile recommendation system must be the same as those in the phone.",
        "b) Graphics Processing Units (GPUs) are a reasonable choice for implementing AI-based computer vision.",
        "c) Deep learning systems must be trained, evaluated, and tested using AI-specific chips.",
        "d) It is always better to choose processors with more bits to achieve sufficient precision in AI systems."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Good quality pre-trained models are available on the market and you want to use one of them to create an image-based classifier. You have decided to ask the model provider about the data used to train it and its format.\nWhich of the following statements BEST represents the risk you are trying to mitigate by asking these questions?",
      options: [
        "Poor classification accuracy of pre-trained models.",
        "Differences between the data used to train the model and operational data.",
        "Performance efficiency issues of the pre-trained model.",
        "Lack of explainability of the pre-trained model compared to one trained by you."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following statements most likely specifies an autonomy requirement in an AI-based system?",
      options: [
        "a) The system will maintain a safe distance from other vehicles until the driver presses the brake or accelerator.",
        "b) The system will learn the preferred email response style by remotely monitoring email traffic.",
        "c) The system will compare its house price predictions with actual prices to determine if it needs retraining.",
        "d) It will be possible to modify the system's behavior to work with different types of users in less than a day."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following statements about bias in AI-based systems is NOT correct?",
      options: [
        "a) Bias can arise if users of a book recommendation system make choices that lead to bad suggestions.",
        "b) Bias can arise in a death age prediction system if training data comes only from retirees.",
        "c) Bias can arise in a credit scoring system if training data comes only from credit card holders.",
        "d) Bias can arise in a navigation system if the routing algorithm is too complex to be explained to common users."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Which of the following is MOST likely an example of 'reward hacking'?",
      options: [
        "a) A programmer assistance tool optimizes code to reduce response times while meeting functional requirements.",
        "b) An anesthetic delivery device aiming to keep the patient stable during surgery delivers too many doses and delays awakening.",
        "c) An external organization pays its AI programmers based on the number of lines of code they write.",
        "d) An AI designed to play competitive games against humans focuses on getting the highest score."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Given the following attributes for an AI-based system:\nI. Probabilistic\nII. Explainable\nIII. Unfair\nIV. Non-deterministic\nV. Deterministic\nWhich of the following lists of attributes will MOST likely cause difficulties if the system is used as part of a safety-related system?",
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
      "question": "Which of the following statements BEST describes classification and regression as part of supervised learning?",
      options: [
        "a) Regression consists of verifying that ML model results do not change with the same test data.",
        "b) Classification is grouping unlabeled data into separate classes.",
        "c) Classification consists of labeling data to train the ML model.",
        "d) Regression consists of predicting the number of classes generated by the ML model."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following options BEST describes an example of reinforcement learning?",
      options: [
        "a) A mobile game app adjusts its feedback and response times based on how much players spend.",
        "b) A translation app searches multilingual text on the Internet to improve its translation function.",
        "c) A factory quality control system identifies defective objects using video and audio based on human observations.",
        "d) A system that predicts defects in components uses quality metrics to identify those most prone to failure."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You have been asked for your opinion on the ML approach to be used for a new system that is part of traffic management in a smart city (SMART city). The idea is for the new system to control city traffic lights to ensure that traffic flows easily within and around the city.\n\nWhich of the following approaches do you expect to be MOST likely to succeed?",
      options: [
        "a. Unsupervised learning based on identifying clusters in the city where traffic density is above average.",
        "b. Supervised learning regression solution based on thousands of labeled journeys with length and duration.",
        "c. Reinforcement learning based on a reward function that penalizes solutions that generate higher levels of congestion.",
        "d. Supervised learning classification solution based on favorite routes submitted by drivers and passengers."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "An ML engineer notes that the model is very accurate with validation data but fails with independent test data.\nWhat is the MOST likely cause?",
      options: [
        "a) Underfitting",
        "b) Concept drift",
        "c) Overfitting",
        "d) Poor acceptance criteria"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following is a common challenge when developing and testing ML solutions?",
      options: [
        "a) Data anonymization requires knowing several ML algorithms.",
        "b) Data can be in unstructured format.",
        "c) A large part of the budget is spent only on data preparation.",
        "d) Scaling the data pipeline is a challenge during training."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "The data scientist reports that the model cannot be trained with a certain algorithm, although others work with the same data.\nWhat is the MOST likely reason?",
      options: [
        "a) Incorrect data",
        "b) Missing data",
        "c) Incorrect labeling",
        "d) Insufficient data"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "DataSure is a startup that improves ML models by verifying if data is correctly labeled.\nWhat defect is MOST likely prevented by this product?",
      options: [
        "a) Security vulnerabilities in the model",
        "b) Low accuracy",
        "c) The model does not perform its intended function",
        "d) The model produces biased results"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "An ML engineer, due to lack of data, rotates labeled images to generate more training data.\nWhat labeling approach is being used?",
      options: [
        "a) Crowdsourcing",
        "b) Data augmentation",
        "c) AI-based labeling",
        "d) Outsourcing"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "The confusion matrix for an image classifier is shown below:\nWhich option represents the classifier's precision?",
      options: [
        "a) 20/120 * 100",
        "b) 78/120 * 100",
        "c) 78/100 * 100",
        "d) 22/100 * 100"
      ],
      correctAnswer: 2,
      urlImage: "./imagenes/matrix preg17.jpeg"
    },
    {
      "question": "ThermalSpace is a solution provider that helps thermoelectric plants optimize their energy production. Their solution is based on a machine learning (ML) model created from historical data with clearly labeled outputs. The model helps determine the amount of electricity that should be generated at a given time of day.\nTo determine the quality of the model using functional performance metrics in ML, which of the following metrics is MOST likely to be used?",
      options: [
        "a) R-squared",
        "b) Precision",
        "c) Recall",
        "d) False positives"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "KnowYourPet is an app that determines if a pet is hungry. According to the training set, a dog is usually not hungry. Incorrectly diagnosing it as hungry can lead to overfeeding and could cause serious health problems. What metric should you use to evaluate the model's suitability?",
      options: [
        "a) Accuracy",
        "b) Precision",
        "c) Recall",
        "d) F1-score"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following options BEST describes a deep neural network?",
      options: [
        "It is composed of a hierarchical structure of neurons, where deeper neurons make most decisions.",
        "It is composed of connected neurons, where each neuron has an associated bias and each connection has an associated weight.",
        "It is formed by several layers, where each layer (except input and output layers) is connected to all other layers and errors propagate backward through the network.",
        "It is composed of layers of neurons, each of which generates an activation value based on other neurons in the same layer."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following statements CORRECTLY describes a test coverage measure for neural networks?",
      options: [
        "Value change coverage is based on individual neurons being observed to affect the overall output of the neural network.",
        "Threshold coverage is based on neurons emitting an activation value greater than a preset value between zero and one.",
        "Neuron coverage is a measure of the proportion of neurons that activate at some point during testing.",
        "Sign change coverage measures the coverage of neurons that emit positive, negative, and zero activation values."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which requirement of an AI-based system would cause the MOST challenges in testing?",
      options: [
        "a) The system must be more accurate than the one it replaces.",
        "b) The AI component must have 100% accuracy.",
        "c) A human operator must be able to override the system in 1 second.",
        "d) The system must imitate typical human emotions of a player."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Which factor related to test data can make testing AI-based systems difficult?",
      options: [
        "a) Obtaining big data at high speed.",
        "b) Obtaining data from a single source.",
        "c) Obtaining data separately from data scientists.",
        "d) Obtaining data from public websites."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Why should the accuracy of human decisions be considered along with the accuracy of AI systems?",
      options: [
        "a) Intuitive human decisions can be faster in some situations.",
        "b) Both humans and AI can make unethical decisions.",
        "c) Human accuracy is not relevant for testing AI systems.",
        "d) Human decisions may be of lower quality if recommended by AI."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "A machine learning (ML) based toll collection solution determines the type of incoming vehicle from images captured by a camera. Different types of cameras are available and the solution provider claims to be able to use cameras with different resolutions. Images must be in JPEG format with a size of 320x480 pixels for both training and prediction. The model must be able to classify vehicle types with a high desired level of accuracy and must be tested against vulnerabilities. Each toll booth will have its own complete system, with no connection to other systems.\nWhat are the MOST appropriate testing options to choose during system testing?",
      options: [
        "a) Concept drift testing",
        "b) Adversarial testing",
        "c) Scalability testing",
        "d) Fairness testing",
        "e) Data pipeline testing"
      ],
      correctAnswer: [1, 4],
      urlImage: ""
    },
    {
      "question": "Which statement BEST describes a specific challenge when testing self-learning systems?",
      options: [
        "a) Requires regular retraining and, therefore, regular testing.",
        "b) Is released regularly, so regression is needed.",
        "c) Changes in a way that previously successful tests may fail.",
        "d) Requires a human operator who must also participate in testing."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT usually necessary to test bias in a system?",
      options: [
        "a) Including users known to have biases.",
        "b) Measuring how changes in inputs modify outputs.",
        "c) Observing correlations between inputs and outputs in production.",
        "d) Obtaining additional data from other sources."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following statements BEST describes how system complexity can create challenges when testing an artificial intelligence-based system?",
      options: [
        "Testing for bias may require data that the team does not have available.",
        "Manual white-box test generation can be difficult.",
        "Determining whether a system is ethical can be subjective.",
        "It can be difficult to find representative data to train a model."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "An artificial intelligence-based system is being used by the Ministry of Health to identify vulnerable patient groups, who will receive support and advice to prevent future diseases to which they may be susceptible. The results will also be shared with other government agencies and health insurance companies. The system is initially being trained with a large dataset collected by the Ministry of Health from two surveys: one with 5,000 men over 50 years old and another with 25,000 women over 30 years old. The system will continue to identify vulnerable patients by collecting information from public social networks.\nWhich of the following attributes should be MOST carefully considered when specifying the system's objectives and acceptance criteria?",
      options: [
        "Adaptability",
        "Bias",
        "Explainability",
        "Flexibility",
        "Autonomy"
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "A machine learning (ML) engineer is trying to find exploitable inputs and then use those same inputs to retrain the models, making them immune to such inputs.\nWhich of the following options BEST describes the approach the engineer is using?",
      options: [
        "Validation",
        "Adversarial testing",
        "Data pipeline testing",
        "Scalability testing"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "A test manager must select techniques to test autonomous vehicle software, considering more than 50 environmental conditions and 7 vehicle functions.\nWhich testing technique is MOST likely to be used to test this variety of vehicle functions in different environmental conditions?",
      options: [
        "a) A/B testing based on vehicle function (VF) and environmental condition (EC) parameters",
        "b) Combination testing of all VF and EC parameters",
        "c) Pairwise testing of relevant VF and EC values",
        "d) Back-to-back testing with relevant VF and EC values"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "A test manager decides to build a non-AI-based system with similar functionality to the system under test to support system testing.\nWhich statement is MOST likely to be CORRECT?",
      options: [
        "a) They have chosen back-to-back testing because it helps solve the oracle problem using a pseudo-oracle",
        "b) They have chosen A/B testing because it helps solve the oracle problem using a pseudo-oracle",
        "c) They have chosen back-to-back testing because non-functional requirements can be verified against the pseudo-oracle",
        "d) They have chosen A/B testing because non-functional requirements can be verified against the pseudo-oracle"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": `An artificial intelligence-based mobile phone search system provides a list of devices it considers most suitable for the user, based on its knowledge of the user's previous phone usage and specified preferences.\n
                Given that metamorphic testing is being used with the following base test case (Table 1), and the following test data for two corresponding follow-up cases (Table 2):`,
      options: [
        "a) T1: SnapHappy_X1, SnapHappy_M2 | T2: ClickNow_1000x, ClickNow_1000xs",
        "b) T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000xs | T2: SnapHappy_X1, ClickNow_1000x",
        "c) T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs | T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3",
        "d) T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs | T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs"
      ],
      correctAnswer: 1,
      urlImages: ["./imagenes/tabla preg33.png", "./imagenes/tabla preg33-2.png"]
    },
    {
      "question": "AI system testing is being planned. It is suggested to use exploratory testing in addition to scripted techniques. Which scenario is MOST likely to represent exploratory testing?",
      options: [
        "a) Training data is visualized with tools for inspection",
        "b) Scripted tests are executed with equivalence partitioning from the previous cycle",
        "c) Google's ML checklist is used",
        "d) ML functional performance metrics are calculated"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "LAIgal Systems has an AI-based product that extracts relevant favorable rulings similar to a given legal case. This product is used by judges in courts. The details of the current case are provided, and the system produces relevant rulings. The system must be protected against malicious inputs. A similar open-source product is available. The absence of an adequate test oracle represents a challenge during system testing.\n\nWhich of the following testing techniques should be selected to evaluate the new version during system testing?",
      options: [
        "a) A/B testing",
        "b) Back-to-back testing",
        "c) Adversarial testing",
        "d) State transition testing",
        "e) ML functional performance metrics calculation"
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Which of the following statements represents a difference between a test environment for AI-based systems and one for conventional systems?",
      options: [
        "a) AI test environments may require mechanisms to understand specific decisions",
        "b) AI test environments need simulators and virtual environments, conventional ones do not",
        "c) AI test environments require large volumes of data, conventional ones do not",
        "d) AI test environments need GPUs, conventional ones do not"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "In which of the following situations would AI be MOST useful for categorizing new defects?",
      options: [
        "a) A small number of defects need to be categorized in a new application.",
        "b) A large number of defects are reported in a small application.",
        "c) Defect reports usually contain minimal data.",
        "d) A new development team needs to know which developer is most appropriate to fix the defect."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following options is MOST likely to be used by an AI-based tool as a basis for generating functional test cases?",
      options: [
        "a) A test charter.",
        "b) An image of the system represented in a flowchart.",
        "c) Web server logs.",
        "d) Crash reports."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following options CORRECTLY describes how an AI-based tool can optimize regression test suites?",
      options: [
        "a) By analyzing false positive results.",
        "b) By analyzing information from previous testing activities.",
        "c) By using genetic algorithms to create new test cases.",
        "d) By updating expected results to counteract concept drift."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following options CORRECTLY describes how an AI-based tool can perform defect prediction?",
      options: [
        "a) By using natural language to ask developers where they think defects will occur.",
        "b) By analyzing the causes of defects reported in a similar codebase.",
        "c) By analyzing defects that turned out to be false positives.",
        "d) By scanning the code to identify defects using rules."
      ],
      correctAnswer: 1,
      urlImage: ""
    }
  ],
  "texts": {
    "next": "Next",
    "finish": "Finish",
    "timeUp": "Time is up!",
    "selectAnswer": "Please select an answer before continuing.",
    "congratulations": "Congratulations!",
    "scoreMessage": "You scored {{score}}%.",
    "certificateInfo": "You can get your certificate by sending a payment receipt of <strong>10 USD</strong> to educacion@frecuenciagamer.com.",
    "insufficientScore": "Insufficient score",
    "tryAgain": "We encourage you to try again!",
    "result": "Result",
    "restart": "Restart",
    "listeningFeedback": "Listening...",
    "answerRegistered": "Answer registered.",
    "reconigtionFailed": "Could not recognize. Please try again.",
    "selectAnswer": "Please select the correct option(s).",
    "micPermissionDenied": "Microphone permission denied. Please allow microphone access and reload the page.",
    "micPermissionGranted": "Microphone permission granted.",
    "voiceModeActivated": "Voice mode activated.",
    "voiceModeDeactivated": "Voice mode deactivated. Please respond with the number or text of the option.",
    "loading": "Loading...",
    "errorLoading": "Error loading the quiz. Please try again later."
  }
}
