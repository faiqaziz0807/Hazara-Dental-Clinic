import { DentalService, SmileTransformation, PatientReview, FAQItem, ClinicStat } from '../types';

import heroDentistImg from '../assets/images/hero_dentist_patient_1787576275976.jpg';
import dentistPortraitImg from '../assets/images/dentist_portrait_1787576289986.jpg';
import clinicRoomImg from '../assets/images/dental_clinic_room_1787576302503.jpg';
import smileTransformationImg from '../assets/images/smile_transformation_1787576313832.jpg';
import whiteningProcImg from '../assets/images/teeth_whitening_proc_1787576332300.jpg';
import clearAlignerImg from '../assets/images/clear_aligner_braces_1787576345908.jpg';
import implantModelImg from '../assets/images/dental_implant_model_1787576359117.jpg';
import pediatricVisitImg from '../assets/images/pediatric_dental_visit_1787576373208.jpg';

export const CLINIC_IMAGES = {
  hero: heroDentistImg,
  dentistPortrait: dentistPortraitImg,
  clinicRoom: clinicRoomImg,
  smileTransformation: smileTransformationImg,
  whitening: whiteningProcImg,
  aligners: clearAlignerImg,
  implants: implantModelImg,
  pediatric: pediatricVisitImg,
};

export const CLINIC_INFO = {
  name: 'Hazara Dental Clinic',
  tagline: 'Gentle, Advanced & Pain-Free Dental Care',
  leadDentist: 'Dr. Uzair Khan',
  qualification: 'BDS, RDS, C-Implants, Specialist Dental Surgeon',
  experienceYears: '10+',
  address: 'Main Kachehri Road, Abbottabad, Khyber Pakhtunkhwa',
  phone: '+92 312 0050775',
  phoneClean: '+923120050775',
  whatsappUrl: 'https://wa.me/923120050775?text=Hello%20Hazara%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20dental%20consultation.',
  timings: '11:00 AM to 7:00 PM (Mon - Sat)',
  timingDays: 'Monday to Saturday',
  timingHours: '11:00 AM – 7:00 PM',
  sundayStatus: 'Sunday: Closed (Emergency on Call)',
  email: 'info@hazaradental.com',
  emergencyLine: '+92 312 0050775',
  googleRating: 4.9,
  totalReviews: 248,
};

