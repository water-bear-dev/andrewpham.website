import fs from 'fs';

const filePath = '/Users/andrewpham/Documents/GitHub/andrewpham.website/src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update Project interface
content = content.replace(
  '  github: string;',
  '  github?: string;\n  link?: string;\n  type?: "personal" | "work";'
);

// 2. Update cvData.projects
const newProjectsCode = `projects: [
    // Work Projects
    {
      name: "Polyfeed",
      description: "Designed and implemented a React-based feedback platform for students and tutors. The site incorporated ChatGPT to help students analyse strengths and weaknesses after an assignment.",
      link: "#",
      type: "work",
      images: [{ src: "/images/polyfeed.png", alt: "Polyfeed platform UI" }]
    },
    {
      name: "Turning Point / NAHMSU Database Revamp",
      description: "Spearheaded the redesign and development of database architecture, migrating from Microsoft Access to Microsoft SQL Server. Built analytics dashboards using Tableau for research insights into patient behaviour, deployed on Azure.",
      link: "https://www.turningpoint.org.au/about-us",
      type: "work",
      images: [{ src: "/images/turning_point_db.png", alt: "Turning Point Database Dashboard" }]
    },
    {
      name: "MyWizard STACK Monitoring",
      description: "Optimised the team’s Splunk environment, creating dashboards, refining searches, and resolving bugs for global clients as a Technical Analyst with Accenture. Integrated AI and Python for advanced IT infrastructure oversight.",
      link: "https://www.accenture.com/content/dam/accenture/final/a-com-migration/manual/r3/pdf/pdf-108/Accenture-MyWizard.pdf",
      type: "work",
      images: [{ src: "/images/mywizard_stack.png", alt: "MyWizard STACK Monitoring Dashboard" }]
    },
    {
      name: "NAB AWS Migration",
      description: "Migrated on-premise Telephone Banking platform and contact centre from Genesys to AWS during my time as a data and software engineer at NAB.",
      link: "https://aws.amazon.com/solutions/case-studies/national-australia-bank-digital-transformation-case-study/",
      type: "work",
      images: []
    },
    {
      name: "Onboarding Harness CI/CD for Kubernetes",
      description: "Implemented an Onboarding Harness for Robust CI/CD pipelines targeting Kubernetes instances at NAB, improving deployment reliability.",
      link: "https://www.harness.io/case-studies/national-australia-bank",
      type: "work",
      images: []
    },
    {
      name: "Splunk to OpenSearch Migration",
      description: "Migrated logging infrastructure from Splunk to OpenSearch at NAB, focusing on reducing false positives through algorithmic improvements.",
      link: "https://opensearch.org/blog/reducing-false-positives-through-algorithmic-improvements/",
      type: "work",
      images: []
    },
    {
      name: "Monash University Mentoring",
      description: "Mentoring undergraduate and post-graduate students in Web Development and Data Visualisation as a Teaching Associate. Guided students in creating web solutions for capstone projects.",
      link: "https://pgie.infotech.monash.edu/ug/",
      type: "work",
      images: []
    },
    {
      name: "NAB Context Engineering Library (CEL)",
      description: "Contributed to the NAB Context Engineering Library (CEL) in Cursor, enhancing AI autocomplete and contextual code generation for developers.",
      link: "https://cursor.com/blog/nab",
      type: "work",
      images: []
    },
    // Personal Projects
    {
      name: "AU Real Estate Insights",
      description: "Chrome extension and Vercel backend that enriches realestate.com.au and domain.com.au listings with verified land size, nearby school catchments, and Better Education ratings. Uses a hybrid architecture with client-side scraping via residential IP and serverless geocoding.",
      github: "https://github.com/water-bear-dev/au-rea-insights",
      type: "personal",
      images: [
        { src: "/images/au-rea-insights.png", alt: "AU Real Estate Insights extension on a property listing" }
      ]
    },
    {
      name: "Cost-Aware Market Insights Engine",
      description: "Containerized FastAPI application with LangGraph orchestration that ingests live market data, synthesizes AI insights via Bedrock/Ollama, and surfaces them on a glassmorphic dashboard — with strict FinOps budget gates that throttle LLM spend.",
      github: "https://github.com/water-bear-dev/Cost-Aware-Market-Insights-Engine",
      type: "personal",
      images: [
        { src: "/images/architecture-diagram.png", alt: "System architecture diagram" },
        { src: "/images/asset-details.png", alt: "Search and compare asset details" },
        { src: "/images/daily-discovery-picks.png", alt: "Daily discovery picks" },
        { src: "/images/discover-news.png", alt: "Manage dashboard with news feed" },
        { src: "/images/finops-dashboard.png", alt: "FinOps cost dashboard" },
        { src: "/images/manage-dashboard.png", alt: "Tracked assets performance chart" },
        { src: "/images/qmj-screener.png", alt: "QMJ quantitative screener" }
      ]
    },
    {
      name: "AWS Certification Prep Engine",
      description: "Interactive TypeScript study platform for AWS certifications, covering eight exams including Solutions Architect, Machine Learning Engineer, and Data Engineer. Features practice mode with instant explanations, timed exam simulation, domain-targeted drills, and post-exam proficiency breakdowns — all in a responsive dark-mode UI.",
      github: "https://github.com/water-bear-dev/aws-cert-prep",
      type: "personal",
      images: [
        { src: "/images/dashboard.png", alt: "AWS Certification Prep portal with practice exams" }
      ]
    },
    {
      name: "FinDash",
      description: "FinDash is a privacy-first personal finance dashboard built with React 19, TypeScript, and Vite that helps you track net worth and progress toward FIRE (Financial Independence, Retire Early). All financial data lives in your browser via localStorage — no external database, no account required. The net worth dashboard aggregates assets and liabilities in real time, while the dedicated FIRE journey view runs Monte Carlo simulations across thousands of market scenarios to estimate retirement survival probability. A full budgeting engine handles recurring incomes and expenses, cash-flow variance analysis, and CSV import, with a financial calendar that visualises when bills, salary, and dividends land each month. The investment module tracks holdings with live yfinance pricing, XIRR/TWR performance, FIFO gains, dividend yield-on-cost, and an algorithmic rebalancing engine that calculates exact buy/sell trades to hit target allocations. Optional Google Gemini integration adds a conversational assistant for logging expenses and summarising your financial position. Automated hourly backups to a local sync folder (Google Drive, OneDrive, etc.) keep your data portable without ever leaving your device.",
      github: "https://github.com/water-bear-dev/-WIP-FinDash---Net-Worth-FIRE-Tracker",
      wip: true,
      type: "personal",
      images: [
        { src: "/images/screenshot-dashboard.png", alt: "FinDash net worth dashboard overview" },
        { src: "/images/screenshot-expenses.png", alt: "FinDash expenses tracking with category breakdown" },
        { src: "/images/screenshot-calendar.png", alt: "FinDash financial calendar" },
        { src: "/images/screenshot-cash-flow.png", alt: "FinDash cash flow budget vs actual analysis" },
        { src: "/images/screenshot-ledger.png", alt: "FinDash portfolio ledger and transactions" },
        { src: "/images/screenshot-investments.png", alt: "FinDash investment holdings and gains breakdown" },
        { src: "/images/screenshot-fire.png", alt: "FinDash FIRE journey with Monte Carlo simulator" }
      ]
    }
  ]`;

