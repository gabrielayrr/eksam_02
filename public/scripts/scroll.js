document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition <= windowHeight * 0.8) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
