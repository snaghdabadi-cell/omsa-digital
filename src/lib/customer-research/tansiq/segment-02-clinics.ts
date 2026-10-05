import type { Segment } from "../types";

// Segment 02 — Clinics, Dental & Aesthetic Centers.
//
// LOCKED RESEARCH DATA. Every clinic, website, phone number and claim below
// comes from the researched brief. Do not add prospects, change numbers or
// strengthen hypotheses into facts.
//
// - No official website was supplied for Azura Dental, Dentology, Rayhan
//   Medical Complex, British International Dental Centre or Esthetics Dental
//   Clinics: `website` is omitted, never guessed from the business name.
// - Rance has no telephone number: website / WhatsApp booking channel only.
// - Review counts are time-sensitive: keep "observed during research".
// - Patient-revenue, doctor/branch attribution and reactivation are product
//   opportunities that would need integrations — not current capabilities.

export const SEGMENT_02_CLINICS: Segment = {
  id: "02",
  number: "02",
  name: "Clinics, Dental & Aesthetic Centers",
  potential: 92,
  score: 9.6,
  status: "Very Strong Top-5 Candidate",
  summary: [
    "Clinics are a strong potential customer segment because their marketing can be connected directly to appointments, treatments and revenue.",
    "Our research found clinics already collecting valuable signals such as treatment interest, preferred doctor, branch, appointment date and even marketing source. The bigger opportunity is connecting these signals to the final patient and treatment outcome.",
  ],
  why: {
    title: "Why this segment could become Tansiq customers",
    lead: "Their patient journey commonly follows:",
    journey: [
      "Demand",
      "Search / Social",
      "Treatment / Doctor",
      "Enquiry",
      "Consultation",
      "Booking",
      "Attendance",
      "Treatment",
      "Revenue",
    ],
    intro: "The research found clinics already collecting valuable signals such as:",
    items: [
      "Requested treatment",
      "Preferred doctor",
      "Branch",
      "Appointment date",
      "Marketing source",
      "WhatsApp enquiry",
      "Consultation request",
    ],
    closing:
      "This creates an opportunity for Tansiq to move beyond content generation and help clinics understand which marketing activities actually create patients and treatment revenue.",
  },
  coreOpportunity: {
    eyebrow: "Core Tansiq opportunity",
    title: "Patient Revenue Intelligence",
    journey: [
      "Search / Social / Ads / Content",
      "Enquiry",
      "Consultation",
      "Booking",
      "Attendance",
      "Treatment",
      "Revenue",
    ],
    intro:
      "The objective is not simply to count leads. The opportunity is to connect marketing activity to:",
    outcomes: ["Consultation", "Booking", "Attendance", "Treatment", "Revenue"],
    closing: "…and then use Decision Intelligence to recommend what the clinic should do next.",
    caveat:
      "Product opportunity, not a current capability: full revenue attribution may require integrations with clinic booking, CRM, PMS or other patient-management systems, with appropriate consent, privacy controls and healthcare-data compliance.",
  },
  rationale: {
    title: "Why this segment may pay",
    intro:
      "Clinics differ from many marketing segments because marketing activity can terminate in a relatively clear commercial transaction:",
    transaction: ["Appointment", "Treatment", "Revenue"],
    servicesIntro:
      "High-value services can make patient-acquisition intelligence commercially valuable, such as:",
    services: [
      "Invisalign",
      "Implants",
      "Cosmetic dentistry",
      "Aesthetic dermatology",
      "Laser",
      "Plastic surgery",
    ],
    weakProposition: "Create more AI content.",
    strongProposition:
      "Understand which marketing activity is producing patients and high-value treatments — and use that intelligence to decide what to market next.",
  },
  productOpportunities: {
    title: "Product opportunities discovered",
    label:
      "Product opportunities identified through customer research — several would be potential Tansiq capabilities only with appropriate integrations. Validation recommended before development.",
    items: [
      {
        number: "01",
        title: "Patient Revenue Intelligence",
        tag: "Potential capability · requires integrations",
        description: "Connect marketing activity to actual patient and treatment outcomes.",
        itemsLabel: "Connect",
        items: ["Marketing Source", "Enquiry", "Booking", "Attendance", "Treatment", "Revenue"],
        chain: "→",
        questions: [
          "Which campaign generated actual patients?",
          "Which channel generated the highest-value treatments?",
          "Which treatment produced the strongest marketing ROI?",
        ],
        commercialValue:
          "Moves measurement from leads and engagement toward actual patient and treatment outcomes.",
      },
      {
        number: "02",
        title: "Treatment Demand Intelligence",
        tag: "Product opportunity",
        description: "Identify which treatments currently deserve marketing investment.",
        itemsLabel: "Possible signals",
        items: [
          "Search demand",
          "Content performance",
          "Campaign performance",
          "Enquiry volume",
          "Bookings",
          "Treatment conversion",
          "Seasonality",
        ],
        commercialValue:
          "Helps clinics prioritize commercially relevant treatment demand instead of marketing every service equally.",
      },
      {
        number: "03",
        title: "Doctor × Treatment Intelligence",
        tag: "Potential capability · requires integrations",
        description: "Where clinic data allows it, connect:",
        items: ["Doctor", "Treatment", "Acquisition Source", "Booking Outcome"],
        chain: "+",
        commercialValue:
          "Helps understand which doctor/service combinations attract demand and where marketing investment may create greater value.",
      },
      {
        number: "04",
        title: "Branch Intelligence",
        tag: "Potential capability · requires integrations",
        description: "For multi-location clinics:",
        items: ["Branch", "Treatment", "Marketing Source", "Booking Outcome"],
        chain: "×",
        commercialValue:
          "Different branches may have different treatment demand, patient profiles and acquisition opportunities.",
      },
      {
        number: "05",
        title: "Treatment Opportunity Radar",
        tag: "Potential future feature",
        description: "Combine signals to recommend: what should this clinic market next?",
        itemsLabel: "Combine",
        items: [
          "Historical marketing performance",
          "Treatment demand",
          "Search/Social signals",
          "Seasonality",
          "Offers",
          "Branch/doctor availability where integrations permit",
        ],
      },
      {
        number: "06",
        title: "Patient Reactivation Intelligence",
        tag: "Potential future feature",
        description: "Identify patient groups potentially suitable for:",
        items: [
          "Recall",
          "Follow-up",
          "Unfinished treatment journeys",
          "Recurring treatments",
          "Check-ups",
          "Reactivation campaigns",
        ],
        note: "Would require appropriate integrations, consent, privacy controls and healthcare-data compliance. No access to private patient data is implied.",
      },
    ],
  },
  methodology: {
    evidence: {
      title: "Observed evidence",
      body: "Publicly observable information drawn from:",
    },
    evidenceSources: [
      "Official websites",
      "Official booking journeys",
      "Published services",
      "Public offers",
      "Official contact channels",
      "Public local/search presence",
      "Publicly visible trust/review signals",
    ],
    hypothesis: {
      title: "Research opportunity",
      body: "A commercially relevant opportunity inferred from that evidence. Opportunities are never presented as confirmed internal problems.",
    },
    useWording: [
      "Opportunity identified",
      "Potential use case",
      "The current journey creates an opportunity to…",
      "Tansiq could potentially…",
    ],
    avoidWording: ["This clinic has a problem with…"],
    noAccessClaims: [
      "Patient records",
      "Internal revenue",
      "Internal conversion rates",
      "CRM data",
      "Appointment attendance data",
      "Private campaign data",
    ],
    note: "No patient-identifiable data is used or shown. Any future integration would require appropriate consent, privacy controls, healthcare-data handling and compliance with applicable regulations.",
  },
  conclusion: {
    title: "Segment conclusion",
    paragraphs: [
      [
        "Clinics are one of the strongest customer segments identified because their marketing can be connected directly to appointments, treatments and revenue.",
      ],
      [
        "Their patient journey often begins through Search, Social Media or advertising and continues through WhatsApp, consultation and booking.",
      ],
      [
        "Our research found clinics already collecting valuable signals such as treatment interest, preferred doctor, branch, appointment date and even marketing source. The bigger opportunity is connecting these signals to the final patient and treatment outcome.",
      ],
      [
        "Tansiq could therefore go beyond content creation and help clinics understand ",
        {
          strong:
            "which treatments have demand, which marketing activities create real patients, and where the next growth opportunity is.",
        },
      ],
      [
        "A major product opportunity is ",
        { strong: "Patient Revenue Intelligence:" },
        " connecting marketing → enquiry → booking → attendance → treatment → revenue, then using Decision Intelligence to recommend what the clinic should do next.",
      ],
    ],
    statusNote: "Not a final ranking: all 20 segments have not yet been comparatively scored.",
  },
  prospects: [
    /* ───────── Oman ───────── */
    {
      id: "wassan-specialty-dental",
      name: "Wassan Specialty Dental Center",
      country: "om",
      website: "https://www.wassandental.com/",
      contact: { kind: "phone", number: "+968 9234 7436" },
      verified: [
        "The clinic promotes multiple dental services including high-value treatments such as Invisalign, implants and cosmetic dentistry.",
        "Its Invisalign journey includes consultation-oriented information and digital scanning/assessment elements, with direct contact/WhatsApp paths available.",
      ],
      opportunity:
        "The Invisalign journey creates an opportunity to understand which Search, Social, content or campaign source actually generates: Invisalign interest → consultation → treatment start.",
      solution: "Invisalign / High-Value Treatment Demand Intelligence",
      whyBuy:
        "Invisalign and other premium treatments have materially greater commercial value than generic dental enquiries. Connecting acquisition activity to treatment interest could improve marketing prioritisation.",
      outreachAngle:
        "Which marketing activity is actually generating Invisalign consultations rather than general dental enquiries?",
      fitScore: 9.5,
      priority: "high",
    },
    {
      id: "al-rabeeh-dental",
      name: "Al Rabeeh Dental Center",
      country: "om",
      website: "https://alrabeeh.com/",
      contact: [
        { kind: "phone", label: "Al Khoud", number: "+968 7753 1000" },
        { kind: "phone", label: "Maabilah", number: "+968 7258 1000" },
      ],
      verified: [
        "The clinic operates two locations and publicly presents 20+ specialists across multiple dental categories including implants, orthodontics, cosmetic dentistry and pediatric dentistry.",
        "The business therefore combines multiple treatments, specialists and locations.",
      ],
      opportunity: "Different branches may attract different patient needs and treatment demand.",
      solution: "Branch × Treatment Demand Intelligence",
      whyBuy:
        "Instead of marketing both locations identically, Tansiq could potentially help determine which treatments and audiences deserve more attention for each branch.",
      outreachAngle:
        "Your two branches do not necessarily represent the same treatment-demand opportunity. Tansiq could help identify which treatments each location should prioritize.",
      fitScore: 9.6,
      priority: "high",
    },
    {
      id: "naya-medical-centre",
      name: "Naya Medical Centre",
      country: "om",
      website: "https://www.naya-mc.com/",
      contact: { kind: "phone", number: "+968 7111 4466" },
      verified: [
        "Naya combines multiple patient-acquisition categories including Dental, Invisalign, Dermatology and Laser.",
        "The services represent different patient intents and potentially different acquisition journeys.",
      ],
      opportunity:
        "A generic clinic-wide marketing strategy may not reveal which service line currently presents the strongest acquisition opportunity.",
      solution: "Cross-Service Demand Intelligence",
      whyBuy:
        "Tansiq could compare demand and marketing signals across Dental, Invisalign, Dermatology and Laser to help prioritize campaigns.",
      outreachAngle:
        "Which service line should receive the next marketing investment — Dental, Invisalign, Dermatology or Laser?",
      fitScore: 9.4,
      priority: "high",
    },
    {
      id: "azura-dental",
      name: "Azura Dental",
      country: "om",
      contact: { kind: "phone", number: "+968 2407 4777" },
      verified: [
        "The clinic has publicly visible positioning around treatments including Invisalign, implants and cosmetic dentistry.",
        "These represent commercially valuable dental treatment categories.",
      ],
      opportunity:
        "Marketing high-value treatments equally with general dentistry can hide the commercial value of individual acquisition journeys.",
      solution: "High-Value Treatment Intelligence",
      whyBuy:
        "Tansiq could help prioritize marketing activity around treatments with greater strategic and commercial value.",
      outreachAngle:
        "Instead of measuring dental marketing as one category, identify which activity is generating demand for Invisalign, implants and cosmetic treatments specifically.",
      fitScore: 9.1,
      priority: "high",
    },
    {
      id: "dentology-dental",
      name: "Dentology Dental Clinic",
      country: "om",
      contact: { kind: "phone", number: "+968 9090 0626" },
      verified: [
        "The clinic has an unusually strong public local-trust signal.",
        "Approximately 630 public reviews observed during research, with a 5.0 rating.",
      ],
      opportunity:
        "Strong reputation can be more valuable when connected to patient acquisition rather than treated simply as a reputation metric.",
      solution: "Search / Trust → Booking Intelligence",
      whyBuy:
        "Tansiq could potentially help determine which trust-led discovery journeys result in appointment demand.",
      outreachAngle:
        "You already have a very strong local trust signal. The next opportunity is understanding how much of that reputation is translating into treatment demand and bookings.",
      fitScore: 9.2,
      priority: "high",
    },

    /* ───────── UAE ───────── */
    {
      id: "optima-health-care",
      name: "Optima Health Care",
      country: "ae",
      website: "https://optimahealthcareuae.com/",
      contact: { kind: "phone", number: "+971 55 992 0369" },
      verified: [
        "The clinic publicly displays treatment pricing, free consultation, treatment selection, appointment date/time selection and a booking journey.",
        "The booking journey includes a field asking: “How did you hear about us?” — a particularly important research signal.",
      ],
      opportunity:
        "Optima already collects a basic marketing-attribution signal at booking. The next opportunity is connecting that acquisition source to booking → attendance → treatment → revenue.",
      solution: "Marketing-to-Patient Attribution + Patient Revenue Intelligence",
      whyBuy:
        "Tansiq would not need to introduce the concept of attribution from zero. The clinic already collects acquisition-source information. The opportunity is extending it into commercial decision intelligence.",
      outreachAngle:
        "You already capture how patients discovered Optima. The next opportunity is connecting that source to the treatment ultimately booked and its revenue.",
      fitScore: 9.9,
      priority: "very-high",
    },
    {
      id: "aries-dental-aesthetic",
      name: "Aries Dental & Aesthetic Clinic",
      country: "ae",
      website: "https://ariesclinic.com/",
      links: [{ label: "Invisalign funnel", url: "https://invisalign.ariesclinic.com/" }],
      contact: { kind: "phone", number: "+971 50 428 8380" },
      verified: [
        "Aries has a dedicated Invisalign acquisition journey featuring complimentary assessment, AED 2,500 assessment value messaging, iTero scan, ClinCheck preview, a WhatsApp/contact path and financing/payment positioning.",
      ],
      opportunity:
        "This is not simply a generic clinic website. It is a specific Invisalign conversion funnel.",
      solution: "Invisalign Funnel Intelligence",
      whyBuy:
        "The commercially relevant question is not how many people viewed Invisalign content. It is: which source, audience, creative or campaign produces assessments that become paid Invisalign treatments?",
      outreachAngle:
        "Your Invisalign funnel is already structured around a high-value assessment journey. Tansiq could help identify which acquisition sources actually convert those assessments into treatment starts.",
      fitScore: 9.8,
      priority: "very-high",
    },
    {
      id: "manhal-medical-center",
      name: "Manhal Medical Center",
      country: "ae",
      website: "https://manhalmedicalcenter.com/en/",
      contact: [
        { kind: "phone", label: "Call", number: "+971 4 328 4560" },
        { kind: "phone", label: "WhatsApp", number: "+971 52 987 2411" },
      ],
      verified: [
        "The booking journey captures Treatment, Preferred Doctor and Preferred Date.",
        "This creates unusually useful structured intent information.",
      ],
      opportunity:
        "Marketing acquisition could potentially be connected to requested treatment and preferred doctor.",
      solution: "Doctor × Treatment Demand Intelligence",
      whyBuy:
        "Instead of measuring generic enquiries, the clinic could understand which acquisition sources create demand for particular treatments and doctors.",
      outreachAngle:
        "Your booking journey already captures treatment and preferred doctor. That creates the foundation for understanding which marketing sources are driving demand for each doctor/service combination.",
      fitScore: 9.7,
      priority: "very-high",
    },
    {
      id: "vilafortuny-medical-centre",
      name: "Vilafortuny Medical Centre",
      country: "ae",
      website: "https://www.vilafortuny.com/",
      contact: { kind: "phone", number: "+971 4 394 3618" },
      verified: [
        "Vilafortuny operates across multiple premium medical/aesthetic treatment categories with direct appointment and WhatsApp contact journeys.",
      ],
      opportunity:
        "Premium multi-treatment environments create a need to distinguish between generic enquiry volume and high-value service demand.",
      solution: "Premium Service Demand Intelligence",
      whyBuy:
        "Tansiq could potentially help identify which doctor, service and content combinations generate commercially valuable patient demand.",
      outreachAngle:
        "Not every consultation has the same commercial value. The opportunity is identifying which services and acquisition journeys generate the highest-value patient demand.",
      fitScore: 9.2,
      priority: "high",
    },
    {
      id: "align-polyclinic",
      name: "Align Polyclinic",
      country: "ae",
      website: "https://alignpolyclinic.com/",
      contact: { kind: "phone", label: "WhatsApp", number: "+971 52 261 4327" },
      verified: [
        "The clinic combines Dentistry, Aesthetic Dermatology, Invisalign, veneers, implants, whitening, consultation offers and before/after content.",
      ],
      opportunity:
        "Dental and aesthetic services may respond differently to offers, channels, creative and seasonal demand.",
      solution: "Cross-Treatment Opportunity Radar",
      whyBuy:
        "Tansiq could help identify whether the next acquisition opportunity is in Dental, Invisalign or Aesthetic Dermatology rather than treating all services equally.",
      outreachAngle:
        "Your dental and aesthetic services create different demand patterns. Tansiq could help identify which treatment category deserves the next campaign or offer.",
      fitScore: 9.3,
      priority: "high",
    },

    /* ───────── Qatar ───────── */
    {
      id: "doha-specialized-dental-dermatology",
      name: "Doha Specialized Dental and Dermatology Center",
      country: "qa",
      website: "https://dohadentalcenter.com/",
      contact: { kind: "phone", number: "+974 6676 8288" },
      verified: [
        "The business publicly presents three branches, Dental and Dermatology services, and branch-specific contact paths.",
        "80,000+ patients claimed by the business.",
      ],
      opportunity:
        "Three branches and multiple treatment categories create a clear location-level acquisition intelligence opportunity.",
      solution: "Branch × Treatment × Patient Acquisition Intelligence",
      whyBuy: "Different branches may have materially different treatment demand.",
      outreachAngle:
        "With three branches and both Dental and Dermatology demand, the key opportunity is identifying which treatments each branch should prioritize rather than marketing every location the same way.",
      fitScore: 9.8,
      priority: "very-high",
    },
    {
      id: "german-dental-dermatology",
      name: "German Dental and Dermatology Centre",
      country: "qa",
      website: "https://gddc.qa/",
      contact: [
        { kind: "phone", label: "Call", number: "+974 4441 1711" },
        { kind: "phone", label: "WhatsApp", number: "+974 3029 0013" },
      ],
      verified: [
        "The clinic combines Dental and Dermatology and promotes treatments including Invisalign, dental implants and aesthetic treatments.",
        "It also uses treatment-specific promotional/appointment journeys.",
      ],
      opportunity:
        "Treatment-specific landing journeys create the foundation for attribution beyond simple lead volume.",
      solution: "Offer × Treatment Attribution",
      whyBuy:
        "The clinic could potentially identify which promotion or treatment landing journey produces actual treatment starts and revenue.",
      outreachAngle:
        "You already create treatment-specific acquisition journeys. The next opportunity is identifying which offer actually produces completed treatment, not simply enquiries.",
      fitScore: 9.8,
      priority: "very-high",
    },
    {
      id: "doha-hollywood-clinic",
      name: "Doha Hollywood Clinic",
      country: "qa",
      website: "https://dohahollywoodclinic.com/",
      contact: { kind: "phone", number: "+974 7050 8080" },
      verified: [
        "The clinic operates across Dentistry, Dermatology, Laser, Plastic Surgery and Aesthetics, and supports online/WhatsApp booking.",
        "The clinic also publicly positions itself around advanced/AI-enabled technology.",
      ],
      opportunity:
        "Because the business already uses AI/technology positioning, a generic “AI marketing” pitch would be weak.",
      solution: "Treatment Revenue Decision Intelligence",
      whyBuy:
        "The stronger value proposition is helping management decide which high-value treatment categories deserve acquisition investment.",
      outreachAngle:
        "You already position the clinic around advanced technology. The stronger AI opportunity is not content generation — it is understanding which treatments and acquisition activities are actually producing commercial value.",
      fitScore: 9.5,
      priority: "high",
    },
    {
      id: "rayhan-medical-complex",
      name: "Rayhan Medical Complex",
      country: "qa",
      contact: { kind: "phone", number: "+974 4433 5400" },
      verified: [
        "The medical complex spans multiple specialties including Dental / Invisalign, Dermatology, Orthopedics, Gynecology, Pediatrics, ENT and Dietetics / nutrition.",
      ],
      opportunity:
        "A multi-department medical complex creates a resource-allocation question: which department currently represents the strongest patient-acquisition opportunity?",
      solution: "Department-Level Demand Intelligence",
      whyBuy:
        "Tansiq could potentially compare marketing demand across departments rather than measuring the entire medical complex as one business.",
      outreachAngle:
        "Your departments represent very different acquisition markets. Tansiq could help identify which department deserves the next marketing investment.",
      fitScore: 9.3,
      priority: "high",
    },
    {
      id: "british-international-dental",
      name: "British International Dental Centre",
      country: "qa",
      contact: { kind: "phone", number: "+974 4460 6058" },
      verified: [
        "The clinic showed an unusually strong public local-discovery signal.",
        "Approximately 4,865 public reviews observed during research.",
      ],
      opportunity:
        "Strong Search/local reputation creates an opportunity to connect reputation-driven discovery to appointment and treatment demand.",
      solution: "Search & Reputation → Booking Intelligence",
      whyBuy:
        "The business already appears to possess significant public trust. The opportunity is understanding how that trust translates into patient acquisition.",
      outreachAngle:
        "You already have an unusually strong local reputation signal. The next question is which treatment journeys that trust is actually helping convert.",
      fitScore: 9.2,
      priority: "high",
    },

    /* ───────── Saudi Arabia ───────── */
    {
      id: "dermadent",
      name: "DermaDent",
      country: "sa",
      website: "https://dermadent.sa/",
      contact: [
        { kind: "phone", label: "Main", number: "920002506" },
        { kind: "phone", label: "WhatsApp / Contact", number: "+966 11 513 0120" },
      ],
      verified: [
        "The booking journey captures Branch, Specialty, Doctor, Date and Time.",
        "The clinic spans Dental, Dermatology and Aesthetic services.",
      ],
      opportunity:
        "This is one of the strongest structured attribution opportunities in the entire Segment 02 dataset.",
      solution: "Branch × Doctor × Specialty Attribution",
      whyBuy:
        "The booking structure already captures several dimensions needed for sophisticated acquisition intelligence. The missing opportunity is potentially connecting marketing source and final treatment outcome.",
      outreachAngle:
        "Your booking journey already captures branch, specialty and doctor. Connecting marketing source and treatment outcome would turn that structure into powerful acquisition intelligence.",
      fitScore: 9.9,
      priority: "very-high",
    },
    {
      id: "my-clinic-saudi",
      name: "My Clinic Saudi",
      country: "sa",
      website: "https://www.myclinicsa.com/en/",
      contact: { kind: "phone", number: "+966 9200 22811" },
      verified: [
        "According to the company's public information: 18+ doctors, 49+ services and 9 departments, including Aesthetics, Laser, Dermatology, Dentistry, Surgery and Women's Health.",
      ],
      opportunity:
        "A broad multi-department structure creates a significant patient-acquisition prioritisation problem surface.",
      solution: "Department-Level Demand & Revenue Intelligence",
      whyBuy:
        "Tansiq could potentially help determine which departments and services deserve additional acquisition investment.",
      outreachAngle:
        "With 49+ services across nine departments, the bigger marketing question is not what to post next — it is which department represents the strongest growth opportunity.",
      fitScore: 9.7,
      priority: "very-high",
    },
    {
      id: "lavie-dental-clinics",
      name: "Lavie Dental Clinics",
      country: "sa",
      website: "https://lavieclinics.sa/",
      contact: { kind: "phone", number: "+966 54 346 9969" },
      verified: [
        "Appointments can move through phone/WhatsApp.",
        "The clinic promotes multiple dental treatment categories and provides a direct conversion path from enquiry into appointment.",
      ],
      opportunity: "WhatsApp provides a useful acquisition handoff point.",
      solution: "Campaign / Offer → WhatsApp → Appointment → Treatment Intelligence",
      whyBuy:
        "The clinic could potentially identify which campaigns and offers produce actual treatment appointments rather than WhatsApp conversations alone.",
      outreachAngle:
        "WhatsApp is already part of your appointment journey. The next opportunity is understanding which campaigns and offers generate conversations that actually become treatments.",
      fitScore: 9.3,
      priority: "high",
    },
    {
      id: "rance-dental-aesthetics",
      name: "Rance Dental Aesthetics Center",
      country: "sa",
      website: "https://ranceclinic.com/en/",
      contact: {
        kind: "website",
        note: "Use the verified website / WhatsApp booking channel. No telephone number was verified in this research.",
      },
      verified: [
        "The clinic publicly uses service selection, WhatsApp booking, before/after cases and treatment offers / discounts.",
      ],
      opportunity:
        "Treatment promotions create an attribution question: which offer generates paid treatment rather than low-intent enquiries?",
      solution: "Offer-to-Treatment Revenue Attribution",
      whyBuy: "This could help evaluate promotions based on completed commercial outcomes.",
      outreachAngle:
        "Your treatment offers create measurable acquisition journeys. The opportunity is identifying which offer produces actual paid treatment rather than simply more enquiries.",
      fitScore: 9.5,
      priority: "high",
    },
    {
      id: "esthetics-dental-clinics",
      name: "Esthetics Dental Clinics",
      country: "sa",
      contact: { kind: "phone", number: "+966 11 252 5258" },
      verified: [
        "The clinic has high-value aesthetic/cosmetic dental positioning and a strong local public presence.",
      ],
      opportunity:
        "Cosmetic dental treatments should not necessarily be measured alongside generic dental demand.",
      solution: "High-Value Cosmetic Treatment Intelligence",
      whyBuy:
        "Tansiq could potentially help prioritise acquisition around commercially valuable cosmetic procedures.",
      outreachAngle:
        "Separate cosmetic-treatment demand from general dental enquiries and identify which acquisition activity is creating higher-value treatment opportunities.",
      fitScore: 9.0,
      priority: "high",
    },
  ],
};
