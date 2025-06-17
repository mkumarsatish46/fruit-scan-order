
import { X, Minus, Plus, ShoppingBag, Receipt } from "lucide-react";
import { CartItem } from "../pages/Index";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  totalPrice: number;
}

const Cart = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity, totalPrice }: CartProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <ShoppingBag className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some delicious dry fruits!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.weight}</p>
                        <p className="font-bold text-amber-600">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-gray-800 min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="font-bold text-gray-800">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Bill Summary - Enhanced */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
              {/* Bill Header */}
              <div className="px-6 py-4 border-b border-amber-200">
                <div className="flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-amber-600 mr-2" />
                  <h3 className="text-lg font-bold text-amber-800">Bill Summary</h3>
                </div>
              </div>
              
              {/* Bill Details */}
              <div className="px-6 py-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})</span>
                  <span>₹{totalPrice}</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                
                <div className="border-t border-amber-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl font-bold text-amber-600">₹{totalPrice}</span>
                  </div>
                </div>
              </div>
              
              {/* Payment Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  Pay ₹{totalPrice}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Secure payment • Free delivery • 100% guarantee
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