export const CLINIC_STATS: ClinicStat[] = [
  {
    value: '10+',
    label: 'Years Experience',
    sublabel: 'Dedicated to painless dentistry in Abbottabad',
    iconName: 'Award',
  },
  {
    value: '5,000+',
    label: 'Happy Smiles Restored',
    sublabel: 'Successful root canals, implants & smile makeovers',
    iconName: 'Smile',
  },
  {
    value: '100%',
    label: 'Sterile Environment',
    sublabel: 'Class-B European autoclave hospital-grade hygiene',
    iconName: 'ShieldCheck',
  },
  {
    value: 'Certified',
    label: 'Specialist Surgeons',
    sublabel: 'PMDC registered with advanced international training',
    iconName: 'UserCheck',
  },
];

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'preventive-cleaning',
    title: 'Preventive Dentistry & Cleaning',
    shortDescription: 'Gentle ultrasonic scaling, deep plaque removal, and fluoride polish to prevent gum disease.',
    fullDescription: 'Our preventive care program focuses on halting tooth decay, tartar build-up, and periodontitis before they cause irreversible damage. Utilizing gentle ultrasonic vibration technology, we thoroughly remove subgingival calculus while preserving healthy enamel.',
    iconName: 'Sparkles',
    image: CLINIC_IMAGES.clinicRoom,
    category: 'General',
    procedureSteps: [
      'Comprehensive digital intraoral examination & gum assessment',
      'Gentle ultrasonic scaling to eliminate stubborn plaque & calculus',
      'Air-flow stain removal for coffee, tea, and tobacco stains',
      'Therapeutic fluoride varnish application for enamel remineralization',
    ],
    benefits: [
      'Stops bleeding gums and chronic bad breath (halitosis)',
      'Prevents costly tooth decay and root infections',
      'Leaves teeth feeling ultra-smooth and refreshed',
    ],
    duration: '30 - 45 Minutes',
    suitableFor: 'Recommended every 6 months for adults and teenagers.',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening & Aesthetic Dentistry',
    shortDescription: 'In-office laser whitening and custom veneers for a sparkling, confidence-boosting smile.',
    fullDescription: 'Transform stained or discolored teeth up to 6 shades whiter in a single visit. We use clinically approved medical-grade peroxide formulations activated by gentle LED light that protects tooth enamel while eliminating deep intrinsic stains.',
    iconName: 'Smile',
    image: CLINIC_IMAGES.whitening,
    category: 'Cosmetic',
    procedureSteps: [
      'Gingival barrier isolation to shield delicate gum tissue',
      'Application of advanced desensitizing whitening gel',
      'LED light activation cycles (15 minutes each)',
      'Post-treatment enamel remineralization and shade check',
    ],
    benefits: [
      'Instant 4 to 6 shade lightening in one session',
      'Formulated to prevent tooth sensitivity',
      'Long-lasting results with proper oral hygiene',
    ],
    duration: '45 - 60 Minutes',
    suitableFor: 'Ideal before weddings, interviews, or for stubborn yellow stains.',
  },
  {
    id: 'root-canal',
    title: 'Painless Root Canal Treatment (RCT)',
    shortDescription: 'Modern rotary endodontics to eliminate severe toothache while saving your natural tooth.',
    fullDescription: 'Say goodbye to agonizing toothache. Dr. Uzair Khan employs precision electronic apex locators and flexible rotary nickel-titanium instruments to gently clean, disinfect, and seal infected pulp canals in 1 to 2 comfortable sessions without pain.',
    iconName: 'Activity',
    image: CLINIC_IMAGES.hero,
    category: 'General',
    procedureSteps: [
      'Computerized painless local anesthesia delivery',
      'Digital RVG x-ray imaging to map canal anatomy',
      'Precision rotary cleansing and antibacterial canal irrigation',
      'Biocompatible gutta-percha hermetic sealing and core build-up',
    ],
    benefits: [
      '100% relief from throbbing toothache and swelling',
      'Preserves your natural tooth structure for life',
      'Completely painless procedure under modern local anesthesia',
    ],
    duration: '45 - 60 Minutes per canal',
    suitableFor: 'Deep cavities, infected tooth pulp, severe cold/hot sensitivity.',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Restorations',
    shortDescription: 'Permanent titanium tooth replacements that look, feel, and function just like natural teeth.',
    fullDescription: 'The gold standard for replacing missing teeth. Our bio-compatible titanium dental implants fuse directly with jawbone tissue, providing permanent anchorage for zirconia and porcelain crowns without damaging adjacent healthy teeth.',
    iconName: 'Layers',
    image: CLINIC_IMAGES.implants,
    category: 'Surgical',
    procedureSteps: [
      '3D diagnostic mapping and bone density evaluation',
      'Minimally invasive implant placement into jawbone',
      'Osseointegration healing period with temporary aesthetics',
      'Custom fabricated high-translucency Zirconia crown delivery',
    ],
    benefits: [
      'Restores 100% chewing power and natural speech',
      'Prevents bone loss and facial sagging from missing teeth',
      'Permanent solution lasting a lifetime with good hygiene',
    ],
    duration: '2 to 3 Stage Procedure',
    suitableFor: 'Patients with one or more missing teeth seeking a permanent fix.',
  },
  {
    id: 'orthodontics-braces',
    title: 'Braces & Clear Aligners',
    shortDescription: 'Discreet invisible aligners and Damon ceramic braces to correct crooked teeth and bites.',
    fullDescription: 'Achieve a symmetrical, aligned smile at any age. We offer modern clear aligner trays (virtually invisible and removable) as well as ceramic low-friction bracket systems to fix overcrowding, gaps, overbites, and misalignments.',
    iconName: 'CheckCircle2',
    image: CLINIC_IMAGES.aligners,
    category: 'Orthodontics',
    procedureSteps: [
      'Digital smile scan and 3D computer orthodontic simulation',
      'Custom aligner fabrication or ceramic bracket bonding',
      'Scheduled progress reviews every 4 to 6 weeks',
      'Retention protocol with clear night retainers',
    ],
    benefits: [
      'Virtually invisible orthodontic correction for adults & teens',
      'Removable trays allow you to eat and brush without restrictions',
      'Corrects bite disorders, TMJ tension, and cosmetic crowding',
    ],
    duration: '6 to 18 Months treatment plan',
    suitableFor: 'Teens and adults with crowded, spaced, or misaligned teeth.',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric (Kids) Dental Care',
    shortDescription: 'Compassionate, gentle dental visits for children to build lifelong healthy oral habits.',
    fullDescription: 'We specialize in gentle, fear-free dentistry designed specifically for young smiles. From preventive pit and fissure sealants to baby tooth fillings and habit-breaking appliances, our warm environment ensures your child loves visiting the dentist.',
    iconName: 'HeartHandshake',
    image: CLINIC_IMAGES.pediatric,
    category: 'Pediatric',
    procedureSteps: [
      'Friendly introductory checkup with child-friendly demonstrations',
      'Painless dental cleaning and gentle plaque removal',
      'Protective pit & fissure sealants on chewing molars',
      'Fluoride treatment and positive oral habit coaching for parents',
    ],
    benefits: [
      'Eliminates childhood dental anxiety with caring approach',
      'Protects milk teeth which guide permanent adult teeth into place',
      'Prevents early childhood caries (bottle cavities)',
    ],
    duration: '20 - 30 Minutes',
    suitableFor: 'Infants, toddlers, children, and teenagers up to 16 years.',
  },
];

