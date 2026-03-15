export type ProductCategory = "Cleansers" | "Serums" | "Moisturizers" | "Sunscreen" | "Masks" | "Tools" | "Bundles" | "Gift Cards";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  ingredients?: string[];
  benefits?: string[];
  howToUse?: string;
  stock: number;
}

// Write some explicit high-quality mock products
const EXPLICIT_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "gentle-foaming-cleanser",
    name: "Gentle Foaming Cleanser",
    description: "A purifying cleanser that gently removes impurities and makeup without stripping the skin of essential moisture.",
    category: "Cleansers",
    price: 36,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    isBestseller: true,
    stock: 50,
  },
  {
    id: "p2",
    slug: "vitamin-c-brightening-serum",
    name: "Vitamin C Brightening Serum",
    description: "A potent 15% Vitamin C serum that brightens skin tone, reduces dark spots, and provides antioxidant protection.",
    category: "Serums",
    price: 85,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 312,
    isBestseller: true,
    stock: 40,
  },
  {
    id: "p3",
    slug: "hyaluronic-acid-hydration-boost",
    name: "Hyaluronic Acid Hydration Boost",
    description: "Multi-weight hyaluronic acid complex that plumps skin and provides 24-hour hydration.",
    category: "Serums",
    price: 65,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=2000&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 89,
    stock: 25,
  },
  {
    id: "p4",
    slug: "daily-defense-spf-50",
    name: "Daily Defense SPF 50",
    description: "A lightweight, non-comedogenic mineral sunscreen that doubles as a makeup primer.",
    category: "Sunscreen",
    price: 42,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 450,
    isBestseller: true,
    stock: 120,
  },
  {
    id: "p5",
    slug: "overnight-renewal-mask",
    name: "Overnight Renewal Mask",
    description: "Wake up to glowing skin with this exfoliating AHA/BHA sleeping mask.",
    category: "Masks",
    price: 58,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 67,
    isNew: true,
    stock: 30,
  },
  {
    id: "p6",
    slug: "rose-quartz-face-roller",
    name: "Rose Quartz Face Roller",
    description: "Enhance product absorption and reduce puffiness with this natural rose quartz roller.",
    category: "Tools",
    price: 28,
    image: "https://images.unsplash.com/photo-1616832609388-e215fa19ec41?q=80&w=2000&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 215,
    stock: 80,
  },
  {
    id: "p7",
    slug: "ultimate-glow-bundle",
    name: "The Ultimate Glow Bundle",
    description: "Our 3-step routine (Cleanser, Vitamin C, SPF) bundled together for maximum radiance.",
    category: "Bundles",
    price: 145,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop",
    rating: 5.0,
    reviewCount: 42,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "p8",
    slug: "tranquilglow-gift-card-100",
    name: "$100 Gift Card",
    description: "Give the gift of glowing skin. Redeemable for any treatment or product.",
    category: "Gift Cards",
    price: 100,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2000&auto=format&fit=crop",
    rating: 5.0,
    reviewCount: 15,
    stock: 999,
  }
];

// Generate an additional 52 mock products to reach the 60+ goal
const CATEGORIES: ProductCategory[] = ["Cleansers", "Serums", "Moisturizers", "Sunscreen", "Masks", "Tools"];
const ADJECTIVES = ["Hydrating", "Purifying", "Restorative", "Balancing", "Revitalizing", "Soothing", "Clarifying", "Illuminating", "Firming", "Nourishing", "Calming", "Anti-Aging"];
const NOUNS = ["Cream", "Gel", "Lotion", "Oil", "Mist", "Essence", "Tonic", "Balm", "Treatment", "Complex"];
const IMAGES = [
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228720-1c2a01f52b0f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop"
];

const GENERATED_PRODUCTS: Product[] = Array.from({ length: 55 }).map((_, i) => {
  const category = CATEGORIES[i % CATEGORIES.length];
  const adjective = ADJECTIVES[i % ADJECTIVES.length];
  const noun = NOUNS[i % NOUNS.length];
  const name = `${adjective} ${category.slice(0, -1)} ${noun}`;
  const slug = name.toLowerCase().replace(/ /g, "-");
  
  return {
    id: `gen-p${i + 9}`,
    slug,
    name,
    description: `A premium ${name.toLowerCase()} formulated for professional use. Helps maintain your skin barrier and extends post-treatment results.`,
    category,
    price: 25 + (i * 3) % 150, // Prices range between $25 and $175
    image: IMAGES[i % IMAGES.length],
    rating: Number((4.0 + (i % 10) / 10).toFixed(1)),
    reviewCount: (i * 7) % 300,
    stock: 20 + (i * 2) % 50,
    isNew: i % 15 === 0,
    isBestseller: i % 12 === 0
  };
});

export const SHOP_PRODUCTS: Product[] = [...EXPLICIT_PRODUCTS, ...GENERATED_PRODUCTS];

export function getProductBySlug(slug: string): Product | undefined {
  return SHOP_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory, limit?: number): Product[] {
  const filtered = SHOP_PRODUCTS.filter((p) => p.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getFeaturedProducts(limit = 4): Product[] {
  return SHOP_PRODUCTS.filter((p) => p.isBestseller).slice(0, limit);
}
