import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'az', label: 'AZ' },
    { code: 'ru', label: 'RU' },
  ];

  const navLinks = [
    { to: '#home', label: t.nav.home, section: 'home' },
    { to: '#menu', label: t.nav.menu, section: 'menu' },
    { to: '#gallery', label: t.nav.gallery, section: 'gallery' },
    { to: '#feedback', label: t.nav.feedback, section: 'feedback' },
    { to: '#contact', label: t.nav.contact, section: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'gallery', 'feedback', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center cursor-pointer group"
          >
            <span className="font-heading text-2xl md:text-3xl text-primary tracking-wide transition-all duration-300 hover:scale-110 hover:rotate-2">
              mâne
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400';
              return (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`text-sm font-medium transition-all duration-300 cursor-pointer animate-slide-in ${delayClass} ${
                    activeSection === link.section
                      ? 'text-primary scale-110'
                      : 'text-muted-foreground hover:text-primary hover:scale-105'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Language Switcher & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 border border-border rounded-full px-1 animate-fade-in delay-500">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`lang-btn transition-all duration-300 hover:scale-110 ${
                    language === lang.code ? 'lang-btn-active' : 'lang-btn-inactive'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9 rounded-full border border-border hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-foreground" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`text-base font-medium py-2 cursor-pointer ${
                    activeSection === link.section
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="h-9 w-9 rounded-full border border-border hover:bg-secondary"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4 text-foreground" />
                  ) : (
                    <Moon className="h-4 w-4 text-foreground" />
                  )}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
