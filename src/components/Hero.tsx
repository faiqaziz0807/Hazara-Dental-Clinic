import React, { useState, useEffect, useCallback } from 'react';
import {
  Calendar,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/dentalData';

interface HeroProps {
  onBookClick: () => void;
  onEmergencyClick: () => void;
}

const HERO_SLIDES = [
  {
    image: CLINIC_IMAGES.hero,
    alt: 'Gentle Dental Care & Patient Consultation with Dr. Uzair Khan',
    tag: 'Consultation & Diagnostics',
    zoomType: 'in',
  },
  {
    image: CLINIC_IMAGES.clinicRoom,
    alt: 'Modern Sterile Operatory Suite at Hazara Dental Clinic Abbottabad',
    tag: 'State-of-the-Art Operatory',
    zoomType: 'out',
  },
  {
    image: CLINIC_IMAGES.whitening,
    alt: 'Cosmetic Dentistry and Professional Teeth Whitening',
    tag: 'Cosmetic & Whitening Care',
    zoomType: 'in',
  },
  {
    image: CLINIC_IMAGES.implants,
    alt: 'Advanced Titanium Dental Implants & Rotary Endodontics',
    tag: 'Advanced Implantology',
    zoomType: 'out',
  },
  {
    image: CLINIC_IMAGES.smileTransformation,
    alt: 'Full Aesthetic Smile Transformations & Restorative Care',
    tag: 'Smile Makeovers',
    zoomType: 'in',
  },
  {
    image: CLINIC_IMAGES.aligners,
    alt: 'Clear Aligners & Precision Orthodontic Alignment',
    tag: 'Invisible Aligners',
    zoomType: 'out',
  },
  {
    image: CLINIC_IMAGES.pediatric,
    alt: 'Gentle & Caring Pediatric Dentistry for Families',
    tag: 'Gentle Family Dentistry',
    zoomType: 'in',
  },
];

// Short slide interval (2.8 seconds) as requested
const SLIDE_INTERVAL_MS = 2800;

export const Hero: React.FC<HeroProps> = ({ onBookClick, onEmergencyClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slide rotation with short interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24 border-b border-slate-100"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider with Zoom-In & Zoom-Out Animations */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 xl:w-7/12 overflow-hidden select-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const isZoomIn = slide.zoomType === 'in';
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {isActive ? (
                <img
                  key={`slide-${index}-${isActive}`}
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-full object-cover object-center lg:object-left ${
                    isZoomIn ? 'animate-hero-zoom-in' : 'animate-hero-zoom-out'
                  }`}
                  referrerPolicy="no-referrer"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  id={`hero-slide-img-${index}`}
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center lg:object-left"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              )}
            </div>
          );
        })}

        {/* Soft horizontal gradient for seamless transition between white text area and image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 sm:via-white/50 to-transparent lg:via-white/30 pointer-events-none" />
        
        {/* Vertical gradient overlay on mobile for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/60 to-transparent sm:hidden pointer-events-none" />

        {/* Slider Controls & Slide Label (Desktop & Tablet) */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 hidden sm:flex items-center gap-3">
          {/* Active Slide Tag with Transition Badge */}
          <div className="bg-slate-900/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-[11px] font-semibold border border-white/15 shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] animate-ping" />
            <span>{HERO_SLIDES[currentSlide].tag}</span>
            <span className="text-[10px] text-cyan-300 font-bold ml-1 uppercase">
              {HERO_SLIDES[currentSlide].zoomType === 'in' ? '▲ Zoom In' : '▼ Zoom Out'}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-lg">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-7 h-7 rounded-xl flex items-center justify-center text-slate-700 hover:text-[#00A8E8] hover:bg-slate-100 transition-colors cursor-pointer"
              id="hero-slider-prev-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1 px-1">
              {HERO_SLIDES.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentSlide
                      ? 'w-4 bg-[#00A8E8]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  id={`hero-slider-dot-${dotIdx}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-7 h-7 rounded-xl flex items-center justify-center text-slate-700 hover:text-[#00A8E8] hover:bg-slate-100 transition-colors cursor-pointer"
              id="hero-slider-next-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="absolute top-4 right-4 z-20 sm:hidden flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
          {HERO_SLIDES.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentSlide ? 'w-3.5 bg-[#00A8E8]' : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Layout with Standard Left Margin */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100/80 text-[11px] sm:text-xs font-bold text-[#00A8E8] uppercase tracking-wider mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00A8E8] animate-pulse" />
            <span>Premier Dental Center • Abbottabad</span>
          </div>

          {/* Main Title Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2540] leading-[1.12] tracking-tight mb-4 sm:mb-5">
            Gentle &amp; Expert <br />
            <span className="text-[#00A8E8]">Dental Care</span> in Abbottabad
          </h1>

          {/* Subheading / Description */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6">
            Experience pain-free treatments with <strong className="text-slate-900 font-semibold">{CLINIC_INFO.leadDentist}</strong>. We combine rotary endodontics, titanium implantology, and 100% Class-B autoclave sterilization.
          </p>

          {/* Clinical Highlights Checklist */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8E8] flex-shrink-0" />
              <span>Painless Rotary Root Canals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A8E8] flex-shrink-0" />
              <span>Class-B Sterile Protocols</span>
            </div>
          </div>

          {/* Call-to-Action Buttons & Location */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onBookClick}
              className="bg-[#00A8E8] hover:bg-[#0092ca] text-white px-6 sm:px-7 py-3.5 rounded-2xl text-sm sm:text-base font-bold shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5"
              id="hero-get-consultation-btn"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get Consultation</span>
            </button>

            <button
              onClick={onEmergencyClick}
              className="border-2 border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-[#0A2540] px-5 sm:px-6 py-3.5 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer flex items-center gap-2.5 shadow-sm"
              id="hero-emergency-call-btn"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
              <span>Emergency Call</span>
            </button>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-[#0A2540] shadow-sm">
              <MapPin className="w-4 h-4 text-[#00A8E8]" />
              <span>Main Kachehri Road</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
