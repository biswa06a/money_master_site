// index.js

function goToLogin() {
  playClickSound();
  window.location.href = "login.html";
}

function continueAsGuest() {
  playClickSound();
  localStorage.setItem("mode", "guest");
  window.location.href = "tap.html";
}

function goToRegister() {
  playClickSound();
  window.location.href = "register.html";
}

function goToForgot() {
  playClickSound();
  window.location.href = "forgot.html";
}

function playClickSound() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch((e) => console.warn("Sound error:", e));
}
