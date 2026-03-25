import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  Cloud,
  Cpu,
  Terminal,
  Zap,
  Layers,
  ChevronRight,
  MapPin,
  Phone,
  Globe,
  FileText,
  ExternalLink,
  Send,
  Bot,
  Calendar,
  DollarSign,
  Search,
  Code
} from "lucide-react";
import { ChatBot } from "./components/ChatBot";

// --- Data ---

export const CV_DATA = {
  name: "Andrew Pham",
  title: "Senior Software & Data Engineer",
  specialization: "AWS, Python & AI",
  location: "Australia",
  email: "andrew.hn.pham@gmail.com",
  phone: "+61 401 519 465",
  linkedin: "andrewhnpham",
  website: "andrewpham.website",
  github: "water-bear-dev",
  calendly: "https://calendly.com/andrew-hn-pham/45min",
  services: [
    {
      title: "Reduce Cloud Cost",
      description: "A risk-free audit of your infrastructure. I identify waste (idle resources, legacy storage) and implement the fixes, so you keep the savings."
    },
    {
      title: "Data Platform Audit",
      description: "Deep-dive analysis to fix slow queries and broken pipelines. I identify exactly why your platform is slow or unreliable and provide a clear technical roadmap to fix it."
    },
    {
      title: "Web Dev & Deployment",
      description: "Full-stack development with automated 'Golden Path' deployment. From custom Python/React applications to building automated CI/CD pipelines on AWS for faster, safer releases."
    }
  ],
  introduction: {
    greeting: "Hello there!",
    welcome: "I'm Andrew Pham, and it's genuinely a pleasure to welcome you to my corner. Thank you for taking the time to visit my site.",
    professional: "I am a Senior Software & Data Engineer with 5+ years of experience across multiple industries, specialising in building robust, efficient, and scalable data pipelines.",
    summary: "Skilled in Python, TypeScript, data streaming, and AWS, I have a proven track record of designing fault-tolerant cloud infrastructures and turning raw data into actionable insights.",
    achievements: [
      "Designed, deployed, and maintained large-scale, fault-tolerant critical cloud infrastructures in AWS.",
      "Introduced GenAI into NAB's customer contact centre.",
      "Transitioned NAB's Customer Contact Centre from on-premise to AWS and reduced AWS downtime.",
      "Deployed Accenture's Big Data monitoring solution and redesigned Monash University Health's database system."
    ],
    closing: "Throughout my career, I've focused on creating reliable data architectures that empower businesses to make informed decisions. Whether it's optimising existing systems, developing new data solutions, or troubleshooting complex challenges, I'm always driven by a commitment to quality and a desire to deliver high-quality results."
  },
  skills: [
    { category: "Data Platforms", items: ["RDS", "DynamoDB", "Redshift", "PostgreSQL", "dbt"] },
    { category: "Cloud", items: ["S3", "EC2", "CloudFormation", "Lambda", "ECS", "EKS", "IAM", "DMS", "SNS", "SQS", "Lake Formation", "Glue", "EMR", "API Gateway"] },
    { category: "IaC", items: ["Docker", "Terraform", "Kubernetes"] },
    { category: "Languages", items: ["Python", "PySpark", "SQL", "TypeScript", "JavaScript", "Bash"] },
    { category: "Streaming & Observability", items: ["Spark", "CloudWatch", "Confluent Kafka", "Tableau", "Splunk"] },
    { category: "Version Control", items: ["Git", "Harness", "Jenkins"] },
    { category: "Tools & Practices", items: ["Agile", "Scrum", "KMS", "SSM", "ServiceNow", "Jira", "Confluence"] }
  ],
  experience: [
    {
      company: "National Australia Bank (NAB)",
      location: "Melbourne, VIC, Australia",
      roles: [
        {
          title: "Senior Software & Data Engineer",
          period: "November 2024 – Present",
          team: "Customer Contact Centre (CCT) - formerly Frontline and Sales Technology (FAST)",
          description: "My responsibilities include designing and implementing scalable, high-performance data pipelines to process and transform large volumes of structured and unstructured data using Spark, Python and API Gateway, reducing data processing time by 40% and enabling near-real-time insights for business stakeholders.",
          highlights: [
            "Built real-time streaming data pipelines using Apache Kafka and Kinesis, enabling the detection of anomalies and fraud in customer interactions.",
            "Implemented load balancers, real-time monitoring and alerting using CloudWatch, reducing MTTD and MTTR by 50%."
          ],
          techStack: ["TypeScript", "AWS", "OpenSearch", "Python", "SQL"]
        },
        {
          title: "Data Engineer",
          period: "November 2021 – October 2024",
          team: "Assisted eXperience Technologies (AXT)",
          description: "Within NAB’s Assisted eXperience Technologies (AXT), I contribute to the SoundWave squad, focusing on NAB’s Telephone Banking and Contact Centre operations. My responsibilities include optimising customer interactions through enhanced self-service options and seamless routing to appropriate agents.",
          highlights: [
            "Migrated on-premise Telephone Banking platform and contact centre from Genesys to AWS.",
            "Maintenance and refactoring of existing service APIs and back ends.",
            "Improved the development pipeline process, reducing automated testing time by 32%.",
            "Winner of 2022 NAB’s Expert coding competition."
          ],
          techStack: ["TypeScript", "AWS", "Splunk", "SQL"]
        }
      ]
    },
    {
      company: "Monash University",
      location: "Clayton, VIC, Australia",
      roles: [
        {
          title: "Teaching Associate",
          period: "July 2019 – July 2024",
          team: "Faculty of Information Technology",
          description: "I teach undergraduate students in Web Development (HTML, CSS, JS, PHP) and post-graduate students on data visualisation (Tableau, R, D3.js). Previously acted as a Technical Mentor for capstone projects, guiding students in creating web solutions for Victorian clients.",
          highlights: [
            "FIT5147: Information Visualisation and Exploration",
            "FIT3047 - 3048: Industry Experience Project",
            "FIT2104: Web-Database Interface",
            "FIT1050: Web Fundamentals",
            "FIT1049: IT Professional Practice"
          ],
          techStack: ["Tableau", "R", "D3.js", "PHP", "HTML/CSS/JS"]
        },
        {
          title: "Research Assistant / Web Developer",
          period: "January 2024 – April 2024",
          team: "The Centre of Learning Analytics at Monash (CoLAM)",
          description: "Designed and implemented a React-based feedback platform for students and tutors. The site incorporated ChatGPT to help students analyse strengths and weaknesses after an assignment.",
          highlights: [
            "UI reorganisation and integrated React-calendar for assessment planning.",
            "Integrated ChatGPT to summarise key focus areas for students after assessment results."
          ],
          techStack: ["React", "Redux", "TypeScript", "ChatGPT"]
        }
      ]
    },
    {
      company: "Accenture",
      location: "Melbourne, VIC, Australia",
      roles: [
        {
          title: "Technical Architect",
          period: "June 2021 – November 2021",
          team: "MyWizard AiOps - STACK Monitoring",
          description: "Optimised the team’s Splunk environment, creating dashboards, refining searches, and resolving bugs for global clients. Developed Python and Shell scripting skills for deploying Splunk applications across RHEL and Windows Server environments.",
          highlights: [
            "Deployed new features through AWS using Splunk and Python for IT infrastructure oversight.",
            "Enhanced a Python-based application for retrieving infrastructure logs.",
            "Standardised and documented best practices, decreasing onboarding time."
          ],
          techStack: ["Splunk", "Python", "RHEL"]
        }
      ]
    },
    {
      company: "Monash University",
      location: "Richmond, VIC, Australia",
      roles: [
        {
          title: "Database Developer",
          period: "October 2020 – May 2021",
          description: "Spearheaded the redesign and development of database architecture, migrating from Microsoft Access to Microsoft SQL Server. Built analytics dashboards using Tableau for research insights into patient behaviour.",
          highlights: [
            "Led migration to MS SQL Server, enhancing scalability and reducing storage costs by $15k.",
            "Deployed Tableau reporting dashboards for key insights into ambulance responses."
          ],
          techStack: ["MS SQL Server", "Tableau", "Azure"]
        }
      ]
    },
    {
      company: "Transdev Australasia",
      location: "Melbourne, VIC, Australia",
      roles: [
        {
          title: "Business Intelligence Developer",
          period: "January 2020 – April 2020",
          description: "Developed data models, dashboards, and data mapping documentation. Explored cloud solutions for enhanced business intelligence using PowerBI and DAX.",
          highlights: [
            "Migrated legacy systems to Azure, resulting in a 60% decrease in maintenance costs.",
            "Deployed scheduling solutions through Azure, improving rostering efficiency by 12%."
          ],
          techStack: ["T-SQL", "PowerBI", "DAX", "SSIS"]
        }
      ]
    }
  ],
  certifications: [
    { title: "Solutions Architect Professional", issuer: "Amazon Web Services", date: "January 2025" },
    { title: "Data Engineer Associate", issuer: "Amazon Web Services", date: "July 2024" },
    { title: "Certified Banking Fundamentals", issuer: "FINSIA", date: "July 2024" },
    { title: "Solutions Architect Associate", issuer: "Amazon Web Services", date: "December 2023" }
  ],
  education: [
    {
      degree: "Master of Information Technology",
      school: "Monash University",
      location: "Clayton, VIC, Australia",
      description: "My academic journey began as an international student at Monash University. Completing both my bachelor's and master's degrees provided me with a robust foundation in web development, data management, and project management—skills that continue to guide my professional path.",
      extra: "Outside of academics, I was deeply involved in the Monash Vietnamese International Students' Club for over four years, developing strong communication and leadership skills."
    },
    {
      degree: "Bachelor of Information Technology",
      school: "Monash University",
      location: "Clayton, VIC, Australia",
      description: "Explorations in business IT, mobile app development, governance, software, and data management ignited my passion for data engineering and cloud technologies."
    }
  ],
  awards: [
    { title: "Systems Developer Coding Challenge – Winner", issuer: "AWS", date: "November 2025" },
    { title: "Tri-Country Coding Tournament - Winner", issuer: "NAB", date: "April 2023" },
    { title: "Expert Coding Competition - Winner", issuer: "NAB", date: "2022" }
  ]
};

