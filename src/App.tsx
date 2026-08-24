import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { SmileGallery } from './components/SmileGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DentalService } from './types';
import { CLINIC_INFO } from './data/dentalData';

export default function App() {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('');

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    handleScrollToSection('contact');
  };

  const handleEmergencyClick = () => {
    // Scroll to contact form with emergency preselected or trigger phone call
    window.location.href = `tel:${CLINIC_INFO.phoneClean}`;
  };

  const handleBookSpecificService = (serviceTitle: string) => {
    setPreselectedBookingService(serviceTitle);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-cyan-100 selection:text-[#0A2540]">
      {/* Step 1: Top Announcement Bar & Navigation Header */}
      <TopBar />
      <Navbar
        onBookClick={handleBookClick}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-grow">
        {/* Step 2: Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onEmergencyClick={handleEmergencyClick}
        />

        {/* Step 3: Trust & Badges Bar */}
        <TrustBadges />

        {/* Step 4: Our Dental Services (Responsive Grid Layout) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onBookService={handleBookSpecificService}
        />

        {/* Step 5: About the Dentist & Hazara Dental Clinic */}
        <AboutSection onBookClick={handleBookClick} />

        {/* Step 6: Before & After / Smile Gallery */}
        <SmileGallery onBookClick={handleBookClick} />

        {/* Step 7: Patient Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Step 8: Appointment Booking Form & Contact Info */}
        <AppointmentSection preselectedService={preselectedBookingService} />

        {/* Step 9: Dental FAQs (Accordion) */}
        <FaqSection />
      </main>

      {/* Step 10: Footer */}
      <Footer onBookClick={handleBookClick} />

      {/* Floating WhatsApp Action & Mobile Sticky Bar */}
      <FloatingActions onBookClick={handleBookClick} />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleBookSpecificService}
      />
    </div>
  );
}
