"use client";

import { useState } from "react";
import { SHOP_PRODUCTS, type ProductCategory } from "@/data/shop";
import ProductCard from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All", 
  "Cleansers", 
  "Serums", 
  "Moisturizers", 
  "Sunscreen", 
  "Masks", 
  "Tools", 
  "Bundles", 
  "Gift Cards"
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = SHOP_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl mb-4"
          >
            Medical-Grade Skincare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Curated products to extend your glow, directly recommended by our medical professionals.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <input 
                type="search" 
                placeholder="Search products..." 
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="font-heading text-xl mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setVisibleCount(12);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === cat 
                        ? "bg-[var(--color-primary)] text-white font-medium" 
                        : "text-gray-600 hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <h3 className="font-heading text-lg mb-2">Not sure what you need?</h3>
              <p className="text-sm text-gray-600 mb-4">Take our quick skin quiz to get personalized product recommendations.</p>
              <Button variant="outline" className="w-full border-[var(--color-primary)] text-[var(--color-primary)]" asChild>
                <a href="/quiz">Take Quiz</a>
              </Button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{displayedProducts.length}</span> of <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
              </p>
            </div>

            {displayedProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-heading text-2xl mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx % 12) * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}

            {filteredProducts.length > visibleCount && (
              <div className="mt-12 text-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="px-8 border-gray-300"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
