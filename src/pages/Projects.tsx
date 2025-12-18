import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";
import { ArrowUpRight, Star, GitFork, BookOpen, Brain } from "lucide-react";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const currentlyWorkingOn = [
  {
    id: 1,
    title: "PL-300 Power BI Data Analyst Certification",
    description: "Preparing for Microsoft Power BI Data Analyst certification to enhance data visualization and business intelligence skills.",
    type: "Learning",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "La Liga 2026 Winner Prediction",
    description: "Building a machine learning model to predict the La Liga 2025-26 season winner using historical data and advanced analytics.",
    type: "Machine Learning",
    icon: Brain,
  },
];

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Deepuaylum/repos?sort=updated&per_page=20"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: GitHubRepo[] = await response.json();
        // Sort to put Deepuaylum.github.io last
        const sorted = data.sort((a, b) => {
          if (a.name.toLowerCase() === "deepuaylum.github.io") return 1;
          if (b.name.toLowerCase() === "deepuaylum.github.io") return -1;
          return 0;
        });
        setRepos(sorted);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      Java: "bg-red-500",
      "Jupyter Notebook": "bg-orange-400",
      R: "bg-blue-400",
    };
    return colors[language || ""] || "bg-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <ScrollAnimate>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Projects
            </h1>
          </ScrollAnimate>

          {/* Currently Working On Section */}
          <ScrollAnimate delay={100}>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Currently Working On
            </h2>
          </ScrollAnimate>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {currentlyWorkingOn.map((item, index) => (
              <ScrollAnimate key={item.id} delay={150 + index * 100}>
                <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary mb-1 block">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* GitHub Repositories Section */}
          <ScrollAnimate delay={300}>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              GitHub Repositories
            </h2>
          </ScrollAnimate>

          <ScrollAnimate delay={350}>
            <p className="text-lg text-muted-foreground mb-8">
              My repositories showcasing data analytics, machine learning, and automation projects.
            </p>
          </ScrollAnimate>

          {loading && (
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card animate-pulse"
                >
                  <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                      {repo.name}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`w-3 h-3 rounded-full ${getLanguageColor(
                            repo.language
                          )}`}
                        ></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
