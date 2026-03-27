// ==========================================
// ROTATING TEXT IN HERO
// ==========================================
const words = [
  "Full-Stack Developer",
  "Interactive Web Apps",
  "AI-Enhanced Workflow",
];
let wordIndex = 0;
const rotatingWord = document.querySelector(".rotating-word");

if (rotatingWord) {
  function rotateWord() {
    rotatingWord.style.opacity = "0";

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatingWord.textContent = words[wordIndex];
      rotatingWord.style.opacity = "1";
    }, 500);
  }

  // Set initial word
  rotatingWord.textContent = words[0];

  // Rotate every 3 seconds
  setInterval(rotateWord, 3000);
}

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;

  requestAnimationFrame(animateOutline);
}

animateOutline();

// Cursor hover effects
const interactiveElements = document.querySelectorAll(
  "a, button, .project__card, .skills__card",
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorDot.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  el.addEventListener("mouseleave", () => {
    cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

// ==========================================
// PARTICLE BACKGROUND
// ==========================================
function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 10;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${posX}%;
      top: ${posY}%;
      animation: float-particle ${duration}s ease-in-out ${delay}s infinite;
      pointer-events: none;
    `;

    container.appendChild(particle);
  }

  // Add particle animation to CSS
  if (!document.getElementById("particle-styles")) {
    const style = document.createElement("style");
    style.id = "particle-styles";
    style.textContent = `
      @keyframes float-particle {
        0%, 100% {
          transform: translate(0, 0);
          opacity: 0;
        }
        10%, 90% {
          opacity: 1;
        }
        50% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

createParticles();

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// ==========================================
// PROJECT IMAGE CAROUSEL
// ==========================================
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".project__image");
  const dots = carousel.querySelectorAll("[data-carousel-dot]");
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");

  if (!slides.length) return;

  let currentIndex = 0;

  function renderSlide(index) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  }

  prevButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide(currentIndex);
  });

  nextButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide(currentIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      currentIndex = dotIndex;
      renderSlide(currentIndex);
    });
  });

  renderSlide(currentIndex);
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// ==========================================
// THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", currentTheme);

// Update icon based on current theme
function updateThemeIcon() {
  const theme = html.getAttribute("data-theme");
  const icon = themeToggle.querySelector("i");

  if (theme === "light") {
    icon.className = "fas fa-moon";
  } else {
    icon.className = "fas fa-sun";
  }
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon();
});

// ==========================================
// SMOOTH SCROLL WITH OFFSET
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==========================================
// PROJECT CARD 3D TILT EFFECT
// ==========================================
const projectCards = document.querySelectorAll(".skills__card, .about__card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// ==========================================
// PARALLAX EFFECT ON SCROLL
// ==========================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".gradient-orb");

  parallaxElements.forEach((el, index) => {
    const speed = 0.5 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ==========================================
// TYPING EFFECT FOR HERO TITLE (Optional)
// ==========================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Uncomment to enable typing effect:
// const heroTitle = document.querySelector('.hero__title');
// if (heroTitle) {
//   const originalText = heroTitle.textContent;
//   typeWriter(heroTitle, originalText, 80);
// }

// ==========================================
// LOADING ANIMATION
// ==========================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("active");
      }
    });
  }, 100);
});

// ==========================================
// SCROLL PROGRESS INDICATOR (Optional)
// ==========================================
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    z-index: 9999;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s ease-out;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = window.pageYOffset / windowHeight;
    progressBar.style.transform = `scaleX(${scrolled})`;
    progressBar.style.width = "100%";
  });
}

createScrollProgress();

// ==========================================
// STATS COUNTER ANIMATION (Optional - for future use)
// ==========================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);

    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log(
  "%c👋 Hey there!",
  "font-size: 20px; font-weight: bold; color: #6366f1;",
);
console.log(
  "%cLooking at the code? I like your style! Let's connect.",
  "font-size: 14px; color: #8b5cf6;",
);
console.log(
  "%c🚀 Built with JS, CSS, and lots of ☕",
  "font-size: 12px; color: #cbd5e1;",
);
