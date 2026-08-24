import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { DentalService } from '../types';
import { CLINIC_INFO } from '../data/dentalData';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      id="service-detail-modal-overlay"
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        id="service-detail-modal-content"
      >
        {/* Header with Service Image & Close button */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
            id="close-service-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Title on Banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#00A8E8] text-white px-2.5 py-0.5 rounded-md">
              {service.category} Dentistry
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Details Bar */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00A8E8]" />
              <div>
                <span className="text-slate-500 font-medium block">Procedure Duration</span>
                <span className="font-bold text-slate-800">{service.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-slate-500 font-medium block">Sterilization Standard</span>
                <span className="font-bold text-slate-800">Class-B Autoclave</span>
              </div>
            </div>
          </div>

          {/* Full Clinical Description */}
          <div>
            <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-2">
              Overview & Clinical Purpose
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Step-by-Step Clinical Workflow */}
          <div>
            <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3">
              Step-by-Step Treatment Process
            </h4>
            <div className="space-y-2.5">
              {service.procedureSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-2">
              Key Patient Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div className="p-3 bg-cyan-50/60 rounded-xl border border-cyan-100 text-xs text-slate-700">
            <strong className="text-[#0A2540]">Recommended For:</strong> {service.suitableFor}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Surgeon: </span>
            <strong className="text-slate-800">{CLINIC_INFO.leadDentist}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A8E8] hover:bg-[#0092ca] text-white text-xs font-bold shadow-md cursor-pointer"
              id="modal-book-this-treatment-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
