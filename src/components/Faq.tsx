import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "ما هي المكونات الأساسية في زيوت الأميرات؟",
    answer: "تتكون زيوت الأميرات من مزيج فريد من الزيوت الطبيعية 100% مثل زيت الأرجان، زيت جوز الهند، زيت اللوز، زيت الجوجوبا، وزيت الزيتون. كما تحتوي على فيتامينات E وA المغذية للشعر. جميع المكونات طبيعية ولا تحتوي على مواد كيميائية ضارة أو بارابين."
  },
  {
    id: 2,
    question: "كم مرة يجب استخدام زيت الأميرات؟",
    answer: "للحصول على أفضل النتائج، ننصح باستخدام زيت الأميرات من 2-3 مرات أسبوعياً. يمكن تطبيقه على الشعر الجاف أو الرطب، وتركه لمدة 30 دقيقة على الأقل أو طوال الليل للعلاج العميق، ثم غسله جيداً. للشعر شديد التلف، يمكن استخدامه يومياً خلال الأسابيع الأولى."
  },
  {
    id: 3,
    question: "هل زيوت الأميرات مناسبة لجميع أنواع الشعر؟",
    answer: "نعم، زيوت الأميرات مصممة لتناسب جميع أنواع الشعر - الجاف، الدهني، المتقصف، المجعد، والمصبوغ. تختلف كمية الزيت المستخدمة حسب نوع الشعر، حيث ينصح باستخدام كمية أقل للشعر الدهني وكمية أكبر للشعر الجاف والمتقصف."
  },
  {
    id: 4,
    question: "هل هناك فرق بين زيت الأميرات للكبار وللأطفال؟",
    answer: "نعم، زيت الأميرات للأطفال مصمم خصيصاً ليكون أكثر لطفاً على فروة رأس الأطفال الحساسة، ويحتوي على تركيبة مخففة من الزيوت والفيتامينات. كما أنه لا يسبب الدموع عند ملامسته للعين، ويساعد في تسهيل تصفيف شعر الأطفال. زيت الكبار أكثر تركيزاً ومصمم لمعالجة مشاكل الشعر المختلفة."
  },
  {
    id: 5,
    question: "ما هي مدة صلاحية المنتج؟",
    answer: "مدة صلاحية زيوت الأميرات هي 24 شهراً من تاريخ الإنتاج المدون على العبوة إذا لم يتم فتحها. بعد فتح العبوة، ننصح باستخدام المنتج خلال 12 شهراً للحفاظ على فعاليته. يجب تخزين الزيت في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة."
  },
  {
    id: 6,
    question: "هل توجد آثار جانبية لاستخدام زيوت الأميرات؟",
    answer: "زيوت الأميرات منتج طبيعي وآمن للاستخدام، ونادراً ما يسبب أي آثار جانبية. ومع ذلك، إذا كان لديك بشرة حساسة أو حساسية معروفة لأي من المكونات، ننصح بإجراء اختبار الحساسية على منطقة صغيرة من فروة الرأس قبل الاستخدام الكامل."
  }
];

const Faq: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول منتجات زيوت الأميرات
          </p>
        </div>

        <div className="max-w-3xl mx-auto" dir="rtl">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button 
                className={`w-full text-right p-4 flex justify-between items-center focus:outline-none ${
                  openItems[item.id] ? 'bg-purple-50' : 'bg-white'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-bold text-lg text-gray-800">{item.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${
                    openItems[item.id] ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openItems[item.id] 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;