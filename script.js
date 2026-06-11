const machines = document.querySelectorAll(".machine");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  // MACHINE ANIMATION
  machines.forEach((machine, index) => {
    const parent = machine.parentElement;
    const rect = parent.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transition = `transform ${5}s linear`;
      machine.style.transform = "translateX(120vw)";
    } else {
      machine.style.transform = "translateX(0px)";
    }
    setInterval(() => {
  const logo = document.querySelector(".logo-text");
  logo.classList.add("impact");
  setTimeout(() => {
    logo.classList.remove("impact");
  }, 300);

}, 5000);
  });

  // SECTION ANIMATION
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });

const logo = document.querySelector(".logo-text");

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");
  const rect = hero.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    logo.classList.add("active");
  } else {
    logo.classList.remove("active");
  }

});
