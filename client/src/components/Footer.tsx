/**
 * Footer Component - Modern Platform Theme
 * 
 * Design Philosophy:
 * - Dark blue background matching header for visual consistency
 * - Organized information architecture with clear sections
 * - Social media integration
 * - Newsletter subscription CTA
 */

import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h3>
          <p className="text-gray-300 mb-6">احصل على أحدث العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400"
            />
            <button className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
                MP
              </div>
              <h4 className="text-lg font-bold">المنصة العصرية</h4>
            </div>
            <p className="text-gray-400 text-sm">
              منصة متخصصة في بيع المنتجات الرقمية والخدمات الإبداعية للشباب والمحترفين.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">المنتجات</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">الفئات</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">المدونة</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">تابعنا</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-400 hover:text-slate-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-400 hover:text-slate-900 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-400 hover:text-slate-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-lime-400 hover:text-slate-900 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 المنصة العصرية. جميع الحقوق محفوظة.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-lime-400 transition-colors">سياسة الخصوصية</a>
              <span>|</span>
              <a href="#" className="hover:text-lime-400 transition-colors">شروط الاستخدام</a>
              <span>|</span>
              <a href="#" className="hover:text-lime-400 transition-colors">سياسة الكوكيز</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
