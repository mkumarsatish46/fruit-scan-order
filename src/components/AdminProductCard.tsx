
import { Edit, Trash2, Eye } from "lucide-react";
import { Product } from "../pages/Index";

interface AdminProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: number) => void;
}

const AdminProductCard = ({ product, onEdit, onDelete }: AdminProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
          {product.weight}
        </div>
        <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          ₹{product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            ₹{product.price}
            <span className="text-sm text-gray-500 font-normal">/pack</span>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(product)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
