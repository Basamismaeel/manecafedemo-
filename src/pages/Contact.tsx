import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Baku+İnşaatçılar+prospekti+114';
  const instagramUrl = 'https://instagram.com/mane.coffeebakery';

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary">
            {t.contact.title}
          </h1>
          <div className="wavy-divider mt-4" />
        </section>

        {/* Contact Content */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
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
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
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
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary" size={24} />
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
            <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-soft bg-muted">
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

export default Contact;
