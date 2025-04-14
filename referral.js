window.loadReferralPage = function () {
  // 🔐 Check login first
  const uid = localStorage.getItem("userUID");

  if (!uid) {
    // Not logged in, redirect to login
    window.location.href = "login.html";
    return;
  }

  // ✅ Show referral code
  document.getElementById("refCode").textContent = uid;

  // 🔁 Load referral info (placeholder logic)
  if (uid !== "GUEST") {
    document.getElementById("refCount").textContent = "12"; // example value
    document.getElementById("refEarnings").textContent = "24"; // ₹2 x 12
  } else {
    document.getElementById("refCount").textContent = "0";
    document.getElementById("refEarnings").textContent = "0";
  }
};

window.copyCode = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {}); // fail-safe

  const code = document.getElementById("refCode").textContent;

  if (!navigator.clipboard) {
    alert("Clipboard not supported");
    return;
  }

  navigator.clipboard.writeText(code).then(() => {
    alert("Referral code copied!");
  }).catch(() => {
    alert("Failed to copy code.");
  });
};
