import React, { useState } from 'react';
import { Check, X, CreditCard, DollarSign, Truck, ShieldCheck, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  discountPrice: number;
  imageSrc: string;
  forChildren: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Princesses Oil for Adults",
    nameAr: "زيت الأميرات للكبار",
    price: 250,
    discountPrice: 199,
    imageSrc: "https://cdn.jsdelivr.net/gh/redadesigner10/photo@7091c7e1f06a3e0e52f30c48287b3eeb297e10cf/1471d1ef-ef48-4b05-85f9-ca16f6cf0b65-removebg-preview.png",
    forChildren: false
  },
  {
    id: 2,
    name: "Princesses Oil for Kids",
    nameAr: "زيت الأميرات للأطفال",
    price: 170,
    discountPrice: 139,
    imageSrc: "https://cdn.jsdelivr.net/gh/redadesigner10/photo@7091c7e1f06a3e0e52f30c48287b3eeb297e10cf/dcd2aed0-0e59-4c05-957d-ecc976baa1c1-removebg-preview.png",
    forChildren: true
  }
];

const Order: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 1,
    2: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    email: ''
  });

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, prev[id] + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSubtotal = () => {
    return products.reduce((sum, product) => {
      return sum + (quantities[product.id] * product.discountPrice);
    }, 0);
  };

  const calculateDiscount = () => {
    const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    if (totalQuantity >= 2) {
      return Math.round(calculateSubtotal() * 0.1); // 10% discount
    }
    return 0;
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 300 ? 0 : 30; // Free shipping over 300
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + calculateShipping();
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const orderedProducts = products
    .filter(p => quantities[p.id] > 0)
    .map(p => `${p.nameAr} x${quantities[p.id]}`)
    .join(', ');

  const payload = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    city: formData.city,
    address: formData.address,
    products: orderedProducts,
    total: calculateTotal(),
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyxNh-jq0heIqxd3h40mtxOTGulAVJ-plmPRDjFeyHNhoBG8z2dqNnidsEu377lzBSQ9w/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result.status === 'success') {
      alert("✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الطلب.");
    } else {
      alert("❌ حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
    }
  } catch (err) {
    alert("❌ خطأ في الاتصال: " + err.message);
  }
};


  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <section id="order" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اطلب الآن</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            احصل على زيوت الأميرات الطبيعية بخصومات حصرية وتوصيل سريع
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="p-4 bg-purple-700 text-white text-center font-bold">
            عرض خاص: اطلب قبل انتهاء العد التنازلي واحصل على خصم إضافي 10% عند طلب عبوتين أو أكثر!
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} dir="rtl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Product selection */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">اختر المنتجات</h3>
                  
                  <div className="space-y-4 mb-8">
                    {products.map((product) => (
                      <div 
                        key={product.id} 
                        className="border border-gray-200 rounded-lg p-4 flex items-center"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={product.imageSrc} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="mr-4 flex-1">
                          <h4 className="font-bold text-gray-800">{product.nameAr}</h4>
                          <div className="flex items-center">
                            <span className="text-gray-500 line-through text-sm">{product.price} ريال</span>
                            <span className="mr-2 text-purple-700 font-bold">{product.discountPrice} ريال</span>
                          </div>
                          {product.forChildren && (
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">للأطفال</span>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          <button 
                            type="button"
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            disabled={quantities[product.id] === 0}
                          >
                            <X size={14} />
                          </button>
                          
                          <span className="w-10 text-center font-medium">
                            {quantities[product.id]}
                          </span>
                          
                          <button 
                            type="button"
                            className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            <Check size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات التوصيل</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div>
                      <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">المدينة</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">العنوان التفصيلي</label>
                      <textarea 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse text-green-600">
                      <Check size={16} className="flex-shrink-0" />
                      <span className="text-sm">الدفع عند الاستلام</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 space-x-reverse text-green-600 mr-6">
                      <Check size={16} className="flex-shrink-0" />
                      <span className="text-sm">توصيل سريع</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 space-x-reverse text-green-600 mr-6">
                      <Check size={16} className="flex-shrink-0" />
                      <span className="text-sm">ضمان استرجاع</span>
                    </div>
                  </div>
                </div>
                
                {/* Order summary */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">ملخص الطلب</h3>
                    
                    {totalItems > 0 ? (
                      <>
                        <div className="space-y-2 mb-4">
                          {products.map((product) => (
                            quantities[product.id] > 0 && (
                              <div key={product.id} className="flex justify-between text-gray-700">
                                <span>{product.nameAr} x{quantities[product.id]}</span>
                                <span>{product.discountPrice * quantities[product.id]} ريال</span>
                              </div>
                            )
                          ))}
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
                          <div className="flex justify-between text-gray-700">
                            <span>المجموع الفرعي</span>
                            <span>{calculateSubtotal()} ريال</span>
                          </div>
                          
                          {calculateDiscount() > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>خصم عند شراء عبوتين أو أكثر</span>
                              <span>- {calculateDiscount()} ريال</span>
                            </div>
                          )}
                          
                          <div className="flex justify-between text-gray-700">
                            <span>رسوم التوصيل</span>
                            <span>
                              {calculateShipping() === 0 
                                ? <span className="text-green-600">مجاني</span>
                                : `${calculateShipping()} ريال`
                              }
                            </span>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4 mb-6">
                          <div className="flex justify-between font-bold text-lg">
                            <span>الإجمالي</span>
                            <span className="text-purple-700">{calculateTotal()} ريال</span>
                          </div>
                        </div>
                        
                        {calculateShipping() > 0 && (
                          <div className="mb-6 text-sm text-gray-600 text-center">
                            أضف منتجات بقيمة {300 - calculateSubtotal()} ريال أو أكثر للحصول على توصيل مجاني
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center text-gray-600 my-8">
                        لم تقم بإضافة أي منتجات بعد
                      </div>
                    )}
                    
                    <button 
                      type="submit" 
                      className={`w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 flex items-center justify-center ${
                        totalItems === 0 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={totalItems === 0}
                    >
                      <ShoppingCart size={20} className="ml-2" />
                      تأكيد الطلب
                    </button>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Truck size={20} className="text-purple-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">توصيل سريع</h4>
                        <p className="text-sm text-gray-600">يصلك خلال 3-5 أيام عمل</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <CreditCard size={20} className="text-purple-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">الدفع عند الاستلام</h4>
                        <p className="text-sm text-gray-600">ادفع بعد استلام المنتج</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <ShieldCheck size={20} className="text-purple-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">ضمان استرجاع</h4>
                        <p className="text-sm text-gray-600">استرجاع خلال 14 يوم إذا لم تكن راضياً</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <DollarSign size={20} className="text-purple-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">خصومات حصرية</h4>
                        <p className="text-sm text-gray-600">خصم 10% عند شراء عبوتين أو أكثر</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
