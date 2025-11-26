import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'احمد محمد',
    role: 'رائد أعمال تقني',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    content: 'منصة رائعة جداً! وجدت كل ما احتاجه من منتجات رقمية عالية الجودة. الخدمة سريعة والدعم ممتاز.',
    rating: 5,
  },
  {
    id: 2,
    name: 'فاطمة علي',
    role: 'مصممة جرافيك',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    content: 'أفضل منصة للمنتجات الرقمية! الواجهة سهلة الاستخدام والأسعار منافسة جداً.',
    rating: 5,
  },
  {
    id: 3,
    name: 'محمود حسن',
    role: 'مطور ويب',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud',
    content: 'تجربة تسوق رائعة من البداية للنهاية. جودة عالية وتسليم سريع جداً.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/testimonials-bg.jpg)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">آراء عملائنا</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف ما يقوله عملاؤنا عن تجربتهم معنا وكيف ساعدتهم منتجاتنا.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Testimonial Content */}
            <div className="text-center mb-8">
              {/* Avatar */}
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-lime-400"
              />

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < current.rating ? 'fill-lime-400 text-lime-400' : 'text-gray-300'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-gray-700 mb-6 italic">"{current.content}"</p>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">{current.name}</h3>
              <p className="text-gray-600">{current.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={goToPrevious}
                className="p-2 bg-gray-100 hover:bg-lime-400 text-slate-900 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-lime-400 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 bg-gray-100 hover:bg-lime-400 text-slate-900 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
