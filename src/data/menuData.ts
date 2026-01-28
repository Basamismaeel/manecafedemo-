export interface MenuItem {
  name: string;
  price: number | string;
  priceAlt?: number | string; // For items with two sizes
}

// Menu data

export interface MenuCategory {
  id: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'espresso',
    items: [
      { name: 'Espresso', price: 3.5 },
      { name: 'Americano', price: 4.5 },
      { name: 'Affogato', price: 6 },
      { name: 'Cortado', price: 5.5 },
      { name: 'Flat White', price: 6 },
      { name: 'Cappuccino', price: 6, priceAlt: 7 },
      { name: 'Latte', price: 6, priceAlt: 7 },
      { name: 'Mocha', price: 7, priceAlt: 8 },
      { name: 'Raf', price: 7, priceAlt: 9 },
    ],
  },
  {
    id: 'tea',
    items: [
      { name: 'Black / Green / Jasmine', price: 4 },
      { name: 'Tropical Tea', price: 5 },
      { name: 'Berry Tea', price: 5 },
    ],
  },
  {
    id: 'nonCoffee',
    items: [
      { name: 'Lemonade', price: 7 },
      { name: 'Iced Tea', price: 7 },
      { name: 'Milkshake', price: 8 },
      { name: 'Fresh Juice', price: 10 },
      { name: 'Tropical', price: 9 },
      { name: 'Citrus Refresher', price: 8 },
    ],
  },
  {
    id: 'filter',
    items: [
      { name: 'V60', price: 7.5 },
      { name: 'Chemex', price: 7.5 },
      { name: 'Kyoto Style', price: 7.5 },
      { name: 'Turkish Coffee', price: 5 },
    ],
  },
  {
    id: 'ice',
    items: [
      { name: 'Americano', price: 5.5 },
      { name: 'Latte', price: 7 },
      { name: 'Mocha', price: 8 },
      { name: 'Espresso Tonic', price: 6.5 },
      { name: 'Coffee Glace', price: 8 },
      { name: 'Bumble Coffee', price: 9 },
    ],
  },
  {
    id: 'exclusive',
    items: [
      { name: 'Cinnabon Raf', price: 8, priceAlt: 9 },
      { name: 'Matcha Latte', price: 8, priceAlt: 9 },
      { name: 'Hot Chocolate', price: 6, priceAlt: 7 },
    ],
  },
];
