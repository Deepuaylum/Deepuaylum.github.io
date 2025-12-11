import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";
import SocialLinks from "@/components/SocialLinks";
import { Mail } from "lucide-react";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />
        
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          <ScrollAnimate>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Get in Touch
            </h1>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </ScrollAnimate>

          <ScrollAnimate delay={200} className="mb-12">
            <a 
              href="mailto:deepuaylum@gmail.com" 
              className="btn-primary inline-flex group"
            >
              <Mail className="w-5 h-5" />
              deepuaylum@gmail.com
            </a>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <p className="text-muted-foreground mb-6">Or find me on</p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </ScrollAnimate>
        </div>
      </main>
    </div>
  );
};

export default Contact;
