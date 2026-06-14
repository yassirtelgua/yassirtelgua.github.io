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
      } , 300);
    }, 5000);
  }

  // --- ZOOM IN / OUT FOR CERTIFICATES ---
  const certificateCards = document.querySelectorAll(".certificate-card");
  const zoomModal = document.getElementById("zoomModal");
  const zoomTarget = zoomModal.querySelector(".zoom-dynamic-target");
  const zoomTitle = document.getElementById("zoomTitle");
  const zoomCloseBtn = document.querySelector(".zoom-close");

  certificateCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Klonen des Inhalts für eine verlustfreie Vorschau im Modal
      const originalPlaceholder = card.querySelector(".doc-placeholder");
      const clonedContent = originalPlaceholder.cloneNode(true);
      const titleText = card.querySelector("h3").innerText;

      zoomTarget.innerHTML = "";
      zoomTarget.appendChild(clonedContent);
      zoomTitle.innerText = titleText;

      // Modal sichtbar machen und Animation starten
      zoomModal.style.display = "flex";
      setTimeout(() => {
        zoomModal.classList.add("open");
      }, 10);
    });
  });

  function closeZoomModal() {
    zoomModal.classList.remove("open");
    // Warten auf das Ende der CSS-Transition vor dem Ausblenden
    setTimeout(() => {
      zoomModal.style.display = "none";
    }, 300);
  }

  // Schließen per Button
  if (zoomCloseBtn) {
    zoomCloseBtn.addEventListener("click", closeZoomModal);
  }

  // Schließen bei Klick außerhalb des Dokuments
  zoomModal.addEventListener("click", (e) => {
    if (e.target === zoomModal) {
      closeZoomModal();
    }
  });

  // Schließen mit der ESC-Taste
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && zoomModal.classList.contains("open")) {
      closeZoomModal();
    }
  });
});
