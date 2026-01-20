// Improved mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("bg-black");
    nav.classList.remove("bg-black/80");
  } else {
    nav.classList.add("bg-black/80");
    nav.classList.remove("bg-black");
  }
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
});

// Loading Screen - hide immediately when script loads
(function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
})();

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe elements for animations
document
  .querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .zoom-in")
  .forEach((el) => {
    observer.observe(el);
  });

// Timeline Animation
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (entry.target.classList.contains("timeline-left")) {
            entry.target.classList.add("animate-left");
          } else if (entry.target.classList.contains("timeline-right")) {
            entry.target.classList.add("animate-right");
          }
        }, index * 200);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  timelineObserver.observe(item);
});

// Enhanced Hover Effects
document.querySelectorAll(".group").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
    this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "";
  });
});

// Skill Icons Animation
document.querySelectorAll(".skill-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(5deg)";
  });
  icon.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});

// Parallax Effect for Background
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  const parallaxElements = document.querySelectorAll(".parallax-bg");
  parallaxElements.forEach((el) => {
    el.style.transform = `translateY(${rate}px)`;
  });
});

// Enhanced Button Interactions
document.querySelectorAll(".btn-hover").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });
  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Form Input Enhancements
document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("focus", function () {
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 10px 25px rgba(120, 119, 198, 0.2)";
  });
  input.addEventListener("blur", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "";
  });
});

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Typing Effect for Hero Text
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect after loading
window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.5s ease-out";
    setTimeout(function () {
      loadingScreen.style.display = "none";
      // Start typing effect
      const heroTitle = document.querySelector("h1");
      if (heroTitle) {
        typeWriter(heroTitle, "I am Fardhan Maulana", 150);
      }
    }, 500);
  }, 1000);
});

// Scroll Progress Indicator
const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
scrollProgress.innerHTML = '<div class="scroll-progress-bar"></div>';
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector(".scroll-progress-bar").style.width =
    scrollPercent + "%";
});

// Magnetic Buttons - Disabled to prevent continuous cursor movement
/*
document.querySelectorAll(".glow-effect").forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translate(0, 0)";
  });
});
*/

// Text Reveal Animation
function revealText() {
  const textElements = document.querySelectorAll(".reveal-text");
  textElements.forEach((el) => {
    const text = el.textContent;
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="reveal-char">${char}</span>`)
      .join("");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chars = entry.target.querySelectorAll(".reveal-char");
          chars.forEach((char, index) => {
            setTimeout(() => {
              char.style.opacity = "1";
              char.style.transform = "translateY(0)";
            }, index * 50);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  textElements.forEach((el) => observer.observe(el));
}

// Initialize text reveal
revealText();

// Particle Effect on Hover
function createParticles(e) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000);
}

document.querySelectorAll(".skill-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function (e) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createParticles(e), i * 100);
    }
  });
});

// Enhanced Form Validation
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() !== "") {
      this.classList.add("has-content");
    } else {
      this.classList.remove("has-content");
    }
  });
});

// ===== PHASE 2: ADVANCED ANIMATIONS & EFFECTS =====

// Particle System Background
function createParticleSystem() {
  const canvas = document.createElement("canvas");
  canvas.id = "particle-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "-1";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
    };
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.min(
      50,
      Math.floor((canvas.width * canvas.height) / 15000)
    );
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
  }

  function updateParticles() {
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function animate() {
    updateParticles();
    drawParticles();
    animationId = requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });

  return {
    destroy: () => {
      cancelAnimationFrame(animationId);
      canvas.remove();
    },
  };
}

// Advanced Text Animation (Word by Word Reveal)
function createWordRevealAnimation(element, text, delay = 100) {
  const words = text.split(" ");
  element.innerHTML = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    span.style.display = "inline-block";
    span.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
      index * delay
    }ms`;
    element.appendChild(span);

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, 100);
  });
}

// Morphing Shapes Animation
function createMorphingShapes() {
  const shapes = document.querySelectorAll(".morphing-shape");
  shapes.forEach((shape) => {
    shape.style.animation = "morph 8s ease-in-out infinite";
  });
}

// Scroll-triggered Morphing Shapes
function createScrollMorphingShapes() {
  const shapes = document.querySelectorAll(".scroll-morph");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("morphing");
        } else {
          entry.target.classList.remove("morphing");
        }
      });
    },
    { threshold: 0.3 }
  );

  shapes.forEach((shape) => observer.observe(shape));
}

