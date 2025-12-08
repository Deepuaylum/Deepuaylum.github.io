import Header from "@/components/Header";
import WireframeShapes from "@/components/WireframeShapes";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with React",
    excerpt: "A comprehensive guide to building your first React application from scratch.",
    date: "Dec 1, 2024",
    readTime: "5 min read",
  },
  {
    title: "Understanding TypeScript",
    excerpt: "Why TypeScript is becoming the standard for modern web development.",
    date: "Nov 15, 2024",
    readTime: "7 min read",
  },
  {
    title: "The Art of Clean Code",
    excerpt: "Best practices for writing maintainable and readable code.",
    date: "Oct 28, 2024",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative pt-24 pb-16 overflow-hidden">
        <WireframeShapes />
        
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 opacity-0 animate-fade-in-up">
            Blog
          </h1>

          <p className="text-lg text-muted-foreground mb-12 opacity-0 animate-fade-in-up animation-delay-100">
            Thoughts, tutorials, and insights about software development.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="group cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
