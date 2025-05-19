import React, { useState } from 'react';

interface BeforeAfterImage {
  id: number;
  beforeImage: string;
  afterImage: string;
  description: string;
  period: string;
}

const images: BeforeAfterImage[] = [
  {
    id: 1,
    beforeImage: "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/864107/pexels-photo-864107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "شعر تالف ومتقصف تحول إلى شعر حيوي وصحي",
    period: "بعد ٦ أسابيع من الاستخدام"
  },
  {
    id: 2,
    beforeImage: "https://images.pexels.com/photos/4004471/pexels-photo-4004471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/2703181/pexels-photo-2703181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "شعر جاف وباهت تحول إلى شعر لامع وقوي",
    period: "بعد ٤ أسابيع من الاستخدام"
  },
  {
    id: 3,
    beforeImage: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "شعر خفيف ومتساقط تحول إلى شعر كثيف وقوي",
    period: "بعد ٨ أسابيع من الاستخدام"
  }
];

const BeforeAfter: React.FC = () => {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50
  });

  const handleSliderChange = (id: number, position: number) => {
    setSliderPositions(prev => ({
      ...prev,
      [id]: position
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">قبل وبعد</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            شاهد النتائج المذهلة لاستخدام زيوت الأميرات على شعر عملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((item) => (
            <div key={item.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80 w-full overflow-hidden">
                {/* Before image */}
                <div 
                  className="absolute top-0 left-0 h-full w-full"
                  style={{ backgroundImage: `url(${item.beforeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                
                {/* After image with clip-path */}
                <div 
                  className="absolute top-0 left-0 h-full w-full transition-all duration-300"
                  style={{ 
                    backgroundImage: `url(${item.afterImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    clipPath: `polygon(0 0, ${sliderPositions[item.id]}% 0, ${sliderPositions[item.id]}% 100%, 0 100%)`
                  }}
                ></div>
                
                {/* Slider control */}
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <input 
                    type="range" 
                    min="1" 
                    max="99" 
                    value={sliderPositions[item.id]} 
                    onChange={(e) => handleSliderChange(item.id, parseInt(e.target.value))}
                    className="w-full cursor-pointer z-10 opacity-0"
                  />
                  
                  {/* Slider line */}
                  <div 
                    className="absolute h-full w-1 bg-white pointer-events-none"
                    style={{ left: `${sliderPositions[item.id]}%` }}
                  ></div>
                  
                  {/* Slider handle */}
                  <div 
                    className="absolute w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPositions[item.id]}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="flex">
                      <div className="w-1 h-4 bg-gray-500 transform -translate-x-0.5"></div>
                      <div className="w-1 h-4 bg-gray-500 transform translate-x-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* Before/After labels */}
                <div className="absolute top-2 w-full flex justify-between px-4 text-white text-sm font-bold">
                  <span className="bg-gray-900 bg-opacity-50 rounded-full px-3 py-1">قبل</span>
                  <span className="bg-purple-700 bg-opacity-50 rounded-full px-3 py-1">بعد</span>
                </div>
              </div>
              
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

export default BeforeAfter;