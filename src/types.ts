export interface DentalService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  procedureSteps: string[];
  benefits: string[];
  duration: string;
  suitableFor: string;
  category: 'General' | 'Cosmetic' | 'Surgical' | 'Orthodontics' | 'Pediatric';
}

export interface SmileTransformation {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarLetter: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicStat {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
  isEmergency: boolean;
}
