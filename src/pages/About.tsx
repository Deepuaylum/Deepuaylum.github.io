import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          {/* Title Section */}
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data and operations excite me because they reveal how a business truly runs.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="border border-border rounded-lg p-8 md:p-12 bg-background opacity-0 animate-fade-in-up animation-delay-100">
            <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
              {/* Left Side - Decorative Element */}
              <div className="flex items-start justify-center">
                <div className="w-full aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-32 h-32 text-muted-foreground/30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="50" cy="35" r="12" />
                    <path d="M50 50 C30 50 25 70 25 85 L75 85 C75 70 70 50 50 50" />
                    <circle cx="30" cy="35" r="8" />
                    <path d="M30 45 C18 45 15 60 15 70 L45 70" />
                    <circle cx="70" cy="35" r="8" />
                    <path d="M70 45 C82 45 85 60 85 70 L55 70" />
                  </svg>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  With over 6 years of experience in Sales and Fintech Operations, I specialise in sales data analysis, MIS reporting, dashboards, and process optimisation.
                </p>

                <p className="leading-relaxed">
                  My areas of expertise include Sales and CRM workflows, data analysis and reporting, machine learning, and KYC/CDD due-diligence processes involving documentation checks, CIP validation, and risk escalation.
                </p>

                <p className="leading-relaxed">
                  Throughout my career, I have worked across Sales, Fintech Operations, and Sales Data Analysis in a fast-growing EdTech organisation. I have experience building machine learning models for customer fraud detection, developing MIS reports for senior leadership, and managing stakeholders across sales, finance, and compliance. My work combines analytics, process governance, and operational strategy to drive clarity and decision confidence at scale.
                </p>

                {/* Personal Interests */}
                <div className="pt-4">
                  <h2 className="text-foreground font-medium mb-3">Personal Interests</h2>
                  <p className="leading-relaxed">
                    Watching football, playing badminton, and passionate about scuba diving and marine life 🤿
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Email</p>
                <a href="mailto:deepuaylum@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  deepuaylum@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Location</p>
                <p className="text-foreground text-sm font-medium">Based in Cork, open to relocation</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Employment</p>
                <p className="text-foreground text-sm font-medium">Open to opportunities</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Languages</p>
                <p className="text-foreground text-sm font-medium">English, Malayalam, Hindi, Tamil</p>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="border border-border rounded-lg p-8 md:p-12 bg-background mt-8 opacity-0 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold text-foreground mb-8">Skills</h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "SQL",
                "Python",
                "Power BI",
                "Tableau",
                "Excel",
                "Data Analysis",
                "Data Visualization",
                "Predictive Modeling",
                "Machine Learning",
                "KPI & MIS Reporting",
                "Salesforce CRM",
                "LeadSquared",
                "Orderhive",
                "Process Automation",
                "Workflow Optimization",
                "Process Mapping",
                "KYC & CDD Review",
                "AML/KYC Documentation",
                "CIP Validation",
                "Risk Escalation Handling",
                "Document Verification",
                "Requirement Gathering",
                "BRD Creation",
                "UAT & System Documentation",
                "Stakeholder Management",
                "Cross-Functional Collaboration"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="border border-border rounded-lg p-8 md:p-12 bg-background mt-8 opacity-0 animate-fade-in-up animation-delay-300">
            <h2 className="text-2xl font-bold text-foreground mb-8">Professional Experience</h2>
            
            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                  <div className="w-px flex-1 bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-xs text-muted-foreground mb-1">2023 – 2024</p>
                  <h3 className="text-base font-semibold text-foreground">Business Analyst Intern</h3>
                  <p className="text-sm text-muted-foreground mb-3">Techolas Technologies Pvt Ltd – Calicut, India</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Gathered requirements and created a complete Business Requirement Document (BRD) for launching an in-house EdTech application.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Designed automated dashboards in Power BI and Tableau for placement and performance analysis, improving decision visibility for management.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                  <div className="w-px flex-1 bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-xs text-muted-foreground mb-1">2022 – 2023</p>
                  <h3 className="text-base font-semibold text-foreground">Team Lead – FinTech Operations / Operations Analyst</h3>
                  <p className="text-sm text-muted-foreground mb-3">BYJU'S (Think & Learn Pvt Ltd) – Bangalore, India</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Built and maintained Power BI and Excel MIS dashboards supporting €1M+ monthly fund releases by improving reconciliation visibility.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Developed predictive ML models (Random Forest, XGBoost) with 92% accuracy to forecast loan cancellations.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Led a 10-member operations team managing finance verification, KYC workflows, and daily disbursals exceeding €50K.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Implemented automated KYC verification using TL-Pay and OCR, reducing turnaround time by 20–30%.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Collaborated with NBFC partners (Kotak, Avanse, ABFL, Credit Saison) to align documentation standards and resolve escalations.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Conducted weekly audits across Salesforce, LeadSquared, and Orderhive systems to identify data gaps and ensure CRM hygiene.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                  <div className="w-px flex-1 bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-xs text-muted-foreground mb-1">2019 – 2022</p>
                  <h3 className="text-base font-semibold text-foreground">Operations Analyst / KYC Analyst</h3>
                  <p className="text-sm text-muted-foreground mb-3">BYJU'S – Bangalore, India</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Reviewed and validated KYC, NACH, POA/POI, and income documents with over 90% accuracy.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Performed CIP validation, CDD reviews, and due-diligence checks for NBFC-backed education loan onboarding.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Built Excel/Power BI dashboards to track pipeline progress, compliance metrics, and exception queues.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Supported workflow automation projects that reduced manual verification time by 20%.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Coordinated with risk and audit teams to maintain policy adherence and governance readiness.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">2017 – 2019</p>
                  <h3 className="text-base font-semibold text-foreground">Business Development Associate / Analyst</h3>
                  <p className="text-sm text-muted-foreground mb-3">BYJU'S – Bangalore, India</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Conducted 100+ client consultations weekly, generating €3,000 in weekly sales at 60%+ conversion.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Used CRM-driven insights (DTA campaign) to personalize outreach, contributing to 2.3× YoY revenue growth.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Supported long-term retention by guiding users through onboarding and adoption cycles.</span>
                    </li>
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Relayed customer insights to marketing and product teams to improve positioning and user experience.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="border border-border rounded-lg p-8 md:p-12 bg-background mt-8 opacity-0 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>
            
            <div className="space-y-8">
              {/* Education 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                  <div className="w-px flex-1 bg-border"></div>
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-xs text-muted-foreground mb-1">2024 – 2025</p>
                  <h3 className="text-base font-semibold text-foreground">MSc in Business Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-3">University College Cork – Cork, Ireland</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Graduated with First Class Honours.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5"></div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">2013 – 2017</p>
                  <h3 className="text-base font-semibold text-foreground">B.Tech in Applied Electronics & Instrumentation</h3>
                  <p className="text-sm text-muted-foreground mb-3">Rajagiri School of Engineering and Technology – Kochi, India</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-baseline">
                      <span className="text-primary">•</span>
                      <span>Graduated with a CGPA of 7.06.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="border border-border rounded-lg p-8 md:p-12 bg-background mt-8 opacity-0 animate-fade-in-up animation-delay-500">
            <h2 className="text-2xl font-bold text-foreground mb-8">Certifications</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                "AIGPE Process Mapping Specialist",
                "AIGPE Lean Six Sigma White Belt Certified",
                "Python for Data Analysis & Business Intelligence (Maven Analytics)",
                "SQL for Data Analysis — MySQL (Maven Analytics)"
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-muted/30 border border-border rounded-2xl p-4 text-sm text-foreground hover:bg-muted/50 hover:shadow-md transition-all duration-200"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
