import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/bakeryData';
import { GalleryPhoto } from '../types';
import { Maximize2, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

interface WarehouseGalleryProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const WarehouseGallery: React.FC<WarehouseGalleryProps> = ({ onSelectPhoto }) => {
  const [activeTab, setActiveTab] = useState<'grid' | 'carousel'>('grid');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="py-16 bg-[#F5E6D3]/40 relative border-t border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5 text-[#D4A574]" />
              <span>Behind the Scenes in Shabqadar</span>
            </div>
            <h2 className="serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3728]">
              Modern Kitchen & Bakery Gallery
            </h2>
            <div className="w-16 h-1 gold-gradient mt-3 mb-2 rounded-full" />
            <p className="font-poppins text-sm sm:text-base text-[#8C6D53] max-w-2xl">
              Take a visual journey inside our hygienic bakery workshops, where traditional artisans craft sweet perfection daily using pure dairy ingredients.
            </p>
          </div>

          {/* View toggle (Grid vs Carousel view) */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white p-1 rounded-xl premium-border shadow-sm">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-[#4A3728] text-white shadow'
                  : 'text-[#4A3728] hover:bg-[#FFFBF0]'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveTab('carousel')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'carousel'
                  ? 'bg-[#4A3728] text-white shadow'
                  : 'text-[#4A3728] hover:bg-[#FFFBF0]'
              }`}
            >
              Slideshow
            </button>
          </div>
        </div>

        {/* Carousel View Mode */}
        {activeTab === 'carousel' ? (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#2D2421] border-4 border-white h-[420px] sm:h-[500px]">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                  idx === carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                onClick={() => onSelectPhoto(photo)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-gradient text-[#2D2421] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" />
                    {photo.tag}
                  </span>
                  <h3 className="serif-heading text-2xl sm:text-4xl font-bold text-white mb-2">
                    {photo.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-[#F5E6D3]/90">
                    {photo.caption}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#D4A574]">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click image to view in Fullscreen Lightbox</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              {GALLERY_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === carouselIndex ? 'w-6 bg-[#D4A574]' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid View Mode (3 columns desktop, 1 column mobile) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className={`group relative rounded-3xl overflow-hidden bg-white premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`w-full overflow-hidden relative ${index === 0 ? 'h-72 sm:h-80' : 'h-64'}`}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Lightbox button overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/60 text-white border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#D4A574] text-[#2D2421] text-[10px] font-bold uppercase tracking-wider">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#F5D7A1] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#F5E6D3]/90 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
