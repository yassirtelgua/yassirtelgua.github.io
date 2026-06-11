const machines = document.querySelectorAll(".machine");

window.addEventListener("scroll", () => {
  machines.forEach(machine => {
    const rect = machine.parentElement.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transform = "translateX(120vw)";
      machine.style.transition = "transform 2s linear";
    }
  });
});
