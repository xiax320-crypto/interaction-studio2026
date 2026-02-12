const mask = document.querySelector(".mask-layer");
const topbar = document.querySelector(".topbar");

let maskEnabled = true;

document.addEventListener("mousemove", (e) => {
  if (!maskEnabled) return;

  const x = e.clientX;
  const y = e.clientY;

  const gradient = `
    radial-gradient(
      circle 400px at ${x}px ${y}px,
      transparent 0%,
      transparent 40%,
      black 100%
    )
  `;

  mask.style.maskImage = gradient;
  mask.style.webkitMaskImage = gradient;
});
topbar.addEventListener("mouseenter", () => {
  maskEnabled = false;

  mask.style.maskImage = "none";
  mask.style.webkitMaskImage = "none";
});

topbar.addEventListener("mouseleave", () => {
  maskEnabled = true;
});

