const machines = document.querySelectorAll(".machine");

window.addEventListener("scroll", () => {
  machines.forEach(machine => {
    const parent = machine.parentElement;
    const rect = parent.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transform = "translateX(120vw)";
    } else {
      machine.style.transform = "translateX(0px)";
    }
  });
});
