import React from 'react';
import { BUSINESS_INFO } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { Phone, MessageCircle, UtensilsCrossed, Navigation } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const shopStatus = useShopStatus();

  return (
    <aside
      id="mobile-sticky-action-bar"
      aria-label="Quick mobile action controls"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D4A574]/30 shadow-2xl px-3 py-2"
    >
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* 1. Call Now */}
        <a
          id="sticky-mobile-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#0066FF] text-white active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-poppins font-bold uppercase leading-none">Call</span>
        </a>

        {/* 2. WhatsApp Order */}
        <a
          id="sticky-mobile-whatsapp"
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Assalam-o-Alaikum! I want to order from Shah Sweets and Bakers, Shabqadar.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366] text-white active:scale-95 transition-transform shadow-sm"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-poppins font-bold uppercase leading-none">Order</span>
        </a>

        {/* 3. Menu */}
        <a
          id="sticky-mobile-menu"
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#FFFBF0] border border-[#D4A574]/40 text-[#4A3728] active:scale-95 transition-transform"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#D4A574] mb-0.5" />
          <span className="text-[10px] font-poppins font-bold uppercase leading-none">Menu</span>
        </a>

        {/* 4. Directions */}
        <a
          id="sticky-mobile-directions"
          href={BUSINESS_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#D4A574] text-[#2D2421] active:scale-95 transition-transform shadow-sm"
        >
          <Navigation className="w-4 h-4 text-[#2D2421] mb-0.5" />
          <span className="text-[10px] font-poppins font-bold uppercase leading-none">Map</span>
        </a>
      </div>

      {/* Tiny live status notification line */}
      <div className="flex items-center justify-center gap-1.5 mt-1 text-[10px] text-[#4A3728] font-medium">
        <span className={`w-1.5 h-1.5 rounded-full ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
        <span>Shabqadar, 25000 • {shopStatus.statusText} ({shopStatus.isOpen ? 'Closes 11 PM' : 'Opens 6 AM'})</span>
      </div>
    </aside>
  );
};
