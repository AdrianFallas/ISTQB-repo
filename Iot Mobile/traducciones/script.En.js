const data_en = {
  questions: [
    {
      "question": "What types of tests are particularly important for IoT or mobile applications based on user expectations?",
      options: [
        "Adequacy and Accuracy",
        "Usability and Performance",
        "Portability and Usability",
        "Performance and Security"
      ],
      correctAnswer: 1, // Usability and performance are key for user experience
      urlImage: ""
    },
    {
      "question": "If an application resides on the mobile device and was written specifically for that device, what type of application is it?",
      options: [
        "Web-based",
        "Hybrid",
        "Native",
        "Device-specific"
      ],
      correctAnswer: 2, // Native application
      urlImage: ""
    },
    {
      "question": "You are testing an application for a smartphone. You have determined that you only need to test one device from the target family because the behavior will be the same across all. What testing design technique does this exemplify?",
      options: [
        "Boundary Value Analysis",
        "Combinatorial",
        "Decision Tables",
        "Equivalence Partitioning"
      ],
      correctAnswer: 3, // Equivalence Partitioning
      urlImage: ""
    },
    {
      "question": "If you are testing a mobile application that is not safety-critical, which life cycle model is most likely to be used?",
      options: [
        "V Model",
        "Waterfall Model",
        "Mobile Model",
        "Iterative Model"
      ],
      correctAnswer: 3, // Iterative Model: suitable for agile and rapid development
      urlImage: ""
    },
    {
      "question": "Which of the following requirements documents would be the best source for determining normal use scenarios?",
      options: [
        "Requirements Specification",
        "Use Cases",
        "User  Stories",
        "Usability Requirements"
      ],
      correctAnswer: 1, // Use Cases: define normal interaction scenarios
      urlImage: ""
    },
    {
      "question": "In a project with many features but little time, what is the most reasonable approach to risk analysis?",
      options: [
        "Conduct a full risk analysis, including probabilities and impact levels for each item",
        "Use a lightweight approach and assign relative importance to each identified item",
        "Skip the risk analysis and proceed with testing based on experience",
        "Focus on functional capabilities and discard device physical capabilities as these should be tested by the manufacturer"
      ],
      correctAnswer: 1, // Lightweight approach: suitable for projects with limited resources
      urlImage: ""
    },
    {
      "question": "You are testing a mobile banking application. Is it important to test the interaction between the software and the device?",
      options: [
        "No, it is not necessary to extend functional tests to cover device interaction.",
        "Yes, because the user interacts with the app through the physical device and the app interacts with the Internet.",
        "No, if the application is native, interaction testing is not needed because it is portable across different devices.",
        "Yes, each device functionality must be tested to verify its interaction with the app."
      ],
      correctAnswer: 1, // Option b: real interaction between user and app occurs via physical device
      urlImage: ""
    },
    {
      "question": "You are testing a native smartphone application that allows the user to create up to three shopping lists, each with a maximum of 50 items.\nWhich of the following test condition sets represents the MINIMUM coverage to achieve 100% using the boundary value analysis technique?",
      options: [
        "List with 47 items",
        "List with 0 items, list with 1 item, list with 50 items, list with 51 items, 0 lists saved, 1 list saved, 3 lists saved, 4 lists saved",
        "List with 0 items, list with 25 items, list with 51 items, 3 lists saved",
        "List with 0 items, list with 12 items, list with 58 items, 0 lists saved, 3 lists saved, 7 lists saved"
      ],
      correctAnswer: 1, // Option b: covers lower boundary values, valid, and out-of-range for items and lists
      urlImage: ""
    },
    {
      "question": "Can 'correctness' be defined as the combination of which two quality characteristics?",
      options: [
        "Adequacy and Accuracy",
        "Usability and Performance",
        "Portability and Interoperability",
        "Security and Usability"
      ],
      correctAnswer: 0, // Adequacy and Accuracy = standard definition of 'correctness'
      urlImage: ""
    },
    {
      "question": "When performing security testing on an IoT or mobile application, which are the correct basic areas that must be covered?",
      options: [
        "Access, data protection, documentation",
        "Code, functionality, documentation, security policy",
        "Data creation, data storage, data transfer",
        "Access, data storage, data transfer, security policy"
      ],
      correctAnswer: 3, // Key areas: access, storage, transfer, policy
      urlImage: ""
    },
    {
      "question": "Which of the following types of testing might consider the user's age?",
      options: [
        "Scenario-based testing",
        "Use case testing",
        "User  story-based testing",
        "Persona-based testing"
      ],
      correctAnswer: 3, // Persona-based testing adjusts tests to demographic profiles
      urlImage: ""
    },
    {
      "question": "If your application can only be used within a specific country, which device feature can provide the necessary information for the app to determine this?",
      options: [
        "Geolocation",
        "Telephony",
        "Magnetometer",
        "Altimeter"
      ],
      correctAnswer: 0, // Geolocation = correct option for determining national location
      urlImage: ""
    },
    {
      "question": "Your company has created a crossword puzzle-solving application. The target users are over 65 years old. Work has already been done to create easy-to-navigate and intuitive screens. The display has been implemented with a revolutionary zoom function using a magnifying glass over the screen. However, beta testers are still having trouble entering letters into the squares.\nGiven this, which area should you prioritize for more comprehensive testing?",
      options: [
        "Simplicity",
        "Layout (Design)",
        "Intuitiveness",
        "Navigation"
      ],
      correctAnswer: 1, // Layout: visual distribution may hinder data entry
      urlImage: ""
    },
    {
      "question": "You are planning performance testing for a new application. You have been provided with a set of 'personas' to use during these tests.\nHow should you apply the personas in the performance testing approach?",
      options: [
        "Personas should be duplicated by automated tools to create virtual users that generate realistic load on the system.",
        "Personas should be reviewed to understand the individual tasks they perform. These tasks can then be written as scripts and executed in batches.",
        "Personas are primarily used for usability testing and should not be employed as a guide for performance testing.",
        "Personas should be used to derive use cases that can then be broken down into user stories and converted into performance test scripts."
      ],
      correctAnswer: 0, // Virtual users simulate real behaviors derived from personas
      urlImage: ""
    },
    {
      "question": "If you are testing how much battery your application consumes, what are you testing?",
      options: [
        "Task completion",
        "Delays",
        "User  interface delays",
        "Resource usage"
      ],
      correctAnswer: 3, // Battery consumption = measurement of resource usage
      urlImage: ""
    },
    {
      "question": "You have been conducting performance testing of your mobile application using a simulator. Why would you need to perform some tests on a real device?",
      options: [
        "Because a simulator is not an exact replica of the real device and may yield different performance results.",
        "Because it is not possible to fully test a simulator to ensure it works correctly.",
        "Because simulators cannot be cloned to generate enough devices to create realistic load.",
        "Because simulators cannot run concurrent applications."
      ],
      correctAnswer: 0, // Simulator may differ from real performance
      urlImage: ""
    },
    {
      "question": "If a tool can simulate how a specific device would respond to an application, what type of simulator is it considered?",
      options: [
        "Hybrid simulator",
        "Native device simulator",
        "Web-based application simulator",
        "Browser-based application simulator"
      ],
      correctAnswer: 1, // Native device simulator = specific hardware behavior
      urlImage: ""
    },
    {
      "question": "Which of the following is a generic tool useful for an IoT or mobile application testing project?",
      options: [
        "A simulator",
        "An emulator",
        "A defect tracking system",
        "A performance testing tool"
      ],
      correctAnswer: 2, // Performance testing tool = cross-analysis of load and response
      urlImage: ""
    },
    {
      "question": "In what way can a mobile device provide data directly to a mobile application?",
      options: [
        "By providing location information through its geolocation capability.",
        "By collecting user inputs.",
        "By communicating with a backend system.",
        "By connecting to another device."
      ],
      correctAnswer: 0, // Geolocation as a direct data source from the device
      urlImage: ""
    },
    {
      "question": "Which of the following statements is true about a browser-based application?",
      options: [
        "It is designed to leverage specific device capabilities.",
        "It runs on the device.",
        "It is portable to any device that can run the compatible browser.",
        "It is generally faster than a native application."
      ],
      correctAnswer: 2, // Portability with compatible browsers
      urlImage: ""
    },
    {
      "question": "Which of the following is a valid reason to use simulators in testing?",
      options: [
        "Simulators offer more accurate performance than real devices.",
        "Real devices can be difficult and expensive to acquire in large quantities.",
        "Simulators can interact with users to provide feedback on usability.",
        "Real devices can be quickly configured to offer new test scenarios."
      ],
      correctAnswer: 1, // Cost and logistics make simulators a viable option for mass testing
      urlImage: ""
    },
    {
      "question": "You are responsible for performance testing a new hybrid mobile application that will run on smartphones. The application will use the phone's GPS capability to determine its altitude. The altitude information is sent to the application, which then contacts a web server to calculate the 'safe limit' for alcohol consumption. The 'safe limit' is displayed to the user. The device has already been tested for high-altitude use, so that is not a concern for this test. The highest system usage is expected on New Year's Eve, when many people are skiing at high altitudes and will need to check their safe limit. For the first year of use, 5,000 concurrent users are expected to use the application on that single night. Given this information, what is the best approach to conducting the performance test?",
      options: [
        "Clone simulators to create 5,000 users and conduct the test with them.",
        "Clone emulators to create 5,000 users and conduct the test using the emulators.",
        "Use a combination of simulators and emulators for more realistic results.",
        "Use crowd-sourcing and real users for accurate results from real devices."
      ],
      correctAnswer: 0, // Mix of simulators and emulators: balance of efficiency and realism
      urlImage: ""
    },
    {
      "question": "Which cloud capability is MOST beneficial for performance testing?",
      options: [
        "Supporting a variety of network types",
        "Supporting a variety of protocols",
        "Supporting a variety of device types",
        "Supporting a variety of device quantities and usage patterns"
      ],
      correctAnswer: 3, // Variety in quantity and usage patterns: key in load testing
      urlImage: ""
    },
    {
      "question": "You are testing an application that will allow users to scan the barcode on a package shipping label and then receive emails from the package sender as it progresses through various delivery stages (e.g., pickup, received at central processing, routing, delivery). If requested, the user can also receive an image of the package recipient's signature. This is a web browser-based application. It is expected that this application will have widespread use across a large set of devices and networks with varying speeds and reliability. Your company has several competitors working on similar products, although your company's product has some new innovations and a very attractive user interface. As a result, once launched, your company expects to capture most of the market. Given this information, what would be the best approach for conducting your tests to ensure that the product's capabilities are evaluated as well as the variety of environments and networks?",
      options: [
        "Use a remote device lab provided by a device manufacturer to ensure your application works across the entire device family.",
        "Use crowd-sourcing to get the widest distribution of locations and device types at minimal cost.",
        "Use a set of simulators that can simulate the various capabilities of a wide variety of devices.",
        "Use a cloud-based virtual testing environment to simulate multiple devices and networks."
      ],
      correctAnswer: 3,
      urlImage: " "
    },
    {
      "question": "In what way can a refrigerator be part of the Internet of Things (IoT)?",
      options: [
        "By allowing manual temperature adjustment",
        "By providing an on/off function controlled by a physical switch",
        "By uploading and downloading information from and to the Internet",
        "By providing a function required for humans"
      ],
      correctAnswer: 2, // Uploading and downloading data with the cloud
      urlImage: ""
    },
    {
      "question": "Which of the following scenarios is most likely to represent a security risk?",
      options: [
        "A refrigerator that relies on home WiFi",
        "A smartphone app used in a corporate office",
        "A tablet app used to upload and download patient information while mobile nurses visit homes",
        "A tablet app used by nurses in a hospital to handle patient information"
      ],
      correctAnswer: 2, // Risk of exposure outside controlled environments
      urlImage: ""
    },
    {
      "question": "You receive a message on your phone from an app that receives data from your refrigerator's sensors. The message indicates that the temperature is elevated and there may be a failure in the cooling system.\nWhat is this an example of?",
      options: [
        "It is an example of an IoT benefit",
        "It is an example of an IoT risk",
        "It is an example of a security risk in the application",
        "It is an example of a reliability risk in the application"
      ],
      correctAnswer: 0, // Proactive notification: IoT advantage
      urlImage: ""
    },
    {
      "question": "Which of the following is an example of a smart appliance?",
      options: [
        "A refrigerator that detects low milk supply and displays a message on the front door panel.",
        "A car that turns on an indicator when the temperature is too high.",
        "A home security system that activates an alarm when an intrusion is detected.",
        "A sensor in a dog's collar that can detect and report to an app when the dog crosses an invisible fence."
      ],
      correctAnswer: 3, // Refrigerator with monitoring logic and localized response
      urlImage: ""
    },
    {
      "question": "Which of the following is an example of a 'wearable' device?",
      options: [
        "A ring that detects when a cigarette is lit and reports it to an online app.",
        "A pair of glasses that automatically change tint according to the light.",
        "A prosthetic knee.",
        "A pair of waterproof and insulated gloves."
      ],
      correctAnswer: 0, // Wearables with data collection and digital communication
      urlImage: ""
    },
    {
      "question": "Which of the following is an example of a connected system?",
      options: [
        "A system with sensors that detect impacts and can contact emergency authorities if an accident occurs.",
        "The anti-lock braking system (ABS) that detects skids and adjusts braking.",
        "A parking assist system that controls the car to perform the maneuver.",
        "A sensor system that determines if a car is following too closely and reduces speed to maintain a safe distance."
      ],
      correctAnswer: 0, // Ability to connect with external services: definition of connected system
      urlImage: ""
    },
    {
      "question": "Which of the following should be considered part of the Industrial Internet of Things (IIoT)?",
      options: [
        "A smart metering app for an energy company",
        "An autonomous car",
        "A home security system",
        "A smartphone"
      ],
      correctAnswer: 0, // Industrial connected solutions like smart meters = IIoT
      urlImage: ""
    },
    {
      "question": "What is driving the trend to keep data on local devices or local networks?",
      options: [
        "Data is growing too large to transmit efficiently",
        "Data flow is too fast for most networks to handle",
        "Response time requirements are becoming harder to meet on public networks",
        "Data has a higher need for security, such as retina images to access secure sites"
      ],
      correctAnswer: 3, // Ultra-fast response requirements = drive toward local processing
      urlImage: ""
    },
    {
      "question": "For an IoT protocol like MQTT, what is the expectation regarding the compatible network type?",
      options: [
        "Wi-Fi only",
        "Cellular network only",
        "4G or 5G only",
        "Any type of network"
      ],
      correctAnswer: 3, // MQTT must be network-agnostic for diverse IoT environments
      urlImage: ""
    },
    {
      "question": "For IoT devices, which of the following options helps reduce the need to transmit large amounts of data to the cloud before processing them?",
      options: [
        "Positive processing",
        "Edge computing",
        "Leapfrogging",
        "Cloud service"
      ],
      correctAnswer: 1, // Edge computing allows local data processing before sending
      urlImage: ""
    },
    {
      "question": "You are collaborating with a company developing a wearable heart rate monitor. This monitor will be used to track Olympic runners' heart rates throughout the day, including their training sessions. The collected information will be uploaded to a web service that processes the data and generates reports. Data upload will occur at night using the cellular network while the runner sleeps. You are responsible for testing the monitor and its ability to upload data to the web service.\nShould headless testing be used for this monitor?",
      options: [
        "Yes, it should be combined with usability testing for better coverage of the interface",
        "Yes, it should be used as the base for testing since there is no UI available for testing",
        "No, it is not necessary because data accuracy can be verified through the receiving application",
        "No, headless testing doesn't allow for performance measurement, and that's critical for this device."
      ],
      correctAnswer: 1, // Headless testing: ideal when there is no visible interface on the device
      urlImage: ""
    },
    {
      "question": "You are testing an IoT device that communicates via APIs with a web service over the Internet. You are concerned about testing the API error recovery capabilities, especially when connections are lost.\nWhich of the following tools is the MOST appropriate for this type of testing?",
      options: [
        "Wireshark",
        "Grasshopper",
        "Locust",
        "SoapUI"
      ],
      correctAnswer: 3, // SoapUI allows simulating errors and evaluating API recovery
      urlImage: ""
    },
    {
      "question": "What is the expectation for device capabilities in the future?",
      options: [
        "They will decrease as devices become smaller",
        "They will increase as demand grows",
        "They will remain the same",
        "They will remain almost the same but expand to a greater variety of devices"
      ],
      correctAnswer: 1, // Demand drives improvements in capabilities
      urlImage: ""
    },
    {
      "question": "When building a flexible testing framework, how does the short product life cycle affect the testing approach and tool decisions?",
      options: [
        "The framework must support long-term maintenance",
        "The framework must use stable and reliable tools from recognized vendors",
        "The framework must offer good return on investment (ROI)",
        "The framework must be based on a formal risk analysis"
      ],
      correctAnswer: 2, // ROI is key when the product has a short life cycle
      urlImage: ""
    },
    {
      "question": "Your organization has recently hired a test automation architect who worked on medical software with strict regulatory requirements. Their automation framework is very solid and allows building maintainable, data-driven test cases. However, their tool choice is very expensive and may not be flexible enough for your environment, especially considering that the mobile or IoT apps your company develops have life cycles of only six months before being modified. The development cycle is iterative, and the team uses continuous integration to deliver testable software more quickly.\nGiven this information, what testing approach should you recommend?",
      options: [
        "Look for other tools more suitable for the mobile or IoT environment, and consider automation with keyword-based testing instead of data-driven testing.",
        "Use the proven framework and seek high coverage to ensure good reusability.",
        "Skip automation and opt for crowd-sourcing to get many tests in a short time. Test repeatability is not an issue with this software.",
        "Use automation for performance testing and perform functional testing manually, considering the product has a short shelf life."
      ],
      correctAnswer: 0, // The most strategic and flexible option for short-cycle apps
      urlImage: ""
    },
    {
      "question": "What type of testing methodologies should testers of mobile or IoT applications seek?",
      options: [
        "More agile and efficient",
        "Faster and more reliable",
        "Secure and more usable",
        "More documented and repeatable"
      ],
      correctAnswer: 0, // More agile and efficient = key for iterative development environments
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
