import fs from 'fs';

const filePath = '/Users/andrewpham/Documents/GitHub/andrewpham.website/src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const newSkills = `  skills: [
    { category: "Primary", items: ["Python", "SQL", "AWS", "Databricks", "LLM/RAG/MCP", "Kafka", "Terraform"] },
    { category: "Secondary", items: ["TypeScript/Node.js", "PHP", "Java", "Azure", "GCP", "Snowflake", "Airflow", "Kubernetes"] },
    { category: "Domain", items: ["Banking/fintech compliance", "Contact centre technology", "Data governance", "Real-time streaming"] },
    { category: "Software", items: ["PySpark", "Jenkins", "Docker", "OpenSearch", "Splunk", "Tableau", "Power BI"] }
  ]`;

const newExperience = `  experience: [
    {
      company: "National Australia Bank (NAB)",
      location: "Melbourne, VIC, Australia",
      roles: [
        {
          title: "Senior Data & AI Engineer",
          period: "November 2024 – Present",
          description: "Leading AI and data engineering initiatives within NAB, focusing on cloud data architecture optimisation and LLM integration.",
          highlights: [
            "LLM integration for Amazon Lex/Connect (50k+ daily interactions; ~1.5 min wait reduction).",
            "Co-created NAB Context Engineering Library with MCP (400+ users; ~500 hrs/month saved).",
            "Automated CI/CD for security patching (weeks to under 48 hours; 80% manual effort reduction).",
            "~$2M capex reduction via cloud data architecture optimisation."
          ],
          techStack: ["Python", "AWS", "LLM", "Databricks", "MCP"]
        },
        {
          title: "Data & Software Engineer",
          period: "November 2021 – October 2024",
          description: "Focused on ensuring high availability and building robust ETL/ELT pipelines for event data.",
          highlights: [
            "Achieved 99.9% SLA; 25% YoY reduction in P1/P2 incidents.",
            "Built and managed ETL/ELT pipelines for 2 TB+ monthly event data.",
            "Mentored juniors; built 4 reusable integration assets resulting in 30% faster deployments."
          ],
          techStack: ["TypeScript", "AWS", "Splunk", "SQL"]
        }
      ]
    },
    {
      company: "Accenture",
      location: "Melbourne, VIC, Australia",
      roles: [
        {
          title: "Technical Developer & Architect",
          period: "June 2021 – November 2021",
          description: "Optimised the team’s Splunk environment, creating dashboards, refining searches, and resolving bugs for global clients.",
          highlights: [
            "Deployed new features through AWS using Splunk and Python for IT infrastructure oversight.",
            "Standardised and documented best practices, decreasing onboarding time."
          ],
          techStack: ["Splunk", "Python", "AWS"]
        }
      ]
    },
    {
      company: "Monash University",
      location: "Clayton, VIC, Australia",
      roles: [
        {
          title: "Teaching Associate & Software Developer",
          period: "July 2019 – Present",
          description: "Delivering web development teaching across FIT units including PHP, and leading development of student platforms.",
          highlights: [
            "Mentors 300+ students annually; led TypeScript/Node.js platform supporting 5,000 concurrent users.",
            "Delivered web development teaching across FIT units including PHP; maintained PHP and TypeScript lab tooling."
          ],
          techStack: ["TypeScript", "Node.js", "PHP", "React"]
        },
        {
          title: "Database Developer",
          period: "October 2020 – May 2021",
          description: "Spearheaded the redesign and development of database architecture, migrating from Microsoft Access to Microsoft SQL Server.",
          highlights: [
            "Led migration to MS SQL Server, enhancing scalability and reducing storage costs.",
            "Built analytics dashboards using Tableau for research insights into patient behaviour."
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
          description: "Developed data models, dashboards, and data mapping documentation. Explored cloud solutions for enhanced business intelligence.",
          highlights: [
            "Migrated legacy systems to Azure.",
            "Deployed scheduling solutions through Azure."
          ],
          techStack: ["T-SQL", "PowerBI", "Azure"]
        }
      ]
    }
  ]`;

const newCertifications = `  certifications: [
    { title: "AWS Generative AI Practitioner", issuer: "Amazon Web Services", date: "May 2026" },
    { title: "LaunchDarkly Developer Foundations", issuer: "LaunchDarkly", date: "May 2026" },
    { title: "Solutions Architect Professional", issuer: "Amazon Web Services", date: "January 2025" },
    { title: "Data Engineer Associate", issuer: "Amazon Web Services", date: "July 2024" },
    { title: "Certified Banking Fundamentals", issuer: "FINSIA", date: "July 2024" },
    { title: "Solutions Architect Associate", issuer: "Amazon Web Services", date: "December 2023" },
    { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "" }
  ]`;

const newAwards = `  awards: [
    { title: "Systems Developer Coding Challenge – Winner", issuer: "AWS", date: "November 2025" },
    { title: "Tri-Country Coding Tournament – Winner", issuer: "NAB", date: "April 2023" },
    { title: "Faculty of IT International Merit Scholarship", issuer: "Monash University", date: "" },
    { title: "Monash Industry Team Initiative (MITI) Scholarship", issuer: "Monash University", date: "" }
  ]`;

content = content.replace(/  skills: \[\s*\{[\s\S]*?\]\s*\]/, newSkills);
content = content.replace(/  experience: \[\s*\{[\s\S]*?\]\s*\n\s*\]/, newExperience);
content = content.replace(/  certifications: \[\s*\{[\s\S]*?\]/, newCertifications);
content = content.replace(/  awards: \[\s*\{[\s\S]*?\]/, newAwards);

fs.writeFileSync(filePath, content);
console.log('CV data updated successfully');
