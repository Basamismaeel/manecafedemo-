import { useLanguage } from '@/contexts/LanguageContext';
import { MenuCategory as MenuCategoryType, MenuItem } from '@/data/menuData';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategoryComponent = ({ category }: MenuCategoryProps) => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  
  const categoryTitles: Record<string, string> = {
    espresso: t.menu.categories.espresso,
    tea: t.menu.categories.tea,
    nonCoffee: t.menu.categories.nonCoffee,
    filter: t.menu.categories.filter,
    ice: t.menu.categories.ice,
    exclusive: t.menu.categories.exclusive,
  };

  const formatPrice = (price: number | string, priceAlt?: number | string) => {
    if (priceAlt) {
      return `${price} / ${priceAlt}`;
    }
    return String(price);
  };

  return (
    <div 
      ref={ref}
      className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft scroll-scale hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'visible' : ''}`}
    >
      <h3 className="menu-category-title mb-6 animate-fade-in">
        {categoryTitles[category.id]}
      </h3>
      <div className="wavy-divider mb-6 animate-fade-in delay-200" />
      <div className="space-y-1">
        {category.items.map((item: MenuItem, index: number) => (
          <div 
            key={index} 
            className={`menu-item transition-all duration-300 hover:bg-accent/30 hover:px-2 hover:rounded-md hover:scale-105 ${isVisible ? 'animate-slide-in' : ''}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="menu-item-name transition-all duration-300 hover:text-primary">{item.name}</span>
            <span className="menu-item-price transition-all duration-300 hover:text-primary">
              {formatPrice(item.price, item.priceAlt)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryComponent;
