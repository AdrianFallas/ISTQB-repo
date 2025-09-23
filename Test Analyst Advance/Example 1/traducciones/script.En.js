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
