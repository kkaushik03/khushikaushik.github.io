// ── CURSOR GLOW ──
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ── TYPING ANIMATION ──
const roles = [
  "full stack developer.",
  "AI engineer.",
  "ML researcher.",
  "UCSD grad student.",
  "data engineer."
];
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const el = document.getElementById('typed-role');
  if (!el) return;
  const word = roles[roleIndex];

  if (!deleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 55 : 100);
}
type();

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── NAVBAR ACTIVE STATE ──
function updateActiveNav() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('#navbar a');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`#navbar a[href="#${section.id}"]`);
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}

document.querySelector('.snap-container').addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
window.addEventListener('resize', updateActiveNav);

// ── PARTICLES.JS CONFIG ──
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: ["#00bfff", "#ff3c38"] },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 1, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.3,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 150, duration: 0.4 },
      grab: { distance: 300, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// ── PARTICLES INTERACTION MODE PER SECTION ──
function getCurrentSection() {
  const sections = document.querySelectorAll('.section');
  for (let section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) return section.id;
  }
  return null;
}

function setInteractionModes(sectionId) {
  const pJS = window.pJSDom[0].pJS;
  if (sectionId === "section1") {
    pJS.interactivity.events.onhover.mode = 'repulse';
    pJS.interactivity.events.onclick.mode = 'grab';
  } else {
    pJS.interactivity.events.onhover.mode = 'bubble';
    pJS.interactivity.events.onclick.mode = 'repulse';
  }
}

document.getElementById('particles-js').addEventListener('mousemove', function () {
  const current = getCurrentSection();
  setInteractionModes(current);
});

document.getElementById('particles-js').addEventListener('click', function (e) {
  const current = getCurrentSection();
  setInteractionModes(current);
  const pJS = window.pJSDom[0].pJS;
  if (current === "section1") {
    pJS.interactivity.mouse.pos_x = e.clientX;
    pJS.interactivity.mouse.pos_y = e.clientY;
    pJS.interactivity.status = "mousemove";
    setTimeout(() => {
      pJS.interactivity.mouse.pos_x = null;
      pJS.interactivity.mouse.pos_y = null;
      pJS.interactivity.status = "mouseleave";
    }, 1500);
  }
});
