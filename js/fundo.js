particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: false, value_area: 789.1476416322727 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 9 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 204.43503776035416,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 288.6141709557941,
        color: "#ffffff",
        opacity: 0.4,
        width: 0
      },
      move: {
        enable: true,
        speed: 3.4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 400.8530152163807,
          rotateY: 2645.6299004281127
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 243.62316369040352, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 341.0724291665649, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: false
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  