import React, { useState } from 'react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/bakeryData';
import { Star, ThumbsUp, CheckCircle, MessageSquareQuote, Sparkles } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewsModal }) => {
  // Helpful votes state
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    REVIEWS_DATA.forEach((r) => {
      initial[r.id] = r.helpfulCount;
    });
    return initial;
  });
  const [votedMap, setVotedMap] = useState<Record<string, boolean>>({});

  const handleVoteHelpful = (id: string) => {
    if (votedMap[id]) return;
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setVotedMap((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <section id="reviews" className="py-20 bg-white relative border-t border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#4A3728] text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D4A574] text-[#D4A574]" />
            <span>4.2★ Rated Bakery in Shabqadar</span>
          </div>

          <h2 className="serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] uppercase tracking-[0.04em] leading-tight">
            WHY CUSTOMERS LOVE US
          </h2>

          <div className="w-16 h-1 gold-gradient mx-auto my-3 rounded-full" />

          <p className="font-poppins text-lg sm:text-xl text-[#D4A574] font-bold mt-1">
            {BUSINESS_INFO.reviewCount} Verified Reviews
          </p>

          <p className="font-inter text-sm sm:text-base text-[#2D2421]/80 mt-2 max-w-2xl mx-auto">
            Honest feedback from residents of Shabqadar, Charsadda, and travelers who stop by for authentic Pakistani mithai, hot jalebi, and celebratory wedding platters.
          </p>
        </div>

        {/* Review Cards (Top 6 in responsive grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS_DATA.slice(0, 6).map((review) => {
            const currentHelpful = helpfulVotes[review.id] ?? review.helpfulCount;
            const hasVoted = votedMap[review.id];

            return (
              <div
                key={review.id}
                className="bg-[#FFFBF0] rounded-3xl p-6 sm:p-7 premium-border shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Customer Name & Verified Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="serif-heading font-bold text-lg sm:text-xl text-[#4A3728]">
                          {review.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#8C6D53] font-medium">
                          {review.location}
                        </span>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-xs text-stone-400 whitespace-nowrap">
                      {review.date}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-[#D4A574] text-[#D4A574]' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-inter text-sm sm:text-base text-[#2D2421] leading-relaxed text-justify mb-4">
                    "{review.text}"
                  </p>

                  {/* Recommended item tag */}
                  {review.recommendedItem && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#D4A574]/30 text-xs text-[#4A3728] font-medium">
                      <Sparkles className="w-3 h-3 text-[#D4A574]" />
                      <span>Loved: <strong className="text-[#4A3728] font-bold">{review.recommendedItem}</strong></span>
                    </div>
                  )}
                </div>

                {/* Helpful count with interactive toggle */}
                <div className="pt-4 border-t border-[#D4A574]/20 flex items-center justify-between">
                  <button
                    onClick={() => handleVoteHelpful(review.id)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      hasVoted
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-[#8C6D53] hover:text-[#4A3728] hover:bg-white'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? 'fill-emerald-600' : ''}`} />
                    <span>👍 {currentHelpful} people found this helpful</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read All Reviews Button */}
        <div className="text-center">
          <button
            onClick={onOpenReviewsModal}
            className="h-12 px-8 rounded-lg bg-[#4A3728] hover:bg-[#2D2421] text-white font-poppins font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer transition-all"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#D4A574]" />
            <span>READ ALL 168 REVIEWS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
