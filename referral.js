window.loadReferralPage = function () {
  const uid = localStorage.getItem("userUID") || "GUEST";
  document.getElementById("refCode").textContent = uid;

  // Placeholder: Replace with real Firebase fetch logic
  if (uid !== "GUEST") {
    document.getElementById("refCount").textContent = "12"; // example
    document.getElementById("refEarnings").textContent = "24"; // ₹2 per referral
  } else {
    document.getElementById("refCount").textContent = "0";
    document.getElementById("refEarnings").textContent = "0";
  }
};

window.copyCode = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const code = document.getElementById("refCode").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Referral code copied!");
  }).catch(() => {
    alert("Failed to copy.");
  });
};
