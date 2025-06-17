
import { Plus, Star } from "lucide-react";
import { Product } from "../pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-amber-600">
          {product.weight}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-sm text-gray-500">(4.8)</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            ₹{product.price}
            <span className="text-sm text-gray-500 font-normal">/pack</span>
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg group-hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
