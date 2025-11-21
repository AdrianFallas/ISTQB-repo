const data_en = {
  questions: [
    {
      "question": "Which of the following is an important principle in performance testing?",
      options: [
        "Tests should be easy to create and understand",
        "Test results should be reproducible when the system under test does not change",
        "Tests should be executed in the production environment to provide the most accurate results",
        "Test results should match stakeholders' expectations for system performance"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following is the best description of spike testing?",
      options: [
        "It focuses on the system's ability to handle loads that gradually increase to the expected maximum",
        "It focuses on the system's ability to handle loads that are at or beyond the maximum expected load",
        "It focuses on the system's ability to meet future efficiency requirements",
        "It focuses on the system's ability to respond to rapid and extreme changes in load"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is the best description of load testing?",
      options: [
        "It focuses on the system's ability to handle loads that gradually increase to the expected maximum",
        "It focuses on the system's ability to handle loads that are at or beyond the maximum expected load",
        "It focuses on the system's ability to meet future efficiency requirements",
        "It focuses on the system's ability to respond to rapid and extreme changes in load"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Which of the following performance testing activities should occur during unit testing?",
      options: [
        "Testing end-to-end behavior under various load conditions",
        "Testing data flows and workflows across interfaces",
        "Testing key use cases and workflows using a top-down approach",
        "Testing to evaluate resource utilization and potential bottlenecks"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "When is it appropriate to generate load through application APIs?",
      options: [
        "When there are a large number of testers available who can represent real users",
        "When tests need to be performed at the communication protocol level",
        "When the user interface is likely to change, but transactions must be processed as if they were created through the user interface",
        "When only small amounts of test instances are available"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "If you have an application that has a memory leak, what is the likely result you will see during performance testing?",
      options: [
        "Response time will be consistently slow",
        "Response time will remain acceptable, but error handling will degrade",
        "Response time will be slow, but only under heavy loads",
        "Response time will degrade over time"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is a true statement regarding tracking metrics for network latency during a performance test?",
      options: [
        "High latency could indicate a network bandwidth issue that could negatively impact performance",
        "Low latency could indicate a network bandwidth issue that could negatively impact performance",
        "Network latency is difficult to track and should not be included in performance metrics",
        "Network latency is too variable to be useful during performance optimization"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Should performance test results be aggregated?",
      options: [
        "Yes, this provides a better overview of system performance and helps identify trends",
        "Yes, this is the best way to focus on outliers in performance metrics",
        "No, results should be analyzed individually so that all variations are understood",
        "No, the results of each test should be reported and tracked separately"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "How are log analysis tools useful for collecting metrics?",
      options: [
        "They monitor systems while performance tests are being conducted and report on behavior during tests",
        "They create system load and monitor system performance",
        "They scan various server logs and compile metrics for occurrences that were logged during test execution",
        "They write performance results to server logs for later manual analysis"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is a failure typically found when performing a spike test?",
      options: [
        "System performance gradually degrades",
        "The system provides inconsistent responses to errors",
        "The system handles a sudden increase in activity but cannot resume a stable state",
        "The system performs well for the expected load but cannot scale to a larger load"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "When applying the main performance testing activities, when should risk identification and analysis occur?",
      options: [
        "Test planning",
        "Test analysis and test design",
        "Test implementation and test execution",
        "Test completion"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "When applying the main performance testing activities, when should test cases be ordered into performance test procedures?",
      options: [
        "Test planning",
        "Test analysis",
        "Test implementation",
        "Test completion"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": `Which of these is most likely to have a performance risk due to connectivity issues?\n
    
      1. Single computer systems
      2. Multi-tier systems
      3. Distributed systems
      4. Virtualized systems
      5. Dynamic/cloud-based systems
      6. Client-server systems
      7. Mobile applications
      8. Real-time embedded systems
      9. Mainframe applications`,
      options: [
        "2, 3 ",
        "6, 7, 8 ",
        "5, 6, 7, 9 ",
        "2, 4, 5, 8 "
      ],
      correctAnswer: 1, // The correct option is b) (6, 7, 8)
      urlImage: " "
    },
    {
      "question": `Which of these is most likely to have a performance risk due to memory leaks?\n
    
      Virtualized systems
      Dynamic/cloud-based systems
      Client-server systems
      Mobile applications
      Real-time embedded systems
      Mainframe applications`,
      options: [
        "1, 2, 3, 6 ",
        "2, 3, 4, 5 ",
        "1, 2, 4, 6 ",
        "1, 3, 4, 5 "
      ],
      correctAnswer: 3, // The correct option is d) (1, 2, 4, 6)
      urlImage: " "
    },
    {
      "question": "If performance tests are being conducted for software written in C++, what do you need to monitor that would not be a concern if the software were written in Python?",
      options: [
        "Memory usage",
        "Network latency",
        "Connectivity",
        "Batch processing"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. Given this information, when is the best time in the project to analyze and evaluate performance risks?",
      options: [
        "During the requirements phase and again just before executing performance tests",
        "After design but before coding",
        "During system testing and again before performance testing",
        "Repeatedly throughout requirements, development, and performance testing"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. What is the best way to approach performance testing for response time?",
      options: [
        "Test from the user interface with the full dataset loaded to ensure that response time will be adequate when the database is loaded",
        "Test through web services at the API level to ensure that data access is fast enough without complicating the test with the user interface",
        "Perform a technical review of the database implementation and perform a performance test from the user interface with the full database loaded",
        "Perform a network assessment to ensure there are no latency issues between the database server and web servers, then test with a network scanner to ensure no collisions occur that could cause performance delays"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. Which of the following is a technical performance objective that could be applicable to this project?",
      options: [
        "Response time must be within three seconds from the time the request is sent when there are 100 concurrent users making similar requests",
        "The system must be able to scale to 10 million patient records without performance degradation",
        "The system must perform at or above the level of the legacy system when handling a similar load and responding to a similar request",
        "Response time must remain the same when using the disaster recovery system instead of the primary system and the switch should not cause discernible downtime"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. You have been asked to write a performance test plan for this project. To address the most critical performance objective, what information do you need?",
      options: [
        "Who can access what data and how often they will do so",
        "How user access is authenticated and authorized",
        "Where data will be stored and how much storage is available",
        "What is the expected use of the data after it has been presented to the user"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. You have been asked to prepare a presentation for business stakeholders about your plan for performance testing. Which of the following is a set of information that should be shared with these stakeholders?",
      options: [
        "Once configured, the performance test system will require data loading. Once loaded, we will proceed to run a small set of sample scripts to verify the output. When those are successful, we will proceed with the performance test script that will increase users at a rate of 10 per minute until the target number of concurrent users is reached. This load will be maintained for 2 hours.",
        "The performance test system will cost $240,000, which will include hardware and setup. This system will allow us to create a test system that is representative of the production system and will allow us to simulate production-like conditions.",
        "Because the cost of a performance test system is prohibitive, we will perform performance tests in the production environment using live data.",
        "Product risks include data contention issues, data access issues, locking issues that will reject concurrent requests, network bandwidth limitations, data lookup errors, data lookup slowdowns or bottlenecks, and user difficulty in processing returned data."
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. You have been asked to prepare a presentation for technical stakeholders about your plan for performance testing. Which of the following is a set of information that should be shared with these stakeholders?",
      options: [
        "Once configured, the performance test system will require data loading. Once loaded, we will proceed to run a small set of sample scripts to verify the output. When those are successful, we will proceed with the performance test script that will increase users at a rate of 10 per minute until the target number of concurrent users is reached. This load will be maintained for 2 hours.",
        "The performance test system will cost $240,000, which will include hardware and setup. This system will allow us to create a test system that is representative of the production system and will allow us to simulate production-like conditions.",
        "Because the cost of a performance test system is prohibitive, we will perform performance tests in the production environment using live data.",
        "Product risks include data contention issues, data access issues, locking issues that will reject concurrent requests, network bandwidth limitations, data lookup errors, data lookup slowdowns or bottlenecks, and user difficulty in processing returned data."
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "If your performance test is testing the response speed of a web service, what protocol is being used?",
      options: [
        "ODBC",
        "HTTP",
        "REST",
        "SMTP"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "If your performance test is testing the speed with which requests are sent to and received from the database, what protocol is being used?",
      options: [
        "ODBC",
        "HTTP",
        "REST",
        "SMTP"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "If you are testing from the user interface and need to simulate the amount of time it will take a real user to read a prompt and enter data into a field, what should you implement in your test script?",
      options: [
        "Wait time",
        "Think time",
        "Latency time",
        "Read time"
      ],
      correctAnswer: 1, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is the value of nesting transactions for performance testing?",
      options: [
        "It supports the concept of parent and child transactions",
        "It allows the tester to measure a series of discrete transactions",
        "It speeds up the reporting time of performance results",
        "It eliminates network communication time by sending the transaction directly to the server that will process it"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. One of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and will normally view 6 patient records per access. They will print those patient records to be retained in the patient's file at the hospital. They will also enter notes into the database about the patient's treatment. For new patients, another user will enter the information into the system. Given this information, what is missing to build the operational profile for this user class?",
      options: [
        "Interviews were not conducted to better understand the user class",
        "The number of users in the system for this role is not known",
        "Batch processing of patient load information has not been considered",
        "Other system components that may be required (X-ray loading, lab results reports) have not been considered"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. One of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and will normally update 6 patient records per access by entering notes into the database about the patient's treatment. They will print those patient records to be retained in the patient's file at the hospital. For new patients, another user will enter the information into the system. The shifts these doctors work are: 7am – 5pm (day shift), 2pm – midnight (evening shift), 9pm to 7am (night shift). There are 1000 doctors working the day shift, 1000 working the evening shift, and 500 working the night shift. Assuming a uniform distribution of system access throughout a shift, which of the following is the appropriate load for these doctors?",
      options: [
        "6250 transactions per hour",
        "Constant increase by incrementing transactions by 15,000 per hour starting at 15,000 transactions and ending at 150,000 transactions",
        "Stepped increase with 7 hours at 21,000 transactions, 3 hours at 27,000 transactions, 3 hours at 36,000 transactions, 11 hours at 66,000 transactions",
        "Separate tests for 120,000 transactions per hour and 30,000 transactions per hour"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. One of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and will normally update 6 patient records per access by entering notes into the database about the patient's treatment. They will print those patient records to be retained in the patient's file at the hospital. For new patients, another user will enter the information into the system. The shifts these doctors work are: 7am – 5pm (day shift), 2pm – midnight (evening shift), 9pm to 7am (night shift). There are 1000 doctors working the day shift, 1000 working the evening shift, and 500 working the night shift. Assuming a uniform distribution of system access throughout a shift, what is the maximum number of concurrent accesses to the system by these doctors?",
      options: [
        "1,000",
        "2,000",
        "6,000",
        "12,000"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "What is one of the advantages of performing performance tests at the protocol level?",
      options: [
        "It is the easiest method for manual scripting",
        "It is the best way to evaluate the total user experience",
        "It is scalable because the client is omitted",
        "It is the best way to handle data correlation"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "What is the best method to verify that a performance test script added users to a system?",
      options: [
        "Check the script's error output to confirm that no errors occurred",
        "Manually verify through an application if users were created",
        "Use the script to verify through the application that users were created",
        "Use the script to verify that users exist in the database"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. One of the operational profiles you have identified is an emergency room doctor. You have determined that this person will access the system 10 times per shift (a shift is 10 hours) and will normally view 6 patient records per access. They will print those patient records to be retained in the patient's file at the hospital. They will also enter notes into the database about the patient's treatment. For new patients, another user will enter the information into the system. You have created a performance script that logs in as a doctor (from a list of doctors) and then performs patient searches. When you run the script, the login works, but then you cannot perform patient searches. You are receiving an error indicating that the user is not known to the system. What is likely your problem?",
      options: [
        "The script is not capturing and reusing the system identifier for the user",
        "You cannot use the same user to log in and perform patient searches because the user has expired",
        "The script needs to pass the login username/password for each transaction",
        "The previous user's login information is cached by the system and you need to clear the cache before you can log in as a new user"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are testing a sales application for an e-commerce system. You are particularly interested in the response time when a user enters text to search for an item in the database. You have noticed that the first time you ran the tests it took 5.00 seconds to respond, but subsequent queries with the same data are responding in 0.01 seconds. What should you have done during your scripting to prevent this problem?",
      options: [
        "There is no problem, the system is simply getting faster",
        "You need to log in each time to ensure the transaction is performed again",
        "You need to ensure that the cache is clear because the query results are likely being cached",
        "You need to use a different user for each test to prevent user information from being reused without being restored"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "What happens when the performance test system is not equivalent to the production environment?",
      options: [
        "Projections become less reliable and risk increases because results may not be representative",
        "Tests tend to run faster because they are not loaded with production data",
        "Results will be easier to understand because the system can be configured for a particular test",
        "Projects become more reliable due to the targeted approach and this results in risk reduction"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is a concern when using a properly configured load generation tool to build background load for performance testing?",
      options: [
        "The generated load will contain invalid data",
        "The load generator may experience performance issues and will not be able to maintain a constant load",
        "The generated load may affect the production system and production data",
        "Load generator log reports may be difficult to read, resulting in problems interpreting performance results"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "What is the purpose of having a ramp-up period at the beginning of performance tests?",
      options: [
        "To increase the number of users beyond the desired load",
        "To allow the system to achieve a stable state before taking measurements",
        "To allow the system to achieve an orderly shutdown after testing",
        "To ensure that performance monitoring tools are working"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "What is a method for testing transient states?",
      options: [
        "Constant load testing",
        "Peak and valley testing",
        "Spike testing",
        "Scalability testing"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. You have performed your tests and have determined the following metrics:\n < 2 seconds response time: 85% of the time\n < 3 seconds response time: 90% of the time:\n < 10 seconds response time: 95% of the time:\n < 60 seconds response time: 100% of the time.:\n Given this information, how should you present the results to stakeholders?",
      options: [
        "The test failed, the system is too slow. Requirements should be reviewed to ensure that < 3 seconds is required 100% of the time.",
        "95% of the time the performance objective is met, so the system should be accepted according to industry standards.",
        "The response time for 90% of the tests is probably acceptable according to industry standards, but further tuning is needed to reduce the 95% response time.",
        "The response time for 100% of the tests is unacceptable and tuning will be required to reduce it to < 3 seconds."
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "What is the purpose of a load generator tool?",
      options: [
        "It creates a load on the network to allow collision testing",
        "It maintains a load on the user interface to accurately imitate user response time",
        "It feeds data to the dashboard showing how the system is responding to the load",
        "It simulates user behavior according to operational profiles"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "What is a pay-as-you-go tool?",
      options: [
        "A tool with a license agreement that requires you to pay only for the number of virtual users and instances you actually use",
        "A server-based tool that provides you with full ownership of the tool for your use",
        "A monitoring tool that populates the dashboard with relevant metrics based on what you have paid to monitor",
        "A tool that provides the ability to test from multiple points of presence for load generation"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "You are working on a project that tracks information about the health history of patients in a region. The number of records handled by the system is in the millions due to the large number of patients in the region. Patient information must be accessible to doctors in offices, hospitals, and urgent care centers. Information must be presented to the requester within three seconds of the request, particularly for patients with critical allergies and pre-existing conditions. You have a technical team that is performing performance tests and is comfortable programming performance test scripts for reuse and maintainability. You are now looking for a tool to use in these tests. You have found one that is compatible with your environment and will be able to generate load through the protocols in use. The team has reviewed it and is comfortable that they can code in the tool and create their scripts with little training. Because there are many stakeholders in these tests, you have verified that the tool provides excellent monitoring and reporting capabilities. You have verified with the various system administrators that they are comfortable with the tool and happy to use its monitoring capabilities in addition to their own tools during testing. What do you still need to verify before selecting this tool?",
      options: [
        "The project schedule",
        "The availability of a recording/playback capability for your testers to use",
        "The tool's ability to meet your concurrent virtual user requirements",
        "The ease with which your team can code the required performance scripts"
      ],
      correctAnswer: 2, // The correct option is c)
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
    "nameQuiz": "Performance Testing - Example 2",
  }
}
window.data_en = data_en;
