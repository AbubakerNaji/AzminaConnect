// ===== Mobile Navigation Toggle =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===== Language Toggle (English/Arabic) =====
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'ar';

// Arabic translations object
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'Services': 'Services',
        'About': 'About',
        'Contact': 'Contact',
        // Hero
        'Welcome to the Future': 'Welcome to the Future',
        'Prime Era': 'Prime Era',
        'شركة الازمنة الاولى للاتصالات وتقنية المعلومات': 'Prime Era Communications and Information Technology Company',
        'Where Technology Meets Innovation': 'Where Technology Meets Innovation',
        'Leading the digital transformation with cutting-edge IT solutions. Experience the speed of tomorrow, today.': 'Leading the digital transformation with cutting-edge IT solutions. Experience the speed of tomorrow, today.',
        'Get Started': 'Get Started',
        'Our Services': 'Our Services',
        // Services
        'What We Offer': 'What We Offer',
        'Our Services': 'Our Services',
        'Comprehensive IT solutions tailored to your business needs': 'Comprehensive IT solutions tailored to your business needs',
        'Cloud Solutions': 'Cloud Solutions',
        'Scalable cloud infrastructure for modern businesses': 'Scalable cloud infrastructure for modern businesses',
        'Cybersecurity': 'Cybersecurity',
        'Advanced protection for your digital assets': 'Advanced protection for your digital assets',
        'AI & Automation': 'AI & Automation',
        'Intelligent systems that work for you': 'Intelligent systems that work for you',
        'Software Development': 'Software Development',
        'Custom software solutions built for speed': 'Custom software solutions built for speed',
        'Data Analytics': 'Data Analytics',
        'Transform data into actionable insights': 'Transform data into actionable insights',
        '24/7 Support': '24/7 Support',
        'Round-the-clock technical assistance': 'Round-the-clock technical assistance',
        // About
        'Who We Are': 'Who We Are',
        'About Prime Era': 'About Prime Era',
        'عن شركة الازمنة الاولى': 'About Prime Era',
        'Prime Era stands at the forefront of technological innovation. We combine speed, precision, and cutting-edge solutions to help businesses thrive in the digital age. Our team of experts is dedicated to delivering excellence in every project.': 'Prime Era stands at the forefront of technological innovation. We combine speed, precision, and cutting-edge solutions to help businesses thrive in the digital age. Our team of experts is dedicated to delivering excellence in every project.',
        'شركة الازمنة الاولى للاتصالات وتقنية المعلومات': 'Prime Era Communications and Information Technology Company',
        'Projects': 'Projects',
        'Clients': 'Clients',
        'Satisfaction': 'Satisfaction',
        // Contact
        'Get In Touch': 'Get In Touch',
        'Contact Us': 'Contact Us',
        'Ready to transform your business? Let\'s talk.': 'Ready to transform your business? Let\'s talk.',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Subject': 'Subject',
        'Message': 'Message',
        'Send Message': 'Send Message',
        'Email': 'Email',
        'Phone': 'Phone',
        'Address': 'Address',
        '123 Tech Boulevard, Digital City': '123 Tech Boulevard, Digital City',
        // Footer
        'Leading IT Innovation': 'Leading IT Innovation',
        'Company': 'Company',
        'Legal': 'Legal',
        'Privacy Policy': 'Privacy Policy',
        'Terms of Service': 'Terms of Service',
        '© 2024 Prime Era. All rights reserved.': '© 2024 Prime Era. All rights reserved.',
        '© 2024 شركة الازمنة الاولى للاتصالات وتقنية المعلومات. جميع الحقوق محفوظة.': '© 2024 Prime Era Communications and Information Technology Company. All rights reserved.',
        'PRIME ERA': 'PRIME ERA',
        'IT Solutions': 'IT Solutions',
        'شركة الازمنة الاولى': 'Prime Era',
        'للاتصالات وتقنية المعلومات': 'IT Solutions'
    },
    ar: {
        // Navigation
        'Home': 'الرئيسية',
        'Services': 'الخدمات',
        'About': 'من نحن',
        'Contact': 'اتصل بنا',
        // Hero
        'Welcome to the Future': 'مرحباً بك في المستقبل',
        'Prime Era': 'برايم إيرا',
        'شركة الازمنة الاولى للاتصالات وتقنية المعلومات': 'شركة الازمنة الاولى للاتصالات وتقنية المعلومات',
        'Where Technology Meets Innovation': 'حيث تلتقي التكنولوجيا بالابتكار',
        'Leading the digital transformation with cutting-edge IT solutions. Experience the speed of tomorrow, today.': 'نقود التحول الرقمي بحلول تقنية متطورة. اختبر سرعة الغد، اليوم.',
        'Get Started': 'ابدأ الآن',
        'Our Services': 'خدماتنا',
        // Services
        'What We Offer': 'ما نقدمه',
        'Our Services': 'خدماتنا',
        'Comprehensive IT solutions tailored to your business needs': 'حلول تقنية شاملة مصممة خصيصاً لاحتياجات عملك',
        'Cloud Solutions': 'حلول السحابة',
        'Scalable cloud infrastructure for modern businesses': 'بنية تحتية سحابية قابلة للتوسع للشركات الحديثة',
        'Cybersecurity': 'الأمن السيبراني',
        'Advanced protection for your digital assets': 'حماية متقدمة لأصولك الرقمية',
        'AI & Automation': 'الذكاء الاصطناعي والأتمتة',
        'Intelligent systems that work for you': 'أنظمة ذكية تعمل من أجلك',
        'Software Development': 'تطوير البرمجيات',
        'Custom software solutions built for speed': 'حلول برمجية مخصصة مصممة للسرعة',
        'Data Analytics': 'تحليل البيانات',
        'Transform data into actionable insights': 'حول البيانات إلى رؤى قابلة للتنفيذ',
        '24/7 Support': 'دعم على مدار الساعة',
        'Round-the-clock technical assistance': 'مساعدة تقنية على مدار الساعة',
        // About
        'Who We Are': 'من نحن',
        'About Prime Era': 'عن شركة الازمنة الاولى',
        'عن شركة الازمنة الاولى': 'عن شركة الازمنة الاولى',
        'Prime Era stands at the forefront of technological innovation. We combine speed, precision, and cutting-edge solutions to help businesses thrive in the digital age. Our team of experts is dedicated to delivering excellence in every project.': 'تقف شركة الازمنة الاولى للاتصالات وتقنية المعلومات في طليعة الابتكار التكنولوجي. نجمع بين السرعة والدقة والحلول المتطورة لمساعدة الشركات على الازدهار في العصر الرقمي. فريقنا من الخبراء ملتزم بتقديم التميز في كل مشروع.',
        'شركة الازمنة الاولى للاتصالات وتقنية المعلومات': 'شركة الازمنة الاولى للاتصالات وتقنية المعلومات',
        'Projects': 'مشروع',
        'Clients': 'عميل',
        'Satisfaction': 'رضا',
        // Contact
        'Get In Touch': 'تواصل معنا',
        'Contact Us': 'اتصل بنا',
        'Ready to transform your business? Let\'s talk.': 'هل أنت مستعد لتحويل عملك؟ دعنا نتحدث.',
        'Your Name': 'اسمك',
        'Your Email': 'بريدك الإلكتروني',
        'Subject': 'الموضوع',
        'Message': 'الرسالة',
        'Send Message': 'إرسال الرسالة',
        'Email': 'البريد الإلكتروني',
        'Phone': 'الهاتف',
        'Address': 'العنوان',
        '123 Tech Boulevard, Digital City': 'شارع التقنية 123، المدينة الرقمية',
        // Footer
        'Leading IT Innovation': 'الريادة في الابتكار التقني',
        'Company': 'الشركة',
        'Legal': 'قانوني',
        'Privacy Policy': 'سياسة الخصوصية',
        'Terms of Service': 'شروط الخدمة',
        '© 2024 Prime Era. All rights reserved.': '© 2024 برايم إيرا. جميع الحقوق محفوظة.',
        '© 2024 شركة الازمنة الاولى للاتصالات وتقنية المعلومات. جميع الحقوق محفوظة.': '© 2024 شركة الازمنة الاولى للاتصالات وتقنية المعلومات. جميع الحقوق محفوظة.',
        'PRIME ERA': 'شركة الازمنة الاولى',
        'IT Solutions': 'للاتصالات وتقنية المعلومات',
        'شركة الازمنة الاولى': 'شركة الازمنة الاولى',
        'للاتصالات وتقنية المعلومات': 'للاتصالات وتقنية المعلومات'
    }
};

