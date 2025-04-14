// login.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

window.signInWithGoogle = function () {
  const sound = new Audio("assets/sound.mp3");
  sound.play();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("mode", "login");
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userName", user.displayName);
      localStorage.setItem("userUID", user.uid);
      alert("Login successful!");
      window.location.href = "tap.html";
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Try again.");
    });
};
