import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Send,
  User,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/dentalData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  preselectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    service: preselectedService || DENTAL_SERVICES[0].title,
    preferredDate: '',
    timeSlot: '11:00 AM - 01:00 PM',
    notes: '',
    isEmergency: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update service if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '11:00 AM - 01:00 PM (Morning Slot)',
    '01:00 PM - 03:00 PM (Afternoon Slot)',
    '03:00 PM - 05:00 PM (Late Afternoon)',
    '05:00 PM - 07:00 PM (Evening Slot)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Please provide a valid phone or WhatsApp number');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg('Please select your preferred appointment date');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppBookingUrl = () => {
    const text = `*New Dental Consultation Request - Hazara Dental Clinic*
Patient Name: ${formData.fullName || 'Valued Patient'}
Phone: ${formData.phoneNumber || 'Not provided'}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate || 'Earliest available'}
Time Slot: ${formData.timeSlot}
Emergency: ${formData.isEmergency ? 'YES (Acute Pain/Trauma)' : 'Standard'}
Notes: ${formData.notes || 'None'}`;

    return `https://wa.me/923120050775?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-100/60 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A2540]/10 text-[#0A2540] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#00A8E8]" />
            <span>Consultation & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Book Your Dental Appointment
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Schedule your visit with Dr. Uzair Khan on Main Kachehri Road, Abbottabad. Fast confirmation via WhatsApp or Call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl" id="appointment-form-card">
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in" id="appointment-success-state">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our clinical coordinator will call/WhatsApp you at <strong className="text-slate-900">{formData.phoneNumber}</strong> to confirm your slot for <strong className="text-slate-900">{formData.preferredDate} ({formData.timeSlot})</strong>.
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Selected Service:</span>
                    <span className="font-bold text-slate-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Clinic Location:</span>
                    <span className="font-bold text-slate-900">Main Kachehri Road, Abbottabad</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Lead Surgeon:</span>
                    <span className="font-bold text-[#00A8E8]">{CLINIC_INFO.leadDentist}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                    id="success-whatsapp-send-btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Confirmation</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        service: DENTAL_SERVICES[0].title,
                        preferredDate: '',
                        timeSlot: timeSlots[0],
                        notes: '',
                        isEmergency: false,
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
                    id="book-another-appointment-btn"
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="dental-appointment-form">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-[#0A2540]">
                    Patient Information & Slot Selection
                  </h3>
                  <span className="text-xs font-semibold text-[#00A8E8] bg-cyan-50 px-2.5 py-1 rounded-full">
                    No Advance Fee
                  </span>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Emergency Triage Toggle */}
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-rose-900">Is this a Dental Emergency?</p>
                      <p className="text-[11px] text-rose-700">Severe toothache, trauma, or swelling</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isEmergency}
                      onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                      className="sr-only peer"
                      id="emergency-checkbox"
                    />
                    <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600" />
                  </label>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Muhammad Ali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800"
                        id="form-patient-name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="0312 0050775"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800"
                      id="form-phone-number"
                    />
                  </div>
                </div>

                {/* Dental Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Dental Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800 bg-white"
                    id="form-service-select"
                  >
                    {DENTAL_SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title} ({service.category})
                      </option>
                    ))}
                    <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                    <option value="General Consultation & Digital X-Ray">General Consultation & Digital X-Ray</option>
                    <option value="Other Dental Concern">Other Dental Concern</option>
                  </select>
                </div>

                {/* Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800 bg-white"
                      id="form-date-picker"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Time Slot *
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800 bg-white"
                      id="form-time-select"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes / Symptoms */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Describe Symptoms / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Sensitivity to cold water on upper left molar, need tooth whitening before event..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A8E8] focus:ring-2 focus:ring-cyan-100 outline-none text-sm text-slate-800"
                    id="form-notes-textarea"
                  />
                </div>

                {/* Form Submit & Direct WhatsApp Action */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#00A8E8] hover:bg-[#0092ca] text-white font-bold text-sm shadow-md shadow-cyan-500/25 transition-all transform active:scale-98 cursor-pointer"
                    id="form-submit-booking-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Booking</span>
                  </button>

                  <a
                    href={generateWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all transform active:scale-98 text-center"
                    id="form-whatsapp-booking-btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 100% Patient Privacy Guaranteed • Same-day response for all appointments
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Location, Map Placeholder & Clinic Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 shadow-xl" id="clinic-contact-info-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Hazara Dental Clinic</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Clinic Address</p>
                    <p className="font-bold text-white mt-0.5">{CLINIC_INFO.address}</p>
                    <p className="text-xs text-slate-300 mt-0.5">Opposite Kachehri Court Complex, Central Abbottabad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Working Timings</p>
                    <p className="font-bold text-white mt-0.5">Monday – Saturday: 11:00 AM – 7:00 PM</p>
                    <p className="text-xs text-rose-300 mt-0.5">Sunday: Closed (Emergency On-Call)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Direct Call & WhatsApp</p>
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="font-bold text-cyan-300 hover:underline block text-base mt-0.5"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Doctor Details Pill */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <span className="text-slate-400">Attending Surgeon:</span>
                  <p className="font-bold text-white">{CLINIC_INFO.leadDentist}</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">Experience:</span>
                  <p className="font-bold text-cyan-300">10+ Years Practice</p>
                </div>
              </div>
            </div>

            {/* Google Map Interactive Location Placeholder */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md overflow-hidden" id="google-map-embed-container">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>Abbottabad Clinic Location</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Main+Kachehri+Road+Abbottabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00A8E8] hover:underline"
                  id="open-in-google-maps-btn"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {/* Map Canvas Visual Card */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-[1px] group-hover:bg-[#0A2540]/40 transition-colors" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="w-12 h-12 rounded-full bg-rose-600 border-2 border-white shadow-xl flex items-center justify-center text-white animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-base mt-2 drop-shadow-md">
                    Hazara Dental Clinic
                  </h4>
                  <p className="text-xs text-slate-200 max-w-xs drop-shadow">
                    Main Kachehri Road, Abbottabad
                  </p>
                  <a
                    href="https://maps.google.com/?q=Main+Kachehri+Road+Abbottabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-3.5 py-1.5 rounded-lg bg-white text-[#0A2540] text-xs font-bold shadow hover:bg-cyan-50 transition-colors"
                  >
                    Get Driving Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
