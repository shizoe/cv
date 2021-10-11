import { Container } from "../components/container/Container";
import DefinitionList from "../components/definitionList/DefinitionList";
import { PencilFill, TelephoneFill, Github } from "styled-icons/bootstrap";
import { Globe, Mail } from "styled-icons/entypo";
import {
  Applearcade,
  Nextdotjs,
  Dotnet,
  Csharp,
  Java,
  Xamarin,
  Scikitlearn,
  Laravel,
  R,
  Yarn,
  Wordpress,
  Firebase,
  Mysql,
  Sqlite,
  Mongodb,
} from "styled-icons/simple-icons";
import { Guitar } from "styled-icons/fluentui-system-filled";
import { VolunteerActivism } from "styled-icons/material-rounded";
import { Footsteps } from "styled-icons/ionicons-solid";
import { Database } from "@styled-icons/heroicons-outline";
import { Html5, Web } from "@styled-icons/foundation";
import { Desktop, PhoneDesktop } from "@styled-icons/fluentui-system-regular";
import { BookMedical, Chess } from "@styled-icons/fa-solid";
import { Movie } from "@styled-icons/material-twotone";
import { Book } from "@styled-icons/boxicons-solid";
import {
  Css3,
  Git,
  Javascript,
  Jquery,
  Php,
  ReactLogo,
} from "@styled-icons/boxicons-logos";
import { Npm, Python } from "@styled-icons/fa-brands";

