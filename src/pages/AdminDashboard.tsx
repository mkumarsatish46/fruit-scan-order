
import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminProductCard from "../components/AdminProductCard";
import ProductForm from "../components/ProductForm";
import { Product } from "./Index";
import { Package } from "lucide-react";

interface AdminDashboardProps {
  products: Product[];
  onAddProduct: (product: Omit<Product, 'id'>) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
  onSwitchToCustomer: () => void;
}

const AdminDashboard = ({ 
  products, 
  onAddProduct, 
  onEditProduct, 
  onDeleteProduct, 
  onSwitchToCustomer 
}: AdminDashboardProps) => {
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <AdminHeader 
        onAddProduct={() => setIsProductFormOpen(true)}
        onSwitchToCustomer={onSwitchToCustomer}
      />
      
      {/* Dashboard Stats */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Products</p>
                  <p className="text-3xl font-bold text-gray-800">{products.length}</p>
                </div>
                <Package className="w-12 h-12 text-blue-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Avg. Price</p>
                  <p className="text-3xl font-bold text-gray-800">
                    ₹{products.length > 0 ? Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length) : 0}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">₹</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Categories</p>
                  <p className="text-3xl font-bold text-gray-800">6</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">#</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Management */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Product Inventory
            </h2>
            <button
              onClick={() => setIsProductFormOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Add New Product
            </button>
          </div>
          
          {products.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No Products Yet</h3>
              <p className="text-gray-500 mb-8">Start building your inventory by adding your first product.</p>
              <button
                onClick={() => setIsProductFormOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Add First Product
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <AdminProductCard
                  key={product.id}
                  product={product}
                  onEdit={onEditProduct}
                  onDelete={onDeleteProduct}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Form Modal */}
      <ProductForm
        isOpen={isProductFormOpen}
        onClose={() => setIsProductFormOpen(false)}
        onAddProduct={onAddProduct}
      />
    </div>
  );
};

export default AdminDashboard;
