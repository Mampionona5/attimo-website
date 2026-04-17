// ====================================
// ATTIMO WEBSITE - ANIMATIONS GSAP
// ====================================

// Enregistrer ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SCROLL PARALLAXE =====
    const heroImages = document.querySelectorAll('.hero-image img');
    if (heroImages.length > 0) {
        heroImages.forEach((img) => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img.closest('.hero'),
                    start: 'top top',
                    end: 'bottom center',
                    scrub: 0.5,
                    markers: false,
                },
                y: 50,
                ease: 'none'
            });
        });
    }

    // ===== ANIMATIONS DES CARTES (Staggered Entry) =====
    // Workshop cards
    const workshopCards = document.querySelectorAll('.workshop-card, .workshop-type-card, .value-card, .testimonial-card, .calendar-item, .gallery-item');
    
    workshopCards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            duration: 0.6,
            opacity: 0,
            y: 30,
            rotation: 2,
            scale: 0.95,
            ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        });

        // Hover effect sur les cartes
        card.addEventListener('mouseenter', function() {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.05,
                boxShadow: '0 16px 40px rgba(26, 26, 26, 0.16)',
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 2px 8px rgba(26, 26, 26, 0.08)',
                ease: 'power2.out'
            });
        });
    });

    // ===== ANIMATIONS DES TITRES =====
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            duration: 0.7,
            opacity: 0,
            x: -20,
            ease: 'power3.out'
        });
    });

    // ===== ANIMATIONS DES PARAGRAPHES =====
    const paragraphs = document.querySelectorAll('section > .container > p:first-child');
    paragraphs.forEach((para) => {
        gsap.from(para, {
            scrollTrigger: {
                trigger: para,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            duration: 0.7,
            opacity: 0,
            y: 15,
            ease: 'power2.out',
            delay: 0.1
        });
    });

    // ===== ANIMATIONS DES IMAGES (sauf héros) =====
    const allImages = document.querySelectorAll('img:not(.hero-image img)');
    allImages.forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            duration: 0.8,
            opacity: 0,
            scale: 0.9,
            ease: 'power2.out'
        });
    });

    // ===== HOVER EFFECTS SUR LES LIENS =====
    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.2,
                color: '#C4A882',
                ease: 'power1.out'
            });
        });

        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.2,
                color: 'inherit',
                ease: 'power1.out'
            });
        });
    });

    // ===== BOUTONS - ANIMATION AU CLIC =====
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            // Ripple effect
            const x = e.clientX - this.offsetLeft;
            const y = e.clientY - this.offsetTop;
            
            const ripple = document.createElement('span');
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255,255,255,0.5)';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.transform = 'translate(-50%, -50%)';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.6,
                width: '200px',
                height: '200px',
                opacity: 0,
                onComplete: function() {
                    ripple.remove();
                }
            });
        });
    });

    // ===== CURSEUR PERSONNALISÉ =====
    const customCursor = createCustomCursor();
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(customCursor, {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY,
            overwrite: 'auto',
            ease: 'none'
        });

        // Changement de taille au hover des liens/boutons
        const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoverElement && (hoverElement.tagName === 'A' || hoverElement.classList.contains('btn'))) {
            gsap.to(customCursor, {
                duration: 0.2,
                scale: 1.5,
                boxShadow: '0 0 0 8px rgba(196, 168, 130, 0.2)'
            });
        } else {
            gsap.to(customCursor, {
                duration: 0.2,
                scale: 1,
                boxShadow: '0 0 0 0px rgba(196, 168, 130, 0.2)'
            });
        }
    });

    // ===== NAVBAR - ANIMATION AU SCROLL =====
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            gsap.to(navbar, {
                duration: 0.3,
                boxShadow: '0 8px 24px rgba(26, 26, 26, 0.12)',
                ease: 'power1.inOut'
            });
        } else {
            gsap.to(navbar, {
                duration: 0.3,
                boxShadow: '0 2px 8px rgba(26, 26, 26, 0.08)',
                ease: 'power1.inOut'
            });
        }
    });

    // ===== COUNTER ANIMATIONS (pour nombres, si présents) =====
    const counterElements = document.querySelectorAll('[data-counter]');
    counterElements.forEach((el) => {
        const target = parseInt(el.textContent);
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            duration: 2,
            textContent: 0,
            snap: { textContent: 1 },
            ease: 'power2.out',
            onUpdate: function() {
                el.textContent = Math.round(parseInt(el.textContent)).toString();
            }
        });
    });

    // ===== ANIMATIONS DES LISTES (FAQ) =====
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            duration: 0.5,
            opacity: 0,
            x: -20,
            ease: 'power2.out'
        });

        item.addEventListener('toggle', function() {
            gsap.to(item, {
                duration: 0.3,
                backgroundColor: this.open ? 'rgba(196, 168, 130, 0.05)' : 'var(--color-light)',
                ease: 'power1.out'
            });
        });
    });

    // ===== ANIMATIONS DU HERO AU CHARGEMENT =====
    // Déjà gérées par les animations CSS du .hero-title, .hero-subtitle, .hero-description

    // ===== STAGGERED LIST ANIMATIONS =====
    const listItems = document.querySelectorAll('.benefits-list li, .partners li, .hours li, .info-box li');
    listItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item.closest('section'),
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            duration: 0.5,
            opacity: 0,
            x: -20,
            ease: 'power2.out',
            delay: index * 0.05
        });
    });

    // ===== SCROLL TO TOP SMOOTH =====
    const links_internal = document.querySelectorAll('a[href^="#"]');
    links_internal.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // ===== FORM FOCUS ANIMATIONS =====
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    formInputs.forEach((input) => {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                duration: 0.2,
                borderColor: '#C4A882',
                boxShadow: '0 0 0 3px rgba(196, 168, 130, 0.1)',
                ease: 'power1.out'
            });
        });

        input.addEventListener('blur', function() {
            gsap.to(this, {
                duration: 0.2,
                borderColor: '#D4C5B0',
                boxShadow: '0 0 0 0px rgba(196, 168, 130, 0.1)',
                ease: 'power1.out'
            });
        });
    });
});

// ===== FONCTION CURSEUR PERSONNALISÉ =====
function createCustomCursor() {
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
    cursor.style.boxShadow = '0 0 0 0px rgba(196, 168, 130, 0.2)';
    cursor.style.border = '2px solid #A8B89A';
    document.body.appendChild(cursor);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return cursor;
}

// ===== PRELOAD ANIMATIONS - Page Load =====
// Animation du body désactivée pour éviter les conflits avec le héros

// ===== SMOOTH SCROLL BEHAVIOR (Fallback) =====
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}

console.log('✨ Attimo animations loaded');
