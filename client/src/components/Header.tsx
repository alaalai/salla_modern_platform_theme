/**
 * Header Component - Modern Platform Theme
 * 
 * Design Philosophy:
 * - Dark blue background (#0F172A) for trust and professionalism
 * - Clean navigation with clear hierarchy
 * - Responsive design for mobile and desktop
 * - Accent color (lime green) for CTAs
 */

import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white py-3 px-4 text-center text-sm">
        <p>🎉 عرض خاص: احصل على خصم 20% على جميع المنتجات الرقمية هذا الأسبوع!</p>
      </div>

      {/* Main Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
              MP
            </div>
            <span className="text-xl font-bold hidden sm:inline">المنصة العصرية</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-lime-400 transition-colors">الرئيسية</a>
            <a href="#" className="hover:text-lime-400 transition-colors">المنتجات</a>
            <a href="#" className="hover:text-lime-400 transition-colors">الفئات</a>
            <a href="#" className="hover:text-lime-400 transition-colors">المدونة</a>
            <a href="#" className="hover:text-lime-400 transition-colors">اتصل بنا</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-lime-400 text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-slate-800 border-t border-white/10">
            <div className="container py-4 space-y-3">
              <a href="#" className="block py-2 hover:text-lime-400 transition-colors">الرئيسية</a>
              <a href="#" className="block py-2 hover:text-lime-400 transition-colors">المنتجات</a>
              <a href="#" className="block py-2 hover:text-lime-400 transition-colors">الفئات</a>
              <a href="#" className="block py-2 hover:text-lime-400 transition-colors">المدونة</a>
              <a href="#" className="block py-2 hover:text-lime-400 transition-colors">اتصل بنا</a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
