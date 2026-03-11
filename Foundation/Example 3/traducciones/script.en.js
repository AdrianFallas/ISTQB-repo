const data_en = {
    questions : [
    {
      "question": "Which of the following statements describe a valid test objective?",
      "options": [
        "To prove that there are no unfixed defects in the system under test",
        "To prove that there will be no failures after the implementation of the system into production",
        "To reduce the risk level of the test object and to build confidence in the quality level",
        "To verify that there are no untested combinations of inputs"
      ],
      "correctAnswer": 2, // To reduce the risk level of the test object and to build confidence in the quality level
      "urlImage": ""
    },
    {
      "question": "Which of the following options shows an example of test activities that contribute to success?",
      "options": [
        "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
        "Testers try not to disturb the developers while coding, so that the developers write better code",
        "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
        "Certified testers will design much better test cases than non-certified testers"
      ],
      "correctAnswer": 0, // Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products
      "urlImage": ""
    },
    {
      "question": "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
      "options": [
        "Tests wear out",
        "Absence-of-defects fallacy",
        "Defects cluster together",
        "Exhaustive testing is impossible"
      ],
      "correctAnswer": 0, // Tests wear out
      "urlImage": ""
    },
    {
      "question": "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
      "options": [
        "Estimating that testing the integration with the payment service will take 8 person-days",
        "Deciding that the team should test if it is possible to properly share payment between many users",
        "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
        "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      ],
      "correctAnswer": 1, // Deciding that the team should test if it is possible to properly share payment between many users
      "urlImage": ""
    },
    {
      "question": "Which of the following factors have a SIGNIFICANT influence on the test approach?\ni. The SDLC\nii. The number of defects detected in previous projects\niii. The identified product risks\niv. New regulatory requirements forcing formal white-box testing\nv. The test environment setup",
      "options": [
        "i, ii have significant influence",
        "i, iii, iv have significant influence",
        "ii, iv, v have significant influence",
        "iii, v have significant influence"
      ],
      "correctAnswer": 1, // i, iii, iv have significant influence
      "urlImage": ""
    },
    {
      "question": "Which TWO of the following tasks belong MAINLY to a testing role?",
      "options": [
        "Configure test environments",
        "Maintain the product backlog",
        "Design solutions to new requirements",
        "Create the test plan",
        "Analyze the test basis"
      ],
      "correctAnswer": [0, 4], // Configure test environments, Analyze the test basis
      "urlImage": ""
    },
    {
      "question": "Which of the following skills (i-v) are the MOST important skills of a tester?\ni. Having domain knowledge\nii. Creating a product vision\niii. Being a good team player\niv. Planning and organizing the work of the team\nv. Critical thinking",
      "options": [
        "ii and iv are important",
        "i, iii and v are important",
        "i, ii and v are important",
        "iii and iv are important"
      ],
      "correctAnswer": 1, // i, iii and v are important
      "urlImage": ""
    },
    {
      "question": "How is the whole team approach present in the interactions between testers and business representatives?",
      "options": [
        "Business representatives decide on test automation approaches",
        "Testers help business representatives to define a test strategy",
        "Business representatives are not part of the whole team approach",
        "Testers help business representatives to create suitable acceptance tests"
      ],
      "correctAnswer": 3, // Testers help business representatives to create suitable acceptance tests
      "urlImage": ""
    },
    {
      "question": "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?",
      "options": [
        "Only in sequential development models",
        "Only in iterative development models",
        "Only in iterative and incremental development models",
        "In sequential, incremental, and iterative development models"
      ],
      "correctAnswer": 3, // In sequential, incremental, and iterative development models
      "urlImage": ""
    },
    {
      "question": "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
      "options": [
        "In ATDD, acceptance criteria are typically created based on the given/when/then format",
        "In ATDD, test cases are mainly created at component testing and are code-oriented",
        "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
        "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      ],
      "correctAnswer": 2, // In ATDD, tests are created, based on acceptance criteria to drive the development of the related software
      "urlImage": ""
    },
    {
      "question": "Which of the following is NOT an example of the shift-left approach?",
      "options": [
        "Reviewing the user requirements before they are formally accepted by the stakeholders",
        "Writing a component test before the corresponding code is written",
        "Executing a performance efficiency test for a component during component testing",
        "Writing a test script before setting up the configuration management process"
      ],
      "correctAnswer": 3, // Writing a test script before setting up the configuration management process
      "urlImage": ""
    },
    {
      "question": "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
      "options": [
        "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
        "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
        "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program",
        "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      ],
      "correctAnswer": 2, // Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program
      "urlImage": ""
    },
    {
      "question": "Which types of failures (1-4) fit which test levels (A-D) BEST?\n1. Failures in system behavior as it deviates from the user’s business needs\n2. Failures in communication between components\n3. Failures in logic in the code\n4. Failures in not correctly implemented business rules\nA. Component testing\nB. Component integration testing\nC. System testing\nD. Acceptance testing",
      "options": [
        "1D, 2B, 3A, 4C",
        "1D, 2B, 3C, 4A",
        "1B, 2A, 3D, 4C",
        "1C, 2B, 3A, 4D"
      ],
      "correctAnswer": 0, // 1D, 2B, 3A, 4C
      "urlImage": ""
    },
    {
      "question": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:\nTests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.\nWhich of the above tests are executed as regression tests?",
      "options": [
        "Only 4, 7, 8, 9",
        "Only 5, 7",
        "Only 4, 6, 8, 9",
        "Only 5, 6"
      ],
      "correctAnswer": 1, // Only 5 , 7
      "urlImage": "./imagenes/tabla preg14.png"
    },
    {
      "question": "Which of the following is NOT a benefit of static testing?",
      "options": [
        "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
        "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
        "Finding coding defects that might not have been found by only performing dynamic testing",
        "Detecting gaps and inconsistencies in requirements"
      ],
      "correctAnswer": 0, // Having less expensive defect management due to the ease of detecting defects later in the SDLC
      "urlImage": ""
    },
    {
      "question": "Which of the following is a benefit of early and frequent feedback?",
      "options": [
        "It improves the test process for future projects",
        "It forces customers to prioritize their requirements based on agreed risks",
        "It provides a measure for the quality of changes",
        "It helps avoid requirements misunderstandings"
      ],
      "correctAnswer": 3, // It helps avoid requirements misunderstandings
      "urlImage": ""
    },
    {
      "question": "The reviews being used in your organization have the following attributes:\n• There is the role of a scribe\n• The main purpose is to evaluate quality\n• The meeting is led by the author of the work product\n• There is individual preparation\n• A review report is produced\nWhich of the following review types is MOST likely being used?",
      "options": [
        "Informal review",
        "Walkthrough",
        "Technical review",
        "Inspection"
      ],
      "correctAnswer": 1, // Walkthrough
      "urlImage": ""
    },
    {
      "question": "Which of these statements is NOT a factor that contributes to successful reviews?",
      "options": [
        "Participants should dedicate adequate time for the review",
        "Splitting large work products into small parts to make the required effort less intense",
        "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
        "Failures found should be acknowledged, appreciated, and handled objectively"
      ],
      "correctAnswer": 3, // participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants
      "urlImage": ""
    },
    {
      "question": "Which of the following is a characteristic of experience-based test techniques?",
      "options": [
        "Test cases are created based on detailed design information",
        "Items tested within the interface code section are used to measure coverage",
        "The test techniques heavily rely on the tester’s knowledge of the software and the business domain",
        "The test cases are used to identify deviations from the requirements"
      ],
      "correctAnswer": 2, // The test techniques heavily rely on the tester’s knowledge of the software and the business domain
      "urlImage": ""
    },
    {
      "question": "You are testing a simplified apartment search form which has only two search criteria:\n• floor (with three possible options: ground floor; first floor; second or higher floor)\n• garden type (with three possible options: no garden; small garden; large garden)\nEach of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule.\nEach test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests.\nWhat is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctAnswer": 1, // 4
      "urlImage": ""
    },
    {
      "question": "You are testing a system that calculates the final course grade for a given student.\nThe final grade is assigned based on the final result, according to the following rules:\n• 0 – 50 points: failed\n• 51 – 60 points: fair\n• 61 – 70 points: satisfactory\n• 71 – 80 points: good\n• 81 – 90 points: very good\n• 91 – 100 points: excellent\nYou have prepared the following set of test cases:\nWhat is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
      "options": [
        "50%",
        "60%",
        "33.3%",
        "100%"
      ],
      "correctAnswer": 0, // 50% (assuming the test cases cover all boundaries)
      "urlImage": "./imagenes/tabla preg21.png"
    },
    {
      "question": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.\nThe implemented features are as follows:\n• Anyone can rent a bicycle, but members receive a 20% discount\n• However, if the return deadline is missed, the discount is no longer available\n• After 15 rentals, members get a gift: a T-Shirt\nDecision table describing the implemented features looks as follows:\nBased ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
      "options": [
        "R4",
        "R2",
        "R6",
        "R8"
      ],
      "correctAnswer": 3, // R8
      "urlImage": "./imagenes/tabla preg22.png"
    },
    {
      "question": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.\nWhat is the MINIMAL number of test cases to achieve valid transitions coverage?",
      "options": [
        "4",
        "2",
        "7",
        "3"
      ],
      "correctAnswer": 3, // 3 (assuming a simple diagram with 3 transitions)
      "urlImage": "./imagenes/diagram preg23.png"
    },
    {
      "question": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
      "options": [
        "Each instruction in the code that contains a defect has been executed at least once",
        "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
        "Each path in the code has been executed at least once",
        "Every combination of input values has been tested at least once"
      ],
      "correctAnswer": 0, // Each instruction in the code that contains a defect has been executed at least once
      "urlImage": ""
    },
    {
      "question": "Which of the following is NOT true for white-box testing?",
      "options": [
        "During white-box testing the entire software implementation is considered",
        "White-box coverage metrics can help identify additional tests to increase code coverage",
        "White-box test techniques can be used in static testing",
        "White-box testing can help identify gaps in requirements implementation"
      ],
      "correctAnswer": 3, // White-box testing can help 
      "urlImage": ""
    },
    {
      "question": "Which of the following BEST describes the concept behind error guessing?",
      "options": [
        "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
        "Error guessing involves using your personal experience of development and the errors you made as a developer",
        "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
        "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      ],
      "correctAnswer": 0, // Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers
      "urlImage": ""
    },
    {
      "question": "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented.\nWhich test technique fits BEST in this situation?",
      "options": [
        "Checklist-based testing",
        "Error guessing",
        "Exploratory testing",
        "Branch testing"
      ],
      "correctAnswer": 2, // Exploratory testing
      "urlImage": ""
    },
    {
      "question": "Which of the following BEST describes the way acceptance criteria can be documented?",
      "options": [
        "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
        "Using the given/when/then format to describe an example test condition related to a given user story",
        "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
        "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      ],
      "correctAnswer": 1, // Using the given/when/then format to describe an example test condition related to a given user story
      "urlImage": ""
    },
    {
      "question": "Consider the following user story:\nAs an Editor\nI want to review content before it is published\nso that I can ensure the grammar is correct\nand its acceptance criteria:\n• The user can log in to the content management system with \"Editor\" role\n• The editor can view existing content pages\n• The editor can edit the page content\n• The editor can add markup comments\n• The editor can save changes\n• The editor can reassign to the \"content owner\" role to make updates\nWhich of the following is the BEST example of an ATDD test for this user story?",
      "options": [
        "Test if the editor can save the document after edit the page content",
        "Test if the content owner can log in and make updates to the content",
        "Test if the editor can schedule the edited content for publication",
        "Test if the editor can reassign to another editor to make updates"
      ],
      "correctAnswer": 0, // Test if the editor can save the document after edit the page content
      "urlImage": ""
    },
    {
      "question": "How do testers add value to iteration and release planning?",
      "options": [
        "Testers determine the priority of the user stories to be developed",
        "Testers focus only on the functional aspects of the system to be tested",
        "Testers participate in the detailed risk identification and risk assessment of user stories",
        "Testers guarantee the release of high-quality software through early test design during the release planning"
      ],
      "correctAnswer": 2, // Testers participate in the detailed risk identification and risk assessment of user stories
      "urlImage": ""
    },
    {
      "question": "Which TWO of the following options are the exit criteria for testing a system?",
      "options": [
        "Test environment readiness",
        "The ability to log in to the test object by the tester",
        "Estimated defect density is reached",
        "Requirements are translated into given/when/then format",
        "Regression tests are automated"
      ],
      "correctAnswer": [2, 4], // Test environment readiness, Estimated defect density is reached
      "urlImage": ""
    },
    {
      "question": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:\n• Most optimistic estimation: 2 person-hours\n• Most likely estimation: 11 person-hours\n• Most pessimistic estimation: 14 person-hours\nWhat is the final estimate?",
      "options": [
        "9 person-hours",
        "14 person-hours",
        "11 person-hours",
        "10 person-hours"
      ],
      "correctAnswer": 3, // 10 person-hours
      "urlImage": ""
    },
    {
      "question": "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:\nWhich of the following test cases should be executed as the third one?",
      "options": [
        "TC 003",
        "TC 005",
        "TC 002",
        "TC 001"
      ],
      "correctAnswer": 0, // TC 003 (assuming based on priority and dependencies, but the text is cut off, so placeholder)
      "urlImage": "./imagenes/tabla preg33.png"
    },
    {
      "question": "Consider the following test categories (1-4) and agile testing quadrants (A-D):\n1. Usability testing\n2. Component testing\n3. Functional testing\n4. Reliability testing\nA. Agile testing quadrant Q1: technology facing, supporting the development team\nB. Agile testing quadrant Q2: business facing, supporting the development team\nC. Agile testing quadrant Q3: business facing, critique the product\nD. Agile testing quadrant Q4: technology facing, critique the product\nHow do the following test categories map onto the agile testing quadrants?",
      "options": [
        "1C, 2A, 3B, 4D",
        "1D, 2A, 3C, 4B",
        "1C, 2B, 3D, 4A",
        "1D, 2B, 3C, 4A"
      ],
      "correctAnswer": 0, // 1C, 2A, 3B, 4D
      "urlImage": ""
    },
    {
      "question": "During a risk analysis the following risk was identified and assessed:\n• Risk: Response time is too long to generate a report\n• Risk likelihood: medium; risk impact: high\n• Response to risk:\no An independent test team performs performance efficiency testing during system testing\no A selected sample of end users performs alpha testing and beta testing before the release\nWhat measure is proposed to be taken in response to this analyzed risk?",
      "options": [
        "Risk acceptance",
        "Contingency plan",
        "Risk mitigation",
        "Risk transfer"
      ],
      "correctAnswer": 2, // Risk mitigation
      "urlImage": ""
    },
    {
      "question": "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
      "options": [
        "Acceptance criteria",
        "Defect report",
        "Test completion report",
        "Burndown chart"
      ],
      "correctAnswer": 3, // Burndown chart
      "urlImage": ""
    },
    {
      "question": "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
      "options": [
        "Traceability management",
        "Maintenance testing",
        "Configuration management",
        "Requirements engineering"
      ],
      "correctAnswer": 2, // Configuration management
      "urlImage": ""
    },
    {
      "question": "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.\nWhat critical information is MISSING from this test report that would have been useful for the developers?",
      "options": [
        "Expected result and actual result",
        "References and defect status",
        "Test environment and test item",
        "Priority and severity"
      ],
      "correctAnswer": 2, // Expected result and actual result
      "urlImage": "./imagenes/text preg38.png"
    },
    {
      "question": "Which test activity does a data preparation tool support?",
      "options": [
        "Test monitoring and test control",
        "Test analysis",
        "Test design and test implementation",
        "Test completion"
      ],
      "correctAnswer": 2, // Test design and test implementation
      "urlImage": ""
    },
    {
      "question": "Which item correctly identifies a potential risk of performing test automation?",
      "options": [
        "It may introduce unknown regressions in production",
        "Sufficient efforts to maintain testware may not be properly allocated",
        "Testing tools and associated testware may not be sufficiently relied upon",
        "It may reduce the time allocated for manual testing"
      ],
      "correctAnswer": 1, // Sufficient efforts to maintain testware may not be properly allocated
      "urlImage": ""
    },
    {
      "question": "You were given a task to analyze and fix causes of failures in a new system to be released.\nWhich activity are you performing?",
      "options": [
        "Debugging",
        "Software testing",
        "Requirement elicitation",
        "Defect management"
      ],
      "correctAnswer": 0, // Debugging
      "urlImage": ""
    },
    {
      "question": "In many software organizations the test department is called the Quality Assurance (QA) department.\nIs this sentence correct or not and why?",
      "options": [
        "It is correct. Testing and QA mean exactly the same thing",
        "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues",
        "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes",
        "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
      ],
      "correctAnswer": 3, // It is not correct. testing is sometime more;
      "urlImage": ""
    },
    {
      "question": "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values.\nWhich of the following correctly describes an incorrectly coded upper bound?",
      "options": [
        "The root cause",
        "A failure",
        "An error",
        "A defect"
      ],
      "correctAnswer": 3, // An error
      "urlImage": ""
    },
    {
      "question": "Consider the following testware.\nTest Charter #04.018 Session time: 1h\nExplore: Registration page\nWith: Different sets of incorrect input data\nTo discover: Defects related to accepting the registration process with the incorrect input\nWhich test activity produces this testware as an output?",
      "options": [
        "Test planning",
        "Test monitoring and test control",
        "Test analysis",
        "Test design"
      ],
      "correctAnswer": 3, // Test analyst
      "urlImage": "tabla pregApex4.png"
    },
    {
      "question": "Which of the following is the BEST example of how traceability supports testing?",
      "options": [
        "Performing the impact analysis of a change will give information about the completion of the tests",
        "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk",
        "Performing the impact analysis of a change will help selecting the right test cases for regression testing",
        "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
      ],
      "correctAnswer": 2, // performing the impact analysis of a change will help selecting the right test cases for regression testing 
      "urlImage": ""
    },
    {
      "question": "Which of the following BEST explains a benefit of independence of testing?",
      "options": [
        "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team",
        "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines",
        "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system",
        "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
      ],
      "correctAnswer": 3, // When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer
      "urlImage": ""
    },
    {
      "question": "You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC?",
      "options": [
        "Dynamic test execution",
        "Static testing",
        "Test planning",
        "Acceptance test execution",
        "Maintenance testing"
      ],
      "correctAnswer": [1, 2], // Static testing, Test planning
      "urlImage": ""
    },
    {
      "question": "Which of the following are advantages of DevOps?\ni. Faster product release and faster time to market\nii. Increases the need for repetitive manual testing\niii. Constant availability of executable software\niv. Reduction in the number of regression tests associated with code refactoring\nv. Setting up the test automation framework is inexpensive since everything is automated",
      "options": [
        "i, ii, iv are advantages",
        "iii, v are advantages",
        "i, iii are advantages",
        "ii, iv, v are advantages"
      ],
      "correctAnswer": 2, // i, iii are advantages
      "urlImage": ""
    },
    {
      "question": "You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says\n“The order must be processed in less than 10 seconds in 95% of the cases”.\nYou created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements.\nWhat test type did you perform?",
      "options": [
        "Functional, because the test cases cover the user’s business requirement for the system",
        "Non-functional, because they measure the system’s performance",
        "Functional, because the test cases interact with the user interface",
        "White-box, because we need to know the internal structure of the program to measure the order processing time"
      ],
      "correctAnswer": 1, // Non-functional, because they measure the system’s performance
      "urlImage": ""
    },
    {
      "question": "Your organization’s test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?",
      "options": [
        "Maintenance testing",
        "Regression testing",
        "Reliability testing",
        "Integration testing"
      ],
      "correctAnswer": 0, // Maintenance testing
      "urlImage": ""
    },
    {
      "question": "The following is a list of the work products produced in the SDLC.\ni. Business requirements\nii. Schedule\niii. Test budget\niv. Third-party executable code\nv. User stories and their acceptance criteria\nWhich of them can be reviewed?",
      "options": [
        "i and iv can be reviewed",
        "i, ii, iii and iv can be reviewed",
        "i, ii, iii, and v can be reviewed",
        "iii, iv, v can be reviewed"
      ],
      "correctAnswer": 2, // i, ii, iii, and v can be reviewed
      "urlImage": ""
    },
    {
      "question": "Decide which of the following statements (i-v) are true for static testing.\ni. Abnormal external behaviors are easier to identify with this testing\nii. Discrepancies from a coding standard are easier to find with this testing\niii. It identifies failures caused by defects when the software is run\niv. Its test objective is to identify defects as early as possible\nv. Missing coverage for critical security requirements is easier to find and fix",
      "options": [
        "i, iv, v are true for static testing",
        "i, iii, iv are true for static testing",
        "ii, iii are true for static testing",
        "ii, iv, v are true for static testing"
      ],
      "correctAnswer": 3, // ii, iv, v are true for static testing
      "urlImage": ""
    },
    {
      "question": "Which of the following statements about formal reviews is TRUE?",
      "options": [
        "Some reviews do not require more than one role",
        "The review process has several activities",
        "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types",
        "Defects found during the review are not reported since they are not found by dynamic testing"
      ],
      "correctAnswer": 1, // The review process has several activities
      "urlImage": ""
    },
    {
      "question": "What task may management take on during a formal review?",
      "options": [
        "Taking overall responsibility for the review",
        "Deciding what is to be reviewed",
        "Ensuring the effective running of review meetings, and moderating, if necessary",
        "Recording review information such as review decisions"
      ],
      "correctAnswer": 1, // Taking overall responsibility for the review
      "urlImage": ""
    },
    {
      "question": "A wine storage system uses a control device that measures the wine cell temperature T (measured in °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of 12, according to the following rules:\n• if T = 12, the system says, “optimal temperature”\n• if T < 12, the system says, “temperature is too low!”\n• if T > 12, the system says, “temperature is too high!”\nYou want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control device. A test input is a temperature in °C provided by the device.\nWhat is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
      "options": [
        "11, 12, 13",
        "10, 12, 14",
        "10, 11, 12, 13, 14",
        "10, 11, 13, 14"
      ],
      "correctAnswer": 2, // 11, 12, 13
      "urlImage": ""
    },
    {
      "question": "Which of the following statements about branch testing is CORRECT?",
      "options": [
        "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases",
        "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved",
        "If 100% statement coverage is achieved, then 100% branch coverage is also achieved",
        "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
      ],
      "correctAnswer": 3, // If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised
      "urlImage": ""
    },
    {
      "question": "You are testing a mobile application that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user interface best practices derived from a popular book on the topic that maximizes usability for such applications. Which of the following options BEST categorizes the test technique you are using?",
      "options": [
        "Black-box",
        "Exploratory",
        "Checklist-based",
        "Error guessing"
      ],
      "correctAnswer": 2, // Checklist-based
      "urlImage": ""
    },
    {
      "question": "Which of the following BEST describe the collaborative approach to user story writing?",
      "options": [
        "User stories are created by testers and developers and then accepted by business representatives",
        "User stories are created by business representatives, developers, and testers together",
        "User stories are created by business representatives and verified by developers and testers",
        "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
      ],
      "correctAnswer": 1, // User stories are created by business representatives, developers, and testers together
      "urlImage": ""
    },
    {
      "question": "Consider the following part of a test plan.\nTesting will be performed using component testing and component integration testing.\nThe regulations require to demonstrate that 100% branch coverage is achieved for each component classified as critical.\nWhich part of the test plan does this part belong to?",
      "options": [
        "Communication",
        "Risk register",
        "Context of testing",
        "Test approach"
      ],
      "correctAnswer": 3, // Test approach
      "urlImage": ""
    },
    {
      "question": "Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results is small, rules like “accept the number with the most votes” can be applied.\nAfter two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below.\nWhich of the following is the BEST example of the next step?",
      "options": [
        "The product owner has to step in and make a final decision",
        "Accept 13 as the final test estimate as this has most of the votes",
        "No further action is needed. Consensus has been reached",
        "Remove the new feature from the current release because consensus has not been reached"
      ],
      "correctAnswer": 1, // Accept 13 as the final test estimate as this has most of the votes (assuming 13 had the most votes based on the context of the original question)
      "urlImage": "./imagenes/tabla pregApex20.png"
    },
    {
      "question": "Which of the following is TRUE regarding the test pyramid?",
      "options": [
        "It emphasizes having far more tests at the lower test levels",
        "It suggests that each low-level test checks a large part of the functionality",
        "It describes distribution of test types across the SDLC",
        "It has no impact on the construction of automated tests"
      ],
      "correctAnswer": 0, // It emphasizes having far more tests at the lower test levels
      "urlImage": ""
    },
    {
      "question": "During risk analysis the team considered the following risk: “The system allows too high a discount for a customer”. The team estimated the risk impact to be very high.\nWhat can one say about the risk likelihood?",
      "options": [
        "It is also very high. High risk impact always implies high risk likelihood",
        "It is very low. High risk impact always implies low risk likelihood",
        "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.",
        "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
      ],
      "correctAnswer": 2, // One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.
      "urlImage": ""
    },
    {
      "question": "The following list contains risks that have been identified for a new software product to be developed:\ni. Management moves two experienced testers to another project\nii. The system does not comply with security standards\niii. System response time exceeds user requirements\niv. Stakeholders have inaccurate expectations\nv. Disabled people have problems when using the system\nWhich of them are project risks?",
      "options": [
        "i, iv are project risks",
        "iv, v are project risks",
        "i, iii are project risks",
        "ii, v are project risks"
      ],
      "correctAnswer": 0, // i, iv are project risks
      "urlImage": ""
    },
    {
      "question": "Which of the following is an example of how product risk analysis influences thoroughness and scope of testing?",
      "options": [
        "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date",
        "One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database",
        "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing",
        "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
      ],
      "correctAnswer": 3, // Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC
      "urlImage": ""
    },
    {
      "question": "Which TWO of the following options are common metrics used for reporting on the quality level of the test object?",
      "options": [
        "Number of defects found during system testing",
        "Total effort on test design divided by the number of designed test cases",
        "Number of executed test procedures",
        "Number of defects found divided by the size of a work product",
        "Time needed to repair a defect"
      ],
      "correctAnswer": [0,3], // This question asks to select TWO options. The two most common quality metrics listed are A and D. I will map to the first one for the single answer field.
      "urlImage": ""
    },
    {
      "question": "Which of the following pieces of information contained in a test progress report is the LEAST useful for business representatives?",
      "options": [
        "Impediments to testing",
        "Branch coverage achieved",
        "Test progress",
        "New risks within the test cycle"
      ],
      "correctAnswer": 1, // Branch coverage achieved
      "urlImage": ""
    }

]};
window.data_en = data_en;