export const SMILE_GALLERY: SmileTransformation[] = [
  {
    id: 'case-1',
    title: 'Laser Teeth Whitening Transformation',
    treatment: 'Single-Session In-Office Laser Whitening',
    duration: '45 Minutes',
    description: 'Patient presented with heavy tea/coffee stains and enamel discoloration. Achieved 6 shades whiter with zero post-op sensitivity.',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    afterImage: CLINIC_IMAGES.smileTransformation,
    category: 'Whitening',
  },
  {
    id: 'case-2',
    title: 'Clear Aligner Smile Realignment',
    treatment: 'Invisible Orthodontic Aligners',
    duration: '8 Months',
    description: 'Correction of severe upper anterior crowding and midline shift without metallic wires or food restrictions.',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    afterImage: CLINIC_IMAGES.aligners,
    category: 'Orthodontics',
  },
  {
    id: 'case-3',
    title: 'Anterior Tooth Implant & Zirconia Crown',
    treatment: 'Single Tooth Implant + Custom Crown',
    duration: 'Complete Healing & Crown Placement',
    description: 'Patient lost front incisor in sports accident. Restored with titanium implant and natural translucent zirconia crown.',
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    afterImage: CLINIC_IMAGES.implants,
    category: 'Implants',
  },
  {
    id: 'case-4',
    title: 'Complete Aesthetic Smile Makeover',
    treatment: 'Ultrasonic Scaling + Composite Veneers',
    duration: '2 Appointments',
    description: 'Full aesthetic overhaul correcting chipped edges, gap closure, and brightening tooth harmony.',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    afterImage: CLINIC_IMAGES.hero,
    category: 'Cosmetic',
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    patientName: 'Muhammad Tariq',
    location: 'Abbottabad Cantt',
    treatment: 'Painless Root Canal & Zirconia Crown',
    rating: 5,
    date: '2 weeks ago',
    comment: 'I had severe throbbing toothache for 4 days and was terrified of a root canal. Dr. Uzair Khan at Hazara Dental Clinic made the entire procedure 100% painless! The clinic is spotless, modern, and the staff is extremely respectful. Highly recommend to everyone in Abbottabad.',
    verified: true,
    avatarLetter: 'M',
  },
  {
    id: 'rev-2',
    patientName: 'Dr. Ayesha Malik',
    location: 'Kachehri Road, Abbottabad',
    treatment: 'Laser Teeth Whitening & Scaling',
    rating: 5,
    date: '1 month ago',
    comment: 'As a healthcare professional myself, the hygiene and sterilization protocols at Hazara Dental Clinic exceeded my expectations. Autoclave sealed instruments opened right in front of me. My teeth whitening outcome is so natural and bright. 5/5 stars!',
    verified: true,
    avatarLetter: 'A',
  },
  {
    id: 'rev-3',
    patientName: 'Khurram Jadoon',
    location: 'Mandian, Abbottabad',
    treatment: 'Dental Implant Restoration',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Got a dental implant done by Dr. Uzair Khan. His surgical precision and gentle chairside manner put all my anxieties to rest. Now I can chew comfortably again without any worry. Best dental surgeon in Hazara division.',
    verified: true,
    avatarLetter: 'K',
  },
  {
    id: 'rev-4',
    patientName: 'Zainab Bibi',
    location: 'Supply Area, Abbottabad',
    treatment: 'Pediatric Dental Treatment & Braces',
    rating: 5,
    date: '2 months ago',
    comment: 'Brought my 8-year-old daughter for dental fillings. Dr. Uzair was so patient and sweet with her that she did not cry at all. Also started my clear aligners here. Excellent clinic with genuine care.',
    verified: true,
    avatarLetter: 'Z',
  },
];

