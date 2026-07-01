/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".about-left, .about-card, .edu-intro, .edu-panel, .experience-left, .exp-card, .skills-header, .skill-box, .cad-header, .cad-card, .section-top, .featured-project, .design-section, .contact-left, .contact-right",
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  function revealOnScroll() {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 80) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
/* ==========================================
   CURSOR GLOW
========================================== */

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
  cursorGlow.style.opacity = "1";
});

window.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});
/* ==========================================
   TRANSFORMER STYLE GEAR LOADER
========================================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1500);
});
