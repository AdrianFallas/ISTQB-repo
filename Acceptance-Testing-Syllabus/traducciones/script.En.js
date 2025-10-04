const data_en = {
  questions: [
    {
      "question": "Which of the following statements BEST describes the relationship between business objectives, business needs, and requirements?",
      options: [
        "Business objectives and business needs are synonymous.",
        "Business objectives, business needs, and requirements describe what needs to be achieved at different levels of abstraction.",
        "Business needs address the business solution while requirements define the business problem or opportunity.",
        "To derive business needs, the business analyst must first understand business objectives and requirements."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following statements about acceptance criteria is true?",
      options: [
        "Acceptance criteria are specific to agile frameworks where they correspond to functional requirements.",
        "Testers should not be involved in writing acceptance criteria to ensure testing independence.",
        "In Acceptance Test-Driven Development (ATDD), acceptance criteria replace acceptance tests.",
        "Acceptance criteria specify what needs to be tested to verify that a requirement or user story has been correctly implemented."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which of the following statements about requirements quality is MOST correct?",
      options: [
        "Vague or ambiguous requirements can lead to misunderstandings during both implementation and testing.",
        "In agile development lifecycle models, requirements engineering becomes less important due to the Product Owner's role.",
        "INVEST is a technique that ensures the quality of user stories or requirements, replacing regular reviews.",
        "Testers can complete unclear requirements by making assumptions, provided they discuss them with at least one stakeholder."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "How do ISTQB CTFL testing activities relate to IQBBA FL business analysis and requirements engineering activities?",
      options: [
        "Business analysts following the IQBBA requirements engineering process will not participate in test case design.",
        "Business analysts and testers must decide whether to follow IQBBA or ISTQB lifecycle processes, as they are mutually exclusive.",
        "The IQBBA solution evaluation phase precedes the ISTQB implementation and test execution activities.",
        "Test analysis and design activities can result in changes to acceptance criteria."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST describes the collaboration between business analysts and testers?",
      options: [
        "Business analysts collaborate on test planning and risk analysis to ensure that appropriate test cases are subsequently developed and prioritized.",
        "Business analysts usually cannot review acceptance tests because they do not understand the technical details.",
        "Testers participate in identifying stakeholder business needs to better understand related needs and requirements.",
        "Once requirements and acceptance criteria are defined, business analysts are no longer involved in testing activities."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following statements about ATDD / BDD is true?",
      options: [
        "Behavior-Driven Development (BDD) considers acceptance test design as an activity performed by the testing team after requirements are finalized.",
        "In ATDD and BDD, test cases provide examples of product usage.",
        "In ATDD, test cases are written before acceptance criteria.",
        "In ATDD and BDD, acceptance cases are written as automated code by a test automation engineer."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following would be the BEST example of an acceptance criterion for requirement REQ 3.28: The automated system records critical credit application data (CCAD) needed to support application evaluation?",
      options: [
        "CCAD is stored in the MySQL relational database after each successful data entry procedure.",
        "CCAD is not recorded if incomplete and a message is displayed.",
        "The CCAD recording process is fast and reversible.",
        "The CCAD collection process complies with corporate usability guidelines."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": `Which of the following proposals would be considered well-written acceptance criteria for the following user story?

User Story:
As an unregistered player,
I want to be able to register by defining my email, username, and password in a registration form
to become a registered player.

Proposed Acceptance Criteria:
i. a registration form is displayed on screen.
ii. the form is written in Groovy language; the cursor is initially placed in the 'login' field; pressing TAB moves through 'password', 'repeat password', 'mail', and 'repeat mail'.
iii. I cannot register if the chosen username is already in use.
iv. after successfully completing the registration process, I am notified by email.`,
      options: [
        "a) only i) and iii)",
        "b) only ii)",
        "c) only ii) and iv)",
        "d) only i), iii) and iv)"
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which of the following statements correctly describes how acceptance testing can be complemented with other testing techniques?",
      options: [
        "In a model-based approach, acceptance tests are generated from graphical or textual models.",
        "In a priority-based approach, acceptance test prioritization depends on product risks.",
        "In a risk-based approach, acceptance criteria are derived from the tester's experience and intuition.",
        "In a black-box approach, test scenarios follow the implemented sequence of function calls in the code."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following test design techniques BEST fits the purpose of acceptance testing?",
      options: [
        "static code analysis",
        "input validation",
        "equivalence partitioning",
        "defect-based test design"
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": `Suppose you are testing the functionality of an elevator interface.
    One of the requirements is that the elevator only operates if the total weight of passengers does not exceed 200 kg.
    It can reach the following floors: Ground Floor, 1st floor, and 2nd floor.
    You want to create an acceptance test using Gherkin language. You can use the following phrases:
    i- the total weight of passengers is greater than 200 kg
    ii- the elevator is on the Ground Floor
    iii- the '1st floor' button was pressed
    iv- the elevator goes up to the 1st floor
    v- a passenger on the 2nd floor calls the elevator
    vi- a 'too many passengers' message is displayed

    Which of the following statements correctly assigns the GIVEN/WHEN/THEN constructs with the corresponding phrase to create a correct test case?`,
      options: [
        "GIVEN ii) WHEN i) THEN vi)",
        "GIVEN ii) WHEN iv) THEN v)",
        "GIVEN iii) WHEN ii) THEN iv)",
        "GIVEN ii) WHEN v) AND vi) THEN i)"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following examples BEST represents a Gherkin test for a web banking application?",
      options: [
        "GIVEN I have $5000 in my account X AND I have $200 in my account Y WHEN I transfer $1000 from X to Y THEN I should have $4000 in X AND $1200 in Y",
        "GIVEN I have $5000 in account X AND $200 in account Y WHEN I click 'Transfer', enter '3000' in 'Amount', select X as origin and Y as destination, and confirm THEN I should have $2000 in X AND $3200 in Y",
        "GIVEN I have $5000 in account X and $600 in account Y WHEN I transfer $500 from Y to X THEN I should have $4500 in X and $1100 in Y",
        "GIVEN I have $5000 in account X WHEN I have $600 in account Y THEN I have $5600 total between accounts X and Y"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "In Agile, an exploratory testing session is conducted. Which of the following concepts BEST applies?",
      options: [
        "pair programming",
        "refactoring",
        "planning poker",
        "timeboxing"
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST describes an exploratory test charter?",
      options: [
        "Indicating that the tester should assume the role of a novice user can be part of an exploratory test charter.",
        "The test charter is elaborated during the test session based on execution results.",
        "Each exploratory test charter is based on a predefined list of activities that would be interesting to test.",
        "Acceptance testers use the exploratory test charter during the test session to define the test oracle."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "How do beta tests relate to acceptance tests?",
      options: [
        "Beta tests are synonymous with acceptance tests used in specific application domains.",
        "Beta tests should include predefined acceptance scenarios based on acceptance criteria.",
        "Beta tests allow testing the product in realistic business configurations and contexts.",
        "Beta tests are a systematic approach to acceptance testing and provide measurable coverage of user stories."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST defines beta testing?",
      options: [
        "Beta tests are performed by developers at the client's premises.",
        "Beta tests occur early in the development process to gather market feedback.",
        "During beta testing, real users define acceptance criteria for different realistic configurations.",
        "Beta testers discover defects in the product that escaped during development."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which is the correct DMN (Decision Model and Notation) model for a system that returns benefits based on two exam scores?",
      options: [
        "Benefit Table:\n0,0 → None\n0,1 → Partial\n1,0 → Partial\n1,1 → Full",
        "Benefit Table:\nExam Result → Benefit\n0 → None\n1 → Partial\n2 → Full",
        "Benefit matrix with YES/NO flags for each benefit level per exam combination",
        "DMN Rule Table:\nResult = Exam #1 + Exam #2\n0 → None\n1 → Partial\n2 → Full"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": `Suppose you want to create a model that describes the loan application process in a bank.
The process begins when the customer submits an application. Then the bank reviews it.
Regardless of whether it is approved or not, a letter is sent to the customer with the decision.
If approved, the loan contract is created.
You have drawn the following business process model using BPMN 2.0.

Which of the following statements is true regarding this BPMN model?`,
      options: [
        "Employment verification is not performed when the loan status is rejected.",
        "Loan contract creation is defined as a subprocess.",
        "Title search and credit report request are sequential tasks.",
        "Reviewing the credit report is optional during application review."
      ],
      correctAnswer: 1,
      urlImage: "./imagenes/diagrama-preg18.png"
    },
    {
      "question": "Which of the following minimum sets of test cases allows executing all possible tasks of the $100 withdrawal process in the BPMN model?",
      options: [
        "Test 1, Test 3",
        "Test 1, Test 2, Test 3",
        "Test 2, Test 4",
        "Test 1, Test 2, Test 4"
      ],
      correctAnswer: 0,
      urlImage: "./imagenes/diagrama-preg19.png"
    },
    {
      "question": "Which of the following minimum sets of test cases allows achieving full decision coverage in the $100 withdrawal BPMN model?",
      options: [
        "Test 1, Test 2, Test 4",
        "Test 1, Test 2",
        "Test 2, Test 3",
        "Test 1, Test 2, Test 3"
      ],
      correctAnswer: 3,
      urlImage: "./imagenes/diagrama-preg20.png"
    },
    {
      "question": "Which of the following statements about graphical representation of business processes is true?",
      options: [
        "Using decision tables in BPMN allows defining test conditions corresponding to business rules.",
        "Graphical representations should describe the complete flow in detail, including alternatives and errors.",
        "For acceptance testing, graphical process models should focus on the user flows to be evaluated.",
        "Business processes should be graphically represented using DMN and completed with decision tables."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "What is considered good practice in business process modeling?",
      options: [
        "Keeping all model elements in a single diagram significantly improves readability.",
        "BPMN diagrams and DMN tables should include traceability to user stories.",
        "Links to requirements or risks should be well separated from the flow description.",
        "Business analysts should finalize their models before showing them to acceptance testers."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following statements is the LEAST significant argument for using the ATDD approach with business process models in an HR application?",
      options: [
        "Models will help testers understand the use cases to be tested.",
        "Testers will be able to show coverage directly within the graphical representation of the process.",
        "Models will facilitate the detection of defects in the application code.",
        "As models will be updated to maintain tests, they will be living product documentation."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "What BEST explains how business process and rule models can be used in ATDD?",
      options: [
        "In ATDD, process/rule models should be created before project initiation.",
        "In ATDD, process models replace acceptance criteria.",
        "In ATDD, testers use models to generate acceptance tests.",
        "In ATDD, models are created for initial test design but are not maintained afterward."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which quality attributes are MOST relevant for acceptance testing?",
      options: [
        "Functional suitability, security, cognitive ability",
        "Functional suitability, security, maintainability",
        "Marketability, functional suitability, cognitive ability",
        "Feasibility, reliability, security"
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which of the following is a quality in use characteristic according to ISO 25010?",
      options: [
        "Efficiency",
        "Usability",
        "Compatibility",
        "Portability"
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST represents a UX requirements analysis activity?",
      options: [
        "Personas are used to analyze competitor products or solutions.",
        "User profiles are used to determine different levels of business knowledge.",
        "Security requirements are derived from usage scenarios.",
        "Environmental conditions such as lighting are obtained from a task analysis."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following scenarios BEST characterizes UX task analysis?",
      options: [
        "Users are classified according to their physical and intellectual characteristics.",
        "Use cases are analyzed and represented using business process models.",
        "External conditions are considered as inputs for subsequent design steps.",
        "Inspirations are sought in similar sectors to identify successful solutions."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following usability testing techniques BEST fits the testing objective?",
      options: [
        "Expert reviews help understand how users interact with the system and what is more or less visible.",
        "Biometrics-based evaluation helps retrospectively understand how users interacted and improve the system.",
        "Log file analysis performed by usability experts identifies interface strengths that attract user attention.",
        "Walkthrough and think-aloud methods can indicate difficulties users experience with certain tasks."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "Which of the following statements about performance testing is MOST correct?",
      options: [
        "Depending on the model used to simulate the workload, performance tests are called load, stress, or endurance/stability tests.",
        "Performance tests aim to determine the system's robustness against malicious attacks.",
        "System performance is measured in a context that reflects, as much as possible, representative operational conditions.",
        "Performance test results are used to determine hardware and software requirements."
      ],
      correctAnswer: 2,
      urlImage: " "
    },
    {
      "question": "Which of the following combinations of perspective and statement BEST matches?",
      options: [
        "From a business perspective, computing power and architecture are key parameters for system adjustment.",
        "From a user perspective, lack of system feedback when processing a request is a problem.",
        "From a technical perspective, the number of concurrent users and the type of transactions performed are important elements.",
        "From a business perspective, the choice of tools for performance testing strongly depends on the testing techniques used."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Which of the following acceptance criteria relates to security requirements?",
      options: [
        "System response time should not exceed 3 seconds.",
        "The system must be web-based.",
        "The graphical user interface must comply with corporate style guides.",
        "Normal users must have restricted access to private data."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "The project team faces a feeling of stagnation and difficulty visualizing the future. Which workshop is MOST suitable for unlocking motivation?",
      options: [
        "Ask two volunteers to represent opposing views on the project and debate them with the team.",
        "Draw an 11-step ladder, place the current state in the middle, and then discuss steps backward and forward.",
        "Organize a team challenge outing followed by a dinner to boost morale.",
        "Visualize remaining milestones and ask the team to identify actions to move towards them."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "You are leading a new team with no prior collaboration experience. Which workshop BEST helps build vision and team spirit?",
      options: [
        "Invite the team to design their own emblem and motto representing shared values and goals.",
        "Invite each member to share their previous experience and achievements.",
        "Ask members to write three things they like and dislike about the organization and discuss them.",
        "Use an 11-milestone ladder placing the team at the top and discuss steps backward."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which statement about defects is MOST correct?",
      options: [
        "Regular meetings between analysts and testers are necessary to report discrepancies.",
        "Testers must provide accurate information about differences between expected and actual results.",
        "If a defect turns out to be an error, the tester writes a report and sends it to the analyst for investigation.",
        "Testers must analyze the impact of the defect on system usage before communicating it."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "What activity is MOST likely to be performed by a business analyst during defect analysis?",
      options: [
        "Identify unsatisfied requirements or user stories.",
        "Evaluate the impact of corrective actions on other parts of the system.",
        "Analyze step-by-step the failed function to identify the cause of the defect.",
        "Verify if other paths in the business process model work correctly."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "What information is MOST likely to be present in an acceptance test summary report?",
      options: [
        "Information to assess the risk level when releasing the product.",
        "Technical details about defect fixes.",
        "Test strategy and test design methods.",
        "Information about the testing procedure."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "What technique is MOST likely to be used to ensure the quality of acceptance testing activities?",
      options: [
        "Review the source code to verify user story traceability.",
        "Verify traceability between user stories and test cases.",
        "Use a checklist-based verification to ensure requirements integrity and quality.",
        "Apply eye-tracking to validate the feasibility of previously defined acceptance tests."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "What is the BEST advantage of jointly reviewing acceptance criteria between analysts and testers?",
      options: [
        "A shared vision facilitates the design of acceptance test cases.",
        "Joint review ensures that non-functional quality criteria are considered.",
        "The review helps verify that tests cover processes, rules, and risks.",
        "The review improves the quality of test reports."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Which tool BEST fits acceptance testing activities?",
      options: [
        "Requirements management tools to manage test execution campaigns.",
        "Test management and automation tools to generate model-based acceptance tests.",
        "Business process management tools to model processes and rules.",
        "Model-based testing tools to manage incidents."
      ],
      correctAnswer: 2,
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
    "errorLoading": "Error loading the quiz. Please try again later."
  }
}