import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import WireframeShapes from "./WireframeShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WireframeShapes />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up">
          Hey there :)
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in-up animation-delay-100">
          I am <span className="text-foreground font-medium">Deepu Aylum Subramanian</span>, a Software Developer. 
          I build modern web applications and love solving complex problems. 
          I'm passionate about clean code and great user experiences.
        </p>

        <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="badge-role">Software Developer</span>
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
