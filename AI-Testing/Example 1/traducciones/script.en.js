const data_en = {
  questions: [
    {
      "question": "Which of the following is a machine learning technique? (1 point)",
      options: [
        "Rule engine",
        "Clustering algorithm",
        "Case-based reasoning",
        "Search algorithm"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following is a type of AI system with capabilities similar to human cognitive abilities? (1 point)",
      options: [
        "Narrow AI",
        "General AI",
        "Superintelligent AI",
        "Superhuman AI"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following is a benefit of training a model using cloud computing? (1 point)",
      options: [
        "It will be faster than one trained on local servers.",
        "Once trained, it can be deployed on devices with much less computational power.",
        "It will continue learning while deployed.",
        "Once deployed on a device, it can continue learning from the cloud."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "A pre-trained model may lack transparency compared to an internally generated one. What risk results from this lack of transparency? (1 point)",
      options: [
        "It can be very slow.",
        "It will have more vulnerabilities than an internally trained model.",
        "It may have inherited biases.",
        "It cannot be modified for use in a deep neural network."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following statements is true about AI-based systems and autonomy? (1 point)",
      options: [
        "No AI-based system is autonomous; all require some level of human intervention.",
        "Some AI-based systems are autonomous, but others require human intervention.",
        "All AI systems are autonomous by default.",
        "True autonomy can only be achieved by humans, not by AI."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You are testing an AI-based system that recommends the best university major for high school graduates. In your test set, you created 10 people with identical academic records: five women and five men. All men received a recommendation for Computer Science, while all women were recommended for Financial Accounting. Repeating the test with eight men and two women yielded the same results. What kind of behavior is the system showing? (1 point)",
      options: [
        "a. Bias",
        "b. Autonomy",
        "c. Evolution",
        "d. Adaptability"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are working with an AI-based system that must guess a word in five attempts or less. The word changes each time, but the system always gets it right on the first attempt. Upon closer inspection, you notice that the system does not record its attempts until it guesses correctly. What kind of behavior is it showing? (1 point)",
      options: [
        "a. Side effect",
        "b. Transparency",
        "c. Bias",
        "d. Reward hacking"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "An AI-based system is being used to recommend the best medications for a patient based on their medical data. Although it initially worked reliably, it is now selecting experimental drugs in addition to approved ones. What characteristic is this behavior showing? (1 point)",
      options: [
        "a. Self-learning",
        "b. Lack of robustness",
        "c. Autonomy",
        "d. Transparency"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "What type of learning is an intelligent agent using when rewarded for correct decisions and penalized for incorrect ones? (1 point)",
      options: [
        "Classification",
        "Clustering",
        "Reinforcement learning",
        "Iterative"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "What step immediately follows model training in an ML workflow? (1 point)",
      options: [
        "Evaluate the model",
        "Tune the model",
        "Deploy the model",
        "Understand the objectives"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Your model performs well with training data but fails with new data. What problem has occurred? (1 point)",
      options: [
        "Underfitting",
        "Fitting",
        "Unsupervised learning",
        "Overfitting"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You are developing an AI-based system that will be used by pet stores. This system will take information about purchasing behavior, recorded through the loyalty program, as well as purchase frequency. This data will be used to determine which items on offer will be most attractive to each customer. You have decided to use unsupervised learning to build your ML model.\n\nWhat type of problem will you be solving with this approach? (2 pts)",
      options: [
        "a. Clustering",
        "b. Classification",
        "c. Association",
        "d. Reinforcement learning"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which contains the three main components of data preparation in the ML flow? (1 point)",
      options: [
        "Identification, collection, labeling",
        "Identification, cleaning, sampling",
        "Collection, transformation, feature extraction",
        "Acquisition, preprocessing, feature engineering"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "When should the test data set be used to train an ML model? (1 point)",
      options: [
        "Never",
        "Only if it contains data not in other sets",
        "Always",
        "Only if the training set is not large enough"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "What is a risk with unbalanced data? (1 point)",
      options: [
        "They might tend to be negative rather than positive.",
        "There will be too much data for the model to assimilate.",
        "There could be inappropriate bias.",
        "Much of the data is likely to be outdated."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You are working on a project that uses external data labelers. They are required to make some subjective judgments about correct labeling. What is a labeling error that is likely to occur in this scenario when different annotators are used for the same dataset? (1 pt)",
      options: [
        "a. Deliberate errors",
        "b. Tool issues",
        "c. Conflicting data labels",
        "d. Complex classification categorization"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": `You are working with a machine learning model that predicts customer purchasing habits. Specifically, the model estimates how many specific shoppers will purchase a product that has been strategically displayed in a grocery store. To evaluate the model, you are especially interested in its precision and accuracy, and you have collected the following information to build the confusion matrix. (1 point)`,
      options: [
        "Accuracy = 60%, Precision = 90%",
        "Accuracy = 70%, Precision = 80%",
        "Accuracy = 80%, Precision = 70%",
        "Accuracy = 90%, Precision = 60%"
      ],
      correctAnswer: 1,
      urlImage: "./imagenes/tabla preg17.png"
    },
    {
      "question": "You are using supervised regression metrics to evaluate the efficiency of your machine learning model. When calculating the Mean Squared Error (MSE), you find that the value is close to zero. What does this mean? (1 point)",
      options: [
        "a. The metric data is invalid because it should be negative.",
        "b. The regression model is good.",
        "c. There is a high similarity between data points within a group.",
        "d. The model distinguishes well between classes."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You are working with an ML model that will use facial recognition to identify known offenders in a supermarket chain. This model will be trained with photographs of people who have committed any of the following offenses in any of the chain's stores: theft, threatening behavior towards staff, or antisocial behavior towards other customers.\n\nThere has been a lot of negative press about the implementation of this system, but the stores consider it essential to maintain a safe environment for staff and customers. It is very important that the system does not misidentify innocent people, as they would be denied entry and questioned by the police.\n\nGiven this information, what performance metric would be most important for this system? (2 pts)",
      options: [
        "a. Accuracy",
        "b. Precision",
        "c. Recall",
        "d. F1-score"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "In a neural network, where does a node get its inputs to calculate its activation value? (1 point)",
      options: [
        "From the activation values of all neurons in the previous layer.",
        "From the activations of all neurons in the classification group.",
        "From the preset bias value.",
        "From the training data."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You have been assigned to design tests to determine the coverage of a neural network. You have determined that you really want to ensure that each neuron receives both positive and negative activation values.\nWhat type of coverage should you verify? (1 point)",
      options: [
        "Threshold",
        "Value-Change",
        "Sign-Sign",
        "Sign-Change"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "What is a problem with testers using the same data acquisition and preprocessing approach as data scientists? (1 point)",
      options: [
        "It may not be possible to obtain enough data.",
        "The data could be outdated.",
        "Defects in data acquisition and processing methods can be hidden.",
        "The data will contain many duplicates that will invalidate the metrics."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "How does component integration testing differ when AI is provided as a service? (1 point)",
      options: [
        "AI should only be tested at the system level when all components are integrated.",
        "The AI service should be tested as a separate component.",
        "AI cannot be tested on its own, only from the acceptance test level.",
        "The AI service APIs should be tested as part of component integration."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You are using your mobile phone to send a text message to a colleague at work. Your intention was to write: 'I won't go today because I have stomach flu.' However, autocorrect changed it to: 'I won't go today because I have a stomach fluctuation' and also added 'I'll be licking.' You didn't notice this 'correction' and sent it, which amused your colleague.\nWhat does this situation demonstrate? (1 point)",
      options: [
        "You have an automation bias or complacency and did not check the message before sending it.",
        "You cannot type fast enough.",
        "You have an automation bias or complacency because you did not adequately monitor the system you were using.",
        "You should have tested autocorrect before using it to send a work message."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are testing an artificial intelligence-based cancer detection system. It is imperative to avoid false negatives and minimize false positives. You have been calculating performance metrics and the F1-score is close to zero.\nWhat should you do? (1 point)",
      options: [
        "Do nothing, as an F1-score close to zero is the goal for this system.",
        "Use the Precision metric instead of F1-score, as it might be giving a biased result.",
        "Have an expert review the training data to ensure it is correct.",
        "Review the operational flow to verify that the integration is working correctly."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "What testing technique is recommended to validate the ability to request human intervention? (1 point)",
      options: [
        "Equivalence partitioning",
        "Boundary value analysis",
        "Decision tables",
        "Exploratory"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "What is a challenge when an AI system is non-deterministic? (1 point)",
      options: [
        "It can be difficult to reproduce results.",
        "Exploratory testing cannot be used.",
        "Automation must be keyword-driven.",
        "Including screenshots in test results can be difficult."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "When testing transparency in an AI system, what is compared? (1 point)",
      options: [
        "Inputs versus outputs.",
        "Training data versus test data.",
        "Expected versus actual results using LIME.",
        "Algorithm documentation versus actual implementation."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You are testing an autonomous lawnmower. The lawnmower is expected to request human intervention if it detects that it is not on grass, dirt, or a hard surface (such as concrete). This functionality is designed to stop it and ask for help if it enters a flower garden or other unusual vegetation area.\nYou have prepared the following test cases:\n1. Place the lawnmower on concrete in front of a flower garden and order it to move forward.\n2. Place the lawnmower on grass and program it to cross concrete to another patch of grass.\n3. Turn off the lawnmower, place it on dirt, turn it on, and observe if it moves forward.\n4. Turn off the lawnmower, place it in a flower garden, and see if it moves forward.\n5. Place the lawnmower on grass and verify if it moves forward.\n6. Place the lawnmower on dirt in front of a flower garden and order it to move forward.\n7. Place the lawnmower at the edge of a flower garden and order it to move towards the grass.\n8. Place the lawnmower on concrete and order it to move backward towards the grass.\n9. Place the lawnmower in front of a wall and order it to move forward.\n10. Place the lawnmower on grass in front of a flower garden and order it to move backward.\nFrom the following sets of test cases, which one should be used to test the scenario described in the question? (1 point)",
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
      "question": "Why are pairwise tests effective in AI systems? (1 point)",
      options: [
        "Because they efficiently test all possible inputs.",
        "Because they replicate user interactions.",
        "Because they ensure that good and bad information is tested.",
        "Because they efficiently test combinations of multiple parameters."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "What type of testing is effective against data poisoning in operational ML? (1 point)",
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
      "question": "What is the purpose of the pseudo-oracle in back-to-back testing? (1 point)",
      options: [
        "To test non-functional features.",
        "To compare its results with those of the system under test.",
        "To generate data for continuous training.",
        "To create test cases from a previously approved one."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "What is the purpose of a 'tour' in exploratory testing? (1 point)",
      options: [
        "A set of strategies and objectives to guide exploratory testing.",
        "Simulation for autonomous cars.",
        "A set of injectable test data.",
        "A data visualization method."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are testing an artificial intelligence system that predicts the annual growth of a particular tree species. The data indicates that there is a direct correlation between the amount of rain the tree receives and the growth it achieves in a given year.\nHow can you apply metamorphic testing to this system? (1 point)",
      options: [
        "From an initial test case, keep all other variables constant, increase the amount of rain, and verify that tree growth is proportional.",
        "For a set of test cases, sequentially alter the proportion of nitrogen in the soil and verify that the tree reacts appropriately.",
        "For a dataset, provide valid and invalid rain measurements and verify if the system detects and rejects invalid data.",
        "From a set of test cases, determine the absolute values for growth and rain factors and apply them in testing."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are testing a self-learning system used by insurance companies to predict life expectancy based on a set of variables. Because the system is constantly evolving, it has been very difficult to design tests that are reliable or even valid. The development team is preparing to release a new version that contains bug fixes and new functionalities. You have a complete set of regression tests that you used in a previous version and want to leverage them if possible.\nWhat type of testing would be most appropriate to perform regression testing on this new version and why would this approach work? (1 point)",
      options: [
        "Metamorphic testing; you can use existing regression tests to generate a new set. This will allow you to avoid analyzing the results to verify if they are valid.",
        "Back-to-back testing; you have available test cases and the previous version of the system can act as a pseudo-oracle, although you will still need to compare the results to determine if the variations are valid.",
        "A/B testing; you can use valid and invalid inputs to determine how the system responds and then compare those responses with the requirements documentation to see if they are correct.",
        "Experience-based testing; you can apply error guessing to focus on areas that are likely to fail in this new version. You can expand testing to less risky areas as regression time allows."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You are testing an artificial intelligence-based system that involves multiple agencies. Which of the following represents a challenge you might face when setting up the test environment? (1 point)",
      options: [
        "Because it will operate in a dangerous environment, it could be potentially risky to set up and maintain the environment.",
        "You will need to push the system to extremes to ensure human intervention is possible, but simulating this will be very costly and could destroy parts of the environment during testing.",
        "The volume of data required to test and monitor the system will be difficult, if not impossible, to generate.",
        "To effectively imitate the non-determinism of connecting systems, the environment must have its own level of non-determinism."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "How can ML models help process defect reports? (1 point)",
      options: [
        "Assign the defect to the correct developer.",
        "Write the steps to reproduce the defect.",
        "Detect spelling errors in the report.",
        "Attach and verify screenshots."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "What is one of the problems with using AI-based tools to generate test cases? (1 point)",
      options: [
        "They cannot read requirements.",
        "They cannot read code.",
        "They cannot determine the expected outcome.",
        "They cannot determine the necessary steps to execute the test."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "When using an AI-based technique to predict defects, which of the following measures has proven most effective? (1 point)",
      options: [
        "Lines of code.",
        "Cyclomatic complexity.",
        "Developer history.",
        "Function point analysis."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "How can an AI-based tool improve GUI test automation? (1 point)",
      options: [
        "It cannot. AI tools are not suitable for testing graphical interfaces.",
        "By reducing the fragility of automation code.",
        "By expanding the scope of testing.",
        "By providing a more valid test oracle."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    
    // inicia examen 2
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
      urlImage: "../Example 2/imagenes/matrix preg17.jpeg"
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
      urlImages: ["../Example 2/imagenes/tabla preg33.png", "../Example 2/imagenes/tabla preg33-2.png"]
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
    "errorLoading": "Error loading the quiz. Please try again later.",
    "nameQuiz": "AI Testing Example 1"
  }
}
window.data_en = data_en;