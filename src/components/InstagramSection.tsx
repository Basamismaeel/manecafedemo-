import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const InstagramSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section className="section-container text-center">
      <div 
        ref={ref}
        className={`max-w-md mx-auto scroll-fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4 animate-fade-in">
          {t.instagram.title}
        </h2>
        <div className="wavy-divider animate-fade-in delay-200" />
        <a
          href="https://instagram.com/mane.coffeebakery"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:shadow-elevated transition-all duration-500 hover:scale-110 animate-scale-in delay-300 hover:animate-pulse-slow ${isVisible ? 'visible' : ''}`}
        >
          <Instagram size={24} className="animate-float" />
          <span className="font-medium">{t.instagram.handle}</span>
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
