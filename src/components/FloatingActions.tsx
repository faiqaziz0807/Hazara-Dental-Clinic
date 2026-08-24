import React from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp & Back-To-Top (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200 text-slate-700 hover:text-[#00A8E8] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button with Reassuring Pulse */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-600/50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp with Hazara Dental Clinic"
          id="floating-whatsapp-btn"
        >
          {/* Subtle Ping Animation */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat with Doctor
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 z-40 shadow-2xl flex items-center justify-between gap-2.5" id="mobile-sticky-bottom-bar">
        <a
          href={`tel:${CLINIC_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-3.5 h-3.5 text-[#00A8E8]" />
          <span>Call Clinic</span>
        </a>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
          id="mobile-sticky-whatsapp-btn"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00A8E8] text-white text-xs font-bold shadow-md shadow-cyan-500/25"
          id="mobile-sticky-book-btn"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
