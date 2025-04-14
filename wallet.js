function loadWallet() {
  // Play load sound
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const coins = parseInt(localStorage.getItem("coins")) || 0;
  const rupees = (coins / 1000).toFixed(2);

  document.getElementById("coinDisplay").textContent = coins;
  document.getElementById("inrValue").textContent = rupees;
}
