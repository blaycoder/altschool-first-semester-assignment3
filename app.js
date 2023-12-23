let menuBtn = document.querySelector("#navbar .nav-links");


// Function to toggle the bar
function toggleNav() {
  if (menuBtn.style.display === "block") {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
}

// Function to toggle the plus hamburger into close
function toggleIcon(menuBtn) {
  menuBtn.classList.toggle("fa-xmark");
}