content = content.replace(/projects:\s*\[[\s\S]*?\]\n};/, newProjectsCode + '\n};');

// 3. Update the UI to show two sections
const oldProjectsRender = `              <section className="mb-24">
                <SectionHeader icon={FolderGit2} title="Projects" />
                <div className="space-y-12">
                  {(cvData.projects as any[]).map((project, i) => (
                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-zinc-100">{project.name}</h3>
                        {project.wip && (
                          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full">Work in Progress</span>
                        )}
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-3xl">{project.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      {project.images.length > 0 && (
                        project.images.length === 1 ? (
                          <div className="rounded-2xl overflow-hidden border border-zinc-800">
                            <img
                              src={project.images[0].src}
                              alt={project.images[0].alt}
                              className="w-full object-cover object-top"
                            />
                          </div>
                        ) : (
                          <ProjectImageCarousel images={project.images} />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </section>`;

const newProjectsRender = `              <section className="mb-24">
                <SectionHeader icon={FolderGit2} title="Work Projects" />
                <div className="space-y-12 mb-16">
                  {(cvData.projects as any[]).filter(p => p.type === 'work').map((project, i) => (
                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-zinc-100">{project.name}</h3>
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-3xl">{project.description}</p>
                      {project.link && project.link !== "#" && (
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        </div>
                      )}
                      {project.images && project.images.length > 0 && (
                        project.images.length === 1 ? (
                          <div className="rounded-2xl overflow-hidden border border-zinc-800">
                            <img
                              src={project.images[0].src}
                              alt={project.images[0].alt}
                              className="w-full object-cover object-top"
                            />
                          </div>
                        ) : (
                          <ProjectImageCarousel images={project.images} />
                        )
                      )}
                    </div>
                  ))}
                </div>

                <SectionHeader icon={FolderGit2} title="Personal Projects" />
                <div className="space-y-12">
                  {(cvData.projects as any[]).filter(p => p.type === 'personal').map((project, i) => (
                    <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/30 transition-all">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-zinc-100">{project.name}</h3>
                        {project.wip && (
                          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full">Work in Progress</span>
                        )}
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-3xl">{project.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-200 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      {project.images && project.images.length > 0 && (
                        project.images.length === 1 ? (
                          <div className="rounded-2xl overflow-hidden border border-zinc-800">
                            <img
                              src={project.images[0].src}
                              alt={project.images[0].alt}
                              className="w-full object-cover object-top"
                            />
                          </div>
                        ) : (
                          <ProjectImageCarousel images={project.images} />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </section>`;

content = content.replace(oldProjectsRender, newProjectsRender);

fs.writeFileSync(filePath, content);
console.log('App.tsx updated successfully');
