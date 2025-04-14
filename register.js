// register.js
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

window.registerUser = function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const sound = new Audio("assets/sound.mp3");
  sound.play();

  if (!name || !email || !password || !confirm) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      updateProfile(user, { displayName: name }).then(() => {
        localStorage.setItem("mode", "login");
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userUID", user.uid);

        alert("Account created successfully!");
        window.location.href = "tap.html";
      });
    })
    .catch((error) => {
      console.error("Registration error:", error);
      alert("Failed to register: " + error.message);
    });
};
