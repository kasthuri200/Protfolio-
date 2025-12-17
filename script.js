document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Display Current Year
    =========================== */
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ==========================
       Contact Form Reset Button
    =========================== */
    const contactForm = document.getElementById("contact-form");
    const resetBtn = document.getElementById("reset-btn");

    if (resetBtn && contactForm) {
        resetBtn.addEventListener("click", () => {
            contactForm.reset();
        });
    }

    /* ==========================
       Email Validation
    =========================== */
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const email = contactForm.querySelector("input[type='email']").value;

            if (!email.includes("@") || !email.includes(".")) {
                e.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    /* ==========================
       Smooth Scroll for Nav Links
    =========================== */
    document.querySelectorAll('.navlinks a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            // Hide navlinks on mobile after clicking
            const navLinks = document.querySelector(".navlinks");
            if (window.innerWidth <= 900 && navLinks) {
                navLinks.style.display = "none";
            }
        });
    });

    /* ==========================
       Scroll Reveal Animations
    =========================== */
    const revealElements = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom"
    );

    if ("IntersectionObserver" in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add("visible"));
    }

    /* ==========================
       Avatar Animation on Load
    =========================== */
    const avatar = document.querySelector(".avatar");
    if (avatar) {
        avatar.classList.add("animate");
        setTimeout(() => {
            avatar.classList.remove("animate");
        }, 8000);
    }

    /* ==========================
       Mobile Navigation Toggle
    =========================== */
    const mobileBtn = document.getElementById("mobileNavBtn");
    const navlinks = document.querySelector(".navlinks");

    if (mobileBtn && navlinks) {
        mobileBtn.addEventListener("click", () => {
            const isOpen = navlinks.style.display === "flex";

            if (isOpen) {
                navlinks.style.display = "none";
            } else {
                navlinks.style.display = "flex";
                navlinks.style.flexDirection = "column";
                navlinks.style.gap = "8px";
                navlinks.style.alignItems = "center";
            }
        });
    }
    /* ==========================
   Typing Animation
========================== */

const roles = [
  "Frontend Developer",
  "IT Student",
];

let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (!typingText) return;

  typingText.textContent = roles[roleIndex].substring(0, charIndex);
  charIndex++;

  if (charIndex <= roles[roleIndex].length) {
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1200);
  }
}

function deleteEffect() {
  typingText.textContent = roles[roleIndex].substring(0, charIndex);
  charIndex--;

  if (charIndex >= 0) {
    setTimeout(deleteEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();
/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / pageHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
/* Dark/Light Mode Toggle */
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});



});