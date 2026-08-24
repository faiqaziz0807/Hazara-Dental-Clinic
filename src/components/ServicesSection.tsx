import React, { useState } from 'react';
import {
  Sparkles,
  Smile,
  Activity,
  Layers,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  Clock,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { DENTAL_SERVICES } from '../data/dentalData';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: DentalService) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Cosmetic', 'Surgical', 'Orthodontics', 'Pediatric'];

  const filteredServices =
    activeCategory === 'All'
      ? DENTAL_SERVICES
      : DENTAL_SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#00A8E8]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#00A8E8]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#00A8E8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#00A8E8]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#00A8E8]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#00A8E8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00A8E8]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8E8]/10 text-[#00A8E8] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Dental Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Our Dental Services in Abbottabad
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Comprehensive oral health solutions combining digital diagnostic precision, gentle rotary techniques, and hospital-grade sterilization.
          </p>

          {/* Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6" id="service-category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
                id={`filter-cat-${cat.toLowerCase()}`}
              >
                {cat === 'All' ? 'All Treatments' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Responsive Grid: 3 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" id="dental-services-grid">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 flex flex-col overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0A2540] shadow-sm">
                  {service.category} Care
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white font-medium bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A8E8] group-hover:text-white transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#00A8E8] transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlight feature point */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Learn More & Quick Book */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs sm:text-sm font-bold text-[#00A8E8] hover:text-[#0A2540] inline-flex items-center gap-1 group/link cursor-pointer transition-colors"
                    id={`learn-more-${service.id}`}
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0A2540] hover:bg-[#00A8E8] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                    id={`book-service-${service.id}`}
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Dental Callout Bento Box */}
        <div className="mt-10 bg-white rounded-3xl border border-rose-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6" id="services-emergency-callout">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 text-rose-600">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Experiencing Acute Tooth Pain or Dental Trauma?
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                We accommodate urgent same-day dental emergencies in Abbottabad for severe toothaches, fractured teeth, and swelling.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+923120050775"
              className="w-full md:w-auto text-center px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md shadow-rose-600/20 transition-all cursor-pointer"
              id="services-emergency-call-btn"
            >
              Call +92 312 0050775
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
