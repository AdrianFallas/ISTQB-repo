const data_en = {
  questions: [
    {
      "question": "If you want to create test automation that interacts with the software the user sees and interacts with, what should be your goal?",
      options: [
        "a. APIs",
        "b. SUT libraries",
        "c. Protocols used by the SUT",
        "d. The GUI"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is necessary to test APIs?",
      options: [
        "a. They must have complete error recovery",
        "b. They must work with a standard interface and be fully documented",
        "c. They must be publicly exposed",
        "d. They must be able to handle any combination of data"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Why is it important to have a stable test environment and test data when running automated tests?",
      options: [
        "a. This allows the environment and data to be shared with manual tests",
        "b. Test results are reliable and repeatable",
        "c. False positives are minimized",
        "d. It is better to have instability in the environment and data, as this expands test coverage"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "When creating a complete test automation solution for an SUT, how much test automation code is expected to be needed?",
      options: [
        "a. None, as this is not possible because complete automation solutions do not exist",
        "b. As much as or more than the SUT",
        "c. Slightly less than the SUT",
        "d. Usually between 20-35% of the SUT's code amount"
      ],
      correctAnswer: 1, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following is the most important thing to have in place before preparing to start a large automation project?",
      options: [
        "a. Implement a tool to use in the implementation of automation",
        "b. An accepted ROI",
        "c. Clearly defined and accurate test cases",
        "d. A test plan"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Your organization wants to develop test automation for a mobile application. They do not have the technical staff to do the work and are reluctant to invest in tools, but they recognize the need for test automation for this particular application. Which of the following is the best solution to pursue?",
      options: [
        "a. Vendor-based",
        "b. Outsourced",
        "c. In-house",
        "d. Tool-based"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You have a team of 10 test automation engineers, but only five of them will use the tool at the same time. You are paying for 10 licenses. What type of model are you using?",
      options: [
        "a. Open source",
        "b. Per machine/user",
        "c. Floating",
        "d. Runtime"
      ],
      correctAnswer: 1, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "How is the test management system a consideration in the test automation budget?",
      options: [
        "a. It is not a factor",
        "b. Since the test management system will generate defect reports for defects found by test automation, defect fields must be clearly defined and that will take time and effort",
        "c. The test management system dashboards and reports will need to be updated to provide real-time risk mitigation status to test automation",
        "d. The test management system will interface with test automation tools to provide updates on test execution"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "In the automation team, who is expected to have programming and technical architecture knowledge?",
      options: [
        "a. The SME",
        "b. The test manager",
        "c. The test analyst",
        "d. The test automation engineer"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "In the test umbrella model, what is the main focus of test automation?",
      options: [
        "a. UI testing",
        "b. Service testing",
        "c. Unit testing",
        "d. Integration testing"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are testing the UI level of a banking application. You find that it works well in most transactions, but every time an address is used, there are errors regarding the expected format, even though the entered format is correct according to the requirements. What level of testing was probably overlooked, which has resulted in these errors?",
      options: [
        "a. Unit",
        "b. API",
        "c. Contract",
        "d. UI"
      ],
      correctAnswer: 2, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "If there is a primary focus on building test automation that can run in production or pre-production environments to provide end-to-end testing on the completed system, what approach is being used?",
      options: [
        "a. Shift left",
        "b. Shift right",
        "c. Shift up",
        "d. Shift down"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following is a true statement regarding test automation in a V-model project?",
      options: [
        "a. Test automation starts later than in an Agile project",
        "b. Test automation starts earlier than in an Agile project",
        "c. Test automation is not possible due to long development cycles",
        "d. Test automation will result in a higher ROI than in an Agile project"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "In the ideal Agile software development project, when should automated test cases for a sprint be integrated into the CI/CD pipeline?",
      options: [
        "a. At the beginning of the sprint",
        "b. Before the sprint ends",
        "c. Immediately before SIT begins",
        "d. Immediately after UAT"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Your team is developing a new mobile application. This will be the first time the organization attempts to implement a DevOps approach. The product is being developed by three Agile teams, one doing the front end, one doing the web services, and one handling database transactions. The web service developers have developed automated unit tests that they are running on their own machines before deployment. What do they need to do to comply with best practices?",
      options: [
        "a. They need to ensure that another developer has reviewed and can run the tests",
        "b. They need to deploy the tests to the DevOps pipeline and ensure they run in the deployment environment every time code is deployed",
        "c. They need to deploy the tests to the DevOps pipeline and ensure the tests run in the test environment every time new code is deployed and built",
        "d. They need to implement infrastructure as code to create the test environment, then deploy the tests to the DevOps pipeline and ensure the tests run in the newly built test environment every time new or changed code is deployed and built"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following tests is the best candidate for automation?",
      options: [
        "a. Error recovery test for a mobile application that requires frequent phone restarts",
        "b. UI test that validates that navigation is appropriate for various user classes",
        "c. Critical workflow test that requires multiple users to provide approvals during the workflow",
        "d. Mortgage calculation test that requires input from multiple data tables to determine the appropriate rate"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Your team is working with a CI/CD pipeline. So far, all tests have been performed manually with the integrated code deployed to a test environment. If you want to implement automation, how could this change to incorporate best practices?",
      options: [
        "a. Test automation could be included in the pipeline and run there for early tests (unit, component integration)",
        "b. Test automation could replace manual end-to-end tests and can be carried out in test environments",
        "c. Automate some of the easier tests, but keep cross-browser testing for manual tests",
        "d. Minimize test execution in the pipeline and focus on running test automation in the near-production environment"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are automating a new web application. One of the test scenarios is to test the timeout function that logs out if the application has been inactive for more than an hour. Can this test be automated?",
      options: [
        "a. No, it takes too long to wait for the timeout",
        "b. No, test automation cannot perform time-related tests",
        "c. Yes, but it will require manual intervention to time the timeout and then restart the automation to verify the result",
        "d. Yes, but you must verify that other tests can run efficiently while this one waits for the timeout"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "If there is an urgent need for a product to reach the market as soon as possible, how can test automation help?",
      options: [
        "a. By shifting tests left",
        "b. By shifting tests right",
        "c. By minimizing the number of tests to be executed",
        "d. By limiting the test data exercised by the tests"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is an automated test called when it is used to verify that a defect has been fixed and remains fixed?",
      options: [
        "a. Regression test",
        "b. Confirmation test",
        "c. Defect test",
        "d. Directed test"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "DevOps assumes the involvement of development and operations teams in creating a product. Which of the following tests is of particular interest to the operations team?",
      options: [
        "a. Unit tests",
        "b. Confirmation tests",
        "c. Installation tests",
        "d. System tests"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "How does test tool licensing affect the strategic selection of the test automation tool?",
      options: [
        "a. Cost",
        "b. ROI",
        "c. Access from multiple test environments",
        "d. Number of licenses that will be available to developers"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Why is it necessary to track test automation software versions?",
      options: [
        "a. Because different versions may be needed for different test environment configurations",
        "b. Because you may need to revert to an older version when a defect is discovered in the SUT",
        "c. Because it is easier to track the productivity of automation engineers when all changes are versioned",
        "d. Because developers will be able to see what changes are being made to the automation and will know what defects will be detected by a particular version"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You have developed test automation for a large Enterprise Resource Planning (ERP) system. This is a cloud product as a Service (SaaS) that will be updated by the vendor at regular intervals. Which of the following is a risk with test automation software for this system?",
      options: [
        "a. It may not migrate cleanly to a new test environment",
        "b. Test data cannot be created before implementation",
        "c. It may be too difficult to decipher test results because it is a cloud implementation",
        "d. It may be difficult to retain test engineers who know the system to make future updates"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "What is the main purpose of running the test automation suite to perform regression tests on a new version of the SUT?",
      options: [
        "a. Detect if something has changed",
        "b. Detect if something that used to work is not working",
        "c. Verify defect fixes and update the TAS as needed",
        "d. Practice running the test automation suite"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "What is the purpose of a test automation suite?",
      options: [
        "a. It is a way to logically group related test cases",
        "b. It is a required component of the TAF",
        "c. It is a collection of output files created by test automation scripts",
        "d. It is a risk traceability matrix used specifically for test automation"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following is a consideration when multiple machines will run automation tests in parallel to simulate realistic user scenarios?",
      options: [
        "Real users will need to log in to each machine before execution",
        "Gathering test results will be difficult",
        "Machines will need to be on the same network and may need to communicate with each other",
        "Machines will need to be configured identically so as not to skew test results due to memory or other resource differences"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: ""
    },
    {
      "question": "Some test automation scripts verify data by directly accessing the database and checking the values there. Is this a good practice?",
      options: [
        "No, it will tend to introduce false negatives due to scripting errors",
        "No, it is an unrealistic data access",
        "Yes, it allows verifying expected data changes",
        "Yes, it is good practice for automation engineers to understand the database structure and convert that understanding into a requirement"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: ""
    },
    {
      "question": "You have calculated the following expected savings from test automation: given these numbers, which of the following is the correct expected saving (in minutes)?",
      options: [
        "3,000,000 minutes",
        "300,000 minutes",
        "30,000 minutes",
        "30 minutes"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/tabla preg29.png"
    },
    {
      "question": "You have calculated the expected investment for a test automation project. Given these numbers, which of the following is the correct investment cost (in minutes)?",
      options: [
        "3,240,000 minutes",
        "324,000 minutes",
        "32,400 minutes",
        "3,240 minutes"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/tabla preg30.png"
    },
    {
      "question": "If you have just run your test automation suite and it reported 50 failures when it normally reports 1 or 2, what should you do?",
      options: [
        "Create a defect report for each failure for the developer to resolve",
        "Create a defect report for each failure for the automation engineer to fix",
        "Look for a cascading defect where a single problem has caused multiple failures",
        "Verify that the screenshots are valid and that there has been no internal test automation failure"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: ""
    },
    {
      "question": "You are working in an organization that always prefers to use commercial test automation tools. The previous project implemented a very expensive tool, but the team could not automate much because the tool was inflexible. The project was abandoned and the team resigned. Now you are choosing a tool for your project. What should you do?",
      options: [
        "Avoid using that tool",
        "Investigate the technical problems with the tool to see if there were feasible implementation alternatives that the team did not consider",
        "Ensure your project has enough time for a tool failure and time to learn a new one in case the first one doesn't work",
        "Opt for an open source tool that gives you better flexibility and control over implementation"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: ""
    },
    {
      "question": "You are working on a test automation project for an immigration system. There are already a large number of manual test cases that have been used for several years. It was determined that the coverage of these test cases is very good and the cases are prioritized according to criticality for the system and users. Given only this information, what should be your first priority in test automation?",
      options: [
        "Automate end-to-end user flows",
        "Automate existing manual test cases in order of priority",
        "Train your team about immigration practices and rules",
        "Train business users on how to generate test automation code from requirements"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: ""
    },
    {
      "question": "You are creating a test automation strategy for a new flagship product of your company. You know that management is reluctant to commit to an automation effort. What should you present to them to convince them to support a new automation effort?",
      options: [
        "The background and experience of the proposed test automation team",
        "The business value of test automation",
        "The cost of the automation effort compared to the development effort, including tools",
        "The comparison of the current product with competing products"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: ""
    },
    {
      "question": "How can the test automation report indicate that there is a need to shift tests further left?",
      options: [
        "By finding significant problems that occur at the functional component level",
        "By finding significant problems that occur in the integration of individual components",
        "By finding significant problems that occur when testing user transactions",
        "By finding significant problems that occur in end-to-end workflows"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: ""
    },
    {
      "question": "How does creating reusable components help the test automation effort?",
      options: [
        "A. It slows it down, allowing more time for analysis.",
        "B. It employs automation architects to define the test automation solution.",
        "C. It allows components to be created and maintained in one place, but used in many.",
        "D. It supports a distributed execution environment that can allow more automation agents to run concurrently."
      ],
      correctAnswer: 2, // The correct option is C
      urlImage: ""
    },
    {
      "question": "What happens to manual testers when a test automation suite has automated most of the tests they have historically performed?",
      options: [
        "A. They need to find new jobs.",
        "B. They need to become test automation engineers.",
        "C. They now have time to expand test coverage.",
        "D. They now have time to create more test data."
      ],
      correctAnswer: 2, // The correct option is C
      urlImage: ""
    },
    {
      "question": "What should be done before deploying a new set of tests to the TAS in a continuous testing environment?",
      options: [
        "A. Existing tests should be regression tested.",
        "B. New tests should be tested.",
        "C. New tests should undergo performance and security testing.",
        "D. The pipeline should be extended to capture test metrics and defect information."
      ],
      correctAnswer: 1, // The correct option is B
      urlImage: ""
    },
    {
      "question": "Your test automation is failing during execution. You have performed a root cause analysis and determined that the problems are almost always due to data. In particular, data is not available or is not in the correct state. For example, you have a test that is supposed to find and delete unused user accounts, but there are no unused accounts available to delete. What do you need to do to fix this problem?",
      options: [
        "A. Programmatically create the preconditions required by the tests.",
        "B. Manually alter the data before running the tests.",
        "C. Ask database people to find and provide you with a list of valid test data.",
        "D. Skip this test until data is available."
      ],
      correctAnswer: 0, // The correct option is A
      urlImage: ""
    },
    {
      "question": "Your automation team has been adding automated tests to the CI/CD pipeline as new features are developed. Developers are now complaining that the pipeline is slowing down due to tests. They think there are too many tests running. What should you do?",
      options: [
        "A. Ignore developers, tests are necessary.",
        "B. Perform performance tests for the tests and see if they are as efficient as possible.",
        "C. Review the tests that are running and include only critical ones in the pipeline and run the rest as a regression test suite overnight.",
        "D. Implement batch execution where all tests are divided into three sets and only one set is executed at a time for a deployment."
      ],
      correctAnswer: 2, // The correct option is C
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
    "nameQuiz": "Test Automation Strategy - Example 1"
  }
}
window.data_en = data_en;
