// Shared particles configuration for all pages
function initParticles(containerId, intensity) {
  intensity = intensity || 'medium';
  var counts = { light: 15, medium: 30, heavy: 50 };
  var count = counts[intensity] || 30;

  particlesJS(containerId, {
    particles: {
      number: { value: count, density: { enable: true, value_area: 800 } },
      color: { value: ['#e8a0b4', '#c0392b', '#7b2d8b'] },
      shape: {
        type: 'char',
        character: { value: '♥', font: 'Verdana', style: '', weight: '400' }
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 12,
        random: true,
        anim: { enable: true, speed: 1.5, size_min: 4, sync: false }
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 1.0,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}
