import { ProductItem, ReviewItem, GalleryPhoto, BusinessHours } from '../types';

export const BUSINESS_INFO = {
  name: "SHAH SWEETS AND BAKERS",
  shortName: "Shah Sweets",
  urduName: "شاہ سویٹس اینڈ بیکرز",
  tagline: "Shabqadar's Most Trusted Sweet & Bakery Shop",
  cityTagline: "Premium Sweets of Shabqadar",
  regionalPride: "Shabqadar's Beloved Sweet & Bakery Destination",
  address: "Main Bazar, Shabqadar, 25000, Khyber Pakhtunkhwa",
  shortAddress: "Shabqadar, 25000",
  phone: "0333 9898129",
  phoneFormatted: "+92 333 9898129",
  phoneRaw: "+923339898129",
  whatsappNumber: "923339898129",
  rating: 4.2,
  reviewCount: 168,
  priceRange: "Rs 1 - Rs 1,000",
  priceReportedBy: 34,
  openingHour: 6, // 6:00 AM
  closingHour: 23, // 11:00 PM
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13203.48624185785!2d71.5456241940989!3d34.21731671981057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93b3f23aa6bb1%3A0x67db2371b2d415ef!2sShabqadar%2C%20Charsadda%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709400000000!5m2!1sen!2s",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shabqadar+25000+Khyber+Pakhtunkhwa+Pakistan",
};

export const WEEKLY_HOURS: BusinessHours[] = [
  { day: 'Monday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Tuesday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Wednesday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Thursday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Friday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Saturday', open: '6:00 AM', close: '11:00 PM' },
  { day: 'Sunday', open: '6:00 AM', close: '11:00 PM' },
];

