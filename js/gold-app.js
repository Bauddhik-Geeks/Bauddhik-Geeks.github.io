particlesJS("gold-tech-bg", {
  particles: {
    number: { value: 20, density: { enable: false, value_area: 200 } },
    color: { value: "#ffffff" },
    shape: {
      type: "image",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "images/logo.png", width: 100, height: 100 },
    },
    opacity: {
      value: 0,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 28.05971106514665,
      random: true,
      anim: { enable: false, speed: 25, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
