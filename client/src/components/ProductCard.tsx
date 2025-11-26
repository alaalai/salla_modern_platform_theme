import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-48 sm:h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-lime-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart
            size={18}
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{category}</p>
        
        {/* Product Name */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-lime-400 transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? 'fill-lime-400 text-lime-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-slate-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-lime-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-lime-500 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 group/btn">
          <ShoppingCart size={18} className="group-hover/btn:animate-bounce" />
          <span>اضف الى السلة</span>
        </button>
      </div>
    </div>
  );
}
