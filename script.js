// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionei Intersection Observer para lazy loading
const lazyLoad = (targets) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  targets.forEach(target => io.observe(target));
};

document.addEventListener('DOMContentLoaded', () => {
  lazyLoad(document.querySelectorAll('img[data-src]'));
  
  // Navbar scroll effect otimizado
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scrolled');
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 50) {
      navbar.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
  });
});
