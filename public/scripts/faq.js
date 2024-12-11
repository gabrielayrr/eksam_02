document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    const toggle = question.querySelector(".faq-toggle");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the button click from triggering

      const answer = question.nextElementSibling;

      // Toggle the visibility of the answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });

    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isExpanded = answer.style.maxHeight;

      // Toggle the visibility of the answer
      if (isExpanded) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
