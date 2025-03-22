/* script.js */

// Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 75%)`,
      tilt: Math.random() * 10 - 5,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.d;
    p.x += Math.sin(p.tilt);
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();

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
