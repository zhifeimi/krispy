export interface MenuItem {
  name: string
  price?: string
  desc?: string
  popular?: boolean
  note?: string
}

export interface MenuCategory {
  id: string
  index: string
  title: string
  vietnamese: string
  blurb: string
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'banh-mi',
    index: '01',
    title: 'Banh Mi',
    vietnamese: 'Bánh Mì',
    blurb:
      'Crusty Vietnamese rolls layered with pâté, mayo, pickled carrot & daikon, cucumber, coriander and a kick of chilli.',
    items: [
      { name: 'Krispy Chicken', price: '12', popular: true, desc: 'Golden fried chicken, house seasoning' },
      { name: 'BBQ Pork', price: '12', desc: 'Char-grilled Vietnamese BBQ pork' },
      { name: 'Krispy Pork Belly — Classic Style', price: '15', desc: 'Crackling pork belly, classic build' },
      {
        name: 'Krispy Pork Belly — Krisp Style',
        price: '15',
        popular: true,
        desc: 'Pork belly, pâté, belly sauce, spring onion — the house favourite',
      },
      { name: 'Krispy Vegan', price: '13', desc: 'Crispy tofu & plant-based goodness' },
      { name: 'Lemongrass Chicken', price: '13' },
      { name: 'Lemongrass Pork', price: '13' },
      { name: 'Satay Chicken', price: '13', desc: 'Satay glaze, crushed peanuts' },
      { name: 'Pork Spring Roll Roll', price: '14' },
      { name: 'Vegetarian Spring Roll Roll', price: '14' },
    ],
  },
  {
    id: 'pho',
    index: '02',
    title: 'Pho',
    vietnamese: 'Phở',
    blurb:
      'Slow-simmered aromatic broth over rice noodles, finished with fresh herbs, bean shoots, lime and chilli on the side.',
    items: [
      { name: 'Rare Beef', price: '18.50' },
      { name: 'Seared Beef', price: '18.50' },
      { name: 'Chicken', price: '18.50' },
      { name: 'Krispy Pork Belly', price: '19.50', popular: true },
      { name: 'Special', price: '22.50', desc: 'The works — KRISP style' },
    ],
  },
  {
    id: 'vermicelli',
    index: '03',
    title: 'Vermicelli Salad Bowl',
    vietnamese: 'Bún',
    blurb:
      'Chilled vermicelli noodles piled with crisp lettuce, cucumber, pickled veg, crushed peanuts and nước chấm dressing.',
    items: [
      { name: 'Lemongrass Chicken', price: '17', popular: true },
      { name: 'Krispy Pork Belly', price: '18', popular: true },
      { name: 'Krispy Chicken', price: '17' },
      { name: 'Lemongrass Pork', price: '17' },
      { name: 'Satay Chicken', price: '17' },
      { name: 'Grilled Pork Chop', price: '17' },
      { name: 'Pork Spring Roll', price: '17' },
      { name: 'Vegetarian Spring Roll', price: '17' },
      { name: 'Combination Chicken — Large', price: '20' },
      { name: 'Combination — Large', price: '21' },
    ],
  },
  {
    id: 'rice-plate',
    index: '04',
    title: 'Rice Plate',
    vietnamese: 'Cơm',
    blurb: 'Steamed jasmine rice plates with fresh salad, pickles and your protein of choice.',
    items: [
      { name: 'Lemongrass Chicken', price: '17', popular: true },
      { name: 'Krispy Pork Belly', price: '18', popular: true },
      { name: 'Krispy Chicken', price: '17' },
      { name: 'Grilled Pork Chop', price: '17' },
      { name: 'Lemongrass Pork', price: '17' },
      { name: 'Satay Chicken', price: '17' },
    ],
  },
  {
    id: 'poke',
    index: '05',
    title: 'Poke Bowl',
    vietnamese: 'Poke',
    blurb: 'Fresh, vibrant bowls loaded with avocado, edamame, corn, cucumber and house dressings.',
    items: [
      { name: 'Krispy Pork Belly', price: '19', popular: true },
      { name: 'Krispy Chicken', price: '18' },
      { name: 'Lemongrass Chicken', price: '18' },
      { name: 'Salmon', price: '20' },
    ],
  },
  {
    id: 'bao',
    index: '06',
    title: 'Bao Bun',
    vietnamese: 'Bánh Bao',
    blurb: 'Pillow-soft steamed bao with KRISP fillings — small buns, big flavour.',
    items: [
      { name: 'Krispy Pork Belly', popular: true },
      { name: 'Lemongrass Chicken', popular: true },
      { name: 'Krispy Chicken' },
      { name: 'Baked Salmon' },
      { name: 'Satay Chicken' },
      { name: 'Pork Spring Roll' },
      { name: 'Vegetarian Spring Roll' },
    ],
  },
  {
    id: 'rice-paper',
    index: '07',
    title: 'Rice Paper Roll',
    vietnamese: 'Gỏi Cuốn',
    blurb: 'Fresh-rolled daily with herbs, vermicelli and crisp veg. Light, clean, made to order.',
    items: [
      { name: 'BBQ Pork & Prawn' },
      { name: 'BBQ Pork' },
      { name: 'Prawn' },
      { name: 'Chicken' },
      { name: 'Chicken & Avo' },
      { name: 'Krispy Pork Belly' },
      { name: 'Lemongrass Chicken' },
      { name: 'Vegan' },
    ],
  },
  {
    id: 'sides',
    index: '08',
    title: 'Sides & Drinks',
    vietnamese: 'Ăn Kèm',
    blurb: 'The little extras that complete the spread.',
    items: [
      { name: 'Two Pork Spring Rolls', price: '6' },
      { name: 'Two Vegetarian Spring Rolls', price: '6' },
      { name: 'Soft Drink Can', price: '3.50', desc: 'Coke, Coke No Sugar, Lemonade, Solo, Sunkist' },
      { name: 'Farmers Organic Juice', price: '6.50' },
      { name: 'Spring Water', price: '3' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'Bánh Mì',
  'Phở',
  'Vermicelli Bowls',
  'Bao Buns',
  'Rice Paper Rolls',
  'Poke Bowls',
  'Rice Plates',
  'Spring Rolls',
]

export const HOURS = [
  { days: 'Monday', lunch: 'Closed', dinner: '' },
  { days: 'Tuesday — Friday', lunch: '11:00am — 2:00pm', dinner: '4:30pm — 7:30pm' },
  { days: 'Saturday', lunch: '11:00am — 2:00pm', dinner: '4:30pm — 7:30pm' },
  { days: 'Sunday', lunch: '11:00am — 2:00pm', dinner: '' },
]

export const LOCATIONS = [
  {
    name: 'Dapto',
    tag: 'The Original',
    address: 'Shop 1, 70 Prince Edward Drive',
    suburb: 'Dapto NSW 2530',
    order: 'https://bopple.app/krisp/menu',
    maps: 'https://maps.app.goo.gl/JcXuC4XoNNUe2jzz8',
  },
  {
    name: 'Wollongong',
    tag: 'The City Store',
    address: 'Shop 1, 4 Globe Lane',
    suburb: 'Wollongong NSW 2500',
    order: 'https://bopple.app/krisp-wollongong',
    maps: 'https://www.google.com/maps/search/Krisp+Globe+Lane+Wollongong',
  },
]
