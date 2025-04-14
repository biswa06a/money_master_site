// dashboard.js

function initDashboard() {
  // Optional: preload something or fetch user data later
}

function playClickSound() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});
}

function goTo(page) {
  playClickSound();
  window.location.href = page;
}

function goBack() {
  playClickSound();
  window.location.href = "tap.html";
}

function logoutUser() {
  playClickSound();
  localStorage.clear();
  alert("You have been logged out.");
  window.location.href = "index.html";
}
