document.addEventListener("DOMContentLoaded", () => {
  const machines = document.querySelectorAll(".machine");
  const sections = document.querySelectorAll(".section");
  const logo = document.querySelector(".logo-text");
  const hero = document.querySelector(".hero");

  function handleScroll() {
    // MACHINE ANIMATION
    machines.forEach((machine) => {
      const parent = machine.parentElement;
      const rect = parent.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        machine.style.transform = "translateX(130vw)";
      } else {
        machine.style.transform = "translateX(0)";
      }
    });

    // SECTION VISIBILITY
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });

    // LOGO ACTIVE STATE
    if (logo && hero) {
      const heroRect = hero.getBoundingClientRect();

      if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        logo.classList.add("active");
      } else {
        logo.classList.remove("active");
      }
    }
  }

  // Run once when page loads
  handleScroll();

  // Run on scroll
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Small impact effect synced with crane movement
  if (logo) {
    setInterval(() => {
      logo.classList.add("impact");

      setTimeout(() => {
        logo.classList.remove("impact");
      }, 300);
    }, 5000);
  }
});
