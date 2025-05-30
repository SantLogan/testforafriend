let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Evita rolagem no fundo
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.body.style.overflow = "auto"; // Permite rolagem no fundo ao fechar o modal
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
