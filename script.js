// ===================================
// NAVIGATION FUNCTIONALITY
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportCenter = scrollY + (windowHeight / 2);
    
    // 1. Handle bottom of page strictly
    if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveLink('#contact');
        return;
    }

    // 2. Handle top of page (Home)
    if (scrollY < 100) {
        setActiveLink('#home');
        return;
    }

    // 3. Find section that contains the center of the viewport
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (viewportCenter >= sectionTop && viewportCenter <= sectionTop + sectionHeight) {
            currentSectionId = `#${section.getAttribute('id')}`;
        }
    });

    if (currentSectionId) {
        setActiveLink(currentSectionId);
    }
}

function setActiveLink(id) {
    navLinkItems.forEach(link => {
        if (link.getAttribute('href') === id) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

// Form is now handled by FormSubmit.co
// No custom JavaScript needed - the form will submit naturally
// and redirect to thank-you.html after successful submission

// ===================================
// ANIMATION ON SCROLL
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE
// ===================================

const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// ===================================
// SKILL BARS ANIMATION
// ===================================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const yearElement = document.querySelector('.footer-content p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// FORM VALIDATION
// ===================================

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = 'hsl(0, 85%, 60%)';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--primary)';
    });
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #a050ff; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #55d5d5;');

// ===================================
// PROJECT SLIDER
// ===================================
const projectsSlider = document.getElementById('projectsSlider');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');
const sliderDotsContainer = document.getElementById('sliderDots');

if (projectsSlider) {
    const projectCards = projectsSlider.querySelectorAll('.project-card');
    const gap = 32; // match var(--spacing-md) which is 2rem (approx 32px)

    const createDots = () => {
        sliderDotsContainer.innerHTML = '';
        const cardWidth = projectCards[0].offsetWidth;
        const visibleCards = Math.round(projectsSlider.clientWidth / (cardWidth + gap)) || 1;
        const totalScrollStops = projectCards.length - visibleCards + 1;
        
        // Don't show dots if everything fits
        if (totalScrollStops <= 1) return;

        for (let i = 0; i < totalScrollStops; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                const scrollLeft = i * (cardWidth + gap);
                projectsSlider.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            });
            
            sliderDotsContainer.appendChild(dot);
        }
    };

    const checkScrollability = () => {
        const isScrollable = projectsSlider.scrollWidth > projectsSlider.clientWidth + 5;
        sliderDotsContainer.style.display = isScrollable ? 'flex' : 'none';
        prevProjectBtn.style.display = isScrollable ? 'flex' : 'none';
        nextProjectBtn.style.display = isScrollable ? 'flex' : 'none';
        createDots(); // Recalculate dots on resize/scrollable check
    };

    const updateDots = () => {
        const scrollPosition = projectsSlider.scrollLeft;
        const cardWidth = projectCards[0].offsetWidth;
        const currentIndex = Math.round(scrollPosition / (cardWidth + gap));
        
        const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    projectsSlider.addEventListener('scroll', updateDots);
    window.addEventListener('resize', checkScrollability);
    
    // Next/Prev Buttons with Looping
    nextProjectBtn.addEventListener('click', () => {
        const cardWidth = projectCards[0].offsetWidth;
        const maxScroll = projectsSlider.scrollWidth - projectsSlider.clientWidth;
        
        if (projectsSlider.scrollLeft >= maxScroll - 10) {
            projectsSlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            projectsSlider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
    });
    
    prevProjectBtn.addEventListener('click', () => {
        const cardWidth = projectCards[0].offsetWidth;
        
        // If we're at the start, loop to end
        if (projectsSlider.scrollLeft <= 10) {
            const maxScroll = projectsSlider.scrollWidth - projectsSlider.clientWidth;
            projectsSlider.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            projectsSlider.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        }
    });

    // Initial dot update and scrollability check
    updateDots();
    checkScrollability();
}
