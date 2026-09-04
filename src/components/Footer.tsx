import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/bakeryData';
import { MapPin, Phone, MessageCircle, Clock, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2421] text-[#FFFBF0] pt-16 pb-28 md:pb-16 border-t border-[#D4A574]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D4A574]/20">
          {/* Col 1: Horizontal Logo & Heritage */}
          <div className="lg:col-span-1 space-y-4">
            <Logo variant="horizontal" lightMode={true} />
            <p className="font-urdu text-base text-[#D4A574] leading-relaxed pt-1">
              شاہ سویٹس اینڈ بیکرز شبقدر — روایتی مٹھائی اور بیکری کا باوقار مرکز
            </p>
            <p className="font-inter text-xs text-[#F5E6D3]/80 leading-relaxed">
              Serving the authentic taste of pure desi ghee mithai, morning sheermal, and custom artisan bakery cakes to the families of Shabqadar and surrounding regions.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBF0]/10 border border-[#D4A574]/30 text-xs text-[#D4A574]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Proudly rooted in Shabqadar, 25000</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="serif-heading font-bold text-lg text-[#FFFBF0] uppercase tracking-wider mb-4 border-l-2 border-[#D4A574] pl-3">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-poppins text-[#F5E6D3]/85">
              <li>
                <a href="#specialties" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A574]">›</span> Our Specialties (Mithai)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A574]">›</span> Complete Bakery Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A574]">›</span> Kitchen & Workshop Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A574]">›</span> 168+ Verified Reviews (4.2★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A574]">›</span> Shabqadar Map & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Shabqadar Timings & Service */}
          <div>
            <h4 className="serif-heading font-bold text-lg text-[#FFFBF0] uppercase tracking-wider mb-4 border-l-2 border-[#D4A574] pl-3">
              Shop Timings
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F5E6D3]/85">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span className="font-bold text-white">Daily: 6:00 AM – 11:00 PM</span>
              </div>
              <p className="text-xs text-[#F5E6D3]/70 pl-6">
                Fresh breakfast naan, hot tea cakes, and fresh sweets available from early morning 6:00 AM sharp.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#D4A574] uppercase tracking-wider block mb-1">
                  Wedding & Bulk Bookings
                </span>
                <p className="text-xs text-[#F5E6D3]/70">
                  Advance booking available for wedding sweet boxes, engagement platters, and corporate hampers.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Shabqadar Contact Info */}
          <div>
            <h4 className="serif-heading font-bold text-lg text-[#FFFBF0] uppercase tracking-wider mb-4 border-l-2 border-[#D4A574] pl-3">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F5E6D3]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-bold"
                >
                  WhatsApp: +92 333 9898129
                </a>
              </div>

              {/* Price range indicator */}
              <div className="mt-4 p-3 rounded-xl bg-black/30 border border-[#D4A574]/20">
                <span className="text-[11px] text-[#D4A574] uppercase font-bold tracking-wider block">
                  Price Guide
                </span>
                <span className="text-sm font-semibold text-white">
                  Rs 1 - Rs 1,000 per person
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E6D3]/60">
          <p>© {new Date().getFullYear()} Shah Sweets and Bakers, Shabqadar (25000). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Shabqadar
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#FFFBF0]/10 hover:bg-[#D4A574] text-white transition-all hover:text-[#2D2421]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
