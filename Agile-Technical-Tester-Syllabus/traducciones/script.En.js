const data_en = {
  questions: [
    {
      "question": "Given the epic:\n“As a marketing department leader, I want to have a content management system so that my employees can edit and provide quality content to readers.”\n\nWhich of the following requirements engineering techniques would be MOST effective for identifying and prioritizing user stories for the given epic?\nSelect TWO options.",
      options: [
        "a) Storyboarding",
        "b) Story mapping",
        "c) Personas",
        "d) Class diagrams",
        "e) Use cases"
      ],
      correctAnswer: [0, 1],
      urlImage: " "
    },
    {
      "question": "You need to review the following user story that will be developed and tested in the next sprint:\n“As a potential conference attendee, I want to be able to register online, so that registration is simple and paperless.”\n\nThe following acceptance criteria are also mentioned:\ni. Payment can be made via PayPal, debit or credit card\nii. A confirmation email is sent to the attendee after submitting the form\niii. Spam protection works as expected\niv. Form information is stored in the registration database\nv. All incorrect user inputs are flagged by the system\n\nWhich of the following options correctly shows which acceptance criteria are testable?\nSelect ONE option.",
      options: [
        "a) ii, iv, v are testable",
        "b) i, iii, v are testable",
        "c) i, ii, iv are testable",
        "d) iii, iv, v are testable"
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which of the following correctly describes a positive characteristic of unit testing?",
      options: [
        "a) Unit tests should be independent of system components not being tested",
        "b) Unit tests can be derived from given epics and existing code of the object under test",
        "c) During refactoring, redesigning the unit test to fit the changed code is crucial",
        "d) A unit test should be written for large and complex code structures to get quick feedback on quality"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "A developer has implemented a class that calculates if a given date is a leap year. The definition is:\nEvery year divisible exactly by 4 is a leap year, except for years divisible by 100, but those centurial years are leap years if they are divisible by 400.\n\nYou have already started with the first test class; it looks like this (JavaScript pseudocode):\n// LeapYear.spec.js\ndescribe('Leap Year Calculator', () => {\n  it('should consider 1996 as a leap year', () => {\n    expect(LeapYear.isLeap(1996)).toBe(true);\n  });\n});\n\nWhat would be your next step to efficiently validate the class?",
      options: [
        "a) First write additional test classes for other relevant aspects of the calculation",
        "b) First write code that covers other relevant aspects of the calculation",
        "c) First write code that makes this test case fail",
        "d) First write code that makes this test case pass"
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "You are responsible for defining the testing approach for a safety-critical automotive cruise control system.\nNotation: ++ (highly recommended), + (recommended), o (neutral), - (not recommended), -- (do not use).\n\nWhich of the following tables BEST defines the testing approach?",
      options: [
        "Table A",
        "Table B",
        "Table C",
        "Table D"
      ],
      correctAnswer: 1,
      urlImage: "./imagenes/tabla1.png"
    },
    {
      "question": "Which of the following statements about executing exploratory tests using charters is correct?",
      options: [
        "a) Unlike black-box testing, the expected outcome is documented after the defect is found and not as part of the design",
        "b) Charters are useful when there is a detailed specification of the system to be tested",
        "c) The result of executing exploratory tests with charters is finding defects and specification issues",
        "d) Exploratory and black-box testing use the same coverage metrics"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "In agile projects, test case refactoring is needed for many reasons.\nWhich of the following statements about test case refactoring is correct?",
      options: [
        "a) It is performed to adapt test cases to changes in functionality, improving regressions and maintaining alignment with the product",
        "b) It is needed because we cannot write detailed cases during short iterations; it benefits development pace and allows generating new tests quickly",
        "c) In agile environments, refactoring is used to shorten test cases; it allows writing and automating tests faster",
        "d) It is performed as a process with steps: Identification, Refactoring, Re-execution, and Identification; it improves regression tests and alignment with the code"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Summarize the characteristics of test automation in relation to development projects.",
      options: [
        "Automation can play an important role in test environment setup and delivery acquisition.",
        "In large projects, there is usually a single solution that fits all needs, therefore dedicated automation strategies are best.",
        "Test automation directly supports iteration goals, for example, by reducing regression risk related to system stability.",
        "Automation effort should be carried out directly by iteration teams."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "A growing proportion of automated test coverage usually leads to a higher degree of manual testing following reactive strategies, because:",
      options: [
        "Many of the tests that can be prepared in advance are automated, allowing testers to spend more time executing manual tests.",
        "An increase in the proportion of automated tests increases coverage, and uncovered areas must be tested reactively.",
        "If the proportion of automated tests increases, manual tests focus on higher-risk areas, identified reactively.",
        "Reactive strategies consider the context and current state of the project and the system under test. To adapt more flexibly, a higher degree of manual testing is needed."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following challenges of test automation in agile environments is correctly described?",
      options: [
        "Resource availability is a challenge, as resources are needed to create, maintain, and execute the test suite.",
        "Unit test automation is the most critical in agile environments and covers most quality and coverage challenges.",
        "Test deployment time is a challenge, as slow deployment is not possible in short iterations.",
        "Execution time is not critical in agile because fewer tests are written and they are designed as high-level checklists."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Your project has reached a stable state and has been deployed in different hardware configurations across Europe. It was used as a pilot test to adopt CI and was successful in one configuration. What would be the most appropriate next step?",
      options: [
        "Enable different test configurations in CI to evaluate deployed versions in the market.",
        "Accelerate test execution by reducing the number of user interface tests.",
        "Reduce the number of tests in the CI suite to improve focus.",
        "Implement code that dynamically selects CI tests, executing only cases affected by changes."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "A Swiss banking system uses third-party services to execute certain transactions. Is it appropriate to use service virtualization when testing this system?",
      options: [
        "No, as the third-party service is external to the system.",
        "Yes, as it allows performing time-controlled non-functional tests.",
        "Yes, as it simplifies the test environment of the external component.",
        "No, as this type of configuration cannot simulate message travel time on the network."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following is a correct description of the qualitative questionnaire technique?",
      options: [
        "Uses open-ended questions to add depth to quantitative research. It is more time-intensive, so it is suitable for small groups.",
        "Uses closed-ended question data to make comparisons between data points. Serves as a basis for acceptance criteria.",
        "Uses Yes/No questions as a complement to key questions. Can generate additional information leading to new user stories.",
        "Uses interviews to gain insight into context and causes. Allows deriving acceptance criteria from the user's perspective."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following statements is correct regarding Story Mapping?",
      options: [
        "Visualizes the priority order of stories, which determines the development effort of test cases.",
        "Provides a detailed view of each story that helps define test levels.",
        "Offers a holistic view of the system that helps define the testing strategy.",
        "Visualizes the complexity of stories, which determines the priority of test execution."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "You are developing automation for a strategy aimed at preventing regressions. Which attribute applies especially?",
      options: [
        "The regression test suite grows along with functionalities.",
        "Automated tests are continuously improved and refactored.",
        "Tests are implemented to facilitate maintainability.",
        "The number of tests is limited by the project's test pyramid."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "You are a QA Manager in a project where each functionality requires testing many input combinations. You want to validate if the data-driven testing (DDT) approach would help. Which option would be best for a proof of concept?",
      options: [
        "Ask the team to create several test cases that read data from a file and execute them.",
        "Ask them to adapt existing test cases to work with certain data.",
        "Ask them to prepare a test case for a functionality, read a data sample, and execute it.",
        "Ask them to prepare a general case that reads from a file and executes all tests."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which of the following statements about continuous testing and continuous delivery are correct?\nSelect TWO options.",
      options: [
        "The tester executes daily tests at pre-established times as part of continuous delivery.",
        "Tests are executed every time a developer uploads a new version of the code.",
        "Developers update the code repository at fixed intervals each day.",
        "Automated deployment is scheduled to occur at least once a day.",
        "Application deployment is triggered every time continuous tests run successfully."
      ],
      correctAnswer: [1, 4],
      urlImage: " "
    },
    {
      "question": "Which of the following phrases best describes a virtualized service?",
      options: [
        "A virtual machine configured to offer various services to multiple users.",
        "A process that simulates the relevant behavior of a real service. It can be accessed by multiple users simultaneously.",
        "A physical system that simulates the behavior of a real service. It can be accessed by multiple users.",
        "An installation of multiple virtual machines configured to offer a service to multiple users simultaneously."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following describes the use of 'Personas' for requirements specification?",
      options: [
        "Analyze how Laura, a digital marketer, interacts with the system to define acceptance criteria.",
        "Visualize the group of user stories Laura works with.",
        "Select the appropriate testing approach for marketers based on visual aspects of the system.",
        "Describe the sequence of system operations when Laura uses it."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Scenario:\nYou, as a tester in a BDD environment, know that the following user story needs to be implemented and tested:\n“As a store owner, I want to keep track of my inventory when items are returned or exchanged, so I can track inventory.”\nAssuming you have the following items in stock: 12 t-shirts, 10 sweaters, 2 caps, 7 skirts.\nWhich of the following scenarios should NOT be used as a basis for generating test cases?",
      options: [
        "a) Given a customer previously bought 2 t-shirts,\nwhen they return the t-shirts for a refund,\nthen I should have 14 t-shirts in inventory.",
        "b) Given a customer previously bought 1 cap,\nwhen they exchange it for a skirt,\nthen I should have 3 caps and 6 skirts in inventory.",
        "c) Given a customer previously bought 2 sweaters,\nwhen they exchange them for a cap,\nthen I should have 12 sweaters and 1 cap in inventory.",
        "d) Given a customer previously bought 3 skirts,\nwhen they return these skirts for a refund,\nthen I should have 4 skirts in inventory."
      ],
      correctAnswer: 3,
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
    "restart": "Restart"
  }
}