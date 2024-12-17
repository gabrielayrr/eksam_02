function toggleMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active"); // Toggles the active class
  const burger = document.querySelector(".burger-menu");
  burger.classList.toggle("active"); // Toggles animation for the burger menu
}
