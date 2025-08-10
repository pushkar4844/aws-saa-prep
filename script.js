// ===== Data (unchanged) =====
        const questions = [
            // Migration Questions
            {
                category: "migration",
                question: "Tell me how you approached a migration",
                complexity: "intermediate",
                round: "Technical",
                notes: "Focus on 3-phase approach: Assess, Mobilize, Migrate & Modernize",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "How did you choose migration strategy?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Discuss 7 R's of migration and decision framework",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "How did you choose proof of concept?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Explain selection criteria and success metrics",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "What are the differences between operating in on-prem and AWS?",
                complexity: "basic",
                round: "Technical",
                notes: "Compare operational models, scaling, security",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "What challenges did you face during migration?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Use STAR format, focus on your specific role",
                leadershipPrinciples: ["ownership", "dive-deep"]
            },
            {
                category: "migration",
                question: "What are the new things that you had to do?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Learning new technologies, adapting processes",
                leadershipPrinciples: ["learn-curious"]
            },
            {
                category: "migration",
                question: "Can you share the result of the migration?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Must include quantifiable metrics and business impact",
                leadershipPrinciples: ["deliver-results", "customer-obsession"]
            },
            {
                category: "migration",
                question: "How did you handle the part where there's no autoscaling in on-prem?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Discuss scaling challenges and cloud solutions",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "What are the seven R's of migration?",
                complexity: "basic",
                round: "Technical",
                notes: "Rehost, Replatform, Refactor, Repurchase, Retain, Retire, Relocate",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "What is the most popular migration strategy?",
                complexity: "basic",
                round: "Technical",
                notes: "Rehost (lift and shift) - explain why",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "What migration strategy have you worked on?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Specific examples with reasoning and outcomes",
                leadershipPrinciples: ["ownership", "right-a-lot"]
            },
            {
                category: "migration",
                question: "What would you recommend for migration strategy?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Depends on requirements, timeline, budget, complexity",
                leadershipPrinciples: []
            },
            {
                category: "migration",
                question: "How many applications did you migrate and in what timeframe?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Be specific and realistic about numbers",
                leadershipPrinciples: ["deliver-results"]
            },
            {
                category: "migration",
                question: "What tools did you use for migration?",
                complexity: "basic",
                round: "Technical",
                notes: "ADS, MGN, DMS, Migration Hub, etc.",
                leadershipPrinciples: []
            },

            // BEHAVIORAL QUESTIONS WITH LEADERSHIP PRINCIPLES
            
            // Customer Obsession
            {
                category: "behavioral",
                question: "Tell me about a time when you had to prioritize some customer needs over others",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Customer obsession and judgment principles",
                leadershipPrinciples: ["customer-obsession"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you found a simple solution to a complex problem",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Shows innovation and customer obsession",
                leadershipPrinciples: ["customer-obsession", "invent-simplify"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you delivered a project from ambiguous requirements",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Customer obsession and think big",
                leadershipPrinciples: ["customer-obsession", "think-big"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me a time when it did not work out or did not meet client's expectations",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing CUSTOMER OBSESSION & OWNERSHIP - how you handle customer disappointment and recover",
                leadershipPrinciples: ["customer-obsession", "ownership"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Give an example when you did not meet client's expectations - what happened and how did you rectify?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing DELIVER RESULTS & CUSTOMER OBSESSION - recovery strategy, learning, prevention",
                leadershipPrinciples: ["customer-obsession", "deliver-results"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Give me an example of when you've been a good host",
                complexity: "basic",
                round: "Behavioral",
                notes: "Customer obsession, care for others, leadership qualities",
                leadershipPrinciples: ["customer-obsession"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to push back (to a customer/manager)",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing CUSTOMER OBSESSION vs HAVE BACKBONE - when to disagree for customer's long-term benefit",
                leadershipPrinciples: ["customer-obsession", "backbone-commit"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Describe a time when you had a difficult time with a customer and how you handled it",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "TAM core competency: Customer relationship management, issue resolution, and learning outcomes",
                leadershipPrinciples: ["customer-obsession", "earn-trust"],
                isNegative: true
            },

            // Ownership
            {
                category: "behavioral",
                question: "Tell me about a time when you made a mistake",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Ownership and learn from failures",
                leadershipPrinciples: ["ownership", "learn-curious"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time when you failed a project or made a mistake",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing OWNERSHIP - take responsibility, learn from failures, don't sacrifice long-term value",
                leadershipPrinciples: ["ownership"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time when you took responsibility outside your job description",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing OWNERSHIP - think long-term, act for entire company, never say 'that's not my job'",
                leadershipPrinciples: ["ownership"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "In your professional experience have you worked on something without getting approval from your manager?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Initiative, bias for action, judgment in decision-making",
                leadershipPrinciples: ["ownership", "bias-action"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "You made a bad decision, what did you learn?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "STAR format: How you found it was bad, communicated to stakeholders, documented, delivered training. Focus on 'Learn and be curious' LP",
                leadershipPrinciples: ["ownership", "learn-curious"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Why did you leave your last company?",
                complexity: "basic",
                round: "Behavioral",
                notes: "QTBTQ: Testing OWNERSHIP & EARN TRUST - no bad-mouthing, focus on growth, positive framing",
                leadershipPrinciples: ["ownership", "earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Autonomous contribution to business - develop AWS service",
                complexity: "advanced",
                round: "Behavioral",
                notes: "Show initiative in building internal tools, eliminating repetitive tasks, ROI focus, customer satisfaction increase",
                leadershipPrinciples: ["ownership", "invent-simplify"],
                isNegative: false
            },

            // Invent and Simplify
            {
                category: "behavioral",
                question: "Tell me about a time when you reinvented and simplified something",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Invent and simplify leadership principle",
                leadershipPrinciples: ["invent-simplify"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you tried to simplify a process but failed. What would you have done differently?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Shows learning from failure, process improvement mindset",
                leadershipPrinciples: ["invent-simplify", "learn-curious"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "How do you get rid of repeatable tasks and show ROI?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Automation mindset, efficiency improvements, measurable business impact",
                leadershipPrinciples: ["invent-simplify", "frugality"],
                isNegative: false
            },

            // Are Right, A Lot
            {
                category: "behavioral",
                question: "Provide an example of when you took a calculated risk",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Risk assessment, decision-making under uncertainty, ownership",
                leadershipPrinciples: ["right-a-lot", "ownership"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about an unpopular decision of yours",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Have backbone, disagree and commit, leadership courage",
                leadershipPrinciples: ["right-a-lot", "backbone-commit"],
                isNegative: false
            },

            // Learn and Be Curious
            {
                category: "behavioral",
                question: "Tell me about a time when you learned something new and used it in your projects",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Learn and be curious principle",
                leadershipPrinciples: ["learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What is something new that you can teach your interviewer in a few minutes?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Communication skills, passion for learning, expertise demonstration",
                leadershipPrinciples: ["learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Realized you needed deeper level of expertise - what did you do to learn?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Example: DynamoDB deep dive, exploring alternatives, systematic learning approach",
                leadershipPrinciples: ["learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What steps do you take to learn something new?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Learning methodology, continuous improvement approach",
                leadershipPrinciples: ["learn-curious"],
                isNegative: false
            },

            // Hire and Develop the Best
            // (Most questions here would be for manager-level positions)

            // Insist on the Highest Standards
            {
                category: "behavioral",
                question: "How did you get non-performing team member back to contribute?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST & INSIST ON HIGHEST STANDARDS - difficult conversations, performance management",
                leadershipPrinciples: ["insist-standards", "earn-trust"],
                isNegative: true
            },

            // Think Big
            {
                category: "behavioral",
                question: "Tell me about a time when you had to deal with ambiguous requirements",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Think big and dive deep principles",
                leadershipPrinciples: ["think-big", "dive-deep"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Imagine it is your first day here at the company. What do you want to work on? What features would you improve on?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Initiative, research about company, strategic thinking",
                leadershipPrinciples: ["think-big", "customer-obsession"],
                isNegative: false
            },

            // Bias for Action
            {
                category: "behavioral",
                question: "Describe a time when you had a tight deadline to meet - how did you get things done?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Bias for action and deliver results",
                leadershipPrinciples: ["bias-action", "deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to work with unclear or ambiguous responsibilities",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing BIAS FOR ACTION - decisions are reversible, don't need extensive study, self-starter mentality",
                leadershipPrinciples: ["bias-action"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me a time when you were 75% through your project and had to pivot strategy",
                complexity: "advanced",
                round: "Behavioral",
                notes: "QTBTQ: Testing BIAS FOR ACTION & OWNERSHIP - calculated risk-taking, resilience, decision-making under uncertainty",
                leadershipPrinciples: ["bias-action", "ownership"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time you delivered a big project in a short timeline",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing BIAS FOR ACTION - speed matters, many decisions are reversible, calculated risk-taking",
                leadershipPrinciples: ["bias-action", "deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to work with insufficient information or incomplete data",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Testing ability to work under uncertainty and make decisions with limited data",
                leadershipPrinciples: ["bias-action"],
                isNegative: false
            },

            // Frugality
            // (Generally covered in technical/cost optimization questions)

            // Earn Trust
            {
                category: "behavioral",
                question: "Tell me about a time you dealt with a difficult co-worker",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Focus on your actions and positive resolution",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had a conflict with your team member",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Focus on conflict resolution and collaboration",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time you had a conflict with your team member",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST - vocally self-critical, treat others respectfully, don't blame others",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "What is your weakness?",
                complexity: "basic",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST - vocally self-critical, body odor doesn't smell like perfume, genuine self-awareness",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time when you had to apologize to someone",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST - vulnerability, accountability, relationship repair, humility",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to earn someone's trust",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST - listen attentively, speak candidly, vocally self-critical when awkward",
                leadershipPrinciples: ["earn-trust"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What did you do when you needed to motivate a group of individuals or promote collaboration?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST & DIVE DEEP - leadership without authority, team building, influence skills",
                leadershipPrinciples: ["earn-trust", "dive-deep"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me two strengths and two weaknesses",
                complexity: "basic",
                round: "Behavioral",
                notes: "What are you doing to resolve weaknesses?",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Why is there a gap in your resume?",
                complexity: "basic",
                round: "Behavioral",
                notes: "QTBTQ: Testing EARN TRUST - honesty, transparency, what did you learn during the gap",
                leadershipPrinciples: ["earn-trust"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tough feedback from anyone - how did you make it positive?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Growth mindset, continuous improvement, turning feedback into actionable improvements",
                leadershipPrinciples: ["earn-trust", "learn-curious"],
                isNegative: true
            },

            // Dive Deep
            {
                category: "behavioral",
                question: "Tell me about a time when you solved an ambiguous situation",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Show structured problem-solving approach",
                leadershipPrinciples: ["dive-deep"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What was the most difficult bug that you fixed in the past 6 months?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Technical troubleshooting, persistence, learning",
                leadershipPrinciples: ["dive-deep", "learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "How do you tackle challenges? Name a difficult challenge you faced while working on a project, how you overcame it, and what you learned",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Problem-solving methodology, resilience, continuous learning",
                leadershipPrinciples: ["dive-deep", "learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "How did you find the cause of the customer issue?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Root cause analysis methodology, investigation approach",
                leadershipPrinciples: ["dive-deep"],
                isNegative: false
            },

            // Have Backbone; Disagree and Commit
            {
                category: "behavioral",
                question: "Tell me about a time you disagreed with your manager",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Show respectful disagreement and data-driven decisions",
                leadershipPrinciples: ["backbone-commit"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me a time you had a conflict with your manager",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "QTBTQ: Testing HAVE BACKBONE DISAGREE & COMMIT - respectful disagreement, data-driven decisions",
                leadershipPrinciples: ["backbone-commit"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Describe a time when you had to influence someone without authority",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Earn trust and have backbone, disagree and commit",
                leadershipPrinciples: ["backbone-commit", "earn-trust"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "When you strongly disagreed with your manager - what was it, how did you handle it?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Show data-driven disagreement, professional approach, and focus on company benefits and recognition",
                leadershipPrinciples: ["backbone-commit"],
                isNegative: true
            },

            // Deliver Results
            {
                category: "behavioral",
                question: "Tell me about the most complex project you have solved",
                complexity: "advanced",
                round: "Behavioral",
                notes: "Core question - must show technical depth and business impact",
                leadershipPrinciples: ["deliver-results", "dive-deep"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "How do you deal with a failed deadline?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Accountability, communication, process improvement",
                leadershipPrinciples: ["deliver-results", "ownership"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to pivot after doing 75% of a project",
                complexity: "advanced",
                round: "Behavioral",
                notes: "Shows adaptability and customer focus",
                leadershipPrinciples: ["deliver-results", "customer-obsession"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "When you not only met goal but exceeded expectations",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Must include: deadline, execution approach, communication strategy. Show 'Deliver Results' LP",
                leadershipPrinciples: ["deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What was the deadline for exceeding expectations?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Timeline management, pressure handling, delivery focus",
                leadershipPrinciples: ["deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "How did you execute to exceed expectations?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Execution strategy, resource management, innovation approach",
                leadershipPrinciples: ["deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "How did you communicate the exceeded results?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Stakeholder communication, impact presentation, value articulation",
                leadershipPrinciples: ["deliver-results"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What you could have done to meet the deadline?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Retrospective analysis, process improvements, resource planning",
                leadershipPrinciples: ["deliver-results", "learn-curious"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "Return on investment calculation and customer satisfaction increase",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Business metrics, value demonstration, customer impact measurement",
                leadershipPrinciples: ["deliver-results", "customer-obsession"],
                isNegative: false
            },

            // Strive to be Earth's Best Employer
            // (More relevant for manager positions)

            // Success and Scale Bring Broad Responsibility
            // (More relevant for senior/principal positions)

            // Multiple Leadership Principles
            {
                category: "behavioral",
                question: "Tell me about a time when you went above and beyond",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Most common LP question - avoid troubleshooting answers",
                leadershipPrinciples: ["customer-obsession", "ownership"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Worked against client timeline - how did you prioritize and identify high-impact items?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Show risk identification skills and data-driven prioritization. Focus on client value delivery",
                leadershipPrinciples: ["customer-obsession", "right-a-lot"],
                isNegative: true
            },

            // General Behavioral Questions
            {
                category: "behavioral",
                question: "Tell me about yourself",
                complexity: "basic",
                round: "All Rounds",
                notes: "3 minutes max: background, superpower, tie to position",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What project are you currently working on?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Current work relevance, technical depth, business impact",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What is the most challenging aspect of your current project?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Problem-solving approach, current technical challenges",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a situation or experience you went through that changed your way of thinking",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Growth mindset, adaptability, learning from experience",
                leadershipPrinciples: ["learn-curious"],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What are you excited about?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Passion, motivation, cultural fit assessment",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What frustrates you?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Self-awareness, working style, potential red flags",
                leadershipPrinciples: [],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "What does your best day of work look like?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Work preferences, motivation, cultural alignment",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time you were uncomfortable and how you dealt with it",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Resilience, adaptability, growth mindset",
                leadershipPrinciples: ["learn-curious"],
                isNegative: true
            },
            {
                category: "behavioral",
                question: "What is the best gift you have ever given or received?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Values, thoughtfulness, personal connections",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What are the most interesting projects you have worked on and how might they be relevant to this company's environment?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Relevance to role, technical depth, business understanding",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "What would excite you about working at [Company Name]?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Company research, cultural fit, genuine interest",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Why do you want to join this company and not other companies?",
                complexity: "basic",
                round: "Behavioral",
                notes: "Research company's AWS journey and tie to your experience",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Why do you want to join AWS (or this company)?",
                complexity: "basic",
                round: "Behavioral",
                notes: "QTBTQ: Testing cultural fit, research depth, genuine interest. Must tie to Leadership Principles",
                leadershipPrinciples: [],
                isNegative: false
            },
            {
                category: "behavioral",
                question: "Tell me about a time when you had to present to executives",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Focus on business impact and strategic communication",
                leadershipPrinciples: ["think-big"],
                isNegative: false
            },

            // Technical Questions
            {
                category: "technical",
                question: "What is the difference between physical server, virtual machine, and container?",
                complexity: "basic",
                round: "Technical",
                notes: "Fundamental concepts - resource sharing, isolation",
                leadershipPrinciples: []
            },
            {
                category: "technical",
                question: "What are the bottlenecks in three-tier architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Database, network, compute - explain each layer",
                leadershipPrinciples: []
            },
            {
                category: "technical",
                question: "How do you scale an application?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Vertical vs horizontal scaling, auto scaling strategies",
                leadershipPrinciples: []
            },
            {
                category: "technical",
                question: "Tell me about autoscaling groups and load balancers",
                complexity: "intermediate",
                round: "Technical",
                notes: "How they work together, configuration options",
                leadershipPrinciples: []
            },
            {
                category: "technical",
                question: "What do you think about autoscaling groups? Tell me about the time you last used autoscaling groups",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Combine technical knowledge with experience",
                leadershipPrinciples: []
            },

            // System Design Questions
            {
                category: "system-design",
                question: "Design Amazon.com (retail website)",
                complexity: "advanced",
                round: "System Design",
                notes: "Focus on catalog, cart, order processing, recommendations",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Design Prime Video",
                complexity: "advanced",
                round: "System Design",
                notes: "Video streaming, CDN, metadata, user management",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Design YouTube",
                complexity: "advanced",
                round: "System Design",
                notes: "Video upload, processing, streaming, recommendations",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Design a parking garage system",
                complexity: "intermediate",
                round: "System Design",
                notes: "Real-time availability, payment processing, entry/exit",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Design Uber",
                complexity: "advanced",
                round: "System Design",
                notes: "Matching, location services, pricing, payments",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Design a meeting action items system with GenAI",
                complexity: "advanced",
                round: "System Design",
                notes: "Modern AI integration, meeting processing, task management",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "What other service can you pick instead of EC2? How does that change the design?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Lambda, ECS, EKS - trade-offs and implications",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "If I swap out EC2 with Lambda, what changes in the design factors?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Serverless implications: scaling, cost, cold starts",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "If I swap out Aurora with DynamoDB, what changes?",
                complexity: "intermediate",
                round: "System Design",
                notes: "NoSQL vs relational trade-offs",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "Why did you choose DynamoDB over Aurora for this use case?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Decision criteria and justification",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "What happens if I want to use API Gateway instead of Application Load Balancer?",
                complexity: "intermediate",
                round: "System Design",
                notes: "API management vs load balancing trade-offs",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you validate if your design is good?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Testing, monitoring, performance metrics",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you prioritize one design factor versus another?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Business requirements drive technical decisions",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "What if I want to put 20,000 transactions per second through this system?",
                complexity: "advanced",
                round: "System Design",
                notes: "High-scale considerations and bottlenecks",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How would you handle high burst traffic?",
                complexity: "advanced",
                round: "System Design",
                notes: "Burst scaling, pre-warming, queuing",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "What's the difference between bar rate scaling and peak scaling?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Sustained vs burst traffic patterns",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you make this system highly scalable?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Horizontal scaling, caching, database optimization",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you make this system highly available?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Multi-AZ, redundancy, failover strategies",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you secure this architecture?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Defense in depth, encryption, access controls",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you make this cost-effective?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Right-sizing, reserved instances, spot instances",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you monitor this system?",
                complexity: "intermediate",
                round: "System Design",
                notes: "CloudWatch, X-Ray, logging strategies",
                leadershipPrinciples: []
            },
            {
                category: "system-design",
                question: "How do you ensure fault tolerance?",
                complexity: "intermediate",
                round: "System Design",
                notes: "Circuit breakers, retries, graceful degradation",
                leadershipPrinciples: []
            },

            // Well-Architected Framework Questions
            {
                category: "well-architected",
                question: "Have you used AWS Well-Architected Framework?",
                complexity: "basic",
                round: "Technical",
                notes: "Yes/no with specific examples",
                leadershipPrinciples: []
            },
            {
                category: "well-architected",
                question: "Give me an example where you used Well-Architected Framework",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Specific pillar, findings, remediation",
                leadershipPrinciples: ["dive-deep"]
            },
            {
                category: "well-architected",
                question: "How have you implemented gaps found in Well-Architected reviews?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Prioritization and implementation strategy",
                leadershipPrinciples: ["deliver-results"]
            },
            {
                category: "well-architected",
                question: "What are the six pillars of Well-Architected Framework?",
                complexity: "basic",
                round: "Technical",
                notes: "Operational Excellence, Security, Reliability, Performance, Cost, Sustainability",
                leadershipPrinciples: []
            },

            // Architecture Decision Questions
            {
                category: "architecture",
                question: "Give me an example where you had multiple competing designs - how did you select one?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Decision criteria, trade-off analysis, stakeholder buy-in",
                leadershipPrinciples: ["right-a-lot", "dive-deep"]
            },
            {
                category: "architecture",
                question: "How do you compare AWS native services vs third-party tools?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Integration, support, cost, lock-in considerations",
                leadershipPrinciples: []
            },
            {
                category: "architecture",
                question: "Walk me through your decision process for choosing between Lambda vs EC2",
                complexity: "intermediate",
                round: "Technical",
                notes: "Use cases, trade-offs, cost implications",
                leadershipPrinciples: []
            },
            {
                category: "architecture",
                question: "How do you evaluate Secrets Manager vs HashiCorp Vault?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Feature comparison, integration, operational overhead",
                leadershipPrinciples: []
            },

            // Security Questions
            {
                category: "security",
                question: "How do you protect network resources?",
                complexity: "intermediate",
                round: "Technical",
                notes: "VPC, security groups, NACLs, WAF",
                leadershipPrinciples: []
            },
            {
                category: "security",
                question: "How do you protect data at rest?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Encryption, KMS, key rotation",
                leadershipPrinciples: []
            },
            {
                category: "security",
                question: "How do you handle compliance requirements (PCI, HIPAA, FedRAMP)?",
                complexity: "advanced",
                round: "Technical",
                notes: "Specific controls, auditing, documentation",
                leadershipPrinciples: []
            },
            {
                category: "security",
                question: "What security controls would you implement for a financial services company?",
                complexity: "advanced",
                round: "Technical",
                notes: "Industry-specific requirements and best practices",
                leadershipPrinciples: []
            },
            {
                category: "security",
                question: "How do you scan for vulnerabilities in your infrastructure?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Inspector, Security Hub, GuardDuty",
                leadershipPrinciples: []
            },

            // Kubernetes Questions
            {
                category: "kubernetes",
                question: "How does Kubernetes application scaling work?",
                complexity: "intermediate",
                round: "Technical",
                notes: "HPA, VPA, cluster autoscaler",
                leadershipPrinciples: []
            },
            {
                category: "kubernetes",
                question: "What's the difference between containerization and virtualization?",
                complexity: "basic",
                round: "Technical",
                notes: "Resource usage, isolation, portability",
                leadershipPrinciples: []
            },
            {
                category: "kubernetes",
                question: "How do you make Kubernetes applications highly available?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Multi-AZ deployments, pod disruption budgets",
                leadershipPrinciples: []
            },
            {
                category: "kubernetes",
                question: "Do you know Helm?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Only ask if candidate claims deep K8s knowledge",
                leadershipPrinciples: []
            },

            // Compliance Questions
            {
                category: "compliance",
                question: "How do you design for PCI compliance?",
                complexity: "advanced",
                round: "Technical",
                notes: "Network segmentation, encryption, access controls",
                leadershipPrinciples: []
            },
            {
                category: "compliance",
                question: "What services are available in GovCloud?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Subset of services, compliance requirements",
                leadershipPrinciples: []
            },
            {
                category: "compliance",
                question: "How do design factors change for regulated industries?",
                complexity: "advanced",
                round: "Technical",
                notes: "Additional controls, documentation, auditing",
                leadershipPrinciples: []
            },
            {
                category: "compliance",
                question: "What additional logging/auditing is required for HIPAA?",
                complexity: "advanced",
                round: "Technical",
                notes: "CloudTrail, access logging, data handling",
                leadershipPrinciples: []
            },

            // Executive Communication Questions
            {
                category: "executive-communication",
                question: "I like both Lambda and Kubernetes. I want to run Kubernetes on Lambda. How can you help me do that?",
                complexity: "advanced",
                round: "Executive",
                notes: "Think about why they're asking - they want benefits of both. Answer: AWS Fargate combines advantages",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "How much will this design cost?",
                complexity: "intermediate",
                round: "Executive",
                notes: "Must provide data-driven estimates with cost breakdown",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "How much money will it save compared to current architecture?",
                complexity: "intermediate",
                round: "Executive",
                notes: "Quantify savings with percentages and dollar amounts",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "How much faster will this be?",
                complexity: "intermediate",
                round: "Executive",
                notes: "Performance improvements with specific metrics",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "How much time do you need to modernize/migrate our systems?",
                complexity: "intermediate",
                round: "Executive",
                notes: "Realistic timelines with phases and milestones",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "What benefit does your project bring to the company?",
                complexity: "intermediate",
                round: "Executive",
                notes: "Business value: cost, speed to market, revenue impact, risk reduction",
                leadershipPrinciples: []
            },
            {
                category: "executive-communication",
                question: "How would you convince a CTO to adopt [technology]?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Business case, risk mitigation, competitive advantage",
                leadershipPrinciples: ["think-big"]
            },
            {
                category: "executive-communication",
                question: "You're presenting to a CIO about migration - how do you approach it?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Focus on business transformation and strategic value",
                leadershipPrinciples: ["think-big"]
            },
            {
                category: "executive-communication",
                question: "Now present the same migration to a CTO - what changes?",
                complexity: "intermediate",
                round: "Behavioral",
                notes: "Technical depth, architecture decisions, implementation details",
                leadershipPrinciples: ["dive-deep"]
            },

            // Event-Driven Architecture Questions
            {
                category: "event-driven",
                question: "What is event-driven architecture?",
                complexity: "basic",
                round: "Technical",
                notes: "Producer/consumer decoupling, independent scaling, built-in retries",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "What is the difference between synchronous and event-driven architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Coupling, scaling, resilience, cost implications",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "What are the superpowers of EventBridge?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Rule-based filtering, content routing, archive/replay, no code routing",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "Why do we use SNS to SQS pattern instead of SNS directly to Lambda?",
                complexity: "intermediate",
                round: "Technical",
                notes: "SNS scales massively, SQS buffers, Lambda processes at comfortable rate",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "Can EventBridge be completely replaced with API Gateway?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Different use cases - EventBridge for events, API Gateway for APIs",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "When should you choose EventBridge vs SNS vs SQS?",
                complexity: "intermediate",
                round: "Technical",
                notes: "EventBridge for rules/routing, SNS for pub/sub, SQS for queuing",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "What is the difference between SNS and EventBridge?",
                complexity: "intermediate",
                round: "Technical",
                notes: "SNS is pub/sub, EventBridge adds rules, filtering, and routing",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "What are the drawbacks of event-driven architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Complexity, debugging difficulty, eventual consistency",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "How do you make event-driven architecture highly available?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Multi-AZ deployment, DLQ, retry policies, circuit breakers",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "How do you secure event-driven architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "IAM roles, resource policies, encryption in transit/rest",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "How do you monitor event-driven architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "CloudWatch metrics, X-Ray tracing, EventBridge insights",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "How do you test event-driven applications without asking other teams to resend messages?",
                complexity: "intermediate",
                round: "Technical",
                notes: "EventBridge archive and replay feature",
                leadershipPrinciples: []
            },
            {
                category: "event-driven",
                question: "When would you NOT use event-driven architecture?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Real-time requirements, simple request/response, immediate consistency needs",
                leadershipPrinciples: []
            },

            // GenAI and RAG Questions
            {
                category: "genai",
                question: "What is RAG (Retrieval Augmented Generation) and why was it created?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Combines retrieval with generation to provide current, accurate information",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "Explain the difference between RAG and fine-tuning a model",
                complexity: "intermediate",
                round: "Technical",
                notes: "RAG retrieves external data, fine-tuning modifies model weights",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "When would you choose RAG over fine-tuning?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Frequently changing data, cost considerations, domain-specific knowledge",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How does the chunking process work in RAG?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Break documents into smaller pieces for better retrieval and context",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "What are embeddings and how do they work in vector databases?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Vector representations of text for semantic similarity search",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "Explain cosine similarity and how it's used for document retrieval",
                complexity: "intermediate",
                round: "Technical",
                notes: "Mathematical measure of similarity between vectors",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How does Bedrock Knowledge Base implement RAG automatically?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Managed chunking, embedding, vector storage, and retrieval",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "What are Bedrock Agents and what problems do they solve?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Orchestrate complex tasks, chain-of-thought reasoning, API integration",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How do agents perform chain-of-thought reasoning?",
                complexity: "advanced",
                round: "Technical",
                notes: "React framework - Reason and Act in iterative steps",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "What is the difference between Action Groups and Knowledge Base in agents?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Action Groups call APIs, Knowledge Base retrieves documents",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How do you implement document-level security in Knowledge Base?",
                complexity: "advanced",
                round: "Technical",
                notes: "Attribute-based access control, user context filtering",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "What is temperature and how does it affect LLM output?",
                complexity: "basic",
                round: "Technical",
                notes: "Controls randomness: 0 = deterministic, higher = more creative",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How do you choose between different models in Bedrock (Claude Haiku vs Sonnet)?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Consider speed, accuracy, cost, and use case requirements",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "When would you use multiple agents vs a single agent?",
                complexity: "advanced",
                round: "Technical",
                notes: "Specialized tasks, parallel processing, domain expertise",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "How is Bedrock pricing calculated (input/output tokens)?",
                complexity: "basic",
                round: "Technical",
                notes: "Separate pricing for input tokens and output tokens",
                leadershipPrinciples: []
            },
            {
                category: "genai",
                question: "When would you choose agents over simple Knowledge Base RAG?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Complex workflows, API calls, multi-step reasoning required",
                leadershipPrinciples: []
            },

            // Performance and Caching Questions
            {
                category: "performance",
                question: "How do you optimize performance?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Caching, CDN, database optimization, right-sizing",
                leadershipPrinciples: []
            },
            {
                category: "performance",
                question: "How do you scale to hyper scale?",
                complexity: "advanced",
                round: "Technical",
                notes: "Auto scaling, load balancing, distributed architecture",
                leadershipPrinciples: []
            },
            {
                category: "performance",
                question: "How do you reduce latency?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Caching, CDN, regional deployment, connection pooling",
                leadershipPrinciples: []
            },
            {
                category: "performance",
                question: "What are the two major caching services in AWS?",
                complexity: "basic",
                round: "Technical",
                notes: "ElastiCache for Memcached and ElastiCache for Redis",
                leadershipPrinciples: []
            },
            {
                category: "performance",
                question: "What are the two different caching mechanisms?",
                complexity: "basic",
                round: "Technical",
                notes: "Pull-through (lazy loading) and write-through caching",
                leadershipPrinciples: []
            },

            // Database Deep-Dive Questions
            {
                category: "database",
                question: "How do you do high availability or disaster recovery for RDS vs Aurora?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Multi-AZ, read replicas, Aurora global clusters",
                leadershipPrinciples: []
            },
            {
                category: "database",
                question: "What are some pros and cons of DynamoDB, Aurora, RDS?",
                complexity: "intermediate",
                round: "Technical",
                notes: "Compare performance, cost, management overhead, use cases",
                leadershipPrinciples: []
            },
            {
                category: "database",
                question: "What is data analytics?",
                complexity: "basic",
                round: "Technical",
                notes: "Process of examining data to draw insights and conclusions",
                leadershipPrinciples: []
            },
            {
                category: "database",
                question: "What is the difference between OLAP and OLTP?",
                complexity: "basic",
                round: "Technical",
                notes: "OLTP for transactions, OLAP for analytics and reporting",
                leadershipPrinciples: []
            },
            {
                category: "database",
                question: "When to use OLAP versus OLTP?",
                complexity: "basic",
                round: "Technical",
                notes: "OLTP for operational systems, OLAP for data warehousing",
                leadershipPrinciples: []
            },

            // Customer Discovery Questions
            {
                category: "customer-discovery",
                question: "Tell me about what you're doing with AWS",
                complexity: "basic",
                round: "Discovery",
                notes: "Open-ended conversation starter for customer meetings",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "What types of workloads run on AWS for you today?",
                complexity: "basic",
                round: "Discovery",
                notes: "Understand current AWS usage and maturity",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "Who is using AWS at your organization?",
                complexity: "basic",
                round: "Discovery",
                notes: "Identify stakeholders and decision makers",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "What is going well? What are challenges I can help solve?",
                complexity: "basic",
                round: "Discovery",
                notes: "Understand pain points and opportunities",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "Where is your focus in the next 18-24 months?",
                complexity: "basic",
                round: "Discovery",
                notes: "Align solutions with business roadmap",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "How are you securing your workloads today?",
                complexity: "intermediate",
                round: "Discovery",
                notes: "Understand security posture and requirements",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "What are your biggest priorities - cost, security, or speed to market?",
                complexity: "basic",
                round: "Discovery",
                notes: "Understand primary drivers for technology decisions",
                leadershipPrinciples: []
            },
            {
                category: "customer-discovery",
                question: "What's your team's expertise level with [technology]?",
                complexity: "basic",
                round: "Discovery",
                notes: "Assess technical capabilities and training needs",
                leadershipPrinciples: []
            },

            // Architecture Game/Quiz Questions
            {
                category: "architecture-quiz",
                question: "Detect error in this architecture diagram",
                complexity: "intermediate",
                round: "Technical",
                notes: "Common errors: missing NAT gateway, wrong subnet types, security groups",
                leadershipPrinciples: []
            },
            {
                category: "architecture-quiz",
                question: "How can EC2 reach internet?",
                complexity: "basic",
                round: "Technical",
                notes: "NAT Gateway flow, internet gateway, routing tables",
                leadershipPrinciples: []
            },
            {
                category: "architecture-quiz",
                question: "Improve the architecture, improve performance",
                complexity: "intermediate",
                round: "Technical",
                notes: "Add caching, read replicas, RDS proxy, CDN",
                leadershipPrinciples: []
            },
            {
                category: "architecture-quiz",
                question: "Improve security in this architecture",
                complexity: "intermediate",
                round: "Technical",
                notes: "WAF, SSL, encryption, security groups, NACLs",
                leadershipPrinciples: []
            },
            {
                category: "architecture-quiz",
                question: "What are the differences between SNS and SQS?",
                complexity: "basic",
                round: "Technical",
                notes: "SNS is pub/sub, SQS is queuing; different use cases",
                leadershipPrinciples: []
            },
            {
                category: "architecture-quiz",
                question: "Match services to use cases",
                complexity: "basic",
                round: "Technical",
                notes: "Relational database, serverless, containers, etc.",
                leadershipPrinciples: []
            },

            // Questions to Ask Interviewers
            {
                category: "questions-to-ask",
                question: "What are the biggest things you're working on in the next year?",
                complexity: "basic",
                round: "All Rounds",
                notes: "Strategic question for hiring managers",
                leadershipPrinciples: []
            },
            {
                category: "questions-to-ask",
                question: "What is one of the biggest challenges you're facing?",
                complexity: "basic",
                round: "All Rounds",
                notes: "Shows interest in helping solve problems",
                leadershipPrinciples: []
            },
            {
                category: "questions-to-ask",
                question: "What should be working better than it is today?",
                complexity: "basic",
                round: "All Rounds",
                notes: "Identifies improvement opportunities",
                leadershipPrinciples: []
            }
        ];

let filteredQuestions = [...questions];

// ===== Render / UI (unchanged logic) =====
function renderQuestions() {
  const tbody = document.getElementById('questionsBody');
  tbody.innerHTML = '';

  filteredQuestions.forEach((q) => {
    const row = document.createElement('tr');
    row.className = 'question-row';

    // LP display
    let lpDisplay = '';
    if (q.leadershipPrinciples && q.leadershipPrinciples.length > 0) {
      lpDisplay = q.leadershipPrinciples
        .map(lp => `<span class="leadership-principle lp-${lp}">${lp.replace('-', ' ').toUpperCase()}</span>`)
        .join(' ');
    }

    const negativeIndicator = q.isNegative ? '<span class="negative-indicator">⚠️</span>' : '';

    row.innerHTML = `
      <td><span class="category ${q.category}">${q.category.replace('-', ' ')}</span></td>
      <td class="question-text">${negativeIndicator}${q.question}</td>
      <td>${lpDisplay}</td>
      <td><span class="complexity ${q.complexity}">${q.complexity}</span></td>
      <td>${q.round}</td>
      <td class="notes">${q.notes}</td>
    `;
    tbody.appendChild(row);
  });

  updateStats();
}

function updateStats() {
  const count = filteredQuestions.length;
  const total = questions.length;
  const behavioralCount = filteredQuestions.filter(q => q.category === 'behavioral').length;
  const negativeCount = filteredQuestions.filter(q => q.isNegative).length;

  document.getElementById('questionCount').textContent =
    `Showing ${count} of ${total} questions (${behavioralCount} behavioral, ${negativeCount} negative behavioral)`;
}

function filterQuestions() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

  filteredQuestions = questions.filter(q => {
    const matchesSearch = !searchTerm ||
      q.question.toLowerCase().includes(searchTerm) ||
      q.category.toLowerCase().includes(searchTerm) ||
      q.notes.toLowerCase().includes(searchTerm) ||
      (q.leadershipPrinciples && q.leadershipPrinciples.some(lp =>
        lp.toLowerCase().includes(searchTerm))) ||
      q.round.toLowerCase().includes(searchTerm);

    const matchesCategory = activeFilter === 'all' || q.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  renderQuestions();
}

function exportToCSV() {
  const headers = ['Category', 'Question', 'Leadership Principles', 'Complexity', 'Interview Round', 'Notes/Context', 'Is Negative'];
  const csvContent = [
    headers.join(','),
    ...filteredQuestions.map(q => [
      q.category,
      `"${q.question.replace(/"/g, '""')}"`,
      `"${q.leadershipPrinciples ? q.leadershipPrinciples.join(', ') : ''}"`,
      q.complexity,
      q.round,
      `"${q.notes.replace(/"/g, '""')}"`,
      q.isNegative ? 'Yes' : 'No'
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'aws_interview_questions_with_leadership_principles.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// ===== Wire up events (unchanged) =====
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', filterQuestions);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterQuestions();
    });
  });
  document.getElementById('exportBtn').addEventListener('click', exportToCSV);

  // UI-only: theme toggle (persisted in localStorage)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'light');
  }

  updateThemeIcon();

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }

  // Initial render
  renderQuestions();
});
