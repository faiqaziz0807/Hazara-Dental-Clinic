import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Eye, Layers } from 'lucide-react';
import { SMILE_GALLERY } from '../data/dentalData';
import { SmileTransformation } from '../types';

interface SmileGalleryProps {
  onBookClick: () => void;
}

export const SmileGallery: React.FC<SmileGalleryProps> = ({ onBookClick }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)

  const activeCase = SMILE_GALLERY[activeCaseIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const offset = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offset / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8E8]/10 text-[#00A8E8] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Clinical Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Smile Gallery & Transformations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Witness real transformations from our Abbottabad dental clinic. Move the interactive slider to compare clinical outcomes.
          </p>
        </div>

        {/* Main Interactive Comparison Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Image Split Slider */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span className="text-slate-700">Before Treatment</span>
                <span className="text-[#00A8E8] flex items-center gap-1">
                  <span>Drag Slider</span>
                  <Layers className="w-3.5 h-3.5" />
                </span>
                <span className="text-emerald-700">After Treatment</span>
              </div>

              {/* Slider Container */}
              <div
                className="relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-200 shadow-md touch-none"
                onMouseMove={handleSliderMove}
                onTouchMove={handleSliderMove}
                id="interactive-comparison-slider"
              >
                {/* After Image (Full Base) */}
                <img
                  src={activeCase.afterImage}
                  alt={`${activeCase.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Before Image (Clipped Left) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt={`${activeCase.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ width: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Before
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-[#00A8E8]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  After Result
                </div>

                {/* Vertical Divider Handle Line */}
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-2xl pointer-events-none flex items-center justify-center"
                  style={{ left: `calc(${sliderPosition}% - 2px)` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#0A2540] border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                    ↔
                  </div>
                </div>
              </div>
            </div>

            {/* Case Details & Selector Tabs */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-[#00A8E8] text-xs font-bold">
                <span>{activeCase.category} Treatment Case</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0A2540] leading-tight">
                {activeCase.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1 font-semibold text-slate-800">
                  <Clock className="w-4 h-4 text-[#00A8E8]" />
                  <span>Duration: {activeCase.duration}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Procedure Undertaken
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {activeCase.treatment}
                </div>
              </div>

              {/* Case Picker Mini Pills */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Select Transformation Case:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SMILE_GALLERY.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveCaseIndex(idx);
                        setSliderPosition(50);
                      }}
                      className={`p-2.5 text-left rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        activeCaseIndex === idx
                          ? 'border-[#00A8E8] bg-cyan-50/70 text-[#0A2540] shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                      id={`gallery-case-tab-${idx}`}
                    >
                      <div className="truncate">{item.title}</div>
                      <div className="text-[10px] font-normal text-slate-500 mt-0.5">{item.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="w-full mt-2 py-3 rounded-xl bg-[#0A2540] hover:bg-[#00A8E8] text-white text-sm font-bold transition-colors shadow-md cursor-pointer"
                id="gallery-book-consultation-btn"
              >
                Book Your Smile Makeover Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Smile Gallery 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SMILE_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
                const slider = document.getElementById('interactive-comparison-slider');
                if (slider) slider.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-cyan-400/50 transition-all cursor-pointer flex flex-col"
              id={`gallery-card-${item.id}`}
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540] group-hover:text-[#00A8E8] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#00A8E8] font-bold">
                  <span>Compare Before/After</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
