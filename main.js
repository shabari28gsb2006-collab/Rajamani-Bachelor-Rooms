// Animate sentences on hover (optional bounce)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.colorful-sentence').forEach(span => {
    span.addEventListener('mouseenter', () => {
      span.style.transform = 'scale(1.08)';
    });
    span.addEventListener('mouseleave', () => {
      span.style.transform = '';
    });
  });
});

// 3D Animated Hero Background (animated floating spheres)
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('hero-bg-3d');
  if (!bg) return;
  const canvas = document.createElement('canvas');
  bg.appendChild(canvas);
  let w = window.innerWidth, h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);

  // Sphere properties
  const spheres = Array.from({length: 18}).map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 60 + Math.random() * 60,
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7,
    color: `rgba(${180+Math.random()*60},${180+Math.random()*60},255,0.13)`
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (const s of spheres) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = s.color;
      ctx.shadowColor = '#2563eb';
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.shadowBlur = 0;
      s.x += s.dx;
      s.y += s.dy;
      if (s.x < -s.r) s.x = w + s.r;
      if (s.x > w + s.r) s.x = -s.r;
      if (s.y < -s.r) s.y = h + s.r;
      if (s.y > h + s.r) s.y = -s.r;
    }
    requestAnimationFrame(animate);
  }
  animate();
});

// Smooth scroll for anchor links
// Ensures clicking 'Nearby' or 'Contact' in nav scrolls to the correct section

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId) || document.querySelector(`section.${targetId}`);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});