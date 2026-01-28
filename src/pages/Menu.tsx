import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCategoryComponent from '@/components/MenuCategory';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuData } from '@/data/menuData';

const Menu = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary">
            {t.menu.title}
          </h1>
          <div className="wavy-divider mt-4" />
        </section>

        {/* Menu Grid */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {menuData.map((category) => (
              <MenuCategoryComponent key={category.id} category={category} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
