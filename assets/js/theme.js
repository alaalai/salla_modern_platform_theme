// Modern Platform Theme - Main JavaScript File

/**
 * Theme Configuration and Initialization
 */

(function() {
  'use strict';

  // Theme Configuration
  const ThemeConfig = {
    name: 'ثيم المنصة العصرية',
    version: '1.0.0',
    breakpoints: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    },
    colors: {
      primary: '#0F172A',
      accent: '#84CC16',
      background: '#FFFFFF',
      secondary: '#F3F4F6'
    }
  };

  // Initialize Salla SDK
  if (window.salla && typeof window.salla.lang === 'function') {
    document.documentElement.lang = window.salla.lang();
    document.documentElement.dir = window.salla.dir();
  }

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', 
          this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
      });
    }
  }

  /**
   * Add to Cart Functionality
   */
  function initAddToCart() {
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const productId = this.dataset.productId;
        const quantity = this.dataset.quantity || 1;

        try {
          // Add to cart using Salla SDK
          if (window.salla && window.salla.cart) {
            await window.salla.cart.addItem(productId, quantity);
            
            // Show success message
            showNotification('تم إضافة المنتج إلى السلة بنجاح', 'success');
          }
        } catch (error) {
          console.error('Error adding to cart:', error);
          showNotification('حدث خطأ أثناء إضافة المنتج', 'error');
        }
      });
    });
  }

  /**
   * Wishlist Toggle
   */
  function initWishlist() {
    const wishlistButtons = document.querySelectorAll('[data-wishlist-toggle]');

    wishlistButtons.forEach(button => {
      button.addEventListener('click', async function(e) {
        e.preventDefault();

        const productId = this.dataset.productId;

        try {
          if (window.salla && window.salla.wishlist) {
            await window.salla.wishlist.toggle(productId);
            this.classList.toggle('active');
            
            const isActive = this.classList.contains('active');
            showNotification(
              isActive ? 'تم إضافة المنتج إلى المفضلة' : 'تم إزالة المنتج من المفضلة',
              'success'
            );
          }
        } catch (error) {
          console.error('Error toggling wishlist:', error);
          showNotification('حدث خطأ ما', 'error');
        }
      });
    });
  }

  /**
   * Search Functionality
   */
  function initSearch() {
    const searchForm = document.querySelector('[data-search-form]');
    
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = this.querySelector('[data-search-input]').value;
        
        if (query.trim()) {
          window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
      });
    }
  }

  /**
   * Newsletter Subscription
   */
  function initNewsletter() {
    const newsletterForm = document.querySelector('[data-newsletter-form]');

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = this.querySelector('[data-newsletter-email]').value;
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        try {
          submitBtn.disabled = true;
          submitBtn.textContent = 'جاري الاشتراك...';

          // Subscribe using Salla SDK
          if (window.salla && window.salla.customer) {
            await window.salla.customer.subscribeNewsletter(email);
            
            showNotification('تم الاشتراك بنجاح!', 'success');
            this.reset();
          }
        } catch (error) {
          console.error('Newsletter subscription error:', error);
          showNotification('حدث خطأ في الاشتراك', 'error');
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    }
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
          e.preventDefault();
          
          const target = document.querySelector(href);
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Lazy Load Images
   */
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[loading="lazy"]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.removeAttribute('loading');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => observer.observe(img));
    }
  }

  /**
   * Show Notification (Toast Message)
   */
  function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.textContent = message;

    // Add styles if not already in CSS
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '16px 24px',
      borderRadius: '8px',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '9999',
      animation: 'slideInRight 0.3s ease',
      backgroundColor: {
        'success': '#10B981',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': '#3B82F6'
      }[type] || '#3B82F6'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, duration);
  }

  /**
   * Handle Responsive Behavior
   */
  function initResponsive() {
    const handleResize = () => {
      const width = window.innerWidth;
      document.documentElement.dataset.screenSize = 
        width < 640 ? 'xs' :
        width < 768 ? 'sm' :
        width < 1024 ? 'md' :
        width < 1280 ? 'lg' :
        width < 1536 ? 'xl' : '2xl';
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  }

  /**
   * Accessibility - Skip Links
   */
  function initAccessibility() {
    const skipLink = document.querySelector('[href="#main-content"]');
    
    if (skipLink) {
      skipLink.addEventListener('focus', function() {
        this.style.display = 'block';
      });
      
      skipLink.addEventListener('blur', function() {
        this.style.display = '';
      });
    }
  }

  /**
   * Initialize All Features
   */
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFeatures);
    } else {
      initFeatures();
    }
  }

  function initFeatures() {
    // Initialize Salla Events
    if (window.salla) {
      window.salla.onReady(() => {
        console.log('Salla SDK is ready');
      });
    }

    initMobileMenu();
    initAddToCart();
    initWishlist();
    initSearch();
    initNewsletter();
    initSmoothScroll();
    initLazyLoad();
    initResponsive();
    initAccessibility();
  }

  // Start initialization
  init();

  // Export for external use
  window.ThemeConfig = ThemeConfig;
  window.showNotification = showNotification;
})();

/**
 * CSS Animation for notifications
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  /* RTL Support */
  [dir="rtl"] .notification {
    right: auto !important;
    left: 20px !important;
  }

  [dir="rtl"] @keyframes slideInRight {
    from {
      transform: translateX(-400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
