import { Github, Linkedin, Mail, FileText } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com",
  },
  {
    name: "Medium",
    icon: <FileText className="w-5 h-5" />,
    url: "https://medium.com",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:hello@example.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-muted-foreground hover:text-foreground"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
