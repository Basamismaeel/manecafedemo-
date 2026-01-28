import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-cafe.jpg';

const Hero = () => {
  const { t } = useLanguage();

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
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 parallax-slow">
        <img
          src={heroImage}
          alt="Mâne Coffee & Bakery Interior"
          className="w-full h-full object-cover animate-fade-in"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-brown/40 via-coffee-brown/30 to-coffee-brown/60 animate-fade-in delay-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-4 tracking-wide animate-scale-in delay-100">
            mâne
          </h1>
          <div className="wavy-divider opacity-60 bg-cream animate-fade-in delay-200" style={{ filter: 'brightness(2)' }} />
          <p className="text-cream/90 text-lg md:text-xl font-light tracking-widest uppercase mt-4 animate-slide-in-left delay-300">
            {t.hero.subtitle}
          </p>
          <p className="text-cream/70 text-base md:text-lg mt-3 italic animate-fade-in delay-400">
            {t.hero.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up delay-500">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, '#menu')}
            className="btn-hero-primary bg-cream text-coffee-brown hover:bg-cream/90 cursor-pointer animate-slide-in-left delay-600 hover:animate-pulse-slow"
          >
            {t.hero.viewMenu}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-hero-secondary border-cream text-cream hover:bg-cream hover:text-coffee-brown cursor-pointer animate-slide-in-right delay-700 hover:animate-pulse-slow"
          >
            {t.hero.visitUs}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
