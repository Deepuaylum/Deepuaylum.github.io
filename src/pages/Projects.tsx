import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";
import { ArrowUpRight, Star, GitFork } from "lucide-react";

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
        const data = await response.json();
        setRepos(data);
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 opacity-0 animate-fade-in-up">
            Projects
          </h1>

          <p className="text-lg text-muted-foreground mb-12 opacity-0 animate-fade-in-up animation-delay-100">
            My GitHub repositories showcasing data analytics, machine learning, and automation projects.
          </p>

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
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
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
