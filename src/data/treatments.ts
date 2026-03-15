export interface Treatment {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  image: string;
  price: string;
  duration: string;
  downtime: string;
  resultsVisible: string;
  priceRange: string;
  treats: string[];
  duringTreatment: string;
  aftercare: string;
  resultsTimeline: string;
  faqs: { question: string; answer: string }[];
  reviewCount: number;
  heroImage: string;
  beforeAfterImages?: { before: string; after: string; caption?: string }[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "1",
    slug: "hydrafacial",
    name: "HydraFacial Revival",
    tagline: "Instant glow with zero downtime",
    shortDescription: "Deep cleanse, hydrate, and illuminate your skin in 30 minutes.",
    description:
      "HydraFacial is a medical-grade facial treatment that cleanses, extracts, and hydrates the skin using a patented vortex-fusion delivery system. It's suitable for all skin types and delivers immediate, visible results with no downtime.",
    image: "/images/treatments/hydrafacial.jpg",
    heroImage: "/images/treatments/hydrafacial.jpg",
    price: "$200",
    duration: "30-45 min",
    downtime: "None",
    resultsVisible: "Immediate",
    priceRange: "$200/session",
    treats: ["Dull skin", "Fine lines", "Congested pores", "Uneven texture", "Hyperpigmentation"],
    duringTreatment:
      "Your provider will cleanse, exfoliate, extract impurities, and infuse serums. You may feel light suction and a gentle tingling sensation.",
    aftercare:
      "Apply sunscreen; avoid harsh actives for 24 hours. Results are immediate with best glow in 24-48 hours.",
    resultsTimeline: "Immediate glow, best results in 24 hours",
    faqs: [
      { question: "How often should I get a HydraFacial?", answer: "We recommend every 4-6 weeks for maintenance." },
      { question: "Is it safe for sensitive skin?", answer: "Yes. The treatment is customizable and suitable for all skin types." },
    ],
    reviewCount: 128,
    beforeAfterImages: [],
  },
  {
    id: "2",
    slug: "iv-therapy",
    name: "IV Vitamin Drips",
    tagline: "Energy, immunity, recovery",
    shortDescription: "Direct-to-bloodstream hydration and vitamins for instant wellness boost.",
    description:
      "IV vitamin therapy delivers high-dose vitamins, minerals, and hydration directly into your bloodstream for maximum absorption. Perfect for energy, immune support, and recovery.",
    image: "/images/treatments/iv-therapy.jpg",
    heroImage: "/images/treatments/iv-therapy.jpg",
    price: "$300",
    duration: "45-60 min",
    downtime: "None",
    resultsVisible: "Same day",
    priceRange: "$300/session",
    treats: ["Fatigue", "Dehydration", "Immune support", "Hangover recovery", "Athletic recovery"],
    duringTreatment:
      "A small IV is placed in your arm. You relax while vitamins and fluids are infused. Most clients read or rest.",
    aftercare:
      "Stay hydrated. Avoid alcohol for 24 hours. You may feel energized within hours.",
    resultsTimeline: "Immediate energy boost, effects last 3-7 days",
    faqs: [
      { question: "Does it hurt?", answer: "Only a small pinch when the IV is placed. The rest is painless." },
      { question: "How often can I do IV therapy?", answer: "Weekly to monthly depending on your goals." },
    ],
    reviewCount: 86,
    beforeAfterImages: [],
  },
  {
    id: "3",
    slug: "led-therapy",
    name: "LED Light Therapy",
    tagline: "Heal, rejuvenate, glow",
    shortDescription: "FDA-approved light wavelengths stimulate cellular repair and collagen.",
    image: "/images/treatments/led-therapy.jpg",
    heroImage: "/images/treatments/led-therapy.jpg",
    price: "$150",
    duration: "20-30 min",
    downtime: "None",
    resultsVisible: "Cumulative",
    priceRange: "$150/session",
    treats: ["Acne", "Inflammation", "Anti-aging", "Skin healing", "Redness"],
    duringTreatment:
      "You'll lie under a panel of LED lights. Red and/or blue light is applied. No heat or discomfort.",
    aftercare:
      "Apply moisturizer and sunscreen. No downtime. Best with 2x/week for 4 weeks.",
    resultsTimeline: "Cumulative benefits, best with 2x/week for 4 weeks",
    description:
      "LED light therapy uses specific wavelengths to penetrate the skin and stimulate cellular repair, reduce inflammation, and boost collagen. It's safe, painless, and has no downtime.",
    faqs: [
      { question: "What colors are used?", answer: "Red for anti-aging and collagen; blue for acne bacteria." },
      { question: "Can I combine with other treatments?", answer: "Yes. Often used after facials or microneedling." },
    ],
    reviewCount: 72,
    beforeAfterImages: [],
  },
  {
    id: "4",
    slug: "botox",
    name: "Botox & Dysport",
    tagline: "Smooth wrinkles, prevent aging",
    shortDescription: "FDA-approved wrinkle reducer for forehead, crow's feet, and frown lines.",
    image: "/images/treatments/botox.jpg",
    heroImage: "/images/treatments/botox.jpg",
    price: "$12/unit",
    duration: "15-20 min",
    downtime: "None (possible minor bruising)",
    resultsVisible: "3-5 days",
    priceRange: "$12/unit",
    treats: ["Forehead lines", "Crow's feet", "Frown lines", "Prevention"],
    duringTreatment:
      "Small injections in targeted muscles. Discomfort is minimal; no numbing usually needed.",
    aftercare:
      "No rubbing for 4 hours. Avoid lying down for 4 hours. Results in 3-5 days, peak at 2 weeks.",
    resultsTimeline: "Results appear in 3-5 days, peak at 2 weeks",
    description:
      "Botox and Dysport are injectable neuromodulators that temporarily relax the muscles that cause dynamic wrinkles, giving you a smoother, more refreshed appearance.",
    faqs: [
      { question: "How long does it last?", answer: "Typically 3-4 months. Results may last longer with repeated use." },
      { question: "When will I see results?", answer: "Full effect in 1-2 weeks. Some see change in 3-5 days." },
    ],
    reviewCount: 156,
    beforeAfterImages: [],
  },
  {
    id: "5",
    slug: "fillers",
    name: "Dermal Fillers",
    tagline: "Restore volume, define features",
    shortDescription: "Hyaluronic acid fillers for lips, cheeks, under-eyes, and jawline.",
    image: "/images/treatments/fillers.jpg",
    heroImage: "/images/treatments/fillers.jpg",
    price: "$650/syringe",
    duration: "30-60 min",
    downtime: "1-2 days (swelling/bruising possible)",
    resultsVisible: "Immediate",
    priceRange: "$650/syringe",
    treats: ["Volume loss", "Lip enhancement", "Cheek definition", "Nasolabial folds", "Jawline"],
    duringTreatment:
      "Injections with topical numbing. You may feel pressure. Results are visible immediately.",
    aftercare:
      "Ice as needed. Avoid strenuous exercise for 24-48 hours. Swelling subsides in a few days.",
    resultsTimeline: "Immediate, settles in 2 weeks, lasts 9-18 months",
    description:
      "Dermal fillers use hyaluronic acid to restore volume, smooth lines, and enhance features. Results are natural-looking and reversible if needed.",
    faqs: [
      { question: "How long do fillers last?", answer: "Depending on product and area, 9-18 months or longer." },
      { question: "Is it reversible?", answer: "Yes. Hyaluronic acid fillers can be dissolved with an enzyme if needed." },
    ],
    reviewCount: 134,
    beforeAfterImages: [],
  },
  {
    id: "6",
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    tagline: "Permanent hair reduction",
    shortDescription: "FDA-cleared laser technology targets hair follicles for long-lasting smoothness.",
    image: "/images/treatments/laser-hair.jpg",
    heroImage: "/images/treatments/laser-hair.jpg",
    price: "$150/area",
    duration: "15-60 min (area-dependent)",
    downtime: "None",
    resultsVisible: "After 6-8 sessions",
    priceRange: "$150/area",
    treats: ["Unwanted hair", "All skin tones", "Face, bikini, legs", "Underarms"],
    duringTreatment:
      "Laser pulses target hair follicles. You may feel a rubber-band snap sensation. Cooling is used for comfort.",
    aftercare:
      "Avoid sun and waxing. Use sunscreen. Hair sheds over 1-2 weeks. Multiple sessions needed.",
    resultsTimeline: "6-8 sessions for 90% permanent reduction",
    description:
      "Laser hair removal uses concentrated light to damage hair follicles, leading to permanent reduction. We use technology safe for all skin tones.",
    faqs: [
      { question: "How many sessions do I need?", answer: "Typically 6-8 sessions for optimal results." },
      { question: "Does it work on dark skin?", answer: "Yes. We use devices that are safe and effective for all skin types." },
    ],
    reviewCount: 98,
    beforeAfterImages: [],
  },
  {
    id: "7",
    slug: "chemical-peels",
    name: "Chemical Peels",
    tagline: "Reveal fresh, radiant skin",
    shortDescription: "Medical-grade acids remove dead skin layers for brighter, smoother complexion.",
    image: "/images/treatments/chemical-peels.jpg",
    heroImage: "/images/treatments/chemical-peels.jpg",
    price: "$175",
    duration: "30-45 min",
    downtime: "3-7 days (peeling)",
    resultsVisible: "1 week",
    priceRange: "$175-$400",
    treats: ["Sun damage", "Acne", "Hyperpigmentation", "Aging skin", "Texture"],
    duringTreatment:
      "A solution is applied to the skin. You may feel tingling or warmth. Depth of peel is customized.",
    aftercare:
      "Gentle cleansing, moisturizer, and SPF. Peeling typically occurs in 2-3 days. Avoid sun.",
    resultsTimeline: "Visible improvement in 1 week, continues for 4 weeks",
    description:
      "Chemical peels use medical-grade acids to exfoliate the skin, improving texture, tone, and clarity. We offer light to medium depth peels.",
    faqs: [
      { question: "How much downtime?", answer: "Light peels: minimal. Medium: 3-7 days of peeling." },
      { question: "When can I wear makeup?", answer: "After peeling subsides, usually 5-7 days for medium peels." },
    ],
    reviewCount: 89,
    beforeAfterImages: [],
  },
  {
    id: "8",
    slug: "microneedling",
    name: "Microneedling + PRP",
    tagline: "Stimulate collagen, erase scars",
    shortDescription: "Tiny needles create micro-injuries to trigger healing and new collagen production.",
    image: "/images/treatments/microneedling.jpg",
    heroImage: "/images/treatments/microneedling.jpg",
    price: "$450",
    duration: "60-90 min",
    downtime: "2-3 days (redness)",
    resultsVisible: "4-6 weeks",
    priceRange: "$450/session",
    treats: ["Acne scars", "Fine lines", "Large pores", "Texture", "Stretch marks"],
    duringTreatment:
      "A numbing cream is applied. A device with fine needles creates micro-channels. PRP may be applied. You may feel pressure.",
    aftercare:
      "Gentle skincare, SPF. No exercise or heavy sweating for 24-48 hours. Redness 1-3 days.",
    resultsTimeline: "Gradual improvement over 4-6 weeks, best after 3+ sessions",
    description:
      "Microneedling creates controlled micro-injuries to stimulate collagen and elastin. Combined with PRP (your own platelets), results are enhanced for scarring and aging.",
    faqs: [
      { question: "How many sessions?", answer: "We recommend 3-6 sessions spaced 4-6 weeks apart." },
      { question: "Is PRP worth it?", answer: "PRP can enhance results for scars and texture. We can discuss at your consult." },
    ],
    reviewCount: 76,
    beforeAfterImages: [],
  },
  {
    id: "9",
    slug: "body-contouring",
    name: "Body Contouring",
    tagline: "Sculpt without surgery",
    shortDescription: "Non-invasive fat reduction and muscle toning using advanced technology.",
    image: "/images/treatments/body-contouring.jpg",
    heroImage: "/images/treatments/body-contouring.jpg",
    price: "$400/area",
    duration: "45-60 min",
    downtime: "None",
    resultsVisible: "8-12 weeks",
    priceRange: "$400/area",
    treats: ["Stubborn fat", "Post-pregnancy", "Love handles", "Cellulite"],
    duringTreatment:
      "Device is applied to target area. You may feel cooling, heating, or suction depending on technology.",
    aftercare:
      "Stay hydrated. Light activity is fine. Results develop over 8-12 weeks. Multiple sessions recommended.",
    resultsTimeline: "Gradual results over 8-12 weeks, 4+ sessions recommended",
    description:
      "Body contouring treatments use non-invasive technology to reduce fat cells and improve skin texture. No surgery, no downtime.",
    faqs: [
      { question: "Is it permanent?", answer: "Fat cells treated are permanently destroyed. Maintain with healthy lifestyle." },
      { question: "How many areas?", answer: "We can treat multiple areas; pricing is per area or in packages." },
    ],
    reviewCount: 64,
    beforeAfterImages: [],
  },
  {
    id: "10",
    slug: "dermaplaning",
    name: "Dermaplaning",
    tagline: "Baby-soft skin instantly",
    shortDescription: "Medical-grade blade removes dead skin and peach fuzz for instant smoothness.",
    image: "/images/treatments/dermaplaning.jpg",
    heroImage: "/images/treatments/dermaplaning.jpg",
    price: "$125",
    duration: "30 min",
    downtime: "None",
    resultsVisible: "Immediate",
    priceRange: "$125/session",
    treats: ["Dull skin", "Peach fuzz", "Makeup application", "Product absorption"],
    duringTreatment:
      "A sterile blade is used at a 45-degree angle to remove dead skin and vellus hair. Feels like a gentle scrape.",
    aftercare:
      "Apply SPF. No harsh actives for 24 hours. Results are immediate. Repeat in 3-4 weeks.",
    resultsTimeline: "Immediate, lasts 3-4 weeks",
    description:
      "Dermaplaning is a physical exfoliation that removes dead skin cells and peach fuzz, leaving skin smooth and ready for better product absorption.",
    faqs: [
      { question: "Does hair grow back thicker?", answer: "No. Vellus hair grows back the same. It's a myth." },
      { question: "Who is it good for?", answer: "Anyone wanting smoother skin and better product penetration. Not for active breakouts." },
    ],
    reviewCount: 92,
    beforeAfterImages: [],
  },
  {
    id: "11",
    slug: "ipl-photofacial",
    name: "IPL Photofacial",
    tagline: "Erase sun damage & redness",
    shortDescription: "Intense Pulsed Light targets pigmentation, redness, and broken capillaries.",
    image: "/images/treatments/ipl.jpg",
    heroImage: "/images/treatments/ipl.jpg",
    price: "$350",
    duration: "30-45 min",
    downtime: "1-3 days (darkening before fading)",
    resultsVisible: "2-4 weeks",
    priceRange: "$350/session",
    treats: ["Sun spots", "Rosacea", "Broken capillaries", "Uneven tone"],
    duringTreatment:
      "Light pulses are applied to the skin. You may feel a rubber-band snap. Cooling gel is used.",
    aftercare:
      "SPF daily. Dark spots may darken then flake off. Avoid sun and heat for a few days.",
    resultsTimeline: "2-4 sessions for optimal results, gradual fading over weeks",
    description:
      "IPL (Intense Pulsed Light) treats sun damage, redness, and broken capillaries by targeting pigment and blood vessels. Safe for most skin types.",
    faqs: [
      { question: "How many sessions?", answer: "Typically 2-4 sessions for sun damage and redness." },
      { question: "Can I do it in summer?", answer: "We recommend avoiding sun before and after. Fall/winter is ideal." },
    ],
    reviewCount: 71,
    beforeAfterImages: [],
  },
  {
    id: "12",
    slug: "laser-vein-removal",
    name: "Laser Vein Removal",
    tagline: "Vanish spider & varicose veins",
    shortDescription: "Laser energy collapses unwanted veins for clearer skin.",
    image: "/images/treatments/vein-removal.jpg",
    heroImage: "/images/treatments/vein-removal.jpg",
    price: "$250",
    duration: "30-45 min",
    downtime: "None (compression recommended)",
    resultsVisible: "4-6 weeks",
    priceRange: "$250/session",
    treats: ["Spider veins", "Facial veins", "Leg veins"],
    duringTreatment:
      "Laser is applied to the veins. You may feel a pinch or heat. Cooling is used. No incisions.",
    aftercare:
      "Compression stockings if recommended. Avoid sun. Veins fade over 4-6 weeks.",
    resultsTimeline: "Veins fade over 4-6 weeks, may need 2-3 sessions",
    description:
      "Laser vein removal uses focused light to collapse unwanted spider and small varicose veins, improving the appearance of legs and face.",
    faqs: [
      { question: "Does it hurt?", answer: "Most clients tolerate it well. We use cooling and can discuss numbing if needed." },
      { question: "When do I see results?", answer: "Veins fade over 4-6 weeks. Some may need 2-3 sessions." },
    ],
    reviewCount: 58,
    beforeAfterImages: [],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsForHomepage(limit = 6) {
  return TREATMENTS.slice(0, limit);
}