// Function to update text content based on language
function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update all elements with data-en and data-ar attributes
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update form placeholders
    const formInputs = document.querySelectorAll('.form__input');
    formInputs.forEach(input => {
        const label = input.nextElementSibling;
        if (label && label.classList.contains('form__label')) {
            const labelText = label.getAttribute(`data-${lang}`);
            if (labelText) {
                label.textContent = labelText;
            }
        }
    });
}

// Language toggle event
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
        
        // Update toggle button appearance
        const langEn = langToggle.querySelector('.lang-en');
        const langAr = langToggle.querySelector('.lang-ar');
        if (newLang === 'ar') {
            langEn.style.opacity = '0.5';
            langAr.style.opacity = '1';
        } else {
            langEn.style.opacity = '1';
            langAr.style.opacity = '0.5';
        }
    });
}

// Initialize language
updateLanguage('ar');

// Set initial language toggle button appearance
if (langToggle) {
    const langEn = langToggle.querySelector('.lang-en');
    const langAr = langToggle.querySelector('.lang-ar');
    if (langEn && langAr) {
        langEn.style.opacity = '0.5';
        langAr.style.opacity = '1';
    }
}

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Header Scroll Effect =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        alert(currentLang === 'ar' 
            ? 'شكراً لك! سنتواصل معك قريباً.' 
            : 'Thank you! We\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service__card, .about__text, .contact__form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== Add active class to current nav link =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav__link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);

