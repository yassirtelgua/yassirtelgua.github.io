const machines = document.querySelectorAll(".machine");

function animateMachines() {
  machines.forEach(machine => {
    const parent = machine.parentElement;
    const rect = parent.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      machine.style.transform = "translateX(120vw)";
    }
  });
}

window.addEventListener("scroll", animateMachines);
