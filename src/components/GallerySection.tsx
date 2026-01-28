import { useLanguage } from '@/contexts/LanguageContext';
import interior1 from '@/assets/interior-1.png';
import bakeryDisplay from '@/assets/bakery-display.png';
import interiorTree from '@/assets/interior-tree.png';
import coffeeDrinks from '@/assets/coffee-drinks.jpg';
import bakeryItems from '@/assets/bakery-items.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: interior1 },
    { src: interiorTree },
    { src: bakeryDisplay },
    { src: coffeeDrinks },
    { src: bakeryItems },
  ];

  return (
    <section className="bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-2">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground">{t.gallery.subtitle}</p>
          <div className="wavy-divider mt-4" />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1 md:row-span-2">
            <img
              src={images[0].src}
              alt=""
              title=""
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              draggable="false"
            />
          </div>
          <div className="aspect-square">
            <img
              src={images[1].src}
              alt=""
              title=""
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              draggable="false"
            />
          </div>
          <div className="aspect-square">
            <img
              src={images[2].src}
              alt=""
              title=""
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              draggable="false"
            />
          </div>
          <div className="aspect-square">
            <img
              src={images[3].src}
              alt=""
              title=""
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              draggable="false"
            />
          </div>
          <div className="aspect-square">
            <img
              src={images[4].src}
              alt=""
              title=""
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
