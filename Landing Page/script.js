const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle("open");
  overlay.classList.toggle("open");
  hamburger.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Fecha ao clicar em qualquer link do menu mobile
document
  .querySelectorAll(".mobile-menu a, .btn-cadastrar-mobile")
  .forEach((el) => {
    el.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) toggleMenu();
    });
  });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".card, .card-plano").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  document.querySelector("header").style.backgroundColor =
    window.scrollY > 50 ? "rgba(15, 15, 15, 0.98)" : "rgba(15, 15, 15, 0.92)";
});
