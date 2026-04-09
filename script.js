const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('open');
});


// Typing Text Effect
const typingText = document.querySelector('.typing-text');
const roles = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex--);
    }

    if (charIndex === currentRole.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// About Section fade-in on scroll
const aboutSection = document.querySelector('.about');

function revealOnScroll() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        aboutSection.classList.add('show');
    }
}

window.addEventListener('scroll', revealOnScroll);


// Animate Skill Bars & Fade-in on scroll
const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

function fillSkillBars() {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        skillSection.classList.add('show');

        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.progress;
        });
    }
}

window.addEventListener('scroll', fillSkillBars);


// Featured Projects fade-in on scroll
const projectSection = document.querySelector('.projects');

function showProjects() {
    const sectionPos = projectSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        projectSection.classList.add('show');
    }
}

window.addEventListener('scroll', showProjects);

// Contact fade-in effect
const contactSection = document.querySelector('.contact');

function showContact() {
    const sectionPos = contactSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        contactSection.classList.add('show');
    }
}

window.addEventListener('scroll', showContact);


// Contact Form Submit Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

// ===== AUTO UPDATE FOOTER YEAR =====
// document.addEventListener("DOMContentLoaded", () => {
//     const yearSpan = document.querySelector(".footer-copy");
//     const currentYear = new Date().getFullYear();
  
//     yearSpan.textContent = `© ${currentYear} Nisha | All Rights Reserved.`;
//   });
  