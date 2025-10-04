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
