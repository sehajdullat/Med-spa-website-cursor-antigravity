"use client";

import { useState } from "react";
import { getAllPosts, getFeaturedPosts, type BlogCategory } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CATEGORIES: ("All" | BlogCategory)[] = [
  "All",
  "Treatments Explained",
  "Skincare Advice",
  "Anti-Aging Insights",
  "Patient Stories",
  "Clinic News"
];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // We consider the very first featured post to be the hero if "All" is selected
  const featuredPosts = getFeaturedPosts(1);
  const heroPost = activeCategory === "All" && featuredPosts.length > 0 ? featuredPosts[0] : null;

  const allPosts = getAllPosts();
  
  // Exclude the hero post from the grid if we are on "All"
  const gridPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const isNotHero = heroPost ? post.slug !== heroPost.slug : true;
    return matchesCategory && isNotHero;
  });

  const displayedPosts = gridPosts.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Blog Header & Hero */}
      <section className="bg-[var(--color-secondary)] pt-16 pb-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-[var(--color-accent)] mb-4">
              The Beauty Edit
            </h1>
            <p className="text-xl text-gray-700">
              Expert insights, clinical skincare advice, and treatment deep-dives directly from our medical professionals.
            </p>
          </div>

          {/* Featured Hero Post */}
          {heroPost && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <BlogCard post={heroPost} featured />
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Blog Grid section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6); // Reset visible count on filter change
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPosts.length === 0 ? (
              <div className="col-span-full text-center py-20 text-gray-500 text-lg">
                No posts found for this category.
              </div>
            ) : (
              displayedPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))
            )}
          </div>

          {/* Load More */}
          {gridPosts.length > visibleCount && (
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Never Miss a Glow Up</h2>
          <p className="text-white/80 mb-8 text-lg">
            Join 10,000+ others and get exclusive treatment offers, skincare deep-dives, and clinic news delivered to your inbox every month.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="px-6 py-4 rounded-full text-gray-900 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full h-auto py-4 px-8 text-base"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-white/60 text-sm mt-4">We respect your privacy. No spam, ever.</p>
        </div>
      </section>
      
    </div>
  );
}
