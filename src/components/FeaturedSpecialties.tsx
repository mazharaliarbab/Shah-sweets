import React, { useState } from 'react';
import { SPECIALTY_PRODUCTS, BUSINESS_INFO } from '../data/bakeryData';
import { ProductItem } from '../types';
import { Heart, MessageCircle, Sparkles, Filter } from 'lucide-react';

interface FeaturedSpecialtiesProps {
  likedItemIds: Set<string>;
  onToggleLike: (id: string) => void;
  onSelectProductForOrder?: (product: ProductItem) => void;
}

export const FeaturedSpecialties: React.FC<FeaturedSpecialtiesProps> = ({
  likedItemIds,
  onToggleLike,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties', urdu: 'تمام خاص اشیاء' },
    { id: 'mithai', label: 'Mithai (Traditional Sweets)', urdu: 'روایتی مٹھائی' },
    { id: 'bakery', label: 'Bakery Items (Bread, Cakes)', urdu: 'بیکری اور کیک' },
    { id: 'special', label: 'Special Orders & Wedding Boxes', urdu: 'شادی کے ڈبے' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? SPECIALTY_PRODUCTS
    : SPECIALTY_PRODUCTS.filter((p) => p.category === selectedCategory);

  const getWhatsAppOrderLink = (product: ProductItem) => {
    const text = `Assalam-o-Alaikum! I would like to order *${product.name}* (${product.price}) from Shah Sweets and Bakers, Shabqadar. Please let me know availability and delivery/pickup details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="specialties" className="py-20 bg-[#FFFBF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A574]" />
            <span>Handcrafted In Shabqadar Daily</span>
          </div>

          <h2 className="serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] uppercase tracking-[0.04em] leading-tight">
            OUR SPECIALTIES
          </h2>

          <div className="w-16 h-1 gold-gradient mx-auto my-3 rounded-full" />

          <p className="font-poppins text-lg sm:text-xl text-[#D4A574] font-bold mt-1">
            Traditional & Modern Sweets
          </p>

          <p className="font-inter text-sm sm:text-base text-[#2D2421]/80 mt-2 max-w-2xl mx-auto">
            From hot saffron-drenched Gulab Jamun and pure Pistachio Barfi to freshly baked Sheermal and custom birthday cakes — each item made with uncompromising Shabqadar pride.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-poppins font-bold transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4A3728] text-[#FFFBF0] border-[#4A3728] shadow-md scale-105'
                    : 'bg-white text-[#4A3728] premium-border hover:bg-[#F5E6D3]/40'
                }`}
              >
                <Filter className="w-3 h-3 text-[#D4A574]" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 3 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isLiked = likedItemIds.has(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden premium-border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-4px]"
              >
                {/* Product Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#2D2421]/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Urdu Name Badge */}
                  {product.urduName && (
                    <div className="absolute top-3 left-3 bg-[#4A3728]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4A574]/40 shadow">
                      <span className="font-urdu text-sm text-[#F5D7A1]">
                        {product.urduName}
                      </span>
                    </div>
                  )}

                  {/* Heart / Favorite Toggle Button */}
                  <button
                    onClick={() => onToggleLike(product.id)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#C41E3A] shadow-md transition-transform active:scale-90 cursor-pointer"
                    aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                    title={isLiked ? 'Saved to favorites' : 'Save sweet'}
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        isLiked ? 'fill-[#C41E3A] text-[#C41E3A]' : 'text-[#8C6D53] hover:text-[#C41E3A]'
                      }`}
                    />
                  </button>

                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute bottom-3 left-3 gold-gradient text-[#2D2421] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                      ★ Shabqadar Favorite
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="serif-heading font-bold text-2xl text-[#4A3728] leading-tight mb-2 group-hover:text-[#D4A574] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-inter text-sm text-[#2D2421]/80 line-clamp-3 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Ingredients / Highlights */}
                    {product.ingredients && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.ingredients.slice(0, 3).map((ing, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold bg-[#FFFBF0] text-[#8C6D53] px-2 py-0.5 rounded-md border border-[#D4A574]/30"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Price Range */}
                    <div className="flex items-baseline justify-between mb-4 pt-3 border-t border-[#D4A574]/20">
                      <span className="text-xs text-[#8C6D53] uppercase font-bold tracking-wider">
                        Price:
                      </span>
                      <div className="text-right">
                        <span className="serif-heading font-bold text-2xl text-[#D4A574]">
                          {product.price}
                        </span>
                        {product.weightUnit && (
                          <span className="text-xs text-[#8C6D53] block font-semibold">
                            {product.weightUnit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Order via WhatsApp Button */}
                    <a
                      href={getWhatsAppOrderLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
