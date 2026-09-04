import React from 'react';
import { BUSINESS_INFO } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { Star, Clock, Coins, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

interface TrustStatsProps {
  onOpenReviewsModal: () => void;
  onOpenHoursModal: () => void;
}

export const TrustStats: React.FC<TrustStatsProps> = ({ onOpenReviewsModal, onOpenHoursModal }) => {
  const shopStatus = useShopStatus();

  return (
    <section id="trust-stats" className="py-14 bg-[#F5E6D3]/40 border-y border-[#D4A574]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#D4A574] tracking-[0.2em] uppercase">
            Trusted by Generations in Shabqadar
          </span>
          <h2 className="serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728] mt-2">
            Why Shabqadar Chooses Shah Sweets
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Rating */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Star className="w-6 h-6 fill-white text-white" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="serif-heading font-bold text-4xl sm:text-5xl text-[#4A3728]">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="text-[#8C6D53] font-bold text-lg">/ 5★</span>
              </div>
              <div className="flex items-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                ))}
              </div>
              <p className="font-poppins font-bold text-sm sm:text-base text-[#2D2421] mt-1">
                {BUSINESS_INFO.reviewCount} Verified Reviews
              </p>
              <p className="text-xs text-[#8C6D53] mt-1">
                Highest customer satisfaction across Shabqadar tehsil
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A574]/20">
              <button
                onClick={onOpenReviewsModal}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A3728] group-hover:text-[#D4A574] transition-colors cursor-pointer"
              >
                <span>Read Customer Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 - Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4A3728] flex items-center justify-center text-[#D4A574] mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-[#D4A574]" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full status-pulse ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
                <span className={`serif-heading font-bold text-3xl sm:text-4xl ${shopStatus.isOpen ? 'text-[#10B981]' : 'text-[#DC2626]'}`}>
                  {shopStatus.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <p className="font-poppins font-bold text-sm sm:text-base text-[#2D2421] mt-1">
                {shopStatus.isOpen ? 'Open Until 11:00 PM' : 'Opens Daily at 6:00 AM'}
              </p>
              <p className="text-xs text-[#8C6D53] mt-1">
                {shopStatus.countdownText}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A574]/20">
              <button
                onClick={onOpenHoursModal}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A3728] group-hover:text-[#D4A574] transition-colors cursor-pointer"
              >
                <span>View Weekly Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 - Price */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <span className="serif-heading font-bold text-3xl sm:text-4xl text-[#4A3728]">
                {BUSINESS_INFO.priceRange}
              </span>
              <p className="font-poppins font-bold text-sm sm:text-base text-[#2D2421] mt-2">
                Budget-Friendly Premium Sweets
              </p>
              <p className="text-xs text-[#8C6D53] mt-1">
                Reported by {BUSINESS_INFO.priceReportedBy} verified customers
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A574]/20">
              <a
                href="#menu"
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A3728] group-hover:text-[#D4A574] transition-colors"
              >
                <span>Explore Price List</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4 - Location */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4A3728] flex items-center justify-center text-[#D4A574] mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-[#D4A574]" />
              </div>
              <span className="serif-heading font-bold text-2xl sm:text-3xl text-[#4A3728]">
                {BUSINESS_INFO.shortAddress}
              </span>
              <p className="font-poppins font-bold text-sm sm:text-base text-[#2D2421] mt-2">
                Main Bazar, Charsadda Tehsil
              </p>
              <p className="text-xs text-[#8C6D53] mt-1 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Verified Shabqadar coordinates
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A574]/20">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A3728] group-hover:text-[#D4A574] transition-colors"
              >
                <span>Get Driving Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
