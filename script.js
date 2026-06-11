const machines = document.querySelectorAll(".machine");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  // MACHINE ANIMATION
  machines.forEach(machine => {
    const parent = machine.parentElement;
    const rect = parent.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transform = "translateX(120vw)";
    } else {
      machine.style.transform = "translateX(0px)";
    }
  });

  // SECTION ANIMATION
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });

});
``
