/* script.js */

// Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();

// Surprise Button Functionality
document.getElementById("surprise-btn").addEventListener("click", function () {
  let message = document.getElementById("hidden-message");
  message.style.display = message.style.display === "none" ? "block" : "none";
});
