// ====================================
// ATTIMO WEBSITE - ANIMATIONS GSAP
// ====================================

function setupMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) {
        return;
    }

    const closeMenu = () => {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                return;
            }

            event.preventDefault();
            if (window.gsap && window.ScrollToPlugin) {
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 90,
                    },
                    ease: 'power2.inOut',
                });
            } else {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function setupCustomCursor(reduceMotion) {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !supportsFinePointer || window.innerWidth <= 1024) {
        return;
    }

    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursor.style.backgroundColor = '#A8B89A';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.left = '0px';
    cursor.style.top = '0px';
    cursor.style.border = '2px solid #A8B89A';
    cursor.style.boxShadow = '0 0 0 0px rgba(196, 168, 130, 0.2)';
    document.body.appendChild(cursor);
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', (event) => {
        gsap.to(cursor, {
            duration: 0.08,
            x: event.clientX,
            y: event.clientY,
            overwrite: 'auto',
            ease: 'none',
        });

        const hoverElement = document.elementFromPoint(event.clientX, event.clientY);
        if (hoverElement && (hoverElement.tagName === 'A' || hoverElement.classList.contains('btn'))) {
            gsap.to(cursor, {
                duration: 0.18,
                scale: 1.45,
                boxShadow: '0 0 0 8px rgba(196, 168, 130, 0.2)',
            });
        } else {
            gsap.to(cursor, {
                duration: 0.18,
                scale: 1,
                boxShadow: '0 0 0 0px rgba(196, 168, 130, 0.2)',
            });
        }
    });
}

function setupGsapAnimations(reduceMotion) {
    if (!window.gsap || reduceMotion) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const heroImages = document.querySelectorAll('.hero-image img');
    heroImages.forEach((image) => {
        const hero = image.closest('.hero');
        if (!hero) {
            return;
        }
        gsap.to(image, {
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom center',
                scrub: 0.5,
            },
            y: 48,
            ease: 'none',
        });
    });

    const cards = document.querySelectorAll('.workshop-card, .workshop-type-card, .value-card, .testimonial-card, .calendar-item, .gallery-item');
    cards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 84%',
                toggleActions: 'play none none none',
            },
            duration: 0.6,
            opacity: 0,
            y: 26,
            scale: 0.97,
            ease: 'power2.out',
        });

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.25,
                y: -5,
                boxShadow: '0 18px 40px rgba(26, 26, 26, 0.14)',
                ease: 'power2.out',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.25,
                y: 0,
                boxShadow: '0 2px 8px rgba(26, 26, 26, 0.08)',
                ease: 'power2.out',
            });
        });
    });

    document.querySelectorAll('h2, h3').forEach((heading) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            duration: 0.55,
            opacity: 0,
            x: -20,
            ease: 'power3.out',
        });
    });

    document.querySelectorAll('section > .container > p:first-child').forEach((paragraph) => {
        gsap.from(paragraph, {
            scrollTrigger: {
                trigger: paragraph,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            duration: 0.55,
            opacity: 0,
            y: 14,
            ease: 'power2.out',
        });
    });

    document.querySelectorAll('img:not(.hero-image img)').forEach((image) => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            duration: 0.65,
            opacity: 0,
            scale: 0.96,
            ease: 'power2.out',
        });
    });

    document.querySelectorAll('.faq-item').forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            duration: 0.5,
            opacity: 0,
            x: -18,
            ease: 'power2.out',
        });

        item.addEventListener('toggle', function onToggle() {
            gsap.to(item, {
                duration: 0.25,
                backgroundColor: this.open ? 'rgba(196, 168, 130, 0.05)' : '#F1E8DE',
                ease: 'power1.out',
            });
        });
    });

    document.querySelectorAll('.benefits-list li, .partners li, .hours li, .info-box li').forEach((item, index) => {
        const parentSection = item.closest('section');
        if (!parentSection) {
            return;
        }
        gsap.from(item, {
            scrollTrigger: {
                trigger: parentSection,
                start: 'top 84%',
                toggleActions: 'play none none none',
            },
            duration: 0.45,
            opacity: 0,
            x: -16,
            delay: index * 0.04,
            ease: 'power2.out',
        });
    });

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            gsap.to(navbar, {
                duration: 0.25,
                boxShadow: window.scrollY > 60 ? '0 8px 24px rgba(26, 26, 26, 0.12)' : '0 2px 8px rgba(26, 26, 26, 0.08)',
                ease: 'power1.inOut',
            });
        });
    }

    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.style.width = '16px';
            ripple.style.height = '16px';
            ripple.style.background = 'rgba(255,255,255,0.48)';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;
            ripple.style.transform = 'translate(-50%, -50%)';

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.55,
                width: '180px',
                height: '180px',
                opacity: 0,
                onComplete: () => ripple.remove(),
            });
        });
    });

    document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach((input) => {
        input.addEventListener('focus', function onFocus() {
            gsap.to(this, {
                duration: 0.2,
                borderColor: '#C4A882',
                boxShadow: '0 0 0 3px rgba(196, 168, 130, 0.1)',
                ease: 'power1.out',
            });
        });

        input.addEventListener('blur', function onBlur() {
            gsap.to(this, {
                duration: 0.2,
                borderColor: '#D4C5B0',
                boxShadow: '0 0 0 0 rgba(196, 168, 130, 0.1)',
                ease: 'power1.out',
            });
        });
    });
}

function trackEvent(eventName, details) {
    const payload = {
        event: eventName,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        ...details,
    };

    if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
    }

    try {
        const key = 'attimo_tracking_events';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(payload);
        localStorage.setItem(key, JSON.stringify(existing.slice(-80)));
    } catch (error) {
        // Keep tracking non-blocking for privacy mode and storage restrictions.
    }
}

function setupConversionTracking() {
    document.querySelectorAll('[data-track]').forEach((element) => {
        element.addEventListener('click', () => {
            trackEvent(element.getAttribute('data-track') || 'interaction', {
                label: element.getAttribute('data-track-label') || element.textContent.trim(),
                target: element.getAttribute('href') || '',
            });
        });
    });

    document.querySelectorAll('form[data-track-form]').forEach((form) => {
        form.addEventListener('submit', () => {
            trackEvent('form_submit', {
                formName: form.getAttribute('data-track-form'),
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setupMobileMenu();
    setupSmoothAnchors();
    setupCustomCursor(reduceMotion);
    setupGsapAnimations(reduceMotion);
    setupConversionTracking();
});

if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}
