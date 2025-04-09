function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0)";
  }
  
  function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
  }
  


const roles = ["Web Developer", "AWS Cloud Practitioner", "SQL User"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typeSpeed = 100;

const typewriterText = document.querySelector(".typewriter-text");

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    typewriterText.textContent = currentRole.substring(0, j--);
  } else {
    typewriterText.textContent = currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 500); // Pause before typing new
  } else {
    setTimeout(type, typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
