import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "سارة محمد",
    role: "أم لثلاثة أطفال",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "بعد تجربة العديد من المنتجات لشعر أطفالي، أخيرًا وجدت زيت الأميرات! شعر أطفالي أصبح ناعمًا وسهل التصفيف، والأفضل أنه منتج طبيعي لا يسبب أي حساسية.",
    rating: 5
  },
  {
    id: 2,
    name: "ليلى أحمد",
    role: "مدونة عناية بالشعر",
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "كمدونة متخصصة في العناية بالشعر، جربت مئات المنتجات، وأستطيع القول بثقة أن زيت الأميرات من أفضل المنتجات الطبيعية التي استخدمتها. النتائج مذهلة!",
    rating: 5
  },
  {
    id: 3,
    name: "نورة سعيد",
    role: "مصففة شعر محترفة",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "أنصح جميع زبائني باستخدام زيت الأميرات، فهو يساعد في إصلاح الشعر التالف وإعادة الحيوية واللمعان. المكونات الطبيعية تجعله الخيار الأفضل.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آلاف العملاء السعداء يثقون بمنتجات زيوت الأميرات للعناية بشعرهم
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            
            {/* Quote mark decoration */}
            <div className="absolute top-10 right-10 text-9xl text-purple-100 font-serif">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-right" dir="rtl">
                  <div className="flex mb-3 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={`${
                          i < testimonials[activeIndex].rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    {testimonials[activeIndex].quote}
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-purple-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white hover:bg-purple-50 text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-purple-700 w-8' 
                    : 'bg-purple-200 hover:bg-purple-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
            <button 
              onClick={nextTestimonial}
              className="bg-white hover:bg-purple-50 text-purple-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;