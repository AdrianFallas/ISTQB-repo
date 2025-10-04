const data_en = {
    questions: [
        {
            "question": "Scenario 1 – Test Project Evaluation and Reporting\nAssume you have just been promoted to Senior Test Manager, responsible for testing your company's most strategic project, a Personal Video Recorder (PVR) capable of recording and playing 3D TV. The development model for this project is the V-model. The project is scheduled to launch in six months, and different levels of testing are already being performed in parallel. There are six test teams assigned to test different parts of this project. Four teams are dedicated to testing different PVR components and performing integration testing between components. The managers of these teams report to you as part of a matrix management organization. For the other two teams, one team is responsible for system testing and the other team is responsible for user acceptance testing. The managers of these two teams report directly to you. Senior management holds a weekly strategy meeting and you are expected to prepare a 15-minute update on the testing status of this project. You have been given six weeks to prepare for the first update.\nDuring your first day on the job, you meet with the six Test Managers. You immediately notice that there is no standardized reporting from the test teams. Each team is using a different set of metrics to determine quality and exit criteria for their part of the project and to analyze the efficiency and effectiveness of their testing process. Next, you meet with the managers of the four component development groups, the Project Manager, and the Vice President of Research and Development, to understand what information they need from the test teams to make the right decisions about the project. By the end of the first week, you realize that you need to define a set of useful metrics to be used throughout the test project, create test reports to be used by the test teams, and create a high-level test report and dashboard to report to project management and senior management.",
            options: [
                "A trend of the percentage of component requirements for which test cases have been created.",
                "The number of currently unresolved user requirement defects.",
                "A graph of the number of defects found by each component test team member.",
                "A trend of the ratio of open to closed defects, by component.",
                "The ratio of the number of defects found during component testing to those that escaped component testing and were found by system testing.",
                "A trend of the percentage of integration test cases that have passed.",
                "A trend of end-to-end tests that have passed."
            ],
            correctAnswer: [0, 3, 5], // Select three options
            urlImage: ""
        },
        {
            "question": "Scenario 1: Test Project Evaluation and Reporting provides the context for this question. Your next task as Test Manager is to decide which metrics and indicators should be measured and analyzed. Consider the following indicators:\n\n i. The weekly rate at which actual versus planned test cases are being written.\n ii. The amount of time per day that test labs are inoperable when required for testing.\n iii. Summary of unmitigated risks.\n iv. Daily report of reopened defects.\n v. Weekly defect discovery rate.\n vi. Daily report of the number of newly opened critical defects.\n\n Indicators i, ii, and v should be used. Which of the following statements correctly defines the indicators that should be measured and analyzed for internal test reporting (i.e., reporting within the test organization)?",
            options: [
                "Indicators i, ii, iii, and v should be used.",
                "All these indicators should be used.",
                "Indicators i, ii, iv, v, and vi should be used."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Scenario 1: Test Project Evaluation and Reporting provides the context for this question. Development teams are considering moving to an agile development process. Consider the following:\n\n - Percentage of failed builds.\n - The weekly rate at which actual versus planned automated regression test cases are being written.\n - Average number of iterations executed until automated test cases become obsolete.\n - Trend of the number of requirement changes.\n - Trend of time elapsed between defect detection and closure.\n - Trend of the number of open defects.\n - Number of defects found during development.\n\n Which of the following statements best summarizes the test reporting and control metrics that will be required if teams move to an agile process?",
            options: [
                "Metrics i, ii, iii, v, and vi will be required.",
                "All these metrics will be required.",
                "Metrics ii, iii, iv, v, and vi will be required.",
                "Metrics i, iii, v, vi, and vii will be required."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Consider the following options:\n\n i. The Shewhart cycle allows the Test Manager to implement improvements across the entire testing process in a single effort.\n ii. Using the PDCA (plan-do-check-act) cycle allows the Test Manager to verify whether a process change improves the testing process before implementing the change across the entire process.\n iii. Fishbone diagrams help the Test Manager determine the root causes of a problem by adding increasingly detailed causes and then improving the process by working to resolve the causes.\n iv. Shewhart charts are used to show whether a process is in control or not, by looking for unusual variations in indicators (e.g., a week with an unusually high number of new defects).\n v. Scatter diagrams are used to analyze root causes by plotting a graph of causes and effects.\n\n Which of the following statements correctly identifies the basic quality control techniques that a Test Manager should understand and be able to implement to improve the testing process?",
            options: [
                "Options i, iii, and iv are correct.",
                "Options ii, iii, and iv are correct.",
                "All options are correct.",
                "Options ii, iv, and v are correct."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Refer to Scenario 1: Test Project Evaluation and Reporting above.\n\n 1. Given the information in this scenario, describe a test status dashboard that provides relevant information to the test team managers and offers a test status throughout the entire test project.\n\n 2. Given the information in this scenario, design a project dashboard that provides relevant information to the following stakeholders:\n a. Project Manager\n b. Development Manager\n c. Vice President of Research and Development (VP R&D)\n\n Your answer should demonstrate an understanding of the different information needs, level of detail, and means of presentation for each of the stakeholders.",
            options: [
                "A"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Which of the following is a characteristic normally associated with agile projects?",
            options: [
                "Testers are integrated into the project from project initiation.",
                "Development specifications corresponding to delivered functionality are as complete (i.e., no more will be added later) as they would be in the V-model.",
                "Testers focus primarily on integration testing.",
                "When the schedule is compressed, testing planned for later iterations will be reduced or eliminated."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You have just attended a risk assessment workshop. The following project risks have been identified:\n\n - The development team will use a set of libraries developed by a third party. That library may not be ready on time, which may result in a delay in coding start.\n - The configuration management team has decided to implement a new set of tools.\n - In the past, beta customers have been reluctant to sign the data privacy agreement. The team is concerned that the new privacy agreement may be even more difficult for customers to accept.\n - A product that needs to integrate with this product was initially planned to be ready during code development. It has been delayed from there to the integration level and now has been delayed to the system testing timeframe.\n - There are not enough trained testing resources available for this project.\n - A forced 'holiday' has been declared that will result in all testing staff taking two weeks that were not planned in the schedule.\n\n With respect to these risk items, what action should the Test Manager take?",
            options: [
                "Adjust existing test estimates for i. All others should be monitored by project management.",
                "Set triggers for i, iii, iv, v. Initiate control measures for vi. Monitor ii.",
                "Monitor i, ii, iii. Set a trigger date for iv. Initiate control measures for v.",
                "Adjust existing test estimates for vi.",
                "Ignore i and ii as they are development team issues. Adjust existing test estimates for iv, v, vi. Transfer iii to the business team."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Which of the following statements is true regarding the Test Manager's role in change management? (choose two)",
            options: [
                "The Test Manager should be involved in impact analysis even when the proposed change is not expected to affect the schedule.",
                "The Test Manager should require documentation for any proposed change in an agile project.",
                "The Test Manager should not attend impact analysis sessions, as it tends to discourage others from speaking and participating.",
                "The Test Manager's role in change management is not limited to the testing aspects of the project.",
                "The Test Manager is responsible for the change management process."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You have been asked to create a presentation on the role of quality management in your organization. Which of the following points should you include in your presentation to ensure the audience understands the scope and importance of quality management? (choose three)",
            options: [
                "Quality management requires that software quality assurance activities be integrated into the project lifecycle.",
                "Quality assurance and testing should not be merged into a single team so that the focus of quality assurance is not confused with the scheduling aspects of testing.",
                "Quality management practices should be evaluated by an external audit team to ensure compliance.",
                "Unit test documentation is a deliverable that is part of quality management.",
                "Quality management excludes activities to deliver projects within budget.",
                "The test plan is the basis for forming quality policies for an organization.",
                "Metrics tracking is an important aspect of quality management."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 2\nYou are a Test Manager who has just accepted a new assignment to manage a test project for software that controls a new car braking system. The new braking system automatically flashes the car's taillights when the brakes are pressed suddenly and firmly. The test team started receiving code two months ago. The project is scheduled to be released to production in three more months. You have determined that the following decisions have already been made regarding this project:\n\n 1. Test estimation was based on historical projects of similar size with the same group of developers and testers using a V methodology.\n 2. The development team claims to be using an agile methodology for this project.\n 3. The estimated defect count at this point in the project was expected to be 500. It is currently 1000.\n 4. The test team is frustrated with the quality of the code. In each two-week iteration they are receiving new code and defect fixes, but a third of the defect fixes are breaking something else.\n 5. There is no information from the development team to the test team about what new features are included in each iteration.\n\n The previous Test Manager was fired due to this project. You have been tasked with getting the project back on track and providing a new achievable schedule.",
            options: [
                "A"
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Given the information in Scenario 2, provide the following:\n\n 1. You have been asked to provide a project status report to the management team, including an explanation of why the expected and actual defect counts do not match. You will need to explain why the estimate was incorrect and what is likely to happen to the defect count as the project progresses.\n\n 2. What should the Test Manager do to address the problem of unexpected features and the problem with regressions?\n\n 3. Given this information, what will you present to your management as your plan to get this project back on track?",
            options: [
                "A"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Which of the following is an efficiency metric for the testing process?",
            options: [
                "The average number of days from defect discovery and reporting to final resolution of the defect report.",
                "The number of defects detected by testing divided by the sum of the number of defects detected by testing and the number of defects subsequently detected by users.",
                "The person-hours of effort in test design and implementation divided by the number of test basis items covered by the test cases produced.",
                "The total amount of effort spent on a project, including all activities in the fundamental testing process."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "You are working as a Test Director for a company that sells smartphone applications for the mass consumer market. The CEO has set the following quality-related objectives for the organization:\n\n 1. Minimize the number of customer complaints about applications, especially on social networks such as Twitter, Facebook, Google+, etc.\n 2. Deliver new applications and features for those applications to customers as quickly as possible, while maintaining the highest level of customer satisfaction.\n\n You are defining the mission of the test team for the organization. Select two of the options that belong to the test policy document as part of the testing mission.",
            options: [
                "Detect defects that would result in customer dissatisfaction.",
                "Work with marketing and project management to plan test execution cycles that minimize quality risk within schedule constraints.",
                "Ensure that 100% of stated requirements work correctly, without failures.",
                "Design tests using sophisticated techniques for compatibility testing, including peer testing.",
                "Ensure 100% defect detection effectiveness for all application and feature releases.",
                "Eliminate all defects that would affect customer satisfaction.",
                "Provide development teams with feedback on the quality of individual developers' work products."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Assume you are working as a Test Manager on a new product development project for a startup company. No written requirements or design specifications will be produced, but you have access to key product and project stakeholders, including some early adopters who have committed to purchasing the product when complete. Assume that functionality, reliability, performance, and security are key quality attributes for this product. The project follows an agile lifecycle model, which has been adapted for its own purposes.\n\n Consider the following test strategies:\n i. Risk-based testing\n ii. Requirements-based testing\n iii. Reactive testing\n iv. Model-based testing\n v. Process-based testing\n vi. Functional regression test automation\n\n Which of the following statements best summarizes which test strategies can be used for this project?",
            options: [
                "Strategies i, iii, iv, v, and vi can be used.",
                "All these strategies can be used.",
                "Strategies i, iv, and vi can be used.",
                "Strategies i, v, and vi can be used."
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 3\nAssume you are working as a Test Director, in charge of the Enterprise Test Group. The Enterprise Test Group consists of four test teams. Four Test Managers report to you and each Test Manager leads a test team. For three of the test teams, each team is dedicated to testing a single product. These three test teams are responsible for the system test level and, if applicable, the system integration test level. Developers are responsible for unit testing and component integration testing. Business analysts are responsible for acceptance testing. Marketing is responsible for beta testing.\n\n The fourth test team specializes in providing test automation frameworks (e.g., keyword-driven test harnesses) for the other three test teams, especially automated functional regression testing.\n\n Consider the following excerpt from the company's test policy:\n The Enterprise Test Group has the following objectives:\n 1. Detect defects, especially defects that would affect customer satisfaction.\n 2. Reduce product quality risks to an acceptable level before release.\n 3. Build confidence that our products work correctly and satisfy our customers.\n 4. Provide information on product quality and the software process so that we can make smart decisions about product release and process improvement.\n\n The Enterprise Test Group will measure the effectiveness and efficiency with which it achieves these objectives, will work with senior management to set effectiveness and efficiency goals, and will receive annual bonuses based on meeting or exceeding those goals.\n\n Assume that one of the test teams is working on a major new release for its product. Its product is an implanted medical device that monitors patient health through blood tests, blood pressure monitoring, and temperature monitoring. New features include monitoring blood sugar levels and kidney function for diabetic patients. The project follows a V-lifecycle. The planned time from project conception to launch is six months.",
            options: [
                "A"
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Consider the following metrics:\n\n - The percentage of test cases for a given product that have been automated.\n - The percentage of test effort saved for a given product due to test automation.\n - The percentage of defects detected by a product test team during system testing.\n - The number of people working on the test automation team.\n - The total years of experience of all people working on the test automation team.\n - The average cost to develop, execute, and maintain each automated test case.\n\n Remember that good metrics align with specific objectives and motivate the correct behavior of the people involved in the process being measured. Which of the following statements is true?",
            options: [
                "Metrics ii and iv are good metrics to show the efficiency with which the test automation team helps the Enterprise Test Group reduce risks.",
                "Metrics iv and v are good metrics of the effectiveness of the test automation team within the Enterprise Test Group.",
                "Metric iii is a good metric for the effectiveness of the test automation team in producing test harnesses that detect defects.",
                "Metric i is a good metric for the ability of the test automation team to provide useful information to Enterprise Test Group stakeholders."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Refer to the scenario defined above.\nAs Test Director, you are reviewing a revised test strategy proposed by the Test Manager for the implanted medical device product. The Test Manager is proposing a combined test strategy consisting of the following elements:\n - Risk-based testing\n - Requirements-based testing\n - Automated regression and reliability testing\n - Reactive testing\n\n This question consists of two parts: First, describe the relationship between each element of the strategy and the previously defined objectives for the Enterprise Test Group. Second, evaluate the suitability for the project, suggesting any additional strategic elements needed to achieve good long-term results.\n\n One month after the launch of the medical device mentioned in the previous scenario, the Test Manager organized a project retrospective. The Test Manager, Test Director, and six project and product stakeholders participated in the retrospective. In this retrospective, the following data, findings, and conclusions were reviewed:\n - System testing located 129 defects, with 8 defects subsequently identified in acceptance testing, beta testing, and post-launch. Therefore, defect detection effectiveness was 94%.\n - System testing located 45 high-priority defects (i.e., those that would affect customer satisfaction), with 1 high-priority defect subsequently identified in acceptance testing and 0 high-priority defects identified in beta testing and post-launch. Therefore, defect detection effectiveness for defects with a significant impact on customer satisfaction was 98%.\n - The high-priority defect located in acceptance testing was a defect that would have affected product safety.\n - Of the defects located by system testing, 9 were regression defects. No regression defects were detected after system testing (in acceptance testing, beta testing, and post-launch).\n - Of the defects located by system testing, 15 were reliability defects. No reliability defects were detected after system testing (in acceptance testing, beta testing, and post-launch).\n - System testing covered 100% of the identified risks to product quality, and all these tests passed before system launch.\n - System testing covered 100% of the specified requirements, and all these tests passed before system launch.\n - At the project launch meeting, four stakeholders expressed very high confidence for launch. One stakeholder expressed high confidence for launch. One stakeholder expressed medium confidence for launch.\n - At the retrospective meeting, all six stakeholders confirmed that they felt these confidence levels were justified by the launch results.\n - Immediately after product launch, five stakeholders expressed very high satisfaction with the information provided by the test team, while one stakeholder expressed medium satisfaction with the information provided by the test team. At the retrospective meeting, all six stakeholders confirmed that they felt these satisfaction levels were justified by the launch results.\n\n This question consists of two parts: First, evaluate whether system testing can be considered as meeting realistic objectives. Second, list areas for improvement in system testing, including test policy and test strategy, in subsequent releases of this product.",
            options: [
                "A"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 4\n\n You have recently been hired as a Test Manager on a project developing a new human resources application for an external client with an estimated 200 requirements. The Project Manager has already decided that a V-lifecycle should be used, with testing responsible for requirements and design specification reviews, and two phases of dynamic testing (integration/system and acceptance). The organization has developed similar applications in the past (following a similar approach) and has been able to provide the following (averaged) data to predict/estimate this project:",
            options: [
                "B"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: "./imagenes/tabla preg 15"
        },
        {
            "question": "The (new) Product Manager has seen the overall testing costs of some previous projects and is not convinced that testing provides a good return on investment. Using the information provided in the previous scenario, your task is to produce a brief summary report for this Product Manager explaining the expected quantitative benefits of testing for this project. Indicate any assumptions made and include any calculations in your answer.",
            options: ["A"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "17. Which of the following is LEAST likely to be involved in reviewing requirements specifications?",
            options: [
                "Business Analyst",
                "Client",
                "User",
                "Project Manager"
            ],
            correctAnswer: 2, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "18. Which of the following are LEAST likely examples of important relationships created by a Test Manager (TM)?",
            options: [
                "The Project TM builds a good relationship with the Program TM to ensure they are clear on their responsibilities and that the Program TM is informed of their team's progress.",
                "The TM develops a friendship with the client's Product Manager to persuade her to reduce the severity rating on incidents to allow testing to be completed.",
                "The Project TM relies on their organization's developer who is embedded in the offshore team to build a relationship with the offshore TM.",
                "The Security TM builds a bond with the security analyst who, while not a manager, is the person everyone goes to for technical information in the security area.",
                "The Project TM forms exclusive relationships with the managers of the two test teams they manage, to avoid being overloaded by communication with individual team members.",
                "The TM builds a relationship with the offshore test lead who is responsible for automating regression tests for the next release."
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": `Which of the following BEST matches the following scenarios and the most effective communication medium?",
        
            "i   Brainstorming to identify test project and item under test risks",
            "ii  Informing offshore testers about incident status updates",
            "iii Informing stakeholders of weekly test status",
            "iv  Informing the Project Manager about test suspension due to test environment failures",
            "v   Communicating internal test conference dates for the next year",
            "vi  Reporting an incident to a specific developer"`,
            options: [
                "A",
                "B",
                "C",
                "D"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: "./imagenes/tabla preg19.png"
        },
        {
            "question": "A multi-purpose testing tool, MULTI-TOOL, is used within your organization to support all testing projects. It includes test management, incident management, and support tools for dynamic testing. However, the clients of a new major project use the incident management tool INCITOOL and require this tool to be used for this project. It has been suggested that INCITOOL be integrated into MULTI-TOOL and replace the current incident management functionality.\n\nWhich of the following activities is LEAST likely to be performed in response to this suggested change?",
            options: [
                "A contract will be signed to make the client a co-owner in the maintenance of the integrated INCITOOL data and functionality.",
                "An impact analysis will be performed to determine which users will be affected by the change and to what extent.",
                "An analysis will be carried out of the technical feasibility of the change and the available staff capabilities to perform the change.",
                "The migration of the MULTI-TOOL incident database to INCITOOL will be studied to determine if this is possible without compromising the quality of the original data."
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 5: Testing for TransGlobe\n\n The IT company EO-IS (ExtraOrdinary-ItServices) provides IT services to a global transportation company, TransGlobe. The integrated systems, for which EO-IS provides services, consist mainly of a customer system, an order system, a cargo schedule planning system, a cargo document handling system, and a billing system, along with interfaces to 15 other systems.\n\n The EO-IS project team is located in a location in a European country near TransGlobe's headquarters and consists of 108 developers, testers, business analysts, specialists, and management. It is organized as a program with four projects delivering major releases and a maintenance team delivering small versions of defect fixes and urgent changes.\n\n In the annual contract renegotiation, TransGlobe has demanded lower IT costs and more frequent releases of system changes and new functionality from EO-IS. To meet these demands, EO-IS has proposed the following:\n - A transition of 2/3 of the project from the current location in Europe to an offshore location in Asia.\n - System integration will continue to be performed by the teams at the European on-site location.\n - Requirement clarification performed by business analysts and client representatives will continue to be carried out by the teams at the European on-site location.\n - The replacement of the cargo schedule planning system will be developed and tested by an external vendor, FS_Planner.\n\n You are the Test Manager and have been involved, along with the program management group, in planning the changes. The objectives related to testing are to reduce the total size of the test team by 20%, build an offshore test team consisting of 10 testers, including a team leader, and maintain a small on-site test team consisting of six testers. You have required that testers in the new offshore team have at least one year of experience and be ISTQB Foundation level certified testers.\n\n The test strategy will be risk-based using a mix of requirements-based testing, regression testing, and consultative testing.\n\n The offshore test team will follow a consultative testing strategy during the first year, where a senior business analyst and a senior tester from the on-site team act as advisors. During the first year, the offshore team will perform manual regression testing, while on-site test automation specialists will finalize a keyword-driven test automation framework and automate a selected subset of the manual regression tests, which the offshore team must deliver to the on-site team.",
            options: [
                "A"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "21. Scenario 5 “Testing for TransGlobe” provides the context for this question. As Test Manager at IO-IS, you have drafted an induction training program for the new testers on the offshore team.\n\nSelect the three options that are LEAST likely to be included in your draft.",
            options: [
                "Training on the use of TransGlobe systems and familiarization with project documentation",
                "Training on the use of debugging tools for web applications",
                "Training on standard testing fundamentals",
                "Review of the testing model and testing procedures used by IO-IS",
                "Overview and sample review of existing regression tests",
                "Introduction to Java and review of selected Java modules",
                "Training on the use of test management and defect management tools used by IO-IS"
            ],
            correctAnswer: 5, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Analyze the scenario to determine the appropriate level of testing required from the on-site test team in relation to the cargo schedule planning system provided by FS_Planner.\n\nWhich three of the options will most likely be chosen?",
            options: [
                "Component-level regression testing",
                "Integration-level regression testing",
                "User acceptance testing",
                "Manual system-level regression testing",
                "System integration testing",
                "Automated system regression testing",
                "Hardware and software integration testing"
            ],
            correctAnswer: 1, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": `Scenario 5 “Testing for TransGlobe” provides the context for this "question". Plans have been made for the offshore test team to visit the on-site team at the location. As Test Manager, you will plan some team-building activities.\n\nWhat would you most likely include in a team-building activity plan that can help improve communication and build team spirit between the offshore and on-site teams?",
       
            "Go out to dinner together at restaurants with local and Asian food",
            "Role-play to address sexual harassment and inappropriate behavior situations that have occurred",
            "Organize group brainstorming sessions on what communication media are good for different situations.",
            "Group work on cultural differences based on lists of items created from the Internet or external consulting assistance",
            "Group work on religious differences based on the beliefs of each team member",
            "Set up an intranet page for the combined team and get team input on content",
            "Conduct sessions to familiarize everyone with the different work schedules, salary ranges, and holidays"`,
            options: [
                "i, iii, iv,vi ",
                "i, ii, iii, vi ",
                "iii, iv, v, vii  ",
                "I, ii, iii, iv "
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 5 “Testing for TransGlobe” provides the context for this question. The offshore on-site delivery manager has defined S.M.A.R.T. objectives for the developers and testers of the offshore teams working for IO-IS on TransGlobe systems.\n\nYour task as Test Manager is to review and comment on the objectives related to offshore testers.\n\nWhich two of the following items do you consider most appropriate as S.M.A.R.T. objectives in relation to the defined test strategy for the first year of transition?",
            options: [
                "Able to prevent 98% of all regression defects from escaping to production after three months",
                "Able to design test cases without consulting senior on-site business analysts and senior on-site testers after four months",
                "Able to create automated regression test scripts after six months",
                "Able to operate all standard functions of the test management and defect management tool after two weeks",
                "Able to execute 90% of manual regression tests after three months"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ""
        },
        {
            "question": "Scenario 5 “Testing for TransGlobe” provides the context for this question.\n\nAdditional Information:\nNine months have passed and you, as Test Manager, are making plans for the second year of transition of testing from the on-site team to the offshore test team. You have decided to transfer responsibility for system regression test automation and the test automation framework to the offshore team.\n\nOf the offshore team of 10 testers, the team leader has been transferred to another project and another experienced tester has left the company due to relocation after marriage. You have received the following tabulated resumes from the offshore delivery manager to evaluate the open job positions: For the vacancies, evaluate the given resumes and the scenario and additional information and determine the best candidates.\n\nProvide the following:\n1. Give your overall assessment of the tabulated resumes and argue to what extent they offer a realistic and reliable coverage of skills and knowledge level.\n2. Which of the candidates do you evaluate as the best option for team leader, and what is the justification for your choice based on the resumes?\n3. Which of the candidates do you consider to be the best option for the other open job position, and what is the justification for your choice based on the resumes?\nDescribe the additional information about the candidates (not already covered in the resumes) that needs to be collected through an interview. Describe what you believe are effective approaches to use in these interviews.",
            options: [
                "d"
            ],
            correctAnswer: 0, // Adjust according to the correct answer
            urlImage: ["./imagenes/tabla1 preg25.png", "./imagenes/tabla2 preg25.png"]
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