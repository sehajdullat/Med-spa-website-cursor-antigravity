import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/shop";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/shop/${product.slug}`} className="block relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Bestseller
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider">
            {product.category}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-400">({product.reviewCount})</span>
          </div>
        </div>
        
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-heading text-xl mb-1 group-hover:text-[var(--color-primary)] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 h-10">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-full px-4"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
