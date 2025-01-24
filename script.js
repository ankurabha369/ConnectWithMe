// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Make the container visible with a scale-in effect
  const container = document.querySelector(".container");
  container.classList.add("visible");

  // Add event listeners to social links for bounce effect
  const socialLinks = document.querySelectorAll(".social-links div");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.2)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
});
