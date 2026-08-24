import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, Heart, ShieldCheck, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/dentalData';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A2540] text-slate-300 border-t border-slate-800 pt-16 pb-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Clinic Branding & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              Hazara Dental Clinic is Abbottabad's leading dental care facility led by <strong className="text-white">{CLINIC_INFO.leadDentist}</strong>. Providing painless root canals, dental implants, laser teeth whitening, and orthodontic care with 100% sterile European Class-B protocols.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                PMDC Registered Practice
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                10+ Years Excellence
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Dr. Uzair', href: '#about' },
                { name: 'Dental Services', href: '#services' },
                { name: 'Smile Gallery', href: '#gallery' },
                { name: 'Patient Reviews', href: '#reviews' },
                { name: 'FAQs', href: '#faqs' },
                { name: 'Contact & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Core Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {DENTAL_SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Clinic Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} className="hover:text-cyan-400 font-semibold text-white">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon – Sat: 11:00 AM – 7:00 PM</p>
                  <p className="text-rose-400 text-xs">Sunday: Closed (Emergency On-Call)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 rounded-xl bg-[#00A8E8] hover:bg-[#0092ca] text-white text-xs font-bold shadow-md transition-all text-center cursor-pointer"
                id="footer-book-appointment-btn"
              >
                Book Appointment Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} Hazara Dental Clinic. All Rights Reserved. Lead Dentist: Dr. Uzair Khan.</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Sterilization Standards</a>
            <span>•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Emergency Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
