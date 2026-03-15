import { getProductBySlug, SHOP_PRODUCTS } from "@/data/shop";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return SHOP_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | TranquilGlow Shop`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/shop" className="hover:text-gray-900">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative bg-gray-50 aspect-square lg:aspect-auto min-h-[500px]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-[var(--color-primary)] text-white font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md text-sm">
                    New Arrival
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-400 text-amber-900 font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md text-sm">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="mb-4 text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider">
                {product.category}
              </div>
              
              <h1 className="font-heading text-4xl lg:text-5xl mb-4 text-gray-900">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} 
                    />
                  ))}
                  <span className="ml-2 font-medium text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 underline font-medium cursor-pointer">
                  {product.reviewCount} Reviews
                </span>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart Actions */}
              <div className="mb-10">
                <AddToCartButton product={product} />
                <p className="text-sm text-green-600 font-medium mt-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  In Stock - Usually ships within 24 hours
                </p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-primary)] mb-2" />
                  <span className="text-sm font-medium">Clinically<br/>Tested</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-6 h-6 text-[var(--color-primary)] mb-2" />
                  <span className="text-sm font-medium">Free Shipping<br/>over $100</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-[var(--color-primary)] mb-2" />
                  <span className="text-sm font-medium">30-Day<br/>Returns</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
