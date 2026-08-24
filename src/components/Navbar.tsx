import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onBookClick: () => void;
  onEmergencyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onEmergencyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Dental Services', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}
      id="main-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Hazara Dental Clinic Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center focus:outline-none"
          id="navbar-logo-link"
        >
          <Logo size="md" variant="dark" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-semibold text-slate-700 hover:text-[#00A8E8] transition-colors py-1 relative group"
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A8E8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#0A2540] bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            id="nav-call-btn"
          >
            <Phone className="w-3.5 h-3.5 text-[#00A8E8]" />
            <span>Call Clinic</span>
          </a>

          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A8E8] hover:bg-[#0092ca] text-white text-sm font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform active:scale-95 cursor-pointer"
            id="nav-book-appointment-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile / Tablet Hamburger & Quick Call */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00A8E8] text-white text-xs font-bold shadow-sm"
            id="mobile-nav-book-btn"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="p-2 rounded-lg bg-slate-100 text-[#0A2540] hover:bg-slate-200"
            aria-label="Call clinic"
            id="mobile-phone-btn"
          >
            <Phone className="w-4 h-4 text-[#00A8E8]" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-2xl transition-all z-40 max-h-[85vh] overflow-y-auto" id="mobile-menu-drawer">
          <div className="px-5 py-4 space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">Lead Dental Surgeon</p>
                <p className="text-sm font-bold text-[#0A2540]">{CLINIC_INFO.leadDentist}</p>
                <p className="text-[11px] text-slate-600">Main Kachehri Road, Abbottabad</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Open Today
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 text-sm font-semibold text-slate-700 hover:text-[#00A8E8]"
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00A8E8] text-white text-sm font-bold shadow-md shadow-cyan-500/20 active:scale-98"
                id="mobile-drawer-book-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 active:scale-98"
                id="mobile-drawer-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 312 0050775)</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onEmergencyClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold hover:bg-rose-100"
                id="mobile-drawer-emergency-btn"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>Urgent Dental Emergency Support</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
