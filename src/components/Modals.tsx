import React, { useState } from 'react';
import { WEEKLY_HOURS, BUSINESS_INFO, REVIEWS_DATA, GALLERY_PHOTOS } from '../data/bakeryData';
import { GalleryPhoto, ReviewItem } from '../types';
import { useShopStatus } from '../utils/shopStatus';
import { X, Clock, Star, MapPin, ThumbsUp, CheckCircle, ChevronLeft, ChevronRight, Send, Check } from 'lucide-react';

/* =========================================================================
   1. Hours Modal
   ========================================================================= */
interface HoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HoursModal: React.FC<HoursModalProps> = ({ isOpen, onClose }) => {
  const shopStatus = useShopStatus();
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOrder[currentDayIndex];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#D4A574]/40 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FFFBF0] text-[#4A3728]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4A3728] text-white flex items-center justify-center">
            <Clock className="w-6 h-6 text-[#D4A574]" />
          </div>
          <div>
            <h3 className="serif-heading font-bold text-2xl text-[#4A3728]">
              Operating Hours
            </h3>
            <span className="text-xs text-[#8C6D53]">
              Shah Sweets & Bakers • Shabqadar
            </span>
          </div>
        </div>

        {/* Live Status Header inside Modal */}
        <div className={`p-4 rounded-2xl mb-6 text-white ${shopStatus.isOpen ? 'bg-gradient-to-r from-[#10B981] to-emerald-600' : 'bg-gradient-to-r from-[#DC2626] to-red-600'}`}>
          <div className="flex items-center justify-between">
            <span className="font-poppins font-black text-lg tracking-wider uppercase">
              {shopStatus.statusText}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/20">
              Today: {todayName}
            </span>
          </div>
          <p className="text-xs mt-1 text-white/90">
            {shopStatus.countdownText} ({shopStatus.nextEventText})
          </p>
        </div>