export const SPECIALTY_PRODUCTS: ProductItem[] = [
  {
    id: 'gulab-jamun',
    name: 'Special Gulab Jamun',
    urduName: 'شاہی گلاب جامن',
    category: 'mithai',
    description: 'Freshly fried golden milk-solid dumplings soaked in aromatic cardamom and rose saffron syrup. Served warm and soft.',
    price: 'Rs 380 - Rs 750',
    priceValue: 750,
    weightUnit: 'per kg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isSpecialty: true,
    popular: true,
    ingredients: ['Pure Desi Khoya', 'Cardamom', 'Rose Water', 'Saffron Sugar Syrup'],
  },
  {
    id: 'pista-barfi',
    name: 'Shahi Pistachio Barfi',
    urduName: 'شاہی پستہ برفی',
    category: 'mithai',
    description: 'Silky, dense traditional fudge prepared from slow-cooked evaporated milk topped with cracked slivered pistachios and silver vark.',
    price: 'Rs 450 - Rs 900',
    priceValue: 900,
    weightUnit: 'per kg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isSpecialty: true,
    popular: true,
    ingredients: ['Fresh Khoya', 'Premium Pistachios', 'Cardamom Powder', 'Pure Sugar'],
  },
  {
    id: 'special-jalebi',
    name: 'Desi Ghee Jalebi',
    urduName: 'دیسی گھی جلیبی',
    category: 'mithai',
    description: 'Crispy, spiraled sweet pretzel swirls deep-fried in fragrant pure desi ghee and instantly immersed in hot saffron-infused sugar nectar.',
    price: 'Rs 250 - Rs 550',
    priceValue: 550,
    weightUnit: 'per kg',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    isSpecialty: true,
    popular: true,
    ingredients: ['Fine Wheat Flour', 'Pure Desi Ghee', 'Kewra Water', 'Saffron Essence'],
  },
  {
    id: 'motichoor-laddoo',
    name: 'Motichoor Laddoo',
    urduName: 'موتی چور لڈو',
    category: 'mithai',
    description: 'Traditional celebratory golden pearls of gram flour fried, infused with cardamom, melon seeds, and gently rolled into melt-in-mouth spheres.',
    price: 'Rs 300 - Rs 600',
    priceValue: 600,
    weightUnit: 'per kg',
    image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&w=800&q=80',
    isSpecialty: false,
    popular: true,
    ingredients: ['Gram Flour (Besan)', 'Melon Seeds (Maghaz)', 'Desi Ghee', 'Cardamom'],
  },
  {
    id: 'fresh-cream-cake',
    name: 'Signature Fresh Cream Cake',
    urduName: 'اسپیشل فریش کریم کیک',
    category: 'bakery',
    description: 'Airy vanilla and fruit sponge layered with velvety dairy whipped cream, fresh seasonal cherries, and chocolate lace shavings.',
    price: 'Rs 600 - Rs 1,000',
    priceValue: 1000,
    weightUnit: 'per pound',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    isSpecialty: true,
    popular: true,
    ingredients: ['Fresh Dairy Cream', 'Sponge Flour', 'Vanilla Bean', 'Fresh Cherries'],
  },
  {
    id: 'bakery-naan-sheermal',
    name: 'Traditional Bakery Naan & Sheermal',
    urduName: 'شاہی شیرمال و نان',
    category: 'bakery',
    description: 'Freshly baked tandoori sweet bread enriched with milk, clarified butter, and sprinkled with sesame and nigella seeds. Perfect for breakfast.',
    price: 'Rs 80 - Rs 220',
    priceValue: 220,
    weightUnit: 'per piece',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isSpecialty: false,
    popular: true,
    ingredients: ['Enriched Flour', 'Whole Milk', 'Sesame Seeds', 'Cardamom Flavor'],
  },
  {
    id: 'cham-cham',
    name: 'Rose Cham Cham',
    urduName: 'شاہی چم چم',
    category: 'mithai',
    description: 'Delicate oval chenna dumplings cooked in light syrup, stuffed with mawa cream and rolled in toasted desiccated coconut.',
    price: 'Rs 350 - Rs 700',
    priceValue: 700,
    weightUnit: 'per kg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isSpecialty: false,
    popular: false,
    ingredients: ['Fresh Chenna', 'Mawa Cream', 'Desiccated Coconut', 'Rose Water'],
  },
  {
    id: 'assorted-wedding-box',
    name: 'Royal Wedding Mithai Platter',
    urduName: 'شادی بیاہ مٹھائی باکس',
    category: 'special',
    description: 'Custom handcrafted celebratory gift boxes packed with 8 premium varieties including Balushahi, Barfi, Laddoo, and Dry Fruit sweets.',
    price: 'Rs 900 - Rs 1,000',
    priceValue: 1000,
    weightUnit: 'per 1.5 kg box',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isSpecialty: true,
    popular: true,
    ingredients: ['Pistachio Barfi', 'Motichoor Laddoo', 'Kaju Katli', 'Gulab Jamun'],
  },
  {
    id: 'crispy-bakarkhani-cookies',
    name: 'Crispy Bakarkhani & Zeera Cookies',
    urduName: 'باقرخانی و زیرہ بسکٹ',
    category: 'bakery',
    description: 'Flaky layered puff pastry with caramelized sesame glaze alongside buttery cumin seed tea biscuits. A Shabqadar morning essential.',
    price: 'Rs 150 - Rs 450',
    priceValue: 450,
    weightUnit: 'per packet',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    isSpecialty: false,
    popular: true,
    ingredients: ['Flaky Pastry Dough', 'Roasted Cumin', 'Butter', 'Sesame Seeds'],
  },
];

