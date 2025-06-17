
import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import QRCodeSection from "../components/QRCodeSection";
import { ShoppingCart, Leaf } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  weight: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Almonds",
    price: 299,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop",
    description: "Rich, crunchy California almonds packed with nutrients",
    weight: "250g"
  },
  {
    id: 2,
    name: "Organic Walnuts",
    price: 399,
    image: "https://images.unsplash.com/photo-1553909114-f3bc2c0b6d8e?w=400&h=300&fit=crop",
    description: "Fresh organic walnuts with omega-3 fatty acids",
    weight: "200g"
  },
  {
    id: 3,
    name: "Medjool Dates",
    price: 249,
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=400&h=300&fit=crop",
    description: "Sweet, soft Medjool dates from premium groves",
    weight: "300g"
  },
  {
    id: 4,
    name: "Dried Apricots",
    price: 199,
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
    description: "Sun-dried Turkish apricots, naturally sweet",
    weight: "250g"
  },
  {
    id: 5,
    name: "Cashew Nuts",
    price: 449,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&h=300&fit=crop",
    description: "Creamy cashews from sustainable farms",
    weight: "200g"
  },
  {
    id: 6,
    name: "Mixed Berries",
    price: 359,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Antioxidant-rich mixed berry blend",
    weight: "150g"
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showQR, setShowQR] = useState(true);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (showQR) {
    return (
      <QRCodeSection onEnterStore={() => setShowQR(false)} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header onCartClick={() => setIsCartOpen(true)} cartItemsCount={getTotalItems()} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-12 h-12 text-green-600 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Nature's Bounty
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium dry fruits and nuts, carefully selected for their quality and taste. 
            Nourish your body with nature's finest offerings.
          </p>
          <button 
            onClick={() => setShowQR(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Show QR Code
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Premium Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;