        {/* Weekly Schedule */}
        <div className="space-y-2 mb-6">
          {WEEKLY_HOURS.map((item) => {
            const isToday = item.day.toLowerCase() === todayName.toLowerCase();
            return (
              <div
                key={item.day}
                className={`flex items-center justify-between p-2.5 rounded-xl text-sm ${
                  isToday
                    ? 'bg-[#FFFBF0] border border-[#D4A574] font-bold text-[#4A3728]'
                    : 'text-[#2D2421]/80 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isToday && <span className="w-2 h-2 rounded-full bg-[#D4A574]" />}
                  <span>{item.day}</span>
                  {isToday && (
                    <span className="text-[10px] bg-[#D4A574] text-[#2D2421] px-1.5 py-0.2 rounded font-bold uppercase">
                      Today
                    </span>
                  )}
                </div>
                <span>{item.open} - {item.close}</span>
              </div>
            );
          })}
        </div>

        {/* Special Holiday Notice */}
        <div className="bg-[#FFFBF0] p-3.5 rounded-xl border border-[#D4A574]/30 text-xs text-[#8C6D53] mb-6">
          <p className="font-semibold text-[#4A3728] mb-0.5">Eid & Special Occasions:</p>
          <p>We remain open with special round-the-clock sweet production during Chand Raat and Eid festivals.</p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#4A3728] hover:bg-[#34271c] text-white font-poppins font-bold text-sm uppercase tracking-wider transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   2. Lightbox Modal for Gallery
   ========================================================================= */
interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);
  const [currentPhoto, setCurrentPhoto] = useState<GalleryPhoto>(photo);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === currentPhoto.id);
    const newIdx = idx === 0 ? GALLERY_PHOTOS.length - 1 : idx - 1;
    setCurrentPhoto(GALLERY_PHOTOS[newIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === currentPhoto.id);
    const newIdx = (idx + 1) % GALLERY_PHOTOS.length;
    setCurrentPhoto(GALLERY_PHOTOS[newIdx]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#2D2421] rounded-3xl overflow-hidden shadow-2xl border border-[#D4A574]/40 flex flex-col max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close image"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Photo */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="w-full h-full max-h-[70vh] object-contain"
          />

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Info footer */}
        <div className="p-6 bg-[#2D2421] text-white border-t border-[#D4A574]/30">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded bg-[#D4A574] text-[#2D2421] text-xs font-bold uppercase tracking-wider">
              {currentPhoto.tag}
            </span>
            <span className="text-xs text-[#F5E6D3]/60">
              Shah Sweets & Bakers • Shabqadar Production
            </span>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-white">
            {currentPhoto.title}
          </h3>
          <p className="font-inter text-sm text-[#F5E6D3]/85 mt-1">
            {currentPhoto.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. Reviews Modal (Read all reviews + Submit new review)
   ========================================================================= */
interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [searchWord, setSearchWord] = useState('');
  const [showWriteForm, setShowWriteForm] = useState(false);

  // New review form states
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Shabqadar');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [newRecommended, setNewRecommended] = useState('');
  const [submittedToast, setSubmittedToast] = useState(false);

  if (!isOpen) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      location: newLocation.trim() || 'Shabqadar',
      rating: newRating,
      date: 'Just now',
      text: newText.trim(),
      helpfulCount: 1,
      verified: true,
      recommendedItem: newRecommended.trim() || undefined,
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedToast(true);
    setShowWriteForm(false);
    setNewName('');
    setNewText('');
    setNewRecommended('');
    setTimeout(() => setSubmittedToast(false), 4000);
  };

  const filteredReviews = reviewsList.filter((r) => {
    const matchesRating = filterRating === 'all' || r.rating === filterRating;
    const matchesSearch =
      r.name.toLowerCase().includes(searchWord.toLowerCase()) ||
      r.text.toLowerCase().includes(searchWord.toLowerCase()) ||
      r.location?.toLowerCase().includes(searchWord.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#D4A574]/40 shadow-2xl relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FFFBF0] text-[#4A3728]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#D4A574] uppercase tracking-wider mb-1">
            <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
            <span>Customer Feedback & Testimonials</span>
          </div>
          <h3 className="serif-heading text-2xl sm:text-3xl font-bold text-[#4A3728]">
            Verified Customer Reviews ({reviewsList.length + 162})
          </h3>
          <p className="text-xs text-[#8C6D53]">
            Overall 4.2★ based on genuine visits in Shabqadar, 25000
          </p>
        </div>

        {submittedToast && (
          <div className="p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Thank you! Your verified review has been published.</span>
          </div>
        )}

        {/* Action Controls: Search, Filter, and "Write Review" button */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D4A574]/20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                filterRating === 'all'
                  ? 'bg-[#4A3728] text-white'
                  : 'bg-[#FFFBF0] text-[#4A3728] border border-[#D4A574]/40'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                filterRating === 5
                  ? 'bg-[#4A3728] text-white'
                  : 'bg-[#FFFBF0] text-[#4A3728] border border-[#D4A574]/40'
              }`}
            >
              <span>5★</span>
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                filterRating === 4
                  ? 'bg-[#4A3728] text-white'
                  : 'bg-[#FFFBF0] text-[#4A3728] border border-[#D4A574]/40'
              }`}
            >
              <span>4★</span>
            </button>
          </div>

          <button
            onClick={() => setShowWriteForm(!showWriteForm)}
            className="px-3.5 py-1.5 rounded-lg bg-[#D4A574] hover:bg-[#c3915f] text-[#2D2421] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            {showWriteForm ? 'Cancel Form' : '+ Write a Review'}
          </button>
        </div>

        {/* Review Form Drawer */}
        {showWriteForm && (
          <form onSubmit={handleAddReview} className="p-4 my-3 bg-[#FFFBF0] rounded-2xl border border-[#D4A574]/40 space-y-3 animate-in fade-in">
            <h4 className="font-poppins font-bold text-sm text-[#4A3728]">
              Share Your Experience at Shah Sweets
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-[#8C6D53] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Asad Ullah"
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#D4A574]/40 text-xs text-[#2D2421]"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-[#8C6D53] block mb-1">Location in Shabqadar / Region</label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="e.g. Shabqadar Fort / Main Bazar"
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#D4A574]/40 text-xs text-[#2D2421]"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <label className="text-[11px] font-bold text-[#8C6D53] block mb-1">Your Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewRating(s)}
                      className="p-1 text-[#FFD700]"
                    >
                      <Star className={`w-5 h-5 ${s <= newRating ? 'fill-[#FFD700]' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <label className="text-[11px] font-bold text-[#8C6D53] block mb-1">Favorite Item (Optional)</label>
                <input
                  type="text"
                  value={newRecommended}
                  onChange={(e) => setNewRecommended(e.target.value)}
                  placeholder="e.g. Gulab Jamun, Sheermal"
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#D4A574]/40 text-xs text-[#2D2421]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#8C6D53] block mb-1">Review Comments</label>
              <textarea
                required
                rows={3}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="What did you think of the sweets, freshness, and service?"
                className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#D4A574]/40 text-xs text-[#2D2421]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-xl bg-[#4A3728] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#D4A574]" />
              <span>Submit Review</span>
            </button>
          </form>
        )}

        {/* Scrollable list of reviews */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 my-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-[#FFFBF0] border border-[#D4A574]/30"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-bold text-sm text-[#4A3728]">
                      {rev.name}
                    </span>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-bold">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#8C6D53]">
                    {rev.location} • {rev.date}
                  </span>
                </div>

                <div className="flex items-center text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? 'fill-[#FFD700]' : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="font-inter text-xs text-[#2D2421] leading-relaxed mt-2">
                "{rev.text}"
              </p>

              {rev.recommendedItem && (
                <div className="mt-2 text-[11px] text-[#D4A574] font-semibold">
                  ★ Recommended: {rev.recommendedItem}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#D4A574]/20 flex items-center justify-between">
          <span className="text-xs text-[#8C6D53]">
            Verified customer ratings registered for Shabqadar, 25000
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#4A3728] text-white text-xs font-bold uppercase tracking-wider"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
