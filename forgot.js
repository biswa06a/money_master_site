// forgot.js
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

window.sendReset = function () {
  const email = document.getElementById("resetEmail").value.trim();
  const sound = new Audio("assets/sound.mp3");
  sound.play();

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent. Check your inbox.");
    })
    .catch((error) => {
      console.error("Reset error:", error);
      alert("Failed to send reset email: " + error.message);
    });
};
