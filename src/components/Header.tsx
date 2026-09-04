import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/bakeryData';
import { useShopStatus } from '../utils/shopStatus';
import { Phone, MessageCircle, Clock, MapPin, Menu as MenuIcon, X, Search, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenHoursModal: () => void;
  likedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHoursModal, likedCount }) => {
  const shopStatus = useShopStatus();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Specialties', href: '#specialties' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const menuEl = document.getElementById('menu');
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: 'smooth' });
        // dispatch custom event or focus search
        window.dispatchEvent(new CustomEvent('search-menu', { detail: searchQuery }));
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md h-20 border-b border-[#D4A574]/30'
          : 'bg-white/90 backdrop-blur-sm h-20 border-b border-[#D4A574]/30'
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo with text */}
          <a href="#" className="flex items-center group">
            <Logo variant="full" size="md" />
          </a>

          {/* Center: Search & Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-semibold font-poppins text-[#4A3728]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#D4A574] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A574] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Search */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sweets, cakes..."
                className="w-40 xl:w-48 pl-8 pr-3 py-1.5 text-xs bg-[#FFFBF0] border border-[#D4A574]/40 rounded-full focus:outline-none focus:border-[#D4A574] focus:w-56 transition-all text-[#2D2421]"
              />
              <Search className="w-3.5 h-3.5 text-[#8C6D53] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>
          </div>

          {/* Right Side: Status badge & Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Shop Status Indicator */}
            <div className="flex flex-col items-end mr-1 text-right">
              <button
                onClick={onOpenHoursModal}
                className={`text-[10px] uppercase font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  shopStatus.isOpen ? 'text-emerald-700' : 'text-red-600'
                }`}
                title="Click to view weekly operating schedule"
              >
                <span className={`w-1.5 h-1.5 rounded-full status-pulse ${shopStatus.isOpen ? 'bg-emerald-600' : 'bg-red-600'}`} />
                <span>{shopStatus.isOpen ? 'Open Now' : 'Closed'}</span>
              </button>
              <span className="text-[11px] text-[#8C6D53]">
                {shopStatus.isOpen ? 'Until 11:00 PM' : 'Opens at 6:00 AM'}
              </span>
            </div>

            {/* Liked Items Badge (if any) */}
            {likedCount > 0 && (
              <a
                href="#specialties"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFBF0] border border-rose-200 text-rose-600 text-xs font-semibold"
                title={`${likedCount} favorite sweets saved`}
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>{likedCount}</span>
              </a>
            )}

            {/* Call Button */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="premium-border text-[#4A3728] px-4 py-2 rounded-full font-bold text-xs hover:bg-[#FFFBF0] flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A3728]" />
              <span>Call</span>
            </a>

            {/* WhatsApp Order Button */}
            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Assalam-o-Alaikum! I'd like to inquire about sweets from Shah Sweets and Bakers, Shabqadar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-green-600 shadow-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order</span>
            </a>
          </div>

          {/* Right Side: Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Status indicator */}
            <button
              onClick={onOpenHoursModal}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFFBF0] border border-[#D4A574]/50 text-[#4A3728]"
            >
              <span className={`w-2 h-2 rounded-full ${shopStatus.isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]'}`} />
              <span>{shopStatus.isOpen ? 'OPEN' : '6 AM'}</span>
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-full bg-[#0066FF] text-white"
              aria-label="Call Shah Sweets"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4A3728] hover:bg-[#FFFBF0] border border-[#D4A574]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4A574]/20 shadow-xl px-4 py-5 animate-in slide-in-from-top-4">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sweet, cake, bakery item..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#FFFBF0] border border-[#D4A574]/40 rounded-xl focus:outline-none focus:border-[#D4A574]"
            />
            <Search className="w-4 h-4 text-[#8C6D53] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </form>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 font-poppins text-base font-medium text-[#4A3728] border-b border-[#D4A574]/20 pb-4 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-[#FFFBF0] hover:text-[#D4A574] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D4A574]">→</span>
              </a>
            ))}
          </nav>

          {/* Quick info in mobile drawer */}
          <div className="space-y-2 text-xs text-[#4A3728]/80 mb-4 bg-[#FFFBF0] p-3 rounded-xl border border-[#D4A574]/30">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C41E3A]" />
              <span className="font-medium">Shabqadar, 25000 (Main Bazar)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4A574]" />
              <span>Daily 6:00 AM – 11:00 PM ({shopStatus.statusText})</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Assalam-o-Alaikum! I'd like to place an order at Shah Sweets and Bakers Shabqadar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
