export interface FeaturedReview {
  id: string;
  text: string;
  author: string;
  treatment: string;
  photo?: string;
}

export const FEATURED_REVIEWS: FeaturedReview[] = [
  {
    id: "1",
    text: "My skin has never looked this good. The HydraFacial was relaxing and the results were visible the same day. I'm a regular now!",
    author: "Amanda M.",
    treatment: "HydraFacial Revival",
  },
  {
    id: "2",
    text: "I was nervous about Botox but the team made me feel so comfortable. Natural results and zero downtime. Highly recommend TranquilGlow.",
    author: "Jennifer K.",
    treatment: "Botox & Dysport",
  },
  {
    id: "3",
    text: "The IV drip gave me my energy back after a brutal week. Professional, clean, and the staff really care. Will be back for more wellness treatments.",
    author: "David R.",
    treatment: "IV Vitamin Drips",
  },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?q=TranquilGlow+Med+Spa";
