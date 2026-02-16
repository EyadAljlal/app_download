const translations = {
    ar: {
        title: "تطبيق المفيد | لطلبات تجار الجملة",
        heroTitle: "أدر طلباتك <br><span style='color: var(--primary)'>بكل سهولة.</span>",
        heroDesc: "تطبيق المفيد هو المنصة المثالية لتجار الجملة المضافين لدينا لإدارة وإضافة طلباتهم بسرعة وكفاءة عالية.",
        appStore: "متجر التطبيقات",
        playStore: "تحميل (APK)",
        feat1Title: "إدارة سريعة",
        feat1Desc: "مصمم لتسريع عملية الطلبات. المفيد سيوفر عليك الوقت ويزيد من كفاءة عملك.",
        feat2Title: "مخصص للتجار",
        feat2Desc: "نظام خاص وحصري لتجار الجملة المسجلين في نظامنا لضمان سلاسة العمليات.",
        feat3Title: "متابعة فورية",
        feat3Desc: "تابع حالة طلباتك في الوقت الفعلي ومن أي مكان عبر تطبيق الهاتف.",
        footer: "&copy; 2026 تطبيق المفيد. جميع الحقوق محفوظة."
    },
    en: {
        title: "Almofeed App | Wholesale Orders",
        heroTitle: "Manage Your <br><span style='color: var(--primary)'>Wholesale Orders.</span>",
        heroDesc: "Almofeed is the dedicated platform for our wholesalers to seamlessly add and manage their orders with high efficiency.",
        appStore: "App Store",
        playStore: "Download (APK)",
        feat1Title: "Rapid Ordering",
        feat1Desc: "Designed for speed. Almofeed saves you time and boosts your business productivity.",
        feat2Title: "Merchant Focused",
        feat2Desc: "An exclusive system for wholesale merchants registered in our network for smooth operations.",
        feat3Title: "Real-time Tracking",
        feat3Desc: "Track your order status in real-time from anywhere via our mobile application.",
        footer: "&copy; 2026 Almofeed App. All rights reserved."
    }

};

function switchLang(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' ? 'rtl' : 'ltr');
    
    document.title = t.title;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-desc').innerText = t.heroDesc;
    document.getElementById('footer-text').innerHTML = t.footer;

    // Data-key translations
    document.querySelectorAll('[data-key="app-store"]').forEach(el => el.innerText = t.appStore);
    document.querySelectorAll('[data-key="play-store"]').forEach(el => el.innerText = t.playStore);
    document.querySelectorAll('[data-key="feat-1-title"]').forEach(el => el.innerText = t.feat1Title);
    document.querySelectorAll('[data-key="feat-1-desc"]').forEach(el => el.innerText = t.feat1Desc);
    document.querySelectorAll('[data-key="feat-2-title"]').forEach(el => el.innerText = t.feat2Title);
    document.querySelectorAll('[data-key="feat-2-desc"]').forEach(el => el.innerText = t.feat2Desc);
    document.querySelectorAll('[data-key="feat-3-title"]').forEach(el => el.innerText = t.feat3Title);
    document.querySelectorAll('[data-key="feat-3-desc"]').forEach(el => el.innerText = t.feat3Desc);
}

// Simple scroll reveal interaction
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };
    
    // Check if there's a stored preference or default to ar
    const savedLang = localStorage.getItem('pref-lang') || 'ar';
    switchLang(savedLang);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add reveal styles to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });

    // Button click feedback for inactive links
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
                e.preventDefault();
                const isAr = document.documentElement.lang === 'ar';
                alert(isAr ? 'هذا الرابط سيكون متاحاً قريباً على متجر التطبيقات.' : 'This link will be available soon on the App Store.');
            }
        });
    });

    // Mockup parallax effect
    const mockup = document.querySelector('.mockup-container');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        
        if (window.innerWidth > 768) {
            const tilt = document.documentElement.dir === 'rtl' ? -5 : 5;
            mockup.style.transform = `rotate(${tilt + x}deg) translateY(${y}px)`;
        }
    });

    // Save preference when switching
    window.switchLang = (lang) => {
        switchLang(lang);
        localStorage.setItem('pref-lang', lang);
    }
});

