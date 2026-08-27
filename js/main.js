// ============================================
// HPC-DRL Scheduling — site interactions
// ============================================

// Scroll-reveal hides content until it enters the viewport, so the page must
// only opt into that once scripting is confirmed to be running.
document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// SMOOTH SCROLLING FOR IN-PAGE NAV LINKS
// (offsets for the fixed navbar height)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    });
});

// ============================================
// NAVBAR SCROLL STATE
// The masthead already carries a 2px ink rule, so being stuck is signalled
// with a class the stylesheet owns rather than an injected shadow.
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('is-stuck', window.scrollY > 40);
}, { passive: true });

// ============================================
// SCROLL-REVEAL ANIMATIONS
// CSS defines .reveal / .reveal.is-visible
// ============================================

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// ANIMATED STAT COUNTERS
// Triggers once when the stat strip scrolls in
// ============================================

function animateCount(el) {
    const target = parseInt(el.dataset.countTarget, 10);
    const suffix = el.dataset.countSuffix || '';

    if (prefersReducedMotion || isNaN(target)) {
        el.textContent = `${isNaN(target) ? '' : target}${suffix}`;
        return;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic for a snappy settle
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-value[data-count-target]').forEach(animateCount);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

const statStrip = document.querySelector('.hero-stats');
if (statStrip) statObserver.observe(statStrip);

// ============================================
// "COMING SOON" TOOLTIP FOR DISABLED DOWNLOADS
// ============================================

document.querySelectorAll('.download-btn.disabled, .card-downloads.disabled .download-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const tooltip = document.createElement('div');
        tooltip.className = 'tip';
        tooltip.textContent = 'Coming soon';
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;

        requestAnimationFrame(() => tooltip.classList.add('is-shown'));
        setTimeout(() => {
            tooltip.classList.remove('is-shown');
            setTimeout(() => tooltip.remove(), 300);
        }, 1600);
    });
});

// ============================================
// VIDEO MODAL
// ============================================

function openVideoModal(trigger) {
    const modal = document.querySelector('#videoModal');
    const video = document.querySelector('#modalVideo');
    const downloadBtn = modal.querySelector('.video-download-btn');
    const src = trigger.dataset.videoSrc;

    video.src = src;
    downloadBtn.href = src;

    modal.classList.add('active');
    video.load();
    video.play();
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('video-modal-close')) {
        stopModalVideo();
    }
}

function stopModalVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    modal.classList.remove('active');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = '';
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        const modal = document.getElementById('videoModal');
        if (modal.classList.contains('active')) stopModalVideo();
    }
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%cHPC-DRL Scheduling', 'font-size: 22px; font-weight: 800; color: #2739c4;');
console.log('%cHonours Research Project · 2026 · University of the Western Cape', 'font-size: 13px; color: #6b7280;');
console.log('%cInterested in the code? → https://github.com/JCheney20', 'font-size: 12px; color: #2739c4;');
