const data_en = {
  questions: [
    {
      "question": "Which of the following are examples of risks that should be considered by the Technical Test Analyst?",
      options: [
        "A high number of reliability defects were found compared to the previous version",
        "Required updates to the security testing tool database are misconfigured",
        "Lack of legacy system documentation to verify calculation accuracy",
        "The budget allocated to testing in the project has been reduced",
        "The rate of change of business use cases is higher than expected"
      ],
      correctAnswer: [0, 1], // The correct options are a) and b)
      urlImage: " "
    },
    {
      "question": "When participating in a risk analysis, the Technical Test Analyst is expected to work closely with which of the following groups of people?",
      options: [
        "Users",
        "Business Analysts",
        "Project Sponsors",
        "Developers"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Consider the simplified logic of a tea-making machine: What is the minimum number of test cases required to achieve 100% statement coverage of the tea-making machine's logic?",
      options: [
        "3",
        "2",
        "5",
        "6"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/codigo preg3.png"
    },
    {
      "question": "The simplified logic of a program is as follows: Assume that decisions B and C are independent of each other. What is the minimum number of test cases required to achieve 100% decision coverage?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/codigo preg4.png"
    },
    {
      "question": "You are testing code whose control flow graph is presented below. Node 1 is the entry point and node 9 is the exit point. Assuming all decisions in this code are independent, what is the minimum number of test cases required to achieve 100% decision coverage?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/control flow preg5.png"
    },
    {
      "question": "You are testing a photo-enforcement system for traffic control at an intersection. Requirements state that a photo should be taken if the traffic light is RED, or the car is exceeding the speed limit (SPEED), and if the car's front wheels are over the line marking the start of the intersection (WHEELS). The logic in the code looks like this:\n Consider these test input values:\n 1. RED + SPEED + WHEELS\n 2. RED + SPEED + not WHEELS\n 3. RED + not SPEED + WHEELS\n 4. RED + not SPEED + not WHEELS\n 5. not RED + SPEED + WHEELS\n 6. not RED + SPEED + not WHEELS\n 7. not RED + not SPEED + WHEELS\n 8. not RED + not SPEED + not WHEELS.\n Assuming no short-circuiting, which set of test input values is required to achieve full modified condition/decision coverage?",
      options: [
        "1, 3, 8",
        "2, 6, 8",
        "3, 4, 5, 7",
        "1, 5, 7, 8"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/codigo preg6.png"
    },
    {
      "question": "You are testing a photo-enforcement system for traffic control at an intersection. Requirements state that a photo should be taken if the traffic light is RED, or the car is exceeding the speed limit (SPEED), and if the car's front wheels are over the line marking the start of the intersection (WHEELS). The logic in the code looks like this: Consider these test input values:\n 1. RED + SPEED + WHEELS\n 2. RED + SPEED + not WHEELS\n 3. RED + not SPEED + WHEELS\n 4. RED + not SPEED + not WHEELS\n 5. not RED + SPEED + WHEELS\n 6. not RED + SPEED + not WHEELS\n 7. not RED + not SPEED + WHEELS\n 8. not RED + not SPEED + not WHEELS.\n Assuming no short-circuiting, which set of test input values is required to achieve 50% multiple condition coverage?",
      options: [
        "3, 4, 5, 8",
        "1, 3, 5",
        "2, 4, 6, 7, 8",
        "2, 7"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/codigo preg7.png"
    },
    {
      "question": "Which of the following are examples of defects targeted by API testing?",
      options: [
        "Problems in processing HTTP request transactions",
        "Compromised code violates project coding standards",
        "System web service reacts incorrectly to different data in requests",
        "Division by zero errors",
        "Functional errors occurring in the GUI"
      ],
      correctAnswer: [0, 2], // The correct options are a) and c)
      urlImage: " "
    },
    {
      "question": "You are the Technical Test Analyst working on software testing that will control the movement of the roof of a new national stadium with a capacity of 100,000 spectators. A failure analysis has shown that if the software system fails, it can cause the roof to collapse and fall on spectators. The government has requested that the testing level for this software exceed that required by the IEC 61508 standard. What level of test coverage would you expect to achieve in the control software testing for the stadium roof?",
      options: [
        "Decision coverage + Modified condition/decision coverage",
        "Decision coverage + Statement coverage",
        "Modified condition/decision coverage",
        "Multiple condition coverage"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You work for a software house that provides software solutions for medical systems. You are currently testing a software component that operates the defibrillator machine by controlling the dose of electrical current delivered to the heart. During code review, reviewers noted that a decision in the module under test consists of 20 independent atomic conditions. You are required to perform white-box testing for this module and are expected to finish it within one month. Which white-box testing technique should you choose for this scenario?",
      options: [
        "Multiple condition testing",
        "MC/DC testing",
        "Decision testing",
        "API testing"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Below is the pseudo-code for a TRICKY program: Which of the following statements about the TRICKY program MOST correctly describes any control flow anomalies in it?",
      options: [
        "The TRICKY program contains no control flow anomalies",
        "The TRICKY program contains unreachable code and an infinite loop",
        "The TRICKY program contains unreachable code and has no infinite loop",
        "The TRICKY program contains a loop with multiple entry points"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "./imagenes/codigo preg11.png"
    },
    {
      "question": "Programmers have designed three versions of a function that finds the largest number among three integers: findMax1, findMax2, and findMax3. One of them must be chosen for the next version. The codes are as follows: You were asked to select the one with the lowest cyclomatic complexity. Which one SHOULD you choose?",
      options: [
        "findMax1",
        "findMax2",
        "findMax3",
        "You can choose any of them, because all three functions have the same cyclomatic complexity"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "./imagenes/codigo preg12.png"
    },
    {
      "question": "Below is the pseudo-code for a program that calculates and prints sales commissions: The code contains data flow anomalies on lines 6 and 12 (highlighted text). What examples of data flow anomalies can be found on these lines?",
      options: [
        "line 6: the variable “total” is not assigned a value before being used; line 12: the variable “commission_lo” is defined but not used later",
        "line 6: an invalid value is assigned to the variable “total”; line 12: the variable “commission_lo” is redefined before being used",
        "line 6: the variable “total” is out of scope; line 12: the “hard-coded” value “0.15” should not be used",
        "line 6: the variable “number” is undefined; line 12: the variable “total” is redefined before being used"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/codigo preg13.png"
    },
    {
      "question": "You have been asked to analyze the following program that calculates a sales commission: Which pair of lines represents a data flow anomaly?",
      options: [
        "8–9",
        "3–19",
        "2–18",
        "13–14"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: "./imagenes/codigo preg14.png"
    },
    {
      "question": "You have been provided with the following average system-level measures for the four systems, W, X, Y, and Z, using static code analysis. Budget is available to improve code maintainability in each of the four systems by applying static analysis results to individual components. Which of the following is the BEST way to improve code maintainability if you can only address two metrics per system?",
      options: [
        "W – CO, RE; X – CC, CH; Y – CP, CO; Z – CC, RE",
        "W – CC, CP; X – CH, CO; Y – CC, CH; Z – CO, RE",
        "W – CC, RE; X – CP, CO; Y – CC, CH; Z – CO, RE",
        "W – CH, CO; X – CC, RE; Y – CP, RE; Z – CC, CH"
      ],
      correctAnswer: 2, // The correct option is b)
      urlImage: "./imagenes/tabla preg15.png"
    },
    {
      "question": "Below is the pseudo-code for a TRICKY program: Which TWO corrections to improve code maintainability would MOST LIKELY be proposed after performing a static analysis?",
      options: [
        "Restructure the code",
        "Improve variable naming",
        "Reduce program coupling",
        "Improve comment quantity",
        "Improve code indentation"
      ],
      correctAnswer: [1, 3], // The correct options are b) and d)
      urlImage: " "
    },
    {
      "question": "You are the Technical Test Analyst working on a project that develops a new Ambulance Dispatch System (ADS). This ADS helps operators receive calls about incidents, identify available ambulances, and mobilize ambulances to handle incidents. You know that the ADS was designed using an object-oriented approach and implemented using a language with automated garbage collection. During system and acceptance testing, the system has been perceived as generally correct, but also somewhat slow, and has occasionally 'crashed'; subsequent (brief) investigations were inconclusive. Which of the following statements would BEST justify the use of dynamic analysis in this situation?",
      options: [
        "Dynamic analysis could be used to measure response times to user actions to identify efficiency bottlenecks",
        "Dynamic analysis could be used to generate system control flow graphs to enable specific performance improvements",
        "Dynamic analysis could identify memory access violations caused by a wild pointer resulting in occasional 'crashes'",
        "Dynamic analysis could be used to determine if programmers introduced defects by not properly releasing allocated memory"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Suppose you are working as a Technical Test Analyst on a project where a new banking system is being developed. This system will store customer financial data, including personal information, account numbers, balances, and transaction histories, but no real customer data will be available until the system is operationally deployed. Based on this information, which of the following topics would you most likely include in the system test plan?",
      options: [
        "Test data anonymization",
        "Coordination of distributed components",
        "Data encryption testing",
        "In-production testing"
      ],
      correctAnswer: 2, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Suppose you are working as a Technical Test Analyst in the system integration testing of the baggage handling system for a major airport. Most system components are developed by a prime contractor, but system components for baggage redirection and for handling oversized items are being developed abroad by separate organizations. The airport operator is the project client and has indicated that the system must operate fast even under maximum loads in the morning and evening. A fully representative test environment has been made available for system integration testing and a specialized tools team has been formed to support functional and non-functional testing. Some functional tests for system integration have already been implemented, but progress is slow. Based on this information, which of the following topics are you most likely to identify as risks in the system integration test plan?",
      options: [
        "Stakeholder requirements",
        "Acquisition and training of required tools",
        "Test environment requirements",
        "Organizational considerations",
        "Data security considerations"
      ],
      correctAnswer: [0, 3], // The correct options are a) and d)
      urlImage: " "
    },
    {
      "question": "Consider the following product risk: Abnormal application termination due to network connection failure. Which of the following is the MOST appropriate test type to address this risk?",
      options: [
        "Reliability testing",
        "Performance testing",
        "Operability testing",
        "Portability testing"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Consider the following product risk: “The new database is not suitable to replace the current one”. Which of the following is the MOST appropriate test type to address this risk?",
      options: [
        "Adaptability testing",
        "Replacement testing",
        "Capacity testing",
        "Coexistence testing"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following statements is CORRECT?",
      options: [
        "It is desirable to perform end-to-end response time testing as early as possible, even if a production-like environment is not yet available",
        "Availability testing using operational profiles is performed both before and after entering operational service",
        "Security testing should start with component testing and continue through integration and system testing, as security issues can be introduced at any time during development",
        "Maintainability can be assessed early in the lifecycle without having to wait for a complete and working system"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following statements is CORRECT?",
      options: [
        "Reliability testing is commonly performed as part of system testing",
        "Coexistence testing is normally performed immediately after component testing has been completed",
        "Adaptability testing is often performed in conjunction with security testing",
        "Replacement testing is normally only performed once the overall system and potentially replaceable components are available"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Suppose you work for a startup with big ambitions but limited initial funding. They are creating a system that will provide personalized loyalty and rewards programs for small and medium-sized businesses selling to customers on the web. These businesses sign up on the system's web store. This allows businesses to create custom buttons, placed on their websites, that allow customers to sign up for the businesses' loyalty and rewards programs. Each subsequent purchase earns points, and both businesses and their customers can manage the program; for example, businesses can determine the number of points required for customers to receive a free product or service, and customers can monitor their points. Your employer's marketing staff is heavily promoting the system, offering aggressive discounts on first-year fees to sign up new businesses. Marketing materials state that the service will be highly reliable and extremely fast for businesses and their customers. At this time, requirements are complete and software development has begun. The current schedule will allow businesses and their customers to start signing up in three months. Your employer intends to use cloud computing resources to host this service and has no hardware resources other than ordinary office computers for its developers, testers, and other engineers and managers. Industry-standard web application software components will be used to build the system. Suppose you are performing security tests against the system. Which of the following types of defects would you expect to find during these tests?",
      options: [
        "The system clears the screen too quickly after logging in",
        "The system deletes temporary user files after logging out",
        "The system allows unauthorized access to data",
        "The system allows access from an unsupported browser"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "System integration testing is being planned for a new version of a stock trading system. You are planning performance efficiency tests as part of this testing. The new version has increased functionality, but the basic architecture remains the same. The current system has so far received positive feedback and the number of users has steadily increased. It allows users to trade individual stocks with a simple transaction consisting only of user identity, stock number, quantity, and action (buy or sell). The current system's response time to user inputs is regularly monitored by performance tests supported by a tool and using a fully representative test environment. Currently, the system operates reliably and response times to user trading transactions are just below the specified maximum. The marketing department anticipates that with the new functionality to be introduced in the next version, the number of users is expected to double in the next 12 months. You have included scalability testing in your performance testing strategy. When planning performance efficiency tests, which of the following types of defects would you target in the system integration test plan as MOST likely to occur?",
      options: [
        "The simulated increase in the number of users will result in data volumes exceeding the test environment's bandwidth",
        "The system does not meet future response time requirements for anticipated user numbers",
        "Disk capacity requirements will exceed available resources once more users are added",
        "System response time will degrade when running the system for a long time under a nominal load"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "By entering the following phrase in the username field of the login form:\n abcd OR 1=1,\n a tester performed an SQL injection attack and, as a result, obtained a list of all valid usernames for the system. Which of the following security aspects was MOST likely addressed by this test?",
      options: [
        "Confidentiality",
        "Non-repudiation",
        "Accountability",
        "Availability"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You work as a TTA in an agile project and have been asked to calculate the mean time to failure (MTTF) for the system under test under normal load. Which of the following information sources is MOST likely to provide you with the necessary information about the load you should generate in your tests?",
      options: [
        "Product owner",
        "Operational profile",
        "Scrum master",
        "Test environment requirements"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following statements about code reviews in the context of performance efficiency test planning is CORRECT?",
      options: [
        "Code reviews are not useful in performance efficiency testing, because performance can only be measured with dynamic tests on a running system",
        "Code reviews are useful in performance efficiency testing, because they can detect inefficient algorithm implementations that can cause performance problems",
        "Code reviews are not useful in performance efficiency testing, because performance efficiency testing generally requires the entire system to be implemented, so it is typically performed as part of system testing, which requires dynamic, not static, testing",
        "Code reviews are useful in performance efficiency testing, because static tests do not depend on the test environment, so testers do not need to waste time defining and building the test environment"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following statements provides the BEST justification for including maintainability testing in a test approach?",
      options: [
        "Analyzability should be considered if you expect many combinations to need testing",
        "Modifiability should be considered if you expect several issues to be identified within the system",
        "Modularity should be considered if you are testing a system provided as commercial off-the-shelf (COTS) software",
        "Reusability should be considered if you expect different versions of the same product to be developed"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You work as a tester in a company that develops a desktop financial application for accountants. Users reported problems with the following scenario, and you have been tasked with testing the solution. \n• Download the application from the producer's website \n• Install it using the installation wizard \n• Verify if the application is installed correctly \n• Uninstall the application \n• Verify if everything was uninstalled correctly.\n What is the reason for performing this test?",
      options: [
        "To test maintainability",
        "To test reliability",
        "To test portability",
        "To test compatibility"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "A Technical Test Analyst has been invited to the formal review of an architectural design specification. The review has been called at short notice for the next day, and although there is nothing on the analyst's agenda for that time, there is no time to prepare. Which of the following would be the most appropriate response to the invitation?",
      options: [
        "I am free at that time, so I have no problem attending",
        "I don't have time to prepare, but I will attend rather than cause a delay",
        "I don't have time to prepare, so I suggest the review be postponed",
        "I don't have time to prepare, but I could still contribute some useful input"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are participating in an architectural review of a new product design. This is an embedded product that has severe memory constraints. Consider the following programming practices and problems that can result from using those practices. \nProgramming Practices: \n1. Connection pooling \n2. Data caching \n3. Lazy instantiation \n4. Transaction concurrency \nProblems: \nA. Performance impact when instantiation is needed \nB. Loss of transactions due to processor unavailability \nC. Errors in multi-threading logic \nD. Stale data.\n Which of the above programming practices could be used to reduce unnecessary memory usage in this scenario and what are the possible problems when using this practice?",
      options: [
        "Practice 2, Problem D",
        "Practice 4, Problem C",
        "Practice 3, Problem A",
        "Practice 1, Problem B"
      ],
      correctAnswer: 2, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are participating in an architectural design review of a new product design. This is a web-based foreign exchange trading product that provides real-time information on the prices of currencies selected by the user. The following list of practices is mentioned in the design as options to ensure response times of less than 1 second and real-time data accuracy under expected maximum loads. Which of the following practices would you highlight as the MOST promising to achieve the requirement?",
      options: [
        "Load balancing",
        "Data caching",
        "Object-orientation",
        "Data replication"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are participating in a code review and have noticed a problem in the following pseudo-code section (assume *** indicates a comment). Which of the following problems is demonstrated in this code section and why should it be corrected?",
      options: [
        "The comment in the code is incorrect, resulting in a maintainability impact",
        "An external library should be used to validate the credit card; therefore, the code is inefficient because it does not reuse existing components",
        "The most likely case is not tested first, resulting in a possible performance impact",
        "There is no default clause, resulting in potential cases not being handled"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: "./imagenes/codigo preg34.png"
    },
    {
      "question": "You are participating in a code review and have noticed a problem in the following pseudo-code section (assume *** indicates a comment). Which of the following problems is demonstrated in this code section?",
      options: [
        "Files are not checked for existence before attempting to access them",
        "Divisors are not tested to see if they are zero",
        "Comments are inconsistent with the code",
        "There are unused variables"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: "./imagenes/codigo preg35.png"
    },
    {
      "question": "Which of the following are typical activities performed by a Technical Test Analyst when setting up a test automation project?",
      options: [
        "Design test data for automated test cases",
        "Reserve time to work on the test automation project in agreement with the test manager",
        "Write test scripts based on keywords and data provided by Test Analysts",
        "Determine who will be responsible for the analysis and design of the test cases to be automated",
        "Define how the project's test management tool will communicate with the new test automation tool"
      ],
      correctAnswer: [1, 4], // The correct options are a) and e)
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST CAPTURES the difference between data-driven test automation and keyword-driven test automation?",
      options: [
        "Keyword-driven test automation can extend data-driven automation by defining keywords corresponding to actions in business processes",
        "Data-driven test automation extends keyword-driven automation by storing test data in spreadsheets or databases",
        "Data-driven test automation is more maintainable than keyword-driven test automation",
        "Keyword-driven test automation requires less skill to develop than data-driven test automation"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following describes a common technical problem that causes test automation projects to fail to achieve the planned return on investment?",
      options: [
        "Eliminating information duplication between tools",
        "Eliminating manual verification of data exchanges between tools",
        "Using an integrated development environment to simplify integration between tools",
        "Failure to include software that automatically handles test failures"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Suppose you are involved in testing a mature application. This application is an online dating service that allows users to: enter a profile of themselves; meet appropriate people according to their orientation who would be a good match; organize social events with those people; and block people they do not wish to be contacted by. Defects and test cases are managed in an existing commercial test management tool, which is working well. The source code and other project work products are stored in an open-source configuration management system. Your manager instructs you to help her select a test execution automation tool to automate most of the regression tests. Suppose you are using a keyword-driven automation approach. Which of the options would be the MOST LIKELY keywords for this application?",
      options: [
        "Enter_Test_Data",
        "Remove_Test_Data",
        "Enter_Profile",
        "Find_Match",
        "Pay_Bill"
      ],
      correctAnswer: [2, 3], // The correct options are c) and d)
      urlImage: " "
    },
    {
      "question": "Which of the following statements about fault seeding tools is correct?",
      options: [
        "These tools insert defects into the source code to test the software's input verification capabilities",
        "These tools insert defects into the source code to verify the software's fault tolerance level",
        "These tools insert defects into the source code to test the effectiveness of the test suite",
        "These tools are generally used by the test analyst to measure the coverage achieved by specific tests"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following statements about performance testing tools is CORRECT?",
      options: [
        "These tools drive the application at the communication protocol level rather than through its user interface to measure response times more accurately",
        "These tools generate a load by simulating many virtual users using operational profiles to generate input test data",
        "These tools capture a script of an individual user interaction and multiple identical copies of this script are replayed in parallel to represent the full range of possible users",
        "These tools take a wide range of measurements after test execution to allow analysis of the most significant performance characteristics of the test object"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following CORRECTLY describes the objectives of tools that support web-based testing?",
      options: [
        "Generate test cases by executing a model of the required behavior of the test object",
        "Isolate user interface failures by changing variable values during line-by-line code execution",
        "Measure the quality of a test suite by injecting defects into the test object",
        "Verify accessibility standard violations",
        "Verify orphaned files by scanning the server"
      ],
      correctAnswer: [3, 4], // The correct options are a) and e)
      urlImage: " "
    },
    {
      "question": "Which of the following BEST describes how tools can support model-based testing (MBT)?",
      options: [
        "MBT tools are used to generate test cases that reflect the required behavior presented in a model of the test object",
        "MBT tools execute the model of the test object's behavior to identify defects instead of executing tests on the test object",
        "MBT tools provide an internal view of the test object and are used to automatically generate white-box test cases",
        "MBT tools automatically generate test cases to achieve a required level of coverage of the test object's source code"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following statements about component testing tools and build automation tools is TRUE?",
      options: [
        "An xUnit framework can be used to automate component tests; build automation tools execute automated component tests",
        "A JUnit framework can simplify component test automation in a Java environment; build automation tools automatically trigger component tests whenever a component changes in a build",
        "Component testing frameworks can simplify component test automation; build automation tools cause a new build to be triggered when a component is changed",
        "Component testing tools can be used against multiple programming languages; build automation tools are triggered when a component is tested"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following statements BEST CAPTURES the purpose of an emulator when used to support mobile application testing?",
      options: [
        "A mobile emulator is used to replace real mobile devices in testing, but is limited to initial functional tests",
        "A mobile emulator is used to replace real mobile devices in testing, but does not allow early usability testing, such as evaluating user interface aesthetics",
        "A mobile emulator is used to test different features of a mobile application from the beginning, using specially compiled versions of the software, which would not work on a real device",
        "A mobile emulator allows dynamic testing of a mobile application that has been compiled and packaged for a specific platform without installing it on a real device"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Question #X1 TTA-4.3.1 (K2) Explain the reasons for including security testing in a test approach. A new personal banking system is to be developed for use on mobile devices. Which of the following options is a valid reason for including security testing in the test approach?",
      options: [
        "Ensure that automatic mobile application updates do not block users from accessing their accounts",
        "Ensure that no confidential information is left in temporary files on the phone's SIM card memory",
        "Ensure that the application installs correctly on many different mobile phone models and OS versions",
        "Ensure that the application provides planned functionality without overloading the phone's CPU"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Question #X2 TTA-4.4.1 (K2) Explain the reasons for including reliability testing in a test approach. Which of the following factors should be considered when planning reliability testing?",
      options: [
        "Ability to simulate hardware and operating system defects",
        "Monitoring of resources used",
        "Identification of vulnerabilities leading to denial of service",
        "Determination of maximum loads for the system"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Question #X3 TTA-4.5.1 (K2) Explain the reasons for including performance testing in a test approach. A web-based vacation booking system expects to handle three times its average number of visitors during the peak month of the year. Which of the following reasons would justify including performance testing in the test approach?",
      options: [
        "Web servers may not be able to handle the maximum number of transactions",
        "The expected maximum load defined by business analysts may be too high",
        "Functional tests can be reused for performance tests",
        "Response time to vacation queries may be unacceptable to users",
        "Skills in using performance testing tools are available"
      ],
      correctAnswer: [0, 3], // The correct options are a) and d)
      urlImage: " "
    },
    {
      "question": "Question #X4 TTA-4.8.1 (K2) Explain the reasons for including coexistence testing in a test approach. Which of the following is an example of compatibility testing?",
      options: [
        "Verify if there is a resource conflict between the application being tested and another application",
        "Verify if an external component to the system can be a replacement for an existing component",
        "Verify if a loan quota is calculated in the same currency as the input data describing the loan size",
        "Verify if all modules within a system are written in the same programming language"
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
    "nameQuiz": "Technical Test Analyst"
  }
}
window.data_en = data_en;
