// Firebase Auth protection (in case HTML check is skipped)
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Send support message
function sendSupport() {
  const sound = new Audio("assets/sound.mp3");
  sound.play().catch(() => {});

  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!subject || !message) {
    alert("Please fill out both Subject and Message.");
    return;
  }

  // Optional: escape HTML tags (basic)
  const safeSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Get current user
  const userEmail = localStorage.getItem("userEmail") || "Guest";

  // Placeholder: send to Firebase DB / email API later
  console.log("Support Request Submitted:", {
    subject: safeSubject,
    message: safeMessage,
    user: userEmail
  });

  alert("Your message has been sent to support. We'll respond shortly.");

  // Clear form
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
