import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import WireframeShapes from "./WireframeShapes";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WireframeShapes />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          <AnimatedText text="Hey there :)" delay={100} />
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in-up animation-delay-100">
          I'm <span className="text-foreground font-medium">Deepu Aylum Subramanian</span>, a Business Analytics graduate with 6+ years of experience in Sales, Fintech operations, Reporting, and predictive modeling. I enjoy turning complex data into clear, useful insights and building practical solutions like predictive models, dashboards, and automated workflows. My work combines analytics, operations, and strategy to improve decisions, simplify processes, and deliver real business impact.
        </p>

        <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="badge-role">Data and Operations Analyst</span>
        </div>

        <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up animation-delay-300">
          <SocialLinks />
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <Link to="/about" className="btn-primary group">
            About Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
