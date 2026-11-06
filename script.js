// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

// Contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("response").textContent =
        "Thank you, " + name + "! Your demo form is working.";

    contactForm.reset();

});

// Dynamic copyright year

document.querySelector(".copyright").innerHTML =
    "© " + new Date().getFullYear() +
    " CloudLaunch. All Rights Reserved.";