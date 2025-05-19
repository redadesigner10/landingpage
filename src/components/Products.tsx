import React from 'react';
import { Check, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  discountPrice: number;
  imageSrc: string;
  features: string[];
  featuresAr: string[];
  forChildren: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Princesses Oil for Adults",
    nameAr: "زيت الأميرات للكبار",
    description: "Rich formula with natural oils to strengthen and revitalize adult hair",
    descriptionAr: "تركيبة غنية بالزيوت الطبيعية لتقوية وإنعاش شعر الكبار",
    price: 250,
    discountPrice: 199,
    imageSrc: "https://images.pexels.com/photos/3192483/pexels-photo-3192483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["For adult hair", "Deep conditioning", "Anti-frizz", "Natural ingredients"],
    featuresAr: ["لشعر الكبار", "ترطيب عميق", "يمنع التجعد", "مكونات طبيعية"],
    forChildren: false
  },
  {
    id: 2,
    name: "Princesses Oil for Kids",
    nameAr: "زيت الأميرات للأطفال",
    description: "Gentle formula specially designed for children's delicate hair",
    descriptionAr: "تركيبة لطيفة مصممة خصيصًا لشعر الأطفال الرقيق",
    price: 170,
    discountPrice: 139,
    imageSrc: "https://images.pexels.com/photos/4004477/pexels-photo-4004477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["For children's hair", "Gentle formula", "Detangling", "No tears"],
    featuresAr: ["لشعر الأطفال", "تركيبة لطيفة", "يسهل تصفيف الشعر", "لا يسبب دموع"],
    forChildren: true
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">منتجاتنا المميزة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            زيوت طبيعية 100% مصممة خصيصًا للعناية بالشعر وتقويته، متوفرة بتركيبات مختلفة للكبار والأطفال
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.imageSrc} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 font-bold py-1 px-3 rounded-full text-sm">
                  خصم {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                </div>
                {product.forChildren && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white font-medium py-1 px-3 rounded-full text-sm">
                    للأطفال
                  </div>
                )}
              </div>

              <div className="p-6" dir="rtl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{product.nameAr}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.descriptionAr}</p>
                
                <ul className="mb-5 space-y-2">
                  {product.featuresAr.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 space-x-reverse">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 line-through">{product.price} ريال</span>
                    <span className="block text-2xl font-bold text-purple-700">{product.discountPrice} ريال</span>
                  </div>
                  <a 
                    href="#order" 
                    className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-full transition transform hover:scale-105"
                  >
                    اطلب الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;