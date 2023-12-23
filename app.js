// const menuMb = document.querySelector(".menu-mb-nav i");
// let navLinks = document.querySelector("#navbar .nav-links")
let x = document.querySelector("#navbar .nav-links");


// Function to toggle the bar
function toggleNav() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Function to toggle the plus hamburger into close
function toggleIcon(x) {
  x.classList.toggle("fa-xmark");
}