const data = {
  personalInfo: {
    firstName: "Mabo",
    lastName: "Mbebeta",
    profilePic: "/me.jpeg",
    profile: (
      <>
        <p>
          Entry level Supply Chain Data Analyst with 7 years’ experience within
          the pharmaceutical industry at various levels.
        </p>
        <Container padBottom={false}>
          <DefinitionList
            listItems={[
              "Strong data collection skills, data cleaning and prepping using R, Python and Excel.",
              "Strong understanding in pharmaceutical commodity management.",
              "Endurance to working long hours, often standing up.",
              "Ability to prioritize and handle multiple tasks and heavy workloads.",
              "Skilled in planning, organizing and management of resources.",
              "Exceptional communication skills, with experience in leading small teams and building confidence and engagement.",
              "Able to work well on own initiative, as well as working successfully as part of a team.",
              "Focused on continuous development, both professionally and personally.",
              "Experienced in data visualization using PowerBi, Tableau, Google Sheets and ggplot2.",
              "Looking for a new role that can offer a challenging and exciting envionment.",
            ]}
          />
        </Container>
        <p>
          To be part of a team that aims to improve the availability of life
          saving commodities throughout the logistics system by the utilization
          of quality and effective evidence-based approaches to improve service
          delivery in the health sector. Furthermore, I would love to obtain a
          master’s degree in data science, machine learning and analytics.
        </p>
        <p>
          Great problem solver and extremely motivated to learn new skills and
          technologies.
        </p>
      </>
    ),
  },

  certification: [
    {
      leftHeading: "June 2021",
      rightHeading:
        "Applied Data Science II: Machine Learning & Statistical Analysis (with honors)",
      subHeading: "World Quant University",
    },
    {
      leftHeading: "March 2021",
      rightHeading:
        "Applied Data Science I: Scientific Computing & Python (with honors)",
      subHeading: "World Quant University",
    },
    {
      leftHeading: "May 2019",
      rightHeading: "Health Information System",
      subHeading: "POLHN",
    },
    {
      leftHeading: "January 2019",
      rightHeading: "Knowledge Management",
      subHeading: "Global Health Programs",
    },
    {
      leftHeading: "February 2018",
      rightHeading: "Clinical Mentorship",
      subHeading: "USAID | MCSP",
    },
    {
      leftHeading: "June 2017",
      rightHeading:
        "Essential Medicines Supply Chain (Zambia EMPLIP Logistics System) ",
      subHeading:
        "USAID Global Health Supply Chain – Procurement & Supply Management (GHSC - PSM)",
    },
    {
      leftHeading: "December 2016",
      rightHeading: "Management in Health",
      subHeading: "The Open Learning Campus",
    },
    {
      leftHeading: "March 2016",
      rightHeading: "ART Commodity Management",
      subHeading: "FHI 360 | ZPCT IIB",
    },
    {
      leftHeading: "June 2015",
      rightHeading: "PMTCT/OPTION B+",
      subHeading: "Ministry of Health & Chreso Ministries",
    },
    {
      leftHeading: "November 2012",
      rightHeading: "National Anti-Retroviral Logistics System",
      subHeading: "USAID |DELIVER PROJECT",
    },
  ],
  skills: [
    {
      icon: <Javascript className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "JavaScript",
    },
    {
      icon: <ReactLogo className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "React",
    },
    {
      icon: <Nextdotjs className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Next.js",
    },
    {
      icon: <Jquery className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "jQuery",
    },
    {
      icon: <Html5 className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "HTML5",
    },
    {
      icon: <Css3 className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "CSS3",
    },
    {
      icon: <Csharp className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "C#",
    },
    {
      icon: <Dotnet className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: ".NET MVC",
    },
    {
      icon: <Php className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "PHP",
    },
    {
      icon: <Wordpress className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Wordpress",
    },
    {
      icon: <Xamarin className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Xamarin Forms",
    },
    {
      icon: <Java className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Java",
    },
    {
      icon: <Git className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Git",
    },
    {
      icon: <Github className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Github",
    },
    {
      icon: <Npm className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "NPM",
    },
    {
      icon: <Scikitlearn className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Scikitlearn",
    },
    {
      icon: <Laravel className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Laravel",
    },
    {
      icon: <Python className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Python",
    },
    {
      icon: <R className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "R",
    },
    {
      icon: <Yarn className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Yarn",
    },
    {
      icon: <Firebase className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Firebase",
    },
    {
      icon: <Mysql className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "MySQL",
    },
    {
      icon: <Sqlite className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "SQlite",
    },
    {
      icon: <Mongodb className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Mongodb",
    },
  ],
  interests: [
    {
      icon: <Chess className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Playing Chess",
    },
    {
      icon: <Movie className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Watching Movies",
    },
    {
      icon: <PencilFill className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Drawing",
    },
    {
      icon: <VolunteerActivism className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Volunteering",
    },
    {
      icon: <Footsteps className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Walking / Running",
    },
  ],
  experience: [
    {
      leftHeading: "Jun 2021 - Present",
      rightHeading: "Supply Chain Data Analyst Intern",
      subHeading:
        "Maryland Global Initiative Cooperation - ZAMPHIA Project, Lusaka",
      notes: (
        <a
          href="https://www.umaryland.edu/mgic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.umaryland.edu/mgic
        </a>
      ),
      details: (
        <Container padBottom={false}>
          <DefinitionList
            id="SupplyChainDataAnalystResponsibilities"
            definitionTerm="Responsibilities"
            listItems={[
              "Responsible for coordinating the data collection, cleaning, analysis, and reporting on behalf of the unit.",
              "Facilitate the implementation of the Logistics Management System (LMS), assist with the development of various data products, and support the execution of the supply chain operations.",
              "Support supply chain Data Science and Machine Learning products relating to; Information Management, Quality Management, Performance Management, Human Capital Development and Task Management.",
              "Master data creation, modification and maintenance including but not limited to the update planning parameters in the LMS including data on usages, shelf life, lead-times, re-order quantities, items on order, actual stock figures and inventory targets.",
              "Responsible for adjusting planned stock receipt dates when the projected closing stock is equal to or less than the minimum stock level and generating expedited stock transfer requests.",
              "Periodic reporting including but not limited to inbound receipts, stock status, batch and aging analysis, bin location and pallet utilization analysis reports.",
              "Analyze satellite lab level reports, checking the opening balances, the quantity received in the period and the quantity used in the period.",
              "Cross check that closing stock for previous web matches the opening balance for a subsequent satellite lab in a new web and escalate discrepancies as required.",
              "Match consumption (quantity utilized) to participant numbers on a weekly basis and escalate and investigate discrepancies that fall outside the allowed variance threshold.",
              "Assist with the creation of departmental operational dashboards.",
            ]}
          />

          <DefinitionList
            id="SupplyChainDataAnalystHighlights"
            definitionTerm="Key highlights"
            listItems={[
              "Double check quantities of commodites shipped from ZamStat stores and CHAZ stores against what is recieved in region stores",
              "Develop a report weekly on the descripancies obsereved in all the stores managed.",
              "verifing Items that are picked for shipping if the quantities and pack sizes are correct.",
              "Check through the daily consumption register to ensure that it is updated with the latest transactions.",
              "Verify items recieved from the vendor and notify the end user to come and also verify the quality and quantity.",
              "Perform periodic inventory checks to validate accuracy of physical inventory, stock cards, warehouse inventory records and the LMS.",
              "Conduct a Pareto (ABC) Analysis and segregate the commodities into categories.",
              "Check the degree of inventory accuracy by calculating the variance reports and develop recommendations.",
            ]}
          />
        </Container>
      ),
    },
    {
      leftHeading: "May 2020 – May 2021",
      rightHeading: "Pharmacy Technologist",
      subHeading: "MOH - Mwense DHO, Mwense",
      notes: (
        <a
          href="https://www.moh.gov.zm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.moh.gov.zm/
        </a>
      ),
      details: (
        <DefinitionList
          id="PharmacyTechnologistResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Responsible for Inventory control systems in the facility.",
            "Troubleshooting of eSCMIS web edition at Mwense Stage 2 RHC.",
            "Compete for the essential medicines and medical supply together with the Antiretroviral reports in eSCMIS facility edition.",
            "Development of drug bulletin for the district monthly.",
            "Dispense medication and provide pharmacological information relating to dosage, possible side effects and interactions.",
            "Aggregate data for HIA1 and HIA2 for the facility, clean it and analyze it for data review meetings.",
            "Mobile application development and maintenance for data collection for the Malaria Survey in Mambilima catchment area.",
            "Apply both supervised and unsupervised learning methods to develop an algorithm that can help which person next can suffer from Malaria.",
            "Perform a t test on the data collected to determine if the variables selected influence malaria disease.",
          ]}
        />
      ),
    },
    {
      leftHeading: "Jul 2019 – Mar 2020",
      rightHeading: "Pharmacy Consultant",
      subHeading: "USAID - Safe Project, Kitwe",
      notes: (
        <a
          href="https://www.jsi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.jsi.com
        </a>
      ),
      details: (
        <DefinitionList
          id="PharmacyConsultantResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Responsible for all inventory control processes.",
            "Conducting a physical stock assessment of ART commodities at the facility to ensure that multi-month dispensation is always conducted.",
            "Prepare reports and presentations on multi-month dispensation progress against target.",
            "Ensure that the transition to the TLD regimen is fast-tracked for all stable clients.",
            "Analyze the impart of DSD program by checking against missed appointments and late for pharmacy pickups.",
            "Enroll all eligible clients on IPT.",
            "Quantify the required TLD and TLE for 6 MMD.",
            "Offer technical support on eSCMIS and SmartCare usage.",
            "Monitor adverse reaction and report accordingly. Orient staff on the DSD models available at the facility.",
            "Monitor adverse drug reactions, medication error, product quality problems and report accordingly.",
            "Supporting the facility in charge as required, including ensuring pharmaceutical standards are maintained.",
            "Aggregate TLD transition data and Multi Month Dispensation data and develop reports and visualizations monthly.",
            "Report on the status of the 95/95/95 target in relation to IPT enrollment.",
          ]}
        />
      ),
    },
    {
      leftHeading: "Feb 2019 – Jun 2019",
      rightHeading: "Data Entry Clerk",
      subHeading: "USAID & SIDA RMNCAH-N Project, Mwense",
      details: (
        <DefinitionList
          id="DataEntryClerkResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Short term role covering for long term sickness.",
            "Supporting the District Health Information officer in ensuring that all reports from health facilities are delivered on time.",
            "Entering of monthly HIA 1 and HIA 2 reports for facilities in the DHIS2 database.",
            "Assist the district health information officer develop presentation from the captured data using indicator tracking and searching.",
            "Verifying the reported data with program officers before entering the database in an advert that an outlier is sported to ensure that only accurate, correct and consistent data is entered.",
            "Help Stage 2 RHC with data analysis and presentations for the monthly data review meetings.",
            "Ensure that the data presented is easy to understand by all departments to foster intervention development.",
          ]}
        />
      ),
    },
    {
      leftHeading: "Oct 2015 – Jan 2019",
      rightHeading: "Pharmacy Technologist",
      subHeading: "MOH - Mwense DHO, Mwense",
      notes: (
        <a
          href="https://www.moh.gov.zm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.moh.gov.zm
        </a>
      ),
      details: (
        <DefinitionList
          id="PharmTechResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Conduct dispensing of both essential medicines and antiretroviral drugs to clients and offer medication counseling to clients to ensure correct taking of the medications and prevent adverse reactions.",
            "Supervise the community health assistants assigned to the pharmacy department and mentor them.",
            "Dispensing ARV’s to clients using eLMIS facility edition and SmartCare to produce accurate data and provide updates on the latest pharmaceutical practices.",
            "Conduct routine pharmacovigilance activities at the ART clinic by sampling patients initiated on ART drugs with co-infections and monitoring them for adverse reactions.",
            "Assist the district health office in conducting distribution of drugs and medical supplies to health centers in the district, monitor their stock status to prevent overstocks which lead to commodities expiring.",
            "Do routine physical counts to check stock status and track expiry of commodities and implementing the use of FEFO and FIFO when it comes to storage.",
            "Conduct performance assessments to ascertain the quality of pharmaceutical services provided in the district.",
            "Monitor the utilization of essential drugs and pharmaceuticals to identify gaps and develop interventions.",
            "Assist in the monitoring of rational use of Antibacterial in the district through the antimicrobial subcommittee at Mwense District Hospital.",
            "Conduct forecasting and quantification of essential medicines, medical supplies, and antiretroviral drugs for the district.",
            "Provide technical support and on-site training of staff in the usage of eLMIS facility edition.",
            "Develop a viral load monitoring application to track the 90/90/90 target in relation to viral suppression.",
            "Troubleshoot eLMIS facility edition. Provide mentorship in the essential medicine’s logistics improvement program.",
            "Preform on job training together with JSI – AIDSfree to facilities with newly deployed eLMIS facility edition.",
            "Assist in the deployment and networking of facilities with facility edition.",
            "Conduct routine monitoring of facilities in the district with eLMIS facility edition on the utilization especially dispensing of ARV drugs to clients using the system.",
          ]}
        />
      ),
    },
    {
      leftHeading: "Nov 2013 – Sep 2015",
      rightHeading: "ART Pharmacy Technologist",
      subHeading: "Chreso Ministries - ART & VCT Centre, Kabwe",
      notes: (
        <a
          href="https://chreso.info/art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          chreso.info/art
        </a>
      ),
      details: (
        <DefinitionList
          id="ARTPharmTechResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Ensure that reporting and ordering of antiretroviral drugs are done at appropriate times to establish and operate a self, secure, reliable and sustainable supply chain management system of antiretroviral medications and other products needed.",
            "Dispensing drugs and giving pharmacological information to patients about side effects, drug interactions, and drug modifications.",
            "Monitoring and evaluating stoke to ensure that the drugs are always available for the clients until the next delivery time.",
            "Perform analysis on stock availability vs projected clients. Conducting dispensations using SmartCare and follow up on late pharmacy pick up to promote adherence to drug treatment.",
            "Produce regimen data annually using SmartCare to take note of the number of clients on each regimen and submit for quantification of antiretroviral drugs.",
            "Conduct weekly presentations on stock availability and late for pharmacy pickup.",
            "Develop drug bulletin for the prescribing unit to know what drugs are available, their expiry and promote prescription creation of available commodities.",
          ]}
        />
      ),
    },
    {
      leftHeading: "Aug 2013 – Oct 2013",
      rightHeading: "Community Pharmacy Technologist",
      subHeading: "Palse Pharmacy, Lusaka",
      details: (
        <DefinitionList
          id="ComPharmTechResponsibilities"
          definitionTerm="Responsibilities"
          listItems={[
            "Sell healthcare products, essential medicines, and other products.",
            "Responsible for stock monitoring and replenishment.",
            "Recommend which medications to stock based on market analysis and sales.",
            "Recommend which pharmaceutical vendors to engage with based on trade name preference by the community.",
            "Offer recommendations on alternative treatment types.",
            "Recommend generic cheaper versions to clients based on client needs.",
            "Provide basic diagnostic tests including Malaria test (RDT) and blood sugar.",
          ]}
        />
      ),
    },
  ],
  education: [
    {
      leftHeading: "2018 - 2020",
      rightHeading: "University of the People, U.S.A",
      details: "Bachelor of Science in Computer Science",
    },
    {
      leftHeading: "2010 - 2012",
      rightHeading: "Evelyn Hone Collge of Applied Arts and Commerce, Zambia",
      details: "Diploma in Pharmacy Technology",
    },
    {
      leftHeading: "2005 - 2007",
      rightHeading: "Chizongwe Secondary School, Zambia",
      details: "Grade 12 Full School Certificate",
    },
  ],
  contacts: [
    {
      id: "telephone",
      icon: <TelephoneFill className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "+260 973 203 619",
    },
    {
      id: "email",
      icon: <Mail className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "mabombebeta@gmail.com",
    },
    {
      id: "website",
      icon: <Globe className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "www.mabombebeta.me",
    },
  ],

  activities: [
    {
      icon: <Database className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Integrating of information technology (Database Systems) in health care to improve patient care and improve evidence-based interventions.",
    },
    {
      icon: <Desktop className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Desktop application development using Java and C#.",
    },
    {
      icon: <Web className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Full Stack Web Development (Html, CSS, JavaScript, PHP, Python, React, Vue and C#).",
    },
    {
      icon: <PhoneDesktop className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Cross Platform Application Development with Xamarin Forms (Android, IOS an Windows) & React Native.",
    },
    {
      icon: <Book className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Reading, both scientific journals and logistics management newsletters in connection with my program for pleasure, is my passion.",
    },
    {
      icon: <BookMedical className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Follow up on the current medical breakthroughs including the use of nano techs in treating medical conditions and performing surgery in hard-to-reach areas.",
    },
  ],
  experiencedIn: [
    {
      icon: <Applearcade className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "GIT",
    },
    {
      icon: <Guitar className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Photoshop",
    },
    {
      icon: <PencilFill className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "VS Code, Visual Studio",
    },
    {
      icon: <VolunteerActivism className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Exceed",
    },
    {
      icon: <Footsteps className="inline h-7 w-7 mr-3 text-blue-500" />,
      name: "Guidewire",
    },
    {
      name: "AWS, Azure Dev Ops",
    },
    {
      name: "Netlify",
    },
    {
      name: "Heroku",
    },
  ],
};

export default data;
