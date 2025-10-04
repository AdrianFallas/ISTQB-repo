const data_en = {
  questions: [
    {
      "question": "You discuss the introduction of test automation with project management. Which statements about the advantages and limitations of test automation are correct?",
      options: [
        "A) Automated test cases are consistent and can be repeated any number of times on different versions of the system under test (SUT) and/or environments.",
        "B) Limited resources allocated only to test automation are no longer available for manual testing.",
        "C) Automated testing tools must be continuously updated. This maintenance effort has a negative impact on testing costs.",
        "D) With test automation, tests can be performed that cannot be executed manually or only with significant effort.",
        "E) Feedback on software quality takes much longer because test results usually need to be evaluated by a tester."
      ],
      correctAnswer: [0, 3], // Options A and D are correct
      urlImage: ""
    },
    {
      "question": "Which of the following statements describes an important technical success factor for any large test automation project?",
      options: [
        "A) The test automation strategy must ensure that different areas of the SUT can be tested in the same way.",
        "B) In automated GUI testing, test data and interaction controls must be tightly coupled to the GUI design.",
        "C) Ensure that automated test scripts can be easily isolated and removed when no longer useful or needed in a current test execution.",
        "D) The test automation project must support the automation of all manual tests for test automation to achieve long-term value."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a recommended approach for establishing an easy-to-use and maintainable test automation framework (TAF)?",
      options: [
        "A) Define and implement test reporting facilities.",
        "B) Enable easy troubleshooting.",
        "C) Include test automation that is sensitive to changes in the user interface (UI).",
        "D) Keep automated tests up to date."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Which is NOT a success factor for a test automation project?",
      options: [
        "A) Tests that support test automation.",
        "B) Decoupling of GUI interaction and test data.",
        "C) Test automation challenges of the SUT must be addressed first.",
        "D) Exposing APIs as public."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Your company is planning to introduce test automation and has asked you to lead the test automation project. There are several projects in the company, some of which would benefit from test execution automation. To test the effectiveness of test automation, which project should you choose for a pilot test?",
      options: [
        "A) Project Alpha, which is a very small project and is a minimal functional addition to another project. They expect the simplicity of the project to result in quick test automation successes.",
        "B) Project Beta, which is your company's mature standard application. With this selection, you hope to be able to test the test automation solution (TAS) in a realistic scenario.",
        "C) Project Gamma, which is still in prototyping. At this early stage, the project is still unstable and you expect to find many defects with test automation.",
        "D) Project Delta, which is already behind schedule. By automating, you hope to deliver on time, demonstrating great success in test automation."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "Your board of directors gives you the requirement to save costs on your development project. Which of the following is NOT a good argument for outsourcing your test automation?",
      options: [
        "A) Your company has very specialized software that is not easy to understand, so you would like to outsource test automation so your staff can focus on other projects.",
        "B) The project is part of a larger project, so that knowledge is already available in the company.",
        "C) There are some test automation engineers (TAEs) in your company with the required skills who need a new long-term occupation, but are not yet available in the short term for your organization.",
        "D) No additional software or hardware needs to be purchased for test automation."
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "What is the main advantage of a floating license?",
      options: [
        "A) Those who use software under this license will only be billed for the time they use the software.",
        "B) There are many users of the software, making it easy to gather information and get support.",
        "C) Software under this license can be easily modified if necessary.",
        "D) Software under this license can be used by many employees on different systems."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which cost factor should NOT influence your decision on a test automation implementation strategy and a TAS to use?",
      options: [
        "A) Hardware and licenses.",
        "B) Time constraints.",
        "C) Number of TASs.",
        "D) Maintenance."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "You are a test leader in a project and are looking to strengthen your testing team. What skills should you focus on in your search?",
      options: [
        "A) The applicant has a solid technical knowledge of different software development life cycles (SDLCs).",
        "B) The applicant is knowledgeable and very self-confident.",
        "C) The applicant is a good programmer but prefers to work alone on a challenge.",
        "D) The applicant has good teamwork skills and can explain facts well.",
        "E) The applicant has frequently led testing teams."
      ],
      correctAnswer: [0, 3], // Options A and D are correct
    },
    {
      "question": "Associate the statements with the correct form of the test automation pyramid.",
      options: [
        "A) 1A, 2B, 3C, 4D",
        "B) 1C, 2B, 3D, 4A",
        "C) 1B, 2D, 3C, 4A",
        "D) 1D, 2A, 3D, 4C"
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": `You define a test strategy and break down the layers in your approach as follows: UI, API, integration, and component.\n
                   "1. It is tempting to ignore rare configurations in UI tests, but they can still be relevant for production environments."\n
                   "2. API tests include testing APIs directly in isolation with mocks and as part of end-to-end transactions performed during integration tests."\n
                   "3. Agile and DevOps teams working with short iterations and rapid feedback cycles are finding that GUI tests require very little maintenance, while API tests require more maintenance."\n
                   "4. API testing is recommended for the vast majority of test automation efforts and as much boundary value analysis as possible."\n
                   "5. Component tests are reserved for validating system-level use cases, mobile testing, and usability testing."\n
                   "6. An integration test determines whether the interaction and interfaces between components work as expected."\n
                   "7. With the help of component tests, errors can be detected at an early stage and, under certain circumstances, can even be reduced to the line of code that caused them."\n
                   "8. The more complicated the functionality, the less important component tests are."
                   Which statements are true?`,
      options: [
        "A) 1, 2, 4, 6, 7",
        "B) 1, 2, 5, 6, 8",
        "C) 1, 3, 5, 7, 8",
        "D) 2, 4, 5, 6, 7"
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "Give TWO reasons why you should consider the 'shift right' approach.",
      options: [
        "A) To save tester resources for later.",
        "B) To expand the scope of test automation and coverage.",
        "C) To move tests towards the beginning of the SDLC.",
        "D) To identify problems in a production system at an early stage.",
        "E) To deploy components that have already been thoroughly tested as canary releases."
      ],
      correctAnswer: [1, 3], // Options B and D are correct
      urlImage: ""
    },
    {
      "question": "You are going to lead a test automation project on legacy software. What are TWO important aspects to consider?",
      options: [
        "Convert the legacy software architecture to microservices before writing new tests.",
        "Rewrite all tests from scratch, as legacy TASs are often outdated.",
        "Increase coverage in system integration tests to detect early errors.",
        "Focus on system tests, as it is not worth writing new component tests.",
        "Introduce more meaningful component tests to facilitate future refactorings."
      ],
      correctAnswer: [2, 4], // Options C and E are correct
      urlImage: ""
    },
    {
      "question": "Which of the following statements best describes how test automation projects align with agile software development best practices?",
      options: [
        "Test automation is more technical than manual functional testing, therefore it fits better in Agile.",
        "Agile promotes sustainable development, which is achieved with an adequate balance of automated tests at all levels.",
        "Agile teams usually do not estimate testing effort, but automation facilitates it.",
        "One of the Agile principles is 'continuous attention to technical excellence and good design', and automation fits with this."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "Your company has a mature and disciplined approach to test automation. Teams have implemented test automation at all test levels defined in the organization: UI, API, integration, and component. However, the build pipeline in some of the teams takes a long time to execute all steps. As the test automation architecture (TAA) responsible, you are responsible for finding a solution that helps each team, which option should you NOT consider when giving your recommendation?",
      options: [
        "Reduce the scope of UI tests to a set of smoke tests.",
        "Execute the full regression suite outside the build pipeline.",
        "Perform boundary value analysis manually.",
        "Replace the current automation tool."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "What is a good reason to ask: 'Is the test case highly repeatable?' when selecting and prioritizing cases for automation?",
      options: [
        "A highly repeatable test case will be easier to implement.",
        "A highly repeatable test case should not be automated.",
        "A highly repeatable test case has potential for good return on investment (ROI).",
        "A highly repeatable test case has already proven to work well."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Which of the following challenges can only be addressed by test automation?",
      options: [
        "Test results need to be integrated into the development pipeline.",
        "Licenses are still available for the automation tool.",
        "Manual intervention is required to execute test cases.",
        "The specification is unclear, but testing must begin."
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "Which of the following test conditions is difficult to automate?",
      options: [
        "It is possible to have many data combinations within the system.",
        "The interface must be consistent across different platforms.",
        "The system must work even if thousands of users are online.",
        "The functional suitability of the system must be tested on different devices."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "How does test automation facilitate bringing a product to market in a timely manner?",
      options: [
        "By following a shift-left approach and allowing parallel test execution.",
        "By reducing manual effort to develop test cases.",
        "By decreasing manual testing time by reducing the effort to cover the scope.",
        "By covering more data combinations in the same time as manual tests."
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "What is the best reason to automate defect confirmation tests?",
      options: [
        "Close a gap in existing automation.",
        "Ensure that the defect fix works and continues to work.",
        "Justify the time spent finding the defect based on its severity.",
        "Test the configuration management process."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "Which of the following approaches is MOST suitable for testing the operational scenario 'Software Update'?",
      options: [
        "Failover testing.",
        "Backup and restore testing.",
        "Security testing.",
        "Operational documentation review."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which of the following options includes all elements that should be considered in a good test automation deployment strategy?",
      options: [
        "Test environment; people; application access; script storage; data provisioning.",
        "Tools; test data; application access; script storage; software licenses.",
        "Test environment; tools; requirements; script storage; data provisioning.",
        "Test environment; tools; application access; script storage; data provisioning."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a consideration a TAE should take into account when developing and deploying a TAS?",
      options: [
        "Test environment configuration.",
        "Tool licensing requirements.",
        "Centralized storage of test scripts.",
        "Manual test design techniques."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which of the following technical problems can generate a risk for the project or product?",
      options: [
        "Delays in the introduction of test automation.",
        "Poorly defined keywords.",
        "Staffing problems.",
        "Delays in updating the TAS."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "Which of the following aspects is important when mitigating risks in test automation deployment?",
      options: [
        "The right people must be available during deployment.",
        "The right time of day for deployment must be selected.",
        "The TAS must be under configuration management control.",
        "The SUT must already be installed."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT considered a component of the test automation environment?",
      options: [
        "Tools.",
        "System under test (SUT).",
        "Test suites.",
        "Test automation architecture (TAA)."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which of the following options contains ALL correct MAJOR infrastructure components for test automation?",
      options: [
        "Network, interface with the SUT, host machines.",
        "Platform, network, code.",
        "Host machines, platform, proxy.",
        "Code, host machines, network."
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "A Test Automation Engineer (TAE) is designing automated tests for a web application that stores records in a database. Which of the following statements is NOT correct regarding the definition of test data and interfaces for this system?",
      options: [
        "The TAE can use browser automation for UI tests and an API for database interaction tests.",
        "The Test Automation Architecture (TAA) must be used to define all test conditions.",
        "Contract testing can be used to verify compatibility between the web application and the database system.",
        "User interface tests should be performed on both desktop and mobile devices to ensure cross-platform compatibility."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "The following table shows the progress and return on investment of automated test case development. The team has previously defined 500 test cases that were executed manually. The average manual execution time for a test case is 10 minutes, while with test automation it is reduced to 1 minute. All savings and investment calculations are in the table. In which sprint is the return on investment (ROI) point for automated test development efforts reached?",
      options: [
        "Sprint 6",
        "Sprint 7",
        "Sprint 8",
        "Sprint 9"
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: "./imagenes/tabla preg29.png"
    },
    {
      "question": "You have recently taken over leadership of a testing team responsible for end-to-end UI validation of a retail store. The team has one manual tester and one TAE. Constant complaints indicate that both manual and automated tests are time-consuming. There is no possibility of adding more TAEs.\n The TAF is not integrated into the CI/CD pipeline and ROI has not been calculated. The following data is provided in minutes. Test execution is based on each sprint:\n1. Time to execute a manual test case\n2. Number of automated scripts implemented\n3. Average maintenance time per automated script\n4. Total number of test cases\n5. Average time to develop automated scripts\n6. Time to execute an automated test case\nWhich TWO options cover the necessary inputs to calculate the return on investment (ROI)?",
      options: [
        "1, 2, 5",
        "2, 3, 5",
        "4, 5, 6",
        "1, 4, 6",
        "3, 4, 6"
      ],
      correctAnswer: [1, 3], // Options B and D are correct
      urlImage: ""
    },
    {
      "question": "Which of the following metrics is important to collect to track the percentage of requirements covered by automated test cases?",
      options: [
        "Number of automated test cases.",
        "Functional automation coverage.",
        "Success/failure ratio.",
        "Code coverage."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "You join a product development team as a new member and the only TAE. When developing automated test cases, you notice that some are unreliable and do not yield consistent results due to changes in test data. Other testers are using part of the same testware as your TAS. What organizational consideration did you forget to identify before starting TAS development?",
      options: [
        "Software development policies and practices.",
        "Active test automation projects and their status.",
        "Testing tools and licenses.",
        "Availability of test data and separate environments."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "The CIO of a healthcare company hires you as a consultant for a 6-week evaluation. Your responsibility is to deliver recommendations to improve test automation practices across the organization.\n Which of the following project characteristics will help you define successful test automation objectives that will allow you and the CIO to convince TAEs to follow the recommended changes?",
      options: [
        "Management support and budget.",
        "Project maturity.",
        "Team knowledge and relevant experience.",
        "Create a new architecture."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "You join a company as a Quality Architect. Your first task is to evaluate the TAS of a sub-department focused on payment solutions. Currently, the TAS only verifies the API status and its ability to connect to services. Which of the following quality characteristics should you evaluate first?",
      options: [
        "Portability.",
        "Reliability.",
        "Maintainability.",
        "Functional completeness."
      ],
      correctAnswer: 3, // Option D is correct
      urlImage: ""
    },
    {
      "question": "Which of the following decisions is NOT usually made by a strategic person in test automation during report consolidation?",
      options: [
        "Advise business representatives on new functionalities for future versions.",
        "Advise developers on areas of code that need improvement.",
        "Identify trends and perform root cause analysis.",
        "Advise on general software development processes."
      ],
      correctAnswer: 0, // Option A is correct
      urlImage: ""
    },
    {
      "question": "What describes the analysis needed to ensure that the same test automation steps are not repeated in multiple scripts?",
      options: [
        "Cost transition.",
        "Data sharing.",
        "Functional overlap.",
        "Test execution preconditions."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "What factors should be considered from a quality assurance perspective to facilitate a smooth transition from manual to automated testing?",
      options: [
        "Test tool licenses.",
        "Component test coverage.",
        "Coverage.",
        "CI/CD system availability."
      ],
      correctAnswer: 2, // Option C is correct
      urlImage: ""
    },
    {
      "question": "Which CI/CD process is leveraged to include an additional automated UI testing step within the application build process?",
      options: [
        "Build orchestration tool.",
        "Pipelines.",
        "Test harness.",
        "Code repository."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": "Your organization has invested in the development of a new TAS. It has been used as a standalone tool for the testing team and also within the CI/CD pipeline. You are responsible for evaluating its effectiveness and suggesting areas for improvement. After three sprint cycles, you observe the following:\n1. Although test cases are automated, a lot of manual time is spent creating initial user accounts and enabling their access in the application's database.\n2. The team spends a lot of time updating automation code related to the home page in various automated test cases, due to refactorings and changes in object properties.\n3. As more automated cases are created, the CI/CD process seems to lose speed.\nWhich set of changes should be applied to address these observations?",
      options: [
        "Use a single user account for all test cases, do not automate the home page as it constantly changes, and add more hardware resources to the CI/CD environment.",
        "Create automated precondition scripts, identify opportunities to decompose and modularize test scripts, and reduce the pipeline scope to the most critical integrated tests.",
        "Virtualize the database with default data, ask developers to stop changing object properties on the home page, and use a single automated case in the CI/CD pipeline.",
        "Ask the development team for a batch process to create user accounts, ask for more TAEs to keep up with changes, and exclude UI tests from the CI/CD pipeline."
      ],
      correctAnswer: 1, // Option B is correct
      urlImage: ""
    },
    {
      "question": `You join an ongoing project where the TAS needs refactoring and functional extension due to new business requests. There is TAS documentation that was updated according to project load and capacity.\nWhat steps should be considered when refactoring existing TAS functionality?",
    
       i.   Ignore documentation as it is outdated.\n
       ii.  Disable failing test sets.\n
       iii. Make a list of possible improvements.\n
       iv.  Update TAS documentation according to changes.,\n
       v.   Update TAS dependencies without investigation.`,
      options: [
        "i, ii, v ",
        "ii, iv",
        "i, iii, v ",
        "iii, iv "
      ],
      correctAnswer: 3, // Option D is correct
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
