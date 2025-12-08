import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Cloud Services",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />
        
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 opacity-0 animate-fade-in-up">
            About Me
          </h1>

          <div className="space-y-6 text-muted-foreground opacity-0 animate-fade-in-up animation-delay-100">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate software developer with a love for building 
              elegant solutions to complex problems. With experience in full-stack 
              development and a keen interest in emerging technologies, I strive to 
              create applications that make a difference.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge through 
              technical writing. I believe in continuous learning and the power 
              of community in tech.
            </p>
          </div>

          <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="badge-role">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-300">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg font-medium text-foreground">Software Developer</h3>
                <p className="text-muted-foreground">Company Name • 2022 - Present</p>
                <p className="mt-2 text-muted-foreground">
                  Building and maintaining web applications with modern technologies.
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg font-medium text-foreground">Junior Developer</h3>
                <p className="text-muted-foreground">Previous Company • 2020 - 2022</p>
                <p className="mt-2 text-muted-foreground">
                  Developed features and fixed bugs for client projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
