const data_en = {
  questions: [
    {
      "question": "Which of the following is a disadvantage of test automation?",
      options: [
        "a. They are less susceptible to human errors during execution",
        "b. They run faster than manual tests",
        "c. They always verify exactly what they were programmed to verify",
        "d. They can execute more complex tests more reliably"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following characteristics of Agile software development allows the team to cover all test levels with the appropriate amount and depth of automation?",
      options: [
        "a. The right tools",
        "b. The right training for test automation engineers",
        "c. The elimination of silos within the team",
        "d. Early release of completed requirements"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have a highly technical test automation team, with all engineers skilled in coding in a wide range of languages. Which of the following would be the best tool to use in implementing test automation for the SUT?",
      options: [
        "a. Full code",
        "b. Commercial off-the-shelf (COTS)",
        "c. Open source",
        "d. A tool based on the same code as the SUT"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "How does observability in the SUT help test automation development?",
      options: [
        "a. The TAE can observe the code as it runs",
        "b. The automation software can access interfaces that will allow it to determine if expected results have been achieved",
        "c. The automation software can access controls such as function calls, to drive the software and verify results",
        "d. It makes components and their interfaces clearer and easier to understand"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which environment should be used to run performance tests to get the most accurate results?",
      options: [
        "a. Local development",
        "b. Build",
        "c. Integration",
        "d. Pre-production"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which is the most suitable environment for running automated API tests?",
      options: [
        "a. Local development",
        "b. Build",
        "c. Integration",
        "d. Pre-production"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are working on a new test automation project. Developers have implemented a CI/CD pipeline with automatic environment generation as needed. Everyone agrees that it would be best for the test automation code to run automatically as the code goes through the pipeline. How does this affect your approach to automation implementation?",
      options: [
        "a. Automated reporting will be critical",
        "b. You will need a tool that integrates easily and uses technology similar to the SUT",
        "c. Environment configurations will need to be tested before any test automation execution, as they are being generated from code",
        "d. A test architect will not be needed as developers have already implemented CI/CD and automation code only needs to comply with pipeline rules"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": `You have performed the following tool comparison: You have assigned the following importance to these areas:
  
    Record/Playback – nice to have
    Integrates with CI/CD – nice to have
    API Automation – must-have
    Mobile – nice to have
    Source – preferably open source\n
    The team that will use this tool has strong programming skills.\n Given this information, which is the best tool for your organization?`,
      options: [
        "a. Tool A",
        "b. Tool B",
        "c. Tool C",
        "d. Tool D"

      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "./imagenes/tabla preg8.png "
    },
    {
      "question": "Where in the test automation design should you find the interface with the test management software?",
      options: [
        "a. In the gTAA",
        "b. In the TAA",
        "c. In the TAS",
        "d. In the SUT"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is the correct ecosystem in which test automation runs?",
      options: [
        "a. TAF",
        "b. TAS",
        "c. TAA",
        "d. gTAA"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following elements of the TAA supports connection to the SUT via APIs?",
      options: [
        "a. Test generation",
        "b. Test definition",
        "c. Test adaptation",
        "d. Test execution"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have inherited a test automation suite that was developed over several years by multiple test automation engineers. You have found the framework to be very complicated, with the same page and flow models embedded in multiple scripts. Scripts accessing page models for different SUTs are all mixed in a single directory. It also appears that generic user actions have been implemented in multiple scripts. What is the correct association between these elements and the TAF layers?",
      options: [
        "a. Page and Flow Models to the Business Logic Layer, generic user actions to the Core Libraries Layer, the rest of the script code to the Test Scripts Layer",
        "b. Page Models and generic user actions to the Core Libraries Layer, Flow Models to the Business Logic Layer",
        "c. Test Scripts to the Test Scripts Layer, SUT-specific code to the Test Adaptation Layer, anything called multiple times to the Core Libraries Layer",
        "d. Logging and Reporting to the Business Logic Layer, API and Database tests to Core Libraries, Core Libraries calls to the Test Scripts Layer"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You have just started a new job at a company that develops application software. Your manager knows nothing about test automation, but likes the idea. He has requested a demonstration of some test automation on one of their production applications. He would like to have the demonstration by the end of this week. You have explained that you can prepare a quick demonstration, but that developing real, maintainable test automation will take longer. Given this information, which approach would be the most cost-effective and expeditious to create the demonstration?",
      options: [
        "a. Capture/playback",
        "b. Structured scripting",
        "c. Data-driven testing",
        "d. Behavior-driven development"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You have been maintaining a Test Automation Solution (TAS) and realize that you frequently need to change test cases when one of the objects on a user interface page changes. Since objects are used by multiple tests, a changed object can result in the need to modify multiple tests. This is taking a considerable amount of time each time the team receives a new code delivery from developers. Which design principle should you apply when refactoring the code to make it more maintainable?",
      options: [
        "a. SOLID principles",
        "b. Design patterns",
        "c. Page object pattern",
        "d. Flow model pattern"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have been assigned to a new test automation project. Developers are using Java with Spring Boot in their deployment pipeline. They would like to see automation using the same tools, particularly for deployment and execution of tests. Given this information, what is a primary consideration you should have when forming the team?",
      options: [
        "a. How many people you will need",
        "b. Can you find the people you need with the specific programming skills?",
        "c. What test levels will be targeted for automation?",
        "d. Where should team members be located?"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You have developed a complete set of test automation for a new mobile application. This involves using physical devices for testing. This has worked well, but you are concerned about future maintenance requirements. Which of the following is an area that should be considered with this approach?",
      options: [
        "a. Device licensing cost",
        "b. Simulator installation responsibility",
        "c. Operating system updates for physical devices and retesting/test updates as needed",
        "d. Acceptance testing using physical devices versus using simulated devices to get user approval"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is a maintainability problem with some capture/playback tools?",
      options: [
        "a. The user interface is difficult to use",
        "b. Logging is cumbersome",
        "c. Coverage is often inappropriate",
        "d. Data is hardcoded"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "What is the main purpose of using static analyzers in test automation code?",
      options: [
        "a. They should not be used for test automation code",
        "b. To ensure higher code quality by checking coding standards",
        "c. To optimize code for faster execution",
        "d. To find and remove any global variables"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Your organization is using a modern continuous integration system that differentiates between the build and deployment phases of continuous delivery pipelines. Developers have implemented some tests in the build pipeline and that seems to be working, but you are seeing frequent problems with transaction workflows that are missing or not implemented correctly. You have now developed tests to cover the problematic scenarios. How should this test be implemented in the pipeline?",
      options: [
        "a. It should be implemented as integration tests in the continuous integration pipeline",
        "b. It should be implemented as component integration tests in the continuous deployment pipeline",
        "c. It should be implemented as system tests in the continuous deployment pipeline",
        "d. It should be implemented as component tests in the continuous integration pipeline"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are developing performance efficiency tests to combat production problems with slow performance, particularly with any reporting transactions. Where should they be implemented in a CI/CD environment to provide the earliest quality gate?",
      options: [
        "a. In the continuous integration pipeline",
        "b. In the continuous deployment pipeline",
        "c. After deployment, in the test environment",
        "d. After deployment, in the production environment"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "How are test environments influenced by configuration management?",
      options: [
        "a. Environments are only accessed through configuration management software",
        "b. Environments are secured and security tested when added to configuration management",
        "c. Environment configuration and access information can be stored in configuration management",
        "d. Environment access is controlled by the configuration management system and software"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "What is the main purpose of using a feature toggle in test software?",
      options: [
        "a. To reduce the cost of test case maintenance",
        "b. To allow certain tests to run depending on the switch configuration",
        "c. To be able to skip tests that are failing due to a defect",
        "d. To provide more explicit test reporting information based on the switch configuration"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Why is it important to understand API connections?",
      options: [
        "a. Developers will code according to these requirements",
        "b. Performance tests depend on understanding each API connection",
        "c. This is where the tester will find documentation on required parameters",
        "d. Business logic is controlled through API connections and their relationships"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "What is the purpose of a contract between services?",
      options: [
        "a. Defines how the provider will supply services to the consumer",
        "b. Defines who has access to what data for security reasons",
        "c. Defines how a service connects and disconnects from the system",
        "d. Defines the expected speed of transactions and allows it to be adjusted as needed"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You have created a test automation suite that is testing critical functionalities in a new system. It is finding a significant number of defects. You have repeatedly shown your output logs to your manager, but he does not understand that most test cases are failing. What should you do to improve your logs and make them more understandable?",
      options: [
        "a. Nothing. Get a new manager.",
        "b. Make sure the start and end of each test are logged and presented in bold",
        "c. Add color to the results showing red for failures and green for passes",
        "d. Add screenshots for all failures"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have a test automation suite that is finding a failure. You have investigated the logs, but you cannot see where it is failing. You have tried running the tests manually and they work without problems. What other information should you capture in your scripts to help debug the problem?",
      options: [
        "a. Screenshots at the point of failure",
        "b. Lines of code executed",
        "c. Equivalent manual test hours saved",
        "d. Number of runs with pass/fail information"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are working on a Customer Relationship Management (CRM) system that uses a third-party address lookup to assist the user when entering an address. This also ensures that only valid addresses are entered into the system. Unfortunately, you are finding that addresses in one state are always failing: Kansas. You cannot see any problem in the test automation code, and you have determined that there are no data or format errors in the failing addresses. You have tried the same test manually and you get the same failure. Given this information, what should you do next?",
      options: [
        "a. You should run the code under the debugger to make sure no errors occur",
        "b. You should contact the third-party vendor and log an incident with information about the failing addresses",
        "c. You should capture screenshots of the failure",
        "d. You should make sure that the addresses being entered are valid addresses"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Who should receive a copy of a test progress report?",
      options: [
        "a. Only testers until the software is ready to be released",
        "b. Management, but only if there is a problem they need to solve",
        "c. All stakeholders who have a need and/or interest in testing",
        "d. No one; this information should only be tracked on a dashboard accessible to technical team members"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have found that the TAS requires different components depending on the deployment environment. This includes elements such as different URLs, different test data, and the use of mocks and stubs. What should you do to make the TAS easy to install in different environments?",
      options: [
        "a. Ensure that all components are under configuration management with clear versioning and environment requirements",
        "b. Create a different TAS for each unique environment and maintain each of them as separate entities to avoid deployment problems",
        "c. Provide developers with links to different environments so they can deploy the TAS for you in the various environments making the necessary changes during the deployment effort",
        "d. Reduce the use of different test environments and instead use different versions of the TAS to simulate different environments"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are working on a new TAF and are getting some interesting results. When tests are run under the TAF, they are noticeably slower than when run manually. This happens from the beginning of execution and remains slow throughout the process. What is a possible cause of this problem?",
      options: [
        "a. Not enough logging, more should be added for better troubleshooting",
        "b. The SUT is not adequately provisioned for the appropriate performance level",
        "c. The data used by test automation is causing tests to take too long and should be reduced in size",
        "d. The TAF is affecting performance for some reason, more timing information may be needed, but there may already be too much logging occurring"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You have been running a set of 10 tests, but you are getting inconsistent test results. What kind of 'correct' behavior is missing?",
      options: [
        "a. Repeatability",
        "b. Intrusion",
        "c. Composition",
        "d. Visibility"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What do you check when you are checking the completeness of a test automation suite?",
      options: [
        "a. All tests pass",
        "b. Approximately 10% of tests consistently fail",
        "c. Test data is correct and available",
        "d. Tests are repeatable across different versions of the SUT"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following options would be sufficient to determine that an action has actually occurred?",
      options: [
        "a. Add a user and verify that the user can no longer log in",
        "b. Add a user and then delete that user",
        "c. Add a user, delete the user, add the user again",
        "d. Add a user and verify in the database that the user exists"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is an advantage of using a static analysis tool?",
      options: [
        "a. The code will run faster",
        "b. The code will have extensive logging",
        "c. Suggestions will be given to the developer to fix problems",
        "d. The tool will automatically generate defect reports for any problems found"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are having repeated failures with automation every time a new version of the SUT is released. You have performed an analysis and found that most problems are due to changes in API response elements. What is a cost-effective and time-saving approach you can implement to address this problem?",
      options: [
        "a. Implement mocks and stubs for services called through APIs and use them in your test automation",
        "b. Develop your own APIs to call services and code your automation to use your own controlled APIs",
        "c. Implement contracts for APIs and test through contracts",
        "d. Get a schema validation tool that verifies that APIs meet requirements"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You have been reviewing the test automation suite and have found that at least 40% of the code is reused more than twice. What should you do to improve the maintainability of the test suite?",
      options: [
        "a. Remove duplicate code",
        "b. Create a library in the framework and store common code there, then update individual scripts to call library code modules as needed",
        "c. Run schema validation to ensure code is accurate and data is handled correctly",
        "d. Use static analysis to ensure reused code is clean and efficient"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You have a test automation suite for a healthcare application. This application communicates with several external systems via APIs. You have found that APIs do not necessarily return the correct codes when a request times out and you are finding that your automation gets stuck while checking specific values. In addition to reporting this as a defect, what should you do to make your automation more robust?",
      options: [
        "a. Ensure that there are hardcoded waits and timeouts in your automation to avoid eternal waiting",
        "b. Stop testing as this is a fundamental defect and invalidates any further testing",
        "c. End your test when the wait exceeds five seconds, as this is an adequate time for a response",
        "d. Wait until you get a response because continuing would be meaningless for the test"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You need your test automation scripts to check SUT system logs for specific values. Currently, that check is hardcoded in each script because each script looks for different information. How should this be implemented to reduce maintenance?",
      options: [
        "a. Logs should be manually reviewed because that will be more flexible and require no maintenance",
        "b. Checked values should be compiled together so that the search is always for all values",
        "c. A new reusable function should be developed that can accept data values passed from the test script, which will search the log for those specific values",
        "d. A unique function should be developed for each value so that the precise function can be called by the appropriate test script"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "One of the test automation engineers has built a function to handle graphical user interface (GUI) components. This function takes the control ID, control type, and action as input parameters and then performs the action on the specified control. The TAE says that all common controls (buttons, checkboxes, text boxes, dropdowns, etc.) have already been added, but more controls can be easily added to this function. He also noted that it will be available to any test automation script that needs to access a particular control. Is this a good approach?",
      options: [
        "a. No, it is better for a function to deal with only one type of control at a time, such as one for buttons and one for dropdowns",
        "b. No, this function will require considerable maintenance as the GUI adds more pages",
        "c. Yes, this is an example of good practice that will put common code into a function that can be maintained in one place but used by many test automation scripts",
        "d. Yes, this function will be easy to extend as more individual buttons, dropdowns, and text boxes are added to the GUI, assuming they all behave as expected for their control type"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You have been asked to develop test automation for a system that has no documented requirements or existing test cases. You have access to the system's business users. How could test automation be used to help you determine what you need to automate?",
      options: [
        "a. Business users could use the record/playback capability to record what they do, and then you could use those recordings as examples to develop maintainable test automation code.",
        "b. You could use the tools to prepare test data for users.",
        "c. A test automation script could be used to set up the test environment.",
        "d. Developers could use the TAS to define their solution and could implement their code in the TAF, which would allow you to develop the test automation solution from the SUT source code."
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are rewriting a TAS to adapt to changes made in the SUT. You have found that the test automation engineer who wrote most of the test scripts used a record/playback tool to find all user interface components on each page to be tested. Objects were referenced directly from the scripts that used the components. You noticed this problem when you needed to update the test automation scripts because the 'gender' radio buttons had to be changed to a dropdown list. This required changes on multiple pages for this web application. Which design approach should the previous test automation engineer have used to make this code more maintainable?",
      options: [
        "a. Flow model pattern",
        "b. Page object pattern",
        "c. SOLID principles",
        "d. Object-oriented programming principles"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are currently using a page object model approach for mobile banking application test automation. This has significantly helped the maintenance effort, but you are still spending time fixing scripts that cover common user transactions such as login and view account balance. What would be the best design approach to reduce the time you are spending coding transactional workflows?",
      options: [
        "a. Flow model pattern",
        "b. Page object pattern",
        "c. SOLID principles",
        "d. Object-oriented programming principles"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
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
    "nameQuiz": "Test Automation Engineering Advanced",
  }
}
window.data_en = data_en;
