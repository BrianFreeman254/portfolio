// Open Email Function
function hireMe() {
  window.location.href = "mailto:brianwachiye2004@gmail.com";
}

// Dynamic Background Color on Load
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.style.background = "linear-gradient(to bottom right, #e6f7ff, #f2f2f2)";
});

// Button Hover Effect
const hireButton = document.querySelector(".hire-button");

hireButton.addEventListener("mousemove", (e) => {
  const rect = hireButton.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  hireButton.style.background = `radial-gradient(circle at ${x}px ${y}px, #00b4d8, #007acc)`;
});

hireButton.addEventListener("mouseleave", () => {
  hireButton.style.background = "#007acc";
});
