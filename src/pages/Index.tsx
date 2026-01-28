import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import FeedbackSection from '@/components/FeedbackSection';
import MenuCategoryComponent from '@/components/MenuCategory';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuData } from '@/data/menuData';
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';
import interior1 from '@/assets/interior-1.png';
import bakeryDisplay from '@/assets/bakery-display.png';
import interiorTree from '@/assets/interior-tree.png';
import logoWall from '@/assets/logo-wall.png';
import coffeeDrinks from '@/assets/coffee-drinks.jpg';
import bakeryItems from '@/assets/bakery-items.jpg';
import coffeeCupsCarriers from '@/assets/coffee-cups-carriers.jpg';
import baristaPouring from '@/assets/barista-pouring.jpg';
import interiorSign from '@/assets/interior-sign.jpg';
import cakeSlices from '@/assets/cake-slices.jpg';
import foodTable from '@/assets/food-table.jpg';
import coffeeBeansPastry from '@/assets/coffee-beans-pastry.jpg';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Index = () => {
  const { t } = useLanguage();
  const { ref: menuTitleRef, isVisible: menuTitleVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: galleryTitleRef, isVisible: galleryTitleVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: galleryGridRef, isVisible: galleryGridVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: contactTitleRef, isVisible: contactTitleVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: contactContentRef, isVisible: contactContentVisible } = useScrollAnimation({ triggerOnce: true });

  const galleryImages = [
    { src: interiorTree },
    { src: interior1 },
    { src: bakeryDisplay },
    { src: logoWall },
    { src: coffeeDrinks },
    { src: bakeryItems },
    { src: coffeeCupsCarriers },
    { src: baristaPouring },
    { src: interiorSign },
    { src: cakeSlices },
    { src: foodTable },
    { src: coffeeBeansPastry },
  ];

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Baku+İnşaatçılar+prospekti+114';
  const instagramUrl = 'https://instagram.com/mane.coffeebakery';

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Menu Section */}
        <section id="menu" className="section-container">
          <div 
            ref={menuTitleRef}
            className={`text-center mb-12 scroll-fade-in ${menuTitleVisible ? 'visible' : ''}`}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              {t.menu.title}
            </h2>
            <div className="wavy-divider animate-fade-in delay-200" />
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {menuData.map((category, index) => (
              <div
                key={category.id}
                className={`scroll-scale ${menuTitleVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <MenuCategoryComponent category={category} />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section-container">
          <div 
            ref={galleryTitleRef}
            className={`text-center mb-12 scroll-fade-in ${galleryTitleVisible ? 'visible' : ''}`}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
              {t.gallery.title}
            </h2>
            <p className="text-muted-foreground animate-fade-in delay-200">{t.gallery.subtitle}</p>
            <div className="wavy-divider mt-4 animate-fade-in delay-300" />
          </div>

          {/* Full Gallery */}
          <div 
            ref={galleryGridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ${galleryGridVisible ? 'visible' : ''}`}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-500 group scroll-scale hover:scale-105 hover:-translate-y-2 ${galleryGridVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt=""
                  title=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Quote */}
          <div 
            className={`max-w-2xl mx-auto text-center mb-12 scroll-fade-in ${galleryGridVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <blockquote className="font-heading text-2xl md:text-3xl text-primary italic animate-pulse-slow">
              "Designed for comfort, calm, and unforgettable coffee moments."
            </blockquote>
          </div>
        </section>

        {/* Instagram Section */}
        <section id="instagram">
          <InstagramSection />
        </section>

        {/* Feedback Section */}
        <section id="feedback">
          <FeedbackSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container">
          <div 
            ref={contactTitleRef}
            className={`text-center mb-12 scroll-fade-in ${contactTitleVisible ? 'visible' : ''}`}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              {t.contact.title}
            </h2>
            <div className="wavy-divider animate-fade-in delay-200" />
          </div>

          {/* Contact Content */}
            <div 
              ref={contactContentRef}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${contactContentVisible ? 'visible' : ''}`}
            >
              {/* Info Cards */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft scroll-slide-left hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${contactContentVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: '100ms' }}
                >
                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 animate-float">
                      <MapPin className="text-primary transition-transform duration-300 hover:scale-125" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {t.contact.address}
                      </h3>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        {t.contact.getDirections}
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft scroll-slide-left hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${contactContentVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 animate-float">
                      <Clock className="text-primary transition-transform duration-300 hover:scale-125" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-1">
                        {t.contact.hoursLabel}
                      </h3>
                      <p className="text-2xl font-light text-muted-foreground">
                        {t.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instagram Card */}
                <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft scroll-slide-left hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${contactContentVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 animate-float">
                      <Instagram className="text-primary transition-transform duration-300 hover:scale-125" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        @mane.coffeebakery
                      </h3>
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        {t.contact.messageUs}
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className={`h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-soft bg-muted scroll-slide-right hover:shadow-card transition-all duration-500 hover:scale-105 ${contactContentVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '400ms' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8!2d49.8467!3d40.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sIn%C5%9Faat%C3%A7%C4%B1lar%20prospekti%20114%2C%20Bak%C4%B1!5e0!3m2!1sen!2saz!4v1706000000000!5m2!1sen!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mâne Coffee & Bakery Location"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
