# Salla SDK & Theme API Reference

## دليل مراجعة APIs Salla والثيم

---

## 🔌 Salla SDK - العمليات الأساسية

### التحقق من توفر SDK

```javascript
// تحقق من توفر Salla SDK
if (window.salla) {
    console.log('Salla SDK is available');
    
    // انتظر حتى يكون SDK جاهز
    window.salla.onReady(() => {
        console.log('Salla SDK is ready');
    });
} else {
    console.log('Salla SDK is not loaded');
}
```

### الحصول على معلومات المتجر

```javascript
// الحصول على معلومات المتجر
const storeName = window.salla.store.name;
const storeUrl = window.salla.store.url;
const storeLogo = window.salla.store.logo;

// الحصول على اللغة والاتجاه
const locale = window.salla.lang(); // 'ar' or 'en'
const direction = window.salla.dir(); // 'rtl' or 'ltr'

// تعيين اللغة على الصفحة
document.documentElement.lang = locale;
document.documentElement.dir = direction;
```

---

## 🛒 عمليات السلة (Cart)

### إضافة منتج إلى السلة

```javascript
// إضافة منتج واحد
window.salla.cart.addItem(productId, quantity)
    .then(response => {
        console.log('Product added:', response);
        showNotification('تم إضافة المنتج بنجاح', 'success');
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('حدث خطأ', 'error');
    });

// مثال: 
// window.salla.cart.addItem(123, 1);
```

### تحديث كمية المنتج

```javascript
window.salla.cart.updateItem(itemId, newQuantity)
    .then(() => {
        console.log('Item updated');
        location.reload(); // تحديث الصفحة
    })
    .catch(error => {
        console.error('Error updating item:', error);
    });
```

### حذف منتج من السلة

```javascript
window.salla.cart.removeItem(itemId)
    .then(() => {
        console.log('Item removed');
        location.reload();
    })
    .catch(error => {
        console.error('Error removing item:', error);
    });
```

### الحصول على بيانات السلة

```javascript
window.salla.cart.get()
    .then(cartData => {
        console.log('Cart items:', cartData.items);
        console.log('Cart total:', cartData.total);
        console.log('Item count:', cartData.items.length);
    });
```

### تطبيق رمز خصم

```javascript
window.salla.cart.applyCoupon(couponCode)
    .then(response => {
        console.log('Discount applied:', response.discount_amount);
        showNotification('تم تطبيق الخصم', 'success');
    })
    .catch(error => {
        console.error('Invalid coupon:', error);
        showNotification('رمز الخصم غير صحيح', 'error');
    });
```

---

## ❤️ المفضلة (Wishlist)

### إضافة/إزالة من المفضلة

```javascript
// تبديل حالة المفضلة
window.salla.wishlist.toggle(productId)
    .then(response => {
        console.log('Wishlist toggled');
        const isAdded = response.added; // true or false
        
        if (isAdded) {
            showNotification('تم الإضافة إلى المفضلة', 'success');
        } else {
            showNotification('تم الحذف من المفضلة', 'success');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### الحصول على قائمة المفضلة

```javascript
window.salla.wishlist.get()
    .then(wishlistItems => {
        console.log('Wishlist items:', wishlistItems);
        console.log('Count:', wishlistItems.length);
    });
```

### التحقق من وجود منتج في المفضلة

```javascript
window.salla.wishlist.has(productId)
    .then(isInWishlist => {
        if (isInWishlist) {
            console.log('Product is in wishlist');
        } else {
            console.log('Product is not in wishlist');
        }
    });
```

---

## 👤 بيانات العميل (Customer)

### الحصول على بيانات العميل

```javascript
window.salla.customer.get()
    .then(customer => {
        console.log('Customer ID:', customer.id);
        console.log('Name:', customer.name);
        console.log('Email:', customer.email);
        console.log('Phone:', customer.phone);
        console.log('Country:', customer.country);
    });
```

### التحقق من تسجيل دخول العميل

```javascript
if (window.salla.customer.isLoggedIn()) {
    console.log('Customer is logged in');
} else {
    console.log('Customer is not logged in');
    // اعادة التوجيه لصفحة تسجيل الدخول
    window.location.href = '/login';
}
```

### الاشتراك في النشرة البريدية

```javascript
window.salla.customer.subscribeNewsletter(email)
    .then(() => {
        console.log('Subscribed successfully');
        showNotification('تم الاشتراك بنجاح', 'success');
    })
    .catch(error => {
        console.error('Subscription error:', error);
        showNotification('حدث خطأ', 'error');
    });
```

---

## 📦 بيانات المنتجات (Products)

### الحصول على تفاصيل المنتج

```javascript
window.salla.product.get(productId)
    .then(product => {
        console.log('Product name:', product.name);
        console.log('Price:', product.price);
        console.log('Description:', product.description);
        console.log('Images:', product.images);
        console.log('In stock:', product.in_stock);
    });
```

### البحث عن منتجات

```javascript
window.salla.product.search({
    query: 'search term',
    category: 'category_id',
    min_price: 100,
    max_price: 1000,
    page: 1,
    per_page: 20
})
.then(results => {
    console.log('Found products:', results.products);
    console.log('Total:', results.total);
});
```

---

## 📍 الفئات (Categories)

### الحصول على قائمة الفئات

```javascript
window.salla.category.list()
    .then(categories => {
        categories.forEach(category => {
            console.log('Category:', category.name);
            console.log('Count:', category.products_count);
            console.log('URL:', category.url);
        });
    });
