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

});


// الحصول على زر الانتقال إلى الأعلى
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if (scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }

  // تحديث تقدم الدائرة
  const scrolled = (scrollTop / scrollHeight) * 251;
  btn.querySelector("circle").style.strokeDashoffset = 251 - scrolled;
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

