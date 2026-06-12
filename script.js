document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const logo = document.querySelector(".logo-text");
  const hero = document.querySelector(".hero");

  function handleScroll() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });

    if (logo && hero) {
      const heroRect = hero.getBoundingClientRect();

      if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        logo.classList.add("active");
      } else {
        logo.classList.remove("active");
      }
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  if (logo) {
    setInterval(() => {
      logo.classList.add("impact");

      setTimeout(() => {
        logo.classList.remove("impact");
      }, 300);
    }, 5000);
  }
});
