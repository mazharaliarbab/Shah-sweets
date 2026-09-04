import React, { useState, useEffect } from 'react';
import { LogoEmblemSvg } from './Logo';
import { BUSINESS_INFO, HERO_CAROUSEL_ITEMS } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { MapPin, MessageCircle, Phone, Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenReviewsModal: () => void;
  onOpenHoursModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReviewsModal, onOpenHoursModal }) => {
  const shopStatus = useShopStatus();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_CAROUSEL_ITEMS.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_ITEMS.length);
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 overflow-hidden bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Column: Bold Stacked Typography & Controls */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10 text-left">
            {/* Gold Gradient Bar */}
            <div className="w-16 h-1.5 gold-gradient mb-6 rounded-full" />

            {/* Urdu Subheading */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-urdu text-lg sm:text-xl text-[#D4A574] tracking-wider font-semibold">
                شاہ سویٹس اینڈ بیکرز شبقدر
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] font-bold">
                Shabqadar, 25000
              </span>
            </div>

            {/* Giant Stacked Serif Heading */}
            <h1
              id="hero-business-name"
              className="serif-heading text-[#4A3728] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.92] uppercase font-bold tracking-[0.03em] mb-5"
            >
              SHAH<br />
              SWEETS<br />
              <span className="text-[#D4A574]">AND BAKERS</span>
            </h1>

            {/* Tagline Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4A3728]/80 mb-8 max-w-lg leading-relaxed font-poppins">
              {BUSINESS_INFO.tagline}
            </p>

            {/* Stats Row with Vertical Dividers */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-8 pb-6 border-b border-[#D4A574]/30">
              {/* 1. Rating */}
              <button
                onClick={onOpenReviewsModal}
                className="flex flex-col text-left group cursor-pointer"
                title="Click to see verified reviews"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-bold text-[#4A3728] group-hover:text-[#D4A574] transition-colors">
                    {BUSINESS_INFO.rating}★
                  </span>
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700]" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A574]">
                  {BUSINESS_INFO.reviewCount} Verified Reviews
                </span>
              </button>

              {/* Vertical divider */}
              <div className="h-10 w-px bg-[#D4A574]/40" />

              {/* 2. Budget Indicator */}
              <div className="flex flex-col text-left">
                <span className="text-3xl font-bold text-[#4A3728]">
                  Rs 1-1k
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A574]">
                  Budget Premium
                </span>
              </div>

              {/* Vertical divider */}
              <div className="h-10 w-px bg-[#D4A574]/40 hidden sm:block" />

              {/* 3. Live Operating Status */}
              <button
                onClick={onOpenHoursModal}
                className="flex flex-col text-left cursor-pointer group"
                title="Click to view weekly schedule"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full status-pulse ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
                  <span className={`text-xl sm:text-2xl font-bold ${shopStatus.isOpen ? 'text-[#10B981]' : 'text-[#DC2626]'}`}>
                    {shopStatus.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6D53]">
                  {shopStatus.isOpen ? 'Until 11:00 PM' : 'Opens 6:00 AM'}
                </span>
              </button>
            </div>

            {/* CTAs matching theme */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* 📍 Get Directions */}
              <a
                id="hero-directions-btn"
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A3728] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-[#2D2421] shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 text-[#D4A574]" />
                <span>Get Directions</span>
              </a>

              {/* 💬 WhatsApp Order */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Assalam-o-Alaikum! I want to order fresh sweets from Shah Sweets and Bakers, Shabqadar.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-[#20ba59] shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              {/* 📞 Call Now */}
              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="premium-border text-[#4A3728] px-6 py-3.5 sm:px-7 sm:py-4 rounded-lg font-bold text-sm tracking-wider uppercase hover:bg-white/60 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#4A3728]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Framed Showcase & Stamp Badge */}
          <div className="w-full lg:w-1/2 relative pt-4 pb-6 lg:p-10">
            {/* Framed Big Showcase Image with Carousel */}
            <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[36px] sm:rounded-[40px] overflow-hidden relative border-8 border-white shadow-2xl bg-[#4A3728]">
              {HERO_CAROUSEL_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728] via-transparent to-transparent opacity-70" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-8 left-8 right-8 text-white text-left">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574] mb-1.5 block">
                      Our Pride • Shabqadar Fresh
                    </span>
                    <h2 className="text-2xl sm:text-3xl serif-heading font-bold text-white mb-1">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Carousel Navigation Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                {HERO_CAROUSEL_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-5 bg-[#D4A574]' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Circular Heritage Stamp Badge */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-40 h-40 sm:w-48 sm:h-48 bg-[#D4A574] rounded-full border-[8px] sm:border-[12px] border-[#FFFBF0] flex items-center justify-center p-5 text-center shadow-xl z-20">
              <p className="text-[#4A3728] font-bold text-xs sm:text-sm leading-tight italic font-serif">
                "Quality you can taste since 1998"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
