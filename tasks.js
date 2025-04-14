// Firebase check (if using Firebase login)
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

// Redirect if not logged in (optional double safety)
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Load coins when page loads
window.loadTasksPage = function () {
  const coins = parseInt(localStorage.getItem("coins")) || 0;
  document.getElementById("coinDisplay").textContent = coins;
};

// Simulated Ad Watch + Reward
window.watchAdAndReward = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const button = document.getElementById("watchAdBtn");
  button.disabled = true;
  button.textContent = "Ad playing...";

  // Simulate 15 sec ad watching
  setTimeout(() => {
    let coins = parseInt(localStorage.getItem("coins")) || 0;
    coins += 500;

    localStorage.setItem("coins", coins);
    document.getElementById("coinDisplay").textContent = coins;

    button.textContent = "Watch Ad & Earn 500 Coins";
    button.disabled = false;

    alert("Ad completed! You earned 500 coins.");
  }, 15000); // 15 seconds
};
