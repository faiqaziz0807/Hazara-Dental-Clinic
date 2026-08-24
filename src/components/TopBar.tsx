import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0A2540] text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-800" id="top-announcement-bar">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Emergency line & Working hours */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center gap-1.5 text-cyan-300 hover:text-white font-medium transition-colors"
            id="topbar-phone-link"
          >
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Phone className="w-3 h-3" />
            </div>
            <span className="hidden xs:inline text-slate-300">Dental Helpline:</span>
            <span className="font-semibold text-white tracking-wide">{CLINIC_INFO.phone}</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-slate-300" id="topbar-timings">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mon – Sat: 11:00 AM – 7:00 PM</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-300" id="topbar-location">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Main Kachehri Road, Abbottabad</span>
          </div>
        </div>

        {/* Right: Urgent appointment & WhatsApp direct */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today for Consultations</span>
          </div>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-md transition-all shadow-sm active:scale-95"
            id="topbar-whatsapp-btn"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Clinic</span>
          </a>
        </div>
      </div>
    </div>
  );
};
