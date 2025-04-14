function loadSettings() {
  const name = localStorage.getItem("userName") || "Guest";
  const email = localStorage.getItem("userEmail") || "Not Logged In";
  const upi = localStorage.getItem("userUpi") || "";
  const notify = localStorage.getItem("userNotify") || "on";

  document.getElementById("userName").value = name;
  document.getElementById("userEmail").value = email;
  document.getElementById("userUpi").value = upi;
  document.getElementById("notifications").value = notify;
}

function saveSettings() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const upi = document.getElementById("userUpi").value.trim();
  const notify = document.getElementById("notifications").value;

  localStorage.setItem("userUpi", upi);
  localStorage.setItem("userNotify", notify);

  alert("Settings saved successfully!");
}
