import React from 'react';
import {
  Calendar,
  PhoneCall,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/dentalData';

interface HeroProps {
  onBookClick: () => void;
  onEmergencyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onEmergencyClick }) => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24 border-b border-slate-100" id="hero">
      {/* Seamless Right-Side Operatory & Patient Image - Bleeds to the right edge */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 xl:w-7/12 pointer-events-none overflow-hidden">
        <img
          src={CLINIC_IMAGES.hero}
          alt="Gentle Dental Care at Hazara Dental Clinic Abbottabad"
          className="w-full h-full object-cover object-center lg:object-left"
          referrerPolicy="no-referrer"
          loading="eager"
          id="hero-operatory-image"
        />
        {/* Soft horizontal gradient for seamless transition between white text area and image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/50 to-transparent lg:via-white/30" />
        {/* Vertical gradient overlay on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent sm:hidden" />
      </div>

      {/* Main Content Layout with Standard Left Margin */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Call-to-Action Buttons */}
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
          </div>

        </div>
      </div>

      {/* Floating Location Badge on Bottom Right */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-20">
        <div className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A2540]">
          <MapPin className="w-4 h-4 text-[#00A8E8]" />
          <span>Main Kachehri Road</span>
        </div>
      </div>
    </section>
  );
};