// --- Components ---

interface SectionHeaderProps {
  icon: any;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100">{title}</h2>
      <div className="flex-grow h-px bg-zinc-800 ml-4"></div>
    </div>
  );
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="px-3 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-colors">
      {skill}
    </span>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("welcome");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const cvData = CV_DATA;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs = [
    { id: "welcome", label: "Welcome", icon: Globe },
    { id: "services", label: "Services", icon: Layers },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-400 font-sans selection:bg-blue-500/30">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <main className="relative max-w-5xl mx-auto px-6 pt-8 pb-20 lg:pt-12 lg:pb-32">

        {/* Tab Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-md sticky top-4 z-50">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-600"}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "welcome" && (
              /* Welcome Section */
              <section className="mb-24">
                {/* Static Hero Section */}
                <div className="relative h-[40vh] min-h-[320px] w-full mb-16 rounded-[2.5rem] overflow-hidden border border-zinc-800/50 group">
                  <div className="absolute inset-0">
                    <img
                      src="https://picsum.photos/seed/data-engineer/1920/1080?blur=2"
                      alt="Hero Background"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="space-y-4"
                    >
                      <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-md">
                        {cvData.title}
                      </span>
                      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                        Crafting Data <br />
                        <span className="text-blue-400">Architectures.</span>
                      </h1>
                      <p className="max-w-md mx-auto text-zinc-300 text-lg font-medium leading-relaxed">
                        Building the foundations for intelligent, data-driven innovation.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button
                          onClick={() => setIsChatOpen(true)}
                          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                          <Bot className="w-5 h-5" />
                          Talk to AI Assistant
                        </button>
                        <a
                          href={cvData.calendly}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-zinc-800/80 text-zinc-100 font-medium rounded-xl hover:bg-zinc-700 transition-colors flex items-center gap-2 border border-zinc-700 w-full sm:w-auto justify-center backdrop-blur-sm"
                        >
                          <Calendar className="w-5 h-5" />
                          Book a Meeting
                        </a>
                      </div>
                    </motion.div>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="max-w-2xl">
                    <motion.h1
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tighter mb-4"
                    >
                      {cvData.introduction.greeting}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl md:text-3xl font-medium text-blue-400 tracking-tight leading-tight"
                    >
                      {cvData.introduction.welcome}
                    </motion.p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={`https://github.com/${cvData.github}`} target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-zinc-100 hover:border-zinc-700 transition-all" title="GitHub"><Github className="w-6 h-6" /></a>
                    <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-zinc-100 hover:border-zinc-700 transition-all" title="LinkedIn"><Linkedin className="w-6 h-6" /></a>
                    <a href={`mailto:${cvData.email}`} className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:text-zinc-100 hover:border-zinc-700 transition-all" title="Email"><Mail className="w-6 h-6" /></a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-zinc-300">
                    <div className="space-y-4">
                      <p className="text-xl text-zinc-100 font-medium">{cvData.introduction.professional}</p>
                      <p>{cvData.introduction.summary}</p>
                    </div>

                    <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Award className="w-24 h-24 text-blue-400" />
                      </div>
                      <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Key Impact & Achievements</h3>
                      <ul className="space-y-3 relative z-10">
                        {cvData.introduction.achievements.map((achievement, i) => (
                          <li key={i} className="text-zinc-200 text-lg font-medium leading-snug flex gap-3">
                            <span className="text-blue-500 mt-1 shrink-0">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-zinc-400">{cvData.introduction.closing}</p>

                    <div className="pt-8 border-t border-zinc-800">
                      <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-400" />
                        Your Next Software & Data Engineer?
                      </h2>
                      <p className="mb-6">
                        Are you currently searching for a dedicated and skilled <strong className="text-zinc-100">software & data engineer</strong> to join your team? I invite you to explore my experience and qualifications in more detail.
                      </p>
                      <button
                        onClick={() => handleTabChange("resume")}
                        className="px-8 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-2xl hover:bg-blue-400 hover:text-white transition-all flex items-center gap-2 group"
                      >
                        View Resume
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-8">
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                      <h3 className="text-zinc-100 font-bold mb-4 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        Quick Connect
                      </h3>
                      <div className="space-y-4 text-sm">
                        <p className="text-zinc-400">
                          I'm always open to discussing new opportunities or data challenges.
                        </p>
                        <div className="pt-4 space-y-3">
                          <a href={`mailto:${cvData.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors">
                            <Mail className="w-4 h-4" /> {cvData.email}
                          </a>
                          <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                      <h3 className="text-zinc-100 font-bold mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        Location
                      </h3>
                      <p className="text-sm text-zinc-400">
                        Based in <span className="text-zinc-200">Melbourne, Australia</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "services" && (
              /* Services Section */
              <section className="mb-24">
                <SectionHeader icon={Layers} title="Services" />
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all group flex flex-col">
                      <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-8 group-hover:bg-blue-500/20 transition-colors">
                        <DollarSign className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-100 mb-3">Reduce Cloud Cost</h3>
                      <p className="text-blue-400 text-base font-medium mb-6">"I cut your AWS/Azure bills without reducing performance."</p>
                      <p className="text-zinc-400 text-base leading-relaxed flex-grow">
                        A risk-free audit of your infrastructure. I identify waste (idle resources, legacy storage) and implement the fixes, so you keep the savings.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all group flex flex-col">
                      <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-8 group-hover:bg-blue-500/20 transition-colors">
                        <Search className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-100 mb-3">Data Platform Audit</h3>
                      <p className="text-blue-400 text-base font-medium mb-6">"Deep-dive analysis to fix slow queries and broken pipelines."</p>
                      <p className="text-zinc-400 text-base leading-relaxed flex-grow">
                        I identify exactly why your platform is slow or unreliable and provide a clear technical roadmap to fix it.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all group flex flex-col">
                      <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-8 group-hover:bg-blue-500/20 transition-colors">
                        <Code className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-100 mb-3">Web Dev & Deployment</h3>
                      <p className="text-blue-400 text-base font-medium mb-6">"Full-stack development with automated 'Golden Path' deployment."</p>
                      <p className="text-zinc-400 text-base leading-relaxed flex-grow">
                        From custom Python/React applications to building automated CI/CD pipelines on AWS for faster, safer releases.
                      </p>
                    </div>
                  </div>

                  <div className="p-10 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <h3 className="text-3xl font-bold text-zinc-100">Ready to optimise your infrastructure?</h3>
                      <p className="text-lg text-zinc-400">
                        Let's discuss your current challenges and see how I can help you build faster, more reliable, and cost-effective solutions.
                      </p>
                    </div>
                    <a
                      href={cvData.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-colors flex items-center gap-3 shrink-0 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    >
                      <Calendar className="w-5 h-5" />
                      Book a Chat
                    </a>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "resume" && (
              /* Static Resume Section */
              <div className="space-y-24">
                {/* Skills Sub-section */}
                <section>
                  <SectionHeader icon={Code2} title="Technical Arsenal" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cvData.skills.map((skillGroup: any, i: number) => {
                      const Icon = {
                        "Data Platforms": Database,
                        "Cloud": Cloud,
                        "IaC": Cpu,
                        "Languages": Code2,
                        "Streaming & Observability": Zap,
                        "Version Control": Terminal,
                        "Tools & Practices": Layers
                      }[skillGroup.category] || Terminal;

                      return (
                        <motion.div
                          key={skillGroup.category}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-all group"
                        >
                          <h3 className="text-zinc-200 font-bold mb-4 flex items-center gap-3">
                            <div className="p-1.5 bg-zinc-800/50 rounded-md border border-zinc-700/50 group-hover:border-blue-500/30 transition-colors">
                              <Icon className="w-4 h-4 text-blue-400" />
                            </div>
                            {skillGroup.category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill: string) => <SkillBadge key={skill} skill={skill} />)}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>

                {/* Experience Sub-section */}
                <section>
                  <SectionHeader icon={Briefcase} title="Professional Journey" />
                  <div className="space-y-16">
                    {(cvData.experience as any[]).map((exp, i) => (
                      <div key={i} className="relative pl-8 border-l border-zinc-800">
                        <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div className="mb-8">
                          <h3 className="text-3xl font-bold text-zinc-100 tracking-tight">{exp.company}</h3>
                          <p className="text-zinc-500 flex items-center gap-2 mt-2">
                            <MapPin className="w-4 h-4" /> {exp.location}
                          </p>
                        </div>
                        <div className="space-y-12">
                          {exp.roles.map((role: any, j: number) => (
                            <div key={j} className="group">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                  <h4 className="text-xl font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">{role.title}</h4>
                                  {role.team && <p className="text-sm text-blue-500/70 font-medium mt-1 uppercase tracking-wider">{role.team}</p>}
                                </div>
                                <span className="text-sm font-mono px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 whitespace-nowrap">
                                  {role.period}
                                </span>
                              </div>

                              {role.description && (
                                <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                                  {role.description}
                                </p>
                              )}

                              <div className="space-y-4 mb-6">
                                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Key Highlights</h5>
                                <ul className="space-y-3">
                                  {role.highlights.map((bullet: string, k: number) => (
                                    <li key={k} className="text-zinc-400 leading-relaxed flex gap-3">
                                      <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {role.techStack && (
                                <div className="flex flex-wrap gap-2 pt-4">
                                  {role.techStack.map((tech: string) => (
                                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-blue-500/5 border border-blue-500/20 text-blue-400/80 rounded uppercase tracking-wider">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education Sub-section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <section className="lg:col-span-1">
                    <SectionHeader icon={Award} title="Certifications" />
                    <div className="space-y-4">
                      {(cvData.certifications as any[]).map((cert, i) => (
                        <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
                          <div>
                            <h4 className="font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                            <p className="text-sm text-zinc-500">{cert.issuer}</p>
                          </div>
                          <span className="text-xs font-mono text-zinc-600">{cert.date}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-16">
                      <SectionHeader icon={Award} title="Recognition" />
                      <div className="space-y-6">
                        {(cvData.awards as any[]).map((award, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-xl">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                              <Award className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-200">{award.title}</h4>
                              <p className="text-sm text-zinc-500">{award.issuer} • {award.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="lg:col-span-2">
                    <SectionHeader icon={BookOpen} title="Education" />
                    <div className="space-y-12">
                      {(cvData.education as any[]).map((edu, i) => (
                        <div key={i} className="relative pl-8 border-l border-zinc-800">
                          <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-blue-500 rounded-full"></div>
                          <h4 className="text-2xl font-bold text-zinc-100">{edu.degree}</h4>
                          <p className="text-blue-400 font-medium mt-1">{edu.school}</p>
                          <p className="text-sm text-zinc-600 mt-1">{edu.location}</p>

                          {edu.description && (
                            <p className="mt-6 text-zinc-300 leading-relaxed text-lg">
                              {edu.description}
                            </p>
                          )}
                          {edu.extra && (
                            <p className="mt-4 text-zinc-400 italic leading-relaxed">
                              {edu.extra}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              /* Contact Section */
              <section className="mb-24">
                <SectionHeader icon={Mail} title="Get In Touch" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-zinc-100 tracking-tight">Let's build something amazing together.</h3>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                        Whether you have a question about my work, want to discuss a potential project, or just want to say hi, I'd love to hear from you.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-100 mb-1">Email</h4>
                          <a href={`mailto:${cvData.email}`} className="text-zinc-400 hover:text-blue-400 transition-colors">{cvData.email}</a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                          <Linkedin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-100 mb-1">LinkedIn</h4>
                          <a href={`https://linkedin.com/in/${cvData.linkedin}`} target="_blank" className="text-zinc-400 hover:text-blue-400 transition-colors">in/{cvData.linkedin}</a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                          <MapPin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-100 mb-1">Location</h4>
                          <p className="text-zinc-400">Melbourne, VIC, Australia</p>
                        </div>
                      </div>

                      <a
                        href={cvData.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-colors w-full group shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                      >
                        <Calendar className="w-6 h-6" />
                        Book a Meeting
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <form className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                          <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                          <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                        <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500 outline-none transition-all" placeholder="Project Inquiry" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                        <textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500 outline-none transition-all h-48 resize-none" placeholder="Tell me about your project..."></textarea>
                      </div>
                      <button className="w-full py-4 bg-zinc-100 text-zinc-900 font-bold rounded-2xl hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2 group">
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} {cvData.name}.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleTabChange("contact")} className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact
            </button>
            <button
              onClick={() => window.print()}
              className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Download CV
            </button>
          </div>
        </footer>

      </main>
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}
