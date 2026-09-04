import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { WarehouseGallery } from './components/WarehouseGallery';
import { FeaturedSpecialties } from './components/FeaturedSpecialties';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { HoursModal, LightboxModal, ReviewsModal } from './components/Modals';
import { GalleryPhoto } from './types';

export default function App() {
  // Modal states
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<GalleryPhoto | null>(null);

  // Liked items state (favorite sweets)
  const [likedItemIds, setLikedItemIds] = useState<Set<string>>(
    () => new Set(['gulab-jamun', 'pista-barfi'])
  );

  const toggleLike = (id: string) => {
    setLikedItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF0] text-[#2D2421] font-sans selection:bg-[#D4A574]/30 selection:text-[#4A3728]">
      {/* 1️⃣ Sticky Header (Always Visible) */}
      <Header
        onOpenHoursModal={() => setIsHoursModalOpen(true)}
        likedCount={likedItemIds.size}
      />

      <main className="flex-1">
        {/* 2️⃣ Hero Section (Full-Width Showcase) */}
        <Hero
          onOpenReviewsModal={() => setIsReviewsModalOpen(true)}
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />

        {/* 3️⃣ Trust & Credibility Section (4 Stat Cards) */}
        <TrustStats
          onOpenReviewsModal={() => setIsReviewsModalOpen(true)}
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />

        {/* 4️⃣ Featured Specialties Section */}
        <FeaturedSpecialties
          likedItemIds={likedItemIds}
          onToggleLike={toggleLike}
        />

        {/* 5️⃣ Explore Full Menu Section */}
        <MenuSection />

        {/* 6️⃣ Modern Warehouse Gallery Section */}
        <WarehouseGallery
          onSelectPhoto={(photo) => setActiveLightboxPhoto(photo)}
        />

        {/* 7️⃣ Customer Reviews Section */}
        <ReviewsSection
          onOpenReviewsModal={() => setIsReviewsModalOpen(true)}
        />

        {/* 8️⃣ Location & Google Maps Section */}
        <LocationSection
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />

        {/* 9️⃣ Contact & CTA Section */}
        <ContactSection
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />
      </main>

      {/* 🔟 Footer */}
      <Footer />

      {/* 📱 Mobile Sticky Action Bar */}
      <MobileStickyBar />

      {/* Modals */}
      <HoursModal
        isOpen={isHoursModalOpen}
        onClose={() => setIsHoursModalOpen(false)}
      />

      <LightboxModal
        photo={activeLightboxPhoto}
        onClose={() => setActiveLightboxPhoto(null)}
      />

      <ReviewsModal
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
      />
    </div>
  );
}
