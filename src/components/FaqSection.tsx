import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { DENTAL_FAQS, CLINIC_INFO } from '../data/dentalData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A8E8]/10 text-[#00A8E8] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dental Knowledge & Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Frequently Asked Dental Questions
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Have questions about procedures, pain management, or booking? Here are answers to common queries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" id="faqs-accordion-container">
          {DENTAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#00A8E8] bg-white shadow-md ring-2 ring-cyan-100'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                }`}
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-toggle-btn-${faq.id}`}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#00A8E8] text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#00A8E8]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Hazara Dental Clinic Standard Protocol</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Doctor direct callout Bento Box */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question about your teeth?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Send an x-ray or describe your symptoms directly to Dr. Uzair Khan.</p>
          </div>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer"
            id="faq-ask-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Doctor on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