```

### الحصول على منتجات فئة معينة

```javascript
window.salla.category.getProducts(categoryId)
    .then(products => {
        console.log('Category products:', products);
    });
```

---

## 🛍️ الطلبات (Orders)

### الحصول على قائمة الطلبات

```javascript
window.salla.order.list()
    .then(orders => {
        orders.forEach(order => {
            console.log('Order ID:', order.id);
            console.log('Status:', order.status);
            console.log('Total:', order.total);
            console.log('Date:', order.created_at);
        });
    });
```

### الحصول على تفاصيل طلب

```javascript
window.salla.order.get(orderId)
    .then(order => {
        console.log('Order:', order);
        console.log('Items:', order.items);
        console.log('Shipping:', order.shipping);
    });
```

---

## 🔍 عمليات البحث (Search)

### البحث الشامل

```javascript
window.salla.search.query({
    q: 'search term',
    type: 'products', // products, categories, pages
    limit: 10
})
.then(results => {
    console.log('Results:', results);
});
```

---

## 💳 الدفع (Payments)

### الحصول على طرق الدفع المتاحة

```javascript
window.salla.payment.getMethods()
    .then(methods => {
        methods.forEach(method => {
            console.log('Payment method:', method.name);
            console.log('Type:', method.type);
        });
    });
```

---

## 🎨 Twig Filters & Functions

### Filters المتاحة في Twig

```twig
{# الترجمات #}
{{ 'key.path' | t }}
{{ 'key.path' | t('Default value') }}

{# تنسيق الأسعار #}
{{ product.price | price }}
{{ 100 | price('USD') }}

{# تنسيق التواريخ #}
{{ product.created_at | date('Y-m-d') }}
{{ 'now' | date('H:i:s') }}

{# معالجة النصوص #}
{{ text | truncate(50) }}
{{ text | uppercase }}
{{ text | lowercase }}

{# الخاصية الآمنة #}
{{ user.profile | safe }}

{# الترميز #}
{{ url | url_encode }}
{{ json_data | json_encode }}
```

### Functions المتاحة في Twig

```twig
{# الأصول #}
{{ 'images/logo.png' | asset_url }}
{{ 'css/style.css' | asset_url }}

{# معلومات المتجر #}
{{ store.name }}
{{ store.description }}
{{ store.logo_url }}
{{ store.currency }}

{# معلومات الصفحة #}
{{ page.title }}
{{ page.description }}
{{ page.url }}

{# معلومات العميل #}
{% if customer %}
    {{ customer.name }}
    {{ customer.email }}
{% endif %}

{# معلومات السلة #}
{{ cart.items_count }}
{{ cart.total }}
{{ cart.subtotal }}
```

---

## ✨ Theme Helper Functions

### showNotification

```javascript
// إظهار إشعار (Toast)
showNotification(message, type, duration)

// أمثلة:
showNotification('تم الحفظ بنجاح', 'success', 3000);
showNotification('حدث خطأ', 'error', 3000);
showNotification('هذا تحذير', 'warning', 3000);
showNotification('معلومة مهمة', 'info', 3000);
```

### ThemeConfig

```javascript
// الوصول لإعدادات الثيم
console.log(ThemeConfig.name);      // Theme name
console.log(ThemeConfig.version);   // Version
console.log(ThemeConfig.colors);    // Color scheme
console.log(ThemeConfig.breakpoints); // Breakpoints
```

---

## 🎯 الأحداث (Events)

### الاستماع للأحداث

```javascript
// عند إضافة منتج
window.salla.onAddProductToCart((data) => {
    console.log('Product added:', data);
});

// عند تغيير السلة
window.salla.onCartUpdate((cart) => {
    console.log('Cart updated:', cart);
});

// عند تسجيل دخول العميل
window.salla.onCustomerLogin((customer) => {
    console.log('Customer logged in:', customer);
});

// عند تسجيل خروج العميل
window.salla.onCustomerLogout(() => {
    console.log('Customer logged out');
});
```

---

## 🛡️ الأخطاء الشائعة وحلولها

### الخطأ: SDK غير محمل

```javascript
// ❌ غير صحيح
window.salla.cart.addItem(123, 1); // قد يعطي خطأ

// ✅ صحيح
if (window.salla) {
    window.salla.cart.addItem(123, 1);
}

// أو استخدم onReady
window.salla?.onReady(() => {
    window.salla.cart.addItem(123, 1);
});
```

### الخطأ: Promise غير معالج

```javascript
// ❌ غير صحيح
window.salla.cart.addItem(123, 1);

// ✅ صحيح
window.salla.cart.addItem(123, 1)
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// أو استخدم async/await
async function addToCart() {
    try {
        const result = await window.salla.cart.addItem(123, 1);
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

---

## 📚 موارد إضافية

- [Salla Official Documentation](https://docs.salla.dev/)
- [Salla SDK GitHub](https://github.com/SallaApp/salla-sdk)
- [Twig Documentation](https://twig.symfony.com/)
- [Developer Community](https://t.me/salladev)

---

**Last Updated:** November 26, 2025  
**Version:** 1.0.0
