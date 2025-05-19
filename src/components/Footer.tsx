import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Smartphone, 
  Mail, 
  MapPin,
  ShieldCheck,
  TruckIcon
} from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              زيوت الأميرات هي منتجات طبيعية 100% للعناية بالشعر وتقويته، مصنوعة من أفضل المكونات الطبيعية لتمنحك شعراً صحياً ولامعاً.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div dir="rtl">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">الرئيسية</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition">المنتجات</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition">الفوائد</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition">آراء العملاء</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-white transition">اطلب الآن</a>
              </li>
            </ul>
          </div>
          
          <div dir="rtl">
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 space-x-reverse">
                <Smartphone size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+966 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <Mail size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@princessesoil.com</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
          
          <div dir="rtl">
            <h3 className="text-xl font-bold mb-4">معلومات الشحن</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 space-x-reverse">
                <TruckIcon size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">توصيل سريع لجميع مناطق المملكة</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <ShieldCheck size={18} className="text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">ضمان استرجاع لمدة 14 يوم</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-gray-800 p-4 rounded-lg text-center">
              <h4 className="font-bold mb-2">اشترك في نشرتنا البريدية</h4>
              <p className="text-gray-400 text-sm mb-3">احصل على آخر العروض والتحديثات</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="bg-gray-700 text-white px-3 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-r-lg transition">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 زيوت الأميرات. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400 transition">سياسة الخصوصية</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400 transition">الشروط والأحكام</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400 transition">سياسة الاسترجاع</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;