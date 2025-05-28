
// Smooth counter animation using requestAnimationFrame
function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.floor(progress * target) + '+';
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// Trigger animation and fade-in when stats in view
document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('stats');
  const stats = Array.from(document.querySelectorAll('.stats-grid .stat'));
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // Animate counters
      animateCounter('clients', 10, 1000);
      animateCounter('years', 5, 1000);
      animateCounter('reels', 100, 1200);
      animateCounter('creatives', 528, 1500);
      // Fade-in items
      stats.forEach(stat => stat.classList.add('fade-in-up'));
      observer.unobserve(section);
    }
  }, { threshold: 0.3 });
  observer.observe(section);
});
