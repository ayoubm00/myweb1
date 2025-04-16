document.addEventListener('DOMContentLoaded', function() {
    // إظهار شريط التنقل على الأجهزة المحمولة
    const navbar = document.querySelector('.navbar');

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    }

    // التحقق عند التحميل وعند تغيير حجم النافذة
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // تأثيرات الظهور عند التمرير
    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // تنعيم التمرير للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // إرسال النموذج
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // هنا يمكنك إضافة كود إرسال النموذج
            alert('تم استلام رسالتك، شكراً لتواصلك معي!');
            contactForm.reset();
        });
    }
});