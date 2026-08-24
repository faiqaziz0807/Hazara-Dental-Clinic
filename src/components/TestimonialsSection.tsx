import React from 'react';
import { Star, CheckCircle2, Quote, MessageSquare } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_INFO } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Overall Google Rating summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Patient Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              What Abbottabad Says About Us
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Authentic reviews from families, professionals, and patients treated at Hazara Dental Clinic.
            </p>
          </div>

          {/* Google Rating Summary Card */}
          <div className="flex-shrink-0 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 flex items-center gap-4 shadow-sm" id="google-review-badge">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-inner">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-slate-900 font-['Outfit']">
                  {CLINIC_INFO.googleRating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Google Verified • {CLINIC_INFO.totalReviews}+ Five-Star Reviews
              </p>
            </div>
          </div>
        </div>

        {/* 4 Patient Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="testimonials-grid">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-cyan-400/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={`review-card-${review.id}`}
            >
              <div>
                {/* Header: Avatar, Stars & Treatment */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0A2540] to-[#00A8E8] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {review.avatarLetter}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-slate-900">{review.patientName}</h4>
                        {review.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8E8]" title="Verified Patient" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{review.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">{review.date}</span>
                  </div>
                </div>

                {/* Treatment Tag */}
                <div className="inline-block bg-cyan-50 text-[#00A8E8] text-[11px] font-bold px-3 py-1 rounded-full mb-3 border border-cyan-100">
                  Treatment: {review.treatment}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Pain-Free Confirmed
                </span>
                <span className="text-[11px]">Abbottabad Patient</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
