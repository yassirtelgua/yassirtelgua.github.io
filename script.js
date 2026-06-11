const machines = document.querySelectorAll(".machine");
const sections = document.querySelectorAll(".section");
const logo = document.querySelector(".logo-text");
const hero = document.querySelector(".hero");

/* SCROLL EVENT */
window.addEventListener("scroll", () => {

  /* MACHINE ANIMATION */
  machines.forEach((machine) => {
    const parent = machine.parentElement;
    const rect = parent.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transform = "translateX(120vw)";
    } else {
      machine.style.transform = "translateX(0)";
    }
  });

  /* SECTION APPEAR */
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });

  /* LOGO ACTIVE STATE */
  const heroRect = hero.getBoundingClientRect();

  if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
    logo.classList.add("active");
  } else {
    logo.classList.remove("active");
  }

});


/* IMPACT EFFECT (HOOK TIMING SYNC) */
setInterval(() => {
  logo.classList.add("impact");

  setTimeout(() => {
    logo.classList.remove("impact");
  }, 300);

}, 5000);
