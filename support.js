function sendSupport() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!subject || !message) {
    alert("Please fill out both Subject and Message.");
    return;
  }

  // Placeholder: Here you can add Firebase submission or email API
  console.log("Support Request:", {
    subject,
    message,
    user: localStorage.getItem("userEmail") || "Guest"
  });

  alert("Your message has been sent to support. We'll respond shortly.");

  // Clear form
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
