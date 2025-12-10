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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {[
                "SQL",
                "Python (Pandas, Scikit-learn, Streamlit)",
                "Power BI",
                "Tableau",
                "Excel (Pivot Tables, VLOOKUP, XLOOKUP)",
                "Data Analysis",
                "Data Visualization",
                "Predictive Modeling",
                "Machine Learning (Random Forest, XGBoost)",
                "KPI & MIS Reporting",
                "Salesforce CRM",
                "LeadSquared",
                "Orderhive",
                "Process Automation",
                "Workflow Optimization",
                "Process Mapping (Draw.io, Lucidchart)",
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
                <div
                  key={index}
                  className="px-4 py-3 bg-muted/40 border border-border/50 rounded-lg text-sm text-foreground font-medium text-center hover:bg-muted/60 hover:border-border transition-all duration-200 hover:shadow-sm"
                >
                  {skill}
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
