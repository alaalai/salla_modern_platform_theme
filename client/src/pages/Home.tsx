import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import { ArrowRight, Zap, Shield, Headphones } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      name: 'دورة تطوير الويب المتقدمة',
      price: 49,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      rating: 5,
      reviews: 128,
      category: 'دورات تعليمية',
    },
    {
      id: '2',
      name: 'قالب متجر إلكتروني احترافي',
      price: 79,
      originalPrice: 149,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      rating: 5,
      reviews: 95,
      category: 'قوالب',
    },
    {
      id: '3',
      name: 'مجموعة أيقونات متقدمة',
      price: 29,
      originalPrice: 59,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop',
      rating: 4,
      reviews: 67,
      category: 'موارد تصميم',
    },
    {
      id: '4',
      name: 'كتاب التسويق الرقمي الشامل',
      price: 39,
      originalPrice: 79,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop',
      rating: 5,
      reviews: 112,
      category: 'كتب إلكترونية',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              منصتك الموثوقة للمنتجات الرقمية
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              اكتشف آلاف المنتجات والخدمات الرقمية من أفضل المبدعين والمتخصصين. كل ما تحتاجه لتطوير مشاريعك في مكان واحد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-lime-500 transition-colors flex items-center justify-center space-x-2 group">
                <span>ابدأ التسوق الآن</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/30 transition-colors border border-white/30">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">لماذا تختار المنصة العصرية؟</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نوفر لك أفضل تجربة تسوق للمنتجات الرقمية مع ضمانات وخدمات عالية الجودة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <Zap size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">سرعة فائقة</h3>
              <p className="text-gray-600">
                تحميل فوري للمنتجات الرقمية بعد الشراء مباشرة دون تأخير.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <Shield size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">آمان مضمون</h3>
              <p className="text-gray-600">
                جميع المعاملات محمية بأحدث تقنيات التشفير والأمان.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mb-6">
                <Headphones size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">دعم 24/7</h3>
              <p className="text-gray-600">
                فريق دعم متخصص جاهز لمساعدتك في أي وقت.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">المنتجات المميزة</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              اختيارنا الأفضل من المنتجات الرقمية الموثوقة والعالية الجودة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 mx-auto group">
              <span>عرض جميع المنتجات</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">جاهز للبدء؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف العملاء الراضين واستمتع بأفضل المنتجات الرقمية.
          </p>
          <button className="bg-lime-400 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-lime-500 transition-colors">
            ابدأ الآن
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
