// Advanced Level Test Automation Engineering example 2
const data_en = {
  questions: [
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
    "errorLoading": "Error loading the quiz. Please try again later."
  }
}
