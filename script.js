
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveButton); // desktop
noBtn.addEventListener("touchstart", moveButton); // mobile

function moveButton() {
  const padding = 10;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed"; // whole screen
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transition = "left 0.05s linear, top 0.05s linear";
}


yesBtn.addEventListener("click", () => {
  message.textContent = "Yayyy 😍 I knew it! I love you too ❤️";
});
