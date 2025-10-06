// Year in footer
document.getElementById('vxYear').textContent = new Date().getFullYear();

// Mobile burger (future: toggle a drawer if you want)
document.getElementById('vxBurger')?.addEventListener('click', () => {
  alert('Menu coming soon. Focus stays on the hero for now.');
});

// Simple scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vx-in'); });
}, { threshold: 0.12 });

document.querySelectorAll('.vx-animate-up').forEach(el => observer.observe(el));