export const DENTAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is root canal treatment (RCT) painful at Hazara Dental Clinic?',
    answer: 'No, root canal treatment at Hazara Dental Clinic is completely painless. With modern local anesthetics, electronic apex locators, and flexible rotary instruments, the treatment is as comfortable as getting a standard filling. Most patients feel immediate relief from the toothache they arrived with.',
    category: 'Procedures',
  },
  {
    id: 'faq-2',
    question: 'How often should I get professional teeth cleaning and scaling?',
    answer: 'The international dental standard recommends a professional dental scaling and polish every 6 months. Regular cleaning removes hardened calculus and bacteria that normal brushing cannot reach, preventing gum bleeding, bone loss, and bad breath.',
    category: 'Hygiene',
  },
  {
    id: 'faq-3',
    question: 'Do you offer emergency dental care in Abbottabad?',
    answer: 'Yes! We provide priority emergency dental care for acute severe toothaches, chipped or knocked-out teeth, broken restorations, and dental abscesses. You can call or WhatsApp our emergency line (+92 312 0050775) immediately for urgent same-day assistance.',
    category: 'Emergency',
  },
  {
    id: 'faq-4',
    question: 'What payment and consultation options are available?',
    answer: 'We offer transparent, upfront pricing with no hidden charges. Payments can be made via Cash, Bank Transfer / Raast, EasyPaisa, and JazzCash. For extensive procedures like dental implants and orthodontic aligners, structured installment plans are also available.',
    category: 'Pricing',
  },
  {
    id: 'faq-5',
    question: 'How strict are your sterilization and hygiene protocols?',
    answer: 'We follow strict 4-step European Class-B autoclave hospital-grade sterilization for every instrument. Disposable items (gloves, suction tips, bibs, needles) are used strictly once and discarded. Our dental unit waterlines and treatment chairs are sanitized between every single patient.',
    category: 'Safety',
  },
  {
    id: 'faq-6',
    question: 'How long do dental implants last?',
    answer: 'With proper oral hygiene and regular 6-month dental checkups, dental implants are designed to last a lifetime (25+ years). Titanium implants integrate directly into the jawbone, acting as a permanent root foundation for your crown.',
    category: 'Implants',
  },
];

export const STERILIZATION_STEPS = [
  {
    step: '01',
    title: 'Ultrasonic Enzymatic Cleaning',
    description: 'Instruments undergo ultrasonic cavitation bath with hospital-grade disinfectant to remove micro-debris.',
  },
  {
    step: '02',
    title: 'Vacuum Hermetic Sealing',
    description: 'Each instrument set is individually packaged into medical-grade pouches with internal chemical indicators.',
  },
  {
    step: '03',
    title: 'Class-B Autoclave Sterilization',
    description: 'High-pressure vacuum steam sterilization at 134°C kills 100% of bacterial spores, viruses, and pathogens.',
  },
  {
    step: '04',
    title: 'Sterile Opening Before Patient',
    description: 'Pouches are only unsealed in the operatory room directly in front of the patient prior to treatment.',
  },
];
