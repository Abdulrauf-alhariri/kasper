let toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");

  if (toggleMenu.classList.contains("active")) {
    // Changing the menu icon to show that it's open now
    toggleMenu.classList.remove("fas", "fa-bars");
    toggleMenu.classList.add("fa-solid", "fa-xmark");
  } else {
    // Changing the menu icon to show that it's close now
    toggleMenu.classList.remove("fa-solid", "fa-xmark");
    toggleMenu.classList.add("fas", "fa-bars");
  }
});
