import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary">
            {t.gallery.title}
          </h1>
          <p className="text-muted-foreground mt-3">{t.gallery.subtitle}</p>
          <div className="wavy-divider mt-4" />
        </section>

        {/* Gallery Section Component */}
        <GallerySection />

        {/* Quote */}
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mt-16">
            <blockquote className="font-heading text-2xl md:text-3xl text-primary italic">
              "Designed for comfort, calm, and unforgettable coffee moments."
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
