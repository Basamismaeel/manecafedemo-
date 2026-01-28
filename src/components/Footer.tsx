import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Footer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className={`text-center md:text-left scroll-slide-left ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-heading text-3xl mb-2 transition-transform duration-300 hover:scale-110">mâne</h3>
            <p className="text-primary-foreground/80 text-sm animate-fade-in delay-200">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className={`text-center space-y-3 scroll-scale ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              <MapPin size={18} className="opacity-80 animate-float" />
              <span className="text-sm">{t.contact.address}</span>
            </div>
            <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              <Clock size={18} className="opacity-80 animate-float" style={{ animationDelay: '1s' }} />
              <span className="text-sm">{t.contact.hours}</span>
            </div>
          </div>

          {/* Social */}
          <div className={`text-center md:text-right scroll-slide-right ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            <a
              href="https://instagram.com/mane.coffeebakery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} className="animate-float" />
              <span className="text-sm">@mane.coffeebakery</span>
            </a>
          </div>
        </div>

        <div className={`mt-10 pt-8 border-t border-primary-foreground/20 text-center scroll-fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Mâne Coffee & Bakery. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
