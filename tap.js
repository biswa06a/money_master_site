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

// This function is triggered from body click in tap.html (already wrapped)
function handleTap() {
  coinCount += 1;
  coinDisplay.textContent = coinCount;
  localStorage.setItem("coins", coinCount);

  // Animate bitcoin icon if needed
  if (tapIcon) {
    tapIcon.src = "assets/bitcoin_tap_icon.png";
    setTimeout(() => {
      tapIcon.src = "assets/bitcoin_idle_icon.png";
    }, 150);
  }

  // Play tap sound
  if (tapSound) {
    tapSound.currentTime = 0;
    tapSound.play().catch(() => {});
  }
}

// Dashboard redirection
function goToDashboard() {
  window.location.href = "dashboard.html";
}

// Trigger interstitial ad logic (handled in sw.js or external)
setInterval(() => {
  console.log("⏱ Triggering interstitial ad...");
  // sw.js or customAds.js handles the actual ad call
}, 120000); // every 2 minutes
