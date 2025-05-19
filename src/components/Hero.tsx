import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content */}
          <div 
            className={`w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-right md:pr-10" dir="rtl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                اكتشفي سر 
                <span className="text-purple-700"> الشعر المثالي </span>
                مع زيوت الأميرات الطبيعية
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                زيوت مستخلصة من أفضل المكونات الطبيعية لعلاج وتقوية الشعر، مناسبة للكبار والأطفال
              </p>

              <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-purple-500 mb-8" dir="rtl">
                <h3 className="font-bold text-lg text-gray-800 mb-2">عرض محدود لفترة محدودة!</h3>
                <p className="text-gray-600 mb-3">احصل على خصم 25% عند طلب عبوتين أو أكثر</p>
                <CountdownTimer />
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                <a 
                  href="#order" 
                  className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center"
                >
                  <span>اطلب الآن</span>
                  <ChevronRight className="mr-2" size={20} />
                </a>
                <a 
                  href="#products" 
                  className="bg-transparent hover:bg-purple-50 text-purple-700 border border-purple-300 text-lg px-8 py-3 rounded-full transition text-center"
                >
                  تعرف على المنتجات
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
              
              <div className="relative bg-white p-4 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1tzsGYDLgNgZnL9M-q9F4wvV1pcl9wgiL?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Beautiful hair result" 
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className="absolute bottom-8 left-0 bg-purple-700 text-white py-2 px-4 rounded-r-full shadow-lg">
                  <span className="font-bold">النتائج المثالية تبدأ من هنا</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 right-10 bg-white rounded-lg shadow-lg p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-500 hidden md:block">
              <div className="flex items-center space-x-3 space-x-reverse" dir="rtl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">أكثر من 10,000 عميل سعيد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
