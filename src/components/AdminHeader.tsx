
import { Plus, Package, Users, BarChart3 } from "lucide-react";

interface AdminHeaderProps {
  onAddProduct: () => void;
  onSwitchToCustomer: () => void;
}

const AdminHeader = ({ onAddProduct, onSwitchToCustomer }: AdminHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Package className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-gray-700">
            <BarChart3 className="w-5 h-5 mr-2" />
            <span>Analytics</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users className="w-5 h-5 mr-2" />
            <span>Customers</span>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={onAddProduct}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Product
          </button>
          
          <button
            onClick={onSwitchToCustomer}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Customer View
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
