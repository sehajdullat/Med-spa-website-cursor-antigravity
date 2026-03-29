export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export type BlogCategory = 
  | "Treatments Explained"
  | "Skincare Advice"
  | "Anti-Aging Insights"
  | "Clinic News"
  | "Patient Stories";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Storing as HTML/Markdown string for now
  coverImage: string;
  date: string;
  readTime: number; // in minutes
  author: Author;
  category: BlogCategory;
  tags: string[];
  isFeatured?: boolean;
}

const AUTHORS: Record<string, Author> = {
  drChen: {
    name: "Dr. Sarah Chen",
    role: "Medical Director",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    bio: "Dr. Chen is a board-certified dermatologist specializing in non-invasive cosmetic procedures and laser medicine."
  },
  rnJessica: {
    name: "Jessica Smith, RN",
    role: "Aesthetic Nurse",
    avatar: "https://images.unsplash.com/photo-1594824432465-9ab0e9a78de9?q=80&w=300&auto=format&fit=crop",
    bio: "Jessica has over 8 years of experience in aesthetic nursing, focusing on injectables and medical-grade skincare."
  },
  team: {
    name: "TranquilGlow Editorial Team",
    role: "Content Team",
    avatar: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=300&auto=format&fit=crop"
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-expect-first-hydrafacial",
    title: "What to Expect During Your First HydraFacial: A Step-by-Step Guide",
    excerpt: "Nervous about your first HydraFacial? Discover exactly what happens during this 3-step treatment and why it's our most popular glow-inducing service.",
    content: "<h2>The Cleanse and Peel Step</h2>\n<p>The first step focuses on deep cleansing and gentle exfoliation...</p>\n<h2>Extraction and Hydration</h2>\n<p>Next, we use painless vortex suction to remove impurities...</p>\n<h2>Fuse and Protect</h2>\n<p>Finally, we saturate the skin's surface with antioxidants and peptides...</p>",
    coverImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    date: "2024-03-12",
    readTime: 4,
    author: AUTHORS.rnJessica,
    category: "Treatments Explained",
    tags: ["HydraFacial", "Exfoliation", "Beginner Guide"],
    isFeatured: true
  },
  {
    slug: "botox-vs-dermal-fillers",
    title: "Botox vs. Dermal Fillers: Understanding the Key Differences",
    excerpt: "Confused about injectables? We break down when to use neuromodulators versus volume-restoring fillers for the best facial rejuvenation results.",
    content: "<h2>What is Botox?</h2>\n<p>Botox is a neuromodulator that temporarily relaxes the underlying muscles...</p>\n<h2>What are Fillers?</h2>\n<p>Fillers, often made from Hyaluronic Acid, literally 'fill' in lost volume...</p>\n<h2>Which One Do You Need?</h2>\n<p>If your wrinkle shows when your face is at rest, you likely need filler...</p>",
    coverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    date: "2024-03-05",
    readTime: 6,
    author: AUTHORS.drChen,
    category: "Treatments Explained",
    tags: ["Injectables", "Botox", "Fillers", "Anti-Aging"]
  },
  {
    slug: "winter-skincare-routine-adjustments",
    title: "5 Essential Adjustments to Your Winter Skincare Routine",
    excerpt: "As temperatures drop and indoor heating rises, your skin barrier takes a hit. Here is how our medical experts recommend tweaking your regimen.",
    content: "<h2>Swap Out Your Cleanser</h2>\n<p>Move away from foaming cleansers and opt for cream-based ones...</p>\n<h2>Layer Your Hydration</h2>\n<p>Don't just rely on a thick cream. Start with a hydrating essence or serum...</p>\n<h2>Don't Skip the SPF</h2>\n<p>UV rays still penetrate clouds and windows during winter...</p>",
    coverImage: "https://images.unsplash.com/photo-1616832826599-811b9a2b5efc?q=80&w=1200&auto=format&fit=crop",
    date: "2024-02-18",
    readTime: 5,
    author: AUTHORS.team,
    category: "Skincare Advice",
    tags: ["Winter Care", "Moisture Barrier", "Dry Skin"]
  },
  {
    slug: "truth-about-medical-grade-skincare",
    title: "The Truth About Medical-Grade Skincare vs. Over-the-Counter Brands",
    excerpt: "Is it really worth the higher price tag? Dr. Chen explains the formulation differences and clinical evidence behind medical-grade products.",
    content: "<h2>What Makes it 'Medical-Grade'?</h2>\n<p>Medical-grade products have higher concentrations of active ingredients and superior delivery systems...</p>\n<h2>Clinical Testing</h2>\n<p>These products are subjected to rigorous clinical studies on actual human skin...</p>\n<h2>Targeted Results</h2>\n<p>They are formulated to reach deeper layers of the epidermis...</p>",
    coverImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
    date: "2024-02-10",
    readTime: 7,
    author: AUTHORS.drChen,
    category: "Skincare Advice",
    tags: ["Products", "Ingredients", "Dermatology"]
  },
  {
    slug: "preparing-for-laser-hair-removal",
    title: "The Ultimate Guide on Preparing for Laser Hair Removal",
    excerpt: "Ensure the best possible results and minimal discomfort by following these critical pre-treatment steps before your laser appointment.",
    content: "<h2>Stop Waxing and Plucking</h2>\n<p>The laser needs the hair follicle root to be intact to destroy it...</p>\n<h2>Avoid Sun Exposure</h2>\n<p>Tanned skin increases the risk of side effects like hyperpigmentation...</p>\n<h2>Shave the Day Before</h2>\n<p>Using a new blade, cleanly shave the treatment area 24 hours prior...</p>",
    coverImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-25",
    readTime: 4,
    author: AUTHORS.rnJessica,
    category: "Treatments Explained",
    tags: ["Laser", "Hair Removal", "Prep Guide"]
  },
  {
    slug: "microneedling-benefits-for-acne-scars",
    title: "How Microneedling with PRP Actually Heals Acne Scars",
    excerpt: "Also known as the 'Vampire Facial', learn how creating micro-injuries and re-introducing your own platelets forces your skin to regenerate.",
    content: "<h2>The Science of Collagen Induction</h2>\n<p>By causing controlled micro-trauma, the body responds by producing collagen...</p>\n<h2>The Power of PRP</h2>\n<p>Platelet-Rich Plasma acts as a growth factor superpower, accelerating healing...</p>\n<h2>What Type of Scars Respond Best?</h2>\n<p>Rolling and boxcar scars see the most significant improvement...</p>",
    coverImage: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c5?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-12",
    readTime: 6,
    author: AUTHORS.drChen,
    category: "Anti-Aging Insights",
    tags: ["Microneedling", "PRP", "Acne Scars"]
  },
  {
    slug: "best-treatments-for-brides",
    title: "The 6-Month Bridal Beauty Countdown timeline",
    excerpt: "Getting married? Walk down the aisle with clear, radiant skin. Here is our recommended timeline for aesthetic treatments leading up to the big day.",
    content: "<h2>6 Months Out: The Lasers</h2>\n<p>Start your laser hair removal and intense pulsed light (IPL) treatments early...</p>\n<h2>3 Months Out: Injectables</h2>\n<p>This is the perfect time for a Botox trial run to see how it settles...</p>\n<h2>1 Month Out: The Glow Up</h2>\n<p>Schedule your HydraFacials and gentle chemical peels...</p>",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    date: "2023-12-05",
    readTime: 8,
    author: AUTHORS.team,
    category: "Skincare Advice",
    tags: ["Bridal", "Timeline", "Planning"]
  },
  {
    slug: "investing-in-collagen-banking",
    title: "What is 'Collagen Banking' and Why You Should Start in Your 20s",
    excerpt: "Preventative aging is the new standard. Discover how specific treatments can help you build a 'bank' of collagen before natural depletion begins.",
    content: "<h2>The 1% Rule</h2>\n<p>Starting in our mid-20s, we lose about 1% of our collagen production every year...</p>\n<h2>Treatments that Bank Collagen</h2>\n<p>Ultherapy, Sculptra, and Microneedling are prime investments...</p>\n<h2>At-Home Maintenance</h2>\n<p>Retinoids and Vitamin C are your daily deposits into the collagen bank...</p>",
    coverImage: "https://images.unsplash.com/photo-1616832826456-11fbdc2cd86b?q=80&w=1200&auto=format&fit=crop",
    date: "2023-11-20",
    readTime: 5,
    author: AUTHORS.drChen,
    category: "Anti-Aging Insights",
    tags: ["Collagen", "Prevention", "Youth"]
  },
  {
    slug: "introducing-new-body-contouring-suite",
    title: "TranquilGlow Expands: Introducing Our New Body Contouring Suite",
    excerpt: "We are thrilled to announce the opening of our dedicated body wellness suite, featuring the latest in non-invasive fat reduction and muscle toning technology.",
    content: "<h2>State of the Art Technology</h2>\n<p>We've added three new FDA-cleared devices to our clinic...</p>\n<h2>Comprehensive Body Plans</h2>\n<p>We now offer hybrid packages combining fat freezing with muscle stimulation...</p>\n<h2>Booking Information</h2>\n<p>Consultations for the new suite are now open...</p>",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    date: "2023-11-02",
    readTime: 3,
    author: AUTHORS.team,
    category: "Clinic News",
    tags: ["Announcement", "Body Contouring", "Expansion"]
  },
  {
    slug: "patient-spotlight-melasmas-journey",
    title: "Patient Spotlight: Sarah's Journey to Conquering Melasma",
    excerpt: "After years of struggling with stubborn hyperpigmentation, one of our favorite patients details her exact treatment plan that finally brought her relief.",
    content: "<h2>The Frustration of Melasma</h2>\n<p>Sarah came to us after trying dozens of over-the-counter brightening creams to no avail...</p>\n<h2>The Custom Treatment Plan</h2>\n<p>We combined series of gentle chemical peels with a strict medical-grade homecare regimen...</p>\n<h2>The Results</h2>\n<p>Six months later, her skin texture is completely transformed...</p>",
    coverImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop",
    date: "2023-10-15",
    readTime: 5,
    author: AUTHORS.rnJessica,
    category: "Patient Stories",
    tags: ["Melasma", "Hyperpigmentation", "Case Study"]
  },
  // Ensure we reach 15 posts total
  ...Array.from({ length: 5 }).map((_, i) => ({
    slug: `skincare-deep-dive-ingredient-${i + 1}`,
    title: `Skincare Deep Dive: The Science Behind Ingredient #${i + 1}`,
    excerpt: `We explore the clinical evidence, best practices, and integration strategies for adding this powerful ingredient into your daily skincare regimen.`,
    content: `<h2>What is it?</h2><p>This active ingredient is renowned for its transformative properties...</p><h2>How to Use It</h2><p>Incorporation into your routine requires care to avoid barrier disruption...</p>`,
    coverImage: `https://images.unsplash.com/photo-1556228720-1c2a01f52b0f?q=80&w=1200&auto=format&fit=crop`,
    date: `2023-09-${10 + i}`,
    readTime: 4 + (i % 3),
    author: AUTHORS.team,
    category: "Skincare Advice" as BlogCategory,
    tags: ["Ingredients", "Science"]
  }))
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return BLOG_POSTS.filter(p => p.isFeatured).slice(0, limit);
}