export const ALL_MENU_ITEMS = [
  {
    category: 'Traditional Mithai',
    urduTitle: 'روایتی مٹھائیاں',
    description: 'Prepared fresh multiple times daily using pure dairy ingredients',
    items: [
      { name: 'Special Gulab Jamun (Warm)', price: 'Rs 750 / kg', desc: 'Soft khoya dumplings in saffron syrup', popular: true },
      { name: 'Shahi Pistachio Barfi', price: 'Rs 900 / kg', desc: 'Slow-cooked milk fudge with rich pistachio', popular: true },
      { name: 'Desi Ghee Jalebi', price: 'Rs 550 / kg', desc: 'Crispy hot golden coils soaked in saffron nectar', popular: true },
      { name: 'Motichoor Laddoo', price: 'Rs 600 / kg', desc: 'Fine gram flour pearls with aromatic cardamom', popular: true },
      { name: 'White Cham Cham', price: 'Rs 700 / kg', desc: 'Chenna dessert filled with cream & dry coconut', popular: false },
      { name: 'Sohan Halwa (Multani Style)', price: 'Rs 850 / kg', desc: 'Chewy caramelized sweet with almonds & walnuts', popular: true },
      { name: 'Fresh Kalakand', price: 'Rs 880 / kg', desc: 'Granular fresh cheese sweet with slivered pistachios', popular: true },
      { name: 'Bengali Rasgulla', price: 'Rs 680 / kg', desc: 'Spongy cottage cheese balls in cardamom syrup', popular: false },
    ]
  },
  {
    category: 'Bakery & Bread',
    urduTitle: 'بیکری اور روٹی',
    description: 'Baked fresh in our stone ovens every morning and afternoon',
    items: [
      { name: 'Special Sheermal Naan', price: 'Rs 140 / piece', desc: 'Saffron-scented sweet milk bread with sesame', popular: true },
      { name: 'Crispy Bakarkhani', price: 'Rs 220 / pack', desc: 'Multi-layered flaky pastry seasoned with fennel', popular: true },
      { name: 'Zeera & Almond Butter Cookies', price: 'Rs 450 / box', desc: 'Melt-in-mouth tea biscuits made with cream butter', popular: true },
      { name: 'Chocolate Fudge Cake (1.5 lbs)', price: 'Rs 950 / cake', desc: 'Rich Dutch cocoa sponge with ganache frosting', popular: true },
      { name: 'Pineapple Fresh Cream Cake (1.5 lbs)', price: 'Rs 900 / cake', desc: 'Light sponge with whipped dairy cream & pineapples', popular: true },
      { name: 'Dry Fruit Tea Cake', price: 'Rs 380 / loaf', desc: 'Classic golden loaf packed with raisins and nuts', popular: false },
      { name: 'Crispy Khasta Roti', price: 'Rs 80 / piece', desc: 'Traditional tandoori crispy bread for morning chai', popular: false },
      { name: 'Cream Roll (Pack of 4)', price: 'Rs 240 / pack', desc: 'Crisp horn pastry stuffed with sweet vanilla cream', popular: false },
    ]
  },
  {
    category: 'Special Orders & Wedding Boxes',
    urduTitle: 'شادی و تقاریب کے آرڈرز',
    description: 'Custom packaging and bulk confectionery for all life celebrations',
    items: [
      { name: 'Royal Velvet Wedding Mithai Box (1 kg)', price: 'Rs 1,000 / box', desc: 'Custom foiled gift box with 6 selected premium mithais', popular: true },
      { name: 'Deluxe Engagement Sweets Platter (2 kg)', price: 'Rs 1,000 / kg', desc: 'Decorative tray with silver foil, dry fruit sweets', popular: true },
      { name: 'Eid & Ramadan Special Gift Hampers', price: 'Rs 950 / pack', desc: 'Assorted baklava, barfi, and traditional cookies', popular: true },
      { name: 'Tiered Custom Birthday & Celebration Cakes', price: 'Rs 900 - 1,000 / lb', desc: 'Pre-order customized designs with personalized writing', popular: true },
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Muhammad Tariq Khan',
    location: 'Shabqadar Bazar',
    rating: 5,
    date: '3 days ago',
    text: 'Without doubt the best sweet shop in Shabqadar! Whenever guests visit our home or we have family gatherings, Shah Sweets is our only stop. Their Gulab Jamun is always piping hot and their Pistachio Barfi has pure khoya taste with no artificial flavor. 100% recommended.',
    helpfulCount: 24,
    verified: true,
    recommendedItem: 'Special Gulab Jamun & Barfi'
  },
  {
    id: 'rev-2',
    name: 'Haji Fazal Ur Rehman',
    location: 'Shabqadar City',
    rating: 5,
    date: '1 week ago',
    text: 'We placed an order of 80 sweet boxes for my son’s wedding ceremony last month. Every guest praised the packaging and the freshness of the Motichoor Laddoo. Delivered right on time and reasonable prices within Rs 1-1000 range. Very honest people.',
    helpfulCount: 31,
    verified: true,
    recommendedItem: 'Wedding Sweet Boxes'
  },
  {
    id: 'rev-3',
    name: 'Dr. Shahab Ud Din',
    location: 'Charsadda Road',
    rating: 4,
    date: '2 weeks ago',
    text: 'Excellent quality bakery items in Shabqadar. Their morning Sheermal and Bakarkhani with hot tea is unbeatable. The shop is kept clean and staff is polite. Only wish they opened 30 minutes earlier, but 6 AM is still great.',
    helpfulCount: 18,
    verified: true,
    recommendedItem: 'Sheermal Naan & Tea Cake'
  },
  {
    id: 'rev-4',
    name: 'Kamran Ali Mohmand',
    location: 'Shabqadar Fort area',
    rating: 5,
    date: '3 weeks ago',
    text: 'The Desi Ghee Jalebi here during winter evenings is legendary across the whole tehsil. Crisp, fragrant, and golden syrup that is not overly sugary. Shah Sweets maintains standard quality year after year.',
    helpfulCount: 15,
    verified: true,
    recommendedItem: 'Desi Ghee Jalebi'
  },
  {
    id: 'rev-5',
    name: 'Naveed Ahmad',
    location: 'Peshawar-Shabqadar Road',
    rating: 4,
    date: '1 month ago',
    text: 'Every time I travel through Shabqadar I stop at Shah Sweets to buy fresh Kalakand and Cream Cake for home. Always fresh, budget-friendly and authentic taste. Proud landmark of Shabqadar!',
    helpfulCount: 12,
    verified: true,
    recommendedItem: 'Kalakand & Fresh Cream Cake'
  },
  {
    id: 'rev-6',
    name: 'Saeedullah Jan',
    location: 'Shabqadar',
    rating: 5,
    date: '1 month ago',
    text: 'Cleanest bakery counter in town. Fresh oil and pure milk used. The owners are very welcoming. If you are in Shabqadar, do not leave without trying their warm Gulab Jamuns.',
    helpfulCount: 9,
    verified: true,
    recommendedItem: 'Warm Gulab Jamun'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Fresh Daily Production',
    caption: 'Artisan mithai masters crafting traditional sweets fresh at sunrise each day.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    tag: 'Production'
  },
  {
    id: 'gal-2',
    title: 'Quality Assurance',
    caption: '100% pure dairy milk, genuine desi ghee, and certified food-grade preparation.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80',
    tag: 'Quality'
  },
  {
    id: 'gal-3',
    title: 'Traditional Methods',
    caption: 'Preserving decades-old slow simmering techniques for authentic Pakistani taste.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=900&q=80',
    tag: 'Heritage'
  },
  {
    id: 'gal-4',
    title: 'Premium Ingredients',
    caption: 'Rich pistachios, green cardamom pods, and pure khoya in every batch.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    tag: 'Ingredients'
  },
  {
    id: 'gal-5',
    title: 'Customer Satisfaction',
    caption: 'Welcoming hundreds of families across Shabqadar daily with warmth and respect.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    tag: 'Service'
  },
  {
    id: 'gal-6',
    title: 'Artisan Cake Studio',
    caption: 'Custom baked fresh cream anniversary, wedding, and birthday celebration cakes.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    tag: 'Bakery'
  },
  {
    id: 'gal-7',
    title: 'Morning Bakery Oven',
    caption: 'Warm Sheermal, Bakarkhani, and fresh breakfast breads coming out of tandoor.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
    tag: 'Breakfast'
  }
];

export const HERO_CAROUSEL_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
    title: 'Shabqadar Shop Interior',
    subtitle: 'Warm, welcoming displays filled with fresh daily sweets and cakes'
  },
  {
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=85',
    title: 'Fresh Hot Gulab Jamun',
    subtitle: 'Simmered in cardamom rose syrup, made fresh every morning and evening'
  },
  {
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1600&q=85',
    title: 'Traditional Mithai Display',
    subtitle: 'Pure Desi Khoya Barfi, Motichoor Laddoo, and festive gift boxes'
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85',
    title: 'Shop Front View & Kitchen',
    subtitle: 'Located on Main Bazar, Shabqadar — beloved by generations'
  }
];
