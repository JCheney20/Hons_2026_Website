// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just '#'
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

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

// Observe cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.deliverable-card, .team-card, .highlight-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// HANDLE DISABLED DOWNLOAD ATTEMPTS
// ============================================

document.querySelectorAll('.download-btn.disabled, .card-downloads.disabled .download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create tooltip notification
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Coming soon!';
        tooltip.style.cssText = `
            position: absolute;
            background: var(--color-primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-size: 0.875rem;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        
        // Fade in
        setTimeout(() => tooltip.style.opacity = '1', 10);
        
        // Remove after delay
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }, 2000);
    });
});

// ============================================
// ACTIVE SECTION HIGHLIGHT IN NAVBAR
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--color-teal)';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ============================================
// EMAIL LINK UPDATE (PLACEHOLDER PROTECTION)
// ============================================

// This prevents email harvesting bots. Update with your real email.
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href="mailto:your.email@example.com"]');
    
    // Replace with your actual email when deploying
    const actualEmail = 'your.email@example.com'; // UPDATE THIS
    
    emailLinks.forEach(link => {
        link.setAttribute('href', `mailto:${actualEmail}`);
        if (link.textContent === 'your.email@example.com') {
            link.textContent = actualEmail;
        }
    });
});

// ============================================
// MOBILE MENU TOGGLE (IF NEEDED IN FUTURE)
// ============================================

// Placeholder for mobile menu functionality
// Currently using responsive CSS, but this can be expanded

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cHPC-DRL Scheduler', 'font-size: 24px; font-weight: bold; color: #23373b;');
console.log('%cHonours Research Project 2026', 'font-size: 14px; color: #666;');
console.log('%cUniversity of the Western Cape', 'font-size: 12px; color: #999;');
console.log('%c\nInterested in the code? Check out the GitHub repo!', 'font-size: 12px; color: #10b981;');
console.log('https://github.com/JCheney20');

// ============================================
// VIDEO MODAL CONTROLS
// ============================================

function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    modal.classList.add('active');
    video.play();
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(event) {
    // Only close if clicking outside the video or on the close button
    if (event.target === event.currentTarget || event.target.classList.contains('video-modal-close')) {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('modalVideo');
        
        modal.classList.remove('active');
        video.pause();
        video.currentTime = 0;
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('videoModal');
        if (modal.classList.contains('active')) {
            const video = document.getElementById('modalVideo');
            modal.classList.remove('active');
            video.pause();
            video.currentTime = 0;
            document.body.style.overflow = '';
        }
    }
});
