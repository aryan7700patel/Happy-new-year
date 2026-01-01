// Music
let played = false;
function playMusic() {
  if (!played) {
    document.getElementById("bgMusic").play();
    played = true;
  }
}

// Popups
function showMessage(id) {
  document.getElementById(id).style.display = "block";
}

function closeMessage(id) {
  document.getElementById(id).style.display = "none";
}

// Countdown
const newYear = new Date("January 1, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = newYear - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// Surprise
function unlockSurprise() {
  document.getElementById("surpriseText").innerText =
    "Surprise 🥺❤️ I want to start every year, every dream, every life with you.";
}