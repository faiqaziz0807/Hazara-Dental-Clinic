import React from 'react';
import {
  Award,
  ShieldCheck,
  Heart,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  Building2,
  Clock,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES, STERILIZATION_STEPS } from '../data/dentalData';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2540]/5 text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-2">
            <span>About Dr. Uzair Khan & Hazara Dental Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Clinical Excellence & Compassionate Care
          </h2>
        </div>

        {/* Doctor Bio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-12">
          
          {/* Bento Cell 1: Doctor Portrait (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 bg-[#0A2540] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-[4/3] sm:aspect-[16/11] mb-5 border border-white/10">
              <img
                src={CLINIC_IMAGES.dentistPortrait}
                alt="Dr. Uzair Khan - Specialist Dental Surgeon Hazara Dental Clinic Abbottabad"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="lazy"
                id="about-dentist-portrait-img"
              />
              <div className="absolute top-3 left-3 bg-[#00A8E8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                PMDC Verified
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{CLINIC_INFO.leadDentist}</h3>
                  <p className="text-xs text-cyan-300 font-medium">{CLINIC_INFO.qualification}</p>
                </div>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Lead Surgeon
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Specializing in painless rotary endodontics, advanced implantology, and aesthetic cosmetic smile transformations in Abbottabad.
              </p>
            </div>
          </div>

          {/* Bento Cell 2: Clinical Philosophy & Values (7 cols) */}
          <div className="md:col-span-12 lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2540] leading-tight mb-4">
                Painless Dentistry with Uncompromising European Sterilization
              </h3>

              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                <p>
                  Welcome to <strong className="text-slate-900 font-semibold">Hazara Dental Clinic</strong> on Main Kachehri Road, Abbottabad. Under the clinical leadership of <strong className="text-slate-900 font-semibold">{CLINIC_INFO.leadDentist}</strong>, we strive to make dental care comfortable, anxiety-free, and accessible.
                </p>
                <p>
                  Utilizing modern electronic apex locators, computerized local anesthesia, and high-frequency rotary instrumentation, we minimize procedural time and eliminate treatment discomfort.
                </p>
              </div>

              {/* Sub Bento Grid of Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 text-[#00A8E8] flex items-center justify-center mb-2">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Gentle Approach</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Compassionate bedside care for anxious and nervous patients.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0A2540] flex items-center justify-center mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Modern Digital Tech</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Digital intraoral sensors, apex locators & LED curing.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Over 5,000 satisfied patients in Hazara</span>
              </div>

              <button
                onClick={onBookClick}
                className="px-5 py-2.5 rounded-xl bg-[#00A8E8] hover:bg-[#0092ca] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                id="about-meet-dentist-btn"
              >
                Book Appointment with Dr. Uzair
              </button>
            </div>
          </div>

        </div>

        {/* Sterilization Bento Protocol Breakdown */}
        <div className="mt-8 bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200" id="sterilization-protocol">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Sterile Safety Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
              Our 4-Step European Class-B Autoclave Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every instrument is hermetically sealed and heat-sterilized at 134°C with fractional vacuum pulses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STERILIZATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                id={`sterilization-step-${step.step}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#0A2540] text-white font-bold text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Class-B
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0A2540]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
