
import { ShoppingCart, Leaf } from "lucide-react";

interface HeaderProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

const Header = ({ onCartClick, cartItemsCount }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="w-8 h-8 text-green-600 mr-3" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Nature's Bounty
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">
            Products
          </a>
          <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
            Contact
          </a>
        </nav>

        <button
          onClick={onCartClick}
          className="relative p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
