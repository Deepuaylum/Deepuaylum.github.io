import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";
import SocialLinks from "@/components/SocialLinks";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />
        
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 opacity-0 animate-fade-in-up">
            Get in Touch
          </h1>

          <p className="text-lg text-muted-foreground mb-12 opacity-0 animate-fade-in-up animation-delay-100">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>

          <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-200">
            <a 
              href="mailto:hello@example.com" 
              className="btn-primary inline-flex group"
            >
              <Mail className="w-5 h-5" />
              hello@example.com
            </a>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-300">
            <p className="text-muted-foreground mb-6">Or find me on</p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
