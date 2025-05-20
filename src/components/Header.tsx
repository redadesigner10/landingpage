import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

         
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-800 py-2 px-4 hover:bg-purple-50 rounded" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
              <a href="#products" className="text-gray-800 py-2 px-4 hover:bg-purple-50 rounded" onClick={() => setIsMenuOpen(false)}>المنتجات</a>
              <a href="#benefits" className="text-gray-800 py-2 px-4 hover:bg-purple-50 rounded" onClick={() => setIsMenuOpen(false)}>الفوائد</a>
              <a href="#testimonials" className="text-gray-800 py-2 px-4 hover:bg-purple-50 rounded" onClick={() => setIsMenuOpen(false)}>آراء العملاء</a>
              <a href="#faq" className="text-gray-800 py-2 px-4 hover:bg-purple-50 rounded" onClick={() => setIsMenuOpen(false)}>الأسئلة الشائعة</a>
              <a 
                href="#order" 
                className="bg-purple-700 text-white py-2 px-4 rounded text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                اطلب الآن
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
