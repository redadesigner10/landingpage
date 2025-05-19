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
  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 2: 0 });
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', city: '', email: '' });

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, prev[id] + change) }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateSubtotal = () => products.reduce((sum, p) => sum + (quantities[p.id] * p.discountPrice), 0);
  const calculateDiscount = () => Object.values(quantities).reduce((sum, qty) => sum + qty, 0) >= 2 ? Math.round(calculateSubtotal() * 0.1) : 0;
  const calculateShipping = () => calculateSubtotal() > 300 ? 0 : 30;
  const calculateTotal = () => calculateSubtotal() - calculateDiscount() + calculateShipping();

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const orderedProducts = products.filter(p => quantities[p.id] > 0).map(p => `${p.nameAr} x${quantities[p.id]}`).join(', ');

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
            <form
              action="https://script.google.com/macros/s/AKfycbxVJpWkxydrgOaLIerBC6-fWCP-fzGeLYSecpb9qiXE1inySNGALAA6t_ezNIjTRcPKBQ/exec"
              method="POST"
              target="_blank"
              dir="rtl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">اختر المنتجات</h3>
                  <div className="space-y-4 mb-8">
                    {products.map(product => (
                      <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex items-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="mr-4 flex-1">
                          <h4 className="font-bold text-gray-800">{product.nameAr}</h4>
                          <div className="flex items-center">
                            <span className="text-gray-500 line-through text-sm">{product.price} ريال</span>
                            <span className="mr-2 text-purple-700 font-bold">{product.discountPrice} ريال</span>
                          </div>
                          {product.forChildren && <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">للأطفال</span>}
                        </div>
                        <div className="flex items-center">
                          <button type="button" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center" onClick={() => handleQuantityChange(product.id, -1)} disabled={quantities[product.id] === 0}>
                            <X size={14} />
                          </button>
                          <span className="w-10 text-center font-medium">{quantities[product.id]}</span>
                          <button type="button" className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center" onClick={() => handleQuantityChange(product.id, 1)}>
                            <Check size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات التوصيل</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <input type="hidden" name="products" value={orderedProducts} />
                    <input type="hidden" name="total" value={calculateTotal()} />

                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="الاسم الكامل" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="رقم الهاتف" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="البريد الإلكتروني" className="border border-gray-300 rounded-lg px-4 py-2 md:col-span-2" />
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} required placeholder="المدينة" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <textarea name="address" value={formData.address} onChange={handleInputChange} required placeholder="العنوان التفصيلي" className="border border-gray-300 rounded-lg px-4 py-2 h-24 md:col-span-2" />
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">ملخص الطلب</h3>
                    {totalItems > 0 ? (
                      <>
                        <div className="space-y-2 mb-4">
                          {products.map(product => quantities[product.id] > 0 && (
                            <div key={product.id} className="flex justify-between text-gray-700">
                              <span>{product.nameAr} x{quantities[product.id]}</span>
                              <span>{product.discountPrice * quantities[product.id]} ريال</span>
                            </div>
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
                            <span>{calculateShipping() === 0 ? <span className="text-green-600">مجاني</span> : `${calculateShipping()} ريال`}</span>
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
                      <div className="text-center text-gray-600 my-8">لم تقم بإضافة أي منتجات بعد</div>
                    )}

                    <button
                      type="submit"
                      className={`w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 flex items-center justify-center ${totalItems === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={totalItems === 0}
                    >
                      <ShoppingCart size={20} className="ml-2" />
                      تأكيد الطلب
                    </button>
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
