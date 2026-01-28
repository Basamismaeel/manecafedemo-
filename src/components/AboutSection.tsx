import { useLanguage } from '@/contexts/LanguageContext';
import { Coffee, Cake, Leaf } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ triggerOnce: true });

  const highlights = [
    {
      icon: Coffee,
      title: t.highlights.coffee.title,
      description: t.highlights.coffee.description,
    },
    {
      icon: Cake,
      title: t.highlights.bakery.title,
      description: t.highlights.bakery.description,
    },
    {
      icon: Leaf,
      title: t.highlights.atmosphere.title,
      description: t.highlights.atmosphere.description,
    },
  ];

  return (
    <section className="section-container">
      {/* Intro */}
      <div 
        ref={introRef}
        className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-in ${introVisible ? 'visible' : ''}`}
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
          {t.about.title}
        </h2>
        <div className="wavy-divider" />
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t.about.description}
        </p>
      </div>

      {/* Highlights Grid */}
      <div 
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 ${gridVisible ? 'visible' : ''}`}
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`text-center p-6 rounded-2xl bg-card hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 scroll-scale ${gridVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center animate-float hover:animate-rotate-in">
              <item.icon size={28} className="text-primary transition-transform duration-300 hover:scale-125" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
