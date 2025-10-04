const data_en = {
  questions: [
    {
      "question": "You are the quality specialist on a mobile application development team. For which of the following activities would mobile analytics data be used within the testing strategy or plan?",
      options: [
        "Define the expected user base of the application.",
        "Derive test levels, test cases, and test data.",
        "Select the device portfolio and prioritization for test execution.",
        "Select the type of application and development model to follow."
      ],
      correctAnswer: 2, // Device selection and test prioritization
      urlImage: ""
    },
    {
      "question": "Your team is developing a free application that collects public news from user-selected sources, so they have a single place to read all their favorite information.\nBased on this information, which of the following business models is the MOST appropriate?",
      options: [
        "Freemium application.",
        "Advertising-based application.",
        "Paid application.",
        "Transaction-based application."
      ],
      correctAnswer: 1, // Advertising-based model
      urlImage: ""
    },
    {
      "question": "Which of the following statements is true for feature phones?",
      options: [
        "Feature phones offer limited support for application installation.",
        "Feature phones are similar to smartphones, but larger.",
        "Feature phones are the next generation of smartphones, with extended functionality.",
        "Feature phones have cameras, GPS, and other integrated sensors."
      ],
      correctAnswer: 0,
      urlImage: " "
    },
    {
      "question": "Your team is developing a game for Android that uses many device features, such as camera, GPS, and orientation.\nWhich of the following application types is the MOST suitable if precise use of specific device functions is essential?",
      options: [
        "Hybrid application.",
        "Mobile web application.",
        "Native application.",
        "Desktop application."
      ],
      correctAnswer: 2, // Native application
      urlImage: ""
    },
    {
      "question": "Your team is developing an iOS application used to register users, their email addresses, and physical addresses. The data is transferred to a server, and registered users receive physical product samples sent by conventional mail.\nWhich of the following architectural decisions are the TWO MOST appropriate for this app?",
      options: [
        "Always Connected",
        "Native app",
        "Store and forward",
        "Cellular data",
        "Web app"
      ],
      correctAnswer: [1, 2], // Native app and Store and Forward
      urlImage: ""
    },
    {
      "question": "Your analytics data indicates that all your users use iPhone.\nWhich of the following decisions is the MOST appropriate for your testing strategy if it is a low-risk application?",
      options: [
        "Use remote device access service.",
        "Use single-platform strategy.",
        "Use maximum coverage strategy.",
        "Use only iOS simulators."
      ],
      correctAnswer: 1, // Single platform
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a challenge when testing mobile applications?",
      options: [
        "Unknown command parameters when starting the application that alter its behavior.",
        "Diverse users and user groups.",
        "Multiple network types and network providers.",
        "Lack of availability of newly launched devices forcing the use of emulators/simulators."
      ],
      correctAnswer: 0, // Unknown startup parameters
      urlImage: ""
    },
    {
      "question": "A company has decided to use collaborative testing.\nWhich of the following risks is mitigated by this decision?",
      options: [
        "Lack of availability of key stakeholders during development.",
        "Cost of support for multiple platforms.",
        "Lack of availability of important devices during testing.",
        "Good reviews in the platform provider's app store."
      ],
      correctAnswer: 2, // Access to varied devices via crowdtesting
      urlImage: ""
    },
    {
      "question": "When testing a native application that uses different device functions, which of the following hardware devices is the LEAST necessary to focus on during testing?",
      options: [
        "WLAN module",
        "Integrated speakers",
        "Integrated camera",
        "Headphone access"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a potential effect of mobile device overheating during testing?",
      options: [
        "The application becomes slow",
        "Application functionalities stop working",
        "App uninstallation",
        "Incorrect functioning of applications"
      ],
      correctAnswer: 2, // Uninstallation does not occur automatically
      urlImage: ""
    },
    {
      "question": "Which of the following statements is NOT a valid scenario for testing a mobile device in relation to input sensors?",
      options: [
        "Verify the quality of the GPS signal received",
        "Test the correct functionality of the gyroscope",
        "Validate the data provided by the motion sensor",
        "Correct screen size in portrait and landscape modes"
      ],
      correctAnswer: 3, // Screen is not an input sensor
      urlImage: ""
    },
    {
      "question": "Which of the following options contains tests that are ONLY related to different input methods?",
      options: [
        "Swipe to change screen, double-tap on a button, scan a QR code, record audio",
        "Take a photo with the camera, use a virtual keyboard, print screen content, use GPS coordinates",
        "Drag an object on the screen, open another application, capture images, send an SMS to a friend",
        "Display geolocation data, perform distance measurements, use a remote control app, capture videos from the internet"
      ],
      correctAnswer: 0, // Only option A contains direct input methods
      urlImage: ""
    },
    {
      "question": "You work as a mobile tester for a company developing a navigation app. One of the requirements is that the app works in portrait and landscape modes maintaining the same functions precisely.\nWhich of the following aspects are the BEST to consider to verify correct functioning when changing screen orientation?",
      options: [
        "Motion sensor, security issues, output data accuracy",
        "Usability issues, retention of input data, maintenance of current state",
        "Multiple screen orientation transitions, performance issues, user interface functionalities",
        "WLAN interruptions, graphical interface rendering issues, loss of entered data"
      ],
      correctAnswer: 1, // Usability, state retention, and data are key when rotating the screen
      urlImage: ""
    },
    {
      "question": `You work as a test manager in a bank developing a new version of its online banking software, which is implemented as a web application. During the preparation of appropriate tests, you are focusing on fault tolerance against user-initiated interruptions.\nWhich of the following test scenarios would you choose as the BEST for this purpose?,

      "i. Show low battery warnings",
      "ii. Set mobile devices to standby mode",
      "iii. Accept incoming voice calls",
      "iv. Low memory notification",
      "v. Set the device to Do Not Disturb mode"`,
      options: [
        "i – ii – iii",
        "i – ii – iv",
        "ii – iii – iv",
        "ii – iii – v"
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "A health insurance company launched an updated version of its customer app. The update includes a feature that scans a pharmacy bill and sends it directly to the insurer for payment. However, customers reported that after installing the update, the camera could not be activated to scan the bills. The error was reported and fixed. Now new tests must be prepared and re-testing performed.\nWhich of the following tests would you execute as the MOST IMPORTANT in this scenario?",
      options: [
        "Performance test",
        "Accessibility test",
        "Access permissions test",
        "Installation test"
      ],
      correctAnswer: 2, // Access permissions test
      urlImage: ""
    },
    {
      "question": `Your company offers a news messaging app that includes a notification feature to show breaking news. The notifications have deep links to the relevant news pages. Some users recently complained about delays in notifications or that they did not appear. The problem was identified and fixed. As a mobile tester, what functional tests would you perform to validate that the fixed version works correctly?,

      "i. Correctly display the notification when the app is in the background",
      "ii. Run the application with low battery",
      "iii. Test the app's performance when displaying the notification",
      "iv. Perform usability tests related to the fixed version",
      "v. Test the deep link to the correct news page"`,
      options: [
        "i – iv – v ",
        "i – ii – iv ",
        "i – ii – v ",
        "ii – iii – iv"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Your company is developing a new version of a hybrid app for price comparison. This app contains advanced functionalities in quick access links. As a mobile tester, your task is to verify that these links work correctly without failures.\nWhich of the following approaches is the BEST?",
      options: [
        "Verify the correct behavior of the force-touch functionality in an iOS app",
        "Ensure the presence of favorite bookmarks in mobile Chrome under Android",
        "Verify that all device hardware keys work correctly",
        "Use an appropriate tool to identify broken links in the mobile web app"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are testing a native iOS app that uses several sensors.\nWhich of the following types of testing does NOT apply?",
      options: [
        "Performance testing",
        "Device function usage testing",
        "Cross-browser testing",
        "Cross-device compatibility testing"
      ],
      correctAnswer: 2, // Cross-browser testing does not apply to native apps
      urlImage: ""
    },
    {
      "question": "Which of the following is a typical test to evaluate interoperability with operating system versions?",
      options: [
        "Security tests",
        "Performance tests",
        "Accessibility standards tests",
        "Backward compatibility tests"
      ],
      correctAnswer: 3, // Backward compatibility = interoperability with OS versions
      urlImage: ""
    },
    {
      "question": "What is the PRIMARY objective when performing coexistence testing of a system under test (SUT) with other applications on the device?",
      options: [
        "Verify that the SUT does not damage any user data",
        "Identify existing security issues on the device",
        "Evaluate usability issues in the SUT",
        "Check if the SUT complies with accessibility standards"
      ],
      correctAnswer: 0, // Protecting user data is key in coexistence
      urlImage: ""
    },
    {
      "question": "You are developing a connectivity testing approach on different types of mobile devices.\nWhich of the following options should NOT be within the scope of these tests?",
      options: [
        "Switch from GSM to airplane mode and back to GSM",
        "Initiate a payment transaction via NFC",
        "Use Bluetooth to pair with a wearable device",
        "Connect a USB cable to a power source"
      ],
      correctAnswer: 3, // Power supply is not part of connectivity tests
      urlImage: ""
    },
    {
      "question": "You have been assigned the task of performing installation testing for an Android app.\nWhich of the following tests should NOT be used?",
      options: [
        "Run App-Installer.exe",
        "Install by connecting the device to a PC and running commands",
        "Installation from Google Play beta program",
        "Sideloading by providing the installation package on an SD card and running from the file system"
      ],
      correctAnswer: 0, // App-Installer.exe is not relevant for Android
      urlImage: ""
    },
    {
      "question": "Which of the following are TWO potential security issues in mobile applications?",
      options: [
        "Code injection through input fields.",
        "Data transfer without encryption.",
        "The app does not respond after an interruption.",
        "Rendering issues when changing device orientation.",
        "Overlapping screen elements on small devices."
      ],
      correctAnswer: [0, 1], // Injection and unencrypted data are key risks
      urlImage: ""
    },
    {
      "question": "Which of the following options would most likely be used to perform a performance test on the temporal behavior of an app?",
      options: [
        "An instrumented version to obtain exact chronometric metrics.",
        "A load generator to observe server behavior under intense load.",
        "Run the app on an emulator/simulator.",
        "A device and a stopwatch to measure performance."
      ],
      correctAnswer: 0, // Instrumented build = precise time analysis
      urlImage: ""
    },
    {
      "question": "You have been assigned to perform a usability test for a mobile application. Which of the following steps should you NOT perform?",
      options: [
        "Ask the manager to order a usability lab session.",
        "Test the app to verify it complies with the platform's user interface guidelines.",
        "Activate the voice feature on the device.",
        "Understand the platform's design expectations and visual experience."
      ],
      correctAnswer: 0, // No need to request a lab as a mandatory part
      urlImage: ""
    },
    {
      "question": "What does the acronym \"CRUD\" mean in the context of data validation testing?",
      options: [
        "Copy, Rename, Update, Delete.",
        "Create, Read, Undo, Delete.",
        "Create, Read, Update, Delete.",
        "Create, Read, Undo, Deploy."
      ],
      correctAnswer: 2, // Create, Read, Update, Delete: correct in data testing
      urlImage: ""
    },
    {
      "question": "You are performing internationalization testing. While running the tests, you see pseudo strings in part and English strings in part. Which of the following is the most likely cause?",
      options: [
        "Missing translations.",
        "Hardcoded English strings.",
        "Incorrect device language settings.",
        "Something went wrong during the build."
      ],
      correctAnswer: 1,
      urlImage: " "
    },
    {
      "question": "Why should accessibility testing be performed?",
      options: [
        "To determine if the app is usable by users with different needs.",
        "Because it is required by the W3C and platform providers.",
        "To perform comprehensive application testing.",
        "Because there are generic test cases that must be executed on all apps."
      ],
      correctAnswer: 0, // Usability for different user profiles is key
      urlImage: ""
    },
    {
      "question": "You are a tester on a team developing a mobile app. The team has finished the current version and released it to the app store. What is your next activity?",
      options: [
        "Archive test artifacts.",
        "Perform post-release testing.",
        "App store approval testing.",
        "Test cycle closure."
      ],
      correctAnswer: 1, // Post-release testing to validate production behavior
      urlImage: ""
    },
    {
      "question": "You are new to a team performing testing on mobile apps. Your team lead asks you to test inputs for one hour, functions for one hour, interruptions for one hour, etc. What is being applied?",
      options: [
        "Risk-based test management.",
        "Delegation of their responsibilities.",
        "Performance test management.",
        "Session-based test management."
      ],
      correctAnswer: 3, // Session-Based Test Management organizes testing into time blocks
      urlImage: ""
    },
    {
      "question": "Which of the following is an effective method for field testing?",
      options: [
        "Use tours as an exploratory testing technique.",
        "Use an internal device lab to run tests on different smartphones.",
        "Use a cloud-based approach.",
        "Use a testing tool to run automated tests on mobile browsers."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Why is it common for mobile app projects to invert the Testing Pyramid?",
      options: [
        "Unit tests are more complicated in mobile apps. Therefore, it is convenient to have few unit tests.",
        "Lack of tools for unit and integration testing in mobile applications.",
        "Mobile applications are always monolithic. Therefore, everything can be tested at the system level and there is no need for lower-level tests.",
        "Mobile applications require many manual tests, such as usability or field testing."
      ],
      correctAnswer: 3,
      urlImage: "",
    },
    {
      "question": "Which of the following statements is correct about development environments used to develop mobile applications?",
      options: [
        "iOS developers use Visual Studio IDE as their development environment.",
        "Android developers use Universal Studio IDE while iOS developers use Xcode as their development environment.",
        "Android developers use Xcode as their development environment.",
        "iOS developers use Xcode IDE as their development environment."
      ],
      correctAnswer: 3, // iOS = Xcode IDE
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT a task that can typically be performed using an SDK (software development kit) for mobile applications?",
      options: [
        "Take screenshots.",
        "Design test cases.",
        "Send random events to the application.",
        "Create virtual devices."
      ],
      correctAnswer: 1, // Test case design is not an SDK function, but the tester's
      urlImage: ""
    },
    {
      "question": "You are assigned as a tester for a mobile application with a client-server architecture. To make the best use of available equipment, the company decides to use the employee's PC without the application connected to a real server, in order to test basic features in the early stages of testing. Which of the following architectures would you recommend that the Android application developer should use in the early stages of development to verify the functional suitability of basic features?",
      options: [
        "Have the server emulator installed on the developer's PC and the mobile application simulator installed on a real device.",
        "Have the mobile application simulator installed on one of the Android Virtual Device (AVD) emulators and the server emulator installed on the developer's PC.",
        "Have the server simulator installed on the developer's PC and the mobile application installed on one of the AVD emulators.",
        "Have the server simulator and the emulated mobile application installed directly on the developer's PC."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You are the test manager in the digital banking division of a Fintech company. An Android mobile app is being updated that incorporates a new security mechanism with fingerprint and facial recognition.\nWhich of the following approaches represents the BEST method to set up your testing lab for this improvement?",
      options: [
        "Set up a remote lab to test the new app on as many devices as possible.",
        "Set up a local lab to effectively test device-specific functions related to security.",
        "Set up a remote lab to cover many devices and a local one to maximize possible coverage.",
        "Set up a remote lab with diverse Android devices from different manufacturers and save money."
      ],
      correctAnswer: 1, // Option b
      urlImage: "",
    },
    {
      "question": "Which of the following statements does NOT correctly distinguish between common automation approaches in mobile testing?",
      options: [
        "The agent-based testing approach is better for running mobile web apps, while device testing is better for all types of mobile apps.",
        "The agent-based approach uses a string sent by the browser to simulate a particular browser, while the device approach must run on a specific mobile device.",
        "Native apps are best tested with general web application automation tools, while mobile apps require specific tools.",
        "The agent-based approach simulates browser features, while the device-based approach operates on the real browser."
      ],
      correctAnswer: 2, // Option c: incorrect, native apps are NOT tested with web tools
      urlImage: ""
    },
    {
      "question": "Which of the following statements is TRUE regarding scripting methods used in mobile test automation?",
      options: [
        "Script creation through object identification is faster than visual recognition-based (OCR/Text), which reduces the total test execution time.",
        "Object-based scripting is the most reliable method for generating automation code because it allows the framework to identify mobile objects without depending on the device under test.",
        "The object identification scripting method increases maintenance effort when there are frequent changes in the application code that affect base images.",
        "Relying on text recognition (OCR) and object learning does not pose risks to the reliability or robustness of test automation."
      ],
      correctAnswer: 1, // Object-based scripting offers greater reliability
      urlImage: ""
    },
    {
      "question": "Which of the following is NOT an important consideration when evaluating automation tools for mobile testing?",
      options: [
        "The level of automation skills of the testers who will use the tool.",
        "Requirements and complexities such as the use of FaceID, fingerprints, and chatbots in the app.",
        "It is important to consider automation requirements and complexities.",
        "The testing framework's ability to operate independently of other existing tools in the organization."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Which of the following statements LEAST supports the use of a remote testing lab?",
      options: [
        "Tests in the final stages of development that require running on the full device lab are best performed in a remote lab.",
        "A remote lab likely covers a reduced set of recent device/OS configurations to quickly validate early design phases.",
        "Remote labs ensure sufficient variety of devices and operating systems so teams have diversity in testing.",
        "Remote labs are more suitable for large-scale executions because they are designed to minimize stability issues in the process."
      ],
      correctAnswer: 1, // Option B indicates limited coverage, which is a limitation
      urlImage: ""
    }
  ],
  "texts": {
    "next": "Next",
    "finish": "Finish",
    "timeUp": "Time's up!",
    "selectAnswer": "Please select an answer before continuing.",
    "congratulations": "Congratulations!",
    "scoreMessage": "You have obtained a score of {{score}}%.",
    "certificateInfo": "You can obtain your certificate by sending proof of payment of <strong>10 USD</strong> to educacion@frecuenciagamer.com.",
    "insufficientScore": "Insufficient Result",
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
