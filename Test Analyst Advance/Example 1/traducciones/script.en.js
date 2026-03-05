const data_en = {
  questions: [
    {
      question: "In which development models is regression testing most important?",
      options: [
        "Sequential and incremental",
        "Sequential and iterative",
        "Incremental and iterative",
        "It is equally important in all models"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "During which activity does a test analyst define low-level test cases?",
      options: [
        "Test analysis",
        "Test design",
        "Test implementation",
        "Test execution"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "During which activity does exploratory testing usually occur?",
      options: [
        "Test analysis",
        "Test design",
        "Test implementation",
        "Test execution"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      question: "What is meant by the quality criterion “Necessity” for test cases?",
      options: [
        "The test case covers boundary conditions",
        "The test case covers negative conditions",
        "The test case covers something that needs to be tested",
        "The test case is required as a predecessor to another test case"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "Which of the following is a recommended capability in a test environment?",
      options: [
        "Regular backup and restore capability",
        "Full integration with all interface systems without simulations or substitutions",
        "Performance capabilities that are representative of the production environment",
        "All user roles have superuser access to avoid testing delays caused by insufficient permissions"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You are testing a payroll system and need test data. What is a concern you should have if you are going to use production data for this test?",
      options: [
        "Format",
        "Confidentiality",
        "Traceability",
        "Availability"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "What type of tool is used to manage the traceability matrix?",
      options: [
        "Defect management",
        "Test management",
        "Test data management",
        "Configuration management"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are testing an online banking application. In particular, you want to test a customer's ability to make a payment to a creditor. You have compiled the following list of keywords for this capability: \n1. Log in \n2. Select account \n3. Select creditor \n4. Enter amount \n5. Press “Pay” \n6. Log out \nWhat important testing activity is missing?",
      options: [
        "Most people would check their balance before making a payment, so Check balance is needed",
        "The keyword should suggest how the account and creditor will be selected, such as “Select creditor from predefined creditor dropdown list”",
        "There is no verification that the action has occurred, such as “Confirm payment” and “Verify balance”",
        "There are no keywords for negative tests such as “Failed login” and “Failed payment”"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "Which of the following is an activity that a Test Analyst should perform as part of Risk Assessment?",
      options: [
        "Determine the probability of a risk occurring",
        "Determine the impact of a risk if it materializes",
        "Participate in brainstorming sessions with users to identify unexpected risks and edge cases",
        "Review code to identify risk areas where testing should be concentrated"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You have been working on an iterative model in a large software project. You have developed a traceability matrix that tracks the risk of each requirement and maps it to the test case that tests that requirement. You have just received a new version and the developers have assigned regression risk based on what they know has changed. Consider the following risk table (1 = highest risk): Given this information, in what order should test cases be executed to help mitigate regression risk?",
      options: [
        "1, 2, 3, 4, 5",
        "1, 3, 4 and 2, 5 if there is time",
        "5, 4, 3, 1 and do not execute 2",
        "1, 5, 4, 3 and 2 if there is time"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "./imagenes/tabla preg10.png"
    },
    {
      question: "You have the following table indicating which areas of the software are covered by test cases. You want to use operational profiles to focus testing. Your research indicates that areas A, C, and D have been impacted by this change. Given this information, which test cases should be executed and in what order?",
      options: [
        "1, 3, 5 only",
        "1, 3, 4, 5 only",
        "2, 4 only",
        "1, 2, 3, 4, 5"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/tabla preg11.png"
    },
    {
      question: "You are using simplified coverage for domain testing. The software is checking student exam scores, particularly looking for those who did not get a score of 100 (integers only). Which of the following sets of values for x need to be tested to achieve 100% simplified coverage?",
      options: [
        "100, 99, 98",
        "100, 101, 99",
        "100, 101, 120, 99, 72",
        "100, 0, 200"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are using reliable coverage for domain testing. The equation being tested is as follows:\n If MoneyPaid >= 10.00 then\n\t Print “10.00 more”;\n Which of the following sets of values for x need to be tested to achieve 100% reliable coverage?",
      options: [
        "10, 11, 9",
        "10.00, 9.99, 12.00, 7.00",
        "10.00, 10.01, 9.99",
        "10.00, 9.00"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "You are testing a website that allows people to sign up for a puppy waiting list. The following parameters are available: Research has shown that the most commonly selected puppy is a male black labrador. Given this information, what is the best order for test case values in the order they should be executed using base choice coverage criteria?",
      options: [
        "1, 2, 3",
        "1, 4, 6",
        "1, 3, 6",
        "4, 5, 6"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImages: ["./imagenes/tabla1 preg14.png", "./imagenes/tabla2 preg14.png"]
    },
    {
      question: "You are working for a car sales company. Metrics have shown that the most popular car option is the following: \nColor = white \nTransmission = automatic \nEngine = hybrid \nUsing pairwise coverage as a combinatorial coverage criterion, which of the following is the correct combination to test?",
      options: [
        "Red, Manual, Electric",
        "White, Automatic, Hybrid",
        "White, Manual, Hybrid",
        "Red, Automatic, Electric"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "When using random testing for validation purposes, what data distribution is best?",
      options: [
        "One that is based on operational profiles",
        "One that is independent of use",
        "One that is based on boundary conditions",
        "One that is applied to meet specified coverage conditions"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "What does CRUD represent?",
      options: [
        "The lifecycle of data entities",
        "The testing approach that focuses on operating systems",
        "The ability to randomize tests in a domain",
        "A static testing approach for access rights"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You are testing a login software. If the user enters a valid username/password combination, they are taken to the welcome page. If they enter an invalid combination, they are taken to the Forgot Password page, where they can request their username to be emailed to them or change their password. Which of the following state tables correctly shows only state changes from the Login state?",
      options: [
        "Table A",
        "Table B",
        "Table C",
        "Table D"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "./imagenes/tablas preg18.png"
    },
    {
      question: "Consider the following state diagram for a simple ATM. How many test cases are required to achieve 1-switch coverage of the entire state diagram?",
      options: [
        "8",
        "17",
        "18",
        "24"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/diagram estado preg19.png"
    },
    {
      question: "You have used ChatGPT to create an activity diagram for the user scenario of buying a book. You have received the following output: \nKey Actions for Buying a Book: \n1. Start \n2. Search Book \n3. Select Book \n4. Check Book Availability \n5. Choose Payment Method \n6. Provide Payment Information \n7. Confirm Payment \n8. Receive Order Confirmation \n9. Finish.\n Apart from a rough drawing, what has ChatGPT not included?",
      options: [
        "The happy path",
        "The main scenario",
        "Exception paths",
        "The business scenario being captured"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/diagram actividad preg20.png"
    },
    {
      question: "You are testing a banking application. In the past, invalid login attempts were limited to three and then the account was locked. This has caused many customer complaints, so the number of attempts has been changed to 10. You need to test this capability. How many tests do you need to test invalid login to achieve simple loop coverage?",
      options: [
        "3",
        "4",
        "10",
        "1122"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are testing an application that controls the operating system update of a cell phone. The following conditions must be tested: \n1. Login required \n2. Power connection required \n3. Update check only if power connected \n4. User prompted to accept update. The following complete decision table has been created to cover these conditions: Conditions are tested in the specified order. The program stops when the first negative condition is found. Given this information, which of the following tables shows the correct use of the “don't care” operator?",
      options: [
        "Table A",
        "Table B",
        "Table C",
        "Table D"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImages: ["./imagenes/tabla condiciones preg22.png", "./imagenes/tablas solucion preg22.png"]
    },
    {
      question: "Given the following partially minimized decision table, what is the smallest set of tests that should be executed?",
      options: [
        "1, 2, 3, 5, 9",
        "1, 2, 3, 4, 5, 6, 7, 8, 9",
        "1, 2, 4, 6",
        "All these tests must be executed"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/tabla decision preg23.png"
    },
    {
      question: "You are testing password settings for an e-commerce system. The user is allowed to have between 8 and 16 keyboard characters for their password and must enter the same password twice to confirm it. What is the metamorphic relationship that could apply to this scenario?",
      options: [
        "All passwords must be within a certain length",
        "The password and username must be unique and within the required character set",
        "The password and confirmation password must be the same and within the required length and character set",
        "The password and username must be unique and within the required length and character set"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "You are working on a medical application that measures the amount of drinks consumed per day in relation to the incidence of liver cirrhosis. The assumption is that the higher the number of drinks, the higher the incidence of cirrhosis. How can metamorphic testing be applied to help generate test inputs?",
      options: [
        "It can determine the number of drinks needed to affect the incidence of the disease",
        "It can provide a variable number of drinks per person",
        "It can determine cirrhosis levels in a wide variety of individuals",
        "It can be used by doctors to anticipate treatment plans"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are a test manager on a large project. The team really wants to do exploratory testing, but you are concerned that they will not direct their tests properly and that they may overlap, resulting in over-testing some areas and under-testing others. Which of the following is a tool that can be used to help guide testing?",
      options: [
        "A test summary report",
        "A test charter",
        "A decision table",
        "A list of appropriate testing techniques that can be applied"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are a tester working on the payment capability of an e-commerce website. You have been given a test charter that describes operational profiles, testing objectives and scope, a description of the test environment to be used, and expected product limitations. What else do you need to start testing?",
      options: [
        "Information about existing users",
        "Test credit cards that can be used for payment",
        "A list of valid shipping addresses",
        "Performance and security requirements for the login function"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You have been using the following checklist to test the ability to view account balance on an ATM: \n1. Does valid login work and invalid login fail? (valid/invalid account/password pairs) \n2. Are all accounts displayed and selectable? \n3. Does the screen meet UI standards? \n4. Can you select an account and view the balance? \n5. Is the balance consistent with the database? \n6. Do you have a variety of ways to exit (log out, walk away, check timeout)? \n7. Does exiting disconnect the session?\n When following this checklist, you found that the user is asked if they want to print or view the balance. What should you do?",
      options: [
        "Create another checklist as this one will exceed the 7-step limit",
        "Add another step to see if the user can select print or view and then a step to see if the amount is actually displayed or printed",
        "Fail the test as there is a step in the actual flow that does not match a step in the checklist",
        "Write a defect for checklist maintenance so it can be added to the backlog and picked up later as a task to update the checklist"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are developing a set of checklists for a new website. You are particularly concerned about the UI because previous versions of the product have been rejected by users as too complicated and misleading. You want to ensure that this UI is much better and up to industry standards. Which of the following would be a good place to look for information for your checklist?",
      options: [
        "The developers",
        "The order history of a sample of website users",
        "Defect libraries and defect taxonomies published by UI testing experts",
        "Competitor websites to see if they are easier to use and have different functionalities than yours"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "Your organization has just created a new application designed to be used by the general public to get up-to-date weather information. The application uses geolocation to determine where you are and provide the local weather forecast and update. You want to use crowd testing to get a broader view of the functionality across geos, but your colleague says that the quality of the tests will be so poor that it will be useless. Will this be a problem?",
      options: [
        "Probably not, because the application is designed for the general public, so it should be usable by everyone",
        "Yes, and you will have to retest everything done in each geo",
        "Probably yes, because there will be time zone issues that will make communication difficult",
        "No, because security will ensure that unqualified testers cannot access the functionality"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You have been investigating defects that have escaped to production for a particular application used to calculate distances between aircraft in the air. There is a significant amount of data measurements used for these calculations, but you have found that most serious defects have been caused by improper handling of data at the edges of equivalence partitions. Which of the following testing techniques would be most appropriate to use when testing this part of the application?",
      options: [
        "Exploratory testing",
        "Domain testing",
        "CRUD testing",
        "Metamorphic testing"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You are testing an update to an existing financial system. Requirements are limited to 'like for like' and requirements for the original system do not exist. You have process maps that are used to train new users on the old system, and you believe these will be applicable to the new system. Given this information, what type of testing would be most appropriate?",
      options: [
        "Data-driven testing",
        "Decision table testing",
        "State-based testing",
        "Scenario-based testing"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      question: "Which of the following is a disadvantage of using a test model to help with test design?",
      options: [
        "It is slow",
        "It can only be developed by developers, and they may not have time to maintain it",
        "It can become too complex to maintain without AI",
        "It can miss test conditions not shown in the model"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      question: "You have been testing an application that is designed to be used by the general public on their mobile phones. Unfortunately, you have found that it is difficult to use, and users are confused about how to complete tasks. This is a failure in what area?",
      options: [
        "Functional suitability",
        "Functional completeness",
        "Functional correctness",
        "Functional disassociation"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You have seen a prototype of a new web application, but you are concerned that the user interface looks awkward and difficult to use. What should you do?",
      options: [
        "Support a usability expert in conducting a usability review",
        "Submit the application for a WCAG evaluation",
        "Start working on creating better help text",
        "Develop a comparative chart between your product and a similar competitor product"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You have been performing installability tests. You have verified that the installation procedure is clear and easy to follow. You have also verified that the software installation completes without errors. What do you need to test next?",
      options: [
        "Nothing, you are done",
        "Uninstall",
        "Verify that the newly installed software works correctly",
        "Verify that there are no coexistence issues with any other product"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      question: "You have just installed a new application on your phone that will organize your contacts across multiple applications. You have found that your email no longer works. What type of testing should have been performed to detect this problem?",
      options: [
        "Adaptability",
        "Coexistence",
        "Replaceability",
        "Interoperability"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "What measure can be used to determine if defects are being found as early as possible?",
      options: [
        "Defect Removal Efficiency (DRE)",
        "Phase Containment Effectiveness (PCE)",
        "Root Cause Analysis (RCA)",
        "Defect Convergence Charts (DCC)"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "What is a problem that is visible in this CRUD table?",
      options: [
        "The account maintenance application cannot read existing data to check for duplicates",
        "The DBA can do everything",
        "The general user will not be able to view the data",
        "The account maintenance application cannot perform an update"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "./imagenes/tabla preg39.png"
    },
    {
      question: "You have been developing a use case from a requirements document. You have been able to determine the main path and several extension paths. The requirements do not include anything about possible error conditions or how to handle them. What part of your use case should highlight this problem?",
      options: [
        "Exception paths cannot be built with existing information",
        "The main path should have included possible errors",
        "Extension paths should have included possible errors",
        "The domain is too poorly defined to allow data entity mapping"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "You are working on a new Learning Management System (LMS) for a university. The faculty has been heavily involved in developing the requirements and are very happy with the outcome. What review technique would be useful to help ensure that the LMS is usable by all target users?",
      options: [
        "Checklist-based review",
        "Scenario-based review",
        "Role-based review",
        "Perspective-based review"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      question: "You have been reviewing requirements documents as a team. There are several use cases in the requirements, but these seem to be ignored by most reviewers. How can you help make use cases more interesting to review and more likely to expose defects?",
      options: [
        "Checklist-based review",
        "Scenario-based review",
        "Role-based review",
        "Perspective-based review"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      question: "You have reviewed defect clustering numbers for the latest version of an ERP system. You have found that the system reports had many more defects than any other area. You can also see that these defects tended to have a higher priority than defects in other clusters. What should you do at this point?",
      options: [
        "Improve testing rigor for this area and increase regression testing in it",
        "Distribute testing evenly across all areas of the software instead of concentrating on specific areas with defect clusters",
        "Build test automation for areas with high defect clustering, as this will alleviate problems",
        "Increase testing rigor for this area and decrease regression testing, as it will no longer be as important"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      question: "Your Defect Detection Percentage (DDP) on the last project was 62%. Although the project was considered a success, there was significant discussion about the cost of testing, particularly in the later stages of the project. How can you use DDP to improve testing in the next project?",
      options: [
        "Set a higher DDP target",
        "Examine why there were so many escapes in the previous project and correct the process as needed",
        "Stop reporting DDP as you have already shown that testing was effective with the few defects in production",
        "Concentrate more testing on defect-prone areas based on clustering analysis"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "How does defect classification help with root cause analysis?",
      options: [
        "It groups defects so they can be analyzed together",
        "It helps classify defects in order of importance",
        "It saves time when reporting a defect, as some information is no longer needed",
        "It gives testers the freedom to report defects in the most efficient way"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },

    // inicio examen 2
     {
      "question": "Why does a test analyst perform the same activities in each increment of an incremental development model?",
      options: [
        "Because development also occurs in cycles consisting of the same activities in each increment",
        "Because the test analyst's activities in each increment are limited to test analysis and test design",
        "Because in each increment, the test analyst is involved as soon as development begins",
        "Because each increment develops a new part of the software, which needs to be tested"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "During test analysis, the test analyst decides to use the 2-value boundary value analysis technique for an 'age' domain representing a customer's age, which is used to determine the customer's discount. Which of the following tasks should the test analyst perform during test design?",
      options: [
        "Define the test condition: 'The system assigns a discount for a child under 18 and an elderly person over 64.'",
        "Determine whether test cases should document the specific amount of expected discounts",
        "Store the identified boundary values for customer ages in a test data repository to support automated test execution",
        "Write an automated test script using keyword-driven testing: 'SetAge(18); VerifyDiscountIsNotAssigned().'"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Based on the following (simplified) test case:\nInput: age less than 18\nExpected output: The system assigns a discount for children.\nA test analyst creates the following (simplified) test script using keyword-driven testing:\nEnterAge(17)\nVerifyChildrenDiscountApplied(yes)\nEnterAge(18)\nVerifyChildrenDiscountApplied(no)\nIn which test activity does this action take place?",
      options: [
        "Test analysis",
        "Test design",
        "Test implementation",
        "Test execution"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "A medical application has an interface for a health card reader. As a test analyst, you need a simulator for the health card reader that replaces hardware devices in the system test environment. You state the following requirements for the simulator:\n• The simulator must implement the exact interface specification to the medical information system as real devices.\n• Testers with access to the system test environment must be able to edit and manage virtual health cards.\n• The simulator must be available during system test implementation and execution of all increments.\nWhich of the following information is missing and should be added?",
      options: [
        "A copy of the health card reader interface specification",
        "The specific period of time during which the simulator is needed",
        "A specific backup and restore procedure for virtual health cards",
        "The organizational unit that should provide and maintain the simulator"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "The existing rating and billing system of a mobile network operator will be replaced by new software. Since rating and billing rules are very complex, the project's test strategy plans to test functional correctness with several days of live network traffic. As a test analyst, you want to solve the test oracle problem by generating expected invoice details for a large amount of traffic with a pseudo-oracle. Which of the following solutions can serve as a pseudo-oracle?",
      options: [
        "Run the existing rating and billing system in the test environment to generate expected results",
        "Use test scripts to generate expected results in simple test cases and accept all other actual results",
        "Run automated scripts to verify call counts, durations, and types on invoices based on traffic data",
        "Selectively change call durations in live network traffic and verify that invoices change accordingly"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following statements about anonymized test data is MOST likely to be true?",
      options: [
        "Test data may lack the variability required for thorough testing",
        "Test data will be restricted to input data only",
        "Test data will be outdated as it is time-sensitive",
        "Test data will primarily serve as keywords for keyword-driven testing"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are testing a queuing system using keyword-driven testing. The following keywords are available:\n• Start() – creates an empty queue\n• Enqueue(e) - inserts element e at the end of the queue\n• Dequeue() - removes an element from the beginning of the queue\n• CreateQueue(e1, e2, ..., en) – a composite keyword equivalent to the sequence of keywords: Enqueue(e1), Enqueue(e2), ..., Enqueue(en)\n• AssertFirstElement(e) - checks if there is an element e at the beginning of the queue; if not, the system returns an error message\n• AssertEmpty() - checks if the queue is empty; if not, the system returns an error message\nYou have designed the following test scripts:\n i) Start(); Enqueue(A); Enqueue(B); Dequeue(); AssertFirstElement(A)\n ii) Start(); Enqueue(A); Enqueue(B); Dequeue(); AssertNonempty()\n iii) Start(); Enqueue(A); Dequeue(); Enqueue(B); AssertFirstElement(B)\n iv) Start(); CreateQueue(A, B); Dequeue(); Dequeue(); AssertEmpty()\n v) Start(); CreateQueue(A, B); Dequeue(); AssertFirstElement(B)\nWhich of these test scripts verify the following acceptance criterion using the available keywords: 'If more elements were added to the queue than were removed, the queue is not empty'?",
      options: [
        "i), ii) and iii)",
        "ii), iv) and v)",
        "iii) and v)",
        "ii) and iv)"
      ],
      correctAnswer: 2, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "As a test analyst in an incremental-iterative development process, how can you BEST support testware management in the test management tool?",
      options: [
        "Defining a standard severity classification for test execution failures",
        "Specifying the pseudonymization procedure for test data extracted from the live system",
        "Managing the configuration of test environments",
        "Selecting the most appropriate set of test cases for regression testing"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following are examples of how a test analyst can contribute to product risk analysis?",
      options: [
        "Interview business analysts about what can go wrong with the application",
        "Determine the scope of regression testing by performing an impact analysis",
        "Identify and evaluate new product risks that occur during test execution",
        "Estimate the damage each product risk can cause when it occurs",
        "Apply the most appropriate testing techniques for each product risk"
      ],
      correctAnswer: [0, 3], // The correct options are a) and d)
      urlImage: " "
    },
    {
      "question": "You are provided with traceability information about implemented functions (F1-F5), identified risks (R1-R5), and regression test cases (TC1-TC6) in the form of the following traceability matrices. You also have the following information about risk levels for all identified risks. All six test cases were executed in the last test cycle. Then, you are informed that the implementation of F3 has changed. You follow risk-based testing and apply impact analysis, which allows you to execute only the test cases affected by code changes since the last test run. During the next execution of the regression test suite, which test case should be executed LAST?",
      options: [
        "TC4",
        "TC5",
        "TC1",
        "TC3"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImages: ["../Example 2/imagenes/matriz trazabilidad preg10.png", "../Example 2/imagenes/matriz riesgo preg10.png"]
    },
    {
      "question": "You are performing system testing on a mobile banking application. Development is split between a backend team that designs business logic on servers and a frontend team that designs the graphical user interface (GUI) and the application on mobile devices. The backend team is experienced and can debug and resolve defects quickly and reliably. The frontend team has had a lot of staff turnover. Recently, critical failures occurred in production that were resolved in the previous version:\n• Payments rejected by destination banks due to invalid bank account numbers. The root cause was insufficient bank account validation on mobile devices.\n• GUI elements displayed incorrectly on some screen sizes and resolutions that obstructed users from entering payments.\nThe next version will contain the following changes:\n• A new feature has been added that allows users to make payments by taking a photo of an invoice with their mobile device.\n• A major defect in account balance calculation has been fixed.\n• The navigation bar in the GUI has been redesigned to meet accessibility standards.\nYou have a comprehensive regression test suite with tests categorized by the impact of potential failures. Due to limited testing resources, you cannot execute them all, so you chose the history-based regression testing strategy. Which of the following test objectives BEST suits this scenario?",
      options: [
        "Execute all regression tests for bank account validation using photo-based payments and manually entered payments",
        "Execute all regression tests for payment settlement and other functions related to balance calculations",
        "Execute all regression tests with a critical or major risk impact of potential failures",
        "Execute GUI regression tests containing the navigation bar on mobile devices with various screens, prioritized by device distribution statistics",
        "Execute at least one regression test for each requirement, prioritizing the most used scenarios"
      ],
      correctAnswer: [0, 3], // The correct options are a) and d)
      urlImage: " "
    },
    {
      "question": "A code complexity evaluation system takes two integers as input, representing cyclomatic complexity (CC) and the number of variables in the code (VAR). The system checks if the code is complex based on the following model:\nIF (CC ≥ 10) AND (VAR ≥8) THEN RETURN 'the code is complex'.\nThe domain determined by the intersection of the two above limits is a set of points in a two-dimensional space with integer coordinates (CC, VAR).\nYou want to test the functional correctness of the implementation of this domain using domain testing. Which set of test points could result from using SIMPLIFIED domain coverage to test the correctness of this domain implementation?",
      options: [
        "(12, 7), (12, 8), (9, 10), (10, 10)",
        "(6, 5), (10, 8), (13, 10)",
        "(11, 8), (11, 9), (9, 11), (10, 11)",
        "(10, 10), (12, 8), (15, 11)"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "The requirements for preparing espresso are:\n• Pressure must be at least 9 bar for ideal extraction.\n• Temperature must be at least 90°C and at most 96°C to avoid under-extraction or burning the coffee.\nYou test the software controller that opens the hot water valve when pressure (P) and temperature (T) are in the correct range (i.e., P≥9 AND T≥90 AND T≤96) and closes it otherwise (i.e., P<9 OR T<90 OR T>96). The barometer measures pressure with an accuracy of 0.1 bar; the thermometer works with an accuracy of 0.5°C. Your test suite executes the controller with the following inputs (P, T) of pressure in bar and temperature in degrees Celsius:\nA =(9, 90)\nB =(9, 96)\nC=(8.9, 93)\nD=(10, 96.5)\nE =(10, 93)\nF =(8, 89)\nG=(10, 98)\nWhich of the following inputs is missing for 100% reliable domain coverage?",
      options: [
        "(8, 93)",
        "(9.7, 90.5)",
        "(10.9, 89.5)",
        "(10, 90)"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are testing the functional correctness of a particular application in various environments, described by the following parameters and their possible values:\n• operating system (possible values: Windows, Linux, iOS)\n• RAM (possible values: 16GB, 32GB, 64GB)\n• whether there is a USB-C port (possible values: yes, no)\nBased on market research, the most common configuration is Windows OS with 16GB of memory and a USB-C port. You have already prepared tests for the following configurations:\n• Windows, 16GB, USB-C\n• iOS, 16GB, USB-C\n• Windows, 32GB, USB-C\n• Windows, 64GB, USB-C\n• Linux, 16GB, no USB-C\nConsider the following new configurations that can be tested:\n i) Windows, 16GB, no USB-C\n ii) Linux, 16GB, USB-C\n iii) Linux, 64GB, no USB-C\n iv) iOS, 32GB, no USB-C\n v) iOS, 64GB, USB-C\nWhich of them should be added to the existing set to fully achieve the BASE CHOICE coverage criterion?",
      options: [
        "i) and ii)",
        "iii) and iv)",
        "ii), iv), and v)",
        "i), iii), and v)"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "A company offering home insurance policies has several policy options. These depend on the following factors:\n• Construction type: house, townhouse, apartment building, cabin\n• Material: wood, concrete, brick, mixed\n• Location: city, suburb, countryside\nUsing pairwise testing, how many test cases are required to achieve 100% pairwise coverage?",
      options: [
        "16",
        "12",
        "64",
        "4"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which difficulty of random testing can be addressed using GUIDED random testing?",
      options: [
        "Lack of well-defined coverage criteria",
        "Dependence on an automated test oracle",
        "Redundancy of selected test data",
        "Neglect of data semantics"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is an example of CRUD testing?",
      options: [
        "Verify that a user, after creating an account and defining a password, can modify the account password",
        "Verify that a system accepts, as a password, any of 1,000 randomly generated strings of various lengths",
        "Verify that the time from requesting a password change to verifying that change is less than 10 milliseconds",
        "Check if a new user can use a password that another user has already used"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are testing a queuing system that implements a circuit breaker pattern. The system is modeled with the state transition diagram shown below. All possible round trips are feasible. You have already designed the test case that exercises the following sequence of states:\nClosed, Open, Half-Open, Closed, Open, Half-Open, Open, End\nWhat is the round trip coverage achieved by this test case?",
      options: [
        "100%",
        "50%",
        "60%",
        "80%"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "../Example 2/imagenes/diagram preg18.png"
    },
    {
      "question": "You are responsible for designing state-based tests for a system component that manages the lifecycle of claims for an insurance company. You have the following specification: Variable x contains the claim resolution type with values 'acc' for accepted and 'act' for active. How many different 1-switches must be exercised by the resulting test suite to achieve 100% 1-switch coverage?",
      options: [
        "16",
        "14",
        "8",
        "15"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "../Example 2/imagenes/diagram preg19.png"
    },
    {
      "question": "You are testing a food ordering scenario based on the following use case:\n1. Customer opens the app and logs in.\n2. Customer browses the menu and selects items to order.\n3. Customer adds selected items to the cart.\n4. Customer proceeds to checkout.\n5. App displays order summary, including items, quantities, and total price.\n6. Customer confirms order.\n7. App asks if saved payment method should be used.\n8. Customer confirms saved payment method.\n9. App processes payment.\n10. App sends confirmation notification to customer.\n11. App forwards order to restaurant.\n12. App updates order status to 'Confirmed'.\nAlternative scenarios:\n4A. Customer returns to browse the menu. Scenario returns to step 2.\n6A. Customer returns to browse the menu. Scenario returns to step 2.\n7A. No saved payment method. System asks for credit card details. Customer completes data. Scenario goes to step 9.\n7B. More than one saved payment method. System asks customer to select one of the payment methods. Scenario goes to step 9.\nExceptions:\n9A. Payment process fails. System informs customer about the error. Use case ends.\nThe adopted test strategy requires testing the main scenario and all alternatives and exceptions. The test strategy allows more than one alternative to be tested within a single test case. However, it is forbidden to create test cases where both an alternative and an exception occur (i.e., if an exception occurs in a test case, no alternative can occur in it).\nWhat is the MINIMUM NUMBER of test cases that will cover all scenarios for this use case?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Consider the following activity diagram. What is the MINIMUM NUMBER of test cases to exercise all scenarios defined by this diagram?",
      options: [
        "2",
        "3",
        "6",
        "4"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "../Example 2/imagenes/diagram actividad preg21.png"
    },
    {
      "question": "You are testing a payment system via an ATM. Payment can be made by debit card (D) or cash (C), and its acceptability depends on various factors, including PIN, requested amount, and ATM location. Business rules are described in a decision table shown below. What is the MINIMUM NUMBER of columns this decision table can have after minimization?",
      options: [
        "4",
        "5",
        "6",
        "7"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "../Example 2/imagenes/tabla preg22.png"
    },
    {
      "question": "Consider the following minimized decision table. Associate rules (1-4) with their characteristics (A-D):\n1. Rule R2\n2. Rule R3\n3. Rule R4\n4. Rule R5\nA. Its checksum is 1\nB. Its checksum is 2 and is consistent with the other rules\nC. Its checksum is 8\nD. It is inconsistent with rule R1\n",
      options: [
        "1D, 2A, 3C, 4B",
        "1B, 2D, 3A, 4C",
        "1B, 2C, 3A, 4D",
        "1D, 2B, 3C, 4A"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "../Example 2/imagenes/tabla preg23.png"
    },
    {
      "question": "You are testing a function that searches for hotels based on given criteria. As input, the user selects the search area (A), and the minimum (Min) and maximum (Max) allowed price per night. The function returns a list (L) of hotels that meet the criteria.\nLet A1, Min1, and Max1 be the input, and L1 be the expected output of the source test case. Let A2, Min2, and Max2 be the input, and L2 be the expected output of the follow-up test case.\nWhich of the following describes a correct metamorphic relationship between the source test case and the follow-up test case for the search function?",
      options: [
        "If A1 = A2 and Max1 - Min1 > Max2 - Min2, then L2 contains all hotels from L1",
        "If Min2 < Min1 and Max2 > Max1, then L2 has at least as many elements as L1",
        "If A1 and A2 are disjoint, then L1 and L2 are disjoint",
        "If A2 is contained in A1, then L1 contains all hotels from L2"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "A route planning system calculates the optimal route for a car trip. You test the system, using an API function that has three input parameters: starting point coordinates X, destination point coordinates Y, and optimization criterion O. Criterion O can take one of two values: S (search for the shortest route) or T (search for the fastest travel time route). The function returns the length of the optimal route in kilometers.\nYou test the correctness of the system using metamorphic testing with the following metamorphic relationships:\n• MR1: If the criterion changes from S to T, and X and Y remain unchanged, the calculated distance cannot decrease.\n• MR2: For criterion S, the sum of the lengths of the routes from X to Y and from Y to Z cannot be less than the length of the route from X to Z.\nAssume Rome, Pisa, and Milan are the coordinates of three points on the map. The two source test cases are as follows:\n• TC1. Input: X = Rome, Y = Pisa, O = S. Output: 335 km.\n• TC2. Input: X = Pisa, Y = Milan, O = S. Output: 282 km.\nWhich of the following follow-up test cases causes a failure by violating at least one of the metamorphic relationships MR1 or MR2?",
      options: [
        "Input: X = Rome, Y = Rome, O = S. Output: 335 km",
        "Input: X = Pisa, Y = Milan, O = T. Output: 282 km",
        "Input: X = Milan, Y = Pisa, O = S. Output: 283 km",
        "Input: X = Rome, Y = Milan, O = S. Output: 630 km"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You are the test analyst for a company developing a new e-commerce platform. The platform aims to revolutionize online shopping by integrating augmented reality features that allow users to virtually try on clothes and accessories. Discussion between the development team and product owners revealed several important factors that need to be considered when testing the platform in the next iteration:\n• The user interface must be intuitive and responsive across various web browsers. Special attention must be paid to augmented reality features and their integration with the overall user experience.\n• The platform must be compatible with the most popular headsets on the market.\n• The core functionalities of the online shopping platform (e.g., product browsing, shopping cart features, ordering, and payment process) will be implemented using existing mechanisms from the company's previous platform.\nYou are tasked with preparing test charters for exploratory testing on this platform during the current iteration. Exploratory testers are experienced online shopping platform users who have deep knowledge of the product being developed. Which of the following test charters for an exploratory test session BEST ADDRESSES the issues in the scenario above?",
      options: [
        "Test charter 1: Explore the payment process with various payment methods to discover security vulnerabilities",
        "Test charter 2: Explore the augmented reality feature 'Product View' with the Firefox web browser to discover user experience issues",
        "Test charter 3: Explore the payment process with various devices and screen sizes to discover compatibility issues with various types of headsets",
        "Test charter 4: Explore the augmented reality feature 'Try-on Camera' with various web browsers to discover usability issues"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "The e-commerce company is about to launch its new web application, and its success largely depends on the flawless operation of its payment system. Your task is to verify that the payment system has the required level of functional correctness and usability.\nThe development team recently completed the main features of the payment system and implemented them in a test environment, which is a replica of the production environment but isolated for testing purposes.\nThe payment system is designed to handle a variety of payment methods, including credit card payments, simplified mobile payments, and direct bank transfers. The development team has already implemented a comprehensive set of synthetic test data, including dummy credit card numbers, bank accounts, and various transactions.\nWhich of the following is the MOST appropriate test charter to verify the functional correctness and usability of the payment system?",
      options: [
        "Explore the payment system on an external network with penetration tests simulating attacks to discover if it has any potential system vulnerabilities",
        "Explore the e-commerce web application on the production server with various personas and usage scenarios to discover functional and performance issues across the system",
        "Explore the payment system on the test server with synthetic test data to evaluate the usability of the payment procedure, the accuracy of the results, and detect areas for improvement",
        "Explore the graphical user interface of the payment system with user experience design guidelines to discover the intuitiveness and aesthetics of the user interface"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Your organization is developing an astronomy quiz application. The specification states that 24 astronomy questions are randomly selected from a pool and presented one by one to the player. Each question has four possible answers. One of them is correct; the others are not. When the player selects an answer, the quiz indicates whether the selection is correct or incorrect. Subsequently, the player can proceed to the next question. The quiz displays the score when the player has completed all 24 questions.\nAs a test analyst, you designed a checklist to guide functional testing of the system based on experience. Which of the following checklist items is MOST appropriate to verify the correct flow of user interactions?",
      options: [
        "When the application displays a question, are four different answers displayed and selectable?",
        "For each question, does the application indicate which answer is correct and which answers are incorrect?",
        "When the player selects an incorrect answer to a question, does the application mark the incorrect answer in red and the correct (unselected) answer in green?",
        "How long does it take, on average, for an astronomy enthusiast to answer all 24 questions?"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are responsible for system testing a single-player web-based video game. You have performed experience-based testing for previous versions of the game using a checklist. Among other things, you have tested interrupting the game with the following checklist items: The next increment focuses on the accessibility of the video game for players with various disabilities, without changing functionality. Which of the following checklist items should you add to your list to address the new features?",
      options: [
        "Given the interruption warning, if the player clicks the 'Continue game' button, does the application resume the game where it left off?",
        "Is the game vulnerable to security attacks when players with disabilities intentionally or unintentionally interrupt it?",
        "Is the readability of the interruption warning text and button captions at a maximum 5th-grade English level?",
        "Are the button colors in the interruption warning clearly distinguishable for players with red-green color deficiency?",
        "What is the highest degree of color blindness with which players can still differentiate the button colors of the interruption warning?"
      ],
      correctAnswer: [2, 3], // The correct options are c) and d)
      urlImage: "../Example 2/imagenes/tabla preg29.png"
    },
    {
      "question": "Which of the following BEST UTILIZES the advantages of crowd testing?",
      options: [
        "Designing test cases with a test analyst",
        "Performing beta testing with diverse users",
        "Executing the same test scripts repeatedly",
        "Reviewing the graphical interface design with many reviewers"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are a test analyst in a project for a route search application for drivers. The project is carried out using Scrum, which combines elements of iterative development models and incremental development models. In the current iteration of the project, three features were developed that are currently under test:\n• an interactive map interface that allows users to visualize routes\n• turn-by-turn navigation instructions to guide users along their chosen route with real-time updates on upcoming turns, exits, and maneuvers\n• voice guidance that provides hands-free instructions to drivers, improving safety and convenience during the trip\nThe application is being developed for smartphones and is expected to work on iOS and Android systems. Test analysts in each iteration are responsible for system testing on the fully integrated application. Test analysis has revealed that it may be difficult or even impossible to evaluate whether the route found by the algorithm is optimal. Risk analysis identified the following very high-level risk: “The application does not work correctly on all potential mobile device configurations, including elements such as network settings, phone type, operating system, screen settings, and date and time settings.”\nConsidering only the information described in the scenario above, which of the following testing techniques will be most useful for designing test cases for the system under test?",
      options: [
        "Domain analysis",
        "Metamorphic testing",
        "CRUD testing",
        "Decision table testing",
        "Pairwise testing"
      ],
      correctAnswer: [1, 4], // The correct options are b) and e)
      urlImage: " "
    },
    {
      "question": "A new AI-based system is being developed. Management claims it improves thunderstorm prediction accuracy by an order of magnitude. One challenge you quickly identified is that the number of input parameters and their values is potentially very high. Furthermore, the AI-based system was not sufficiently specified, i.e., the test basis is incomplete and ambiguous. However, there is an adequate set of test cases created by a subject matter expert who, unfortunately, left the project. There is pressure from management to deliver the system soon.\nWhich of the following testing techniques should be applied in this context?",
      options: [
        "State-based testing",
        "Metamorphic testing",
        "Scenario-based testing",
        "Combinatorial testing",
        "CRUD testing"
      ],
      correctAnswer: [1, 3], // The correct options are b) and d)
      urlImage: " "
    },
    {
      "question": "Which of the following is an advantage of test design automation and why?",
      options: [
        "Improved defect prevention due to early modeling of test conditions",
        "Effective defect detection due to automated and repeatable test scripts",
        "Efficient test script maintenance due to configuration management",
        "Faster anomaly analysis due to automated fault recognition"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are testing the following user story for an e-shop application:\nAs a registered customer\nI want to filter by a specific category of items\nSo I don't have to browse the entire store assortment\nWhich of the following is an example of a functional correctness test for this user story?",
      options: [
        "Verify that the filtering mechanism lists those categories for which the store offers items",
        "Verify that filtering by a particular category shows items belonging to this and only this category",
        "Verify that the category tree is loaded correctly from a customer relationship management system",
        "Verify that the filtering function is easy to learn and its graphical interface is simple and aesthetically pleasing"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "An organization is developing a new internal application designed to support all staff. The product owner hired external user experience consultants to conduct usability testing sessions. Which of the following is the BEST contribution the organization's test analyst can make?",
      options: [
        "Select the most experienced user group participants in the business process",
        "Participate in usability testing sessions to evaluate the efficiency of working with the application",
        "Help participants during test sessions to enter correct data and find correct buttons",
        "Describe the most likely usage patterns of the application by various people within the organization"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following activities can a test analyst use to best contribute to the adaptability testing of a cloud-based web application?",
      options: [
        "Evaluate the extent to which users with disabilities can adapt to the application's usage scenarios",
        "Design tests that cover data exchange between the web client and server components in the cloud",
        "Analyze operational profiles and describe the expected number of concurrent users of the application",
        "Design tests that evaluate whether server components can be transferred to various cloud service platforms"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is the best example of a test analyst's contribution to the interoperability testing of an online store?",
      options: [
        "Verify that the user can access and use the online store seamlessly across various devices and web browsers",
        "Verify that the online store can integrate with third-party payment gateways and exchange payment data correctly",
        "Validate that users with diverse cultural backgrounds can use the online store effectively and efficiently",
        "Verify that the discount system strictly follows specified rules and returns accurate results"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following activities is LEAST effective in defect prevention?",
      options: [
        "Dynamic testing",
        "Risk analysis",
        "Architectural design review",
        "Root cause analysis"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "For a system that assigns purchase discounts, the following two business rules apply:\n• Customers with a loyalty card or whose last purchase was at least $1,000 will receive a 10% discount. Otherwise, they will receive a 5% discount if they subscribe to the newsletter.\n• If a customer has not subscribed to the newsletter, they will not receive any discount.\nRequirements are modeled using the following decision table: What problem (if any) with the requirements can you discover by analyzing this decision table?",
      options: [
        "Inconsistency: there is at least one feasible combination of conditions for which the specification describes two contradictory actions",
        "Incompleteness: there is at least one feasible combination of conditions for which the specification does not predict any behavior",
        "Overlapping rules: there are at least two action-equivalent columns that match the same combination of conditions",
        "No problem: the decision table correctly models the requirements and there are no anomalies in the requirements"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "../Example 2/imagenes/tabla preg39.png"
    },
    {
      "question": "You are reviewing the requirements specification for a beverage vending machine. You are focusing on the coin controller that collects, validates, and counts inserted coins. You note the following requirements related to the coin controller's behavior:\n• Req201: For each order transaction, the coin controller distinguishes situations between empty, partially inserted, and sufficient modes to identify if the user has paid enough to initiate beverage delivery.\n• Req215: If the user has paid enough, the controller will immediately return any additional inserted coins.\n• Req235: The coin controller will validate inserted coins and immediately return invalid coins with an appropriate error message.\n• Req236: The coin controller will change its mode to sufficient as soon as the user inserts enough coins.\n• Req237: The user will be able to cancel the transaction before beverage delivery and retrieve inserted coins. The coin controller will be empty after cancel is selected.\n• Req243: The coin controller will display an appropriate message when the user has inserted enough coins for payment and will sum any additional inserted coins.\n• Req253: When the user inserts a coin with which the required amount is not reached, the coin controller will remain in partially inserted mode and sum the value of the inserted coin to the intermediate paid value.\n• Req267: If the coin controller is in sufficient mode and the user activates delivery, it will deliver the beverage to the user.\nYou decided to model the coin controller's behavior with a state machine diagram. Which of the following anomalies is MOST LIKELY to be detected by modeling?",
      options: [
        "It is unclear which event will trigger the coin controller to change from partially inserted mode to sufficient mode",
        "The specification is ambiguous when the coin controller is in partially inserted mode. The same event triggers coin return and beverage delivery",
        "The specification is incomplete because there is no defined event to return an invalid coin",
        "The specification is ambiguous in sufficient mode. The same event is supposed to trigger two competing outcomes, i.e., summing coins and immediately returning coins"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "A company has developed an online shopping website. This year, to better serve new customers, the company decided to develop a new feature to guide new customers in using the website. The requirements engineering team developed the following requirements for this new feature:\nUse case: Familiarize customer with online shopping website and purchase.\nYou are the test analyst for this product and review the above use case using a scenario-based review technique.\nWhich of the following defects presented during your review is a false positive?",
      options: [
        "The system should offer experienced users an option to permanently dismiss the guide",
        "In step 4: Once the user has responded to the promotion, the system should hide the promotion banner",
        "The system should provide an option for the user to reopen the guide whenever interested",
        "After step 5, the system should automatically close the guide, assuming it is no longer needed"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "../Example 2/imagenes/tabla preg41.png"
    },
    {
      "question": "Match review technique descriptions (1-4) with correct technique names (A-D).\nDescriptions:\n1. Reviewers simulate processes using use cases or activity diagrams and can explore beyond documented scenarios.\n2. Reviewers use fictional personas (e.g., administrators or end-users) to focus on specific user roles.\n3. Unstructured review without guidance, risking duplicate defect reports.\n4. Uses predefined checklists to guide reviewers, but encourages exploration beyond listed items.\nTechniques:\nA. Ad hoc review\nB. Checklist-based review\nC. Scenario-based review\nD. Role-based review",
      options: [
        "1-C, 2-D, 3-B, 4-A",
        "1-D, 2-C, 3-A, 4-B",
        "1-C, 2-D, 3-A, 4-B",
        "1-A, 2-B, 3-C, 4-D"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You work as a test analyst in a project that follows an incremental development model. Each increment consists of four sequential phases: requirements, design, implementation, and testing. Each phase ends with an appropriate testing activity, and each increment ends with a delivery to the customer. After the last increment, the customer reported no defects during operation. You collect data on the number of defects introduced and detected in different phases of the last increment. The results are presented in the table below.\nFor example, the requirements phase introduced 80 defects, and implementation detected 40 of them; static analysis and component testing detected 140 defects in total. Your management wants to improve defect detection, but due to limited resources, they asked you to select only one phase for which you should carry out improvement actions. You base your choice on calculating the defect detection percentage as a measure of test effectiveness for each phase.\nWhich phase and testing activity should you select for improvement actions?",
      options: [
        "Requirements – modeling and review",
        "Design – modeling and review",
        "Implementation – static analysis and component testing",
        "Testing – system testing and acceptance testing"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "../Example 2/imagenes/tabla preg43.png"
    },
    {
      "question": "The architecture of a home security system comprises four components: a control panel, a user interface, a cloud-based backend system, and an event processing engine.\nIn similar projects within your organization, a strong correlation was observed between component size and the number of defects found in component testing. On average, one defect was found for every 50 lines of code. You use this model to predict the number of defects in each component.\nThe test results for the individual system components, which contain the actual number of defects, are as follows: You use defect cluster analysis to identify defect-prone areas. Which component, when tested more rigorously, is MOST likely to reveal more defects?",
      options: [
        "Control panel",
        "User interface",
        "Backend system",
        "Event processing engine"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "../Example 2/imagenes/tabla preg44.png"
    },
    {
      "question": "How does defect classification support root cause analysis (RCA)?",
      options: [
        "It allows RCA to be performed early, before static and dynamic testing, because RCA can be based on abstract defect categories rather than specific individual defects",
        "It allows RCA to be combined with testing techniques because defect classification uses the same software development lifecycle models as testing techniques",
        "It makes RCA more efficient because the analysis focuses not on individual defects, but on groups of defects with similar characteristics",
        "It makes RCA more effective because defect classification allows for deeper analysis of defects and the discovery of more root causes"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Appendix A – Additional Questions\nQuestion #A1 (1 Point) The TA's tasks in test analysis include:\nA) Define test conditions for each test item\nB) Involve stakeholders in reviewing test conditions\nC) Review the test basis for testability\nD) Verify that test objectives and test approach are clear\nOrder tasks from A to D in the correct chronological sequence:",
      options: [
        "A, B, C, D",
        "B, A, D, C",
        "C, D, A, B",
        "D, C, B, A"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "../Example 2/imagenes/tabla pregA1.png"
    },
    {
      "question": "Which of the following is typically the responsibility of the test analyst during the execution of an automated regression test suite?",
      options: [
        "Manually re-execute test cases that have failed during automated test execution",
        "Correct automated test scripts that caused execution anomalies",
        "Report a defect for each anomaly that occurs during test execution",
        "Compare actual results with expected results to determine the test outcome"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Consider the following test case:\nTest case: TC 02.001 - correct order price calculation with discount\nPreconditions: user is logged in\nInputs: shopping cart contains products for an amount that entitles to the discount\nActions: user proceeds to checkout\nExpected results: total price displayed is reduced by the corresponding discount amount\nHow can this test case be classified in terms of abstraction level?",
      options: [
        "This is a high-level test case because it covers a business requirement rather than a technical specification.",
        "This is a high-level test case because it does not contain specific test data.",
        "This is a low-level test case because the action is an individual step of a business process.",
        "This is a low-level test case because it can be the basis for creating test scripts that implement this test case with various inputs."
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following describes a valid test case quality criterion and has a valid justification?",
      options: [
        "Test cases covering important features in the product backlog but not yet included in the current test object version should be defined to support future maintenance.",
        "Test cases must contain concrete values of test data required for preconditions, inputs, and outputs to enable test execution.",
        "If the test basis uses a glossary of functional terms, test cases should also use that terminology to make them consistent and understandable.",
        "End-to-end scenario-based test cases should be limited to a few steps of the scenarios to facilitate their combination into test procedures and analysis of the cause of failures."
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "In item management system IMS1, each item can have multiple versions. The latest version is active, all previous versions are historical and frozen.\nYou are specifying domain layer keywords for the following high-level test case:\n• Preconditions: An item has multiple versions; the latest version is active; the others are old and frozen.\nYou have specified the following keywords:\n1. Search database for an item with multiple versions (Item ID)\n2. Select item (Item ID)\n3. Select item version (Number)\n4. Assert displayed details are correct (Screen, Item ID, Number)\n5. Assert details are editable (Screen)\n6. Assert details are not editable (Screen)\nYou want to use keywords in one of the following groups of elements from high-level test cases:\nA) Precondition only\nB) Step 1 only\nC) Step 2 only\nD) Both step 1 and step 2\nAssign each specified keyword (1-6) to EXACTLY ONE test case element group (A-D) without leaving any group empty.",
      options: [
        "1: A, 2: B, 3: C, 4: D, 5: D, 6: D",
        "1: A, 2: D, 3: C, 4: B, 5: D, 6: D",
        "1: A, 2: B, 3: D, 4: C, 5: D, 6: D",
        "1: A, 2: B, 3: C, 4: D, 5: D, 6: D"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "../Example 2/imagenes/tabla pregA5.png"
    },
    {
      "question": "Standard letters carried by a postal service have a maximum length of 235 mm and a maximum weight of 20 g. You are testing an automatic letter scanning system that can measure with an accuracy of 1 mm and 1 g respectively.\nYou perform domain tests for valid standard letter sizes with the following inputs. Inputs can have one of the following coverage item types:\n1. ON point for length and weight\n2. IN point for length and weight\n3. OFF point for length only\n4. OFF point for weight only\n5. OUT point for length only\n6. OUT point for weight only\nAssign each input (X1-X6) to EXACTLY ONE coverage item type (1-6).",
      options: [
        "X1: 1, X2: 2, X3: 3, X4: 4, X5: 5, X6: 6",
        "X1: 1, X2: 2, X3: 4, X4: 3, X5: 5, X6: 6",
        "X1: 1, X2: 2, X3: 3, X4: 5, X5: 4, X6: 6",
        "X1: 1, X2: 2, X3: 3, X4: 4, X5: 6, X6: 5"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "../Example 2/imagenes/tabla pregA6.png"
    },
    {
      "question": "The specification for a safety-critical component states the following about integer values of an input parameter:\n• Values less than 10 will be rejected;\n• Values between 10 and 21 will be accepted;\n• Values greater than or equal to 22 will be rejected.\nWhich of the following input data sets provides 100% reliable domain coverage using a MINIMUM number of values?",
      options: [
        "9, 10, 21, 22",
        "0, 9, 10, 21, 22, 50",
        "9, 10, 11, 20, 21, 22",
        "8, 9, 10, 11, 20, 21, 22, 23"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "An airline has specific restrictions regarding checked baggage:\n• The total dimensions (length + width + height) D of a piece of baggage must be at least 80 cm and cannot exceed 158 cm.\n• Weight W must not exceed 23 kg.\n• Measurements in centimeters and kilograms are always rounded to the nearest whole number.\nWhat is the MINIMUM set of (D,W) pairs of dimensions and weight to achieve 100% simplified domain coverage?",
      options: [
        "(80,10), (79,10), (125,23), (125,24), (158,20), (159,20)",
        "(80,23), (79,24), (158,23), (159,24)",
        "(80,23), (79,23), (80,24), (158,23), (158,24), (159,23)",
        "(80,23), (79,23), (80,24), (158,20), (159,20)"
      ],
      correctAnswer: 3, // The correct option is d)
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
    "nameQuiz": "Test Analyst Advanced - Example 1"
  }
}
window.data_en = data_en;
