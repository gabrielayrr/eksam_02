console.log("Parallax.js is loaded");

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  console.log("Found elements to animate:", elements); // Check if elements are found

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  elements.forEach((el) => observer.observe(el));
});
