import React, { useState, useEffect } from 'react';
import { ALL_MENU_ITEMS, BUSINESS_INFO } from '../data/bakeryData';
import { MessageCircle, Search, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Traditional Mithai': true,
    'Bakery & Bread': true,
    'Special Orders & Wedding Boxes': true,
  });

  // Listen for search-menu custom event dispatched from header search
  useEffect(() => {
    const handleCustomSearch = (e: any) => {
      if (e.detail) {
        setSearchTerm(e.detail);
      }
    };
    window.addEventListener('search-menu', handleCustomSearch);
    return () => window.removeEventListener('search-menu', handleCustomSearch);
  }, []);

  const toggleCategory = (catName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const getWhatsAppLink = (itemName: string, itemPrice: string) => {
    const msg = `Assalam-o-Alaikum! I'd like to order *${itemName}* (${itemPrice}) from Shah Sweets and Bakers, Shabqadar. What is the preparation time?`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="menu" className="py-20 bg-white relative border-t border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#D4A574]" />
            <span>Complete Price List & Confectionery</span>
          </div>

          <h2 className="serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] uppercase tracking-[0.04em] leading-tight">
            EXPLORE OUR MENU
          </h2>

          <div className="w-16 h-1 gold-gradient mx-auto my-3 rounded-full" />

          <p className="font-poppins text-base sm:text-lg text-[#8C6D53] font-semibold mt-1">
            Freshness Guaranteed • Pure Khoya & Desi Ghee • Stone Oven Baked
          </p>

          {/* Search bar inside Menu */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search items (e.g. Gulab Jamun, Sheermal, Cake)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FFFBF0] premium-border focus:outline-none focus:border-[#D4A574] text-sm text-[#2D2421] shadow-inner"
            />
            <Search className="w-5 h-5 text-[#8C6D53] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8C6D53] hover:text-[#2D2421] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Loop */}
        <div className="space-y-8">
          {ALL_MENU_ITEMS.map((catGroup) => {
            const isExpanded = expandedCategories[catGroup.category] ?? true;

            // Filter items if search is active
            const filteredItems = catGroup.items.filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0 && searchTerm) {
              return null; // hide section if no match
            }

            return (
              <div
                key={catGroup.category}
                className="bg-[#FFFBF0] rounded-3xl premium-border shadow-sm overflow-hidden"
              >
                {/* Accordion / Category Header */}
                <button
                  onClick={() => toggleCategory(catGroup.category)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left bg-gradient-to-r from-[#FFFBF0] to-[#F5E6D3]/40 hover:bg-[#F5E6D3]/60 transition-colors border-b border-[#D4A574]/20 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <h3 className="serif-heading text-2xl sm:text-3xl font-bold text-[#4A3728]">
                      {catGroup.category}
                    </h3>
                    <span className="font-urdu text-lg text-[#D4A574] sm:border-l sm:border-[#D4A574]/40 sm:pl-3 font-semibold">
                      {catGroup.urduTitle}
                    </span>
                    <span className="text-xs text-[#8C6D53] font-semibold hidden md:inline">
                      — {catGroup.description}
                    </span>
                  </div>

                  <div className="p-2 rounded-full bg-white premium-border text-[#4A3728]">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Items Grid */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-5 premium-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <h4 className="font-poppins font-bold text-lg text-[#4A3728] group-hover:text-[#D4A574] transition-colors">
                              {item.name}
                            </h4>
                            <span className="serif-heading font-bold text-xl text-[#D4A574] whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          <p className="font-inter text-xs sm:text-sm text-[#2D2421]/70 mb-3">
                            {item.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#D4A574]/15">
                          {item.popular ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D4A574]">
                              <Sparkles className="w-3 h-3" />
                              Popular Choice
                            </span>
                          ) : (
                            <span className="text-[11px] text-[#8C6D53] font-medium">
                              Made Fresh Daily
                            </span>
                          )}

                          <a
                            href={getWhatsAppLink(item.name, item.price)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Order</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
