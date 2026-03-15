"use client";

import { useState } from "react";
import { Product } from "@/data/shop";
import { useCart } from "@/components/shop/CartProvider";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Minus, Plus } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    addItem(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="flex items-center border-2 border-gray-200 rounded-xl h-14 bg-white min-w-[140px]">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 h-full text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-l-lg transition-colors"
        >
          <Minus className="w-5 h-5" />
        </button>
        <div className="flex-1 text-center font-bold text-lg">
          {quantity}
        </div>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 h-full text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-r-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <Button 
        size="lg" 
        className="flex-1 h-14 text-lg font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all duration-300 relative overflow-hidden group rounded-xl"
        onClick={handleAdd}
        disabled={isAdding}
      >
        <span className={`flex items-center justify-center gap-2 transition-transform duration-300 ${isAdding ? "-translate-y-12" : "translate-y-0"}`}>
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </span>
        <span className={`absolute flex items-center justify-center inset-0 transition-transform duration-300 ${isAdding ? "translate-y-0" : "translate-y-12"} bg-green-500 text-white font-bold`}>
          Added!
        </span>
      </Button>
    </div>
  );
}
