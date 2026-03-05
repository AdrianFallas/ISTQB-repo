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
    },

    // inicio examen 2
     {
      "question": "Which of the following is a limitation of test automation?",
      options: [
        "Only usability tests can be effectively automated.",
        "Test automation can only be executed after system testing has been performed.",
        "Test automation can only verify results that are visually validated.",
        "Test automation can only verify results that are validated by code."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Which of the following statements is true about test automation and the Software Development Life Cycle (SDLC)?",
      options: [
        "In agile development, automated tests focus more on acceptance testing than component testing.",
        "In agile development, automated tests focus more on component testing than acceptance testing.",
        "In the V-model, automated test execution should be performed after manual testing.",
        "In the V-model, test automation implementation is carried out throughout the software development cycle."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following factors is NOT necessary to consider when selecting appropriate testing tools?",
      options: [
        "SUT Architecture.",
        "Actual composition and experience of the testing team.",
        "Licensing and support for the testing tool.",
        "Quality of SUT requirements."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "When a system is designed to be testable, one of its characteristics is that the test automation framework (TAF) can access interfaces to perform actions on the system. What is this characteristic called?",
      options: [
        "Observability.",
        "Controllability.",
        "Maintainability.",
        "Interoperability."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "What type of test automation is primarily performed in the pre-production environment?",
      options: [
        "Component testing.",
        "Performance efficiency testing and user acceptance testing.",
        "Static analysis.",
        "Component integration testing."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "In which environment is a fully automated test suite typically run for the first time against a release candidate?",
      options: [
        "Pre-production/staging environment.",
        "Build environment.",
        "Production/operational environment.",
        "Integration/testing environment."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You work for an IT company that develops a multimedia system for Android-based cars. The software contains several components that work together. Developers follow the test-driven development approach. After development, the software is delivered to another IT company that integrates it with hardware elements and sells it to car manufacturers.\nWhich of the following aspects should be considered when capturing test automation requirements by the IT company you work for?",
      options: [
        "Is it important for the test automation approach to support component testing?",
        "Should the test automation approach support beta testing?",
        "Is it important for the test automation approach to support testing the software on as many different types of cars as possible?",
        "What tester roles should be supported by the test automation approach?",
        "Is it important for the test automation approach to support approval in mobile app stores?"
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "You are evaluating test automation tools. Below is a list of findings for one of the evaluated tools based on selection requirements:\n• The tool's dashboard is very informative and displays all relevant information about the SUT.\n• It includes a test logging component that saves all necessary information after execution to troubleshoot issues found.\n• It includes a customizable reporting component.\n• During the proof of concept, the tool performed very slowly against the SUT compared to other evaluated tools.\n• The current test environment is valid according to the release notes, meaning it meets hardware and software requirements.\nWhat should be your next step regarding the selection of this tool?",
      options: [
        "Acquire more hardware resources for the SUT to reduce performance degradation.",
        "Disable test logging to improve tool performance.",
        "Recommend not selecting this tool.",
        "Plan to migrate the SUT to another hardware/software environment where tool overhead can be eliminated."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Match the list of tasks in test automation architecture capabilities with their correct role name:\n1. Map abstract test cases to concrete cases suitable for execution.\n2. Implementation of test cases and/or test suites.\n3. Test logging with detailed information about steps and actions.\n4. Mechanism to connect to the SUT using protocols and services.\nA. Test Definition\nB. Test Adaptation\nC. Generation\nD. Test Execution",
      options: [
        "1D, 2A, 3C, 4B",
        "1C, 2A, 3B, 4D",
        "1A, 2B, 3D, 4C",
        "1C, 2A, 3D, 4B"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "As a test automation engineer, you encountered a problem during the initial implementation of the test automation solution (TAS). The output of the system tests could not be translated back into automated test cases to determine the results.\nWhat was the MOST LIKELY cause of the problem?",
      options: [
        "Test tool libraries were NOT designed to be updated with each SUT version.",
        "Integration with the System Under Test (SUT) was NOT configured via APIs.",
        "SUT-specific adapters for the selected tool were NOT implemented.",
        "The SUT and the test management tool were NOT compatible."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You work on an Android development team and maintain a test automation framework. A new development team has been formed to build a new application. Your project manager asks you to build an automation framework for this new team. You first identify reusable components and then begin implementing additional libraries based on the new application.\nIn which layer do you configure the connection with the new app?",
      options: [
        "Core libraries layer.",
        "Test scripts layer.",
        "Feature files layer.",
        "Business logic layer."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You are working on a test automation project to automate GUI tests for a web-based public transport service. The project has limited time. There are manual test cases that can be automated first. One of the goals is to implement test cases directly into automated scripts.\nWhich technique or approach should you use to automate test cases and meet the objectives?",
      options: [
        "Use the keyword-driven testing technique.",
        "Use the Behavior-Driven Development (BDD) approach.",
        "Use the capture/playback test automation approach.",
        "Use the data-driven test automation technique."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You join a company where manual testing is mature, but test automation has been abandoned for a while. Testers have generated a large amount of test data and typically use 10 to 20 variations per scenario. After your initial review, you see that the test automation framework (TAF) can be easily repaired, but the test cases need to be completely redesigned.\nWhich test automation approach should you choose to achieve great results quickly?",
      options: [
        "Data-driven testing.",
        "Behavior-Driven Development (BDD).",
        "Capture/playback.",
        "Acceptance Test-Driven Development (ATDD)."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are working on a test automation project to automate GUI tests for an e-commerce site. The site contains a digital assistant that helps users set up their accounts, name, billing address, shipping address, and security credentials. Currently, software development is at a stage where usability testers review the digital assistant and make recommendations for necessary changes. This is done iteratively: developers modify the graphical interface (GUI), testers review the modifications, and re-perform usability tests.\nWhich design pattern is best implemented in this case?",
      options: [
        "Implement the Page Object pattern and store all user actions associated with GUI elements in the corresponding page models.",
        "Implement the Flow Model pattern, store all web elements in the corresponding page models, and user actions in the flow models.",
        "Implement the Facade design pattern and provide interfaces for GUI elements that hide the internal localization mechanism.",
        "Implement the Singleton pattern and create a single piece of code to handle element localization."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Senior management wants to implement a test automation solution (TAS) in your organization and asks you to lead this initiative. You have been instructed to start a pilot project.\nWhich of the following statements best describes the objective of this pilot project?\n\nPossible objectives:\n i) Document parts of the SUT that were not documented during development.\n ii) Identify metrics and measurement methods to monitor the SUT in the production environment.\n iii) Analyze defects found during testing of the test automation solution (TAS).\n iv) Evaluate licensing options and corporate rules.\n v) Select the most suitable tool, whether commercial off-the-shelf or open source.\n",
      options: [
        "i, ii and iii are valid pilot project objectives.",
        "ii and iv are valid pilot project objectives.",
        "i, ii and v are valid pilot project objectives.",
        "iv and v are valid pilot project objectives."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You have been assigned to implement a test automation solution (TAS) for functional adequacy tests that must run automatically after each daily build. The TAS must integrate seamlessly with the existing CI/CD pipeline and provide quick feedback on software quality. However, you have identified several potential risks that could affect the successful deployment and operation of the TAS.\nAs a test automation engineer, you need to analyze the deployment risks associated with TAS implementation and determine the best mitigation strategies for each risk. Your goal is to ensure smooth integration of the TAS into the existing development process, maintaining the quality and reliability of the testing process.\nWhich of the following options BEST relates deployment risks to their mitigation strategies?\n\n1. Test execution is not triggered by the build\n2. Only the complete test suite can be executed\n3. Test data is not available when the test starts\n4. Difficulty diagnosing failed tests\n\nA. Log detailed information during test execution\nB. Integrate test automation into the CI/CD pipeline\nC. Use third-party tools to generate test data\nD. Use test harnesses and fixtures\n",
      options: [
        "1-B, 2-A, 3-D, 4-C",
        "1-A, 2-B, 3-C, 4-D",
        "1-B, 2-D, 3-C, 4-A",
        "1-D, 2-B, 3-C, 4-A"
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following is an important factor for improving code maintainability?",
      options: [
        "Define generic functions with all necessary parameters.",
        "Allow developers to name variables uniquely.",
        "Use static analyzers to keep code clean.",
        "Hardcode values directly to easily understand their meaning."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "What is the most effective way to reduce test automation code maintenance time?",
      options: [
        "Keep code out of a version control system.",
        "Insert static data directly into test scripts for easy access.",
        "Apply design patterns in your test automation framework.",
        "Regularly rewrite test scripts from scratch instead of reusing existing components."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "An IT company develops financial software that changes frequently, using the agile development model. Development, integration, and deployment processes are highly automated, and an established CI/CD pipeline already exists. You are working on a test automation solution (TAS) whose goal is to cover as many automation purposes as possible.\nWhich of the following options are valid purposes for test automation in this case?",
      options: [
        "Run a regression test suite every night.",
        "Run a component build.",
        "Run a static code analysis.",
        "Run an automated performance efficiency test in the CI/CD pipeline.",
        "Package and deploy the application as part of the deployment phase."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "Which statement is correct?",
      options: [
        "Tests are not executed as part of the deployment phase.",
        "Tests are not executed as a separate pipeline, triggered after a successful deployment.",
        "Test cases do not act as a quality filter when different automated suites are run on each deployment.",
        "Pipelines are not recommended for regression testing due to the extensive scope and size of these tests."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "How is configuration management used in test automation?",
      options: [
        "It allows managing test data and test environment configurations.",
        "SUT configuration can be easily stored and removed.",
        "It allows managing user rights to access test automation.",
        "Test automation results can be easily analyzed."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following elements is NOT part of the test environment configuration?",
      options: [
        "Uniform Resource Locators (URLs).",
        "Credentials.",
        "Test data.",
        "Common core library."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "How does contract testing NOT contribute to API test automation dependencies in an infrastructure?",
      options: [
        "Ensures that APIs comply with predefined communication contracts.",
        "Can be used to test communication between microservices.",
        "Validates compatibility between two separate systems.",
        "Verifies whether a system meets its contractual requirements."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": `You are in a project where teams are decomposing an old monolithic web service into several microservices.\nWhich of the following documents can help you identify dependencies and develop your test automation solution (TAS) for API testing?",
  
    i.   Application Programming Interface (API) specification
    ii.  System architecture diagram.
    iii. Test strategy.
    iv.  Release notes.`,
      options: [
        "i, ii and iv",
        "i and ii",
        "ii, iii and iv",
        "i"
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You are working on a test automation project that is used to automate GUI tests for an online web store. The web store contains an assistant that helps users set up their accounts, name, billing address, shipping address, and security credentials. During test automation, the assistant's steps are recorded first. Screenshots are taken and stored during these steps. We consider these as the baseline. The baseline was re-executed without changes to the SUT and all tests passed.\nAfter developers submit a change to the assistant, the recorded test scripts are replayed and screenshots of each step are compared to the baseline screenshots. During playback, all test cases failed, even though the visible content appears unchanged. What could be the cause?",
      options: [
        "A) An internally used technical session ID is also recorded, which changes during playback. This should be replaced by variables to avoid failures.",
        "B) Screenshots are not correctly associated with test steps, leading to comparisons in the wrong order.",
        "C) The failure occurred because relying solely on screenshot comparisons led to inaccurate results.",
        "D) The date in the GUI header is different from the date it was recorded. This date field should be excluded from the comparison.",
        "E) Screenshots were captured at low resolution, causing details to blur, making comparison unreliable."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "You are working on a project where you are responsible for extending the current test automation framework (TAF), used for web service testing, with additional test logging capabilities. The TAF uses a third-party tool to create logs in files and an HTML report to quickly visualize results. In test implementation, several dynamic values are used to generate actual data, and the SUT, a web service without a graphical interface, connects to multiple legacy test systems. Unfortunately, tests are very unstable and you need to add significant information to the log to better analyze the causes of failures.\nWhat additional information should NOT be included in the test log to make it more useful and why?",
      options: [
        "Timestamps should be included in the logs to see if the failure is related to a legacy system crash.",
        "Screenshots should be included to see the actual request-response pairs.",
        "Randomly generated values should be logged to allow analysis of actual results obtained during execution.",
        "In case of assertion failures, meaningful information such as actual versus expected results should be logged instead of stack traces."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "During the design phase of a performance-critical software product, management decides to create a TAS to perform load tests on the software and measure its performance. The product contains different architectural components, including a browser-based front end, microservices implemented in the back end, and a relational database. It is important to measure all individual transactions across the architectural stack. How can you automatically provide this information from the test automation software?",
      options: [
        "A) You cannot. This information has to be collected manually at the end of each transaction.",
        "B) The Test Automation Engineer (TAE) can log timing information during the execution of all transactions.",
        "C) Tracking IDs should be populated across software components and measured time values should be associated with these IDs to correlate performance data.",
        "D) Third-party tools should be inserted into the different layers of the architecture and these agents should log the collected data into a database."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "As a test automation engineer, you are tasked with demonstrating to management whether the test success rate is improving over a series of test executions. What is the correct approach to meet this requirement?",
      options: [
        "A) Compare test results with expected results.",
        "B) Use semaphore indicators to show test execution progress.",
        "C) Detailed test reports with test completion percentages.",
        "D) Implement an analysis function that compares previous test results and highlights trends."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Your team has developed a Test Automation Solution (TAS) for a Computer-Aided Design (CAD) software program. This software has several different versions in production and has been ported to different languages and platforms. Manual testers have been using the TAS on their local computers with different language settings, versions, and platforms. Before proceeding with further automated testing, you need to verify the test automation environment. What is an important consideration when verifying the environment for this TAS?",
      options: [
        "A) Establish a central repository to verify that all testers are using the same version of the capture/playback tool and can access it correctly.",
        "B) Create and document a procedure to verify the proper installation of the CAD software on each tester's machine.",
        "C) Set up a central test environment where the CAD software is installed and verify that automation scripts can interact with it from each local computer.",
        "D) Use configuration management to verify the consistency of test data and scripts across different environments."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You work on a software development team that requires tests to be performed in many different test environments. Your manager has expressed that the team is spending a significant amount of time overcoming false positives because the test automation solution (TAS) is not configured correctly when used in a new test environment. Additionally, there appear to be version differences when comparing the TAS in each test environment. Even new test environments are sometimes configured with very old TAS components. Which TWO options would help address this situation?",
      options: [
        "A) Create an automated installation script for the tools and configurations that make up the TAS.",
        "B) Limit the TAS to be used only in the most important test environments.",
        "C) Use a repository to store the TAS that is accessible to all test environments.",
        "D) Leverage manual testing to verify that the TAS has been configured correctly in all test environments.",
        "E) Due to time constraints, skip implementing component tests for the TAS."
      ],
      correctAnswer: [0, 2],
      urlImage: ""
    },
    {
      "question": "You are about to verify a set of automated tests. During the verification process, you have found that some test scripts pass once and fail another time, therefore, they do not provide reliable test results. What should you do to verify the validity of your test scripts?",
      options: [
        "A) This is due to the parallel execution of test scripts; synchronization would solve the problem.",
        "B) Re-execute the automated test suite and analyze the test results again.",
        "C) Remove the test scripts from the automated test suite and analyze them separately.",
        "D) This happens because several test scripts are using the same test data, so separating the test data for each test script would solve the problem."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You have a test suite containing 25 automated tests that verify the login functionality of an application's home page. The test suite runs at the end of each two-week sprint cycle for regression testing purposes. You notice that two test cases out of 25 can sometimes cause a race condition in the application or receive a random error. What action should you take for these two test cases?",
      options: [
        "A) Take no action because they sometimes run successfully.",
        "B) Reduce the number of test cases in the test suite from 25 to 15 and see if the test suite passes with the smaller number.",
        "C) Remove the two test cases from the active test suite and analyze them separately to find the root cause.",
        "D) Replace the two test cases with others that pass repeatedly so that the test suite still has 25 automated test cases."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You are working on a project to automate a regression test suite. When the regression test suite was run manually last time, all tests passed. But when you run them through the test automation solution (TAS), you find that some tests are failing. What should you do to handle this situation?",
      options: [
        "A) Analyze the log files to identify the root cause of the problem.",
        "B) Remove these test cases from the automated test suite, so that the remaining tests can pass.",
        "C) Open a defect for the SUT as the failing tests indicate an SUT problem.",
        "D) This is normal because automated tests behave differently from manual tests."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are preparing to run a test automation suite for a security-critical application that must meet the highest security requirements. What approach should you follow to verify the test automation code?",
      options: [
        "A) Search test logs for possible credential data.",
        "B) Remove test cases that use sensitive test data.",
        "C) Run the test suite slowly and methodically to check for security vulnerabilities.",
        "D) Use a static analysis tool to identify security vulnerabilities."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "You are working on a test automation project that is used to automate Graphical User Interface (GUI) tests for an online web store. The web store contains an assistant that helps users set up their accounts: their names, billing address, shipping address, and security credentials. Currently, software development is at a phase where usability testers review the assistant and make recommendations for necessary changes. This is done iteratively; developers modify the GUI, usability testers review the modifications, and repeat usability tests. Test automation focuses primarily on maintenance testing. In these UI-based test cases, data also includes UI localization values. An existing problem is that developers often change the internal identifiers of UI elements, so maintaining tests requires a lot of effort. Which of the following could be a significant improvement opportunity?",
      options: [
        "A) Apply schema validation, which verifies if mandatory response elements are present in the GUI.",
        "B) Improve test logging to include information about UI elements and their locators to easily identify broken test cases.",
        "C) Create a test histogram, which allows TAEs to identify and select test cases that are fragile.",
        "D) Use an artificial intelligence (AI) algorithm - which is based on machine learning and image recognition - to identify new selectors and use self-healing to fix test cases."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Your organization maintains a regression test suite of over 1000 automated test cases that has been extremely reliable over the years. Recently, the development team has decided to modernize their technology stack and are currently refactoring how their front end operates. You notice that the application is much more API-driven than the previous version and this has an impact on how UI elements are rendered. You anticipate that this will affect the 75% success rate of your automated test cases. What data analysis approaches should you use to determine how to fix your affected automated test cases?",
      options: [
        "A) Run test cases multiple times in a CI/CD pipeline, perform visual report analysis, and draw conclusions from a test histogram.",
        "B) Use AI algorithms and API schema validation tools.",
        "C) Recreate automated test cases to replace those that are not working correctly and will run on the new application.",
        "D) Avoid automating certain test cases after analyzing exception logs, screenshots, and error messages."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You are working on an automated regression test suite that takes too long to run, and its execution does not finish overnight. The test environment is only available for regression testing overnight. Running multiple suites in parallel is not an option, as the target system is expensive and exists only as a single instance. What should be your next steps to ensure that the test suite execution finishes overnight?",
      options: [
        "A) Divide the test suite into multiple parts, running the parts on different nights of the week.",
        "B) Isolate test result verification from test execution and start the verification process after test execution during morning hours.",
        "C) Rewrite tests using the keyword-driven technique, as they will run faster.",
        "D) Remove some tests from the test suite to reduce the total execution time.",
        "E) Remove any duplicate tests from the test suite."
      ],
      correctAnswer: [0, 4],
      urlImage: ""
    },
    {
      "question": "As a TAE, you are evaluating new versions of core libraries. What is the correct order that can help you achieve these results?",
      options: [
        "A) Create an adoption plan; determine impact; update dependencies; perform a pilot.",
        "B) Perform a pilot; determine impact; create an adoption plan; update dependencies.",
        "C) Update dependencies; determine impact; perform a pilot; create an adoption plan.",
        "D) Determine impact; update dependencies; create an adoption plan; perform a pilot."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You have been performing a quality review of a TAS to optimize the interaction of controls within the GUI. The GUI includes various types of controls (e.g., dropdown list, checkbox, text field). There are also separate functions in the test scripts that act on the different types of GUI controls to collect information and configure them (e.g., visible/not visible, enabled/not enabled). Which of the following steps should you consider to increase the efficiency of the TAS?",
      options: [
        "A) Separate the testing of controls according to their types into different test suites.",
        "B) Investigate whether there is a test automation tool that can replace the current solution.",
        "C) Check if there are functions that can work with various types of controls and consolidate test scripts using these functions.",
        "D) Use new operating system features in test scripts to handle GUI controls."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "As a test automation engineer, you have automated the performance testing of a customer management system. To effectively test the performance of this system, you need to create diverse test data that includes customers with varied profiles based on different input criteria. What is the best way to implement such a solution?",
      options: [
        "A) Employ a test automation tool to invoke a web service API that creates new user accounts and populates their profiles with the specified data.",
        "B) Manually register these users through the GUI, so that GUI functionality can also be tested.",
        "C) Use the production database during testing, as it has the actual volume and type of data.",
        "D) Implement a test automation script to anonymize customer data before using it during performance testing."
      ],
      correctAnswer: 0,
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
    "nameQuiz": "Test Automation Engineering Advanced",
  }
}
window.data_en = data_en;
