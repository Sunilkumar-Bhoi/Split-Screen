// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    gsap.from(mobileMenu, { opacity: 0, duration: 0.3 });
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    gsap.to(mobileMenu, { 
        opacity: 0, 
        duration: 0.3,
        onComplete: () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
});

// Close menu when clicking on links
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        gsap.to(mobileMenu, { 
            opacity: 0, 
            duration: 0.3,
            onComplete: () => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });
});