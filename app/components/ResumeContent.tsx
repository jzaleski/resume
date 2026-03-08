"use client";

import React, { startTransition, useState, useEffect } from "react";

const ResumeContent = () => {
  const [mode, setMode] = useState<string>("full");

  useEffect(() => {
    startTransition(() => {
      setMode(document?.body?.getAttribute("data-resume-mode") || "full");
    });
  }, []);

  const isLite = mode === "lite";

  const skills = [
    {
      category: "Languages / Technologies",
      items: [
        "Angular / AngularJS",
        "ASP.NET MVC",
        "ASP / ASP.NET",
        "C#",
        "C",
        "Celery",
        "CSS",
        "Django / DRF",
        "Flask",
        "Gin",
        "Go",
        "HTML",
        "Java",
        "Javascript",
        "Kafka",
        "NestJS",
        "Next.js",
        "Node.js",
        "PHP",
        "Perl",
        "Python / Jython / IronPython",
        "RabbitMQ",
        "Rails",
        "React",
        "React Native",
        "Ruby / JRuby / IronRuby",
        "Sinatra",
        "Spark",
        "Storm",
        "TypeScript",
        "VB / VB.NET",
      ],
    },
    {
      category: "Databases / NoSQL / Search",
      items: [
        "Cassandra",
        "Elasticsearch",
        "HBase",
        "Hive / Hadoop / HDFS",
        "InfluxDB",
        "MSSQL",
        "Memcached",
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "Redis",
        "Solr",
      ],
    },
    {
      category: "Operating Systems",
      items: ["Linux", "OSX", "Windows"],
    },
    {
      category: "Development Tools",
      items: [
        "Eclipse",
        "Microsoft InterDev / Visual Studio / Visual Studio Code",
        "NetBeans",
        "awk",
        "grep",
        "i3",
        "screen",
        "sed",
        "tmux",
        "vim",
        "xmonad",
      ],
    },
    {
      category: "Source Control",
      items: ["CVS", "Git / GitHub / GitLab / BitBucket", "Microsoft Source Safe", "Subversion"],
    },
    {
      category: "Other",
      items: [
        "Agile Development",
        "Algolia",
        "Amazon Web Services (AWS)",
        "Auth0",
        "Azure",
        "Branch",
        "Capistrano",
        "Chef",
        "Confluence",
        "Cowboy Coding",
        "DC/OS",
        "Docker",
        "Extreme Programming",
        "Feature Driven Development",
        "Google Apps",
        "Google Cloud Platform (GCP)",
        "Heroku",
        "Jira",
        "LaunchDarkly",
        "Lean Development",
        "Linux System Administration",
        "Microsoft Office",
        "MUX",
        "Packer",
        "Pair[ed] Programming",
        "Peer Code Reviews",
        "Puppet",
        "Scrum",
        "Segment",
        "Sentry",
        "Superset",
        "Terraform",
        "Twilio",
        "Test Driven Development",
        "User Stories",
        "Vagrant",
        "Windows System Administration",
      ],
    },
  ];

  const jobs = [
    {
      title: "Vice President of Technical Architecture",
      dates: "(09/25 - Current)",
      company: "HappyFunCorp - New York, NY",
      tagline: "A NYC-based Product Engineering Firm",
      recent: true,
      bullets: [],
    },
    {
      title: "Director of Technical Architecture",
      dates: "(08/23 - 09/25)",
      company: "HappyFunCorp - New York, NY",
      tagline: "A NYC-based Product Engineering Firm",
      recent: true,
      bullets: [],
    },
    {
      title: "Staff Software Engineer [Contract]",
      dates: "(06/23 - 8/23)",
      company: "HappyFunCorp - New York, NY",
      tagline: "A NYC-based Product Engineering Firm",
      recent: true,
      bullets: [],
    },
    {
      title: "Vice President Of Engineering",
      dates: "(04/22 - 03/23)",
      company: "ibble - Austin, TX",
      tagline:
        "A social media app that brings conversation to life over video, audio, images and text.",
      recent: true,
      bullets: [
        "Led both the Product and Engineering disciplines.",
        <span key="ibble-launch">
          Launched the <span className="italic">ibble</span> mobile-application in both Mexico and
          Canada.
        </span>,
        "Worked with Marketing to launch an updated App-Store and Website presence.",
        "Created multiple tools to automate or replace pre-existing manual processes, to aid in data-migrations / data-backfills and production flows.",
        "Continued focus on optimizing cost while maintaining or increasing stability and reliability of both the backend and frontend services / applications.",
      ],
    },
    {
      title: "Director Of Engineering",
      dates: "(11/21 - 04/22)",
      company: "ibble - Austin, TX",
      tagline:
        "A social media app that brings conversation to life over video, audio, images and text.",
      recent: true,
      bullets: [
        "Analyzed, and documented, pre-existing infrastructure and software architecture to develop a plan to level things up, deprecate un-used / under-utilized services, reinforce critical components and optimize costs.",
        "Led the re-platforming effort to migrate from Heroku to GCP.",
        "Established onboarding documentation and tooling.",
        "Established levels & responsiblities, team, Agile processes and SDLC.",
        "Scaled the team with a mixture of contractors (near-shore / off-shore), interns and FTEs.",
      ],
    },
    {
      title: "Head Of Applause Labs",
      dates: "(10/19 - 11/21)",
      company: "Applause - Framingham, MA",
      tagline: "Worldwide leader in crowdtesting and digital quality.",
      recent: true,
      bullets: [
        {
          main: "Built-out IP in and identified new and exciting capabilities that could enhance the business either directly or indirectly.",
          subs: [
            "Accessibility Recommender / Fixer",
            "Automated Bug Triage / Test Case Generation from Bug Reports",
            "Crowd Services (GigE)",
            "Emotional AI",
            "Live / Just In Time Testing (JITT)",
            "Live Streamed Testing (think: Twitch [for Testers])",
            "[Applause] Quality Score (AQS)",
          ],
        },
        "Investigated things that could influence quickly, discarding projects that did not pan out or deliver expected value (fail-fast).",
        "Focused on rapid prototyping / rapid research to determining things like Complexity, Technical Feasibility, etc. and documenting results for validation / discussion with stake-holders (incl. the CEO).",
        "Spoke at multiple conferences / conference panels to present / discuss The Future of Automation, AI in eCommerce, AI in Finance, Why the Human Element Remains Essential in Applied AI, amongst others.",
        "Developed multiple press-releases published in DevopsDigest, Forbes, App Developer Magazine, amongst others.",
      ],
    },
    {
      title: "Staff Software Engineer [Contract]",
      dates: "(05/20 - 11/20)",
      company: "HappyFunCorp - New York, NY",
      tagline: "A NYC-based Product Engineering Firm",
      recent: true,
      bullets: [
        "Addressed infrastructure and application scalability concerns in the TezLab backend.",
        "Developed, integrated and later open-sourced the sidekiq-max-jobs gem.",
        <a
          key="tezlab"
          href="https://codex.happyfuncorp.com/scaling-tezlab-tuning-kubernetes-c5e05d6a69de"
          target="_blank"
        >
          Scaling TezLab
        </a>,
      ],
    },
    {
      title: "Senior Director Of Engineering",
      dates: "(01/19 - 11/21)",
      company: "Applause - Framingham, MA",
      tagline: "Worldwide leader in crowdtesting and digital quality.",
      recent: true,
      bullets: [],
    },
    {
      title: "Director Of Engineering",
      dates: "(12/17 - 01/19)",
      company: "Applause - Framingham, MA",
      tagline: "Worldwide leader in crowdtesting and digital quality.",
      recent: true,
      bullets: [
        "Partnered with product management and delivery teams to align and prioritize current and future new product development initiatives in support of business objectives.",
        "Worked with cross functional engineering teams including QA, Platform Delivery and community QA to plan and execute large scale application additions and improvements.",
        {
          subs: [
            "AngularJS / EJS to Angular conversion(s)",
            "Database capacity planning & Tuning (for: MySQL & PostgreSQL)",
            "JDK 8 to 11 upgrade(s)",
            "Mesosphere DC/OS migration",
            "MySQL to TiDB migration",
            "MySQL upgrade(s)",
            "Node.js 0.10.49 to 12 upgrade(s)",
            "Platform bootstrap process (expedite onboarding / day-one setup process)",
            "PostgreSQL upgrade(s)",
            "Python 2 to 3 converion(s)",
            "Re-imagined Tester Search and delivered [a] Tester Recommendation Engine",
            "Ruby & Rails upgrade(s)",
          ],
        },
        "Addressed numerous scalability and correctness issues across the Organization.",
        "Developed a practical and working knowledge of business processes; interacted with key business partners to recommend solutions that best meet the strategic needs of the business.",
        "Developed and applied consistent, standardized development processes that were regularly updated through lessons learned from previous projects.",
        "Developed software development strategy utilizing industry standards. Created roadmap and timing of implementation of the roadmap based on business requirements and strategy.",
        "Managed other managers, team leads and individual contributors.",
        "Motivated, led and developed a team of diverse individuals with a variety of experience levels and skill sets.",
        "Managed software project planning and allocation of resources.",
      ],
    },
    {
      title:
        "Engineering Manager - Customer Information (Customer Data, Testing and Analytics + Tracking)",
      dates: "(09/17 - 12/17)",
      company: "Wayfair, LLC - Boston, MA",
      tagline:
        "An American e-commerce company that sells furniture, home furnishings, luggage, toys, pet items and more.",
      recent: true,
      bullets: [
        "Worked closely with business stake-holders and tech-leads on road-mapping, forecasting and developing hiring plans.",
        "Worked closely with senior-management and tech-leads to establish training / on-boarding plans focused on improving efficiency of, growing skills of, and retaining, tech-leads as well as individual-contributors.",
        "Held regular Staff Meeting(s), partnering closely with business stake-holders and tech-leads to adapt to supplement forecasting efforts.",
        "Responsible for many existing, and several new, high profile projects.",
        {
          subs: [
            "B2B Identification / Outreach (scoring)",
            "Customer Facts",
            "Customer Segmentation",
            "Device-Mapping (Customer -> Device)",
            "Dynamic Phone Number",
            "Multi Armed Bandit testing (as a standard test[-type] offering)",
            "Real-time User Level Bidding",
            "Real-time and Batch [Event] Uploaders",
            "Web, Mobile Web & App Tracking",
          ],
        },
        "Recognized for my efforts, after about one year in the marketing engineering department, I was able to increase my scope and take over as the engineering manager for the Tracking team.",
      ],
    },
    {
      title: "Software Architect / Engineering Leader - Customer Identity + Testing and Analytics",
      dates: "(11/16 - 09/17)",
      company: "Wayfair, LLC - Boston, MA",
      tagline:
        "An American e-commerce company that sells furniture, home furnishings, luggage, toys, pet items and more.",
      recent: true,
      bullets: [
        "Led the Data-Store POC initiative, working closely with one senior and one junior engineer, and others from varying disciplines across the organization, to evaluate five data-stores, ultimately presenting our findings to the CTO, Chief Architect, VPs and Directors for consideration / approval.",
        "Dove in head first to new domain / technical challenges.",
        {
          subs: [
            'Instrumented, and was hands on in diagnosing and addressing issues, and ultimately rewriting, our "Cart Abandonment" topology (a significant source of revenue YoY).',
            "Evolved the Customer Information Service (CIS) [Python / Flask] to be both more maintainable / extensible as well as more performant.",
            "Aided in significantly scaling up / out a number of other Java and Python applications that the Customer Identity & Testing and Analytics team(s) owned.",
          ],
        },
        "Focused on the career growth of direct reports.",
        {
          subs: [
            "Consistently held one-on-one's with all members of the team providing guidance both technically and non-technically about how to build their experience / skills.",
            "Regularly involved in design / architectural meetings and the code review process.",
            "Enabled team members to take [calculated] risks, in order to learn and build technical skills.",
          ],
        },
        "Recognized for my efforts, within months of joining the marketing engineering department, I was able to increase my scope and take over as the engineering lead for the Testing and Analytics (A/A & A/B testing framework) team.",
      ],
    },
    {
      title: "Software Architect / Engineering Leader - Transportation",
      dates: "(06/15 - 11-16)",
      company: "Wayfair, LLC - Boston, MA",
      tagline:
        "An American e-commerce company that sells furniture, home furnishings, luggage, toys, pet items and more.",
      recent: true,
      bullets: [
        "Rapidly grew the Transportation engineering team from 10 engineers to approaching 50 engineers within a year.",
        {
          subs: [
            "Coordinated onboarding for engineers both in Boston and our sister office in Berlin, Germany.",
            "Partnered with business, operations and engineering leaders to develop plans about how to evolve the Transportation platform and team.",
          ],
        },
        "Focused on the rapid career growth of direct / in-direct reports.",
        {
          subs: [
            "Consistently held one-on-one's with all members of the team providing guidance both technically and non-technically about how to build their experience / skills.",
            "Regularly involved in design / architectural meetings and the code review process.",
          ],
        },
        "Led and contributed to multiple process refinements.",
        {
          subs: [
            <span key="onboarding">
              <span className="underline">Onboarding:</span> Prior to my arrival this was 2 to 3
              hours involving 1 or 2 senior engineers, due to our rapid growth this did not scale
              and in reality, due the complexity of our system was not sufficient. As a result we
              now have a comprehensive track with multiple topics including many business and
              technical deep-dives.
            </span>,
            <span key="scrum">
              <span className="underline">Scrum of Scrums:</span> As the team grew in size, holding
              a mono-scrum was no longer possible. As we broke into independent scrums / teams we
              lost visibility into what other teams within the department working on. As a result
              the "Scrum of Scrums" was born. This meeting included both business stake-holders and
              engineering leads, allowing sharing, review and collaboration of / on current
              cross-functional / multi-discipline objectives.
            </span>,
            <span key="weekly">
              <span className="underline">
                Weekly Engineering Update / Monthly Platform Meeting:
              </span>{" "}
              As the team grew in size, and more specifically specialized, it became difficult for
              engineers to have a pulse on what each team was working on. Knowledge sharing and
              Transparency are very important to me as a leader, so after hearing this feedback
              first-hand from a number of reports and reports of reports the Weekly Update (e-mail
              summary) and Monthly Platform Meeting (in-person update) were created.
            </span>,
            <span key="ticket">
              <span className="underline">Ticket Grooming / Requirement Gathering:</span> Worked
              with business and engineering leaders on the "Definition of Ready" with regards to
              ticket grooming / requirement gathering. Suggested changes to the overall structure of
              tickets with a goal of making them more like user stories, including clearly blocked
              out acceptance criteria, testing criteria as well as go-live / deploy plans.
            </span>,
            <span key="criticals">
              <span className="underline">Criticals Process:</span> My team's problem area was very
              data-centric and at times the system got out of sync. To combat this we had a
              Criticals Rotation. This concept pre-dates my arrival, but it became immediately
              apparent that it needed an overhaul. During my tenure we switched this from an e-mail
              list to a Kanban queue, got to the root-causes and made fixes to many of the
              underlying issues. I felt strong about having every Engineer on the team in the
              rotation as it provided a tremendous learning opportunity.
            </span>,
            <span key="postmortem">
              <span className="underline">Post-mortems / Retrospectives:</span> At Wayfair we moved
              fast, at times probably too fast. As a result of our speed, issues / bugs were a
              fairly regular occurrence. On the surface level, this was fine but the learning
              opportunity that retrospectives and post-mortems provide was missed / not part of the
              process. In addition to leading a number of these types of meetings for my team(s), I
              worked closely with business and engineering leadership to establish guidelines on how
              and when these types of meetings made sense.
            </span>,
          ],
        },
        "Involved with future planning / forecasting with regards to Architecture.",
        {
          subs: [
            'Identified and worked with engineering leadership to introduce the concept of a "Transportation - Platform Team" focused on scalability, monitoring, tools as well as platform / framework evolution.',
            'Identified a need and short-coming of the current "Remote" development / testing environments and worked very closely with multiple infrastructure leads / engineers on defining / building a "Local" development solution / option. This solution is now used by approximately 50% of Wayfair Engineering and has been successfully proven as the platform of choice for all "Wayfair Labs" groups going forward.',
            <span key="transportation-components">
              Developed many re-usable components, in particular the{" "}
              <span className="italic">Transportation - Base Classes and Traits</span>
            </span>,
          ],
        },
        "Became the go to person for many technical topics.",
        {
          subs: [
            <span key="isilon">
              <span className="underline">Isilon:</span> Became an expert / expert resource in the
              infrastructure and available tools / components by working with all teams involved (4)
              on refinements to the provisioning / migration process in order to meet an acceptable
              SLA.
            </span>,
            <span key="logging">
              <span className="underline">Logging:</span> Created a re-usable `Logging` component (a
              `trait`), now used by multiple teams across the company, aimed at simplifying and
              driving consistency around Kibana logging.
            </span>,
            <span key="stats">
              <span className="underline">Statistics / Metrics:</span> Created a re-usable
              `Statistics` component (a `trait`), now used by multiple teams across the company,
              aimed at simplifying and driving consistency around Graphite metric logging.
            </span>,
          ],
        },
        "Involved with future planning / forecasting with regards to Personnel.",
        {
          subs: [
            "Worked closely with engineering and operations leadship to plan around how and when it made sense to split the engineering team in Berlin.",
            "Worked closely with operations leadership to plan around when it made sense to split and / or refine the scope of US based teams (recurring).",
            'Given the success of the "Transportation - Platform Team" worked with engineering leadership to define a plan around creating, and hiring for, a department-wide "Fulfillment - Platform Team."',
          ],
        },
      ],
    },
    {
      title: "Principal Software Engineer",
      dates: "(08/13 - 06/15)",
      company: "Sermo - Boston, MA",
      tagline: "The #1 social network for doctors in the US today.",
      recent: false,
      bullets: [
        "Helped design / model, plan and lead a team in the development, testing and benchmarking of a highly-available, highly-performant, extensible application event tracking system.",
        "Helped design, implement and lead a team in developing changes required for the system to ensure zero-downtime during application deploys.",
        "Introduced a more formal code-review process (and related tools).",
        "Mentored junior to senior engineers.",
        "Worked as the release / deployment manager.",
        "Helped diagnose and promptly address production issues.",
        "Aided in load / performance testing of the system.",
        "Involved in cross-team integration architecture and design reviews.",
        "Paired with and performed many code-reviews for other engineers across the organization.",
        "Added to on-call rotation (PagerDuty).",
        "Performed multiple ruby upgrades, updating most, almost all, gems in the process.",
        "Made significant contributions to the internationalization effort (i18n).",
      ],
    },
    {
      title: "Manager of Development Operations",
      dates: "(01/13 - 08/13)",
      company: "Backupify - Cambridge, MA",
      tagline:
        "The leading provider of backup and recovery solutions for Software-as-a-Service (SaaS) applications.",
      recent: false,
      bullets: [
        "Made significant strides towards overall system stability, reliability and performance across multiple technolgies (Ruby, Rails, Redis, Resque, Cassandra, Graylog).",
        "First responder and often coordinator of efforts in addressing critical system failures.",
        "Stabilitized and enhanced system health monitoring, graphing and alerting.",
        "Managed technical aspects of our business relationships with Amazon Web Services and others.",
        "Coordinated and performed multiple zero-downtime upgrades and tweaks to our Redis installations.",
        "Addressed performance and reliability issues with our implementation of Resque.",
        "Identified and addressed a long-standing kernel bug related to PostgreSQL and its host locking up.",
        "Attended DataStax Administrator Training for Apache Cassandra in NYC and received certification.",
        "Assisted in the upgrade from Cassandra 1.0.7 -> 1.2.5.",
        "Participated in all aspects of the Scrum process.",
        "Performed peer code reviews.",
      ],
    },
    {
      title: "Senior Software Engineer [Contract]",
      dates: "(06/12 - 08-12)",
      company: "Blue Cod Technologies - Marlborough, MA",
      tagline:
        "Delivering a broad range of innovative solutions for the unique challenges facing the property and casualty industry.",
      recent: false,
      bullets: [
        <span key="bluecod">
          Planned & developed a proprietary Document Management / Distribution system (
          <span className="underline">using:</span> ASP.NET MVC 4, Entity-Framework 5, HTML5,
          jQuery, CSS and SQL-Server 2008 - hosted in Azure)
        </span>,
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: "(03/11 - 01/13)",
      company: "LeadKarma, LLC. - Cambridge, MA",
      tagline:
        "LeadKarma is a web marketing technology company that applies advanced science to online customer acquisition.",
      recent: false,
      bullets: [
        "Coordinated & orchestrated multiple high-visibility enhancements using a variety of technologies across a wide-array of applications / tools (Python, Ruby, Rails, Perl, jQuery, CSS, BASH, MySQL, Memcached, Redis, Pylons and more).",
        <span key="lk1">
          Performed multiple enhancements to our operational-reporting / data-warehouse system (a
          bit over 4TB of data last I checked). Changes consisted of: mapping changes, aggressive
          structurual changes as well as scalability / performance tuning (
          <span className="underline">using:</span> Python & MySQL).
        </span>,
        <span key="lk2">
          Performed in-depth analysis of keyword-bidding system (
          <span className="underline">used with:</span> Bing / Google) to uncover algorithms used
          and make enhancements for more granular control over estimates, clustering and bidding (
          <span className="underline">using:</span> Python).
        </span>,
        <span key="lk3">
          Added dimensions / facts to reporting system for identifying: Browser-details, OS-details
          & Device-details, leveraging 3rd-party database of User-Agent-String details (
          <span className="underline">using:</span> Python).
        </span>,
        "Performed peer-code-reviews, held impromptu design discussions / meetings & mentored / trained new engineers.",
        "Performed Python 2.5 -> 2.7 upgrade.",
        "Simplied build / deployment process for multiple systems / applications using Chef / Capistrano.",
        <span key="lk4">
          Performed multiple enhancements to our Production / Reporting UI (
          <span className="underline">using:</span> Pylons / Mako, Python, jQuery, Prototype, CSS).
        </span>,
        <span key="lk5">
          Performed numerous Front-End UI Changes (<span className="underline">using:</span> Ruby /
          Rails / CSS / jQuery / Javascript).
        </span>,
        'Using Memcached (later Redis) as second-level-cache, developed an "Arrival" look-up mechanism using the IP, user-agent and site-identifier to perform a best guess of identity on un-cookied / un-sessioned site visitors.',
        "Rebuilt 16x2TB RAID-10 array using our in-house raid-tools, mdadm, plus the {vg,pv,lv} command-line utilities (multiple enhancements were made to our in-house tool during the process).",
        'Planned and implemented an "off-site backup" solution. This 6TB device goes home every other week, just in case.',
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: "(09/10 - 03/11)",
      company: "Nimbit, Inc. - Framingham, MA",
      tagline:
        "Nimbit aims to provide the easiest solution for self-managed artists, managers, and emerging labels to take their music direct to the fans that love them, and to give fans more ways to support their career.",
      recent: false,
      bullets: [
        "Developed a highly-scalable, clusterable Authorization / Media-Ingestion system using Javascript / AJAX / jQuery / PHP for the Uploader component (front-end) and C# / WCF for the server-side component. This system was deployed within Amazon EC2 on Windows Server 2008.",
        'Quickly ramped up on the code-base and became an effective contributor with-in days. Fixed a significant performance issue with a data-feed for use with the Google Chart API, made many UI / UX enhancements to E-mail Messaging Campaign Management (atop StrongMail) and Message Template management screens within Nimbit\'s "Dashboard" (Portal).',
        "Implemented / Integrated new Shopping Cart, Checkout and Receipt page(s) using HTML / CSS / Javascript / AJAX / jQuery.",
        'Responsible for designing / architecting and prototyping a RESTful Web Service implementation in PHP for use with "New Checkout" and as a public facing API in the future.',
        "Performed analysis and developed a staged-migration for moving the Nimbit Application-Stack to the Cloud (AWS).",
        'Proposed and helped implement the "Scrum" process.',
      ],
    },
    {
      title: "Adjunct Instructor",
      dates: "(07/09 - 04/10)",
      company: "The Career Institute of American International College - Framingham, MA",
      tagline:
        "A career college that specializes in healthcare, digital media, personal training and information technology professions.",
      recent: false,
      bullets: [
        'Taught multiple modules from the "Enterprise Software Developer Program"',
        "Planned course-work, decided on resources, lectured and coordinated in-class / take-home assignments",
      ],
    },
    {
      title: "Lead Software Engineer / Architect",
      dates: "(08/07 - 09/10)",
      company: "Blue Cod Technologies - Marlborough, MA",
      tagline:
        "Delivering a broad range of innovative solutions for the unique challenges facing the property and casualty industry.",
      recent: false,
      bullets: [
        'Worked as the Lead Developer (for an enterprise team of approximately 20 engineers) responsible for architecting and prototyping the tools and frameworks of the "Enterprise System" consisting of a data modeling tool, a rules engine tool, a core library and server, a software-based load-balancer, a migration / replication library and server, as well as a front-end UI, from the ground up using C#, SQL Server 2008, NHibernate, WCF and Windows Forms.',
        'Sole developer of the "Rules Engine Tool" (RET) to be used internally (preliminarily), an "Execution Engine / Library,". and a "Load Balancer" (Non-IIS based) capable of distributing transactions across one or more back-end servers.',
        'Developed the original prototype of the "Data Modeling Tool" the output of which is a set of NHibernate objects, Data Contracts, Assembler objects, WCF Services and SQL files which can be used to create or update the database schema.',
        "Taught classes on NHibernate, WCF, Multi-Threading, Cross App-Domain Programming, Delegates / Events and Reflection (all of the lectures were taught in a fashion that made them applicable to both Java and C# engineers).",
        <span key="bcc1">
          Proposed and implemented a build / release process (
          <span className="underline">using:</span> Subversion / NAnt).
        </span>,
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: "(02/07 - 08/07)",
      company: "Enpocket Inc. (later acquired by Nokia) - Boston, MA",
      tagline: "Developing Marketing Solutions for Deployment over the SMS / MMS / WAP Channel(s)",
      recent: false,
      bullets: [
        'Responsible for adding functionality and maintaining a Request based Marketing Engine / Server known as the "Enpocket Messaging Engine" or "EME".',
        <span key="enpocket">
          Given the opportunity by upper management to prototype a new Web-UI (
          <span className="underline">using:</span> Wicket Framework and Java) outside the scope of
          daily interations.
        </span>,
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: " (04/06 - 02/07)",
      company: "Pactolus Communications Software Corporation - Marlborough, MA",
      tagline:
        "Developing feature-rich, carrier-ready IP voice services for converged TDM/IP and VoIP (Voice over IP) networks.",
      recent: false,
      bullets: [
        <span key="pactolus1">
          Responsible for adding functionality and maintaining a highly asynchronous multi-threaded,
          multi-tiered windows application known as the \"Event Conference Manager\" or \"ECM\" (
          <span className="underline">using:</span> Java and C#).
        </span>,
        "Using Eclipse, debugged and analyzed the various middle-tier components making enhancements to code flow, refactoring for readability or adding additional functionality to meet customer requirements.",
        "Developed a Performance / Smoke Test[ing] Framework.",
      ],
    },
    {
      title: "Senior Software Engineer",
      dates: "(04/05 - 04/06)",
      company: "Dovetail Internet Technologies LLC - Shrewsbury, MA",
      tagline:
        "Developed Real-World Business Solutions / products designed to aid the average user / company in the creation, maintenance, and schedule deployment of Website Content (News, Events, Pictures, Marketing Documents, etc.) in a secure, automated, and completely audited process. (DovetailWRP)",
      recent: false,
      bullets: [
        'Sole-Developer responsible for creating an Application (VB6 COM DLL) that would facilitate the Encrypting & Secure Transmission of Web-Form Data by Integrating with VeriSign Email Certificates, an existing Microsoft COM/ADO DLL (Capicom.dll) while working hand-in-hand with "Microsoft Empower" Development Teams to plan, and then code an extensible Software Solution (as a result a Secure E-mail API Framework was added to .NET 3.0).',
        'Put in charge of the planning the complete rewriting / redesign of a Legacy App, called "DovetailWMS" (6 years in the making - Classic ASP), and transitioning it, using ASP.NET / C# into "DovetailWRP" within 5 months time (this goal was met with time to spare).',
      ],
    },
    {
      title: "Setup Technician",
      dates: "(2004-2005)",
      company: "Whalley Computer Associates - Southwick, MA",
      tagline:
        "Whalley Computer is a full service system integrator with over 150 full-time computer professionals and 28 network engineers located in Southwick, MA and Milford, MA. Whalley Computer services the area's largest corporations.",
      recent: false,
      bullets: [
        "Designed, using C# and Microsoft Access, a Windows Forms Based UI used to track and maintain defective / in-repair item inventories easily from anywhere within the WCA Network.",
        "Responsible for receiving a product, inspecting it for quality, installing any hardware upgrades, imaging the machine, testing it, installing any additional software upgrades / updates, performing a final inspection, then repacking, invoicing and readying the product for world-wide shipment.",
      ],
    },
  ];

  const projects = [
    {
      name: "splunk-otel-js-web",
      dates: "(2023 - Current)",
      desc: "Simple app to keep track of the time-since an event / activity.",
    },
    {
      name: "time-since",
      dates: "(2023 - Current)",
      desc: "Simple app to keep track of the time-since an event / activity.",
    },
    {
      name: "docent",
      dates: "(2023 - Current)",
      desc: "Modern React, React-Native, FastAPI and Appium demo application.",
    },
    {
      name: "sidekiq-max-jobs",
      dates: "(2020 - Current)",
      desc: "A simple plugin used to control the maximum number of jobs, or maximum runtime, for a Sidekiq worker before terminating.",
    },
    { name: "Appium", dates: "(2019 - Current)", desc: "Mobile App Automation Made Awesome." },
    { name: "list-cli", dates: "(2019 - Current)", desc: "List Management Application (CLI)." },
    { name: "python-ostruct", dates: "(2019 - Current)", desc: "OpenStruct for Python." },
    {
      name: "pymssql",
      dates: "(2017 - Current)",
      desc: "DB-API interface to Microsoft SQL Server for Python.",
    },
    {
      name: "funktoolz",
      dates: "(2017 - Current)",
      desc: "Gap bridging function[al] backports for PY2 / PY3 compatibility.",
    },
    {
      name: "formulaic",
      dates: "(2017 - Current)",
      desc: "Simple [declarative] forms for Python.",
    },
    {
      name: "php-open_struct",
      dates: "(2015 - Current)",
      desc: "A very flexible PHP data-structure (inspired by Ruby's `ostruct` library).",
    },
    {
      name: "better_attrs",
      dates: "(2015 - Current)",
      desc: "A gem that enhances `attr_accessor` and `attr_writer` to allow the specification of a callback to be invoked when an attribute value is changed.",
    },
    {
      name: "resque-retry",
      dates: "(2014 - Current)",
      desc: "A gem provides retry, delay and exponential backoff support for Resque jobs.",
    },
    {
      name: "foundry",
      dates: "(2014 - Current)",
      desc: "A gem that aims to keep hierarchical application configuration simple.",
    },
    {
      name: "purview",
      dates: "(2014 - Current)",
      desc: "A gem / framework designed to simplify data warehousing (supports: MSSQL, Oracle, MySQL, PostgreSQL).",
    },
    {
      name: "multipluck",
      dates: "(2014 - Current)",
      desc: "A gem for Rails (< 4.0) that enhances the `pluck` function to select multiple columns.",
    },
    {
      name: "attribute_doppelganger",
      dates: "(2014 - Current)",
      desc: "A gem that adds convenience methods for defining relationships between attributes.",
    },
    {
      name: "safe_i18n",
      dates: "(2013 - Current)",
      desc: "An `i18n` wrapper gem intended to simplify and expedite internationalization.",
    },
    {
      name: "resque-retry",
      dates: "(2013 - Current)",
      desc: "A resque (ruby) gem / plugin; that provides retry, delay and exponential backoff support for resque jobs.",
    },
    {
      name: "resque-concurrent-restriction",
      dates: "(2013 - Current)",
      desc: "A plugin for Resque that allows one to specify how many of the given job can run concurrently.",
    },
    {
      name: "TODO",
      dates: "(2012 - Current)",
      desc: "Web-Application & pseudo iPhone / Android Application for storing & retrieving TODOs.",
    },
    {
      name: "home-dir",
      dates: "(2012 - Current)",
      desc: "Dot-files and basic utilities (compatible with: CentOS / Red Hat, Debian / Ubuntu, OSX, Cygwin & Git Bash).",
    },
    {
      name: "hijack (Multi-User-Dungeon Client)",
      dates: "(2011 - Current)",
      desc: "Command-line client built to interface with Simutronics Gemstone IV & Dragonrealms (and more).",
    },
    {
      name: "MUD (Multi-User-Dungeon Server)",
      dates: "(1995 - Current)",
      desc: "Text-based MMORPG-like game, written originally in Q-basic, later in Visual Basic (3.0), Java (1.4), C# (1.14 / 2.0), Java (1.5 / 1.6), C# (3.5), Ruby and currently Python.",
    },
    {
      name: "Outliner",
      dates: "(2006 - 2011)",
      desc: 'An online "[Book] Outliner" developed using Javascript / AJAX / jQuery / PHP / Apache and Basic HTTP Authentication.',
    },
    {
      name: "File Uploader",
      dates: "(2011)",
      desc: "The initial prototype of a flash-free Javascript / HTML5 file uploader using Javascript / AJAX / jQuery / PHP.",
    },
    {
      name: "GSAuctionPlace & TrueWack",
      dates: "(2006)",
      desc: "Cross-browser compatible, social networking-esque micro-site(s), written in ASP.NET 2.0.",
    },
    {
      name: "The Room Online",
      dates: "(2005)",
      desc: "Cross-browser compatible, promotional band website, written in Classic ASP.",
    },
  ];

  type BulletSub = string | React.ReactNode;

  type BulletItem =
    | string
    | React.ReactNode
    | { main?: string; subs?: BulletSub[] }
    | { subs?: BulletSub[] };

  const renderBullet = (bullet: BulletItem, index: number) => {
    if (typeof bullet === "string") {
      return (
        <li key={index} className="factoid">
          {bullet}
        </li>
      );
    } else if (React.isValidElement(bullet)) {
      return (
        <li key={index} className="factoid">
          {bullet}
        </li>
      );
    } else if (typeof bullet === "object" && bullet !== null) {
      if ("main" in bullet && "subs" in bullet && bullet.subs) {
        return (
          <li key={index} className="factoid">
            {bullet.main}
            <ul>
              {bullet.subs.map((sub: BulletSub, i: number) => (
                <li key={i} className="subfactoid">
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        );
      } else if ("subs" in bullet && bullet.subs) {
        return (
          <ul key={index}>
            {bullet.subs.map((sub: BulletSub, i: number) => (
              <li key={i} className="subfactoid">
                {sub}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  };

  return (
    <>
      <div className="header">
        <div className="name bold">Jonathan W. Zaleski</div>
        <div className="contact_information">
          <a
            className="map-link"
            href="https://www.google.com/maps/place/Atlanta,+GA/@33.7674998,-84.502606,12z/data=!3m1!4b1!4m6!3m5!1s0x88f5045d6993098d:0x66fede2f990b630b!8m2!3d33.7501275!4d-84.3885209!16zL20vMDEzeXE?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            Atlanta Metropolitan Area
          </a>{" "}
          -{" "}
          <a className="phone-link" href="tel:6174557595">
            617.455.7595
          </a>{" "}
          -{" "}
          <a className="email-link" href="mailto:JonathanZaleski@gmail.com">
            JonathanZaleski@gmail.com
          </a>{" "}
          -{" "}
          <a className="github-link" href="https://www.github.com/jzaleski" target="_blank">
            jzaleski (GitHub)
          </a>
        </div>
        <div className="large_spacer">&nbsp;</div>
      </div>

      <div className="subsection">
        <span className="subsection_heading bold">Summary</span>
        <div className="extra_large_spacer">&nbsp;</div>
        <div className="paragraph">
          Highly skilled, versatile and reliable technical leader with a demonstrated history of
          working in the internet industry. Polyglot skilled in software development, scalability
          and agile methodologies. Dedicated leader and innovator who continuously strives for
          excellence. Bachelor of Arts (B.A.) focused in Computer Science, Environmental Science &
          Math from Westfield State University.
        </div>
        <div className="large_spacer">&nbsp;</div>
      </div>

      <hr />

      <div className="subsection">
        <span className="subsection_heading bold">Technical Skills</span>
        <div className="extra_large_spacer">&nbsp;</div>
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <span className="qualification_bucket bold">{skill.category}:</span>
            <div className="small_spacer">&nbsp;</div>
            <span className="qualifying_skills">{skill.items.join(", ")}</span>
            <div className="extra_large_spacer">&nbsp;</div>
          </div>
        ))}
      </div>

      <hr />

      <div className="subsection">
        <span className="subsection_heading bold">Professional Experience</span>
        <div className="extra_large_spacer">&nbsp;</div>

        {jobs.map((job, index) => {
          return (
            <div key={index} className={`job ${job.recent ? "recent-js" : ""}`.trim()}>
              <span className="title bold">{job.title}</span>
              <span className="dates normal"> {job.dates}</span>
              <div className="tiny_spacer">&nbsp;</div>
              <span className="company normal">{job.company}</span>
              <div className="medium_spacer">&nbsp;</div>
              <div className="tagline paragraph">{job.tagline}</div>
              {job.bullets.length > 0 && !isLite && (
                <>
                  <div className="extra_large_spacer">&nbsp;</div>
                  <ul className="full-js">
                    {job.bullets.map((bullet, i) => renderBullet(bullet, i))}
                  </ul>
                  <div className="extra_large_spacer">&nbsp;</div>
                </>
              )}
              {job.bullets.length === 0 && <div className="extra_large_spacer">&nbsp;</div>}
            </div>
          );
        })}

        <div className="job-footer recent-js" style={{ display: "none" }}>
          <div className="extra_large_spacer">&nbsp;</div>
          <div className="paragraph italic">
            Additional Professional Experience(s) provided upon request
          </div>
          <div className="extra_large_spacer">&nbsp;</div>
        </div>
      </div>

      <hr />

      <div className="subsection">
        <span className="subsection_heading bold">Personal / Open-Source Projects</span>
        <div className="extra_large_spacer">&nbsp;</div>
        {projects.map((project, index) => (
          <div key={index}>
            <span className="project bold">{project.name}</span>
            <span className="dates normal"> {project.dates}</span>
            <div className="medium_spacer">&nbsp;</div>
            <div className="paragraph">{project.desc}</div>
            <div className="extra_large_spacer">&nbsp;</div>
          </div>
        ))}
      </div>

      <hr />

      <div className="subsection">
        <span className="subsection_heading bold">Education</span>
        <div className="extra_large_spacer">&nbsp;</div>
        <div className="paragraph">
          Westfield State College (now Westfield State University) - Westfield, MA
        </div>
        <div className="paragraph">
          BA (Liberal Arts), 2004 - Focused in Computer Science, Environmental Science and Math
        </div>
        <div className="extra_extra_large_spacer">&nbsp;</div>
        <div className="paragraph">University of New England - Biddeford, ME</div>
        <div className="paragraph">
          Transferred in 2002 - Laboratory Research and course-work in Marine Biology, Environmental
          Science and History
        </div>
        <div className="extra_large_spacer">&nbsp;</div>
      </div>

      <hr />

      <div className="subsection">
        <span className="subsection_heading bold">References</span>
        <div className="extra_large_spacer">&nbsp;</div>
        <div className="paragraph italic">
          Professional / Personal References provided upon request
        </div>
        <div className="extra_large_spacer">&nbsp;</div>
      </div>
    </>
  );
};

export default ResumeContent;
