import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Copy, Check, Bell } from 'lucide-react';

interface LocationSectionProps {
  onOpenHoursModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenHoursModal }) => {
  const shopStatus = useShopStatus();
  const [copied, setCopied] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${BUSINESS_INFO.name}, ${BUSINESS_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSetReminder = () => {
    setReminderSet(true);
    setTimeout(() => setReminderSet(false), 4000);
  };

  return (
    <section id="location" className="py-20 bg-[#FFFBF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C41E3A]/10 border border-[#C41E3A]/30 text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Official Shabqadar Coordinates</span>
          </div>

          <h2 className="serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] uppercase tracking-[0.04em] leading-tight">
            VISIT US IN SHABQADAR
          </h2>

          <div className="w-16 h-1 gold-gradient mx-auto my-3 rounded-full" />

          <p className="font-poppins text-base sm:text-lg text-[#8C6D53] font-semibold mt-1">
            Located conveniently on Main Bazar, Shabqadar (25000) — Welcome with family!
          </p>
        </div>

        {/* Two-Column Layout (Desktop) & Responsive Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 premium-border shadow-sm flex flex-col justify-between">
            <div>
              {/* Location Badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFBF0] border border-[#C41E3A]/30 flex items-center justify-center text-[#C41E3A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="serif-heading font-bold text-xl text-[#4A3728]">
                      Shah Sweets & Bakers
                    </h3>
                    <span className="font-urdu text-xs text-[#D4A574]">
                      شاہ سویٹس - شبقدر
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5E6D3] text-[#4A3728]">
                  Verified Bakery
                </span>
              </div>

              {/* Full Address */}
              <div className="space-y-4 py-4 border-y border-[#D4A574]/20 text-[#2D2421]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                      Full Address
                    </span>
                    <p className="font-poppins font-semibold text-base sm:text-lg text-[#4A3728]">
                      {BUSINESS_INFO.shortAddress}
                    </p>
                    <p className="font-inter text-xs text-[#8C6D53]">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                      Call / Orders Desk
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-poppins font-bold text-lg text-[#0066FF] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#8C6D53]">
                      Direct phone line to front counter
                    </span>
                  </div>
                </div>

                {/* Hours & Status */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-[#8C6D53] font-bold uppercase tracking-wider block">
                      Daily Schedule
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
                      <span className={`font-poppins font-bold text-sm ${shopStatus.isOpen ? 'text-[#10B981]' : 'text-[#DC2626]'}`}>
                        {shopStatus.isOpen ? 'OPEN NOW • Closes 11:00 PM' : 'CLOSED • Opens 6:00 AM'}
                      </span>
                    </div>
                    <span className="text-xs text-[#8C6D53] block mt-0.5">
                      Monday to Sunday: 6:00 AM – 11:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                {/* Copy Address Button */}
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FFFBF0] border border-[#D4A574]/40 hover:border-[#D4A574] text-[#4A3728] text-xs font-bold transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#8C6D53]" />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>

                {/* Set Reminder Button */}
                <button
                  onClick={handleSetReminder}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FFFBF0] border border-[#D4A574]/40 hover:border-[#D4A574] text-[#4A3728] text-xs font-bold transition-all"
                >
                  <Bell className="w-4 h-4 text-[#D4A574]" />
                  <span>{reminderSet ? 'Opening at 6 AM!' : 'Set Reminder'}</span>
                </button>
              </div>

              {/* Get Directions Primary CTA */}
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] hover:bg-[#c3915f] text-[#2D2421] font-poppins font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-[#2D2421]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2D2421]/70" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#D4A574]/30 shadow-lg min-h-[380px] sm:min-h-[440px] relative flex flex-col">
            {/* Map Top Bar */}
            <div className="p-3 bg-[#4A3728] text-white flex items-center justify-between text-xs px-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4A574] animate-pulse" />
                <span className="font-poppins font-semibold">
                  Google Maps Live View • Shabqadar, 25000
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A574] hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="flex-1 w-full relative">
              <iframe
                title="Google Maps Shabqadar Location"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Pin Info Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D4A574]/40 shadow-xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C41E3A] border-2 border-white shadow-sm" />
                  <span className="font-poppins font-bold text-xs text-[#4A3728]">
                    Shah Sweets & Bakers
                  </span>
                </div>
                <p className="text-[11px] text-[#8C6D53] mt-0.5">
                  Main Bazar, Shabqadar, KP (4.2★)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