// Advanced Scroll Indicators with Progress Rings
function createProgressRings() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");

  sections.forEach((section, index) => {
    const ring = document.createElement("div");
    ring.className = "progress-ring";
    ring.innerHTML = `
      <svg width="40" height="40">
        <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none"/>
        <circle cx="20" cy="20" r="16" stroke="var(--primary)" stroke-width="2" fill="none"
                stroke-dasharray="100" stroke-dashoffset="100"
                style="transition: stroke-dashoffset 0.3s ease;"/>
      </svg>
    `;
    nav.appendChild(ring);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progress = entry.intersectionRatio * 100;
          ring.querySelector("circle:last-child").style.strokeDashoffset =
            100 - progress;
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observer.observe(section);
  });
}

// ===== PHASE 3: INTERACTIVE FEATURES & MICRO-INTERACTIONS =====

// Magnetic Cursor Effect
function createMagneticEffect() {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * 0.1}px, ${
        y * 0.1
      }px) scale(1.05)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0) scale(1)";
    });
  });
}

// Enhanced Button Interactions
function enhanceButtonInteractions() {
  // Ripple effect for professional buttons
  document.querySelectorAll(".btn-ripple-professional").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.3)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.left = e.offsetX - 10 + "px";
      ripple.style.top = e.offsetY - 10 + "px";
      ripple.style.width = "20px";
      ripple.style.height = "20px";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Morphing button effects
  document.querySelectorAll(".btn-morph").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
      this.style.boxShadow = "0 10px 25px rgba(99, 102, 241, 0.3)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "";
    });
  });
}

// Interactive Skill Icons
function createInteractiveSkillIcons() {
  document.querySelectorAll(".skill-icon-interactive").forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2) rotate(5deg)";
      this.style.color = "var(--primary)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
      this.style.color = "";
    });

    // Add click feedback
    icon.addEventListener("click", function () {
      this.classList.add("success-bounce");
      setTimeout(() => {
        this.classList.remove("success-bounce");
      }, 600);
    });
  });
}

// Interactive Timeline Items
function createInteractiveTimeline() {
  document.querySelectorAll(".timeline-item-interactive").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.02)";
      this.style.background = "rgba(255, 255, 255, 0.05)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
      this.style.background = "";
    });
  });
}

// Advanced Hover Effects
function createAdvancedHoverEffects() {
  // Lift effect
  document.querySelectorAll(".hover-lift").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) rotateX(5deg) rotateY(5deg)";
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
      this.style.boxShadow = "";
    });
  });

  // Glow effect
  document.querySelectorAll(".hover-glow").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

// Card Flip Animations
function createCardFlipAnimations() {
  document.querySelectorAll(".card-flip").forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  });
}

// Micro-interaction Feedback
function createMicroInteractions() {
  document.querySelectorAll(".interaction-feedback").forEach((element) => {
    element.addEventListener("click", function () {
      // Add visual feedback
      this.classList.add("loading-pulse");
      setTimeout(() => {
        this.classList.remove("loading-pulse");
        this.classList.add("success-bounce");
        setTimeout(() => {
          this.classList.remove("success-bounce");
        }, 600);
      }, 300);
    });
  });
}

// Focus Transitions
function createFocusTransitions() {
  document.querySelectorAll(".focus-transition").forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.transform = "scale(1.02)";
      this.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.2)";
    });

    element.addEventListener("blur", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "";
    });
  });
}

// Enhanced Form Validation with Micro-interactions
function enhanceFormValidation() {
  document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("has-content");
      } else {
        this.classList.remove("has-content");
      }
    });

    input.addEventListener("focus", function () {
      this.classList.add("focus-transition");
    });

    input.addEventListener("blur", function () {
      this.classList.remove("focus-transition");
    });
  });
}

// Initialize Phase 2 Features
document.addEventListener("DOMContentLoaded", () => {
  // Initialize particle system - commented out to prevent loading issues
  // const particleSystem = createParticleSystem();

  // Initialize morphing shapes
  createMorphingShapes();
  createScrollMorphingShapes();

  // Initialize progress rings - commented out to prevent loading issues
  // createProgressRings();

  // Enhanced text animations
  const heroTitle = document.querySelector("h1");
  if (heroTitle && heroTitle.textContent) {
    createWordRevealAnimation(heroTitle, heroTitle.textContent, 150);
  }

  // ===== PHASE 3 INITIALIZATIONS =====
  // createMagneticEffect(); // Disabled to prevent continuous cursor movement
  enhanceButtonInteractions();
  createInteractiveSkillIcons();
  createInteractiveTimeline();
  createAdvancedHoverEffects();
  createCardFlipAnimations();
  createMicroInteractions();
  createFocusTransitions();
  enhanceFormValidation();
});

// Fallback to hide loading screen after 3 seconds if load event fails
setTimeout(() => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen && loadingScreen.style.display !== "none") {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }
}, 3000);
