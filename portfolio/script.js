// Ambient Cursor Glow Movement
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Smooth Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact Form Interactive Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
        btn.style.background = 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)';
        btn.style.opacity = '1';
        this.reset();
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'var(--primary-gradient)';
        }, 4000);
    }, 1500);
});