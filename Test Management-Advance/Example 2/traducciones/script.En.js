const data_en = {
    questions: [
        {
            "question": "You are the test manager for a large CRM implementation project. You are required to establish a test plan before development begins. Which of the following activities is most essential for developing and establishing the test plan?",
            options: [
                "Achieving consensus among all stakeholders.",
                "Defining test objectives based on regulatory standards.",
                "Establishing readiness to begin testing.",
                "Having all stakeholders identify their risk mitigation strategy."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "During the course of your software implementation project, test monitoring becomes an important activity for you as a test manager. Which of the following defines the main objective of test monitoring?",
            options: [
                "Test monitoring compares actual test progress with planned progress.",
                "Test monitoring compares actual results with expected results.",
                "Test monitoring compares changes with unknown risks.",
                "Test monitoring compares pass criteria with exit criteria."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "When comparing stakeholders in a given project, the Project Manager wants to ensure that detailed discussions are held with high-level stakeholders, while at the same time involving low-level stakeholders in a planning workshop specifically for the project schedule. Which is the BEST group of stakeholders the Project Manager should include in the detailed discussions?",
            options: [
                "Development leads, automation testers, finance personnel.",
                "Security architects, operations team.",
                "Project managers from other projects, application owners.",
                "Project managers from other projects, trainers, test management tool vendor."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a Test Manager responsible for conducting acceptance tests, you must purchase an independent commercial test management tool that meets your organization's requirements and standards. The tool must allow you to plan, execute, monitor, and report on acceptance testing activities and results. You have identified and analyzed stakeholders who have a high interest and high influence in the test management tool. Which of the following would be the stakeholder group most impacted by the decision about the tool?",
            options: [
                "Testers.",
                "Product developers.",
                "Product manager.",
                "Project manager."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "A project has just started using agile development practices. The testing team is not trained to perform continuous testing in shorter timeframes using multiple test cycles. Which of the following test management activities is most important in a test management role?",
            options: [
                "Train and mentor the testing team on automation, continuous integration, testing, and delivery.",
                "Give the team time to learn by negotiating deadlines and recognizing the team's small victories to keep their morale high.",
                "Convince management that introducing agile practices will not work, because the team and resources are not ready for it.",
                "Hire some new team members who are familiar with continuous testing."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "A new test manager joins an organization and is initially assigned the task of identifying which software development life cycle models are currently being used. Four things she observed were:\n• Test iterations occurred every 3 weeks.\n• Automation was implemented to help meet deadlines.\n• Products and tasks were completed before moving to the next iteration.\n• Testing did not begin until requirements were completed.\n\nWhat software development life cycle model is described above?",
            options: [
                "Sequential.",
                "Iterative.",
                "Hybrid.",
                "DevOps."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you work for an ambitious startup that is developing a system that provides personalized loyalty and rewards programs for small and medium-sized businesses that sell to web-based customers. Businesses using the system can sign up themselves on the system's web store and then can create custom buttons for their websites. These buttons can be used to allow their customers to sign up for the businesses' loyalty and rewards program. Each subsequent purchase earns points, and both businesses and their customers can manage the program; for example, to determine the number of points required to receive a free product or service. Your employer intends to launch new features, enhancements, and bug fixes through multiple releases each month. Which of the following test management activities applies?",
            options: [
                "Implement DevOps development tools.",
                "Manually send test status reports.",
                "Manage manual regression test execution.",
                "Enable the testing team and facilitate communication."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you are in a project that develops safety-critical software for a medical device. The software must comply with standards such as ISO 62304 and FDA regulations. The project follows an agile methodology with two-week sprints. The testing team consists of four on-site testers and six off-site testers. The organization uses a cloud-based DevOps toolchain as the main tool for CI/CD and test automation. The project is in the maintenance phase and, from now on, will require frequent regression testing due to defect fixes and feature enhancements. The project has an ongoing risk management process in place, which involves identifying, assessing, and mitigating any new or existing risks associated with software changes.\n\nWhich of the following test management activities best emphasizes the specific focus of this project?",
            options: [
                "Develop a risk management plan to identify, assess, prioritize, and mitigate risks.",
                "Develop a configuration management plan for the testing team to define the roles and responsibilities of on-site and off-site teams.",
                "Develop a test automation plan to define the scope of automation and select automation tools and frameworks.",
                "Develop a regression test plan to identify the scope of regression testing and select regression testing tools."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "A project involved migrating a web application to the cloud. The cloud system provider estimated that a system outage was very unlikely. Based on this statement, testers decided not to perform reliability testing for this item because, although the risk impact would be high, the moderate overall risk level did not justify the additional effort and time required for this type of testing. Shortly after going live, the website became inaccessible for two days, causing a substantial loss of revenue and reputation for the company.\n\nHow could the testing team improve its use of risk-based testing to avoid such problems in the future?",
            options: [
                "Involve additional stakeholders in risk analysis to improve risk likelihood assessment.",
                "Perform intensive reliability testing even if the risk level is moderate.",
                "Involve experienced testers in risk assessment to correctly assess the risk level.",
                "Use a risk-based testing strategy to avoid such major failures."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a test manager, you create a spreadsheet with rows for system components and columns for their failure modes, their risk likelihood, and their risk impact. You invite system architects and operations representatives to jointly complete system components and failure modes based on their experience.\n\nWhat risk identification technique are you applying with this procedure?",
            options: [
                "Expert interviews.",
                "Checklists.",
                "Risk workshop.",
                "Brainstorming."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Risks have been identified for a project and analyzed using a quantitative method, with the following results for risk likelihood and risk impact. What set of testing activities would be best to mitigate these risks?",
            options: [
                "Address risk A as high priority by testing an early prototype with business stakeholders, then address risk C by introducing reviews. No testing is planned to mitigate risks B and D.",
                "Execute tests that address risk A through documentation review, and risk C with black-box testing. Then, address risks B and D with white-box testing.",
                "Mitigate risks by first testing risks B and C with exploratory testing, then test risk A with confirmation testing. Test risk D as time allows.",
                "Mitigate risks by testing risk A and risk B with business stakeholders using an early prototype and risk D with non-functional testing. Accept risk C without explicit testing."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: "./imagenes/tabla preg11.png"
        },
        {
            "question": "Suppose you are in a project that develops a web application for online banking. The project follows an agile development life cycle and has two-week sprints. The application has several features, such as account management, fund transfer, bill payment, and loan application. Each feature has different levels of security, usability, and performance risks.\n\nYou have a testing team of six members with different skills and experience. Based on this situation, how would you select the appropriate testing activities to mitigate risks according to their risk level?",
            options: [
                "Use static and dynamic testing for all features, but allocate more testing effort and use more exhaustive testing techniques for features with higher risk levels. Assign the most qualified testers to features with the highest risk levels. Use reviews and regression testing to ensure quality.",
                "Use static testing for features with lower risk levels and dynamic testing for features with higher risk levels. Assign testers randomly to features regardless of their skills and experience. Use reviews and regression testing to ensure quality.",
                "Use dynamic testing only for features with higher risk levels and skip testing for features with lower risk levels. Assign testers according to their availability and preference. Use reviews and regression testing to ensure quality.",
                "Use static testing only for features with higher risk levels and skip testing for features with lower risk levels. Assign testers according to their seniority and rank. Use reviews and regression testing to ensure quality."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Your team is developing a major new version of a mobile application that graphically displays the schedule of various public transport organizations in a common user interface. Your team follows an agile life cycle model with rapid iterations and releases. Requirements are quite informal, often gathered from user feedback and development. The organizational testing strategy requires risk-based testing. To make risk analysis move quickly, you want to involve agile team members who are familiar with the main risk areas of usability, compatibility, portability, and performance.\n\nWhat technique would you recommend using in this situation?",
            options: [
                "Hazard analysis.",
                "Pragmatic risk analysis and management.",
                "Systematic software testing.",
                "Fault tree analysis."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a test manager, you have been asked by the project manager to establish the testing strategy for a software implementation project.\n\nWhich of the following are the most important factors to consider to ensure an efficient and effective testing strategy?",
            options: [
                "Test types, testing techniques, and test metrics.",
                "Test levels, entry/exit criteria, and testing techniques.",
                "Test levels, test types, and testing techniques.",
                "Test levels, testing techniques, and test deliverables."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you are a member of a project that develops a software product for the banking sector. You are responsible for analyzing the organizational testing strategy and project context to choose the appropriate testing approach. You consider the following factors:\n• The project has a tight budget and a fixed deadline, which means you must optimize testing effort and avoid unnecessary costs and delays.\n• The client has provided detailed requirements and expects high quality and reliability from the product, which means you must ensure that the product meets client expectations and specifications.\n• The project uses an agile development life cycle model with frequent releases and feedback cycles, which means you must adapt to changing requirements and deliver test results in short iterations.\n• The testing team consists of four testers with different levels of experience and skills, which means you must assign testing tasks according to testers' capabilities and provide guidance and support when necessary.\n• The testing infrastructure is limited and requires manual setup and maintenance, which means you must plan and manage the test environment and resources carefully and efficiently.\n• The product has several interfaces with other systems that need to be tested, which means you must coordinate and integrate testing activities with other stakeholders and ensure product compatibility and interoperability.\n\nWhich of the following testing approaches would be most appropriate for this project?",
            options: [
                "Risk-based testing to prioritize the most critical and complex features and scenarios, and allocate testing resources accordingly.",
                "Model-based testing to automatically generate test cases and test data from requirements, and measure test coverage and quality.",
                "Experience-based testing to leverage testers' expertise and intuition, and perform exploratory testing in an agile context.",
                "Acceptance criteria-based testing to verify product compliance with client specifications and enable acceptance testing."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you are in a project that develops a web application for online banking. The project is client-specific and has strict requirements on security, performance, and reliability. The project uses an agile development life cycle model with two-week sprints and frequent releases.\nThe testing team consists of four testers with different levels of experience and skills. The testing infrastructure is cloud-based and supports various browsers and devices. Test data is provided by the client and needs to be anonymized before use.\n\nBased on the scenario, which of the following testing approaches would be most appropriate for your project?",
            options: [
                "Testing will be performed by the entire team using three test levels: unit and integration testing, where test cases are created and executed jointly by developers and testers grouped in pairs, and system testing where test cases will be created and executed by the four testers. At the unit and integration testing level, white-box testing is used with the goal of 100% automation. At all test levels, risk-based testing will be used to create and prioritize test cases. For system testing, testers will use all appropriate testing techniques to cover acceptance criteria.",
                "Testing will be performed by the entire team using four test levels: unit testing, integration testing, system testing, and acceptance testing. In unit and integration testing, as well as at the system testing level, model-based testing will be used exhaustively with a focus on state-based testing. Code coverage is measured while tests are executed and 90% branch coverage is sought. For acceptance testing, sprint demonstration is sufficient.",
                "As the project uses an agile development life cycle model, no explicit test levels are defined, and testing will be performed by developers automating their unit tests and by the four testers using exploratory testing. For this, several test charters will be created that provide guidance on using the test infrastructure so that all available browsers and devices are covered. In addition, usability testing will be performed using checklist-based testing.",
                "Two test levels will be defined. The first test level is a combined unit/integration testing level where the four testers will create test cases based on functional requirements using equivalence partitioning, boundary value analysis, decision tables, and state transition testing. These test cases will be automated by developers and used in unit/integration testing. In system testing, testers will use exploratory testing for each item marked as 'done' by developers."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are part of a team responsible for testing a complex e-commerce website. The team has been given the following objective by management: \"The system must be defect-free.\" According to S.M.A.R.T. criteria, and taking into account the complexity and limited resources of your project, which of the following revisions to this test objective would be most appropriate?",
            options: [
                "Our website must be able to perform all planned functions without serious defects affecting user experience.",
                "By the end of the current development phase, less than 1% of site functions must have defects, measured by the total number of functional test cases included in the test suite.",
                "Our goal is to ensure that our e-commerce system does not experience critical outages that could lead to business disruptions within the next year.",
                "Our goal is to reduce the number of accepted defects found in beta testing by 50% compared to the previous version."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are the test manager for a project that develops a mobile application for online shopping. The project is under development and there are high expectations for usability, functionality, and compatibility. The project uses a hybrid development life cycle model with releases every four months and monthly iterations. The testing team consists of six testers with diverse skills and experience. The testing infrastructure is cloud-based and supports various devices and operating systems. Test data is generated by a test data management tool and needs to be validated before use.\n\nWhich of the following project test objectives is S.M.A.R.T. according to the syllabus text?",
            options: [
                "Check the usability of the application by measuring the time it takes to complete a purchase with the goal that 90% of users can complete their purchase in less than 3 minutes within the next two months.",
                "Increase the level of automated testing by 50% within the next two weeks with the goal of significantly accelerating regression testing.",
                "Comply with e-commerce industry norms and regulations that have been recently published and will soon become the regulatory standard in an EU regulation, and therefore binding for all stakeholders.",
                "Test the functionality and compatibility of the application by testing all features on most real devices, as well as through an external service provider, emulators are provided within the next two sprints, as there have been negative comments in stores."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you are a test manager and are working to make your testing processes more effective and efficient. You already have an initial budget approved by management for these process improvements. Last week, an external consultant completed their assessment of the testing process and delivered their findings.\n\nWhich of the following is the next step for this process improvement effort, assuming you follow the IDEAL model for process improvement?",
            options: [
                "Create a plan to select and implement the assessment recommendations.",
                "Implement the assessment recommendations, including any necessary training and pilot.",
                "Initiate the improvement process across the entire testing organization.",
                "Diagnose the current situation by evaluating sources of inefficiency."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You, as a testing consultant, are now responsible for testing improvements in a critical project at a small regional bank. The project is about digital transformation and will continue for two more years using an agile approach. Since the Test Maturity Model (TMMi) is popular in the financial domain, the bank has asked you to use TMMi during your project's testing improvement activities.\n\nHow would you proceed to use TMMi in the described context?",
            options: [
                "Make it clear that model-based improvement using TMMi is not possible at the project level.",
                "Recommend that all TMMi level 2 and level 3 process areas be used for these improvement activities.",
                "Focus on TMMi process areas that are especially related to project-level activities, and also use the specific 'TMMi and Agile' guide.",
                "Since the project is using an agile approach, propose using the scrum guide for testing improvement activities."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Suppose you work for an ambitious start-up that is developing a system that provides personalized loyalty and rewards programs for small and medium-sized businesses that sell to online customers. Businesses using the system can sign up themselves on the system's web store and then can create custom buttons for their websites. These buttons can be used to allow their customers to sign up for the businesses' loyalty and rewards program. Each subsequent purchase earns points, and both businesses and their customers can manage the program; for example, to determine the number of points required to receive a free product or service.\n\nYour employer's marketing staff is heavily promoting the system by offering aggressive discounts on first-year fees to enroll inaugural businesses. Marketing materials state that the service will be highly reliable and extremely fast for businesses and their customers.\n\nFour months ago, requirements were completed and software development began. When analyzing quality risks, button customization was classified as the lowest risk, while enrollment was classified as the highest risk. As planned in the schedule, the first version was launched a month ago and businesses and their customers could start registering. The system has been in use by businesses and their customers for a month. Your team has used a mix of risk-based testing, requirements-based testing, and reactive testing. You are now conducting a retrospective of the testing work.\n\nWhich of the following AREAS should most likely be considered in this retrospective?",
            options: [
                "Evaluate whether significant problems have been reported by users in button customization.",
                "Decide whether the project plan included all relevant project risks that affected delivery to early adopter businesses.",
                "Determine the level of detail required for enrollment, customization, and management of test cases.",
                "Measure coverage of enrollment requirements and report results to project and business stakeholders.",
                "Investigate what tests at what test level could have covered the problems reported by customers."
            ],
            correctAnswer: [0, 3], // Adjust according to the correct answers
            urlImage: ""
        },
        {
            "question": "You are a tester in an agile software development team that has just completed an iteration. You are preparing for the retrospective meeting with the rest of the team.\n\nWhich of the following activities is NOT part of a typical retrospective?",
            options: [
                "Review test progress, defect detection, and test effectiveness metrics.",
                "Identify root causes of testing problems and generate improvement ideas.",
                "Assign responsibilities and define objectives and metrics for improvement actions.",
                "Evaluate testing processes and tools against industry best practices."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are the test manager and head of the testing team for a new product line with multiple variants for various clients. One of the first tasks assigned to you is to select and introduce a suitable test management tool, as your company's current tool does not fit the needs of the upcoming product line.\n\nWhich is NOT a good practice for selecting the new test management tool?",
            options: [
                "Choose the successor to the currently used test management tool.",
                "List the necessary criteria for the product line that are not met by the test management tool.",
                "Evaluate which licensing model will best suit the test management of a product line with multiple variants.",
                "Evaluate the tool based on clear requirements and objective criteria."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You work for an international company that produces hardware and software for telecommunications networks. Hardware and software development is carried out in separate business units. You are the test manager for a network router software product line.\n\nIn your product line, there is a long tradition of creating tightly integrated products using an incremental product life cycle. The hardware business unit produces a new version every six months. Your software product line aims to have a new software version ready for each new hardware version. Software is developed in two-month increments. Business unit schedules are synchronized during design.\n\nYour team consists of 15 testers, who have been with the company for at least two years, but most much longer. New tests are developed by the most experienced test analysts. Test variations and regression test suites are executed by the rest of the team.\n\nCompany management requires monthly progress reports listing the number of severe defects found, as well as test execution status. There have also been efforts to measure staff efficiency across all business units. There have been problems keeping pace with the hardware development schedule.\n\nYou have heard that another similar software product line within your company is using an open-source tool for its test automation. They use it to automate approximately 50% of tests and execute the rest manually through the software's user interface.\n\nYou are asked to investigate whether it would be possible to use this tool for your product line as well. What should be your main concern?",
            options: [
                "How good is the support for the open-source tool?",
                "Is the new tool easy to use?",
                "Is my business unit mature enough for test automation using this tool?",
                "Can all artifacts created by the tool be easily maintained?"
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are working on a software development project that uses an agile development methodology. You are considering introducing a test automation tool to improve testing quality and efficiency. You have identified three potential tools: Tool A, Tool B, and Tool C. Each tool has different features, costs, and benefits. Annual recurring costs for all three tools are equal to 20% of acquisition costs. Before tool implementation, annual manual testing effort was $60,000. You have performed a cost-benefit analysis and calculated the ROI for each tool based on the following information:\n\n- Tool A costs $10,000 to purchase and $2,000 per year to maintain. It has a high level of usability and maintainability, but only supports functional testing. It can reduce manual testing effort by 20% and test cycle time by 10%. It can also increase test coverage by 15%.\n- Tool B costs $15,000 to purchase and $3,000 per year to maintain. It has a moderate level of usability and maintainability, but supports both functional and performance testing. It can reduce manual testing effort by 30% and test cycle time by 20%. It can also increase test coverage by 25%.\n- Tool C costs $20,000 to purchase and $4,000 per year to maintain. It has a low level of usability and maintainability, but supports functional, performance, and security testing. It can reduce manual testing effort by 40% and test cycle time by 30%. It can also increase test coverage by 35%.\n\nAssuming ROI can be calculated for the given situation, which tool would you choose and why?",
            options: [
                "Tool A, because it has the lowest initial and recurring costs.",
                "Tool B, because it has the best balance between costs and benefits.",
                "Tool C, because it has the greatest reduction in effort and time and the greatest increase in coverage.",
                "None of the tools, because they do not provide a positive ROI."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "For your current project, the available custom tool does not meet the requirements of your test automation effort. Within your company, there is an open-source test automation tool that is being successfully used for identical requirements.\n\nIf you choose the same open-source tool, which of the following activities should occur as the first step when retiring the current custom tool to show the value of the new tool as quickly as possible?",
            options: [
                "The custom tool must be maintained and converted to the new environment.",
                "Regression test scripts from the custom tool must be converted to the new tool.",
                "Backup and restore functionalities of the custom tool must be maintained.",
                "All test scripts from the custom tool must be converted to the new tool."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a test manager, you are required to report on different metrics during different testing activities. Which of the following metrics would you recommend for the different test management activities?\n\nMetrics:\n1. Product risk coverage percentage\n2. Number of resolved defects compared to unresolved defects\n3. Percentage of planned vs. automated test cases\n4. The ratio between the estimated number of hours required for testing activities vs. the total number of project hours\n\nTest management activities:\nA) Test planning\nB) Test monitoring and test control\nC) Test completion\nD) None of the above\n\nPlease match the test management activities with the corresponding metrics.",
            options: [
                "A. 3B, 4B, 1C, 2C.",
                "B. 2B, 3B, 1C, 4C.",
                "C. 1B, 2B, 4B, 3C.",
                "D. 1B, 2C, 3C, 4C."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Your board of directors is new to testing metrics and asks you to explain the main objective of using testing metrics. Which of the following statements would you use to explain the benefit of testing metrics to your management?",
            options: [
                "A. Test metrics are indicators of test progress and help evaluate whether test exit criteria or test objectives have been met.",
                "B. Test metrics recommend corrective actions to achieve effective and efficient testing.",
                "C. Test metrics are used to collect data from completed testing activities to consolidate lessons learned, tests, and other relevant information.",
                "D. Test metrics are used to re-prioritize tests when an identified risk becomes a problem."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You work for an international company that produces hardware and software for telecommunications networks. Hardware and software development is carried out in separate business units. You are the test manager for a network router software product line.\n\nIn your product line, there is a long tradition of creating tightly integrated products using an incremental product life cycle. The hardware business unit produces a new version every six months. Your software product line aims to have a new software version ready for each new hardware version. Software is developed in two-month increments. Business unit schedules are synchronized during design.\n\nYour team consists of 15 testers, who have been with the company for at least two years, but most much longer. New tests are developed by the most experienced test analysts as internal custom test scripts. Test variations and regression test suites are executed by the rest of the team.\n\nCompany management requires monthly progress reports listing the number of severe defects found, as well as test execution status. There have also been efforts to measure staff efficiency across all business units. There have been problems keeping pace with the hardware development schedule.\n\nThe business unit manager has asked you to propose how to improve project testing by introducing better tools or measurable metrics (e.g., at least 100% statement coverage).\nThe manager has quickly compiled a list of product risks from user representatives and thinks that testing does not cover all risks.\n\nWhich of the following options would you recommend?",
            options: [
                "A. Add more tests to better cover functionality.",
                "B. Derive risk and confidence status from testers' opinions on developers' capabilities.",
                "C. Analyze residual risks based on testers' confidence to see if sufficient statement coverage is achieved.",
                "D. Include confidence assessment as part of project measurements."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are the test manager for a software project that uses a sequential, document-centric development model and involves the development of a desktop application for a banking system. The project has a large, hierarchical team working with multiple stakeholders. The project has a low level of uncertainty and complexity due to stable and well-defined requirements and technology. The project also has strict quality and security standards to comply with legal regulations of the banking industry.\n\nWhat are the most appropriate metrics you would use to analyze test results and create test reports that empower stakeholders to make decisions? Choose the best answer.",
            options: [
                "A. Metrics related to product risks, defects, test progress, coverage, and test costs and effort.",
                "B. Metrics related to defects, test progress, coverage, and code coverage.",
                "C. Metrics related to product risks, defects, test progress, coverage, and environment/configuration coverage.",
                "D. Metrics related to defects, test progress, coverage, and residual costs for untested components."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a test manager, you must consider many factors to estimate testing efforts. This estimate can be revised as testing progresses. Which of the following factors is NOT relevant for test estimation during INITIAL TEST PLANNING?",
            options: [
                "A. The complexity and size of the software under test.",
                "B. The availability and skills of the testing team members.",
                "C. The quality and reliability of the tools and test environment.",
                "D. The number and severity of defects found during testing."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are working on an agile project that takes place in multiple locations, and you are responsible for the testing effort in your location. The testing strategy is a mix of risk-based testing, process-compliant testing strategy, and reactive testing. Developers are following known agile best practices, including automated component testing and continuous integration.\n\nYour task is to estimate the system testing effort required for a particular iteration by your testing team. Which of the following TWO statements best describe what testing techniques or approaches you should use and how you should carry out the estimation in this situation?",
            options: [
                "A. Consider the average effort required per identified risk in past iterations.",
                "B. Assign time-boxed testing sessions for each identified test charter.",
                "C. Estimate that most defects will be found during system test execution.",
                "D. Include the effort to create detailed test documentation.",
                "E. Assume that system tests can reuse unit test data and environments."
            ],
            correctAnswer: [0, 1], // Adjust according to the correct answers
            urlImage: ""
        },
        {
            "question": "You are the test manager for a software project that follows the sequential model. Historical data on requirements-based efforts from similar projects is available. Project requirements and scope are fixed and well-defined.\n\nYou need to estimate the testing effort for the entire project based on the requirements specification document. Which of the following techniques or approaches would be most suitable for your context?",
            options: [
                "A. Ratio-based estimation.",
                "B. Planning Poker.",
                "C. Three-point estimation.",
                "D. Delphi method."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a tester, you are generally required to create a defect report whenever you observe a defect during testing. However, there may be situations where you do not create a defect report. Which of the following is a reason why a defect report may NOT be created after a failure is detected by a test?",
            options: [
                "A. The failure is caused by a defect that was introduced in the same phase as the test.",
                "B. The failure is caused by a defect that should not be tracked within the defect workflow.",
                "C. The failure is caused by an invalid test that does not match the requirements specification.",
                "D. The failure is caused by an anomaly that is not observed by the tester."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "The diagram shows an incomplete defect workflow, where two states (states X and Y) have not yet been appropriately named. Which of the following options would correctly complete the workflow?",
            options: [
                "A. STATE X – RETESTED\t  STATE Y – RE-OPENED",
                "B. STATE X – REJECTED\t  STATE Y – CLARIFICATION",
                "C. STATE X – DUPLICATE\t STATE Y – TERMINATED",
                "D. STATE X – FIXED STATE Y – REJECTED "
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: "./imagenes/diagram preg35.png"
        },
        {
            "question": "Which of the following represents a complete sequence of states for a defect report that leads to a terminal state? Assume IN PROGRESS means one or more states where developers or other project stakeholders are addressing the defect.",
            options: [
                "A. OPEN, IN PROGRESS, RESOLVED, CLOSED, DEFERRED.",
                "B. OPEN, IN PROGRESS, RETURNED, IN PROGRESS, RESOLVED.",
                "C. OPEN, IN PROGRESS, RESOLVED, CLOSED.",
                "D. IN PROGRESS, OPEN, RESOLVED, CLOSED."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are a tester in an agile team working on a new product. During the third sprint, while performing exploratory testing, you experienced a failure in the login functionality that was developed during the first sprint in cooperation with the Identity Provider (IDP) team. What is a reason why you would choose NOT to create a defect report in this case?",
            options: [
                "A. The developer will not have time to work on the solution until next week.",
                "B. You need to clarify the failure with a developer on your team first.",
                "C. This failure will require cooperation with the IDP team.",
                "D. According to the Product Owner, this failure has low severity and should be fixed in the next iteration."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Today, multiple software development methodologies are used. Different methodologies in the SDLC require an adapted testing approach. You are a test manager in a software development project operating in a hybrid environment. Which of the following is most relevant regarding defect management in this context?",
            options: [
                "A. All teams use the same defect management tool, regardless of their methodology.",
                "B. The frequency of defect management committee meetings should be determined by the largest team.",
                "C. Agile teams should schedule their defect fixing priorities to align with the overall project plan.",
                "D. All team members agree on defect prioritization."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Defect ID: [Insert Defect ID here]\nStatus: 24.06.2024\nEdited by [Max Mustermann]\nComponent: [Insert specific component here]\nSubsystem: [Insert specific subsystem here]\nWhich of the following data elements is NOT mandatory for managing defect reports in most environments?",
            options: [
                "A. A defect title with a brief summary of the anomaly.",
                "B. The subsystem or component in which the defect is found.",
                "C. Severity of impact on the system under test and/or product stakeholders.",
                "D. Priority for fixing the anomaly."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are the test manager for a project where system testing is being performed on third-party software. You have received a complaint from the third party that the completeness of defect data from your system tests is unacceptable.\nWhich of the following options could have been identified as missing from the defect reports sent to the third party?",
            options: [
                "A. The project activity that was occurring when the issue was detected.",
                "B. Steps to reproduce the failure, along with actual and expected results.",
                "C. The priority for fixing the issue.",
                "D. The technical type of the defect.",
                "E. The software life cycle phase in which the defect was detected."
            ],
            correctAnswer: [1, 2], // Adjust according to the correct answers
            urlImage: ""
        },
        {
            "question": "Your organization has decided that its goal is to improve its testing and development process by reducing the number of defects introduced during development, based on existing defect reports.\nWhich of the following information from the defect report will be MOST useful to achieve this goal?",
            options: [
                "A. The software life cycle phases of defect detection and removal.",
                "B. Information about the root cause of the defect.",
                "C. The number of defects per component.",
                "D. The efficiency of defect removal."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "As a test manager, you are looking for new team members. You need to draft a job offer. In this offer, you include the required competencies of the new team members. Which of the following skills is an example of methodological competence for a test team member?",
            options: [
                "A. Ability to apply testing techniques to design test cases.",
                "B. Ability to communicate test results to stakeholders.",
                "C. Ability to receive criticism.",
                "D. Ability to learn new technologies and tools."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are responsible for staffing a testing team in a company that develops braking systems for a national motor vehicle manufacturer. While the development of individual software components is carried out by several AGILE teams, system development (consisting of software and hardware) is carried out according to the V-model in close cooperation with the AGILE teams.\n\nThe braking system is classified as safety-critical. Tests must be state-of-the-art in design and documentation.\n\nThe test analyst for system testing leaves your company while the project is in the final phase of system testing, and the position must be filled quickly. The main task of the test analyst was the design of integration tests in cooperation with the AGILE teams and requirements-based test design for system testing.\n\nBased on the above information, what is the MINIMUM combination of skills and qualifications required for this position?",
            options: [
                "A. Black-box testing techniques; communication skills; resilience; test documentation according to ISO 29119.",
                "B. Black-box testing techniques; programming skills; resilience; AGILE certification.",
                "C. Communication skills; ability to delegate work; intercultural competence; test documentation according to ISO 29119.",
                "D. Intercultural competence; communication skills; black-box testing techniques; ability to delegate."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are in a test management role for a software project that uses an agile software development life cycle (SDLC) and involves the development of a web application for an online betting platform. The project has a small, cross-functional team working closely with the client. The project has a high level of uncertainty and complexity due to frequent changes in requirements and technology. The project also has strict quality and security standards to comply with legal regulations of the gaming industry.\n\nBased on the given project context, what are the MOST important skills you would look for when selecting test team members for this project?",
            options: [
                "A. Business experience in the gaming industry, technical experience in web technologies and security vulnerabilities, technical experience to automate test execution, communication and cooperation skills, self-management and discipline skills.",
                "B. Conceptual knowledge to develop a testing strategy, project management skills to manage all testing tasks, analytical skills to analyze the test basis and product risks, judgment skills for test selection.",
                "C. Skills in testing techniques and conceptual knowledge to design test environments, technical experience for programming test scripts and configuring test environments, technical experience to automate test execution, communication and cooperation skills.",
                "D. Business experience in the gaming industry, technical experience in programming languages and interface technology, knowledge about test levels, test roles, and specific testing techniques, conflict resolution skills."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "To determine the competence of a new colleague, you have given them the task of analyzing a set of requirements and designing test cases for system testing.\nWhat skill areas can be evaluated based on the colleague's performance in this task?",
            options: [
                "A. Evaluation of technical competence based on created test cases and methodological competence based on queries.",
                "B. Evaluation of methodological competence based on findings about requirements and technical competence based on selected testing techniques.",
                "C. Evaluation of professional competence based on findings about requirements and methodological competence based on selected testing techniques.",
                "D. Evaluation of professional competence based on questions and social competence based on created test cases."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Developing the skills and competencies of your team members is important for establishing and maintaining a high-performing testing team. As a test manager, you must establish personal development plans for your project team. Which of the following statements about approaches to skill development for test team members is correct?",
            options: [
                "A. Training and coaching involve predefined content delivered to multiple participants simultaneously.",
                "B. Self-study is a recommended approach to develop social skills.",
                "C. In peer learning, an experienced team member provides continuous guidance to a new team member.",
                "D. Coaching provides individual guidance to a person new to a role, helping them find solutions to improve their competencies."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Leading a team requires specific skills. Which of the following statements about leading a testing team is correct?",
            options: [
                "A. In a testing team, willingness to help is more important than ability to delegate.",
                "B. When forming a new testing team, the ability to act with appreciation is the most important competence.",
                "C. Throughout the testing team's life cycle, all skills are equally important.",
                "D. The ability to resolve conflicts helps reach consensus on rules and roles in the early stages of group development."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Consider these categories of quality costs:\n1. Prevention costs\n2. Appraisal costs\n3. Internal failure costs\n4. External failure costs\nAnd these examples of quality-related activities:\nA. Early acceptance testing to get quick feedback\nB. Performing a product risk analysis\nC. Customer complaints about poor performance\nD. Long waiting time from defect report to resolution during testing, causing greater inefficiency in defect management.\n\nWhich of the following CORRECT ASSIGNMENTS matches the quality cost categories with their examples in software development?",
            options: [
                "A. 1 – A 2 – B 3 – C 4 – D",
                "B. 1 – B 2 – A 3 – D 4 – C",
                "C. 1 – A 2 – B 3 – D 4 – C",
                "D. 1 – B 2 – A 3 – C 4 – D"
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are managing the testing of a mature online dating service application. The application allows users to create profiles, match with compatible people, organize social events, and block unwanted contacts. You need to calculate the cost-benefit of testing for this application.\n\nYou have calculated the following quality costs per defect:\n• Appraisal costs: $150\n• Internal failure costs: $250\n• External failure costs: $5,000\n\nThe average cost of detection and internal failure is calculated using the number of defects found before release, while the average cost of external failures is calculated using the number of defects found after release.\n\nBased on the above information, which of the following statements is correct regarding the cost-benefit analysis of testing for this application?",
            options: [
                "A. The total cost of quality for this dating application is probably around $5,000, excluding prevention costs.",
                "B. Each defect found by testing offers the organization an average of $4,600 in quality cost savings.",
                "C. While quality cost is useful in many industries, it has limited applicability when calculating the value of testing for software applications.",
                "D. Testing provides a potential saving of $5,400 per defect by identifying problems before they reach the customer."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are the test manager for a software project with a budget of €100,000 and a six-month deadline. You have estimated that the average defect prevention cost per defect is €150, the average appraisal cost is €400, the average internal defect cost per defect is €250, and the average external defect cost per defect is €3,000.\n\nYou have also determined the following characteristics for your project:\n• Requirements are unclear and may change frequently.\n• The technology used is new and unknown to the development team.\n• The client has high expectations in terms of quality and reliability.\n• The project has a tight schedule and scope.\n\nBased on the given information, which of the following scenarios does NOT include a correct conclusion?",
            options: [
                "A. Due to requirements ambiguity, the average internal failure cost per defect doubles throughout the project, resulting in an average saving of only €2100 per defect.",
                "B. Familiarizing with the technology in use triples the defect prevention cost, but the actions do not affect the average saving per defect.",
                "C. To meet the client's tight deadline, reactive measures of retesting before delivery are omitted. This reduces external defect costs to €2000. However, the average saving per defect is also reduced to €1350.",
                "D. To meet the client's tight deadline, the testing team is expanded short-term, causing appraisal costs to increase to €500. As a result, the average saving per prevented defect increases by €100 each."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Appendix: Additional Questions\nSection: Testing Process\nQuestion #A1 (1 Point)\nAs a test manager, you must establish checklists at many different phases of your testing project. Which of the following is the most accurate description of a “test completion checklist”?",
            options: [
                "A. A test completion checklist ensures that all test material is completed as planned.",
                "B. A test completion checklist ensures that all important lessons learned are documented.",
                "C. A test completion checklist ensures that all test material is stored in the configuration management system.",
                "D. A test completion checklist ensures that test plans are developed to ensure good practices are repeatable."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Section: Testing Context\nQuestion #A2 (1 Point)\nAs a test manager, you must perform different activities at different test levels. Which of the following is NOT a test management activity at the system testing level?",
            options: [
                "A. Define the scope of the test.",
                "B. Select testing tools and techniques.",
                "C. Decide which parts need to be integrated and tested.",
                "D. Manage defects throughout the testing process."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A3 (1 Point)\nAs a test manager, you must align your test management activities with test types. Which of the following is a test management activity for white-box testing, but not for functional or non-functional testing?",
            options: [
                "A. Define the scope.",
                "B. Determine testing tools and test environments.",
                "C. Measure statement coverage.",
                "D. Monitor test execution based on test case prioritization."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A4 (1 Point)\nAn agile team is developing a new web-based application. Which of the following factors will probably NOT influence the level of quality risks?",
            options: [
                "A. The User Acceptance Testing (UAT) team is assigned to several high-priority projects.",
                "B. A new business analyst joined the agile team with strong domain knowledge, but little experience in test automation.",
                "C. Most of the development team is in India, but the product owner is in the USA.",
                "D. A new defect management process has been introduced within the company that is unknown to developers."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A5 (1 Point)\nAs a test manager, you want to allocate testing efforts effectively and decide to use a risk-based testing approach. Which of the following is MOST problematic when using risk-based testing?",
            options: [
                "A. The project has ten different stakeholders who all want to contribute to risk analysis.",
                "B. The testing team starts with risk-based test planning, but neglects risk control due to project pressure.",
                "C. Risk items and risk levels of a project are not reused in other projects.",
                "D. Stakeholders understand the level of residual risk and can decide to go into production before all tests are executed."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Section: Test Process Improvement\nQuestion #A6 (1 Point)\nYou join an existing project as a test manager. The development team is responsible for the improvement and maintenance of a major product of the company's flagship product. New versions are released regularly. However, the product has a reputation for poor quality and customers frequently complain about the number of defects. You are now asked to look for improvements in project testing.\n\nWhich of the following TWO actions follow an analysis-based test improvement strategy that addresses the problem discussed in the scenario?",
            options: [
                "A. Implement a defect classification scheme for the origin and type of defects and classify customer-reported defects according to this scheme.",
                "B. Compare the practices your testing team applies for test design and implementation with the practices defined by the TMMi Model.",
                "C. Determine the number of defects reported by your testing team during system testing of the last version, as well as the number of defects reported by your customers for that version and calculate the defect detection percentage.",
                "D. Initiate a measurement program based on the Goal Question Metric (GQM) model at the company level that evaluates the accuracy of test estimates across all projects.",
                "E. Introduce a new test automation tool to reduce test execution effort."
            ],
            correctAnswer: [0, 2], // Adjust according to the correct answers
            urlImage: ""
        },
        {
            "question": "Question #A7 (1 Point)\nYour company currently uses a 15-year-old test management tool. The shift from a waterfall development approach to an agile development approach demands features that your current test management tool does not provide. To successfully change the development approach, your company decides to introduce a new test management tool.\nWhich of the following examples is a valid consideration for test tool selection?",
            options: [
                "A. Preferences of the head of the development department's vendor.",
                "B. Requirements of all stakeholders to evaluate and identify the most appropriate tool.",
                "C. The testing tool must match your company's corporate design standards.",
                "D. The tool must be less expensive than the current tool to be efficient."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A8 (1 Point)\nYou are responsible for test management of a reporting engine for a banking system. The project started a month ago. Project management asks you to provide an overview of the progress that has been made at least once a week.\nSince you have not currently established metrics, what do you need to do to meet the needs of project management?",
            options: [
                "A. Ensure traceability is included in your metrics.",
                "B. Gather information needs from the testing team and project management.",
                "C. Activate all possible metrics to give project management free choice of information.",
                "D. Start with defect management, as there are acceptance criteria for defects with 'high' priority and severity."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Section: Test Estimation\nQuestion #A9 (1 Point)\nYou need to estimate testing effort in an agile software development project. Which of the following statements is TRUE about test estimation in this context?",
            options: [
                "A. Test estimation is performed separately from development estimation and is based on test levels and activities.",
                "B. Test estimation is performed as part of development estimation and is based on user stories and acceptance criteria.",
                "C. Test estimation is not performed at all in agile projects and testing is done ad-hoc.",
                "D. Test estimation is performed by the client or product owner and is based on the business value and risk of features."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A10a2 (1 Point)\nAs a test manager, you must control the time, effort, and quality of your testing project. Which of the following factors will most likely influence the duration, but NOT the effort of testing activities?",
            options: [
                "A. Time to fix defects found during testing.",
                "B. Maturity of the testing process.",
                "C. Required level of detail of test conditions.",
                "D. Required quality of the system."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Question #A10b (1 Point)\nAs a test manager, you must consider many different factors to estimate the effort of your testing project. Which of the following should NOT be taken into consideration for test estimation in a testing project?",
            options: [
                "A. The qualifications of the development team members.",
                "B. Human skills and experiences of developers.",
                "C. Estimated effort in other ongoing projects.",
                "D. The determined hours of the test effort estimation."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Section: Testing Team\nQuestion #A11 (1 Point)\nA key factor in the performance of a testing team is its motivation. Which of the following is the best example of a motivating factor for a testing team?",
            options: [
                "A. Introduction of a salary agreement for all employees.",
                "B. Planned testing activities and work products down to the last detail.",
                "C. A well-functioning test environment.",
                "D. Recognition and appreciation for work done."
            ],
            correctAnswer: 3, // Adjust according to the correct answer
            urlImage: ""
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
        "nameQuiz": "Test Management - Advanced Example 2"
  }
}
window.data_en = data_en;
