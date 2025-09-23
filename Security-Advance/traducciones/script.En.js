const data_en = {
    questions: [
        {
            "question": "Which of the following is a purpose of a security audit?",
            options: [
                "Prevent users from using simple passwords",
                "Reveal insufficient patch updates provided by the vendor",
                "Stop unauthorized intruders from accessing the system",
                "Require users to change their password after a certain number of days"
            ],
            correctAnswer: 1, // The purpose is to reveal weaknesses in patches or security configurations
            urlImage: ""
        },
        {
            "question": "You are responsible for ensuring that new external vendors comply with government guidelines as part of risk assessment. Which stakeholders should you primarily focus on to ensure compliance of external vendors?",
            options: [
                "Customers, users, and suppliers to ensure good communication between them",
                "Public users and suppliers who will follow the law according to the information source",
                "Federal and local agencies that communicate the guidelines to follow",
                "Internal and external sources that will use the information to analyze risks"
            ],
            correctAnswer: 2, // Government agencies are the focus to ensure regulatory compliance
            urlImage: ""
        },
        {
            "question": "Which of the following is a consequence of a policy that minimizes access to a system or device to acceptable levels?",
            options: [
                "More devices are added to mitigate the impact",
                "Proper controls for self-provisioned devices like routers are prohibited",
                "Non-compliant devices are removed from the wireless network",
                "VPN access is severely restricted"
            ],
            correctAnswer: 2, // Removing non-compliant devices is a common action in access controls
            urlImage: ""
        },
        {
            "question": "As a Security Administrator, you must help your organization understand the effectiveness of security policies and procedures. You will report your findings to Senior Management once the analysis is complete. What is the best strategy to achieve this?",
            options: [
                "Implement an independent static analysis evaluation for policies and procedures",
                "Analyze the results of a security test to validate effectiveness",
                "Evaluate security test results that focus on current threats and attacks",
                "Evaluate static test results for emerging software threats"
            ],
            correctAnswer: 1, // Validating with practical tests is more effective and accurate for reporting results
            urlImage: ""
        },
        {
            "question": "If an organization experiences a security breach and it results in legal action, how does having performed security testing help the organization?",
            options: [
                "It can demonstrate that the organization has done due diligence to try to prevent such an incident.",
                "The security testing documentation can be used to track the perpetrator.",
                "Since any important information would have been backed up prior to security testing, this backup can be used to restore any compromised information.",
                "By tracing through the documented tests, the security testing team can discover how the breach was possible."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Which of the following is a correct statement?",
            options: [
                "Information assurance is part of security testing.",
                "Information assurance and security testing are two terms for the same thing.",
                "Security testing is part of information assurance.",
                "The two terms refer to different areas of security."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": `You are working at a bank as part of the security testing team. During a recent security audit, it was observed that user passwords were not strong enough. Since then, a new set of requirements has been issued to ensure password strength. Given this information, what would be a reasonable set of security objectives for general password rule testing?\n
        
            1. Verify that passwords meet length requirements.\n
            2. Verify that passwords meet character, number, letter, and capitalization usage requirements.\n
            3. Verify that passwords can be attempted three times.\n
            4. Verify that passwords cannot be reused within a one-year period.\n
            5. Verify that passwords must be reset every three months.\n
            6. Verify that the user can request their password to be sent by email.\n
            7. Verify that the system administrator can reset a locked password`,
            options: [
                "1, 2, 3, 4",
                "1, 2, 4, 5",
                "3, 4, 6, 7",
                "4, 5, 6, 7"

            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Your company recently made headlines after a security breach resulted in the theft of sensitive customer information. Management has reacted with an edict that the scope of security testing objectives needs to be immediately expanded. While you agree that something needs to be done, you are concerned that this approach may be too reactive and not result in the necessary testing. According to the curriculum, what is a reasonable concern if these initiatives are implemented?",
            options: [
                "Tests will still miss problems because they will not be well-focused.",
                "Tests will be outsourced so that they can be performed more efficiently.",
                "The scope of testing may be too large and there may not be adequate resources to complete it.",
                "Test objectives are not clearly defined and may miss the same problems that previously escaped into production."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "You have just accepted a job to create a security testing team for a company that handles sensitive medical information shared between doctors and hospitals. You have noticed that the security around this information is not sufficient to protect it from hackers or even accidental exposures. The person who had your job previously brought in several consultants to do testing, but the findings were not documented and no changes were implemented. In fact, you don't even know what the test coverage was. You have presented your findings to the executive management team. Although they have agreed in principle that they need security testing, they have not allocated the necessary budget or time for the project. It seems that, although they think security is a good idea, they don't really understand what needs to be done or how it should be done. What should be your first step to align executives with the work that needs to be done?",
            options: [
                "Create a detailed list of all possible security holes and present them to the executives.",
                "Provide a summary of your proposed testing approach and give examples of how the tests will be conducted.",
                "Involve the legal team to explain what a security breach could cost the organization.",
                "Create a security policy and a security testing policy and demonstrate how they align with your proposed testing approach."
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "You have just left a meeting where there was much discussion about the organization's security approach. One of the points of emphasis was the importance of testing to ensure that data is protected from fraudulent access, particularly credit card information. You have been asked to prepare a set of testing objectives that will help address this risk area. One of your tasks is to ensure that you are covering all stakeholder concerns. Which stakeholder group is most likely to see the benefits of your efforts?",
            options: [
                "Executive management.",
                "Compliance officers.",
                "Business customers.",
                "Regulatory officers."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "As a Security Administrator, you are responsible for all aspects of the security process, including testing. For this particular process, you must use conceptual tests as a basis for manual tests and execute them from the perspective of an external vendor. Which security testing process most closely resembles this?",
            options: [
                "Creation of security test conditions and objectives.",
                "Implementation of security tests.",
                "Overall evaluation and reporting of security tests.",
                "Analysis and design of security tests."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "You have been developing a security test plan for a system that will store sensitive patient medical information and transfer that data to specialist doctors. You have covered the following areas in your plan: \n• Scope (what is in and out of scope) \n• Roles and assignments \n• Responsibilities (vendors vs. internal) \n• High-level schedule \n• Environment requirements and configuration \n• List of necessary authorizations and approvals \nWhat information do you still need to provide in this test plan to meet the minimum requirements as indicated in the curriculum?",
            options: [
                "A list of the credentials and training required for the personnel who will perform the tests.",
                "A schedule showing the time that will be required to design, execute, and evaluate the security tests.",
                "A copy of the regulatory standards that this system must comply with.",
                "A list of the people who will perform the tests and their contact information in case of a security breach."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Which of the following test cases would best test a system's security procedure?",
            options: [
                "Three failed login attempts will generate a lockout message. Contact your manager or the System Administrator to be given a temporary password by phone. You must change the temporary password upon logging in. You log out and then log in again using your newly created password.",
                "You receive a lockout message after several login attempts. You call technical support for a new password. You log in with the temporary password, log out, then log in again and enter a new password.",
                "After several attempts, you are locked out of the system. You use a password that worked previously. However, it no longer works. You try to create a new password, but now you are locked out. A full machine reboot is the next step to bring you to the re-enter password prompt.",
                "After the first attempt to use an invalid password, you immediately open a list of passwords in your notepad on your PC to ensure you are using the correct one. You try another password from the list and it works."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "Which of the following are the main characteristics of an effective security test environment?",
            options: [
                "Closely linked to production systems to improve security at all points.",
                "Isolates different old versions of operating systems for use in the environment.",
                "Mimics the production environment in terms of access rights.",
                "Includes all production environment plugins, as well as other plugins not in the production environment to ensure the most complete configuration."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "What is a significant concern when seeking approval for security testing tools?",
            options: [
                "Some countries prohibit the use of certain security testing tools.",
                "Ensuring that the approval process for security testing tools can be circumvented based on exceptions in cases where a malicious event is in progress.",
                "The risks of the tool are rarely known before it is acquired and are best discovered when the tool is in use.",
                "Because the risks of security testing tools are generally known, there is no need for a mitigation strategy."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "You are reviewing a set of security test results performed on a product that is undergoing final testing before its release to production. This is an update to a version currently in production. The application just tested was your e-commerce site, and it has a defect that allows cross-site scripting (XSS). Which of the following is the appropriate set of steps you should follow?",
            options: [
                "Report the issue to the developer, add it to the stakeholder report, and continue testing for other types of defects.",
                "Test if the issue exists in the current production version, document the defect in a secure system, notify the developer, and continue testing for other XSS defects.",
                "Investigate the extent of the problem by performing more tests on the planned version with particular concentration on other XSS issues, perform a static analysis of the code.",
                "Inform management, document the defect, and include it in your weekly status report to stakeholders, continue testing for other security defects to determine the extent of security problems."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "At what point in the SDLC (Software Development Life Cycle) should there be a check to ensure that proper secure coding practices have been followed?",
            options: [
                "Component testing.",
                "Integration testing.",
                "System testing.",
                "Security acceptance testing."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "You have been asked by the business analyst to help define the requirements for the security aspects of a system. This is a security-critical system that stores sensitive patient medical information and supplies this information to healthcare professionals in hospitals, doctor's offices, and ambulances. At what point in the lifecycle should security requirements be documented and to what level of detail?",
            options: [
                "They should not be formally documented due to the need to protect the security implementation within the code from outsiders.",
                "They should be documented in a detailed and unambiguous manner in the requirements documents during the requirements phase.",
                "They should be documented during the design phase when the code approach is known, rather than in the requirements phase when the approach is not known.",
                "They should be restricted to the functional requirements of access and availability from the user's perspective and should be documented during the requirements phase."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "A deficiency has been discovered in production. If an unauthorized user copies a URL from an authorized user's session, the unauthorized user can paste the URL into their session and continue processing with the authorized user's rights. In the reported case, the unauthorized user was able to use the authorized user's URL to change the system's administration password. To close this gap, developers will check the session ID and user ID every time a URL is used. What is a realistic concern for this solution?",
            options: [
                "It will not solve the problem and session hijacking will still be possible.",
                "It will solve the problem, but usability may be negatively affected.",
                "It will solve the problem, but performance may be negatively affected.",
                "It will not solve the problem and will expose a new vulnerability with session IDs."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "During component-level testing, why should the security tester review compiler warnings?",
            options: [
                "Because these indicate security problems that need to be fixed.",
                "Because these indicate potential problems that need to be investigated.",
                "Because these indicate coding problems that will cause functional defects.",
                "Because these indicate bad programming practices that will increase maintainability."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "You have been testing a system that has 20 defined components. You have performed extensive security tests on each of the components. The system is now ready to move to component integration security testing. How should you approach this test?",
            options: [
                "Since component integration testing is concerned with the sum of the vulnerabilities of individual components, performing the same tests on the integrated components is the best approach.",
                "The main risk is now in the integration of the components themselves, so tests should cover each interface and verify that there are no vulnerabilities in the interfaces and the components should also be retested.",
                "New vulnerabilities are likely to be present with the integrated components, as well as with the larger system and infrastructure that are now likely, so testing should expand to include these new areas.",
                "Since the components are now integrated, security risks will be reduced because possible interactions are now limited, so only integration points should be tested and components do not need to be retested."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "You are creating security test cases to verify SQL injection in an input field that allows up to 5 alphanumeric characters. You are planning to apply equivalence partitioning to reduce the number of test cases you will need to execute. Given this information, which of the following is the minimum set of inputs you would need to use to test this field?",
            options: [
                "bbbbb, 12345, ‘",
                "%, ‘, @, ab123",
                "‘, ab123",
                "‘"
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "You have been given the following requirement for security testing. A user will be able to request their password. If they make this request, they must correctly answer two of their three security questions. If they answer correctly, a link will be sent to their email. The link will take them to a page where they can reset their password. Once reset, they will be able to log in with the new password. The link must be deactivated 1 hour after being sent. The user can only make two password requests without a reset, after which they will need to call support. For any other error, the user ID is locked and must be unlocked by support. Which of the following is the minimum list of test conditions to adequately test the functional security covered by this requirement?",
            options: [
                "Invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; valid link; expired link; two requests without reset; three requests without reset.",
                "Valid user; 2 correct answers; good email; reset with good password; valid link; two requests without reset.",
                "Invalid user; 2 incorrect answers; bad email; reset with bad password; expired link; three requests without reset.",
                "Buffer overflow in each input field; SQL injection in each input field; XXS on the login page and on the password reset page; invalid user; valid user; 2 correct answers; 2 incorrect answers; good email; bad email; reset with good password; reset with bad password; valid link; expired link; two requests without reset; three requests without reset."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": `A user will be able to request their password. If they make this request, they must correctly answer two of their three security "question"s. If they answer correctly, a link will be sent to their email address. The link will take them to a page where they can reset their password. Once reset, they will be able to log in with the new password. The link must be deactivated one hour after being sent. The user can only make two password requests without a reset, after which they will need to call support. For any other error, the user ID is locked and must be unlocked by support. Which of the following is a valid set of acceptance criteria for this requirement?\n
        
            1. The user can reset the password if fewer than three requests have been made since the last reset, and two security "question"s are answered correctly, and the link is used to reset and a valid password is entered at the reset prompt.\n
            2. More than two requests result in the user ID being locked.\n
            3. More than two requests without a reset result in the user ID being locked.\n
            4. More than two failed security "question"s result in an error.\n
            5. More than two failed security "question"s, the user ID is locked.\n
            6. If an email error is received by the system, the user ID is locked.\n
            7. If an invalid password is entered at the reset, the user is prompted with the appropriate rules.\n
            8. The reset password can be used to log in to the system.`,
            options: [
                "1, 2, 4, 6, 7, 8",
                "1, 2, 3, 4, 5, 6, 7, 8 ",
                "3, 5, 6, 7, 8",
                "1, 3, 5, 6, 8"
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "You are implementing procedures to evaluate system hardening in an effort to test the effectiveness of system security. What procedure could you follow to ensure that the implemented hardening mechanisms are working as expected?",
            options: [
                "Closely monitor various security performance reports and metrics to determine if the correct level of access and authentication is achieved.",
                "Frequently audit strong authentication to ensure that a high level of intrusion protection is maintained at all times.",
                "Evaluate hardened hardware components and compare them with other hardened software components to ensure a balance is being achieved.",
                "Hire a known hacker to perform an independent evaluation of hardening effectiveness."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "What are the key attributes of security authentication for a medium-complexity computer system?",
            options: [
                "Verifies that the user has the correct profile and corresponding rights to access limited parts of the system.",
                "It is key to identifying the amount of system resources the user can utilize.",
                "Verifies that the user entering the system is legitimate.",
                "Uses common credentials among users to access the system."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Typical encryption mechanisms are vulnerable to threats, making it important to understand their effectiveness at any given time. Identify which of the following you should implement to gain confidence in your encryption mechanisms.",
            options: [
                "Evaluate cryptographic keys to ensure they are at least 256 bits in size.",
                "Ensure that you are applying random algorithms to generate random numbers where possible.",
                "Develop tests that ensure symmetric encryption is used in the correct modes.",
                "Remove all WEP protocols to see how the system performs."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "What is the truth about the relationship between a firewall and a network zone?",
            options: [
                "Both a network zone and a firewall focus on the size of the data being transmitted.",
                "A network zone communicates through secure protocol options, while a firewall ensures those protocols are secure.",
                "A subnet can be considered a network zone and a firewall can be traffic monitoring software.",
                "A network zone blocks malicious traffic from an untrusted zone, which the firewall does not filter."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Which of the following would you apply to most effectively test the capabilities of an intrusion detection tool?",
            options: [
                "Develop a series of scenarios based on past experiences.",
                "Use tests that generate malicious traffic to add new intrusive specifications.",
                "Apply it to known malicious traffic situations.",
                "Use it in conjunction with other IDS products when possible."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Which of the following is a major disadvantage of malware scanning tools?",
            options: [
                "They only detect certain levels of malware.",
                "They can only detect malware that is known to the tool.",
                "They tend to be excessively complex to execute.",
                "They do not provide update and reporting capabilities."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "You need to remove personally identifiable information from a legacy system to reduce risk during testing. Part of your data obfuscation plan includes verifying how effectively the information is masked. Which of the following is the most effective way to do this?",
            options: [
                "Manually verify in the database that the data intended for obfuscation is no longer comprehensible for human logical interpretation.",
                "Design a brute-force attack on the obfuscated data.",
                "Substitute sensitive data with random data of varying string lengths.",
                "Involve development teams to generate a program that stresses the database to detect vulnerabilities."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "What is often considered the weakest link in software security?",
            options: [
                "The lack of a consistent and comprehensive security training plan.",
                "The effort required to keep documents and procedures updated to deal with continuous security threats.",
                "The behavior of humans.",
                "The constant advancement in malicious techniques."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Which of the following is a potential security risk?",
            options: [
                "Publishing the accounting department's organizational chart on the company website.",
                "Posting birthday wishes for a coworker on Facebook.",
                "Publishing the company phone directory on the company Intranet.",
                "Posting professional experience on a LinkedIn profile."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "You are responsible for security testing your company's financial application. You recently received an email from a person claiming to have hacked the system using Shodan and discovered that you are running an outdated and vulnerable operating system on one of your servers. You have verified and the hacker is right. You have ensured that the server has been updated. Your preliminary verification has shown no trace of how the hacker entered your system. Should you be concerned?",
            options: [
                "No, this is a 'white hat' hacker and means no harm to your company.",
                "No, you have fixed the vulnerability, so the system is now secure.",
                "Yes, your security tests are not sufficient and you need to re-run your tests to see what was missed.",
                "Yes, since the hacker did not admit how they entered the system, they may still have access and may decide to exploit the vulnerability next time."
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Why is an attack from within the organization particularly concerning?",
            options: [
                "The attacker is probably driven by curiosity and will not stop.",
                "The attacker is probably bored at work and will continue hacking the system for entertainment.",
                "The attacker is already inside the firewall and is an authorized user of the system.",
                "The attacker will probably launch a DOS attack that will cripple the servers."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "You are working in an organization where system administration access to servers is highly restricted. Only three trusted long-term employees know the root passwords. However, recently there have been several strange occurrences. An unknown program, called 'IKnowYourBirthday', was found running and sending birthday greetings to staff members. The birth dates were correct and the greetings were all signed 'From your favorite server'. This program was stopped and no one could figure out where it came from. A second problem occurred when the corporate phone list was hacked and all phone numbers were changed to 867-5309 (apparently taken from the song of the same name). The correct list was restored and again no one could figure out how it had been done, although the new file had been created by 'root'. You have just received a phone call from the main system administrator telling you that the root password has been changed. It has been determined that the password was set to the main system administrator's dog's name. Further investigation has discovered that the problems began shortly after a series of virus-infected emails were detected. When the first one was found, safeguards were immediately implemented to stop any further spread of the virus, but now you wonder if someone managed to get into the system through the code that was introduced into the system by the virus. What should be your next investigation step?",
            options: [
                "Verify if HR birth date information was accessed from outside the system, and if so, trace the IP address.",
                "Verify if the main system administrator's dog's name is published on any social media.",
                "Review the suspicious email that was sent and try to trace the IP address.",
                "Review the personnel files of the other two system administrators to see if there is any indication that they are unhappy."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "During an update test, you have discovered that it is possible to create a man-in-the-middle attack that can change the amount charged to customers on your e-commerce website. Your tester managed to change the amount so that all customers received a 10% discount. What should you do first?",
            options: [
                "The tester should be discouraged from creating these types of attacks, as they are not realistic in the production environment.",
                "Immediately inform management that the attack was created by the testing team as part of testing, in case it is detected.",
                "Work with developers to implement checks like SSL-trip to ensure that certificates are valid and not self-signed.",
                "Verify in production if the vulnerability is also in the production code."
            ],
            correctAnswer: 3,
            urlImage: ""
        },
        {
            "question": "Why is it important to frequently re-evaluate security risk expectations?",
            options: [
                "Stakeholders should be educated about all security risks at all times.",
                "Stakeholders will make business decisions based on associated security risk levels.",
                "Users should develop a risk mitigation plan based on manuals.",
                "Both user and stakeholder expectations regarding security should remain unchanged."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "Which of the following is an important aspect of security test results?",
            options: [
                "They are published for users and stakeholders to access to help them better understand the risk.",
                "They should be shared with developers across the company to mitigate risk in future development projects.",
                "The fewer people who know, the better.",
                "Results should always be classified by criticality."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "You are finalizing your security test status report for a project that is ready for production deployment. There is a high degree of risk for this project due to the nature of the system. As a result, you want to put particular emphasis on risk. Based on this, what is the best way to articulate risk in your report?",
            options: [
                "A descriptive risk assessment included in the summary.",
                "Overall risk included in the last section of the report.",
                "Risk impact described in the summary and then detailed in terms of specific vulnerabilities.",
                "Risk impact is not part of the report summary."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "How do dynamic security analysis tools differ from general dynamic analysis tools?",
            options: [
                "Security tools are those that examine the system rather than just the application under test.",
                "Security tools work the same in dynamic or static mode.",
                "Security tools are better suited to detect problems like memory leaks.",
                "Security tools must be adapted to the language in which the application is implemented."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "You have been assigned the task of testing the organization's firewall. You have reviewed the implementation plan and steps, verified that the configuration has been set according to the firewall vendor's instructions, and performed a port scan. Your organization is particularly concerned about denial-of-service (DOS) attacks, especially since they had one when the old firewall was in operation. What type of tests should you perform to help detect unexpected behaviors that could be exploited by a DOS attack?",
            options: [
                "Create tests that send malformed network packets or fuzzed data and see if they are detected and rejected by the firewall.",
                "Implement automated tests to stress test the servers and test failover capabilities.",
                "Test encryption and decryption algorithms to determine if they are fast enough to handle the load of a DOS attack.",
                "Perform software component hardening to ensure that the attack surface is reduced as much as possible."
            ],
            correctAnswer: 0,
            urlImage: ""
        },
        {
            "question": "If you have acquired a tool that is used under the GNU General Public License, which of the following is an important consideration for tool maintenance?",
            options: [
                "Vendor reliability and ability to provide support.",
                "Frequency and availability of vendor updates.",
                "Technical capabilities of your team to support and customize the tool for your environment.",
                "License cost and support contract cost."
            ],
            correctAnswer: 2,
            urlImage: ""
        },
        {
            "question": "Which of the following is a benefit of conforming to security testing standards?",
            options: [
                "They are consistent and easy to follow as they are independent of project objectives and goals.",
                "They are the building blocks for future security tests, eliminating the need to start from scratch.",
                "They describe an effective offense to address threats before they enter the system.",
                "They allow some flexibility in security practices as threats are always dynamically changing."
            ],
            correctAnswer: 1,
            urlImage: ""
        },
        {
            "question": "What are the advantages of imposing security standards in contracts?",
            options: [
                "They provide each party with a legal out when an unforeseen security issue negatively affects the product.",
                "They provide a starting point for both parties to begin their negotiations.",
                "They are a convenient way to make the agreement between the parties public.",
                "They can change as standards change, even when the contract is finalized."
            ],
            correctAnswer: 1,
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
