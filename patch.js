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
      description: "React feedback platform for students and tutors with ChatGPT-powered assignment insights.",
      link: "https://www.polyfeed.com.au",
      type: "work",
      images: [{ src: "/images/polyfeed.png", alt: "Polyfeed platform UI" }]
    },
    {
      name: "Turning Point / NAHMSU Database Revamp",
      description: "Migrated Microsoft Access to SQL Server and built Tableau dashboards for patient research.",
      link: "https://www.turningpoint.org.au/about-us",
      type: "work",
      images: [{ src: "/images/turning_point_db.png", alt: "Turning Point Database Dashboard" }]
    },
    {
      name: "MyWizard STACK Monitoring",
      description: "Optimized Splunk monitoring with dashboards, search tuning, and Python automation.",
      link: "https://www.accenture.com/content/dam/accenture/final/a-com-migration/manual/r3/pdf/pdf-108/Accenture-MyWizard.pdf",
      type: "work",
      images: [{ src: "/images/mywizard_stack.png", alt: "MyWizard STACK Monitoring Dashboard" }]
    },
    {
      name: "NAB AWS Migration",
      description: "Migrated NAB’s Telephone Banking contact centre from Genesys to AWS.",
      link: "https://aws.amazon.com/solutions/case-studies/national-australia-bank-digital-transformation-case-study/",
      type: "work",
      images: []
    },
    {
      name: "Onboarding Harness CI/CD for Kubernetes",
      description: "Built reliable Kubernetes CI/CD pipelines using Harness.",
      link: "https://www.harness.io/case-studies/national-australia-bank",
      type: "work",
      images: []
    },
    {
      name: "Splunk to OpenSearch Migration",
      description: "Migrated NAB logging from Splunk to OpenSearch to reduce false positives.",
      link: "https://opensearch.org/blog/reducing-false-positives-through-algorithmic-improvements/",
      type: "work",
      images: []
    },
    {
      name: "Monash University Mentoring",
      description: "Mentored students in web development and data visualisation projects.",
      link: "https://pgie.infotech.monash.edu/ug/",
      type: "work",
      images: []
    },
    {
      name: "NAB Context Engineering Library (CEL)",
      description: "Enhanced Cursor’s NAB CEL for AI-assisted coding and autocomplete.",
      link: "https://cursor.com/blog/nab",
      type: "work",
      images: []
    },
    {
      name: "AU Real Estate Insights",
      description: "Browser extension enriching Australian property listings with land size and school catchment data.",
      github: "https://github.com/water-bear-dev/au-rea-insights",
      type: "personal",
      images: [
        { src: "/images/au-rea-insights.png", alt: "AU Real Estate Insights extension on a property listing" }
      ]
    },
    {
      name: "Cost-Aware Market Insights Engine",
      description: "FastAPI app that ingests market data and delivers FinOps-aware AI insights.",
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
      description: "TypeScript study platform with timed practice and AWS exam drills.",
      github: "https://github.com/water-bear-dev/aws-cert-prep",
      type: "personal",
      images: [
        { src: "/images/dashboard.png", alt: "AWS Certification Prep portal with practice exams" }
      ]
    },
    {
      name: "FinDash",
      description: "Privacy-first React finance dashboard for net worth, budgeting, investments, and FIRE planning.",
      github: "https://github.com/water-bear-dev/-WIP-FinDash---Net-Worth-FIRE-Tracker",
      wip: true,
      type: "personal",
      images: []
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
