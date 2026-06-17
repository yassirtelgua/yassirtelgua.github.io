document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const logo = document.querySelector(".logo-text");
  const hero = document.querySelector(".hero");

  // Theme-Umschalter Logik
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Prüfen, ob bereits ein Theme im Speicher hinterlegt ist
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeIcon) themeIcon.textContent = "☀️";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      // Icon wechseln und Zustand speichern
      if (document.body.classList.contains("dark-mode")) {
        if (themeIcon) themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        if (themeIcon) themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });
  }

  function handleScroll() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Fügt .show hinzu, wenn die Sektion im Viewport auftaucht
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
      } , 300);
    }, 5000);
  }
});
