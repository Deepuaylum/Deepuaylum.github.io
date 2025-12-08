import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          Deepu Aylum Subramanian
        </Link>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "text-foreground" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
