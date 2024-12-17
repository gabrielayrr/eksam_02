document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    const toggle = question.querySelector(".faq-toggle");

    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isExpanded = answer.style.maxHeight;

      console.log("Clicked:", question.textContent); // Debugging

      // Toggle the visibility of the answer
      if (isExpanded) {
        answer.style.maxHeight = null;
        toggle.textContent = "+"; // Change to "+"
        console.log("Collapsed:", answer);
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        toggle.textContent = "-"; // Change to "-"
        console.log("Expanded:", answer);
      }
    });
  });
});
