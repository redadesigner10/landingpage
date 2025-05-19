import React, { useEffect, useRef } from 'react';
import { Leaf, Droplets, Shield, SparkleIcon, UserCheck, Award } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "مكونات طبيعية 100%",
    description: "مستخلص من أفضل الزيوت الطبيعية النقية بدون إضافات كيميائية ضارة",
    icon: <Leaf className="w-6 h-6 text-green-500" />
  },
  {
    id: 2,
    title: "ترطيب عميق",
    description: "يغذي الشعر من الجذور وحتى الأطراف ويمنحه الترطيب العميق الذي يحتاجه",
    icon: <Droplets className="w-6 h-6 text-blue-500" />
  },
  {
    id: 3,
    title: "آمن للاستخدام",
    description: "مناسب لجميع أنواع الشعر وآمن للاستخدام اليومي للكبار والأطفال",
    icon: <Shield className="w-6 h-6 text-purple-500" />
  },
  {
    id: 4,
    title: "يمنع تساقط الشعر",
    description: "يقوي بصيلات الشعر ويحد من تساقطه ويساعد على نمو شعر جديد وصحي",
    icon: <SparkleIcon className="w-6 h-6 text-yellow-500" />
  },
  {
    id: 5,
    title: "نتائج مضمونة",
    description: "نتائج ملحوظة بعد أسابيع قليلة من الاستخدام المنتظم مع ضمان رضا العملاء",
    icon: <UserCheck className="w-6 h-6 text-indigo-500" />
  },
  {
    id: 6,
    title: "منتج حائز على جوائز",
    description: "حاصل على شهادات جودة عالمية وحائز على جوائز في مجال العناية بالشعر",
    icon: <Award className="w-6 h-6 text-red-500" />
  }
];

const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = benefitsRef.current?.querySelectorAll('.benefit-item');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="benefits" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار زيوت الأميرات؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            زيوت الأميرات توفر العديد من الفوائد التي تجعلها الخيار الأمثل للعناية بالشعر
          </p>
        </div>

        <div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="benefit-item bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 opacity-0 translate-y-10 hover:shadow-lg"
              style={{ transitionDelay: `${benefit.id * 100}ms` }}
            >
              <div className="flex items-start space-x-4 space-x-reverse" dir="rtl">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefit-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Benefits;