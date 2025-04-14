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

// -------------------------
// 🔧 New Functional Options
// -------------------------

function changeName() {
  const newName = document.getElementById("changeName").value.trim();
  if (!newName) return alert("Please enter a valid name");

  localStorage.setItem("userName", newName);
  document.getElementById("userName").value = newName;
  alert("Name updated locally.");
}

function changeEmail() {
  const newEmail = document.getElementById("changeEmail").value.trim();
  if (!newEmail || !newEmail.includes("@")) return alert("Enter valid email");

  const user = firebase.auth().currentUser;
  if (user) {
    user.updateEmail(newEmail)
      .then(() => {
        localStorage.setItem("userEmail", newEmail);
        document.getElementById("userEmail").value = newEmail;
        alert("Email updated successfully.");
      })
      .catch((error) => {
        alert("Error updating email: " + error.message);
      });
  } else {
    alert("You must be logged in to update your email.");
  }
}

function changePassword() {
  const newPass = document.getElementById("changePassword").value.trim();
  if (newPass.length < 6) return alert("Password must be at least 6 characters");

  const user = firebase.auth().currentUser;
  if (user) {
    user.updatePassword(newPass)
      .then(() => {
        alert("Password updated successfully.");
      })
      .catch((error) => {
        alert("Error updating password: " + error.message);
      });
  } else {
    alert("You must be logged in to update your password.");
  }
}
