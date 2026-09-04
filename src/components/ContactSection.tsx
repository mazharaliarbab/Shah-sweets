import React, { useState } from 'react';
import { BUSINESS_INFO, WEEKLY_HOURS } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { Phone, MessageCircle, MapPin, Clock, ChevronDown, ChevronUp, Navigation } from 'lucide-react';

interface ContactSectionProps {
  onOpenHoursModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenHoursModal }) => {
  const shopStatus = useShopStatus();
  const [scheduleExpanded, setScheduleExpanded] = useState(false);

  return (
    <section id="contact" className="py-20 bg-[#F5E6D3]/30 relative border-t border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Fast Responses & Welcoming Service</span>
          </div>

          <h2 className="serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] uppercase tracking-[0.04em] leading-tight">
            GET IN TOUCH
          </h2>

          <div className="w-16 h-1 gold-gradient mx-auto my-3 rounded-full" />

          <p className="font-poppins text-base sm:text-lg text-[#8C6D53] font-semibold mt-1">
            Call our counter directly, send an order via WhatsApp, or visit us in Shabqadar
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Phone Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 premium-border shadow-sm flex flex-col justify-between hover:shadow-xl hover:translate-y-[-4px] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center mb-5">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                Direct Phone Call
              </span>
              <h3 className="serif-heading font-bold text-2xl text-[#4A3728] mt-1 mb-2">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#2D2421]/70 mb-6">
                Instant connection to our bakery front desk in Shabqadar for fresh orders and inquiries.
              </p>
            </div>

            <a
              id="contact-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-poppins font-bold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* 2. WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 premium-border shadow-sm flex flex-col justify-between hover:shadow-xl hover:translate-y-[-4px] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                WhatsApp Messaging
              </span>
              <h3 className="serif-heading font-bold text-xl sm:text-2xl text-[#4A3728] mt-1 mb-2">
                Message on WhatsApp
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#2D2421]/70 mb-6">
                Send us photos of custom cakes, request gift box prices, or order sweets directly on WhatsApp.
              </p>
            </div>

            <a
              id="contact-whatsapp-btn"
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in your sweets from Shah Sweets and Bakers, Shabqadar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-poppins font-bold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>OPEN WHATSAPP</span>
            </a>
          </div>

          {/* 3. Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 premium-border shadow-sm flex flex-col justify-between hover:shadow-xl hover:translate-y-[-4px] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C41E3A]/10 text-[#C41E3A] flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                Bakery Location
              </span>
              <h3 className="serif-heading font-bold text-2xl text-[#4A3728] mt-1 mb-2">
                {BUSINESS_INFO.shortAddress}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#2D2421]/70 mb-6">
                Main Bazar, Shabqadar, Khyber Pakhtunkhwa (25000). Convenient parking and family-friendly.
              </p>
            </div>

            <a
              id="contact-directions-btn"
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full flex items-center justify-center gap-2 rounded-xl gold-gradient text-[#2D2421] font-poppins font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Navigation className="w-4 h-4 text-[#2D2421]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* 4. Hours Card with Expandable Schedule */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 premium-border shadow-sm flex flex-col justify-between hover:shadow-xl hover:translate-y-[-4px] transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#4A3728]/10 text-[#4A3728] flex items-center justify-center mb-5">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                Opening Hours
              </span>
              <div className="flex items-center gap-2 mt-1 mb-2">
                <span className={`w-3 h-3 rounded-full ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
                <h3 className={`serif-heading font-bold text-xl ${shopStatus.isOpen ? 'text-[#10B981]' : 'text-[#DC2626]'}`}>
                  {shopStatus.statusText}
                </h3>
              </div>
              <p className="font-inter text-xs sm:text-sm text-[#2D2421]/70 mb-4">
                Open Daily: 6:00 AM – 11:00 PM. Hot breakfast and fresh sweets prepared in morning batches.
              </p>

              {/* Expandable weekly schedule toggle */}
              {scheduleExpanded && (
                <div className="my-3 p-3 rounded-xl bg-[#FFFBF0] border border-[#D4A574]/30 text-xs space-y-1 animate-in fade-in">
                  {WEEKLY_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between py-0.5 text-[#4A3728]">
                      <span className="font-medium">{h.day}:</span>
                      <span className="font-bold">{h.open} - {h.close}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setScheduleExpanded(!scheduleExpanded)}
              className="h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFFBF0] hover:bg-[#F5E6D3] premium-border text-[#4A3728] font-poppins font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{scheduleExpanded ? 'Hide Schedule' : 'View Weekly Schedule'}</span>
              {scheduleExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
