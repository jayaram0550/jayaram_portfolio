const typed = new Typed(".text", {
    strings: ["Frontend Developer", "MERN Stack Developer", "Computer Science Student"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

/* Toggle menu */
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/* Close menu when link is clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* Fix menu on screen resize */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove("active");
    }
});
