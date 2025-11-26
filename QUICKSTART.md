# 🚀 دليل البدء السريع - Quick Start Guide

## English Version Below 👇

---

# دليل البدء السريع - ثيم المنصة العصرية

## ✅ المتطلبات الأساسية

- حساب Salla Partners
- حساب GitHub
- معرفة أساسية بـ Twig و CSS

## 🎯 خطوات التثبيت والتشغيل

### الخطوة 1: استنساخ المشروع

```bash
git clone https://github.com/alaalai/salla_modern_platform_theme.git
cd salla_modern_platform_theme
```

### الخطوة 2: تثبيت على Salla Partners

1. اذهب إلى https://salla.partners/
2. انقر على "My Themes"
3. اختر "Import Theme"
4. اختر repository هذا المشروع
5. أكمل خطوات الإعداد

### الخطوة 3: تخصيص الثيم

1. انتظر حتى يتم نشر الثيم على متجرك
2. اذهب إلى "Theme Settings" في لوحة Salla
3. خصص الألوان والإعدادات حسب احتياجاتك

## 🎨 التخصيص الأساسي

### تغيير الألوان

في Salla Partners Theme Settings:

```
اللون الأساسي: #0F172A
لون التمييز: #84CC16
لون الخلفية: #FFFFFF
اللون الثانوي: #F3F4F6
```

### تفعيل/تعطيل الميزات

- شريط الإعلانات
- النشرة البريدية
- شهادات العملاء
- قائمة الرغبات

### إضافة محتوى

1. **الصفحة الرئيسية:** عدّل في CMS
2. **المنتجات:** انسخ من متجر Salla
3. **الصور:** أضف صور عالية الجودة

## 📁 بنية الملفات

```
salla_modern_platform_theme/
├── views/               # قوالب الصفحات
├── assets/              # الأنماط والسكريبتات
├── locales/             # الترجمات
├── twilight.json        # إعدادات الثيم
├── DEVELOPER_GUIDE.md   # دليل المطور
└── README.md            # نظرة عامة
```

## 🔧 التعديلات الشائعة

### تغيير الشعار

عدّل `views/components/header/index.twig`:

```twig
{% if store.logo_url %}
    <img src="{{ store.logo_url }}" alt="{{ store.name }}" class="logo-img">
{% else %}
    <span class="logo-text">{{ store.name }}</span>
{% endif %}
```

### إضافة روابط تنقل

عدّل `views/components/header/index.twig`:

```twig
<ul class="navbar-menu">
    <li><a href="/products">المنتجات</a></li>
    <li><a href="/about">عننا</a></li>
    <li><a href="/contact">التواصل</a></li>
</ul>
```

### تغيير شريط الإعلانات

في Salla Partners Theme Settings، عدّل "announcement_text"

### تخصيص الرسائل

عدّل `locales/ar.json` و `locales/en.json`

## 🎬 أول 5 خطوات

1. ✅ استنسخ المشروع من GitHub
2. ✅ ربط مع Salla Partners
3. ✅ استورد الثيم على متجرك
4. ✅ اختبر على جهازك
5. ✅ خصص حسب علامتك التجارية

## 📱 اختبار على أجهزة مختلفة

```bash
# اختبر على:
- Desktop (Chrome, Firefox, Safari, Edge)
- Tablet (iPad, Android Tablets)
- Mobile (iPhone, Android Phones)
```

## 🐛 استكشاف المشاكل الشائعة

### الثيم لا يظهر؟
- تحقق من ملف twilight.json
- تأكد من تسجيل الثيم على Salla Partners

### الأنماط لا تعمل؟
- امسح cache المتصفح
- استخدم DevTools
- تحقق من اتصالك بالإنترنت

### الترجمات لا تظهر؟
- تحقق من ملفات locales/
- تأكد من استخدام | t filter
- تحقق من مفتاح الترجمة الصحيح

## 📚 موارد إضافية

- 📖 [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - دليل المطور الكامل
- 📖 [DESIGN_PHILOSOPHY.md](./DESIGN_PHILOSOPHY.md) - فلسفة التصميم
- 📖 [Salla Docs](https://docs.salla.dev/) - التوثيق الرسمي

## 💬 هل تحتاج مساعدة؟

- 📧 support@salla.dev
- 💬 https://t.me/salladev
- 🐙 GitHub Issues

---

---

# Quick Start Guide - Modern Platform Theme

## ✅ Requirements

- Salla Partners Account
- GitHub Account
- Basic knowledge of Twig & CSS

## 🎯 Installation Steps

### Step 1: Clone the Repository

```bash
git clone https://github.com/alaalai/salla_modern_platform_theme.git
cd salla_modern_platform_theme
```

### Step 2: Setup on Salla Partners

1. Go to https://salla.partners/
2. Click "My Themes"
3. Choose "Import Theme"
4. Select this repository
5. Complete setup steps

### Step 3: Customize Your Theme

1. Wait for theme publication to your store
2. Go to "Theme Settings" in Salla Dashboard
3. Customize colors and settings

## 🎨 Basic Customization

### Change Colors

In Salla Partners Theme Settings:

```
Primary Color: #0F172A
Accent Color: #84CC16
Background: #FFFFFF
Secondary Color: #F3F4F6
```

### Enable/Disable Features

- Announcement Bar
- Newsletter
- Testimonials
- Wishlist

### Add Content

1. **Homepage:** Edit in CMS
2. **Products:** Import from Salla Store
3. **Images:** Upload high-quality images

## 📁 File Structure

```
salla_modern_platform_theme/
├── views/               # Page templates
├── assets/              # Styles & Scripts
├── locales/             # Translations
├── twilight.json        # Theme settings
├── DEVELOPER_GUIDE.md   # Developer guide
└── README.md            # Overview
```

## 🔧 Common Modifications

### Change Logo

Edit `views/components/header/index.twig`:

```twig
{% if store.logo_url %}
    <img src="{{ store.logo_url }}" alt="{{ store.name }}" class="logo-img">
{% endif %}
```

### Add Navigation Links

Edit `views/components/header/index.twig`:

```twig
<ul class="navbar-menu">
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>
```

### Change Announcement

In Salla Partners, edit "announcement_text" setting

### Customize Messages

Edit `locales/ar.json` and `locales/en.json`

## 🎬 First 5 Steps

1. ✅ Clone from GitHub
2. ✅ Link with Salla Partners
3. ✅ Import theme to your store
4. ✅ Test on your device
5. ✅ Customize for your brand

## 📱 Test on Different Devices

```bash
Test on:
- Desktop (Chrome, Firefox, Safari, Edge)
- Tablet (iPad, Android)
- Mobile (iPhone, Android)
```

## 🐛 Troubleshooting

### Theme not showing?
- Check twilight.json
- Verify Salla Partners registration

### Styles not working?
- Clear browser cache
- Use DevTools
- Check internet connection

### Translations missing?
- Check locales/ files
- Verify | t filter usage
- Check translation keys

## 📚 Resources

- 📖 [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Complete developer guide
- 📖 [DESIGN_PHILOSOPHY.md](./DESIGN_PHILOSOPHY.md) - Design philosophy
- 📖 [Salla Docs](https://docs.salla.dev/) - Official documentation

## 💬 Need Help?

- 📧 support@salla.dev
- 💬 https://t.me/salladev
- 🐙 GitHub Issues

---

**Happy coding! 🎉**

**Version:** 1.0.0  
**Last Updated:** November 26, 2025
