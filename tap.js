let coinCount = 0;
let mode = localStorage.getItem("mode") || "guest";

const coinDisplay = document.getElementById("coinCount");
const tapIcon = document.getElementById("tapIcon");
const tapSound = document.getElementById("tapSound");

// Load existing coin count
function initTapPage() {
  const storedCoins = localStorage.getItem("coins");
  coinCount = storedCoins ? parseInt(storedCoins) : 0;
  coinDisplay.textContent = coinCount;
}

// Handle Tap
function handleTap() {
  coinCount += 1;
  coinDisplay.textContent = coinCount;
  localStorage.setItem("coins", coinCount);

  // Icon shrink animation
  tapIcon.src = "assets/bitcoin_tap_icon.png";
  setTimeout(() => {
    tapIcon.src = "assets/bitcoin_idle_icon.png";
  }, 150);

  // Play sound
  tapSound.play().catch(() => {});
}

// Navigate to dashboard
function goToDashboard() {
  window.location.href = "dashboard.html";
}

// Auto interstitial ad trigger (every 2 mins)
setInterval(() => {
  console.log("Trigger interstitial ad (Monetag handles this in sw.js)");
  // No need to add ad code here — sw.js does it
}, 120000); // every 2 minutes
