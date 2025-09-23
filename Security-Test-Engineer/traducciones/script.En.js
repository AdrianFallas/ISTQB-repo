const data_en = {
  questions: [
    {
      "question": "Which of the following options BEST describes the asset security level in terms of integrity?",
      options: [
        "Only authenticated users should have access to modify files and applications.",
        "Only file owners can modify data to establish proper integrity.",
        "The history of unauthorized attempts must be kept for two years.",
        "Establish a process that allows users to access data without modification when needed."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following is an appropriate alternative to describe how security testing can confirm that the confidentiality of sensitive information is protected?",
      options: [
        "Verifies that adequate controls exist to prevent unauthorized access to confidential information.",
        "Verifies that adequate controls exist to ensure that only authorized updates are made and that all data remains reliable.",
        "Verifies rapid recovery mechanisms to restore services after an incident.",
        "Verifies that the organization's incident response is effective, minimizing damage and downtime."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following options BEST describes a security audit?",
      options: [
        "Systematic evaluation of security tests and the overall security strategy throughout the organization.",
        "Systematic evaluation of information system security by measuring how it conforms to a set of established criteria.",
        "Systematic evaluation to stop unauthorized intruders from entering the system.",
        "Systematic evaluation to reduce risks by identifying vulnerable hardware and software."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which of the following options describes the concept of Zero Trust?",
      options: [
        "Any user requires continuous verification of their identity regardless of their location.",
        "Any device and user with access to the system is considered trusted by default.",
        "Only devices within the trusted network have access to the systems.",
        "All users receive the level of access they need."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which of the following actions would verify that the Zero Trust concept has been correctly implemented?\nSelect TWO options.",
      options: [
        "Implement controls that verify each access request to sensitive resources.",
        "Always trust access requests initiated by non-human service accounts.",
        "Verify that access logs have a permanent timestamp of all activities.",
        "Implement standard permission sets based on user roles and responsibilities.",
        "Focus on external network access controls instead of specific applications, resources, and data."
      ],
      correctAnswer: [0, 2],
      urlImage: ""
    },
    {
      "question": "When using open-source software, which of the following is NOT a critical factor for addressing security concerns?",
      options: [
        "Alignment with OWASP and active security audits by contributors.",
        "Frequency and availability of security patches and updates.",
        "Team's ability to manage and customize the tool for their environment.",
        "Licensing requirements and compliance with open-source security guidelines."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You have been called by a bank to perform security tests in a pre-production environment before deployment. What would be the best approach?\nSelect TWO options.",
      options: [
        "Execute white-box tests to cover all source code and ensure no defects remain.",
        "Execute gray-box vulnerability scanning to identify potential exploitable vulnerabilities.",
        "Execute black-box fault injection tests to find vulnerable entry points.",
        "Verify that secure coding rules have been applied using static analysis tools.",
        "Check if vulnerabilities detected in white-box can be exploited."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "As a security test engineer, what approach would you follow to apply static testing techniques?",
      options: [
        "Verify that secure coding rules were applied, that the design followed good security-by-design practices, and that security requirements are complete.",
        "Verify coding rules, compile the application, and execute SQL injections.",
        "Verify security requirements, then security in design, and then secure coding rules.",
        "Verify that the set of security requirements is relevant and execute boundary value tests on the built application to prevent buffer overflows."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "You have been given a security requirement to test password reset. What is the minimum list of conditions you should test?",
      options: [
        "Invalid user; valid user; 2 correct answers; 2 incorrect answers; full reset; valid link; expired link; two requests without reset; three requests without reset.",
        "Valid user; 2 correct answers; 3 correct answers; full reset; valid link; two requests without reset.",
        "Invalid user; 2 incorrect answers; expired link; three requests without reset; invalid characters.",
        "Valid and invalid user multiple times; 2 correct answers; 2 incorrect answers; overflows in each field; SQL injections."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You are responsible for identity and access management. What security testing techniques should you plan?\nSelect TWO options.",
      options: [
        "No testing required because accounts and rights were managed.",
        "Review employee role permissions that changed departments.",
        "Test roles and privileges assigned to new employees.",
        "No testing required because new employees have basic privileges.",
        "Verify if access to new applications works correctly."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Which CORRECTLY describes security testing techniques for authentication mechanisms?",
      options: [
        "Examine whether users can manage resources according to their roles.",
        "Verify default credentials and evaluate password strength requirements.",
        "Verify permission levels by analyzing profiles.",
        "Monitor user activity logs during the login process."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Which BEST describes how to test data protection controls?",
      options: [
        "Evaluate encryption compliance, access controls, and data masking.",
        "Exclusively measure the speed and efficiency of protection measures.",
        "Examine how users interact with on-screen security features.",
        "Analyze data storage performance when security features are active."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "How could you evaluate if system hardening mechanisms are working as expected?",
      options: [
        "Monitor security performance reports to verify if access and authentication levels are adequate.",
        "Frequently audit robust authentication to ensure a high level of protection against intruders.",
        "Evaluate hardened hardware components and compare them with software components to ensure a balance.",
        "Hire a known hacker to perform an independent evaluation of hardening effectiveness."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You must use high-level tests as a basis for manual tests from an external vendor's perspective. What security testing task can be performed in parallel?",
      options: [
        "Creation of test conditions and objectives.",
        "Implementation of security tests.",
        "Overall evaluation and reporting of security tests.",
        "Analysis and design of security tests."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "What is a main characteristic of an effective security test environment?",
      options: [
        "Closely linked to production systems to improve security.",
        "Isolates old operating system versions for use in the environment.",
        "Mimics the production environment in terms of access rights.",
        "Includes all production plugins and other additional plugins for a more complete configuration."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "During component testing, what type of compiler warning would most alert the security tester?",
      options: [
        "Warnings indicating security issues that need to be fixed.",
        "Warnings indicating potential issues that need to be investigated.",
        "Warnings indicating coding issues that will cause functional defects.",
        "Warnings about bad practices that will increase maintenance difficulty."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "Components A and B communicate via a REST API. What is an example of an integration level security test?",
      options: [
        "Test data encryption during API calls between A and B.",
        "Test if A can call B's API.",
        "Test if external components come from trusted vendors.",
        "Test response time between A and B."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which procedure BEST describes end-to-end testing for failed login attempts?",
      options: [
        "Before executing, use a password generator to change it. Log in, log out, log in again, and receive a lockout message after 3 failed attempts.",
        "After several failed attempts, receive a lockout message and get a temporary password by email. Log in with it, log out, and then set a new password.",
        "After several failed attempts, request a link to change the password. Use the old one and have the system accept it.",
        "Try an invalid password, look for another password in the notepad, and have it work."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": `You are working as a test manager at a bank that is developing a new online banking application. The application will handle sensitive customer data and financial transactions. You have been asked to perform security tests for this new application. There are no explicit requirements, so you select your own test cases based on standards and best practices.\nWhich THREE of the following statements best guide you in selecting test cases?\n"
     "Standards are a valid input as they are approved by a recognized body of knowledge.\n"
    "Standards can be classified into industry standards, de facto standards, and manufacturer-specific standards. Industry and de facto standards are valid; manufacturer-specific ones might not fit the context.\n"
    "Since standards are mandatory, they are a valid input as they must be applied in all environments.\n"
    "Best practices are not a valid input as they are often at a very high level.\n"
    "De facto standards are a good input as they often originate from industry standards."`,
      options: [
        "i, ii, and V",
        "i, ii, and iii",
        "ii, iii, and v",
        "iii, iv, and v"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "A bank requests a black-box pentest on its new app. How can you leverage standards?\nSelect TWO options.",
      options: [
        "Select relevant weaknesses from the CWE standard and execute the listed cases.",
        "Select weaknesses from CWE, choose available exploits, and apply them.",
        "Prioritize CWE using CWSS and select CVEs that cover them.",
        "Prioritize CWE using CVSS and derive related cases.",
        "Derive cases from CVE for the app and execute them."
      ],
      correctAnswer: [2, 4],
      urlImage: ""
    },
    {
      "question": "When using test oracles from standards and best practices, what should you consider?",
      options: [
        "They are valid regardless of application parameters.",
        "They can only be used as fuzzy clues in security testing.",
        "They cannot be used in security testing.",
        "The less specific the context, the more efficient it is to reuse these oracles."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Match artifacts with activities:\n1. Consistent nomenclature\n2. Expert knowledge\n3. Benchmarking\n4. Holistic security vision\nActivities:\nA. Easier communication\nB. Reuse expert knowledge\nC. Verify complete coverage\nD. Demonstrate test effectiveness",
      options: [
        "1-A, 2-B, 3-D, 4-C",
        "1-A, 2-B, 3-C, 4-D",
        "1-D, 2-A, 3-B, 4-C",
        "1-B, 2-D, 3-A, 4-C"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "How would you leverage organizational context to attack an industrial environment?\nSelect TWO options.",
      options: [
        "Infiltrate one of the most used suppliers.",
        "Simulate being an existing or potential supplier to obtain information.",
        "Send fake invoices with malicious content to the accounting department.",
        "Distribute infected USBs around the building.",
        "Perform brute force on the web server's SSH."
      ],
      correctAnswer: [1, 2],
      urlImage: ""
    },
    {
      "question": "Your company launches a new communication device for the aeronautical industry. What should be prioritized?",
      options: [
        "It is a regulated sector, therefore the product and process must comply with regulations.",
        "It must work in any country, although some frequencies may interfere.",
        "Tests must be executed quickly to launch the product soon.",
        "The team must have personal certification in radiocommunication."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "You find suspicious files during tests that were not created by the team or used by the app. How to proceed?",
      options: [
        "Continue the test and report at the end.",
        "Pause the test and send an informative email to colleagues with access.",
        "Stop the test and shut down the system immediately.",
        "Stop the test and follow the company's incident protocol. If none, report to the responsible person (e.g., Security Officer, CISO...).",
        "Stop the test and start an investigation according to internal policy."
      ],
      correctAnswer: 3,
      urlImage: ""
    },
    {
      "question": "Every attack is different. However, certain steps are common to almost all. How are they defined?",
      options: [
        "Information gathering, then exploitation/access gain, and finally persistence/access maintenance.",
        "Social engineering, followed by brute force attack, and then persistence.",
        "Exploitation/access gain followed by social engineering, and then trace cleanup.",
        "Information gathering, followed by trace cleanup, and then social engineering to establish a baseline."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which BEST describes how security testing should be implemented in the development cycle?",
      options: [
        "Each development activity must have a corresponding security test.",
        "Good threat analysis and security design can find most vulnerabilities.",
        "SAST and DAST must be executed in all phases of the development lifecycle.",
        "Security tests must be performed in all phases of the lifecycle to stay in sync with manual functional tests."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which statements best describe the impact of the development model on security testing?",
      options: [
        "The team can include a specialized team to perform security tests in any model.",
        "The waterfall model best supports security testing during development.",
        "DevOps offers better support for performing security tests during operations.",
        "It is easier to do security testing using Kanban than using Scrum.",
        "Security tests can be better planned using agile models than with the waterfall model."
      ],
      correctAnswer: [3, 4],
      urlImage: ""
    },
    {
      "question": "Which statement is true regarding security testing in the context of maintenance?",
      options: [
        "Confirming the satisfaction of all security requirements after the change.",
        "Executing the current regression suite on individual functions to verify the change.",
        "Looking for new vulnerabilities introduced by the change.",
        "Executing regression and confirmation tests after the change."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "Why should you analyze security test results?",
      options: [
        "To understand specific threats and risks based on assessments, audits, and standard sources.",
        "To translate conceptual tests into executable tests.",
        "To define an appropriate scope of tests based on risks.",
        "To close testing activities and maintain periodic tests that support new requirements and threats."
      ],
      correctAnswer: 2,
      urlImage: ""
    },
    {
      "question": "An internal penetration test based on OWASP Top-10 was performed. Which reasoning about accepting or rejecting the report is correct?\nSelect TWO options.",
      options: [
        "Accept, as it was performed by an internal colleague familiar with security guidelines.",
        "Reject, as acceptance criteria were not communicated or considered in the report.",
        "Accept, OWASP defines a general list of acceptance criteria.",
        "Reject, as security style guides should be tested with white-box tests.",
        "Accept, as OWASP reflects the system's security style guide."
      ],
      correctAnswer: [1, 3],
      urlImage: ""
    },
    {
      "question": "To maximize the efficiency and effectiveness of security tests, they must:\nSelect TWO options.",
      options: [
        "Be integrated into a general security process that minimizes risks and ensures continuity.",
        "Be applied annually to all IT systems used.",
        "Be used proactively to limit the impact of a security breach.",
        "Consider vulnerabilities communicated daily.",
        "Ensure that all vulnerabilities are fixed in less than 6 months."
      ],
      correctAnswer: [0, 2],
      urlImage: ""
    },
    {
      "question": "Dimensions a tester can use to improve the scope of the ISMS:\n1) Add test objects\n2) Add test techniques\n3) Improve test coverage using given objects and approaches\n4) Increase test execution automation\nWhich combination of actions and objectives is correct?",
      options: [
        "1-C, 2-A, 3-B",
        "1-B, 2-D, 3-B",
        "1-C, 2-A, 4-B",
        "2-D, 2-C, 4-A"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "How can ISMS measurement be improved with security tests?",
      options: [
        "Tests can be used as objective analysis in the Check step of the PDCA cycle.",
        "All tests generate quantifiable metrics that measure the effectiveness of the ISMS.",
        "The more security tests pass, the more effective the ISMS.",
        "The ISMS is more effective if more security testing techniques are used."
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Security test reports must be handled with high confidentiality. What type of data motivates this classification?",
      options: [
        "Tester's name, execution period, results (passed and failed cases).",
        "Environment used, pre-established conditions, data used, execution procedure, detected behavior.",
        "List of tested CVE vulnerabilities, developer names, identified development method and tools.",
        "Secure coding conventions, identified functional coverage, applied vulnerability scans."
      ],
      correctAnswer: 1,
      urlImage: ""
    },
    {
      "question": "You identify a possible vulnerability during a penetration test of a critical system. What should you do before requesting its mitigation?\nSelect TWO options.",
      options: [
        "Delimit the vulnerability by executing similar cases.",
        "Estimate mitigation effort using a detailed structure.",
        "Design the solution that mitigates the vulnerability.",
        "Adjust the risk by checking if it can be exploited in production.",
        "Immediately initiate vulnerability mitigation."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "You have identified a vulnerability with CVSS 9.8 that can be exploited in production. The app is critical. What is your recommendation?\nSelect TWO options.",
      options: [
        "Analyze if the specific affected functionality can be disabled.",
        "Block vulnerable traffic at the network layer using a firewall.",
        "Use a modern firewall that automatically mitigates the vulnerability.",
        "Add additional controls such as IP filtering or MFA to reduce probability.",
        "Directly repair the vulnerability as a quick and economical action."
      ],
      correctAnswer: [0, 3],
      urlImage: ""
    },
    {
      "question": "In a CI/CD environment, which step should be activated first in the new pipeline?",
      options: [
        "SCA",
        "SAST",
        "DAST",
        "IAST"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "Which methods scan the application during its runtime?",
      options: [
        "DAST",
        "Static analysis",
        "SCA",
        "SAST"
      ],
      correctAnswer: 0,
      urlImage: ""
    },
    {
      "question": "What objects can be scanned by static testing tools?",
      options: [
        "Configuration files",
        "Security design",
        "API endpoints",
        "Processes in RAM"
      ],
      correctAnswer: 0,
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
    "restart": "Restart"
  }
}
