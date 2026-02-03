import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemoFormDialog from "./DemoFormDialog";
import { siteLinkSections } from "@/data/siteLinks";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "How It Works", hash: "#how-it-works" },
    { name: "Benefits", hash: "#benefits" },
    { name: "For Companies", hash: "#for-companies" },
    { name: "For Employees", hash: "#for-employees" },
  ];

  const goToHomeHash = (hash: string) => {
    setIsOpen(false);
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      window.location.hash = hash;
      return;
    }

    navigate({ pathname: "/", hash });
  };

  useEffect(() => {
    // initialize theme from localStorage or system preference
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        setTheme(stored as "dark" | "light");
        if (stored === "dark") document.documentElement.classList.add("dark");
      } else {
        const prefersDark =
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
        if (prefersDark) document.documentElement.classList.add("dark");
      }
    } catch (e) {
      // ignore (server-side or storage disabled)
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // ignore
    }
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const [imgError, setImgError] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {!imgError ? (
              <img
                src="/logo.png"
                alt="FundLights"
                className="w-10 h-10 rounded-lg object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
            )}
            <span className="text-xl font-bold text-foreground">
              Fund<span className="text-gradient-gold">Lights</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="text-muted-foreground hover:text-accent transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  goToHomeHash(link.hash);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="default"
              disabled
              aria-label="Login to app"
            >
              Login
            </Button>
            <DemoFormDialog>
              <Button variant="gold" size="default">
                Request Demo
              </Button>
            </DemoFormDialog>

            {/* Desktop Menu */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Desktop Menu Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                className="hidden md:block fixed inset-0 z-40 bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                className="hidden md:block absolute right-4 top-20 z-50 w-[min(720px,calc(100vw-2rem))] rounded-2xl border border-border bg-background shadow-elevated"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <div className="grid grid-cols-3 gap-8 p-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Product</h4>
                    <ul className="space-y-2">
                      {siteLinkSections.product.map((link) => (
                        <li key={`product-${link.name}`}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Company</h4>
                    <ul className="space-y-2">
                      {siteLinkSections.company.map((link) => (
                        <li key={`company-${link.name}`}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Legal</h4>
                    <ul className="space-y-2">
                      {siteLinkSections.legal.map((link) => (
                        <li key={`legal-${link.name}`}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.hash}
                    className="block text-muted-foreground hover:text-accent transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      goToHomeHash(link.hash);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled
                    aria-label="Login to app"
                  >
                    Login
                  </Button>
                  <DemoFormDialog>
                    <Button variant="gold" className="w-full">
                      Request Demo
                    </Button>
                  </DemoFormDialog>

                  {/* Mobile Theme Toggle */}
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                    <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
