export interface ProductItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'mithai' | 'bakery' | 'desserts' | 'special';
  description: string;
  price: string;
  priceValue: number;
  weightUnit?: string;
  image: string;
  isSpecialty?: boolean;
  popular?: boolean;
  ingredients?: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  avatar?: string;
  location?: string;
  rating: number;
  date: string;
  text: string;
  helpfulCount: number;
  verified: boolean;
  recommendedItem?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  image: string;
  tag: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isToday?: boolean;
}
