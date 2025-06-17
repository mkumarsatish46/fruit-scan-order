
import { QrCode, Smartphone, ArrowRight, Leaf } from "lucide-react";

interface QRCodeSectionProps {
  onEnterStore: () => void;
}

const QRCodeSection = ({ onEnterStore }: QRCodeSectionProps) => {
  const currentUrl = window.location.href;
  
  // Create a simple QR code placeholder using a QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="w-16 h-16 text-green-600 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Nature's Bounty
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Scan the QR code below with your smartphone to access our premium collection of dry fruits and nuts, 
            or click the button to enter directly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* QR Code */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
              <div className="flex items-center justify-center mb-6">
                <QrCode className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Scan QR Code</h2>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6 inline-block">
                <img
                  src={qrCodeUrl}
                  alt="QR Code to access Nature's Bounty store"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              <div className="flex items-center justify-center text-gray-600">
                <Smartphone className="w-5 h-5 mr-2" />
                <span className="text-sm">Point your camera at the QR code</span>
              </div>
            </div>
            
            {/* Direct Access */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Or Enter Directly
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  <span>Premium quality dry fruits & nuts</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  <span>Organic & naturally sourced</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  <span>Fast delivery & secure payment</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
              
              <button
                onClick={onEnterStore}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                Enter Store
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Share this QR code with friends and family to give them access to our premium dry fruits collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;
