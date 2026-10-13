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
  subtitle: string
  blurb: string
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'pastries',
    index: '01',
    title: 'Croissants & Pastries',
    subtitle: 'Viennoiserie',
    blurb:
      'Laminated over three days with cultured butter, then baked dark so every bite shatters.',
    items: [
      { name: 'Krispy Croissant', price: '6.50', popular: true, desc: 'Our namesake — 27 layers, baked dark' },
      { name: 'Almond Croissant', price: '8', popular: true, desc: 'Twice-baked, frangipane, flaked almonds' },
      { name: 'Pain au Chocolat', price: '7.50' },
      { name: 'Ham & Gruyère Croissant', price: '9.50' },
      { name: 'Cinnamon Scroll', price: '7', popular: true, desc: 'Brown sugar, cinnamon, cream cheese glaze' },
      { name: 'Morning Bun', price: '6.50', desc: 'Orange zest & cinnamon sugar' },
      { name: 'Kouign-Amann', price: '7.50', desc: 'Caramelised, salty-sweet' },
      { name: 'Fruit Danish', price: '8', desc: 'Vanilla custard, seasonal fruit' },
      { name: 'Cardamom Knot', price: '7' },
      { name: 'Pain aux Raisins', price: '7.50' },
    ],
  },
  {
    id: 'bread',
    index: '02',
    title: 'Sourdough & Loaves',
    subtitle: 'Bread',
    blurb:
      'Naturally leavened, fermented slow for 36 hours and baked on stone for a crust that crackles.',
    items: [
      { name: 'Country Sourdough', price: '10', popular: true },
      { name: 'Seeded Sourdough', price: '11' },
      { name: 'Dark Rye', price: '11' },
      { name: 'Olive & Rosemary Loaf', price: '12' },
      { name: 'Baguette', price: '5', popular: true, desc: 'Baked twice daily' },
    ],
  },
  {
    id: 'sandwiches',
    index: '03',
    title: 'Sandwiches & Toasties',
    subtitle: 'Lunch',
    blurb:
      'Built to order on our own bread — crusty baguettes, sourdough toasties and soft milk buns.',
    items: [
      { name: 'Ham, Cheese & Pickle Toastie', price: '14', popular: true },
      { name: 'Chicken Schnitzel Roll', price: '16', popular: true, desc: 'Krispy crumbed chicken, slaw, mayo' },
      { name: 'Three Cheese Toastie', price: '13' },
      { name: 'Egg & Bacon Roll', price: '12' },
      { name: 'Roast Beef Baguette', price: '16', desc: 'Horseradish, rocket, pickled onion' },
      { name: 'Salad Baguette', price: '14', desc: 'Avocado, beetroot, carrot, cheddar' },
      { name: 'Mushroom & Thyme Toastie', price: '14' },
      { name: 'Tuna Melt', price: '14' },
      { name: 'Soup & Sourdough', price: '15', desc: 'Ask what’s in the pot today' },
      { name: 'Kids’ Cheese Toastie', price: '8' },
    ],
  },
  {
    id: 'pies',
    index: '04',
    title: 'Pies & Sausage Rolls',
    subtitle: 'Savoury',
    blurb: 'All-butter puff, slow-braised fillings. Sauce is on the house.',
    items: [
      { name: 'Beef & Pepper Pie', price: '9.50', popular: true },
      { name: 'Pork & Fennel Sausage Roll', price: '8', popular: true },
      { name: 'Chicken & Leek Pie', price: '9.50' },
      { name: 'Curried Vegetable Pie', price: '9' },
      { name: 'Spinach & Feta Roll', price: '8' },
      { name: 'Quiche Lorraine', price: '9.50' },
    ],
  },
  {
    id: 'cakes',
    index: '05',
    title: 'Cakes & Tarts',
    subtitle: 'Pâtisserie',
    blurb: 'By the slice, or whole to order — give us two days for a full cake.',
    items: [
      { name: 'Chocolate Layer Cake', price: '9.50', popular: true },
      { name: 'Burnt Basque Cheesecake', price: '9.50' },
      { name: 'Lemon Meringue Tart', price: '9' },
      { name: 'Custard Tart', price: '5.50' },
    ],
  },
  {
    id: 'cookies',
    index: '06',
    title: 'Cookies & Slices',
    subtitle: 'Biscuits',
    blurb: 'Stacked high on the counter — the ones that never make it home.',
    items: [
      { name: 'Choc Chip Cookie', price: '5', popular: true, desc: 'Brown butter, sea salt' },
      { name: 'Lamington', price: '6', popular: true },
      { name: 'Anzac Biscuit', price: '4.50' },
      { name: 'Double Choc Cookie', price: '5' },
      { name: 'Caramel Slice', price: '6.50' },
      { name: 'Vanilla Slice', price: '7' },
      { name: 'Brownie', price: '6.50' },
    ],
  },
  {
    id: 'scones',
    index: '07',
    title: 'Scones & Buns',
    subtitle: 'Morning Tea',
    blurb: 'Soft, warm and best eaten before 10am. Jam and cream on request.',
    items: [
      { name: 'Buttermilk Scone', price: '5.50', popular: true },
      { name: 'Date Scone', price: '5.50' },
      { name: 'Cheese & Chive Scone', price: '6' },
      { name: 'Finger Bun', price: '5', popular: true, desc: 'Pink icing, coconut' },
      { name: 'Hot Cross Bun', price: '4', desc: 'All year, no apologies' },
      { name: 'Custard Bun', price: '5.50' },
      { name: 'Jam & Cream', price: '2' },
      { name: 'Half Dozen Buns', price: '21' },
    ],
  },
  {
    id: 'drinks',
    index: '08',
    title: 'Coffee & Drinks',
    subtitle: 'To Drink',
    blurb: 'Something to dunk it in.',
    items: [
      { name: 'Flat White / Latte / Cappuccino', price: '5.50', popular: true },
      { name: 'Espresso / Long Black', price: '4.50' },
      { name: 'Batch Brew', price: '5' },
      { name: 'Hot Chocolate', price: '6' },
      { name: 'Fresh Orange Juice', price: '7' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'Croissants',
  'Sourdough',
  'Meat Pies',
  'Sausage Rolls',
  'Cinnamon Scrolls',
  'Lamingtons',
  'Custard Tarts',
  'Baguettes',
]

export const HOURS = [
  { days: 'Monday', hours: 'Closed' },
  { days: 'Tuesday — Friday', hours: '6:30am — 3:00pm' },
  { days: 'Saturday', hours: '7:00am — 2:00pm' },
  { days: 'Sunday', hours: '7:00am — 1:00pm' },
]

// Krispy is fictional: the street address doesn't exist and the phone is a placeholder.
// Google Maps needs something real to show, so the pin sits in Hyde Park, Sydney —
// a public park, not anyone's shop or home.
const MAP_PIN = '-33.8718,151.2113'

export const LOCATION = {
  name: 'Crumb Lane',
  tag: 'The One & Only',
  address: 'Shop 1, 1 Crumb Lane',
  suburb: 'Sydney NSW 2000',
  phone: 'xxxxxxxx',
  email: 'hello@krispy.example',
  maps: `https://www.google.com/maps/search/?api=1&query=${MAP_PIN}`,
  mapEmbed: `https://www.google.com/maps?q=${MAP_PIN}&z=16&output=embed`,
}
