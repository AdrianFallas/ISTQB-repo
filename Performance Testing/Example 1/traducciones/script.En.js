const data_en = {
  questions: [
    {
      "question": "Which of the following is an important principle of performance testing regarding results?",
      options: [
        "Results should be identical to those returned when the same tests are run in the production environment",
        "Results should demonstrate that the system meets or exceeds user expectations",
        "Results should be in a form that allows comparison with user expectations",
        "Results should be reported via a dashboard for use by senior management"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "How does load testing differ from stress testing?",
      options: [
        "Load testing focuses on the highest expected load, while stress testing focuses on maintaining a high load for a period of time",
        "Load testing focuses on rapid increases and decreases in load, while stress testing focuses on maintaining a high load for a period of time",
        "Load testing and stress testing are actually the same thing",
        "Load testing focuses on increasing levels of realistic load, while stress testing focuses on loads that are at or beyond the maximum expected load"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "If performance tests are being conducted to determine that a system under load can increase its capacity as more memory is allocated to it, what type of test is being performed?",
      options: [
        "Load testing",
        "Stress testing",
        "Scalability testing",
        "Spike testing"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is an important static activity in performance testing?",
      options: [
        "Reviewing pending usability defect reports",
        "Reviewing the system architecture",
        "Reviewing security requirements for the system",
        "Reviewing functional requirements"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Why is a stable user interface important when the load will be generated from that interface?",
      options: [
        "Because changes to the interface may require changes to performance scripts",
        "Because defects in the interface will cause performance degradation",
        "Because the APIs used by the interface will have to be changed",
        "Because the full user experience cannot be determined until the interface is stable"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is a likely cause of a system responding slowly only under heavy load?",
      options: [
        "A network latency issue that should have been visible during functional testing",
        "A slow memory leak",
        "Lack of indexing on a database table",
        "A saturation or exhaustion of a system resource"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "If you are measuring the time it takes for a system to restore from a backup, what type of environment are you considering?",
      options: [
        "Technical",
        "Business",
        "Operational",
        "Virtual"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is an advantage of aggregating test results?",
      options: [
        "It is easier to see the overall performance of a system",
        "It is easier to see the specific performance of a specific test",
        "It is easier to understand the duration and frequency of any slow periods",
        "It is easier to capture ramp-up and ramp-down time anomalies"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "During or after a performance test, what type of information should you check in the server logs?",
      options: [
        "Number of concurrent users on the system at a particular time",
        "A graph of system performance during the test",
        "Defects that were reported during the test",
        "Memory errors and database errors that occurred during the test"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "If you are testing to understand how many users can use a site at the same time, what test result is particularly interesting to you?",
      options: [
        "Data throughput",
        "Business process efficiency",
        "Usage concurrency",
        "Usage time"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Why are good test monitoring and control measures so important in performance testing?",
      options: [
        "Because tests can be delayed and more testers may be required to complete the work",
        "Because changes in the environment can invalidate test results, so being aware of these changes is critical",
        "Because it is difficult to define performance requirements in a measurable way",
        "Because test design often requires building modular tests that can then be combined into larger suites for execution"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "How often should performance tests be conducted?",
      options: [
        "Once, after system testing has been completed",
        "Multiple times, after system testing has been completed",
        "Twice for each test level",
        "Multiple times, at all test levels"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Which of the following is the most likely performance risk for a distributed system?",
      options: [
        "Problems with critical workflows or data flows to or from remote servers",
        "Problems with excessive load on hardware due to improper host virtual machine configuration",
        "Problems with network connection at the client endpoint",
        "Problems with new traffic through APIs overloading established applications"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Which of the following is the most likely performance risk for a client-server system?",
      options: [
        "Problems with critical workflows or data flows to or from remote servers",
        "Problems with excessive load on hardware due to improper host virtual machine configuration",
        "Problems with network connection at the client endpoint",
        "Problems with new traffic through APIs overloading established applications"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is the most likely performance risk for a virtualized system?",
      options: [
        "Problems with critical workflows or data flows to or from remote servers",
        "Problems with excessive load on hardware due to improper host virtual machine configuration",
        "Problems with network connection at the client endpoint",
        "Problems with new traffic through APIs overloading established applications"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You are working for a company that has developed software to be used at Olympic ski events to track and publish times. This software will take data from various sensors to determine the start and end times for each individual racer as they compete one at a time. It will also allow judges to enter a disqualification status for an individual skier at any time during their run and within 5 minutes after the end of their run. The information will be sent via an API to the software that will control the display board at the event and to the interface used by broadcast communities. Your company has also developed a mobile application that will be available for free download to anyone in the world who wishes to receive “real-time” results from the events. Testing for the mobile application will be done in the cloud using device simulators. Technical stakeholders in the project are available for a one-day performance risk analysis session. Of the risks in this product, which is best analyzed by these stakeholders?",
      options: [
        "The time it will take to get information from the sensors into the application",
        "The time it will take to communicate via the API to the display board",
        "The time it will take for a judge to enter a disqualification status",
        "The time it will take for data to be available in mobile applications"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have determined that testing the mobile application will require an expensive cloud resource that will supply simulated and real devices. Setting this up will not be a huge effort, but you will be charged for every minute of use, as well as for every device (simulated or real) that is used. Your development lifecycle methodology is agile. Given this information, what is the best time to perform the full performance test for the mobile application?",
      options: [
        "As part of CI/CD, for each build",
        "As part of each iteration, towards the end of the iteration",
        "As part of a separate iteration that will occur when the software is functionally stable",
        "As part of final release testing, after regression tests have been successfully completed"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Base Scenario: The expected data to be seen on mobile devices are:\n • Results automatically displayed when each racer completes their run\n  • Final results automatically displayed when the race is completed\n  • Summary of all disqualified racers\n  • Leaderboard showing the top five racers – updated when each racer completes their run.\n  The acceptable time (90% of transactions) for automatic results to be received is 3 seconds. For queried information (summary and leaderboard), the acceptable response time (for 90% of transactions) is 5 seconds. What additional information do you need to derive the performance test objectives?",
      options: [
        "A description of the devices to be used",
        "A description of the handling that will occur when connectivity is lost",
        "A list of system resources that should be tracked and the expected usage of those resources",
        "A list of all other applications expected to be running on the target devices during testing"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have been asked to prepare a performance test plan. Given the project information that has been supplied, what type of performance test will be most important for this project?",
      options: [
        "Spike testing",
        "Stress testing",
        "Endurance testing",
        "Scalability testing"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have executed a performance test cycle. You have accumulated the following metrics:\n  Virtual users = 100,000;\n  Virtual users successfully completing all transactions = 97%;\n  Transaction time for results automatically displayed when each racer completes their run:\n  Average = 2 seconds, 90% = 3 seconds, 95% = 5 seconds;\n  Transaction time for final results automatically displayed when the race is completed:\n  Average = 1 second, 90% = 3 seconds, 95% = 4 seconds;\n  Transaction time for summary of all disqualified racers:\n  Average = 6 seconds, 90% = 7 seconds, 95% = 8 seconds;\n  Transaction time for leaderboard showing the top five racers:\n  Average = 4 seconds, 90% = 5 seconds, 95% = 9 seconds.\n  The acceptable time (90% of transactions) for automatic results to be received is 3 seconds. For queried information (summary and leaderboard), the acceptable response time (for 90% of transactions) is 5 seconds.\n  For this information, you have created the following report: For which stakeholder group would this report be most appropriate?",
      options: [
        "Stakeholders with a business focus",
        "Stakeholders with a technological focus",
        "Future product users",
        "Competitors"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: "./imagenes/tabla preg20.png"
    },
    {
      "question": "Considering the previous scenario and disregarding performance times, what information would be most interesting to technical stakeholders?",
      options: [
        "How virtual users were created",
        "The ramp-up and ramp-down times required for all users",
        "What caused 3% of transactions to not complete",
        "What environment was used for testing"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "In the OSI model layers, which layers are most commonly accessed for performance testing?",
      options: [
        "Layers 1 – 3",
        "Layers 3 – 5",
        "Layers 5 – 7",
        "Layers 7 – 9"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "If you are performing performance testing with a particular emphasis on database access, what protocol are you likely using for testing?",
      options: [
        "HTTP",
        "ODBC",
        "REST",
        "HTML"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Base Scenario: Which of the following is an example of a transaction?",
      options: [
        "Requesting a current leaderboard",
        "Receiving and viewing the results of an individual skier",
        "Entering a disqualification request",
        "Printing the final standings of a particular race"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Why is it important to include think time when creating performance test scripts?",
      options: [
        "Because the system needs time to ramp up and ramp down",
        "Because users tend to pause during transactions to read screens, absorb information, or navigate",
        "Because performance testers must carefully include every step a user will follow, which requires them to 'think' while scripting",
        "Because systems cannot keep up with transactions being received from multiple scripts"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have identified three operational profiles for the product:\n  1. The mobile user checking race results on their phone\n  2. The judge entering disqualification status information during and immediately after a race\n  3. Broadcast companies accessing data via the API.\n  Which operational profile are you missing?",
      options: [
        "The skier",
        "The audience watching the display board with scores",
        "The display board itself",
        "Mobile users who are at the race and are checking race results on their phone"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have identified that you expect to have a load of 100,000 users for a high-interest race and 20,000 users for a low-interest race. There are 5,000 users who appear to always be connected, even when nothing is happening. High-interest races are the semifinals and finals of any particular competition. A race normally lasts 5 minutes and there are usually 8 racers in the semifinals and 4 racers in the finals. A low-interest race is any of the first 30 races that determine who will be in the semifinals. Which of the following is a correct diagram of the appropriate load profile for a competition (x-axis shows hh:mm and y-axis shows number of users)?",
      options: [
        "Graph 1",
        "Graph 2",
        "Graph 3",
        "Graph 4"
      ],
      correctAnswer: 0, // The correct option is a
      urlImage: ["./imagenes/grafic1 preg27.png", "./imagenes/grafic2 preg27.png"]
    },
    {
      "question": "In the previous scenario, for a given competition with 30 racers, what is the expected throughput for automatic results display for a phone?",
      options: [
        "30",
        "43",
        "20,000",
        "100,000"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "Why is it important to have a cleanup section in a performance test script?",
      options: [
        "To ensure that data is collected for the response time report",
        "To ensure that errors are logged and data issues are resolved",
        "To ensure that the system is reset to a point where the script can be run again",
        "To ensure that the operator is informed that the test has been completed"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Which of the following is a good practice when adding verification logic to a script?",
      options: [
        "Attempting to add data that has already been added",
        "Attempting to delete data that has already been deleted",
        "Verifying that transactions have completed by querying the database to see if data was changed correctly",
        "Verifying that no errors have been logged by the script and no errors have been logged in system logs"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have identified that you expect to have a load of 100,000 users for a high-interest race and 20,000 users for a low-interest race. There are 5,000 users who appear to always be connected, even when nothing is happening. You have been considering purchasing a load testing tool, but you have found that virtual user licenses are very expensive. What is the minimum number of virtual users you will need to perform a load test for this application?",
      options: [
        "5,000 as that is the base load",
        "10,000 and extrapolate the results to 100,000",
        "20,000 with all think time removed",
        "100,000 each creating the expected throughput"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "Base Scenario: Judges must log in with a username and password before they are allowed to enter any disqualifications. A judge normally logs in once per race and can enter multiple disqualifications during that race. How will correlation be necessary when creating performance scripts for judge interactions?",
      options: [
        "It will be necessary to ensure that the judge's session information is recorded with their disqualification entries",
        "It will be necessary to ensure that the disqualification is recorded against the correct skier",
        "It will be necessary to time a disqualification correctly during the race to ensure it is within the 5-minute time limit",
        "It will be necessary to ensure that the results correctly record the judge's information"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "What is the best environment to use for performance testing?",
      options: [
        "The production environment",
        "A complete replica of the production environment",
        "The sandbox environment",
        "The development environment"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "When would it be appropriate to use service virtualization?",
      options: [
        "When a web service resides on a virtual machine",
        "When the cloud is used for testing",
        "When the performance testing tool is a SaaS",
        "When the service to be used is unavailable"
      ],
      correctAnswer: 3, // The correct option is d)
      urlImage: " "
    },
    {
      "question": "What should be done immediately after the load ramp-up is completed for a performance test?",
      options: [
        "Start the virtual user load ramp-up",
        "Start the load ramp-down",
        "Wait until the system has reached a stable state, then start the ramp-up",
        "Bring the full load of virtual users"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Should manual tests be performed during performance testing?",
      options: [
        "Yes, this will help verify that the performance recorded by the tool is accurate",
        "Yes, this will help verify that no functional issues are occurring",
        "No, this will likely interfere with the metrics being collected by performance testing tools",
        "No, this can give users a false impression of the performance they will experience with the released product"
      ],
      correctAnswer: 0, // The correct option is a)
      urlImage: " "
    },
    {
      "question": "Base Scenario: You have executed a performance test cycle. You have accumulated the following metrics:\n  Virtual users = 100,000;\n  Virtual users successfully completing all transactions = 97%;\n  Transaction time for results automatically displayed when each racer completes their run:\n  Average = 2 seconds, 90% = 3 seconds, 95% = 5 seconds;\n  Transaction time for results automatically displayed when the race is completed:\n  Average = 1 second, 90% = 3 seconds, 95% = 4 seconds;\n  Transaction time for summary of all disqualified racers:\n  Average = 6 seconds, 90% = 7 seconds, 95% = 8 seconds;\n  Transaction time for leaderboard showing the top five racers:\n  Average = 4 seconds, 90% = 5 seconds, 95% = 9 seconds.\n  The acceptable time (for 90% of transactions) for automatic results to be received is 3 seconds. For queried information (summary and leaderboard), the acceptable response time (for 90% of transactions) is 5 seconds. Given this information, which scenarios will require system adjustment and additional testing?",
      options: [
        "All of them because these results are only for one run",
        "Automatic displays because their 95% numbers are too slow",
        "The disqualification summary because all times are too slow",
        "The leaderboard because this is a critical part of the system and the 95% numbers are too slow"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "What is the basis for scripts executed by a load generator to simulate user behavior?",
      options: [
        "The expected number of virtual users",
        "The defined operational profiles",
        "The defined load profiles",
        "The expected system response time"
      ],
      correctAnswer: 1, // The correct option is b)
      urlImage: " "
    },
    {
      "question": "What is a function of a performance testing tool's load management console?",
      options: [
        "Managing virtual user activities",
        "Providing raw data for senior management",
        "Starting and stopping tests",
        "Handling error recovery for a test script"
      ],
      correctAnswer: 2, // The correct option is c)
      urlImage: " "
    },
    {
      "question": "Base Scenario: Is it appropriate to use cloud simulators for all performance tests?",
      options: [
        "Yes, simulators will be cost-effective and accurate enough for these tests",
        "No, emulators will be needed for all transactions to ensure information is displayed correctly",
        "No, cloud simulators can be used for phone tests, but emulators or the real device will be needed to test communication with the display board",
        "No, tests should be performed on real devices to verify usability as well as performance"
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
    "errorLoading": "Error loading the quiz. Please try again later."
  }
}