import React from 'react';

interface BeforeAfterImage {
  id: number;
  afterImage: string;
  description: string;
  period: string;
}

const images: BeforeAfterImage[] = [
  {
    id: 1,
    afterImage: "https://cdn.jsdelivr.net/gh/redadesigner10/photo@921da29f9249892634d28ec795fb949ab3674b19/1747698114725.jpg",
    description: "شعر تالف ومتقصف تحول إلى شعر حيوي وصحي",
    period: "بعد ٦ أسابيع من الاستخدام"
  },
  {
    id: 2,
    afterImage: "https://cdn.jsdelivr.net/gh/redadesigner10/photo@921da29f9249892634d28ec795fb949ab3674b19/1747698869698.jpg",
    description: "شعر جاف وباهت تحول إلى شعر لامع وقوي",
    period: "بعد ٤ أسابيع من الاستخدام"
  },
  {
    id: 3,
    afterImage: "https://cdn.jsdelivr.net/gh/redadesigner10/photo@921da29f9249892634d28ec795fb949ab3674b19/1747698114725.jpg",
    description: "شعر خفيف ومتساقط تحول إلى شعر كثيف وقوي",
    period: "بعد ٨ أسابيع من الاستخدام"
  }
];

const AfterOnly: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">بعد الاستخدام</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            شاهد النتائج المذهلة لاستخدام زيوت الأميرات على شعر عملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="relative h-80 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.afterImage})` }}
              ></div>
              <div className="p-4 text-center" dir="rtl">
                <h3 className="font-bold text-gray-800 text-lg mb-1">{item.description}</h3>
                <p className="text-purple-600 text-sm">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterOnly;
